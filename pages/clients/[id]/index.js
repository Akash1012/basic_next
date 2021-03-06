import React from "react";
import { useRouter } from "next/router";

const ClientProjectPage = () => {
  const router = useRouter();
  console.log(router.query);
  const loadProjectHandler = () => {
    // load data ...
    // router.push("/clients/max/projectA");
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: "max", clientprojectid: "projectA" },
    });
  };
  return (
    <div>
      <h1>The ClientProjectPage Page</h1>
      <button onClick={loadProjectHandler}>Load Project</button>
    </div>
  );
};

export default ClientProjectPage;
