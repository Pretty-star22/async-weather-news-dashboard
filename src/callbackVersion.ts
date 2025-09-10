import http from 'http';
import https from 'https';

const server = http.createServer((req,res) => {
    res.end('data fetching')
})
server.listen(3000, () => {
    console.log('server running at http;//localhost:3000/');
})


function callbackWeather(callback:(error:Error | null, weatherData?:any) => void){
    let city = "johannesburg";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cfc868854fc1f8db2118de2e4e5dae99`
   

    https.get(apiUrl, (response) => {
        let data = '';
        response.on('data', (chunk) => {
            data += chunk;
        })
          response.on('end',() => {
            if(response.statusCode === 200){
                try {
                    const weatherData = JSON.parse(data);
                   callback(null, weatherData)
                  
                } catch (error) {
                    callback(new Error('failed to parse json response'))
                    
                }
            }else{
                 callback(
                   new Error(`HTTP error! status:${response.statusCode}`)
                 );
            }
          }).on('error', (error) => {
            callback(error)
          })
    })

}



function callbackNews(callback: (error: Error | null, NewsData?: any) => void) {

  let newsUrl = "https://dummyjson.com/posts/1";

  https.get(newsUrl, (response) => {
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
          } catch (error) {
            callback(new Error("failed to parse json response"));
          }
        } else {
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
      } else {
        console.log(NewsData);
      }
    });
   if (err) {
     console.log(err);
   } else {
     console.log(weatherData);
   }
});


