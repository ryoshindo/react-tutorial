import React, { useEffect } from 'react'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

nprogress.configure({ showSpinner: false, speed: 400, minimum: 0.25 })

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  if (process.browser) {
    nprogress.start()
  }

  useEffect(() => {
    nprogress.done()
  })

  return <Component {...pageProps} />
}

export default App
