import { Injectable } from '@nestjs/common';

@Injectable()
export class AdditionalService {
  public getSomeAdditionalInfo(): number {
    return 123;
  }
}
