import { AppProps } from 'next/dist/next-server/lib/router/router';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';


const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}