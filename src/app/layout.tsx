import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'
import 'styles/global.css'
import 'styles/hamburger.css'

const notoSans = Noto_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Eko Susilo - A Passionate Frontend Developer',
    description:
        'I am passionate Frontend Developer. I love to build modern and futuristic website with high performance and SEO friendly.',
    icons: '/assets/images/favicon.png',
    keywords: [
        'programming',
        'developer',
        'eko',
        'eko susilo',
        'susilo',
        'frontend',
        'purwokerto',
        'nearven',
    ],
    alternates: {
        canonical: 'https://me.susiloeko.my.id',
        languages: {
            'en-US': 'https://nextjs.org/en-US',
        },
    },
    authors: {
        name: 'Eko Susilo',
        url: 'https://me.susiloeko.my.id',
    },
    publisher: 'Eko Susilo',
    creator: 'Eko Susilo',
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },
    assets: 'https://me.susiloeko.my.id/assets',
    category: 'technology',
    openGraph: {
        type: 'profile',
        title: 'Eko Susilo - A Passionate Frontend Developer',
        description:
            'I am passionate Frontend Developer. I love to build modern and futuristic website with high performance and SEO friendly.',
        url: 'https://me.susiloeko.my.id',
        siteName: 'Eko Susilo - Portfolio Website',
        images: {
            url: 'https://me.susiloeko.my.id/assets/images/og.jpg',
            width: 1440,
            height: 810,
        },
        locale: 'en_US',
    },
    metadataBase: new URL('https://susiloeko.my.id'),
}

const jsonLD = {
    '@context': 'http://www.schema.org',
    '@type': 'person',
    name: 'Eko Susilo',
    jobTitle: 'Frontend Developer',
    gender: 'male',
    url: 'https://me.susiloeko.my.id',
    image: 'https://me.susiloeko.my.id/assets/images/photo-profile.webp',
    address: {
        '@type': 'PostalAddress',
        streetAddress: 'Purwokerto, Central Java, Indonesia',
        addressLocality: 'Purwokerto',
        addressRegion: 'Banyumas',
        postalCode: '53162',
        addressCountry: 'Indonesia',
    },
    email: 'ekosusilo140604@gmail.com',
    birthDate: '2004-06-14',
    birthPlace: 'Banyumas',
    nationality: 'Indonesian',
    telephone: '+62 882 0056 58739',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLD) }}
                />
            </head>
            <body className={notoSans.className}>{children}</body>
        </html>
    )
}
