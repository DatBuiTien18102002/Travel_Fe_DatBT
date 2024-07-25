import {
  faPlaneUp,
  faBus,
  faTrain,
  faShip,
} from "@fortawesome/free-solid-svg-icons";

const renderTransportIcon = (transport: string) => {
  switch (transport) {
    case "Máy bay":
      return faPlaneUp;
    case "Tàu hỏa":
      return faTrain;
    case "Xe buýt du lịch":
      return faBus;
    case "Tàu thủy":
      return faShip;
    default:
      return undefined;
  }
};

export default renderTransportIcon;
