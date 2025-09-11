export class UserController {
    constructor(userService) {
        this.userService = userService;
    }

    async update(req, res) {
        try {
            const { userId } = req.params;
            const updates = req.body;

            const updatedUser = await this.userService.updateById(Number(userId), updates);
            res.json(updatedUser);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    async create(req, res) {
        try {
            const newUser = await this.userService.create(req.body);
            res.json(newUser);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    async list(req, res) {
        const users = await this.userService.findAll();
        res.json(users);
    }

    async get(req, res) {
        const user = await this.userService.findByUserId(Number(req.params.userId));
        if (!user) return res.status(404).json({ error: "Usuario no encontrado" });
        res.json(user);
    }

    async delete(req, res) {
        const deleted = await this.userService.deleteById(Number(req.params.userId));
        if (!deleted) return res.status(404).json({ error: "Usuario no encontrado" });
        res.json({ ok: true });
    }
}
