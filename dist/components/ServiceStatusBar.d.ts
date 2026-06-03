export interface ServiceStatus {
    name: string;
    url: string;
    status: "ok" | "warning" | "error" | "unknown";
}
export interface ServiceStatusBarProps {
    services: ServiceStatus[];
    className?: string;
}
export declare function ServiceStatusBar(props: ServiceStatusBarProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=ServiceStatusBar.d.ts.map