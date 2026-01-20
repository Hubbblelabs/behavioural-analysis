import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background font-sans">
      <main className="flex flex-col items-center justify-center gap-8 p-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight">
            Behavioural Analysis
          </h1>
          <p className="text-lg text-muted-foreground max-w-md">
            Next.js 16 + Tailwind CSS 4 + shadcn/ui setup complete
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Button>Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button variant="ghost">Ghost Button</Button>
        </div>
        
        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
          <p>✓ Next.js 16.1.4</p>
          <p>✓ Tailwind CSS 4</p>
          <p>✓ shadcn/ui components</p>
          <p>✓ TypeScript</p>
          <p>✓ ESLint</p>
        </div>
      </main>
    </div>
  );
}
