import '../styles/globals.css'
import '../styles/app.css'
import NaviBar from '../components/navi-bar';
import Footer from '../components/footer';
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false 

function MyApp({ Component, pageProps }) {
    return ( 
     <> 
    <NaviBar />
    <Component {...pageProps } />
    <Footer />
    </>
    );
}

export default MyApp