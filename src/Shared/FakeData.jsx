import { faker } from "@faker-js/faker";

function createRandomeCarList() {
  return {
    name: faker.vehicle.vehicle(),
    fuelType: faker.vehicle.fuel(),
    model: faker.vehicle.model(),
    type: faker.vehicle.type(),
    image:
      "https://edgecast-img.yahoo.net/mysterio/api/C9B759E3F3853DAFC9364FB7C9F96D386AB2A800CA5C215212332767D638DB54/autoblog/resizefill_w768_h432;quality_85;format_webp;cc_31536000;/https://s.aolcdn.com/commerce/autodata/images/USC40MBC682A021001.jpg",
    miles: 1000,
    gearType: "Automatic",
    price: faker.finance.amount({ min: 4000, max: 20000 }),
  };
}

const carList = faker.helpers.multiple(createRandomeCarList, { count: 10 });

export default { carList };
