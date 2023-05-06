import { useState } from "react";

export function Button({children, handleClick}) {
    return (
      <button
        onClick={handleClick}
      >
        {children}
      </button>
    );
  }