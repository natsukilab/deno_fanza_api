import { FanzaAPI } from "./mod.ts";
var api = {
    apiid: 'bNKvmKPuTDunaEwC6GAP',
    affiliateid: 'utamita-992'
}
var fanza = new FanzaAPI(api);
var requestOptions: string[] = {
    site:'FANZA',
    service:'digital',
    cid:`smus014`
}
var data: string[] = await fanza.ItemList(requestOptions);
var mp4: string = await fanza.getMp4URL(data.result.items[0].product_id);
console.log(mp4)