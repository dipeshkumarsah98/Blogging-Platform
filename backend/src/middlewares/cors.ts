import cors from 'cors';

const allowedOrigins = ['http://localhost:3000', 'http://localhost:5000'];

export default cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);

    if (allowedOrigins.indexOf(origin) === -1) {
      return callback(null, false);
    }

    return callback(null, true);
  },
});
