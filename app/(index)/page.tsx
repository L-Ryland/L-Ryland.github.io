import { Container } from "@/components/ui";
import Newsletter from "./Newsletter";
import Resume from "./Resume";
import Photos from "./Photos";
import RemoteDownload from "@/components/RemoteDownload";
import { BlurText } from "@/components/animations";
import Link, { LinkProps } from "next/link";
import type { FC } from "react";
import { ArrowDown } from "lucide-react";

const SocialLink: FC<{ icon: string } & LinkProps> = ({ icon, ...props }) => {
  return (
    <Link
      className="group -m-1 p-1 text-zinc-500 dark:text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
      {...props}
    >
      <svg un-size="6" className={icon} />
    </Link>
  );
};

const introduction = {
  title: "This is Ryland",
  description: `
I'm a cognitively structured, high-intuition thinker with deep but non-expressive emotions.
My nervous system is highly sensitive to emotional incoherence in others.
That contributes to my desire of becoming a Software Engineer. Along with my passion for technology,
I'm also a big fan of psychology, neurology, or ... music?
  `,
  socialLinks: [
    {
      platform: "X",
      url: "https://x.com/RylandLiu",
      icon: "i-ri-twitter-x-line",
    },
    {
      platform: "Instagram",
      url: "https://www.instagram.com/rylandliu.io",
      icon: "i-ri-instagram-line",
    },
    {
      platform: "Github",
      url: "https://github.com/L-Ryland",
      icon: "i-ri-github-fill",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/ryland-liu",
      icon: "i-ri-linkedin-box-fill",
    },
  ],
  resume: {
    url: "https://raw.githubusercontent.com/L-Ryland/ryland-resume/refs/heads/resume/fullstack/resume.frontend.pdf",
    filename: "RylandLiu_CV.pdf",
  },
};
export default async function Home() {
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <BlurText
            un-text="5xl zinc-800 dark:zinc-100"
            un-font="bold"
            text={introduction.title}
            as="h1"
          />
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400 whitespace-pre-line">
            {introduction.description}
          </p>
          <div className="mt-6 flex gap-6">
            {introduction.socialLinks.map(({ platform, url, icon }) => (
              <SocialLink
                key={platform}
                href={url}
                aria-label={`Follow on ${platform}`}
                icon={icon}
              />
            ))}
          </div>
          <RemoteDownload
            url={introduction.resume.url}
            filename={introduction.resume.filename}
            className="group mt-6 max-w-xl"
          >
            Download CV
            <ArrowDown
              un-size="3.5"
              un-transition="~"
              un-stroke="zin-400 group-active:zinc-600 dark:group-hover:white dark:group-active:zinc-50"
            />
          </RemoteDownload>
        </div>
      </Container>
      <Photos />
    </>
  );
}

const Details = () => (
  <Container className="mt-24 md:mt-28">
    <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
      <div className="flex flex-col gap-16">
        {/* {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))} */}
      </div>
      <div className="space-y-10 lg:pl-16 xl:pl-24">
        <Newsletter />
        <Resume />
      </div>
    </div>
  </Container>
);
