import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import InputIcon from "react-multi-date-picker/components/input_icon";
import { MultiDatePicker } from "@/components";
import { Value } from "react-multi-date-picker";

const TourAdmin = () => {
  const [selectedDates, setSelectedDates] = useState<Value[]>([]);
  console.log("selectDate", selectedDates);
  return (
    <div>
      <h3>Chọn nhiều ngày khởi hành:</h3>
      <MultiDatePicker onDatesChange={setSelectedDates} />

      {selectedDates?.length > 0 && (
        <div>
          <h4>Ngày khởi hành đã chọn:</h4>
        </div>
      )}
    </div>
  );
};

export default TourAdmin;
