import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";

import { Table, Tag } from "antd";
import type { TableProps } from "antd";
import useSearchTable from "@/hooks/useSearchTable";
import { responseType, userAdminColumn, userType } from "@/types/types";
import ModalFormLayout from "@/layouts/ModalFormLayout/ModalFormLayout";
import UserAdminForm from "@/forms/UserAdminForm";
import { useEffect, useState } from "react";
import {
  useDeleteUser,
  useGetAllUser,
  useGetDetailUser,
} from "@/react-query/userQuery";
import handleDecoded from "@/utils/jwtDecode";
import { userApi } from "@/services";
import { useSelector } from "react-redux";
import message from "@/utils/message";

const UserAdmin = () => {
  const { storageData } = handleDecoded();
  const { data: allUser } = useGetAllUser(storageData || "");
  const [typeForm, setTypeForm] = useState("create");
  const [userDetailSelect, setUserDetailSelect] = useState({});
  const [isActionAllowed, setIsActionAllowed] = useState(true);
  const [idAction, setIdAction] = useState("");
  const loginUser = useSelector((state: { user: userType }) => state.user);

  const { mutateAsync: deleteUser, isPending: isLoadingDelete } =
    useDeleteUser();

  console.log("all user nè", allUser);

  useEffect(() => {
    setIsActionAllowed(true);
    setIdAction("");
  }, [allUser]);

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
            src={params ? params : "/avatar.jpg"}
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
      dataIndex: "_id",
      fixed: "right",
      width: 50,
      render: (_id) => {
        return (
          <>
            <button
              className={
                !isActionAllowed && idAction === _id
                  ? "text-sky cursor-not-allowed"
                  : "text-sky cursor-allowed"
              }
              onClick={() => handleEditUser(_id)}
              disabled={!isActionAllowed && idAction === _id}
            >
              <FontAwesomeIcon
                icon={faPenToSquare}
                className="w-[20px] h-[20px]"
              />
            </button>
          </>
        );
      },
    },
    {
      title: "Delete",
      key: "delete",
      dataIndex: "_id",
      fixed: "right",
      width: 50,
      render: (_id) => {
        return (
          <>
            <button
              className={
                !isActionAllowed && idAction === _id
                  ? "text-sky cursor-not-allowed"
                  : "text-sky cursor-allowed"
              }
              onClick={() => handleDeleteUser(_id)}
              disabled={!isActionAllowed && idAction === _id}
            >
              <FontAwesomeIcon
                icon={faTrashCan}
                className="w-[20px] h-[20px]"
              />
            </button>
          </>
        );
      },
    },
  ];

  const handleEditUser = async (id: string) => {
    console.log("Edit", id);
    console.log("Token", loginUser.access_token);
    const userDetail = await userApi.getDetailUser(
      id,
      loginUser.access_token || ""
    );

    setUserDetailSelect(userDetail.data);
    setIsOpenForm(true);
    setTypeForm("update");
    setIdAction(id);
  };

  const handleDeleteUser = async (id: string) => {
    console.log("Delete", id);
    const res: responseType<object> = await deleteUser({
      id,
      token: storageData || "",
    });

    if (res.message) {
      const status = res.status.toString();
      if (status !== "200") {
        message("error", res?.message);
      } else {
        message("success", res?.message);
        setIdAction(id);
        setIsActionAllowed(false);
      }
    }
  };

  const newAllUsers = allUser?.data.map((item: userType, index: number) => {
    index += 1;
    const { avatar, name, email, phone, address, _id } = item;
    return {
      key: index,
      avatar: avatar ? avatar : "",
      name: name ? name : "",
      email: email ? email : "",
      phone: phone ? phone : "",
      address: address ? address : "",
      _id: _id ? _id : "",
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
              onClick={() => {
                setTypeForm("create");
                setIsOpenForm(true);
              }}
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
          <UserAdminForm
            type={typeForm}
            setIsOpenForm={setIsOpenForm}
            defaultValue={userDetailSelect}
            setIsActionAllowed={setIsActionAllowed}
          />
        </ModalFormLayout>
      )}
    </>
  );
};

export default UserAdmin;
