console.log("it works");

function showtxt() {
  const paketArt = document.body.querySelector("#mylist");
  const headlineOutput = document.body.querySelector("#paket");
  const listOutput = document.body.querySelector("#masse");

  switch (paketArt.value) {
    case "0":
      headlineOutput.textContent = "Brief und Postkarte";
      listOutput.textContent = "L: 10 - 23,5 cm B: 7 - 12,5 cm H: bis 1 cm";
      break;
    case "1":
      headlineOutput.textContent = "DHL Paket 2 kg";
      listOutput.textContent = "bis 60 x 30 x 15 cm";
      break;
    case "2":
      headlineOutput.textContent = "DHL Paket 5 kg";
      listOutput.textContent = "bis 120 x 60 x 60 cm";
      break;
    case "3":
      headlineOutput.textContent = "DHL Paket 10 kg";
      listOutput.textContent = "bis 120 x 60 x 60 cm";
      break;
    default:
      listOutput.textContent = "Übergröße";
  }
}
