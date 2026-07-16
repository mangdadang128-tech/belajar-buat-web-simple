//#length--> untuk menghitung jumlah element

const username1 = [
    'yandy', 
    'dimas', 
    'mita'
];

const text = 'ada total ' + username1.length + ' username';
console.log(text);


//#includes--> untuk chek element yang ada/tidak, per username itu di namakan element  

const username2 = [
    'yandy', 
    'dimas', 
    'mita'
];

if (username2) {
    console.log("username sudah di gunakan");
} else {
    console.log("masih tersedia");
};

//#favoriteFood([])-> index--> untuk menentukan urutan di mulai-
//dari 0 = 1

const favoriteFood = [
    'mie ayam',
    'ayam geprek',
    'ayam goreng'
];

console.log('makanan favorite ku adalah ' + favoriteFood[2]);

//# ARRAY adalah cara menyimpan data dalam bentuk daftar
