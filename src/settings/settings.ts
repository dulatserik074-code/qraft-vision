import type{AppSettings}from'../types';
const defaults:AppSettings={speechEnabled:true,speechRate:1,frequency:1,sensitivity:.6,cooldownSeconds:5,hapticsEnabled:true,language:'ru-RU',automaticDescription:true,aiIntervalSeconds:3,detailLevel:'normal',localDetectionEnabled:true,aiAnalysisEnabled:true,voiceURI:'',debugEnabled:false};
export function loadSettings():AppSettings{try{return{...defaults,...JSON.parse(localStorage.getItem('qraft-settings')??'{}')}}catch{return{...defaults}}}
export function saveSettings(s:AppSettings){localStorage.setItem('qraft-settings',JSON.stringify(s))}
