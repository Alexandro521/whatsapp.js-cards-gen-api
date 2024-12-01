import express from 'express';
import { router } from './router/routes';
import  cors from 'cors';
const app = express();

app.disable('x-powered-by');
app.use(cors({
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
}));

app.use(express.json());

app.use("/api", (req, res, next) => {
  const {picture, kickname, exp, lvl, rank, status} = req.query;
  if(picture && kickname && exp && lvl && rank && status) {
    next();
  } else {
    res.status(400).json({
      message: 'Bad Request',
      error: 'Missing required parameters',
      params: ['picture', 'kickname', 'exp', 'lvl', 'rank', 'status'],
      status: 400,
    });
  }
});

app.get('/', (req, res) => {
    res.json({ message: 'Hello World!' });
});
app.use('/api',router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 