import { FanzaAPI } from "./mod.ts";
var api = {
 apiid: 'bNKvmKPuTDunaEwC6GAP',
 affiliateid: 'utamita-992'
}
var fanza = new FanzaAPI(api);
/*
const mp4_url = await fanza.getMp4URL(`oreco169`);
console.log(mp4_url);
*/
var requestOptions = {
    site:'FANZA',
    service:'digital',
    floor:'videoc',
    article:'genre',
    article_id:'1018'
}
var data = await fanza.ItemList(requestOptions);
console.log(data);