// import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

// @Entity()
// export class Image {

//     @PrimaryGeneratedColumn()
//     id;

//     @Column({ type: "varchar", length: 50, nullable: true })
//     name;

//     @Column({ type: "varchar", length: 500, nullable: true })
//     description;

//     @Column({ type: "varchar", length: 500, nullable: false })
//     imageUrl;

//     @CreateDateColumn({ type: "timestamp", nullable: true, select: false })
//     createdAt;

//     @UpdateDateColumn({ type: "timestamp", nullable: true, select: false })
//     updatedAt;
// }


const EntitySchema = require("typeorm").EntitySchema; // import {EntitySchema} from "typeorm";
const ImageModel = require("../models/ImageModel").Category; // import {Category} from "../model/Category";

module.exports = new EntitySchema({
    name: "Image",
    target: ImageModel,
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        name: {
            type: "varchar"
        }
    }
});