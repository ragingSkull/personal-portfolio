import '../styles/app.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Head from 'next/head'
import NavBar from '../components/navbar'
import NavBarMobile from '../components/navbar-mobile'
import Footer from '../components/footer'
import { DefaultSeo } from 'next-seo'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false 

function MyApp({ Component, pageProps, router }) {
    const url = `https://my-first-spa.vercel.app${router.route}`

    return ( 
    <>
    <Head>
        <link rel="icon" href="/static/favicon.png"></link>
        <title>Leonard</title>
    </Head>
    <DefaultSeo
        titleTemplate="%s - Leonard"
        openGraph={{
            type: 'website',
            locale: 'en_IE',
            url,
            description: 'The personal website of Leonard.',
            site_name: 'Leonard',
            images: [],
        }}
        canonical={url}
    /> 
    <NavBar />
    <NavBarMobile />
    <Component {...pageProps } />
    <Footer />
    </>
    );
}

export default MyApp