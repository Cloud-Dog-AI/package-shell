import * as React from 'react';
import type { AppManifest, ShellOptions } from './types';
type ShellContextValue = {
    options: ShellOptions;
    manifest: AppManifest;
};
export declare function ShellProvider({ options, manifest, children, }: {
    options: ShellOptions;
    manifest: AppManifest;
    children: React.ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export declare function useShell(): ShellContextValue;
export {};
//# sourceMappingURL=ShellProvider.d.ts.map