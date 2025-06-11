
import { SectionContainer } from '@/components/ui/SectionContainer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, User, MapPin, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const PRIVACY_POLICY_URL = "/privacy-policy";

export function DeveloperSection() {
  return (
    <SectionContainer id="developer" className="bg-muted">
      <h2 className="text-3xl font-bold font-headline text-center mb-12 text-primary">
        Meet the Developer
      </h2>
      <Card className="max-w-2xl mx-auto shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-headline text-center text-primary">Wasib Zameer</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center">
            <Mail className="w-5 h-5 mr-3 text-accent" />
            <a href="mailto:wasibhussain3@gmail.com" className="text-foreground hover:text-primary">
              wasibhussain3@gmail.com
            </a>
          </div>
          <div className="flex items-center">
            <Phone className="w-5 h-5 mr-3 text-accent" />
            <a href="tel:+923063235875" className="text-foreground hover:text-primary">
              +92 306 3235875
            </a>
          </div>
          <div className="flex items-start">
            <MapPin className="w-5 h-5 mr-3 text-accent mt-1 flex-shrink-0" />
            <p className="text-foreground">
              Karachi, Pakistan
            </p>
          </div>
          <div className="flex items-center">
            <ExternalLink className="w-5 h-5 mr-3 text-accent" />
            <Link href={PRIVACY_POLICY_URL} className="text-foreground hover:text-primary underline">
              View Privacy Policy
            </Link>
          </div>
        </CardContent>
      </Card>
    </SectionContainer>
  );
}
