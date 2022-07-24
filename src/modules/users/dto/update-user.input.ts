import { RegisterUserInput } from './create-user.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateUserInput extends PartialType(RegisterUserInput) {
  id: string;
}
