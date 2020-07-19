import { layout } from './layout'

const data = (envUrl, intId, community) => `
<div class="insticator-unit type-commenting ad-config-both">
  <div class="insticator-ads">
    <div id="div-insticator-ad-cmt-1"></div>
    <div id="div-insticator-ad-cmt-2"></div>
    <script data-cfasync="false" type="text/javascript">Insticator.ad.loadAd("div-insticator-ad-cmt-1");Insticator.ad.loadAd("div-insticator-ad-cmt-2");</script>
  </div>
  <div id="insticator-commenting">
    <div class="so-comments" data-integration-id="${intId}"></div>
    ${
      community
        ? `<div class="so-community" data-integration-id="${intId}"></div>`
        : ''
    }
    <script src="${envUrl}/loader/bundle.js" async></script>
  </div>
  <div class="insticator-ads">
    <div id="div-insticator-ad-cmt-3"></div>
    <div id="div-insticator-ad-cmt-4"></div>
    <script data-cfasync="false" type="text/javascript">Insticator.ad.loadAd("div-insticator-ad-cmt-3");Insticator.ad.loadAd("div-insticator-ad-cmt-4");</script>
  </div>
</div>
`

export const template = (envUrl, intId, community = false) => {
  return layout(data(envUrl, intId, community), true)
}
