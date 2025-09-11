export class UserRepository {
    constructor(userModel) {
        this.model = userModel;
    }

    // Crear usuario con userId incremental
    async create(userData) {
        // Obtener último userId
        const lastUser = await this.model.findOne().sort({ userId: -1 }).lean();
        const nextId = (lastUser?.userId ?? 0) + 1;

        const newUser = new this.model({
            ...userData,
            userId: nextId
        });

        return await newUser.save();
    }

    // Obtener todos los usuarios
    async findAll() {
        return await this.model.find();
    }

    // Buscar por userId (no por _id)
    async findByUserId(userId) {
        return await this.model.findOne({ userId });
    }

    // Actualizar por userId
    async updateById(userId, updates) {
        return await this.model.findOneAndUpdate(
            { userId },
            updates,
            { new: true, runValidators: true }
        );
    }

    // Eliminar por userId
    async deleteById(userId) {
        return await this.model.findOneAndDelete({ userId });
    }
    // Buscar usuario por email
    async findByEmail(email) {
    return await this.model.findOne({ email });
}

}
