import { multiDatePickerProps } from "@/types/types";
import React, { useState } from "react";
import DatePicker, { DateObject, Value } from "react-multi-date-picker";

const MultiDatePicker = ({
  // selectedDates,
  onDatesChange,
}: multiDatePickerProps) => {
  // const [dates, setDates] = useState(selectedDates);
  const [dates, setDates] = useState<Value[]>([]);
  const today = new Date();

  const convertToDateString = (newDates: DateObject[]) => {
    const dateString = newDates?.map((date) => {
      return date?.format("DD/MM/YYYY");
    });

    return dateString;
  };

  const handleDateChange = (newDates: DateObject[]) => {
    setDates(newDates);
    onDatesChange(convertToDateString(newDates));
  };

  return (
    <DatePicker
      multiple
      value={dates}
      onChange={handleDateChange}
      format="DD/MM/YYYY"
      minDate={today}
      sort
      inputClass="custom-multi-date"
    />
  );
};

export default MultiDatePicker;
