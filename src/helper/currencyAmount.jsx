
export function currencyAmount(currency, amount) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(+amount);
}
