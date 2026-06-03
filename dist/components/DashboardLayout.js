import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "@cloud-dog/ui";
export function DashboardLayout(props) {
    return (_jsxs("div", { className: cn("flex flex-col gap-6 p-4", props.className), children: [props.healthWidgets && (_jsx("section", { "aria-label": "Health status", children: _jsx("div", { className: "flex flex-wrap gap-4", children: props.healthWidgets }) })), props.metricCards && (_jsx("section", { "aria-label": "Key metrics", children: _jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: props.metricCards }) })), props.quickActions && (_jsx("section", { "aria-label": "Quick actions", children: _jsx("div", { className: "flex flex-wrap gap-2", children: props.quickActions }) })), props.recentActivity && (_jsx("section", { "aria-label": "Recent activity", children: _jsx("div", { className: "rounded-lg border bg-card p-4", children: props.recentActivity }) })), props.children] }));
}
