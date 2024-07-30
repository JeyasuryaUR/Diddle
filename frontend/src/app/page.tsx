import { Navbar } from "@/components";
import About from "@/components/About";
import KeyFeatures from "@/components/KeyFeatures";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen h-screen bg-[#1b1b1b] text-white font-Poppins">
      <section className="flex flex-col items-center justify-center h-full text-center p-8 bg-[#1b1b1b] text-white">
        <h1 className="text-5xl font-bold mb-4 text-[#eeeeee]">
          Welcome to Diddle
        </h1>
        <p className="text-2xl mb-4 text-[#00aaff] italic animate-bounce">
          Diddle is not just a platform! it’s a revolution in how we perceive
          learning and earning.
        </p>
        <div className="flex gap-16 justify-center px-[18vh]">
          <div className="bg-[#f6e320] border-2 border-[#f6e320] p-6 rounded-lg shadow-lg w-2/3 relative">
            <h3 className="text-3xl font-bold mb-4 text-black">Diddler</h3>
            <div className="flex gap-4">
              <div className="bg-[#ed1b24] border-2 border-[#f6e320] p-6 rounded-lg shadow-lg w-1/2 relative">
                <h4 className="text-2xl font-semibold mb-2 text-white">
                  Freelancer
                </h4>
                <p className="text-white">
                  Individuals seeking projects to apply their skills and earn
                  income.
                </p>
              </div>
              <div className="bg-[#00aaff] border-2 border-[#f6e320] p-6 rounded-lg shadow-lg w-1/2 relative">
                <h4 className="text-2xl font-semibold mb-2 text-white">
                  Mentor
                </h4>
                <p className="text-white">
                  Individuals who possess expertise in specific skills and can
                  teach others.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#ed1b24] border-2 border-[#ed1b2666] p-6 rounded-lg shadow-lg w-1/3 relative">
            <h3 className="text-3xl font-bold mb-4 text-white">Clients</h3>
            <p className="text-white">
              Individuals or organizations looking for freelancers to complete
              projects.
            </p>
            <a
              href="/post-project"
              className="mt-4 inline-block bg-[#f6e320] text-black px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition ease-in-out duration-300"
            >
              Post a Project
            </a>
          </div>
        </div>
        <p className="text-2xl mt-8 text-[#f6e320] italic animate-bounce">
          Let’s Diddle our way to a future where skills are the ultimate
          currency.
        </p>
      </section>

      <About />
      <KeyFeatures />

      <footer className="bg-[#1b1b1b] p-4 text-center">
        <p className="text-sm text-[#f6e320]">
          © 2023 Diddle. All rights reserved. Let's get diddling!
        </p>
      </footer>
    </main>
  );
}
