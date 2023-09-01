import { CommonModel } from "./common/CommonModel";

export interface PagedRequest extends CommonModel {
    pageNumber: string | number | null,
    pageSize: string | number | null,
    sortBy: string | null
}