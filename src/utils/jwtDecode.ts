import { decodedType } from "@/types/types";
import { jwtDecode } from "jwt-decode";

const handleDecoded = () => {
  let storageData = localStorage.getItem("access_token");

  let decoded: decodedType = {};
  if (storageData && storageData !== "undefined") {
    storageData = JSON.parse(storageData);
    decoded = jwtDecode(storageData || "");
  }

  return { decoded, storageData };
};

export default handleDecoded;
