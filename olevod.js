// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match       http://www.olevod.com/*
// @grant        none
// @run-at document-start
// ==/UserScript==

var tom=setInterval(function(){
  window.ckstyle=function(){
const ck={
    cpath: '',
        language: '',
        flashvars: '',
        setup: '1,1,1,1,1,2,0,1,2,0,1,1,200,0,2,1,0,1,1,1,2,10,3,0,0,2,3000,0,0,1,0,1,1,1,1,1,1,250,0,90,0,0',
        pm_bg: '0x000000,100,230,180',
        mylogo: 'null',
        pm_mylogo: '1,1,-100,-55',
        logo: 'null',
        pm_logo: '0,0,40,20',
        control_rel: 'related.swf,/ckplayer/related.xml,0',
        control_pv: 'Preview.swf,105,2000',
        pm_repc: '',
        pm_spac: '|',
        pm_fpac: 'file->f',
        pm_advtime: '2,0,-110,10,0,300,0',
        pm_advstatus: '1,2,2,-200,-40',
        pm_advjp: '1,1,2,2,-100,-40',
        pm_padvc: '2,0,-10,-10',
        pm_advms: '2,2,-46,-56',
        pm_zip: '1,1,-20,-8,1,0,0',
        pm_advmarquee: '1,2,50,-60,50,18,0,0x000000,50,0,20,1,15,2000',
        advmarquee: escape(''),
        mainfuntion: '',
        flashplayer: '',
        calljs: 'ckplayer_status,ckadjump,playerstop,ckmarqueeadv',
        myweb: escape('9e560587a42e24347e4e82c4ca11c7f7,91Flv.com'),
        cpt_lights: '1',
        cpt_share: '/html/ckplayer/share.xml',
        cpt_subtitle_cn: '{font color="#FFFFFF" size="22" face="Microsoft YaHei,YaHei,Î¢ÈíÑÅºÚ,SimHei,ºÚÌå"}[$subtitle]{/font}',
        cpt_subtitle_en: '{font color="#FFDD00" size="22" face="Arial"}[$subtitle]{/font}',
        cpt_list: ckcpt()
    };
    return ck;
};
    if (window.ckstyle.logo==undefined)
  {
 clearInterval();
  }

},20);

