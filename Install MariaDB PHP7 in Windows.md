```
PHP7
- Extract to C:\php
- add "C:\php" Path
- add VCRUNTIME140.DLL to C:\php
- copy & php.ini-development to php.ini
- remove ";" {
	extension=php_bz2.dll
	extension=php_curl.dll
	extension=php_fileinfo.dll
	extension=php_gd2.dll
	extension=php_gettext.dll
	extension=php_mbstring.dll
	extension=php_exif.dll      ; Must be after mbstring as it depends on it
	extension=php_mysqli.dll
	extension=php_openssl.dll
	extension=php_pdo_mysql.dll
	extension=php_pdo_sqlite.dll
	extension=php_soap.dll
	extension=php_sqlite3.dll
}

MariaDB
- Install MSI
- Find service.msc
- Start MariaDB
- Folder save database: C:\Program Files\MariaDB 10.1\data
```