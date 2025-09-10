"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const server = http_1.default.createServer((req, res) => {
    res.end('Data fetching app running');
});
server.listen(3000, () => {
    console.log('server running at http;//localhost:3000/');
});
function fetchData() {
    return __awaiter(this, void 0, void 0, function* () {
        let city = "johannesburg";
        const promise1 = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cfc868854fc1f8db2118de2e4e5dae99`);
        const promise2 = fetch("https://dummyjson.com/posts/1");
        try {
            const [response1, response2] = yield Promise.all([promise1, promise2]);
            if (!response1.ok) {
                throw new Error(`Weather API  error:${response1.status}`);
            }
            if (!response2.ok) {
                throw new Error(`news API error: ${response2.status}`);
            }
            const weatherData = yield response1.json();
            const newsData = yield response2.json();
            console.log(weatherData);
            console.log(newsData);
        }
        catch (err) {
            console.log(err);
        }
    });
}
fetchData();
