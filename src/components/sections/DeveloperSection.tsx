
import { SectionContainer } from '@/components/ui/SectionContainer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, User, MapPin, ExternalLink } from 'lucide-react';
import { WhatsappIcon } from '@/components/icons/WhatsappIcon'; // Import new icon
import Link from 'next/link';

const PRIVACY_POLICY_URL = "/privacy-policy";

export function DeveloperSection() {
  return (
    <SectionContainer id="developer" className="bg-muted">
      <h2 className="text-3xl font-bold font-headline text-center mb-12 text-primary">
        Meet the Developer
      </h2>
      <Card className="max-w-2xl mx-auto shadow-xl">
        <CardHeader className="text-center"> {/* Centered CardHeader */}
          <div className="mx-auto flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
            <User size={40} className="text-primary" />
          </div>
          <CardTitle className="text-2xl font-headline text-primary">Wasib Zameer</CardTitle>
        </CardHeader>
        <CardContent className="space-y-5 text-center"> {/* Centered CardContent and increased spacing */}
          <div className="flex items-center justify-center">
            <Mail className="w-5 h-5 mr-3 text-accent flex-shrink-0" />
            <a href="mailto:wasibhussain3@gmail.com" className="text-foreground hover:text-primary">
              wasibhussain3@gmail.com
            </a>
          </div>
          <div className="flex items-center justify-center">
            <WhatsappIcon className="w-5 h-5 mr-3 text-accent flex-shrink-0" /> {/* Replaced Phone icon */}
            <a href="tel:+923063235875" className="text-foreground hover:text-primary">
              +92 306 3235875
            </a>
          </div>
          <div className="flex items-center justify-center"> {/* Changed to items-center for MapPin */}
            <MapPin className="w-5 h-5 mr-3 text-accent flex-shrink-0" />
            <p className="text-foreground">
              Karachi, Pakistan
            </p>
          </div>
          <div className="flex items-center justify-center">
            <ExternalLink className="w-5 h-5 mr-3 text-accent flex-shrink-0" />
            <Link href={PRIVACY_POLICY_URL} className="text-foreground hover:text-primary underline">
              View Privacy Policy
            </Link>
          </div>
        </CardContent>
      </Card>
    </SectionContainer>
  );
}
