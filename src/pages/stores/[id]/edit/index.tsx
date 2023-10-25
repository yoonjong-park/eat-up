import { useRouter } from "next/router";
import React from "react";

const StoreEditPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <h1>StoreEdit: {id}</h1>
    </>
  );
};

export default StoreEditPage;
