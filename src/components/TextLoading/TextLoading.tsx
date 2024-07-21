const TextLoading = ({
  fontSize,
  color,
}: {
  fontSize?: string;
  color?: string;
}) => {
  return (
    <div
      className={`absolute flex gap-[10px] font-robotoBold ${fontSize} ${color} z-10`}
    >
      <span>Loading</span>
      <ul className="loading-dots flex gap-[1px] transition-all">
        <li>.</li>
        <li>.</li>
        <li>.</li>
      </ul>
    </div>
  );
};

export default TextLoading;
