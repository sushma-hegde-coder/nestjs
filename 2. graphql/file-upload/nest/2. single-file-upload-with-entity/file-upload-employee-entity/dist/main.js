"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const graphql_upload_1 = require("graphql-upload");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(graphql_upload_1.graphqlUploadExpress({ maxFileSize: 1000000, maxFiles: 10 }));
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map