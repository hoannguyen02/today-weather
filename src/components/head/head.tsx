import NextHead from 'next/head';
import { ReactNode } from 'react';

type Props = {
  title?: string;
  description?: string;
  children?: ReactNode;
};
export const Head = ({
  title = 'Nguyen Van Hoan',
  description = 'Nguyen Van Hoan - Technical Test.',
  children
}: Props) => {
  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      {children}
    </NextHead>
  );
};
