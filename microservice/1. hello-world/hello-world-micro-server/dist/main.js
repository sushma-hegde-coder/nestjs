"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const logger = new common_1.Logger('Main');
const microserviceOptions = {
    transport: microservices_1.Transport.TCP,
    options: {
        host: '127.0.0.1',
        port: 8877,
    },
};
async function bootstrap() {
    const app = await core_1.NestFactory.createMicroservice(app_module_1.AppModule, microserviceOptions);
    app.listen(() => {
        logger.log('Microservice is listening...');
    });
}
bootstrap();
//# sourceMappingURL=main.js.map