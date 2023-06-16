import "./styles.css";

// this is for preventing the site on reloading
var form = document.getElementById("myForm");
function handleForm(event) {
  event.preventDefault();
}
form.addEventListener("submit", handleForm);

// counter for how many children we have in HTML Table, in starting point six:
let i = 3;

let users = [];

const tableBody = document.getElementById("tableBody");

// lets generate 3 children to the table in start
let newCell0 = document.createElement("tr");
let user0 = {
  username: "Webmaster",
  email: "example1@email.com",
  address: "Demoland 123",
};
newCell0.innerHTML =
  "<td>" +
  user0.username +
  "</td><td>" +
  user0.email +
  "</td><td>" +
  user0.address +
  "</td><td>X</td>";
tableBody.appendChild(newCell0);
users.push(user0);

let newCell1 = document.createElement("tr");
let user1 = {
  username: "User123",
  email: "example2@email.com",
  address: "Userplace 321",
};
newCell1.innerHTML =
  "<td>" +
  user1.username +
  "</td><td>" +
  user1.email +
  "</td><td>" +
  user1.address +
  "</td><td>X</td>";
tableBody.appendChild(newCell1);
users.push(user1);

let newCell2 = document.createElement("tr");
let user2 = {
  username: "Another123",
  email: "example3@email.com",
  address: "AnotherPlace 21",
};
newCell2.innerHTML =
  "<td>" +
  user2.username +
  "</td><td>" +
  user2.email +
  "</td><td>" +
  user2.address +
  "</td><td>X</td>";
tableBody.appendChild(newCell2);
users.push(user2);

function noPicture() {
  let newCell = document.createElement("tr");

  let username0 = document.getElementById("input-username").value;

  let email0 = document.getElementById("input-email").value;
  let address0 = document.getElementById("input-address").value;

  // task4:
  let k = 0;
  users.forEach((u) => {
    if (u.username == username0) {
      k++;
    }
  });

  if (k > 0) {
    let usernameTemporary = username0 + " [" + (k - 1) + "]";
    if (document.querySelector("#input-admin").checked) {
      newCell.innerHTML =
        "<td>" +
        usernameTemporary +
        "</td><td>" +
        email0 +
        "</td><td>" +
        address0 +
        "</td><td>X</td>";
    } else {
      newCell.innerHTML =
        "<td>" +
        usernameTemporary +
        "</td><td>" +
        email0 +
        "</td><td>" +
        address0 +
        "</td><td>-</td>";
    }
  } else {
    if (document.querySelector("#input-admin").checked) {
      newCell.innerHTML =
        "<td>" +
        username0 +
        "</td><td>" +
        email0 +
        "</td><td>" +
        address0 +
        "</td><td>X</td>";
    } else {
      newCell.innerHTML =
        "<td>" +
        username0 +
        "</td><td>" +
        email0 +
        "</td><td>" +
        address0 +
        "</td><td>-</td>";
    }
  }

  tableBody.appendChild(newCell);
  users.push({ username: username0, email: email0, address: address0 });
  i++;
}

function YesPicture(imgSrc) {
  let newCell = document.createElement("tr");

  let username0 = document.getElementById("input-username").value;

  let email0 = document.getElementById("input-email").value;
  let address0 = document.getElementById("input-address").value;

  //image:
  let newImage = document.createElement("img");
  newImage.setAttribute("src", imgSrc);

  // task4:
  let k = 0;
  users.forEach((u) => {
    if (u.username == username0) {
      k++;
    }
  });

  if (k > 0) {
    let usernameTemporary = username0 + " [" + (k - 1) + "]";
    if (document.querySelector("#input-admin").checked) {
      newCell.innerHTML =
        "<td>" +
        usernameTemporary +
        "</td><td>" +
        email0 +
        "</td><td>" +
        address0 +
        "</td><td>X</td><td><img src='" +
        imgSrc +
        "'width='64' height='64'></td>";
    } else {
      newCell.innerHTML =
        "<td>" +
        usernameTemporary +
        "</td><td>" +
        email0 +
        "</td><td>" +
        address0 +
        "</td><td>-</td><td><img src='" +
        imgSrc +
        "'width='64' height='64'></td>";
    }
  } else {
    if (document.querySelector("#input-admin").checked) {
      newCell.innerHTML =
        "<td>" +
        username0 +
        "</td><td>" +
        email0 +
        "</td><td>" +
        address0 +
        "</td><td>X</td><td><img src='" +
        imgSrc +
        "'width='64' height='64'></td>";
    } else {
      newCell.innerHTML =
        "<td>" +
        username0 +
        "</td><td>" +
        email0 +
        "</td><td>" +
        address0 +
        "</td><td>-</td><td><img src='" +
        imgSrc +
        "'width='64' height='64'></td>";
    }
  }

  tableBody.appendChild(newCell);
  users.push({ username: username0, email: email0, address: address0 });
  i++;
}

const emptyButton = document.getElementById("empty-table");

emptyButton.addEventListener("click", () => {
  const tableBody = document.getElementById("tableBody");

  for (let j = i; j > 0; j--) {
    tableBody.removeChild(tableBody.lastChild);
    console.log("x");
    i--;
  }

  users = [];
});

const submitButton = document.getElementById("submit-data");
submitButton.addEventListener("click", () => {
  const file = document.getElementById("input-image").files[0];
  let imgSrc = "";
  if (!file) {
    noPicture();
  } else {
    imgSrc = URL.createObjectURL(file);
    YesPicture(imgSrc);
  }
});

/*let dit = x => "Tämä on "+x

console.log(dit("koira"))

let button = document.getElementById("btn")

/*let hello = function(x) {*
function hello(x) {
    console.log("Luku on "+x)
}


button.addEventListener("click", () => hello(5))*/
