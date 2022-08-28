import { IsEmail, IsNotEmpty, IsUrl } from 'class-validator';

export class UpdateUserDto {
  readonly username: string;

  @IsEmail()
  readonly email: string;

  readonly password: string;

  readonly bio: string;

  @IsUrl()
  readonly image: string;
}
