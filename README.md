# gimmiecookies showcase (symfony/react/sass)

responsive little cookie bakery

  - hover a window to have a look at our cookies
  - click the door to order a cookie
  - click on the sun and reach for the stars
  - you cannot order cookies at night
  - please don't use the mailbox

![cookie bakerie gif](https://media.giphy.com/media/3eRwlVErHTxNnagg6Q/giphy.gif)

## Installation

### requires PHP7 - Installation Debian 8 (Jessie)
```sh
$ sudo apt update
$ sudo apt install php7.2
$ sudo apt install php7.1-cli php7.1-common php7.1-curl php7.1-gd php7.1-json php7.1-mbstring php7.1-mysql php7.1-xml
```

### Installing dependencies
```sh
$ git clone https://github.com/oshell/gimmecookies.git
$ cd gimmecookies
$ composer install
$ cd client
$ npm install
$ npm start
```

## Running the app
### starting frontend (gimmecookies/client)
```sh
$ npm start
```

### vhost conf (\xampp\apache\conf\extra\httpd-vhosts.conf)
```sh
<VirtualHost *>
    DocumentRoot "/gimmecookies/public"
    ServerName oshell.local.cookies
	DirectoryIndex index.php
	<Directory "/gimmecookies/public">
  Options Indexes FollowSymLinks MultiViews
      AllowOverride all
      Order Deny,Allow
      Allow from all
      Require all granted
	</Directory>
</VirtualHost>
```

### hosts (C:\Windows\System32\drivers\etc\hosts)
```sh
127.0.0.1       oshell.local.cookies
```

### url base in App.js (gimmecookies/client/src/components/App/App.js)
