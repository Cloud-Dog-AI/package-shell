import { jsx as _jsx } from "react/jsx-runtime";
import { Button } from "@cloud-dog/ui";
import { useTheme } from "../context/useTheme.js";
export function ThemeToggle() {
    const theme = useTheme();
    return (_jsx(Button, { variant: "ghost", size: "icon", "aria-label": "Toggle theme", onClick: () => theme.toggle(), title: "Toggle theme", children: _jsx("span", { "aria-hidden": "true", className: "text-sm", children: theme.theme === "dark" ? "Sun" : "Moon" }) }));
}
