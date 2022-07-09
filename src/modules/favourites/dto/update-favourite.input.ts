import { CreateFavouritesInput } from './create-favourite.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateFavouritesInput extends PartialType(CreateFavouritesInput) {
  id: string;
}
