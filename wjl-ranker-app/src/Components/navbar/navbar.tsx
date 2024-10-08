import {
  NAVBAR_LINKS,
  NAVBAR_LINKS_IN_USE,
  NAVIGATION_LINKS_TEXT,
  WJL_RANKER_TEXT,
} from "../../supplimentary/constants";
import { NavLink } from "react-router-dom";

function Navbar() {
  const links = (): JSX.Element[] => {
    return NAVBAR_LINKS_IN_USE.map((link: string) => {
      return (
        <li key={link}>
          <NavLink to={`/${link}`}>{NAVIGATION_LINKS_TEXT[link]}</NavLink>
        </li>
      );
    });
  };
  // DaisyUI navbar
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar bg-base-300 w-full">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="mx-2 px-2">
            <NavLink to={`/${NAVBAR_LINKS.HOME}`}>{WJL_RANKER_TEXT}</NavLink>
          </div>
          <div className="hidden flex-none lg:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              {links()}
            </ul>
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          {/* Sidebar content here */}
          {links()}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
