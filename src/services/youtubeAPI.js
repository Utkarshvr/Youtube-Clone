import axios from "axios";

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    // "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY, //utkarshv995
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY_2, //uv.example
    // "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY_3, //utkarshverma559
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

/*

 const options = {
    method: "GET",
    url: "https://youtube-v31.p.rapidapi.com/search",
    params: {
      relatedToVideoId: "7ghhRHRP6t4",
      part: "id,snippet",
      type: "video",
      maxResults: "50",
    },
    headers: {
      "content-type": "application/octet-stream",
      "X-RapidAPI-Key": `${process.env.REACT_APP_RAPID_API_KEY}`,
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };

*/

export async function fetchFromAPI(url) {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
}
