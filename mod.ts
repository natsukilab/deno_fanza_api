import axiod from "https://deno.land/x/axiod/mod.ts";
import { cheerio } from "https://deno.land/x/cheerio@1.0.7/mod.ts";

var fanzaApiId : string;
var fanzaAffiliateId : string;

export function FanzaAPI(_fanza){
    globalThis.fanzaApiId = _fanza.apiid;
    globalThis.fanzaAffiliateId = _fanza.affiliateid;
}

//ItemList
FanzaAPI.prototype.ItemList = function (_search) {
    var _base = `https://api.dmm.com/affiliate/v3/ItemList?api_id=${globalThis.fanzaApiId}&affiliate_id=${globalThis.fanzaAffiliateId}&site=${_search.site}`;
    if(_search.service !== undefined){
    _base += `&service=${_search.service}`;
    }
    if(_search.floor !== undefined){
    _base += `&floor=${_search.floor}`;
    }
    if(_search.hits !== undefined){
    _base += `&hits=${_search.hits}`;
    }
    if(_search.offset !== undefined){
    _base += `&offset=${_search.offset}`;
    }
    if(_search.sort !== undefined){
    _base += `&sort=${_search.sort}`;
    }
    if(_search.keyword !== undefined){
    _base += `&keyword=${_search.keyword}`;
    }
    if(_search.cid !== undefined){
    _base += `&cid=${_search.cid}`;
    }
    if(_search.article !== undefined){
    _base += `&article=${_search.article}`;
    }
    if(_search.article_id !== undefined){
    _base += `&article_id=${_search.article_id}`;
    }
    if(_search.gte_date !== undefined){
    _base += `&gte_date=${_search.gte_date}`;
    }
    if(_search.lte_date !== undefined){
    _base += `&lte_date=${_search.lte_date}`;
    }
    if(_search.mono_stock !== undefined){
    _base += `&mono_stock=${_search.mono_stock}`;
    }
    if(_search.output !== undefined){
    _base += `&output=${_search.output}`;
    }
    if(_search.callback !== undefined){
    _base += `&callback=${_search.callback}`;
    }
    var options = {
    url: _base,
    method: 'GET',
    json: true
    }
    return axiod({
    method: 'get',
    url: _base,
    responseType: 'json'
    })
    .then(function (response) {
    return response.data;
    })
    .catch(function (error) {
    console.log(error);
    return Promise.reject(error);
    });
    }
    
    //FloorList
    FanzaAPI.prototype.FloorList = function (_search,callback) {
    var _base = `https://api.dmm.com/affiliate/v3/FloorList?api_id=${globalThis.fanzaApiId}&affiliate_id=${globalThis.fanzaAffiliateId}`;
    if(_search.output !== undefined){
    _base += `&output=${_search.output}`;
    }
    if(_search.callback !== undefined){
    _base += `&callback=${_search.callback}`;
    }
    var options = {
    url: _base,
    method: 'GET',
    json: true
    }
    return axiod({
    method: 'get',
    url: _base,
    responseType: 'json'
    })
    .then(function (response) {
    return response.data;
    })
    .catch(function (error) {
    console.log(error);
    return Promise.reject(error);
    });
    }
    
    //ActressSearch
    FanzaAPI.prototype.ActressSearch = function (_search,callback) {
    var _base = `https://api.dmm.com/affiliate/v3/ActressSearch?api_id=${globalThis.fanzaApiId}&affiliate_id=${globalThis.fanzaAffiliateId}`;
    if(_search.initial !== undefined){
    _base += `&initial=${_search.initial}`;
    }
    if(_search.actress_id !== undefined){
    _base += `&actress_id=${_search.actress_id}`;
    }
    if(_search.keyword !== undefined){
    _base += `&keyword=${_search.keyword}`;
    }
    if(_search.gte_bust !== undefined){
    _base += `&gte_bust=${_search.gte_bust}`;
    }
    if(_search.lte_bust !== undefined){
    _base += `&lte_bust=${_search.lte_bust}`;
    }
    if(_search.gte_waist !== undefined){
    _base += `&gte_waist=${_search.gte_waist}`;
    }
    if(_search.lte_waist !== undefined){
    _base += `&lte_waist=${_search.lte_waist}`;
    }
    if(_search.gte_hip !== undefined){
    _base += `&gte_hip=${_search.gte_hip}`;
    }
    if(_search.lte_hip !== undefined){
    _base += `&lte_hip=${_search.lte_hip}`;
    }
    if(_search.gte_height !== undefined){
    _base += `&gte_height=${_search.gte_height}`;
    }
    if(_search.lte_height !== undefined){
    _base += `&lte_height=${_search.lte_height}`;
    }
    if(_search.gte_birshday !== undefined){
    _base += `&gte_birshday=${_search.gte_birshday}`;
    }
    if(_search.lte_birshday !== undefined){
    _base += `&lte_birshday=${_search.lte_birshday}`;
    }
    if(_search.hits !== undefined){
    _base += `&hits=${_search.hits}`;
    }
    if(_search.offset !== undefined){
    _base += `&offset=${_search.offset}`;
    }
    if(_search.sort !== undefined){
    _base += `&sort=${_search.sort}`;
    }
    if(_search.output !== undefined){
    _base += `&output=${_search.output}`;
    }
    if(_search.callback !== undefined){
    _base += `&callback=${_search.callback}`;
    }
    var options = {
    url: _base,
    method: 'GET',
    json: true
    }
    return axiod({
    method: 'get',
    url: _base,
    responseType: 'json'
    })
    .then(function (response) {
    return response.data;
    })
    .catch(function (error) {
    console.log(error);
    return Promise.reject(error);
    });
    }
    
    //GenreSearch
    FanzaAPI.prototype.GenreSearch = function (_search,callback) {
    var _base = `https://api.dmm.com/affiliate/v3/GenreSearch?api_id=${globalThis.fanzaApiId}&affiliate_id=${globalThis.fanzaAffiliateId}&floor_id=${search.floor_id}`;
    if(_search.initial !== undefined){
    _base += `&initial=${_search.initial}`;
    }
    if(_search.hits !== undefined){
    _base += `&hits=${_search.hits}`;
    }
    if(_search.offset !== undefined){
    _base += `&offset=${_search.offset}`;
    }
    if(_search.output !== undefined){
    _base += `&output=${_search.output}`;
    }
    if(_search.callback !== undefined){
    _base += `&callback=${_search.callback}`;
    }
    var options = {
    url: _base,
    method: 'GET',
    json: true
    }
    return axiod({
    method: 'get',
    url: _base,
    responseType: 'json'
    })
    .then(function (response) {
    return response.data;
    })
    .catch(function (error) {
    console.log(error);
    return Promise.reject(error);
    });
    }
    
    //MakerSearch
    FanzaAPI.prototype.MakerSearch = function (_search,callback) {
    var _base = `https://api.dmm.com/affiliate/v3/MakerSearch?api_id=${globalThis.fanzaApiId}&affiliate_id=${globalThis.fanzaAffiliateId}&floor_id=${search.floor_id}`;
    if(_search.initial !== undefined){
    _base += `&initial=${_search.initial}`;
    }
    if(_search.hits !== undefined){
    _base += `&hits=${_search.hits}`;
    }
    if(_search.offset !== undefined){
    _base += `&offset=${_search.offset}`;
    }
    if(_search.output !== undefined){
    _base += `&output=${_search.output}`;
    }
    if(_search.callback !== undefined){
    _base += `&callback=${_search.callback}`;
    }
    var options = {
    url: _base,
    method: 'GET',
    json: true
    }
    return axiod({
    method: 'get',
    url: _base,
    responseType: 'json'
    })
    .then(function (response) {
    return response.data;
    })
    .catch(function (error) {
    console.log(error);
    return Promise.reject(error);
    });
    }
    
    //SeriesSearch
    FanzaAPI.prototype.SeriesSearch = function (_search,callback) {
    var _base = `https://api.dmm.com/affiliate/v3/SeriesSearch?api_id=${globalThis.fanzaApiId}&affiliate_id=${globalThis.fanzaAffiliateId}&floor_id=${search.floor_id}`;
    if(_search.initial !== undefined){
    _base += `&initial=${_search.initial}`;
    }
    if(_search.hits !== undefined){
    _base += `&hits=${_search.hits}`;
    }
    if(_search.offset !== undefined){
    _base += `&offset=${_search.offset}`;
    }
    if(_search.output !== undefined){
    _base += `&output=${_search.output}`;
    }
    if(_search.callback !== undefined){
    _base += `&callback=${_search.callback}`;
    }
    var options = {
    url: _base,
    method: 'GET',
    json: true
    }
    return axiod({
    method: 'get',
    url: _base,
    responseType: 'json'
    })
    .then(function (response) {
    return response.data;
    })
    .catch(function (error) {
    console.log(error);
    return Promise.reject(error);
    });
    }
    
    //AuthorSearch
    FanzaAPI.prototype.AuthorSearch = function (_search) {
    var _base = `https://api.dmm.com/affiliate/v3/AuthorSearch?api_id=${globalThis.fanzaApiId}&affiliate_id=${globalThis.fanzaAffiliateId}&floor_id=${search.floor_id}`;
    if(_search.initial !== undefined){
    _base += `&initial=${_search.initial}`;
    }
    if(_search.hits !== undefined){
    _base += `&hits=${_search.hits}`;
    }
    if(_search.offset !== undefined){
    _base += `&offset=${_search.offset}`;
    }
    if(_search.output !== undefined){
    _base += `&output=${_search.output}`;
    }
    if(_search.callback !== undefined){
    _base += `&callback=${_search.callback}`;
    }
    var options = {
    url: _base,
    method: 'GET',
    json: true
    }
    return axiod({
    method: 'get',
    url: _base,
    responseType: 'json'
    })
    .then(function (response) {
    return response.data;
    })
    .catch(function (error) {
    console.log(error);
    return Promise.reject(error);
    });
    }
    
    //getMp4URL
    FanzaAPI.prototype.getMp4URL = function (__cid : string) {
    var __mp4 : string = `https://cc3001.dmm.co.jp/litevideo/freepv/${__cid.substr( 0, 1 )}/${__cid.substr( 0, 3 )}/${__cid}/${__cid}_dmb_w.mp4`;
    return axiod.get(__mp4).then((response2) => {
    return __mp4;
    })
    .catch(function (error) {
    return null;
    return Promise.reject(error);
    });
    }
    
    //getVRSample
    FanzaAPI.prototype.getVRSample = function (__cid : string) {
    var __url : string = `https://www.dmm.co.jp/digital/-/vr-sample-player/=/cid=${__cid}/`;
    return axiod({
    url: __url,
    method: "get",
    headers:{
    Cookie: "age_check_done=1;"
    }
    })
    .then(function (response) {
    var __video = response.data.match(/\/\/cc3001.dmm.co.jp\/vrsample\/(.*?).mp4/);
    if(__video !== null){
    ___video = __video[0];
    }else{
    ___video = __video;
    }
    return ___video;
    })
    .catch(function (error) {
    console.log(error);
    return Promise.reject(error);
    });
    }
    
    //getDescription
    FanzaAPI.prototype.getDescription = function (__url) {
    return axiod({
    url: __url,
    method: "get",
    responseType : 'document',
    headers:{
    Cookie: "age_check_done=1;"
    }
    })
    .then(function (response) {
    const html = response.data;
    const $ = cheerio.load(html);
    var _desc = "";
    $('meta[name=description]', html).each((item, element) => {
    var desc = $(element).attr("content");
    _desc = desc.replace("【FANZA(ファンザ)】 ","").replace("【FANZA(ファンザ)】","");
    });
    return _desc;
    })
    .catch(function (error) {
    console.log(error);
    return Promise.reject(error);
    });
    }
    
    //getSampleImage
    FanzaAPI.prototype.getSampleImage = function (__url) {
    return new Promise((resolve, reject) => {
    axiod({
    url: __url,
    method: "get",
    responseType : 'document',
    headers:{
    Cookie: "age_check_done=1;"
    }
    })
    .then(function (response) {
    const html = response.data;
    const $ = cheerio.load(html);
    var _sampleImg = [];
    $('a[name=sample-image]', html).each((item, element) => {
    var sampleImg = $(element).find("img").attr("src");
    _sampleImg.push(sampleImg)
    });
    resolve(_sampleImg);
    })
    .catch(function (error) {
        reject(error);
    });
    });
    }
    
    FanzaAPI.prototype.test = function(test){
    getDescription(test).then((desc) => {
        console.log(desc);
    })
    }