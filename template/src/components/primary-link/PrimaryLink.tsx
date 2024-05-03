import { Link, LinkProps } from "react-router-dom";

type PrimaryLinkProps = LinkProps & {
};

function PrimaryLink({ children,  ...props }: PrimaryLinkProps) {
  return (
    <Link reloadDocument {...props}>
      {children}
    </Link>
  );
}

export default PrimaryLink;