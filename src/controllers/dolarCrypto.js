const dolarCrypto = async () => {
  let cambioDolarCrypto;
  try {
    await fetch("https://dolarapi.com/v1/dolares/cripto")
      .then((response) => response.json())
      .then((res) => (cambioDolarCrypto = res));

    return cambioDolarCrypto;
  } catch (error) {
    console.log(error.message);
  }
};


module.exports = dolarCrypto;
