import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function Breadcrumbs(props) {
    if (!props.items.length)
        return null;
    return (_jsx("ol", { className: "flex items-center gap-2 text-sm text-muted-foreground", children: props.items.map((b, i) => (_jsxs("li", { className: "flex items-center gap-2", children: [b.href ? (_jsx("a", { className: "hover:text-foreground", href: b.href, children: b.label })) : (_jsx("span", { className: "text-foreground", children: b.label })), i < props.items.length - 1 ? _jsx("span", { "aria-hidden": "true", children: "/" }) : null] }, `${b.label}-${i}`))) }));
}
