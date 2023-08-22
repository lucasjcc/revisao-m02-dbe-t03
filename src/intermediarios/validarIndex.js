const validarIndex = (req, res, next) => {
    const { id } = req.params
    if (isNaN(Number(id))) {
        return res.status(400).json({ mensagem: "O id deve ser um número"})
    }
    next()
}

module.exports = { validarIndex }