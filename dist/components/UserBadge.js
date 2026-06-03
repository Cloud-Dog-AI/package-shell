import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useAuth } from "@cloud-dog/auth";
import { Avatar, Button, DropdownMenu, cn } from "@cloud-dog/ui";
export function UserBadge(props) {
    let auth;
    try {
        auth = useAuth();
    }
    catch {
        auth = undefined;
    }
    const displayName = props.config?.displayName ?? auth?.user?.displayName ?? "";
    const email = props.config?.email ?? auth?.user?.email ?? "";
    const avatarUrl = props.config?.avatarUrl;
    const hasSession = Boolean(auth?.isAuthenticated && auth.user);
    const canLogout = Boolean(props.config?.onLogout ?? auth);
    const items = [
        props.config?.onAbout
            ? { id: "about", label: "About", onSelect: props.config.onAbout }
            : null,
        props.config?.onProfile
            ? { id: "profile", label: "Profile", onSelect: props.config.onProfile }
            : null,
        props.config?.onSettings
            ? { id: "settings", label: "Settings", onSelect: props.config.onSettings }
            : null,
        canLogout
            ? {
                id: "logout",
                label: "Sign out",
                onSelect: () => {
                    if (props.config?.onLogout) {
                        props.config.onLogout();
                        return;
                    }
                    void auth?.logout();
                },
            }
            : null,
    ].filter((item) => item !== null);
    if (!displayName && items.length === 0 && !hasSession) {
        return null;
    }
    const fallback = (displayName || "U").slice(0, 1).toUpperCase();
    return (_jsx(DropdownMenu, { trigger: _jsxs(Button, { variant: "ghost", "aria-label": "User menu", className: cn("h-auto min-w-0 gap-2 px-2 py-1", props.className), children: [_jsx(Avatar, { alt: displayName || "User", src: avatarUrl, fallback: fallback }), _jsx("span", { className: "hidden max-w-40 truncate text-sm font-medium sm:inline", children: displayName || "Signed in" })] }), items: items, header: _jsxs("div", { className: "px-3 py-2", children: [_jsx("div", { className: "text-sm font-semibold", children: displayName || "Signed in" }), email ? _jsx("div", { className: "text-xs text-muted-foreground", children: email }) : null] }) }));
}
