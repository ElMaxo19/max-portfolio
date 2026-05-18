import { Spinner } from "@/components/ui/spinner";

export default function Loading() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <div className="flex flex-col items-center gap-4 text-muted-foreground">
        <Spinner className="size-8 sm:size-10 text-primary" />
        <p className="text-sm font-medium animate-pulse">
          Cargando portafolio...
        </p>
      </div>
    </div>
  );
}
