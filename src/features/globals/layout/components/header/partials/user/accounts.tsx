"use client";

import React from 'react';
import AccountEnabled from './Account';
import AccountDisable from './account-disable';

const Accounts = () => {



  const allTypes = ["google", "gitlab", "github", "credentials"];

  // Se data vier como [{ provider: "google" }, { provider: "github" }]
  const connectedProviders =  allTypes.map((acc) => acc) ?? [];

  return (
    <div>
      <h2>Suas contas</h2>
      <div className="space-y-4 mt-2">
        {allTypes.map((provider) => {
          const isConnected = connectedProviders.includes(provider);
          return (
            <div key={provider}>
              {isConnected ? (
                <AccountEnabled provider={provider as  "google" | "gitlab" | "github" | "credentials"} />
              ) : (
                <AccountDisable provider={provider as  "google" | "gitlab" | "github" | "credentials"} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Accounts;
