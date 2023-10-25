import { useRouter } from "next/router";
import React from "react";

const StoreDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <h1>StoreDetailPage: {id}</h1>
    </>
  );
};

export default StoreDetailPage;
