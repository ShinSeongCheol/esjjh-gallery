# 베이스 이미지 설정
FROM node

# 작업 디렉토리 설정
WORKDIR /usr/src/app

# 의존성 파일 복사 및 설치
COPY ./backend/package*.json ./
RUN npm install

# 애플리케이션 코드 복사
COPY ./backend ./

# 포트 노출
EXPOSE 3000

# 서버 시작 명령어
CMD ["npm", "run", "start"]

