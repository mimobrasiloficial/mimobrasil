// Página de produto: galeria, quantidade, favorito e carrinho
(function () {
  // Galeria: trocar a foto principal ao clicar na miniatura
  const mainImg = document.querySelector('.pdp__main img');
  document.querySelectorAll('.pdp__thumb').forEach((thumb) => {
    thumb.addEventListener('click', () => {
      document.querySelectorAll('.pdp__thumb').forEach((t) => t.classList.remove('is-active'));
      thumb.classList.add('is-active');
      const src = thumb.dataset.full;
      if (mainImg && src) {
        mainImg.src = src;
        const alt = thumb.querySelector('img')?.alt;
        if (alt) mainImg.alt = alt;
      }
    });
  });

  // Quantidade: botões − e +
  const qty = document.querySelector('.pdp__qty');
  if (qty) {
    const value = qty.querySelector('.pdp__qty-value');
    qty.querySelectorAll('button').forEach((btn) => {
      btn.addEventListener('click', () => {
        let n = parseInt(value.textContent, 10) || 1;
        n = Math.max(1, n + parseInt(btn.dataset.step, 10));
        value.textContent = n;
      });
    });
  }

  // Salvar nos favoritos (toggle visual)
  const save = document.querySelector('.pdp__save');
  save?.addEventListener('click', () => save.classList.toggle('is-active'));

  // Adicionar ao carrinho: incrementa o contador do header
  const cartBtn = document.querySelector('.pdp__cart');
  const count = document.querySelector('.header__cart-count');
  cartBtn?.addEventListener('click', () => {
    if (count) count.textContent = parseInt(count.textContent, 10) + 1;
  });
})();
