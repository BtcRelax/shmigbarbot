[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/BtcRelax/shmigbarbot/)

# shmigbarbot
    Bot for service Shmig.bar

## Prepare config
    Before start you need to set environment variables
    Create file .env from default.env

```
cp default.env .env
```

## Start as daemon 

```
pm2 start npm --name "drug master bot" --log-date-format 'DD-MM HH:mm:ss.SSS' -- bot
```

## Set commands info to bot father:
echo - echo request
place_order - register new order
get_logs - get all what you said
clear_log - clear all your history
get_balance - getting balance
activate_kunacode - input kunacode after command, as a result of run youll see balance



## Good example with publishing to free hoster:
https://soshace.com/building-a-telegram-bot-with-node-js/

Sample:
https://www.digitalocean.com/community/tutorials/how-to-build-a-telegram-quotes-generator-bot-with-node-js-telegraf-jimp-and-pexels


https://levelup.gitconnected.com/creating-a-conversational-telegram-bot-in-node-js-with-a-finite-state-machine-and-async-await-ca44f03874f9


https://blog.devgenius.io/building-a-stock-price-bot-with-telegram-node-js-ccc2d335995c
