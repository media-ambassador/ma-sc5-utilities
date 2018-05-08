import { SelectionModel } from "@angular/cdk/collections";
export interface TableSearchSort {
    column: string;
    asc: boolean;
}
export interface TableSearch {
    page?: number;
    limit?: number;
    query?: Object;
    sort?: TableSearchSort[];
}
export interface TableColumn {
    name: string;
    display: boolean;
    disabled: boolean;
}
export interface TableSelectionEmmiter<T> {
    selection: SelectionModel<T>;
    total?: boolean;
}
