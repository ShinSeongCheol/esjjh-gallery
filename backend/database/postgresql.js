const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  // 연결 테스트 및 에러 핸들링
pool.on('connect', () => {
  console.log('Connected to PostgreSQL');
});

pool.on('error', (err) => {
  console.error('Unexpected error on idle PostgreSQL client', err);
  process.exit(-1);
});

// 쿼리 실행 함수
const query = (text, params) => {
    return pool.query(text, params);
};

module.exports = {
    query,
    pool, // 필요시 전체 풀 객체를 사용할 수 있도록 내보냄
};