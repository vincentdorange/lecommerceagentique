// Alias of /feed.xml — many readers (Feedly, NetNewsWire) probe /rss.xml first.
import { GET as feedGet } from '../feed.xml/route'

export const runtime = 'nodejs'
export const revalidate = 1800

export async function GET() {
  return feedGet()
}
