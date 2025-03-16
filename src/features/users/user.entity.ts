import { BaseEntity } from "@/utils/base.entity";
import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity } from "typeorm";

@Entity()
export class User extends BaseEntity {
    @ApiProperty()
    @Column()
    email: string;

    @ApiProperty()
    @Column()
    displayName: string;
}
