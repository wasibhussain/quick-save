import { SectionContainer } from '@/components/ui/SectionContainer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const steps = [
  {
    title: "Install & Grant Permission",
    description: "Download QuickSave from the Google Play Store. On first launch, grant the necessary folder access permission to view WhatsApp statuses."
  },
  {
    title: "Discover Media",
    description: "Open QuickSave anytime to see currently available WhatsApp statuses from your contacts, neatly organized into Images and Videos tabs."
  },
  {
    title: "Preview & Save/Share",
    description: "Tap on any status thumbnail to preview it in full-screen. Use the intuitive buttons to save the media to your device or share it directly."
  }
];

export function HowItWorksSection() {
  return (
    <SectionContainer>
      <h2 className="text-3xl font-bold font-headline text-center mb-12 text-primary">
        Simple Steps to Save Statuses
      </h2>
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="shadow-lg">
              <CardHeader>
                <div className="flex items-center mb-3">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-3">
                    {index + 1}
                  </div>
                  <CardTitle className="text-xl font-headline text-primary">{step.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
