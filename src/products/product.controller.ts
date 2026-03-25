import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';
import { ApiResponse } from 'src/interfaces/response.interface';
import { productResponse } from './dto/product.dto';

@Controller()
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  findAll(): ApiResponse<productResponse> {
    return this.productService.findAll();
  }
}

// P Ja Nam Ja Taek