import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { PRODUCT_SERVICE } from 'src/config/services';
import { CreateProductoDto } from './dto/create-producti.dto';


@Controller('product')
export class ProductController {
  constructor(
    @Inject(PRODUCT_SERVICE) private readonly productsClient: ClientProxy,
  ) { }

  @Post()
  createProduct(@Body() dto: CreateProductoDto) {
    return this.productsClient.send({ cmd: 'create_producto' }, dto);
  }

  @Get()
  getProducts() {
    return this.productsClient.send({ cmd: 'find_all_productos' }, {}); ;
  }

} 
