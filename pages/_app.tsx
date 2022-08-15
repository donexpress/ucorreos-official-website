import '../public/css/bootstrap.min.css'
import '../public/css/owl.carousel.min.css'
import '../public/css/slicknav.css'
import '../public/css/animate.min.css'
import '../public/css/magnific-popup.css'
import '../public/css/fontawesome-all.min.css'
import '../public/css/themify-icons.css'
import '../public/css/slick.css'
import '../public/css/nice-select.css'
import '../public/css/style.css'
import '../styles/globals.css'
import '../styles/index.css'

import type { AppProps } from 'next/app'
import Script from 'next/script'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // @ts-ignore
    window.$ = window.jQuery = require('jquery')
  }, [])
  return (
    <>
      <Component {...pageProps} />
      <Script src="/js/vendor/modernizr-3.5.0.min.js"/>
      <Script src="/js/vendor/jquery-1.12.4.min.js"/>
      <Script src="/js/popper.min.js"/>
      <Script src="/js/bootstrap.min.js"/>

      <Script src="/js/owl.carousel.min.js"/>
      <Script src="/js/slick.min.js"/>
      <Script src="/js/jquery.slicknav.min.js"/>
      
      <Script src="/js/wow.min.js"/>
      <Script src="/js/jquery.magnific-popup.js"/>
      <Script src="/js/jquery.nice-select.min.js"/>
      <Script src="/js/jquery.counterup.min.js"/>
      {/* <Script src="/js/waypoints.min.js"/> */}

      {/* <Script src="/js/contact.js"/> */}
      <Script src="/js/jquery.form.js"/>
      <Script src="/js/jquery.validate.min.js"/>
      <Script src="/js/mail-script.js"/>
      <Script src="/js/jquery.ajaxchimp.min.js"/>

      <Script src="/js/plugins.js"/>
      <Script src="/js/main.js"/>



    </>
  )
}

export default MyApp
