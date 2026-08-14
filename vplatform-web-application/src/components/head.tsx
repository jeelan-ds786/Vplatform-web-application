const Head = (): React.JSX.Element => {
  return (
    <div className="grid grid-flow-col p-3 m-4 shadow-lg ">
      <div className="flex gap-3 mx-5">
        <img
          className="h-8"
          alt="Hamburger"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/250px-Hamburger_icon.svg.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail"
        />
        <img
          className="h-8 mx-2"
          alt="youtube-logo"
          src="https://img.magnific.com/premium-vector/vector-circle-youtube-logo-collection-with-flat-design_534308-21669.jpg?semt=ais_test_b&w=740&q=80"
        />
      </div>
      <div className="center-span-10 px-10 ">
        <input
          className="w-1/2 border border-gray-400 p-2 rounded-l-full
          "
          type="text"
        />
        <button className="border border-gray-400 p-2 rounded-r-full bg-gray-100 ">
          🔍
        </button>
      </div>
      <div className="flex justify-end">
        <img
          className="h-10"
          alt="account-logo"
          src="https://static.vecteezy.com/system/resources/previews/006/732/119/non_2x/account-icon-sign-symbol-logo-design-free-vector.jpg"
        />
      </div>
    </div>
  );
};

export default Head;
