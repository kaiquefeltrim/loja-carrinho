function formatCurrency(coin) {

  return coin.toLocaleString("pt-br", {
    style:"currency",
    currency: "BRL",
  });

}

export default formatCurrency;
