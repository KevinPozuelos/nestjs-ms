import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductosService } from './productos.service';

import { UpdateProductoDto } from './dto/update-producto.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateProductoDto } from './dto/create-producto.dto';

@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @MessagePattern({ cmd: 'create_producto' })
  create(@Payload() createProductoDto: CreateProductoDto) {
    return this.productosService.create(createProductoDto);
  }

  @MessagePattern({ cmd: 'find_all_productos' })
  findAll() {
    return this.productosService.findAll();
  }

}
