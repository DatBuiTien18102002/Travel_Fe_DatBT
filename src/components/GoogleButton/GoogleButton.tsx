import { decodedType, responseType, signInResData } from "@/types/types";
import message from "@/utils/message";
import { jwtDecode } from "jwt-decode";
import { userApi } from "@/services";
import { updateUser } from "@/redux/slice/userSlice";
import { useAuthGGUser } from "@/react-query/userQuery";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { auth, googleProvider } from "@/firebase";
import { signInWithPopup } from "firebase/auth";

const GoogleButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { mutateAsync: loginGGUser } = useAuthGGUser();

  const handleGGSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const token = await result.user.getIdToken();
      const res: responseType<signInResData> = await loginGGUser(token);

      if (res.message) {
        const status = res.status.toString();
        if (status === "200" && res.data) {
          message("success", res.message);
          const decoded: decodedType = jwtDecode(res.data.access_token);

          if (decoded.payload?.id) {
            const userDetail = await userApi.getDetailUser(
              decoded.payload.id,
              res.data?.access_token
            );
            if (userDetail.data) {
              dispatch(
                updateUser({
                  refresh_token: res.data?.refresh_token,
                  access_token: res.data?.access_token,
                  ...userDetail.data,
                })
              );
              localStorage.setItem(
                "refresh_token",
                JSON.stringify(res.data?.refresh_token)
              );
              localStorage.setItem(
                "access_token",
                JSON.stringify(res.data?.access_token)
              );
              navigate("/");
            }
          }
        } else {
          message("error", res.message);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      onClick={handleGGSignIn}
      className="flex w-[50%] h-[40px] items-center justify-center gap-[3px] rounded-[10px] border-[2px] border-greyLight border-solid hover:bg-greyHover cursor-pointer"
    >
      <img src="/logoGG.webp" className="w-[31px] h-[31px]" alt="" />

      <p className="font-robotoBold mt-[2px] leading-[0]">Google</p>
    </div>
  );
};

export default GoogleButton;
