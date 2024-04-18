const dolarTarjeta = async () => {
  let cambioDolarTarjeta;
  try {
    await fetch("https://dolarapi.com/v1/dolares/tarjeta")
      .then((response) => response.json())
      .then((res) => (cambioDolarTarjeta = res));

    return cambioDolarTarjeta;
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = dolarTarjeta;
