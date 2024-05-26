const convertJsonToFormData = (values: any) => {
  const { file, ...data } = values;
  const stringifiedData = JSON.stringify(data);

  const formData = new FormData();

  formData.append("data", stringifiedData);
  formData.append("file", file);

  return formData;
};

export default convertJsonToFormData;
