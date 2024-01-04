import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://me.susiloeko.my.id',
            lastModified: new Date(),
            changeFrequency: 'always',
            priority: 1,
        },
    ]
}
