import type { NavItem as NavItemType } from "../types/nav.js";
export type LeftNavMode = "rail" | "drawer";
export type LeftNavWidth = Readonly<{
    expanded: string;
    collapsed: string;
}>;
export declare function LeftNav(props: {
    items: NavItemType[];
    mode?: LeftNavMode;
    width?: LeftNavWidth;
}): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=LeftNav.d.ts.map