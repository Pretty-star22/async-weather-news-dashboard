Weather & News Dashboard
A Node.js application that demonstrates three different approaches to fetching weather and news data concurrently: Callbacks, Promises, and Async/Await.

Features
Fetches current weather data from OpenWeatherMap API

Retrieves sample news posts from JSONPlaceholder API

Demonstrates three asynchronous programming patterns in JavaScript/TypeScript

Built with TypeScript for type safety

Includes an HTTP server to keep the process alive during async operations

API Endpoints Used
Weather Data: OpenWeatherMap API (https://api.openweathermap.org/data/2.5/weather)

News Data: JSONPlaceholder API (https://jsonplaceholder.typicode.com/posts/1)

Installation
Clone the repository:

bash
git clone <your-repo-url>
cd async-weather-news-dashboard
Install dependencies:

bash
npm install
Set up your OpenWeatherMap API key:

Available Scripts
1. Callback Version
bash
npm run callback
Uses traditional callback patterns with Node.js https module for concurrent API calls.

2. Promise Version
bash
npm run promise
Demonstrates Promise-based approach using .then() and .catch() methods.

3. Async/Await Version
bash
npm run async
Uses modern async/await syntax for cleaner asynchronous code.


Project Structure
text
async-weather-news-dashboard/
├── src/
│   ├── callbackVersion.ts    # Callback implementation
│   ├── promiseVersion.ts     # Promise implementation
│   └── asyncVersion.ts       # Async/await implementation
├── dist/                     # Compiled JavaScript files
├── package.json
├── tsconfig.json
└── README.md
Code Examples
Callback Pattern
typescript
function fetchWithCallbacks(callback: (error: Error | null, data?: any) => void) {
    // Traditional callback-based concurrent requests
}
Promise Pattern
typescript
function fetchWithPromises(): Promise<any> {
    return new Promise((resolve, reject) => {
        // Promise-based implementation
    });
}
Async/Await Pattern
typescript
async function fetchWithAsyncAwait(): Promise<any> {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        throw error;
    }
}
Environment Variables
Create a .env file for configuration:

env
OPENWEATHER_API_KEY=your_api_key_here
PORT=3000
CITY=johannesburg
Error Handling
All implementations include comprehensive error handling for:

Network failures

API rate limiting

JSON parsing errors

HTTP status codes

Performance Notes
All three methods fetch data concurrently

The async/await version typically offers the best readability

Callback version demonstrates traditional Node.js patterns

Promise version shows explicit promise chaining

Dependencies
TypeScript: Type safety and modern JavaScript features

@types/node: Type definitions for Node.js

node-fetch: HTTP client for making API requests (if needed)

Development
Make changes to TypeScript files in src/ directory

Build the project: npm run build

Test specific implementation: npm run callback, npm run promise, or npm run async

Contributing
Fork the repository

Create a feature branch

Make your changes

Add tests if applicable

Submit a pull request

License
This project is open source and available under the MIT License.

Support
For support or questions, please open an issue in the GitHub repository.