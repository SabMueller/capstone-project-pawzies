import Animal from '../models/animal.model.js';

function getAnimals(req, res) {
  Animal.find().then((animals) => res.json(animals));
}

function getAnimalId(req, res) {
  const { animalId } = req.params;
  Animal.findById(animalId)
    .then((animal) => {
      res.json(animal);
    })
    .catch((error) => res.status(404).json('An unintended error occured'));
}

function postAnimal(req, res) {
  const animal = new Animal({
    name: req.body.name,
    type: req.body.type,
    age: req.body.age,
    gender: req.body.gender,
    breed: req.body.breed,
    characteristics: req.body.characteristics,
    description: req.body.description,
    picture: req.body.picture,
  });
  animal
    .save()
    .then((animalSaved) => res.json(animalSaved))
    .catch((error) => res.json(error.message));
}

function updateAnimal(req, res) {
  const { animalId } = req.params;
  const updatedAnimal = req.body;

  Animal.findByIdAndUpdate({ _id: animalId }, updatedAnimal, (error, doc) => {
    if (error) {
      res.json({ message: error });
      return;
    }
    res.json(doc);
  });
}

function deleteAnimal(req, res) {
  const { animalId } = req.params;
  Animal.findByIdAndRemove({ _id: animalId }, (error, doc) =>
    res.json({
      success: true,
      message: `The animal ${doc.name} has been deleted.`,
      data: doc,
    })
  );
}

export { getAnimals, getAnimalId, postAnimal, updateAnimal, deleteAnimal };
