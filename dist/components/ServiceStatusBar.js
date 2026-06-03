import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn, Tooltip } from "@cloud-dog/ui";
const dotColor = {
    ok: "bg-green-500",
    warning: "bg-amber-500",
    error: "bg-red-500",
    unknown: "bg-gray-400",
};
export function ServiceStatusBar(props) {
    return (_jsx("div", { className: cn("flex items-center gap-3 px-3 py-1 border-b bg-background text-xs text-muted-foreground", props.className), role: "group", "aria-label": "Service health", children: props.services.map((svc) => (_jsx(Tooltip, { content: `${svc.name} — ${svc.url}`, children: _jsxs("span", { className: "inline-flex items-center gap-1", children: [_jsx("span", { className: cn("h-2 w-2 rounded-full shrink-0", dotColor[svc.status]), "aria-hidden": "true" }), _jsx("span", { children: svc.name })] }) }, svc.name))) }));
}
