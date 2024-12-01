import express from 'express';
import {router} from './router/routes';
const app = express();

app.disable('x-powered-by');
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Hello World!' });
});
app.use('/api',router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 