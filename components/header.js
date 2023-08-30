import Head from 'next/head';

function Header({page, description}) {
    return (
        <Head>
            <link rel="icon" href="/static/favicon.png"></link>
            <title>{page} | rotten • egg</title>
            <meta name="description" content={description} />
        </Head>
    );
}

export default Header;