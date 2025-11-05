import { Button } from "@/components/ui/button";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

interface AlphabetNavProps {
  prefix?: string;
}

export const AlphabetNav = ({ prefix = "city" }: AlphabetNavProps) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
      {alphabet.map((letter) => (
        <Button
          key={letter}
          variant="outline"
          size="sm"
          asChild
          className="w-10 h-10 p-0 hover:bg-primary hover:text-primary-foreground font-semibold"
        >
          <a href={`#${prefix}${letter}`}>{letter}</a>
        </Button>
      ))}
    </div>
  );
};
