const authServiceTest = require('../../services/authService');
const { User } = require('../../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

jest.mock('../../models');
jest.mock('bcryptjs');
jest.mock('jsonwebtoken');

describe('AuthService', () => {
    describe('register', () => {
        it('should create a new user', async () => {
            const userData = { username: 'test', password: '12345' };
            User.create.mockResolvedValue(userData);

            const result = await authServiceTest.register(userData);

            expect(User.create).toHaveBeenCalledWith(userData);
            expect(result).toEqual(userData);
        });
    });

    describe('login', () => {
        it('should return a JWT token for valid credentials', async () => {
            const userData = { id: 1, username: 'test', password: 'hashedPassword' };
            const password = '12345';
            const token = 'fakeToken';

            User.findOne.mockResolvedValue(userData);
            bcrypt.compare.mockResolvedValue(true);
            jwt.sign.mockReturnValue(token);

            const result = await authServiceTest.login({ username: 'test', password });

            expect(User.findOne).toHaveBeenCalledWith({ where: { username: 'test' } });
            expect(bcrypt.compare).toHaveBeenCalledWith(password, userData.password);
            expect(jwt.sign).toHaveBeenCalledWith({ id: userData.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
            expect(result).toBe(token);
        });

        it('should throw an error for invalid credentials', async () => {
            User.findOne.mockResolvedValue(null);

            await expect(authServiceTest.login({ username: 'invalid', password: '12345' }))
                .rejects
                .toThrow('Invalid credentials');
        });
    });
});
