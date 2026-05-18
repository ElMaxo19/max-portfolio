"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Error capturado por Next.js:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 text-center">
      <div className="bg-card border border-border rounded-xl p-6 sm:p-8 max-w-md w-full flex flex-col items-center shadow-sm">
        <div className="bg-destructive/10 p-3 rounded-full mb-4">
          <AlertCircle className="size-8 text-destructive" />
        </div>
        <h2 className="text-xl font-semibold mb-2">¡Ups! Algo salió mal</h2>
        <p className="text-muted-foreground text-sm mb-6">
          Ocurrió un error inesperado al cargar la sección. Puedes intentar recargar.
        </p>
        <Button onClick={() => reset()} className="w-full sm:w-auto">
          Intentar de nuevo
        </Button>
      </div>
    </div>
  );
}
