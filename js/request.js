export const getData = async (url) => {
  try {
    const request = await fetch(url);
    if (!request.ok) {
      throw new Error("Nimadir noto'g'ri ketdi? Oma Uzr!");
    }
    const response = await request.json();

    return response;
  } catch (error) {
    return error.message;
  }
};
