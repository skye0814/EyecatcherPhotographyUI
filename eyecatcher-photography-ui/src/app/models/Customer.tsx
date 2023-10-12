import { User } from "./User";

export interface Customer {
    customerID: string | undefined,
    firstName: string | undefined,
    middleName: string | undefined | null,
    lastName: string | undefined,
    address: string | undefined | null,
    contactNumber: string | undefined | null,
    applicationUser: User
}