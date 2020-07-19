import { layout } from './layout'

const data = (envUrl, intId, community) => `
<div class="insticator-unit type-commenting ad-config-none">
  <div id="insticator-commenting">
    <div class="so-comments" data-integration-id="${intId}"></div>
    ${
      community
        ? `<div class="so-community" data-integration-id="${intId}"></div>`
        : ''
    }
    <script src="${envUrl}/loader/bundle.js" async></script>
  </div>
</div>
`

export const template = (envUrl, intId, community = false) => {
  return layout(data(envUrl, intId, community))
}
