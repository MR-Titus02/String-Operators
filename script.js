
function concat() {
    let text1 = document.getElementById('text1').value;
    text1 = text1.toUpperCase();
    let text2 = document.getElementById('text2').value;
    text2 = text2.toLowerCase();
    let text3 = text1.concat(text2);
    document.getElementById('result').innerHTML = text3;
    let length1 = text1.length;
    let length2 = text2.length;
    document.getElementById('count1').innerHTML = "The length of first string is " + length1;
    document.getElementById('count2').innerHTML = "The length of second string is " + length2;

}


