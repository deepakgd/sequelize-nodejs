module.exports = (sequelize, DataTypes)=>{
    var user_departments = sequelize.define('user_departments', {
        id: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        department_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        created_at: {
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updated_at: {
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        classMethods:{
            associate: function(models){

            }
        }
    });
    return user_departments;
}