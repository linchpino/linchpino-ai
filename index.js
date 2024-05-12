import express from 'express'
import { ModelRoutes } from './src/routers/model.js';
import { AI } from './src/routers/ai.js';

const app = express();

const PORT = process.env.PORT || 31415;
ModelRoutes(app);
AI(app)


app.listen(PORT, () => {
    console.log(`Linchpino smart listening on ${PORT}`);
});