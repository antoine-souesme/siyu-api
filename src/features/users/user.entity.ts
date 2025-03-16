import { BaseEntity } from "@/utils/base.entity";
import { Column, Entity } from "typeorm";

@Entity()
export class User extends BaseEntity {
    @Column()
    email: string;

    @Column()
    displayName: string;
}
