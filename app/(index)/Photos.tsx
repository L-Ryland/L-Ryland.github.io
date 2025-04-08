import { cx } from "@emotion/css";
import Image from "next/image";

const Photos = () => {
  let rotations = [
    "rotate-2",
    "-rotate-2",
    "rotate-2",
    "rotate-2",
    "-rotate-2",
  ];

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {Array(5)
          .fill(null)
          .map((image, imageIndex) => (
            <div
              key={imageIndex}
              className={cx(
                "relative aspect-9/10 w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800",
                rotations[imageIndex % rotations.length],
              )}
            >
              <Image
                src={`/images/photos/image-${imageIndex + 1}.jpg`}
                alt=""
                sizes="(min-width: 640px) 18rem, 11rem"
                className="absolute inset-0 h-full w-full object-cover"
                width={11 * 4}
                height={18 * 4}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Photos;
