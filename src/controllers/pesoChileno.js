const pesoChileno = async () => {
  let cambioChileno;
  try {
    await fetch("https://dolarapi.com/v1/cotizaciones/eur")
      .then((response) => response.json())
      .then((res) => (cambioChileno = res));
    console.log(cambioChileno);
    return cambioChileno;
  } catch (error) {
    console.log(error);
  }
};
euro();
module.exports = {
  pesoChileno,
};
