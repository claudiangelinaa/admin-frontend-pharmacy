export function convertToRupiah(number) {
    return `Rp ${new Intl.NumberFormat(["ban", "id"]).format(number)}`;
  }