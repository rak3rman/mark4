import { serverQueryContent } from '#content/server'
import { SitemapStream, streamToPromise } from 'sitemap'

export default defineEventHandler(async (event) => {
    // Fetch all documents
    const docs = await serverQueryContent(event).find()
    const sitemap = new SitemapStream({
        hostname: 'https://www.rakerman.com'
    })
    // Insert home page into sitemap
    sitemap.write({
        url: '/',
        changefreq: 'monthly'
    })
    // Insert all content-rendered documents into sitemap
    for (const doc of docs) {
        sitemap.write({
            url: doc._path,
            changefreq: 'monthly'
        })
    }
    sitemap.end()

    return streamToPromise(sitemap)
})
