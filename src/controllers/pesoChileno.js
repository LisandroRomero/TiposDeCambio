const pesoChileno = async () => {
  let cambioChileno;
  try {
    await fetch("https://dolarapi.com/v1/cotizaciones/clp")
      .then((response) => response.json())
      .then((res) => (cambioChileno = res));

    return cambioChileno;
  } catch (error) {
    console.log(error);
  }
};
 
module.exports = pesoChileno;

