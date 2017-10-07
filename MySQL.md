# Create db from console
create database vsys default character set utf8 default collate utf8_general_ci;

# Excute file sql from console
Method 1: From MYSQL
```
shell> mysql -u root -p
mysql> use vsys;
mysql> source /home/xinhnguyen/Documents/GitHub/TinTanSoft_VSYS/documents/Cities.sql;
```
Method 2: From SHELL
```
shell> mysql -u root -p vsys < documents/Cities.sql
```
# DELETE ALL DATA AND RESET INDEX ID
TRUNCATE vsys.cities

# CUSTOM INDEX ID FOR NEXT ROW
ALTER TABLE vsys.cities AUTO_INCREMENT=3000

# Relationship SQL
- There is another explanation from the real world:
+ A book belongs to an owner, and an owner can own multiple books. But the book can exist also without the owner and it can change the owner. The relationship between a book and an owner is a non-identifying relationship.
+ A book however is written by an author, and the author could have written multiple books. But the book needs to be written by an author it cannot exist without an author. Therefore the relationship between the book and the author is an identifying relationship.

# Drop all table ignore foreign key
```
SET FOREIGN_KEY_CHECKS = 0;
SET @tables = NULL;
SELECT GROUP_CONCAT(table_schema, '.', table_name) INTO @tables
  FROM information_schema.tables
  WHERE table_schema = 'tech_bridge_market'; -- specify DB name here.

SET @tables = CONCAT('DROP TABLE ', @tables);
PREPARE stmt FROM @tables;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;
SET FOREIGN_KEY_CHECKS = 1;
```