module.exports = (sequelize, DataTypes) => {
    const UserProfileImage = sequelize.define(
        'UserProfileImage',
        {
            id: {
                type: DataTypes.BIGINT,
                autoIncrement: true,
                primaryKey: true,
                comment: "유저 프로파일 이미지 ID",
            },
            original_name: {
                type: DataTypes.STRING(64),
                allowNull: false,
                comment: "원본 사진 명",
            },
            encoding: {
                type: DataTypes.STRING(8),
                allowNull: false,
                comment: "인코딩 방식",
            },
            mime_type: {
                type: DataTypes.STRING(16),
                allowNull: false,
                comment: "MIME 타입",
            },
            size: {
                type: DataTypes.INTEGER,
                allowNull: false,
                comment: "크기",
            },
            destination: {
                type: DataTypes.STRING(256),
                allowNull: false,
                comment: "저장 위치",
            },
            file_name: {
                type: DataTypes.STRING(256),
                allowNull: false,
                comment: "저장된 사진 명",
            },
        },
        {
            freezeTableName: true,
            tableName: 'user_profile_tb',
            timestamps: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at',
            charset: 'utf8mb4',
            collate: 'utf8_general_ci'
        }
    );

    UserProfileImage.associate = function(models) {
        UserProfileImage.belongsTo(models.User, {
            targetKey: 'id',
            foreignKey: 'user_id',
            onDelete: 'CASCADE'
        });
    };

    return UserProfileImage;
}