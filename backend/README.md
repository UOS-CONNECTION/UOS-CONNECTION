# UOS-CONNECTION BACKEND

## .env 파일 작성

```shell
DB_HOST: host
DB_PORT: port
DB_USERNAME: name
DB_PASSWORD: password
DB_DATABASENAME: database_name
```

## Database 구성

MySQL 데이터베이스를 생성한 후 다음 쿼리를 실행시켜주세요.

```sql
  create table user (
    _id bigint auto_increment,
    email varchar(255) not null,
    pwd varchar(255) not null,
    img varchar(255) null,
    reported_cnt int null,
    manner_score float null,
    self_desc varchar(255) null,
    favorite_post varchar(255) null,
    user_info_id bigint foreign key,
    chat_id bigint foreign key,
    updated_at timestamp null,
    created_at timestamp null,
    constraint user__id_uindex
        unique (_id)
  );

  alter table user
    add primary key (_id);

  create table user_info
  (
    _id bigint auto_increment,
    proved_at varchar(255) null,
    share_cnt int null,
    location varchar(255) null,
    contact_time varchar(255) null,
    user_id bigint foreign key,
    constraint user_info__id_uindex
        unique (_id)
  );

  alter table user_info
    add primary key (_id);

  create table post
  (
    _id bigint auto_increment,
    title varchar(255) null,
    content varchar(255) null,
    img varchar(255) null,
    label varchar(255) null,
    user_id bigint foreign key,
    updated_at timestamp null,
    created_at timestamp null,
  );

  alter table post
    add primary key (_id);

  create table chat
  (
    _id bigint auto_increment,
    unwatched int null,
    user_id bigint foreign key,
    chat_id bigint foreign key,
    updated_at timestamp null,
    created_at timestamp null,
    constraint chat__id_uindex
        unique (_id)
  );

  alter table chat
    add primary key (_id);

  create table chat_message
  (
    _id bigint auto_increment,
    content varchar(255) not null,
    chat_room bigint foreign key,
    created_at timestamp null
    constraint chat__id_uindex
        unique (_id)
  );

  alter table chat_message
    add primary key (_id);
```

로컬에서 `.env`파일을 백엔드 루트 디렉토리에 추가하고, 위와 같은 형태로 채워야 합니다.
