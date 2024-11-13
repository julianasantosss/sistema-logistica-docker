import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Envio } from './envios/envio.entity';
import { EnviosModule } from './envios/envios.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'db',
      port: 3306,
      username: 'root',
      password: '',
      database: 'logistica',
      entities: [Envio],
      synchronize: true,
    }),
    EnviosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
