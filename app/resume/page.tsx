"use client";

import Link from "next/link";

type Experience = {
  title: string;
  company: string;
  location?: string;
  dates: string;
  bullets: string[];
};

type Certification = {
  label: string;
};

const experiences: Experience[] = [
  {
    title: "Gaming Brewery Bartender",
    company: "Evolve Brewing Project (Aces & Ales)",
    location: "Las Vegas, NV",
    dates: "Jan 2024 – Jul 2025",
    bullets: [
      "Worked in a scratch-kitchen brewery concept with craft cocktails and beer-forward service.",
      "Operated at high pace while maintaining hospitality standards and guest-first intuition.",
      "Departed following staff consolidation after a fire at another location (layoff due to business needs).",
    ],
  },
  {
    title: "Lab-Rat / Cocktail Prep & Design",
    company: "Liquid Diet",
    location: "Las Vegas, NV",
    dates: "Mar 2024 – Jan 2025",
    bullets: [
      "Designed and prepped cocktail ingredients; clarified and fused spirits using a centrifuge.",
      "Supported a production-focused AM prep role; maintained consistency, labeling, and batch quality.",
      "Position was temporary due to an incoming culinary hire already scheduled to relocate.",
    ],
  },
  {
    title: "Opening Bar Staff",
    company: "Mother Wolf (Fontainebleau Las Vegas)",
    location: "Las Vegas, NV",
    dates: "Oct 2023 – Apr 2024",
    bullets: [
      "Part of opening team for Fontainebleau Las Vegas; executed high-volume, high-standard service.",
      "Maintained composure and accuracy under the pressures of a major resort launch.",
      "Balanced classic execution with elevated, hospitality-driven guest experience.",
    ],
  },
  {
    title: "Director of Mixology",
    company: "Sparrow & Wolf",
    location: "Las Vegas, NV",
    dates: "Mar 2021 – Oct 2023",
    bullets: [
      "Led creative cocktail program and collaborated with culinary team on pairings and seasonal menus.",
      "Developed spirit-forward and zero-proof offerings; emphasized technique, balance, and story.",
      "Supported elevated service standards and staff knowledge building through hands-on mentorship.",
    ],
  },
  {
    title: "Owner / Consultant",
    company: "Studious Alchemist Craft Catering & Consulting",
    location: "MI + NV",
    dates: "2011 – Present",
    bullets: [
      "Designed and delivered five-star private events for 15–150 guests with custom cocktail menus.",
      "Built beer/cocktail/spirits selections for restaurants; created training that improves staff confidence and sales.",
      "Provided marketing consultation and spirits education; references available upon request.",
    ],
  },
];

const certifications: Certification[] = [
  { label: "ServSafe (Kitchen) Certified" },
  { label: "BarSmarts Advanced Graduate" },
  { label: "Studied BJCP Beer Style Guidelines (beer judging)" },
  { label: "Cicerone Certified Beer Server" },
  { label: "Currently studying CSS" },
];

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-[url(/images/skulls.png)] text-white p-6 md:p-12">
      <section className="max-w-3xl mx-auto bg-[#1a1a1a]/80 shadow-lg rounded-xl p-8 backdrop-blur-sm border border-white/10">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-4xl font-bold tracking-tight">David B. Porcaro</h1>
          <p className="mt-2 text-lg text-gray-300">
            Studious Bartender — Craft Beer, Craft Cocktail & Whiskey Specialist
          </p>

          <div className="mt-5 text-sm text-gray-200 space-y-1">
            <p>Las Vegas, NV 89129</p>
            <p>
              <a
                href="tel:17345786002"
                className="text-blue-300 hover:underline underline-offset-4"
              >
                734-578-6002
              </a>{" "}
              •{" "}
              <a
                href="mailto:Studious.Alchemist13@gmail.com"
                className="text-blue-300 hover:underline underline-offset-4"
              >
                Studious.Alchemist13@gmail.com
              </a>
            </p>
          </div>
        </header>

        {/* Formulation */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold border-b border-gray-600 pb-2">
            Formulation: Craft Bartender
          </h2>

          <div className="mt-3 text-gray-200 leading-relaxed">
            <ul className="list-disc list-inside space-y-1">
              <li>2 parts culinary experience</li>
              <li>1 part beer + cocktail knowledge</li>
              <li>1 part dedication to guest service</li>
            </ul>

            <p className="mt-4 italic text-gray-300">
              Combine all ingredients and shake or stir with pace and intensity.
              Garnish with good humor and personality. Smile.
            </p>

            <p className="mt-3 text-gray-200">
              Heavily seasoned by 15 years in kitchens and fine dining—well
              prepared for a career behind the bar.
            </p>
          </div>
        </section>

        {/* Skills */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold border-b border-gray-600 pb-2">
            Proven Skills & Abilities
          </h2>

          <ul className="mt-3 list-disc list-inside text-gray-200 space-y-2">
            <li>
              Deep knowledge of cocktail history and craft technique; improvises
              cocktails to match guest preferences.
            </li>
            <li>
              Extensive spirits study paired with culinary background; capable of
              organizing cocktail/spirit dinners and staff trainings.
            </li>
            <li>
              Strong beer and brewing knowledge; supports pairings, education,
              and style guidance.
            </li>
            <li>
              Fast, efficient multitasker with strong food knowledge and service
              instincts.
            </li>
            <li>
              Highly attentive server; anticipates guest needs before they’re
              voiced.
            </li>
            <li>
              Experienced with multiple POS systems; comfortable learning new
              systems quickly (some programming familiarity).
            </li>
          </ul>
        </section>

        {/* Experience */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold border-b border-gray-600 pb-2">
            Experience
          </h2>

          <div className="mt-4 space-y-6">
            {experiences.map((exp) => (
              <article
                key={`${exp.title}-${exp.company}-${exp.dates}`}
                className="rounded-lg border border-white/10 p-4 bg-black/20"
              >
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-semibold">
                    {exp.title} — <span className="text-gray-100">{exp.company}</span>
                  </h3>
                  <p className="text-sm text-gray-300">
                    {exp.dates}
                    {exp.location ? ` • ${exp.location}` : ""}
                  </p>
                </div>

                <ul className="mt-3 list-disc list-inside text-gray-200 space-y-1">
                  {exp.bullets.map((b, idx) => (
                    <li key={idx}>{b}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Training */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold border-b border-gray-600 pb-2">
            Training & Certifications
          </h2>

          <ul className="mt-3 list-disc list-inside text-gray-200 space-y-1">
            {certifications.map((c) => (
              <li key={c.label}>{c.label}</li>
            ))}
          </ul>
        </section>

        {/* Digestif */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold border-b border-gray-600 pb-2">
            Digestif
          </h2>

          <p className="mt-3 text-gray-200 leading-relaxed">
            Craft cocktails are my forte, whiskey is my specialty, and beer is my
            passion—but I can elevate even the simplest drink into an artful
            potion. I’m a fast, creative bartender looking for a clean,
            professional place to make guests happy with a bite and a drink in
            whatever capacity I can—bartending, serving, or prep shifts.
          </p>

          <p className="mt-3 text-sm italic text-gray-300">
            References available upon request. Cheers.
          </p>
        </section>

        {/* Back */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md bg-blue-500 px-6 py-2 text-white hover:bg-blue-600 transition-colors"
          >
            Back
          </Link>
        </div>
      </section>
    </main>
  );
}
