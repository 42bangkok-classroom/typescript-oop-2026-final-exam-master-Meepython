import { Controller, Get} from '@nestjs/common';
import { ProductService } from './product.service';
import { ApiResponse } from '@nestjs/swagger';

@Controller()
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  @ApiResponse({

  })
  async findAll() {
    return this.productService.findAll();
  } 
}
