export class PagedResult<T> {
    PageNumber: number;

    PageSize: number;

    RowCount: number;

    PageCount: number;

    HasNextPage: boolean;

    HasPreviousPage: boolean;

    PagedList: T[];
}