import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface City {
  name: string;
  slug: string;
  state: string;
}

interface CityListProps {
  cities: Record<string, City[]>;
}

export const CityList = ({ cities }: CityListProps) => {
  const letters = Object.keys(cities).sort();

  return (
    <div className="space-y-8">
      {letters.map((letter) => (
        <div key={letter} id={`city${letter}`} className="scroll-mt-24">
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
                {cities[letter].map((city) => (
                  <a
                    key={city.slug}
                    href={`/process-server/${city.state.toLowerCase()}/${city.slug}`}
                    className="text-primary hover:underline hover:text-primary-hover transition-colors"
                  >
                    {city.name}, {city.state}
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
