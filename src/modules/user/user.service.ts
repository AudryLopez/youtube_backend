import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(private readonly _userRepository: Repository<User>);
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  async findUsers() {
    const result = await this._userRepository.find();
    if (!result) throw new BadRequestException(`the is not users`);
    return result;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
