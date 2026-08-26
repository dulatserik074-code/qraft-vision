export type Direction='слева'|'впереди'|'справа';
export type Proximity='очень близко'|'близко'|'впереди'|'дальше';
export type Priority='low'|'medium'|'high';
export interface BoundingBox{x:number;y:number;width:number;height:number}
export interface Detection{id?:string;label:string;score:number;box:BoundingBox;direction:Direction;proximity:Proximity;priority:Priority}
export interface VisionProvider{readonly name:string;load():Promise<void>;detect(source:HTMLVideoElement|HTMLCanvasElement):Promise<Detection[]>;dispose():void}
export interface SceneDescriptionProvider{describe(detections:Detection[],text?:string):Promise<string>}
export type DetailLevel='short'|'normal'|'detailed';
export interface AiSceneResult{description:string;providerName:string;latencyMs:number;danger:boolean;textDetected:boolean}
export interface RemoteVisionProvider{readonly providerName:string;isAvailable():boolean;analyzeImage(image:Blob,detail:DetailLevel,signal?:AbortSignal):Promise<AiSceneResult>}
export interface DistanceProvider{readonly providerName:string;isAvailable():boolean;estimateDistance(detection:Detection):Promise<number|null>}
export interface AppSettings{speechEnabled:boolean;speechRate:number;frequency:number;sensitivity:number;cooldownSeconds:number;hapticsEnabled:boolean;language:string;automaticDescription:boolean;aiIntervalSeconds:number;detailLevel:DetailLevel;localDetectionEnabled:boolean;aiAnalysisEnabled:boolean;voiceURI:string;debugEnabled:boolean}
