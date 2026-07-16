function tentukanAngka (setNumber) {
    
    if (setNumber < 0) {
        console.log('negatif');
    } else if (setNumber > 0) {
        console.log('positif');
    } else {
        console.log('netral');
    }
};

tentukanAngka(0)

//# RETURN

const firstName = 'ayam';
const lastName = 'bakar';

function getFullName (firstName, lastName) {
    const fullName = firstName + ' ' + lastName
    return fullName;
};

const fullName = getFullName(firstName, lastName)

console.log(fullName)

//# RETURN 2

function keluarga(name1, name2, name3, name4, name5) {
    const keluargaku = name1 + ' ' + name2  + ' ' + name3 + ' ' + name4 + ' ' + name5;
    return keluargaku;
};

const keluargaku = keluarga('ada mama, ', 'bapak, ', 'azim, ', 'dayat, ', 'fian')

console.log(keluargaku)