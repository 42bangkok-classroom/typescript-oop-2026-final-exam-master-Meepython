import { IsNumber, isNumber, IsString } from "class-validator";

export class productResponse {
    @IsNumber()
    id: number;

    @IsString()
    name: string;

    @IsNumber()
    price: number;

    @IsNumber()
    stock: number;

    @IsString()
    description: string;
}