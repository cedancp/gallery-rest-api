import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Image {

    @PrimaryGeneratedColumn()
    id;

    @Column({ type: "varchar", length: 50, nullable: true })
    name;

    @Column({ type: "varchar", length: 500, nullable: true })
    description;

    @CreateDateColumn({ type: "timestamp", nullable: true, select: false })
    createdAt;

    @UpdateDateColumn({ type: "timestamp", nullable: true, select: false })
    updatedA;
}