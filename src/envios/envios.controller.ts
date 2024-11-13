import { Controller, Get, Post, Body } from '@nestjs/common';
import { EnviosService } from './envios.service';
import { Envio } from './envio.entity';

@Controller('envios')
export class EnviosController {

    constructor(private envioService: EnviosService) {}

    @Post()
    async crearEnvio(@Body() datosEnvio: Partial<Envio>): Promise<Envio> {
      return this.envioService.createEnvio(datosEnvio);
    }
  
    @Get()
    async obtenerEnvios(): Promise<Envio[]> {
      return this.envioService.listarEnvios();
    }
}
