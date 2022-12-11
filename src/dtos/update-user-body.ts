import { IsEmail, IsNotEmpty } from 'class-validator';

export class UpdateUserBody {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}
