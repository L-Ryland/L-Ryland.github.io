import { Button, Container } from "@/components/ui";
import Newsletter from "./Newsletter";
import Resume from "./Resume";
import Photos from "./Photos";
import { BlurText, ShinyText } from "@/components/animations";
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
export default async function Home() {
  // let articles = (await getAllArticles()).slice(0, 4);
  // let articles = [];

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <BlurText
            un-text="5xl zinc-800 dark:zinc-100"
            un-font="bold"
            text="This is Ryland"
            as={"h1"}
          />
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I"m a Software Engineer who loves to create a better world.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://x.com/RylandLiu"
              aria-label="Follow on X"
              icon="i-ri-twitter-x-line"
            />
            <SocialLink
              href="https://www.instagram.com/rylandlewes/"
              aria-label="Follow on Instagram"
              icon="i-ri-instagram-line"
            />
            <SocialLink
              href="https://github.com/L-Ryland"
              aria-label="Follow on GitHub"
              icon="i-ri-github-fill"
            />
            <SocialLink
              href="https://www.linkedin.com/in/ryland-liu"
              aria-label="Follow on LinkedIn"
              icon="i-ri-linkedin-box-fill"
            />
          </div>
          <Button
            href="/assets/FullStackEngineer_RylandLiu_CV.pdf"
            target="_blank"
            variant="secondary"
            className="group mt-6 max-w-xl"
          >
            <ShinyText
              text={"Download CV"}
              disabled={false}
              speed={3}
              un-text="zinc-100 dark:zinc-100/70"
            />
            <ArrowDown
              un-size="3.5"
              un-transition="~"
              un-stroke="zin-400 group-active:zinc-600 dark:group-hover:white dark:group-active:zinc-50"
            />
          </Button>
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
