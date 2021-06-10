import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatsModule } from './cats/cats.module';
require('dotenv').config();
const { DB_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE } = process.env;
console.log('DB_HOST', DB_HOST);
console.log('MYSQL_USER', MYSQL_USER);
console.log('MYSQL_PASSWORD', MYSQL_PASSWORD);
console.log('MYSQL_DATABASE', MYSQL_DATABASE);

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: 3306,
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      entities: [],
      autoLoadEntities: true,
      synchronize: true,
    }),
    CatsModule,
  ],
})
export class AppModule {}
