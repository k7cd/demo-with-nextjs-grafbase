export const Search = () => {
  return (
    <div className="flex fle-row justify-start items-center space-x-3 text-lg">
      {/**
       * input
       */}
      <input
        className="py-3 px-4 rounded border-4 border-gray-200 flex-1"
        placeholder="输入病人姓名"
      />
      <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded border-4 border-blue-500 hover:border-blue-700 cursor-pointer">
        搜索
      </div>
    </div>
  );
};
