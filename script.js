/*function create_th(tagname,attrname,attrvalue,content){
   var ele = document.createElement(tagname)
   ele.setAttribute(attrname,attrvalue)
   ele.innerHTML=content;
   return ele;
}
var thead = document.createElement("thead");
var tr = document.createElement("tr")
var th1 = create_th("th","scope","col","ID");
var th2 = create_th("th","scope","col","NAME");
var th3 = create_th("th","scope","col","EMAIL");
thead.append(tr,th1,th2,th3);
*/
async function foo(){
    var res = await fetch("https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json")
    var res02 = await res.json();
    console.log (res02);

    for(var i=0;i<=res02.length;i++){
    var div = document.createElement("div");
    div.innerHTML=`<table class="table table-dark">
    <tbody>
      <tr>
        <td>${res02[i].id}</td>
        <td>${res02[i].name}</td>
        <td>${res02[i].email}</td>
      </tr>
    </tbody>
  </table>`
document.body.append(div);
}
}
foo();