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
import { useGetAllUser } from "@/react-query/userQuery";
import handleDecoded from "@/utils/jwtDecode";
import { userType } from "@/types/types";

interface DataType {
  key: string;
  email: string;
  tour: string;
  totalPrice: number;
  status: string;
}
const columns: TableProps<DataType>["columns"] = [
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    render: (text) => <a>{text}</a>,
    sorter: (a, b) => a.email.localeCompare(b.email),
    ellipsis: true,
  },
  {
    title: "Tour",
    dataIndex: "tour",
    key: "tour",
    sorter: (a, b) => a.tour.localeCompare(b.tour),
    ellipsis: true,
  },
  {
    title: "Tổng tiền",
    dataIndex: "totalPrice",
    key: "totalPrice",
    render: (text) => <a>{text + " VND"}</a>,
    sorter: (a, b) => a.totalPrice - b.totalPrice,
    ellipsis: true,
  },
  {
    title: "Trạng thái",
    key: "status",
    dataIndex: "status",
    sorter: (a, b) => a.status.localeCompare(b.status),
    render: (_, { status }) => {
      let color;

      if (status === "Đã Thanh Toán") {
        color = "green";
      }

      if (status === "Chưa Thanh Toán") {
        color = "red";
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

const data: DataType[] = [
  {
    key: "1",
    email: "tatBui@gmail.com.vn",
    tour: "HCM-Đà Lạt-Kì Co-Hội An",
    totalPrice: 6240000,
    status: "Đã Thanh Toán",
  },
  {
    key: "2",
    email: "datBui@gmail.com.vn",
    tour: "ĐN-Đà Lạt-Kì Co-Hội An",
    totalPrice: 7240000,
    status: "Chưa Thanh Toán",
  },
  {
    key: "3",
    email: "catBui@gmail.com.vn",
    tour: "HN-Đà Lạt-Kì Co-Hội An",
    totalPrice: 4240000,
    status: "Đã Thanh Toán",
  },
  {
    key: "4",
    email: "zatBui@gmail.com.vn",
    tour: "HN-Đà Lạt-Kì Co-Hội An",
    totalPrice: 2240000,
    status: "Chưa Thanh Toán",
  },
  {
    key: "5",
    email: "iatBui@gmail.com.vn",
    tour: "HCM-Đà Lạt - Kì Co - Hội An",
    totalPrice: 8240000,
    status: "Đã Thanh Toán",
  },
  {
    key: "6",
    email: "patBui@gmail.com.vn",
    tour: "ĐN-Đà Lạt - Kì Co  -Hội An",
    totalPrice: 7240000,
    status: "Đã Thanh Toán",
  },
];

const Dashboard = () => {
  const { storageData } = handleDecoded();
  const { data: allUser } = useGetAllUser(storageData || "");

  function convertVNDToUSD(amountVND: number) {
    const amountUSD = Math.round(amountVND / 25000);
    return new Intl.NumberFormat("en-US").format(amountUSD);
  }

  return (
    <div>
      <div className="flex gap-4 flex-wrap justify-between my-[20px]">
        <div className="flex-1 min-w-[171px] border-[2px] border-sky p-5 bg-white shadow-card rounded-[10px] flex justify-between items-center gap-[30px]">
          <div>
            <div className="font-robotoBold text-sky text-3xl">100</div>
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
              {allUser?.data.length || "0"}
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
            <div className="font-robotoBold text-sky text-3xl">600</div>
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
              ${convertVNDToUSD(125500000)}
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
            dataSource={data}
            pagination={{ pageSize: 4 }}
            scroll={{ x: "max-content" }}
          />
        </div>

        <div className="col-span-4 row-span-1 md:col-span-2 xl:col-span-1 xl:row-span-2 flex flex-col gap-3 admin-wrapper-card col-start-1 row-start-1 ">
          <div className="flex justify-between items-center">
            <div className="font-robotoBold text-sky text-2xl">Khách hàng</div>
            <div className="text-sm flex items-center gap-1 text-sky">
              <div>Xem thêm</div>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto flex flex-col gap-2">
            {allUser?.data.map((item: userType) => (
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
              <div>Xem thêm</div>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <div className="rounded-[5px] w-[30px] h-[30px] overflow-hidden">
                <img src="/tour_img_default.jpg" alt="" />
              </div>

              <div className="overflow-hidden flex-1">
                <div className="font-robotoBold  text-overflow-1-line">
                  HCM - Đà lạt - Quảng Nam
                </div>
                <div className="text-grey text-xs text-overflow-1-line">
                  13,000,000 VND
                </div>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="rounded-[5px] w-[30px] h-[30px] overflow-hidden">
                <img src="/tour_img_default.jpg" alt="" />
              </div>

              <div className="overflow-hidden flex-1">
                <div className="font-robotoBold  text-overflow-1-line">
                  HCM - Đà lạt - Quảng Nam
                </div>
                <div className="text-grey text-xs text-overflow-1-line">
                  13,000,000 VND
                </div>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="rounded-[5px] w-[30px] h-[30px] overflow-hidden">
                <img src="/tour_img_default.jpg" alt="" />
              </div>

              <div className="overflow-hidden flex-1">
                <div className="font-robotoBold  text-overflow-1-line">
                  HCM - Đà lạt - Quảng Nam
                </div>
                <div className="text-grey text-xs text-overflow-1-line">
                  13,000,000 VND
                </div>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="rounded-[5px] w-[30px] h-[30px] overflow-hidden">
                <img src="/tour_img_default.jpg" alt="" />
              </div>

              <div className="overflow-hidden flex-1">
                <div className="font-robotoBold  text-overflow-1-line">
                  HCM - Đà lạt - Quảng Nam
                </div>
                <div className="text-grey text-xs text-overflow-1-line">
                  13,000,000 VND
                </div>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="rounded-[5px] w-[30px] h-[30px] overflow-hidden">
                <img src="/tour_img_default.jpg" alt="" />
              </div>

              <div className="overflow-hidden flex-1">
                <div className="font-robotoBold  text-overflow-1-line">
                  HCM - Đà lạt - Quảng Nam
                </div>
                <div className="text-grey text-xs text-overflow-1-line">
                  13,000,000 VND
                </div>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="rounded-[5px] w-[30px] h-[30px] overflow-hidden">
                <img src="/tour_img_default.jpg" alt="" />
              </div>

              <div className="overflow-hidden flex-1">
                <div className="font-robotoBold  text-overflow-1-line">
                  HCM - Đà lạt - Quảng Nam
                </div>
                <div className="text-grey text-xs text-overflow-1-line">
                  13,000,000 VND
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
