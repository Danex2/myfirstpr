import Link from "next/link";
import Head from "next/head";

export default ({ children, title = "This is the default title" }) => {
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

          <div className="flex">
            <div className="flex items-center text-blue-500 mr-3">
              {" "}
              <Link href="/create">
                <a>Create</a>
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {children}

      <footer className="bg-gray-900 p-3 text-white">Github link</footer>
    </div>
  );
};
