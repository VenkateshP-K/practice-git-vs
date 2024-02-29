//request a web API and access files from the onlone API
var request = new XMLHttpRequest()//requesting for api
request.open("Get","https://restcountries.com/v3.1/all")//from which api we can access
request.send()//getting files from api
request.onload = function(){
    var res = JSON.parse(request.response)//api given data as string.use parse to get data as json object
    console.log(res)

    var pop = res.filter((ele)=>ele.population<100000);
   console.log(pop);

   var countries_details = res.forEach(
    (country) => console.log(`${country.name.common},
   ${country.capital}, 
   ${country.flag}`))

   var total_pop = res.reduce((pop_res, country) => pop_res +country.population, 0)
   console.log("total population : "+total_pop)
 
}
