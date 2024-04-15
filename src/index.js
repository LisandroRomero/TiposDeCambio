const app = require("./app");
const PORT = 3001;

app.listen(PORT, (req, res) => {
  console.log(`Server on port: ${PORT}`);
});
