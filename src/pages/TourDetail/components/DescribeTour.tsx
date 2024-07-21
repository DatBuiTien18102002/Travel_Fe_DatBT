const DescribeTour = ({
  desc,
}: {
  desc: {
    introduce: string;
    overview: string;
    topic: string;
  };
}) => {
  console.log(desc?.overview);
  const overview = desc?.overview.split(".");
  console.log("overview", overview);
  return (
    <>
      <div>
        <p className="font-robotoBold text-lg">Giới thiệu</p>
        <p>{desc?.introduce}</p>
      </div>

      <div>
        <p className="font-robotoBold text-lg">Tổng quan:</p>
        {overview?.map((item) => (
          <p key={item}>{item}.</p>
        ))}
      </div>

      <div>
        <p className="font-robotoBold text-lg">Chủ đề:</p>
        <p>{desc?.topic}</p>
      </div>
    </>
  );
};

export default DescribeTour;
