import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrintersModule } from './printers/printers.module';
import { MaterialsModule } from './materials/materials.module';
import { PrintsModule } from './prints/prints.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      // username: 'your_username',
      password: null,
      database: 'printers_manager',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    PrintersModule,
    MaterialsModule,
    PrintsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
