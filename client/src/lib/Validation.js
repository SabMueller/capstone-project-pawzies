const validateName = (name) => name.length >= 2;
const validateEmail = (email) =>
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
    email
  );

const validateAge = (age) => parseFloat(age) <= 25;

export function validateOrganization(organization) {
  return validateName(organization.name) && validateEmail(organization.email);
}

export function validateAnimalTrait(trait) {
  if (trait.length >= 2) {
    return true;
  } else return false;
}

export function validateAnimal(animal) {
  return validateAge(animal.age);
}
