module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        "Picture",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
                comment: "사진 고유 ID",
            },
            original_name: {
                type: DataTypes.STRING(64),
                allowNull: false,
                comment: "오리지널 사진 명",
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
            filename: {
                type: DataTypes.STRING(256),
                allowNull: false,
                comment: "저장된 사진 명",
            },
        },
        {
            freezeTableName: true,
            tableName: 'picture_tb',
            timestamps: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at',
            charset: 'utf8mb4',
            collate: 'utf8_general_ci'
        }
    );
};
