import Link from 'next/link';
import React, { memo } from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps): React.ReactElement {
  return (
    <div>
      <Link href="/">home</Link>

      {children}
    </div>
  );
}

export default memo(Layout);
