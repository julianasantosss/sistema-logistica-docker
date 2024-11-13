import { Module } from '@nestjs/common';
import { EnviosController } from './envios.controller';
import { EnviosService } from './envios.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Envio } from './envio.entity';

@Module({
  //Definimos entidad, controlador y servicio a implementar
  imports: [TypeOrmModule.forFeature([Envio])],
  controllers: [EnviosController],
  providers: [EnviosService]
})
export class EnviosModule {}
