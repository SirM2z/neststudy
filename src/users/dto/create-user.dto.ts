import { IsString, IsNumberString } from 'class-validator';

export class CreateUserDto {
  @IsString() readonly name: string;

  @IsNumberString() readonly age: number;
}
