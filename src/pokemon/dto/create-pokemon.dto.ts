import { IsInt, IsPositive, IsString, Min, MinLength } from "class-validator";

export class CreatePokemonDto {

  // ENTERO / POSITIVO / VAL_MINIMO=1
  @IsInt()
  @IsPositive()
  @Min(1)
  no: number;
  // STRING / MIN_LENGTH=1
  @IsString()
  @MinLength(1)
  name: string;

}
