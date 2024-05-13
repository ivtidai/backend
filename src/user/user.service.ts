import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'shared-orm-library';
import { FindManyOptions, Repository } from 'typeorm';

@Injectable()
export class UserService {
  /**
   * Here, we have used data mapper approch for this tutorial that is why we
   * injecting repository here. Another approch can be Active records.
   */
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}


  /**
   * this function is used to get all the user's list
   * @returns promise of array of users
   */
  async findAllUser(options?: FindManyOptions<User>): Promise<{ users: User[], count: number}> {
    let [users, count] = await this.userRepository.findAndCount({ ...options, relations: ['settings'] });
    return {users, count};
  }

}