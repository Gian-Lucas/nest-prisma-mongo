import { IsNotEmpty, IsEmail } from 'class-validator';

export class GetUserParams {
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
