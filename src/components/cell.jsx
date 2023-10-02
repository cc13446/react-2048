const CellView = ({ number }) => {
  return (
    <div className="w-[100px] h-[100px] border-solid border-2 border-sky-600 rounded-xl flex justify-center items-center">
      <div className="text-gray-200 text-2xl">{number}</div>
    </div>
  );
};

export default CellView;
