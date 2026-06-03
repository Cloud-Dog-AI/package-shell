import * as React from "react";
export type ThemeMode = "light" | "dark";
export type ShellState = Readonly<{
    navCollapsed: boolean;
    setNavCollapsed: (collapsed: boolean) => void;
    mobileDrawerOpen: boolean;
    setMobileDrawerOpen: (open: boolean) => void;
    rightDrawerOpen: boolean;
    setRightDrawerOpen: (open: boolean) => void;
    theme: ThemeMode;
    setTheme: (theme: ThemeMode) => void;
}>;
export declare const ShellContext: React.Context<Readonly<{
    navCollapsed: boolean;
    setNavCollapsed: (collapsed: boolean) => void;
    mobileDrawerOpen: boolean;
    setMobileDrawerOpen: (open: boolean) => void;
    rightDrawerOpen: boolean;
    setRightDrawerOpen: (open: boolean) => void;
    theme: ThemeMode;
    setTheme: (theme: ThemeMode) => void;
}> | null>;
export declare function ShellProvider(props: {
    children: React.ReactNode;
}): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=ShellContext.d.ts.map