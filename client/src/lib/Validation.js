const validateName = (name) => name.length >= 2;
const validateEmail = (email) =>
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
    email
  );

const validateCity = (city) => city.match(/^[A-Za-z]+$/);

const validatePhone = (phone) => phone.match(/^[0-9]+$/);
const validateZip = (zip) => zip.match(/^[\w\-\s]+$/);

const validateStreet = (street) => street.match(/^[\w\-\s]+$/);

const validateAge = (age) => parseFloat(age) <= 25;
const validateBreed = (breed) => breed.match(/^[A-Za-z]+$/);

export function validateOrganization(organization) {
  return (
    validateName(organization.name) &&
    validateEmail(organization.email) &&
    validateCity(organization.city) &&
    validatePhone(organization.phone) &&
    validateZip(organization.zip) &&
    validateStreet(organization.street)
  );
}
export function validateAnimal(animal) {
  return (
    validateAge(animal.age) &&
    validateBreed(animal.breed) &&
    validateName(animal.name)
  );
}

export function validateAnimalTrait(trait) {
  if (trait.length >= 2) {
    return true;
  } else return false;
}
