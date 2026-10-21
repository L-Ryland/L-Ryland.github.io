"use client";

import { Button } from "@/components/ui";
import type { ReactNode } from "react";
import { useState } from "react";

type RemoteDownloadProps = {
  url: string;
  filename: string;
  children: ReactNode;
  className?: string;
  errorMessage?: string;
};

export default function RemoteDownload({
  url,
  filename,
  children,
  className,
  errorMessage = "Could not download file. Please try again.",
}: RemoteDownloadProps) {
  const [error, setError] = useState(false);

  async function download() {
    setError(false);

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Download failed (${response.status})`);

      const objectUrl = URL.createObjectURL(await response.blob());
      const link = document.createElement("a");
      link.href = objectUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.setTimeout(() => URL.revokeObjectURL(objectUrl), 1000);
    } catch {
      setError(true);
    }
  }

  return (
    <>
      <Button
        type="button"
        onClick={download}
        variant="secondary"
        className={className}
      >
        {children}
      </Button>
      {error && (
        <p role="alert" className="mt-2 text-sm text-red-600">
          {errorMessage}
        </p>
      )}
    </>
  );
}
