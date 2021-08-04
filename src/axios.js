import axios from "axios";

/* the base url will help us to make requests to the movie database */
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

// it works like this:
//instance.get("/foobar") -> https://api.themoviedb.org/3/foobar           

export default instance; // you can only have one default in each file
                         // when you use 'default', when importing the variable from the file "./axios", you can name it whatever you want