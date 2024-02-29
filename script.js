async function foo(){
    var res = await fetch("https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json")
    var res02 = await res.json();
    console.log (res02);

    var div = document.createElement("div");
    div.innerHTML=`<nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item"><a class="page-link" href="#">1</a></li>
      <li class="page-item"><a class="page-link" href="#">2</a></li>
      <li class="page-item"><a class="page-link" href="#">3</a></li>
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>`

document.body.append(div);
}
foo();