import { DefaultSeoProps } from 'next-seo'

export const SEO: DefaultSeoProps = {
  titleTemplate: '%s | Shibarium native Decentralized Exchange',
  defaultTitle: 'Ball Exchange',
  description:
    'Ball Exchange is an innovative and highly flexible DEX built to support the Shibarium ecosystem.',
  twitter: {
    cardType: 'summary_large_image',
    handle: '@BallExchange',
    site: '@BallExchange',
  },
  openGraph: {
    title: 'Ball Exchange is an innovative and highly flexible DEX built to support the Shibarium ecosystem.',
    description:
      '',
    images: [{ url: '' }],
  },
}
