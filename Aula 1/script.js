var moedaParaConverter = window.prompt(
    "Olá, você deseja converter para Dólar ou Euro?"
  );
  
  var valorReal = Number(window.prompt("Insira o valor em Real:"));
  
  var cambioRealDolar = 5.09;
  var cambioRealEuro = 5.55;
  
  if (moedaParaConverter == "Dólar") {
    var valorConvertido = valorReal / cambioRealDolar;
    var valorConvertido = valorConvertido.toFixed(2);
    window.alert(`O valor em Dólar é US$${valorConvertido}`);
  } else if (moedaParaConverter == "Euro") {
    var valorConvertido = valorReal / cambioRealEuro;
    var valorConvertido = valorConvertido.toFixed(2);
    window.alert(`O valor em Euro é €${valorConvertido}`);
  }
  