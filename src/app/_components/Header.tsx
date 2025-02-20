
function Header(){
    return(
      <div className="flex justify-between h-16 items-center top-0 left-0 bg-blue-500">
        <h1 className="ml-8 text-3xl">LOGO</h1>
        <ul className="flex gap-5 text-2xl">
            <li className="mr-8 ">Log In</li>
            <li className="mr-8 ">Sign In</li>
        </ul>
      </div>
    );
}
export default Header;