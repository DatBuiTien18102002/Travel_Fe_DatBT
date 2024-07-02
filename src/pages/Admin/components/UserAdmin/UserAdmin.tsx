import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";

import { Table, Tag } from "antd";
import type { TableProps } from "antd";
import useSearchTable from "@/hooks/useSearchTable";
import { userAdminColumn } from "@/types/types";
import ModalFormLayout from "@/layouts/ModalFormLayout/ModalFormLayout";
import UserAdminForm from "@/forms/UserAdminForm";
import { useState } from "react";

const data: userAdminColumn[] = [
  {
    key: "1",
    id: "1",
    email: "tatBui@gmail.com.vn",
    tour: "HCM-Đà Lạt-Kì Co-Hội An",
    totalPrice: 6240000,
    status: "Đã Thanh Toán",
  },
  {
    key: "2",
    id: "2",
    email: "datBui@gmail.com.vn",
    tour: "ĐN-Đà Lạt-Kì Co-Hội An",
    totalPrice: 7240000,
    status: "Chưa Thanh Toán",
  },
  {
    key: "3",
    id: "3",
    email: "catBui@gmail.com.vn",
    tour: "HN-Đà Lạt-Kì Co-Hội An",
    totalPrice: 4240000,
    status: "Đã Thanh Toán",
  },
  {
    key: "4",
    id: "4",
    email: "zatBui@gmail.com.vn",
    tour: "HN-Đà Lạt-Kì Co-Hội An",
    totalPrice: 2240000,
    status: "Chưa Thanh Toán",
  },
  {
    key: "5",
    id: "5",
    email: "iatBui@gmail.com.vn",
    tour: "HCM-Đà Lạt - Kì Co - Hội An",
    totalPrice: 8240000,
    status: "Đã Thanh Toán",
  },
  {
    key: "6",
    id: "6",
    email: "patBui@gmail.com.vn",
    tour: "ĐN-Đà Lạt - Kì Co  -Hội An",
    totalPrice: 7240000,
    status: "Đã Thanh Toán",
  },
];

const UserAdmin = () => {
  const { getColumnSearchProps } = useSearchTable<userAdminColumn>();
  const [isOpenForm, setIsOpenForm] = useState(false);

  const columns: TableProps<userAdminColumn>["columns"] = [
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (text) => <a>{text}</a>,
      sorter: (a, b) => a.email.localeCompare(b.email),
      ellipsis: true,
      ...getColumnSearchProps("email"),
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
    {
      title: "Edit",
      key: "edit",
      dataIndex: "id",
      fixed: "right",
      width: 50,
      render: (id) => {
        return (
          <>
            <div
              className="text-sky cursor-pointer"
              onClick={() => handleEditUser(id)}
            >
              <FontAwesomeIcon
                icon={faPenToSquare}
                className="w-[20px] h-[20px]"
              />
            </div>
          </>
        );
      },
    },
    {
      title: "Delete",
      key: "delete",
      dataIndex: "id",
      fixed: "right",
      width: 50,
      render: (id) => {
        return (
          <>
            <div
              className="text-sky cursor-pointer"
              onClick={() => handleDeleteUser(id)}
            >
              <FontAwesomeIcon
                icon={faTrashCan}
                className="w-[20px] h-[20px]"
              />
            </div>
          </>
        );
      },
    },
  ];

  const handleEditUser = (id: string) => {
    console.log("Edit", id);
  };

  const handleDeleteUser = (id: string) => {
    console.log("Delete", id);
  };

  return (
    <>
      <div className="my-[20px]">
        <div className="col-span-4 row-span-3 md:row-span-2 xl:col-span-3 xl:row-span-4 overflow-hidden admin-wrapper-card">
          <div className="flex items-center justify-between">
            <div className="font-robotoBold text-sky text-2xl mb-[20px]">
              Danh sách khách hàng
            </div>

            <button
              onClick={() => setIsOpenForm(true)}
              className="w-[70px] h-[70px] rounded-[10px] flex-center border-dashed border-sky border-[3px] bg-bgSection text-sky mb-[20px]"
            >
              <FontAwesomeIcon icon={faPlus} className="w-[25px] h-[25px]" />
            </button>
          </div>

          <Table
            columns={columns}
            dataSource={data}
            pagination={{ pageSize: 4 }}
            scroll={{ x: "max-content" }}
          />
        </div>
      </div>

      {isOpenForm && (
        <ModalFormLayout>
          <UserAdminForm setIsOpenForm={setIsOpenForm} />
        </ModalFormLayout>
      )}
    </>
  );
};

export default UserAdmin;
