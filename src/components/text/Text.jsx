import React from 'react';

export function Text({ children }) {
    return (
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            {children}
        </p>
    );
}


