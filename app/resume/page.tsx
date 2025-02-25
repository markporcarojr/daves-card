"use client";

import { useRouter } from "next/navigation";

export default function Resume() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[url(/images/batthern.png)] text-white p-6 md:p-12">
      <div className="max-w-3xl mx-auto bg-[#1a1a1a] bg-opacity-75 shadow-lg rounded-lg p-8 backdrop-filter backdrop-blur-sm">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold">David B. Porcaro</h1>
          <p className="text-lg text-gray-400">
            Studious Bartender & Craft Beverage Specialist
          </p>
        </div>

        {/* Contact Info */}
        <div className="mt-4 text-center space-y-2">
          <p>📍 Las Vegas, NV 89129</p>
          <p>
            📞{" "}
            <a href="tel:7345786002" className="text-blue-400 hover:underline">
              (734) 578-6002
            </a>
          </p>
          <p>
            ✉️{" "}
            <a
              href="mailto:Studious.Alchemist13@gmail.com"
              className="text-blue-400 hover:underline"
            >
              Studious.Alchemist13@gmail.com
            </a>
          </p>
        </div>

        {/* Formulation */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold border-b border-gray-600 pb-2">
            Formulation: Craft Bartender
          </h2>
          <p className="mt-2 text-gray-300">
            🍹 2 Parts Culinary Experience <br />
            🍹 1 Part Passionate Beer & Cocktail Knowledge <br />
            🍹 1 Part Dedication to Guest Service
          </p>
          <p className="mt-2 italic text-gray-400">
            - Combine all ingredients and shake or stir with fast pace and
            intensity. <br />
            - Garnish with a dash of good humor and personality. Smile. <br />-
            Heavily seasoned by 15 years of fine dining and culinary expertise.
          </p>
        </div>

        {/* Skills Section */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold border-b border-gray-600 pb-2">
            Proven Skills & Abilities
          </h2>
          <ul className="mt-2 list-disc list-inside text-gray-300 space-y-1">
            <li>🍸 Expert in cocktail history & craft cocktails</li>
            <li>🍷 Extensive knowledge of spirits, wine & food pairings</li>
            <li>🍻 Beer brewing expertise & staff training experience</li>
            <li>🚀 Fast, efficient, and multi-tasking under high pressure</li>
            <li>🎯 Anticipates guest needs before they ask</li>
            <li>💻 Experience with multiple POS systems</li>
          </ul>
        </div>

        {/* Experience */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold border-b border-gray-600 pb-2">
            Experience
          </h2>
          <div className="mt-2 space-y-4">
            <div>
              <h3 className="text-xl font-semibold">
                🍸 Opening Bar Staff - Mother Wolf, Fontainebleau
              </h3>
              <p className="text-sm text-gray-400">10/2023 - 4/2024</p>
              <p className="text-gray-300 mt-1">
                Helped open the most anticipated Las Vegas resort in history,
                Fontainebleau, bringing craft cocktail excellence to the
                high-end bar.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                🍹 Director of Mixology - Sparrow & Wolf
              </h3>
              <p className="text-sm text-gray-400">3/2021 - 10/2023</p>
              <p className="text-gray-300 mt-1">
                Led the creative cocktail program at Chef Brian Howard’s
                acclaimed restaurant, designing innovative drinks and curating
                exceptional service experiences.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                🎭 Studious Alchemist Craft Catering & Consulting
              </h3>
              <p className="text-sm text-gray-400">2011 - Present</p>
              <p className="text-gray-300 mt-1">
                Delivered premium private events with custom cocktail menus,
                trained staff on spirits, and helped restaurants build craft
                cocktail programs.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                🏨 The Apparatus Room, Detroit Foundation Hotel
              </h3>
              <p className="text-sm text-gray-400">3/2017 - 10/2017</p>
              <p className="text-gray-300 mt-1">
                Integral team member setting up the bar and establishing
                high-end cocktail standards in a Michelin-level dining
                atmosphere.
              </p>
            </div>
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold border-b border-gray-600 pb-2">
            Training & Certifications
          </h2>
          <ul className="mt-2 list-disc list-inside text-gray-300 space-y-1">
            <li>✅ ServSafe (Kitchen) Certified</li>
            <li>✅ BarSmarts Advanced Graduate</li>
            <li>✅ Studied BJCP Beer Style Guidelines</li>
            <li>✅ Cicerone Certified Beer Server</li>
            <li>✅ Currently Studying CSS</li>
          </ul>
        </div>

        {/* Digestif - Final Thoughts */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold border-b border-gray-600 pb-2">
            Digestif
          </h2>
          <p className="mt-2 text-gray-300">
            Craft cocktails are my fortè and whiskey is my specialty, but I can
            spin the simplest of drinks into artful potions. I am a fast and
            creative bartender looking for a clean and professional place to
            satisfy guests. I would love a blended role encompassing any service
            role, including bartending, serving, and prep shifts.
          </p>
        </div>

        {/* References */}
        <div className="mt-6 text-gray-400 text-sm italic">
          References available upon request. Cheers! 🥂
        </div>

        {/* Back to Home */}
        <div className="mt-8 text-center">
          <button
            className="bg-blue-500 px-6 py-2 rounded-md text-white hover:bg-blue-600 transition-all"
            onClick={() => router.push("/")}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}
