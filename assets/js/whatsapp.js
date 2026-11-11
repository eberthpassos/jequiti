(function(){
  const defaultNumber = "5521997011711";
  const override = new URLSearchParams(location.search).get("numero");
  const number = (override || defaultNumber).replace(/\D/g, "");
  document.querySelectorAll("[data-wa-product]").forEach(function(link){
    const product = link.getAttribute("data-wa-product");
    const message = "Olá! Encontrei a página de " + product + " no site e quero consultar preço do catálogo, estoque e opções de atendimento/entrega para Copacabana/Zona Sul, Rio de Janeiro.";
    link.href = "https://wa.me/" + number + "?text=" + encodeURIComponent(message);
  });
})();
