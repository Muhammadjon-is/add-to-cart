const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "USD",
  style: "currency",
});

export function formatCurrency(number: number) {
  const formattedString = CURRENCY_FORMATTER.format(number);
  const trimmedString = formattedString.replace(/\.00$/, '');
  return trimmedString;
}
