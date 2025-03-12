export const getMenu = async () => {
  const res = await fetch("http://localhost:5000/menu");
  return await res.json();
};

export const getCategories = async () => {
  const res = await fetch("http://localhost:5000/categories");
  return await res.json();
};
