function concat() {
  // for concat
  let text1 = document.getElementById("text1").value;
  let text2 = document.getElementById("text2").value;
  let text3 = text1.concat(text2);
  document.getElementById("concat").innerHTML = text3;

  // for length
  let length1 = text1.length;
  let length2 = text2.length;
  document.getElementById("count1").innerHTML = length1;
  document.getElementById("count2").innerHTML = length2;

  // for upper & lower case
  text1 = text1.toUpperCase();
  text2 = text2.toLowerCase();
  document.getElementById("upper").innerHTML = text1;
  document.getElementById("lower").innerHTML = text2;
}
