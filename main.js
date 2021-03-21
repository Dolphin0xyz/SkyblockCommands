/// <reference types="../CTAutocomplete" />
/// <reference lib="es2015" />

module.exports = {};

// TO DO 
/// Changelog 1.8.0
/// Finish of /sc auctionclick help

// General variables

const ChatStart = "&4&k&l0&r ";
var PlayerName = Player.getName();
var LastLoadedVersion = String(FileLib.read(OtherFilePath + "LastLoadedVersion.txt"));
var CurrentVersion = "1.8.4";
var YouAreDrowning = new Message("&3You are underwater and losing air supply! &90").setChatLineId(3141);
var YouAreDrowning2 = new Message("&cYou are drowning and losing health!").setChatLineId(3142);
var ChatLine = "&e&m-----------------------------------------------------";
var ChatLineName = "&e&m---------------&r &5&k&l00&r&3 Sky&2Block &6Commands &r&5&k&l00&r &e&m---------------";
var ScreenWidth = Renderer.screen.getWidth();
var ScreenHeight = Renderer.screen.getHeight();
var DiscordInvite = "https://dzyuMB7Tiscord.gg/";

// File Paths 

var ToggleGUIFilePath = "./config/ChatTriggers/modules/SkyblockCommands/togglegui/";
var OtherFilePath = "./config/ChatTriggers/modules/SkyblockCommands/other/";
var KeybindFilePath = "./config/ChatTriggers/modules/SkyblockCommands/keybind/";
var ExpertiseFilePath = "./config/ChatTriggers/modules/SkyblockCommands/expertise/";
var DungeonItemFilePath = "./config/ChatTriggers/modules/SkyblockCommands/dungeonitem/";
var AutoMaddoxFilePath = "./config/ChatTriggers/modules/SkyblockCommands/automaddox/";
var CompactFilePath = "./config/ChatTriggers/modules/SkyblockCommands/compact/";

// Keybind variables

var yourAH = "ah " + PlayerName;
var yourGEXP = "g member " + PlayerName;

// ah variables

var ahset1 = String(FileLib.read(OtherFilePath + "ahset1.txt"));
var ahset2 = String(FileLib.read(OtherFilePath + "ahset2.txt"));
var ahset3 = String(FileLib.read(OtherFilePath + "ahset3.txt"));

var ahset1Command = "ah " + ahset1;
var ahset2Command = "ah " + ahset2;
var ahset3Command = "ah " + ahset3;

// toggle gui variables

var toggleHealth = String(FileLib.read(ToggleGUIFilePath + "toggleHealth.txt"));
var toggleHunger = String(FileLib.read(ToggleGUIFilePath + "toggleHunger.txt"));
var toggleArmour = String(FileLib.read(ToggleGUIFilePath + "toggleArmour.txt"));
var toggleMountHealth = String(FileLib.read(ToggleGUIFilePath + "toggleMountHealth.txt"));
var toggleAir = String(FileLib.read(ToggleGUIFilePath + "toggleAir.txt"));

// Changelog clickable messages// Changelog clickable messages

var V1_4_3ChangelogTC = new TextComponent("&e&l1.4.3").setClick("run_command", "/sc changelog 1.4.3").setHoverValue("&3Click to see changes made in 1.4.3");
var V1_5_0ChangelogTC = new TextComponent("&e&l1.5.0").setClick("run_command", "/sc changelog 1.5.0").setHoverValue("&3Click to see changes made in 1.5.0");
var V1_5_1ChangelogTC = new TextComponent("&e&l1.5.1").setClick("run_command", "/sc changelog 1.5.1").setHoverValue("&3Click to see changes made in 1.5.1");
var V1_6_0ChangelogTC = new TextComponent("&e&l1.6.0").setClick("run_command", "/sc changelog 1.6.0").setHoverValue("&3Click to see changes made in 1.6.0");
var V1_6_1ChangelogTC = new TextComponent("&e&l1.6.1").setClick("run_command", "/sc changelog 1.6.1").setHoverValue("&3Click to see changes made in 1.6.1");
var V1_6_2ChangelogTC = new TextComponent("&e&l1.6.2").setClick("run_command", "/sc changelog 1.6.2").setHoverValue("&3Click to see changes made in 1.6.2");
var V1_6_3ChangelogTC = new TextComponent("&e&l1.6.3").setClick("run_command", "/sc changelog 1.6.3").setHoverValue("&3Click to see changes made in 1.6.3");
var V1_6_4ChangelogTC = new TextComponent("&e&l1.6.4").setClick("run_command", "/sc changelog 1.6.4").setHoverValue("&3Click to see changes made in 1.6.4");
var V1_6_5ChangelogTC = new TextComponent("&e&l1.6.5").setClick("run_command", "/sc changelog 1.6.5").setHoverValue("&3Click to see changes made in 1.6.5");
var V1_6_6ChangelogTC = new TextComponent("&e&l1.6.6").setClick("run_command", "/sc changelog 1.6.6").setHoverValue("&3Click to see changes made in 1.6.6");
var V1_7_0ChangelogTC = new TextComponent("&e&l1.7.0").setClick("run_command", "/sc changelog 1.7.0").setHoverValue("&3Click to see changes made in 1.7.0");
var V1_7_1ChangelogTC = new TextComponent("&e&l1.7.1").setClick("run_command", "/sc changelog 1.7.1").setHoverValue("&3Click to see changes made in 1.7.1");
var V1_7_2ChangelogTC = new TextComponent("&e&l1.7.2").setClick("run_command", "/sc changelog 1.7.2").setHoverValue("&3Click to see changes made in 1.7.2");
var V1_7_3ChangelogTC = new TextComponent("&e&l1.7.3").setClick("run_command", "/sc changelog 1.7.3").setHoverValue("&3Click to see changes made in 1.7.3");
var V1_7_3ChangelogTC = new TextComponent("&e&l1.7.3").setClick("run_command", "/sc changelog 1.7.3").setHoverValue("&3Click to see changes made in 1.7.3");
var V1_7_4ChangelogTC = new TextComponent("&e&l1.7.4").setClick("run_command", "/sc changelog 1.7.4").setHoverValue("&3Click to see changes made in 1.7.4");
var V1_8_0ChangelogTC = new TextComponent("&e&l1.8.0").setClick("run_command", "/sc changelog 1.8.0").setHoverValue("&3Click to see changes made in 1.8.0");
var V1_8_1ChangelogTC = new TextComponent("&e&l1.8.1").setClick("run_command", "/sc changelog 1.8.1").setHoverValue("&3Click to see changes made in 1.8.1");


var V1_4_3ChangelogMsg = new Message(ChatStart, V1_4_3ChangelogTC).setChatLineId(143);
var V1_5_0ChangelogMsg = new Message(ChatStart, V1_5_0ChangelogTC).setChatLineId(150);
var V1_5_1ChangelogMsg = new Message(ChatStart, V1_5_1ChangelogTC).setChatLineId(151);
var V1_6_0ChangelogMsg = new Message(ChatStart, V1_6_0ChangelogTC).setChatLineId(160);
var V1_6_1ChangelogMsg = new Message(ChatStart, V1_6_1ChangelogTC).setChatLineId(161);
var V1_6_2ChangelogMsg = new Message(ChatStart, V1_6_2ChangelogTC).setChatLineId(162);
var V1_6_3ChangelogMsg = new Message(ChatStart, V1_6_3ChangelogTC).setChatLineId(163);
var V1_6_4ChangelogMsg = new Message(ChatStart, V1_6_4ChangelogTC).setChatLineId(164);
var V1_6_5ChangelogMsg = new Message(ChatStart, V1_6_5ChangelogTC).setChatLineId(165);
var V1_6_6ChangelogMsg = new Message(ChatStart, V1_6_6ChangelogTC).setChatLineId(166);
var V1_7_0ChangelogMsg = new Message(ChatStart, V1_7_0ChangelogTC).setChatLineId(170);
var V1_7_1ChangelogMsg = new Message(ChatStart, V1_7_1ChangelogTC).setChatLineId(171);
var V1_7_2ChangelogMsg = new Message(ChatStart, V1_7_2ChangelogTC).setChatLineId(172);
var V1_7_3ChangelogMsg = new Message(ChatStart, V1_7_3ChangelogTC).setChatLineId(173);
var V1_7_4ChangelogMsg = new Message(ChatStart, V1_7_4ChangelogTC).setChatLineId(174);
var V1_8_0ChangelogMsg = new Message(ChatStart, V1_8_0ChangelogTC).setChatLineId(180);
var V1_8_1ChangelogMsg = new Message(ChatStart, V1_8_1ChangelogTC).setChatLineId(181);
const V1_8_2ChangelogMsg = new Message(ChatStart, new TextComponent("&e&l1.8.2").setClick("run_command", "/sc changelog 1.8.2").setHoverValue("&3Click to see changes made in 1.8.2")).setChatLineId(182);
const V1_8_3ChangelogMsg = new Message(ChatStart, new TextComponent("&e&l1.8.3").setClick("run_command", "/sc changelog 1.8.3").setHoverValue("&3Click to see changes made in 1.8.3")).setChatLineId(183);

var ChangelogCenteredTextIDMSG = new Message(ChatLib.getCenteredText("&e&m-------&c Changelog &e&m-------&r")).setChatLineId(100);
var ChatLineNameIDMSG = new Message(ChatLineName).setChatLineId(101);
var ChatLineIDMSG = new Message(ChatLine).setChatLineId(102);

var ChangelogBackTC = new TextComponent("&6&l<= Back").setClick("run_command", "/sc changelog").setHoverValue("&3Return to changelog version menu");
var ChangelogBackMsg = new Message(ChangelogBackTC);

// Command clickable messages

var SCinfoCmdTC = new TextComponent("&6&l/sc info ").setClick("run_command", "/sc info").setHoverValue("&3Click to run /sc info");
var SCahhelpCmdTC = new TextComponent("&6&l/sc ahhelp ").setClick("run_command", "/sc ahhelp").setHoverValue("&3Click to run /sc ahhelp");
var SCsavekeyshelpCmdTC = new TextComponent("&6&l/sc savekeyshelp ").setClick("run_command", "/sc savekeyshelp").setHoverValue("&3Click to run /sc savekeyshelp");
var SCversionCmdTC = new TextComponent("&6&l/sc version ").setClick("run_command", "/sc version").setHoverValue("&3Click to run /sc version");
var SCchangelogCmdTC = new TextComponent("&6&l/sc changelog ").setClick("run_command", "/sc changelog").setHoverValue("&3Click to run /sc changelog");
var SCtoggleguihelpCmdTC = new TextComponent("&6&l/sc toggleguihelp").setClick("run_command", "/sc toggleguihelp").setHoverValue("&3Click to run /sc toggleguihelp");
var SCkeybindhelpCmdTC = new TextComponent("&6&l/sc keybindhelp").setClick("run_command", "/sc keybindhelp").setHoverValue("&3Click to run /sc keybindhelp");
var SCexpertisehelpCmdTC = new TextComponent("&6&l/sc expertisehelp").setClick("run_command", "/sc expertisehelp").setHoverValue("&3Click to run /sc expertisehelp");
var SCdungeonitemhelpCmdTC = new TextComponent("&6&l/sc dungeonitemhelp").setClick("run_command", "/sc dungeonitemhelp").setHoverValue("&3Click to run /sc dungeonitemhelp");
var SCautomaddoxhelpCmdTC = new TextComponent("&6&l/sc automaddoxhelp").setClick("run_command", "/sc automaddoxhelp").setHoverValue("&3Click to run /sc automaddoxhelp");
var SCslayerhealthhelpCmdTC = new TextComponent("&6&l/sc slayerhealthhelp").setClick("run_command", "/sc slayerhealthhelp").setHoverValue("&3Click to run /sc slayerhealthhelp");
var SCauctionclickCmdTC = new TextComponent("&6&l/sc auctionclickhelp").setClick("run_command", "/sc auctionclickhelp").setHoverValue("&3CLick to run /sc auctionclickhelp");

var SCinfoCmdMsg = new Message(ChatStart, SCinfoCmdTC, "&e&oinfo on SkyblockCommands&r");
var SCahhelpCmdMsg = new Message(ChatStart, SCahhelpCmdTC, "&e&o help for the ah keybinds");
var SCsavekeyshelpCmdMsg = new Message(ChatStart, SCsavekeyshelpCmdTC, "&e&o help for saving and loading keybinds");
var SCversionCmdMsg = new Message(ChatStart, SCversionCmdTC, "&e&o displays the current version");
var SCchangelogCmdMsg = new Message(ChatStart, SCchangelogCmdTC, "&e&o changes from the last version");
var SCtoggleguihelpCmdMsg = new Message(ChatStart, SCtoggleguihelpCmdTC, "&e&o help with toggling vanilla gui features");
var SCkeybindhelpCmdMsg = new Message(ChatStart, SCkeybindhelpCmdTC, "&e&o help with creating custom keybinds");
var SCexpertisehelpCmdMsg = new Message(ChatStart, SCexpertisehelpCmdTC, "&e&ohelp with the expertise tracker");
var SCdungeonitemhelpCmdMsg = new Message(ChatStart, SCdungeonitemhelpCmdTC, "&e&ohelp with dungeon info overlay");
var SCautomaddoxhelpCmdMsg = new Message(ChatStart, SCautomaddoxhelpCmdTC, "&e&ohelp with auto maddox");
var SCslayerhealthhelpCmdMsg = new Message(ChatStart, SCslayerhealthhelpCmdTC, "&e&o help with the slayer health display");
var SCauctionclickCmdMsg = new Message(ChatStart, SCauctionclickCmdTC, "&e&ohelp with the auction click feature");


var SCahset1CmdTC = new TextComponent("&6&l/sc ahset1 ").setClick("run_command", "/sc ahset1 Minikloon").setHoverValue("&3Click to set the Auction 1 keybind to Minikloon");
var SCahset2CmdTC = new TextComponent("&6&l/sc ahset2 ").setClick("run_command", "/sc ahset2 TimeDeo").setHoverValue("&3Click to set the Auction 2 keybind to TimeDeo");
var SCahset3CmdTC = new TextComponent("&6&l/sc ahset3 ").setClick("run_command", "/sc ahset3 Technoblade").setHoverValue("&3Click to set the Auction 3 keybind to Technoblade");

var SCahset1CmdMsg = new Message(ChatStart, SCahset1CmdTC, "&e&oset the username for the 'Auction 1' keybind&r");
var SCahset2CmdMsg = new Message(ChatStart, SCahset2CmdTC, "&e&oset the username for the 'Auction 2' keybind&r");
var SCahset3CmdMsg = new Message(ChatStart, SCahset3CmdTC, "&e&oset the username for the 'Auction 2' keybind&r");


var SCahview1CmdTC = new TextComponent("&6&l/sc ahview1 ").setClick("run_command", "/sc ahview1").setHoverValue("&3Click to view the Auction 1 keybind");
var SCahview2CmdTC = new TextComponent("&6&l/sc ahview2 ").setClick("run_command", "/sc ahview2").setHoverValue("&3Click to view the Auction 2 keybind");
var SCahview3CmdTC= new TextComponent("&6&l/sc ahview3 ").setClick("run_command", "/sc ahview3").setHoverValue("&3Click to view the Auction 3 keybind");

var SCahview1CmdMsg = new Message(ChatStart, SCahview1CmdTC, "&e&oview the username for the 'Auction 1' keybind&r");
var SCahview2CmdMsg = new Message(ChatStart, SCahview2CmdTC, "&e&oview the username for the 'Auction 2' keybind&r");
var SCahview3CmdMsg = new Message(ChatStart, SCahview3CmdTC, "&e&oview the username for the 'Auction 3' keybind&r");


var SCsavekeysCmdTC = new TextComponent("&6&l/sc savekeys ").setClick("run_command", "/sc savekeys").setHoverValue("&3Click to run /sc savekeys");

var SCsavekeysCmdMsg = new Message(ChatStart, SCsavekeysCmdTC, "&e&o save your current keybinds, unfortunately they can only be loaded when your client first loads, if you wish to reload them then you must restart your client. When this loads with the client it will overwrite any changes you have made to your settings after your last save so make sure to do /sc savekeys after you change your settings.");
var SCsavekeys_helpCmdMsg = new Message(ChatStart, "&eKeybinds saved! See ", SCsavekeyshelpCmdTC, "&e for more information");

var SCtogglehealthonCmdTC = new TextComponent("&6&lon").setClick("run_command", "/sc togglegui health on").setHoverValue("&3Click to toggle health on");
var SCtogglehealthoffCmdTC = new TextComponent("&6&loff").setClick("run_command", "/sc togglegui health off").setHoverValue("&3Click to toggle health off");
var SCtogglearmouronCmdTC = new TextComponent("&6&lon").setClick("run_command", "/sc togglegui armour on").setHoverValue("&3Click to toggle armour on");
var SCtogglearmouroffCmdTC = new TextComponent("&6&loff").setClick("run_command", "/sc togglegui armour off").setHoverValue("&3Click to toggle armour off");
var SCtogglehungeronCmdTC = new TextComponent("&6&lon").setClick("run_command", "/sc togglegui hunger on").setHoverValue("&3Click to toggle hunger on");
var SCtogglehungeroffCmdTC = new TextComponent("&6&loff").setClick("run_command", "/sc togglegui hunger off").setHoverValue("&3Click to toggle hunger off");
var SCtogglemounthealthonCmdTC = new TextComponent("&6&lon").setClick("run_command", "/sc togglegui mounthealth on").setHoverValue("&3Click to toggle mounthealth on");
var SCtogglemounthealthoffCmdTC = new TextComponent("&6&loff").setClick("run_command", "/sc togglegui mounthealth off").setHoverValue("&3Click to toggle mounthealth off");
var SCtoggleaironCmdTC = new TextComponent("&6&lon").setClick("run_command", "/sc togglegui air on").setHoverValue("&3Click to toggle air on");
var SCtoggleairoffCmdTC = new TextComponent("&6&loff").setClick("run_command", "/sc togglegui air off").setHoverValue("&3Click to toggle air off");

var SCtogglehealthCmdMsg = new Message(ChatStart, "&6/sc togglegui health [ ", SCtogglehealthonCmdTC, " &6/ ", SCtogglehealthoffCmdTC, " &6]");
var SCtogglearmourCmdMsg = new Message(ChatStart, "&6/sc togglegui armour [ ", SCtogglearmouronCmdTC, " &6/ ", SCtogglearmouroffCmdTC, " &6] &e(armor works too)");
var SCtogglehungerCmdMsg = new Message(ChatStart, "&6/sc togglegui hunger [ ", SCtogglehungeronCmdTC, " &6/ ", SCtogglehungeroffCmdTC, " &6]");
var SCtogglemounthealthCmdMsg = new Message(ChatStart, "&6/sc togglegui mounthealth [ ", SCtogglemounthealthonCmdTC, " &6/ ", SCtogglemounthealthoffCmdTC, " &6]");
var SCtoggleairCmdMsg = new Message(ChatStart, "&6/sc togglegui air [ ", SCtoggleaironCmdTC, " &6/ ", SCtoggleairoffCmdTC, " &6] (if toggled off there is a chat warning when you are drowning)");

var SCexpertisetoggleCmdTC = new TextComponent("&6&l/sc expertise toggle").setClick("run_command", "/sc expertise toggle").setHoverValue("&3Click to toggle expertise tracker");
var SCexpertisemoveCmdTC = new TextComponent("&6&l/sc expertise move").setClick("run_command", "/sc expertise move").setHoverValue("&3Click to move the expertise tracker");
var SCexpertiseromanCmdTC = new TextComponent("&6&l/sc expertise roman").setClick("run_command", "/sc expertise roman").setHoverValue("&3Click to use roman numerals");
var SCexpertisenumberCmdTC = new TextComponent("&6&l/sc expertise number").setClick("run_command", "/sc expertise number").setHoverValue("&3Click to use numbers");

var SCexpertisetoggleCmdMsg = new Message(ChatStart, SCexpertisetoggleCmdTC, "&e- toggles the expertise tracker on and off");
var SCexpertisemoveCmdMsg = new Message(ChatStart, SCexpertisemoveCmdTC,"&e- move the expertise tracker");
var SCexpertiseromanCmdMsg = new Message(ChatStart, SCexpertiseromanCmdTC, "&e- change the expertise level to roman numerals (default)");
var SCexpertisenumberCmdMsg = new Message(ChatStart, SCexpertisenumberCmdTC, "&e- change the expertise level to numbers");

var SCdungeonitemtoggleCmdTC = new TextComponent("&6&l/sc dungeonitem toggle").setClick("run_command", "/sc dungeonitem toggle").setHoverValue("&3Click to toggle the dungeon item info overlay");
var SCdungeonitemmoveCmdTC = new TextComponent("&6&l/sc dungeonitem move").setClick("run_command", "/sc dungeonitem move").setHoverValue("&3Click to move the dungeon item info overlay");

var SCdungeonitemtoggleCmdMsg = new Message(ChatStart, SCdungeonitemtoggleCmdTC, "&e- toggles the dungeon item info overlay on and off");
var SCdungeonitemmoveCmdMsg = new Message(ChatStart, SCdungeonitemmoveCmdTC, "&e- move the dungeon item info overlay");

var SCautomaddoxtoggleCmdTC = new TextComponent("&6&l/sc automaddox toggle").setClick("run_command", "/sc automaddox toggle").setHoverValue("&3Click to toggle the automaddox mode");

var SCautomaddoxtoggleCmdMsg = new Message(ChatStart, SCautomaddoxtoggleCmdTC, "&e- toggle the mode of auto maddox");

var SCslayerhealthtoggleCmdTC = new TextComponent("&6&l/sc slayerhealth toggle").setClick("run_command", "/sc slayerhealth toggle").setHoverValue("&3Click to toggle the slayer health display")
var SCslayerhealthmoveCmdTC = new TextComponent("&6&l/sc slayerhealth move").setClick("run_command", "/sc slayerhealth move").setHoverValue("&3Click to move the slayer health display")

var SCslayerhealthtoggleCmdMsg = new Message(ChatStart, SCslayerhealthtoggleCmdTC, "&e- toggle the slayer health display")
var SCslayerhealthmoveCmdMsg = new Message(ChatStart, SCslayerhealthmoveCmdTC, "&e- move the slayer health display");

var SCauctionclicktoggleCmdTC = new TextComponent("&6&l/sc auctionclick toggle").setClick("run_command", "/sc auctionclick toggle").setHoverValue("&3Click to toggle the auction click feature");

var SCauctionclicktoggleCmdMsg = new Message(ChatStart, SCauctionclicktoggleCmdTC, "&e- toggles the auction click feature between modes");

var SCupdatealertTC = new TextComponent("&6&lNew Features! Click to see!").setClick("run_command", "/sc new").setHoverValue("&3Click to see the new features");

var ExampleClickableTC = new TextComponent("&6&lTry this").setClick("run_command", "/sc help").setHoverValue("&3Click this to run /sc help");
var ExampleClickableMsg = new Message(ChatStart, "&eMost bold text is clickable and will say what it does when you hover over it. ", ExampleClickableTC);

// keybind variables

var keybind1 = String(FileLib.read(KeybindFilePath + "keybind1.txt"));
var keybindname1 = String(FileLib.read(KeybindFilePath + "keybindname1.txt"));
var keybindcat1 = String(FileLib.read(KeybindFilePath + "keybindcat1.txt"));

var keybind2 = String(FileLib.read(KeybindFilePath + "keybind2.txt"));
var keybindname2 = String(FileLib.read(KeybindFilePath + "keybindname2.txt"));
var keybindcat2 = String(FileLib.read(KeybindFilePath + "keybindcat2.txt"));

var keybind3 = String(FileLib.read(KeybindFilePath + "keybind3.txt"));
var keybindname3 = String(FileLib.read(KeybindFilePath + "keybindname3.txt"));
var keybindcat3 = String(FileLib.read(KeybindFilePath + "keybindcat3.txt"));

var keybind4 = String(FileLib.read(KeybindFilePath + "keybind4.txt"));
var keybindname4 = String(FileLib.read(KeybindFilePath + "keybindname4.txt"));
var keybindcat4 = String(FileLib.read(KeybindFilePath + "keybindcat4.txt"));

var keybind5 = String(FileLib.read(KeybindFilePath + "keybind5.txt"));
var keybindname5 = String(FileLib.read(KeybindFilePath + "keybindname5.txt"));
var keybindcat5 = String(FileLib.read(KeybindFilePath + "keybindcat5.txt"));

var keybind6 = String(FileLib.read(KeybindFilePath + "keybind6.txt"));
var keybindname6 = String(FileLib.read(KeybindFilePath + "keybindname6.txt"));
var keybindcat6 = String(FileLib.read(KeybindFilePath + "keybindcat6.txt"));

var keybind7 = String(FileLib.read(KeybindFilePath + "keybind7.txt"));
var keybindname7 = String(FileLib.read(KeybindFilePath + "keybindname7.txt"));
var keybindcat7 = String(FileLib.read(KeybindFilePath + "keybindcat7.txt"));

var keybind8 = String(FileLib.read(KeybindFilePath + "keybind8.txt"));
var keybindname8 = String(FileLib.read(KeybindFilePath + "keybindname8.txt"));
var keybindcat8 = String(FileLib.read(KeybindFilePath + "keybindcat8.txt"));

var keybind9 = String(FileLib.read(KeybindFilePath + "keybind9.txt"));
var keybindname9 = String(FileLib.read(KeybindFilePath + "keybindname9.txt"));
var keybindcat9 = String(FileLib.read(KeybindFilePath + "keybindcat9.txt"));

var keybind10 = String(FileLib.read(KeybindFilePath + "keybind10.txt"));
var keybindname10 = String(FileLib.read(KeybindFilePath + "keybindname10.txt"));
var keybindcat10 = String(FileLib.read(KeybindFilePath + "keybindcat10.txt"));

// other MSGs and TCs

var DiscordInviteTC = new TextComponent("&6&lInvite Link").setClick("open_url", DiscordInvite).setHoverValue("&3Open the discord invite");
var DiscordInviteMsg = new Message(ChatStart, "&eThe invite link is https://discord.gg/zyuMB7T or click here =>", DiscordInviteTC);

// in skyblock

function inSkyblock() {
	if (ChatLib.removeFormatting(Scoreboard.getTitle()) == "SKYBLOCK") {
		return true
	}
}

// Function to save keybinds and settings

function saveKeyBinds() {
	var options = String(FileLib.read("./options.txt"));
	FileLib.write(OtherFilePath + "SCoptions.txt", options);
};


// Double Hub warp keybind function

function DoubleHub() {
	ChatLib.command("warp hub");
	setTimeout(() => {
		ChatLib.command("warp hub");
	}, 750);
}

// Module update alert

register("worldLoad", () => {
	if (String(FileLib.read(OtherFilePath + "LastLoadedVersion.txt")) != CurrentVersion) {
		UpdateAlert();
	}
});

function UpdateAlert() {
	setTimeout(() => {
		FileLib.write(OtherFilePath + "LastLoadedVersion.txt", CurrentVersion);
		ChatLib.chat(ChatStart + "&eSkyblockCommands has been updated to version " + CurrentVersion + " ! " + ChatStart);
		ChatLib.chat(ChatStart + "&c&lDISCLAIMER: &eThis module is use at your own risk and features may be bannable.");
		ChatLib.chat(ChatStart + "&eThis is a new version that has not had much testing. There may be bugs. If you find any join my discord server (/sc discord)");
		ChatLib.chat(SCupdatealertTC);
		if (CurrentVersion == "1.8.0") {
			setTimeout(() => {
				ChatLib.chat(ChatStart + "&eI have made a disord server see /sc discord for the invite. It is still a WIP.")
			}, 4000);
		}
	}, 1000);
}

// toggle gui stuff

	// toggleHealth

register("renderHealth", function(hideHealth) {
	if (toggleHealth == "false" && inSkyblock() == true) {
		cancel(hideHealth);
	}
});
 
	// toggleHunger

register("renderFood", function(hideHunger) {
	if (toggleHunger == "false" && inSkyblock() == true) {
		cancel(hideHunger);
	}
});

	// toggleArmour

register("renderArmor", function(hideArmour) {
	if (toggleArmour== "false" && inSkyblock() == true) {
		cancel(hideArmour);
	}
});

	// toggleMountHealth

register("renderMountHealth", function(hideMountHealth) {
	if (toggleMountHealth == "false" && inSkyblock() == true) {
		cancel(hideMountHealth);
	}
});

	// toggleAir

register("renderAir", function(hideAir) {
	var PlayerAir = Player.getAirLevel()
	if (toggleAir == "false" && inSkyblock() == true) {
		cancel(hideAir);
		if (PlayerAir<=0) {
			ChatLib.chat(YouAreDrowning);
			ChatLib.chat(YouAreDrowning2);
		
		} else if (PlayerAir<300) {
			var YouAreDrowning3 = new Message("&3You are underwater and losing air supply! ", String("&9" + (((PlayerAir-(PlayerAir%30))/30)+1))).setChatLineId(3141);
			ChatLib.chat(YouAreDrowning3);
			ChatLib.clearChat(3142);
		} else {
			ChatLib.clearChat(3141);
			ChatLib.clearChat(3142);
		}
	}
});
	
// /ah inactive auction reply revamp

TriggerRegister.registerCommand(ahMSGtrigger).setName("ah");

function ahMSGtrigger(username) {
	if( username == undefined) {
		ChatLib.command("ah");
	} else {
		var ahname = username;
		if (ahname.toUpperCase() == PlayerName.toUpperCase()) {
			FileLib.write(OtherFilePath + "ahMSGvar.txt", "You");
		} else {
			FileLib.write(OtherFilePath + "ahMSGvar.txt", ahname);
		}
		ChatLib.say("/ah " + ahname);
	}
}

register("chat", function(deleteAHmsg) {
	cancel(deleteAHmsg);
	var ahname = String(FileLib.read(OtherFilePath + "ahMSGvar.txt"));
	if (ahname == "You") {
		ChatLib.chat("&r&6" + ahname + " &edon't have any active auctions!&r");
	} else {
		ChatLib.chat("&r&6" + ahname + " &edoesn't have any active auctions!&r");
	}
}).setCriteria("&r&eThis player doesn't have any active auctions!&r");

// /sc command

TriggerRegister.registerCommand(SkyblockCommandsCommand).setName("sc");

function SkyblockCommandsCommand(arg1, arg2, ...args) {
	if (arg1 == undefined || arg1 == "help") {
		ChatLib.chat(ChatLineName);
		ChatLib.chat(" ");
		ChatLib.chat(SCinfoCmdMsg);
		ChatLib.chat(SCahhelpCmdMsg);
		ChatLib.chat(SCsavekeyshelpCmdMsg);
		ChatLib.chat(SCversionCmdMsg);
		ChatLib.chat(SCchangelogCmdMsg);
		ChatLib.chat(SCkeybindhelpCmdMsg);
		ChatLib.chat(SCtoggleguihelpCmdMsg);
		ChatLib.chat(SCexpertisehelpCmdMsg);
		ChatLib.chat(SCdungeonitemhelpCmdMsg);
		ChatLib.chat(SCautomaddoxhelpCmdMsg);
		ChatLib.chat(SCslayerhealthhelpCmdMsg);
		ChatLib.chat(SCauctionclickCmdMsg);
		ChatLib.chat(ExampleClickableMsg);
		ChatLib.chat(ChatLine);
		
	} else if (arg1 == "ahset1") {
		var input = arg2;
		ChatLib.chat(ChatStart + "&eAuction 1 Keybind set: " + input + " " + ChatStart);
		FileLib.write(OtherFilePath + "ahset1.txt", input);
		
	} else if (arg1 == "ahset2") {
		var input = arg2;
		ChatLib.chat(ChatStart + "&eAuction 2 Keybind set: " + input + " " + ChatStart);
		FileLib.write(OtherFilePath + "ahset2.txt", input);
	
	} else if (arg1 == "ahset3") {
		var input = arg2;
		ChatLib.chat(ChatStart + "&eAuction 3 Keybind set: " + input + " " + ChatStart);
		FileLib.write(OtherFilePath + "ahset3.txt", input);
	
	} else if (arg1 == "ahview1") {
		ChatLib.chat(ChatStart + "&eAuction 1 Keybind is " + ahset1 + " " + ChatStart);
	
	} else if (arg1 == "ahview2") {
		ChatLib.chat(ChatStart + "&eAuction 2 Keybind is " + ahset2 + " " + ChatStart);
	
	} else if (arg1 == "ahview3") {
		ChatLib.chat(ChatStart + "&eAuction 3 Keybind is " + ahset3 + " " + ChatStart);
	
	} else if (arg1 == "info" || arg1 == "module") {
		ChatLib.chat(ChatLine);
		ChatLib.chat("&5&k&l00&r&3 Sky&2Block &6Commands &r&5&k&l00&r &3&l&k0&r&6&l&o1&3&l&o.&6&l&o8&3&l&o.&6&l&o4&r&3&l&k0&r&c&o by &r&4&oDolphin0xyz\n&a&l&k1&r&3 Adds keybinds for most skyblock commands, fast travel warps and more in the vanilla controls menu. Use /sc for help and to use some features. &r&a&l&k0\n&r&e&l&k0&r&2 If keys conflicts with other keys things may not work and things outside this moudule may break. &r&e&l&k0\n&r&b&l&k0&r&d Contact me if you find bugs, need help, or have features to suggest. My discord name is Dolphin0xyz#7887 and you can also find me on twitter @Dolphin0xyz. &r&b&l&k0");
		ChatLib.chat(ChatLine);
	
	} else if (arg1 == "savekeys" || arg1 == "savekey") {
		saveKeyBinds();
		ChatLib.chat(SCsavekeys_helpCmdMsg);
	
	} else if (arg1 == "ahhelp") {
		ChatLib.chat(ChatLineName);
		ChatLib.chat(SCahset1CmdMsg);
		ChatLib.chat(SCahset2CmdMsg);
		ChatLib.chat(SCahset3CmdMsg);
		ChatLib.chat(" ");
		ChatLib.chat(SCahview1CmdMsg);
		ChatLib.chat(SCahview2CmdMsg);
		ChatLib.chat(SCahview3CmdMsg);
		ChatLib.chat(ChatLine);
	
	} else if (arg1 == "savekeyshelp" || arg1 == "savekeyhelp") {
		ChatLib.chat(ChatLineName);
		ChatLib.chat(SCsavekeysCmdMsg);
		ChatLib.chat(ChatLine);
		
	} else if (arg1 == "version") {
		ChatLib.chat(ChatStart + "&eYou are currently using version &6" + CurrentVersion + "&e of SkyblockCommands");
	
	} else if (arg1 == "togglegui") {
		if (arg2 == undefined) {
			ChatLib.command("sc toggleguihelp", true);
		
		} else if (arg2 == "health") {
			if (args[0] == "on") {
				var toggleHealth = "true";
				FileLib.write(ToggleGUIFilePath + "toggleHealth.txt", toggleHealth);
				ChatLib.chat(ChatStart + "&eHealth toggled on");
			
			} else if (args[0] == "off") {
				var toggleHealth = "false";
				FileLib.write(ToggleGUIFilePath + "toggleHealth.txt", toggleHealth);
				ChatLib.chat(ChatStart + "&eHealth toggled off");
			}
			
		} else if (arg2 == "hunger") {
			if (args[0] == "on") {
				var toggleHunger = "true";
				FileLib.write(ToggleGUIFilePath + "toggleHunger.txt", toggleHunger);
				ChatLib.chat(ChatStart + "&eHunger toggled on");
			
			} else if (args[0] == "off") {
				var toggleHunger = "false";
				FileLib.write(ToggleGUIFilePath + "toggleHunger.txt", toggleHunger);
				ChatLib.chat(ChatStart + "&eHunger toggled off");
			}
			
		} else if (arg2 == "armour" || arg2 == "armor") {
			if (args[0] == "on") {
				var toggleArmour = "true";
				FileLib.write(ToggleGUIFilePath + "toggleArmour.txt", toggleArmour);
				ChatLib.chat(ChatStart + "&eArmour toggled on");
			
			} else if (args[0] == "off") {
				var toggleArmour = "false";
				FileLib.write(ToggleGUIFilePath + "toggleArmour.txt", toggleArmour);
				ChatLib.chat(ChatStart + "&eArmour toggled off");
			}
			
		} else if (arg2 == "mounthealth") {
			if (args[0] == "on") {
				var toggleMountHealth = "true";
				FileLib.write(ToggleGUIFilePath + "toggleMountHealth.txt", toggleMountHealth);
				ChatLib.chat(ChatStart + "&eMount Health toggled on");
			
			} else if (args[0] == "off") {
				var toggleMountHealth = "false";
				FileLib.write(ToggleGUIFilePath + "toggleMountHealth.txt", toggleMountHealth);
				ChatLib.chat(ChatStart + "&eMount Health toggled off");
			}
		} else if (arg2 == "air") {
			if (args[0] == "on") {
				var toggleAir = "true";
				FileLib.write(ToggleGUIFilePath + "toggleAir.txt", toggleAir);
				ChatLib.chat(ChatStart + "&eAir toggled on");
			
			} else if (args[0] == "off") {
				var toggleAir = "false";
				FileLib.write(ToggleGUIFilePath + "toggleAir.txt", toggleAir);
				ChatLib.chat(ChatStart + "&eAir toggled off");
			
			}
		}
	
	} else if(arg1 == "toggleguihelp") {
		ChatLib.chat(ChatLineName);
		ChatLib.chat("&eThere are 5 elements you can toggle on and off: health, armour, hunger, mount health and air level.");
		ChatLib.chat("&eThis only applies in Skyblock");
		ChatLib.chat(SCtogglehealthCmdMsg);
		ChatLib.chat(SCtogglearmourCmdMsg);
		ChatLib.chat(SCtogglehungerCmdMsg);
		ChatLib.chat(SCtogglemounthealthCmdMsg);
		ChatLib.chat(SCtoggleairCmdMsg);
		ChatLib.chat(ChatLine);
	
	} else if (arg1 == "keybind") {
		if (arg2.includes("setname")) {
			var number = arg2.substr(7,2);
			if (arg2 == String("setname" + number)) {
				var args = args.join(" ");
				FileLib.write(KeybindFilePath + "keybindname" + number + ".txt", args);
				ChatLib.chat(ChatStart + "&eCustom keybind " + number + " is now called: \"" + args + "\"");
				ChatLib.chat(ChatStart + "&eRemeber to set the function and category");
			}
		
		} else if (arg2.includes("setcategory")) {
			var number = arg2.substr(11,2);
			if (arg2 == String("setcategory" + number)) {
				var args = args.join(" ");
				FileLib.write(KeybindFilePath + "keybindcat" + number + ".txt", args);
				ChatLib.chat(ChatStart + "&eCustom keybind " + number + " is now in the category: \"" + args + "\"");
				ChatLib.chat(ChatStart + "&eRemeber to set the name and function");
			}
		
		} else if (arg2.includes("set")) {
			var number = arg2.substr(3,2);
			if (arg2 == String("set" + number)) {
				var args = args.join(" ");	
				FileLib.write(KeybindFilePath + "keybind" + number + ".txt", args);
				ChatLib.chat(ChatStart + "&eCustom keybind " + number + " is now set to: \"" + args + "\"");
				ChatLib.chat(ChatStart + "&eRemeber to set the name and category");
			}
		
		} else if (arg2.includes("view")) {
			var number = arg2.substr(4,2);
			if (arg2 == String("view" + number)) {
				var args = FileLib.read(KeybindFilePath + "keybind" + number + ".txt");
				var cat = FileLib.read(KeybindFilePath + "keybindcat" + number + ".txt");
				var name = FileLib.read(KeybindFilePath + "keybindname" + number + ".txt");
				ChatLib.chat(ChatStart + "&eCustom keybind " + number + " is set to: \"" + args + "\"");
				ChatLib.chat(ChatStart + "&eCustom keybind " + number + " is in the category: \"" + cat + "\"");
				ChatLib.chat(ChatStart + "&eCustom keybind " + number + " is called: \"" + name + "\"");
			}
		} else if (arg2.includes("delete")) {
			var number = arg2.substr(6,2);
			if (arg2 == String("view" + number)) {
				FileLib.write(KeybindFilePath + "keybind" + number + ".txt", "null");
				FileLib.write(KeybindFilePath + "keybindname" + number + ".txt", "null");
				FileLib.write(KeybindFilePath + "keybindcat" + number + ".txt", "null");
				ChatLib.chat(ChatStart + "&eCustom keybind " + number + "has been deleted");
			}
		}
		
	} else if (arg1 == "keybindhelp") {
		ChatLib.chat(ChatLineName);
		ChatLib.chat(ChatStart + "&6/sc keybind set[1-10] [text]&e - Sets keybind[1-10] to [text], can be multiple words and commands. Please don't use the & symbol.");
		ChatLib.chat(ChatStart + "&6/sc keybind setname[1-10] [name]&e - Sets keybind[1-10] name to [name], can be multiple words.");
		ChatLib.chat(ChatStart + "&6/sc keybind setcategory[1-10] [category]&e - Sets keybind[1-10] in the category [category]. Can be prexisting or new.");
		ChatLib.chat(ChatStart + "&6/sc keybind view[1-10]&e - See the text, name and category of keybind[1-10]");
		ChatLib.chat(ChatStart + "&6/sc keybind delete[1-10]&e - Deletes keybind[1-10], cannot be undone");
		ChatLib.chat(ChatStart + "&eThere will be a keybind called \"null\" in the category \"null\" at the bottom of your keybind page, ignore that, it is not a bug");
		ChatLib.chat(ChatLine);

	} else if (arg1 == "expertise") {
		if (arg2 == "move") {
			ExpertiseMove.open();
			ChatLib.chat(ChatStart + "&eDrag the mouse or click to move the expertise tracker");
			
		} else if (arg2 == "toggle") {
			var expertisetoggle = String(FileLib.read(ExpertiseFilePath + "toggle.txt"));
			if(expertisetoggle !=  "true") {
				FileLib.write(ExpertiseFilePath + "toggle.txt", true);
				ChatLib.chat(ChatStart + "&eExpertise tracker on");
			
			} else if (expertisetoggle == "true") {
				FileLib.write(ExpertiseFilePath + "toggle.txt", false);
				ChatLib.chat(ChatStart + "&eExpertise tracker off");
			}
			
		} else if (arg2 == "roman") {
			FileLib.write(ExpertiseFilePath + "RomanNumeral.txt", true);
			ChatLib.chat(ChatStart + "&eExpertise levels will now be displayed in roman numerals.");
		
		} else if (arg2 == "number") {
			FileLib.write(ExpertiseFilePath + "RomanNumeral.txt", false);
			ChatLib.chat(ChatStart + "&eExpertise levels will now be displayed in numbers.");
		}
		
	} else if (arg1 == "dungeonitem") {
		if (arg2 == "move") {
			DungeonItemMove.open();
			ChatLib.chat(ChatStart + "&eDrag the mouse or click to move the dungeon item info");
			
		} else if (arg2 == "toggle") {
			var dungeonitemtoggle = String(FileLib.read(DungeonItemFilePath + "toggle.txt"));
			if(dungeonitemtoggle !=  "true") {
				FileLib.write(DungeonItemFilePath + "toggle.txt", true);
				ChatLib.chat(ChatStart + "&eDungeon item info on");
			
			} else if (dungeonitemtoggle == "true") {
				FileLib.write(DungeonItemFilePath + "toggle.txt", false);
				ChatLib.chat(ChatStart + "&eDungeon item info off");
			}
		}
		
	} else if (arg1 == "dungeonitemhelp") {
		ChatLib.chat(ChatLineName);
		ChatLib.chat(ChatStart + "&eThe dungeon item info only appears when holding an item dropped in a dungeon");
		ChatLib.chat(ChatStart + "&eIt shows the quality out of 50 and the floor obtained from");
		ChatLib.chat(SCdungeonitemtoggleCmdMsg);
		ChatLib.chat(SCdungeonitemmoveCmdMsg);
		ChatLib.chat(ChatLine);
	
	} else if (arg1 == "expertisehelp") {
		ChatLib.chat(ChatLineName);
		ChatLib.chat(ChatStart + "&eThe expertise tracker only appears when holding an fishing rod with expertise");
		ChatLib.chat(ChatStart + "&eIt shows the current enchant level and how many kills out of the next level");
		ChatLib.chat(SCexpertisetoggleCmdMsg);
		ChatLib.chat(SCexpertisemoveCmdMsg);
		ChatLib.chat(SCexpertiseromanCmdMsg);
		ChatLib.chat(SCexpertisenumberCmdMsg);
		ChatLib.chat(ChatLine);

	} else if (arg1 == "automaddox") {
		if (arg2 == "toggle") {
			var automaddoxtoggle = String(FileLib.read(AutoMaddoxFilePath + "toggle.txt"));
			if(automaddoxtoggle != "2" && automaddoxtoggle != "1") {
				FileLib.write(AutoMaddoxFilePath + "toggle.txt", "1");
				ChatLib.chat(ChatStart + "&eFull auto Maddox");
			
			} else if (automaddoxtoggle == "1") {
				FileLib.write(AutoMaddoxFilePath + "toggle.txt", "2");
				ChatLib.chat(ChatStart + "&eBoss death only auto maddox");
			
			} else if (automaddoxtoggle == "2") {
				FileLib.write(AutoMaddoxFilePath + "toggle.txt", "3")
				ChatLib.chat(ChatStart + "&eKeybind only auto maddox.")
			}
		}

	} else if (arg1 == "automaddoxhelp") {
		ChatLib.chat(ChatLineName);
		ChatLib.chat(ChatStart + "&eAuto maddox will automatically open the maddox menu, however, the action can still expire")
		ChatLib.chat(ChatStart + "&eThere are 3 settings, keybind only where the maddox menu is opened on pressing a key. Boss death only, where the batphone is automatically activated on the death of a slayer, and full where the batphone will activate as soon as it is used unless you are in a boss fight.")
		ChatLib.chat(SCautomaddoxtoggleCmdMsg);
		ChatLib.chat(ChatLine);

	} else if (arg1 == "slayerhealth") {
		if (arg2 == "toggle") {
			var slayerhealthtoggle = String(FileLib.read(AutoMaddoxFilePath + "shtoggle.txt"));
			if (slayerhealthtoggle !=  "true") {
				FileLib.write(AutoMaddoxFilePath + "shtoggle.txt", true);
				ChatLib.chat(ChatStart + "&eSlayer health display on");
			
			} else if (slayerhealthtoggle == "true") {
				FileLib.write(AutoMaddoxFilePath + "shtoggle.txt", false);
				ChatLib.chat(ChatStart + "&eSlayer health display off");
			}

		} else if (arg2 == "move") {
			SlayerHealthMove.open();
			ChatLib.chat(ChatStart + "&eDrag the mouse or click to move the slayer health display");
		}
		
	} else if (arg1 == "slayerhealthhelp") {
		ChatLib.chat(ChatLineName);
		ChatLib.chat(ChatStart + "&eWhen you are doing a slayer boss this feature will show its health on screen")
		ChatLib.chat(SCslayerhealthtoggleCmdMsg);
		ChatLib.chat(SCslayerhealthmoveCmdMsg)
		ChatLib.chat(ChatLine);

	} else if (arg1 == "auctionclick") {
		if (arg2 == "toggle") {
			var auctionclicktoggle = String(FileLib.read(OtherFilePath + "auctionclicktoggle.txt"));
			if (auctionclicktoggle !=  "true") {
				FileLib.write(OtherFilePath + "auctionclicktoggle.txt", true);
				ChatLib.chat(ChatStart + "&eAuction will open on bid");
			
			} else if (auctionclicktoggle == "true") {
				FileLib.write(OtherFilePath + "auctionclicktoggle.txt", false);
				ChatLib.chat(ChatStart + "&eAuction won't open on bid, keybind still useable");
			}
		}

	} else if (arg1 == "auctionclickhelp") {
		ChatLib.chat(ChatLineName);
		ChatLib.chat(ChatStart + "&eWhen you are outbid on an auction or your auction is bidded on this feature allows you to either automatically open the auction or open it with a keybind.");
		ChatLib.chat(SCauctionclicktoggleCmdMsg);
		ChatLib.chat(ChatLine);
		
	} else if (arg1 == "changelog") {
		if (arg2 == undefined) {
			ChatLib.chat(ChatLineNameIDMSG);
			ChatLib.chat(ChangelogCenteredTextIDMSG);
			ChatLib.chat(V1_4_3ChangelogMsg);
			ChatLib.chat(V1_5_0ChangelogMsg);
			ChatLib.chat(V1_5_1ChangelogMsg);
			ChatLib.chat(V1_6_0ChangelogMsg);
			ChatLib.chat(V1_6_1ChangelogMsg);
			ChatLib.chat(V1_6_2ChangelogMsg);
			ChatLib.chat(V1_6_3ChangelogMsg);
			ChatLib.chat(V1_6_4ChangelogMsg);
			ChatLib.chat(V1_6_5ChangelogMsg);
			ChatLib.chat(V1_6_6ChangelogMsg);
			ChatLib.chat(V1_7_0ChangelogMsg);
			ChatLib.chat(V1_7_1ChangelogMsg);
			ChatLib.chat(V1_7_2ChangelogMsg);
			ChatLib.chat(V1_7_3ChangelogMsg);
			ChatLib.chat(V1_7_4ChangelogMsg);
			ChatLib.chat(V1_8_0ChangelogMsg);
			ChatLib.chat(ChatLineIDMSG);
		
		} else if (arg2 == "1.4.3") {
			V1_4_3Changelog();
		
		} else if (arg2 == "1.5.0") {
			V1_5_0Changelog();
			
		} else if (arg2 == "1.5.0") {
			V1_5_0Changelog();
			
		} else if (arg2 == "1.5.0") {
			V1_5_0Changelog();
		
		} else if (arg2 == "1.5.1") {
			V1_5_1Changelog();
		
		} else if (arg2 == "1.6.0") {
			V1_6_0Changelog();
		
		} else if (arg2 == "1.6.1") {
			V1_6_1Changelog();
		
		} else if (arg2 == "1.6.2") {
			V1_6_2Changelog();
		
		} else if (arg2 == "1.6.3") {
			V1_6_3Changelog();
		
		} else if (arg2 == "1.6.4") {
			V1_6_4Changelog();
		
		} else if (arg2 == "1.6.5") {
			V1_6_5Changelog();
		
		} else if (arg2 == "1.6.6") {
			V1_6_6Changelog();
			
		} else if (arg2 == "1.7.0") {
			V1_7_0Changelog();
		
		} else if (arg2 == "1.7.1") {
			V1_7_1Changelog();
		
		} else if (arg2 == "1.7.2") {
			V1_7_2Changelog();
			
		} else if (arg2 == "1.7.3") {
			V1_7_3Changelog();		

		} else if (arg2 == "1.7.4") {
			V1_7_4Changelog();

		} else if (arg2 == "1.8.0") {
			V1_8_0Changelog();

		} else if (arg2 == "1.8.1") {
			V1_8_1Changelog();

		} else if (arg2 == "1.8.2") {
			ChatLib.chat("&e&m-------------------&6 Changelog:  1.8.2 &r&e&m-------------------");
            ChatLib.chat("&6New Features:");
            ChatLib.chat("&e/sc expertise is renamed to /sc fishing");
            ChatLib.chat("&eThe expertise tracer includes a dolphin pet tracker");
            ChatLib.chat("&eNew mining tracker /sc mininghelp for more info");
            ChatLib.chat("&eIncludes rock pet and compact tracker");
            ChatLib.chat("&eMathmatical hoe tracker coming soon!");
            ChatLib.chat(ChangelogBackMsg);
            ChatLib.chat(ChatLine);

		} else if (arg2 == "1.8.3") {
			ChatLib.chat("&e&m-------------------&6 Changelog:  1.8.3 &r&e&m-------------------");
            ChatLib.chat("&eReverts to 1.8.1 due to large amounts of lag.");
            ChatLib.chat(ChangelogBackMsg);
            ChatLib.chat(ChatLine);

		} else if (arg2 == "1.8.4") {
			ChatLib.chat("&e&m-------------------&6 Changelog:  1.8.4 &r&e&m-------------------");
			ChatLib.chat("&6New Keybinds");
			ChatLib.chat("&eEnchantment Table - runs /et");
			ChatLib.chat("&eAnvil - runs /av");
			ChatLib.chat("");
			ChatLib.chat("I am working to reduce the lag and bring back the changes from 1.8.2")
            ChatLib.chat(ChangelogBackMsg);
            ChatLib.chat(ChatLine);

		}
		
	} else if (arg1 == "new") {
		ChatLib.command("sc changelog 1.8.1", true);
	
	} else if (arg1 == "discord") {
		ChatLib.chat(ChatStart + "&eI made a discord server for this module. Please join it. It is still a WIP and staff are required.")
		ChatLib.chat(DiscordInviteMsg);

	} else if (arg1 == "updatealert") {
		UpdateAlert();
		
	} else {
		if (args == undefined) {
			if (arg2 == undefined) {
				var input = arg1;
				ChatLib.chat(ChatStart + "&6/sc " + input + "&e isn't a command. See &6/sc&e for help and info.");

			} else {
				var input = arg1 + " " + arg2;
				ChatLib.chat(ChatStart + "&6/sc " + input + "&e isn't a command. See &6/sc&e for help and info.");

			}
		} else {
			var input = arg1 + " " + arg2 + " " + args;
			ChatLib.chat(ChatStart + "&6/sc " + input + "&e isn't a command. See &6/sc&e for help and info.");
		}
	}
}

// Changelog

function V1_4_3Changelog() {
	ChatLib.chat("&e&m-------------------&6 Changelog:  1.4.3 &e&m-------------------");
	ChatLib.chat("&6Other Changes:");
	ChatLib.chat(ChatStart + "&eAuto-update compatability added.");
	ChatLib.chat(ChangelogBackMsg);
	ChatLib.chat(ChatLine);
}

function V1_5_0Changelog() {
	ChatLib.chat("&e&m-------------------&6 Changelog:  1.5.0 &e&m-------------------");
	ChatLib.chat("&6Keybind Changes:");
	ChatLib.chat(ChatStart + "&eAdds a keybind to check your ah.");
	ChatLib.chat(ChatStart + "&eAdds 3 configurable keybinds to check other users ah.");
	ChatLib.chat(ChatStart + "&6Command Changes:");
	ChatLib.chat(ChatStart + "&eNew command /sc used to configure keybinds.");
	ChatLib.chat(ChangelogBackMsg);
	ChatLib.chat(ChatLine);
}

function V1_5_1Changelog() {
	ChatLib.chat("&e&m-------------------&6 Changelog:  1.5.1 &e&m-------------------");
	ChatLib.chat("&6Command Changes:");
	ChatLib.chat("&eAdds /sc ahview command to view what the new ah keybinds are set to.");
	ChatLib.chat(ChangelogBackMsg);
	ChatLib.chat(ChatLine);
}

function V1_6_0Changelog() {
	ChatLib.chat("&e&m-------------------&6 Changelog:  1.6.0 &e&m-------------------");
	ChatLib.chat("&6Keybind Changes:");
	ChatLib.chat("&eSkyblock - runs /skyblock");
	ChatLib.chat("&rDouble Hub Warp - warps to skyblock hub twice to get to the main spawn");
	ChatLib.chat("&6Command Changes:");
	ChatLib.chat("&e/sc now - lists help commands rather than all commands");
	ChatLib.chat("&e/sc info - gives module info found in metadata");
	ChatLib.chat("&e/sc ahhelp - list the ah commands");
	ChatLib.chat("&e/sc savekeys - saves your current keybinds and settings. &nTHIS IS ONLY LOADED ON CLIENT LAUNCH");
	ChatLib.chat("&e/sc savekeyshelp - more info on /sc savekeys");
	ChatLib.chat("&6Other Changes:");
	ChatLib.chat("&eMessage appears when SkyblockCommands updates");
	ChatLib.chat(ChangelogBackMsg);
	ChatLib.chat(ChatLine);
}

function V1_6_1Changelog() {
	ChatLib.chat("&e&m-------------------&6 Changelog:  1.6.1 &e&m-------------------");
	ChatLib.chat("&6Keybind Changes:");
	ChatLib.chat("&eGEXP - runs /g member");
	ChatLib.chat("&e/g top - runs /g top");
	ChatLib.chat("&e/g list - runs /g list");
	ChatLib.chat("&e/g party - runs /g party");
	ChatLib.chat("&e/p warp - runs /p warp");
	ChatLib.chat("&e/p list - runs /p list");
	ChatLib.chat("&6Command Changes:");
	ChatLib.chat("&e/sc version - displays the current version");
	ChatLib.chat("&e/sc changelog - displays the changelog (WIP)");
	ChatLib.chat("&eChanges to /sc, /sc savekeys and /sc savekeyshelp");
	ChatLib.chat(ChangelogBackMsg);
	ChatLib.chat(ChatLine);
}

function V1_6_2Changelog() {
	ChatLib.chat("&e&m-------------------&6 Changelog:  1.6.2 &e&m-------------------");
	ChatLib.chat("&eBug fixes");
	ChatLib.chat(ChangelogBackMsg);
	ChatLib.chat(ChatLine);
}

function V1_6_3Changelog() {
	ChatLib.chat("&e&m-------------------&6 Changelog:  1.6.3 &e&m-------------------");
	ChatLib.chat("&6Keybind Changes:");
	ChatLib.chat("&e/p leave - runs /p leave");
	ChatLib.chat("&6Command Changes:");
	ChatLib.chat("&e/sc help - runs /sc");
	ChatLib.chat("&6Other Changes:");
	ChatLib.chat("&eWhen running /ah the reply now says who has no active auctions");
	ChatLib.chat(ChangelogBackMsg);
	ChatLib.chat(ChatLine);
}

function V1_6_4Changelog() {
	ChatLib.chat("&e&m-------------------&6 Changelog:  1.6.4 &e&m-------------------");
	ChatLib.chat("&eBug fixes");
	ChatLib.chat(ChangelogBackMsg);
	ChatLib.chat(ChatLine);
}

function V1_6_5Changelog() {
	ChatLib.chat("&e&m-------------------&6 Changelog:  1.6.5 &e&m-------------------");
	ChatLib.chat("&eBug fixes");
	ChatLib.chat("&6Other Changes:")
	ChatLib.chat("&eWhen checking your ah the reply now says 'you' instead of your username");
	ChatLib.chat(ChangelogBackMsg);
	ChatLib.chat(ChatLine);
}

function V1_6_6Changelog() {
	ChatLib.chat("&e&m-------------------&6 Changelog:  1.6.6 &e&m-------------------");
	ChatLib.chat("&eBug fixes");
	ChatLib.chat(ChangelogBackMsg);
	ChatLib.chat(ChatLine);
}

function V1_7_0Changelog() {
	ChatLib.chat("&e&m-------------------&6 Changelog:  1.7.0 &e&m-------------------");
	ChatLib.chat("&6Keybind Changes:");
	ChatLib.chat("&esavekeys - runs /sc savekeys (this is also automatically ran when you leave a world/server)");
	ChatLib.chat("&6Command Changes:");
	ChatLib.chat("&eCommand appearance has been changed");
	ChatLib.chat("&eClickable messages have been added to help menus");
	ChatLib.chat("&e/sc toggleguihelp - help with new togglegui features (/sc togglegui also works)");
	ChatLib.chat("&ehealth, hunger, armour, mount health and air level are now toggleable (this is only within skyblock)");
	ChatLib.chat("&6Other Changes:");
	ChatLib.chat("&eCode is more organised");
	ChatLib.chat(ChangelogBackMsg);
	ChatLib.chat(ChatLine);
}

function V1_7_1Changelog() {
	ChatLib.chat("&e&m-------------------&6 Changelog:  1.7.1 &e&m-------------------");
	ChatLib.chat("&6Bug fixes:");
	ChatLib.chat("&eUpdate message no longer comes on every load"); 
	ChatLib.chat("&eSome hoverable messages have been changed;");
	ChatLib.chat("&eah message fixed")
	ChatLib.chat("&6Keybind Changes:");
	ChatLib.chat("&6Other Changes:");
	ChatLib.chat("&eWhen you are losing health from drowning a separate warning appears and both warnings have the number of air  bubbles");	
	ChatLib.chat(ChangelogBackMsg);
	ChatLib.chat(ChatLine);
}

function V1_7_2Changelog() {
	ChatLib.chat("&e&m-------------------&6 Changelog:  1.7.2 &e&m-------------------");
	ChatLib.chat("&6Keybind Changes:");
	ChatLib.chat("&eah - runs /ah");
	ChatLib.chat("&ebazaar - runs /bazaar");
	ChatLib.chat("&6Command Changes:");
	ChatLib.chat("&eNew /sc keybind commands, see /sc keybindhelp for more info")
	ChatLib.chat(ChangelogBackMsg);
	ChatLib.chat(ChatLine);
}

function V1_7_3Changelog() {
	ChatLib.chat("&e&m-------------------&6 Changelog:  1.7.3 &e&m-------------------");
	ChatLib.chat("&eBug fixes");
	ChatLib.chat(ChangelogBackMsg);
	ChatLib.chat(ChatLine);
}

function V1_7_4Changelog() {
	ChatLib.chat("&e&m-------------------&6 Changelog:  1.7.4 &r&e&m-------------------");
	ChatLib.chat("&6Keybind Changes:");
	ChatLib.chat("&eEffects - runs /effects");
	ChatLib.chat("&eEvents - runs /events");
	ChatLib.chat("&eJerry Island - warps to jerry island (only works when its open)");
	ChatLib.chat("&e/g online - runs /g online");
	ChatLib.chat(ChangelogBackMsg);
	ChatLib.chat(ChatLine);
}

function V1_8_0Changelog() {
	ChatLib.chat("&e&m-------------------&6 Changelog:  1.8.0 &r&e&m-------------------");
	ChatLib.chat("&6New Features:");
	ChatLib.chat("&eExpertise Tracker - tracks expertise kills on fishing rod, movable display, see /sc expertisehelp");
	ChatLib.chat("&eDungeon Item Info - Display with floor and quality of held dungeon item, see /sc dungeonitemhelp");
	ChatLib.chat("&eAutoMaddox - Opens maddox after boss is killed and more, see /sc automaddoxhelp");
	ChatLib.chat("&eSlayer Health Display - Shows the health of your slayer boss on screen, see /sc slayerhealthhelp");
	ChatLib.chat("&eAuction Click - when you are outbid or your auction is bid on a keybind can be used to open the auction or automatically, see /sc auctionclickhelp");
	ChatLib.chat("&6New Keybinds:");
	ChatLib.chat("&eAuto Maddox - opens the maddox menu, see /sc automaddoxhelp");
	ChatLib.chat("&eAuction Click - opens the last auction, see /sc auctionclickhelp");
	ChatLib.chat(ChangelogBackMsg);
	ChatLib.chat(ChatLine);
}

function V1_8_1Changelog() {
	ChatLib.chat("&e&m-------------------&6 Changelog:  1.8.1 &r&e&m-------------------");
	ChatLib.chat("&eFixed performance issues when doing a slayer boss.")
	ChatLib.chat(ChangelogBackMsg);
	ChatLib.chat(ChatLine);

}

// Expertise Tracker

var RomanNum = String(FileLib.read(ExpertiseFilePath + "RomanNumeral.txt"));
var ExpertiseDisplayX = String(FileLib.read(ExpertiseFilePath + "x.txt"));
var ExpertiseDisplayY = String(FileLib.read(ExpertiseFilePath + "y.txt"));
var expertisetoggle = String(FileLib.read(ExpertiseFilePath + "toggle.txt"));

register("gameLoad", () => {
	if (FileLib.read(ExpertiseFilePath + "x.txt") == undefined) {
		FileLib.write(ExpertiseFilePath + "x.txt", ScreenWidth/2);
	}
	if (FileLib.read(ExpertiseFilePath + "y.txt") == undefined) {
		FileLib.write(ExpertiseFilePath + "y.txt", ScreenHeight/2);
	}
});

function ExpertiseKills() {
	var HeldItem = Player.getHeldItem();
	if (HeldItem.getID() == 346) {
		if (HeldItem.getItemNBT().getCompoundTag("tag").getCompoundTag("ExtraAttributes").get("id") != "GRAPPLING_HOOK") {
			var ExpertiseKills = HeldItem.getItemNBT().getCompoundTag("tag").getCompoundTag("ExtraAttributes").get("expertise_kills");
			if (ExpertiseKills == undefined) {
				return false;
			}
			return ExpertiseKills;
		}
	}
}

function Expertise() {
	if (ExpertiseKills() >= 15000) {
		return "MAX X 10";
		
	} else if (ExpertiseKills() >= 10000) {
		return "15000 IX 9";
		
	} else if (ExpertiseKills() >= 5500) {
		return "10000 VII 8";
	
	} else if (ExpertiseKills() >= 2500) {
		return "5500 VII 7";
	
	} else if (ExpertiseKills() >= 1000) {
		return "2500 VI 6";
	
	} else if (ExpertiseKills() >= 500) {
		return "1000 V 5";
	
	} else if (ExpertiseKills() >= 250) {
		return "500 IV 4";
	
	} else if (ExpertiseKills() >= 100) {
		return "250 III 3";
	
	} else if (ExpertiseKills() >= 50) {
		return "100 II 2";
	
	} else if (ExpertiseKills() >= 0) {
		return "50 I 1";
	
	} else {
		return false;
	}
}

function ExpertiseTracker() {
	if (Expertise() == false || ExpertiseKills() == false) {
		return false;
	}
	var ExpertiseStr = Expertise().split(" ");
	var KillsToNextLevel = ExpertiseStr[0];
	var LevelRoman = ExpertiseStr[1];
	var LevelNumber = ExpertiseStr[2];
	var RomanNum = String(FileLib.read(ExpertiseFilePath + "RomanNumeral.txt"));
	if (RomanNum != "false") {
		var ExpertiseTrackerVar = String("&3[&6Expertise " + LevelRoman + "&3] &e" + ExpertiseKills() + "&6/&e" + KillsToNextLevel);
		return ExpertiseTrackerVar;
	} else if (RomanNum == "false") {
		var ExpertiseTrackerVar = String("&3[&6Expertise " + LevelNumber + "&3] &e" + ExpertiseKills() + "&6/&e" + KillsToNextLevel);
		return ExpertiseTrackerVar;
	}
}

register("dragged", (deltax, deltay, x, y) => {
	if (ExpertiseMove.isOpen()) {
		FileLib.write(ExpertiseFilePath + "x.txt", x)
		FileLib.write(ExpertiseFilePath + "y.txt", y)
	}
});

var ExpertiseMove = new Gui();

var ExpertiseDisplay = new Display();
ExpertiseDisplay.addLine(1);

register("renderOverlay", () => {
	var expertisetoggle = String(FileLib.read(ExpertiseFilePath + "toggle.txt"));
	if (ExpertiseTracker() == false || expertisetoggle == "false") {
		if (!ExpertiseMove.isOpen()) {
			return ExpertiseDisplay.shouldRender = false;
		}
	}
	
	var ExpertiseDisplayX = String(FileLib.read(ExpertiseFilePath + "x.txt"));
	var ExpertiseDisplayY = String(FileLib.read(ExpertiseFilePath + "y.txt"));
	ExpertiseDisplay.setRenderLoc(ExpertiseDisplayX, ExpertiseDisplayY);
	ExpertiseDisplay.shouldRender = true;
	if (ExpertiseMove.isOpen()) {
		ExpertiseDisplay.setLine(1, new DisplayLine("&3[&6Expertise ?&3] &e?&6/&e?").setShadow(true));
		ExpertiseDisplay.render();
	} else {
		ExpertiseDisplay.setLine(1, new DisplayLine(ExpertiseTracker()).setShadow(true));
		ExpertiseDisplay.render();
	}
});
 
// Dungeon Item info

var DungeonItemFilePath = "./config/ChatTriggers/modules/SkyblockCommands/dungeonitem/";

var dungeonitemtoggle = String(FileLib.read(DungeonItemFilePath + "toggle.txt"));
var DungeonItemDisplayX = String(FileLib.read(DungeonItemFilePath + "x.txt"));
var DungeonItemDisplayY = String(FileLib.read(DungeonItemFilePath + "y.txt"));


function getBSBP() {
	var HeldItem = Player.getHeldItem();
	var BSBP = HeldItem.getItemNBT().getCompoundTag("tag").getCompoundTag("ExtraAttributes").get("baseStatBoostPercentage");
	if (BSBP == undefined) {
		return false;
	}
	if (BSBP == 50) {
		return String("&aItem Quality: &6&l" + BSBP + "&r&c/50");
	}
	return String("&aItem Quality: &c" + BSBP + "/50");
}

function getFloor() {
	var HeldItem = Player.getHeldItem();
	var Floor = HeldItem.getItemNBT().getCompoundTag("tag").getCompoundTag("ExtraAttributes").get("item_tier");
	if (Floor == undefined) {
		return false;
	}
	return String("&aFloor: &c" + Floor);
}

register("dragged", (deltax, deltay, x, y) => {
	if (DungeonItemMove.isOpen()) {
		FileLib.write(DungeonItemFilePath + "x.txt", x)
		FileLib.write(DungeonItemFilePath + "y.txt", y)
	}
});

var DungeonItemMove = new Gui();

var DungeonItemDisplay = new Display();
DungeonItemDisplay.addLine(1);
DungeonItemDisplay.addLine(2);

	
register("renderOverlay", () => {
	var dungeonitemtoggle = String(FileLib.read(DungeonItemFilePath + "toggle.txt"));
	if (getBSBP() == false || getFloor() == false || dungeonitemtoggle == "false") {
		if (!DungeonItemMove.isOpen()) {
			return DungeonItemDisplay.shouldRender = false;
		}
	}
	DungeonItemDisplay.shouldRender = true;
	var DungeonItemDisplayX = String(FileLib.read(DungeonItemFilePath + "x.txt"));
	var DungeonItemDisplayY = String(FileLib.read(DungeonItemFilePath + "y.txt"));
	DungeonItemDisplay.setRenderLoc(DungeonItemDisplayX, DungeonItemDisplayY);
	if (DungeonItemMove.isOpen()) {
		DungeonItemDisplay.setLine(1, new DisplayLine("&aFloor: &c?").setShadow(true));
		DungeonItemDisplay.setLine(2, new DisplayLine("&aItem Quality: &c?/50").setShadow(true));
		DungeonItemDisplay.render();

	} else {	
		DungeonItemDisplay.setLine(1, new DisplayLine(getFloor()).setShadow(true));
		DungeonItemDisplay.setLine(2, new DisplayLine(getBSBP()).setShadow(true));
		DungeonItemDisplay.render();
	}
});

// Auto Maddox and Slayer Health

var MaddoxCommand = String(FileLib.read(AutoMaddoxFilePath + "Command.txt"));

register("chat", (message, event) => {
	var automaddoxtoggle = String(FileLib.read(AutoMaddoxFilePath + "toggle.txt"));
	if (message.includes("§2§l[OPEN MENU]")) {
	  var MaddoxTextComponent = EventLib.getMessage(event);
	  var MaddoxMessage = new Message(MaddoxTextComponent);
	  var MaddoxClickableTextComponent = MaddoxMessage.getMessageParts();
	  var MaddoxCommand = String(MaddoxClickableTextComponent[2].getClickValue());
	  FileLib.write(AutoMaddoxFilePath + "Command.txt", MaddoxCommand);
	  if (SlayerScoreboard() != false && automaddoxtoggle == "1") {
		ChatLib.say(MaddoxCommand);
	  }
	}
	if (message.includes("SLAYER BOSS SLAIN") && automaddoxtoggle != "1") {
	  var MaddoxCommand = String(FileLib.read(AutoMaddoxFilePath + "Command.txt"));
	  ChatLib.say(MaddoxCommand);
	}
  }).setCriteria("${message}");
  
register("renderWorld", () => {
	var slayerhealthtoggle = String(FileLib.read(AutoMaddoxFilePath + "shtoggle.txt"));
	if (slayerhealthtoggle == true) {
		if (SlayerScoreboard == false) {
			World.getAllEntitiesOfType(Java.type("net.minecraft.entity.monster.EntityZombie").class).forEach(entity => {
				var Name = entity.getName();
				if (Name.includes("Revenant Horror")) {
					var EntityHealth = (entity.getHP()-(entity.getHP()%1000));
					FileLib.write(AutoMaddoxFilePath + "NameTag.txt", "&c☠ §bRevenant Horror &e" + EntityHealth + "k &c❤");
					setTimeout(() => {
						FileLib.write(AutoMaddoxFilePath + "NameTag.txt", "");
					}, 50);
				}
			});
			World.getAllEntitiesOfType(Java.type("net.minecraft.entity.monster.EntitySpider").class).forEach(entity => {
				var Name = entity.getName();
				if (Name.includes("Tarantula Broodfather")) {
					var EntityHealth = (entity.getHP()-(entity.getHP()%1000));
					FileLib.write(AutoMaddoxFilePath + "NameTag.txt", "&c☠ §bTarantula Broodfather &e" + EntityHealth + "k &c❤");
					setTimeout(() => {
						FileLib.write(AutoMaddoxFilePath + "NameTag.txt", "");
					}, 50);
				}
			});
			World.getAllEntitiesOfType(Java.type("net.minecraft.entity.passive.EntityWolf").class).forEach(entity => {
				var Name = entity.getName();
				if (Name.includes("Sven Packmaster")) {
					var EntityHealth = (entity.getHP()-(entity.getHP()%1000));
					FileLib.write(AutoMaddoxFilePath + "NameTag.txt", "&c☠ §bSven Packmaster &e" + EntityHealth + "k &c❤");
					setTimeout(() => {
						FileLib.write(AutoMaddoxFilePath + "NameTag.txt", "");
					}, 50);
				}
			});
			World.getAllEntitiesOfType(Java.type("net.minecraft.entity.monster.EntityGhast").class).forEach(entity => {
				ChatLib.chat("&6Powder Ghast: &e" + entity.getHP() + "&cHP");
			});
		}
	}
});

register("dragged", (deltax, deltay, x, y) => {
	if (SlayerHealthMove.isOpen()) {
		FileLib.write(AutoMaddoxFilePath + "x.txt", x)
		FileLib.write(AutoMaddoxFilePath + "y.txt", y)
	}
});

var SlayerHealthMove = new Gui();

var SlayerHealthDisplay = new Display();
SlayerHealthDisplay.addLine(1);
  
register("renderOverlay", () => {
	var slayerhealthtoggle = String(FileLib.read(AutoMaddoxFilePath + "shtoggle.txt"));
	if (slayerhealthtoggle != true) {
		if (!SlayerHealthMove.isOpen()) {
			return SlayerHealthDisplay.shouldRender = false;
		}
	}
	var SlayerHealthDisplayX = String(FileLib.read(AutoMaddoxFilePath + "x.txt"));
	var SlayerHealthDisplayY = String(FileLib.read(AutoMaddoxFilePath + "y.txt"));
	SlayerHealthDisplay.setRenderLoc(SlayerHealthDisplayX, SlayerHealthDisplayY);
	SlayerHealthDisplay.shouldRender = true;
	if (SlayerHealthMove.isOpen()) {
		SlayerHealthDisplay.setLine(1, new DisplayLine("&c☠ §bRevenant Horror &e1500k &c❤").setShadow(true));
		SlayerHealthDisplay.render();
	} else {
		SlayerHealthDisplay.setLine(1, new DisplayLine(String(FileLib.read(AutoMaddoxFilePath + "NameTag.txt"))).setShadow(true));
		SlayerHealthDisplay.render();
	}
});
  
function SlayerScoreboard() {
	var ScoreboardLines = String(Scoreboard.getLines());
	if (ScoreboardLines.includes("Slay the boss!")) {
	  return false;
	}
}

// Auction click event
var AHClickCommand = String(FileLib.read(OtherFilePath + "AHClickCommand.txt"));

register("chat", (message, event) => {
	var auctionclicktoggle = String(FileLib.read(OtherFilePath + "auctionclicktoggle.txt"));
	if (message.includes("[Auction]")) {
	  var AHClickClickableTextComponent = EventLib.getMessage(event);
	  var AHClickMessage = new Message(AHClickClickableTextComponent);
	  var AHClickClickableTextComponent = AHClickMessage.getMessageParts();
	  var AHClickCommand = String(AHClickClickableTextComponent[0].getClickValue());
	  FileLib.write(OtherFilePath + "AHClickCommand.txt", AHClickCommand);
	  var AHClickCommand = String(FileLib.read(OtherFilePath + "AHClickCommand.txt"));
	  if (auctionclicktoggle == "true") {
		ChatLib.say(AHClickCommand);
	  }
	}
  }).setCriteria("${message}");


// Keybind function

SkyblockKey = new SkyblockKeyFunc();

register("tick", function() {
	SkyblockKey.tick();
})

function SkyblockKeyFunc() {
	this.key = new KeyBind("Craft", 0, "Skyblock - General");
	this.key2 = new KeyBind("Enderchest", 0,"Skyblock - General");
	this.key3 = new KeyBind("Fast Travel", 0,"Skyblock - General");
	this.key4 = new KeyBind("Skyblock Menu", 0,"Skyblock - General");
	this.key5 = new KeyBind("Wardrobe", 0,"Skyblock - General");
	this.key6 = new KeyBind("Pet Menu", 0,"Skyblock - General");
	this.key7 = new KeyBind("Sea Creature Guide", 0,"Skyblock - General");
	this.key8 = new KeyBind("Accept Invite", 0,"Skyblock - General");
	this.key9 = new KeyBind("Set Personal Spawn", 0,"Skyblock - General");
	this.key10 = new KeyBind("View Stash", 0,"Skyblock - Stash");
	this.key11 = new KeyBind("Pickup Stash", 0,"Skyblock - Stash");
	this.key12 = new KeyBind("Clear Stash", 0,"Skyblock - Stash");
	this.key13 = new KeyBind("Minions", 0,"Skyblock - Skills and Collections");
	this.key14 = new KeyBind("Recipes", 0,"Skyblock - Skills and Collections");
	this.key15 = new KeyBind("Collections", 0,"Skyblock - Skills and Collections");
	this.key16 = new KeyBind("Skills", 0,"Skyblock - Skills and Collections");
	this.key17 = new KeyBind("Settings", 0,"Skyblock - General");
	this.key18 = new KeyBind("Death Count", 0,"Skyblock - General");
	this.key19 = new KeyBind("Hub", 0,"Skyblock - Warps");
	this.key20 = new KeyBind("Private Island", 0,"Skyblock - Warps");
	this.key21 = new KeyBind("Spider's Den", 0,"Skyblock - Warps");
	this.key22 = new KeyBind("Blazing Fortress", 0,"Skyblock - Warps");
	this.key23 = new KeyBind("End", 0,"Skyblock - Warps");
	this.key24 = new KeyBind("Park", 0,"Skyblock - Warps");
	this.key25 = new KeyBind("Gold Mine", 0,"Skyblock - Warps");
	this.key26 = new KeyBind("Deep Caverns", 0,"Skyblock - Warps");
	this.key27 = new KeyBind("The Barn", 0,"Skyblock - Warps");
	this.key28 = new KeyBind("Mushroom Desert", 0,"Skyblock - Warps");
	this.key29 = new KeyBind("Ruins", 0,"Skyblock - Warps (MVP+ Only)");
	this.key30 = new KeyBind("Dark Auction", 0,"Skyblock - Warps (MVP+ Only)");
	this.key31 = new KeyBind("Crypt", 0,"Skyblock - Warps (MVP+ Only)");
	this.key32 = new KeyBind("Top of Nest", 0,"Skyblock - Warps (MVP+ Only)");
	this.key33 = new KeyBind("Magma Boss Spawn", 0,"Skyblock - Warps (MVP+ Only)");
	this.key34 = new KeyBind("Dragon's Nest", 0,"Skyblock - Warps (MVP+ Only)");
	this.key35 = new KeyBind("Jungle Island", 0,"Skyblock - Warps (MVP+ Only)");
	this.key36 = new KeyBind("Howling Cave", 0,"Skyblock - Warps (MVP+ Only)");
	this.key37 = new KeyBind("Dungeon Hub", 0,"Skyblock - Warps");
	this.key38 = new KeyBind("Profile Menu", 0,"Skyblock - General");
	this.key39 = new KeyBind("Quest Log", 0,"Skyblock - General");
	this.key40 = new KeyBind("Your Auction", 0,"Skyblock - Auctions");
	this.key41 = new KeyBind("Auction 1", 0,"Skyblock - Auctions");
	this.key42 = new KeyBind("Auction 2", 0,"Skyblock - Auctions");
	this.key43 = new KeyBind("Auction 3", 0,"Skyblock - Auctions");
	this.key44 = new KeyBind("Double Hub Warp", 0, "Skyblock - Warps");
	this.key45 = new KeyBind("Skyblock", 0, "Skyblock - Extra");
	this.key46 = new KeyBind("GEXP", 0, "Skyblock - Guild");
	this.key47 = new KeyBind("/p warp", 0, "Skyblock - Party");
	this.key48 = new KeyBind("/p list", 0, "Skyblock - Party");
	this.key49 = new KeyBind("/g list", 0, "Skyblock - Guild");
	this.key50 = new KeyBind("/g top", 0, "Skyblock - Guild");
	this.key51 = new KeyBind("/g party", 0, "Skyblock - Guild");
	this.key52 = new KeyBind("/p leave", 0, "Skyblock - Party");
	this.key53 = new KeyBind("savekeys", 0, "Skyblock - Extra");
	this.key54 = new KeyBind("Auction House", 0 , "Skyblock - Auctions");
	this.key55 = new KeyBind("Bazaar", 0, "Skyblock - Auctions");
	this.key56 = new KeyBind(keybindname1, 0, keybindcat1);
	this.key57 = new KeyBind(keybindname2, 0, keybindcat2);
	this.key58 = new KeyBind(keybindname3, 0, keybindcat3);
	this.key59 = new KeyBind(keybindname4, 0, keybindcat4);
	this.key60 = new KeyBind(keybindname5, 0, keybindcat5);
	this.key61 = new KeyBind(keybindname6, 0, keybindcat6);
	this.key62 = new KeyBind(keybindname7, 0, keybindcat7);
	this.key63 = new KeyBind(keybindname8, 0, keybindcat8);
	this.key64 = new KeyBind(keybindname9, 0, keybindcat9);
	this.key65 = new KeyBind(keybindname10, 0, keybindcat10);
	this.key66 = new KeyBind("Effects", 0, "Skyblock - General");
	this.key67 = new KeyBind("Events", 0, "Skyblock - General");
	this.key68 = new KeyBind("Jerry Island", 0, "Skyblock - Warps");
	this.key69 = new KeyBind("/g online", 0, "Skyblock - Guild");
	this.key70 = new KeyBind("Auto Maddox", 0, "Skyblock - Extra");
	this.key71 = new KeyBind("Auction Click", 0, "Skyblock - Auctions");
	this.key72 = new KeyBind("Enchantment Table", 0, "Skyblock - General");
	this.key73 = new KeyBind("Anvil", 0, "Skyblock - General");

	this.tick = function() {
		if (this.key.isPressed()) {
			ChatLib.command("craft");
		}
		if (this.key2.isPressed()) {
			ChatLib.command("enderchest");
		}
		if (this.key3.isPressed()) {
			ChatLib.command("travel");
		}
		if (this.key4.isPressed()) {
			ChatLib.command("sbmenu");
		}
		if (this.key5.isPressed()) {
			ChatLib.command("wardrobe");
		}
		if (this.key6.isPressed()) {
			ChatLib.command("viewpetsmenu");
		}
		if (this.key7.isPressed()) {
			ChatLib.command("scg");
		}
		if (this.key8.isPressed()) {
			ChatLib.command("acceptinvite");
		}
		if (this.key9.isPressed()) {
			ChatLib.command("sethome");
		}
		if (this.key10.isPressed()) {
			ChatLib.command("viewstash");
		}
		if (this.key11.isPressed()) {
			ChatLib.command("pickupstash");
		}
		if (this.key12.isPressed()) {
			ChatLib.command("clearstash");
		}
		if (this.key13.isPressed()) {
			ChatLib.command("craftedgenerators");
		}
		if (this.key14.isPressed()) {
			ChatLib.command("recipes");
		}
		if (this.key15.isPressed()) {
			ChatLib.command("collections");
		}
		if (this.key16.isPressed()) {
			ChatLib.command("skills");
		}
		if (this.key17.isPressed()) {
			ChatLib.command("viewsettings");
		}
		if (this.key18.isPressed()) {
			ChatLib.command("deathcount");
		}
		if (this.key19.isPressed()) {
			ChatLib.command("warp hub");
		}
		if (this.key20.isPressed()) {
			ChatLib.command("warp home");
		}
		if (this.key21.isPressed()) {
			ChatLib.command("warp spider");
		}
		if (this.key22.isPressed()) {
			ChatLib.command("warp nether");
		}
		if (this.key23.isPressed()) {
			ChatLib.command("warp end");
		}
		if (this.key24.isPressed()) {
			ChatLib.command("warp park");
		}
		if (this.key25.isPressed()) {
			ChatLib.command("warp gold");
		}
		if (this.key26.isPressed()) {
			ChatLib.command("warp deep");
		}
		if (this.key27.isPressed()) {
			ChatLib.command("warp barn");
		}
		if (this.key28.isPressed()) {
			ChatLib.command("warp desert");
		}
		if (this.key29.isPressed()) {
			ChatLib.command("warp castle");
		}
		if (this.key30.isPressed()) {
			ChatLib.command("warp da");
		}
		if (this.key31.isPressed()) {
			ChatLib.command("warp crypt");
		}
		if (this.key32.isPressed()) {
			ChatLib.command("warp nest");
		}
		if (this.key33.isPressed()) {
			ChatLib.command("warp magma");
		}
		if (this.key34.isPressed()) {
			ChatLib.command("warp drag");
		}
		if (this.key35.isPressed()) {
			ChatLib.command("warp jungle");
		}
		if (this.key36.isPressed()) {
			ChatLib.command("warp howl");
		}
		if (this.key37.isPressed()) {
			ChatLib.command("warp dungeon_hub");
		}
		if (this.key38.isPressed()) {
			ChatLib.command("profiles");
		}
		if (this.key39.isPressed()) {
			ChatLib.command("quests");
		}
		if (this.key40.isPressed()) {
			ChatLib.command(yourAH);
			FileLib.write(OtherFilePath + "ahMSGvar.txt", "You");
		}
		if (this.key41.isPressed()) {
			ChatLib.command(ahset1Command);
			FileLib.write(OtherFilePath + "ahMSGvar.txt", ahset1);
		}
		if (this.key42.isPressed()) {
			ChatLib.command(ahset2Command);
			FileLib.write(OtherFilePath + "ahMSGvar.txt", ahset2);
		}
		if (this.key43.isPressed()) {
			ChatLib.command(ahset3Command);
			FileLib.write(OtherFilePath + "ahMSGvar.txt", ahset3);
		}
		if (this.key44.isPressed()) {
			DoubleHub();
		}
		if (this.key45.isPressed()) {
			ChatLib.command("skyblock");
		}
		if (this.key46.isPressed()) {
			ChatLib.command(yourGEXP);
		}
		if (this.key47.isPressed()) {
			ChatLib.command("p warp");
		}
		if (this.key48.isPressed()) {
			ChatLib.command("p list");
		}
		if (this.key49.isPressed()) {
			ChatLib.command("g list");
		}
		if (this.key50.isPressed()) {
			ChatLib.command("g top");
		}
		if (this.key51.isPressed()) {
			ChatLib.command("g party");
		}
		if (this.key52.isPressed()) {
			ChatLib.command("p leave");
		}
		if (this.key53.isPressed()) {
			saveKeyBinds();
			ChatLib.chat(SCsavekeys_helpCmdMsg);
		}
		if (this.key54.isPressed()) {
			ChatLib.command("ah");
		}
		if (this.key55.isPressed()) {
			ChatLib.command("bazaar");
		}
		if (this.key56.isPressed()) {
			ChatLib.say(keybind1);
		}
		if (this.key57.isPressed()) {
			ChatLib.say(keybind2);
		}
		if (this.key58.isPressed()) {
			ChatLib.say(keybind3);
		}
		if (this.key59.isPressed()) {
			ChatLib.say(keybind4);
		}
		if (this.key60.isPressed()) {
			ChatLib.say(keybind5);
		}
		if (this.key61.isPressed()) {
			ChatLib.say(keybind6);
		}
		if (this.key62.isPressed()) {
			ChatLib.say(keybind7);
		}
		if (this.key63.isPressed()) {
			ChatLib.say(keybind8);
		}
		if (this.key64.isPressed()) {
			ChatLib.say(keybind9);
		}
		if (this.key65.isPressed()) {
			ChatLib.say(keybind10);
		}
		if (this.key66.isPressed()) {
			ChatLib.command("effects");
		}
		if (this.key67.isPressed()) {
			ChatLib.command("events");
		}
		if (this.key68.isPressed()) {
			ChatLib.command("savethejerrys");
		}
		if (this.key69.isPressed()) {
			ChatLib.command("g online");
		}
		if (this.key70.isPressed()) {
			var MaddoxCommand = String(FileLib.read(AutoMaddoxFilePath + "Command.txt"));
			if(MaddoxCommand.includes("/cb")) {
				ChatLib.say(MaddoxCommand);
			} else {
				ChatLib.chat(ChatStart + "&ePlease use the maddox batphone before trying the keybind");
			}
		}
		if (this.key71.isPressed()) {
			var AHClickCommand = String(FileLib.read(OtherFilePath + "AHClickCommand.txt"));
			if(AHClickCommand.includes("/viewauction")) {
				ChatLib.say(AHClickCommand);
			} else {
				ChatLib.chat(ChatStart + "&ePlease wait for an auction to be bid on before trying the keybind");
			}
		}
		if (this.key72.isPressed()) {
			ChatLib.command("et");
		}
		if (this.key73.isPressed()) {
			ChatLib.command("av");
		}
	}
}

// For new version change: [CurrentVersion variable; metadata version; /sc info version;] add changelog command, function and clickables, /sc new, actual changelog

// Module ID: 268 (SkyblockCommands)
// Owner ID: 973 (Dolphin0xyz)
// Total Downloads as of 18:54 GMT 17/10/20: 94,785
// V1.7.3 Downloads as of 18:54 GMT 17/10/20: 20911