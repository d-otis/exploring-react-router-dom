import React from "react";
import { Outlet, Link } from "react-router-dom";

function NavBar(): JSX.Element {
  return (
    <>
      <header
        style={{
          backgroundColor: "lightcoral",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Link to='/' style={{ fontSize: "4em" }}>
          Home
        </Link>
        <Link to='/cat' style={{ fontSize: "4em" }}>
          Cat
        </Link>
        <Link to='/dog' style={{ fontSize: "4em" }}>
          Dog
        </Link>
      </header>
      <Outlet />
    </>
  );
}

export default NavBar;
