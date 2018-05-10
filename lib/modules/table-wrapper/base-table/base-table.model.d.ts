import { SelectionModel } from "@angular/cdk/collections";
export interface MaSc5TableSearchSort {
    column: string;
    asc: boolean;
}
export interface MaSc5TableSearch {
    page?: number;
    limit?: number;
    query?: Object;
    sort?: MaSc5TableSearchSort[];
}
export interface MaSc5TableColumn {
    name: string;
    display: boolean;
    disabled: boolean;
}
export interface MaSc5TableSelectionEmmiter<T> {
    selection: SelectionModel<T>;
    total?: boolean;
}
