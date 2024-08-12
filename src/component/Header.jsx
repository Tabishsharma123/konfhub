import { MdOutlinePerson } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function Header({ logo }) {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <header className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <img src={logo} alt="Event logo" className="h-8" />
        <nav>
          <MdOutlinePerson
            className="text-gray-600 hover:text-blue-500 cursor-pointer"
            onClick={handleLoginClick}
            aria-label="Login"
          />
        </nav>
      </div>
    </header>
  );
}
