const NavBar = () => {
  return (
    <div className="shadow-md p-1">
      <div className=" flex justify-between max-w-7xl p-3 m-auto items-center">
        <div className="h-12">
          <img
            src="https://accredian.com/Rcimages/logo.png"
            alt="logo"
            className="h-full"
          />
        </div>
        <div className="flex justify-between items-center gap-5">
          <div className="text-lg text-black hidden sm:block">Resources</div>
          <div className="text-lg text-black hidden sm:block">About Us</div>
          <div className="text-lg bg-gray-200 text-black p-3 py-2 rounded-md">
            Login
          </div>
          <div className="text-lg bg-blue-500 text-white p-3 py-2 rounded-md hidden sm:block">
            Try for free
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
