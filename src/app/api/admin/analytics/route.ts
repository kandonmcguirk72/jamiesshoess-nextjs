import { NextResponse } from 'next/server'

interface VercelAnalyticsResponse {
  summary?: {
    totalVisits?: { value: number }
    pageViews?: { value: number }
  }
  timeseries?: Array<{
    timestamp: number
    visitors?: number
    pageViews?: number
  }>
  topPages?: Array<{
    name: string
    pageViews?: number
    visits?: number
  }>
}

export async function GET() {
  try {
    const vercelToken = process.env.VERCEL_ACCESS_TOKEN
    const projectId = process.env.VERCEL_PROJECT_ID
    const teamId = process.env.VERCEL_TEAM_ID

    // Fallback mock data if credentials not configured
    if (!vercelToken || !projectId) {
      return NextResponse.json({
        totalVisits: 0,
        todayVisits: 0,
        topPages: [
          { page: '/', views: 0 },
          { page: '/about', views: 0 },
          { page: '/sell', views: 0 },
        ],
        note: 'Vercel API credentials not configured. To enable real analytics, set VERCEL_ACCESS_TOKEN and VERCEL_PROJECT_ID in your environment.',
      })
    }

    const headers = {
      Authorization: `Bearer ${vercelToken}`,
      'Content-Type': 'application/json',
    }

    // Fetch analytics data from Vercel API
    // Note: This is a simplified implementation. The actual endpoint varies based on Vercel API version.
    const apiUrl = teamId
      ? `https://api.vercel.com/v1/insights?projectId=${projectId}&teamId=${teamId}&since=7d`
      : `https://api.vercel.com/v1/insights?projectId=${projectId}&since=7d`

    const response = await fetch(apiUrl, { headers })

    if (!response.ok) {
      console.log('Vercel API status:', response.status)
      // Return mock data if API call fails
      return NextResponse.json({
        totalVisits: 0,
        todayVisits: 0,
        topPages: [
          { page: '/', views: 0 },
          { page: '/about', views: 0 },
          { page: '/sell', views: 0 },
        ],
        error: 'Unable to fetch from Vercel API',
      })
    }

    const data = (await response.json()) as VercelAnalyticsResponse

    // Parse Vercel analytics response
    const totalVisits = data.summary?.totalVisits?.value || 0
    const topPages = (data.topPages || []).slice(0, 5).map((page) => ({
      page: page.name || '/',
      views: page.pageViews || page.visits || 0,
    }))

    // Get today's visits from timeseries (last 24h)
    const now = Date.now()
    const oneDayAgo = now - 24 * 60 * 60 * 1000
    const todayVisits =
      data.timeseries
        ?.filter((t) => t.timestamp * 1000 > oneDayAgo)
        .reduce((sum, t) => sum + (t.visitors || t.pageViews || 0), 0) || 0

    return NextResponse.json({
      totalVisits,
      todayVisits,
      topPages: topPages.length > 0 ? topPages : [{ page: '/', views: 0 }],
    })
  } catch (error) {
    console.error('Analytics fetch error:', error)

    // Return mock data on error
    return NextResponse.json({
      totalVisits: 0,
      todayVisits: 0,
      topPages: [
        { page: '/', views: 0 },
        { page: '/about', views: 0 },
        { page: '/sell', views: 0 },
      ],
      error: 'Failed to fetch analytics',
    })
  }
}
