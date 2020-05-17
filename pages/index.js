import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout title="Home">
      <div className="flex-grow bg-gray-200 p-5 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="bg-white w-auto pt-5 px-10 pb-5 rounded shadow-lg"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=40&w=40&q=80"
                  alt="Github Profile Picture"
                  className="rounded-full border-2 border-black"
                />
                <p className="ml-3 text-sm">Danex2</p>
              </div>
              <p className="font-semibold">Exerlog</p>
              <div className="bg-yellow-300 p-2 rounded border border-black">
                <p className="text-sm">JavaScript</p>
              </div>
            </div>
            <p className="text-gray-500 text-sm">
              Exerlog is an app where you can track your at home workouts. The
              tech stack is React, Node, and MongoDB.
            </p>
            <div className="flex justify-between items-baseline mt-10">
              <p className="text-xs">React // JavaScript // Node</p>
              <a href="#" className="text-sm text-blue-500">
                Repo
              </a>
              <small className="text-gray-500">6 days ago</small>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
