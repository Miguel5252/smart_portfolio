import me from "@/assets/me.png";
import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Bot } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import WebPreview from "@/components/WebPreview";
import moviewiser_image from '@/assets/moviewiser_screenshot.png'
import design_case_image from '@/assets/case_study.png'
import mz_image from '@/assets/mz_web.png'
import imbox_image from '@/assets/imbox_app.png'
import santaolalla_image from '@/assets/santaolalla_foto.png'
import FakeSearchBar from "@/components/ui/FakeSearchBar";
import smart_pf from '@/assets/smart_portfolio.png'

export const metadata: Metadata = {
  title: "Miguel Santaolalla - Smart Portfolio",
};

export default function Home() {
  return (
    <>
      <section className="px-1 py-8">
        <section className="flex flex-col items-center gap-8 justify-center p-7">
          <div className="space-y-3 flex flex-col items-center">
            <H1 className="text-center sm:text-start">Hi, I&apos;m Miguel 👋</H1>
            <p className="text-center sm:text-start">
              I&apos;m a Frontend developer and UX Designer.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src={me}
              alt="A photo of me"
              height={200}
              width={200}
              className="aspect-square rounded-full border-2 object-cover shadow-md dark:border-foreground"
            />
          </div>
        </section>
        <section className="space-y-3 text-center flex flex-col items-center">
          <H2>Ask the chatbot anything about me</H2>
          <FakeSearchBar />
         
          <p className="max-w-2xl text-secondary-foreground">
            Click the little <Bot className="inline pb-1" /> icon in the top bar
            to activate the AI chat. You can ask the chatbot any question about me
            and it will find the relevant info on this website. The bot can even
            provide links to pages you&apos;re looking for.
          </p>
        </section>

      </section>

      <section className='pt-10'>
        <H2>Some of my works</H2>
        <div className='flex flex-row flex-wrap pb-24 gap-12 justify-center py-4'>
          <WebPreview
            title="Movie recommendations web by AI"
            description="In this project, I leverage the power of several APIs such as TMDB and OpenAI to create a movie AI recommendation system that provides users with tailored movie suggestions based on their search queries. I have used technologies such as Next.js 14, TypeScript, React Redux, custom hooks, and React Query, among others."
            img={moviewiser_image}
            url="https://moviewiser.com/"
          />

          <WebPreview
            title="Blockchain play to earn web"
            description="I developed this project for a play-to-earn gaming platform, which includes a section for prospective players to apply to the Guild. These players were required to fill out a form with their details and then complete a questionnaire consisting of randomly selected questions from a JSON file."
            img={mz_image}
            url="https://mz-web-7bb6d.web.app/"
          />

          <WebPreview
            title="Smart Portfolio AI"
            description="This is the project you are currently viewing. It is an interactive portfolio that allows you to ask any questions about its content or my CV via chat, thanks to the use of LLMs and LangChain. The technologies used include Next.js 14, TypeScript, Tailwind, custom hooks, among others."
            img={smart_pf}
            url="https://miguelsantaolalla-smart-portfolio.vercel.app/"
          />    

          <WebPreview
            title="Mobile App Case study"
            description="Here I present a quick summary of my work process on a real-life project where I was tasked with redesigning an entire mobile application for both Android and iOS platforms."
            img={design_case_image}
            url="https://www.uxfol.io/p/647606b8/036324f8"
          />

          <WebPreview
            title="Wedding Photographer web"
            description="This is my wedding photography website. In addition to my passion for design, another one of my passions is photography, and I dedicate my free time to capturing wedding moments"
            img={santaolalla_image}
            url="https://santaolallafoto.com/"
          />

          <WebPreview
            title="IMBox App web"
            description="In this project, I designed and created the website for my current job at IMBox Me which showcases the possibilities and functionalities of a secure communications app designed specifically for law enforcement, military, and government agencies"
            img={imbox_image}
            url="https://web-imbox-app.web.app/"
          />
        </div>
      </section>
    </>
  );
}
