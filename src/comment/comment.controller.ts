import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {CommentService} from "./comment.service";

@Controller('comment')
export class CommentController {
    constructor(private _commentService: CommentService) {

    }

    @Get('getAllComment')
    getAllComment() {
        return this._commentService.getAllComments();
    }

    @Get('getComment/:id')
    getComment(@Param('id') id: number) {
        return this._commentService.getComment(id);
    }

    @Post('createComment')
    createComment(@Body() content: any) {
        return this._commentService.addComment(content);
    }

    @Put('updateComment/:id')
    updateComment(@Param('id') id: number, @Body() user: any) {
        return this._commentService.updateComment(id, user);
    }

    @Delete('deleteComment/:id')
    deleteComment(@Param('id') id: number) {
        return this._commentService.deleteComment(id);
    }
}
