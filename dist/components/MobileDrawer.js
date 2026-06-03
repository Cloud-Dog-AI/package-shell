import { jsx as _jsx } from "react/jsx-runtime";
import { Sheet } from "@cloud-dog/ui";
import { useShell } from "../context/useShell.js";
import { LeftNav } from "./LeftNav.js";
export function MobileDrawer(props) {
    const shell = useShell();
    return (_jsx("div", { className: "md:hidden", children: _jsx(Sheet, { open: shell.mobileDrawerOpen, onOpenChange: (o) => shell.setMobileDrawerOpen(o), side: "left", children: _jsx("div", { className: "h-full", children: _jsx(LeftNav, { items: props.items, mode: "drawer" }) }) }) }));
}
