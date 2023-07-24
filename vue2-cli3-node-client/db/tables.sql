CREATE TABLE "public"."ev_article_cate" (
  "id" varchar(255) COLLATE "pg_catalog"."default",
  "name" varchar(255) COLLATE "pg_catalog"."default",
  "alias" varchar(255) COLLATE "pg_catalog"."default",
  "is_delete" varchar(255) COLLATE "pg_catalog"."default"
)
;

ALTER TABLE "public"."ev_article_cate"
  OWNER TO "postgres";

CREATE TABLE "public"."ev_articles" (
  "id" varchar(64) COLLATE "pg_catalog"."default",
  "title" varchar(255) COLLATE "pg_catalog"."default",
  "content" text COLLATE "pg_catalog"."default",
  "cover_img" varchar(255) COLLATE "pg_catalog"."default",
  "pub_date" varchar(255) COLLATE "pg_catalog"."default",
  "state" varchar(255) COLLATE "pg_catalog"."default",
  "id_delete" varchar(255) COLLATE "pg_catalog"."default",
  "cate_id" varchar(255) COLLATE "pg_catalog"."default",
  "author_id" varchar(255) COLLATE "pg_catalog"."default"
)
;

ALTER TABLE "public"."ev_articles"
  OWNER TO "postgres";

CREATE TABLE "public"."ev_users" (
  "id" varchar(64) COLLATE "pg_catalog"."default" NOT NULL,
  "username" varchar(255) COLLATE "pg_catalog"."default",
  "password" varchar(255) COLLATE "pg_catalog"."default",
  "nickname" varchar(255) COLLATE "pg_catalog"."default",
  "email" varchar(255) COLLATE "pg_catalog"."default",
  "user_pic" text COLLATE "pg_catalog"."default",
  CONSTRAINT "user_pic_pkey" PRIMARY KEY ("id")
)
;

ALTER TABLE "public"."ev_users"
  OWNER TO "postgres";




