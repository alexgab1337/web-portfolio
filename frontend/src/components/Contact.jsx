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
    const apiUrl = import.meta.env.VITE_API_URL;
    const email = formData.get("senderEmail");

    const pattern = /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
    if (!pattern.test(email)) {
      toast.error("Please enter a valid email address.");
      setIsSubmitting(false);
      return;
    }

    const data = {
      senderEmail: email,
      message: formData.get("message"),
    };

    try {
      const response = await fetch(`${apiUrl}/send-email`, {
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
      className="mb-[13rem] w-[min(100%,38rem)] text-center mt-[4rem] text-neutral-800"
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
        Contact me directly at{" "}
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
          className="h-52 my-3 rounded-lg borderBlack p-4 resize-none"
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
