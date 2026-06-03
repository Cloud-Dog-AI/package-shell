import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "@cloud-dog/ui";
export function VersionInfo(props) {
    const { version, buildDate, commitHash, className } = props;
    if (!version && !buildDate && !commitHash) {
        return _jsx("span", { className: cn("text-xs text-muted-foreground", className), children: "Version unknown" });
    }
    const parts = [];
    if (version)
        parts.push(`v${version}`);
    if (buildDate)
        parts.push(buildDate);
    if (commitHash)
        parts.push(commitHash.slice(0, 7));
    return (_jsx("span", { className: cn("text-xs text-muted-foreground", className), children: parts.join(" \u00b7 ") }));
}
