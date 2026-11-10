export const VALID_USER = {
    email: 'customer2@practicesoftwaretesting.com',
    password: 'welcome01',
};

export const CONTACT_FORM = {
    firstName: 'Ola',
    lastName: 'Nowak',
    email: 'aaa@gmail.com',
    subject: 'Customer service',
    message: 'Hello! I would like to ask about the delivery time from Warsaw to Krakow',
};

export function buildNewUser() {
    return {
        firstName: 'Nina',
        lastName: 'Nina',
        dateOfBirth: '2001-12-12',
        houseNumber: '12',
        street: 'Wieniawskiego',
        postalCode: '33-333',
        city: 'Leszno',
        state: 'Swietokrzyskie',
        country: 'Poland',
        phone: '555111555',
        password: 'passPass1=',
        email: `nina.${Date.now()}.${Math.floor(Math.random() * 1000)}@gmail.com`,
    };
}