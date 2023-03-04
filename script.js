const headerbtn = document.querySelector(".header_btn");
const inputform = document.querySelector(".form_container");
const editinputform = document.querySelector(".edit_container");
const cancelicon = document.getElementById("cancel_icon");
const formcancelbtn = document.querySelector(".form_button_cancel");
const headinginput = document.querySelector(".heading_input");
const textarea = document.querySelector(".textarea");
const editcancelicon = document.getElementById("edit_cancel_icon");
const editbutton = document.querySelector(".edit_btn");

// To make a Date and Time is Upadated
function formatDate(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return (
    date.getDate() +
    "/" +
    (date.getMonth() + 1) +
    "/" +
    date.getFullYear().toString().substr(-2) +
    " at " +
    strTime
  );
}
var currentDate = new Date();
// document.getElementById("datetime").innerHTML = formatDate(currentDate);

// To Add Make input Form visible
function openform() {
  inputform.style.display = "block";
  document.body.classList.add("blur");
}
headerbtn.addEventListener("click", openform);

// To make Input Form Hide While click the Cancel icon and Cancel Button
function cancelform() {
  inputform.style.display = "none";
  document.body.classList.remove("blur");
}
function editcancelform() {
  editinputform.style.display = "none";
  document.body.classList.remove("blur");
}
cancelicon.addEventListener("click", cancelform);
formcancelbtn.addEventListener("click", cancelform);
editcancelicon.addEventListener("click", editcancelform);

// Function for Create a new Blog divison
function createblog(headingvalue, textvalue) {
  // To Publish a Blog
  const main = document.getElementById("main");

  // Creating Div
  const maindiv = document.createElement("div");
  maindiv.setAttribute("class", "container");
  // Creating h2
  const heading = document.createElement("h2");
  heading.setAttribute("class", "main_heading");
  heading.innerText = headingvalue;
  maindiv.appendChild(heading); // Appending h2
  // Creating <p>
  const para = document.createElement("p");
  para.setAttribute("class", "content");
  para.innerText = textvalue;
  maindiv.appendChild(para); // Appending p
  // Creating Div for Buttons and time
  // Creating SuperDiv for Subdiv
  const superdiv = document.createElement("div");
  superdiv.setAttribute("class", "main_button_container");
  maindiv.appendChild(superdiv);
  const subdiv = document.createElement("div");
  subdiv.setAttribute("class", "time");
  subdiv.innerText = "Created At:";
  // Creating buttons and append to the super div
  const editbtn = document.createElement("button");
  editbtn.setAttribute("class", "edit_btn button");
  editbtn.innerText = "Edit Post";
  const deletebtn = document.createElement("button");
  deletebtn.setAttribute("class", "delete_btn button");
  deletebtn.innerText = "Delete Post";
  superdiv.appendChild(editbtn);
  superdiv.appendChild(deletebtn);

  // Creating sub Part of the Divisions
  const span = document.createElement("span");
  span.setAttribute("class", "jstime");
  span.innerText = "1/03/23 at 2:50PM";
  subdiv.appendChild(span);
  superdiv.appendChild(subdiv);

  main.insertBefore(main.appendChild(maindiv.cloneNode(true)), main.firstChild);

  // To Update Date and Time.
  const datetime = document.querySelector(".jstime");
  datetime.innerHTML = formatDate(currentDate);
}

// Publish Button Activing
const publishbtn = document.querySelector(".form_button_publish");
function publish() {
  createblog(headinginput.value, textarea.value);
  headinginput.value = "";
  textarea.value = "";
  inputform.style.display = "none";
  document.body.classList.remove("blur");
  // main.insertBefore(main.appendChild(maindiv.cloneNode(true)), main.firstChild);
  //    main.appendChild(maindiv.cloneNode(true));
}
publishbtn.addEventListener("click", publish);

// To Active the Delete Post Button
const deletebutton = document.querySelector(".delete_btn");
document.addEventListener("click", (e) => {
  const target = e.target;
  if (target.innerText === "Delete Post") {
    target.parentNode.parentNode.remove();
  }
});

// To Active the Edit Button
// const deletebutton = document.querySelector(".delete_btn")
const edithead = document.querySelector(".edit_input");
const edittext = document.querySelector(".edit_textarea");
let p;
let h1;
document.addEventListener("click", (e) => {
  const target = e.target;
  if (target.innerText === "Edit Post") {
    deleteNode = target.parentNode.parentNode;
    editinputform.style.display = "block";
    p = deleteNode.querySelector(".content");
    h1 = deleteNode.querySelector(".main_heading");
    edithead.value = h1.innerText;
    edittext.value = p.innerText;
    document.body.classList.add("blur");
    // target.parentNode.parentNode.remove();
  }
});

// To Make The Blog is deleting while in the form delet buttn
const deletepostbutton = document.querySelector(".edit_delete_post_button");
deletepostbutton.addEventListener("click", () => {
  deleteNode.remove();
  editinputform.style.display = "none";
  document.body.classList.remove("blur");
});

// To make A Save Post button active For Update the result
const savepost = document.querySelector(".save_post_button");

const saveandupdate = () => {
  p.innerText = edittext.value;
  h1.innerText = edithead.value;
  editinputform.style.display = "none";

  // To Update Time And Date

  const divtime = deleteNode.querySelector(".time");
  divtime.innerText = "Last Updated At: ";
  const spanupdate = document.createElement("span");
  spanupdate.setAttribute("class", "jstime");
  divtime.appendChild(spanupdate);
  const datetimeupdate = deleteNode.querySelector(".jstime");
  console.log(datetimeupdate);
  datetimeupdate.innerHTML = formatDate(currentDate);
  document.body.classList.remove("blur");
};
savepost.addEventListener("click", saveandupdate);
