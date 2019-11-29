let curp = "TUGE960403HMCRND09";
let curpArray = curp.split('');
let array = [];
let i = 0;
let ageDate = '19';
let actualDate = new Date().getFullYear();

console.log(curp);

console.log(curpArray);

curpArray.forEach(date => {

    let num = parseInt(date);
    //console.log(num);

    if (num > 0) {
        if (i <= 1) {
            array.push(num);
        }
        i++;
    }

})

array.forEach(element => {
    ageDate += element;
});

console.log(ageDate);
console.log(actualDate);

let age = actualDate - ageDate;

console.log(age);