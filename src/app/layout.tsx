'use client';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { GlobalStyles } from '../styles/index';
import Providers from '@/utils/provider';
import StyledComponentsRegistry from '../../lib/registry';
import { ApolloWrapper } from '../../lib/apolloProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Rick and Morty',
  description: 'Rick and morty api',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ApolloWrapper>
          <Providers>
            <StyledComponentsRegistry>
              <GlobalStyles />
              {children}
            </StyledComponentsRegistry>
          </Providers>
        </ApolloWrapper>
      </body>
    </html>
  );
}
