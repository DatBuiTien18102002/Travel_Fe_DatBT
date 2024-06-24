import { Bounce, toast, ToastPosition } from "react-toastify";

const message = (
  type: "success" | "error" | "info",
  title: string,
  autoClose = 2000,
  position: ToastPosition | undefined = "top-center" as
    | ToastPosition
    | undefined // Type assertion for default value
) => {
  toast[type](title, {
    position,
    autoClose,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });
};

export default message;
