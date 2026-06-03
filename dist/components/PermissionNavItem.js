import { jsx as _jsx } from "react/jsx-runtime";
import { useAuth } from "@cloud-dog/auth";
import { NavItem } from "./NavItem.js";
export function PermissionNavItem(props) {
    try {
        const auth = useAuth();
        if (auth.isLoading)
            return null;
        if (props.item.requiredPermission && !auth.hasPermission(props.item.requiredPermission)) {
            return null;
        }
    }
    catch {
        // AuthProvider is optional for shell consumers; default allow.
    }
    return _jsx(NavItem, { item: props.item });
}
