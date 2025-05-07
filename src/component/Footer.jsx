import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 shadow-sm">
      <div className="w-full p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <Link to={"/"} className="flex items-center space-x-3">
            <img src="logo.svg" className="h-8" alt="Logo" />
            <span className="text-2xl font-semibold dark:text-white">TaskManage</span>
          </Link>
          <ul className="flex flex-wrap gap-4 text-sm font-medium text-gray-500 dark:text-gray-400 mt-4 sm:mt-0">
          {[{name:"Home",link:"/"}, {name:"Service",link:"/service"}, {name:"Contact",link:"/contact"}, {name:"About me",link:"/about"}].map((item) => (
            <Link key={item.name} to={item.link} className="hover:underline">{item.name}</Link>
          ))}
          
          </ul>
        </div>
        <hr className="my-6 border-gray-200 dark:border-gray-700" /> 
      <p className="text-sm text-gray-500 text-center dark:text-gray-400">© {new Date().getFullYear()} TaskManage™. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
