'use client';

import Markdown, { type Options } from 'react-markdown';

interface MarkdownProxyProps {
  children: string;
}

const components: Options['components'] = {
  a: (props) => (
    <a
      className="text-(--color-foam) hover:text-(--color-pine) transition border-b-transparent hover:border-b-(--color-pine) border-b-2"
      {...props}
    />
  ),
  p: (props) => <p className="mb-4 last:mb-0 laeding-2" {...props} />,
};

export default function MarkdownProxy(props: MarkdownProxyProps) {
  const { children } = props;

  return <Markdown components={components}>{children}</Markdown>;
}
