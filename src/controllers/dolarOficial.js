const dolarOficial = async () => {
  let cambioDolarOficial;
  try {
    await fetch("https://dolarapi.com/v1/dolares/oficial")
      .then((response) => response.json())
      .then((res) => (cambioDolarOficial = res));

    return cambioDolarOficial;
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = dolarOficial;
