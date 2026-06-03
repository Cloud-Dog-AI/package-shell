import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
const ShellContext = React.createContext(null);
export function ShellProvider({ options, manifest, children, }) {
    return _jsx(ShellContext.Provider, { value: { options, manifest }, children: children });
}
export function useShell() {
    const ctx = React.useContext(ShellContext);
    if (!ctx)
        throw new Error('ShellProvider missing');
    return ctx;
}
