export interface AppMenuTreeItem {
    name: string;
    icon: string;
    active: boolean;
    services: string[];
    link?: string;
}
export declare const AppMenuTree: AppMenuTreeItem[];
