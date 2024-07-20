import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";


export class CreatePostgresMigrationDto  {
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
