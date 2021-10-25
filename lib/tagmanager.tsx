export const GTM_ID = 'GTM-5C5434G'

declare global {
  interface Window {
    dataLayer: object[]
  }
}

function pushToDataLayer(dataLayerObject: object) {
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push(dataLayerObject)
}

export function createEvent(args: Record<string, string>) {
  const dataLayerObject = {
    event: args.event,
    ...args
  }

  pushToDataLayer(dataLayerObject)
}
