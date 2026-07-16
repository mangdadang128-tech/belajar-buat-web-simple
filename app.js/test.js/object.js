//#OBJECT adalah kumpulan data dalam bentuk key-value
//#untuk mengecek nama gunakan .name, age, dll

const person1 = {
    name: 'alfian', 
    age: 16, 
    birthday: 2010, 
    hasEmployed: false
};

const person2 = {
    name: 'gilang', 
    age: 17, 
    birthday: 2009, 
    hasEmployed: true
};

const text1 =person1.name + ' lahir pada tahun ' + person1.birthday;
const text2 =person2.name + ' lahir pada tahun ' + person2.birthday

console.log(text1)
