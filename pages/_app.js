import '../styles/app.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Header from '../components/header'
import Script from 'next/script'
import { DefaultSeo } from 'next-seo'
import { config } from '@fortawesome/fontawesome-svg-core'

config.autoAddCss = false 

function MyApp({ Component, pageProps, router }) {
    const url = `https://rottenegg.dev${router.route}`

    return ( 
    <>
    <Header
        page = "home"
        description = "Explore projects. Engaging blogs. Embark on a software development journey."
    />
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
        titleTemplate="%s - rottenegg"
        openGraph={{
            type: 'website',
            locale: 'en_IE',
            url,
            title: 'rotten • egg',
            description: 'The personal website of Leonard.',
            site_name: 'rotten • egg',
            images: [],
        }}
        canonical={url}
    />
    <Component {...pageProps } />
    </>
    );
}

export default MyApp