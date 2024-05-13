import {
    Controller,
    Get,
    Query
  } from '@nestjs/common';
  import { UserService } from './user.service';  
  /**
   * whatever the string pass in controller decorator it will be appended to
   * API URL. to call any API from this controller you need to add prefix which is
   * passed in controller decorator.
   * in our case our base URL is http://localhost:3000/user
   */
  @Controller('user')
  export class UserController {
    constructor(private readonly userService: UserService) {}
  
    /**
     * we have used get decorator to get all the user's list
     * so the API URL will be
     * GET http://localhost:3000/user
     */
    @Get()
    findAll(@Query('page') page: number = 1, @Query('limit') limit: number = 10) {
      if(!!page) {
        page = parseInt(page+'');
      }
      page = !!page ? (page-1) : 0;
      return this.userService.findAllUser({
        skip: page,
        take: limit
      });
    }
  }