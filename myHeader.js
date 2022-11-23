function showElement() {
  document.getElementById("show_kadin_products").style.display = "none";
  document.getElementById("show_cocuk_products").style.display = "none";
  document.getElementById("show_guzellik_products").style.display = "none";
  document.getElementById("show_erkek_products").style.display = "none";
  var x = document.getElementById("menu_bar_left");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function show_kadin() {
  // document.getElementById() diğerlerini none yapmak lazım
  document.getElementById("show_erkek_products").style.display = "none";
  document.getElementById("show_cocuk_products").style.display = "none";
  document.getElementById("show_guzellik_products").style.display = "none";
  var x = document.getElementById("show_kadin_products");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function show_erkek() {
  // document.getElementById() diğerlerini none yapmak lazım
  document.getElementById("show_kadin_products").style.display = "none";
  document.getElementById("show_cocuk_products").style.display = "none";
  document.getElementById("show_guzellik_products").style.display = "none";
  var x = document.getElementById("show_erkek_products");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function show_cocuk() {
  // document.getElementById() diğerlerini none yapmak lazım
  document.getElementById("show_kadin_products").style.display = "none";
  document.getElementById("show_erkek_products").style.display = "none";
  document.getElementById("show_guzellik_products").style.display = "none";
  var x = document.getElementById("show_cocuk_products");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function show_makyaj() {
  // document.getElementById() diğerlerini none yapmak lazım
  document.getElementById("show_kadin_products").style.display = "none";
  document.getElementById("show_erkek_products").style.display = "none";
  document.getElementById("show_cocuk_products").style.display = "none";
  var x = document.getElementById("show_guzellik_products");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
