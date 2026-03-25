import { Injectable } from '@nestjs/common';
import { ApiResponse } from './interfaces/response.interface';

@Injectable()
export class AppService {
  getHello(): string {
    return { data: [{ id: 1, name: 'John Doe' }], message: 'Users fetched' };;
  }
}
