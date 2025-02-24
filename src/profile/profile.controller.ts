import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  BadRequestException,
  Param,
  Res,
  Get,
  Search,
  Query,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ProfileService } from './profile.service';
import { UserDecorator } from 'src/user.decorator';
import { User } from '@prisma/client';
import { Response } from 'express';
import { ApiConsumes } from '@nestjs/swagger';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}



  @Post('upload')
  @ApiConsumes('multipart/form-data') 
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @UserDecorator() user: User,
  ) {
    if (!file) {
      throw new BadRequestException('File tidak ditemukan');
    }
    return this.profileService.uploadFile(file, user.id);
  }

  @Get('search')
  async getName(@Query('search') search: String) {
    return search
  }
  @Get('/:id')
  async getProfile(@Param('id') id: number, @Res() res: Response) {
    const filename = await this.profileService.sendMyFotoProfile(id);
    return res.sendFile(`../../uploads` + filename);
  }
  
  
}
