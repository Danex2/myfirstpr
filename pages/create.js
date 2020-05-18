import Layout from "../components/layout";
import { useForm } from "react-hook-form";

export default function Create() {
  const [tag, setTag] = React.useState([]);
  const [input, setInput] = React.useState("");

  const keyPressed = (e) => {
    if (tag.length === 3) {
      return;
    }
    if (e.key === "Enter") {
      setTag([...tag, input]);
    }
  };
  const removeTag = (item) => {
    const arr = tag.filter((i) => i !== item);
    setTag(arr);
  };
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <Layout title="Create">
      <div className="flex-grow bg-gray-200">
        <form
          className="max-w-3xl m-auto grid grid-cols-4 mt-10 row-gap-5 p-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label className="block col-span-4 sm:col-span-2">
            <span className="text-gray-700">Username</span>
            <input
              className="form-input mt-1 block w-full p-2 rounded border-2 border-gray-300"
              placeholder="Github username"
              name="user"
              ref={register}
            />
          </label>
          <label className="block col-span-4 sm:col-span-2">
            <span className="text-gray-700">Project name</span>
            <input
              className="form-input mt-1 block w-full p-2 rounded border-2 border-gray-300"
              placeholder="Github project name"
              name="name"
              ref={register}
            />
          </label>
          <label className="block col-span-4 sm:col-span-2">
            <span className="text-gray-700">Description</span>
            <textarea
              style={{ resize: "none" }}
              className="form-input mt-1 block w-full p-2 rounded border-2 border-gray-300"
              placeholder="Write a little description about the project"
              name="description"
              ref={register}
            />
          </label>
          <label className="block col-span-4 sm:col-span-2">
            <span className="text-gray-700">Language</span>
            <select
              className="form-select mt-1 block w-full p-2 rounded border-2 border-gray-300"
              name="language"
              ref={register}
            >
              <option value="javascript">JavaScript</option>
              <option value="golang">Golang</option>
              <option value="ruby">Ruby</option>
              <option value="python">Python</option>
              <option value="java">Java</option>
              <option value="c++">C++</option>
            </select>
          </label>
          <label className="block col-span-4 sm:col-span-2">
            <span className="text-gray-700">Tags</span>
            <input
              className="form-input mt-1 block w-full p-2 rounded border-2 border-gray-300"
              placeholder="Add up to a maximum of 3 tags"
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={keyPressed}
            />
            <ul className="flex">
              {tag.map((t, i) => (
                <li key={i} className="mr-3">
                  {t}
                  <button type="button" onClick={() => removeTag(t)}>
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </label>
          <label className="block col-span-4 sm:col-span-2">
            <span className="text-gray-700">Repo Link</span>
            <input
              className="form-input mt-1 block w-full p-2 rounded border-2 border-gray-300"
              placeholder="Project Link"
              name="repo"
              ref={register}
            />
          </label>
          <button
            type="submit"
            className="bg-gray-900 text-white p-2 rounded shadow-md"
          >
            Post
          </button>
        </form>
      </div>
    </Layout>
  );
}
