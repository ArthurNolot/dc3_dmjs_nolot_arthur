const table = [1, 20000, 6, 500,300, 400000]

function max(table) {
  let max = 0;
  let secondMax = 0;

  for (let i = 0; i < table.length; i++) {
    if (table[i] >= max) {
      secondMax = max;
      max = table[i];
    } else if (table[i] > secondMax && table[i] < max) {
      secondMax = table[i];
    }
  }

  return [max, secondMax];
}

console.log(max(table));

document.querySelector("body").innerHTML = "Valeur max tableau : "+max(table)[0]+"<br>2eme Valeur max tableau : "+max(table)[1];
