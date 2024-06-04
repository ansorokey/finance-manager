"use client";
// React hooks can only be used within files marked as useclinet
// Files are server components by default.
// A server component can interact directly with the server.
// still is rendered server side

import { usePathname } from "next/navigation";
import { NavButton } from "./navbutton";

const routes = [
    {
        href: '/',
        label: 'Overview'
    },
    {
        href: '/transactions',
        label: 'Transactions'
    },
    {
        href: '/accounts',
        label: 'Accounts'
    },
    {
        href: '/categories',
        label: 'Categories'
    },
    {
        href: '/settings',
        label: 'Settings'
    }
];

export const Navigation = () => {
    const pathname = usePathname();

    return (
        <nav className="hidden lg:flex items-center gap-x-2 overflow-x-auto">
            { routes.map((route) => (
                <NavButton
                    key={route.href}
                    href={route.href}
                    label={route.label}
                    isActive={pathname === route.href}
                />
            ))}
        </nav>
    );
};
