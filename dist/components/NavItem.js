import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@cloud-dog/ui";
import { useShell } from "../context/useShell.js";
export function NavItem(props) {
    const shell = useShell();
    const loc = useLocation();
    const active = loc.pathname === props.item.path;
    return (_jsxs(Link, { to: props.item.path, className: cn("flex items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground", active ? "bg-accent text-accent-foreground font-medium" : "text-foreground"), title: shell.navCollapsed ? props.item.label : undefined, onClick: (event) => {
            if (props.item.onSelect) {
                event.preventDefault();
                props.item.onSelect();
            }
            shell.closeMobileDrawer();
        }, children: [_jsx("span", { "aria-hidden": "true", className: "h-5 w-5 grid place-items-center shrink-0", children: props.item.icon }), !shell.navCollapsed ? _jsx("span", { className: "truncate", children: props.item.label }) : null, !shell.navCollapsed && props.item.badge !== undefined ? (_jsx("span", { className: "ml-auto text-xs rounded-full bg-muted px-2 py-0.5", children: props.item.badge })) : null] }));
}
