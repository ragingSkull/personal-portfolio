import '../styles/app.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Head from 'next/head'
import Script from 'next/script';
import NavBarMobile from '../components/navbar-mobile'
import { DefaultSeo } from 'next-seo'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false 

function MyApp({ Component, pageProps, router }) {
    const url = `https://rottenegggs.com${router.route}`

    return ( 
    <>
    <Head>
        <link rel="icon" href="/static/favicon.png"></link>
        <title>rotten • egg</title>
    </Head>
    {/* Google tag (gtag.js) */}
    <Script 
        src="https://www.googletagmanager.com/gtag/js?id=G-C773LE09VK"
        strategy="afterInteractive"
    />
    <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-C773LE09VK');
        `}
    </Script>
    <DefaultSeo
        titleTemplate="%s - Leonard"
        openGraph={{
            type: 'website',
            locale: 'en_IE',
            url,
            description: 'The personal website of Leonard.',
            site_name: 'RottenEgggs',
            images: [],
        }}
        canonical={url}
    />
    {/* <NavBarMobile /> */}
    <Component {...pageProps } />
    </>
    );
}

export default MyApp