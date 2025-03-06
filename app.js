const express = require('express');
const app = express();
const taskRoutes = require('./routes/taskRoutes');
const authRoutes = require('./routes/authRoutes');

app.use(express.json());

app.use('/apiV1/tasks', taskRoutes);
app.use('/apiV1/auth', authRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Corriendo en el puerto ${PORT}`);
});