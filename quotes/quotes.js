const textEl = document.getElementById("quoteText");
const authorEl = document.getElementById("quoteAuthor");
const btn = document.getElementById("newQuoteBtn");

// async/await = așteptăm răspunsul de la API înainte să mergem mai departe
async function getQuote() {
  textEl.textContent = "Se încarcă...";
  authorEl.textContent = "";
  try {
    const response = await fetch("https://dummyjson.com/quotes/random");
    const data = await response.json();
    textEl.textContent = "„" + data.quote + "”";
    authorEl.textContent = "— " + data.author;
  } catch (error) {
    textEl.textContent = "Nu am putut încărca citatul. Verifică conexiunea la internet.";
  }
}

btn.addEventListener("click", getQuote);
getQuote(); // un citat apare imediat ce se deschide pagina