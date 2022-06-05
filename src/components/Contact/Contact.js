import React from "react";
import "./Contact.css";
import { MdOutlineMail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast("Message Sent Successfully");
    e.target.reset();
  };
  return (
    <section id="contact">
      <ToastContainer></ToastContainer>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className="contact__option__icon"></MdOutlineMail>
            <h4>Email</h4>
            <h5>jikumollick82@gmail.com</h5>
            <a href="mailto:jikumollick82@gmail.com" target={"_blank"}>
              Send a mail
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option__icon"></RiMessengerLine>
            <h4>Messenger</h4>
            <h5>jiku Mollick</h5>
            <a href="https://www.facebook.com/WebBlood" target={"_blank"}>
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option__icon"></BsWhatsapp>
            <h4>WhatsApp</h4>
            <h5>+880 1752720818</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+8801752720818"
              target={"_blank"}
            >
              Send a message
            </a>
          </article>
        </div>

        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button className="btn btn-primary" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
