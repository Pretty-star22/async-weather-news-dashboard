
import http from 'http'

const server = http.createServer((req,res) => {
    res.end('Data fetching app running')
})
server.listen(3000, () => {
  console.log('server running at http;//localhost:3000/');
  
})


async function fetchData(){
      let city = "johannesburg"
      const promise1 = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cfc868854fc1f8db2118de2e4e5dae99`);
      const promise2 = fetch("https://dummyjson.com/posts/1")
      

    try{
     const [response1, response2] = await Promise.all([promise1,promise2]);

     if(!response1.ok){
        throw new Error(`Weather API  error:${response1.status}`)
     }
     if(!response2.ok){
        throw new Error(`news API error: ${response2.status}`)
     }
          const weatherData = await response1.json();
          const newsData = await response2.json();
     console.log(weatherData);
     console.log(newsData);
     
     
   }catch(err){
    console.log(err)
   }
       
}
fetchData()

