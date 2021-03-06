# 쇼핑몰 관리자 페이지

# 사용 기술

- HTML
- CSS3
- Javascript
- Sass
- Sequelize
- Node.js ( Express )
- EJS

# 배포

- AWS EC2
- Router 53

# 사용한 오픈 API 소스

- express
- helmet
- cors
- morgan
- multer
- dotenv
- bcrypt
- method-override
- lodash
- uuid
- passport
- moment

## 주요 구현 내용

1. 접근 가능한 회원 처리
 middlewares/auth-mw.js 참조

   - 등록되지 않은 사용자 이거나 접근 불가한 사용자 판별
   - 관리 페이지별 접근 가능한 관리자 등급 제어 구현
   - 페이지 접근은 가능 하지만 수정 및 삭제 제한 구현

2. 회원관리

   - 회원 리스트 페이지 및 회원 정보 수정 / 삭제
   - 회원 상태를 통하여 관리자 및 일반회원 등급 부여
   - 오름차순, 내림차순 정렬
   - 회원 상태 / 상태 를 기준으로 정렬
   - Pagination

3. 카테고리 관리

   - Jstree를 사용한 카테고리 관리 구현
   - 2 Depth의 카테고리 구현


4. 상품 관리

   - 쇼핑몰 메인 사이트에 등록될 상품 리스트 페이지
   - 등록할 카테고리 선택
   - Best, New, Sale 등등 상품의 분류 선택
   - 판매여부 구현 (판매중지, 일시중지, 판매중)
   - 소비자 가격 / 판매가격 / 재고량 분류
   - 해당 상품의 색상별 구분
   - 상품 내용에 따른 정렬 및 검색
   - 상품 등록 / 수정 및 삭제 


5. 상품 분류 관리

   -  상품의 상태 (Sale, New, Bundle, Best)의 따른 색상 구별
   -  생상 선택 및 수정, 삭제, 리셋 구현


6. 제품 색상 관리

   -  제품별 색상을 등록 및 수정, 삭제, 리셋 구현
   -  Front Page에서 보여질 제품의 색상들 선택 및 등록

7. 회원 수정 및 탈퇴

   - 회원 비밀번호 수정 구현
   - 회원 탈퇴시 비밀번호를 기준으로 탈퇴 구현
   - SNS 회원 탈퇴 구현
   - API key(인증키) 발급, 도메인 등록 ( API서버를 통한 통신을 위하여 )

8. 주문 관리

   - 주문 한 사용자의 기본 정보 내용
   - 주문한 상품의 내용
   - 주문 상태 분류

9. 게시판 관리

   - 게시판 생성 및 수정, 삭제
   - 게시판마다 첨부 파일, 이미지, 댓글 사용 여부 선택 가능
   - 게시판의 타입 선택 가능(갤러리, 일반)

10. 게시물 관리

   - 게시판별 리스트 목록 구현
   - 게시판 내용에 따른 정렬 및 검색 구현


## [Front](https://shop.1bin.kr/)

# Database

![shop-erd](https://user-images.githubusercontent.com/87403399/147549285-5039c386-cbfc-49bf-ae1c-801066fb292c.png)
