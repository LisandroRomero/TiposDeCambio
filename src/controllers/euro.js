
const euro = async () => {
  let cambioEuro;
  try {
    await fetch("https://dolarapi.com/v1/cotizaciones/eur")
      .then((response) => response.json())
      .then((res) => (cambioEuro = res));
    console.log(cambioEuro);
    return cambioEuro;
  } catch (error) {
    console.log(error);
  }
};
euro();
module.exports = euro;
