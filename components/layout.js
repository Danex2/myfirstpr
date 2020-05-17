import Link from "next/link";
import Head from "next/head";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "../firebase/config";

export default ({ children, title = "This is the default title" }) => {
  const { initialising, user } = useAuthState(firebase.auth());
  const authenticate = () => {
    const provider = new firebase.auth.GithubAuthProvider();
    provider.addScope("repo");
    firebase.auth().signInWithRedirect(provider);
  };
  console.log(user);
  return (
    <div className="flex flex-col min-h-screen" style={{ fontFamily: "Inter" }}>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <header>
        <nav className="bg-gray-900 p-5 flex justify-around">
          <Link href="/">
            <a className="font-semibold text-white">My First PR</a>
          </Link>
          {user ? (
            <div className="flex items-center text-blue-500">
              {" "}
              <Link href="/create">
                <a>Create</a>
              </Link>
              <svg
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
                className="h-5"
              >
                <path d="M9 5l7 7-7 7"></path>
              </svg>
            </div>
          ) : (
            <div
              className="flex items-center text-blue-500"
              onClick={authenticate}
            >
              {" "}
              <p>Login with Github</p>
              <svg
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
                className="h-5"
              >
                <path d="M9 5l7 7-7 7"></path>
              </svg>
            </div>
          )}
        </nav>
      </header>

      {children}

      <footer className="bg-gray-900 p-3 text-white">Github link</footer>
    </div>
  );
};
