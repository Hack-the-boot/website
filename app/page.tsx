"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Terminal, { Field } from "@/components/Terminal";

export default function Home() {
  const phrases = [
    "Italy's international student hackathon",
    "Where bold ideas become reality",
    "Compete. Build. WIN.",
    "24 hours of innovation in Milan",
    "Create the future, one hack at a time",
  ];

  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const terminalRef = useRef<HTMLFormElement>(null);

  // Typewriter
  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 90;
    const current = phrases[index];

    const tick = () => {
      if (!isDeleting && displayText.length < current.length) {
        setDisplayText(current.slice(0, displayText.length + 1));
      } else if (isDeleting && displayText.length > 0) {
        setDisplayText(current.slice(0, displayText.length - 1));
      } else if (!isDeleting && displayText.length === current.length) {
        setTimeout(() => setIsDeleting(true), 4000);
        return;
      } else if (isDeleting && displayText.length === 0) {
        setIsDeleting(false);
        setIndex((p) => (p + 1) % phrases.length);
        return;
      }
    };

    const t = setTimeout(tick, typingSpeed);
    return () => clearTimeout(t);
  }, [displayText, isDeleting, index]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const formData = new FormData(e.target as HTMLFormElement);
    const fullName = formData.get('fullName') as string;
    const email = formData.get('email') as string;

    try {
      const response = await fetch('/api/pre-register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullName, email }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Error submitting pre-registration. Please try again.');
    }
  };

  return (
    <div className="page">
      {/* ================= HERO ================= */}
      <div className="mainPageContainer">
        <div className="logoAndText">
          <Image
            src="/img/Logo_Transparent.png"
            alt="Logo"
            width={300}
            height={300}
            className="logoHTB"
            priority
          />
          <h1>Hack The Boot</h1>
        </div>

        <p className="hackInfo">
          <span className="tech-gradient">
            <span className="typewriter">{displayText}</span>
            <span className="cursor"></span>
          </span>
        </p>

         <p className="descriptionHack !text-center !w-full !mb-8">
           Italy&apos;s student-powered international hackathon - Compete. Build.{" "}
           <span className="!font-bold">WIN.</span>
         </p>

        <div className="!text-center !w-full !mt-0">
          <p className="!text-2xl sm:!text-3xl !font-bold !text-gray-300">
            <span className="!text-blue-400">Pre-register</span> to get notified
            when applications open.
          </p>
        </div>
      </div>

       {/* ================= TERMINAL (WIDE & CENTERED) ================= */}
       <section className="!mt-10 !w-full">
         <div className="!mx-auto !w-full !max-w-7xl px-4 sm:px-6">
           <form
             ref={terminalRef}
             onSubmit={handleSubmit}
             className="!w-full !mx-auto !max-w-6xl
                        !transition-all !duration-300 
                        !rounded-2xl
                        !min-h-[380px]"
           >
             <Terminal>
               {!submitted ? (
                 <>
                   <p className="!text-green-400 !font-mono !text-xl sm:!text-2xl">
                     $ Welcome to{" "}
                     <span className="!text-cyan-400">HackTheBoot</span>{" "}
                     pre-registration
                   </p>
                   <p className="!text-gray-400 !text-lg sm:!text-xl !font-mono">
                     # Please enter your info below:
                   </p>

                   <div className="!flex !flex-col !gap-8 !mt-6">
                     <Field text="Full Name" required id="fullName" />
                     <Field text="Email" type="email" required id="email" />
                   </div>

                   <button
                     type="submit"
                     className="!mt-8 !w-full !rounded-xl !bg-gradient-to-r !from-blue-500 !to-cyan-500 !py-5 
                                !text-white !font-semibold !font-mono !text-lg !tracking-wide !shadow-md 
                                hover:!from-blue-600 hover:!to-cyan-600 !transition-all !duration-300 
                                !transform hover:!scale-[1.02]"
                   >
                     $ Submit
                   </button>
                 </>
               ) : (
                 <>
                   <p className="!text-green-400 !font-mono !text-xl sm:!text-2xl">
                     $ Thank you for pre-registering!
                   </p>
                   <p className="!text-gray-400 !font-mono !text-lg sm:!text-xl">
                     # We&apos;ll notify you when applications open.
                   </p>
                 </>
               )}
             </Terminal>
          </form>
        </div>
      </section>

      {/* ================= CARDS (BELOW TERMINAL) - Only show if not submitted ================= */}
      {!submitted && (
        <section className="!mt-8 !w-full">
          <div className="!mx-auto !w-full !max-w-6xl px-4 sm:px-6">
            <div
              className="!grid !grid-cols-1 sm:!grid-cols-2 
                         !gap-6"
            >
              {[
                {
                  icon: (
                    <svg
                      className="w-6 h-6 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  ),
                  title: "Date",
                  text: "Spring 2026",
                },
                {
                  icon: (
                    <svg
                      className="w-6 h-6 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  ),
                   title: "Location",
                   text: "Milan",
                },
              ].map((card, i) => (
                 <div
                   key={i}
                   className="!relative !flex !flex-col !justify-center !items-center !text-center 
                              !w-full !rounded-[20px] !p-8 !min-h-[180px]
                              !bg-[rgba(51,54,56,0.27)] 
                              !border-2 !border-blue-500/30 
                              !transition-all !duration-300 !ease-out 
                              hover:!bg-[rgba(51,54,56,0.40)] hover:!border-blue-500/50
                              hover:!scale-[1.02] group"
                 >
                   <div className="!flex !flex-col !items-center !justify-center !h-full !space-y-6">
                     <div className="!p-6 !rounded-full !bg-blue-500/10 group-hover:!bg-blue-500/20 !transition-all !duration-300">
                       {card.icon}
                     </div>

                     <h3 className="!text-blue-500 !font-semibold !text-3xl !tracking-wide group-hover:!text-blue-400 !transition-colors !duration-300">
                       {card.title}
                     </h3>
                     <p className="!text-gray-300 !text-2xl !font-medium whitespace-pre-line leading-relaxed group-hover:!text-gray-200 !transition-colors !duration-300 !text-center">
                       {card.text}
                     </p>
                   </div>
                 </div>
              ))}
            </div>
          </div>
        </section>
      )}

    </div>
  );
}
