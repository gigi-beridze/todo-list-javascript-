var form = document.getElementById('addForm')
var itemlist = document.getElementById('lists')
var filter = document.getElementById('ser')
// new add li
const addNewList = (e) => {
    e.preventDefault();
    // create val of Received text
    var newli = document.getElementById('newlival').value
    if(newli.length === 0){

    }else{
    // create  new li
    var li = document.createElement('li')
    // give claass
    li.className = 'list-group-item list-group-item-light'
    li.appendChild(document.createTextNode(newli));
    // create del
    var delBtn = document.createElement('button')
    delBtn.className = 'btn btn-danger btn-sm float-right delete'
    delBtn.innerHTML = "X"
    li.appendChild(delBtn)
    itemlist.appendChild(li)
}
}
const removeItem = (e) => {
    if(e.target.classList.contains('delete')){
      if(confirm('Are You Sure?')){
        var li = e.target.parentElement;
        itemlist.removeChild(li);
      }
    }
}
const filters = (e) => {
    var text = e.target.value.toLowerCase();
    var items = itemlist.getElementsByTagName('li')
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        })
    }
itemlist.addEventListener('click', removeItem);
form.addEventListener('submit',addNewList)
filter.addEventListener('keyup',filters)