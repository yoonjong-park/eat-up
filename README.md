# Eat-up (프로젝트명 "잇업")

## Getting Started

개발 서버 구동

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

브라우저로 접속 [http://localhost:3000](http://localhost:3000)

## 폴더 구조

|  제목  |               내용                |
| :----: | :-------------------------------: |
| pages  |   Pages router (페이지 라우터)    |
| public |   이미지 파일 등 정적 파일 관리   |
|  src   | (선택사항) 애플리케이션 소스 폴더 |

## 파일 구조

|             제목             |                  내용                   |
| :--------------------------: | :-------------------------------------: |
|        next.config.js        |       Next.js 프로젝트 설정 파일        |
|         package.json         | 프로젝트 패키지 의존성 및 스크립트 관리 |
|        middleware.ts         |          Next.js 미들웨어 파일          |
|             .env             |              환경변수 파일              |
|        .eslintrc.json        |            ESLint 설정 파일             |
|          .gitignore          |       Git 에서 무시할 파일들 정리       |
|        .next-env.d.ts        |     Next.js 타입스크립트 선언 파일      |
| tsconfig.json, jsconfig.json |  타입스크립트 / 자바스크립트 설정 파일  |
|      postcss.config.js       |         Tailwind CSS 설정 파일          |

## 페이지 구조

|  파일 위치 (Pages Router)   |            설명 (URL)             |
| :-------------------------: | :-------------------------------: |
|   /pages/stores/index.js    |        맛집 목록 (/stores)        |
|    /pages/stores/new.js     |  맛집 생성 페이지 (/stores/new)   |
| /pages/stores/[id]/index.js |   맛집 상세 페이지 (/stores/1)    |
| /pages/stores/[id]/edit.js  | 맛집 수정 페이지 (/stores/1/edit) |
|    /pages/users/login.js    |   로그인 페이지 (/users/login)    |
|   /pages/users/mypage.js    |    마이페이지 (/users/mypage)     |
|    /pages/users/likes.js    |     찜한 맛집 (/users/likes)      |

## 배포

이곳에 접속하시면, 확인하실 수 있습니다.
[사이트 바로가기](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
