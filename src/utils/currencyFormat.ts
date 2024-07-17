const currencyFormat = (
  price: number,
  locale: string = "vi-VN",
  currency: string = "VND"
) => {
  const formatter = new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  });

  return formatter.format(price);
};

export default currencyFormat;
