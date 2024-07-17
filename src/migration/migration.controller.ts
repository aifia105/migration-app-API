import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MigrationService } from './migration.service';
import { CreateMigrationDto } from './dto/create-migration.dto';
import { UpdateMigrationDto } from './dto/update-migration.dto';

@Controller('migration')
export class MigrationController {
  constructor(private readonly migrationService: MigrationService) {}

  @Post()
  create(@Body() createMigrationDto: CreateMigrationDto) {
    return this.migrationService.create(createMigrationDto);
  }

  @Get()
  findAll() {
    return this.migrationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.migrationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMigrationDto: UpdateMigrationDto) {
    return this.migrationService.update(+id, updateMigrationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.migrationService.remove(+id);
  }
}
