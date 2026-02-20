import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Navbar.module.scss';
import clsx from 'clsx';
import { useWindowSize } from '@/utils/hooks/useWindowSize';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false);

    const windowSize = useWindowSize();

    const isMobile = windowSize.width <= 650;

    useEffect(() => {
        let timeout: NodeJS.Timeout;

        const handleScroll = () => {
            // keep it visible at the very top
            if (window.scrollY > 50) {
                setIsScrolling(true);
                clearTimeout(timeout);
                timeout = setTimeout(() => {
                    setIsScrolling(false);
                }, 250);
            } else {
                setIsScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(timeout);
        };
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const menuVariants = {
        closed: {
            y: "-100%",
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1]
            }
        },
        open: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };

    const linkVariants = {
        closed: { opacity: 0, y: 20 },
        open: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.3 + i * 0.1,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1]
            }
        })
    };

    const links = [
        { name: 'Despre', href: '/about' },
        { name: 'Galerie', href: '/about#gallery' },
        { name: 'Contact', href: '/about#contact' },
    ];

    return (
        <>
            <nav className={clsx(styles.navbar, isScrolling && !isOpen && isMobile && styles.navbarHidden)}>
                <Link href="/" className={styles.logo}>
                    ARTO
                </Link>

                {/* Desktop Links */}
                <div className={styles.desktopLinks}>
                    {links.map((link) => (
                        <Link key={link.name} href={link.href} className={styles.link}>
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Burger Icon */}
                <div
                    className={clsx(styles.burger, isOpen && styles.burgerOpen)}
                    onClick={toggleMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className={styles.mobileMenu}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                    >
                        {links.map((link, i) => (
                            <motion.div
                                key={link.name}
                                custom={i}
                                variants={linkVariants}
                            >
                                <Link
                                    href={link.href}
                                    className={styles.mobileLink}
                                    onClick={toggleMenu}
                                >
                                    {link.name}
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
