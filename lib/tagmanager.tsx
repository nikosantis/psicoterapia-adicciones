export const GTM_ID = 'GTM-5C5434G'

function pushToDataLayer(dataLayerObject) {
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push(dataLayerObject)
}

export function createEvent(args) {
  const dataLayerObject = {
    event: args.event,
    ...args
  }

  pushToDataLayer(dataLayerObject)
}
