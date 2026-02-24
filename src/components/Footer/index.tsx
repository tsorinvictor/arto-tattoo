import React from "react";
import Link from "next/link";
import { Instagram } from "lucide-react";
import { motion } from "framer-motion";
import styles from "./Footer.module.scss";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <motion.div
          className={styles.socialLoop}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <a
            href="https://www.instagram.com/arttoalex/"
            onClick={(e) => {
              if (
                typeof window !== "undefined" &&
                /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
              ) {
                e.preventDefault();
                window.location.href = "instagram://user?username=arttoalex";
              }
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
            <span>@arttoalex</span>
          </a>
        </motion.div>

        <motion.div
          className={styles.copyright}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          &copy; {new Date().getFullYear()} Arto Tattoo. {t("footer.rights")}
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
