import ErrorBoundary from '@/components/error-boundary';
import { Head } from '@/components/head';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head title={pageProps.title} description={pageProps.searchText} />
      <ErrorBoundary>
        <Component {...pageProps} />
      </ErrorBoundary>
    </>
  );
}
