// Header: transparente sobre o hero → creme após rolagem
(function () {
  const header = document.getElementById('siteHeader');
  const onScroll = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 40);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
})();

// Favoritar produtos (toggle visual)
document.querySelectorAll('.product__fav').forEach((btn) => {
  btn.addEventListener('click', () => btn.classList.toggle('is-active'));
});

// Botão play do hero (placeholder — sem vídeo real ainda)
document.querySelector('.hero__play')?.addEventListener('click', () => {
  // TODO: substituir por player de vídeo quando o asset estiver disponível
  console.info('Hero: vídeo ainda não configurado.');
});
