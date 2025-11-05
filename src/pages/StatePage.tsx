import { StateHeader } from "@/components/StateHeader";
import { StateHero } from "@/components/StateHero";
import { PopularCities } from "@/components/PopularCities";
import { AlphabetNav } from "@/components/AlphabetNav";
import { CityList } from "@/components/CityList";
import { CountyList } from "@/components/CountyList";
import { StateSidebar } from "@/components/StateSidebar";
import { Footer } from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

// Sample data - in production, this would come from an API or database
const alabamaCities = {
  A: [
    { name: "Alabaster", slug: "alabaster", state: "AL" },
    { name: "Albertville", slug: "albertville", state: "AL" },
    { name: "Alexander City", slug: "alexander-city", state: "AL" },
    { name: "Alex City", slug: "alex-city", state: "AL" },
    { name: "Andalusia", slug: "andalusia", state: "AL" },
    { name: "Anniston", slug: "anniston", state: "AL" },
    { name: "Arley", slug: "arley", state: "AL" },
    { name: "Athens", slug: "athens", state: "AL" },
    { name: "Atmore", slug: "atmore", state: "AL" },
    { name: "Auburn", slug: "auburn", state: "AL" },
  ],
  B: [
    { name: "Banks", slug: "banks", state: "AL" },
    { name: "Bessemer", slug: "bessemer", state: "AL" },
    { name: "Birmingham", slug: "birmingham", state: "AL" },
    { name: "Bluff Park", slug: "bluff-park", state: "AL" },
    { name: "Boaz", slug: "boaz", state: "AL" },
    { name: "Brewton", slug: "brewton", state: "AL" },
  ],
  C: [
    { name: "Center Point", slug: "center-point", state: "AL" },
    { name: "Chickasaw", slug: "chickasaw", state: "AL" },
    { name: "Clanton", slug: "clanton", state: "AL" },
    { name: "Coaling", slug: "coaling", state: "AL" },
    { name: "Cottonton", slug: "cottonton", state: "AL" },
    { name: "Cullman", slug: "cullman", state: "AL" },
  ],
  D: [
    { name: "Decatur", slug: "decatur", state: "AL" },
    { name: "Dothan", slug: "dothan", state: "AL" },
  ],
  E: [
    { name: "East Brewton", slug: "east-brewton", state: "AL" },
    { name: "Eight Mile", slug: "eight-mile", state: "AL" },
    { name: "Enterprise", slug: "enterprise", state: "AL" },
    { name: "Eufaula", slug: "eufaula", state: "AL" },
  ],
  F: [
    { name: "Fairhope", slug: "fairhope", state: "AL" },
    { name: "Florence", slug: "florence", state: "AL" },
    { name: "Foley", slug: "foley", state: "AL" },
    { name: "Fort Payne", slug: "fort-payne", state: "AL" },
  ],
  G: [
    { name: "Gadsden", slug: "gadsden", state: "AL" },
    { name: "Gainestown", slug: "gainestown", state: "AL" },
    { name: "Gulf Shores", slug: "gulf-shores", state: "AL" },
  ],
  H: [
    { name: "Homewood", slug: "homewood", state: "AL" },
    { name: "Hoover", slug: "hoover", state: "AL" },
    { name: "Hueytown", slug: "hueytown", state: "AL" },
    { name: "Huntsville", slug: "huntsville", state: "AL" },
  ],
  J: [
    { name: "Jackson", slug: "jackson", state: "AL" },
    { name: "Jasper", slug: "jasper", state: "AL" },
  ],
  L: [
    { name: "Leeds", slug: "leeds", state: "AL" },
  ],
  M: [
    { name: "Madison", slug: "madison", state: "AL" },
    { name: "Mathews", slug: "mathews", state: "AL" },
    { name: "Mobile", slug: "mobile", state: "AL" },
    { name: "Monroeville", slug: "monroeville", state: "AL" },
    { name: "Montgomery", slug: "montgomery", state: "AL" },
    { name: "Mountain Brook", slug: "mountain-brook", state: "AL" },
    { name: "Muscle Shoals", slug: "muscle-shoals", state: "AL" },
  ],
  N: [
    { name: "Northport", slug: "northport", state: "AL" },
  ],
  O: [
    { name: "Oak Grove", slug: "oak-grove", state: "AL" },
    { name: "Opelika", slug: "opelika", state: "AL" },
    { name: "Ozark", slug: "ozark", state: "AL" },
  ],
  P: [
    { name: "Pell City", slug: "pell-city", state: "AL" },
    { name: "Phenix City", slug: "phenix-city", state: "AL" },
    { name: "Prattville", slug: "prattville", state: "AL" },
    { name: "Prichard", slug: "prichard", state: "AL" },
  ],
  R: [
    { name: "Rehobeth", slug: "rehobeth", state: "AL" },
    { name: "Repton", slug: "repton", state: "AL" },
    { name: "Robertsdale", slug: "robertsdale", state: "AL" },
    { name: "Russellville", slug: "russellville", state: "AL" },
  ],
  S: [
    { name: "Sardis City", slug: "sardis-city", state: "AL" },
    { name: "Scottsboro", slug: "scottsboro", state: "AL" },
    { name: "Selma", slug: "selma", state: "AL" },
    { name: "Spanish Fort", slug: "spanish-fort", state: "AL" },
    { name: "Sylacauga", slug: "sylacauga", state: "AL" },
  ],
  T: [
    { name: "Talladega", slug: "talladega", state: "AL" },
    { name: "Tallassee", slug: "tallassee", state: "AL" },
    { name: "Taylor", slug: "taylor", state: "AL" },
    { name: "Theodore", slug: "theodore", state: "AL" },
    { name: "Thomasville", slug: "thomasville", state: "AL" },
    { name: "Troy", slug: "troy", state: "AL" },
    { name: "Tuscaloosa", slug: "tuscaloosa", state: "AL" },
  ],
  V: [
    { name: "Valley", slug: "valley", state: "AL" },
    { name: "Valley Grande", slug: "valley-grande", state: "AL" },
    { name: "Vestavia", slug: "vestavia", state: "AL" },
    { name: "Vestavia Hills", slug: "vestavia-hills", state: "AL" },
  ],
  W: [
    { name: "Waverly", slug: "waverly", state: "AL" },
    { name: "Westover", slug: "westover", state: "AL" },
    { name: "Wetumpka", slug: "wetumpka", state: "AL" },
  ],
};

const alabamaCounties = {
  A: [
    { name: "Autauga", slug: "autauga", state: "AL" },
  ],
  B: [
    { name: "Baldwin", slug: "baldwin", state: "AL" },
    { name: "Barbour", slug: "barbour", state: "AL" },
    { name: "Bibb", slug: "bibb", state: "AL" },
    { name: "Blount", slug: "blount", state: "AL" },
    { name: "Bullock", slug: "bullock", state: "AL" },
    { name: "Butler", slug: "butler", state: "AL" },
  ],
  C: [
    { name: "Calhoun", slug: "calhoun", state: "AL" },
    { name: "Chambers", slug: "chambers", state: "AL" },
    { name: "Cherokee", slug: "cherokee", state: "AL" },
    { name: "Chilton", slug: "chilton", state: "AL" },
    { name: "Choctaw", slug: "choctaw", state: "AL" },
    { name: "Clarke", slug: "clarke", state: "AL" },
    { name: "Clay", slug: "clay", state: "AL" },
    { name: "Cleburne", slug: "cleburne", state: "AL" },
    { name: "Coffee", slug: "coffee", state: "AL" },
    { name: "Colbert", slug: "colbert", state: "AL" },
    { name: "Conecuh", slug: "conecuh", state: "AL" },
    { name: "Coosa", slug: "coosa", state: "AL" },
    { name: "Covington", slug: "covington", state: "AL" },
    { name: "Crenshaw", slug: "crenshaw", state: "AL" },
    { name: "Cullman", slug: "cullman", state: "AL" },
  ],
  D: [
    { name: "Dale", slug: "dale", state: "AL" },
    { name: "Dallas", slug: "dallas", state: "AL" },
    { name: "De Kalb", slug: "de-kalb", state: "AL" },
  ],
  E: [
    { name: "Elmore", slug: "elmore", state: "AL" },
    { name: "Escambia", slug: "escambia", state: "AL" },
    { name: "Etowah", slug: "etowah", state: "AL" },
  ],
  F: [
    { name: "Fayette", slug: "fayette", state: "AL" },
    { name: "Franklin", slug: "franklin", state: "AL" },
  ],
  G: [
    { name: "Geneva", slug: "geneva", state: "AL" },
    { name: "Greene", slug: "greene", state: "AL" },
  ],
  H: [
    { name: "Hale", slug: "hale", state: "AL" },
    { name: "Henry", slug: "henry", state: "AL" },
    { name: "Houston", slug: "houston", state: "AL" },
  ],
  J: [
    { name: "Jackson", slug: "jackson", state: "AL" },
    { name: "Jefferson", slug: "jefferson", state: "AL" },
  ],
  L: [
    { name: "Lamar", slug: "lamar", state: "AL" },
    { name: "Lauderdale", slug: "lauderdale", state: "AL" },
    { name: "Lawrence", slug: "lawrence", state: "AL" },
    { name: "Lee", slug: "lee", state: "AL" },
    { name: "Limestone", slug: "limestone", state: "AL" },
    { name: "Lowndes", slug: "lowndes", state: "AL" },
  ],
  M: [
    { name: "Macon", slug: "macon", state: "AL" },
    { name: "Madison", slug: "madison", state: "AL" },
    { name: "Marengo", slug: "marengo", state: "AL" },
    { name: "Marion", slug: "marion", state: "AL" },
    { name: "Marshall", slug: "marshall", state: "AL" },
    { name: "Mobile", slug: "mobile", state: "AL" },
    { name: "Monroe", slug: "monroe", state: "AL" },
    { name: "Montgomery", slug: "montgomery", state: "AL" },
    { name: "Morgan", slug: "morgan", state: "AL" },
  ],
  P: [
    { name: "Perry", slug: "perry", state: "AL" },
    { name: "Pickens", slug: "pickens", state: "AL" },
    { name: "Pike", slug: "pike", state: "AL" },
  ],
  R: [
    { name: "Randolph", slug: "randolph", state: "AL" },
    { name: "Russell", slug: "russell", state: "AL" },
  ],
  S: [
    { name: "Saint Clair", slug: "saint-clair", state: "AL" },
    { name: "Shelby", slug: "shelby", state: "AL" },
    { name: "Sumter", slug: "sumter", state: "AL" },
  ],
  T: [
    { name: "Talladega", slug: "talladega", state: "AL" },
    { name: "Tallapoosa", slug: "tallapoosa", state: "AL" },
    { name: "Tuscaloosa", slug: "tuscaloosa", state: "AL" },
  ],
  W: [
    { name: "Walker", slug: "walker", state: "AL" },
    { name: "Washington", slug: "washington", state: "AL" },
    { name: "Wilcox", slug: "wilcox", state: "AL" },
    { name: "Winston", slug: "winston", state: "AL" },
  ],
};

const popularCities = [
  { name: "Anniston", slug: "anniston" },
  { name: "Birmingham", slug: "birmingham" },
  { name: "Dothan", slug: "dothan" },
  { name: "Florence", slug: "florence" },
  { name: "Gadsden", slug: "gadsden" },
  { name: "Huntsville", slug: "huntsville" },
  { name: "Mobile", slug: "mobile" },
  { name: "Montgomery", slug: "montgomery" },
  { name: "Tuscaloosa", slug: "tuscaloosa" },
  { name: "Vestavia", slug: "vestavia" },
];

const featuredServers = [
  {
    name: "LawServePro",
    location: "Huntsville, AL",
    contact: {
      phone: "(256) 555-0123",
      email: "info@lawservepro.com",
    },
  },
  {
    name: "Alabama Legal Services",
    location: "Birmingham, AL",
    contact: {
      phone: "(205) 555-0456",
      email: "contact@alabamalegal.com",
    },
  },
  {
    name: "Mobile Process Servers",
    location: "Mobile, AL",
    contact: {
      phone: "(251) 555-0789",
    },
  },
];

const StatePage = () => {
  return (
    <div id="top" className="min-h-screen bg-background">
      <StateHeader stateName="Alabama" />
      
      <StateHero stateName="Alabama" />
      
      <PopularCities cities={popularCities} />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-12">
            {/* Cities Section */}
            <section id="cities">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-foreground mb-2">
                  Search Alabama Process Servers by City
                </h2>
                <Separator className="my-4" />
                <AlphabetNav prefix="city" />
              </div>
              <CityList cities={alabamaCities} />
            </section>

            {/* Counties Section */}
            <section id="counties">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-foreground mb-2">
                  Search Alabama Process Servers by County
                </h2>
                <Separator className="my-4" />
                <AlphabetNav prefix="county" />
              </div>
              <CountyList counties={alabamaCounties} />
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-6">
              <StateSidebar stateName="Alabama" servers={featuredServers} />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default StatePage;
