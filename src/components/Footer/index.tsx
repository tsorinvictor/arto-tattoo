import React from 'react';
import Link from 'next/link';
import { Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './Footer.module.scss';
import router from 'next/router';

const Footer = () => {
    const openInstagram = (url: string) => {
        if (!url.match(/^https?:\/\//i)) {
            url = 'https://' + url;
        }
        return window.open(url, '_blank');
    };


    return (
        <footer className={styles.footer}>
            <div className={styles.content}>


                <motion.div
                    className={styles.socialLoop}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <div
                        className={styles.socialItem}
                        onClick={() => openInstagram('https://www.instagram.com/arttoalex')}
                    >
                        <Instagram />
                        <span>@arttoalex</span>
                    </div>
                </motion.div>

                <motion.div
                    className={styles.copyright}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    &copy; {new Date().getFullYear()} Arto Tattoo. All rights reserved.
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
