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
        },
        description: {
            type: "varchar"
        },
        imageUrl: {
            type: "varchar"
        },
        createdAt: {
            type: "timestamp",
            createDate: true
        },
        updatedAt: {
            type: "timestamp",
            updateDate: true
        },
    },
});