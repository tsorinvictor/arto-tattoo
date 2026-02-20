import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./Gallery.module.scss";
import { galleryData } from "./data";

export default function Gallery() {
    return (
        <section id="gallery" className={styles.gallery}>
            {galleryData.map((item) => (
                <motion.div
                    key={item.id}
                    className={styles.imageWrapper}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <Image
                        src={item.src}
                        alt={`Gallery Image ${item.id}`}
                        fill
                        style={{ objectFit: "cover" }}
                        className={styles.image}
                    />
                </motion.div>
            ))}
        </section>
    );
}
