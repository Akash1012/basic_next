import React from "react";
import { useRouter } from "next/router";

const ClientProjectPage = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>The ClientProjectPage Page</h1>
    </div>
  );
};

export default ClientProjectPage;
