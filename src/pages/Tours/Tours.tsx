import { SearchDetail } from "@/components";
import TourContent from "@/pages/Tours/components/TourContent/TourContent";
import TourHeading from "@/pages/Tours/components/TourHeading/TourHeading";
import TourSideBar from "@/pages/Tours/components/TourSideBar/TourSideBar";
import { useGetTours } from "@/react-query/tourQuery";
import { queryType, resGetToursType, tourType } from "@/types/types";
import { headingSort, selectSortList, sortList } from "@/utils/constants";
import getPriceDiscount from "@/utils/getPriceDiscount";
import { Pagination } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

const Tours = () => {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState({ nameSort: "", type: "" });
  const [findByTimeTravel, setFindByTimeTravel] = useState<
    string | undefined
  >();
  const [activeFindTimeTravel, setActiveFindTimeTravel] = useState<
    string | undefined
  >();
  const [findByDepart, setFindByDepart] = useState<string | undefined>();
  const [activeFindDepart, setActiveFindDepart] = useState<
    string | undefined
  >();
  const [findByDestination, setFindByDestination] = useState<
    string | undefined
  >();

  const [isSortPrice, setIsSortPrice] = useState(false);

  const [activeSort, setActiveSort] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);

  let limit = 7;
  const limitParam = searchParams.get("limit");
  if (limitParam !== null) {
    limit = +limitParam;
  }

  useEffect(() => {
    const page = searchParams.get("page");

    if (page && +page >= 1) {
      setCurrentPage(+page);
    } else {
      setSearchParams({
        limit: searchParams.get("limit") || "7",
        page: currentPage.toString(),
      });
    }
  }, [searchParams]);

  const getPageNumber = (page: number) => {
    setCurrentPage(page);
  };

  const { state } = useLocation();

  const query: queryType = {
    limit: searchParams.get("limit") || 7,
    page: currentPage,
    _sort: sortBy.nameSort,
    _order: sortBy.type,
    timeTravel: findByTimeTravel,
    depart: findByDepart,
    destination: findByDestination,
  };

  const { data, refetch, isFetching: loading } = useGetTours(query);
  const toursRes: resGetToursType<tourType> = data as resGetToursType<tourType>;
  let tours = toursRes?.data;

  useEffect(() => {
    if (state?.searchInfo) {
      setActiveFindDepart(undefined);
      setActiveFindTimeTravel(undefined);
      setFindByDepart(state.searchInfo?.department);
      setFindByTimeTravel(state.searchInfo?.duration);
      setFindByDestination(state.searchInfo?.destination);
      refetch();
      navigate(".", { state: {}, replace: true });
    }
  }, [state?.searchInfo]);

  const sortByPriceTour = (allTours: tourType[]) => {
    if (allTours) {
      return allTours.sort((a, b) => {
        if (
          a.price !== undefined &&
          b.price !== undefined &&
          a.discount !== undefined &&
          b.discount !== undefined
        ) {
          if (sortBy.type === "asc") {
            return (
              getPriceDiscount(a.price, a.discount) -
              getPriceDiscount(b.price, b.discount)
            );
          } else {
            return (
              getPriceDiscount(b.price, b.discount) -
              getPriceDiscount(a.price, a.discount)
            );
          }
        }
        return 0;
      });
    }
  };

  if (isSortPrice) {
    tours = sortByPriceTour(tours || []);
  }

  useEffect(() => {
    const limit = searchParams.get("limit") || "7";
    if (findByTimeTravel || findByDepart) {
      setSearchParams({ limit, page: "1" });
    }
  }, [findByTimeTravel, findByDepart, searchParams, setSearchParams]);

  useEffect(() => {
    refetch();
  }, [
    currentPage,
    sortBy.nameSort,
    sortBy.type,
    findByTimeTravel,
    findByDepart,
    refetch,
  ]);

  //Sort, Filter Tour
  const handleSortClick = (
    objectQuery: { nameSort: string; type: string },
    active = ""
  ) => {
    if (objectQuery.nameSort === "price") {
      setIsSortPrice(true);
      setSortBy(objectQuery);
      setActiveSort(active);
      return;
    }
    setIsSortPrice(false);
    setActiveSort(active);
    setSortBy(objectQuery);
  };
  const handleSelectSortClick = (value: string) => {
    const newValue = value.split(",");

    const objQuery = {
      nameSort: newValue[0],
      type: newValue[1],
    };

    if (objQuery.nameSort === "price") {
      setIsSortPrice(true);
      setSortBy(objQuery);
      return;
    }
    setIsSortPrice(false);
    setSortBy(objQuery);
  };

  const handleSelectFilterClick = (value: string) => {
    const newValue = value.split(",");
    setFindByDestination(undefined);
    if (newValue[0] === "timeTravel") {
      setFindByTimeTravel(newValue[1]);
      setFindByDepart(undefined);
      return;
    }
    if (newValue[0] === "depart") {
      setFindByTimeTravel(undefined);
      setFindByDepart(newValue[1]);
      return;
    }

    setFindByDepart(undefined);
    setFindByTimeTravel(undefined);
  };

  const handleFindByTimeTravelClick = (type: string | undefined) => {
    setFindByDestination(undefined);
    setFindByDepart(undefined);
    setActiveFindDepart(undefined);

    setActiveFindTimeTravel(type);
    setFindByTimeTravel(type);
  };

  const handleFindByDepartClick = (type: string | undefined) => {
    setFindByDestination(undefined);
    setFindByTimeTravel(undefined);
    setActiveFindTimeTravel(undefined);

    setActiveFindDepart(type);
    setFindByDepart(type);
  };

  const handleFindByDestinationClick = (type: string | undefined) => {
    setFindByDestination(type);
  };

  const handlePrevPage = () => {
    if (currentPage === 1) {
      return;
    }
    const limit = searchParams.get("limit");
    const page = searchParams.get("page");
    if (limit && page) {
      setSearchParams({
        limit,
        page: String(+page - 1),
      });
    }
  };

  const handleNextPage = () => {
    if (currentPage === toursRes?.totalPage) {
      return;
    }
    const limit = searchParams.get("limit");
    const page = searchParams.get("page");
    if (limit && page) {
      setSearchParams({
        limit,
        page: String(+page + 1),
      });
    }
  };

  return (
    <div className="pt-[var(--header-height)]">
      <div className="wrapper py-[45px]">
        <div className="w-full flex items-center justify-center">
          <SearchDetail />
        </div>

        <div className="flex gap-5 mt-[20px]">
          <div className="w-0 hidden md:block md:w-[25%] lg:w-[20%]">
            <TourSideBar
              activeSort={activeSort}
              activeFindTimeTravel={activeFindTimeTravel}
              handleFindByTimeTravelClick={handleFindByTimeTravelClick}
              activeFindDepart={activeFindDepart}
              handleFindByDepartClick={handleFindByDepartClick}
              findByDestination={findByDestination}
              findByDepart={findByDepart}
              findByTimeTravel={findByTimeTravel}
              handleFindByDestinationClick={handleFindByDestinationClick}
              handleSortClick={handleSortClick}
              sortList={sortList}
              headingSort={headingSort}
            />
          </div>
          <div className="w-full md:w-[75%] lg:w-[80%]">
            <TourHeading
              currentPage={currentPage}
              totalPage={toursRes?.totalPage || 1}
              handleNextPage={handleNextPage}
              handlePrevPage={handlePrevPage}
              sortList={selectSortList}
              handleSelectSortClick={handleSelectSortClick}
              handleSelectFilterClick={handleSelectFilterClick}
            />
            {toursRes?.data && (
              <TourContent
                tours={tours || []}
                totalPage={toursRes?.totalPage || 0}
                loading={loading}
              />
            )}

            <div className="flex-center mt-[20px]">
              <Pagination
                onChange={getPageNumber}
                defaultCurrent={1}
                current={currentPage}
                pageSize={limit || 7}
                total={toursRes?.totalTour}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tours;
