let month = ['Jan', 'Fev', 'Mar', 'Abr', 'Maio', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

month.forEach( e => {
  let option = document.createElement("option");
  option.textContent = e;
  document.getElementById("month").appendChild(option)
});

for(let cont = 2020; cont>1904; cont--){
  let option = document.createElement("option");
  option.textContent = cont;
  document.getElementById("year").appendChild(option)
}

for(let cont = 1; cont<32; cont++){
  let option = document.createElement("option");
  option.textContent = cont;
  document.getElementById("day").appendChild(option)
}
