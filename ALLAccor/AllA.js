const tn1 = document.getElementById('lec1');
const tn2 = document.getElementById('lec2');
const tn3 = document.getElementById('lec3');
const tn4 = document.getElementById('lec4');
const tn5 = document.getElementById('lec5');

const tn6 = document.getElementById('sm1');
const tn7 = document.getElementById('sm2');
const tn8 = document.getElementById('sm3');
const tn9 = document.getElementById('sm4');
const tn10 = document.getElementById('sm5');

const tn11 = document.getElementById('azul1');
const tn12 = document.getElementById('azul2');
const tn13 = document.getElementById('azul3');
const tn14 = document.getElementById('azul4');
const tn15 = document.getElementById('azul5');

const tn16 = document.getElementById('latam1');
const tn17 = document.getElementById('latam2');
const tn18 = document.getElementById('latam3');
const tn19 = document.getElementById('latam4');
const tn20 = document.getElementById('latam5');




const res1 = document.getElementById('res1');
const res2 = document.getElementById('res2');
const res3 = document.getElementById('res3');
const res4 = document.getElementById('res4');


const res5 = document.getElementById('res5');
const res6 = document.getElementById('res6');
const res7 = document.getElementById('res7');
const res8 = document.getElementById('res8');

const res9 = document.getElementById('res9');
const res10 = document.getElementById('res10');
const res11 = document.getElementById('res11');
const res12 = document.getElementById('res12');

const res13 = document.getElementById('res13');
const res14 = document.getElementById('res14');
const res15 = document.getElementById('res15');
const res16 = document.getElementById('res16');
function total() {
    const n1 = Number(tn1.value)
    const n2 = Number(tn2.value)
    const n3 = Number(tn3.value)
    const n4 = Number(tn4.value)
    const n5 = Number(tn5.value)
    const s = n1 / n3
    const decimal = s.toFixed(2)
    const s2 = 0.02 * decimal
    const decimal2 = s2.toFixed(2)
    const s3 = ((n1 * n2) / 1000) / decimal2
    const decimal3 = s3.toFixed(2)
    const s4 = (((decimal3/n5) - 1) * (-1)) *100
    const decimal4 = s4.toFixed(2)

    function verificarIn() {
        if (n1 < 0) {
            tn1.value = " "
        }
        if (n2 < 0) {
            tn2.value = " "
        }
        if (n3 < 0) {
            tn3.value = " "
        }
        if (n4 < 0) {
            tn4.value = " "
        }
        if (n5 < 0) {
            tn5.value = " "
        }
        else {
            res1.innerHTML = `${decimal}`
            res2.innerHTML = `${decimal2}`
            res3.innerHTML = `€ ${decimal3}`
            res4.innerHTML = `${decimal4} %`
        }
    }
    verificarIn()
}
function smile() {
    const n1 = Number(tn6.value)
    const n2 = Number(tn7.value)
    const n3 = Number(tn8.value)
    const n4 = Number(tn9.value)
    const n5 = Number(tn10.value)
    const s = n1 / n3
    const decimal = s.toFixed(2)
    const s2 = 0.02 * decimal
    const decimal2 = s2.toFixed(2)
    const s3 = ((n1 * n2) / 1000) / decimal2
    const decimal3 = s3.toFixed(2)
    const s4 = (((decimal3/n5) - 1) * (-1)) *100
    const decimal4 = s4.toFixed(2)

    function verificarIn() {
        if (n1 < 0) {
            tn6.value = " "
        }
        if (n2 < 0) {
            tn7.value = " "
        }
        if (n3 < 0) {
            tn8.value = " "
        }
        if (n4 < 0) {
            tn9.value = " "
        }
        if (n5 < 0) {
            tn10.value = " "
        }
        else {
            res5.innerHTML = `${decimal}`
            res6.innerHTML = `${decimal2}`
            res7.innerHTML = `€ ${decimal3}`
            res8.innerHTML = `${decimal4} %`
        }
    }
    verificarIn()
}
function azulFidelidade(){
    const n1 = Number(tn11.value)
    const n2 = Number(tn12.value)
    const n3 = Number(tn13.value)
    const n4 = Number(tn14.value)
    const n5 = Number(tn15.value)
    const s = n1 / n3
    const decimal = s.toFixed(2)
    const s2 = 0.02 * decimal
    const decimal2 = s2.toFixed(2)
    const s3 = ((n1 * n2) / 1000) / decimal2
    const decimal3 = s3.toFixed(2)
    const s4 = (((decimal3/n5) - 1) * (-1)) *100
    const decimal4 = s4.toFixed(2)

    function verificarIn() {
        if (n1 < 0) {
            tn11.value = " "
        }
        if (n2 < 0) {
            tn12.value = " "
        }
        if (n3 < 0) {
            tn13.value = " "
        }
        if (n4 < 0) {
            tn14.value = " "
        }
        if (n5 < 0) {
            tn15.value = " "
        }
        else {
            res9.innerHTML = `${decimal}`
            res10.innerHTML = `${decimal2}`
            res11.innerHTML = `€ ${decimal3}`
            res12.innerHTML = `${decimal4} %`
        }
    }
    verificarIn()
}
function latam() {
    const n1 = Number(tn16.value)
    const n2 = Number(tn17.value)
    const n3 = Number(tn18.value)
    const n4 = Number(tn19.value)
    const n5 = Number(tn20.value)
    const s = n1 / n3
    const decimal = s.toFixed(2)
    const s2 = 0.02 * decimal
    const decimal2 = s2.toFixed(2)
    const s3 = ((n1 * n2) / 1000) / decimal2
    const decimal3 = s3.toFixed(2)
    const s4 = (((decimal3/n5) - 1) * (-1)) *100
    const decimal4 = s4.toFixed(2)

    function verificarIn() {
        if (n1 < 0) {
            tn16.value = " "
        }
        if (n2 < 0) {
            tn17.value = " "
        }
        if (n3 < 0) {
            tn18.value = " "
        }
        if (n4 < 0) {
            tn19.value = " "
        }
        if (n5 < 0) {
            tn20.value = " "
        }
        else {
            res13.innerHTML = `${decimal}`
            res14.innerHTML = `${decimal2}`
            res15.innerHTML = `$ ${decimal3}`
            res16.innerHTML = `${decimal4} %`
        }
    }
    verificarIn()
}
