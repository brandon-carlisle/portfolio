import Link, { type LinkProps } from 'next/link';

interface UnderlineLinkProps extends LinkProps {
  children: React.ReactNode;
}

export default function UnderlineLink(props: UnderlineLinkProps) {
  return (
    <Link {...props} className="group underline underline-offset-2">
      {props.children}
    </Link>
  );
}
