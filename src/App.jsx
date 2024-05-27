import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="bg-lime-500 flex justify-center p-4">
        <div>
          <h1 className="text-8xl">Tailwind Test</h1>
        </div>
      </div>

      <section>
        <nav className="flex justify-evenly">
          <Link to="/boblogs/">Home</Link>
          <Link to="/boblogs/test">Test</Link>
          <Link to="/boblogs/other">Other Test</Link>
        </nav>
      </section>

      <section className="mt-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-slate-500 p-4 rounded-xl">
            <h3 className="text-4xl">Testing Testing</h3>
          </div>
          <div className="bg-slate-500 p-4 rounded-xl">
            <h3 className="text-4xl">Testing Testing</h3>
          </div>
        </div>
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
