/*
shop.1bin.kr/admin/
[GET]     shop.1bin.kr/admin/login   - 로그인 화면
[POST]    shop.1bin.kr/admin/login   - 로그인 처리
[GET]     shop.1bin.kr/admin/logout  - 로그아웃 처리
[GET]     shop.1bin.kr/admin/main    - 메인 화면

[GET]     shop.1bin.kr/admin/user?page=1        - 회원리스트
[GET]     shop.1bin.kr/admin/user?type=create   - 회원리스트
[GET]     shop.1bin.kr/admin/user/1             - 회원내용
[GET]     shop.1bin.kr/admin/user/1?type=update - 회원내용 수정 화면
[PUT]     shop.1bin.kr/admin/user               - 회원내용수정(저장)
[DELETE]  shop.1bin.kr/admin/user               - 회원삭제

[GET]     shop.1bin.kr/admin/cate                - 카테고리 리스트
[GET]     shop.1bin.kr/admin/cate/1              - 카테고리 내용
[GET]     shop.1bin.kr/admin/cate/1?type=update - 카테고리 내용 수정
[POST]    shop.1bin.kr/admin/cate                - 카테고리 생성
[PUT]     shop.1bin.kr/admin/cate                - 카테고리 수정
[DELETE]  shop.1bin.kr/admin/cate                - 카테고리 삭제

[GET]     shop.1bin.kr/admin/prd?page=1          - 상품 리스트
[GET]     shop.1bin.kr/admin/prd/1               - 상품 내용
[GET]     shop.1bin.kr/admin/prd/1?type=update - 상품 내용 수정 화면
[POST]    shop.1bin.kr/admin/prd                 - 상품 생성
[PUT]     shop.1bin.kr/admin/prd                 - 상품 수정
[DELETE]  shop.1bin.kr/admin/prd                 - 상품 삭제

[GET]     shop.1bin.kr/admin/order?page=1        - 주문 리스트
[GET]     shop.1bin.kr/admin/order/1             - 주문 내용
[GET]     shop.1bin.kr/admin/order/1?type=update - 주문 내용
[PUT]     shop.1bin.kr/admin/order               - 주문 수정
[DELETE]  shop.1bin.kr/admin/order               - 주문 삭제

- 게시판 관리
[GET]     shop.1bin.kr/admin/binit?page=1  - 게시판 리스트/생성 화면
[POST]    shop.1bin.kr/admin/binit         - 게시판 생성
[PUT]     shop.1bin.kr/admin/binit         - 게시판 수정
[DELETE]  shop.1bin.kr/admin/binit         - 게시판 삭제

- 게시물 관리
[GET]     shop.1bin.kr/admin/board?page=1        - 게시판 리스트
[GET]     shop.1bin.kr/admin/board/1             - 게시판 내용
[GET]     shop.1bin.kr/admin/board/1?type=update - 게시판 수정 화면
[POST]    shop.1bin.kr/admin/board               - 게시판 생성
[PUT]     shop.1bin.kr/admin/board               - 게시판 수정
[DELETE]  shop.1bin.kr/admin/board/1             - 게시판 삭제

shop.1bin.kr/api/
[GET] shop.1bin.kr/api/verify
*/
