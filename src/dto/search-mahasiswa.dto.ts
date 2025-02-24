import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

export class SearchMahasiswaDTO {

  @ApiProperty({
    description: "NIM Mahasiswa : ",
    type: String,
    example: "105841102222",
    required: false,
  })
  @IsOptional()
  @IsString()
  nim?: string;
}