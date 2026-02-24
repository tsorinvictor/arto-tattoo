import React, { useState } from "react";
import styles from "./ContactForm.module.scss";
import Button from "@/components/Button";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (name === "email") {
      setEmailError("");
    }
  };

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleEmailBlur = () => {
    if (formData.email && !validateEmail(formData.email)) {
      setEmailError(t("contact_form.invalid_email"));
    } else {
      setEmailError("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      setEmailError(t("contact_form.invalid_email"));
      return;
    }

    const GOOGLE_FORM_ACTION_URL = `https://docs.google.com/forms/u/0/d/e/1FAIpQLScoUcxvaumDOUNxM9ox3yQ9sRQ8APQGJuOQVxZey0ec20FOZw/formResponse`;

    const formDataToSubmit = new FormData();
    formDataToSubmit.append("entry.1317695761", formData.name);
    formDataToSubmit.append("entry.1836701070", formData.email);
    formDataToSubmit.append("entry.852659684", formData.message);

    console.log("formDataToSubmit", formDataToSubmit);
    try {
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: "POST",
        mode: "no-cors", // Crucial: Bypasses CORS restrictions
        body: formDataToSubmit,
      });

      setSuccessMessage(t("contact_form.success_message"));

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(t("contact_form.network_error"));
    }
  };

  return (
    <section className={styles.contactSection} id="contact">
      <h2 className={styles.title}>{t("contact_form.title")}</h2>
      <p className={styles.description}>{t("contact_form.description")}</p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.fieldGroup}>
          <label htmlFor="name" className={styles.label}>
            {t("contact_form.name_label")}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={styles.input}
            placeholder={t("contact_form.name_placeholder")}
          />
        </div>

        <div className={styles.fieldGroup}>
          <label htmlFor="email" className={styles.label}>
            {t("contact_form.email_label")}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleEmailBlur}
            className={`${styles.input} ${emailError ? styles.inputError : ""}`}
            placeholder={t("contact_form.email_placeholder")}
          />
          {emailError && <span className={styles.error}>{emailError}</span>}
        </div>

        <div className={styles.fieldGroup}>
          <label htmlFor="message" className={styles.label}>
            {t("contact_form.message_label")}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={styles.textarea}
            placeholder={t("contact_form.message_placeholder")}
          />
        </div>

        {successMessage && (
          <p className={styles.successMessage}>{successMessage}</p>
        )}

        <div className={styles.submitButton}>
          <Button type="submit" variant="solid" color="light" hoverColor="dark">
            {t("contact_form.submit_button")}
          </Button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
