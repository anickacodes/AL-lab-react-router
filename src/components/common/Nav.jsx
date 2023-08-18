import { Link } from "react-router-dom";
import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <header>
      <article>
        <h1>
          {/* <a href="/"> */}
          <Link to={'/'}>
            Northwest <span>Animal Hospital</span>
            </Link>
          {/* </a> */}
        </h1>
      </article>
      <aside>
        <ul>
          <li>
            <a href="/staff">All Staff</a>
          </li>
          <li>
            <a href="/pets">All Pets</a>
          </li>
        </ul>
      </aside>
    </header>
  );
}

export default Nav;
