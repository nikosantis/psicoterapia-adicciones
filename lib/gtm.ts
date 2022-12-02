declare global {
  interface Window {
    dataLayer: Record<string, any>[]
  }
}

function pushToDataLayer(dataLayerObj: Record<string, any>) {
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push(dataLayerObj)
}

export function pageView(url: string) {
  const pageEvent = {
    event: 'pageview',
    page: url
  }
  pushToDataLayer(pageEvent)
}

export function pushEvent(event: string, dataLayerObj?: Record<string, any>) {
  const eventObj = {
    event,
    ...dataLayerObj
  }
  pushToDataLayer(eventObj)
}

export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID
