import { CarMake } from "../types/Cars";

export const carMakes: CarMake[] = [
  { name: "Alfa Romeo", logoUrl: "https://i.ibb.co/8bgcswx/alfa-romeo.png" },
  { name: "Audi", logoUrl: "https://i.ibb.co/hL7HGNn/audi.png" },
  { name: "BMW", logoUrl: "https://i.ibb.co/PQfxjHP/bmw.png" },
  { name: "Buick", logoUrl: "https://i.ibb.co/3zTcV16/buick.png" },
  { name: "Cadillac", logoUrl: "https://i.ibb.co/QJzBsBG/cadillac.png" },
  { name: "Chevrolet", logoUrl: "https://i.ibb.co/MMfCTBW/chevrolet.png" },
  { name: "Dodge", logoUrl: "https://i.ibb.co/XbLMrJ3/dodge.png" },
  { name: "Ferrari", logoUrl: "https://i.ibb.co/4JYjY1L/ferrari.png" },
  { name: "Fiat", logoUrl: "https://i.ibb.co/d7Sms54/fiat.png" },
  { name: "Ford", logoUrl: "https://i.ibb.co/Sm3Tm7r/ford.png" },
  { name: "GMC", logoUrl: "https://i.ibb.co/BGWTY2r/gmc.png" },
  { name: "Honda", logoUrl: "https://i.ibb.co/QX8xK56/honda.png" },
  { name: "Hyundai", logoUrl: "https://i.ibb.co/QHH62ZR/hyundai.png" },
  { name: "Infiniti", logoUrl: "https://i.ibb.co/qW9M0Lr/infiniti.png" },
  { name: "Jaguar", logoUrl: "https://i.ibb.co/fSkcxzc/jaguar.png" },
  { name: "Jeep", logoUrl: "https://i.ibb.co/W35YsLn/jeep.png" },
  { name: "Kia", logoUrl: "https://i.ibb.co/170QDMR/kia.png" },
  { name: "Lamborghini", logoUrl: "https://i.ibb.co/nm7q6HT/lamborghini.png" },
  { name: "Land Rover", logoUrl: "https://i.ibb.co/3M4H6Kz/land-rover.png" },
  { name: "Mazda", logoUrl: "https://i.ibb.co/gd6pQ2H/mazda.png" },
  {
    name: "Mercedes-Benz",
    logoUrl: "https://i.ibb.co/QnmJrGp/mercedes-benz.png",
  },
  { name: "Mini", logoUrl: "https://i.ibb.co/421SZDR/mini.png" },
  { name: "Mitsubishi", logoUrl: "https://i.ibb.co/421SZDR/nissan.png" },
  { name: "Nissan", logoUrl: "https://i.ibb.co/421SZDR/nissan.png" },
  { name: "Peugeot", logoUrl: "https://i.ibb.co/TqMPDdw/peugeot.png" },
  { name: "Porsche", logoUrl: "https://i.ibb.co/R074ZJM/porsche.png" },
  { name: "Renault", logoUrl: "https://i.ibb.co/NjWNq6N/renault.png" },
  { name: "Subaru", logoUrl: "https://i.ibb.co/mv7HS07/subaru.png" },
  { name: "Tesla", logoUrl: "https://i.ibb.co/F0dKzbf/tesla.png" },
  { name: "Toyota", logoUrl: "https://i.ibb.co/tDQSb96/toyota.png" },
  { name: "Volkswagen", logoUrl: "https://i.ibb.co/mTM0RTB/volkswagen.png" },
  { name: "Volvo", logoUrl: "https://i.ibb.co/ZmTMGss/volvo.png" },
];

export const carColors: string[] = [
  "Black",
  "White",
  "Silver",
  "Gray",
  "Red",
  "Blue",
  "Green",
  "Yellow",
  "Gold",
  "Orange",
  "Brown",
  "Beige",
  "Purple",
  "Pink",
  "Turquoise",
  "Maroon",
  "Navy",
  "Charcoal",
  "Ivory",
  "Teal",
  "Bronze",
];

export const fuelTypes: string[] = [
  "Petrol",
  "Diesel",
  "Electric",
  "Hybrid",
  "Hydrogen",
];

export const vahicleColorOptions = carColors.map((color) => ({
  value: color,
  label: color,
}));

export const vehicleMakeOptions = carMakes.map((make) => ({
  value: make.name,
  label: make.name,
}));

export const vehicleFuelTypeOptions = fuelTypes.map((fuelType) => ({
  value: fuelType,
  label: fuelType,
}));
