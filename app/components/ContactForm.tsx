"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
// import Ticker from "./Ticker";
import SimpleParallax from "simple-parallax-js";
import toast, { Toaster } from "react-hot-toast";

export default function ContactSection() {
  const { theme } = useTheme();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);
    try {
      const response = await fetch("https://ectorious.com/sendEmail.php", {
        method: "POST",
        body: formData,
      });

      if (!response.ok)
        throw new Error(`HTTP error! Status: ${response.status}`);
      const result = await response.json();

      if (result.success) {
        const msg = result.message || "✅ Email sent successfully!";
        setName("");
        setEmail("");
        setMessage("");
        toast.success(msg);
      } else {
        // throw new Error(result.message || "❌ Failed to send email.");
        toast.success("Failed to send email.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast.success("Failed to send email.");
    }
  };
  if (!mounted) return null;
  return (
    <section className="contact section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <Toaster
              toastOptions={{
                duration: 5000,
                position: "bottom-center",
                success: {
                  style: {
                    background: "green",
                  },
                },
                error: {
                  style: {
                    background: "red",
                  },
                },
              }}
            />
            <div className="form md-mb50">
              <h4 className="fw-700 color-font mb-50">Get In Touch.</h4>
              <form id="contact-form" onSubmit={handleSubmit}>
                <div className="controls">
                  <div className="form-group">
                    <input
                      id="form_name"
                      type="text"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      id="form_email"
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      id="form_message"
                      name="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Message"
                      rows={4}
                      required
                      style={{
                        height: 200,
                        width: "100%",
                        resize: "none",
                        padding: 10,
                        fontSize: 16,
                        overflowY: "auto",
                      }}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className={`nav-link btn btn-primary ${
                      theme === "light" ? "btn-light" : ""
                    }`}
                  >
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="col-lg-5 offset-lg-1">
            <h2 className="color-font">Let’s Work Together</h2>
            <div className="mt-35">
              <p>
                Have questions about our services? Ready to take your Amazon
                business to the next level? Reach out to us—we’re excited to
                help you succeed.
              </p>
            </div>
            <div className="img dull-image">
              <SimpleParallax>
                <Image
                  src="/contact.webp"
                  width={600}
                  height={400}
                  alt="Contact"
                  className="img-fluid rounded"
                />
              </SimpleParallax>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
