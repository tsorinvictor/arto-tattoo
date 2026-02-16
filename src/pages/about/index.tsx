import Head from 'next/head';
import { motion } from 'framer-motion';
import styles from './about.module.scss';

const images = [1, 2, 3, 4, 5, 6]; // Placeholders

export default function About() {
    return (
        <>
            <Head>
                <title>About - Arto Tattoo</title>
            </Head>
            <main className={styles.container}>
                <section className={styles.intro}>
                    <h1 className={styles.title}>Arto</h1>
                    <p className={styles.description}>
                        Minimalist tattoo artistry focused on fine lines and conceptual designs.
                    </p>
                    <button className={styles.contactBtn}>Contact</button>
                </section>

                <section className={styles.gallery}>
                    {images.map((id) => (
                        <motion.div
                            key={id}
                            className={styles.imageWrapper}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <div className={styles.placeholder} />
                        </motion.div>
                    ))}
                </section>
            </main>
        </>
    );
}
