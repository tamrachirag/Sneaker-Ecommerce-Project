document.addEventListener("DOMContentLoaded", function () {
  const addToCartBtn = document.querySelector('.add-to-cart');
  const cartCount = document.querySelector('.cart-count');

  addToCartBtn.addEventListener('click', () => {
    let count = parseInt(cartCount.textContent, 10);
    cartCount.textContent = count + 1;
    alert("Book added to cart!");
  });
});
/*book search */
const searchInput = document.querySelector('.search-box input');
const searchBtn = document.querySelector('.search-box button');
const bookGrid = document.querySelector('.book-grid');

searchBtn.addEventListener('click', () => {
  const query = searchInput.value.toLowerCase();
  const books = Array.from(bookGrid.children);

  // Separate matched and unmatched books
  const matched = [];
  const unmatched = [];

  books.forEach(book => {
    const title = book.querySelector('h3').textContent.toLowerCase();
    if (title.includes(query)) {
      matched.push(book);
    } else {
      unmatched.push(book);
    }
  });

  // Clear current list and re-append with matched first
  bookGrid.innerHTML = '';
  matched.forEach(book => bookGrid.appendChild(book));
  unmatched.forEach(book => bookGrid.appendChild(book));
});

// Optional: Pressing "Enter" triggers search
searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    searchBtn.click();
  }
});
/*book search end*/