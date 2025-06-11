import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionContainerProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements; // To allow rendering as different HTML elements e.g. section, div
}

export function SectionContainer({ children, className, as: Component = 'section', ...props }: SectionContainerProps) {
  return (
    <Component className={cn('py-12 md:py-16', className)} {...props}>
      <div className="container mx-auto px-6">
        {children}
      </div>
    </Component>
  );
}
