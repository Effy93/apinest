import { IsString, IsNotEmpty, IsNumber, MaxLength } from 'class-validator';
import { User } from 'src/modules/user/user.entity';

export class CreateAdDto {

constructor(title: string, content: string, price: number, user: User) {
        this.title = title;
            this.content = content;
            this.price = price;
            this.user= user;
    }

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
  
  @IsString()
  @IsNotEmpty()
  user: User;

}
