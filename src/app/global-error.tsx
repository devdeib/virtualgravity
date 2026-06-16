"use client";

import { useEffect } from "react";
import "./globals.css";
import ErrorScreen from "@/components/ErrorScreen";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        <ErrorScreen
          code="500"
          title="Whoa!"
          message="Something went wrong."
          detail="A critical error occurred. Please try again in a moment."
          onRetry={reset}
        />
      </body>
    </html>
  );
}
