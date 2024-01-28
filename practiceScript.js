//request a web API and access files from the onlone API
var request = new XMLHttpRequest()//requesting for api
request.open("Get","https://restcountries.com/v3.1/all")//from which api we can access
request.send()//getting files from api
request.onload = function(){
    var res = JSON.parse(request.response)//api given data as string.use parse to get data as json object
    console.log(res[i])
}
