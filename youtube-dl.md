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
```
Username: nguoisechia.com@binnary.com
Pass: nguoisechia
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
```

# Pluralsight
```
youtube-dl --username USERNAME_OR_EMAIL --password PASSWORD --write-sub "https://app.pluralsight.com/library/courses/java-ee-7-fundamentals" -o "/home/xinhnguyen/Videos/%(playlist)s/%(chapter_number)s. %(chapter)s/%(playlist_index)s. %(title)s.%(ext)s"
```