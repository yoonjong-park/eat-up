import { PrismaClient } from "@prisma/client";
import * as data from "../src/data/store_data.json";

const prisma = new PrismaClient();

async function seedData() {
  // seed 코드 작성

  const lognData = data?.["DATA"]?.map((store: any) => {
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
    return storeData;
  });

  await prisma.store.createMany({
    data: lognData as any,
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
