import { NestFactory } from '@nestjs/core';
import serverlessExpress from '@vendia/serverless-express';

import { AppModule } from './modules/app/app.module';

let app;

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  await app.init();

  const expressApp = app.getHttpAdapter().getInstance();
  return serverlessExpress({ app: expressApp });
};

export const handler = async (event, context, cb) => {
  if (!app) {
    app = await bootstrap();
  }
  return app(event, context, cb);
};
