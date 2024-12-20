const express = require("express");
const cors = require("cors");

// Impor rute
const userRoutes  = require("./api/routes/userroutes");
const anggotaRoutes = require("./api/routes/anggotaroutes")

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Gunakan router untuk rute pengguna
app.use('/api/user', userRoutes);
app.use('/api/anggota', anggotaRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
