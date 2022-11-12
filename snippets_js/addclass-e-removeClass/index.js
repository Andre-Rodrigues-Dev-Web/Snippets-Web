// Adiciona classe
const adicionaClasse = document.querySelector(".adiciona_cor");
const removeClasse = document.querySelector(".remove_cor");

// evento que adiciona classe
adicionaClasse.addEventListener("click", function () {
  const mudaCor = document.querySelector(".muda_cor");
  mudaCor.classList.add("cor_preta");
});

// Revome a classe
removeClasse.addEventListener("click", function () {
  const mudaCor = document.querySelector(".muda_cor");
  mudaCor.classList.remove("cor_preta");
});
