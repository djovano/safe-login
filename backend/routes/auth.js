const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const router = express.Router();

//CRIPTOGRAFIA A SENHA PARA HASH
const users = [
  {
    id: 1,
    email: 'teste@exemplo.com',
    passwordHash: bcrypt.hashSync('123456', 10), //sistema de banco de dados simulados
  },
];

// VALIDAÇÃO + AUTENTICAÇÃO + ERROS
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email e senha são obrigatórios.' });
  }

  const user = users.find((u) => u.email === email);
  if (!user) return res.status(401).json({ message: 'Usuário não encontrado.' });

  const valid = await bcrypt.compare(password, user.passwordHash);
  if (!valid) return res.status(401).json({ message: 'Senha incorreta.' });

  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  res.json({ token });
});

const authMiddleware = require('../middleware/authMiddleware');

router.get('/private', authMiddleware, (req, res) => {
  res.json({ message: 'Acesso autorizado!', user: req.user });
});

module.exports = router;
