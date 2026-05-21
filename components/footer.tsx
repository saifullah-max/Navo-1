"use client"


import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {

  const footerRef = useRef<HTMLDivElement>(null);


  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubscribe = () => {
    if (!email) {
      setStatus("Please enter a valid email");
      return;
    }

    emailjs
      .send(
        "service_0i6cqah", // replace with EmailJS service ID
        "template_xv0y10k", // replace with EmailJS template ID
        { email }, // template params
        "x2Rj-TukOxeJQEB38" // replace with EmailJS public key
      )
      .then(() => {
        setStatus("✅ Subscribed successfully!");
        setEmail("");
      })
      .catch(() => setStatus("❌ Failed to subscribe. Try again."));
  };
  const currentYear = new Date().getFullYear();
  return (
    <footer
      id="footer"
      className="bg-[#03336d] text-white px-6 py-12 lg:px-0 lg:py-16"
    >
      <div className="max-w-7xl mx-auto">
        <div className=" md:flex  justify-between ">
          <div className="space-y-6">
            <img
              className="w-[150px] h-auto"
              alt="Navo Logo"
              src="/navoLogo.png"
            />

            <div className="space-y-3">
              <p className="text-white text-base leading-relaxed">
                Get practical admissions tips, scholarship updates, and strategy
                notes from our counseling team.
              </p>
              <p className="text-white/80 text-sm leading-relaxed">
                Subscribe to receive useful guidance for undergraduate and
                graduate applicants, not generic product updates.
              </p>
            </div>

            <div className="pt-4">
              <img
                className="w-[150px] h-auto"
                alt="KHDA Certification"
                src="/khda-logo.png"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:gap-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
              <div>
                <h3 className="text-white font-semibold text-lg mb-4">
                  Quick Links
                </h3>
                <nav className="space-y-3">
                  <Link
                    href="/meet-founders"
                    className="block border-b w-fit text-white/80 hover:text-white transition-colors text-sm"
                  >
                    ABOUT US
                  </Link>
                  <a
                    href="/#what-we-do"
                    className="block border-b w-fit  text-white/80 hover:text-white transition-colors text-sm"
                  >
                    SERVICES
                  </a>
                  <Link
                    href="/explore"
                    className="block border-b w-fit text-white/80 hover:text-white transition-colors text-sm"
                  >
                    EXPLORE
                  </Link>
                  <a
                    href="/connect"
                    className="block border-b w-fit text-white/80 hover:text-white transition-colors text-sm"
                  >
                    MYNAVOPORTAL
                  </a>
                </nav>
              </div>

              <div>
                <h3 className="text-white font-semibold text-lg mb-4">
                  Others
                </h3>
                <nav className="space-y-3">
                  <a
                    href="/case-studies"
                    className="block border-b w-fit text-white/80 hover:text-white transition-colors text-sm"
                  >
                    PARTNERS
                  </a>
                  <a
                    href="/#testimonials"
                    className="block border-b w-fit text-white/80 hover:text-white transition-colors text-sm"
                  >
                    TESTIMONIALS
                  </a>
                  <a
                    href="/terms-and-conditions"
                    className="block border-b w-fit text-white/80 hover:text-white transition-colors text-sm"
                  >
                    TERMS & CONDITIONS
                  </a>
                  <a
                    href="/privacy-policy"
                    className="block border-b w-fit  text-white/80 hover:text-white transition-colors text-sm"
                  >
                    PRIVACY POLICY
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 lg:gap-16">
          <p className="text-white/80 text-sm flex items-center gap-2">
            ©{currentYear} All rights reserved
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/profile.php?id=61574014345229"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-blue-500 transition-colors"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://www.instagram.com/navo.ed?igsh=eGd5ZDVuZjBrdGs="
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-pink-500 transition-colors"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://x.com/navo.ed"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-sky-400 transition-colors"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://www.tiktok.com/@navo1482?_t=ZS-8zxyInM47Hj&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-red-500 transition-colors"
            >
              <FaYoutube size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>

  );
}
