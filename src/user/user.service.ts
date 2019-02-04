import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {UserEntity} from "./user.entity";
import {Repository} from "typeorm";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly _userRepository: Repository<UserEntity>,
    ) {
    }

    async getAllUsers() {
        return await this._userRepository.find();
    }

    async getUser(id: number) {
        console.log(id);
        return this._userRepository.findOne({where: {id}});
    }

    async createUser(user: any) {
        const userData = await this._userRepository.create(user);
        await this._userRepository.save(userData);
        return userData;
    }

    async updateUser(id: number, user: any) {
        const userData = await this._userRepository.findOne({where: {id}});
        if (!userData) {
            // TODO: implement error
        }

        await this._userRepository.update(id, user);
        return await this._userRepository.findOne({where: {id}});
    }

    async deleteUser(id: number) {
        const user= await this._userRepository.findOne({where: {id}});
        if(!user) {
            // TODO: implement error
        }
        await this._userRepository.delete({id});
        return {delete: "success"}
    }
}
