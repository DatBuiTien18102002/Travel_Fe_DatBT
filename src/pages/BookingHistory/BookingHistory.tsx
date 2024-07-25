import useSearchTable from "@/hooks/useSearchTable";
import { useGetMyBookings } from "@/react-query/bookingQuery";
import {
  bookingHistoryColumn,
  bookingHistoryRes,
  userType,
} from "@/types/types";
import { Button, Table, TableProps, Tag } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import currencyFormat from "@/utils/currencyFormat";

// const data: bookingHistoryColumn[] = [
//   {
//     key: "1",
//     id: "1",
//     nameTour: "HCM-Đà Lạt-Kì Co-Hội An",
//     status: "Đã Thanh Toán",
//     totalPrice: 6240000,
//     createAt: "18:19:00 18-10-2024",
//   },
//   {
//     key: "2",
//     id: "2",
//     nameTour: "HCM-Đà Lạt-Kì Co-Hội An",
//     status: "Đã Thanh Toán",
//     totalPrice: 6240000,
//     createAt: "18:19:00 18-10-2024",
//   },
//   {
//     key: "3",
//     id: "3",
//     nameTour: "HCM-Đà Lạt-Kì Co-Hội An",
//     status: "Đã Thanh Toán",
//     totalPrice: 6240000,
//     createAt: "18:19:00 18-10-2024",
//   },
//   {
//     key: "4",
//     id: "4",
//     nameTour: "HCM-Đà Lạt-Kì Co-Hội An",
//     status: "Đã Thanh Toán",
//     totalPrice: 6240000,
//     createAt: "18:19:00 18-10-2024",
//   },
//   {
//     key: "5",
//     id: "5",
//     nameTour: "HCM-Đà Lạt-Kì Co-Hội An",
//     status: "Đã Thanh Toán",
//     totalPrice: 6240000,
//     createAt: "18:19:00 18-10-2024",
//   },
//   {
//     key: "6",
//     id: "6",
//     nameTour: "HCM-Đà Lạt-Kì Co-Hội An",
//     status: "Đã Thanh Toán",
//     totalPrice: 6240000,
//     createAt: "18:19:00 18-10-2024",
//   },
// ];

const BookingHistory = () => {
  const { getColumnSearchProps } = useSearchTable<bookingHistoryColumn>();
  const navigate = useNavigate();
  const currentUser = useSelector((state: { user: userType }) => state.user);
  const { data: res } = useGetMyBookings(currentUser._id || "");
  const myBookingTours = (res?.data || []).map(
    (item: bookingHistoryRes, index: number) => ({
      key: index,
      ...item,
    })
  );

  const handleOpenHistoryDetail = (id: string) => {
    navigate(`/bookingHistoryDetail/${id}`);
  };

  const columns: TableProps<bookingHistoryColumn>["columns"] = [
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
      title: "Số người",
      dataIndex: ["seat", "totalSeat"],
      key: "numSeat",
      render: (text) => <a>{text}</a>,
      ellipsis: true,
    },
    {
      title: "Thời gian đặt tour",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (text) => {
        const formattedDateBooking = format(
          new Date(text),
          "HH:mm:ss dd/MM/yyyy"
        );
        return <a>{formattedDateBooking}</a>;
      },
      sorter: (a, b) =>
        new Date(a?.createdAt).getTime() - new Date(b?.createdAt).getTime(),
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
    {
      title: "",
      key: "action",
      dataIndex: "_id",
      fixed: "right",
      width: 100,
      render: (_id) => {
        return (
          <>
            <Button
              type="primary"
              className="!bg-sky cursor-pointer"
              onClick={() => handleOpenHistoryDetail(_id)}
            >
              Chi tiết
            </Button>
          </>
        );
      },
    },
  ];

  return (
    <div className="pt-[var(--header-height)] wrapper ">
      <div className="py-[40px]">
        <div className="text-sky font-robotoBold text-4xl mb-[40px]">
          Lịch sử đặt tour
        </div>

        <div className="border-[2px] border-sky rounded-[10px]">
          <Table
            columns={columns}
            dataSource={myBookingTours}
            pagination={{ pageSize: 4 }}
            scroll={{ x: "max-content" }}
          />
        </div>
      </div>
    </div>
  );
};

export default BookingHistory;
