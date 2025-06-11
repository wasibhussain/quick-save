import Image from 'next/image';
import { SectionContainer } from '@/components/ui/SectionContainer';

const screenshots = [
  { src: "https://placehold.co/300x600.png", alt: "QuickSave Main Screen", hint: "app interface" },
  { src: "https://placehold.co/300x600.png", alt: "QuickSave Image Preview", hint: "image viewer" },
  { src: "https://placehold.co/300x600.png", alt: "QuickSave Settings", hint: "app settings" },
];

export function ScreenshotsSection() {
  return (
    <SectionContainer className="bg-muted">
      <h2 className="text-3xl font-bold font-headline text-center mb-12 text-primary">
        See QuickSave in Action
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {screenshots.map((screenshot, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
            <Image
              src={screenshot.src}
              alt={screenshot.alt}
              width={300}
              height={600}
              className="w-full h-auto object-contain"
              data-ai-hint={screenshot.hint}
            />
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
