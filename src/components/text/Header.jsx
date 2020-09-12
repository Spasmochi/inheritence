import React from 'react';

export function Header({ children }) {
    return (
        <h1 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
            {children}
        </h1>
    );
}
