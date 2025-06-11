import { SectionContainer } from '@/components/ui/SectionContainer';

export function AboutSection() {
  return (
    <SectionContainer>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold font-headline mb-6 text-primary">What is QuickSave?</h2>
        <p className="text-lg text-foreground mb-4">
          QuickSave is a privacy-focused mobile application designed for Android users who want to save WhatsApp status media (images and videos) effortlessly. Our primary goal is to provide a seamless experience, allowing you to preserve status content directly to your device's local storage.
        </p>
        <p className="text-lg text-foreground">
          We believe in privacy. QuickSave requires no user registration, collects no personal data, and does not depend on cloud storage. All your saved media remains on your device, under your control, secured with folder-based permissions for minimal access. Enjoy a clean, intuitive interface with automatic dark/light theme support.
        </p>
      </div>
    </SectionContainer>
  );
}
