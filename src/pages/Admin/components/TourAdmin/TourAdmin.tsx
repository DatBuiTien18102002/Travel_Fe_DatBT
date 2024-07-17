import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import InputIcon from "react-multi-date-picker/components/input_icon";
import { MultiDatePicker } from "@/components";
import { Value } from "react-multi-date-picker";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faPlus,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import config from "@/config";
import { useGetAllTour } from "@/react-query/tourQuery";
import useSearchTable from "@/hooks/useSearchTable";
import { tourAdminColumn, tourType } from "@/types/types";
import { Table, TableProps } from "antd";
import currencyFormat from "@/utils/currencyFormat";

const TourAdmin = () => {
  const navigate = useNavigate();
  const { data: allTour, isLoading: loadingGetAllTour } = useGetAllTour();
  console.log("all tour", allTour);

  const { getColumnSearchProps } = useSearchTable<tourAdminColumn>();
  const handleEditTour = (id: string) => {};

  const handleDeleteTour = (id: string) => {};

  const columns: TableProps<tourAdminColumn>["columns"] = [
    {
      title: "Photo",
      dataIndex: "photo",
      key: "photo",
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
      width: 200,
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
      sorter: (a, b) => a.transport.localeCompare(b.transport),
      ellipsis: true,
    },
    {
      title: "Thời gian",
      dataIndex: "timeTravel",
      key: "timeTravel",
      sorter: (a, b) => a.timeTravel.localeCompare(b.timeTravel),
      ellipsis: true,
    },
    {
      title: "Số khách tối đa",
      dataIndex: "maxSeat",
      key: "maxSeat",
      sorter: (a, b) => a.maxSeat - b.maxSeat,
      ellipsis: true,
    },
    {
      title: "Số khách tham gia",
      dataIndex: "currentSeat",
      key: "currentSeat",
      sorter: (a, b) => a.currentSeat - b.currentSeat,
      ellipsis: true,
    },
    {
      title: "Ngày khởi hành",
      dataIndex: "dateStart",
      key: "dateStart",
      render: (params) => <a>{params.join(", ")}</a>,
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
              className={"text-sky cursor-allowed"}
              onClick={() => handleEditTour(_id)}
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
          scroll={{ x: "max-content" }}
        />
      </div>
    </div>
  );
};

// const TourAdmin = () => {
//   const [schedule, setSchedule] = useState({
//     title: "",
//     desc: [{ timeOfDate: "", detail: "" }],
//   });

//   const handleInputChange = (index, event) => {
//     const { name, value } = event.target;
//     const updatedDesc = [...schedule.desc];
//     updatedDesc[index] = { ...updatedDesc[index], [name]: value };
//     setSchedule({ ...schedule, desc: updatedDesc });
//   };

//   const handleAddDesc = () => {
//     setSchedule({
//       ...schedule,
//       desc: [...schedule.desc, { timeOfDate: "", detail: "" }],
//     });
//   };

//   const handleRemoveDesc = (index) => {
//     const updatedDesc = [...schedule.desc];
//     updatedDesc.splice(index, 1);
//     setSchedule({ ...schedule, desc: updatedDesc });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(schedule); // In ra để kiểm tra dữ liệu khi submit form
//     // Đưa logic lưu dữ liệu vào cơ sở dữ liệu ở đây
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Title:</label>
//         <input
//           type="text"
//           name="title"
//           value={schedule.title}
//           onChange={(e) => setSchedule({ ...schedule, title: e.target.value })}
//         />
//       </div>
//       <div>
//         <label>Description:</label>
//         {schedule.desc.map((item, index) => (
//           <div key={index}>
//             <input
//               type="text"
//               name="timeOfDate"
//               placeholder="Time of Date"
//               value={item.timeOfDate}
//               onChange={(e) => handleInputChange(index, e)}
//             />
//             <input
//               type="text"
//               name="detail"
//               placeholder="Detail"
//               value={item.detail}
//               onChange={(e) => handleInputChange(index, e)}
//             />
//             <button type="button" onClick={() => handleRemoveDesc(index)}>
//               Remove
//             </button>
//           </div>
//         ))}
//         <button type="button" onClick={handleAddDesc}>
//           Add Description
//         </button>
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

export default TourAdmin;
