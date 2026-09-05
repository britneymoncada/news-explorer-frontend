const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

const BASE_URL = "https://newsapi.org/v2/everything";

export function searchNews(keyword) {
  const url = `${BASE_URL}?q=${encodeURIComponent(
    keyword,
  )}&from=${getDateOneWeekAgo()}&sortBy=publishedAt&language=en&pageSize=100&apiKey=${API_KEY}`;

  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`News API error: ${response.status}`);
    }

    return response.json();
  });
}

function getDateOneWeekAgo() {
  const date = new Date();
  date.setDate(date.getDate() - 7);

  return date.toISOString().split("T")[0];
}
