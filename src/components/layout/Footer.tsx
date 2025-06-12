
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlayStoreIcon } from '@/components/icons/PlayStoreIcon';

const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.quick.saver.app";
const PRIVACY_POLICY_URL = "/privacy-policy";
const DEVELOPER_EMAIL = "wasibhussain3@gmail.com";

export function Footer() {
  return (
    <footer className="py-10 md:py-16 bg-accent text-accent-foreground mt-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Column 1: App Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold font-headline mb-3">QuickSave</h3>
            <p className="text-sm opacity-90 leading-relaxed">
              Privacy-focused WhatsApp status saver for Android devices. Save, share, and manage status content locally on your device. QuickSave is designed with simplicity and your privacy in mind.
            </p>
            <div className="mt-6">
              <Button asChild variant="default" size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
                  <PlayStoreIcon className="w-6 h-6 mr-2" />
                  Download on Google Play
                </Link>
              </Button>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold font-headline mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                  Download App
                </Link>
              </li>
              <li>
                <Link href={PRIVACY_POLICY_URL} className="hover:opacity-80 transition-opacity">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a href={`mailto:${DEVELOPER_EMAIL}`} className="hover:opacity-80 transition-opacity">
                  Support
                </a>
              </li>
              <li>
                <Link href="#features" className="hover:opacity-80 transition-opacity">
                  Features
                </Link>
              </li>
                 <li>
                <Link href="#how-it-works" className="hover:opacity-80 transition-opacity">
                  How it Works
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Key Features List */}
          <div>
            <h4 className="text-lg font-semibold font-headline mb-3">Key Features</h4>
            <ul className="space-y-1.5 text-sm opacity-90">
              <li>WhatsApp Status Saving</li>
              <li>Full-Screen Media Preview</li>
              <li>Direct Sharing Capabilities</li>
              <li>Strong Privacy Protection</li>
              <li>Full Offline Functionality</li>
              <li>Dark/Light Theme Support</li>
            </ul>
          </div>
        </div>

        <div className="text-center text-sm border-t border-accent-foreground/30 pt-8">
          <p className="mb-1">&copy; {new Date().getFullYear()} QuickSave by Wasib Zameer. All rights reserved.</p>
          <p>Developed with ❤️ for privacy-conscious users worldwide.</p>
        </div>
      </div>
    </footer>
  );
}
