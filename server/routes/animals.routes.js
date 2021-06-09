import express from 'express';

import {
  getAnimals,
  getAnimalId,
  postAnimal,
  updateAnimal,
  deleteAnimal,
} from '../controller/animals.controller.js';

const router = express.Router();

router.get('/animals', getAnimals);
router.get('/animals/:animalId', getAnimalId);
router.post('/animals', postAnimal);
router.put('/animals/:animalId', updateAnimal);
router.delete('/animals/:animalId', deleteAnimal);

export default router;
