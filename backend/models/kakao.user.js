module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        "KakaoUser",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                comment: "카카오 회원 번호 ID",
            },
            nickname: {
                type: DataTypes.STRING(16),
                allowNull: false,
                comment: "오리지널 사진 명",
            },
            thumbnail_image_url: {
                type: DataTypes.STRING(64),
                allowNull: false,
                comment: "썸네일 이미지 주소",
            },
            profile_image_url: {
                type: DataTypes.STRING(64),
                allowNull: false,
                comment: "프로파일 이메일 주소",
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
};
