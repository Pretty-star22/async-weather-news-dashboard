"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const server = http_1.default.createServer((req, res) => {
    res.end("data fetching");
});
server.listen(3000, () => {
    console.log("Listening on http://localhost:3000/");
});
function fetchData() {
    return new Promise((resolve, reject) => {
        let city = "johannesburg";
        let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cfc868854fc1f8db2118de2e4e5dae99`;
        fetch(weatherUrl)
            .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
            .then((data) => resolve(data))
            .catch((error) => reject(error));
    });
}
function fetchNewsData() {
    return new Promise((resolve, reject) => {
        let newsUrl = "https://dummyjson.com/posts/1";
        fetch(newsUrl)
            .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
            .then((data) => resolve(data))
            .catch((error) => reject(error));
    });
}
fetchData()
    .then((data) => {
    console.log("Weather Data:", data);
})
    .catch((err) => console.log("Weather Error:", err.message));
fetchNewsData()
    .then((data) => {
    console.log("News Data:", data);
})
    .catch((err) => console.log("News Error:", err.message));
