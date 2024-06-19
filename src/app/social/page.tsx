import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Media",
  description: "My social media channels and how to work with me.",
};

export default function Page() {
  return (
    <section className="space-y-6">
      <H1>Social Media</H1>
      <section className="space-y-3">
        <H2>My channels</H2>
        <p>Links to all my social accounts:</p>
        <ul className="list-inside list-disc space-y-1">
          <li>
            <a
              href="https://www.linkedin.com/in/miguel-santaolalla-43700841"
              className="text-primary hover:underline"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://www.github.com/Miguel5252"
              className="text-primary hover:underline"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/moviewiser"
              className="text-primary hover:underline"
            >
              Instagram MovieWiser
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/santaolalla.foto"
              className="text-primary hover:underline"
            >
              Instagram Santaolalla Foto
            </a>
          </li>
          <li>
            <a
              href="https://www.tiktok.com/@moviewiser"
              className="text-primary hover:underline"
            >
              TikTok MovieWiser
            </a>
          </li>
          <li>
            <a
              href="https://x.com/MovieWiserIA"
              className="text-primary hover:underline"
            >
              Twitter MovieWiser
            </a>
          </li>
        </ul>
        <hr className="border-muted" />
      </section>

      <section className="space-y-3">
        <H2>Business inquiries </H2>
        <p>
          If you want to work with me on a project or get a shoutout for your
          product on my social media channels, please contact me via email at{" "}
          <a
            href="mailto:msantaolalla@gmail.com"
            className="text-primary hover:underline"
          >
            msantaolalla@gmail.com
          </a>
        </p>
      </section>
    </section>
  );
}
