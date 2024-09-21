import { NavLink } from "react-router-dom";
import { NAVBAR_LINKS } from "../../supplimentary/constants";

function HomeHero() {
  return (
    <div className="hero bg-base-200 h-screen-base">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">
            <NavLink to={`/${NAVBAR_LINKS.CATEGORY}`}>Test</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
}

interface Props {}

export default HomeHero;
