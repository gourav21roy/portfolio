export default PortfolioHeader;

export function PortfolioHeader() {
  return (
    <div className="flex w-full justify-between header text-3xl text-slate-300 font-sans">
      <div className="Name text-c3">
        <span>Gourav Roy</span>
      </div>

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
            className="mr-4 items-center gap-2"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            Projects
          </button>
        </nav>
      </div>
    </div>
  );
}
