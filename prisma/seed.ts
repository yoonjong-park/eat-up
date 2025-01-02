import { PrismaClient } from "@prisma/client";
import * as data from "../src/data/store_data.json";

const prisma = new PrismaClient();

async function seedData() {
  // seed 코드 작성

  data?.["DATA"]?.map(async (store: any) => {
    const storeData = {
      phone: store?.tel_no,
      address: store?.rdn_code_nm,
      lat: store?.y_dnts,
      lng: store?.x_cnts,
      name: store?.upso_nm,
      category: store?.bizcnd_code_nm,
      storeType: store?.cob_code_nm,
      foodCertifyName: store?.crtfc_gbn_nm,
    };
    const result = await prisma.store.create({
      data: storeData,
    });
    console.log("result=", result);
  });
}

async function main() {
  await seedData();
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
