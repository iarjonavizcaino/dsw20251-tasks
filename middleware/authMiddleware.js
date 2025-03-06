// middleware/authMiddleware.js

const jwt = require('jsonwebtoken');
const SECRET_KEY = 'Isarvi';

exports.authenticateToken = (req, res, next) => {
  const token = req.header('Authorization');
  
  if (!token) {
    return res.status(403).json({ message: 'Acceso denegado: No hay token' });
  }

  try {
    const verified = jwt.verify(token.replace('Bearer ', ''), SECRET_KEY);
    req.user = verified; 
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token inválido' });
  }
};
