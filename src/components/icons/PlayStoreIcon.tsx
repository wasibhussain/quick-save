import type { SVGProps } from 'react';

export function PlayStoreIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21.533 11.467L4.05.133A1.021 1.021 0 002.5 1.027v21.946c0 .8.7 1.333 1.55.893l17.484-11.333a1.021 1.021 0 000-1.786zM4.5 2.973L17.017 12 4.5 21.027V2.973z" />
      <path d="M4.501 2.973l7.068 4.578-3.569 3.568L4.501 12V2.973zM11.569 16.45l-3.568 3.567 7.068 4.578L20.15 12l-8.581 4.45z" />
      <path d="M11.569 7.548L15.75 12l-4.181 4.452.001-8.904z" />
    </svg>
  );
}
