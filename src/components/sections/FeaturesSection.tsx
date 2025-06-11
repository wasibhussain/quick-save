import { SectionContainer } from '@/components/ui/SectionContainer';
import { FeatureCard } from '@/components/ui/FeatureCard';
import { Eye, Download, Share2, Info, Smartphone, WifiOff, ShieldCheck, DollarSign } from 'lucide-react';

const features = [
  {
    icon: <Eye size={32} />,
    title: "Status Media Preview",
    description: "Full-screen preview of images and videos before saving.",
  },
  {
    icon: <Download size={32} />,
    title: "Save to Local Storage",
    description: "One-tap saving of statuses directly to your device.",
  },
  {
    icon: <Share2 size={32} />,
    title: "Share Status",
    description: "Directly share saved statuses with other apps or contacts.",
  },
  {
    icon: <Info size={32} />,
    title: "Media Info Display",
    description: "View file details like size, format, and date of saved media.",
  },
  {
    icon: <Smartphone size={32} />,
    title: "Dark/Light Theme",
    description: "Automatic theme switching based on your system preferences.",
  },
  {
    icon: <WifiOff size={32} />,
    title: "Offline Functionality",
    description: "App works without an internet connection for viewing and saving.",
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Privacy-Friendly",
    description: "Folder-based access, zero data collection, and local-only storage.",
  },
  {
    icon: <DollarSign size={32} />,
    title: "Ad Supported",
    description: "Non-intrusive ads help keep the app free for everyone.",
  },
];

export function FeaturesSection() {
  return (
    <SectionContainer className="bg-muted">
      <h2 className="text-3xl font-bold font-headline text-center mb-12 text-primary">
        Packed with Useful Features
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </SectionContainer>
  );
}
