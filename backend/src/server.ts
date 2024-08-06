import 'dotenv/config';
import App from './app';

const app = new App();
const PORT = Number(process.env.SERVER_PORT || 3001);

app.start(PORT);
