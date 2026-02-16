import type { AppProps } from 'next/app';
import Head from 'next/head';
import '@styles/globals.scss';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Arto Tattoo</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}
