import { pageView } from 'lib/gtm'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function GTMPageView() {
  const router = useRouter()
  useEffect(() => {
    router.events.on('routeChangeComplete', pageView)
    return () => {
      router.events.off('routeChangeComplete', pageView)
    }
  }, [router.events])
  return null
}
