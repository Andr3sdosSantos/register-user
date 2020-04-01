module.exports = {
  dialect: 'postgres',
  username: 'postgres',
  host: 'localhost',
  password: 'docker',
  database: 'registerUser',
  port: '5440',
  define: {
    timestamps: true,
    underscored: true,
  }
}