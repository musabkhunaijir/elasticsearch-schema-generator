export const SelectType = ({ handelFieldType }) => {
  return (
    <>
      <label
        for="countries_multiple"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
      >
        Select datatype:
      </label>

      <select
        multiple=""
        id="countries_multiple"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={(e) => handelFieldType(e.target.value)}
      >
        <option selected="">Choose countries</option>
        <option value="text">Text</option>
        <option value="int">Int</option>
      </select>
    </>
  );
};
