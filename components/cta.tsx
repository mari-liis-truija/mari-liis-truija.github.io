"use client";

import { FaLinkedin } from "react-icons/fa";

export default function Cta() {
  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-b from-transparent via-gray-900/50 py-12 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-8 font-nacelle text-2xl font-semibold text-transparent sm:text-3xl md:text-4xl">
              Ready to Connect?
            </h2>
            <p className="mb-8 text-lg text-indigo-200/65 sm:text-xl">
              Let’s explore ideas together! Reach out to connect and see what amazing projects we can create.
            </p>
            <div className="mb-6 flex justify-center">
              <a
                href="https://www.linkedin.com/in/mari-liis-truija-3a2b88171/"
                className="text-indigo-400 hover:text-indigo-500 transition-colors duration-200"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="w-12 h-12 md:w-16 md:h-16" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
