export default {
  cnpj: (value: string) => "99.999.999/9999-99",
  cpf: (value: string) => "999.999.999-99",
  birthday: (value: string) => "99/99/9999",
  phone: (value: string) => {
    if (value.length > 5 && value[6] === "9") return "(99) 99999-9999";
    return "(99) 9999-9999";
  },
  zipCode: (value: string) => "99999-999",
};
