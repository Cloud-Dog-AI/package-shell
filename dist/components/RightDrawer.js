import { jsx as _jsx } from "react/jsx-runtime";
import { Sheet } from "@cloud-dog/ui";
import { useRightDrawer } from "../context/useRightDrawer.js";
export function RightDrawer(props) {
    const drawer = useRightDrawer();
    return (_jsx(Sheet, { open: drawer.isOpen, onOpenChange: (o) => (o ? drawer.open() : drawer.close()), side: "right", children: props.children }));
}
