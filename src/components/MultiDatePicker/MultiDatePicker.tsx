import { multiDatePickerProps } from "@/types/types";
import React, { useEffect, useState } from "react";
import DatePicker, { DateObject, Value } from "react-multi-date-picker";

const convertToDateObject = (dateStrings: string[]): DateObject[] => {
  return dateStrings.map((dateString) => {
    const [day, month, year] = dateString.split("/").map(Number);
    return new DateObject({ day, month, year });
  });
};

const MultiDatePicker = ({
  // selectedDates,
  defaultData,
  error,
  onDatesChange,
}: multiDatePickerProps) => {
  const [dates, setDates] = useState<Value[]>(
    defaultData ? convertToDateObject(defaultData) : []
  );

  useEffect(() => {
    if (defaultData?.length !== 0) {
      setDates(convertToDateObject(defaultData || []));
    }
  }, [defaultData]);

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
      inputClass={`${error ? " border-[#ff4d4f]" : ""} custom-multi-date`}
    />
  );
};

export default MultiDatePicker;
