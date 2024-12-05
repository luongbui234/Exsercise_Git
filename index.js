let dm = document.getElementById("dm");
let at = document.querySelector(".active");

let lg = document.getElementById("logo");
let lgLight = "./img/logo-light.svg";
let lgDark = "./img/logo-dark.svg";

dm.addEventListener("click", function () {
  let bgWhite = document.querySelectorAll(".bg-white");
  let bgDark = document.querySelectorAll(".bg-dark");
  let tWhite = document.querySelectorAll(".text-white");
  let tBlack = document.querySelectorAll(".text-black");

  if (dm.classList.contains("fa-sun")) {
    dm.classList.replace("fa-sun", "fa-moon");

    bgWhite.forEach((box) => {
      box.classList.replace("bg-white", "bg-dark");
    });
    tWhite.forEach((box) => {
      box.classList.replace("text-white", "text-black");
    });
    tBlack.forEach((box) => {
      box.classList.replace("text-black", "text-white");
    });

    // Logo
    lg.src = lgDark;

  } else {
    dm.classList.replace("fa-moon", "fa-sun");

    bgDark.forEach((box) => {
      box.classList.replace("bg-dark", "bg-white");
      tWhite.forEach((box) => {
        box.classList.replace("text-white", "text-black");
      });
      tBlack.forEach((box) => {
        box.classList.replace("text-black", "text-white");
      });
    });
    
    // Logo
    lg.src = lgLight;
  }
});

at.classList.add("text-blue-500");
