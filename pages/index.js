import Layout from "../components/layout";
import { parseISO, formatDistance } from "date-fns";

export default function Home() {
  const [projects, setProjects] = React.useState([]);
  React.useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <Layout title="Home">
      <div className="flex-grow bg-gray-200 p-5 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3">
        {projects.map(
          ({ id, name, user, language, description, repo, createdAt }) => (
            <div
              key={id}
              className="bg-white w-auto pt-5 px-10 pb-5 rounded shadow-lg"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <svg
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    className="h-3"
                  >
                    <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                  <p className="ml-1 text-sm">{user}</p>
                </div>
                <p className="font-semibold">{name}</p>
                <div className="bg-yellow-300 p-2 rounded border border-black">
                  <p className="text-sm">{language}</p>
                </div>
              </div>
              <p className="text-gray-500 text-sm">{description}</p>
              <div className="flex justify-between items-baseline mt-10">
                <a
                  href={repo}
                  className="text-sm text-blue-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Repo
                </a>
                <small className="text-gray-500">
                  {formatDistance(parseISO(createdAt), new Date())} ago
                </small>
              </div>
            </div>
          )
        )}
      </div>
    </Layout>
  );
}
