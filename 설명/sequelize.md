## Sequelize migration

```bash
sequelize migration:create --name'파일명'
# 그럼 파일 생김 그러고 수정할내용 넣고
# crateTable(table 만듬) -> addColumn(추가)

# UP 수정내용 업로드
sequelize db:migrate

# DOWN
sequelize db:migrate:undo
```

## 주의

1. 수정하고 직접 models에 수정 내용 올려야함
2. 할때 데이터가 날라가니 조심하고
3. 어쩔수 없을때 쓰는거고 너무 많이 쓰지말자
4. 작업 완료했으면 models 에 업뎃 시켜주자.
