```
composer create-project laravel/laravel project-name 5.1.*

rm -f database/migration/...
rm -f app/User.php

php artisan help ...

--MODEL
php artisan make:model Product

php artisan make:model Product -m (Tạo model và migration)

--MIGRATION
php artisan make:migration create_products_table --create=products

php artisan migrate

php artisan migrate:rollback

php artisan migrate:reset (rollback all)

php artisan migrate:refresh (rollback all & migrate)

--SEEDER
php artisan make:seeder ProductTableSeeder

php artisan db:seed (phai code no trong DatabaseSeeder.php)

php artisan db:seed --class=ProductTableSeeder (Ko can code no trong DatabaseSeeder.php)

--SERVER

php artisan serve --host:192.160.0.115 (port 8000)

php artisan serve --port=8080

php -S localhost:8888 -t public

--REQUEST
php artisan make:request ArticleFormRequest

--CONTROLLER

php artisan make:controller ProductController



vendor/bin/phpunit

php artisan route:list

php artisan tinker


--Phan trang

product::paginate(9)

product::SimplePaginate(9)

carbon laravel : xu ly ngay thang

--Tim ung dung dang dung port 3306

netstat -an | findstr "3306"


--MYSQL
mysqld --initialize
mysqld install

start service
mysql -u root -p



--Install Laravel IDE Helper--

composer require barryvdh/laravel-ide-helper

After updating composer, add the service provider to the providers array in config/app.php
Barryvdh\LaravelIdeHelper\IdeHelperServiceProvider::class,

php artisan clear-compiled
php artisan ide-helper:generate
php artisan optimize

You can configure your composer.json to do this after each commit:
"scripts":{
    "post-update-cmd": [
        "Illuminate\\Foundation\\ComposerScripts::postUpdate",
        "php artisan ide-helper:generate",
        "php artisan ide-helper:meta",
        "php artisan optimize"
    ]
},


-- Doctrine/dbal --
composer require doctrine/dbal --dev
php artisan vendor:publish
php artisan ide-helper:models --write

---
1. Install SublimeCodeIntel for Sublime Text
2. Install Laravel_IDE_Helper
----- Edit composer.json
----- Edit config/app.php
3. composer update
4. Restart Sublime Text
5. use Ctrl + Shift + Space


-- Open Project

1. .env
2. composer install & bower install
3. php artisan migrate
4. php artisan db:seed
5. php artisan key:generate
6. php artisan serve


-- ERROR
composer dump-autoload
php artisan make:model User -m

--Whoops
Homepage: https://github.com/filp/whoops
composer require filp/whoops
app/Exception/Handler.php

public function render($request, Exception $e)
    {
        if ($this->isHttpException($e))
        {
            return $this->renderHttpException($e);
        }

        if (config('app.debug'))
        {
            return $this->renderExceptionWithWhoops($e);
        }

        return parent::render($request, $e);
    }

    protected function renderExceptionWithWhoops(Exception $e)
    {
        $whoops = new \Whoops\Run;
        $whoops->pushHandler(new \Whoops\Handler\PrettyPageHandler);

        return new \Illuminate\Http\Response(
            $whoops->handleException($e),
            $e->getStatusCode(),
            $e->getHeaders()
        );
    }
```

# Send Email with Gmail

Sign-in & security -> Connected apps & sites -> Allow less secure apps: ON

https://accounts.google.com/b/0/UnlockCaptcha

gmail.com -> Settings -> forwarding & POP/IMAP -> ON IPOP & IMAP

Test:
```
php artisan tinker

Mail::send('welcome',[], function($message) { $message->to('nguyentrucxjnh@gmail.com')->subject('Testing email'); });
```

# Convert Collection to query
$collection->toSql();
