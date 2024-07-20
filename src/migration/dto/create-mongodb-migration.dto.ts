import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateMongoMigrationDto {
    @IsNotEmpty()
    @IsString()
    host: string;

    @IsNotEmpty()
    @IsNumber()
    port: number;

    @IsNotEmpty()
    @IsString()
    database: string;

    @IsOptional()
    @IsString()
    username: string;

    @IsOptional()
    @IsString()
    password: string;
    
}
