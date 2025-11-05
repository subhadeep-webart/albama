import { Button } from "@/components/ui/button";

interface City {
  name: string;
  slug: string;
}

interface PopularCitiesProps {
  cities: City[];
}

export const PopularCities = ({ cities }: PopularCitiesProps) => {
  return (
    <section className="py-8 bg-background border-b border-border">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-foreground mb-6">Popular Searches</h2>
        <div className="flex flex-wrap gap-3">
          {cities.map((city) => (
            <Button
              key={city.slug}
              variant="outline"
              asChild
              className="hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <a href={`#${city.slug}`}>{city.name}</a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};
