import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faMapLocationDot,
  faTicket,
  faDollarSign,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

import { Table, Tag } from "antd";
import type { TableProps } from "antd";
import { useGetAllUsers } from "@/react-query/userQuery";
import handleDecoded from "@/utils/jwtDecode";
import {
  allBookingsRes,
  bookingAdminColumn,
  bookingType,
  tourType,
  userType,
} from "@/types/types";
import { useGetAllTour } from "@/react-query/tourQuery";
import currencyFormat from "@/utils/currencyFormat";
import { Link } from "react-router-dom";
import config from "@/config";
import { useGetAllBookings } from "@/react-query/bookingQuery";
import useSearchTable from "@/hooks/useSearchTable";

const Dashboard = () => {
  const { data: allUsers } = useGetAllUsers();
  const { data: allTours } = useGetAllTour();
  const { data: allBookings } = useGetAllBookings();
  const { getColumnSearchProps } = useSearchTable<bookingAdminColumn>();

  const columns: TableProps<bookingAdminColumn>["columns"] = [
    {
      title: "Email khách hàng",
      dataIndex: ["userInfo", "email"],
      key: "email",
      render: (text) => <a>{text}</a>,
      ellipsis: true,
      ...getColumnSearchProps(["userInfo", "email"]),
    },
    {
      title: "Tên tour",
      dataIndex: ["tourInfo", "name"],
      key: "nameTour",
      render: (text) => <a>{text}</a>,
      ellipsis: true,
      ...getColumnSearchProps(["tourInfo", "name"]),
    },
    {
      title: "Tổng tiền",
      dataIndex: "price",
      key: "totalPrice",
      render: (text) => <a>{currencyFormat(text)}</a>,
      sorter: (a, b) => a.price - b.price,
      ellipsis: true,
    },
    {
      title: "Trạng thái",
      key: "status",
      dataIndex: "status",
      sorter: (a, b) => a.status.localeCompare(b.status),
      fixed: "right",
      render: (_, { status }) => {
        let color;

        if (status === "booking_success") {
          color = "green";
          status = "Đã thanh toán";
        }

        if (status === "confirm_booking") {
          color = "red";
          status = "Chưa thanh toán";
        }

        if (status === "waiting_confirm") {
          color = "yellow";
          status = "Chờ xác nhận";
        }

        return (
          <Tag color={color} className="w-[100px] text-center">
            {status}
          </Tag>
        );
      },
      ellipsis: true,
    },
  ];

  const newAllBookings = (allBookings?.data || []).map(
    (item: allBookingsRes, index: number) => ({
      key: index,
      ...item,
    })
  );

  console.log(newAllBookings);

  const revenue = Array.from((allBookings?.data as bookingType[]) || []).reduce(
    (total: number, item: bookingType) => {
      if (item?.price && typeof item.price === "number") {
        return total + item?.price;
      }
      return total;
    },
    0
  );

  function convertVNDToUSD(amountVND: number) {
    const amountUSD = Math.round(amountVND / 25000);
    return new Intl.NumberFormat("en-US").format(amountUSD);
  }

  return (
    <div>
      <div className="flex gap-4 flex-wrap justify-between my-[20px]">
        <div className="flex-1 min-w-[171px] border-[2px] border-sky p-5 bg-white shadow-card rounded-[10px] flex justify-between items-center gap-[30px]">
          <div>
            <div className="font-robotoBold text-sky text-3xl">
              {allTours?.data.length || "0"}
            </div>
            <div className="text-grey text-sm">Tour</div>
          </div>
          <FontAwesomeIcon
            icon={faMapLocationDot}
            className="text-grey w-[30px] h-[30px]"
          />
        </div>

        <div className="flex-1 min-w-[171px] border-[2px] border-sky p-5 bg-white shadow-card rounded-[10px] flex justify-between items-center gap-[30px]">
          <div>
            <div className="font-robotoBold text-sky text-3xl">
              {allUsers?.data.length || "0"}
            </div>
            <div className="text-grey text-sm">Khách hàng</div>
          </div>
          <FontAwesomeIcon
            icon={faUsers}
            className="text-grey w-[30px] h-[30px]"
          />
        </div>

        <div className="flex-1 min-w-[171px] border-[2px] border-sky p-5 bg-white shadow-card rounded-[10px] flex justify-between items-center gap-[30px]">
          <div>
            <div className="font-robotoBold text-sky text-3xl">
              {allBookings?.data.length || "0"}
            </div>
            <div className="text-grey text-sm">Đơn đặt Tour</div>
          </div>
          <FontAwesomeIcon
            icon={faTicket}
            className="text-grey w-[30px] h-[30px]"
          />
        </div>

        <div className="flex-1 min-w-[171px] border-[2px] border-sky p-5 bg-white shadow-card rounded-[10px] flex justify-between items-center gap-[30px]">
          <div>
            <div className="font-robotoBold text-sky text-3xl">
              ${convertVNDToUSD(revenue)}
            </div>
            <div className="text-grey text-sm">Doanh thu</div>
          </div>
          <FontAwesomeIcon
            icon={faDollarSign}
            className="text-grey w-[30px] h-[30px]"
          />
        </div>
      </div>

      <div className="grid grid-cols-4 grid-rows-4 md:grid-rows-3 xl:grid-rows-4 gap-4 h-[820px] md:h-[660px]  xl:h-[440px]">
        <div className="col-span-4 row-span-3 md:row-span-2 xl:col-span-3 xl:row-span-4 overflow-hidden admin-wrapper-card">
          <div className="flex justify-between items-center mb-[20px]">
            <div className="font-robotoBold text-sky text-2xl">
              Đơn Đặt Tour
            </div>
            <div className="text-sm flex items-center gap-1 text-sky">
              <div>Xem thêm</div>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
          <Table
            columns={columns}
            dataSource={newAllBookings || []}
            pagination={{ pageSize: 4 }}
            scroll={{ x: "max-content" }}
          />
        </div>

        <div className="col-span-4 row-span-1 md:col-span-2 xl:col-span-1 xl:row-span-2 flex flex-col gap-3 admin-wrapper-card col-start-1 row-start-1 ">
          <div className="flex justify-between items-center">
            <div className="font-robotoBold text-sky text-2xl">Khách hàng</div>
            <div className="text-sm flex items-center gap-1 text-sky">
              <Link to={`/admin/${config.routes.userManage}`}>Xem thêm</Link>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto flex flex-col gap-2">
            {allUsers?.data.map((item: userType) => (
              <div key={item._id} className="flex gap-2 items-center">
                <div className="rounded-full w-[30px] h-[30px] overflow-hidden">
                  <img src={item.avatar ? item.avatar : "/avatar.jpg"} alt="" />
                </div>

                <div>
                  <div className="font-robotoBold text-overflow-1-line">
                    {item.name}
                  </div>
                  <div className="text-grey text-xs text-overflow-1-line">
                    {item.email}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-4 row-span-1 md:col-start-3 md:row-start-1 md:col-span-2 xl:col-span-1 xl:row-span-2 flex flex-col gap-3 admin-wrapper-card col-start-1 row-start-2">
          <div className="flex justify-between items-center">
            <div className="font-robotoBold text-sky text-2xl">Tour</div>
            <div className="text-sm flex items-center gap-1 text-sky">
              <Link to={`/admin/${config.routes.tourManage}`}>Xem thêm</Link>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto flex flex-col gap-2">
            {allTours?.data?.map((item: tourType) => (
              <div key={item.name} className="flex gap-2 items-center">
                <div className="rounded-[5px] w-[30px] h-[30px] overflow-hidden">
                  <img src={item.photo || "/tour_img_default.jpg"} alt="" />
                </div>

                <div className="overflow-hidden flex-1">
                  <div className="font-robotoBold  text-overflow-1-line">
                    {item.name}
                  </div>
                  <div className="text-grey text-xs text-overflow-1-line">
                    {currencyFormat(item.price || 0)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
