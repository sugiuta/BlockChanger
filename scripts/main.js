import { ItemStack, world } from "@minecraft/server"
import config from "./config.js"

let playerList = [];
let beforeId;
let beforeData;
let selectedItemList;
let isSelectedItem = false;
let idList = [];
let dataList = [];
let count = 0;

class playerInfo {
    constructor (player, name) {
        this.player = player;
        this.name = name;
    }
}

// デバッグ用
world.events.beforeChat.subscribe(bcEvent => {
    if (bcEvent.message.startsWith("!debug")) {
        bcEvent.cancel = true;
        bcEvent.sender.runCommandAsync(`say DEBUG: PLAYERLIST:${playerList}`);
    }
});

// プレイヤー入室時のデータ取得
world.events.playerJoin.subscribe(pjEvent => {
    let player = new playerInfo(pjEvent.player, pjEvent.player.name);
    playerList.push(player);
});

// プレイヤー退室時のデータ削除
world.events.playerLeave.subscribe(plEvent => {
    for (let i = 0; i < playerList.length; i++) {
        let playerData = playerList[i];
        if (playerData.name == plEvent.playerName) {
            playerList.splice(i, 1);
            break;
        }
    }
});

// 指定のアイテムを使用した際にアイテムを変更する
world.events.itemUse.subscribe(useEvent => {
    const container = useEvent.source.getComponent("inventory").container;
    const hand = container.getItem(useEvent.source.selectedSlot);
    if (hand != undefined) {
        if (beforeId != hand.typeId) { // 前回とアイテム名が違う場合
            setItemInfo(useEvent.source, hand);
        } else { // 前回とアイテム名が同じ場合
            if (beforeData == hand.data && !isSelectedItem) return;
            setItemInfo(useEvent.source, hand);
        }
    } else { // 何も持っていない場合
        if (beforeId == "empty_data") return;
        beforeId = "empty_data";
        isSelectedItem = false;
    }

});

// アイテム情報の取得
function setItemInfo (p, h) {
    isSelectedItem = false;
    beforeId = h.typeId;
    beforeData = h.data;
    Object.keys(config).forEach(function (key) {
        for (let i = 0; i < config[key].length; i++) {
            let item = config[key][i];
            if (h.typeId == item[0].id && h.data == item[1]) { // item[0] = アイテムタイプ, item[1] = データ値
                selectedItemList = config[key];
                isSelectedItem = true;
                count = i < selectedItemList.length - 1 ? i + 1 : 0;
                changeBlock(p);
                break;
            }
        }
    });
}

// ブロックの変更
function changeBlock (p) {
    if (p.typeId != "minecraft:player" || !isSelectedItem || !p.isSneaking) return;
    for (let i = 0; i < selectedItemList.length; i++) {
        let items = Object.values(selectedItemList[i]);
        idList.push(items[0]);
        dataList.push(items[1]);
    }
    let item = new ItemStack(idList[count], 1, dataList[count]);
    let player;
    for (let i = 0; i < playerList.length; i++) {
        let playerData = playerList[i];
        if (playerData.name == p.name) {
            player = playerData.player;
            break;
        }
    }
    if (!player) return;
    player.getComponent("inventory").container.setItem(player.selectedSlot, item);
    idList.splice(0);
    dataList.splice(0);
    count = count < selectedItemList.length - 1 ? count + 1 : 0;
}
