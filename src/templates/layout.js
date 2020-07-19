export const layout = (data, ads) => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Origin</title>
    ${
      ads
        ? `
      <script data-cfasync="false" type="text/javascript">
        (function (a, c, s, u){'Insticator'in a || (a.Insticator={ad:{loadAd: function (b){Insticator.ad.q.push(b)}, q: []}, helper:{}, embed:{}, version: "4.0", q: [], load: function (t, o){Insticator.q.push({t: t, o: o})}}); var b=c.createElement(s); b.src=u; b.async=!0; var d=c.getElementsByTagName(s)[0]; d.parentNode.insertBefore(b, d)})(window, document, 'script', 'https://d3lcz8vpax4lo2.cloudfront.net/ads-code/054f6766-9388-44fd-9776-8226c8422836.js')
      </script>
    `
        : ''
    }
  </head>
  <body>
    ${data}
  </body>
  </html>
`
