import "@/global.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <>
      <div className="wrapper w-full  mt-[var(--header-height)]">
        <h1 className="text-xl  font-cloudy bg-[#73c2eb] w-full text-sky">
          Blog
        </h1>
        <h1 className="text-xl  font-cloudy bg-[#73c2eb] w-full text-[#F0F8FF]">
          Blog
        </h1>
        <h1 className="text-xl  font-cloudy bg-[#73c2eb] w-full text-[#32a6e6]">
          Blog
        </h1>
        <h1 className="text-xl  font-cloudy bg-[#73c2eb] w-full text-[#027ebc]">
          Blog
        </h1>
        <h1 className="text-3xl font-bold underline font-robotoBold">
          Hello world!
        </h1>
        <h1 className="text-3xl font-bold underline font-signikaBold">
          Hello world!
        </h1>
        <FontAwesomeIcon icon={faUser} />
        <div className="flex gap-10 flex-wrap bg-black">
          <div className="w-[150px] h-[150px] bg-[#09b7d6]">#87Ceeb</div>
          <div className="w-[150px] h-[150px] bg-[#027ebc]">#87Ceeb</div>
        </div>

        <input type="text" />
        <button>Hi Loods</button>
        <a href="/">Hello</a>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
      </div>
    </>
  );
}

export default App;
