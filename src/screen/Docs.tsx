const Docs = () => {
  return (
    <div className="bg-gray-200 font-sans h-screen w-full flex flex-row justify-center items-center">
      <div className="card w-96 mx-auto bg-white  shadow-xl hover:shadow">
        <img
          className="w-32 mx-auto rounded-full -mt-20 border-8 border-white"
          src="https://www.satdevelop.com/Resource/img/About/author_ava.png"
          alt=""
        />
        <div className="text-center mt-2 text-3xl font-medium">
          Đoàn Đức Tín
        </div>
        <div className="text-center mt-2 font-light text-sm">
          @satdevelop.com
        </div>
        <div className="text-center font-normal text-lg">Satellite</div>
        <div className="px-6 text-center font-light text-sm">
          <p>
            Full Stack and Cloud Developer, blogger. Love to made film, editting
            and design, good on solution and architect
          </p>
        </div>
        <hr className="mt-4"></hr>
        <div className="flex p-2">
          <div className="w-1/2 text-center">
            <span className="font-bold">2.4 k</span> Followers
          </div>
          <div className="w-0 border border-gray-300"></div>
          <div className="w-1/2 text-center">
            <span className="font-bold">100.0 k</span> Traffic
          </div>
        </div>
      </div>
    </div>
  );
};

export default Docs;
