import { NestFactory } from '@nestjs/core';
import serverlessExpress from '@vendia/serverless-express';

import { AppModule } from './modules/app/app.module';

async function bootstrap(event?, context?, callback?) {
  const app = await NestFactory.create(AppModule);

  if (require.main.filename === __filename) {
    await app.listen(3000, () => {
      console.log('Running...');
    });
  } else {
    if (event && context && callback) {
      await app.init();
      const expressApp = app.getHttpAdapter().getInstance();
      return serverlessExpress({ app: expressApp })(event, context, callback);
    }
  }
}

bootstrap();
