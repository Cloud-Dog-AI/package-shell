import type * as React from 'react';
export type NavItem = {
    id: string;
    label: string;
    href: string;
    icon?: React.ReactNode;
    requiresRole?: string;
};
export type NavSection = {
    id: string;
    label: string;
    items: NavItem[];
};
export type AppManifest = {
    appId: string;
    appName: string;
    basePath: string;
    sections: NavSection[];
};
export type ShellAuth = {
    user?: {
        name?: string;
        email?: string;
        roles?: string[];
    };
    signIn: () => void;
    signOut: () => void;
};
export type ShellBrand = {
    name: string;
    logoText: string;
    logoUrl?: string;
};
export type ShellOptions = {
    brand: ShellBrand;
    envLabel: string;
    auth: ShellAuth;
};
//# sourceMappingURL=types.d.ts.map