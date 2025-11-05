import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-1 items-center justify-center bg-primary">
        <div className="text-center text-primary-foreground px-4">
          <h1 className="mb-4 text-4xl md:text-5xl font-bold">LocalProcessServer.com</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Find trusted process servers across the United States
          </p>
          <Button
            size="lg"
            variant="secondary"
            asChild
            className="gap-2"
          >
            <a href="/state/alabama">
              View Alabama State Page <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
