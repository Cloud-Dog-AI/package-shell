import type * as React from "react";
export type NavItem = Readonly<{
    label: string;
    path: string;
    icon: React.ReactNode;
    badge?: string | number;
    children?: NavItem[];
    requiredPermission?: string;
    onSelect?: () => void;
}>;
export type BreadcrumbItem = Readonly<{
    label: string;
    href?: string;
}>;
export type UserMenuConfig = Readonly<{
    displayName?: string;
    email?: string;
    avatarUrl?: string;
    onAbout?: () => void;
    onProfile?: () => void;
    onSettings?: () => void;
    onLogout?: () => void;
}>;
//# sourceMappingURL=nav.d.ts.map