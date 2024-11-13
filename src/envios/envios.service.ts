import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Envio } from './envio.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EnviosService {

  private readonly tarifaBase = 5;
  private readonly costoPorKm = 0.5;

  constructor(
    @InjectRepository(Envio) private envioRepository: Repository<Envio>,
  ) {}

  async calcularTarifa(distancia: number): Promise<number> {
    return this.tarifaBase + distancia * this.costoPorKm;
  }

  async createEnvio(envioData: Partial<Envio>): Promise<Envio> {
    // Calcula tarifa
    const tarifa = await this.calcularTarifa(envioData.distancia);
    // Crea objeto Envio con tarifa y fecha adicional
    const newEnvio = this.envioRepository.create({
      ...envioData,
      tarifa,
      fecha_envio: new Date(),
    });
    // Guarda el envio en la bd
    return this.envioRepository.save(newEnvio);
  }
  
  // Metodo get Envios
  async listarEnvios(): Promise<Envio[]> {
    return this.envioRepository.find();
  }
}
