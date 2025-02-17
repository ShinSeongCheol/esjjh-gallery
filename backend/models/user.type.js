module.exports = (sequelize, DataTypes) => {
    const UserType = sequelize.define(
        "UserType",
        {
            id: {
                type: DataTypes.BIGINT,
                primaryKey: true,
                autoIncrement: true,
                comment: "ID",
            },
            type: {
                type: DataTypes.STRING(16),
                unique: true,
                allowNull: false,
                comment: "로그인 서비스 종류",
            }
        },
        {
            freezeTableName: true,
            tableName: 'user_type_tb',
            timestamps: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at',
            charset: 'utf8mb4',
            collate: 'utf8_general_ci'
        }
    );

    UserType.associate = function(models) {
        UserType.hasMany(models.User, {
            sourceKey: 'id',
            foreignKey: 'user_type_id',
            onDelete: 'CASCADE',
        });
    }

    return UserType;
};
