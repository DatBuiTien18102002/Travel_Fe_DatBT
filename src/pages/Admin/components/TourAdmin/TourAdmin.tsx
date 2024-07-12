import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import InputIcon from "react-multi-date-picker/components/input_icon";
import { MultiDatePicker } from "@/components";
import { Value } from "react-multi-date-picker";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const TourAdmin = () => {
  return (
    <div className="my-[20px]">
      <div className="col-span-4 row-span-3 md:row-span-2 xl:col-span-3 xl:row-span-4 overflow-hidden admin-wrapper-card">
        <div className="flex items-center justify-between">
          <div className="font-robotoBold text-sky text-2xl mb-[20px]">
            Danh sách tour
          </div>

          <button
            // onClick={() => {
            //   setTypeForm("create");
            //   setIsOpenForm(true);
            // }}
            className="w-[70px] h-[70px] rounded-[10px] flex-center border-dashed border-sky border-[3px] bg-bgSection text-sky mb-[20px]"
          >
            <FontAwesomeIcon icon={faPlus} className="w-[25px] h-[25px]" />
          </button>
        </div>
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
