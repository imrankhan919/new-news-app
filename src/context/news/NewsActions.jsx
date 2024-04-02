const API_KEY = import.meta.env.API_KEY;
const API_URL = import.meta.env.API_URL;

export const fetchNews = async (topic) => {
  // const response = await fetch(
  //   `${API_URL}?apikey=${API_KEY}&q=${topic}&country=us&language=en`
  // );
  // const data = await response.json();
  // return data.results;

  const response = await fetch(
    `https://newsapi.org/v2/everything?q=${topic}&from=2024-03-02&sortBy=publishedAt&apiKey=557a4679cd2c4e6d9ce3dde8a909928c`
  );
  const data = await response.json();
  return data.articles;
};

//  `https://newsapi.org/v2/everything?q=${topic}&from=2024-03-02&sortBy=publishedAt&apiKey=557a4679cd2c4e6d9ce3dde8a909928c`
