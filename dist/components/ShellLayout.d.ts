import * as React from "react";
import type { BreadcrumbItem, NavItem, UserMenuConfig } from "../types/nav.js";
import type { ShellPreset } from "../presets/types.js";
export interface ShellLayoutProps {
    appName?: string;
    navItems: NavItem[];
    userMenu?: UserMenuConfig;
    breadcrumbs?: BreadcrumbItem[];
    children: React.ReactNode;
    preset?: ShellPreset;
    showNav?: boolean;
    homePath?: string;
    onHomeNavigate?: (path: string) => void;
}
export declare function ShellLayout(props: ShellLayoutProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=ShellLayout.d.ts.map