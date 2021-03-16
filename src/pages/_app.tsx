import { FC } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { RecoilRoot } from 'recoil'

import Layout from '@/layout/layout.component'
import TwinGlobalStyles from '@/styles/TwinGlobalStyles'

const MyApp: FC<AppProps> = (props) => {
  const { Component, pageProps } = props

  return (
    <RecoilRoot>
      <ThemeProvider attribute='class'>
        <TwinGlobalStyles />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </RecoilRoot>
  )
}

export default MyApp
