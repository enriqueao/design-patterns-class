-- migrate:up
CREATE SEQUENCE seq_user_id
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
CREATE TABLE user (
	usr_id int8 NOT NULL DEFAULT nextval('seq_user_id'::regclass),
	usr_name varchar(150) NULL,
	usr_description varchar(100) NULL,
	usr_code varchar(50) NOT NULL,
	usr_creation_date timestamp NOT NULL DEFAULT now(),
	usr_update_date timestamp NOT NULL DEFAULT now(),
	usr_delete_date timestamp NULL,
	CONSTRAINT pk_usr_id PRIMARY KEY (usr_id)
);
COMMENT ON COLUMN "user"."usr_id" IS 'This column represents the id of the entity. It composes the primary key of the table.';
CREATE INDEX usr_code_idx ON user USING btree (usr_code);
CREATE INDEX usr_delete_date_idx ON user USING btree (usr_delete_date);

-- migrate:down
DROP SEQUENCE seq_user_id;
ALTER TABLE "user" DROP CONSTRAINT "pk_usr_id";
DROP INDEX "usr_code_idx";
DROP INDEX "usr_delete_date_idx";
DROP TABLE "user";


