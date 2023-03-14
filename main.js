let menu = document.querySelector("#menu_icon");

let nav = document.querySelector(".nav");

let headerChangeBackground = document.querySelector("header");

menu.onclick = () => {
  menu.classList.toggle("bx");
  nav.classList.toggle("active");
};

window.onscroll = () => {
  nav.classList.remove("active");
};

headerChangeBackground.onscroll = () => {
    headerChangeBackground.classList.toggle("nav")
}

//  var array2 = ["Banana", ["Apples", ["Oranges","Lemon", "Avocado", "Watermelon"], "Blueberries"]];
// var oranges = array2[1][1].sort()
// console.log(oranges);

// const myObj1 = {
//   username: "fawaz",
//   password: "12345",
// };

// const myObj2 = {
//   username: "Cosim",
//   password: "12345",
// };

// const database = [myObj1, myObj2];
// for (var i = 0; i < database.length; i++){
//     console.log(database[i]);
// }
// const userNamePrompt = prompt("Enter username:");
// const passwordPrompt = prompt("Enter password:");

// const newsFeeed = [
//   {
//     username: "Paul",
//     timeline: "00:01",
//   },
//   {
//     username: "Silver",
//     timeline: "00:01",
//   },
//   {
//     username: "Joy",
//     timeline: "00:01",
//   },
// ];

// function isValidUser(username, password) {
//   let i = 0;
//   while (i < database.length) {
//     if (
//       database[i].username === username &&
//       database[i].password === password
//     ) {
//       return true;
//     }
//     i++;
//   }
//   return false;
// }

// function signIn(username, password) {
//   if (isValidUser(username, password)) {
//     return console.log(newsFeeed);
//   } else {
//     return alert("wrong username and password");
//   }
// }

// signIn(userNamePrompt, passwordPrompt);
