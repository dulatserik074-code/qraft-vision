const STOP=new Set(['и','в','на','с','со','перед','вами','справа','слева','рядом','стоит','находится','виден','видна','видны','есть']);
export function normalizeDescription(value:string){return value.toLocaleLowerCase('ru-RU').replace(/ё/g,'е').replace(/[^a-zа-я0-9\s]/gi,' ').split(/\s+/).filter(word=>word.length>1&&!STOP.has(word)).map(stem).filter(Boolean)}
function stem(word:string){return word.replace(/(ами|ями|ого|ему|ими|ий|ый|ая|яя|ое|ее|ые|ие|ов|ев|ам|ям|ах|ях|ом|ем|ы|и|а|я|у|ю|е)$/,'')}
export function textSimilarity(a:string,b:string){const left=new Set(normalizeDescription(a)),right=new Set(normalizeDescription(b));if(!left.size&&!right.size)return 1;if(!left.size||!right.size)return 0;let common=0;for(const word of left)if(right.has(word))common++;return common/(left.size+right.size-common)}
export function isDangerDescription(text:string){return/(осторожно|опасн|лестниц|ступен|бордюр|препятств|автомобил.{0,20}(вперед|близ)|машин.{0,20}(вперед|близ))/i.test(text)}
