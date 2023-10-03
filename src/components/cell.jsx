const CellView = ({ number }) => {

    let getColor = (number) => {
        switch (number) {
            case 2: return "text-orange-300"
            case 4: return "text-amber-300"
            case 8: return "text-yellow-300"
            case 16: return "text-lime-300"
            case 32: return "text-green-300"
            case 64: return "text-teal-300"
            case 128: return "text-cyan-300"
            case 256: return "text-sky-300"
            case 512: return "text-indigo-300"
            case 1024: return "text-violet-300"
            case 2048: return "text-purple-300"
            case 4096: return "text-fuchsia-300"
            case 8192: return "text-pink-300"
            case 16384: return "text-rose-300"
            case 32768: return "text-rose-200"
            case 65536: return "text-rose-100"
            default: return "text-white"
        }
    };

  return (
    <div className="w-[100px] h-[100px] border-solid border-2 border-sky-600 rounded-xl flex justify-center items-center select-none">
      <div className={`text-3xl  ${getColor(number)}`}>{number}</div>
    </div>
  );
};

export default CellView;
