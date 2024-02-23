import axios from 'axios';

export async function fetchArticles(query, currentPage) {
  const API_KEY = 'fd1f8d0f36f84a21851de7a79f1aeaa8';
  const BASE_URL = 'https://free-news.p.rapidapi.com/v1';
  const END_POINT = '/search';
  const url = `${BASE_URL}${END_POINT}`;

  const headers = {
    'x-rapidapi-key': '9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169e0e2f4',
    'x-rapidapi-host': 'free-news.p.rapidapi.com',
  };

  const params = {
    lang: 'en',
    q: query,
    page_size: 10,
    page: currentPage,
  };

  const res = await axios.get(url, { params, headers });
  return res.data;
}

// ============ goit-hw-js-12===========

//=============pixabay-api.js===========

// import axios from 'axios';

// export default class PixabayApi {
//   BASE_URL = 'https://pixabay.com/api/';
//   apiKey;

//   constructor(apiKey) {
//     this.apiKey = apiKey;
//   }

//   async getImageList(query, page = 1) {
//     const params = {
//       key: this.apiKey,
//       q: query,
//       image_type: 'photo',
//       orientation: 'horizontal',
//       safesearch: 'true',
//       page,
//       per_page: 15,
//     };

//     try {
//       const response = await axios.get(this.BASE_URL, { params });
//       return response.data;
//     } catch (error) {
//       console.error(error);
//       throw error;
//     }
//   }
// }

// ======================================

// import axios from 'axios';

// export default class PixabayApi {
//   BASE_URL = 'https://pixabay.com/api/';
//   constructor(apiKey) {
//     this.apiKey = apiKey;
//   }

//   async getImageList(query, page = 1) {
//     const searchParams = new URLSearchParams({
//       key: this.apiKey,
//       q: query,
//       image_type: 'photo',
//       orientation: 'horizontal',
//       safesearch: 'true',
//       page,
//       per_page: 15,
//     });

//     try {
//       const response = await axios.get(`${this.BASE_URL}?${searchParams}`);
//       return response.data;
//     } catch (error) {
//       throw new Error(error.message);
//     }
//   }
// }


