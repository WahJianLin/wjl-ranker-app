import { NavLink } from "react-router-dom";

function NavbarLink(props: INavbarLinkProps) {
  return (
    <li>
      <NavLink to={`/${props.linkTo}`}>{props.linkText}</NavLink>
    </li>
  );
}

interface INavbarLinkProps {
  readonly linkTo: string;
  readonly linkText: string;
}

export default NavbarLink;
