import Head from 'next/head'
import { useRouter } from 'next/router'

import { seoMetas } from 'lib/seo-metas'

const CANONICAL_URL = 'https://diplomadopsicoterapia.cl'
const OG_BASE_IMAGE = `${CANONICAL_URL}/images/og-image.png`

export type CustomMetaType = {
  title?: string
  description?: string
  image?: string
  type?: string
  date?: string
}

type SeoProps = {
  customMeta?: CustomMetaType
}

export default function Seo({ customMeta }: SeoProps) {
  const router = useRouter()

  const meta = {
    title: seoMetas.title,
    description: seoMetas.description,
    image: OG_BASE_IMAGE,
    type: 'website',
    ...customMeta
  }

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name='robots' content='follow, index' />
      <meta content={meta.description} name='description' />
      <link rel='canonical' href={`${CANONICAL_URL}${router.asPath}`} />

      <meta content='width=device-width, initial-scale=1' name='viewport' />
      <meta httpEquiv='Content-Language' content='es' />
      <meta name='author' content='Nikolas Santis' />

      <meta property='og:type' content={meta.type} />
      <meta property='og:site_name' content={meta.title} />
      <meta property='og:description' content={meta.description} />
      <meta property='og:title' content={meta.title} />
      <meta property='og:image' content={meta.image} />
      <meta property='og:url' content={`${CANONICAL_URL}${router.asPath}`} />

      {meta.date && (
        <meta property='article:published_time' content={meta.date} />
      )}
    </Head>
  )
}
