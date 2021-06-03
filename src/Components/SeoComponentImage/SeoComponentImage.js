import React from 'react'
import Helmet from 'react-helmet'
// import favicon from '..//..//..//static/images/favicon.png'
import imagineFundal from "..//SeoComponentImage/cover-img-update.jpg"


function SeoComponent() {
  return (
    <div>
      <Helmet>
        {/* <!-- Primary Meta Tags --> */}
        <title>Wedding Invitation</title>
        <meta name="title" content="Wedding Invitation" />
        <meta name="description" content="Pentru că ne sunteți o persoană dragă nouă, ți-am pregătit o surpiză mică, dă un click pentru a afla mai multe detalii..." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta name="keywords" content="wedding invitation, wedding, bride, groom"></meta>
        <meta name="author" content="Ionut Prilipceanu" />
        <meta property="og:locale" content="ro_RO" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Wedding Invitation" />
        <meta property="og:site_name" content="Wedding Invitation"></meta>
        <meta property="og:image" content={imagineFundal} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image.jpeg" />
        {/* <link rel="icon" href={favicon} /> */}

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://wedding-invitation-id.netlify.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Wedding Invitation" />
        <meta property="og:description" content="Pentru că ne sunteți o persoană dragă nouă, ți-am pregătit o surpiză mică, dă un click pentru a afla mai multe detalii..." />
        {/* <meta property="og:image" content={imagineFundal}/> */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630"></meta>

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://wedding-invitation-id.netlify.app/" />
        <meta property="twitter:title" content="Wedding Invitation" />
        <meta property="twitter:description" content="Pentru că ne sunteți o persoană dragă nouă, ți-am pregătit o surpiză mică, dă un click pentru a afla mai multe detalii..." />
        {/* <meta property="og:image" content={imagineFundal}/> */}
      </Helmet>
    </div>
  )
}
export default SeoComponent