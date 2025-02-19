module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        'User',
        {
            id: {
                type: DataTypes.BIGINT,
                autoIncrement: true,
                primaryKey: true,
                comment: "ID",
            },
            email: {
                type: DataTypes.STRING(32),
                unique: true,
                allowNull: false,
                comment: "EMAIL",
            },
            nickname: {
                type: DataTypes.STRING(16),
                allowNull: false,
                comment: "EMAIL",
            },
            password: {
                type: DataTypes.STRING(128),
                allowNull: false,
                comment: "PASSWORD",
            },
        },
        {
            freezeTableName: true,
            tableName: 'user_tb',
            timestamps: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at',
            charset: 'utf8mb4',
            collate: 'utf8_general_ci'
        }
    );

    User.associate = function(models) {
        User.belongsTo(models.UserType, {
            targetKey: 'id',
            foreignKey: 'user_type_id',
            onDelete: 'CASCADE'
        });
    };

    User.associate = function(models) {
        User.hasOne(models.UserProfileImage, {
            sourceKey: 'id',
            foreignKey: 'user_id',
            onDelete: 'CASCADE'
        });
    };

    return User;
}