import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { RoleModule } from './role/role.module';
import { UsersModule } from './users/users.module';
import { Role } from './entity/role.entity';
import { MessageModule } from './message/message.module';
import { Message } from './entity/mesage.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  controllers: [],
  providers: [],
  imports: [
    TypeOrmModule.forRoot({
        host: process.env.MYSQL_HOST,
        port: Number(process.env.MYSQL_PORT),
        username: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DB,
        entities: [User, Role, Message],
        synchronize: true,
        autoLoadEntities: true,
      },
    ),
    RoleModule,
    UsersModule,
    MessageModule,
    AuthModule,
  ],
})

export class AppModule {
}
