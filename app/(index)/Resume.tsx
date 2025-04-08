import { Button } from "@/components/ui";
import { getSimpleIconRemotePath } from "@/lib/utils";
import { ArrowDown, BriefcaseIcon } from "lucide-react";
import Image from "next/image";
import type { FC } from "react";
import {
  siAirbnb,
  siFacebook,
  siPaloaltonetworks,
  siStarbucks,
  type SimpleIcon,
} from "simple-icons";

interface Role {
  company: string;
  title: string;
  logo: SimpleIcon;
  start: string | { label: string; dateTime: string };
  end: string | { label: string; dateTime: string };
}
interface Props {
  role: Role;
}

const Role: FC<Props> = ({ role }) => {
  let startLabel =
    typeof role.start === "string" ? role.start : role.start.label;
  let startDate =
    typeof role.start === "string" ? role.start : role.start.dateTime;

  let endLabel = typeof role.end === "string" ? role.end : role.end.label;
  let endDate = typeof role.end === "string" ? role.end : role.end.dateTime;

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full ring-1 shadow-md shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image
          src={getSimpleIconRemotePath(role.logo)}
          alt={role.logo.slug}
          className="h-7 w-7"
          width={40}
          height={40}
          unoptimized
        />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{" "}
          <span aria-hidden="true">—</span>{" "}
          <time dateTime={endDate}>{endLabel}</time>
          <span className="i-logos-airbnb"></span>
        </dd>
      </dl>
    </li>
  );
};

function Resume() {
  let resume: Array<Role> = [
    {
      company: "Planetaria",
      title: "CEO",
      logo: siPaloaltonetworks,
      start: "2019",
      end: {
        label: "Present",
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: "Airbnb",
      title: "Product Designer",
      logo: siAirbnb,
      start: "2014",
      end: "2019",
    },
    {
      company: "Facebook",
      title: "iOS Software Engineer",
      logo: siFacebook,
      start: "2011",
      end: "2014",
    },
    {
      company: "Starbucks",
      title: "Shift Supervisor",
      logo: siStarbucks,
      start: "2008",
      end: "2011",
    },
  ];

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      <Button href="#" variant="secondary" className="group mt-6 w-full">
        Download CV
        <ArrowDown
          un-size="3.5"
          un-transition
          un-stroke="zin-400 group-active:zinc-600 dark:group-hover:white dark:group-active:zinc-50"
        />
      </Button>
    </div>
  );
}

export default Resume;
