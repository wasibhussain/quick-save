
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SectionContainer } from '@/components/ui/SectionContainer';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <SectionContainer>
          <h1 className="text-3xl font-bold font-headline mb-4 text-primary text-center">QuickSave App Privacy Policy</h1>
          <p className="text-sm text-muted-foreground mb-10 text-center">Last Updated: May 30, 2025</p>

          <div className="max-w-3xl mx-auto space-y-6">
            <div>
              <h2 className="text-2xl font-bold font-headline mt-8 mb-3 text-primary">Introduction</h2>
              <p className="mb-3">Welcome to QuickSave. Your privacy is important to us. This Privacy Policy describes how QuickSave handles your information when you use our mobile application, available on the Google Play Store.</p>
              <p>By using QuickSave, you agree to the practices described in this policy.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-headline mt-8 mb-3 text-primary">Summary</h2>
              <p>QuickSave is designed to function entirely on your device. The app saves WhatsApp status images and videos to your gallery without transmitting or storing personal data on any external servers.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-headline mt-8 mb-3 text-primary">Information We Do Not Collect</h2>
              <p className="mb-3">QuickSave does not collect, store, or transmit the following data:</p>
              <ul className="list-disc list-inside mb-3 space-y-1 pl-4">
                <li>Personal identifiers (e.g., name, email, phone number)</li>
                <li>Contact information</li>
                <li>Location data</li>
                <li>Browsing history</li>
                <li>Usage data (except limited data used by Google AdMob)</li>
                <li>Device information (except what is shared with AdMob for ads)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-headline mt-8 mb-3 text-primary">App Permissions</h2>
              <p className="mb-3">To function properly, QuickSave requests the following permissions:</p>
              <ul className="list-disc list-inside mb-3 space-y-2 pl-4">
                <li>
                  <strong>Media Access (Images & Videos):</strong> Required to access and display WhatsApp status images and videos. The app uses Android’s scoped storage model to access only the specific WhatsApp status folder. It does not request full or broad storage access.
                </li>
                <li>
                  <strong>Advertising ID:</strong> Required to serve personalized or relevant ads using Google AdMob.
                </li>
              </ul>
              <p>These permissions are used solely to support the app’s core functionality — viewing and saving WhatsApp statuses — and for displaying ads. QuickSave does not collect, transmit, or store any personal</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-headline mt-8 mb-3 text-primary">Advertising</h2>
              <p className="mb-3">QuickSave uses Google AdMob to display ads within the app.</p>
              <p className="mb-3">Google AdMob may collect non-personal data such as:</p>
              <ul className="list-disc list-inside mb-3 space-y-1 pl-4">
                <li>Device type</li>
                <li>Operating system version</li>
                <li>IP address</li>
                <li>App usage patterns</li>
              </ul>
              <p className="mb-3">This data helps serve more relevant ads and improve ad performance. QuickSave does not collect, access, or store this information on our servers.</p>
              <p className="mb-3">You may opt out of personalized advertising by:</p>
              <ul className="list-disc list-inside mb-3 space-y-1 pl-4">
                <li>Going to Settings > Google > Ads</li>
                <li>Enabling "Opt out of Ads Personalization"</li>
              </ul>
              <p>
                For details on how Google handles your data, please refer to:
                <Link href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                   👉 Google Privacy Policy
                </Link>
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-headline mt-8 mb-3 text-primary">Third-Party Services</h2>
              <p>Aside from Google AdMob for advertising purposes, QuickSave does not use any other third-party services, analytics tools, or trackers.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-headline mt-8 mb-3 text-primary">Children’s Privacy</h2>
              <p>QuickSave is not intended for use by children under the age of 13. We do not knowingly collect personal information from children. If we become aware that such information has been provided to us, we will delete it immediately.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-headline mt-8 mb-3 text-primary">Changes to This Privacy Policy</h2>
              <p>We may update this Privacy Policy periodically. Any changes will be posted on this page, along with an updated “Last Updated” date.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-headline mt-8 mb-3 text-primary">Contact Us</h2>
              <p className="mb-3">If you have any questions or concerns regarding this Privacy Policy, please contact:</p>
              <p>
                📧 Email: <a href="mailto:wasibhussain3@gmail.com" className="text-primary hover:underline">wasibhussain3@gmail.com</a>
              </p>
            </div>
          </div>
        </SectionContainer>
      </main>
      <Footer />
    </div>
  );
}
