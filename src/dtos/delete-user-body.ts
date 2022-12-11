import { IsNotEmpty, IsEmail } from 'class-validator';

export class DeleteUserBody {
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
