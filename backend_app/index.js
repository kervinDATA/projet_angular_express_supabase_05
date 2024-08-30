const express = require('express');
const app = express();

// Importer le middleware CORS
const corsMiddleware = require('./middlewares/corsMiddleware');

// Utiliser le middleware CORS
app.use(corsMiddleware);

// Middleware pour parser les requêtes JSON
app.use(express.json());  // Ce middleware doit venir avant l'utilisation des routes

// Définir le port (via variable d'environnement ou par défaut à 3000)
const PORT = process.env.PORT || 3000;

// Importer les routes
const listingsRoutes = require('./routes/listings');
app.use('/listings', listingsRoutes);

// Route par défaut
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Lancer le serveur sur le port défini
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
