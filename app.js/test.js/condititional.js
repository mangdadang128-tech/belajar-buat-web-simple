//#CONDITIONAL untuk menghasilkan hal yang berbeda tergantung kondisi
//-if statement, if (variable) = kondisi, {console.log()} = apa yang mau kita lakukan ketika true
//-else statement, else { console.log(apa yang ingin dilakukan ketika salah/else) }

const hasStock = true;
if (hasStock) {
    console.log('produk masih tersedia')
} else {
    console.log('produk sudah habis')
}