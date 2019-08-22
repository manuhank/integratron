function tarjetasMercadoPago() {
  return JSON.parse(
    UrlFetchApp.fetch("https://www.mercadopago.com/mla/credit_card_promos.json")
  );
}