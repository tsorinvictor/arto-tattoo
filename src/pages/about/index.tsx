import Head from "next/head";
import styles from "./about.module.scss";
import Button from "@/components/Button";
import ContactForm from "@/components/ContactForm";
import Gallery from "@/components/Gallery";

// Assets
import logo from '@public/logo.png';

export default function About() {

    const goToContact = () => {
        scrollTo(0, document.getElementById('contact')?.offsetTop || 0);
    }


    return (
        <>
            <main className={styles.container}>
                <section className={styles.intro}>
                    <img src={logo.src} alt="Arto Logo-alt" />
                    <p className={styles.description}>
                        Minimalist tattoo artistry focused on fine lines and conceptual
                        designs.
                    </p>
                    <Button onClick={goToContact} variant={'solid'} color={'light'} hoverColor={'dark'} children={'Contact'} />
                </section>

                <Gallery />
                <ContactForm />
            </main>
        </>
    );
}
