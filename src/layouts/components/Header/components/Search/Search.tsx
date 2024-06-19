import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import HeadlessTippy from "@tippyjs/react/headless";
import { Wrapper } from "@/components/Menu";
import useOutsideClick from "@/hooks/useOutsideClick";

const Search = () => {
  const [headerInput, setHeaderInput] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [visibleCloseBtn, setVisibleCloseBtn] = useState(true);
  const inputSearch = useRef<HTMLInputElement>(null);

  const handleOutsideClick = () => {
    setVisibleCloseBtn(false);
  };
  const wrapperSearch = useOutsideClick(handleOutsideClick);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;

    //Kiểm tra kí tự đầu tiên nhập vào có dấu cách không
    if (!searchValue.startsWith(" ")) {
      setHeaderInput(searchValue);
    }
  };

  const handleHideResult = () => {
    setShowResult(false);
  };

  const handleClear = () => {
    setHeaderInput("");
    inputSearch.current?.focus();
  };

  return (
    <HeadlessTippy
      interactive
      // visible={showResult && searchProducts?.data.length > 0}
      visible={false}
      render={(attrs) => (
        <div tabIndex={-1} {...attrs}>
          <Wrapper>
            <h4 className="px-3 py-[5px] text-sm font-semibold text-grey">
              Tours
            </h4>
            {/* {searchProducts?.data.map((result, index) => (
            <CakeItem key={index} data={result} />
          ))} */}
            <div className="p-5">Nha Trang</div>
            <div className="p-5">Khánh Hòa</div>
            <div className="p-5">Đà Lạt</div>
            <div className="p-5">Hà Nội</div>
          </Wrapper>
        </div>
      )}
      onClickOutside={handleHideResult}
    >
      <div
        className="relative flex cursor-pointer pl-[10px] bg-white rounded-[30px] items-center group border-[2px] border-solid border-transparent focus-within:border-sky-dark "
        ref={wrapperSearch}
      >
        <input
          ref={inputSearch}
          onChange={handleInput}
          onFocus={() => {
            setVisibleCloseBtn(true);
            setShowResult(true);
          }}
          value={headerInput}
          placeholder="Tìm tour"
          className="input__search"
        />

        {headerInput && visibleCloseBtn && (
          <button
            className="absolute top-[50%] translate-y-[-50%] flex-center bg-transparent right-[30px] text-sky-dark"
            onClick={handleClear}
          >
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="w-[14px] h-[14px]"
            />
          </button>
        )}

        <button className="button__search ">
          <FontAwesomeIcon icon={faSearch} className="w-[14px] h-[14px]" />
        </button>
      </div>
    </HeadlessTippy>
  );
};

export default Search;
