import Head from "next/head";
import styles from "./about.module.scss";
import Button from "@/components/Button";
import ContactForm from "@/components/ContactForm";
import Gallery from "@/components/Gallery";
import SEO from "@/components/SEO";

// Assets
import logo from "@public/logo.png";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  const goToContact = () => {
    scrollTo(0, document.getElementById("contact")?.offsetTop || 0);
  };

  return (
    <>
      <main className={styles.container}>
        <section className={styles.intro}>
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
          <p className={styles.description}>{t("about.description")}</p>
        </section>

        <Gallery />
        <ContactForm />
      </main>
    </>
  );
}
