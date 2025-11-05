import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Phone } from "lucide-react";

interface ProcessServer {
  name: string;
  location: string;
  contact?: {
    phone?: string;
    email?: string;
  };
}

interface StateSidebarProps {
  stateName: string;
  servers: ProcessServer[];
}

export const StateSidebar = ({ stateName, servers }: StateSidebarProps) => {
  return (
    <div className="space-y-6">
      <Card className="border-border shadow-md">
        <CardHeader className="bg-primary text-primary-foreground">
          <CardTitle className="text-xl">
            Statewide Process Servers in {stateName}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          {servers.map((server, index) => (
            <div key={index} className="space-y-3 pb-6 border-b border-border last:border-0 last:pb-0">
              <h3 className="font-bold text-lg text-primary">{server.name}</h3>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>{server.location}</span>
              </div>
              <div className="flex flex-col gap-2">
                <Button size="sm" className="w-full">
                  Place Order
                </Button>
                {server.contact?.email && (
                  <Button variant="outline" size="sm" className="w-full gap-2">
                    <Mail className="h-4 w-4" />
                    Message
                  </Button>
                )}
                {server.contact?.phone && (
                  <Button variant="outline" size="sm" className="w-full gap-2">
                    <Phone className="h-4 w-4" />
                    Call
                  </Button>
                )}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};
