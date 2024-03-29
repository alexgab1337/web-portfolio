import useSectionInView from "../hooks/hooks.js";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import SubmitButton from "./SubmitButton.jsx";
import { useState } from "react";

function Contact() {
  const { ref } = useSectionInView({ sectionName: "Contact" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const data = {
      senderEmail: formData.get("senderEmail"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("http://localhost:3001/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Email sent successfully!");
      } else {
        toast.error("Failed to send email. Please try again later.");
      }
    } catch (error) {
      toast.error(
        "Failed to send email. Please check your internet connection."
      );
    } finally {
      event.target.reset();
    }
    setIsSubmitting(false);
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-32 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <h2 className="text-3xl font-medium capitalize mb-8 text-center">
        {" "}
        Contact Me{" "}
      </h2>
      <p className="text-gray-700 -mt-6">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:gabrichteam@gmail.com">
          gabrichteam@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form className="mt-10 flex flex-col" onSubmit={handleSubmit}>
        <input
          className="h-14 rounded-lg border borderBlack px-4"
          type="email"
          placeholder="Your email"
          required
          maxLength={500}
          name="senderEmail"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4"
          placeholder="Your message"
          required
          maxLength={500}
          name="message"
        />
        <SubmitButton isSubmitting={isSubmitting} />
      </form>
    </motion.section>
  );
}

export default Contact;
