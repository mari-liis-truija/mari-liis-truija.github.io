"use client";

import { useState } from "react";
import Image from "next/image";
import Avatar from "@/public/images/avatar.png";
import { FaLinkedin, FaGithub, FaFileAlt } from "react-icons/fa";
import ModalCv from "@/components/modal-cv";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="flex flex-col md:flex-row items-center md:space-x-12">

            <div className="md:w-1/2">
              <div className="pb-12 text-center md:text-left md:pb-20">
                <div className="flex items-center gap-4 md:pb-20">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-12 w-12 text-white/90">
                    <path fillRule="evenodd" d="M3.25 3A2.25 2.25 0 0 0 1 5.25v9.5A2.25 2.25 0 0 0 3.25 17h13.5A2.25 2.25 0 0 0 19 14.75v-9.5A2.25 2.25 0 0 0 16.75 3H3.25Zm.943 8.752a.75.75 0 0 1 .055-1.06L6.128 9l-1.88-1.693a.75.75 0 1 1 1.004-1.114l2.5 2.25a.75.75 0 0 1 0 1.114l-2.5 2.25a.75.75 0 0 1-1.06-.055ZM9.75 10.25a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5Z"/>
                  </svg>
                  <p className="text-2xl font-semibold text-white/90 md:text-4xl">
                    Mari-Liis Truija<span className="cursor font-normal blink"> _</span>
                  </p>
                </div>

                <h1
                  className="animate-[gradient_6s_linear_infinite] 
                  bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] 
                  bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
                  data-aos="fade-up"
                >
                  Crafting Digital Experiences with Design & Code
                </h1>
                {/* <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,#596F62,#7EA16B,#A1CCA5,#7EA16B,#596F62)] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl" data-aos="fade-up">
                  Crafting Digital Experiences with Design & Code
                </h1> */}
                <div className="mx-auto max-w-3xl">
                  <p
                    className="mb-8 text-xl text-indigo-200/65 text-justify"
                    data-aos="fade-up"
                  >
                    {/* Designer and developer specializing in creating beautiful, responsive, and intuitive web applications.
                    With a strong focus on front-end technologies and graphic design, I deliver high-quality digital solutions
                    that emphasize user experience, interface design, and visual appeal. */}
                    I’m a designer and developer focused on creating user-friendly, responsive and visually appealing websites.
                    With a background in both design and front-end development, 
                    I aim to build digital solutions that are easy to use and look great.
                  </p>

                  <div className="mb-6 flex justify-center md:justify-start space-x-4" data-aos="fade-up" data-aos-delay={300}>
                    <a
                      href="https://www.linkedin.com/in/mari-liis-truija-3a2b88171/"
                      className="text-indigo-400/90 hover:text-indigo-500"
                      aria-label="LinkedIn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin size={32} />
                    </a>
                    <a
                      href="https://github.com/mari-liis-truija"
                      className="text-indigo-400/90 hover:text-indigo-500"
                      aria-label="GitHub"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub size={32} />
                    </a>
                    <a
                      onClick={openModal}
                      className="text-indigo-400/90 hover:text-indigo-500 cursor-pointer"
                      aria-label="View CV"
                    >
                      <FaFileAlt size={32} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2">
              <Image
                className="inline-flex float"
                src={Avatar}
                loading="lazy"
                aria-hidden="true"
                quality={100}
                alt="Avatar"
                data-aos="fade-up"
                data-aos-delay={300}
              />
            </div>

          </div>
        </div>
      </div>

      <ModalCv
        isOpen={isModalOpen}
        onClose={closeModal}
        fileUrl="/files/cv.pdf"
      />
    </section>
  );
}
