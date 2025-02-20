function Header() {
  return (
    <div className="fixed top-0 left-0 w-full flex justify-between h-16 items-center bg-blue-500 text-white shadow-md z-50">
      <h1 className="ml-8 text-3xl">LOGO</h1>
      <ul className="flex gap-5 ">
        <li className="mr-8 cursor-pointer hover:text-gray-300">Log In</li>
        <li className="mr-8 cursor-pointer hover:text-gray-300">Sign In</li>
      </ul>
    </div>
  );
}
export default Header;
