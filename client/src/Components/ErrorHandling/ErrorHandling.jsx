import React from "react";

function ErrorHandling({ firstName, lastName, email, password, retypePwd,  }) {
  return (
    <p className="flex justify-center font-bold text-red-600">
      {firstName
        ? "❌ You don't have a name..? ❌"
        : lastName
        ? "❌ Surnames make the world go round you know. ❌"
        : email
        ? "❌ How else would people stalk you? ❌"
        : password
        ? "❌ Are you sure that date is correct?❌ "
        : retypePwd
        ? "❌ I know it's hard... But I need a better picture ❌"
        : "❌ Error!! Error!! Something is amiss ❌"}
    </p>
  );
}

export default ErrorHandling;
