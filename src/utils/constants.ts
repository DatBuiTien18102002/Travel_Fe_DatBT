import {
  faCheck,
  faClock,
  faEarthAmericas,
  faEnvelope,
  faGlobe,
  faHotel,
  faHourglassHalf,
  faLocationDot,
  faPhone,
  faPlane,
  faSuitcaseRolling,
  faTag,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

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

export const strengthAboutUs = [
  {
    icon: faPlane,
    text: "Chuyến bay đẳng cấp",
  },
  {
    icon: faSuitcaseRolling,
    text: "Hành trình thú vị",
  },
  {
    icon: faHourglassHalf,
    text: "Thời gian hợp lí",
  },
  {
    icon: faHotel,
    text: "Khách sạn tiện nghi",
  },
  {
    icon: faCheck,
    text: "Chất lượng đỉnh cao",
  },
  {
    icon: faGlobe,
    text: "Tour du lịch đa dạng",
  },
];

export const serviceHighlights = [
  {
    icon: faEarthAmericas,
    title: "Các Thông Tin Tour Mới Nhất",
    description:
      "Luôn cập nhật các thông tin mới nhất, đầy đủ nhất về các tour tốt nhất hiện nay",
  },
  {
    icon: faUsers,
    title: "Chuyên gia tư vấn chi tiết nhất",
    description:
      "Các tư vấn chuyên gia luôn sẵn sàng tư vấn tận tâm, chi tiết và tốt nhất",
  },
  {
    icon: faTag,
    title: "Khuyến mãi & Giá cả luôn tốt nhất",
    description:
      "Các ưu đãi luôn được cập nhật mới nhất và giá cả tốt nhất cho bạn",
  },
];

export const contactUsInfo = [
  {
    icon: faLocationDot,
    title: "Địa chỉ",
    desc: "128/5 Bùi Quang Là, P.12, Q.Gò Vấp, TP.HCM",
  },
  {
    icon: faClock,
    title: "Thời Gian",
    desc: "8H - 23H Hằng ngày",
  },
  {
    icon: faEnvelope,
    title: "Email",
    desc: "datbui18102002@gmail.com",
  },
  {
    icon: faPhone,
    title: "Số điện thoại",
    desc: "0766980574",
  },
];
