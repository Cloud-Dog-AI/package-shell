export type ProfileDialogLink = Readonly<{
    label: string;
    description?: string;
    onSelect: () => void;
}>;
export interface ProfileDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    /** Optional override invoked when the user clicks "Sign out". Defaults to `useAuth().logout()`. */
    onLogout?: () => void | Promise<void>;
    links?: ProfileDialogLink[];
    onChangePassword?: (payload: {
        currentPassword: string;
        newPassword: string;
    }) => Promise<void>;
    className?: string;
}
export declare function ProfileDialog(props: ProfileDialogProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=ProfileDialog.d.ts.map