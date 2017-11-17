// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"DTextPicture","status":true,"description":"動的文字列ピクチャ生成プラグイン","parameters":{}},
{"name":"AdjustPictureGraphical","status":true,"description":"ピクチャのグラフィカルな位置調整プラグイン。\nパラメータを変更したら「プロジェクトの保存」（Ctrl+S）","parameters":{"グリッドサイズ":"48","テストマップID":"-1"}},
{"name":"Torigoya_SameEquipType","status":true,"description":"装備タイプ名が同じならば、同じ種別のアイテムを装備できるようにします","parameters":{}},
{"name":"SAN_MapGenerator","status":true,"description":"自動マップ生成 ver1.15\r\n自動的にマップを生成しイベントを配置します。","parameters":{"WallHight":"1","MinRoomSize":"5","MaxRoomSize":"15","ShowOuterWall":"ON"}},
{"name":"scrollText","status":true,"description":"","parameters":{}},
{"name":"Vitsuno_SpritePerch","status":true,"description":"スプライト集合オブジェクト『パーチ』を定義するベースプラグインです。","parameters":{"Cursor Position":"top-right","Cursor Offset X":"0","Cursor Offset Y":"0","Cursor Interval":"10"}},
{"name":"Vitsuno_AbilityNetwork","status":true,"description":"防具システムを利用してアビリティ習得システムを構築します。","parameters":{"Menu Switch ID":"0","Level UP Point":"2","Point Name":"ＳＰ","Point Name A":"SP","Obtain Text":"%1 の%2を獲得！","Command Name":"スキルツリー","Point UP SE":"Equip1,90,100,0","Learning SE":"Item3,90,100,0","Perch Padding":"48","Perch Stage Height":"64"}},
{"name":"DP_FixEscapeRatio","status":true,"description":"逃走の成功確率を設定できます。v1.00","parameters":{"Use Param":"false","Ratio":"100"}},
{"name":"PictureAnimation","status":true,"description":"ピクチャのアニメーションプラグイン","parameters":{}},
{"name":"TitleCommandPosition","status":true,"description":"タイトルコマンドウィンドウの位置を変更します。","parameters":{"Offset X":"-220","Offset Y":"70","Width":"240","Background":"0"}},
{"name":"SRD_TPUpgrade","status":true,"description":"(v3.02) This Plugin allows you to have more control over your TP system and have a dynamic Max TP stat.","parameters":{"Minimum Max TP":"1","Maximum Max TP":"99999","Preserve TP?":"false","Max TP in Status?":"false","Restrict Damage Gain?":"true","= Default Values =":"","Default Actor MTP":"100","Default Actor ITP":"Math.randomInt(25)","Default Enemy MTP":"100","Default Enemy ITP":"Math.randomInt(100)","= Battle TP Gains =":"","TP Bonus Crit Use":"0","TP Bonus Super Use":"0","TP Bonus Crit Take":"0","TP Bonus Super Take":"0"}},
{"name":"ItemBook","status":true,"description":"アイテム図鑑です。アイテムの詳細なステータスを表示します。","parameters":{"Unknown Data":"？？？？？？","Price Text":"価格","Equip Text":"装備","Type Text":"タイプ"}},
{"name":"BattleParallelEvent","status":true,"description":"戦闘中でも「並列処理」のコモンイベントを実行する為のプラグインです。","parameters":{}},
{"name":"SSG_ItemSort","status":true,"description":"[SSG] Item Sort: Sort your item by weighted value\r\n<SSG_ItemSort>\r\nversion 1.0.1","parameters":{"Default Sort Value 1":"100","Default Sort Value 2":"100","Sort Mode":"descending"}},
{"name":"YEP_BattleAICore","status":true,"description":"ver 1.05 バトルAIを、より管理されたものにすることができます。","parameters":{"Dynamic Actions":"true","Element Testing":"false","Default AI Level":"100"}},
{"name":"MessageWindowHidden","status":true,"description":"メッセージウィンドウ一時消去プラグイン","parameters":{"ボタン名称":"右クリック"}},
{"name":"BattlebackChangeInBattle","status":true,"description":"バトルイベントでの戦闘背景変更が可能になります。","parameters":{}},
{"name":"SideEffectSkill","status":true,"description":"スキルの副作用プラグイン","parameters":{}},
{"name":"Torigoya_QuickSkill","status":true,"description":"選択するとターンを消費せずに即発動するスキルを追加します。","parameters":{}},
{"name":"RTK1_Core","status":true,"description":"RPG ツクール MV 用に作成された RTK1 ライブラリの基本機能です","parameters":{"language":"0","debug":"0","json":"0","tagname for sort":"ja_sortname"}},
{"name":"RTK1_Composite","status":true,"description":"アイテム・武器・防具の合成","parameters":{"meta tag":"composite","plugin command":"RTK1_Composite","in menu":"0","list sort":"0","auto learn":"0","success adjust menu":"1","charge adjust menu":"1","success adjust workroom":"1","charge adjust workroom":"0","success adjust shop":"1","charge adjust shop":"1"}},
{"name":"AB_EnemyBook","status":true,"description":"戦闘中も確認できるモンスター図鑑です。属性、ステートの耐性の確認もできます。","parameters":{"ShowCommandInBattle":"1","ResisterTiming":"1","ShowCurrentStatus":"0","---用語、アイコン---":"","EnemyBookCommandName":"敵の情報","Achievement":"達成率","UnknownEnemy":"？？？？？？","UnknownData":"？？？","WeakElementName":"弱点属性","ResistElementName":"耐性属性","WeakStateName":"弱点ステート","ResistStateName":"耐性ステート","NoEffectStateName":"無効ステート","UnknownDropItemIcon":"16","AddEnemySkillMessage":"%1を図鑑に登録した！","FailToAddEnemySkillMessage":"%1は図鑑には載せられない！","FailToCheckEnemySkillMessage":"%1の情報はわからなかった！","---表示項目---":"","DispNo":"1","DispHP":"1","DispMP":"1","DispATK":"1","DispDEF":"1","DispMAT":"1","DispMDF":"1","DispAGI":"1","DispLUK":"0","DispDropItems":"1","DispWeakElement":"1","DispResistElement":"1","DispWeakState":"1","DispResistState":"1","DispNoEffectState":"0","DispDescribe":"1","---属性アイコン---":"","UseElementIconInPluginParameter":"1","ElementIcons":"76 64 65 66 67 68 69 70 71 90"}},
{"name":"AcceptAllKeys","status":true,"description":"使えるキーを拡張します","parameters":{"key_a":"a","key_b":"b","key_c":"c","key_d":"d","key_e":"e","key_f":"f","key_g":"g","key_h":"h","key_i":"i","key_j":"j","key_k":"k","key_l":"l","key_m":"m","key_n":"n","key_o":"o","key_p":"p","key_q":"pageup","key_r":"r","key_s":"s","key_t":"t","key_u":"u","key_v":"v","key_w":"pagedown","key_x":"escape","key_y":"y","key_z":"ok","key_backspace":"backspace","key_tab":"tab","key_enter":"ok","key_shift":"shift","key_control":"control","key_alt":"control","key_escape":"escape","key_space":"ok","key_pageup":"pageup","key_pagedown":"pagedown","key_left":"left","key_right":"right","key_up":"up","key_down":"down","key_insert":"escape","numpad_0":"escape","numpad_2":"down","numpad_4":"left","numpad_6":"right","numpad_8":"up","F9":"debug"}},
{"name":"UTA_MessageSkip","status":true,"description":"特定キーを押す事でメッセージをスキップできるようにします。","parameters":{"Skip Key":"s","Show Trace":"false"}},
{"name":"Vitsuno_Difficulty","status":true,"description":"難易度により能力値や報酬倍率を変更できるようになります。","parameters":{"Init Difficulty ID":"2","Use Option":"1","Option Name":"難易度","--(Difficulty ID:1)--":"","1 : Name":"イージー","1 : Param Rate":"0.5,1.0,0.5,0.5,0.5,0.5,0.7,1.0","1 : Drop Rate":"1.0,1.0,1.0,1.0,1.0","--(ID:2)-------------":"","2 : Name":"ノーマル","2 : Param Rate":"1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0","2 : Drop Rate":"1.0,1.0,1.0,1.0,1.0","--(ID:3)-------------":"","3 : Name":"ハード","3 : Param Rate":"1.5,1.5,1.5,1.2,1.5,1.2,1.1,1.2","3 : Drop Rate":"2.0,2.0,1.5,1.5,1.5","--(ID:4)-------------":"","4 : Name":"デストロイ","4 : Param Rate":"2.0,2.0,2.0,1.5,2.0,1.5,1.2,1.5","4 : Drop Rate":"3.0,3.0,2.0,2.0,2.0","--(ID:5)-------------":"","5 : Name":"","5 : Param Rate":"2.0,2.0,2.0,2.0,2.0,2.0,2.0,2,0","5 : Drop Rate":"2.0,2.0,2.0,2.0,2.0","--(ID:6)-------------":"","6 : Name":"","6 : Param Rate":"1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0","6 : Drop Rate":"1.0,1.0,1.0,1.0,1.0","--(ID:7)-------------":"","7 : Name":"","7 : Param Rate":"1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0","7 : Drop Rate":"1.0,1.0,1.0,1.0,1.0","--(ID:8)-------------":"","8 : Name":"","8 : Param Rate":"1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0","8 : Drop Rate":"1.0,1.0,1.0,1.0,1.0"}},
{"name":"DifficultyExtend","status":true,"description":"難易度選択拡張プラグイン","parameters":{"難易度ID変数":"120","難易度IDスイッチ_1":"0","難易度ID弱点倍率_1":"1.0","難易度ID耐性倍率_1":"1.0","難易度IDスイッチ_2":"0","難易度ID弱点倍率_2":"1.0","難易度ID耐性倍率_2":"1.0","難易度IDスイッチ_3":"0","難易度ID弱点倍率_3":"1.0","難易度ID耐性倍率_3":"1.0","難易度IDスイッチ_4":"0","難易度ID弱点倍率_4":"1.0","難易度ID耐性倍率_4":"1.0","難易度IDスイッチ_5":"0","難易度ID弱点倍率_5":"1.0","難易度ID耐性倍率_5":"1.0","難易度IDスイッチ_6":"0","難易度ID弱点倍率_6":"1.0","難易度ID耐性倍率_6":"1.0","難易度IDスイッチ_7":"0","難易度ID弱点倍率_7":"1.0","難易度ID耐性倍率_7":"1.0","難易度IDスイッチ_8":"0","難易度ID弱点倍率_8":"1.0","難易度ID耐性倍率_8":"1.0"}},
{"name":"PickupSkill","status":true,"description":"任意のスキルを直接コマンドから選択出来る様にするプラグイン","parameters":{"PickupSkillName":"くすぐりスキッパー","PickupSkillId":"305","PickupTarget":"0"}},
{"name":"AutoBattle","status":true,"description":"自動戦闘プラグイン","parameters":{"パーティコマンド名称":"オート","パーティコマンド位置":"-1","アクターコマンド名称":"","アクターコマンド位置":"-1"}},
{"name":"TYA_EnemyHPGauge","status":false,"description":"敵ターゲットウィンドウにＨＰゲージを表示させます。\r\n特定の敵のゲージを非表示にすることもできます。","parameters":{}},
{"name":"MPP_TouchTargetSelect","status":false,"description":"【ver.1.3】戦闘時のターゲット選択で、キャラクターをタッチして選択できるようにします。","parameters":{"=== Actor ===":"","Actor Window View?":"true","Actor Arrow Name":"","Actor Arrow Pos":"0","Actor Arrow Width":"0","Actor Arrow Rate":"4","Actor Arrow Rotation":"0","Actor Arrow Speed":"0","=== Enemy ===":"","Enemy Window View?":"true","Enemy Arrow Name":"","Enemy Arrow Pos":"0","Enemy Arrow Width":"0","Enemy Arrow Rate":"4","Enemy Arrow Rotation":"0","Enemy Arrow Speed":"0"}},
{"name":"TkoolMV_PluginCommandBook","status":true,"description":"プラグインコマンド集","parameters":{"制御文字の拡張":"はい","スクリプトに制御文字適用":"いいえ"}},
{"name":"XPStyleBattleMV","status":true,"description":"XPStyleBattle for MV Build170625","parameters":{"(string)battlerGraphic.rootPath":"undefined","(boolean)battlerGraphic.enableAnimation":"true","(boolean)battlerGraphic.enablePopup":"undefined","(integer)battlerGraphic.damageDuration":"undefined","(integer)animation.playRate":"undefined","(string)targetCursor.fileName":"undefined","(integer)targetCursor.width":"undefined","(integer)targetCursor.animationSpeed":"undefined","(integer)targetCursor.moveSpeed":"undefined","(integer)targetCursor.minY":"undefined","(integer)targetInformation.gaugeWidth":"undefined","(string)targetInformation.scopeNotation.forParty":"undefined","(string)targetInformation.scopeNotation.forTroop":"undefined","(string)targetInformation.scopeNotation.forTroopRandom":"undefined","(boolean)targetInformation.actor.states":"undefined","(boolean)targetInformation.actor.hp":"undefined","(boolean)targetInformation.actor.mp":"undefined","(boolean)targetInformation.actor.tp":"undefined","(boolean)targetInformation.enemy.states":"undefined","(boolean)targetInformation.enemy.hp":"true","(boolean)targetInformation.enemy.mp":"true","(boolean)targetInformation.enemy.tp":"undefined","(boolean)battleMessage.enemyEmergeMessage":"undefined","(boolean)battleMessage.simpleBattleLog.useSimpleBattleLog":"false","(boolean)battleMessage.simpleBattleLog.displayAttack":"undefined","(boolean)battleMessage.simpleBattleLog.displayGuard":"undefined","(boolean)battleMessage.simpleBattleLog.drawIcon":"undefined","(integer)battleMessage.simpleBattleLog.align":"undefined","(string)battleMessage.simpleBattleLog.descriptionDelimiter":"undefined","(integer)battleMessage.simpleBattleLog.descriptionFontSize":"undefined","(boolean)windowLayout.itemSkill.fitting":"undefined","(boolean)windowLayout.itemSkill.maxHeight":"undefined","(integer)windowLayout.actorCommand.absolutePosition.x":"undefined","(integer)windowLayout.actorCommand.absolutePosition.y":"undefined","(integer)windowLayout.actorCommand.adjustPosition.x":"undefined","(integer)windowLayout.actorCommand.adjustPosition.y":"undefined","(integer)windowLayout.actorCommand.width":"undefined","(boolean)windowLayout.actorCommand.heightFitting":"undefined","(integer)windowLayout.actorCommand.visibleRows":"undefined","(boolean)windowLayout.actorCommand.isHorizontal":"undefined","(integer)windowLayout.actorCommand.maxCols":"undefined","(string)windowLayout.actorCommand.itemAlign":"undefined","(integer)windowLayout.partyCommand.position.x":"undefined","(integer)windowLayout.partyCommand.position.y":"undefined","(integer)windowLayout.partyCommand.width":"undefined","(boolean)windowLayout.partyCommand.heightFitting":"undefined","(integer)windowLayout.partyCommand.visibleRows":"undefined","(boolean)windowLayout.partyCommand.isHorizontal":"undefined","(integer)windowLayout.partyCommand.maxCols":"undefined","(string)windowLayout.partyCommand.itemAlign":"undefined","(integer)battleSpeed.basicSpeed":"undefined","(boolean)battleSpeed.animationFastForward":"undefined","(boolean)battleSpeed.animationDelayFastForward":"undefined","(integer)battleSpeed.actorStepDuration":"undefined","(integer)battleSpeed.animationSkipDuration":"undefined","(integer)battleSpeed.skipBlinkEffect":"undefined","(boolean)minorFixes.enableSelectionEffect":"undefined"}},
{"name":"CrossSave","status":true,"description":"クロスセーブプラグイン","parameters":{"ユーザID":"noircastle","ロード名称":"ネットワークロード","セーブ名称":"ネットワークセーブ","パスワード桁数":"6","説明文":"ネットワークパスワードを入力してください。","タイトルに追加":"ON","ファイルに追加":"ON","背景ピクチャ":"","認証ファイル形式":"OFF"}},
{"name":"TN_LightSaveData_Map","status":false,"description":"マップ上のイベントの情報をセーブ対象から外して、セーブファイルを軽量化します。","parameters":{}},
{"name":"liply_onBitmapLoad_patch","status":true,"description":"","parameters":{}},
{"name":"VersionSpecified","status":true,"description":"【MMP ver.1.0】タイトル画面にバージョンを明記します。","parameters":{"version":"Version 7.03","fontSize":"20","fontColor":"rgb(255, 255, 255)","windowX":"540","windowY":"560"}},
{"name":"StateHelp","status":true,"description":"ver1.03/ステートにヘルプを付け、ステートの詳細を見るための仕組みを追加します。","parameters":{"State Help Text":"ステート詳細","Call State Window Key":"","Use Touch Call":"false","Add Menu State Help":"false","Touch Call Rect":"0,0,128,444","Debuff Help HP1":"最大HPが25%減少します。","Debuff Help HP2":"最大MPが50%減少します。","Debuff Help MP1":"最大HPが25%減少します。","Debuff Help ATK1":"攻撃力が25%減少します。","Debuff Help ATK2":"攻撃力がが50%減少します。","Debuff Help DEF1":"防御力が25%減少します。","Debuff Help DEF2":"防御力が50%減少します。","Debuff Help MAT1":"魔法力が25%減少します。","Debuff Help MAT2":"魔法力が50%減少します。","Debuff Help MDF1":"魔法防御が25%減少します。","Debuff Help MDF2":"魔法防御が50%減少します。","Debuff Help AGI1":"敏捷性が25%減少します。","Debuff Help AGI2":"敏捷性が50%減少します。","Debuff Help LUK1":"運が25%減少します。","Debuff Help LUK2":"運が50%減少します。","Buff Help HP1":"最大HPが25%上昇します。","Buff Help HP2":"最大MPが50%上昇します。","Buff Help MP1":"最大HPが25%上昇します。","Buff Help ATK1":"攻撃力が25%上昇します。","Buff Help ATK2":"攻撃力がが50%上昇します。","Buff Help DEF1":"防御力が25%上昇します。","Buff Help DEF2":"防御力が50%上昇します。","Buff Help MAT1":"魔法力が25%上昇します。","Buff Help MAT2":"魔法力が50%上昇します。","Buff Help MDF1":"魔法防御が25%上昇します。","Buff Help MDF2":"魔法防御が50%上昇します。","Buff Help AGI1":"敏捷性が25%上昇します。","Buff Help AGI2":"敏捷性が50%上昇します。","Buff Help LUK1":"運が25%上昇します。","Buff Help LUK2":"運が50%上昇します。"}},
{"name":"MKR_PlayerSensor","status":true,"description":"(v2.2.7) プレイヤー探索プラグイン","parameters":{"Default_Sensor_Switch":"D","Default_Both_Sensor":"OFF","Default_Range_Visible":"ON","Default_Terrain_Decision":"ON","Default_Range_Color":"white","Default_Range_Opacity":"80","Default_Auto_Sensor":"ON","Default_Event_Decision":"OFF","Default_Region_Decision01":"0"}},
{"name":"PictureCallCommon","status":true,"description":"ピクチャのボタン化プラグイン","parameters":{}},
{"name":"RandomEventSet","status":true,"description":"ver1.01/場所移動時等にイベントの位置をランダムに移動します。","parameters":{"RandomSetSwitchID":"151","RegionSetSwitchID":"151","Init Transfer":"0","RandomSetKey":"<ランダム移動>","RegionSetKey":"<ランダムリージョン:(\\d+)>"}},
{"name":"YEP_RegionRestrictions","status":true,"description":"v1.03 Use regions to block out Events and/or the player from\nbeing able to venture into those spots.","parameters":{"Player Restrict":"11","Event Restrict":"0","All Restrict":"0","Player Allow":"10","Event Allow":"0","All Allow":"0"}},
{"name":"TMCommonEventKey","status":true,"description":"任意のキーにコモンイベントを設定し、マップシーンで\nショートカットキーとして利用できるようにします。","parameters":{"commonKey0":"0","commonKey1":"0","commonKey2":"0","commonKey3":"0","commonKey4":"0","commonKey5":"0","commonKey6":"0","commonKey7":"0","commonKey8":"0","commonKey9":"0","commonKeyA":"0","commonKeyB":"0","commonKeyC":"0","commonKeyD":"0","commonKeyE":"0","commonKeyF":"0","commonKeyG":"0","commonKeyH":"0","commonKeyI":"0","commonKeyJ":"0","commonKeyK":"0","commonKeyL":"0","commonKeyM":"0","commonKeyN":"0","commonKeyO":"0","commonKeyP":"0","commonKeyQ":"0","commonKeyR":"0","commonKeyS":"0","commonKeyT":"0","commonKeyU":"0","commonKeyV":"0","commonKeyW":"14","commonKeyX":"0","commonKeyY":"0","commonKeyZ":"0","commonKeyF1":"0","commonKeyF2":"0","commonKeyF3":"0","commonKeyF4":"0","commonKeyF5":"0","commonKeyF6":"0","commonKeyF7":"0","commonKeyF8":"0","commonKeyF9":"0","commonKeyF10":"0","commonKeyF11":"0","commonKeyF12":"0"}},
{"name":"StopSelfMovementWithPlayer","status":true,"description":"イベント起動中にイベントの自律移動を停止します。","parameters":{"Varidate Switch ID":"0"}},
{"name":"EnemyPaper","status":true,"description":"ver1.00 エネミーの姿だけ変えます。","parameters":{}},
{"name":"CounterExtend","status":true,"description":"反撃拡張プラグイン","parameters":{"反撃コスト消費":"OFF","コスト不足で失敗":"OFF"}},
{"name":"TitleImageChange","status":true,"description":"タイトル画面変更プラグイン","parameters":{"進行度変数":"118","優先度変数":"0","タイトル1の進行度":"1","タイトル1の画像":"Fairy Maze END","タイトル1のBGM":"Theme5","タイトル2の進行度":"2","タイトル2の画像":"","タイトル2のBGM":"","タイトル3の進行度":"3","タイトル3の画像":"","タイトル3のBGM":"","以降の進行度":"","以降の画像":"","以降のBGM":""}},
{"name":"SwitchOnLoad","status":true,"description":"ゲームをロードしたときに指定のスイッチをONにします。","parameters":{"Switch ID":"193"}},
{"name":"HzExState","status":true,"description":"ステートの拡張（ステート解除時に別のステートを自動付与など）を行います。","parameters":{}},
{"name":"BugFixParallelEventAndCharacter","status":true,"description":"並列処理イベントのセーブ失敗バグ修正プラグイン","parameters":{}}
];
