import mongoose from 'mongoose';
import app from './app';
import config from './config/index';
import { logger, errorlogger } from './shared/logger';

process.on('uncaughtException', error => {
  // console.log('Uncaught exception')
  errorlogger.error(error);
  process.exit(1);
});

import { Server } from 'http';

async function bootstrap() {
  let server: Server;

  try {
    await mongoose.connect(config.database_url as string);
    logger.info(` Database is connected successfully`);

    server = app.listen(config.port, () => {
      logger.info(`Application listening on port ${config.port}`);
    });
  } catch (err) {
    errorlogger.error('Failed to connect database', err);
  }

  process.on('unhandledRejection', error => {
    // console.log('Unhandled Rejection is detected, we are closing our server');
    if (server) {
      server.close(() => {
        errorlogger.error(error);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
}

bootstrap();

process.on('SIGTERM', () => {
  logger.info('SIGTERM is received');
  if (Server) {
    // Server.close()
  }
});
