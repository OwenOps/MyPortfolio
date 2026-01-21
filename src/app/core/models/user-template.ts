export interface User {
    id: number;
    name: string;
    email: string;
    firstName: string;
    location: string;
    phoneNumber: string;
    fullName: string;
}

export const lstUser: User[] =
    [
        {
            id: 1,
            name: 'Doe',
            email: 'john.doe@hotmail.com',
            firstName: 'John',
            location: '',
            phoneNumber: '',
            fullName: ''
        },
    ]