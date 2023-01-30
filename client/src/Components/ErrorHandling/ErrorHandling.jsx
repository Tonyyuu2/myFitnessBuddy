import React from "react";

function ErrorHandling({ firstName, lastName, email, password, retypePwd }) {
  return (
    <p className="flex justify-center font-bold text-red-600">
      {firstName
        ? "❌ You don't have a name..? ❌"
        : lastName
        ? "❌ Surnames make the world go round you know. ❌"
        : email
        ? "❌ I swear we don't send spam... ❌"
        : password
        ? "❌ Big brother is watching.❌ "
        : retypePwd
        ? "❌ Either you're trolling or it's not a match ❌"
        : "❌ Error!! Error!! Something is amiss ❌"}
    </p>
  );
}

export default ErrorHandling;
