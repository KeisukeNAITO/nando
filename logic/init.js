'use strict';

const { logger } = require('../lib/logger');
const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("./persistence/test.db");

logger.info('[INITIALIZE] database initialze');

db.run("create table if not exists t_service(service_name, registration_date, delete_flag)");
db.run("create table if not exists t_user(user_id, user_name, encrypted_password, user_permission, registration_date, delete_flag)");
db.run("create table if not exists t_group(group_id, group_name, owner_user_id, registration_date, delete_flag)");
db.run("create table if not exists t_user_group(group_id, user_id, registration_date, delete_flag)");
db.run("create table if not exists t_media(media_id, media_name, owner_user_id, scope, grop_id, media_size, media_category, media_path, registration_date, delete_flag)");
db.run("create table if not exists t_media_group(media_id, group_id, registration_date, delete_flag)");
db.run("create table if not exists t_tag(media_id, tag_name, registration_date, owner_user_id, delete_flag)");

db.run("create table if not exists m_scope(scope_id, scope_type)");
db.run("insert into members(scope_id, scope_type) values(?,?)", 0, "private");
db.run("insert into members(scope_id, scope_type) values(?,?)", 1, "group");
db.run("insert into members(scope_id, scope_type) values(?,?)", 2, "public");

db.close();
