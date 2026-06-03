import { jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "@cloud-dog/ui";
export function CopyrightFooter(props) {
    const year = new Date().getFullYear();
    return (_jsxs("footer", { className: cn("py-2 px-3 text-xs text-muted-foreground", props.className), children: ["Copyright ", year, " Cloud-Dog, Viewdeck Engineering Limited"] }));
}
