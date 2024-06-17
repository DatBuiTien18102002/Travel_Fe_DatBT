import { headerMenuProps } from "@/types/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const HeaderMenu = ({ title, onBack }: headerMenuProps) => {
  return (
    <header className="relative h-[50px] flex-shrink-0">
      <button
        className="w-[50px] h-full bg-transparent cursor-pointer"
        onClick={onBack}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>

      <h4 className="absolute position-center">{title}</h4>
    </header>
  );
};

export default HeaderMenu;
