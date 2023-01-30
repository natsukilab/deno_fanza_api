import { FanzaAPI } from "./mod.ts";
var api = {
 apiid: 'bNKvmKPuTDunaEwC6GAP',
 affiliateid: 'utamita-992'
}
var fanza = new FanzaAPI(api);
fanza.getMp4URL(`oreco169`).then((mp4) => {
    console.log(mp4);
})