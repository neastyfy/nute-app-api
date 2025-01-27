const allowedOrigins = process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(',') : null;

export const corsOptions = {
  origin: function(origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) {
    if (!allowedOrigins || allowedOrigins.includes(origin || "")) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};