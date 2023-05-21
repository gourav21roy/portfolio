export function PortfolioHeader() {
  const flag = false;
  return (
    <div className="flex w-screen h-20 bg-black bg-opacity-40 header text-3xl text-gray-800">
      <div className="Name text-center ml-5 md:text-left self-center md:ml-16 text-c3 md:font-semibold font-medium">
        <span>Gourav Roy</span>
      </div>

      {flag === true ? (
        <div className="flex  text-c1 items-center Navi text-base">
          <nav>
            <button
              className="mr-4 items-center gap-2"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              Home
            </button>
            <button
              className="mr-4 items-center gap-2"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              About
            </button>
            <button
              className="items-center"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              Projects
            </button>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
