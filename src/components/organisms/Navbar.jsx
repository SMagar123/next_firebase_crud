import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const profileImage = {
  src: "/assests/profileimage.jpg",
};

const Navbar = ({ userRole }) => {
  const router = useRouter();
  const userId = router.query?.userId;
  const handleLogout = () => {
    console.log("logged out");
    router.replace("/");
  };
  const handleHome = () => {
    if (userRole === "admin") {
      router.replace(`/admin`);
    } else router.replace(`/dashboard/${userId}`);
  };
  return (
    <>
      <div className="navbar bg-base-100 shadow-md">
        {userRole === "admin" ? (
          <div className="navbar-start">
            <div className="drawer">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                {/* Page content here */}
                <label
                  tabIndex={0}
                  htmlFor="my-drawer"
                  className="btn btn-primary btn-ghost btn-circle drawer-button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h7"
                    />
                  </svg>
                </label>
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="my-drawer"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                  <h3 className="text-2xl font-semibold border-b-4 border-gray-700 py-2">
                    PayNego
                  </h3>
                  {/* Sidebar content here */}
                  <li className="hover:bg-gray-400 rounded-md">
                    <a onClick={handleHome}>Dashboard</a>
                  </li>
                  <li className="hover:bg-gray-400 rounded-md">
                    <Link href="/admin/featuresRequested ">Requests</Link>
                  </li>
                  <li className="hover:bg-gray-400 rounded-md">
                    <Link href="/admin/users">Users</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a onClick={handleHome}>Dashboard</a>
                </li>
                <li>
                  <Link href="/admin/featuresRequested">Requests</Link>
                </li>
                <li>
                  <Link href="/admin/users">Users</Link>
                </li>
              </ul>
            </div> */}
          </div>
        ) : (
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a onClick={handleHome}>Homepage</a>
                </li>
                <li>
                  <a>Portfolio</a>
                </li>
                <li>
                  <a>About</a>
                </li>
              </ul>
            </div>
          </div>
        )}

        <div className="navbar-center">
          <a className="btn btn-ghost normal-case text-xl" onClick={handleHome}>
            PayNego
          </a>
        </div>
        <div className="navbar-end">
          <div className="form-control flex">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
            {/* <button className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button> */}
          </div>

          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <Image
                  src={profileImage.src}
                  alt="profile"
                  height={300}
                  width={400}
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <button onClick={handleLogout}>Logout</button>
                {/* <Link href="/" onClick={handleLogout}>
                Logout
              </Link> */}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
