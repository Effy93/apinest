import { IsString, IsNotEmpty, IsNumber, MaxLength } from 'class-validator';

export class CreateAdDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  title!: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(200)
  content!: string;

  @IsNumber({ maxDecimalPlaces: 2 })
  @IsNotEmpty()
  price!: number;
}
