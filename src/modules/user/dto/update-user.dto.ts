import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";
import { UserRole } from "../user.entity";
import { CreateUserDto } from "./create-user.dto";
import { PartialType } from "@nestjs/swagger";

export class UpdateUserDto extends PartialType(CreateUserDto) {

    constructor(name: string, email: string, password: string) {
        super();
        this.name = name,
            this.email = email,
            this.password = password
    }

    @IsString({ message: 'The name must be a string' })
    @IsNotEmpty()
    name: string;

    @IsEmail({}, { message: 'Invalid email' })
    email: string;

    @IsString()
    @MinLength(8, { message: 'The password must contain minimum 8 length' })
    password: string;
}