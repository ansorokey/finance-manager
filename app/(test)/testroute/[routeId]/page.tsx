"use client";

import { validateHeaderName } from "http";
import { useEffect, useState } from "react";

export default function Test2() {
    const [val, setVal] = useState('update me');

    useEffect(() => {
        async function printMessage() {
            const response = await fetch('http://localhost:3000/routes');
            const { message } = await response.json();
            setVal(message);
        }

        printMessage();
    }, []);

    return (
        <h1> Hello from {val}!</h1>
    );
}
