// Criação • Monte seu Mimo: seleção de opções, prévia fixa e resumo
(function () {
  const formatBRL = (v) =>
    v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  const previewImg = document.getElementById('criaPreviewImg');
  const previewTitle = document.getElementById('criaPreviewTitle');
  const previewDesc = document.getElementById('criaPreviewDesc');
  const bilhetePreview = document.getElementById('criaBilhetePreview');
  const priceValue = document.getElementById('criaPriceValue');
  const summaryTitle = document.getElementById('criaSummaryTitle');
  const summaryDesc = document.getElementById('criaSummaryDesc');
  const totalValue = document.getElementById('criaTotalValue');
  const totalQty = document.getElementById('criaTotalQty');
  const addBtn = document.getElementById('criaAddBtn');
  const toggle = document.querySelector('.cria__toggle');
  const inputs = document.querySelectorAll('.cria__input');
  const bilheteInput = document.getElementById('criaBilhete');
  const destinatarioInput = document.getElementById('criaDestinatario');

  const sel = {};
  const defaults = {
    title: 'Seu Mimo personalizado',
    desc: 'As escolhas que você fizer aparecem aqui.',
    summaryTitle: 'Uma caixa do seu jeito',
    summaryDesc:
      'Escolha a base, o recheio, a embalagem e a quantidade — o resumo aparece aqui e na prévia.',
    bilhete: 'Para você, com todo o carinho da MIMO.',
  };

  function currentBilhete() {
    const text = bilheteInput.value.trim();
    if (!text) return defaults.bilhete;
    const who = destinatarioInput.value.trim();
    return who ? `Para ${who}: “${text}”` : `“${text}”`;
  }

  function update() {
    const base = sel.base;
    const recheio = sel.recheio;
    const qtd = sel.quantidade;

    const combo = [base?.name, recheio?.name].filter(Boolean).join(' • ');
    const title = combo || defaults.title;
    const desc =
      combo && qtd
        ? `${recheio ? recheio.name + ' • ' : ''}${qtd.name} • embalagem ${sel.embalagem?.name || 'à sua escolha'}.`
        : combo
          ? `${combo}. Complete as etapas para ver o resumo.`
          : defaults.desc;

    previewTitle.textContent = title;
    summaryTitle.textContent = title;
    previewDesc.textContent = desc;
    summaryDesc.textContent = desc;
    bilhetePreview.textContent = currentBilhete();

    const total = ['base', 'embalagem', 'quantidade'].reduce(
      (sum, k) => sum + (sel[k]?.price || 0),
      0
    );
    const priceText = total > 0 ? formatBRL(total) : 'R$ 0,00';
    priceValue.textContent = priceText;
    totalValue.textContent = priceText;
    totalQty.textContent = qtd ? qtd.name.toUpperCase() : '—';
  }

  document.querySelectorAll('.cria__options').forEach((group) => {
    const step = group.dataset.step;
    group.querySelectorAll('.cria__option').forEach((btn) => {
      btn.addEventListener('click', () => {
        group.querySelectorAll('.cria__option').forEach((b) => {
          b.classList.remove('is-active');
          b.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add('is-active');
        btn.setAttribute('aria-pressed', 'true');
        sel[step] = {
          name: btn.dataset.name,
          img: btn.dataset.img,
          price: parseFloat(btn.dataset.price) || 0,
        };
        if (previewImg && sel[step].img) {
          previewImg.src = sel[step].img;
          previewImg.alt = sel[step].name;
        }
        update();
      });
    });
  });

  // Mensagem opcional: liga/desliga os campos
  toggle?.addEventListener('click', () => {
    const on = toggle.classList.toggle('is-on');
    toggle.setAttribute('aria-checked', String(on));
    inputs.forEach((input) => {
      input.disabled = !on;
      if (!on) input.value = '';
    });
    update();
  });

  [bilheteInput, destinatarioInput].forEach((input) => {
    input?.addEventListener('input', update);
  });

  // Adicionar ao carrinho: incrementa o contador do header
  const count = document.querySelector('.header__cart-count');
  addBtn?.addEventListener('click', () => {
    if (count) count.textContent = parseInt(count.textContent, 10) + 1;
    const original = addBtn.innerHTML;
    addBtn.childNodes[0].textContent = ' Adicionado! ';
    setTimeout(() => {
      addBtn.childNodes[0].textContent = ' Adicionar ao carrinho ';
    }, 1600);
  });
})();
