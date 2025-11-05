import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface County {
  name: string;
  slug: string;
  state: string;
}

interface CountyListProps {
  counties: Record<string, County[]>;
}

export const CountyList = ({ counties }: CountyListProps) => {
  const letters = Object.keys(counties).sort();

  return (
    <div className="space-y-8">
      {letters.map((letter) => (
        <div key={letter} id={`county${letter}`} className="scroll-mt-24">
          <Card className="bg-secondary border-border shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-3xl font-bold text-foreground">{letter}</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="text-muted-foreground hover:text-foreground"
                >
                  <a href="#top">Back to Top ↑</a>
                </Button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {counties[letter].map((county) => (
                  <a
                    key={county.slug}
                    href={`/process-server/${county.state.toLowerCase()}/county/${county.slug}`}
                    className="text-primary hover:underline hover:text-primary-hover transition-colors"
                  >
                    {county.name} County
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
};
