import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlayStoreIcon } from '@/components/icons/PlayStoreIcon';
import { SectionContainer } from '@/components/ui/SectionContainer';

const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.quick.saver.app";

export function HeroSection() {
  return (
    <SectionContainer className="bg-gradient-to-br from-primary/20 via-background to-background text-center pt-16 md:pt-24">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-6 text-primary">
            QuickSave: Your Private WhatsApp Status Saver
          </h1>
          <p className="text-lg md:text-xl text-foreground mb-8">
            Easily save and manage WhatsApp status photos and videos directly to your device. Privacy first, no data collection, entirely local.
          </p>
          <Button asChild variant="default" size="lg" className="bg-accent hover:bg-opacity-80 text-accent-foreground shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Link href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
              <PlayStoreIcon className="w-6 h-6 mr-2" />
              Download on Google Play
            </Link>
          </Button>
        </div>
        <div className="flex justify-center">
          <Image
            src="https://play-lh.googleusercontent.com/jBY33zq8Mn2NnE7o217TfiI9VK4cmOV77rkty8SgDqDYvoTBNrVYhCkYMwBx7OcViYc=w5120-h2880-rw"
            alt="QuickSave App Screenshot"
            width={350}
            height={700}
            className="rounded-xl shadow-2xl object-contain"
            data-ai-hint="app mockup phone"
            priority
          />
        </div>
      </div>
    </SectionContainer>
  );
}
