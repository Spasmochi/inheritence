import React from "react";



export function Layout({ children }) {
  return (
    <div className="h-screen flex overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center">
        {children}
      </div>
    </div>
  );
}
