import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faPlus,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import config from "@/config";
import { useDeleteTour, useGetAllTour } from "@/react-query/tourQuery";
import useSearchTable from "@/hooks/useSearchTable";
import { responseType, tourAdminColumn, tourType } from "@/types/types";
import { Table, TableProps } from "antd";
import currencyFormat from "@/utils/currencyFormat";
import message from "@/utils/message";
import { useEffect, useState } from "react";

const TourAdmin = () => {
  const navigate = useNavigate();
  const { data: allTour } = useGetAllTour();
  const [isActionAllowed, setIsActionAllowed] = useState(true);
  const [idAction, setIdAction] = useState("");

  const { getColumnSearchProps } = useSearchTable<tourAdminColumn>();
  const { mutateAsync: deleteTour } = useDeleteTour();

  const handleEditTour = (id: string) => {
    navigate(`/admin/manager-tour/update/${id}`);
  };

  useEffect(() => {
    setIsActionAllowed(true);
    setIdAction("");
  }, [allTour]);

  const handleDeleteTour = async (id: string) => {
    const res: responseType<tourType> = await deleteTour(id);

    if (res.message) {
      const status = res.status.toString();
      if (status === "200") {
        message("success", res.message);
        setIdAction(id);
        setIsActionAllowed(false);
      } else {
        message("error", res.message);
      }
    }
  };

  const columns: TableProps<tourAdminColumn>["columns"] = [
    {
      title: "Photo",
      dataIndex: "photo",
      key: "photo",
      width: "70px",
      render: (params) => {
        return (
          <img
            onError={(event) => {
              const target = event.target as HTMLImageElement;
              target.src = "/tour_img_default.jpg";
            }}
            className="rounded-[5px] w-[40px] h-[40px] overflow-hidden"
            src={params ? params : "/tour_img_default.jpg"}
          />
        );
      },
    },
    {
      title: "Tên",
      dataIndex: "name",
      key: "name",
      width: "200px",
      sorter: (a, b) => a.name.localeCompare(b.name),
      ellipsis: true,
      ...getColumnSearchProps("name"),
    },
    {
      title: "Giá",
      dataIndex: "price",
      key: "price",
      render: (text) => <a>{currencyFormat(text)}</a>,
      sorter: (a, b) => a.price - b.price,
      ellipsis: true,
    },

    {
      title: "Giảm giá",
      dataIndex: "discount",
      key: "discount",
      render: (text) => <a>{text} %</a>,
      ellipsis: true,
    },
    {
      title: "Hành trình",
      key: "departDestination",
      sorter: (a, b) => a.depart.localeCompare(b.depart),
      render: (_: unknown, record: tourAdminColumn) =>
        `${record.depart} - ${record.destination}`,
      ellipsis: true,
    },
    {
      title: "Phương tiện",
      dataIndex: "transport",
      key: "transport",
      width: "120px",
      sorter: (a, b) => a.transport.localeCompare(b.transport),
      ellipsis: true,
    },
    {
      title: "Thời gian",
      dataIndex: "timeTravel",
      key: "timeTravel",
      width: "100px",
      sorter: (a, b) => a.timeTravel.localeCompare(b.timeTravel),
      ellipsis: true,
    },
    {
      title: "Số khách tối đa",
      dataIndex: "maxSeat",
      key: "maxSeat",
      width: "140px",
      sorter: (a, b) => a.maxSeat - b.maxSeat,
      ellipsis: true,
    },
    {
      title: "Số khách tham gia",
      dataIndex: "currentSeat",
      key: "currentSeat",
      width: "150px",
      sorter: (a, b) => a.currentSeat - b.currentSeat,
      ellipsis: true,
    },
    {
      title: "Ngày khởi hành",
      dataIndex: "dateStart",
      key: "dateStart",
      width: "250px",
      render: (params) => <a>{params.join(", ")}</a>,
      ellipsis: true,
    },
    {
      title: "Edit",
      key: "edit",
      dataIndex: "_id",
      fixed: "right",
      width: 65,
      render: (_id) => {
        return (
          <>
            <button
              className={
                !isActionAllowed && idAction === _id
                  ? "text-sky cursor-not-allowed"
                  : "text-sky cursor-allowed"
              }
              onClick={() => handleEditTour(_id)}
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
      width: 70,
      render: (_id) => {
        return (
          <>
            <button
              className={"text-sky cursor-allowed"}
              onClick={() => handleDeleteTour(_id)}
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

  const newAllTours = allTour?.data.map((item: tourType, index: number) => {
    index += 1;
    // const { avatar, name, email, phone, address, _id } = item;
    return {
      key: index,
      // avatar: avatar ? avatar : "",
      // name: name ? name : "",
      // email: email ? email : "",
      // phone: phone ? phone : "",
      // address: address ? address : "",
      // _id: _id ? _id : "",
      ...item,
    };
  });

  return (
    <div className="my-[20px]">
      <div className="col-span-4 row-span-3 md:row-span-2 xl:col-span-3 xl:row-span-4 overflow-hidden admin-wrapper-card">
        <div className="flex items-center justify-between">
          <div className="font-robotoBold text-sky text-2xl mb-[20px]">
            Danh sách tour
          </div>

          <button
            onClick={() => {
              navigate(config.routes.newTourAdmin);
            }}
            className="w-[70px] h-[70px] rounded-[10px] flex-center border-dashed border-sky border-[3px] bg-bgSection text-sky mb-[20px]"
          >
            <FontAwesomeIcon icon={faPlus} className="w-[25px] h-[25px]" />
          </button>
        </div>

        <Table
          columns={columns}
          dataSource={newAllTours || []}
          pagination={{ pageSize: 4 }}
          scroll={{ x: "1200px" }}
        />
      </div>
    </div>
  );
};

export default TourAdmin;
