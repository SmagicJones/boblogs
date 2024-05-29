import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="bg-lime-500 flex justify-center p-4">
        <div>
          <h1 className="text-8xl">Boblogs</h1>
        </div>
      </div>

      <section>
        <nav className="flex justify-evenly p-4">
          <Link
            to="/boblogs/home"
            className="p-4 bg-lime-200 rounded hover:bg-lime-300 hover:text-white"
          >
            Home
          </Link>
          <Link
            to="/boblogs/tot"
            className="p-4 bg-lime-200 rounded hover:bg-lime-300 hover:text-white"
          >
            Taste of Turkey
          </Link>
          <Link
            to="/boblogs/bridgfest"
            className="p-4 bg-lime-200 rounded hover:bg-lime-300 hover:text-white"
          >
            Bridgfest
          </Link>
        </nav>
      </section>

      <section>
        <div className="grid grid-cols-1">
          <Outlet />
        </div>
      </section>
    </>
  );
}

export default App;
