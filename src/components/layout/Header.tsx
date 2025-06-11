import Link from 'next/link';
import Image from 'next/image';

export function Header() {
  return (
    <header className="py-4 shadow-md bg-card">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-primary font-headline">
          <Image
            src="https://play-lh.googleusercontent.com/t84G9H6zX1Y0sNKKBFBTNGPnHjaRDBcQ_z_8yrrXspFQlqVEFxaXFuJIk_8GXO1UB_MN=w240-h480-rw"
            alt="QuickSave App Icon"
            width={32}
            height={32}
            className="rounded-md"
          />
          QuickSave
        </Link>
        {/* Future navigation links can go here if needed */}
      </div>
    </header>
  );
}
