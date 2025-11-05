import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

interface StateHeaderProps {
  stateName: string;
  onSearch?: (query: string) => void;
}

export const StateHeader = ({ stateName, onSearch }: StateHeaderProps) => {
  return (
    <header className="bg-primary text-primary-foreground py-8 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">LocalProcessServer.com</h1>
          </div>
          <div className="flex gap-2 w-full md:w-auto max-w-md">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder={`Search ${stateName}...`}
                className="pl-9 bg-background text-foreground border-input"
              />
            </div>
            <Button variant="secondary" size="lg">
              Find a Process Server
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
