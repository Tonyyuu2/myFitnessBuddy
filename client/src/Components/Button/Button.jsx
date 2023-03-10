import React from "react";

function Button({ children, login, handleSubmit }) {
  return (
    <button
      className={`${
        login ? "bg-blue-500" : ""
      } uppercase text-center rounded-md font-bold text-white p-3 text-lg hover:bg-blue-600 w-full`}
      onClick={handleSubmit}
    >
      {children}
    </button>
  );
}

export default Button;
