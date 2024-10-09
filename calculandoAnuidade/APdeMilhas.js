const tn1 = document.getElementById('tex1');
const tn2 = document.getElementById('tex2');
const tn3 = document.getElementById('tex3');
const tn4= document.getElementById('tex4');
const tn5= document.getElementById('tex5');
const tn6= document.getElementById('tex6');
const tn7= document.getElementById('tex7');
const res1 = document.getElementById('res1');
const res2 = document.getElementById('res2');
const res3 = document.getElementById('res3');
const res4 = document.getElementById('res4');
const res5 = document.getElementById('res5');
const res6 = document.getElementById('res6');
function gastoAnual() {

    const n1 = Number(tn1.value);
    const n2 = Number(tn2.value);
    const n3 = Number(tn3.value);
    const n4 = Number(tn4.value);

    const s = n1 * n2
    const s2 = s / n3;
    const decimal = s2.toFixed(2);
    const s3 = s2 * n4
    const decimal2 = s3.toFixed(0);

    function verificarIn() {
        if (n1 < 0) {
            tn1.value = " "
        }
        if (n2 < 0) {
            tn2.value = " "
        }
        if (n3 < 0){
            tn3.value = " "
        }
        if (n4 < 0){
            tn4.value = " "
        }
        else {
            res1.innerHTML =`${s}`
            res2.innerHTML = `  ${decimal} `
            res3.innerHTML = `${decimal2}`
        }
    }
    verificarIn()
}
const decimal2 = s3.toFixed(0);
function valorMilhas() {
    const n5 = Number(tn5.value);
    const n6 = Number(tn6.value);
    s4 = decimal2 + (n5*decimal2)
    res4.innerHTML = `${s4}`
}
