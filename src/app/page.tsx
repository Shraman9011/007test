import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Welcome to rtntnrtnffdf</h1>
      <p className="text-lg mb-8">This is your Next.js frontend.</p>
      <Button onClick={() => alert('Hello from Shadcn UI!')}>Click Me</Button>
    </main>
  );
}
