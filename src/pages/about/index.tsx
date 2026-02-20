import Head from "next/head";
import styles from "./about.module.scss";
import Button from "@/components/Button";
import ContactForm from "@/components/ContactForm";
import Gallery from "@/components/Gallery";

export default function About() {

    const goToContact = () => {
        scrollTo(0, document.getElementById('contact')?.offsetTop || 0);
    }


    return (
        <>
            <main className={styles.container}>
                <section className={styles.intro}>
                    <h1 className={styles.title}>Arto</h1>
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
