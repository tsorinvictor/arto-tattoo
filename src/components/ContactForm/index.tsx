import React, { useState } from 'react';
import styles from './ContactForm.module.scss';
import Button from '@/components/Button';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically handle the form submission logic
        console.log('Form submitted:', formData);
        alert('Thank you for your message. We will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section className={styles.contactSection} id="contact">
            <h2 className={styles.title}>Get in Touch</h2>
            <p className={styles.description}>
                To discuss a custom design or schedule a consultation, please fill out the form below.
            </p>

            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.fieldGroup}>
                    <label htmlFor="name" className={styles.label}>Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={styles.input}
                        required
                        placeholder="Your Name"
                    />
                </div>

                <div className={styles.fieldGroup}>
                    <label htmlFor="email" className={styles.label}>Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={styles.input}
                        required
                        placeholder="your@email.com"
                    />
                </div>

                <div className={styles.fieldGroup}>
                    <label htmlFor="message" className={styles.label}>Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className={styles.textarea}
                        required
                        placeholder="Tell us about your idea..."
                    />
                </div>

                <div className={styles.submitButton}>
                    <Button type="submit" variant="solid" color="light" hoverColor="dark">
                        Send Message
                    </Button>
                </div>
            </form>
        </section>
    );
};

export default ContactForm;
