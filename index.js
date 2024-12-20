const express = require("express");
const cors = require("cors");

const userRoutes  = require("./api/routes/userroutes");
const anggotaRoutes = require("./api/routes/anggotaroutes");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define API routes
app.use('/api/user', userRoutes);
app.use('/api/anggota', anggotaRoutes);

// Default route
app.get('/', (req, res) => {
  res.send({
    message: 'Hello 👋',
    status: 'Server ready 🚀',
  });
});

// Error handling for unhandled routes
app.use((req, res, next) => {
  res.status(404).send({ message: 'Not Found' });
});

// Error handling for server issues
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: 'Something went wrong!', error: err.message });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
