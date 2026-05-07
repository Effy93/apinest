import { PartialType } from '@nestjs/swagger';
import { CreateAdDto } from './create-ad.dto';

export class UpdateCatDto extends PartialType(CreateAdDto) {}
