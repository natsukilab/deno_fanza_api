import { FanzaAPI } from "./mod.ts";
var api = {
    apiid: '',
    affiliateid: ''
}
var fanza = new FanzaAPI(api);
var requestOptions = {
    site:'FANZA',
    service:'digital',
    floor:'videoc',
    article:'genre',
    article_id:'1018'
}
var data: string[] = await fanza.ItemList(requestOptions);
console.log(data);