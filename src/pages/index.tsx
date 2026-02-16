import Head from "next/head";
import Link from "next/link";
import styles from "./index.module.scss";
import { motion } from "framer-motion";

// Assets
import logo from "@public/logo.jpg";

export default function Home() {
    return (
        <>
            <main className={styles.main}>
                <Link href="/about" className={styles.logoLink}>
                    <motion.div
                        className={styles.logo}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <img src={logo.src} alt="Arto Logo-alt" />
                    </motion.div>
                </Link>
            </main>
        </>
    );
}
