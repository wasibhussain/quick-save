import { SectionContainer } from '@/components/ui/SectionContainer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Lock, Users, Zap, WifiOff } from 'lucide-react';

const reasons = [
  {
    icon: <Lock className="w-8 h-8 text-primary" />,
    title: "Privacy First",
    description: "No registration, zero data collection. All media is stored locally on your device, ensuring your privacy is paramount."
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "User-Friendly Design",
    description: "Enjoy a clean, intuitive interface with automatic dark/light theme support for a comfortable viewing experience."
  },
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: "Efficient & Easy",
    description: "Save statuses with minimal friction. A simple tap is all it takes to save or share your favorite moments."
  },
  {
    icon: <WifiOff className="w-8 h-8 text-primary" />,
    title: "Reliable & Offline",
    description: "Once permissions are granted, QuickSave works flawlessly offline, allowing you to manage statuses anytime, anywhere."
  }
];

export function WhyQuickSaveSection() {
  return (
    <SectionContainer>
      <h2 className="text-3xl font-bold font-headline text-center mb-12 text-primary">
        Why Choose QuickSave?
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {reasons.map((reason, index) => (
          <Card key={index} className="shadow-lg">
            <CardHeader className="flex flex-row items-center gap-4">
              {reason.icon}
              <CardTitle className="text-xl font-headline text-primary">{reason.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground">{reason.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
}
