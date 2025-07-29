innerList = document.getElementsByTagName("LI");
var closeButton = document.getElementsByClassName("closeButton");
var editButton = document.getElementsByClassName("editButton");
var modal = document.getElementsByClassName("modal");
var len = innerList.length;
var i;
var j;

for (i = 0; i < len; i++) {
  var span = document.createElement("SPAN");
  span.className = "closeButton";
  var x = document.createTextNode("X");
  span.appendChild(x);
  innerList[i].appendChild(span);

  closeButton[i].onclick = function () {
    var parentElem = this.parentElement;
    parentElem.style.display = "none";
  };
}

function newTask() {
  var li = document.createElement("li");
  var task = document.getElementById("newInput").value;
  li.append(task);
  if (task === " ") {
    alert("Lütfen Boş Birakmayiniz!");
  } else {
    document.getElementById("myList").appendChild(li);
  }
  document.getElementById("newInput").value = " ";

  var spaed = document.createElement("span");
  spaed.className = "editButton";
  var ed = document.createTextNode("Edit");
  spaed.appendChild(ed);
  li.appendChild(spaed);

  var span = document.createElement("SPAN");
  span.className = "closeButton";
  var x = document.createTextNode("X");
  span.appendChild(x);
  li.appendChild(span);

  for (i = 0; i < closeButton.length; i++) {
    closeButton[i].onclick = function () {
      var parentElem = this.parentElement;
      parentElem.style.display = "none";
    };
  }

  for (j = 0; j < editButton.length; j++) {
    var parentElem = this.parentElement;
    editButton[j].onclick = function () {
      divs[0].style.display = "block";

    };

  }
}

function edit() {
  var edli = document.createElement("li");
  var edited = document.getElementById("editInput").value;
  edli.append(edited);

  return(edli);
}