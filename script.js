"use strict";
//Charger la session
ol.innerHTML = localStorage.getItem("list");

//Supprimer au click apprer rechargement
const spanDels = document.querySelectorAll(".delete");
for (let span of spanDels) {
  span.onclick = () => del(span.parentElement);
}
//N'affiche "aucune tache" au raffraichissment si il y a des tache
noTache.style.display = ol.innerHTML == "" ? "flex" : "none";

//Fonction ajouter un todo
form.onsubmit = () => {
  const li = document.createElement("li");
  const spanDel = document.createElement("span");
  const spanCheck = document.createElement("span");
  //Ajoute une class delete au spanDel
  spanDel.classList.add("delete");

  //Ajoute une class check au spanCheck
  spanCheck.classList.add("check");

  // Const cree une li dans l'ol avec comme valeur l'input
  li.textContent = champ.value;
  ol.appendChild(li);

  //Const cree une span avec une icon poubelle avec fonction suppression du li au click
  spanDel.innerHTML = '<i class="fa-solid fa-trash"></i>';
  spanDel.onclick = () => del(li);
  li.appendChild(spanDel);
  champ.value = "";

  //Const cree une span avec une icon check avec fonction checkligne sur li au click
  spanCheck.innerHTML = '<i class="fa-solid fa-check"></i>';
  spanCheck.onclick = () => check(li);
  li.appendChild(spanCheck);

  //Enleve "Aucune tache" si un li est ajouté
  noTache.style.display = "none";

  //Sauver la session
  localStorage.setItem("list", ol.innerHTML);

  //empeche le refraiche
  return false;
};
//fonction supprimer l'element
function del(element) {
  element.remove();
  //Affiche "aucune tache.." si plus de li
  if (ol.innerHTML == "") {
    noTache.style.display = "flex";
  }
  //Sauver la nouvelle session
  localStorage.setItem("list", ol.innerHTML);
}
function check(element) {
  element.classList.toggle("checked");
  localStorage.setItem("list", ol.innerHTML);
}
