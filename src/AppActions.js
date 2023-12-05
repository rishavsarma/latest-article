import axios from "axios";
const apiKey = "2e7fc641cd83450f8fedfd87b2458018";

export async function getNews(country, topic) {
  try {
    let response = await axios.get(
      `https://newsapi.org/v2/top-headlines?apiKey=${apiKey}&country=${country}&q=${topic}`
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
}
