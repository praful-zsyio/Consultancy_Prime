try {
  require('dotenv').config();
} catch (e) {
  // dotenv optional if environment variables are provided by platform (e.g. Render)
}
const app = require('./src/app');

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`===============================================`);
  console.log(`🚀 Prime Staffing Services Server running`);
  console.log(`📍 Endpoint: http://localhost:${PORT}`);
  console.log(`🏢 Contact: HR Executive`);
  console.log(`📌 Office: Rau, Indore (M.P.)`);
  console.log(`===============================================`);
});
