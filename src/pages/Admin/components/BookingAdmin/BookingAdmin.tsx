import useSearchTable from "@/hooks/useSearchTable";
import ModalFormLayout from "@/layouts/ModalFormLayout/ModalFormLayout";
import {
  useGetAllBookings,
  useUpdateBooking,
} from "@/react-query/bookingQuery";
import { useUpdateTour } from "@/react-query/tourQuery";
import { allBookingsRes, bookingAdminColumn } from "@/types/types";
import currencyFormat from "@/utils/currencyFormat";
import { Button, Table, TableProps, Tag } from "antd";
import { format } from "date-fns";
import React, { useState } from "react";

const BookingAdmin = () => {
  const { data: res } = useGetAllBookings();
  const { getColumnSearchProps } = useSearchTable<bookingAdminColumn>();
  const { mutateAsync: updateBooking } = useUpdateBooking();
  const [isOpenConfirmForm, setIsOpenConfirmForm] = useState(false);
  const [statusChangeId, setStatusChangeId] = useState("");
  const [statusChangeText, setStatusChangeText] = useState("");
  const allBookings = (res?.data || []).map(
    (item: allBookingsRes, index: number) => ({
      key: index,
      ...item,
    })
  );

  const changeStatus = (status: string, id: string) => {
    const res = updateBooking({ id, data: { status } });
    console.log(res);
  };

  const renderStatusButton = (status: string, id: string) => {
    switch (status) {
      case "booking_success":
        return (
          <Button
            size="small"
            className="!bg-sky w-full !text-white select-none !cursor-default"
            disabled
          >
            Thanh toán thành công
          </Button>
        );
      case "confirm_booking":
        return (
          <Button
            className="bg-red-400 w-full text-white hover:!text-red-400 hover:!border-red-400"
            size="small"
            onClick={() => {
              setStatusChangeId(id);
              setStatusChangeText("booking_success");
              setIsOpenConfirmForm(true);
            }}
          >
            Xác nhận đã thanh toán
          </Button>
        );
      case "waiting_confirm":
        return (
          <Button
            className="bg-yellow-400 text-white w-full hover:!text-yellow-400 hover:!border-yellow-400"
            size="small"
            onClick={() => {
              setStatusChangeId(id);
              setStatusChangeText("confirm_booking");
              setIsOpenConfirmForm(true);
            }}
          >
            Xác nhận đã đặt tour
          </Button>
        );
      default:
        return <></>;
    }
  };

  const columns: TableProps<bookingAdminColumn>["columns"] = [
    {
      title: "Email khách hàng",
      dataIndex: ["userInfo", "email"],
      key: "email",
      width: "200px",
      render: (text) => <a>{text}</a>,
      ellipsis: true,
      ...getColumnSearchProps(["userInfo", "email"]),
    },
    {
      title: "Số điện thoại",
      dataIndex: ["userInfo", "phone"],
      key: "phone",
      width: "110px",
      render: (text) => <a>{text}</a>,
      ellipsis: true,
    },
    {
      title: "Tên tour",
      dataIndex: ["tourInfo", "name"],
      key: "nameTour",
      width: "250px",
      render: (text) => <a>{text}</a>,
      ellipsis: true,
      ...getColumnSearchProps(["tourInfo", "name"]),
    },
    {
      title: "Tổng tiền",
      dataIndex: "price",
      key: "totalPrice",
      width: "150px",
      render: (text) => <a>{currencyFormat(text)}</a>,
      sorter: (a, b) => a.price - b.price,
      ellipsis: true,
    },
    {
      title: "Số người",
      dataIndex: "seat",
      key: "numSeat",
      width: "220px",
      render: (seat) => (
        <a>{`${seat.totalSeat} (${seat.adultSeat} người lớn, ${seat.childSeat} trẻ em, ${seat.babySeat} trẻ nhỏ)`}</a>
      ),
      ellipsis: true,
    },
    {
      title: "Thời gian đặt tour",
      dataIndex: "createdAt",
      key: "createdAt",
      width: "150px",
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
      width: "180px",
      render: (_, record: bookingAdminColumn) => {
        return <>{renderStatusButton(record?.status, record?._id)}</>;
      },
      ellipsis: true,
    },
  ];

  return (
    <>
      <div className="my-[20px]">
        <div className="col-span-4 row-span-3 md:row-span-2 xl:col-span-3 xl:row-span-4 overflow-hidden admin-wrapper-card">
          <div className="flex items-center justify-between">
            <div className="font-robotoBold text-sky text-2xl mb-[20px]">
              Danh sách đơn đặt tour
            </div>
          </div>
          <Table
            columns={columns}
            dataSource={allBookings}
            pagination={{ pageSize: 4 }}
            scroll={{ x: "1200px" }}
          />
        </div>
      </div>

      {isOpenConfirmForm && (
        <ModalFormLayout>
          <div className="flex flex-col gap-4">
            <div className="font-robotoBold text-lg ">Xác nhận</div>

            <span className="text-sky font-robotoBold">
              {statusChangeText === "confirm_booking"
                ? "Xác nhận người dùng đã đặt tour"
                : "Xác nhận người dùng đã thanh toán"}
            </span>

            <div className="flex justify-end w-full gap-2 font-robotoBold">
              <Button
                onClick={() => setIsOpenConfirmForm(false)}
                className="px-3 py-2 "
              >
                Hủy
              </Button>
              <Button
                onClick={() => {
                  changeStatus(statusChangeText, statusChangeId);
                  setIsOpenConfirmForm(false);
                }}
                className="bg-sky px-3 py-2 text-white"
              >
                Xác nhận
              </Button>
            </div>
          </div>
        </ModalFormLayout>
      )}
    </>
  );
};

export default BookingAdmin;
