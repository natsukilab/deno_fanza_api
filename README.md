# deno-fanzaapi

FANZA Affiliate API for Deno

## How to use

```js
// from denoland (unnecessary but do as you wish)
import { FanzaAPI } from "https://deno.land/x/fanzaapi/mod.ts";
var api = {
 apiid: '',
 affiliateid: ''
}
var fanza = new FanzaAPI(api);

//API request options (See request parameters)
var requestOptions = {
site:'FANZA',
service:'digital',
hits:40
}

//Request Send
fanza.ItemList(requestOptions).then((data) => {
//data contains response data
data.result.items.forEach((item) =>{
console.log(item.imageURL.large)
})
})
```

```js
fanza.FloorList(requestOptions).then((data) => {
//data contains response data
})

fanza.ActressSearch(requestOptions).then((data) => {
//data contains response data
})

fanza.GenreSearch(requestOptions).then((data) => {
//data contains response data
})

fanza.MakerSearch(requestOptions).then((data) => {
//data contains response data
})

fanza.SeriesSearch(requestOptions).then((data) => {
//data contains response data
})

fanza.AuthorSearch(requestOptions).then((data) => {
//data contains response data
})

//example get mp4 url
fanza.getMp4URL(data.result.items[0].sampleMovieURL.size_720_480).then((data)=>{
//data contains mp4URL
})
```