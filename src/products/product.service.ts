import { Injectable } from '@nestjs/common';
import { productResponse } from './dto/product.dto'
import * as fs from 'fs'

@Injectable()
export class ProductService {
  findAll():productResponse {
    const data = JSON.parse(fs.readFileSync("data/products.json", 'utf8'));
    
    return data
  }
}
