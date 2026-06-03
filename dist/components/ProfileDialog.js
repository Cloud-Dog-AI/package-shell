import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// Copyright 2026 Cloud-Dog, Viewdeck Engineering Limited
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// @cloud-dog/shell — ProfileDialog: signed-in user surface bound to useAuth().
//
// Per W28A #33 §3.B (Option b): a parallel dialog to AboutDialog that renders
// the canonical Profile contract from the signed-in user. Binds to the
// `@cloud-dog/auth` `useAuth()` hook so consuming services do not need to plumb
// user data through a config object. Renders ONLY identity data — never
// product metadata. The negative test in the local-proof asserts no `about-*`
// testids appear inside this dialog.
import * as React from "react";
import { cn, Dialog, Button, Input, Label } from "@cloud-dog/ui";
import { useAuth } from "@cloud-dog/auth";
function formatLastLogin(value) {
    if (!value)
        return "Never";
    const ts = Date.parse(value);
    if (Number.isNaN(ts))
        return value;
    return new Date(ts).toLocaleString();
}
export function ProfileDialog(props) {
    const { open, onOpenChange, onLogout, links = [], onChangePassword, className } = props;
    const auth = useAuth();
    const user = auth.user;
    const [currentPassword, setCurrentPassword] = React.useState("");
    const [newPassword, setNewPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");
    const [passwordStatus, setPasswordStatus] = React.useState(null);
    const [passwordError, setPasswordError] = React.useState(null);
    const [savingPassword, setSavingPassword] = React.useState(false);
    React.useEffect(() => {
        if (open)
            return;
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
        setPasswordStatus(null);
        setPasswordError(null);
        setSavingPassword(false);
    }, [open]);
    const handleLogout = React.useCallback(async () => {
        try {
            if (onLogout) {
                await onLogout();
            }
            else {
                await auth.logout();
            }
        }
        finally {
            onOpenChange(false);
        }
    }, [auth, onLogout, onOpenChange]);
    const handleChangePassword = React.useCallback(async () => {
        setPasswordStatus(null);
        setPasswordError(null);
        if (!onChangePassword)
            return;
        if (!currentPassword || !newPassword) {
            setPasswordError("Current and new password are required.");
            return;
        }
        if (newPassword !== confirmPassword) {
            setPasswordError("New password and confirmation must match.");
            return;
        }
        setSavingPassword(true);
        try {
            await onChangePassword({ currentPassword, newPassword });
            setCurrentPassword("");
            setNewPassword("");
            setConfirmPassword("");
            setPasswordStatus("Password changed.");
        }
        catch (error) {
            setPasswordError(error instanceof Error ? error.message : "Password change failed.");
        }
        finally {
            setSavingPassword(false);
        }
    }, [confirmPassword, currentPassword, newPassword, onChangePassword]);
    const username = user?.username ?? user?.id ?? "";
    const displayName = user?.displayName ?? "";
    const email = user?.email ?? "";
    const groups = user?.groups ?? [];
    const roles = user?.roles ?? [];
    const lastLogin = formatLastLogin(user?.lastLogin);
    return (_jsx(Dialog, { open: open, onOpenChange: onOpenChange, label: "Profile", children: _jsxs("div", { className: cn("flex flex-col gap-4", className), children: [_jsx("h2", { className: "text-lg font-semibold", children: "Profile" }), _jsxs("dl", { className: "grid grid-cols-[max-content_1fr] gap-x-4 gap-y-2 text-sm", children: [_jsx("dt", { className: "text-muted-foreground", children: "Username" }), _jsx("dd", { "data-testid": "profile-username", children: username }), _jsx("dt", { className: "text-muted-foreground", children: "Display name" }), _jsx("dd", { "data-testid": "profile-display-name", children: displayName }), _jsx("dt", { className: "text-muted-foreground", children: "Email" }), _jsx("dd", { "data-testid": "profile-email", children: email }), _jsx("dt", { className: "text-muted-foreground", children: "Groups" }), _jsx("dd", { children: _jsx("ul", { role: "list", "aria-label": "Groups", "data-testid": "profile-groups", className: "flex flex-wrap gap-1", children: groups.length === 0 ? (_jsx("li", { className: "text-muted-foreground", children: "None" })) : (groups.map((g) => (_jsx("li", { className: "rounded bg-muted px-2 py-0.5 text-xs", children: g }, g)))) }) }), _jsx("dt", { className: "text-muted-foreground", children: "Roles" }), _jsx("dd", { children: _jsx("ul", { role: "list", "aria-label": "Roles", "data-testid": "profile-roles", className: "flex flex-wrap gap-1", children: roles.length === 0 ? (_jsx("li", { className: "text-muted-foreground", children: "None" })) : (roles.map((r) => (_jsx("li", { className: "rounded bg-muted px-2 py-0.5 text-xs", children: r }, r)))) }) }), _jsx("dt", { className: "text-muted-foreground", children: "Last login" }), _jsx("dd", { "data-testid": "profile-last-login", children: lastLogin })] }), links.length ? (_jsxs("div", { className: "space-y-2 rounded-md border p-3", "data-testid": "profile-links", children: [_jsx("h3", { className: "text-sm font-semibold", children: "Related workspaces" }), _jsx("div", { className: "grid gap-2 sm:grid-cols-3", children: links.map((link) => (_jsx(Button, { type: "button", variant: "outline", size: "sm", className: "h-auto justify-start whitespace-normal text-left", onClick: () => {
                                    link.onSelect();
                                    onOpenChange(false);
                                }, children: _jsxs("span", { children: [_jsx("span", { className: "block font-medium", children: link.label }), link.description ? _jsx("span", { className: "block text-xs text-muted-foreground", children: link.description }) : null] }) }, link.label))) })] })) : null, onChangePassword ? (_jsxs("form", { className: "space-y-3 rounded-md border p-3", "data-testid": "profile-change-password", onSubmit: (event) => {
                        event.preventDefault();
                        void handleChangePassword();
                    }, children: [_jsx("h3", { className: "text-sm font-semibold", children: "Change password" }), _jsxs("div", { className: "grid gap-3 sm:grid-cols-3", children: [_jsxs("label", { className: "space-y-1", children: [_jsx(Label, { htmlFor: "profile-current-password", children: "Current password" }), _jsx(Input, { id: "profile-current-password", "data-testid": "profile-current-password", type: "password", value: currentPassword, autoComplete: "current-password", onChange: (event) => setCurrentPassword(event.target.value) })] }), _jsxs("label", { className: "space-y-1", children: [_jsx(Label, { htmlFor: "profile-new-password", children: "New password" }), _jsx(Input, { id: "profile-new-password", "data-testid": "profile-new-password", type: "password", value: newPassword, autoComplete: "new-password", onChange: (event) => setNewPassword(event.target.value) })] }), _jsxs("label", { className: "space-y-1", children: [_jsx(Label, { htmlFor: "profile-confirm-password", children: "Confirm password" }), _jsx(Input, { id: "profile-confirm-password", "data-testid": "profile-confirm-password", type: "password", value: confirmPassword, autoComplete: "new-password", onChange: (event) => setConfirmPassword(event.target.value) })] })] }), passwordError ? _jsx("p", { role: "alert", className: "text-sm text-destructive", children: passwordError }) : null, passwordStatus ? _jsx("p", { role: "status", className: "text-sm text-foreground/80", children: passwordStatus }) : null, _jsx("div", { className: "flex justify-end", children: _jsx(Button, { type: "submit", size: "sm", loading: savingPassword, "data-testid": "profile-change-password-submit", children: "Change password" }) })] })) : null, _jsxs("div", { className: "flex justify-end gap-2 pt-2", children: [_jsx(Button, { variant: "outline", size: "sm", onClick: () => onOpenChange(false), children: "Close" }), _jsx(Button, { variant: "destructive", size: "sm", "data-testid": "profile-logout", onClick: () => void handleLogout(), children: "Sign out" })] })] }) }));
}
