import { MinecraftItemTypes } from "@minecraft/server";

const config = {};

// ------------------------------------------------------------
// ユーザー定義 (上級者向け)
// 独自にリストを作成してゲーム内で扱うことができます。
// ------------------------------------------------------------

/* <----- 木材リスト -----> */

config.oakList = [
  [MinecraftItemTypes.log, 0],
  [MinecraftItemTypes.strippedOakLog, 0],
  [MinecraftItemTypes.planks, 0],
  [MinecraftItemTypes.woodenSlab, 0],
  [MinecraftItemTypes.oakStairs, 0],
];

config.spruceList = [
  [MinecraftItemTypes.log, 1],
  [MinecraftItemTypes.strippedSpruceLog, 0],
  [MinecraftItemTypes.planks, 1],
  [MinecraftItemTypes.woodenSlab, 1],
  [MinecraftItemTypes.spruceStairs, 0],
];

config.birchList = [
  [MinecraftItemTypes.log, 2],
  [MinecraftItemTypes.strippedBirchLog, 0],
  [MinecraftItemTypes.planks, 2],
  [MinecraftItemTypes.woodenSlab, 2],
  [MinecraftItemTypes.birchStairs, 0],
];

config.jungleList = [
  [MinecraftItemTypes.log, 3],
  [MinecraftItemTypes.strippedJungleLog, 0],
  [MinecraftItemTypes.planks, 3],
  [MinecraftItemTypes.woodenSlab, 3],
  [MinecraftItemTypes.jungleStairs, 0],
];

config.acaciaList = [
  [MinecraftItemTypes.log2, 0],
  [MinecraftItemTypes.strippedAcaciaLog, 0],
  [MinecraftItemTypes.planks, 4],
  [MinecraftItemTypes.woodenSlab, 4],
  [MinecraftItemTypes.acaciaStairs, 0],
];

config.darkOakList = [
  [MinecraftItemTypes.log2, 1],
  [MinecraftItemTypes.strippedDarkOakLog, 0],
  [MinecraftItemTypes.planks, 5],
  [MinecraftItemTypes.woodenSlab, 5],
  [MinecraftItemTypes.darkOakStairs, 0],
];

config.mangroveList = [
  [MinecraftItemTypes.mangroveLog, 0],
  [MinecraftItemTypes.strippedMangroveLog, 0],
  [MinecraftItemTypes.mangrovePlanks, 0],
  [MinecraftItemTypes.mangroveSlab, 0],
  [MinecraftItemTypes.mangroveStairs, 0],
];

config.crimsonList = [
  [MinecraftItemTypes.crimsonStem, 0],
  [MinecraftItemTypes.strippedCrimsonStem, 0],
  [MinecraftItemTypes.crimsonPlanks, 0],
  [MinecraftItemTypes.crimsonSlab, 0],
  [MinecraftItemTypes.crimsonStairs, 0],
];

config.warpedList = [
  [MinecraftItemTypes.warpedStem, 0],
  [MinecraftItemTypes.strippedWarpedStem, 0],
  [MinecraftItemTypes.warpedPlanks, 0],
  [MinecraftItemTypes.warpedSlab, 0],
  [MinecraftItemTypes.warpedStairs, 0],
];

/* 以下のような形式でリストを作成してください。

config.プロパティ名(適当) = [
  [アイテムタイプ, データ値],
  [アイテムタイプ, データ値],
];

文字コードは必ず[UTF-8]を指定してください。
アイテムタイプはこちらから調べられます。
https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/minecraftitemtypes

*/

export default config;