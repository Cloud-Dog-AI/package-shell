import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
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
// @cloud-dog/shell — DocLinks: help menu with documentation links.
import * as React from "react";
import { Button } from "@cloud-dog/ui";
export function DocLinks({ links, className = "", dropdown = true }) {
    const [open, setOpen] = React.useState(false);
    if (!links.length)
        return null;
    if (!dropdown) {
        return (_jsx("nav", { className: `flex flex-col gap-1 ${className}`, "aria-label": "Documentation links", children: links.map((link) => (_jsxs("a", { href: link.url, target: link.external ? "_blank" : undefined, rel: link.external ? "noopener noreferrer" : undefined, className: "text-sm text-muted-foreground hover:text-foreground hover:underline px-2 py-1 rounded", children: [link.label, link.external && _jsx("span", { className: "ml-1 text-xs", children: "\u2197" })] }, link.url))) }));
    }
    return (_jsxs("div", { className: `relative ${className}`, children: [_jsx(Button, { variant: "ghost", size: "sm", "aria-label": "Documentation", "aria-expanded": open, onClick: () => setOpen(!open), children: _jsx("span", { "aria-hidden": "true", children: "?" }) }), open && (_jsxs(_Fragment, { children: [_jsx("div", { className: "fixed inset-0 z-40", onClick: () => setOpen(false) }), _jsx("div", { className: "absolute right-0 mt-1 z-50 w-56 rounded-md border bg-popover text-popover-foreground shadow-md", role: "menu", children: _jsx("div", { className: "p-1", children: links.map((link) => (_jsxs("a", { href: link.url, target: link.external ? "_blank" : undefined, rel: link.external ? "noopener noreferrer" : undefined, role: "menuitem", className: "block px-3 py-2 text-sm rounded hover:bg-accent hover:text-accent-foreground", onClick: () => setOpen(false), children: [link.label, link.external && _jsx("span", { className: "ml-1 text-xs opacity-60", children: "\u2197" })] }, link.url))) }) })] }))] }));
}
