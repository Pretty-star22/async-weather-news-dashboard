import { log } from "console";

async function fetchData(){
      const promise1 = fetch();
      const promise2 = fetch();
    try{
     const [response1, response2] = await Promise.all([promise1,promise2]);
     const weatherData= await response1.json();
     const newsData = await response2.json();
   }catch(err){
    console.log(err)
   }
       
    
   
}
