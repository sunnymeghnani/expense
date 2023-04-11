var items = document.getElementById(`exp`);
document.getElementById(`btnsub`).addEventListener(`click`, function (e) {
  e.preventDefault();
  var amt = document.getElementById(`numbers`).value;
  var desc = document.getElementById(`text`).value;
  var catogo = document.getElementById(`catageories`).value;
  var my_obj = {
    amount: amt,
    description: desc,
    catogories: catogo,
  };
  let my_obj_searialization = JSON.stringify(my_obj);

  var li = document.createElement(`li`);
  var deletebtn = document.createElement(`button`);
  var editbtn = document.createElement(`button`);
  deletebtn.className = `delete`;
  editbtn.className = `edit`;
  li.appendChild(document.createTextNode(amt));
  li.appendChild(document.createTextNode(desc));
  li.appendChild(document.createTextNode(catogo));
  deletebtn.appendChild(document.createTextNode(`Delete`));
  editbtn.appendChild(document.createTextNode(`Edit`));
  li.appendChild(deletebtn);
  li.appendChild(editbtn);
  items.appendChild(li);
  localStorage.setItem(desc, my_obj_searialization);
});
items.addEventListener(`click`, function (e) {
  e.preventDefault();
  if (e.target.classList.contains(`delete`)) {
    var li = e.target.parentElement;
    var cons = li.childNodes[1].textContent;
    items.removeChild(li);
    // console.log(cons);
    localStorage.removeItem(cons);
    // console.log(localStorage.getItem(con));
  }
  if (e.target.classList.contains(`edit`)) {
    var li = e.target.parentElement;
    var cons = li.childNodes[1].textContent;
    document.getElementById(`numbers`).value = li.firstChild.textContent;
    document.getElementById(`text`).value = li.childNodes[1].textContent;
    document.getElementById(`catageories`).value = li.childNodes[2].textContent;
    items.removeChild(li);
    // console.log(cons);
    localStorage.removeItem(cons);
  }
});
