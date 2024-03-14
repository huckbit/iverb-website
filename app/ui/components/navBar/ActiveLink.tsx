import { useRouter } from 'next/router';
import Link from 'next/link';

type ActiveLinkProps = {
  children: React.ReactNode;
  activeClassName: string;
  href: string;
};

export default function ActiveLink({ children, activeClassName, ...props }: ActiveLinkProps) {
  const router = useRouter();

  return <Link {...props}>{children}</Link>;
}
