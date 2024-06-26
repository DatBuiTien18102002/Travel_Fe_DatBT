import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faSort } from "@fortawesome/free-solid-svg-icons";

const TourSideBar = () => {
  const activeSideBarItem = "";

  return (
    <div className="p-[16px] pb-1px rounded-[10px] bg-bgSection border-[1px] border-sky">
      <div>
        <div className="tours-sidebar-title ">
          <FontAwesomeIcon icon={faFilter} />
          Phân loại
        </div>

        <div
          className={`tours-sidebar-item ${
            activeSideBarItem === "" ? "active" : ""
          }`}
        >
          Mặc định
        </div>

        <div>
          <div className="flex flex-col ">
            <div className="font-robotoBold">Loại tour</div>

            <ul>
              <li className="tours-sidebar-item">Tour trong nước</li>
              <li className="tours-sidebar-item">Tour nước ngoài</li>
            </ul>
          </div>

          <div className="flex flex-col">
            <div className="font-robotoBold">Điểm khởi hành</div>

            <ul>
              <li className="tours-sidebar-item">Tp.HCM</li>
              <li className="tours-sidebar-item">Hà Nội</li>
              <li className="tours-sidebar-item">Đà Nẵng</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <div className="tours-sidebar-title ">
          <FontAwesomeIcon icon={faSort} />
          Sắp xếp
        </div>

        <div
          className={`tours-sidebar-item ${
            activeSideBarItem === "" ? "active" : ""
          }`}
        >
          Mặc định
        </div>

        <div>
          <div className="flex flex-col ">
            <div className="font-robotoBold">Tên tour</div>

            <ul>
              <li className="tours-sidebar-item">A đến Z</li>
              <li className="tours-sidebar-item">Z đến A</li>
            </ul>
          </div>

          <div className="flex flex-col">
            <div className="font-robotoBold">Giá tour</div>

            <ul>
              <li className="tours-sidebar-item">Cao đến thấp</li>
              <li className="tours-sidebar-item">Thấp đến cao</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourSideBar;
