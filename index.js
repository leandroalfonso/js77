const numbers = [1, 2, 3, 4, 5];

const numeros = (...items) => {
  const numberTotal = [...numbers, ...items];
  const numberElements = numberTotal.map((number) => `<span>${number}</span>`);
  const numberString = numberElements.join('');
  document.querySelector('#list').innerHTML = numberString;
  console.log(numberTotal);
}

numeros(6, 7, 8, 9);
