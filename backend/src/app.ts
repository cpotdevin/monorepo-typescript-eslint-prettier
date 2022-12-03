import express from 'express';
import { books } from '@monorepo-typescript-eslint-prettier/constants/src/books';

const app = express();
const PORT = 3000;

app.get('/books', (req, res) => {
  res.send(books);
});

app.listen(PORT, () => {
  console.log(
    `Server is Successfully Running, and App is listening on port ${PORT}`,
  );
});
