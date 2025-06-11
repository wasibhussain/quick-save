import Link from 'next/link';

export function Header() {
  return (
    <header className="py-4 shadow-md bg-card">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary font-headline">
          QuickSave
        </Link>
        {/* Future navigation links can go here if needed */}
      </div>
    </header>
  );
}
