import { IUserMock } from 'src/interfaces/i.user-mock';

export const LIST_PRODUCTS_MOCK: any = [
    {
        name: "1",
        birthday: new Date(1988, 3, 16),
        size: 212320109,
    },
    {
        name: "2",
        birthday: new Date(1989, 3, 25),
        size: 21210109,
    },
    {
        name: "3",
        birthday: new Date(2020, 0, 15),
        size: 2121109,
    },
    {
        name: "4",
        birthday: new Date(2019, 1, 30),
        size: 562120109,
    }
]

export function GET_PRODUCTS_MOCKS() {

    return LIST_PRODUCTS_MOCK;
}