import { IUserMock } from 'src/interfaces/i.user-mock';

export const LIST_USER_MOCK: IUserMock[] = [
    {
        name: "admin",
        password: "123456"
    },
    {
        name: "user",
        password: "user"
    },
    {
        name: "local",
        password: "local"
    },
    {
        name: "custom",
        password: "custom"
    }
]

export function GET_USERS_MOCKS() {

    return LIST_USER_MOCK;
}