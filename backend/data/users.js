import bcrypt from 'bcryptjs'; // npm install bcryptjs for password hashing
const users = [
    {
        name: 'Admin User',
        email: 'admin@email.com',
        password: bcrypt.hashSync('123456', 10), // Hashing the password
        isAdmin: true,
    },
    {
        name: 'John Doe',
        email: 'john@email.com',
        password: bcrypt.hashSync('123456', 10), // Hashing the password
        isAdmin: false,
    },
    {
        name: 'Jane Doe',
        email: 'jane@email.com',
        password: bcrypt.hashSync('123456', 10), // Hashing the password
        isAdmin: false,
    },

];

export default users; 