import Head from 'next/head';
import Link from 'next/link';
import styles from './index.module.scss';
import { motion } from 'framer-motion';

export default function Home() {
    return (
        <>
            <Head>
                <title>Arto Tattoo</title>
                <meta name="description" content="Arto Tattoo Parlor" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <Link href="/about" className={styles.logoLink}>
                    <motion.div
                        className={styles.logo}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        whileHover={{ scale: 1.05 }}
                    >
                        ARTO
                    </motion.div>
                </Link>
            </main>
        </>
    );
}
