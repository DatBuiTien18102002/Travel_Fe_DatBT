export const headingSort = [
  {
    title: "Tên tour",
    name: "destination",
  },
  {
    title: "Giá tour",
    name: "price",
  },
];

export const sortList = [
  {
    title: `A đến Z`,
    name: "destination",
    type: "asc",
  },
  {
    title: "Z đến A",
    name: "destination",
    type: "desc",
  },
  {
    title: "Cao đến thấp",
    name: "price",
    type: "desc",
  },
  {
    title: "Thấp đến cao",
    name: "price",
    type: "asc",
  },
];

export const selectSortList = [
  {
    title: "Tên tour",
    options: [
      { label: "A đến Z", value: "destination,asc" },
      { label: "Z đến A", value: "destination,desc" },
    ],
  },
  {
    title: "Giá tour",
    options: [
      { label: "Thấp đến cao", value: "price,asc" },
      { label: "Cao đến thấp", value: "price,desc" },
    ],
  },
];
