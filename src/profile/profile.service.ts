import { Injectable, NotFoundException } from '@nestjs/common';
import { existsSync, mkdirSync, rmSync, writeFileSync } from 'fs';
import { extname } from 'path';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ProfileService {
  constructor(private readonly prisma: PrismaService) {}

  async uploadFile(file: Express.Multer.File, user_id: number) {
    //untuk mengvalidasi data user
    const user = await this.prisma.user.findFirst({ where: { id: user_id } });
    if (user == null) {
      throw new NotFoundException('User tidak di temukan');
    }

    if (user.foto_profile != null) {
      const filePath = `../../uploads${user.foto_profile}`;
      if (existsSync(filePath)) {
        rmSync(filePath);
      }
    }
    const uploadPath = `../../uploads`;
    if (!existsSync(uploadPath)) {
      mkdirSync(uploadPath);
    }
    const fileExt = extname(file.originalname);
    const baseFilename = user.username;
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const fileName = `${baseFilename}-${uniqueSuffix}${fileExt}`;
    const filePath = `${uploadPath}/${fileName}`;

    writeFileSync(filePath, file.buffer);
    await this.prisma.user.update({
      where: { id: user_id },
      data: { foto_profile: `${fileName}` },
    });
    return {fileName,path:filePath};

  }
  async sendMyFotoProfile(user_id : number) {
    const user = await this.prisma.user.findFirst({
        where : {
            id : user_id
        }
    })

    if(user == null) throw new NotFoundException("Tidak Menemukan User")
    return user.foto_profile
  }
}
