import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faSort } from "@fortawesome/free-solid-svg-icons";
import { useGetUniqueValuesByAttr } from "@/react-query/tourQuery";
import { tourSideBarProps } from "@/types/types";
import { Fragment } from "react/jsx-runtime";

const TourSideBar = ({
  activeSort,
  activeFindTimeTravel,
  handleFindByDepartClick,
  activeFindDepart,
  handleFindByTimeTravelClick,
  handleSortClick,
  sortList,
  headingSort,
}: tourSideBarProps) => {
  const { data: allDepart } = useGetUniqueValuesByAttr("depart");
  const { data: allTimeTravel } = useGetUniqueValuesByAttr("timeTravel");
  return (
    <div className="p-[16px] pb-1px rounded-[10px] bg-bgSection border-[1px] border-sky">
      <div>
        <div className="tours-sidebar-title ">
          <FontAwesomeIcon icon={faFilter} />
          Phân loại
        </div>

        <div
          className={`tours-sidebar-item ${
            activeFindDepart === undefined ? "active" : ""
          }`}
          onClick={() => {
            handleFindByDepartClick(undefined);
            handleFindByTimeTravelClick(undefined);
          }}
        >
          Mặc định
        </div>

        <div>
          <div className="flex flex-col">
            <div className="font-robotoBold">Điểm khởi hành</div>

            <ul>
              {allDepart?.data.map((item: string) => (
                <li
                  key={item}
                  className={`tours-sidebar-item ${
                    activeFindDepart === item ? "active" : ""
                  }`}
                  onClick={() => handleFindByDepartClick(item)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col ">
            <div className="font-robotoBold">Thời gian du lịch</div>

            <ul>
              {allTimeTravel?.data.map((item: string) => (
                <li
                  key={item}
                  className={`tours-sidebar-item ${
                    activeFindTimeTravel === item ? "active" : ""
                  }`}
                  onClick={() => handleFindByTimeTravelClick(item)}
                >
                  {item}
                </li>
              ))}
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
          className={`tours-sidebar-item ${activeSort === "" ? "active" : ""}`}
          onClick={() => handleSortClick({ nameSort: "", type: "" }, "")}
        >
          Mặc định
        </div>

        <div>
          {headingSort.map((headingSortItem) => (
            <div key={headingSortItem.title} className="flex flex-col ">
              <div className="font-robotoBold">{headingSortItem.title}</div>

              <ul>
                {sortList.map((sortItem) => {
                  if (sortItem.name === headingSortItem.name) {
                    return (
                      <li
                        key={sortItem.title}
                        className={`tours-sidebar-item ${
                          activeSort === sortItem.title ? "active" : ""
                        }`}
                        onClick={() =>
                          handleSortClick(
                            {
                              nameSort: sortItem.name,
                              type: sortItem.type,
                            },
                            sortItem.title
                          )
                        }
                      >
                        {sortItem.title}
                      </li>
                    );
                  }
                  return <Fragment key={sortItem.title} />;
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TourSideBar;
