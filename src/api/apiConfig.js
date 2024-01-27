const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "8a87828d78d0db6f6a4ba11aa5fd0766",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
