export function asMoney(valueInCents: number, removeCurrency = false): string {
  const value = valueInCents / 100;
  const convertedValue = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return removeCurrency ? convertedValue.split("$")[1].trim() : convertedValue;
}
