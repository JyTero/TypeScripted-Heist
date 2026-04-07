import { CharcterStatTypeEnum } from "../../Assets/DataJsons/CharcterStatTypeEnum";
import { EffectTypeEnumEnum } from "../../Assets/DataJsons/EffectTypeEnumEnum";
import { PersoanlityAxisEnumH } from "../../Assets/PersonalityAxisEnumHandmade";
import { TraitsEnumH } from "../../Assets/TraitsEnumHandmade";
import { AlertManager } from "../AlertManager";
import { Sprite } from "../Canvas/Sprite";
import { ItemBaseData } from "../DataTypes/ItemDataTypes";
import { ExplorationMenuItemDataType } from "../DataTypes/MenuItemDataType";
import { SpriteData } from "../DataTypes/SpriteLocationDataType";
import { Effect } from "../Effects/EffectBase";
import { StringChangedListner } from "../EventListeners";
import { AlertManagerInstance, CanvasGraphicsInstance, IsDebug } from "../MainPageInitialisation";
import { SceneBase } from "../Scenes/SceneBase";
import { CharacterStat } from "./Character/CharacterStat";
import { PersonalityAxis } from "./Character/PersonalityAxis";
import { Healer_Trait, Trait } from "./Character/Trait";

export class ItemBase {
    protected itemName: string;
    public get ItemName(): string {
        return this.itemName;
    }

    public ItemSprite: Sprite;
    public Health: CharacterStat;

    public ItemLoadingReady: boolean = false;

    private activeEffects: Effect[];

    //private objectStats:{[key:CharacterStatTypes]:CharacterStat}; 
    private objectStats: Partial<Record<CharcterStatTypeEnum, CharacterStat>> = {};

    private itemPersonalityAxes: Partial<Record<PersoanlityAxisEnumH, PersonalityAxis>> = {};
    private itemTraits: Trait[] = [];

    private onNameChangeSubscribers: StringChangedListner[] = [];

    public parentScene: SceneBase;

    private hasMenuItems: boolean = true;
    public get HasMenuItems(): boolean {
        return this.hasMenuItems;
    }
    private itemMenuItems: ExplorationMenuItemDataType[] = [];
    public get ItemMenuItems(): ExplorationMenuItemDataType[] {
        return this.itemMenuItems;
    }

    private devName:string;
    public get DevName():string{
        return this.devName;
    }

    constructor(itemData: ItemBaseData) {
        this.itemName = itemData.ItemName;
        this.devName = itemData.DataDevName;
        this.Health = new CharacterStat("Health", itemData.ItemMaxHP, itemData.ItemMaxHP, CharcterStatTypeEnum.Health, this);
        if (itemData.ItemSpriteData != undefined)
            this.LoadItemImage(itemData.ItemSpriteData);
        this.activeEffects = [];
        if (itemData.ItemSceneMenuItems == undefined)
            this.hasMenuItems = false;
        else
            this.itemMenuItems = itemData.ItemSceneMenuItems;
    }

    public AddTrait(traitEnum: TraitsEnumH) {
        switch (traitEnum) {
            case TraitsEnumH.Default:
                console.log("Tried to add DEFAULT TRAIT for " + this.ItemName);
                break;
            case TraitsEnumH.Healer:
                const newTrait = new Healer_Trait();
                this.InserTraitToCharacter(newTrait);
                break;
            case TraitsEnumH.Reckless:
            //stuff
            default:
                console.log("Tried to ad UNKNOWN TRAITT TYPE for " + this.ItemName);


        }
    }
    private InserTraitToCharacter(trait: Trait) {
        if (IsDebug)
            console.log(`${trait.TraitName} has been added to ${this.ItemName}`);
        this.itemTraits.push(trait);
    }
    public GetTraits(): Trait[] {
        return this.itemTraits;
    }

    protected AddSceneSpesificMenuItemsHandmade(){

    }

    public async ReceiveEffect(effect: Effect) {
        this.activeEffects.push(effect);
        // await AlertManager.Instance.WriteAlertStorePrevious(`${this.ItemName} received effect ${effect.EffectName}`);
    }

    public RunOnceTurnEffects() {
        var debug = `Running OT effects for ${this.ItemName} (`;
        this.activeEffects.forEach(effect => {
            debug += `${effect.EffectName}, ${effect.EffectDuration}/${effect.EffectRemainingTurns} | `
            effect.TriggerOTEffect(this);
        });
        if (IsDebug)
            console.log(debug);
    }
    public ApplyDamageEffect(effect: Effect) {
        const targetStat = this.GetStat(effect.GetTargetStat())
    }

    public async RemoveEffect(effect: Effect) {
        const i = this.activeEffects.indexOf(effect);
        this.activeEffects.splice(i, 1);
        await AlertManagerInstance.WriteAlertStorePrevious(`${this.ItemName} no longer has OT  effect ${effect.EffectName}`);
    }

    public GetStat(key: CharcterStatTypeEnum): CharacterStat | undefined {
        // console.log(key, typeof key);
        // console.log(Object.keys(this.objectStats));
        return this.objectStats[key];
    }

    public AddStatToDictionary(key: CharcterStatTypeEnum, stat: CharacterStat) {
        if (key in this.objectStats) {

            if (IsDebug)
                console.log("NOTE: " + this.ItemName + " already contains a " + key.toString() + " type stat" + "| " + this.objectStats[key]?.StatName + " vs " + stat.StatName);
        }
        else {
            this.objectStats[key] = stat;
        }
    }

    public AddPersonalityAxisToDictionary(key: PersoanlityAxisEnumH, axis: PersonalityAxis) {
        if (key in this.itemPersonalityAxes)
            if (IsDebug)
                console.log("NOTE: " + this.ItemName + " already contains a " + key.toString() + " type stat" + "| " + this.itemPersonalityAxes[key]?.axisName + " vs " + axis.axisName);
            else {
                this.itemPersonalityAxes[key] = axis;
            }
    }
    public GetPersonalityAxes(): PersonalityAxis[] {
        var personalityAxis: PersonalityAxis[] = [];
        for (var axis of Object.values(this.itemPersonalityAxes)) {
            personalityAxis.push(axis);
        }

        return personalityAxis;
    }

    protected LoadItemImage(spriteData: SpriteData) {
        const image = new Image();
        const imgPath = `./src/Assets/Img/character/${spriteData.Sprite}`; //TODO: This needs to change to look for different folders with different sprite users (character, item, UI)
        image.src = imgPath;

        this.ItemSprite = new Sprite();
        image.onload = () => {
            this.ItemSprite.SetSpriteImage(image);
            if (IsDebug)
                console.log("Loaded " + this.ItemName + "'s image");

            //this.CharacterSprite.SetSpritePosScaleDataValues(characterData.SpriteDefaultXpos, characterData.SpriteDefaulyYpos, characterData.SpriteDefaultXScale, characterData.SpriteDefaultYScale);
            // this.ItemSprite.SpritePosScaleData = spriteData.LocationData;
            this.ItemLoadingReady = true;

        }
        image.onerror = () => {
            console.error("Failed to load " + this.ItemName + "'s image!", {
                src: image.src,
            });
        };
    }

    public SubscribeToNameChange(listener: StringChangedListner) {
        this.onNameChangeSubscribers.push(listener);
    }

    public DestroySelf() {
        //CanvasGraphicsInstance.RemoveSpriteFromList(this.ItemSprite);
        if (this.parentScene != undefined)
            this.parentScene.RemoveSceneItem(this);
    }
}