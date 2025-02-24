import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString, Length } from 'class-validator';
import { Jenis_kelamin } from '@prisma/client';

export class updateMahasiswaDTO {
  @ApiProperty({
    description: 'Nama Mahasiswa',
    type: String,
    example: 'Alisultn',
    required: false,
  })
  @IsString()
  @IsOptional()
  @Length(1, 30)
  nama?: string;

  @ApiProperty({
    description: 'Kelas',
    type: String,
    example: '5A',
    required: false,
  })
  @IsString()
  @IsOptional()
  @Length(1, 30)
  kelas?: string;

  @ApiProperty({
    description: 'Jurusan',
    type: String,
    example: 'Informatika',
    required: false,
  })
  @IsString()
  @IsOptional()
  @Length(1, 30)
  jurusan?: string;

  @ApiProperty({
    description: 'Jenis Kelamin',
    enum: Jenis_kelamin,
    example: 'L',
    required: false,
  })
  @IsEnum(Jenis_kelamin)
  @IsOptional()
  jenis_kelamin?: Jenis_kelamin;

}