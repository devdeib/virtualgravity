"use client";

import { useEffect } from "react";
import ErrorScreen from "@/components/ErrorScreen";

export default function Error({
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
    <ErrorScreen
      code="500"
      title="Whoa!"
      message="Something went wrong."
      detail="An unexpected error occurred on our end. Please try again in a moment."
      onRetry={reset}
    />
  );
}
