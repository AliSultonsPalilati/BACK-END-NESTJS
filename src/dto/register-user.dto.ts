import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, Matches,Length } from "class-validator";

export class registerUserDTO {
    @ApiProperty({
        description: 'username',
        type: String,
        example: 'Alisultn',
        required: true,
    })
    @IsString()
    @IsNotEmpty()
    @Matches(/^\S*$/i)
    @Length(1, 50)
    username: string;
    
    @ApiProperty({
        description: 'password',
        type: String,
        example: 'password123',
        required: true,
    })
    @IsString()
    @IsNotEmpty()
    @Matches(/^\S*$/i)
    @Length(1, 30)
    password: string;

}