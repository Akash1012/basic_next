import React from "react";
import Link from "next/link";

const ClientsPage = () => {
  const clients = [
    { id: "100", name: "Akash" },
    { id: "200", name: "Gupta" },
  ];
  return (
    <div>
      <h1>The ClientsPage Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: "/clients/[id]",
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientsPage;
