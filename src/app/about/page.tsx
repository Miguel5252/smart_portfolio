import bjj from "@/assets/bjj.png";
import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about Miguel Santaolalla and his work.",
};

export default function Page() {
  return (
    <section className="space-y-6">
      <H1>About Me</H1>
      <section className="space-y-3">
        <H2>Who am I?</H2>
        <p>
          My name is Miguel Santaolalla,  I am a frontend developer with experience creating a product from 0. From ideation, research, rapid prototyping, high fidelity design, testing, to final release. This allows me to think about all factors during the process from concept to final product. I know how to work hand-in-hand with developers during the transfer from design to development. I am flexible, responsible and love to create a fun and enjoyable work environment by collaborating as a team
        </p>
        <p>
          I love creating beautifully productes and cool apps
        </p>
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Programing Skills</H2>
        <p>I am a frontend developer specializing in:</p>
        <ul className="list-disc px-4">
          <li><strong>React</strong></li>
          <li><strong>Next.js 14</strong></li>
          <li><strong>Typescript</strong></li>
          <li><strong>HTML</strong></li>
          <li><strong>CSS</strong></li>
          <li><strong>Javascript</strong></li>
        </ul>
        <p>I also have experience with other tools like:</p>
        <ul className="list-disc px-4">
          <li><strong>Testing with Jest, Vitest and React Testing Library</strong></li>
          <li><strong>React Redux toolkit</strong></li>
          <li><strong>React Query</strong></li>
          <li><strong>React Router</strong></li>
          <li><strong>Github</strong></li>
          <li><strong>Custom Hooks</strong></li>
        </ul>
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Other Skills</H2>
        <p>
          I&apos;ve worked on a security instant messaging startup for twelve years, so i have leverage my knowledge in many other fields like{" "}
          <strong>Figma</strong>, <strong>Python</strong>, <strong>Jira</strong> and <strong>Agile methodologies</strong>.
        </p>
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Side projects</H2>
        <p>
          In my free time, I like to work on side projects to keep my skill
          sharp and try out new tech. Here is a list of my current projects:{" "}
        </p>
        <ul className="list-inside list-disc">
          <li>
            <a href="https://moviewiser.com" target="_blank" className="text-primary hover:underline">MovieWiser</a>{" "}- An AI-powered movie recommender based on your mood
          </li>
          <li>
            <Link href="/" className="text-primary hover:underline">Smart Portafolio</Link>{" "}- An AI Portfolio using LangChain and OpenAI LLM.
          </li>
          <li>
            <a href="https://santaolallafoto.com" target="_blank" className="text-primary hover:underline">Santaolalla Foto</a>{" "}- My Wedding photography site.
          </li>
        </ul>
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Hobbies</H2>
        <p>
          Besides programming, I love creative stuff. I love photography and i have been working as a wedding photographer many years. 
          I also practice photography in general, which has led to me winning several awards from local newspapers and even being featured in National Geographic magazine. 
          I love digital art and have some practice with Procreate on iPad
        </p>
        <p>I have a passion for technology in general and a curiosity for science, biology, and psychology.</p>
        <p>I&apos;m also very much into self-improvement</p>

        <Image
          src={bjj}
          alt="Giant Caseway photo"
          className="rounded-md"
        />
      </section>
    </section>
  );
}
