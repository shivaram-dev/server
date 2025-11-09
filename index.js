import express from "express";

const app = express();

import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import path from 'path';

const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

// Fix the path for static files
// app.use(express.static(path.join(__dirname, 'client/dist')));

// Use a regex or specific pattern instead of bare '*'
// app.get(/\/(.*)/, (req, res) => {
//   res.sendFile(path.join(__dirname, 'client/dist/index.html'));
// });

app.listen(port, () => console.log(`Server running on port: ${port}`));