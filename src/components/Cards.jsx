import React from "react";

export function Card({ Children }) {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="px-4 py-5 sm:p-6">{Children}</div>
    </div>
  );
}
