import React from 'react';
import Link from 'next/link';
import { Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './Footer.module.scss';
import router from 'next/router';

const Footer = () => {
    const openInstagram = (username: string) => {
        const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
        const isIOS = /iPad|iPhone|iPod/.test(userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
        const isAndroid = /android/i.test(userAgent);

        if (isIOS || isAndroid) {
            let appOpened = false;

            // Prevent fallback execution if the app opens successfully
            const handleVisibilityChange = () => {
                if (document.hidden || document.visibilityState === 'hidden') {
                    appOpened = true;
                }
            };
            document.addEventListener('visibilitychange', handleVisibilityChange);

            // Both iOS and Android Instagram apps support this custom scheme
            window.location.href = `instagram://user?username=${username}`;

            // Fallback for when the app is not installed
            setTimeout(() => {
                if (!appOpened) {
                    window.location.href = `https://www.instagram.com/${username}/`;
                }
                document.removeEventListener('visibilitychange', handleVisibilityChange);
            }, 2000); // Wait 2s for OS prompt or app launch before falling back
        } else {
            // Desktop fallback
            window.open(`https://www.instagram.com/${username}/`, '_blank', 'noopener,noreferrer');
        }
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
                        onClick={() => openInstagram('arttoalex')}
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
