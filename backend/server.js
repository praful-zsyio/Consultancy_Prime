require('dotenv').config();
const app = require('./src/app');

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`===============================================`);
  console.log(`🚀 SkillTalent MVC Server running`);
  console.log(`📍 Endpoint: http://localhost:${PORT}`);
  console.log(`🏢 HR Manager: Shubham Paradkar`);
  console.log(`📌 Office: Bengali Square, Indore (M.P.)`);
  console.log(`===============================================`);
});
