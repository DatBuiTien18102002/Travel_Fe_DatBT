import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";

import { Table, Tag } from "antd";
import type { TableProps } from "antd";
import useSearchTable from "@/hooks/useSearchTable";
import { userAdminColumn, userType } from "@/types/types";
import ModalFormLayout from "@/layouts/ModalFormLayout/ModalFormLayout";
import UserAdminForm from "@/forms/UserAdminForm";
import { useState } from "react";
import { useGetAllUser } from "@/react-query/userQuery";
import handleDecoded from "@/utils/jwtDecode";

const UserAdmin = () => {
  const { storageData } = handleDecoded();
  const { data: allUser } = useGetAllUser(storageData || "");

  const { getColumnSearchProps } = useSearchTable<userAdminColumn>();
  const [isOpenForm, setIsOpenForm] = useState(false);

  const columns: TableProps<userAdminColumn>["columns"] = [
    {
      title: "Avatar",
      dataIndex: "avatar",
      key: "avatar",
      render: (params) => {
        return (
          <img
            onError={(event) => {
              const target = event.target as HTMLImageElement;
              target.src = "/avatar.jpg";
            }}
            className="w-[40px] h-[40px] rounded-full"
            src={params.row?.avatar ? params.row?.avatar : "/avatar.jpg"}
          />
        );
      },
    },
    {
      title: "Tên",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
      ellipsis: true,
    },
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
      title: "Số điện thoại",
      dataIndex: "phone",
      key: "phone",
      render: (text) => <a>{text}</a>,
      ellipsis: true,
    },
    {
      title: "Địa chỉ",
      key: "address",
      dataIndex: "address",
      sorter: (a, b) => a.address.localeCompare(b.address),
      render: (text) => <a>{text}</a>,
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

  const newAllUsers = allUser?.data.map((item: userType, index: number) => {
    index += 1;
    const { avatar, name, email, phone, address } = item;
    return {
      key: index,
      avatar: avatar ? avatar : "",
      name: name ? name : "",
      email: email ? email : "",
      phone: phone ? phone : "",
      address: address ? phone : "",
    };
  });

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
            dataSource={newAllUsers || []}
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
