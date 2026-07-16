//#tambah(+)
//#kurang(-)
//#kali(*)
//#bagi(/)
//#modulo(%) hasil sisa pembgian
//#floating point angka dengan desimal yang di tulis dengan titik (0.5) 


const apel = 3;
const pisang = 2;
const priceApel = 5000;
const pricePisang = 10000;

const discount = 0.1;
const originalPrice = priceApel * apel + pricePisang * pisang;
const totalPrice = originalPrice - originalPrice * discount;
console.log(totalPrice)