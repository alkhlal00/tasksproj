import { useState } from "react";
import { Link } from "react-router";
import { useLocation } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-transparent dark:bg-gray-900 text-gray-900 dark:text-white shadow">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to={"/"} className="-m-1.5 p-1.5">
            <img className="h-8 w-auto" src="logo.svg" alt="Logo" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {[{name:"Home",link:"/"}, {name:"Service",link:"/service"}, {name:"Contact",link:"/contact"}, {name:"About me",link:"/about"}].map((item) => (
            <Link key={item.name} to={item.link} className="text-sm font-semibold text-gray-900 leading-6">{item.name}</Link>
          ))}
        </div>
         <div className="hidden lg:flex lg:flex-1 lg:justify-end">
         {location.pathname !== '/tasks' && <Link to={"/tasks"} className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</Link>
        }</div>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src="logo.svg" alt="Mobile Logo" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="mt-6 space-y-2">
          {[{name:"Home",link:"/"}, {name:"Service",link:"/service"}, {name:"Contact",link:"/contact"}, {name:"About me",link:"/about"}].map((item) => (
            <Link key={item.name} to={item.link} className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50">{item.name}</Link>
          ))}
            
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
