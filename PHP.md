# PHP treats NULL, false, 0, [], and the empty string as equal.
```
$a = ''; // false = 0 = [] = '' = NULL
if($a == NULL) {
echo 'is null';
}

or

$a = ''; // false = 0 = [] = '' = NULL
if(!$a) {
echo 'is null';
}
```

if you want check exaclly:
```
if($variable === NULL) {...}

or

if(is_null($variable)) {...}
```

# PHP 7 NEWS
```
---NEW---

--Type Declarations
float
int

--Operator
??  Coalesce (null)
<=> Spaceship (1, 0, -1)
... Spat (array)

--Anonymos Class

--Serialized - Unserialized

--session_start([
	'cookie_lifetime' => 3600,
	'read_and_close' => true
])

--Miscellaneous Features

--CHANGE---

Division by Zero
1/0 0/0 0%0

__construct()
```