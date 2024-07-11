const convertStringToDate = (dateString: string) => {
  // const parts = selectedDates[0]?.format("DD/MM/YYYY").split("/");
  const parts = dateString.split("/");
  if (parts) {
    const day = parseInt(parts[0], 10);
    const monthIndex = parseInt(parts[1], 10) - 1;
    const year = parseInt(parts[2], 10);
    const dateObject = new Date(year, monthIndex, day);
    return dateObject;
  }
};

export default convertStringToDate;
