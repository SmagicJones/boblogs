import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <header className="grid grid-cols-1 m-2">
        <div className="bg-lime-500 flex justify-center p-4 rounded">
          <div>
            <h1 className="text-4xl">Boblogs Testing</h1>
          </div>
        </div>
      </header>

      <section>
        <nav className="grid md:grid-cols-3 gap-4 m-2">
          <Link
            to="/boblogs/home"
            className="p-4 bg-lime-200 rounded hover:bg-lime-300 hover:text-white text-center"
          >
            Home
          </Link>
          <Link
            to="/boblogs/tot"
            className="p-4 bg-lime-200 rounded hover:bg-lime-300 hover:text-white text-center"
          >
            Taste of Turkey
          </Link>
          <Link
            to="/boblogs/bridgfest"
            className="p-4 bg-lime-200 rounded hover:bg-lime-300 hover:text-white text-center"
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
