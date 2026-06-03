import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Avatar, Button, DropdownMenu } from "@cloud-dog/ui";
export function UserMenu(props) {
    const cfg = props.config;
    if (!cfg)
        return null;
    return (_jsx(DropdownMenu, { trigger: _jsx(Button, { variant: "ghost", size: "icon", "aria-label": "User menu", children: _jsx(Avatar, { alt: cfg.displayName ?? "User", src: cfg.avatarUrl, fallback: (cfg.displayName ?? "U").slice(0, 1) }) }), items: [
            cfg.onProfile
                ? { id: "profile", label: "Profile", onSelect: cfg.onProfile }
                : null,
            cfg.onSettings
                ? { id: "settings", label: "Settings", onSelect: cfg.onSettings }
                : null,
            cfg.onLogout ? { id: "logout", label: "Sign out", onSelect: cfg.onLogout } : null,
        ].filter(Boolean), header: _jsxs("div", { className: "px-3 py-2", children: [_jsx("div", { className: "text-sm font-semibold", children: cfg.displayName ?? "Signed in" }), cfg.email ? _jsx("div", { className: "text-xs text-muted-foreground", children: cfg.email }) : null] }) }));
}
