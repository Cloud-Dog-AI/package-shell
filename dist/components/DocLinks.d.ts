export type DocLink = Readonly<{
    label: string;
    url: string;
    external?: boolean;
}>;
export type DocLinksProps = Readonly<{
    links: DocLink[];
    className?: string;
    /** When true, render as dropdown menu; otherwise as inline list. */
    dropdown?: boolean;
}>;
export declare function DocLinks({ links, className, dropdown }: DocLinksProps): import("react/jsx-runtime").JSX.Element | null;
//# sourceMappingURL=DocLinks.d.ts.map