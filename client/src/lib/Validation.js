const validateName = (name) => name.length >= 2;
const validateEmail = (email) =>
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
    email
  );

const validateCity = (city) => /^[A-Za-z]+$/.test(city);

const validatePhone = (phone) => /^[0-9]+$/.test(phone);
const validateZip = (zip) => /^[0-9]+$/.test(zip);
const validateStreet = (street) =>
  /^([A-Za-zäöüßsd.,-]+?)\s+([A-Za-zäöüßsd.,-]*?)\s*(\w+)?$/.test(street);

const validateAge = (age) => parseFloat(age) <= 25;
const validateBreed = (breed) => /^[A-Za-z]+$/.test(breed);

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
