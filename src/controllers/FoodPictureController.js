const knex = require("../database/knex");
const AppError = require("../utils/AppError");
const DiskStorage = require("../providers/DiskStorage");
const multer = require("multer");


class FoodPictureController {
  async update(request, response) {
    const  id  = request.params.id;
    console.log(request);
    const nameFile = request.file?.filename 
    const pictureFilename = nameFile
    
    const diskStorage = new DiskStorage();

    const food = await knex("foods").where({ id }).first();

    if(!food) {
      throw new AppError("O prato que você deseja editar não existe.", 401);
    }

    if(food.picture) {
      await diskStorage.deleteFile(food.picture);
    }

    const filename = await diskStorage.saveFile(pictureFilename);
    food.picture = filename;

    await knex("foods").update(food).where({ id });

    return response.json(food);
  }
}

module.exports = FoodPictureController;