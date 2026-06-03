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
// @cloud-dog/shell — Collapsible nav group.
import * as React from "react";
import { NavItem } from "./NavItem.js";
import { cn } from "@cloud-dog/ui";
import { useShell } from "../context/useShell.js";
export function NavGroup(props) {
    const shell = useShell();
    const [open, setOpen] = React.useState(true);
    return (_jsxs("div", { children: [_jsxs("button", { type: "button", className: cn("w-full flex items-center gap-2 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground", shell.navCollapsed ? "justify-center" : "justify-between"), onClick: () => setOpen((v) => !v), "aria-expanded": open, children: [!shell.navCollapsed ? _jsx("span", { children: props.label }) : _jsx("span", { "aria-hidden": "true", children: "\u2022" }), !shell.navCollapsed ? _jsx("span", { "aria-hidden": "true", children: open ? "−" : "+" }) : null] }), open ? (_jsx("div", { className: "px-2 space-y-1", children: props.items.map((it) => (_jsx(NavItem, { item: it }, it.path))) })) : null] }));
}
