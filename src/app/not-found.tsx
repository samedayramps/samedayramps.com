import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-6xl font-bold tracking-tighter text-primary">
              404
            </h1>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Page Not Found
            </h2>
            <p className="max-w-[600px] text-muted-foreground text-lg leading-relaxed">
              The page you&apos;re looking for doesn&apos;t exist. It might have been moved, deleted, or you entered the wrong URL.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Button asChild size="lg">
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Go Home
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="javascript:history.back()">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Go Back
              </Link>
            </Button>
          </div>

          <div className="pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Need help? <Link href="#contact" className="text-primary hover:underline">Contact us</Link> for assistance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 