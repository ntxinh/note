```
--write-sub: Write subtitle file
--write-auto-sub : (Youtube only)
--all-subs : Download all the available subtitles for the video
--list-subs :

-u
--username
-p
--password

--playlist-start
--playlist-end
--playlist-items

-a
--batch-file

-o
--output

--skip-download

--sleep-interval

-f
--format
```


```
youtube-dl [link_video]

youtube-dl -a [filename]

youtube-dl -s [link_playlist]
youtube-dl --playlist-start=2 --playlist-end=3 -s [link_playlist]

man youtube-dl
```

```
https://rg3.github.io/youtube-dl/supportedsites.html
https://github.com/rg3/youtube-dl/blob/master/README.md#output-template

$ youtube-dl --get-filename -o '%(title)s.%(ext)s' BaW_jenozKc
youtube-dl test video ''_ä↭𝕐.mp4    # All kinds of weird characters

$ youtube-dl --get-filename -o '%(title)s.%(ext)s' BaW_jenozKc --restrict-filenames
youtube-dl_test_video_.mp4          # A simple file name

# Download YouTube playlist videos in separate directory indexed by video order in a playlist
$ youtube-dl -o '%(playlist)s/%(playlist_index)s - %(title)s.%(ext)s' https://www.youtube.com/playlist?list=PLwiyx1dc3P2JR9N8gQaQN_BCvlSlap7re

# Download all playlists of YouTube channel/user keeping each playlist in separate directory:
$ youtube-dl -o '%(uploader)s/%(playlist)s/%(playlist_index)s - %(title)s.%(ext)s' https://www.youtube.com/user/TheLinuxFoundation/playlists

# Download Udemy course keeping each chapter in separate directory under MyVideos directory in your home
$ youtube-dl -u user -p password -o '~/MyVideos/%(playlist)s/%(chapter_number)s - %(chapter)s/%(title)s.%(ext)s' https://www.udemy.com/java-tutorial/

# Download entire series season keeping each series and each season in separate directory under C:/MyVideos
$ youtube-dl -o "C:/MyVideos/%(series)s/%(season_number)s - %(season)s/%(episode_number)s - %(episode)s.%(ext)s" http://videomore.ru/kino_v_detalayah/5_sezon/367617

# Stream the video being downloaded to stdout
$ youtube-dl -o - BaW_jenozKc
```

# TeamTreeHouse

- Username: nguoisechia.com@binnary.com
- Pass: nguoisechia

- Username: pome@topikt.com
- Pass: 123456
- Creadit Cards: 5465264305704545|06|2021|301

# Skillshare
- https://www.skillshare.com/
- Step like TeamTreeHouse

- Register with https://temp-mail.org
- Pick your plain: Pro plan - Start your free 7 days trial
- Your billing cycle: Annual
- Fill your payment information from https://bin.isecurity.pw/ or http://fast-bin.com/ (BIN: 5465264305xxxxx5 or 47721874xx38xx5x)


# Pluralsight
```
youtube-dl --username USERNAME_OR_EMAIL --password PASSWORD --write-sub "https://app.pluralsight.com/library/courses/java-ee-7-fundamentals" -o "/home/xinhnguyen/Videos/%(playlist)s/%(chapter_number)s. %(chapter)s/%(playlist_index)s. %(title)s.%(ext)s"
```

# Lynda:
```
// Register
Link Register: http://www.akronlibrary.org
-> Account -> Library Card -> Apply for an Online Library Card
-> https://catalog.akronlibrary.org/selfreg
Street Address: apt 2 7 th street
City: Arkon
Zip Code: 44223
Phone: http://www.fakenamegenerator.com
-> Follow instruction
-> Sign in with your organization portal
```

```
// Download:
https://chrome.google.com/webstore/detail/cookiestxt/njabckikapfpffapmjgojcnbfjonfjfg?utm_source=chrome-app-launcher-info-dialog
youtube-dl --cookies /home/xinhnguyen/Downloads/cookies.txt https://www.lynda.com/Java-tutorials/RESTful-Service-JAX-RS-2-0/574687-2.html --write-sub -o "/home/xinhnguyen/Videos/%(playlist)s/%(chapter_number)s. %(chapter)s/%(playlist_index)s. %(title)s.%(ext)s"
```

```
https://www.nypl.org/library-card

// Account
Account 1:
Library Card Number: 1506028
Library Card PIN: 1234

Account 2:
https://www.lynda.com/portal/patron?org=akronlibrary.org
ID: 1506467
PIN: 123456

Account 3:
https://www.lynda.com/portal/patron?org=akronlibrary.org&triedlogout=true
Library Card Number: 1503278
Library Card PIN: 12358

Account 4:
dclibrary.org
Your Customer ID:   21172023746052
Your PIN:   6909

21172023853239		PIN: 5322
```

// Use cookie
- 1. Install EditThisCookie Chrome Extension
```
https://chrome.google.com/webstore/detail/editthiscookie/fngmhnnpilhplaeedifhccceomclgfbg?hl=vi
```
- 2. Click Delete All -> Click Import and import cookie below
- 3. Refresh page and Enjoy
```json
[ 

{
"domain": ".lynda.com",
"expirationDate": 1564884739,
"hostOnly": false,
"httpOnly": false,
"name": "AMCV_4710C8A1547F36100A4C98BC%40AdobeOrg",
"path": "/",
"sameSite": "no_restriction",
"secure": false,
"session": false,
"storeId": "0",
"value": "1256414278%7CMCMID%7C90269194195602295967205694871742725182%7CMCAID%7CNONE%7CMCAAMLH-1502417539%7C9%7CMCAAMB-1502417539%7Chmk_Lq6TPIBMW925SPhw3Q",
"id": 1
},
{
"domain": ".lynda.com",
"expirationDate": 1817345557.777293,
"hostOnly": false,
"httpOnly": false,
"name": "LyndaLoginStatus",
"path": "/",
"sameSite": "no_restriction",
"secure": false,
"session": false,
"storeId": "0",
"value": "Member-Logged-In",
"id": 2
},
{
"domain": ".lynda.com",
"hostOnly": false,
"httpOnly": false,
"name": "s_cc",
"path": "/",
"sameSite": "no_restriction",
"secure": false,
"session": true,
"storeId": "0",
"value": "true",
"id": 3
},
{
"domain": ".lynda.com",
"hostOnly": false,
"httpOnly": false,
"name": "s_sq",
"path": "/",
"sameSite": "no_restriction",
"secure": false,
"session": true,
"storeId": "0",
"value": "%5B%5BB%5D%5D",
"id": 4
},
{
"domain": ".lynda.com",
"expirationDate": 1517714035.728669,
"hostOnly": false,
"httpOnly": true,
"name": "throttle-2b03d60a3a4380742663b5f4066e4d2a",
"path": "/",
"sameSite": "no_restriction",
"secure": false,
"session": false,
"storeId": "0",
"value": "1",
"id": 5
},
{
"domain": ".lynda.com",
"expirationDate": 1517713960.108501,
"hostOnly": false,
"httpOnly": true,
"name": "throttle-3ea95e1e1553b92066c9c01d438eec5e",
"path": "/",
"sameSite": "no_restriction",
"secure": false,
"session": false,
"storeId": "0",
"value": "1",
"id": 6
},
{
"domain": ".lynda.com",
"expirationDate": 1517714007.770569,
"hostOnly": false,
"httpOnly": true,
"name": "throttle-6d224299407bfb31a5838d5586143992",
"path": "/",
"sameSite": "no_restriction",
"secure": false,
"session": false,
"storeId": "0",
"value": "1",
"id": 7
},
{
"domain": ".lynda.com",
"expirationDate": 1517713957.313498,
"hostOnly": false,
"httpOnly": true,
"name": "throttle-81caf7c4bbc10c18b29b105cfcbcdbee",
"path": "/",
"sameSite": "no_restriction",
"secure": false,
"session": false,
"storeId": "0",
"value": "1",
"id": 8
},
{
"domain": ".lynda.com",
"expirationDate": 1517714007.770686,
"hostOnly": false,
"httpOnly": true,
"name": "throttle-a08346b1d77e5ed99edf7159d1d154d9",
"path": "/",
"sameSite": "no_restriction",
"secure": false,
"session": false,
"storeId": "0",
"value": "1",
"id": 9
},
{
"domain": ".lynda.com",
"expirationDate": 1517714007.770392,
"hostOnly": false,
"httpOnly": true,
"name": "throttle-a64030d4f0078f1211744e69b24c818f",
"path": "/",
"sameSite": "no_restriction",
"secure": false,
"session": false,
"storeId": "0",
"value": "1",
"id": 10
},
{
"domain": ".lynda.com",
"expirationDate": 1517713957.313603,
"hostOnly": false,
"httpOnly": true,
"name": "throttle-b8b1cb3ef236f57532c515db9614be44",
"path": "/",
"sameSite": "no_restriction",
"secure": false,
"session": false,
"storeId": "0",
"value": "1",
"id": 11
},
{
"domain": ".lynda.com",
"expirationDate": 1517713960.108429,
"hostOnly": false,
"httpOnly": true,
"name": "throttle-d3ebbd09ec7ecff8c4948ff79599614d",
"path": "/",
"sameSite": "no_restriction",
"secure": false,
"session": false,
"storeId": "0",
"value": "1",
"id": 12
},
{
"domain": ".lynda.com",
"expirationDate": 1533348837,
"hostOnly": false,
"httpOnly": false,
"name": "utag_main",
"path": "/",
"sameSite": "no_restriction",
"secure": false,
"session": false,
"storeId": "0",
"value": "v_id:015dab03c731001a5483964534dc05073001c06b00868$_sn:1$_ss:0$_pn:4%3Bexp-session$_st:1501814637489$ses_id:1501812737841%3Bexp-session",
"id": 13
},
{
"domain": "www.lynda.com",
"expirationDate": 1501899157.777094,
"hostOnly": true,
"httpOnly": false,
"name": "AspSessionIdCopy",
"path": "/",
"sameSite": "no_restriction",
"secure": false,
"session": false,
"storeId": "0",
"value": "6c1d28dd-f112-4e07-be2e-ebf8b37d4b87",
"id": 14
},
{
"domain": "www.lynda.com",
"expirationDate": 1564926589.208992,
"hostOnly": true,
"httpOnly": false,
"name": "bcookie",
"path": "/",
"sameSite": "no_restriction",
"secure": false,
"session": false,
"storeId": "0",
"value": "392c95160e264fafab7666257826e79c6fa1faa1f3c8404e95584e64b3329d33",
"id": 15
},
{
"domain": "www.lynda.com",
"expirationDate": 1504491238.613924,
"hostOnly": true,
"httpOnly": false,
"name": "litrk-srcveh",
"path": "/",
"sameSite": "no_restriction",
"secure": false,
"session": false,
"storeId": "0",
"value": "srcValue=re-other&vehValue=toptipstricks.com&prevSrc=&prevVeh=",
"id": 16
},
{
"domain": "www.lynda.com",
"expirationDate": 1817345557.777003,
"hostOnly": true,
"httpOnly": true,
"name": "LyndaAccess",
"path": "/",
"sameSite": "no_restriction",
"secure": false,
"session": false,
"storeId": "0",
"value": "LyndaAccess=8/3/2017 7:12:32 PM&p=0&data=1,8/19/2017,1,1008",
"id": 17
},
{
"domain": "www.lynda.com",
"expirationDate": 1501813139.614047,
"hostOnly": true,
"httpOnly": true,
"name": "NSC_tw5_xxx-iuuqt_wt",
"path": "/",
"sameSite": "no_restriction",
"secure": true,
"session": false,
"storeId": "0",
"value": "ffffffff096e9e5345525d5f4f58455e445a4a423661",
"id": 18
},
{
"domain": "www.lynda.com",
"expirationDate": 1533348759,
"hostOnly": true,
"httpOnly": false,
"name": "player",
"path": "/",
"sameSite": "no_restriction",
"secure": false,
"session": false,
"storeId": "0",
"value": "%7B%22volume%22%3A0.8%2C%22muted%22%3Afalse%7D",
"id": 19
},
{
"domain": "www.lynda.com",
"expirationDate": 1503540757.776633,
"hostOnly": true,
"httpOnly": false,
"name": "player_settings_0_2",
"path": "/",
"sameSite": "no_restriction",
"secure": false,
"session": false,
"storeId": "0",
"value": "player_type=2&video_format=1&cc_status=2&window_extra_height=148&volume_percentage=50&resolution=0&reset_on_plugins=True",
"id": 20
},
{
"domain": "www.lynda.com",
"expirationDate": 1503540757.31282,
"hostOnly": true,
"httpOnly": false,
"name": "player_settings_6521950_2",
"path": "/",
"sameSite": "no_restriction",
"secure": false,
"session": false,
"storeId": "0",
"value": "player_type=2&video_format=1&cc_status=2&window_extra_height=148&volume_percentage=50&resolution=0",
"id": 21
},
{
"domain": "www.lynda.com",
"hostOnly": true,
"httpOnly": false,
"name": "plugin_list",
"path": "/",
"sameSite": "no_restriction",
"secure": false,
"session": true,
"storeId": "0",
"value": "Flash",
"id": 22
},
{
"domain": "www.lynda.com",
"expirationDate": 253402300804.3959,
"hostOnly": true,
"httpOnly": false,
"name": "show-member-tour-cta",
"path": "/",
"sameSite": "no_restriction",
"secure": false,
"session": false,
"storeId": "0",
"value": "false",
"id": 23
},
{
"domain": "www.lynda.com",
"expirationDate": 1596507157.313703,
"hostOnly": true,
"httpOnly": false,
"name": "tcookie",
"path": "/",
"sameSite": "no_restriction",
"secure": false,
"session": false,
"storeId": "0",
"value": "60d51f0a-175d-4cbb-9856-5a1bfa6b5c23",
"id": 24
},
{
"domain": "www.lynda.com",
"expirationDate": 1533348757.77718,
"hostOnly": true,
"httpOnly": true,
"name": "token",
"path": "/",
"sameSite": "no_restriction",
"secure": true,
"session": false,
"storeId": "0",
"value": "6c1d28dd-f112-4e07-be2e-ebf8b37d4b87,a47ff6b84b8c376c7ebb557543a484bd,fSIhwIap6DHneWpjyP8rfCk3WeHod13E9BBlj5gdPwtPc5zEmiN/NPSgZNDDDQB2X9OgXBgLZKjCYezeVzNe0k/zgpDJutK+qtzMMlDsUlcPQl0RwlUVyQ1jumv/Awc1",
"id": 25
}
]
```

# Other Lynda cookie: 
- https://gist.github.com/sonlexqt/2468a92ed1abda086f75c2cfaff1592d
- https://gist.github.com/sonlexqt/26063c1b1272528d9a7ecb3591c41a87
