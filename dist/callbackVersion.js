"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const https_1 = __importDefault(require("https"));
const server = http_1.default.createServer((req, res) => {
    res.end('data fetching');
});
server.listen(3000, () => {
    console.log('server running at http;//localhost:3000/');
});
function callbackWeather(callback) {
    let city = "johannesburg";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cfc868854fc1f8db2118de2e4e5dae99`;
    https_1.default.get(apiUrl, (response) => {
        let data = '';
        response.on('data', (chunk) => {
            data += chunk;
        });
        response.on('end', () => {
            if (response.statusCode === 200) {
                try {
                    const weatherData = JSON.parse(data);
                    callback(null, weatherData);
                }
                catch (error) {
                    callback(new Error('failed to parse json response'));
                }
            }
            else {
                callback(new Error(`HTTP error! status:${response.statusCode}`));
            }
        }).on('error', (error) => {
            callback(error);
        });
    });
}
function callbackNews(callback) {
    let newsUrl = "https://dummyjson.com/posts/1";
    https_1.default.get(newsUrl, (response) => {
        let data = "";
        response.on("data", (chunk) => {
            data += chunk;
        });
        response
            .on("end", () => {
            if (response.statusCode === 200) {
                try {
                    const Data = JSON.parse(data);
                    callback(null, Data);
                }
                catch (error) {
                    callback(new Error("failed to parse json response"));
                }
            }
            else {
                callback(new Error(`HTTP error! status:${response.statusCode}`));
            }
        })
            .on("error", (error) => {
            callback(error);
        });
    });
}
callbackWeather((err, weatherData) => {
    callbackNews((err, NewsData) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(NewsData);
        }
    });
    if (err) {
        console.log(err);
    }
    else {
        console.log(weatherData);
    }
});
