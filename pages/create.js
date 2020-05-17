import Layout from "../components/layout";

export default function Create() {
  return (
    <Layout title="Create">
      <div className="flex-grow bg-gray-200">
        <form className="max-w-3xl m-auto grid grid-cols-2 mt-10">
          <label class="block">
            <span class="text-gray-700">Search</span>
            <input
              class="form-input mt-1 block w-full p-2 rounded border-2 border-gray-300"
              placeholder="Search for github project"
            />
          </label>
          <label class="block">
            <span class="text-gray-700">Name</span>
            <input
              class="form-input mt-1 block w-full p-2 rounded border-2 border-gray-300"
              placeholder="Search for github project"
            />
          </label>
        </form>
      </div>
    </Layout>
  );
}
