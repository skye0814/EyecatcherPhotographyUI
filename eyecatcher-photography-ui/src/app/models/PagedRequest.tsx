import { CommonModel } from "./common/CommonModel";

export interface PagedRequest extends CommonModel {
    pageNumber: number,
    pageSize: number,
    sortBy: string | null
}