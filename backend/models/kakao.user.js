module.exports = (sequelize, DataTypes) => {
    const KakaoUser = sequelize.define(
        "KakaoUser",
        {
            id: {
                type: DataTypes.BIGINT,
                primaryKey: true,
                allowNull: false,
                comment: "카카오 회원 번호 ID",
            },
            nickname: {
                type: DataTypes.STRING(16),
                allowNull: false,
                comment: "닉네임",
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
            tableName: 'kakao_user_tb',
            timestamps: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at',
            charset: 'utf8mb4',
            collate: 'utf8_general_ci'
        }
    );

    KakaoUser.associate = function(models) {
        KakaoUser.hasOne(models.KakaoToken, {
            sourceKey: 'id',
            foreignKey: 'kakao_user_id',
            onDelete: 'CASCADE',
        });
    }

    KakaoUser.associate = function(models) {
        KakaoUser.belongsTo(models.UserType, {
            targetKey: 'id',
            foreignKey: 'user_type_id',
            onDelete: 'CASCADE',
        });
    }

    return KakaoUser;
};
