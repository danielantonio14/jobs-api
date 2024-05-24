const User = require('../models/User');
const { StatusCodes } = require('http-status-codes');
const { BadRequestError, UnauthorizedError } = require('../errors');
const jwt = require('jsonwebtoken')

const register = async (req, res) => {
    const { name, email, password } = req.body;

    // Validação básica
    if (!name || !email || !password) {
        throw new BadRequestError('Por favor, forneça nome, email e senha.');
    }

    // Criação do usuário
    const user = await User.create({ name, email, password });
    const token = jwt.sign({userId: user.id, name: user.name}, 'jwtSecret',{expiresIn: '30d',
    })
    res.status(StatusCodes.CREATED).json({ user:{name:user.name}, token });
}

const login = async (req, res) => {
    const { email, password } = req.body;

    // Validação básica
    if (!email || !password) {
        throw new BadRequestError('Por favor, forneça email e senha.');
    }

    // Verificação do usuário
    const user = await User.findOne({ email });
    if (!user) {
        throw new UnauthorizedError('Credenciais inválidas.');
    }

    // Comparação de senha
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
        throw new UnauthorizedError('Credenciais inválidas.');
    }

    // Retornar resposta de sucesso (aqui você poderia gerar um token JWT, por exemplo)
    res.status(StatusCodes.OK).json({ user });
}

module.exports = {
    register,
    login
}
