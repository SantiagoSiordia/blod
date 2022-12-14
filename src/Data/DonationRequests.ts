import { Data } from "@constants";
import { faker } from "@faker-js/faker";

const createDonationRequest = () => {
  const avatar = `https://firebasestorage.googleapis.com/v0/b/blod-5bfde.appspot.com/o/avatars%2F${faker.datatype.number(
    { min: 0, max: 3 }
  )}.png?alt=media&token=ac5db24f-c123-4f5b-bcc3-f55e081eccfc`;

  return {
    id: faker.datatype.uuid(),
    name: faker.name.fullName(),
    age: faker.datatype.number({ min: 18, max: 60 }),
    bloodType: Data.BloodTypes[faker.datatype.number({ min: 0, max: 7 })],
    location: faker.address.city(),
    hospital: faker.company.name(),
    contact: faker.phone.number(),
    litersDonated: faker.datatype.number({ min: 0, max: 10 }),
    avatar,
    description: faker.lorem.paragraph(),
  } as DonationRequest;
};

export const donationRequests: DonationRequest[] = Array.from(
  { length: 20 },
  createDonationRequest
);
