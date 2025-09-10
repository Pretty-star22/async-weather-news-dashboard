import http from 'http';
import https from 'https';

const server = http.createServer((req,res) => {
    res.end('data fetching')
})
server.listen(3000, () => {
    console.log('server running at http;//localhost:3000/');
})
console.log("Pretty");

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
callbackWeather((err, data) => {
    if(err){
      console.log(err);
    }else{
    console.log(data);
    }
    
})