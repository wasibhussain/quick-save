import Image from 'next/image';
import { SectionContainer } from '@/components/ui/SectionContainer';

const screenshots = [
  { src: "https://play-lh.googleusercontent.com/DCxlDY-l0-kT31nb1X1u6Je3PQwAbVBht7umisoClvuGSRbTZmSXXoxn597w9vZrBcg=w5120-h2880-rw", alt: "QuickSave Main Screen", hint: "app interface" },
  { src: "https://play-lh.googleusercontent.com/jBY33zq8Mn2NnE7o217TfiI9VK4cmOV77rkty8SgDqDYvoTBNrVYhCkYMwBx7OcViYc=w5120-h2880-rw", alt: "QuickSave Image Preview", hint: "image viewer" },
  { src: "https://play-lh.googleusercontent.com/Dhno64ZyW2vuzffu75mllDFkAh9DZlXhORqYlxmNRz50QL-ktUT7gWGtkhtCa6ILAA=w5120-h2880-rw", alt: "QuickSave Settings", hint: "app settings" },
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
              width={250}
              height={500}
              className="w-full h-auto object-contain"
              data-ai-hint={screenshot.hint}
            />
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
