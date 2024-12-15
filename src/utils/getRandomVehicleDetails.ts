export function getRandomVehicleMake(): string {
  const vehicleMakes = [
    "BMW",
    "Toyota",
    "Honda",
    "Ford",
    "Chevrolet",
    "Nissan",
    "Mercedes-Benz",
    "Volkswagen",
    "Hyundai",
    "Kia",
    "Audi",
    "Lexus",
    "Mazda",
    "Subaru",
    "Porsche",
    "Jaguar",
    "Tesla",
    "Volvo",
    "Ferrari",
    "Lamborghini",
  ];

  const randomIndex = Math.floor(Math.random() * vehicleMakes.length);
  return vehicleMakes[randomIndex];
}

export function getRandomVehicleModel(): string {
  const vehicleModels = [
    "Corolla",
    "Civic",
    "Model S",
    "Mustang",
    "Accord",
    "Camry",
    "F-150",
    "Silverado",
    "Wrangler",
    "Cherokee",
    "Impreza",
    "Outback",
    "3 Series",
    "A4",
    "CX-5",
    "Highlander",
    "Tucson",
    "RAV4",
    "X5",
    "Q5",
  ];

  const randomIndex = Math.floor(Math.random() * vehicleModels.length);
  return vehicleModels[randomIndex];
}

export function getRandomManufactureYear(): number {
  const startYear = 1990;
  const currentYear = new Date().getFullYear();
  const randomYear =
    Math.floor(Math.random() * (currentYear - startYear + 1)) + startYear;
  return randomYear;
}
