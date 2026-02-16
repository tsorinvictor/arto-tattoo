import type { AppProps } from 'next/app';
import Head from 'next/head';
import '@styles/globals.scss';
import Layout from '@/components/Layout';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Head>
                <title>Arto Tattoo</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href={`${process.env.NEXT_PUBLIC_BASE_PATH}/favicon.svg`} type="image/svg+xml" />
            </Head>
            <Component {...pageProps} />
        </Layout>
    );
}
