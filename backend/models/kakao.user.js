module.exports = (sequelize, DataTypes) => {
    const KakaoUser = sequelize.define(
        "KakaoAccount",
        {
            id: {
                type: DataTypes.BIGINT,
                primaryKey: true,
                autoIncrement: true,
                comment: "카카오 계정 ID",
            },
            account_id: {
              type: DataTypes.BIGINT,
              unique: true,
              allowNull: false,
              comment: "카카오 고유 회원 ID"
            },
            thumbnail_image_url: {
                type: DataTypes.STRING(128),
                allowNull: false,
                comment: "썸네일 이미지 주소",
            },
            profile_image_url: {
                type: DataTypes.STRING(128),
                allowNull: false,
                comment: "프로파일 이미지 주소",
            },
        },
        {
            freezeTableName: true,
            tableName: 'kakao_account_tb',
            timestamps: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at',
            charset: 'utf8mb4',
            collate: 'utf8_general_ci'
        }
    );

    KakaoUser.associate = function(models) {
        KakaoUser.belongsTo(models.User, {
            targetKey: 'id',
            foreignKey: 'user_id',
            onDelete: 'CASCADE',
        });
    }

    return KakaoUser;
};
