import { barsButtonProps } from "@/types/types";
import { motion } from "framer-motion";

const BarsButton: React.FC<barsButtonProps> = ({ open, setOpen, color }) => {
  return (
    <button
      className="w-[35px] h-[35px] rounded-[50%] flex-center bg-transparent border-none text-sky z-[999]"
      onClick={() => setOpen()}
    >
      <svg width="23" height="23" viewBox="0 -2 23 23">
        <motion.path
          strokeWidth="3"
          stroke={color}
          strokeLinecap="round"
          variants={{
            hidden: { d: "M 2 2.5 L 21 2.5" },
            show: { d: "M 3 16.5 L 21 2.5" },
          }}
          initial="hidden"
          animate={open ? "show" : "hidden"}
        />
        <motion.path
          strokeWidth="3"
          stroke={color}
          strokeLinecap="round"
          d="M 2 9.423 L 21 9.423"
          variants={{
            hidden: { opacity: 1 },
            show: { opacity: 0 },
          }}
          initial="hidden"
          animate={open ? "show" : "hidden"}
        />
        <motion.path
          strokeWidth="3"
          stroke={color}
          strokeLinecap="round"
          variants={{
            hidden: { d: "M 2 16.346 L 21 16.346" },
            show: { d: "M 3 2.5 L 21 16.346" },
          }}
          initial="hidden"
          animate={open ? "show" : "hidden"}
        />
      </svg>
    </button>
  );
};

export default BarsButton;
