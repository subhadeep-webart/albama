interface StateHeroProps {
  stateName: string;
}

export const StateHero = ({ stateName }: StateHeroProps) => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {stateName} Process Servers
          </h1>
          <p className="text-lg text-muted-foreground">
            Find and hire {stateName} Process Servers by searching through local{" "}
            <a href="#cities" className="text-primary hover:underline font-medium">
              cities
            </a>{" "}
            and{" "}
            <a href="#counties" className="text-primary hover:underline font-medium">
              counties
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};
