import Head from 'next/head';

function Header({page, description}) {
    return (
        <Head>
            <link rel="icon" href="/static/favicon.png" />
            <title>{page} | rotten • egg</title>
            <meta name="description" content={description} />
            <meta property="og:image" content="/static/favicon.png" />
        </Head>
    );
}

export default Header;