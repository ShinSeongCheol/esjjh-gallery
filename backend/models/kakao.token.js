module.exports = (sequelize, DataTypes) => {
    const KakaoToken = sequelize.define(
        "KakaoToken",
        {
            id: {
                type: DataTypes.BIGINT,
                autoIncrement: true,
                primaryKey: true,
                comment: "카카오 토큰 ID",
            },
            token_type: {
                type: DataTypes.STRING(8),
                allowNull: false,
                comment: "토큰 타입",
            },
            access_token: {
                type: DataTypes.STRING(64),
                allowNull: false,
                comment: "액세스 토큰",
            },
            expires_in: {
                type: DataTypes.STRING(64),
                allowNull: false,
                comment: "액세스 토큰 만료 시간",
            },
            refresh_token: {
                type: DataTypes.STRING(64),
                allowNull: false,
                comment: "리프레쉬 토큰",
            },
            refresh_token_expires_in: {
                type: DataTypes.STRING(64),
                allowNull: false,
                comment: "리프레쉬 토큰 만료 시간",
            },
            scope: {
                type: DataTypes.STRING(256),
                allowNull: false,
                comment: "정보 조회 권한 범위",
            },
        },
        {
            freezeTableName: true,
            tableName: 'kakao_token_tb',
            timestamps: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at',
            charset: 'utf8mb4',
            collate: 'utf8_general_ci'
        }
    );

    KakaoToken.associate = function(models) {
        KakaoToken.belongsTo(models.User, {
            targetKey: 'id',
            foreignKey: 'user_id',
            onDelete: 'CASCADE',
        });
    }

    return KakaoToken;
};
