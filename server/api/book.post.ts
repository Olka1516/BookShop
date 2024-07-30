// not work from here later solve it
export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig();
  const formData = await readMultipartFormData(event);
  const data = await $fetch(
    `${runtimeConfig.public.API_BASE_URL}/book/add-book`,
    {
      method: "POST",
      body: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return data;
});
