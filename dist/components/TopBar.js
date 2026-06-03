import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { brand } from "@cloud-dog/tokens";
import { Button } from "@cloud-dog/ui";
import { Breadcrumbs } from "./Breadcrumbs.js";
import { ThemeToggle } from "./ThemeToggle.js";
import { UserBadge } from "./UserBadge.js";
import { useShell } from "../context/useShell.js";
export function TopBar(props) {
    const shell = useShell();
    const title = props.appName ? `${brand.name} : ${props.appName}` : brand.name;
    const homePath = props.homePath ?? "/";
    return (_jsxs("div", { className: "h-14 border-b bg-background text-foreground flex items-center gap-3 px-3", children: [_jsx(Button, { variant: "ghost", size: "icon", "aria-label": "Open navigation", className: "md:hidden", onClick: () => shell.openMobileDrawer(), children: _jsx("span", { "aria-hidden": "true", children: "\u2261" }) }), _jsxs("a", { href: homePath, className: "flex items-center gap-2 min-w-0 rounded-md focus:outline-none focus:ring-2 focus:ring-ring", "aria-label": "Go to home", onClick: (event) => {
                    if (!props.onHomeNavigate)
                        return;
                    event.preventDefault();
                    props.onHomeNavigate(homePath);
                }, children: [_jsx("img", { src: brand.logoPath, alt: "", className: "h-6 w-6 shrink-0" }), _jsx("div", { className: "font-semibold truncate", children: title })] }), _jsx("div", { className: "flex-1 px-2", children: props.breadcrumbs ? _jsx(Breadcrumbs, { items: props.breadcrumbs }) : null }), _jsxs("div", { className: "flex items-center gap-1", children: [_jsx(ThemeToggle, {}), _jsx(UserBadge, { config: props.userMenu })] })] }));
}
