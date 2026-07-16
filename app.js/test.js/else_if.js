//#ELSE IF digunakan setelah if dan sebelum else

const number = 2000;

if (number < 10) {
    console.log('satuan');
} else if (number < 100) {
    console.log('puluhan');
} else if (number < 1000) {
    console.log('ratusan');
} else if (number < 10000) {
    console.log(number)
} else {
    console.log('angka tidak valid')
}
