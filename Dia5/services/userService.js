
export class UserService {
    constructor(userRepository) {
        this.repo = userRepository;
    }

    async create(userData) {
        const existing = await this.repo.findByEmail(userData.email);
        if (existing) throw new Error("Email ya existe");
        return await this.repo.create(userData);
    }

    async updateById(userId, updates) {
        const updated = await this.repo.updateById(userId, updates);
        if (!updated) throw new Error("Usuario no encontrado");
        return updated;
    }

    async findAll() {
        return await this.repo.findAll();
    }

    async findByUserId(userId) {
        return await this.repo.findByUserId(userId);
    }

    async deleteById(userId) {
        return await this.repo.deleteById(userId);
    }
}
