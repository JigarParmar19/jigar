import { getUserData } from "../components/api.js";
import { getElement } from "../components/helper.js";
import { navbar_Components, navbar_Styles } from "../components/navbar.js";

const navbar = getElement("navbar");
navbar.innerHTML = navbar_Components();

document.addEventListener("DOMContentLoaded", function () {
  const styleTag = document.createElement("style");
  styleTag.innerHTML = navbar_Styles();
  document.head.appendChild(styleTag);
});

document.getElementById("login").addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const user = {
    email,
    password,
  };

  getUserData(user);
});