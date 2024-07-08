import useSearchTable from "@/hooks/useSearchTable";
import { bookingHistoryColumn } from "@/types/types";
import { Button, Table, TableProps, Tag } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const data: bookingHistoryColumn[] = [
  {
    key: "1",
    id: "1",
    nameTour: "HCM-Đà Lạt-Kì Co-Hội An",
    status: "Đã Thanh Toán",
    totalPrice: 6240000,
    createAt: "18:19:00 18-10-2024",
  },
  {
    key: "2",
    id: "2",
    nameTour: "HCM-Đà Lạt-Kì Co-Hội An",
    status: "Đã Thanh Toán",
    totalPrice: 6240000,
    createAt: "18:19:00 18-10-2024",
  },
  {
    key: "3",
    id: "3",
    nameTour: "HCM-Đà Lạt-Kì Co-Hội An",
    status: "Đã Thanh Toán",
    totalPrice: 6240000,
    createAt: "18:19:00 18-10-2024",
  },
  {
    key: "4",
    id: "4",
    nameTour: "HCM-Đà Lạt-Kì Co-Hội An",
    status: "Đã Thanh Toán",
    totalPrice: 6240000,
    createAt: "18:19:00 18-10-2024",
  },
  {
    key: "5",
    id: "5",
    nameTour: "HCM-Đà Lạt-Kì Co-Hội An",
    status: "Đã Thanh Toán",
    totalPrice: 6240000,
    createAt: "18:19:00 18-10-2024",
  },
  {
    key: "6",
    id: "6",
    nameTour: "HCM-Đà Lạt-Kì Co-Hội An",
    status: "Đã Thanh Toán",
    totalPrice: 6240000,
    createAt: "18:19:00 18-10-2024",
  },
];

const BookingHistory = () => {
  const { getColumnSearchProps } = useSearchTable<bookingHistoryColumn>();
  const navigate = useNavigate();

  const handleOpenHistoryDetail = (id: string) => {
    console.log("history booking", id);
    navigate("/bookingHistoryDetail");
  };

  const columns: TableProps<bookingHistoryColumn>["columns"] = [
    {
      title: "Tên tour",
      dataIndex: "nameTour",
      key: "nameTour",
      render: (text) => <a>{text}</a>,
      sorter: (a, b) => a.nameTour.localeCompare(b.nameTour),
      ellipsis: true,
      ...getColumnSearchProps("nameTour"),
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
      title: "Thời gian đặt tour",
      dataIndex: "createAt",
      key: "createAt",
      render: (text) => <a>{text}</a>,
      // sorter: (a, b) => a.createAt - b.createAt,
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
    {
      title: "Action",
      key: "action",
      dataIndex: "id",
      fixed: "right",
      width: 100,
      render: (id) => {
        return (
          <>
            <Button
              type="primary"
              className="!bg-sky cursor-pointer"
              onClick={() => handleOpenHistoryDetail(id)}
            >
              Chi tiết đặt tour
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
            dataSource={data}
            pagination={{ pageSize: 4 }}
            scroll={{ x: "max-content" }}
          />
        </div>
      </div>
    </div>
  );
};

export default BookingHistory;
