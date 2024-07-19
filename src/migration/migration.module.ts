import { Module } from '@nestjs/common';
import { MigrationService } from './migration.service';
import { MigrationController } from './migration.controller';

@Module({
  imports: [],
  controllers: [MigrationController],
  providers: [MigrationService],
})
export class MigrationModule {}
