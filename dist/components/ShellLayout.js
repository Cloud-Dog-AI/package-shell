import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ShellProvider } from "../context/ShellContext.js";
import { SkipLink } from "./SkipLink.js";
import { TopBar } from "./TopBar.js";
import { LeftNav } from "./LeftNav.js";
import { MobileDrawer } from "./MobileDrawer.js";
export function ShellLayout(props) {
    const showNav = props.showNav ?? true;
    return (_jsxs(ShellProvider, { children: [_jsx(SkipLink, {}), _jsx("header", { children: _jsx(TopBar, { appName: props.appName, userMenu: props.userMenu, breadcrumbs: props.breadcrumbs, homePath: props.homePath, onHomeNavigate: props.onHomeNavigate }) }), showNav ? (_jsxs("div", { className: "grid grid-cols-[auto_1fr] md:grid-cols-[auto_1fr]", children: [_jsx("nav", { "aria-label": "Main navigation", className: "hidden md:block", children: _jsx(LeftNav, { items: props.navItems, width: props.preset?.leftNavWidth }) }), _jsx(MobileDrawer, { items: props.navItems }), _jsx("main", { id: "main-content", className: "min-h-[calc(100vh-3.5rem)] bg-muted/10", children: _jsx("div", { className: props.preset?.contentClassName ?? "p-6", children: props.children }) })] })) : (_jsx("main", { id: "main-content", className: "min-h-[calc(100vh-3.5rem)] bg-muted/10", children: _jsx("div", { className: props.preset?.contentClassName ?? "p-6", children: props.children }) }))] }));
}
