function cariData() {
  const input = document.getElementById("search").value.toLowerCase();
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    const nama = card.dataset.nama.toLowerCase();
    card.style.display = nama.includes(input) ? "block" : "none";
  });
}
