module.exports = (sequelize, DataTypes) => {
    const KakaoToken = sequelize.define(
        "KakaoToken",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
                comment: "카카오 토큰 고유 ID",
            },
            access_token: {
                type: DataTypes.STRING(64),
                allowNull: false,
                comment: "카카오 Access Token",
            },
            token_type: {
                type: DataTypes.STRING(8),
                allowNull: false,
                comment: "카카오 Token Type",
            },
            refresh_token: {
                type: DataTypes.STRING(16),
                allowNull: false,
                comment: "카카오 Refresh Token",
            },
            expires_in: {
                type: DataTypes.INTEGER,
                allowNull: false,
                comment: "카카오 Access Token 만료 시간",
            },
            scope: {
                type: DataTypes.STRING(256),
                allowNull: false,
                comment: "카카오 동의 항목",
            },
            refresh_token_expires_in: {
                type: DataTypes.STRING(256),
                allowNull: false,
                comment: "카카오 Refresh Token 만료 시간",
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
        KakaoToken.belongsTo(models.KakaoUser, {
            foreignKey: {
                name: 'kakao_id'
            },
        });
    }

    return KakaoToken;
};
