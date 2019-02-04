import {Injectable} from '@nestjs/common';
import {CommentEntity} from "./comment.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";

@Injectable()
export class CommentService {
    constructor(@InjectRepository(CommentEntity)
                private readonly _commentRepository: Repository<CommentEntity>) {

    }

    async getAllComments() {
        return await this._commentRepository.find();
    }

    async getComment(id: number) {
        return await this._commentRepository.findOne({where: {id}});
    }

    async addComment(content: any) {
        const comment = await this._commentRepository.create(content);
        await this._commentRepository.save(comment);
        return comment;
    }

    async updateComment(id: number, content: any) {
        const comment= this._commentRepository.findOne({where: {id}});
        if(!comment) {
            // Todo: Implement error
        }

        await this._commentRepository.update( id, content);
        return await this._commentRepository.findOne({where: {id}});
    }

    async deleteComment(id: number) {
        const comment= await this._commentRepository.findOne({where: {id}});
        if(!comment) {
            // TODO: implement error
        }
        await this._commentRepository.delete({id});
        return {delete: "success"}
    }
}
