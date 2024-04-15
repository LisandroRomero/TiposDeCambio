const dolarBlue = async () => {
  let cambioDolarBlue;
  try {
    await fetch("https://dolarapi.com/v1/dolares/blue")
      .then((response) => response.json())
      .then((res) => (cambioDolarBlue = res));
    console.log(cambioDolarBlue);
    return cambioDolarBlue;
  } catch (error) {
    console.log(error.message);
  }
};

dolarBlue();
module.exports = dolarBlue;
