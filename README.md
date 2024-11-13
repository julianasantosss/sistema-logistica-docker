<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Sistema de Logística Básico con Cálculo de Tarifas

Este proyecto es un microservicio desarrollado con **NestJS** y **TypeScript** para gestionar envíos y calcular tarifas basadas en la distancia desde un punto de distribución.

## Requisitos

- **Docker** instalado.
- **Node.js** si no se usa Docker.

## Instrucciones para Probar el Proyecto

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/julianasantosss/sistema-logistica-docker.git

2. **Construir y ejecutar el contenedor Docker:**
   ```bash
   docker-compose up --build

3. **Acceder a la aplicación:**
   ```bash
   [docker-compose up --build](http://localhost:3000)

## Probar los Endpoints

### Registrar un nuevo envío (POST /envios):

Envía una solicitud POST con los datos del nuevo envío:

    ```bash
    curl -X POST http://localhost:3000/envios -H "Content-Type: application/json" -d '{
        "destinatario": "Julia",
        "remitente": "Martin",
        "contenido": "Bolsas",
        "distancia": 100
    }'
    
### Listar todos los envíos (GET /envios):

Envía una solicitud GET para obtener la lista de todos los envíos registrados:

    ```bash
    curl http://localhost:3000/envios



## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
