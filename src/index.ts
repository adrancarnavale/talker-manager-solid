import express from 'express';
import 'dotenv/config';
import { routes } from './routes';

const { DEFAULT_PORT } = process.env;

const app = express();

app.use(express.json());

app.use(routes);

const HTTP_OK_STATUS = 200;

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(DEFAULT_PORT, () =>
  console.log(`Listening on port ${DEFAULT_PORT}`)
);
