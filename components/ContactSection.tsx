import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FiSend, FiMail, FiPhone, FiGithub, FiLinkedin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";

interface ContactSectionProps {
  locale: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ locale }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setFormStatus({
        success: false,
        message:
          locale === "fr"
            ? "Veuillez remplir tous les champs obligatoires."
            : "Please fill in all required fields.",
      });
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        success: false,
        message:
          locale === "fr"
            ? "Veuillez entrer une adresse email valide."
            : "Please enter a valid email address.",
      });
      return false;
    }

    return true;
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);

    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }

    try {
      const result = await emailjs.sendForm(
        "service_n3hlcr8",
        "template_r98h0nn",
        formRef.current!,
        "ekqY2nzD88f4w5vXZ"
      );

      if (result.text === "OK") {
        setFormStatus({
          success: true,
          message:
            locale === "fr"
              ? "Votre message a été envoyé avec succès !"
              : "Your message has been sent successfully!",
        });
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        setTimeout(() => {
          setFormStatus(null);
        }, 5000);
      }
    } catch (error) {
      setFormStatus({
        success: false,
        message:
          locale === "fr"
            ? "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer."
            : "An error occurred while sending the message. Please try again.",
      });

      setTimeout(() => {
        setFormStatus(null);
      }, 5000);

      console.error("EmailJS error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const contactInfoVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.1,
      y: -5,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-20 bg-gray-100 dark:bg-darkBg transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <motion.h2
            className="text-3xl font-bold text-gray-800 dark:text-white mb-2"
            variants={itemVariants}
          >
            {locale === "fr" ? "Contact" : "Contact"}
          </motion.h2>
          <motion.div
            className="h-1 w-20 bg-primary mx-auto rounded"
            variants={itemVariants}
          ></motion.div>
          <motion.p
            className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            {locale === "fr"
              ? "Vous avez un projet en tête ou une proposition ? N'hésitez pas à me contacter !"
              : "Do you have a project in mind or a proposal? Feel free to contact me!"}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={contactInfoVariants}
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              {locale === "fr"
                ? "Informations de contact"
                : "Contact Information"}
            </h3>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-primary bg-opacity-10 rounded-lg text-primary">
                <FiMail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-1">
                  Email
                </h4>
                <a
                  href="mailto:landrytido727@gmail.com"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                >
                  landrytido727@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-primary bg-opacity-10 rounded-lg text-primary">
                <FiPhone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-1">
                  {locale === "fr" ? "Téléphone" : "Phone"}
                </h4>
                <a
                  href="tel:+32465362609"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                >
                  +32*********
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-4">
                {locale === "fr" ? "Réseaux sociaux" : "Social Media"}
              </h4>
              <div className="flex space-x-4">
                <motion.a
                  href="https://github.com/Landrytido"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  <FiGithub className="w-5 h-5" />
                </motion.a>

                <motion.a
                  href="https://linkedin.com/in/landry-tido-atikeng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  <FiLinkedin className="w-5 h-5" />
                </motion.a>

                <motion.a
                  href="https://wa.me/+32465362609"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  <FaWhatsapp className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={formVariants}
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
              {locale === "fr" ? "Envoyez-moi un message" : "Send me a message"}
            </h3>

            {formStatus && (
              <motion.div
                className={`p-4 mb-6 rounded-lg ${
                  formStatus.success
                    ? "bg-green-100 text-green-700 dark:bg-green-900 dark:bg-opacity-30 dark:text-green-400"
                    : "bg-red-100 text-red-700 dark:bg-red-900 dark:bg-opacity-30 dark:text-red-400"
                }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {formStatus.message}
              </motion.div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 dark:text-gray-300 mb-2"
                >
                  {locale === "fr" ? "Nom" : "Name"}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
                  placeholder={locale === "fr" ? "Votre nom" : "Your name"}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 dark:text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
                  placeholder={locale === "fr" ? "Votre email" : "Your email"}
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-gray-700 dark:text-gray-300 mb-2"
                >
                  {locale === "fr" ? "Sujet" : "Subject"}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
                  placeholder={
                    locale === "fr"
                      ? "Exemple : Demande de collaboration"
                      : "Example: Collaboration request"
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 dark:text-gray-300 mb-2"
                >
                  {locale === "fr" ? "Message" : "Message"}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-gray-800 text-gray-800 dark:text-white resize-vertical"
                  placeholder={
                    locale === "fr" ? "Votre message..." : "Your message..."
                  }
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="flex items-center justify-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed w-full md:w-auto"
                disabled={isSubmitting}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                ) : (
                  <FiSend className="mr-2" />
                )}
                {locale === "fr" ? "Envoyer le message" : "Send message"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
