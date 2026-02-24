import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Navbar.module.scss";
import clsx from "clsx";
import { useWindowSize } from "@/utils/hooks/useWindowSize";
import { useTranslation } from "react-i18next";

// Assets
import logo from "@public/logo.png";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
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
        ease: [0.22, 1, 0.36, 1],
      },
    },
    open: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const linkVariants = {
    closed: { opacity: 0, y: 20 },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  const links = [
    { id: "about", href: "/about", defaultText: "Despre" },
    { id: "gallery", href: "/about#gallery", defaultText: "Galerie" },
    { id: "contact", href: "/about#contact", defaultText: "Contact" },
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const languages = [
    { code: "ro", label: "RO" },
    { code: "en", label: "EN" },
    { code: "de", label: "DE" },
  ];

  const currentLang = mounted ? i18n.resolvedLanguage : "ro";

  return (
    <>
      <nav
        className={clsx(
          styles.navbar,
          isScrolling && !isOpen && isMobile && styles.navbarHidden,
        )}
      >
        <Link href="/">
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

        {/* Desktop Links */}

        <div className={styles.rightSection}>
          <div className={styles.langSelector}>
            {languages.map((lang) => (
              <button
                key={lang.code}
                className={clsx(
                  styles.langBtn,
                  currentLang === lang.code && styles.activeLang,
                )}
                onClick={() => changeLanguage(lang.code)}
              >
                {lang.label}
              </button>
            ))}
          </div>

          <div className={styles.desktopLinks}>
            {links.map((link) => (
              <Link key={link.id} href={link.href} className={styles.link}>
                {mounted ? t(`navbar.${link.id}`) : link.defaultText}
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
              <motion.div key={link.id} custom={i} variants={linkVariants}>
                <Link
                  href={link.href}
                  className={styles.mobileLink}
                  onClick={toggleMenu}
                >
                  {mounted ? t(`navbar.${link.id}`) : link.defaultText}
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
