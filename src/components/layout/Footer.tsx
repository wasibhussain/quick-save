import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlayStoreIcon } from '@/components/icons/PlayStoreIcon';

const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.quick.saver.app";
const PRIVACY_POLICY_URL = "https://sites.google.com/view/quick-save-p-policy/home?pli=1";

export function Footer() {
  return (
    <footer className="py-8 bg-muted text-muted-foreground mt-12">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-6">
          <Button asChild variant="default" size="lg" className="bg-accent hover:bg-opacity-80 text-accent-foreground">
            <Link href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
              <PlayStoreIcon className="w-6 h-6 mr-2" />
              Download on Google Play
            </Link>
          </Button>
        </div>
        <div className="mb-2">
          <Link href={PRIVACY_POLICY_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary underline">
            Privacy Policy
          </Link>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} QuickSave. All rights reserved.
        </p>
        <p className="text-xs mt-1">
          Developed by Wasib Zameer.
        </p>
         <p className="text-xs mt-2">
          WhatsApp is a trademark of WhatsApp Inc., registered in the U.S. and other countries. QuickSave is not affiliated with WhatsApp Inc.
        </p>
      </div>
    </footer>
  );
}
