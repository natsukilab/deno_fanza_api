# deno-fanzaapi

FANZA Affiliate API for Deno
https://affiliate.dmm.com/api/v3/itemlist.html

## How to use

```js
import { FanzaAPI } from "https://deno.land/x/fanzaapi/mod.ts";
var api = {
    apiid: '',//api_id
    affiliateid: ''//affiliate_id
}
var fanza = new FanzaAPI(api);

//API request options (See request parameters)
var requestOptions = {
site:'FANZA',
service:'digital',
hits:40
}

//Request Send
//data contains response data
var data: string[] = await fanza.ItemList(requestOptions);
```

```js
var data: string[] = await fanza.FloorList(requestOptions);

var data: string[] = await fanza.ActressSearch(requestOptions);

var data: string[] = await fanza.GenreSearch(requestOptions);

var data: string[] = await fanza.MakerSearch(requestOptions);

var data: string[] = await fanza.SeriesSearch(requestOptions);

var data: string[] = await fanza.AuthorSearch(requestOptions);

//example get mp4 url
var requestOptions = {
site:'FANZA',
service:'digital',
cid: 'sweet077'
}
var data: string[] = await fanza.ItemList(requestOptions);
var mp4URL: string = await fanza.getMp4URL(data.result.items[0].product_id);
```