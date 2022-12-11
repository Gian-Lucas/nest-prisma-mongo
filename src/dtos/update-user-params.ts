import { IsEmail, IsNotEmpty } from 'class-validator';

export class UpdateUserParams {
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
