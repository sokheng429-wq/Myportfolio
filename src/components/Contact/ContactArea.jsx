import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

function ContactArea() {
    const form = useRef();
    const [sent, setSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                import.meta.env.VITE_EMAIL_SERVICE_ID,
                import.meta.env.VITE_EMAIL_TEMPLATE_ID,
                form.current,
                import.meta.env.VITE_EMAIL_USER_ID
            )
            .then(
                () => {
                    setSent(true);
                    form.current.reset();
                    setTimeout(() => setSent(false), 4000);
                },
                (error) => {
                    console.log(error.text);
                    alert("Failed to send message. Please try again.");
                }
            );
    };

    return (
        <div className="contact-form-wrapper">
            <h3 className="contact-form-heading">Send me a message</h3>
            <form ref={form} onSubmit={sendEmail} className="contact-form">
                <div className="contact-input-group">
                    <input
                        name="user_name"
                        type="text"
                        className="contact-input"
                        placeholder="Your name"
                        required
                    />
                </div>
                <div className="contact-input-group">
                    <input
                        name="user_email"
                        type="email"
                        className="contact-input"
                        placeholder="Your email"
                        required
                    />
                </div>
                <div className="contact-input-group">
                    <textarea
                        name="message"
                        rows="5"
                        className="contact-input contact-textarea"
                        placeholder="Your message..."
                        required
                    ></textarea>
                </div>
                <button type="submit" className="contact-submit-btn">
                    {sent ? "Message Sent!" : "Send Message"}
                </button>
            </form>
        </div>
    );
}

export default ContactArea;
