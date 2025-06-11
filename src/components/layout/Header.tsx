import Link from 'next/link';
import Image from 'next/image';

export function Header() {
  return (
    <header className="sticky top-0 z-50 py-4 shadow-md bg-accent text-primary-foreground">
      <div className="container mx-auto px-6 flex flex-wrap justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold font-headline">
          <Image
            src="https://play-lh.googleusercontent.com/t84G9H6zX1Y0sNKKBFBTNGPnHjaRDBcQ_z_8yrrXspFQlqVEFxaXFuJIk_8GXO1UB_MN=w240-h480-rw"
            alt="QuickSave App Icon"
            width={32}
            height={32}
            className="rounded-md"
          />
          QuickSave
        </Link>
        <nav className="mt-2 sm:mt-0">
          <ul className="flex items-center space-x-4 sm:space-x-6 text-sm sm:text-base">
            <li><Link href="#features" className="hover:opacity-80 transition-opacity">Features</Link></li>
            <li><Link href="#how-it-works" className="hover:opacity-80 transition-opacity">How it Works</Link></li>
            <li><Link href="#developer" className="hover:opacity-80 transition-opacity">Developer</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
