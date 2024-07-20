import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MigrationService } from './migration.service';


@Controller('migration')
export class MigrationController {
  constructor(private readonly migrationService: MigrationService) {}

  @Post()
  create() {
    return this.migrationService.create();
  }


}
