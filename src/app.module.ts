import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserModule} from './user/user.module';
import {APP_FILTER} from "@nestjs/core";
import {HttpExceptionFilter} from "./shared/exception-filter";
import { CommentModule } from './comment/comment.module';

@Module({
    imports: [TypeOrmModule.forRoot(), UserModule, CommentModule],
    controllers: [AppController],
    providers: [
        AppService,
        {
            provide: APP_FILTER,
            useClass: HttpExceptionFilter,
        }
    ],
})
export class AppModule {
}
