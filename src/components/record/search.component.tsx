"use client";

export const Search = () => {
  const searchHandle = () => {
    console.log("search");
  };

  return (
    <div className="flex fle-row justify-start items-center space-x-3 text-lg">
      {/**
       * input
       */}
      <input
        className="py-3 px-4 rounded border-4 border-gray-200 flex-1"
        placeholder="输入病人姓名"
      />
      <div
        className="bg-primary hover:bg-primary text-white font-bold py-3 px-6 rounded border-4 border-primary hover:border-primary cursor-pointer"
        onClick={searchHandle}
      >
        搜索
      </div>
    </div>
  );
};
