//=============================================================================
// VisuStella MZ - Events & Movement Core
// VisuMZ_1_EventsMoveCore.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_1_EventsMoveCore = true;

var VisuMZ = VisuMZ || {};
VisuMZ.EventsMoveCore = VisuMZ.EventsMoveCore || {};
VisuMZ.EventsMoveCore.version = 1.62;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 1] [Version 1.62] [EventsMoveCore]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Events_and_Movement_Core_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Events & Movement Core plugin adds a lot of new functionality in terms
 * of event flexibility and movement options to RPG Maker MZ. These range from
 * adding in old capabilities from previous iterations of RPG Maker to more
 * mainstream techniques found in other game engines. Movement options are also
 * expanded to support 8-directional movement as well as sprite sheets provided
 * that the VisuStella 8 format is used.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Event commands expanded upon to include old and new functions.
 * * Event templates for Copying Events, Morphing Events, and Spawning Events.
 * * 8-directional movement option available and sprite sheet support.
 * * Aesthetics for tilting the sprite when dashing and having shadows below.
 * * Pathfinding support for event movement through custom Move Route commands.
 * * Advanced switches and variable support to run code automatically.
 * * Turn regular Switches and Variables into Self Switches and Self Variables.
 * * Put labels and icons over events.
 * * Allow numerous ways to trigger events, through clicking, proximity, or by
 *   usage of Regions.
 * * Change the hitbox sizes of events to larger in any direction.
 * * Synchronize event movement options to move when player/other events move.
 * * The ability for the player to turn in place.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Tier 1 ------
 *
 * This plugin is a Tier 1 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 *
 * ============================================================================
 * Features: Advanced Switches and Variables
 * ============================================================================
 *
 * Switches and variables can now run JavaScript code and return values
 * instantly. While at first glance, this may seem no different from using
 * the Control Variables event command's Script option, this can be used to
 * instantly set up Switch and/or Variable conditions for Parallel Common
 * Events, Event Page Conditions, Enemy Skill Conditions, and Troop Page
 * Conditions instantly without needing to make an event command to do so.
 *
 * ---
 *
 * <JS> code </JS>
 * - Used for: Switch and Variable names
 * - Replace 'code' with JavaScript code on what value to return.
 *
 * ---
 *
 * NOTE: Tagged Switches/Variables are mutually exclusive from one another.
 * You cannot tag them with <JS>, <Self>, <Map>, or <Global> simultaneously.
 *
 * ============================================================================
 * Features: Self Switches and Variables
 * ============================================================================
 *
 * RPG Maker MZ by default has 4 Self Switches: A, B, C, D. For some types of
 * games, this isn't enough. This plugin gives you the ability convert regular
 * Switches into Self Switches so you could have more.
 *
 * Self Variables also do not exist in RPG Maker MZ by default. Just like with
 * Switches, you can turn regular Variables into Self Variables.
 *
 * ---
 *
 * <Self>
 * - Used for: Switch and Variable names
 * - Converts the Switch/Variable into a Self Switch/Variable.
 *
 * ---
 *
 * After, just use them like you would for normal Switches and Variables in an
 * event's page conditions. If the <Self> tag is present inside the Switch or
 * Variable's name, then it will use data unique to only that event.
 *
 * NOTE: Tagged Switches/Variables are mutually exclusive from one another.
 * You cannot tag them with <JS>, <Self>, <Map>, or <Global> simultaneously.
 * 
 * ---
 * 
 * If you need to use a script call to get a Self Switch or Self Variable's
 * value, you can use the following script calls.
 * 
 *   ---
 * 
 *   Get Self Switch Values:
 * 
 *   getSelfSwitchValue(mapID, eventID, switchID)
 *   - Replace 'mapID' with the map ID the target event is located on.
 *   - Replace 'eventID' with the ID of the target event.
 *   - Replace 'switchID' with the ID number if it is a Self Switch made with
 *     <Self> or a capital letter surrounded by quotes if it's A, B, C, or D.
 *   - This will return the true/false value of the Self Switch.
 *   - Example: getSelfSwitchValue(12, 34, 56)
 *   - Example: getSelfSwitchValue(12, 34, 'B')
 * 
 *   ---
 * 
 *   Get Self Variable Values:
 * 
 *   getSelfVariableValue(mapID, eventID, variableID)
 *   - Replace 'mapID' with the map ID the target event is located on.
 *   - Replace 'eventID' with the ID of the target event.
 *   - Replace 'variableID' with the ID number of the Self Variable.
 *   - This will return whatever stored value is found in the Self Variable.
 *   - Example: getSelfVariableValue(12, 34, 56)
 * 
 *   ---
 * 
 *   Set Self Switch Values:
 * 
 *   setSelfSwitchValue(mapID, eventID, switchID, value)
 *   - Replace 'mapID' with the map ID the target event is located on.
 *   - Replace 'eventID' with the ID of the target event.
 *   - Replace 'switchID' with the ID number if it is a Self Switch made with
 *     <Self> or a capital letter surrounded by quotes if it's A, B, C, or D.
 *   - Replace 'value' with either 'true' or 'false' for ON/OFF respectively.
 *     Do not use quotes.
 *   - This will change the Self Switch's value to true/false.
 *     - Example: setSelfSwitchValue(12, 34, 56, false)
 *     - Example: setSelfSwitchValue(12, 34, 'B', true)
 * 
 *   ---
 * 
 *   Set Self Variable Values:
 * 
 *   setSelfVariableValue(mapID, eventID, variableID, value)
 *   - Replace 'mapID' with the map ID the target event is located on.
 *   - Replace 'eventID' with the ID of the target event.
 *   - Replace 'variableID' with the ID number of the Self Variable.
 *   - Replace 'value' with the value you want to set the Self Variable to.
 *   - Example: setSelfVariableValue(12, 34, 56, 88888)
 * 
 *   ---
 * 
 * ---
 *
 * ============================================================================
 * Features: Map Switches and Variables
 * ============================================================================
 * 
 * Similar to Self Switches and Self Variables, Map Switches and Map Variables
 * are switches and variables that retain data based on the map the player is
 * currently located in. In other words, they're self switches and variables
 * but for maps instead!
 * 
 * These features do not exist in RPG Maker MZ by default. Just like with the
 * Self Switches and Self Variables, you can turn regular Switches or Variables
 * into Map Switches and Map Variables using the following name tag:
 * 
 * ---
 * 
 * <Map>
 * - Used for: Switch and Variable names
 * - Converts the Switch/Variable into a Map Switch/Variable.
 * 
 * ---
 *
 * After, just use them like you would for normal Switches and Variables in an
 * event's page conditions. If the <Map> tag is present inside the Switch or
 * Variable's name, then it will use data unique to only that map.
 *
 * NOTE: Tagged Switches/Variables are mutually exclusive from one another.
 * You cannot tag them with <JS>, <Self>, <Map>, or <Global> simultaneously.
 * 
 * ---
 * 
 * If you need to use a script call to get a Map Switch or Map Variable's
 * value, you can use the following script calls:
 * 
 *   ---
 * 
 *   Get Map Switch Values:
 * 
 *   getMapSwitchValue(mapID, switchID)
 *   - Replace 'mapID' with the map ID the switch is located on.
 *   - Replace 'switchID' with the ID number of the switch to get data.
 *   - Example: getMapSwitchValue(4, 20)
 * 
 *   ---
 * 
 *   Get Variable Switch Values:
 * 
 *   getMapVariableValue(mapID, variableID)
 *   - Replace 'mapID' with the map ID the switch is located on.
 *   - Replace 'variableID' with the ID number of the variable to get data.
 *   - Example: getMapVariableValue(6, 9)
 * 
 *   ---
 * 
 *   Set Map Switch Values:
 * 
 *   setMapSwitchValue(mapID, switchID, value)
 *   - Replace 'mapID' with the map ID the switch is located on.
 *   - Replace 'switchID' with the ID number of the switch to get data.
 *   - Replace 'value' with either 'true' or 'false' for ON/OFF respectively.
 *     Do not use quotes.
 *   - Example: setMapSwitchValue(4, 20, true)
 *   - Example: setMapSwitchValue(6, 9, false)
 * 
 *   ---
 * 
 *   Set Map Variable Values:
 * 
 *   setMapVariableValue(mapID, variableID, value)
 *   - Replace 'mapID' with the map ID the switch is located on.
 *   - Replace 'variableID' with the ID number of the variable to get data.
 *   - Replace 'value' with the value you want to set the Map Variable to.
 *   - Example: setMapVariableValue(6, 9, 420)
 * 
 *   ---
 * 
 * ---
 *
 * ============================================================================
 * Features: Reference Switches and Reference Variables
 * ============================================================================
 * 
 * Reference Switches and Reference Variables are added in version 1.62 of this
 * plugin. These switches and variables allow you to reference them through
 * strings when using script calls.
 * 
 * By simply naming your switch or variable ((Reference Name)), you can use
 * that 'reference name' in a string to call them for script calls. This is
 * just so you don't need to remember the ID's of every other Switch/Variable.
 * 
 * When referencing the strings in the script calls, case does not matter,
 * which means you can use all capitals or all lower case and they'll still
 * reference the same switch or variable.
 * 
 * ---
 * 
 * For example:
 * 
 *   ---
 * 
 *   Switch 10 Name: ((Priscilla Joined))
 * 
 *   Script Call: $gameSwitches.value('Priscilla Joined')
 *                $gameSwitches.setValue('Priscilla Joined', true)
 * 
 *   ---
 * 
 *   Variable 20 Name: Total ((Goblins Slain))
 * 
 *   Script Call: $gameVariables.value('Goblins Slain')
 *                $gameVariables.setValue('Goblins Slain', 50)
 * 
 *   ---
 * 
 * Remember to put quotes around the name for the script call!
 * 
 * This only applies for the $gameSwitches and $gameVariables functions of
 * value(id) and setValue(id, value). They do not apply to the other
 * $gameSwitches and $gameVariables functions.
 * 
 * ---
 *
 * ============================================================================
 * Features: Character Sprite Filename Tags
 * ============================================================================
 * 
 * For the files located inside of your project's /img/characters/ folder, if
 * the filenames themselves have specific "tags" in them, special properties
 * will be applied to them. These tags can be combined together with a few
 * exceptions.
 * 
 * Some of these are new to VisuStella MZ, while others are default to MZ.
 * 
 * ---
 * 
 *   !filename.png
 *   - Tag: !
 *   - Causes this character's sprite to align with the tile grid instead of
 *     being lifted a few pixels higher.
 *   - This is primarily used for things like doors, chests, and floor plates.
 *   - Default to RPG Maker MZ.
 * 
 * ---
 * 
 *   $filename.png
 *   - Tag: $
 *   - Causes this character's sprite to use the "big character" format.
 *   - Primarily used for sprites like the big monsters and such which only
 *     have 3x4 cells as opposed to 12x8 cells that regular sprite sheets have.
 *   - Cannot be combined with the [VS8] tag.
 *   - Default to RPG Maker MZ.
 * 
 * ---
 * 
 *   filename[Invisible].png
 *   - Tag: [Invisible] or [Inv]
 *   - This character's sprite will become invisible on the map screen in-game
 *     while almost everything else about it is visible.
 *   - This is used for those who wish to use sprite labels for things such as
 *     autorun and parallel events.
 * 
 * ---
 * 
 *   filename[VS8].png
 *   - Tag: [VS8]
 *   - Converts this sprite into a VisuStella-Style 8-Direction Sprite Sheet.
 *   - Refer to the section below.
 *   - Cannot be combined with the $ tag.
 * 
 * ---
 *
 * ============================================================================
 * Features: VisuStella-Style 8-Directional Sprite Sheets
 * ============================================================================
 *
 * This plugin provides support for the VisuStella-Style 8-Directional Sprite
 * Sheets, also know as VS8. VS8 sprite sheets offer support for walking
 * frames, dashing frames, carrying frames, and emotes.
 *
 * ---
 *
 * To designate a sprite sheet as VS8, simply add [VS8] to the filename.
 * Something like Actor1.png would become Actor1_[VS8].png.
 *
 * ---
 *
 * VS8 sprites are formatted as such. Each block below is a set of 3 frames.
 *
 * Walk Down    Walk DL     Dash Down   Dash DL
 * Walk Left    Walk DR     Dash Left   Dash DR
 * Walk Right   Walk UL     Dash Right  Dash UL
 * Walk Up      Walk UR     Dash Up     Dash UR
 *
 * Carry Down   Carry DL    Ladder      Emotes 3
 * Carry Left   Carry DR    Rope        Emotes 4
 * Carry Right  Carry UL    Emotes 1    Emotes 5
 * Carry Up     Carry UR    Emotes 2    Emotes 6
 *
 * ---
 *
 * Here are how each of the emote sets are grouped from left to right.
 *
 * Emotes 1: Item, Hmph, Victory
 * Emotes 2: Hurt, Kneel, Collapse
 * Emotes 3: !, ?, Music Note
 * Emotes 4: Heart, Anger, Sweat
 * Emotes 5: Cobweb, ..., Light Bulb
 * Emotes 6: Sleep0, Sleep1, Sleep2
 *
 * ---
 *
 * ============================================================================
 * Features: Weighted Random Movement
 * ============================================================================
 * 
 * When creating events to place on the map, you can determine what type of
 * autonomous movement the event will have. When selecting "Random", the event
 * will move randomly across the map.
 * 
 * However, with the way "Random" movement works with the RPG Maker MZ default
 * code, the event is more likely to hit a wall and then hug the said wall as
 * it maps laps around the map's outer borders making it feel very unnatural
 * for any player who's been on the map long enough.
 * 
 * This is where "Weighted Random Movement" comes in. It changes up the random
 * movement behavior to function where the farther the event is, the more
 * likely the event is to step back towards its "home" position (aka where it
 * spawned upon loading the map). This is so that a housewife NPC doesn't
 * suddenly wander off into the middle of an army's training grounds on the
 * same town map.
 * 
 * The event will stay closer to its home value depending on how high the
 * weight's value is. There are a number of ways to adjust the weighted value.
 * 
 * ---
 * 
 * Plugin Parameters > Movement > Event Movement > Random Move Weight
 * 
 * This Plugin Parameter setting allows you to set the default weight for all
 * events with "Random" autonomous movement. It is set at a default value of
 * 0.10 to give the event an understandable degree of freedom.
 * 
 * Lower numbers give events more freedom to move. Larger numbers will make the
 * events stick closer to home.
 * 
 * Change this value to 0 to disable it.
 * 
 * ---
 * 
 * You can customize this individually per event by using Notetags and/or
 * Comment Tags for the events.
 * 
 * <Random Move Weight: x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - If this tag is used on an event with random-type autonomous movement, then
 *   the event will stick closer to their home location (where they are located
 *   upon spawning on the map). How close they stick to their home location
 *   will depend on the weighted 'x' value.
 * - Replace 'x' with a number between 0 and 1. Numbers closer to 0 give the
 *   event more freedom when moving randomly while numbers closer to 1 cause
 *   the event to stick closer to their home position.
 * 
 * <True Random Move>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - If this tag is used on an event with random-type autonomous movement, then
 *   that event will ignore the effects of weighted randomized movement.
 * 
 * ---
 *
 * ============================================================================
 * Notetags and Comment Tags
 * ============================================================================
 *
 * The following are notetags that have been added through this plugin. These
 * notetags will not work with your game if this plugin is OFF or not present.
 *
 * Some of these are comment tags. Comment tags are used for events to mark and
 * affect individual event pages rather than the whole event.
 *
 * === Map Notetags ===
 *
 * The following notetags are used for maps only. While some of these options
 * are also available in the Plugin Parameters, some of these notetags extend
 * usage to specific maps marked by these notetags as well.
 *
 * ---
 *
 * <Diagonal Movement: On>
 * <Diagonal Movement: Off>
 *
 * - Used for: Map Notetags
 * - Turns on/off diagonal movement for those maps.
 * - If notetag isn't present, use Plugin Parameter setting.
 *
 * ---
 *
 * <type Allow Region: x>
 * <type Allow Region: x, x, x>
 *
 * <type Forbid Region: x>
 * <type Forbid Region: x, x, x>
 *
 * <type Dock Region: x>
 * <type Dock Region: x, x, x>
 *
 * - Used for: Map Notetags
 * - Replace 'type' with 'All', 'Walk', 'Player', 'Event', 'Vehicle', 'Boat',
 *   'Ship', or 'Airship'.
 * - 'Allow' notetag variants allow that type to pass through them no matter
 *   what other passability settings are in place.
 * - 'Forbid' notetag variants forbid that type from passing through at all.
 * - 'Dock' notetag variants allow vehicles to dock there. Boats and ships must
 *   face the region direction while airships must land directly on top.
 *
 * ---
 * 
 * <Map Load Common Event: x>
 * <Map Load Common Events: x, x, x>
 * 
 * - Used for: Map Notetags
 * - When this map is loaded, run the specified Common Events once available.
 *   - Does NOT trigger if you transfer to a different part of the same map.
 * - Replace 'x' with a number representing the ID of the Common Event you wish
 *   to reserve and run once ready.
 * 
 * ---
 *
 * <Save Event Locations>
 *
 * - Used for: Maps Notetags
 * - Saves the locations of all events on the map so that when you return to
 *   that map at a later point, the events will be in the position they were
 *   last in.
 *
 * ---
 * 
 * <Hide Player>
 * <Show Player>
 * 
 * - Used for: Map Notetags
 * - Forcefully hides or shows the player sprite. This is so you don't need to
 *   manually turn the setting on/off each time you enter a specific map.
 * - These settings will take priority over the event commands.
 * - If the player sprite is hidden, so are the player's followers.
 * - If the player sprite is visible, the player's followers will still depend
 *   on their settings.
 * - These notetags are mutually exclusive from each other.
 * 
 * ---
 * 
 * <Hide Followers>
 * <Show Followers>
 * 
 * - Used for: Map Notetags
 * - Forcefully hides or shows the player's followers. This is so you don't
 *   need to manually turn them on/off each time you enter a specific map.
 * - These settings will take priority over the event commands.
 * - These notetags are mutually exclusive from each other.
 * 
 * ---
 * 
 * === Page Comment Tags ===
 * 
 * The following comment tags are to be put inside of the pages of events,
 * troops, and common events for them to work!
 * 
 * ---
 * 
 * <Page Conditions>
 *   conditions
 *   conditions
 *   conditions
 * </Page Conditions>
 * 
 * - Used for: Map Event Page, Troop Page, and Common Event Page Comment Tags
 * - This allows you to create custom page conditions that utilize the
 *   Conditional Branch event command to see if the additional page conditions
 *   are met.
 * 
 * ---
 * 
 * <Conditions Met>
 * - Used for: Map Event Page, Troop Page, and Common Event Page Comment Tags
 * - If used between the <Page Conditions> and </Page Conditions> comment tag,
 *   upon reaching this part of event command list, the custom page conditions
 *   will be considered met.
 * 
 * ---
 * 
 * Example:
 * 
 * ◆Comment：<Page Conditions>
 * ◆If：Reid has equipped Potion Sword
 *   ◆Comment：If Reid has equipped the Potion Sword
 * ：       ：<Condition Met>
 *   ◆
 * ：End
 * ◆Comment：</Page Conditions>
 * 
 * If Reid has the "Potion Sword" weapon equipped, then the additional custom
 * page conditions are met and the event page will be present/active.
 * 
 * If this is a troop condition, the troop page event will activate.
 * 
 * If this is a common event, there will be a parallel common event active.
 * 
 * ---
 *
 * === Event and Event Page Notetags ===
 *
 * The following notetags have comment tag variants (with a few exceptions).
 * If a notetag is used for an event, it will affect the event constantly.
 * If a comment tag is used, it will only affect the page the comment tag is
 * on and only that page.
 *
 * ---
 *
 * <Activation Region: x>
 * <Activation Regions: x,x,x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Allows this event to be remotely activated as long as the player is
 *   standing within a tile marked by a designated region.
 * - Replace 'x' with the regions you wish to remotely activate this event in.
 *   - Action Button: Player must press OK while being in the region.
 *   - Player/Event Touch: Player must step onto the region.
 *   - Autorun/Parallel: Player be in the region.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * - NOTE: This cannot be used with any other activation tags.
 *
 * ---
 *
 * <Activation Square: x>
 * <Activation Circle: x>
 * <Activation Delta: x>
 * <Activation Row: x>
 * <Activation Column: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Allows this event to be remotely activated as long as the player is
 *   within range of its activation type.
 * - Replace 'x' with a number stating the range in tiles.
 *   - Square: A square-shaped range with the event at the center.
 *   - Circle: A circle-shaped range with the event at the center.
 *   - Delta: A diamond-shaped range with the event at the center.
 *   - Row: Spans horizontally across the map. 'x' expands up and down.
 *   - Column: Spans vertically across the map. 'x' expands left and right.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * - NOTE: This cannot be used with any other activation tags.
 *
 * ---
 *
 * <Always Update Movement>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Events normally have to be within screen range for them to update their
 *   self movement. If this tag is present, the event is always updating.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Click Trigger>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Allows this event to activate upon being clicked on with the mouse.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Copy Event: Map x, Event y>
 * <Copy Event: x, y>
 *
 * <Copy Event: template>
 *
 * - Used for: Event Notetags ONLY
 * - Makes this event copy all of the event settings from a different event
 *   that can be found on a different map (as long as that map is registered
 *   inside of Plugin Parameters => Event Template Settings => Preloaded Maps).
 * - Replace 'x' with a number representing the copied event's Map ID.
 *   - If '0' is used for the Map ID, reference the current map.
 * - Replace 'y' with a number representing the copied event's Event ID.
 * - For the 'template' variant, replace 'template' with the name of the
 *   template made in Plugin Parameters => Event Template Settings =>
 *   Event Template List.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 *
 * ---
 * 
 * <Custom Z: x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Replace 'x' with a number value to determine the event sprite's Z value
 *   relative to the tilemap.
 * - For reference from rmmz_core.js:
 *   - 0 : Lower tiles
 *   - 1 : Lower characters
 *   - 3 : Normal characters
 *   - 4 : Upper tiles
 *   - 5 : Upper characters
 *   - 6 : Airship shadow
 *   - 7 : Balloon
 *   - 8 : Animation
 *   - 9 : Destination
 * - You can use numbers below 0 and above 9.
 *   - Values under 0 go below the tilemap.
 *   - Values above 9 go above everything else on the tilemap.
 *   - These values do NOT go below or above other screen objects that are
 *     NOT attached to the tilemap layer such as parallaxes or weather or
 *     windows because that's simply not how z-axis work with sprite layers.
 * 
 * ---
 * 
 * <Encounter Half Square: x>
 * <Encounter Half Circle: x>
 * <Encounter Half Delta: x>
 * <Encounter Half Row: x>
 * <Encounter Half Column: x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - If the player is within the 'x' area effect of this event, the random
 *   encounter rate will be halved.
 * - Replace 'x' with a number stating the range in tiles.
 *   - Square: A square-shaped range with the event at the center.
 *   - Circle: A circle-shaped range with the event at the center.
 *   - Delta: A diamond-shaped range with the event at the center.
 *   - Row: Spans horizontally across the map. 'x' expands up and down.
 *   - Column: Spans vertically across the map. 'x' expands left and right.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * 
 * Script Call Check:
 * 
 *   $isTileEncounterHalf(x, y)
 * 
 * - This can be used to check if a certain map tile (x, y) has an encounter
 *   rate halving effect on it.
 * - Returns a boolean (true or false) when used.
 * 
 * ---
 * 
 * <Encounter None Square: x>
 * <Encounter None Circle: x>
 * <Encounter None Delta: x>
 * <Encounter None Row: x>
 * <Encounter None Column: x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - If the player is within the 'x' area effect of this event, the random
 *   encounter rate will be suppressed completely.
 * - Replace 'x' with a number stating the range in tiles.
 *   - Square: A square-shaped range with the event at the center.
 *   - Circle: A circle-shaped range with the event at the center.
 *   - Delta: A diamond-shaped range with the event at the center.
 *   - Row: Spans horizontally across the map. 'x' expands up and down.
 *   - Column: Spans vertically across the map. 'x' expands left and right.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * 
 * Script Call Check:
 * 
 *   $isTileEncounterNone(x, y)
 * 
 * - This can be used to check if a certain map tile (x, y) has an encounter
 *   rate suppression effect on it.
 * - Returns a boolean (true or false) when used.
 * 
 * ---
 * 
 * <Erase if Encounter Half>
 * <Erase if Encounter None>
 * 
 * - Used for: Event Notetags ONLY
 * - Automatically erase this event if the player's party has an encounter half
 *   or encounter none effect, or if the event has spawned in an encounter half
 *   or encounter none area.
 * - This check only occurs in two situations: when the map is first loaded
 *   after being teleported into or when the player leaves a menu and returns
 *   back to the map.
 * - Events that have been erased due to this effect will NOT return even if
 *   the encounter half/none effect is removed while the player is still on the
 *   map. The event will return if the player exits the map and comes back.
 * 
 * ---
 * 
 * <Exit Reset Self Data>
 * 
 * - Used for: Event Notetags ONLY
 * - When the player leaves the current map, all Self Switches and Self
 *   Variables related to this event will be reset.
 * 
 * ---
 *
 * <Hitbox Left: x>
 * <Hitbox Right: x>
 * <Hitbox Up: x>
 * <Hitbox Down: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Replace 'x' with a number to extend the hitbox of the event by that many
 *   tiles towards the listed direction.
 * - Use multiples of this notetag to extend them to different directions.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Icon: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Replace 'x' with the Icon ID you wish to put above this event.
 * - This will not override any Icons designated to the ID through a
 *   Plugin Command.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Icon Buffer X: +x>
 * <Icon Buffer X: -x>
 *
 * <Icon Buffer Y: +x>
 * <Icon Buffer Y: -x>
 *
 * <Icon Buffer: +x, +y>
 * <Icon Buffer: -x, -y>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Allows you to adjust the positions of the icon on the envent by buffers.
 * - Replace 'x' and 'y' with the values to adjust the position buffers by.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Label: text>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Puts a label over the event's head displaying 'text'.
 * - Text codes can be used.
 *   - If text codes are used, avoid text codes that use < and > wrappers.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Label>
 * text
 * text
 * </Label>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Puts a label over the event's head displaying 'text'.
 * - This can display multiple lines.
 * - Text codes can be used.
 *   - You can use text codes with < and > wrappers.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Label Range: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Sets a range requirement for the player to be in order for the event's
 *   label to appear.
 * - Replace 'x' with a number value depicting the range in tiles.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * - If this tag is not used, refer to the default plugin parameter settings.
 *
 * ---
 * 
 * <Label Range Type: Square>
 * <Label Range Type: Circle>
 * <Label Range Type: Diamond>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Sets a range type for the label to appear visible for.
 *   - Square: A square-shaped range with the event at the center.
 *   - Circle: A circle-shaped range with the event at the center.
 *   - Diamond: A diamond-shaped range with the event at the center.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * - If this tag is not used, refer to the default plugin parameter settings.
 * 
 * ---
 *
 * <Label Offset X: +x>
 * <Label Offset X: -x>
 *
 * <Label Offset Y: +x>
 * <Label Offset Y: -x>
 *
 * <Label Offset: +x, +y>
 * <Label Offset: -x, -y>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Allows you to adjust the positions of the label on the envent by offsets.
 * - Replace 'x' and 'y' with the values to adjust the position offsets by.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 * 
 * <Label Hue Shift: +x>
 * <Label Hue Shift: -x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Changes the hue of the event label by +x or -x every frame.
 *   - Keep in mind that since this is changing hue, this will appear to have
 *     no effect if you are using black and white labels.
 *   - Use labels with text codes that add color to them like '\C[4]text'
 * - This only works with the sprite version of event labels and does not work
 *   with the legacy version.
 * 
 * ---
 * 
 * <Location X: +x>
 * <Location X: -x>
 * 
 * <Location Y: +x>
 * <Location Y: -x>
 * 
 * <Location: +x, +y>
 * <Location: +x, -y>
 * <Location: -x, +y>
 * <Location: -x, -y>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Adjusts the initial location of this event by +x and +y (or -x and -y).
 * - This allows you to stack events on top of each other or even move them to
 *   various places of the map.
 * - Replace 'x' with a number that represents the horizontal tiles to adjust
 *   the initial starting location by.
 * - Replace 'y' with a number that represents the vertical tiles to adjust
 *   the initial starting location by.
 * 
 * ---
 * 
 * <Mirror Sprite>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - The event sprite's visual appearance is mirrored.
 * 
 * ---
 * 
 * <Move Only Region: x>
 * <Move Only Regions: x,x,x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Sets the move range of this event to only the region(s) marked by the
 *   notetag(s) or comment tag(s).
 * - This will bypass terrain passability.
 * - This will not bypass event collision.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * 
 * ---
 *
 * <Move Synch Target: Player>
 *
 * <Move Synch Target: Event x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Synchronizes the movement of this event with a target (either the player
 *   or another event). This event will only move whenever the synchronized
 *   target moves.
 * - For 'Event x' variant, replace 'x' with the ID of the event to synch to.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Move Synch Type: Random>
 * <Move Synch Type: Approach>
 * <Move Synch Type: Away>
 * <Move Synch Type: Custom>
 *
 * <Move Synch Type: Mimic>
 * <Move Synch Type: Reverse Mimic>
 *
 * <Move Synch Type: Mirror Horizontal>
 * <Move Synch Type: Mirror Vertical>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Choose the type of movement the event will have if it is synchronized to
 *   a target.
 *   - Random: Move to a random position.
 *   - Approach: Approaches target.
 *   - Away: Flees from target.
 *   - Custom: Follows a custom move route.
 *   - Mimic: Imitates the target's movement style.
 *   - Reverse Mimic: Does the opposite of the target's movement.
 *   - Mirror Horizontal: Moves as if a mirror is placed horizontally.
 *   - Mirror Vertical: Moves as if a mirror is placed vertically.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Move Synch Delay: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - If this tag is present, the event will wait a bit after each move before
 *   moving again.
 * - Replace 'x' with the number of movement instances in between.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 * 
 * <Move Synch Distance Opacity: x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Changes the opacity of the event based on the distance between it and its
 *   move synched target. Closer means more opaque. Further away means more
 *   transparent.
 * - Replace 'x' with a number representing the opacity change per pixel
 *   distance away. 'x' can use decimal values like 1.05 and 1.5.
 * 
 * ---
 * 
 * <Picture Filename: filename>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Applies a picture graphic from the /img/pictures/ folder of your project.
 * - This graphic will be on top of the character sprite but below the event
 *   icon sprite.
 *   - The picture priority will be the same as the event's priority.
 *   - If it is "below characters", the player can walk on top of it.
 *   - If it is "above characters", the player will behind it.
 *   - If it is "same as characters", the priority will be based on the
 *     current relative Y position. This also means, if the picture is big
 *     enough, it can clip into the top of tree tiles and such.
 * - Replace 'filename' with a filename from the game project's /img/pictures/
 *   folder. This is case sensitive. Do NOT include the file extension.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * 
 * ---
 * 
 * <Picture Type: Enemy>
 * <Picture Type: SV Enemy>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Used with <Picture Filename: filename> notetag.
 * - Will use /img/enemies/ or /img/sv_enemies/ instead of /img/pictures/ to
 *   grab a picture graphic from.
 * - Other picture graphic sprite related notetags will apply as normal.
 * 
 * ---
 * 
 * <Picture Max Size: x>
 * <Picture Scale: y%>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Used with <Picture Filename: filename> notetag.
 * - If the "Max Size" or "Scale" supplementary notetags are used, the picture
 *   graphic will be scaled proportionally to fit either the exact pixel size
 *   for "Max Size" or the "Scale" ratio.
 *   - Both the "Max Size" and "Scale" notetags require the "Filename" notetag.
 * - Replace 'x' with a number value representing the exact pixel size for the
 *   "Max Size" notetag.
 * - Replace 'y' with a number value representing the scale on which to shrink
 *   or enlarge the picture. 100% is normal size. 50% is half size. 200% is
 *   double size.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * 
 * ---
 *
 * <Picture Offset X: +x>
 * <Picture Offset X: -x>
 *
 * <Picture Offset Y: +x>
 * <Picture Offset Y: -x>
 *
 * <Picture Offset: +x, +y>
 * <Picture Offset: -x, -y>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Used with <Picture Filename: filename> notetag.
 * - Offsets the X and Y position of the event picture relative to the event
 *   sprite's own position.
 * - Replace 'x' and 'y' with numbers indicating the offset in pixels.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * 
 * ---
 * 
 * <Picture Wait Frames: x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Used with <Picture Filename: filename> notetag.
 * - Requires VisuMZ_4_AnimatedPictures!
 * - "Wait Frames" is used with VisuMZ's Animated Pictures plugin. This
 *   determines the delay inbetween frame changes.
 * - Replace 'x' with a number representing the amount of frames to wait
 *   inbetween frame changes.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * 
 * ---
 * 
 * <Playtest>
 * 
 * - Used for: Event Notetags.
 * - This does NOT work when it's in the Event Page Comment Tags.
 * - If this notetag is found in the event's notebox (NOT comments), then the
 *   event will only appear during a playtest session. It will not appear in a
 *   deployed game where the playtest flag is not on.
 * 
 * ---
 * 
 * <Random Move Weight: x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - If this tag is used on an event with random-type autonomous movement, then
 *   the event will stick closer to their home location (where they are located
 *   upon spawning on the map). How close they stick to their home location
 *   will depend on the weighted 'x' value.
 * - Replace 'x' with a number between 0 and 1. Numbers closer to 0 give the
 *   event more freedom when moving randomly while numbers closer to 1 cause
 *   the event to stick closer to their home position.
 * 
 * ---
 * 
 * <True Random Move>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - If this tag is used on an event with random-type autonomous movement, then
 *   that event will ignore the effects of weighted randomized movement.
 * 
 * ---
 *
 * <Save Event Location>
 *
 * - Used for: Event Notetags ONLY
 * - Saves the locations of the event on the map so that when you return to
 *   that map at a later point, the event will be in the position it was
 *   last in.
 *
 * ---
 *
 * <Hide Shadow>
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Hides the shadow for the event.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 * 
 * <Scale: x%>
 * 
 * <Scale X: x%>
 * <Scale Y: y%>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Changes the scale of the sprite to the designated size.
 * - For <Scale: x%> variant: replace 'x' with a number representing the
 *   scaling overall percentage to be used.
 * - For <Scale X: x%> variant, replace 'x' with a number representing the x
 *   factor for the horizontal scaling percentage to be used.
 * - For <Scale Y: y%> variant, replace 'y' with a number representing the y
 *   factor for the vertical scaling percentage to be used.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * 
 * ---
 *
 * <Shadow Filename: filename>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Replaces the shadow graphic used with 'filename' found in the
 *   img/system/ project folder.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Sprite Offset X: +x>
 * <Sprite Offset X: -x>
 *
 * <Sprite Offset Y: +x>
 * <Sprite Offset Y: -x>
 *
 * <Sprite Offset: +x, +y>
 * <Sprite Offset: -x, -y>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Changes how much the event's sprite is visibly offset by.
 * - Replace 'x' and 'y' with numbers indicating the offset in pixels.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Step Pattern: Left to Right>
 * <Step Pattern: Right to Left>
 *
 * <Step Pattern: Spin Clockwise>
 * <Step Pattern: Spin CW>
 *
 * <Step Pattern: Spin CounterClockwise>
 * <Step Pattern: Spin CCW>
 * <Step Pattern: Spin AntiClockwise>
 * <Step Pattern: Spin ACW>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Changes the way the event animates if a tag is present.
 *   - Left to Right: Makes the event sprite's step behavior go from frame 0 to
 *     1 to 2, then back to 0 instead of looping backward.
 *   - Right to Left: Makes the event sprite's step behavior go from frame 2 to
 *     1 to 0, then back to 2 instead of looping forward.
 *   - Spin Clockwise: Makes the event sprite's step behavior spin CW.
 *   - Spin CounterClockwise: Makes the event sprite's step behavior spin CCW.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 * 
 * <Tile Expand Up: x>
 * <Tile Expand Down: x>
 * <Tile Expand Left: x>
 * <Tile Expand Right: x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Used for events with tile graphics. Expands the graphic up, down, left, or
 *   right from the spritesheet.
 *   - This does NOT expand the hitbox.
 * - The graphic will be anchored to the tile it's expanded from. This means
 *   even if you expanded downward, the actual event's position will still be
 *   the current event's X/Y coordinates. It's just grown more vertically and
 *   is still centered horizontally.
 * - This is primarily used to save on having to use too many events for tiles
 *   that expanded past 1x1 tile sizes.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * The following are Plugin Commands that come with this plugin. They can be
 * accessed through the Plugin Command event command.
 *
 * ---
 * 
 * === Auto Movement Plugin Commands ===
 * 
 * ---
 *
 * Auto Movement: Events
 * - Allow/stop events from auto movement.
 *
 *   Value:
 *   - Allow events to move automatically?
 *
 * ---
 * 
 * === Call Event Plugin Commands ===
 * 
 * ---
 *
 * Call Event: Remote Read
 * - Runs the page of a different event remotely.
 * - This will run the page of the target event on the CURRENT event.
 * - This means that any "This Event" commands will be applied to the event
 *   using this Plugin Command and NOT the target event that page data is being
 *   retrieved from.
 * - Think of it as the current event using the target called event as a
 *   Common Event ala how RPG Maker 2003 works (for those familiar with it).
 *
 *   Map ID:
 *   - Target event's map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the event to remotely run.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   Page ID:
 *   - The page of the remote event to run.
 *   - You may use JavaScript code.
 *
 * ---
 * 
 * === Dash Plugin Commands ===
 * 
 * ---
 *
 * Dash Enable: Toggle
 * - Enable/Disable Dashing on maps.
 *
 *   Value:
 *   - What do you wish to change dashing to?
 *
 * ---
 * 
 * === Event Icon Plugin Commands ===
 * 
 * ---
 *
 * Event Icon: Change (Temporary)
 * - Change the icon that appears on an event.
 * - This change is temporary and resets upon new events.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   Icon Index:
 *   - Icon index used for the icon.
 *   - You may use JavaScript code.
 *
 *   Buffer X:
 *   - How much to shift the X position by?
 *   - You may use JavaScript code.
 *
 *   Buffer Y:
 *   - How much to shift the Y position by?
 *   - You may use JavaScript code.
 *
 *   Blend Mode:
 *   - What kind of blend mode do you wish to apply to the icon sprite?
 *
 * ---
 *
 * Event Icon: Change (Forced)
 * - Change the icon that appears on an event.
 * - This change is forced and needs to be restored.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   Icon Index:
 *   - Icon index used for the icon.
 *   - You may use JavaScript code.
 *
 *   Buffer X:
 *   - How much to shift the X position by?
 *   - You may use JavaScript code.
 *
 *   Buffer Y:
 *   - How much to shift the Y position by?
 *   - You may use JavaScript code.
 *
 *   Blend Mode:
 *   - What kind of blend mode do you wish to apply to the icon sprite?
 *
 * ---
 *
 * Event Icon: Delete
 * - Delete the icon that appears on an event.
 * - This will remain deleted and invisible for events.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 * ---
 * 
 * Event Icon: Restore
 * - Restores a deleted or forced icon that appears on an event.
 * 
 *   Map ID: 
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 * 
 * ---
 * 
 * === Event Label Plugin Commands ===
 * 
 * ---
 *
 * Event Label: Refresh
 * - Refresh all Event Labels on screen.
 * - This is used to refresh page conditions for map changes that don't
 *   force a refresh.
 *
 * ---
 *
 * Event Label: Visible
 * - Change the visibility of Event Labels.
 *
 *   Visibility:
 *   - What do you wish to change visibility to?
 *
 * ---
 * 
 * === Event Location Plugin Commands ===
 * 
 * ---
 *
 * Event Location: Save
 * - Memorize an event's map location so it reappears there the next time the
 *   map is loaded.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 * ---
 *
 * Event Location: Delete
 * - Deletes an event's saved map location.
 * - The event will reappear at its default location.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *   
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 * ---
 *
 * Event Location: Create
 * - Creates a custom spawn location for a specific map's event so it appears
 *   there the next time the map is loaded.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   X Coordinate:
 *   - The X coordinate of the event.
 *   - You may use JavaScript code.
 *
 *   Y Coordinate:
 *   - The Y coordinate of the event.
 *   - You may use JavaScript code.
 *
 *   Direction:
 *   - The direction the event will be facing.
 *
 *   Optional:
 *
 *     Page ID:
 *     - The page of the event to set the move route to.
 *     - You may use JavaScript code.
 *
 *     Move Route Index:
 *     - The point in the move route for this event to be at if the page ID
 *       matches the rest of the page conditions.
 *
 * ---
 * 
 * === Event Popup Plugin Commands ===
 * 
 * ---
 * 
 * Event Popup: Player
 * - Makes a centered event popup on the player sprite.
 * - Requires VisuMZ_1_MessageCore!
 * - Cannot be used in battle!
 * 
 *   Message Text:
 *   - Insert the text to be displayed.
 *   - Text codes can be used.
 * 
 *   Message Duration:
 *   - What is the frame duration of the event popup?
 *   - 60 frames = 1 second. You may use code.
 * 
 *   Popup Settings:
 *   - These settings let you adjust how the popup animates.
 *   - See "Popup Settings" section below.
 * 
 * ---
 * 
 * Event Popup: Follower
 * - Makes a centered event popup on target follower sprite.
 * - Requires VisuMZ_1_MessageCore!
 * - Cannot be used in battle!
 * 
 *   Follower Index:
 *   - Which follower index to play popup?
 *   - Index starts at 0.
 *   - You may use JavaScript code.
 * 
 *   Message Text:
 *   - Insert the text to be displayed.
 *   - Text codes can be used.
 * 
 *   Message Duration:
 *   - What is the frame duration of the event popup?
 *   - 60 frames = 1 second.
 *   - You may use code.
 * 
 *   Popup Settings:
 *   - These settings let you adjust how the popup animates.
 *   - See "Popup Settings" section below.
 * 
 * ---
 * 
 * Event Popup: Event
 * - Makes a centered event popup on target event sprite.
 * - Requires VisuMZ_1_MessageCore!
 * - Cannot be used in battle!
 * 
 *   Event ID:
 *   - The ID of the event to play popup on.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 * 
 *   Message Text:
 *   - Insert the text to be displayed.
 *   - Text codes can be used.
 * 
 *   Message Duration:
 *   - What is the frame duration of the event popup?
 *   - 60 frames = 1 second. You may use code.
 * 
 *   Popup Settings:
 *   - These settings let you adjust how the popup animates.
 *   - See "Popup Settings" section below.
 * 
 * ---
 * 
 * Event Popup: Target Tile
 * - Makes a centered event popup on target tile.
 * - Requires VisuMZ_1_MessageCore!
 * - Cannot be used in battle!
 * 
 *   Map Tile X:
 *   Map Tile Y:
 *   - The x/y coordinate of the map tile.
 *   - You may use JavaScript code.
 * 
 *   Message Text:
 *   - Insert the text to be displayed.
 *   - Text codes can be used.
 * 
 *   Message Duration:
 *   - What is the frame duration of the event popup?
 *   - 60 frames = 1 second. You may use code.
 * 
 *   Popup Settings:
 *   - These settings let you adjust how the popup animates.
 *   - See "Popup Settings" section below.
 * 
 * ---
 * 
 * Popup Settings
 * 
 *   Fade Settings:
 * 
 *     Fade In Duration:
 *     - How many frames does it take to fade in?
 *     - 60 frames = 1 second.
 * 
 *     Fade Out Duration:
 *     - How many frames does it take to fade out?
 *     - 60 frames = 1 second.
 * 
 *   Offset Settings:
 * 
 *     Starting Offset X:
 *     - Offsets the starting x position.
 *     - Negative: left. Positive: right.
 *     - You may use code.
 * 
 *     Starting Offset Y:
 *     - Offsets the starting y position. 
 *     - Negative: up. Positive: down.
 *     - You may use code.
 * 
 *     Ending Offset X:
 *     - Offsets the ending x position. 
 *     - Negative: left. Positive: right.
 *     - You may use code.
 * 
 *     Ending Offset Y:
 *     - Offsets the ending y position. 
 *     - Negative: up. Positive: down.
 *     - You may use code.
 * 
 *   Scaling Settings:
 * 
 *     Starting Scale X:
 *     - What is the starting scale x?
 *     - 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 *     - You may use code.
 * 
 *     Starting Scale Y:
 *     - What is the starting scale y?
 *     - 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 *     - You may use code.
 * 
 *     Ending Scale X:
 *     - What is the ending scale x?
 *     - 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 *     - You may use code.
 * 
 *     Ending Scale Y:
 *     - What is the ending scale y?
 *     - 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 *     - You may use code.
 * 
 *   Angle Settings:
 * 
 *     Starting Offset Angle:
 *     - What is the starting angle offset?
 *     - Use numbers between 0 and 360.
 *     - You may use code.
 * 
 *     Ending Offset Angle:
 *     - What is the ending angle offset?
 *     - Use numbers between 0 and 360.
 *     - You may use code.
 * 
 *   Misc Settings:
 * 
 *     Arc Peak:
 *     - This is the height of the popup's trajectory arc in pixels.
 *     - Positive: up. Negative: down.
 *     - You may use code.
 * 
 * ---
 * 
 * === Event Timer Plugin Commands ===
 * 
 * ---
 *
 * Event Timer: Change Speed
 * - Changes the timer frame decrease (or increase) speed.
 *
 *   Speed:
 *   - How many 1/60ths of a second does each frame increase or decrease by?
 *   - Negative decreases.
 *   - Positive increases.
 *   - JavaScript allowed.
 *
 * ---
 *
 * Event Timer: Expire Event Assign
 * - Sets a Common Event to run upon expiration.
 * - Bypasses the default code if one is set.
 *
 *   Common Event ID:
 *   - Select the Common Event to run upon the timer's expiration.
 *
 * ---
 *
 * Event Timer: Expire Event Clear
 * - Clears any set to expire Common Event and instead, run the default
 *   Game_Timer expiration code.
 *
 * ---
 *
 * Event Timer: Frames Gain
 * - Chooses how many frames, seconds, minutes, or hours are gained or lost for
 *   the event timer.
 *
 *   Frames:
 *   - How many 1/60ths of a second are gained/lost?
 *   - Positive for gain.
 *   - Negative for lost.
 *   - JavaScript allowed.
 *
 *   Seconds:
 *   - How many seconds are gained/lost?
 *   - Positive for gain.
 *   - Negative for lost.
 *   - JavaScript allowed.
 *
 *   Minutes:
 *   - How many minutes are gained/lost?
 *   - Positive for gain.
 *   - Negative for lost.
 *   - JavaScript allowed.
 *
 *   Hours:
 *   - How many hours are gained/lost?
 *   - Positive for gain.
 *   - Negative for lost.
 *   - JavaScript allowed.
 *
 * ---
 *
 * Event Timer: Frames Set
 * - Chooses how many frames, seconds, minutes, or hours are set for the event
 *   timer.
 *
 *   Frames:
 *   - Set frame count to this value.
 *   - Each frame is 1/60th of a second.
 *   - JavaScript allowed.
 *
 *   Seconds:
 *   - Set seconds to this value.
 *   - JavaScript allowed.
 *
 *   Minutes:
 *   - Set minutes to this value.
 *   - Each minute is 60 seconds.
 *   - JavaScript allowed.
 *
 *   Hours:
 *   - Set hours to this value.
 *   - Each hour is 60 minutes.
 *   - JavaScript allowed.
 *
 * ---
 *
 * Event Timer: Pause
 * - Pauses the current event timer, but does not stop it.
 *
 * ---
 *
 * Event Timer: Resume
 * - Resumes the current event timer from the paused state.
 *
 * ---
 * 
 * === Follower Control Plugin Commands ===
 * 
 * ---
 *
 * Follower: Set Global Chase
 * - Disables all followers from chasing the player or reenables it.
 *
 *   Chase:
 *   - Sets all followers to chase the player or not.
 *
 * ---
 *
 * Follower: Set Target Chase
 * - Disables target follower from chasing the player or reenables it.
 *
 *   Follower ID:
 *   - Select which follower ID to disable/reenable chasing for.
 *
 *   Chase:
 *   - Sets target follower to chase its target or not.
 *
 * ---
 *
 * Follower: Set Control
 * - Sets the event commands to target a follower when "Player" is selected as
 *   the target.
 *
 *   Follower ID:
 *   - Select which follower ID to control.
 *   - 0 is the player.
 *
 * ---
 *
 * Follower: Reset
 * - Resets all follower controls. Event Commands that target the "Player"
 *   return to normal and followers chase again.
 *
 * ---
 * 
 * === Global Switch Plugin Commands ===
 * 
 * ---
 * 
 * Global Switch: Get Self Switch A B C D
 * - Gets the current ON/OFF value from a Self Switch and stores it onto a
 *   Global Switch.
 * 
 *   Map ID:
 *   - The map the source map. Use 0 for current map.
 *   - You may use JavaScript code.
 * 
 *   Event ID:
 *   - The ID of the source event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 * 
 *   Letter:
 *   - Letter of the target event's Self Switch to obtain data from.
 * 
 *   -
 * 
 *   Target Switch ID:
 *   - The ID of the target switch.
 * 
 * ---
 * 
 * Global Switch: Get Self Switch ID
 * - Gets the current ON/OFF value from a Self Switch and stores it onto a
 *   Global Switch.
 * 
 *   Map ID:
 *   - The map the source map. Use 0 for current map.
 *   - You may use JavaScript code.
 * 
 *   Event ID:
 *   - The ID of the source event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 * 
 *   Switch ID:
 *   - The ID of the source switch.
 * 
 *   -
 * 
 *   Target Switch ID:
 *   - The ID of the target switch.
 * 
 * ---
 * 
 * === Global Variable Plugin Commands ===
 * 
 * ---
 * 
 * Global Variable: Get Self Variable ID
 * - Gets the current stored value from a Self Variable and stores it onto a
 *   Global Variable.
 * 
 *   Map ID:
 *   - The map the source map. Use 0 for current map.
 *   - You may use JavaScript code.
 * 
 *   Event ID:
 *   - The ID of the source event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 * 
 *   Variable ID:
 *   - The ID of the source variable.
 * 
 *   -
 * 
 *   Target Variable ID:
 *   - The ID of the target variable.
 * 
 * ---
 * 
 * === Morph Event Plugin Commands ===
 * 
 * ---
 *
 * Morph Event: Change
 * - Runs the page of a different event remotely.
 *
 *   Step 1:
 *
 *     Map ID:
 *     - Target event's map. Use 0 for current map.
 *     - You may use JavaScript code.
 *
 *     Event ID:
 *     - The ID of the target event.
 *     - Use 0 for current event.
 *     - You may use JavaScript code.
 *
 *   Step 2:
 *
 *     Template Name:
 *     - Name of the target event template to morph into.
 *     - Ignored if this is called "Untitled".
 *
 *     Map ID:
 *     - Target event's map. Use 0 for current map.
 *     - You may use JavaScript code.
 *
 *     Event ID:
 *     - The ID of the target event.
 *     - Use 0 for current event.
 *     - You may use JavaScript code.
 *
 *     Preserve Morph:
 *     - Is the morph effect preserved?
 *     - Or does it expire upon leaving the map?
 *
 * ---
 *
 * Morph Event: Remove
 * - Remove the morph status of an event.
 *
 *   Map ID:
 *   - Target event's map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the event to remotely run.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   Remove Preservation:
 *   - Also remove the preservation effect?
 *
 * ---
 * 
 * === Player Icon Plugin Commands ===
 * 
 * ---
 *
 * Player Icon: Change
 * - Change the icon that appears on on the player.
 *
 *   Icon Index:
 *   - Icon index used for the icon.
 *   - You may use JavaScript code.
 *
 *   Buffer X:
 *   - How much to shift the X position by?
 *   - You may use JavaScript code.
 *
 *   Buffer Y:
 *   - How much to shift the Y position by?
 *   - You may use JavaScript code.
 *
 *   Blend Mode:
 *   - What kind of blend mode do you wish to apply to the icon sprite?
 *
 * ---
 *
 * Player Icon: Delete
 * - Delete the icon that appears on the player.
 *
 * ---
 * 
 * === Player Movement Plugin Commands ===
 * 
 * ---
 * 
 * Player Movement: Control
 * - Enable or disable player control over the player character's movement.
 * 
 *   Enable?:
 *   - Let the player control where the player character moves?
 * 
 * ---
 * 
 * Player Movement: Diagonal
 * - Override settings to for player diagonal movement.
 * 
 *   Setting:
 *   - How do you want to change diagonal movement?
 *   - Default: Whatever the Map Uses
 *   - Forcefully Disable Diagonal Movement
 *   - Forcefully Enable Diagonal Movement
 * 
 * ---
 * 
 * === Self Data Plugin Commands ===
 * 
 * ---
 * 
 * Self Data: Reset All
 * - Reset the Self Switch and Self Variable data of all events within the
 *   specified map.
 * 
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 * 
 * ---
 * 
 * === Self Switch Plugin Commands ===
 * 
 * ---
 *
 * Self Switch: A B C D
 * - Change the Self Switch of a different event.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   Letter:
 *   - Letter of the target event's Self Switch to change.
 *
 *   Value:
 *   - What value do you want to set the Self Switch to?
 *
 * ---
 *
 * Self Switch: Switch ID
 * - Change the Self Switch of a different event.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   Switch ID:
 *   - The ID of the target switch.
 *
 *   Value:
 *   - What value do you want to set the Self Switch to?
 *
 * ---
 * 
 * === Self Variable Plugin Commands ===
 * 
 * ---
 *
 * Self Variable: Variable ID
 * - Change the Self Variable of a different event.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   Variable ID:
 *   - The ID of the target variable.
 *
 *   Value:
 *   - What value do you want to set the Self Switch to?
 *
 * ---
 * 
 * === Shadow Visibility Plugin Commands ===
 * 
 * ---
 * 
 * Shadow Hide: Player
 * - Hides the visibility of the player sprite shadow.
 * 
 * ---
 * 
 * Shadow Hide: Followers
 * - Hides the visibility of follower sprite shadows.
 * 
 * ---
 * 
 * Shadow Hide: All Events
 * - Hides the visibility of all event sprite shadows.
 * 
 * ---
 * 
 * Shadow Show: Player
 * - Returns the visibility of the player sprite shadow.
 * - Does NOT override Plugin Parameter "Shadows > Show" if off.
 * 
 * ---
 * 
 * Shadow Show: Followers
 * - Returns the visibility of follower sprite shadows.
 * - Does NOT override Plugin Parameter "Shadows > Show" if off.
 * 
 * ---
 * 
 * Shadow Show: All Events
 * - Returns the visibility of all event sprite shadows.
 * - Does NOT override Plugin Parameter or <Hide Shadow> notetag.
 * 
 * ---
 * 
 * === Spawn Event Plugin Commands ===
 * 
 * ---
 *
 * Spawn Event: Spawn At X, Y
 * - Spawns desired event at X, Y location on the current map.
 *
 *   Step 1:
 *
 *     Template Name:
 *     - Name of the target event template to spawn as.
 *     - Ignored if this is called "Untitled".
 *
 *     Map ID:
 *     - Target event's map to be used as reference.
 *     - You may use JavaScript code.
 *
 *     Event ID:
 *     - The ID of the target event to be used as reference.
 *     - You may use JavaScript code.
 *
 *   Step 2:
 *
 *     X Coordinate:
 *     - Target Location to spawn at.
 *     - You may use JavaScript code.
 *
 *     Y Coordinate:
 *     - Target Location to spawn at.
 *     - You may use JavaScript code.
 *
 *     Check Event Collision:
 *     - Check collision with any other events and player?
 *
 *     Check Passability:
 *     - Check passability of the target location.
 *
 *     Preserve Spawn:
 *     - Is the spawned event preserved?
 *     - Or does it expire upon leaving the map?
 *
 *   Step 3:
 *
 *     Success Switch ID:
 *     - Target switch ID to record spawning success.
 *     - Ignore if ID is 0. OFF means failed. ON means success.
 *
 * ---
 *
 * Spawn Event: Spawn At Region
 * - Spawns desired event at a random region-marked location on the
 *   current map.
 *
 *   Step 1:
 *
 *     Template Name:
 *     - Name of the target event template to spawn as.
 *     - Ignored if this is called "Untitled".
 *
 *     Map ID:
 *     - Target event's map to be used as reference.
 *     - You may use JavaScript code.
 *
 *     Event ID:
 *     - The ID of the target event to be used as reference.
 *     - You may use JavaScript code.
 *
 *   Step 2:
 *
 *     Region ID(s):
 *     - Pick region(s) to spawn this event at.
 *
 *     Check Event Collision:
 *     - Check collision with any other events and player?
 *
 *     Check Passability:
 *     - Check passability of the target location.
 *
 *     Preserve Spawn:
 *     - Is the spawned event preserved?
 *     - Or does it expire upon leaving the map?
 *
 *   Step 3:
 *
 *     Success Switch ID:
 *     - Target switch ID to record spawning success.
 *     - Ignore if ID is 0. OFF means failed. ON means success.
 *
 * ---
 *
 * Spawn Event: Spawn At Terrain Tag
 * - Spawns desired event at a random terrain tag-marked location on the
 *   current map.
 *
 *   Step 1:
 *
 *     Template Name:
 *     - Name of the target event template to spawn as.
 *     - Ignored if this is called "Untitled".
 *
 *     Map ID:
 *     - Target event's map to be used as reference.
 *     - You may use JavaScript code.
 *
 *     Event ID:
 *     - The ID of the target event to be used as reference.
 *     - You may use JavaScript code.
 *
 *   Step 2:
 *
 *     Terrain Tag(s):
 *     - Pick terrain tag(s) to spawn this event at.
 *     - Insert numbers between 0 and 7.
 *
 *     Check Event Collision:
 *     - Check collision with any other events and player?
 *
 *     Check Passability:
 *     - Check passability of the target location.
 *
 *     Preserve Spawn:
 *     - Is the spawned event preserved?
 *     - Or does it expire upon leaving the map?
 *
 *   Step 3:
 *
 *     Success Switch ID:
 *     - Target switch ID to record spawning success.
 *     - Ignore if ID is 0. OFF means failed. ON means success.
 *
 * ---
 *
 * Spawn Event: Despawn Event ID
 * - Despawns the selected Event ID on the current map.
 *
 *   Event ID
 *   - The ID of the target event.
 *   - You may use JavaScript code.
 *
 * ---
 *
 * Spawn Event: Despawn At X, Y
 * - Despawns any spawned event(s) at X, Y location on the current map.
 *
 *   X Coordinate:
 *   - Target Location to despawn at.
 *   - You may use JavaScript code.
 *
 *   Y Coordinate:
 *   - Target Location to despawn at.
 *   - You may use JavaScript code.
 *
 * ---
 *
 * Spawn Event: Despawn Region(s)
 * - Despawns the selected Region(s) on the current map.
 *
 *   Region ID(s):
 *   - Pick region(s) and despawn everything inside it.
 *
 * ---
 *
 * Spawn Event: Despawn Terrain Tag(s)
 * - Despawns the selected Terrain Tags(s) on the current map.
 *
 *   Terrain Tag(s):
 *   - Pick terrain tag(s) and despawn everything inside it.
 *   - Insert numbers between 0 and 7.
 *
 * ---
 *
 * Spawn Event: Despawn Everything
 * - Despawns all spawned events on the current map.
 *
 * ---
 *
 * ============================================================================
 * Move Route Custom Commands
 * ============================================================================
 *
 * Some custom commands have been added to the "Set Movement Route" event
 * command. These can be accessed by pressing the "Script..." command and
 * typing in the following, which don't need to be in code form.
 *
 * Keep in mind that since these are custom additions and RPG Maker MZ does not
 * allow plugins to modify the editor, the "Preview" button will not factor in
 * the effects of these commands.
 * 
 * If you wish to use a value from a variable, insert $gameVariables.value(x)
 * or \V[x] in place of the x in any of the below.
 * 
 * If you wish to use a value from a self variable, insert \SelfVar[x] in place
 * of the x in any of the below. This will only draw from the current event. If
 * you wish to draw data from outside event self variables, we recommend you
 * use the \V[x] variant after using the Plugin Commands to draw data from them
 * for the best accuracy.
 *
 * ---
 * 
 * Animation: x
 * - Replace 'x' with the ID of the animation to play on moving unit.
 *
 * ---
 * 
 * Balloon: name
 * - Replace 'name' with any of the following to play a balloon on that the
 *   target moving unit.
 * - '!', '?', 'Music Note', 'Heart', 'Anger', 'Sweat', 'Cobweb', 'Silence',
 *   'Light Bulb', 'Sleep', 'User-Defined 1', 'User-Defined 2',
 *   'User-Defined 3', 'User-Defined 4', 'User-Defined 5'
 *    - Do NOT insert quotes.
 * - Examples:
 *   - Balloon: !
 *   - Balloon: Sleep
 *   - Balloon: Heart
 *
 * ---
 * 
 * Fade In: x
 * Fade Out: x
 * - Fades in/out the sprite's opacity.
 * - Fade In will continuously raise the opacity level until it reaches 255.
 * - Fade Out will continuously lower the opacity level until it reaches 0.
 * - Replace 'x' with the speed to fade in/out the sprite.
 * 
 * ---
 * 
 * Force Carry: On
 * Force Carry: Off
 * - For usage with the VS8 sprite sheet.
 * - Use ON to turn force carrying on.
 * - Use OFF to turn force carrying off.
 * - Sprites using the VS8 sprite sheet will also show the VS8 Carry frames.
 * 
 * ---
 * 
 * Force Dash: On
 * Force Dash: Off
 * - Use ON to turn force dashing on.
 * - Use OFF to turn force dashing off.
 * - Forces dashing will prompt the player or event to be in the dashing state.
 * - Sprites using the VS8 sprite sheet will also show the VS8 Dashing frames.
 * 
 * ---
 * 
 * Hug: Left
 * Hug: Right
 * - Causes the moving unit to hug the left/right side of the wall.
 *
 * ---
 * 
 * Index: x
 * - Replace 'x' with a number depicting the character index to change the
 *   moving unit's sprite to.
 *
 * ---
 * 
 * Index: +x
 * Index: -x
 * - Replace 'x' with the value to change the character index of the moving
 *   unit's sprite by.
 *
 * ---
 * 
 * Jump Forward: x
 * - Replace 'x' with the number of tiles for the unit to jump forward by.
 *
 * ---
 * 
 * Jump To: x, y
 * - Replace 'x' and 'y' with the coordinates for the unit to jump to.
 *
 * ---
 * 
 * Jump to Event: x
 * - Replace 'x' with the ID of the event for the unit to jump to.
 *
 * ---
 * 
 * Jump to Player
 * - Causes the moving unit to jump to the player.
 *
 * ---
 * 
 * Jump To Home
 * - Causes the event to jump to its home position.
 * - This only works on events, not player characters or followers.
 * 
 * ---
 * 
 * Move Lower Left Until Stop
 * Move Down Until Stop
 * Move Lower Right Until Stop
 * Move Left Until Stop
 * Move Right Until Stop
 * Move Upper Left Until Stop
 * Move Up Until Stop
 * Move Upper Right Until Stop
 * - Causes the moving unit to move that direction until it hits a stop.
 * - Events will stop moving before they make contact with the player.
 *
 * ---
 * 
 * Crash Move Lower Left Until Stop
 * Crash Move Down Until Stop
 * Crash Move Lower Right Until Stop
 * Crash Move Left Until Stop
 * Crash Move Right Until Stop
 * Crash Move Upper Left Until Stop
 * Crash Move Up Until Stop
 * Crash Move Upper Right Until Stop
 * - Causes the moving unit to move that direction until it hits a stop.
 * - Events can crash into the player and trigger an event.
 *
 * ---
 * 
 * Move To: x, y
 * - Replace 'x' and 'y' with the map coordinates to move the unit to through
 *   pathfinding.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * - Events will go around the player.
 *
 * ---
 * 
 * Crash Move To: x, y
 * - Replace 'x' and 'y' with the map coordinates to move the unit to through
 *   pathfinding.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * - Events can crash into the player and trigger an event.
 *
 * ---
 * 
 * Move to Event: x
 * - Replace 'x' with the ID of the event to move the unit to.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * - Events will go around the player.
 *
 * ---
 * 
 * Crash Move to Event: x
 * - Replace 'x' with the ID of the event to move the unit to.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * - Events can crash into the player and trigger an event.
 *
 * ---
 * 
 * Move to Player
 * - Moves the unit to the player.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Move to Home
 * - Moves the unit towards their home position on the map.
 * - This only works on events, not player characters or followers.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * 
 * ---
 * 
 * Crash Move to Home
 * - Moves the unit towards their home position on the map.
 * - This only works on events, not player characters or followers.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * - Events can crash into the player and trigger an event.
 * 
 * ---
 * 
 * Move Lower Left: x
 * Move Down: x
 * Move Lower Right: x
 * Move Left: x
 * Move Right: x
 * Move Upper Left: x
 * Move Up: x
 * Move Upper Right: x
 * - Replace 'x' with the number of times to move the unit by in the designated
 *   direction on the map.
 * - Events can crash into the player and trigger an event.
 *
 * ---
 * 
 * Opacity: x%
 * - Replace 'x' with the percentage to change the unit's sprite opacity to.
 *
 * ---
 * 
 * Opacity: +x
 * Opacity: -x
 * - Replace 'x' with the increment to change the unit's sprite opacity by.
 *
 * ---
 *
 * Pattern Lock: x
 * - Replace 'x' with the step pattern to lock the unit's sprite to.
 *
 * ---
 *
 * Pattern Unlock
 * - Removes pattern lock effect.
 *
 * ---
 * 
 * Pose: name
 * - If using a VS8 sprite, this will cause the unit to strike a pose.
 * - Replace 'name' with any the following:
 * - 'Item', 'Hmph', 'Victory', 'Hurt', 'Kneel', 'Collapse',
 *   '!', '?', 'Music Note', 'Heart', 'Anger', 'Sweat', 'Cobweb', 'Silence',
 *   'Light Bulb', 'Sleep'
 *    - Do NOT insert quotes.
 * - Examples:
 *   - Balloon: Item
 *   - Balloon: Victory
 *   - Balloon: ?
 *
 * ---
 * 
 * Step Toward: x, y
 * - Replace 'x' and 'y' for the desired coordinates for the unit to take one
 *   step towards.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Step Toward Event: x
 * - Replace 'x' with the ID of the event for the unit to take one step to.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Step Toward Player
 * - Causes event to take one step towards the player.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Step Toward Home
 * - Causes the event to take one step towards its home position.
 * - This only works on events, not player characters or followers.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * 
 * ---
 * 
 * Step Away From: x, y
 * - Replace 'x' and 'y' for the desired coordinates for the unit to take one
 *   step away from.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Step Away From Event: x
 * - Replace 'x' with the ID of the event for the unit to take one step from.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Step Away From Player
 * - Causes event to take one step away from the player.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Step Away From Home
 * - Causes the event to take one step away from its home position.
 * - This only works on events, not player characters or followers.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * 
 * ---
 * 
 * Turn To: x, y
 * - Replace 'x' and 'y' for the coordinates to make the unit face towards.
 * - This supports 8 directional turning.
 *
 * ---
 * 
 * Turn to Event: x
 * - Replace 'x' with the ID of the event to turn the unit towards.
 * - This supports 8 directional turning.
 *
 * ---
 * 
 * Turn to Player
 * - Causes the unit to turn towards the player.
 * - This supports 8 directional turning.
 *
 * ---
 * 
 * Turn to Home
 * - Causes the event to turn towards its home position.
 * - This refers to the original position's X/Y on the map.
 * - The event will turn and face the tile that is its original X/Y location.
 * - This only works on events, not player characters or followers.
 * 
 * ---
 * 
 * Turn Away From: x, y
 * - Replace 'x' and 'y' for the coordinates to make the unit face away from.
 * - This supports 8 directional turning.
 *
 * ---
 * 
 * Turn Away From Event: x
 * - Replace 'x' with the ID of the event to turn the unit away from.
 * - This supports 8 directional turning.
 *
 * ---
 * 
 * Turn Away From Player
 * - Causes the unit to turn away from the player.
 * - This supports 8 directional turning.
 *
 * ---
 * 
 * Turn Away From Home
 * - Causes the event to turn away from its home position.
 * - This only works on events, not player characters or followers.
 * 
 * ---
 * 
 * Turn Lower Left
 * Turn Lower Right
 * Turn Upper Left
 * Turn Upper Right
 * - Causes the unit to turn to one of the diagonal directions.
 *
 * ---
 * 
 * Self Switch x: On
 * Self Switch x: Off
 * Self Switch x: Toggle
 * - Replace 'x' with 'A', 'B', 'C', 'D', or a <Self> Switch ID to adjust the
 *   unit's Self Switch.
 *
 * ---
 * 
 * Self Variable x: y
 * - Replace 'x' with a <Self> Variable ID to adjust the unit's Self Variable.
 * - Replace 'y' with a number value to set the Self Variable to.
 *
 * ---
 * 
 * Teleport To: x, y
 * - Replace 'x' and 'y' with the coordinates to instantly move the unit to.
 *
 * ---
 * 
 * Teleport to Event: x
 * - Replace 'x' with the ID of the event to instantly move the unit to.
 *
 * ---
 * 
 * Teleport to Player
 * - Instantly moves the unit to the player's location.
 *
 * ---
 * 
 * Teleport to Home
 * - Instantly teleports an event to its home position on the map.
 * - This only works on events, not player characters or followers.
 * 
 * ---
 * 
 * If none of the commands are detected above, then a script call will be ran.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Event Label Settings
 * ============================================================================
 *
 * Event Labels are small windows created to display text over an event's head.
 * They're set up using the <Label> notetags and/or comment tags. Event Labels
 * are a great way to instantly relay information about the event's role to
 * the player.
 *
 * ---
 *
 * Event Labels
 * 
 *   Sprite Based?:
 *   - Use sprite-based labels instead of legacy-window version.
 *   - Legacy-window version will not be supported in future.
 *   - Sprite-based labels are more memory efficient and work better
 *     compatibility-wise.
 * 
 *   Mobile-Enabled?:
 *   - Enable event labels for mobile devices?
 * 
 *   Font Size:
 *   - The font size used for the Event Labels.
 * 
 *   Icon Size:
 *   - The size of the icons used in the Event Labels.
 * 
 *   Line Height:
 *   - The line height used for the Event Labels.
 * 
 *   Offset X:
 *   - Globally offset all labels horizontally by this amount.
 * 
 *   Offset Y:
 *   - Globally offset all labels vertically by this amount.
 * 
 *   Fade Speed:
 *   - Fade speed for labels.
 * 
 *   Visible Range:
 *   - Range the player has to be within the event to make its label visible.
 * 
 *     Range Type:
 *     - What do you want the default label visible range type?
 *       - Square
 *       - Diamond
 *       - Circle
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Event Icon Settings
 * ============================================================================
 *
 * Icons can be displayed over an event's head through the <Icon> notetags
 * and/or comment tags. These can be used for a variety of things such as
 * making them look like they're carrying an item or to indicate they have a
 * specific role.
 *
 * ---
 *
 * Event Icon
 * 
 *   Buffer X:
 *   - Default X position buffer for event icons.
 * 
 *   Buffer Y:
 *   - Default Y position buffer for event icons.
 * 
 *   Blend Mode:
 *   - Default blend mode for even icons.
 *     - 0 - Normal
 *     - 1 - Additive
 *     - 2 - Multiply
 *     - 3 - Screen
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Event Template Settings
 * ============================================================================
 *
 * Event Templates allow you to store specific maps and/or event data to bring
 * out on need while having a premade set base. They're similar to prefabs but
 * aren't things that can be altered individually as one setting for an event
 * template will serve as a blueprint for all of them that use them.
 *
 * Event Templates are used for the <Copy Event> notetags, the Morph Event and
 * Spawn Event Plugin Commands.
 *
 * ---
 *
 * Settings
 * 
 *   Preloaded Maps:
 *   - A list of all the ID's of the maps that will be preloaded to serve as
 *     template maps for this plugin.
 *
 * ---
 *
 * Templates
 * - A list of all the Event Templates used by this project. Used for notetags
 *   and Plugin Commands.
 * 
 *     Name:
 *     - Name of the template. It'll be used as anchor points for notetags and
 *       Plugin Commands.
 * 
 *     Map ID:
 *     - ID of the map the template event is stored on.
 *     - This will automatically add this ID to preloaded list.
 * 
 *     Event ID:
 *     - ID of the event the template event is based on.
 * 
 *     JavaScript:
 *       JS: Pre-Copy:
 *       JS: Post-Copy:
 *       JS: Pre-Morph:
 *       JS: Post-Morph:
 *       JS: Pre-Spawn:
 *       JS: Post-Spawn:
 *       - Code that's ran during certain circumstances.
 *       - The code will occur at the same time as the ones listed in the main
 *         Event Template Settings Plugin Parameters. However, the ones listed
 *         in these individual entries will only occur for these specific
 *         templates and only if the templates are used.
 *
 * ---
 *
 * JavaScript
 * 
 *   JS: Pre-Copy:
 *   JS: Post-Copy:
 *   JS: Pre-Morph:
 *   JS: Post-Morph:
 *   JS: Pre-Spawn:
 *   JS: Post-Spawn:
 *   - Code that's ran during certain circumstances.
 *   - These are global and are ran for all copies, morphs, and/or spawns.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Movement Settings
 * ============================================================================
 *
 * These plugin parameters allow you to control how movement works in your
 * game, toggling it from 4-directional to 8-directional, setting up rules to
 * stop self-movement from events while an event or message is present, and
 * other aesthetics such as tilting the sprite while dashing, setting shadows
 * beneath the sprites, and allow for turning in place.
 * 
 * Shadows do NOT appear for sprites using a "!" as their leading filename
 * marker. These sprites are environmental and are considered "object"
 * characters by the RPG Maker MZ core scripts. They do not utilize character
 * shadows due.
 *
 * ---
 *
 * 8 Directional Movement
 * 
 *   Enable:
 *   - Allow 8-directional movement by default? Players can move diagonally.
 * 
 *   Strict Collision:
 *   - Enforce strict collission rules where the player must be able to pass
 *     both cardinal directions?
 * 
 *   Favor Horizontal:
 *   - Favor horizontal if cannot pass diagonally but can pass both
 *     horizontally and vertically?
 * 
 *   Slower Diagonals?
 *   - Enforce a slower movement speed when moving diagonally?
 * 
 *     Speed Multiplier
 *     - What's the multiplier to adjust movement speed when moving diagonally?
 *
 * ---
 *
 * Automatic Movement
 * 
 *   Stop During Events:
 *   - Stop automatic event movement while events are running.
 * 
 *   Stop During Messages:
 *   - Stop automatic event movement while a message is running.
 *
 * ---
 * 
 * Bitmap
 * 
 *   Smoothing:
 *   - Do you want to smooth or pixelate the map sprites?
 *   - Pixelating them is better for zooming and tilting.
 * 
 * ---
 *
 * Dash
 * 
 *   Dash Modifier:
 *   - Alters the dash speed modifier.
 * 
 *   Dash on Ladder?
 *   - Allow dashing while on a ladder or rope?
 * 
 *   Enable Dash Tilt?:
 *   - Tilt any sprites that are currently dashing?
 * 
 *     Tilt Left Amount:
 *     - Amount in radians when moving left (upper left, left, lower left).
 * 
 *     Tilt Right Amount:
 *     - Amount in radians when moving right (upper right, right, lower right).
 * 
 *     Tilt Vertical Amount:
 *     - Amount in radians when moving vertical (up, down).
 *
 * ---
 * 
 * Event Movement
 * 
 *   Random Move Weight:
 *   - Use numbers between 0 and 1.
 *   - Numbers closer to 1 stay closer to their home position.
 *   - 0 to disable it.
 * 
 *   Shift Y:
 *   - How many pixels should non-tile characters be shifted by?
 *   - Negative: up. Positive: down.
 * 
 * ---
 * 
 * Path Finding
 * 
 *   Mobile-Enabled?:
 *   - Enable diagonal pathfinding for mobile devices?
 * 
 * ---
 *
 * Shadows
 * 
 *   Show:
 *   - Show shadows on all events and player-related sprites.
 * 
 *   Default Filename:
 *   - Default filename used for shadows found in img/system/ folder.
 * 
 *   Shadow Z Layer:
 *   - What is the sprite Z layer used for the shadow sprites?
 *     - In-game layers are as follows:
 *     - 0 : Lower tiles
 *     - 1 : Lower characters
 *     - 3 : Normal characters
 *     - 4 : Upper tiles
 *     - 5 : Upper characters
 *     - 6 : Airship shadow
 *     - 7 : Balloon
 *     - 8 : Animation
 *     - 9 : Destination
 *
 * ---
 *
 * Turn in Place
 * 
 *   Enable:
 *   - When not dashing, player will turn in place before moving.
 *   - This only applies with keyboard inputs.
 * 
 *   Delay in Frames:
 *   - The number of frames to wait before moving.
 *
 * ---
 * 
 * Vehicle Speeds
 * 
 *   Boat Speed:
 *   - Allows you to adjust the base speed of the boat vehicle.
 * 
 *   Ship Speed:
 *   - Allows you to adjust the base speed of the ship vehicle.
 * 
 *   Airship Speed:
 *   - Allows you to adjust the base speed of the airship vehicle.
 * 
 * ---
 * 
 * Wall Bump
 * 
 *   Enable?:
 *   - Enable the sound effect to be played when bumping into a wall?
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: VisuStella 8-Dir Settings
 * ============================================================================
 *
 * These are settings for sprite sheets using the VS8 format.
 * For more information on the VS8 format, look in the help section above.
 *
 * ---
 *
 * Balloon Icon Settings
 * 
 *   Auto-Balloon Poses:
 *   - Automatically pose VS8 sprites when using balloon icons.
 * 
 *   Balloon Offset X:
 *   - Offset balloon icons on VS8 sprites by x pixels.
 * 
 *   Balloon Offset Y:
 *   - Offset balloon icons on VS8 sprites by y pixels.
 *
 * ---
 *
 * Icons
 * 
 *   Auto Buffer:
 *   - Automatically buffer the X and Y coordinates of VS8 sprites?
 * 
 *   Use Carry Pose:
 *   - Use the carry pose when moving with an icon overhead.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Region Rulings
 * ============================================================================
 *
 * These settings allow you to decide the passability of the player, events,
 * and various vehicles through the usage of Regions.
 *
 * ---
 *
 * Allow Regions
 * 
 *   All Allow:
 *   Walk Allow:
 *   Player Allow:
 *   Event Allow:
 *   Vehicle Allow:
 *   Boat Allow:
 *   Ship Allow:
 *   Airship Allow:
 *   - Insert Region ID's where the affected unit type can enter.
 *   - Region ID's range from 0 to 255.
 *
 * ---
 *
 * Forbid Regions
 * 
 *   All Forbid:
 *   Walk Forbid:
 *   Player Forbid:
 *   Event Forbid:
 *   Vehicle Forbid:
 *   Boat Forbid:
 *   Ship Forbid:
 *   Airship Forbid:
 *   - Insert Region ID's where the affected unit type cannot enter.
 *   - Region ID's range from 0 to 255.
 *
 * ---
 *
 * Dock Regions
 * 
 *   Vehicle Dock:
 *   Boat Dock:
 *   Ship Dock:
 *   Airship Dock:
 *   - Insert Region ID's where the affected vehicle can dock
 *   - Region ID's range from 0 to 255.
 * 
 *   Only Region Dockable:
 *   - Vehicles are only able to dock at designated regions.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Common Event on OK Button
 * ============================================================================
 *
 * These Plugin Parameters allow you to setup Common Events that activate using
 * Regions when pressing the OK button while standing on top of them or in
 * front of them. These let you create near universally interactable objects
 * using Regions, such as rivers to start up fishing events or locations to
 * places items on.
 *
 * ---
 *
 * Regions
 * 
 *   Regions 1 - 255:
 *   - Which Common Event does this region activate?
 *   - Use 0 to not activate any Common Events.
 *
 * ---
 *
 * Target Tile
 * 
 *   Target Tile:
 *   - Which tile should be checked for Common Event on OK Button?
 *     - Tile in front of player.
 *     - Tile player is standing on top of.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Common Event on Touch
 * ============================================================================
 *
 * These Plugin Parameters allow you to setup Common Events that trigger when
 * stepping onto Region-marked tiles. These let you create custom effects that
 * will occur such as customized damage floors, traps, and/or events.
 * 
 * Areas marked with these regions will not allow random encounters to occur.
 * This is how RPG Maker works. Assuming you are not using plugins at all, by
 * putting on touch events all over the map, tiles with those on touch events
 * will not let random encounters trigger.
 *
 * ---
 *
 * Regions
 * 
 *   Regions 1 - 255:
 *   - Which Common Event does this region activate?
 *   - Use 0 to not activate any Common Events.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Terrain Tag Settings
 * ============================================================================
 *
 * Terrain Tags are used in Database => Tilesets to mark certain tiles and
 * give them unique properties through terrain tags.
 *
 * ---
 *
 * Terrain Tag ID's
 * 
 *   Rope:
 *   - Which terrain tag number to use for ropes?
 *
 * ---
 *
 * ============================================================================
 * Terms of Use
 * ============================================================================
 *
 * 1. These plugins may be used in free or commercial games provided that they
 * have been acquired through legitimate means at VisuStella.com and/or any
 * other official approved VisuStella sources. Exceptions and special
 * circumstances that may prohibit usage will be listed on VisuStella.com.
 * 
 * 2. All of the listed coders found in the Credits section of this plugin must
 * be given credit in your games or credited as a collective under the name:
 * "VisuStella".
 * 
 * 3. You may edit the source code to suit your needs, so long as you do not
 * claim the source code belongs to you. VisuStella also does not take
 * responsibility for the plugin if any changes have been made to the plugin's
 * code, nor does VisuStella take responsibility for user-provided custom code
 * used for custom control effects including advanced JavaScript notetags
 * and/or plugin parameters that allow custom JavaScript code.
 * 
 * 4. You may NOT redistribute these plugins nor take code from this plugin to
 * use as your own. These plugins and their code are only to be downloaded from
 * VisuStella.com and other official/approved VisuStella sources. A list of
 * official/approved sources can also be found on VisuStella.com.
 *
 * 5. VisuStella is not responsible for problems found in your game due to
 * unintended usage, incompatibility problems with plugins outside of the
 * VisuStella MZ library, plugin versions that aren't up to date, nor
 * responsible for the proper working of compatibility patches made by any
 * third parties. VisuStella is not responsible for errors caused by any
 * user-provided custom code used for custom control effects including advanced
 * JavaScript notetags and/or plugin parameters that allow JavaScript code.
 *
 * 6. If a compatibility patch needs to be made through a third party that is
 * unaffiliated with VisuStella that involves using code from the VisuStella MZ
 * library, contact must be made with a member from VisuStella and have it
 * approved. The patch would be placed on VisuStella.com as a free download
 * to the public. Such patches cannot be sold for monetary gain, including
 * commissions, crowdfunding, and/or donations.
 *
 * ============================================================================
 * Credits
 * ============================================================================
 * 
 * If you are using this plugin, credit the following people in your game:
 * 
 * Team VisuStella
 * * Yanfly
 * * Arisu
 * * Olivia
 * * Irina
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.62: January 19, 2026
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** New section added: Reference Switches and Reference Variables
 * *** Reference Switches and Reference Variables are added in version 1.62 of
 *     this plugin. These switches and variables allow you to reference them
 *     through strings when using script calls.
 * *** By simply naming your switch or variable ((Reference Name)), you can use
 *     that 'reference name' in a string to call them for script calls.
 * *** When referencing the strings in the script calls, case does not matter,
 *     which means you can use all capitals or all lower case and they'll still
 *     reference the same switch or variable.
 * **** Example: Switch 10 Name: ((Priscilla Joined))
 * ***** Script Call: $gameSwitches.value('Priscilla Joined')
 * ***** $gameSwitches.setValue('Priscilla Joined', true)
 * **** Variable 20 Name: Total ((Goblins Slain))
 * ***** $gameVariables.value('Goblins Slain')
 * ***** $gameVariables.setValue('Goblins Slain', 50)
 * *** Remember to put quotes around the name for the script call!
 * *** This only applies for the $gameSwitches and $gameVariables functions of
 *     value(id) and setValue(id, value). They do not apply to the other
 *     $gameSwitches and $gameVariables functions.
 * * New Features!
 * ** Added Reference Switches and Reference Variables
 * *** See Help section for more info about Reference Switches and Variables
 * ** New Plugin Commands added:
 * *** Shadow Hide: Player
 * *** Shadow Hide: Followers
 * *** Shadow Hide: All Events
 * **** Hides the visibility of the target sprite shadow.
 * *** Shadow Show: Player
 * *** Shadow Show: Followers
 * *** Shadow Show: All Events
 * **** Returns the visibility of target sprite shadow.
 * **** Does NOT override Plugin Parameter "Shadows > Show" if off.
 * **** Does NOT override <Hide Shadow> notetag.
 * 
 * Version 1.61: December 15, 2025
 * * Bug Fixes!
 * ** Fixed a bug where shadows would appear under lower-priority event sprites
 *    making usage of certain tiles awkward looking. This is corrected by the
 *    new Plugin Parameter. Fix made by Arisu.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Feature!
 * ** New Plugin Parameter added by Arisu:
 * *** Parameters > Movement Settings > Shadows > Shadow Z Layer
 * **** What is the sprite Z layer used for the shadow sprites?
 * **** By default, this layer will now be 0.5 instead of 0.
 * * Feature Update!
 * ** If a event is made whose priority is "Below characters" and is a tile
 *    object (ie taking a sprite from the map tileset or a character sprite
 *    with "!" in front of the name), it will be automatically regulated to
 *    a custom Z layer of 0.
 * 
 * Version 1.60: August 29, 2024
 * * Bug Fixes!
 * ** Fixed a bug where events with large hitboxes do not work with crash move.
 *    Fix made by Arisu.
 * ** Fixed a bug where single-mode save games by Save Core would freeze after
 *    executed event movements. Fix made by Arisu.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Update!
 * ** Event Labels will adjust their vertical position to the picture of any
 *    attached event picture if one is present. Update by Arisu.
 * * New Features!
 * ** New Notetags added by Arisu:
 * *** <Picture Type: Enemy>
 * *** <Picture Type: SV Enemy>
 * **** Will use /img/enemies/ or /img/sv_enemies/ instead of /img/pictures/ to
 *      grab a picture graphic from.
 * **** Other picture graphic sprite related notetags will apply as normal.
 * *** <Label Range Type: Square>
 * *** <Label Range Type: Circle>
 * *** <Label Range Type: Diamond>
 * **** Sets a range type for the label to appear visible for.
 * ** New Plugin Parameters added by Arisu:
 * *** Parameters > Event Label Settings > Visible Range > Range Type:
 * **** What do you want the default label visible range type?
 * 
 * Version 1.59: June 13, 2024
 * * Bug Fixes!
 * ** Added a cache check for character sprite tag names to reduce frame drops.
 *    Fix made by Arisu.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetags added by Arisu:
 * *** <Location X: +x>, <Location X: -x>
 * *** <Location Y: +y>, <Location Y: -y>
 * *** <Location: +x, +y>, <Location: +x, -y>
 * *** <Location: -x, +y>, <Location: -x, -y>
 * **** Adjusts the initial location of this event by +x and +y (or -x and -y).
 * **** This allows you to stack events on top of each other or even move them
 *      to various places of the map.
 * *** <Tile Expand Up: x>
 * *** <Tile Expand Down: x>
 * *** <Tile Expand Left: x>
 * *** <Tile Expand Right: x>
 * **** Used for events with tile graphics. Expands the graphic up, down, left,
 *      or right from the spritesheet.
 * **** This does NOT expand the hitbox.
 * **** The graphic will be anchored to the tile it's expanded from. This means
 *      even if you expanded downward, the actual event's position will still
 *      be the current event's X/Y coordinates. It's just grown more vertically
 *      and is still centered horizontally.
 * **** This is primarily used to save on having to use too many events for
 *      tiles that expanded past 1x1 tile sizes.
 * 
 * Version 1.58: May 16, 2024
 * * Documentation Update!
 * ** Added "Features: Character Sprite Filename Tags" section.
 * * New Features!
 * ** [Invisible] tag added to character sprite filenames.
 * *** If a character sprite's filename has [invisible] in it, it will become
 *     invisible on the map screen in-game while almost everything else about
 *     it is visible. This is used for those who wish to use sprite labels for
 *     things such as autorun and parallel events.
 * 
 * Version 1.57: March 14, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Update!
 * ** Plugin Command: "Event Icon: Delete" will now keep an event icon cleared
 *    until the newly added Plugin Command: "Event Icon: Restore" is used.
 *    Update made by Arisu.
 * ** Plugin Command: "Event Icon: Change" is now renamed to have "(Temporary)"
 *    after its name in order to clarify the temporary changes made to it.
 * * New Features!
 * ** New Plugin Command added by Arisu:
 * *** Event Icon: Event Icon: Change (Forced)
 * **** Change the icon that appears on an event.
 * **** This change is forced and needs to be restored.
 * *** Event Icon: Restore
 * **** Restores a deleted or forced icon that appears on an event.
 * 
 * Version 1.56: February 15, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Update!
 * ** Added fail safes for activation proximity notetags when loaded from past
 *    save files without Events and Movement Core installed. Added by Arisu.
 * * New Features!
 * ** New notetags added by Arisu:
 * *** <Encounter Half Square: x>
 * *** <Encounter Half Circle: x>
 * *** <Encounter Half Delta: x>
 * *** <Encounter Half Row: x>
 * *** <Encounter Half Column: x>
 * *** <Encounter None Square: x>
 * *** <Encounter None Circle: x>
 * *** <Encounter None Delta: x>
 * *** <Encounter None Row: x>
 * *** <Encounter None Column: x>
 * **** If the player is within the 'x' area effect of this event, the random
 *      encounter rate will be halved or suppressed completely depending on the
 *      notetag used.
 * **** These include script call checks.
 * *** <Erase if Encounter Half>
 * *** <Erase if Encounter None>
 * **** Automatically erase this event if the player's party has an encounter
 *      half or encounter none effect, or if the event has spawned in an
 *      encounter half or encounter none area.
 * **** This check only occurs in two situations: when the map is first loaded
 *      after being teleported into or when the player leaves a menu and
 *      returns back to the map.
 * **** Events that have been erased due to this effect will NOT return even if
 *      the encounter half/none effect is removed while the player is still on
 *      the map. The event will return if the player exits the map and comes
 *      back.
 * 
 * Version 1.55: December 14, 2023
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Commands added by Arisu:
 * *** Event Popup: Player
 * *** Event Popup: Follower
 * *** Event Popup: Event
 * *** Event Popup: Target Tile
 * **** Makes a centered event popup on the player sprite, target follower
 *      sprite, target event sprite, or target tile.
 * **** All of these new Plugin Commands require VisuMZ_1_MessageCore and
 *      cannot be used in battle.
 * 
 * Version 1.54: October 12, 2023
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Help file updated to reduce confusion:
 * *** Call Event: Remote Read
 * **** This will run the page of the target event on the current event.
 * **** This means that any "This Event" commands will be applied to the event
 *      using this Plugin Command and NOT the target event that page data is
 *      being retrieved from.
 * **** Think of it as the current event using the target called event as a
 *      Common Event ala how RPG Maker 2003 works (for those familiar with it).
 * * Feature Update!
 * ** Renamed "Call Event: Remote Activation" to "Call Event: Remote Read" to
 *    reduce confusion.
 * * Feature Update!
 * ** <Activation Radius: x> notetag is now defined as <Activation Delta: x>
 * *** 'Radius' variant will still work and function as 'Delta' but will no
 *     longer be listed in the help file as 'Radius'
 * *** This is changed to avoid confusion with the new notetag.
 * * New Features!
 * ** New notetag added by Arisu and sponsored by AndyL:
 * *** <Activation Circle: x>
 * **** A circle-shaped range with the event at the center.
 * **** 'x' represents the distance from the center.
 * 
 * Version 1.53: August 17, 2023
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** <Map Load Common Event: x>
 * ** <Map Load Common Events: x, x, x>
 * *** When this map is loaded, run the specified Common Events once available.
 * **** Does NOT trigger if you transfer to a different part of the same map.
 * 
 * Version 1.52: July 13, 2023
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Updated help file for <Label: text> notetags:
 * *** If text codes are used, avoid text codes that use < and > wrappers.
 * ** Updated help file for <Label> sandwich notetags:
 * *** You can use text codes with < and > wrappers.
 * * Feature Update!
 * ** Event labels now work properly with scaling sprites.
 * * New Features!
 * ** New notetag added by Arisu and sponsored by Anon:
 * *** <Label Hue Shift: +x>
 * *** <Label Hue Shift: -x>
 * **** Changes the hue of the event label by +x or -x every frame.
 * **** Keep in mind that since this is changing hue, this will appear to have
 *      no effect if you are using black and white labels.
 * **** Use labels with text codes that add color to them like '\C[4]text'
 * **** This only works with the sprite version of event labels and does not
 *      work with the legacy version.
 * 
 * Version 1.51: June 15, 2023
 * * Bug Fixes!
 * ** Provided a fail safe for plugins using the scaling options from this
 *    plugin but do not have scaling parameters identified. The scaling ratio
 *    should now default to 1.0. Fix made by Olivia.
 * * Feature Update!
 * ** Diagonal pathfinding is now improved as to not get stuck on tight corners
 *    on the map. Feature update made by Arisu.
 * 
 * Version 1.50: April 13, 2023
 * * Bug Fixes!
 * ** <Icon: x> should now update correctly when changing pages through self
 *    switches or other event conditions. Fix made by Arisu.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Arisu:
 * *** Plugin Parameters > Event Labels > Mobile-Enabled?
 * *** Plugin Parameters > Movement > Pathfinding > Mobile-Enabled?
 * **** These settings allow you to enable or disable certain features when
 *      played on mobile devices for better performance.
 * 
 * Version 1.49: March 16, 2023
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Event Notetag and Comment Tags added by Arisu:
 * *** <Scale: x%>
 * *** <Scale X: x%>
 * *** <Scale Y: y%>
 * **** Changes the scale of the sprite to the designated size.
 * 
 * Version 1.48: January 20, 2023
 * * Feature Update!
 * ** <Move Synch> for certain types will also copy facing directions even if
 *    there are no tile movements (ie changing directions when pressed up
 *    against and obstacle). Update made by Arisu.
 * 
 * Version 1.47: November 10, 2022
 * * Feature Update!
 * ** If "Follower: Set Global Chase" is set to false, followers will no longer
 *    jump towards the player location when the player jumps. This does NOT
 *    apply to gather or location changing players. Followers will still have
 *    to synchronize their positions there regardless in order to maintain
 *    consistency. Update made by Olivia.
 * 
 * Version 1.46: September 29, 2022
 * * Bug Fixes!
 * ** Altered the self switch auto-reset timing to reduce errors. Fix by Arisu.
 * * Feature Update!
 * ** Added self-movement prevention whenever scenes are deactivated. Update
 *    made by Arisu.
 * 
 * Version 1.45: August 18, 2022
 * * Bug Fixes!
 * ** Fixed a bug that caused event labels with variables from refreshing
 *    properly. Fix made by Arisu.
 * 
 * Version 1.44: July 21, 2022
 * * Bug Fixes!
 * ** Fixed a problem that caused <Exit Reset Self Data> notetag to not work.
 *    Fix made by Arisu.
 * * Feature Update!
 * ** Diagonal pathfinding is now disabled when there are too many events on a
 *    map, causing extra collission checks. This value is set to 100 for the
 *    time being until we can figure out a better way to calculate diagonal
 *    pathfinding. Update made by Irina.
 * 
 * Version 1.43: July 14, 2022
 * * Bug Fixes!
 * ** Move to Player for events should no longer cause hang ups. Fix by Olivia.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Update!
 * ** Added caching function for pathfinding when using touch movement for a
 *    smoother experience. When touch movement is held down, pathfinding will
 *    utilize the non-diagonal function for less resource consumption to
 *    prevent FPS frame drops. Update made by Arisu.
 * * New Features!
 * ** New notetag added by Arisu:
 * *** <Playtest>
 * **** If this notetag is found in the event's notebox (NOT comments), then
 *      the event will only appear during a playtest session. It will not
 *      appear in a deployed game where the playtest flag is not on.
 * 
 * Version 1.42: June 23, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Added to <Copy Event: x, y> notetag help:
 * *** - If '0' is used for the Map ID, reference the current map.
 * * Feature Update!
 * ** Default MZ behavior would have "below characters" trigger events with
 *    only comments lock out facing "same as characters" trigger events. This
 *    is now bypassed. Update made by Arisu.
 * ** The <Copy Event: mapID, eventID> notetags now allow usage of '0' for the
 *    mapID to reference the current map. Update made by Arisu.
 * ** <Save Event Location> should now work more efficiently. Update by Arisu.
 * ** Dashing animations for followers will no longer look weird after having
 *    gathered up and then proceeding to dash. Update made by Irina.
 * * New Features!
 * ** New event notetag added by Arisu:
 * *** <Exit Reset Self Data>
 * **** When the player leaves the current map, all Self Switches and Self
 *      Variables related to this event will be reset.
 * ** New Plugin Command added by Arisu and sponsored by Anon:
 * *** Self Data: Reset All
 * **** Reset the Self Switch and Self Variable data of all events within the
 *      specified map.
 * ** New Plugin Parameter added by Arisu and sponsored by Anon:
 * *** Plugin Params > Movement Settings > Dash > Dash on Ladder?
 * **** Allow dashing while on a ladder or rope?
 * 
 * Version 1.41: June 1, 2022
 * * Bug Fixes!
 * ** Parallel Process Common Events above 1000 should no longer crash the
 *    game. Bug fixed by Irina.
 * 
 * Version 1.40: May 19, 2022
 * * Bug Fixes!
 * ** Sprite Event Labels with distance properties will now work properly
 *    when changing from a non-met page condition to a met page condition.
 *    Fix made by Arisu.
 * 
 * Version 1.39: May 5, 2022
 * * Bug Fixes!
 * ** Save event location should now work properly with Set Event Location
 *    command. Fix made by Arisu.
 * ** Sprite Event Labels with distance properties will no longer be visible
 *    when constantly entering/exiting the Main Menu. Fix made by Arisu.
 * 
 * Version 1.38: April 28, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Arisu and sponsored by Archeia:
 * *** Plugin Parameters > Movement Settings > Event Movement > Shift Y
 * **** How many pixels should non-tile characters be shifted by?
 * ** New Notetags added by Arisu and sponsored by Archeia:
 * *** <Picture Filename: filename>
 * **** applies a picture graphic from the /img/pictures/ folder of your
 *      game project.
 * **** This graphic will be on top of the character sprite but below the event
 *      icon sprite.
 * **** The picture priority will be the same as the event's priority. If it is
 *      "below characters", the player can walk on top of it. If it is "above
 *      characters", the player will behind it. If it is "same as characters",
 *      the priority will be based on the current relative Y position.
 * *** <Picture Max Size: x>
 * *** <Picture Scale: y%>
 * **** If the "Max Size" or "Scale" supplementary notetags are used, the
 *      picture graphic will be scaled proportionally to fit either the exact
 *      pixel size for "Max Size" or the "Scale" ratio.
 * *** <Picture Offset: +x, +y>
 * *** <Picture Offset: -x, -y>
 * **** Offsets the X and Y position of the event picture relative to the event
 *      sprite's own position.
 * *** <Picture Wait Frames: x>
 * **** Requires VisuMZ_4_AnimatedPictures! "Wait Frames" is used with VisuMZ's
 *      Animated Pictures plugin. This determines the delay inbetween
 *      frame changes.
 * 
 * Version 1.37: March 24, 2022
 * * Documentation Update!
 * ** Added extra clarity to "Turn to Home" Movement Command.
 * *** This refers to the original position's X/Y on the map.
 * *** The event will turn and face the tile that is its original X/Y location.
 * 
 * Version 1.36: March 17, 2022
 * * Bug Fixes!
 * ** "Turn To Home" movement command now properly faces the home position.
 *    Fix made by Irina.
 * * Feature Update!
 * ** Plugin Commands now have separators for easier selection.
 * 
 * Version 1.35: March 3, 2022
 * * IMPORTANT! Compatibility Update!
 * ** Compatibility Update with RPG Maker MZ 1.4.4.
 * *** For some reason this update broke any saves made before 1.4.4 was
 *     updated and they cannot be loaded. The only way saves would load is if
 *     you made a safe after 1.4.4 was done. This should be fixed and saves
 *     made with 1.4.3 and before should now be working. Update made by Irina.
 * 
 * Version 1.34: February 17, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * * New Features!
 * ** Arisu has created new event notetag/comment tags:
 * *** <Custom Z: x>
 * **** Replace 'x' with a number value to determine the event sprite's Z value
 *      relative to the tilemap.
 * **** View the helpfile for more information.
 * *** <Mirror Sprite>
 * **** The event sprite's visual appearance is mirrored.
 * *** <Move Synch Distance Opacity: x>
 * **** Changes the opacity of the event based on the distance between it and
 *      its move synched target. Closer means more opaque. Further away means
 *      more transparent.
 * ** Irina has created a more memory efficient version of Event Labels.
 * *** Plugin Parameters > Event Label Settings > Sprite Based?
 * **** Use sprite-based labels instead of legacy-window version.
 * **** Legacy-window version will not be supported in future.
 * 
 * Version 1.33: February 3, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Notetags added by Arisu!
 * *** <Hide Player>
 * *** <Show Player>
 * **** Map Notetag. Forcefully hides or shows the player sprite. This is so
 *      you don't need to manually turn the setting on/off each time you enter
 *      a specific map.
 * *** <Hide Followers>
 * *** <Show Followers>
 * **** Map Notetag. Forcefully hides or shows the player's followers. This is
 *      so you don't need to manually turn them on/off each time you enter a
 *      specific map.
 * 
 * Version 1.32: January 20, 2022
 * * Bug Fixes!
 * ** Self Variable changes from custom move routes should no longer cause
 *    crashes. Fix made by Arisu.
 * ** Self Switch custom move route toggles should now work properly. Fix made
 *    by Arisu.
 * * Feature Update!
 * ** Better shadow tracking algorithm to remove any shadow twitching.
 *    Update made by Yanfly.
 * 
 * Version 1.31: January 6, 2022
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.30: November 25, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** Map Switches and Map Variables added by Arisu:
 * *** Map Switches are self-switches for maps. Instead of using <Self>, use
 *     <Map> in the Switch name to designate it as a Map Switch. The ON/OFF
 *     data for that Switch will vary depending on the map the player is
 *     currently on.
 * *** Map Variables are self-variables for maps. Instead of using <Self>, use
 *     <Map> in the Variable name to designate it as a Map Switch. The number
 *     data for that Variable will vary depending on the map the player is
 *     currently on.
 * *** Script Calls have been added for these features as well.
 * **** See help file for them.
 * 
 * Version 1.29: October 7, 2021
 * * Bug Fixes!
 * ** Same map event spawning should now work properly without the need to add
 *    the current map ID to the preloaded map array. Update made by Arisu.
 * 
 * Version 1.28: September 30, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New move route commands added by Arisu:
 * *** Jump to Home
 * *** Move to Home
 * *** Crash Move to Home
 * *** Step Toward Home
 * *** Step Away From Home
 * *** Turn to Home
 * *** Turn Away From Home
 * *** Teleport to Home
 * **** These only work on events. Their actions should be reflective of what
 *      their command names suggest.
 * 
 * Version 1.27: September 17, 2021
 * * Bug Fixes!
 * ** Fixed event spawn templates so that they can work properly with Common
 *    Events. Fix made by Arisu.
 * 
 * Version 1.26: September 3, 2021
 * * Bug Fixes!
 * ** "Step Towards Player" custom command should now work properly. Fix made
 *    by Arisu.
 * ** Having multiple region restriction notetags for a map will no longer
 *    cause others to lock out. Fix made by Arisu.
 * 
 * Version 1.25: July 30, 2021
 * * Bug Fixes!
 * ** Fixed a problem that caused the 'setSelfSwitchValue' and
 *    'setSelfVariableValue' functions to not work properly. Fix made by Irina.
 * 
 * Version 1.24: June 4, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Added extra clarification on which commands will go around the player
 *    character and which ones won't.
 * * New Move Route Custom Commands added by Arisu:
 * ** Crash Move (direction) Until Stop
 * ** Crash Move To: x, y
 * ** Crash Move To Event: x
 * *** These allow events to collide with the player character and trigger
 *     Event Touch events.
 * 
 * Version 1.23: May 21, 2021
 * * Bug Fixes!
 * ** Morphing by templates should no longer cause a crash. Fix made by Arisu.
 * 
 * Version 1.22: May 7, 2021
 * * Bug Fixes!
 * ** Plugin Commands for Event Label Visibility should now update without
 *    needing to take steps as per distance detection. Fix made by Arisu.
 * * Documentation Update!
 * ** Added clarity to "Common Event on Touch" Plugin Parameters.
 * *** Areas marked with these regions will not allow random encounters to
 *     occur. This is how RPG Maker works. Assuming you are not using plugins
 *     at all, by putting on touch events all over the map, tiles with those on
 *     touch events will not let random encounters trigger.
 * 
 * Version 1.21: March 12, 2021
 * * Bug Fixes!
 * ** Move until stop custom move routes should no longer cause crashes.
 *    Fix made by Arisu.
 * 
 * Version 1.20: February 26, 2021
 * * Bug Fixes!
 * ** Region Restrictions regarding Player Allow will no longer affect vehicle
 *    passability. Update made by Arisu.
 * 
 * Version 1.19: February 12, 2021
 * * Bug Fixes!
 * ** "Self Variable: Variable ID" plugin command's Map ID should now be able
 *    to use "0" to self reference the current map. Fix made by Olivia.
 * 
 * Version 1.18: February 5, 2021
 * * Bug Fixes!
 * ** Event icon plugin commands should now work properly. Fix made by Arisu.
 * * Documentation Update!
 * ** Added new "Features: Weighted Random Movement" section.
 * ** Help file updated for new features.
 * * New Features!
 * ** New Notetags added by Arisu:
 * *** <Random Move Weight: x>
 * **** If this tag is used on an event with random-type autonomous movement,
 *      then the event will stick closer to their home location (where they are
 *      located upon spawning on the map). How close they stick to their home
 *      location will depend on the weighted 'x' value.
 * *** <True Random Move>
 * **** If this tag is used on an event with random-type autonomous movement,
 *      then that event will ignore the effects of weighted randomized
 *      movement.
 * ** New Plugin Commands added by Arisu and sponsored by AndyL:
 * *** Event Timer: Change Speed
 * *** Event Timer: Expire Event Assign
 * *** Event Timer: Expire Event Clear
 * *** Event Timer: Frames Gain
 * *** Event Timer: Frames Set
 * *** Event Timer: Pause
 * *** Event Timer: Resume
 * **** The above Plugin Commands allow you to control the game timer better.
 * ** New Plugin Parameters added by Arisu:
 * *** Plugin Parameters > Movement > Event Movement > Random Move Weight
 * **** Use numbers between 0 and 1. Numbers closer to 1 stay closer to their
 *      home position.
 * 
 * Version 1.17: January 29, 2021
 * * Documentation Update!
 * ** Added "Do NOT insert quotes" to "Balloon: name" and "Pose: name".
 * ** Added Examples for extra clarification.
 * * Optimization Update!
 * ** When touch clicking an event on a map with multiple events, pathfinding
 *    will utilize the non-diagonal function for less resource consumption to
 *    prevent FPS frame drops. Fix made by Arisu.
 * 
 * Version 1.16: January 22, 2021
 * * Optimization Update!
 * ** When touch clicking multiple times on an impassable tile, pathfinding
 *    will utilize the non-diagonal function for less resource consumption to
 *    prevent FPS frame drops. Fix made by Arisu.
 * 
 * Version 1.15: January 1, 2021
 * * Bug Fixes!
 * ** Spawned events should now resume their automated self movement after
 *    being interacted with. Fix made by Yanfly.
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Help file updated for updated features.
 * * Feature Updates!
 * ** Collission checks for the Spawn Event Plugin Commands now account for
 *    the spawning event's Hitbox, too. Update made by Yanfly.
 * ** Spawn Event Plugin Commands adds a new parameter "Success Switch ID" to
 *    check if the spawning has been successful or not.
 * * New Features!
 * ** New Plugin Commands added by Yanfly!
 * *** Spawn Event: Spawn At Terrain Tag
 * *** Spawn Event: Despawn Terrain Tag(s)
 * **** These function similar to their region counterparts except they target
 *      terrain tags instead.
 * 
 * Version 1.14: December 18, 2020
 * * Bug Fixes!
 * ** Caching for event label positions now account for page index.
 *    Fix made by Yanfly.
 * * Documentation Update!
 * ** Added documentation for the new features!
 * * New Features!
 * ** New Plugin Commands added by Irina.
 * *** Follower: Set Global Chase
 * *** Follower: Set Target Chase
 * *** Follower: Set Control
 * *** Follower: Reset
 * **** These plugin commands allow you to change whether or not the followers
 *      will chase their intended targets and/or shift control over their
 *      movement route from the "Player" to the target follower.
 * 
 * Version 1.13: December 4, 2020
 * * Bug Fixes!
 * ** Caching for event label positions now account for one-screen maps.
 *    Fix made by Arisu.
 * 
 * Version 1.12: November 29, 2020
 * * Bug Fixes!
 * ** Click Triggers no longer work on erased events. Fix made by Arisu.
 * ** Erased events no longer have icons appear above their heads.
 *    Fix made by Arisu.
 * * Feature Update!
 * ** Initialization of the plugin's effects no only occur if the event's
 *    current page settings have been altered. Change made by Arisu.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.11: November 15, 2020
 * * Bug Fixes!
 * ** Morph plugin command should no longer cause crashes. Fix made by Yanfly.
 * * Documentation Update!
 * ** Added documentation for the updated features!
 * * Feature Updates!
 * ** Updates to these Plugin Commands made by Yanfly:
 * *** Call Event: Remote Activation
 * *** Event Icon: Change
 * *** Event Icon: Delete
 * *** Event Location: Create
 * *** Event Location: Delete
 * *** Global Switch: Get Self Switch A B C D
 * *** Global Switch: Get Self Switch ID
 * *** Global Variable: Get Self Variable ID
 * *** Morph Event: Change
 * *** Morph Event: Remove
 * *** Self Switch: A B C D
 * *** Self Switch: Switch ID
 * *** Self Variable: Variable ID
 * **** All of the above Plugin Commands can now use 0 for their Event ID's in
 *      order to refer to the running event's ID value.
 * 
 * Version 1.10: November 1, 2020
 * * Bug Fixes!
 * ** Spawned Event preserve function now works properly. Fix made by Arisu.
 * 
 * Version 1.09: October 25, 2020
 * * Documentation Update
 * ** Added clarity on the notetags and comment tags on when their effects
 *    are present.
 * * Feature Update!
 * ** Event icons now have an unsmoothing property to them to make them
 *    look better. Update made by Irina.
 * 
 * Version 1.08: October 11, 2020
 * * Compatibility Update
 * ** Added failsafes for better compatibility.
 * 
 * Version 1.07: October 4, 2020
 * * Documentation Update!
 * ** Updated for the new features!
 * * Feature Update!
 * ** Data from deleted events will now be cleared and removed from maps if the
 *    events do not exist to prevent conflict with plugins from the VisuStella
 *    MZ library and other plugins. Feature added by Irina.
 * ** Move Route Custom Commands now support self variable values! If you wish
 *    to use a value from a self variable, insert \SelfVar[x] in place of the x
 *    in any of the below. This will only draw from the current event. If you 
 *    wish to draw data from outside event self variables, we recommend you
 *    use the \V[x] variant after using the Plugin Commands to draw data from
 *    them for the best accuracy.
 * * New Features!
 * ** New Plugin Parameter added by Yanfly!
 * *** Movement > Bitmap > Smoothing
 * **** Do you want to smooth or pixelate the map sprites? Pixelating them is
 *      better for zooming and tilting.
 * 
 * Version 1.06: September 27, 2020
 * * Bug Fixes!
 * ** Events & Movement Core no longer disables the Core Engine's Smart Event
 *    Collision plugin parameter. Fix made by Yanfly.
 * * Documentation Update!
 * ** Move Route Custom Commands updated with the new feature for inserting
 *    variable values.
 * * Feature Update!
 * ** Move Route Custom Commands now support $gameVariable.value(x) values.
 *    You can also just use \V[x] for variable values, too. Added by Irina.
 * 
 * Version 1.05: September 20, 2020
 * * Bug Fixes!
 * ** If player movement is disabled, mouse movement is disabled, too.
 *    Fix made by Arisu.
 * ** The region restriction notetags should be fixed and work again.
 *    Fix made by Arisu.
 * 
 * Version 1.04: September 13, 2020
 * * Feature Update!
 * * Some Move Route Custom Commands are updated to ignore spaces:
 * ** Jump To: x, y
 * ** Move To: x, y
 * ** Step Toward: x, y
 * ** Step Away From: x, y
 * ** Turn To: x, y
 * ** Turn Away From: x, y
 * ** Teleport To: x, y
 * *** These can now be written as x,y. There still needs to be a space between
 *     the : and x for parsing clarity, however.
 * *** Feature updated by Arisu with help from BlueMoon and Zeriab.
 * * New Features!
 * ** New 'Move Route Custom Commands' added by Arisu.
 * *** Fade In: x
 * *** Fade Out: x
 * *** Force Carry: On
 * *** Force Carry: Off
 * *** Force Dash: On
 * *** Force Dash: Off
 * ** New Plugin Commands added by Arisu.
 * *** Player Movement: Control
 * **** Enable or disable player control over the player character's movement.
 * *** Player Movement: Diagonal
 * **** Override settings to for player diagonal movement.
 * 
 * Version 1.03: September 6, 2020
 * * Bug Fixes!
 * ** Sleeping pose is now fixed and working! Fix made by Yanfly.
 * * Documentation Update!
 * ** Extended "Features: Self Switches and Variables" to explain how to use
 *    script calls to grab self switch information.
 * * New Features!
 * ** New Plugin Commands added by Yanfly:
 * *** Global Switch: Get Self Switch A B C D
 * *** Global Switch: Get Self Switch ID
 * *** Global Variable: Get Self Variable ID
 * **** These plugin commands allow you to transfer data stored in a self
 *      switch or Self Variable into a global switch or global variable.
 * 
 * Version 1.02: August 30, 2020
 * * Bug Fixes!
 * ** <Diagonal Movement: Off> notetag now works properly. Fix made by Yanfly.
 * ** Plugin Command "Event Label: Visible" now works properly. Fix made by
 *    Shaz.
 * ** Custom Move Route commands should now be working properly. Fix made by
 *    Shaz.
 * 
 * Version 1.01: August 23, 2020
 * * Bug Fixes!
 * ** Event Cache issues fixed upon loading a saved game. Fix made by Yanfly.
 *
 * Version 1.00: August 20, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_AutoMove
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command AutoMoveEvents
 * @text Auto Movement: Events
 * @desc Allow/stop events from auto movement.
 *
 * @arg Value:str
 * @text Value
 * @type select
 * @option Allow
 * @value Allow
 * @option Stop
 * @value Stop
 * @option Toggle
 * @value Toggle
 * @desc Allow events to move automatically?
 * @default Allow
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_CallEvent
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command CallEvent
 * @text Call Event: Remote Read
 * @desc Runs the page of a different event remotely. This will run
 * the page of the target event on the CURRENT event.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc Target event's map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the event to remotely run. Use 0 for current event. You may use JavaScript code.
 * @default 0
 *
 * @arg PageId:eval
 * @text Page ID
 * @desc The page of the remote event to run.
 * You may use JavaScript code.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_DashEnable
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command DashEnableToggle
 * @text Dash Enable: Toggle
 * @desc Enable/Disable Dashing on maps.
 *
 * @arg Value:str
 * @text Value
 * @type select
 * @option Enable
 * @value Enable
 * @option Disable
 * @value Disable
 * @option Toggle
 * @value Toggle
 * @desc What do you wish to change dashing to?
 * @default Enable
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_EventIcon
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventIconChange
 * @text Event Icon: Change (Temporary)
 * @desc Change the icon that appears on an event.
 * This change is temporary and resets upon new events.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent MapId:eval
 * @desc The ID of the target event.  Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg IconIndex:eval
 * @text Icon Index
 * @desc Icon index used for the icon.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg IconBufferX:eval
 * @text Buffer X
 * @parent IconIndex:eval
 * @desc How much to shift the X position by?
 * You may use JavaScript code.
 * @default 0
 *
 * @arg IconBufferY:eval
 * @text Buffer Y
 * @parent IconIndex:eval
 * @desc How much to shift the Y position by?
 * You may use JavaScript code.
 * @default 12
 *
 * @arg IconBlendMode:num
 * @text Blend Mode
 * @parent IconIndex:eval
 * @type select
 * @option 0 - Normal
 * @value 0
 * @option 1 - Additive
 * @value 1
 * @option 2 - Multiply
 * @value 2
 * @option 3 - Screen
 * @value 3
 * @desc What kind of blend mode do you wish to apply to the icon sprite?
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventIconChangeForced
 * @text Event Icon: Change (Forced)
 * @desc Change the icon that appears on an event.
 * This change is forced and needs to be restored.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent MapId:eval
 * @desc The ID of the target event.  Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg IconIndex:eval
 * @text Icon Index
 * @desc Icon index used for the icon.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg IconBufferX:eval
 * @text Buffer X
 * @parent IconIndex:eval
 * @desc How much to shift the X position by?
 * You may use JavaScript code.
 * @default 0
 *
 * @arg IconBufferY:eval
 * @text Buffer Y
 * @parent IconIndex:eval
 * @desc How much to shift the Y position by?
 * You may use JavaScript code.
 * @default 12
 *
 * @arg IconBlendMode:num
 * @text Blend Mode
 * @parent IconIndex:eval
 * @type select
 * @option 0 - Normal
 * @value 0
 * @option 1 - Additive
 * @value 1
 * @option 2 - Multiply
 * @value 2
 * @option 3 - Screen
 * @value 3
 * @desc What kind of blend mode do you wish to apply to the icon sprite?
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventIconDelete
 * @text Event Icon: Delete
 * @desc Delete the icon that appears on an event.
 * This will remain deleted and invisible for events.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent MapId:eval
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventIconRestore
 * @text Event Icon: Restore
 * @desc Restores a deleted or forced icon that appears on an event.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent MapId:eval
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_EventLabel
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventLabelRefresh
 * @text Event Label: Refresh
 * @desc Refresh all Event Labels on screen.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventLabelVisible
 * @text Event Label: Visible
 * @desc Change the visibility of Event Labels.
 *
 * @arg Visibility:str
 * @text Visibility
 * @type select
 * @option Visible
 * @value Visible
 * @option Hidden
 * @value Hidden
 * @option Toggle
 * @value Toggle
 * @desc What do you wish to change visibility to?
 * @default Visible
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_EventLocation
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventLocationSave
 * @text Event Location: Save
 * @desc Memorize an event's map location so it reappears there
 * the next time the map is loaded.
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the target event.
 * You may use JavaScript code.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventLocationCreate
 * @text Event Location: Create
 * @desc Creates a custom spawn location for a specific map's event
 * so it appears there the next time the map is loaded.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent MapId:eval
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg PosX:eval
 * @text X Coordinate
 * @parent MapId:eval
 * @desc The X coordinate of the event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg PosY:eval
 * @text Y Coordinate
 * @parent MapId:eval
 * @desc The Y coordinate of the event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg Direction:num
 * @text Direction
 * @parent MapId:eval
 * @type select
 * @option 1 - Lower Left
 * @value 1
 * @option 2 - Down
 * @value 2
 * @option 3 - Lower Right
 * @value 3
 * @option 4 - Left
 * @value 4
 * @option 6 - Right
 * @value 6
 * @option 7 - Upper Left
 * @value 7
 * @option 8 - Up
 * @value 8
 * @option 9 - Upper Right
 * @value 9
 * @desc The direction the event will be facing.
 * @default 2
 *
 * @arg Optional
 *
 * @arg PageId:eval
 * @text Page ID
 * @parent Optional
 * @desc The page of the event to set the move route to.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg MoveRouteIndex:eval
 * @text Move Route Index
 * @parent Optional
 * @desc The point in the move route for this event to be at
 * if the page ID matches the rest of the page conditions.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventLocationDelete
 * @text Event Location: Delete
 * @desc Deletes an event's saved map location.
 * The event will reappear at its default location.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_EventPopup
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MsgPopupPlayer
 * @text Event Popup: Player
 * @desc Makes a centered event popup on the player sprite.
 * Requires VisuMZ_1_MessageCore! Cannot be used in battle!
 *
 * @arg MessageText:json
 * @text Message Text
 * @type note
 * @desc Insert the text to be displayed.
 * Text codes can be used.
 * @default "+\\LastGainObjQuantity\\LastGainObj"
 * 
 * @arg MsgDuration:eval
 * @text Message Duration
 * @parent MessageText:json
 * @desc What is the frame duration of the event popup?
 * 60 frames = 1 second. You may use code.
 * @default 60
 *
 * @arg PopupExtra:struct
 * @text Popup Settings
 * @type struct<PopupExtra>
 * @desc These settings let you adjust how the popup animates.
 * @default {"Fade":"","fadeInDuration:eval":"8","fadeOutDuration:eval":"8","Offset":"","startOffsetX:eval":"+0","startOffsetY:eval":"-48","endOffsetX:eval":"+0","endOffsetY:eval":"-96","Scale":"","startScaleX:eval":"0.8","startScaleY:eval":"0.8","endScaleX:eval":"0.8","endScaleY:eval":"0.8","Angle":"","startAngle:eval":"+0","endAngle:eval":"+0","Misc":"","Arc:eval":"+0"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MsgPopupFollower
 * @text Event Popup: Follower
 * @desc Makes a centered event popup on target follower sprite.
 * Requires VisuMZ_1_MessageCore! Cannot be used in battle!
 *
 * @arg FollowerIndex:eval
 * @text Follower Index
 * @desc Which follower index to play popup?
 * Index starts at 0. You may use JavaScript code.
 * @default 0
 *
 * @arg MessageText:json
 * @text Message Text
 * @type note
 * @desc Insert the text to be displayed.
 * Text codes can be used.
 * @default "\\I[23]"
 * 
 * @arg MsgDuration:eval
 * @text Message Duration
 * @parent MessageText:json
 * @desc What is the frame duration of the event popup?
 * 60 frames = 1 second. You may use code.
 * @default 60
 *
 * @arg PopupExtra:struct
 * @text Popup Settings
 * @type struct<PopupExtra>
 * @desc These settings let you adjust how the popup animates.
 * @default {"Fade":"","fadeInDuration:eval":"8","fadeOutDuration:eval":"8","Offset":"","startOffsetX:eval":"+0","startOffsetY:eval":"-48","endOffsetX:eval":"+0","endOffsetY:eval":"-96","Scale":"","startScaleX:eval":"0.8","startScaleY:eval":"0.8","endScaleX:eval":"0.8","endScaleY:eval":"0.8","Angle":"","startAngle:eval":"+0","endAngle:eval":"+0","Misc":"","Arc:eval":"+0"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MsgPopupEvent
 * @text Event Popup: Event
 * @desc Makes a centered event popup on target event sprite.
 * Requires VisuMZ_1_MessageCore! Cannot be used in battle!
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the event to play popup on.
 * Use 0 for current event. You may use JavaScript code.
 * @default 0
 *
 * @arg MessageText:json
 * @text Message Text
 * @type note
 * @desc Insert the text to be displayed.
 * Text codes can be used.
 * @default "Line1\nLine2"
 * 
 * @arg MsgDuration:eval
 * @text Message Duration
 * @parent MessageText:json
 * @desc What is the frame duration of the event popup?
 * 60 frames = 1 second. You may use code.
 * @default 60
 *
 * @arg PopupExtra:struct
 * @text Popup Settings
 * @type struct<PopupExtra>
 * @desc These settings let you adjust how the popup animates.
 * @default {"Fade":"","fadeInDuration:eval":"8","fadeOutDuration:eval":"8","Offset":"","startOffsetX:eval":"+0","startOffsetY:eval":"-48","endOffsetX:eval":"+0","endOffsetY:eval":"-96","Scale":"","startScaleX:eval":"0.8","startScaleY:eval":"0.8","endScaleX:eval":"0.8","endScaleY:eval":"0.8","Angle":"","startAngle:eval":"+0","endAngle:eval":"+0","Misc":"","Arc:eval":"+0"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MsgPopupTargetTile
 * @text Event Popup: Target Tile
 * @desc Makes a centered event popup on target tile.
 * Requires VisuMZ_1_MessageCore! Cannot be used in battle!
 *
 * @arg TileX:eval
 * @text Map Tile X
 * @desc The x coordinate of the map tile.
 * You may use JavaScript code.
 * @default $gameMap.width() / 2
 *
 * @arg TileY:eval
 * @text Map Tile Y
 * @desc The y coordinate of the map tile.
 * You may use JavaScript code.
 * @default $gameMap.height() / 2
 *
 * @arg MessageText:json
 * @text Message Text
 * @type note
 * @desc Insert the text to be displayed.
 * Text codes can be used.
 * @default "\\I[87]"
 * 
 * @arg MsgDuration:eval
 * @text Message Duration
 * @parent MessageText:json
 * @desc What is the frame duration of the event popup?
 * 60 frames = 1 second. You may use code.
 * @default 60
 *
 * @arg PopupExtra:struct
 * @text Popup Settings
 * @type struct<PopupExtra>
 * @desc These settings let you adjust how the popup animates.
 * @default {"Fade":"","fadeInDuration:eval":"8","fadeOutDuration:eval":"8","Offset":"","startOffsetX:eval":"+0","startOffsetY:eval":"-24","endOffsetX:eval":"+0","endOffsetY:eval":"-24","Scale":"","startScaleX:eval":"0.8","startScaleY:eval":"0.8","endScaleX:eval":"0.8","endScaleY:eval":"0.8","Angle":"","startAngle:eval":"+0","endAngle:eval":"+0","Misc":"","Arc:eval":"+0"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_EventTimer
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventTimerExpireEvent
 * @text Event Timer: Expire Event Assign
 * @desc Sets a Common Event to run upon expiration.
 * Bypasses the default code if one is set.
 *
 * @arg CommonEventID:num
 * @text Common Event ID
 * @type common_event
 * @desc Select the Common Event to run upon the timer's expiration.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventTimerSpeed
 * @text Event Timer: Change Speed
 * @desc Changes the timer frame decrease (or increase) speed.
 *
 * @arg Speed:eval
 * @text Speed
 * @desc How many 1/60ths of a second does each frame increase or
 * decrease by? Negative decreases. Positive increases.
 * @default -1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventTimerExpireClear
 * @text Event Timer: Expire Event Clear
 * @desc Clears any set to expire Common Event and instead,
 * run the default Game_Timer expiration code.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventTimerFramesGain
 * @text Event Timer: Frames Gain
 * @desc Chooses how many frames, seconds, minutes, or hours
 * are gained or lost for the event timer.
 *
 * @arg Frames:eval
 * @text Frames
 * @desc How many 1/60ths of a second are gained/lost?
 * Positive for gain. Negative for lost. JavaScript allowed.
 * @default +0
 *
 * @arg Seconds:eval
 * @text Seconds
 * @desc How many seconds are gained/lost?
 * Positive for gain. Negative for lost. JavaScript allowed.
 * @default +0
 *
 * @arg Minutes:eval
 * @text Minutes
 * @desc How many minutes are gained/lost?
 * Positive for gain. Negative for lost. JavaScript allowed.
 * @default +0
 *
 * @arg Hours:eval
 * @text Hours
 * @desc How many hours are gained/lost?
 * Positive for gain. Negative for lost. JavaScript allowed.
 * @default +0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventTimerFramesSet
 * @text Event Timer: Frames Set
 * @desc Chooses how many frames, seconds, minutes, or hours
 * are set for the event timer.
 *
 * @arg Frames:eval
 * @text Frames
 * @desc Set frame count to this value.
 * Each frame is 1/60th of a second. JavaScript allowed.
 * @default 0
 *
 * @arg Seconds:eval
 * @text Seconds
 * @desc Set seconds to this value.
 * JavaScript allowed.
 * @default 0
 *
 * @arg Minutes:eval
 * @text Minutes
 * @desc Set minutes to this value.
 * Each minute is 60 seconds. JavaScript allowed.
 * @default 0
 *
 * @arg Hours:eval
 * @text Hours
 * @desc Set hours to this value.
 * Each hour is 60 minutes. JavaScript allowed.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventTimerPause
 * @text Event Timer: Pause
 * @desc Pauses the current event timer, but does not stop it.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventTimerResume
 * @text Event Timer: Resume
 * @desc Resumes the current event timer from the paused state.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Follower
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FollowerSetGlobalChase
 * @text Follower: Set Global Chase
 * @desc Disables all followers from chasing the player
 * or reenables it.
 *
 * @arg Chase:eval
 * @text Chase
 * @type boolean
 * @on Chase
 * @off Don't Chase
 * @desc Sets all followers to chase the player or not.
 * @default false
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FollowerSetTargetChase
 * @text Follower: Set Target Chase
 * @desc Disables target follower from chasing the player
 * or reenables it.
 *
 * @arg FollowerID:eval
 * @text Follower ID
 * @desc Select which follower ID to disable/reenable chasing for.
 * @default 1
 *
 * @arg Chase:eval
 * @text Chase
 * @type boolean
 * @on Chase
 * @off Don't Chase
 * @desc Sets target follower to chase its target or not.
 * @default false
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FollowerSetControl
 * @text Follower: Set Control
 * @desc Sets the event commands to target a follower when "Player"
 * is selected as the target.
 *
 * @arg FollowerID:eval
 * @text Follower ID
 * @desc Select which follower ID to control.
 * 0 is the player.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FollowerReset
 * @text Follower: Reset
 * @desc Resets all follower controls. Event Commands that target
 * the "Player" return to normal and followers chase again.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_GlobalSwitch
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SwitchGetSelfSwitchABCD
 * @text Global Switch: Get Self Switch A B C D
 * @desc Gets the current ON/OFF value from a Self Switch and
 * stores it onto a Global Switch.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the source map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the source event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg Letter:str
 * @text Letter
 * @type select
 * @option A
 * @value A
 * @option B
 * @value B
 * @option C
 * @value C
 * @option D
 * @value D
 * @desc Letter of the target event's Self Switch to obtain data from.
 * @default A
 *
 * @arg Break
 * @text -
 *
 * @arg TargetSwitchId:num
 * @text Target Switch ID
 * @type switch
 * @desc The ID of the target switch.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SwitchGetSelfSwitchID
 * @text Global Switch: Get Self Switch ID
 * @desc Gets the current ON/OFF value from a Self Switch and
 * stores it onto a Global Switch.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the source map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the source event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg SwitchId:num
 * @text Switch ID
 * @type switch
 * @desc The ID of the source switch.
 * @default 1
 *
 * @arg Break
 * @text -
 *
 * @arg TargetSwitchId:num
 * @text Target Switch ID
 * @type switch
 * @desc The ID of the target switch.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_GlobalVar
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command VariableGetSelfVariableID
 * @text Global Variable: Get Self Variable ID
 * @desc Gets the current stored value from a Self Variable and
 * stores it onto a Global Variable.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the source map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the source event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg VariableId:num
 * @text Variable ID
 * @type variable
 * @desc The ID of the source variable.
 * @default 1
 *
 * @arg Break
 * @text -
 *
 * @arg TargetVariableId:num
 * @text Target Variable ID
 * @type variable
 * @desc The ID of the target variable.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_MorphEvent
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MorphEventTo
 * @text Morph Event: Change
 * @desc Runs the page of a different event remotely.
 *
 * @arg Step1
 * @text Step 1: To Be Changed
 *
 * @arg Step1MapId:eval
 * @text Map ID
 * @parent Step1
 * @desc Target event's map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg Step1EventId:eval
 * @text Event ID
 * @parent Step1
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg Step2
 * @text Step 2: Change Into
 *
 * @arg TemplateName:str
 * @text Template Name
 * @parent Step2
 * @desc Name of the target event template to morph into.
 * Ignored if this is called "Untitled".
 * @default Untitled
 *
 * @arg Step2MapId:eval
 * @text Map ID
 * @parent Step2
 * @desc Target event's map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg Step2EventId:eval
 * @text Event ID
 * @parent Step2
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg Step2Preserve:eval
 * @text Preserve Morph
 * @parent Step2
 * @type boolean
 * @on Preserve
 * @off Expires
 * @desc Is the morph effect preserved?
 * Or does it expire upon leaving the map?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MorphEventRemove
 * @text Morph Event: Remove
 * @desc Remove the morph status of an event.
 *
 * @arg MapId:eval
 * @text Map ID
 * @parent Step1
 * @desc Target event's map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent Step1
 * @desc The ID of the event to remove morph from. Use 0 for current event. You may use JavaScript code.
 * @default 0
 *
 * @arg RemovePreserve:eval
 * @text Remove Preservation
 * @parent Step2
 * @type boolean
 * @on Remove
 * @off Contain
 * @desc Also remove the preservation effect?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_PlayerIcon
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PlayerIconChange
 * @text Player Icon: Change
 * @desc Change the icon that appears on on the player.
 *
 * @arg IconIndex:eval
 * @text Icon Index
 * @desc Icon index used for the icon.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg IconBufferX:eval
 * @text Buffer X
 * @parent IconIndex:eval
 * @desc How much to shift the X position by?
 * You may use JavaScript code.
 * @default 0
 *
 * @arg IconBufferY:eval
 * @text Buffer Y
 * @parent IconIndex:eval
 * @desc How much to shift the Y position by?
 * You may use JavaScript code.
 * @default 12
 *
 * @arg IconBlendMode:num
 * @text Blend Mode
 * @parent IconIndex:eval
 * @type select
 * @option 0 - Normal
 * @value 0
 * @option 1 - Additive
 * @value 1
 * @option 2 - Multiply
 * @value 2
 * @option 3 - Screen
 * @value 3
 * @desc What kind of blend mode do you wish to apply to the icon sprite?
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PlayerIconDelete
 * @text Player Icon: Delete
 * @desc Delete the icon that appears on the player.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_PlayerMovement
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PlayerMovementChange
 * @text Player Movement: Control
 * @desc Enable or disable player control over the player character's movement.
 *
 * @arg Enable:eval
 * @text Enable?
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Let the player control where the player character moves?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PlayerMovementDiagonal
 * @text Player Movement: Diagonal
 * @desc Override settings to for player diagonal movement.
 *
 * @arg Setting:str
 * @text Setting
 * @type select
 * @option Default: Whatever the Map Uses
 * @value default
 * @option Forcefully Disable Diagonal Movement
 * @value disable
 * @option Forcefully Enable Diagonal Movement
 * @value enable
 * @desc How do you want to change diagonal movement?
 * @default default
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_SelfData
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SelfDataResetAll
 * @text Self Data: Reset All
 * @desc Reset the Self Switch and Self Variable data of all events
 * within the specified map.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_SelfSwitch
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SelfSwitchABCD
 * @text Self Switch: A B C D
 * @desc Change the Self Switch of a different event.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg Letter:str
 * @text Letter
 * @type select
 * @option A
 * @value A
 * @option B
 * @value B
 * @option C
 * @value C
 * @option D
 * @value D
 * @desc Letter of the target event's Self Switch to change.
 * @default A
 *
 * @arg Break
 * @text -
 *
 * @arg Value:str
 * @text Value
 * @type select
 * @option ON
 * @value ON
 * @option OFF
 * @value OFF
 * @option Toggle
 * @value Toggle
 * @desc What value do you want to set the Self Switch to?
 * @default ON
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SelfSwitchID
 * @text Self Switch: Switch ID
 * @desc Change the Self Switch of a different event.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg SwitchId:num
 * @text Switch ID
 * @type switch
 * @desc The ID of the target switch.
 * @default 1
 *
 * @arg Break
 * @text -
 *
 * @arg Value:str
 * @text Value
 * @type select
 * @option ON
 * @value ON
 * @option OFF
 * @value OFF
 * @option Toggle
 * @value Toggle
 * @desc What value do you want to set the Self Switch to?
 * @default ON
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_SelfVar
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SelfVariableID
 * @text Self Variable: Variable ID
 * @desc Change the Self Variable of a different event.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg VariableId:num
 * @text Variable ID
 * @type variable
 * @desc The ID of the target variable.
 * @default 1
 *
 * @arg Break
 * @text -
 *
 * @arg Operation:str
 * @text Operation
 * @type select
 * @option = Set
 * @value =
 * @option + Add
 * @value +
 * @option - Subtract
 * @value -
 * @option * Multiply
 * @value *
 * @option / Divide
 * @value /
 * @option % Modulus
 * @value %
 * @desc Set the operation used.
 * @default =
 *
 * @arg Break2
 * @text -
 *
 * @arg Value:eval
 * @text Value
 * @desc Insert the value to modify the Self Variable by.
 * You may use JavaScript code.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Shadow
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ShadowHidePlayer
 * @text Shadow Hide: Player
 * @desc Hides the visibility of the player sprite shadow.
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command ShadowHideFollowers
 * @text Shadow Hide: Followers
 * @desc Hides the visibility of follower sprite shadows.
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command ShadowHideAllEvents
 * @text Shadow Hide: All Events
 * @desc Hides the visibility of all event sprite shadows.
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command ShadowShowPlayer
 * @text Shadow Show: Player
 * @desc Returns the visibility of the player sprite shadow.
 * Does NOT override Plugin Parameter "Shadows > Show" if off.
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command ShadowShowFollowers
 * @text Shadow Show: Followers
 * @desc Returns the visibility of follower sprite shadows.
 * Does NOT override Plugin Parameter "Shadows > Show" if off.
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command ShadowShowAllEvents
 * @text Shadow Show: All Events
 * @desc Returns the visibility of all event sprite shadows.
 * Does NOT override Plugin Parameter or <Hide Shadow> notetag.
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_SpawnEvent
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventAtXY
 * @text Spawn Event: Spawn At X, Y
 * @desc Spawns desired event at X, Y location on the current map.
 *
 * @arg Step1
 * @text Step 1: Spawned Event
 *
 * @arg TemplateName:str
 * @text Template Name
 * @parent Step1
 * @desc Name of the target event template to spawn as.
 * Ignored if this is called "Untitled".
 * @default Untitled
 *
 * @arg MapId:eval
 * @text Map ID
 * @parent Step1
 * @desc Target event's map to be used as reference.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent Step1
 * @desc The ID of the target event to be used as reference.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg Step2
 * @text Step 2: Location
 *
 * @arg PosX:eval
 * @text X Coordinate
 * @parent Step2
 * @type combo
 * @option $gamePlayer.frontX()
 * @option $gamePlayer.backX()
 * @option Math.randomInt($gameMap.width())
 * @option 0
 * @desc Target Location to spawn at.
 * You may use JavaScript code.
 * @default $gamePlayer.frontX()
 *
 * @arg PosY:eval
 * @text Y Coordinate
 * @parent Step2
 * @type combo
 * @option $gamePlayer.frontY()
 * @option $gamePlayer.backY()
 * @option Math.randomInt($gameMap.height())
 * @option 0
 * @desc Target Location to spawn at.
 * You may use JavaScript code.
 * @default $gamePlayer.frontY()
 *
 * @arg Collision:eval
 * @text Check Event Collision
 * @parent Step2
 * @type boolean
 * @on Check
 * @off Ignore
 * @desc Check collision with any other events and player?
 * @default true
 *
 * @arg Passability:eval
 * @text Check Passability
 * @parent Step2
 * @type boolean
 * @on Check
 * @off Ignore
 * @desc Check passability of the target location.
 * @default true
 *
 * @arg Preserve:eval
 * @text Preserve Spawn
 * @parent Step2
 * @type boolean
 * @on Preserve
 * @off Expires
 * @desc Is the spawned event preserved?
 * Or does it expire upon leaving the map?
 * @default true
 *
 * @arg Step3
 * @text Step 3: Success Check
 *
 * @arg SuccessSwitchId:num
 * @text Success Switch ID
 * @parent Step3
 * @type switch
 * @desc Target switch ID to record spawning success.
 * Ignore if ID is 0. OFF means failed. ON means success.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventAtRegion
 * @text Spawn Event: Spawn At Region
 * @desc Spawns desired event at a random region-marked location on the current map.
 *
 * @arg Step1
 * @text Step 1: Spawned Event
 *
 * @arg TemplateName:str
 * @text Template Name
 * @parent Step1
 * @desc Name of the target event template to spawn as.
 * Ignored if this is called "Untitled".
 * @default Untitled
 *
 * @arg MapId:eval
 * @text Map ID
 * @parent Step1
 * @desc Target event's map.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent Step1
 * @desc The ID of the target event.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg Step2
 * @text Step 2: Location
 *
 * @arg Region:arraynum
 * @text Region ID(s)
 * @parent Step2
 * @type number[]
 * @min 0
 * @max 255
 * @desc Pick region(s) to spawn this event at.
 * @default ["1"]
 *
 * @arg Collision:eval
 * @text Check Event Collision
 * @parent Step2
 * @type boolean
 * @on Check
 * @off Ignore
 * @desc Check collision with any other events and player?
 * @default true
 *
 * @arg Passability:eval
 * @text Check Passability
 * @parent Step2
 * @type boolean
 * @on Check
 * @off Ignore
 * @desc Check passability of the target location.
 * @default true
 *
 * @arg Preserve:eval
 * @text Preserve Spawn
 * @parent Step2
 * @type boolean
 * @on Preserve
 * @off Expires
 * @desc Is the spawned event preserved?
 * Or does it expire upon leaving the map?
 * @default true
 *
 * @arg Step3
 * @text Step 3: Success Check
 *
 * @arg SuccessSwitchId:num
 * @text Success Switch ID
 * @parent Step3
 * @type switch
 * @desc Target switch ID to record spawning success.
 * Ignore if ID is 0. OFF means failed. ON means success.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventAtTerrainTag
 * @text Spawn Event: Spawn At Terrain Tag
 * @desc Spawns desired event at a random terrain tag-marked location on the current map.
 *
 * @arg Step1
 * @text Step 1: Spawned Event
 *
 * @arg TemplateName:str
 * @text Template Name
 * @parent Step1
 * @desc Name of the target event template to spawn as.
 * Ignored if this is called "Untitled".
 * @default Untitled
 *
 * @arg MapId:eval
 * @text Map ID
 * @parent Step1
 * @desc Target event's map.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent Step1
 * @desc The ID of the target event.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg Step2
 * @text Step 2: Location
 *
 * @arg TerrainTags:arraynum
 * @text Terrain Tag(s)
 * @parent Step2
 * @type number[]
 * @min 0
 * @max 7
 * @desc Pick terrain tag(s) to spawn this event at.
 * Insert numbers between 0 and 7.
 * @default ["1"]
 *
 * @arg Collision:eval
 * @text Check Event Collision
 * @parent Step2
 * @type boolean
 * @on Check
 * @off Ignore
 * @desc Check collision with any other events and player?
 * @default true
 *
 * @arg Passability:eval
 * @text Check Passability
 * @parent Step2
 * @type boolean
 * @on Check
 * @off Ignore
 * @desc Check passability of the target location.
 * @default true
 *
 * @arg Preserve:eval
 * @text Preserve Spawn
 * @parent Step2
 * @type boolean
 * @on Preserve
 * @off Expires
 * @desc Is the spawned event preserved?
 * Or does it expire upon leaving the map?
 * @default true
 *
 * @arg Step3
 * @text Step 3: Success Check
 *
 * @arg SuccessSwitchId:num
 * @text Success Switch ID
 * @parent Step3
 * @type switch
 * @desc Target switch ID to record spawning success.
 * Ignore if ID is 0. OFF means failed. ON means success.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventDespawnEventID
 * @text Spawn Event: Despawn Event ID
 * @desc Despawns the selected Event ID on the current map.
 *
 * @arg EventID:eval
 * @text Event ID
 * @type combo
 * @option $gameMap.firstSpawnedEventID()
 * @option $gameMap.lastSpawnedEventID()
 * @option 1001
 * @desc The ID of the target event.
 * You may use JavaScript code.
 * @default $gameMap.lastSpawnedEventID()
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventDespawnAtXY
 * @text Spawn Event: Despawn At X, Y
 * @desc Despawns any spawned event(s) at X, Y location on the current map.
 *
 * @arg PosX:eval
 * @text X Coordinate
 * @parent Step2
 * @type combo
 * @option $gamePlayer.frontX()
 * @option $gamePlayer.backX()
 * @option Math.randomInt($gameMap.width())
 * @option 0
 * @desc Target Location to despawn at.
 * You may use JavaScript code.
 * @default $gamePlayer.frontX()
 *
 * @arg PosY:eval
 * @text Y Coordinate
 * @parent Step2
 * @type combo
 * @option $gamePlayer.frontY()
 * @option $gamePlayer.backY()
 * @option Math.randomInt($gameMap.height())
 * @option 0
 * @desc Target Location to despawn at.
 * You may use JavaScript code.
 * @default $gamePlayer.frontY()
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventDespawnRegions
 * @text Spawn Event: Despawn Region(s)
 * @desc Despawns the selected Region(s) on the current map.
 *
 * @arg Region:arraynum
 * @text Region ID(s)
 * @parent Step2
 * @type number[]
 * @min 0
 * @max 255
 * @desc Pick region(s) and despawn everything inside it.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventDespawnTerrainTags
 * @text Spawn Event: Despawn Terrain Tag(s)
 * @desc Despawns the selected Terrain Tags(s) on the current map.
 *
 * @arg TerrainTags:arraynum
 * @text Terrain Tag(s)
 * @parent Step2
 * @type number[]
 * @min 0
 * @max 7
 * @desc Pick terrain tag(s) and despawn everything inside it.
 * Insert numbers between 0 and 7.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventDespawnEverything
 * @text Spawn Event: Despawn Everything
 * @desc Despawns all spawned events on the current map.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_End
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @ ==========================================================================
 * @ Plugin Parameters
 * @ ==========================================================================
 *
 * @param BreakHead
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param EventsMoveCore
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Label:struct
 * @text Event Label Settings
 * @type struct<Label>
 * @desc Choose settings regarding the Event Labels.
 * @default {"FontSize:num":"22","IconSize:num":"26","LineHeight:num":"30","OffsetX:num":"0","OffsetY:num":"12","OpacitySpeed:num":"16","VisibleRange:num":"30"}
 *
 * @param Icon:struct
 * @text Event Icon Settings
 * @type struct<Icon>
 * @desc Choose settings regarding the Event Icons.
 * @default {"BufferX:num":"0","BufferY:num":"12","BlendMode:num":"0"}
 *
 * @param Template:struct
 * @text Event Template Settings
 * @type struct<Template>
 * @desc Choose settings regarding Event Templates.
 * @default {"Settings":"","PreloadMaps:arraynum":"[\"1\"]","Prefabs":"","List:arraystruct":"[]","JavaScript":"","PreCopyJS:func":"\"// Declare Constants\\nconst mapId = arguments[1];\\nconst eventId = arguments[2];\\nconst target = arguments[3];\\nconst player = $gamePlayer;\\n\\n// Perform Actions\\n\"","PostCopyJS:func":"\"// Declare Constants\\nconst mapId = arguments[1];\\nconst eventId = arguments[2];\\nconst target = arguments[3];\\nconst player = $gamePlayer;\\n\\n// Perform Actions\\n\"","PreMorphJS:func":"\"// Declare Constants\\nconst mapId = arguments[1];\\nconst eventId = arguments[2];\\nconst target = arguments[3];\\nconst player = $gamePlayer;\\n\\n// Perform Actions\\n\"","PostMorphJS:func":"\"// Declare Constants\\nconst mapId = arguments[1];\\nconst eventId = arguments[2];\\nconst target = arguments[3];\\nconst player = $gamePlayer;\\n\\n// Perform Actions\\n\"","PreSpawnJS:func":"\"// Declare Constants\\nconst mapId = arguments[1];\\nconst eventId = arguments[2];\\nconst target = arguments[3];\\nconst player = $gamePlayer;\\n\\n// Perform Actions\\n\"","PostSpawnJS:func":"\"// Declare Constants\\nconst mapId = arguments[1];\\nconst eventId = arguments[2];\\nconst target = arguments[3];\\nconst player = $gamePlayer;\\n\\n// Perform Actions\\n\""}
 *
 * @param EventBreak
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Movement:struct
 * @text Movement Settings
 * @type struct<Movement>
 * @desc Change the rules regarding movement in the game.
 * @default {"Dir8":"","EnableDir8:eval":"true","StrictCollision:eval":"true","FavorHorz:eval":"true","SlowerSpeed:eval":"false","DiagonalSpeedMultiplier:num":"0.85","AutoMove":"","StopAutoMoveEvents:eval":"true","StopAutoMoveMessages:eval":"true","Bitmap":"","BitmapSmoothing:eval":"false","Dash":"","DashModifier:num":"+1.0","EnableDashTilt:eval":"true","TiltLeft:num":"-0.15","TiltRight:num":"0.15","TiltVert:num":"0.05","EventMove":"","RandomMoveWeight:num":"0.10","Shadows":"","ShowShadows:eval":"true","DefaultShadow:str":"Shadow1","TurnInPlace":"","EnableTurnInPlace:eval":"false","TurnInPlaceDelay:num":"10","Vehicle":"","BoatSpeed:num":"4.0","ShipSpeed:num":"5.0","AirshipSpeed:num":"6.0"}
 *
 * @param VS8:struct
 * @text VisuStella 8-Dir Settings
 * @type struct<VS8>
 * @desc Choose settings regarding VisuStella 8-Directional Sprites.
 * @default {"Balloons":"","AutoBalloon:eval":"true","BalloonOffsetX:num":"0","BalloonOffsetY:num":"12","Icons":"","AutoBuffer:eval":"true","CarryPose:eval":"true"}
 *
 * @param MovementBreak
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Region:struct
 * @text Region Rulings
 * @type struct<Region>
 * @desc Choose settings regarding regions.
 * @default {"Allow":"","AllAllow:arraynum":"[]","WalkAllow:arraynum":"[]","PlayerAllow:arraynum":"[]","EventAllow:arraynum":"[]","VehicleAllow:arraynum":"[]","BoatAllow:arraynum":"[]","ShipAllow:arraynum":"[]","AirshipAllow:arraynum":"[]","Forbid":"","AllForbid:arraynum":"[]","WalkForbid:arraynum":"[]","PlayerForbid:arraynum":"[]","EventForbid:arraynum":"[]","VehicleForbid:arraynum":"[]","BoatForbid:arraynum":"[]","ShipForbid:arraynum":"[]","AirshipForbid:arraynum":"[]","Dock":"","VehicleDock:arraynum":"[]","BoatDock:arraynum":"[]","BoatDockRegionOnly:eval":"false","ShipDock:arraynum":"[]","ShipDockRegionOnly:eval":"false","AirshipDock:arraynum":"[]","AirshipDockRegionOnly:eval":"false"}
 *
 * @param RegionOk:struct
 * @text Common Event on OK Button
 * @parent Region:struct
 * @type struct<RegionCommonEvent>
 * @desc Set Common Events that activate upon pressing the
 * OK button while standing on top of designated regions.
 * @default {"Region1:num":"0","Region2:num":"0","Region3:num":"0","Region4:num":"0","Region5:num":"0","Region6:num":"0","Region7:num":"0","Region8:num":"0","Region9:num":"0","Region10:num":"0","Region11:num":"0","Region12:num":"0","Region13:num":"0","Region14:num":"0","Region15:num":"0","Region16:num":"0","Region17:num":"0","Region18:num":"0","Region19:num":"0","Region20:num":"0","Region21:num":"0","Region22:num":"0","Region23:num":"0","Region24:num":"0","Region25:num":"0","Region26:num":"0","Region27:num":"0","Region28:num":"0","Region29:num":"0","Region30:num":"0","Region31:num":"0","Region32:num":"0","Region33:num":"0","Region34:num":"0","Region35:num":"0","Region36:num":"0","Region37:num":"0","Region38:num":"0","Region39:num":"0","Region40:num":"0","Region41:num":"0","Region42:num":"0","Region43:num":"0","Region44:num":"0","Region45:num":"0","Region46:num":"0","Region47:num":"0","Region48:num":"0","Region49:num":"0","Region50:num":"0","Region51:num":"0","Region52:num":"0","Region53:num":"0","Region54:num":"0","Region55:num":"0","Region56:num":"0","Region57:num":"0","Region58:num":"0","Region59:num":"0","Region60:num":"0","Region61:num":"0","Region62:num":"0","Region63:num":"0","Region64:num":"0","Region65:num":"0","Region66:num":"0","Region67:num":"0","Region68:num":"0","Region69:num":"0","Region70:num":"0","Region71:num":"0","Region72:num":"0","Region73:num":"0","Region74:num":"0","Region75:num":"0","Region76:num":"0","Region77:num":"0","Region78:num":"0","Region79:num":"0","Region80:num":"0","Region81:num":"0","Region82:num":"0","Region83:num":"0","Region84:num":"0","Region85:num":"0","Region86:num":"0","Region87:num":"0","Region88:num":"0","Region89:num":"0","Region90:num":"0","Region91:num":"0","Region92:num":"0","Region93:num":"0","Region94:num":"0","Region95:num":"0","Region96:num":"0","Region97:num":"0","Region98:num":"0","Region99:num":"0","Region100:num":"0","Region101:num":"0","Region102:num":"0","Region103:num":"0","Region104:num":"0","Region105:num":"0","Region106:num":"0","Region107:num":"0","Region108:num":"0","Region109:num":"0","Region110:num":"0","Region111:num":"0","Region112:num":"0","Region113:num":"0","Region114:num":"0","Region115:num":"0","Region116:num":"0","Region117:num":"0","Region118:num":"0","Region119:num":"0","Region120:num":"0","Region121:num":"0","Region122:num":"0","Region123:num":"0","Region124:num":"0","Region125:num":"0","Region126:num":"0","Region127:num":"0","Region128:num":"0","Region129:num":"0","Region130:num":"0","Region131:num":"0","Region132:num":"0","Region133:num":"0","Region134:num":"0","Region135:num":"0","Region136:num":"0","Region137:num":"0","Region138:num":"0","Region139:num":"0","Region140:num":"0","Region141:num":"0","Region142:num":"0","Region143:num":"0","Region144:num":"0","Region145:num":"0","Region146:num":"0","Region147:num":"0","Region148:num":"0","Region149:num":"0","Region150:num":"0","Region151:num":"0","Region152:num":"0","Region153:num":"0","Region154:num":"0","Region155:num":"0","Region156:num":"0","Region157:num":"0","Region158:num":"0","Region159:num":"0","Region160:num":"0","Region161:num":"0","Region162:num":"0","Region163:num":"0","Region164:num":"0","Region165:num":"0","Region166:num":"0","Region167:num":"0","Region168:num":"0","Region169:num":"0","Region170:num":"0","Region171:num":"0","Region172:num":"0","Region173:num":"0","Region174:num":"0","Region175:num":"0","Region176:num":"0","Region177:num":"0","Region178:num":"0","Region179:num":"0","Region180:num":"0","Region181:num":"0","Region182:num":"0","Region183:num":"0","Region184:num":"0","Region185:num":"0","Region186:num":"0","Region187:num":"0","Region188:num":"0","Region189:num":"0","Region190:num":"0","Region191:num":"0","Region192:num":"0","Region193:num":"0","Region194:num":"0","Region195:num":"0","Region196:num":"0","Region197:num":"0","Region198:num":"0","Region199:num":"0","Region200:num":"0","Region201:num":"0","Region202:num":"0","Region203:num":"0","Region204:num":"0","Region205:num":"0","Region206:num":"0","Region207:num":"0","Region208:num":"0","Region209:num":"0","Region210:num":"0","Region211:num":"0","Region212:num":"0","Region213:num":"0","Region214:num":"0","Region215:num":"0","Region216:num":"0","Region217:num":"0","Region218:num":"0","Region219:num":"0","Region220:num":"0","Region221:num":"0","Region222:num":"0","Region223:num":"0","Region224:num":"0","Region225:num":"0","Region226:num":"0","Region227:num":"0","Region228:num":"0","Region229:num":"0","Region230:num":"0","Region231:num":"0","Region232:num":"0","Region233:num":"0","Region234:num":"0","Region235:num":"0","Region236:num":"0","Region237:num":"0","Region238:num":"0","Region239:num":"0","Region240:num":"0","Region241:num":"0","Region242:num":"0","Region243:num":"0","Region244:num":"0","Region245:num":"0","Region246:num":"0","Region247:num":"0","Region248:num":"0","Region249:num":"0","Region250:num":"0","Region251:num":"0","Region252:num":"0","Region253:num":"0","Region254:num":"0","Region255:num":"0"}
 *
 * @param RegionOkTarget:str
 * @text Target Tile
 * @parent RegionOk:struct
 * @type select
 * @option Tile in front of player.
 * @value front
 * @option Tile player is standing on top of.
 * @value standing
 * @desc Which tile should be checked for
 * Common Event on OK Button?
 * @default front
 *
 * @param RegionTouch:struct
 * @text Common Event on Touch
 * @parent Region:struct
 * @type struct<RegionCommonEvent>
 * @desc Set Common Events that activate upon stepping the tiles
 * marked by the designated regions.
 * @default {"Region1:num":"0","Region2:num":"0","Region3:num":"0","Region4:num":"0","Region5:num":"0","Region6:num":"0","Region7:num":"0","Region8:num":"0","Region9:num":"0","Region10:num":"0","Region11:num":"0","Region12:num":"0","Region13:num":"0","Region14:num":"0","Region15:num":"0","Region16:num":"0","Region17:num":"0","Region18:num":"0","Region19:num":"0","Region20:num":"0","Region21:num":"0","Region22:num":"0","Region23:num":"0","Region24:num":"0","Region25:num":"0","Region26:num":"0","Region27:num":"0","Region28:num":"0","Region29:num":"0","Region30:num":"0","Region31:num":"0","Region32:num":"0","Region33:num":"0","Region34:num":"0","Region35:num":"0","Region36:num":"0","Region37:num":"0","Region38:num":"0","Region39:num":"0","Region40:num":"0","Region41:num":"0","Region42:num":"0","Region43:num":"0","Region44:num":"0","Region45:num":"0","Region46:num":"0","Region47:num":"0","Region48:num":"0","Region49:num":"0","Region50:num":"0","Region51:num":"0","Region52:num":"0","Region53:num":"0","Region54:num":"0","Region55:num":"0","Region56:num":"0","Region57:num":"0","Region58:num":"0","Region59:num":"0","Region60:num":"0","Region61:num":"0","Region62:num":"0","Region63:num":"0","Region64:num":"0","Region65:num":"0","Region66:num":"0","Region67:num":"0","Region68:num":"0","Region69:num":"0","Region70:num":"0","Region71:num":"0","Region72:num":"0","Region73:num":"0","Region74:num":"0","Region75:num":"0","Region76:num":"0","Region77:num":"0","Region78:num":"0","Region79:num":"0","Region80:num":"0","Region81:num":"0","Region82:num":"0","Region83:num":"0","Region84:num":"0","Region85:num":"0","Region86:num":"0","Region87:num":"0","Region88:num":"0","Region89:num":"0","Region90:num":"0","Region91:num":"0","Region92:num":"0","Region93:num":"0","Region94:num":"0","Region95:num":"0","Region96:num":"0","Region97:num":"0","Region98:num":"0","Region99:num":"0","Region100:num":"0","Region101:num":"0","Region102:num":"0","Region103:num":"0","Region104:num":"0","Region105:num":"0","Region106:num":"0","Region107:num":"0","Region108:num":"0","Region109:num":"0","Region110:num":"0","Region111:num":"0","Region112:num":"0","Region113:num":"0","Region114:num":"0","Region115:num":"0","Region116:num":"0","Region117:num":"0","Region118:num":"0","Region119:num":"0","Region120:num":"0","Region121:num":"0","Region122:num":"0","Region123:num":"0","Region124:num":"0","Region125:num":"0","Region126:num":"0","Region127:num":"0","Region128:num":"0","Region129:num":"0","Region130:num":"0","Region131:num":"0","Region132:num":"0","Region133:num":"0","Region134:num":"0","Region135:num":"0","Region136:num":"0","Region137:num":"0","Region138:num":"0","Region139:num":"0","Region140:num":"0","Region141:num":"0","Region142:num":"0","Region143:num":"0","Region144:num":"0","Region145:num":"0","Region146:num":"0","Region147:num":"0","Region148:num":"0","Region149:num":"0","Region150:num":"0","Region151:num":"0","Region152:num":"0","Region153:num":"0","Region154:num":"0","Region155:num":"0","Region156:num":"0","Region157:num":"0","Region158:num":"0","Region159:num":"0","Region160:num":"0","Region161:num":"0","Region162:num":"0","Region163:num":"0","Region164:num":"0","Region165:num":"0","Region166:num":"0","Region167:num":"0","Region168:num":"0","Region169:num":"0","Region170:num":"0","Region171:num":"0","Region172:num":"0","Region173:num":"0","Region174:num":"0","Region175:num":"0","Region176:num":"0","Region177:num":"0","Region178:num":"0","Region179:num":"0","Region180:num":"0","Region181:num":"0","Region182:num":"0","Region183:num":"0","Region184:num":"0","Region185:num":"0","Region186:num":"0","Region187:num":"0","Region188:num":"0","Region189:num":"0","Region190:num":"0","Region191:num":"0","Region192:num":"0","Region193:num":"0","Region194:num":"0","Region195:num":"0","Region196:num":"0","Region197:num":"0","Region198:num":"0","Region199:num":"0","Region200:num":"0","Region201:num":"0","Region202:num":"0","Region203:num":"0","Region204:num":"0","Region205:num":"0","Region206:num":"0","Region207:num":"0","Region208:num":"0","Region209:num":"0","Region210:num":"0","Region211:num":"0","Region212:num":"0","Region213:num":"0","Region214:num":"0","Region215:num":"0","Region216:num":"0","Region217:num":"0","Region218:num":"0","Region219:num":"0","Region220:num":"0","Region221:num":"0","Region222:num":"0","Region223:num":"0","Region224:num":"0","Region225:num":"0","Region226:num":"0","Region227:num":"0","Region228:num":"0","Region229:num":"0","Region230:num":"0","Region231:num":"0","Region232:num":"0","Region233:num":"0","Region234:num":"0","Region235:num":"0","Region236:num":"0","Region237:num":"0","Region238:num":"0","Region239:num":"0","Region240:num":"0","Region241:num":"0","Region242:num":"0","Region243:num":"0","Region244:num":"0","Region245:num":"0","Region246:num":"0","Region247:num":"0","Region248:num":"0","Region249:num":"0","Region250:num":"0","Region251:num":"0","Region252:num":"0","Region253:num":"0","Region254:num":"0","Region255:num":"0"}
 *
 * @param TerrainTag:struct
 * @text Terrain Tag Settings
 * @type struct<TerrainTag>
 * @desc Choose settings regarding terrain tags.
 * @default {"TerrainTag":"","Rope:num":"1"}
 *
 * @param BreakEnd1
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param End Of
 * @default Plugin Parameters
 *
 * @param BreakEnd2
 * @text --------------------------
 * @default ----------------------------------
 *
 */
/* ----------------------------------------------------------------------------
 * Label Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Label:
 *
 * @param SpriteBased:eval
 * @text Sprite Based?
 * @type boolean
 * @on Sprite-Based
 * @off Legacy-Window
 * @desc Use sprite-based labels instead of legacy-window version.
 * Legacy-window version will not be supported in future.
 * @default true
 *
 * @param MobileEnabled:eval
 * @text Mobile-Enabled?
 * @type boolean
 * @on Enabled
 * @off Disabled
 * @desc Enable event labels for mobile devices?
 * @default true
 *
 * @param FontSize:num
 * @text Font Size
 * @type number
 * @min 1
 * @desc The font size used for the Event Labels.
 * @default 22
 *
 * @param IconSize:num
 * @text Icon Size
 * @type number
 * @min 1
 * @desc The size of the icons used in the Event Labels.
 * @default 26
 *
 * @param LineHeight:num
 * @text Line Height
 * @type number
 * @min 1
 * @desc The line height used for the Event Labels.
 * @default 26
 *
 * @param OffsetX:num
 * @text Offset X
 * @type number
 * @min 0
 * @desc Globally offset all labels horizontally by this amount.
 * @default 0
 *
 * @param OffsetY:num
 * @text Offset Y
 * @type number
 * @min 0
 * @desc Globally offset all labels vertically by this amount.
 * @default 12
 *
 * @param OpacitySpeed:num
 * @text Fade Speed
 * @type number
 * @min 1
 * @desc Fade speed for labels.
 * @default 16
 *
 * @param VisibleRange:num
 * @text Visible Range
 * @type number
 * @min 1
 * @desc Range the player has to be within the event to make its label visible.
 * @default 30
 *
 * @param RangeType:str
 * @text Range Type
 * @parent VisibleRange:num
 * @type select
 * @option square
 * @option circle
 * @option diamond
 * @desc What do you want the default label visible range type?
 * @default square
 *
 */
/* ----------------------------------------------------------------------------
 * Icon Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Icon:
 *
 * @param BufferX:num
 * @text Buffer X
 * @desc Default X position buffer for event icons.
 * @default 0
 *
 * @param BufferY:num
 * @text Buffer Y
 * @desc Default Y position buffer for event icons.
 * @default 12
 *
 * @param BlendMode:num
 * @text Blend Mode
 * @type select
 * @option 0 - Normal
 * @value 0
 * @option 1 - Additive
 * @value 1
 * @option 2 - Multiply
 * @value 2
 * @option 3 - Screen
 * @value 3
 * @desc Default blend mode for even icons.
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * Template Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Template:
 *
 * @param Settings
 *
 * @param PreloadMaps:arraynum
 * @text Preloaded Maps
 * @parent Settings
 * @type number[]
 * @desc A list of all the ID's of the maps that will be preloaded
 * to serve as template maps for this plugin.
 * @default ["1"]
 *
 * @param Templates
 *
 * @param List:arraystruct
 * @text Event Template List
 * @parent Templates
 * @type struct<EventTemplate>[]
 * @desc A list of all the Event Templates used by this project.
 * Used for notetags and Plugin Commands.
 * @default []
 *
 * @param JavaScript
 *
 * @param PreCopyJS:func
 * @text JS: Pre-Copy
 * @parent JavaScript
 * @type note
 * @desc Code that's ran before an event is copied.
 * This is global and is ran for all copied events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PostCopyJS:func
 * @text JS: Post-Copy
 * @parent JavaScript
 * @type note
 * @desc Code that's ran after an event is copied.
 * This is global and is ran for all copied events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PreMorphJS:func
 * @text JS: Pre-Morph
 * @parent JavaScript
 * @type note
 * @desc Code that's ran before an event is morphed.
 * This is global and is ran for all morphed events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PostMorphJS:func
 * @text JS: Post-Morph
 * @parent JavaScript
 * @type note
 * @desc Code that's ran after an event is morphed.
 * This is global and is ran for all morphed events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PreSpawnJS:func
 * @text JS: Pre-Spawn
 * @parent JavaScript
 * @type note
 * @desc Code that's ran before an event is spawned.
 * This is global and is ran for all spawned events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PostSpawnJS:func
 * @text JS: Post-Spawn
 * @parent JavaScript
 * @type note
 * @desc Code that's ran after an event is spawned.
 * This is global and is ran for all spawned events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 */
/* ----------------------------------------------------------------------------
 * Event Template
 * ----------------------------------------------------------------------------
 */
/*~struct~EventTemplate:
 *
 * @param Name:str
 * @text Name
 * @desc Name of the template. It'll be used as anchor points for
 * notetags and Plugin Commands.
 * @default Untitled
 *
 * @param MapID:num
 * @text Map ID
 * @parent Name:str
 * @type number
 * @min 1
 * @max 999
 * @desc ID of the map the template event is stored on.
 * This will automatically add this ID to preloaded list.
 * @default 1
 *
 * @param EventID:num
 * @text Event ID
 * @parent Name:str
 * @type number
 * @min 1
 * @max 999
 * @desc ID of the event the template event is based on.
 * @default 1
 *
 * @param JavaScript
 *
 * @param PreCopyJS:func
 * @text JS: Pre-Copy
 * @parent JavaScript
 * @type note
 * @desc Code that's ran before an event is copied.
 * This is local only for this template.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PostCopyJS:func
 * @text JS: Post-Copy
 * @parent JavaScript
 * @type note
 * @desc Code that's ran after an event is copied.
 * This is local only for this template.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PreMorphJS:func
 * @text JS: Pre-Morph
 * @parent JavaScript
 * @type note
 * @desc Code that's ran before an event is morphed.
 * This is local only for this template.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PostMorphJS:func
 * @text JS: Post-Morph
 * @parent JavaScript
 * @type note
 * @desc Code that's ran after an event is morphed.
 * This is local only for this template.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PreSpawnJS:func
 * @text JS: Pre-Spawn
 * @parent JavaScript
 * @type note
 * @desc Code that's ran before an event is spawned.
 * This is global and is ran for all spawned events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PostSpawnJS:func
 * @text JS: Post-Spawn
 * @parent JavaScript
 * @type note
 * @desc Code that's ran after an event is spawned.
 * This is global and is ran for all spawned events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 */
/* ----------------------------------------------------------------------------
 * Movement Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Movement:
 *
 * @param Dir8
 * @text 8 Directional Movement
 *
 * @param EnableDir8:eval
 * @text Enable
 * @parent Dir8
 * @type boolean
 * @on Enable
 * @off Disabled
 * @desc Allow 8-directional movement by default? Players can move diagonally.
 * @default true
 *
 * @param StrictCollision:eval
 * @text Strict Collision
 * @parent Dir8
 * @type boolean
 * @on Strict
 * @off Flexible
 * @desc Enforce strict collission rules where the player must be able to pass both cardinal directions?
 * @default true
 *
 * @param FavorHorz:eval
 * @text Favor Horizontal
 * @parent StrictCollision:eval
 * @type boolean
 * @on Horizontal
 * @off Vertical
 * @desc Favor horizontal if cannot pass diagonally but can pass both horizontally and vertically?
 * @default true
 *
 * @param SlowerSpeed:eval
 * @text Slower Diagonals?
 * @parent Dir8
 * @type boolean
 * @on Slower
 * @off Normal
 * @desc Enforce a slower movement speed when moving diagonally?
 * @default false
 *
 * @param DiagonalSpeedMultiplier:num
 * @text Speed Multiplier
 * @parent SlowerSpeed:eval
 * @desc What's the multiplier to adjust movement speed when moving diagonally?
 * @default 0.85
 *
 * @param AutoMove
 * @text Automatic Movement
 *
 * @param StopAutoMoveEvents:eval
 * @text Stop During Events
 * @parent AutoMove
 * @type boolean
 * @on Stop
 * @off Wander
 * @desc Stop automatic event movement while events are running.
 * @default true
 *
 * @param StopAutoMoveMessages:eval
 * @text Stop During Messages
 * @parent AutoMove
 * @type boolean
 * @on Stop
 * @off Wander
 * @desc Stop automatic event movement while a message is running.
 * @default true
 *
 * @param Bitmap
 *
 * @param BitmapSmoothing:eval
 * @text Smoothing
 * @parent Bitmap
 * @type boolean
 * @on Smooth
 * @off Pixelated
 * @desc Do you want to smooth or pixelate the map sprites?
 * Pixelating them is better for zooming and tilting.
 * @default false
 *
 * @param Dash
 * @text Dash
 *
 * @param DashModifier:num
 * @text Dash Modifier
 * @parent Dash
 * @desc Alters the dash speed modifier.
 * @default +1.0
 *
 * @param DashOnLadder:eval
 * @text Dash On Ladder?
 * @parent Dash
 * @type boolean
 * @on Allow
 * @off Disallow
 * @desc Allow dashing while on a ladder or rope?
 * @default false
 *
 * @param EnableDashTilt:eval
 * @text Enable Dash Tilt?
 * @parent Dash
 * @type boolean
 * @on Enable
 * @off Disabled
 * @desc Tilt any sprites that are currently dashing?
 * @default true
 *
 * @param TiltLeft:num
 * @text Tilt Left Amount
 * @parent EnableDashTilt:eval
 * @desc Amount in radians when moving left (upper left, left, lower left).
 * @default -0.15
 *
 * @param TiltRight:num
 * @text Tilt Right Amount
 * @parent EnableDashTilt:eval
 * @desc Amount in radians when moving right (upper right, right, lower right).
 * @default 0.15
 *
 * @param TiltVert:num
 * @text Tilt Vertical Amount
 * @parent EnableDashTilt:eval
 * @desc Amount in radians when moving vertical (up, down).
 * @default 0.05
 * 
 * @param EventMove
 * @text Event Movement
 *
 * @param RandomMoveWeight:num
 * @text Random Move Weight
 * @parent EventMove
 * @desc Use numbers between 0 and 1. Numbers closer to 1 stay
 * closer to their home position. 0 to disable it.
 * @default 0.10
 *
 * @param ShiftY:num
 * @text Shift Y
 * @parent EventMove
 * @desc How many pixels should non-tile characters be shifted by?
 * Negative: up. Positive: down.
 * @default -6
 *
 * @param PathFind
 * @text Path Finding
 *
 * @param PathfindMobileEnabled:eval
 * @text Mobile-Enabled?
 * @parent PathFind
 * @type boolean
 * @on Enabled
 * @off Disabled
 * @desc Enable diagonal pathfinding for mobile devices?
 * @default false
 *
 * @param Shadows
 *
 * @param ShowShadows:eval
 * @text Show
 * @parent Shadows
 * @type boolean
 * @on Show
 * @off Don't Show
 * @desc Show shadows on all events and player-related sprites.
 * @default true
 *
 * @param DefaultShadow:str
 * @text Default Filename
 * @parent Shadows
 * @type file
 * @dir img/system/
 * @desc Default filename used for shadows found in img/system/ folder.
 * @default Shadow1
 *
 * @param ShadowLayer:num
 * @text Shadow Z Layer
 * @parent Shadows
 * @desc What is the sprite Z layer used for the shadow sprites?
 * @default 0.5
 *
 * @param TurnInPlace
 * @text Turn in Place
 *
 * @param EnableTurnInPlace:eval
 * @text Enable
 * @parent TurnInPlace
 * @type boolean
 * @on Turn in Place
 * @off Skip
 * @desc When not dashing, player will turn in place before moving.
 * This only applies with keyboard inputs.
 * @default false
 *
 * @param TurnInPlaceDelay:num
 * @text Delay in Frames
 * @parent TurnInPlace
 * @type number
 * @min 0
 * @desc The number of frames to wait before moving.
 * @default 10
 *
 * @param Vehicle
 * @text Vehicle Speeds
 *
 * @param BoatSpeed:num
 * @text Boat Speed
 * @parent Vehicle
 * @desc Allows you to adjust the base speed of the boat vehicle.
 * @default 4.0
 *
 * @param ShipSpeed:num
 * @text Ship Speed
 * @parent Vehicle
 * @desc Allows you to adjust the base speed of the ship vehicle.
 * @default 5.0
 *
 * @param AirshipSpeed:num
 * @text Airship Speed
 * @parent Vehicle
 * @desc Allows you to adjust the base speed of the airship vehicle.
 * @default 6.0
 *
 */
/* ----------------------------------------------------------------------------
 * Region Rulings
 * ----------------------------------------------------------------------------
 */
/*~struct~Region:
 *
 * @param Allow
 * @text Allow Regions
 *
 * @param AllAllow:arraynum
 * @text All Allow
 * @parent Allow
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where the player can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param WalkAllow:arraynum
 * @text Walk Allow
 * @parent Allow
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where walking units can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param PlayerAllow:arraynum
 * @text Player Allow
 * @parent WalkAllow:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where the player can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param EventAllow:arraynum
 * @text Event Allow
 * @parent WalkAllow:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where events can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param VehicleAllow:arraynum
 * @text Vehicle Allow
 * @parent Allow
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where any vehicle can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param BoatAllow:arraynum
 * @text Boat Allow
 * @parent VehicleAllow:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where boats can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param ShipAllow:arraynum
 * @text Ship Allow
 * @parent VehicleAllow:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where ships can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param AirshipAllow:arraynum
 * @text Airship Allow
 * @parent VehicleAllow:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where airships can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param Forbid
 * @text Forbid Regions
 *
 * @param AllForbid:arraynum
 * @text All Forbid
 * @parent Forbid
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where the player cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param WalkForbid:arraynum
 * @text Walk Forbid
 * @parent Forbid
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where walking units cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param PlayerForbid:arraynum
 * @text Player Forbid
 * @parent WalkForbid:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where the player cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param EventForbid:arraynum
 * @text Event Forbid
 * @parent WalkForbid:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where events cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param VehicleForbid:arraynum
 * @text Vehicle Forbid
 * @parent Forbid
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where vehicles cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param BoatForbid:arraynum
 * @text Boat Forbid
 * @parent VehicleForbid:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where ships cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param ShipForbid:arraynum
 * @text Ship Forbid
 * @parent VehicleForbid:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where ships cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param AirshipForbid:arraynum
 * @text Airship Forbid
 * @parent VehicleForbid:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where airships cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param Dock
 * @text Dock Regions
 *
 * @param VehicleDock:arraynum
 * @text Vehicle Dock
 * @parent Dock
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where any vehicle can dock.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param BoatDock:arraynum
 * @text Boat Dock
 * @parent Dock
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where boats can dock.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param BoatDockRegionOnly:eval
 * @text Only Region Dockable
 * @parent BoatDock:arraynum
 * @type boolean
 * @on At Regions Only
 * @off Default
 * @desc Boats can only dock at designated regions.
 * @default false
 *
 * @param ShipDock:arraynum
 * @text Ship Dock
 * @parent Dock
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where ships can dock.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param ShipDockRegionOnly:eval
 * @text Only Region Dockable
 * @parent ShipDock:arraynum
 * @type boolean
 * @on At Regions Only
 * @off Default
 * @desc Ships can only dock at designated regions.
 * @default false
 *
 * @param AirshipDock:arraynum
 * @text Airship Dock
 * @parent Dock
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where airships can dock.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param AirshipDockRegionOnly:eval
 * @text Only Region Dockable
 * @parent AirshipDock:arraynum
 * @type boolean
 * @on At Regions Only
 * @off Default
 * @desc Airships can only dock at designated regions.
 * @default false
 *
 */
/* ----------------------------------------------------------------------------
 * Region Common Events
 * ----------------------------------------------------------------------------
 */
/*~struct~RegionCommonEvent:
 *
 * @param Region1:num
 * @text Region 1
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region2:num
 * @text Region 2
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region3:num
 * @text Region 3
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region4:num
 * @text Region 4
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region5:num
 * @text Region 5
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region6:num
 * @text Region 6
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region7:num
 * @text Region 7
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region8:num
 * @text Region 8
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region9:num
 * @text Region 9
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region10:num
 * @text Region 10
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region11:num
 * @text Region 11
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region12:num
 * @text Region 12
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region13:num
 * @text Region 13
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region14:num
 * @text Region 14
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region15:num
 * @text Region 15
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region16:num
 * @text Region 16
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region17:num
 * @text Region 17
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region18:num
 * @text Region 18
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region19:num
 * @text Region 19
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region20:num
 * @text Region 20
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region21:num
 * @text Region 21
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region22:num
 * @text Region 22
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region23:num
 * @text Region 23
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region24:num
 * @text Region 24
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region25:num
 * @text Region 25
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region26:num
 * @text Region 26
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region27:num
 * @text Region 27
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region28:num
 * @text Region 28
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region29:num
 * @text Region 29
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region30:num
 * @text Region 30
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region31:num
 * @text Region 31
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region32:num
 * @text Region 32
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region33:num
 * @text Region 33
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region34:num
 * @text Region 34
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region35:num
 * @text Region 35
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region36:num
 * @text Region 36
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region37:num
 * @text Region 37
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region38:num
 * @text Region 38
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region39:num
 * @text Region 39
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region40:num
 * @text Region 40
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region41:num
 * @text Region 41
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region42:num
 * @text Region 42
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region43:num
 * @text Region 43
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region44:num
 * @text Region 44
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region45:num
 * @text Region 45
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region46:num
 * @text Region 46
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region47:num
 * @text Region 47
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region48:num
 * @text Region 48
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region49:num
 * @text Region 49
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region50:num
 * @text Region 50
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region51:num
 * @text Region 51
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region52:num
 * @text Region 52
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region53:num
 * @text Region 53
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region54:num
 * @text Region 54
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region55:num
 * @text Region 55
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region56:num
 * @text Region 56
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region57:num
 * @text Region 57
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region58:num
 * @text Region 58
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region59:num
 * @text Region 59
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region60:num
 * @text Region 60
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region61:num
 * @text Region 61
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region62:num
 * @text Region 62
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region63:num
 * @text Region 63
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region64:num
 * @text Region 64
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region65:num
 * @text Region 65
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region66:num
 * @text Region 66
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region67:num
 * @text Region 67
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region68:num
 * @text Region 68
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region69:num
 * @text Region 69
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region70:num
 * @text Region 70
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region71:num
 * @text Region 71
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region72:num
 * @text Region 72
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region73:num
 * @text Region 73
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region74:num
 * @text Region 74
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region75:num
 * @text Region 75
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region76:num
 * @text Region 76
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region77:num
 * @text Region 77
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region78:num
 * @text Region 78
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region79:num
 * @text Region 79
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region80:num
 * @text Region 70
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region81:num
 * @text Region 71
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region82:num
 * @text Region 72
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region83:num
 * @text Region 73
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region84:num
 * @text Region 74
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region85:num
 * @text Region 75
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region86:num
 * @text Region 76
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region87:num
 * @text Region 77
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region88:num
 * @text Region 78
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region89:num
 * @text Region 79
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region80:num
 * @text Region 80
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region81:num
 * @text Region 81
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region82:num
 * @text Region 82
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region83:num
 * @text Region 83
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region84:num
 * @text Region 84
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region85:num
 * @text Region 85
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region86:num
 * @text Region 86
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region87:num
 * @text Region 87
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region88:num
 * @text Region 88
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region89:num
 * @text Region 89
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region90:num
 * @text Region 80
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region91:num
 * @text Region 81
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region92:num
 * @text Region 82
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region93:num
 * @text Region 83
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region94:num
 * @text Region 84
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region95:num
 * @text Region 85
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region96:num
 * @text Region 86
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region97:num
 * @text Region 87
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region98:num
 * @text Region 88
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region99:num
 * @text Region 89
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region90:num
 * @text Region 90
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region91:num
 * @text Region 91
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region92:num
 * @text Region 92
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region93:num
 * @text Region 93
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region94:num
 * @text Region 94
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region95:num
 * @text Region 95
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region96:num
 * @text Region 96
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region97:num
 * @text Region 97
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region98:num
 * @text Region 98
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region99:num
 * @text Region 99
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region100:num
 * @text Region 100
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region101:num
 * @text Region 101
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region102:num
 * @text Region 102
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region103:num
 * @text Region 103
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region104:num
 * @text Region 104
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region105:num
 * @text Region 105
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region106:num
 * @text Region 106
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region107:num
 * @text Region 107
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region108:num
 * @text Region 108
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region109:num
 * @text Region 109
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region110:num
 * @text Region 110
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region111:num
 * @text Region 111
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region112:num
 * @text Region 112
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region113:num
 * @text Region 113
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region114:num
 * @text Region 114
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region115:num
 * @text Region 115
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region116:num
 * @text Region 116
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region117:num
 * @text Region 117
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region118:num
 * @text Region 118
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region119:num
 * @text Region 119
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region120:num
 * @text Region 120
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region121:num
 * @text Region 121
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region122:num
 * @text Region 122
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region123:num
 * @text Region 123
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region124:num
 * @text Region 124
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region125:num
 * @text Region 125
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region126:num
 * @text Region 126
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region127:num
 * @text Region 127
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region128:num
 * @text Region 128
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region129:num
 * @text Region 129
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region130:num
 * @text Region 130
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region131:num
 * @text Region 131
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region132:num
 * @text Region 132
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region133:num
 * @text Region 133
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region134:num
 * @text Region 134
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region135:num
 * @text Region 135
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region136:num
 * @text Region 136
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region137:num
 * @text Region 137
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region138:num
 * @text Region 138
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region139:num
 * @text Region 139
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region140:num
 * @text Region 140
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region141:num
 * @text Region 141
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region142:num
 * @text Region 142
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region143:num
 * @text Region 143
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region144:num
 * @text Region 144
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region145:num
 * @text Region 145
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region146:num
 * @text Region 146
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region147:num
 * @text Region 147
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region148:num
 * @text Region 148
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region149:num
 * @text Region 149
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region150:num
 * @text Region 150
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region151:num
 * @text Region 151
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region152:num
 * @text Region 152
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region153:num
 * @text Region 153
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region154:num
 * @text Region 154
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region155:num
 * @text Region 155
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region156:num
 * @text Region 156
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region157:num
 * @text Region 157
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region158:num
 * @text Region 158
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region159:num
 * @text Region 159
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region160:num
 * @text Region 160
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region161:num
 * @text Region 161
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region162:num
 * @text Region 162
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region163:num
 * @text Region 163
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region164:num
 * @text Region 164
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region165:num
 * @text Region 165
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region166:num
 * @text Region 166
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region167:num
 * @text Region 167
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region168:num
 * @text Region 168
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region169:num
 * @text Region 169
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region170:num
 * @text Region 170
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region171:num
 * @text Region 171
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region172:num
 * @text Region 172
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region173:num
 * @text Region 173
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region174:num
 * @text Region 174
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region175:num
 * @text Region 175
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region176:num
 * @text Region 176
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region177:num
 * @text Region 177
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region178:num
 * @text Region 178
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region179:num
 * @text Region 179
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region180:num
 * @text Region 170
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region181:num
 * @text Region 171
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region182:num
 * @text Region 172
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region183:num
 * @text Region 173
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region184:num
 * @text Region 174
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region185:num
 * @text Region 175
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region186:num
 * @text Region 176
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region187:num
 * @text Region 177
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region188:num
 * @text Region 178
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region189:num
 * @text Region 179
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region180:num
 * @text Region 180
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region181:num
 * @text Region 181
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region182:num
 * @text Region 182
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region183:num
 * @text Region 183
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region184:num
 * @text Region 184
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region185:num
 * @text Region 185
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region186:num
 * @text Region 186
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region187:num
 * @text Region 187
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region188:num
 * @text Region 188
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region189:num
 * @text Region 189
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region190:num
 * @text Region 180
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region191:num
 * @text Region 181
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region192:num
 * @text Region 182
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region193:num
 * @text Region 183
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region194:num
 * @text Region 184
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region195:num
 * @text Region 185
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region196:num
 * @text Region 186
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region197:num
 * @text Region 187
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region198:num
 * @text Region 188
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region199:num
 * @text Region 189
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region190:num
 * @text Region 190
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region191:num
 * @text Region 191
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region192:num
 * @text Region 192
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region193:num
 * @text Region 193
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region194:num
 * @text Region 194
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region195:num
 * @text Region 195
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region196:num
 * @text Region 196
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region197:num
 * @text Region 197
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region198:num
 * @text Region 198
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region199:num
 * @text Region 199
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region200:num
 * @text Region 200
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region201:num
 * @text Region 201
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region202:num
 * @text Region 202
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region203:num
 * @text Region 203
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region204:num
 * @text Region 204
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region205:num
 * @text Region 205
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region206:num
 * @text Region 206
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region207:num
 * @text Region 207
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region208:num
 * @text Region 208
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region209:num
 * @text Region 209
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region210:num
 * @text Region 210
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region211:num
 * @text Region 211
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region212:num
 * @text Region 212
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region213:num
 * @text Region 213
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region214:num
 * @text Region 214
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region215:num
 * @text Region 215
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region216:num
 * @text Region 216
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region217:num
 * @text Region 217
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region218:num
 * @text Region 218
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region219:num
 * @text Region 219
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region220:num
 * @text Region 220
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region221:num
 * @text Region 221
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region222:num
 * @text Region 222
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region223:num
 * @text Region 223
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region224:num
 * @text Region 224
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region225:num
 * @text Region 225
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region226:num
 * @text Region 226
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region227:num
 * @text Region 227
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region228:num
 * @text Region 228
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region229:num
 * @text Region 229
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region230:num
 * @text Region 230
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region231:num
 * @text Region 231
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region232:num
 * @text Region 232
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region233:num
 * @text Region 233
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region234:num
 * @text Region 234
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region235:num
 * @text Region 235
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region236:num
 * @text Region 236
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region237:num
 * @text Region 237
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region238:num
 * @text Region 238
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region239:num
 * @text Region 239
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region240:num
 * @text Region 240
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region241:num
 * @text Region 241
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region242:num
 * @text Region 242
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region243:num
 * @text Region 243
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region244:num
 * @text Region 244
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region245:num
 * @text Region 245
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region246:num
 * @text Region 246
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region247:num
 * @text Region 247
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region248:num
 * @text Region 248
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region249:num
 * @text Region 249
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region250:num
 * @text Region 250
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region251:num
 * @text Region 251
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region252:num
 * @text Region 252
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region253:num
 * @text Region 253
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region254:num
 * @text Region 254
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region255:num
 * @text Region 255
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * Terrain Tag Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~TerrainTag:
 *
 * @param TerrainTag
 * @text Terrain Tag ID's
 *
 * @param Rope:num
 * @text Rope
 * @parent TerrainTag
 * @type number
 * @min 0
 * @max 7
 * @desc Which terrain tag number to use for ropes?
 * @default 1
 *
 */
/* ----------------------------------------------------------------------------
 * VisuStella 8-Dir Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~VS8:
 *
 * @param Balloons
 * @text Balloon Icon Settings
 *
 * @param AutoBalloon:eval
 * @text Auto-Balloon Poses
 * @parent Balloons
 * @type boolean
 * @on Auto
 * @off Manual
 * @desc Automatically pose VS8 sprites when using balloon icons.
 * @default true
 *
 * @param BalloonOffsetX:num
 * @text Balloon Offset X
 * @parent Balloons
 * @desc Offset balloon icons on VS8 sprites by x pixels.
 * @default 0
 *
 * @param BalloonOffsetY:num
 * @text Balloon Offset Y
 * @parent Balloons
 * @desc Offset balloon icons on VS8 sprites by y pixels.
 * @default 10
 *
 * @param Icons
 * 
 * @param AutoBuffer:eval
 * @text Auto Buffer
 * @parent Icons
 * @type boolean
 * @on Auto
 * @off Manual
 * @desc Automatically buffer the X and Y coordinates of
 * VS8 sprites?
 * @default true
 * 
 * @param CarryPose:eval
 * @text Use Carry Pose
 * @parent Icons
 * @type boolean
 * @on Carry Pose
 * @off Normal
 * @desc Use the carry pose when moving with an icon overhead.
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Popup Extra Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~PopupExtra:
 *
 * @param Fade
 * @text Fade Settings
 *
 * @param fadeInDuration:eval
 * @text Fade In Duration
 * @parent Fade
 * @desc How many frames does it take to fade in?
 * 60 frames = 1 second.
 * @default 8
 *
 * @param fadeOutDuration:eval
 * @text Fade Out Duration
 * @parent Fade
 * @desc How many frames does it take to fade out?
 * 60 frames = 1 second.
 * @default 8
 *
 * @param Offset
 * @text Offset Settings
 *
 * @param startOffsetX:eval
 * @text Starting Offset X
 * @parent Offset
 * @desc Offsets the starting x position. You may use code.
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param startOffsetY:eval
 * @text Starting Offset Y
 * @parent Offset
 * @desc Offsets the starting y position. You may use code.
 * Negative: up. Positive: down.
 * @default -48
 *
 * @param endOffsetX:eval
 * @text Ending Offset X
 * @parent Offset
 * @desc Offsets the ending x position. You may use code.
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param endOffsetY:eval
 * @text Ending Offset Y
 * @parent Offset
 * @desc Offsets the ending y position. You may use code.
 * Negative: up. Positive: down.
 * @default -96
 *
 * @param Scale
 * @text Scaling Settings
 *
 * @param startScaleX:eval
 * @text Starting Scale X
 * @parent Scale
 * @desc What is the starting scale x? You may use code.
 * 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 * @default 0.8
 *
 * @param startScaleY:eval
 * @text Starting Scale Y
 * @parent Scale
 * @desc What is the starting scale y? You may use code.
 * 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 * @default 0.8
 *
 * @param endScaleX:eval
 * @text Ending Scale X
 * @parent Scale
 * @desc What is the ending scale x? You may use code.
 * 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 * @default 0.8
 *
 * @param endScaleY:eval
 * @text Ending Scale Y
 * @parent Scale
 * @desc What is the ending scale y? You may use code.
 * 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 * @default 0.8
 *
 * @param Angle
 * @text Angle Settings
 *
 * @param startAngle:eval
 * @text Starting Offset Angle
 * @parent Angle
 * @desc What is the starting angle offset?
 * Use numbers between 0 and 360. You may use code.
 * @default +0
 *
 * @param endAngle:eval
 * @text Ending Offset Angle
 * @parent Angle
 * @desc What is the ending angle offset?
 * Use numbers between 0 and 360. You may use code.
 * @default +0
 * 
 * @param Misc
 * @text Misc Settings
 * 
 * @param Arc:eval
 * @text Arc Peak
 * @parent Misc
 * @desc This is the height of the popup's trajectory arc
 * in pixels. Positive: up. Negative: down. Code allowed.
 * @default +0
 *
 */
//=============================================================================

function _0x11bc(_0x24b6a9,_0x122771){const _0x2be999=_0x2be9();return _0x11bc=function(_0x11bc6a,_0x3b7ced){_0x11bc6a=_0x11bc6a-0xa0;let _0x2a60a9=_0x2be999[_0x11bc6a];return _0x2a60a9;},_0x11bc(_0x24b6a9,_0x122771);}function _0x2be9(){const _0x23e727=['Game_Event_checkEventTriggerTouch','PlayerIconChange','despawnTerrainTags','advancedFunc','_moveRouteIndex','Step1EventId','Spriteset_Map_createLowerLayer','_encounterNoneProximity','reserveCommonEvent','_eventErased','labelWindowRange','_events','changeSpeed','correctFacingDirection','_dummyWindow','createEventsMoveCoreTileMessagePopup','Game_Map_refresh','trigger','UNTITLED','setupEventsMoveCoreNotetags','List','9009832ahIguc','_followerControlID','updateEventsAndMovementCore','Spriteset_Map_createShadow','activationProximityDistance','variableValid','keys','updateEventIconSprite','setupRegionRestrictions','vertical\x20mirror','metCPC','initEventsMoveCoreEffects','attachPictureFilename','Game_Map_parallelCommonEvents','_startScaleY','process_VisuMZ_EventsMoveCore_LoadTemplateMaps','ccwX','Game_Event_updateParallel','isRegionDockable','_textSprite','_text','Game_Event_findProperPageIndex','updateOpacity','processMoveRouteFadeIn','getInputDirection','_PlayerDiagonalSetting','isTurnInPlace','setSelfValue','processMoveSynchMirrorVert','padding','USER-DEFINED\x205','%1Dock','Frames','isSelfSwitch','isNormalPriority','initFollowerController','4kdohXB','Preloaded\x20Maps\x20and\x20add\x20in\x20Map\x20%1','_eventScreenY','SwitchGetSelfSwitchABCD','_priorityType','isSceneMap','_encounterHalfProximity','_currentArc','map','startOffsetX','_PreservedEventMorphData','_characterIndex','_target','_lastSesetExitSelfSwitchesMapId','timer','initMembersEventsMoveCore','checkEventTriggerHere','determineCommonEventsWithCPC','setEventIconData','replace','drawTextEx','DefaultShadow','_eventLabelOffsetY','offsetY','log','_eventSpawnData','setWaitMode','_CPCs','Game_Timer_onExpire','parent','EnableDir8','Game_Event_isCollidedWithPlayerCharacters','updateEventMirrorSprite','anchor','PopupExtra','VisibleRange','processMoveSynchCustom','getMapSpawnedEventData','meetsSwitchCondition','_screenZoomScale','FollowerSetControl','clear','clearCarrying','isSpawnedEvent','_starting','screenY','template','EventTemplates','isActive','constructor','itemPadding','SpawnEventDespawnEventID','needsAttachPictureUpdate','Game_Event_update','_reflection','FALSE','clearEventCache','processSaveEventLocation','MsgDuration','hasClickTrigger','ROUTE_SCRIPT','checkSmartEventCollision','COLLAPSE','drawIcon','resetPattern','frameCount','player','_mirrorSprite','tileWidth','processMoveRouteJumpTo','checkEventTriggerTouch','initEventsMoveCore','Dock','_comments','adjustX','meetActivationRegionConditions','_paused','spawnEventId','1684820jlKURA','DashModifier','_moveAllowPlayerCollision','EnableTurnInPlace','SWEAT','getSavedEventLocation','getPlayerDiagonalSetting','Game_CharacterBase_increaseSteps','ZZZ','updateParallel','column','PlayerAllow','PreSpawnJS','setItemChoice','STRUCT','originalText','CustomPageConditions','meetActivationProximityConditions','_pattern','lastMovedDirection','_callEventData','updatePosition','fadeInDuration','drawing','Window_EventItem_onOk','19902tOlXGF','_requestSaveEventLocation','Game_Switches_setValue','Airship','needsUpdate','_filename','despawnRegions','opacity','move','FollowerSetTargetChase','_characterName','Game_CharacterBase_screenY','_screenActivation','isVisible','processMoveRouteTeleportTo','Map%1-Event%2','distance','hasAdvancedSwitchVariable','IconSet','EventAutoMovement','registerCommand','Game_Event_clearPageSettings','createShadows','height','loadSystem','variableId','GetMoveSynchTarget','createSpawnedEventWithData','USER-DEFINED\x201','isDashingEnabled','_mapId','Sprite_Character_update','startOffsetY','Game_CommonEvent_isActive','Button','FUNC','_scaleBaseY','endOffsetX','moveTowardPoint','executeMove','circle','screenX','isObjectCharacter','updateFrame','_diagonalSupport','startMapCommonEventOnOK','enable','windowPadding','_lastPluginCommandInterpreter','setupAttachPictureBitmap','Label','Game_Event_moveTypeRandom','Rope','checkCollisionKeywords','despawnAtXY','hasCPCs','locate','createBitmap','onLoadSuccess','square','SpawnEventDespawnEverything','canMove','_screenParallel','fadeIn','createLowerLayer','isTargetEventValidForLabelWindow','getPreservedMorphEventData','ANNOYED','moveSynchTarget','MOBILE_DIAGONAL_PATHFINDING','iconSize','executeCommandCommonEvent','FollowerSetGlobalChase','EventLocationSave','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','isAllowEventAutoMovement','isPressed','duration','getLastPluginCommandInterpreter','_hidden','value','_shadowGraphic','Game_CharacterBase_direction','Game_Followers_isVisible','_cacheSystemVisible','slice','EventTimerExpireEvent','onLoadAttachPicture','Game_CharacterBase_setDirection','BitmapSmoothing','moveAwayFromPoint','iconIndex','moveAwayFromCharacter','isAutoBufferIcon','_visiblePlayerX','processMoveRouteMoveTo','isSpawnHitboxCollisionOk','MOBILE_EVENT_LABELS','MobileEnabled','_inputTime','mimic','_pose','requestAnimation','HURT','prototype','deleteSavedEventLocation','onClickTrigger','Game_Map_events','setupCopyEvent','...','processMoveRouteSelfSwitch','eventsXyNt','Self\x20Switch\x20%1','onCancel','_erased','createCharacterShadow','SLEEP','_eventId','_eventIconSprite','processMoveRouteSelfVariable','Game_Event_start','isTile','Game_CharacterBase_update','hueShift','getAttachPictureBitmapHeight','resetExitSelfSwitches','SILENCE','_eventMorphData','KNEEL','_customZ','_activationProximityAutoTriggerBypass','isAirship','concat','onOk','turnAwayFromPoint','standing','ShadowShowAllEvents','hasEncounterNone','rangeType','HMPH','checkValidEventerMap','requestBalloon','Preserve','return\x200','isMoving','EventIconDelete','moveRouteIndex','Game_Temp_setDestination','event','setDiagonalDirection','unlock','EventAllow','eventLabelsVisible','_lastMovedDirection','102284UereNi','angle','selfValue','misc','forceDashing','getPosingCharacterDirection','Forbid','Window_ScrollText_startMessage','Game_Event_updateSelfMovement','Letter','HEART','%1:%2','UPPER\x20RIGHT','ShadowShowPlayer','maxSize','QUESTION','updateWaitMode','tileHeight','adjustMoveSynchOpacityDelta','1211QivAtx','Game_System_onAfterLoad','reverseDir','_stopCount','isWorking','end','_visibleEventX','switch1Valid','updateScaleBase','destinationX','DashingEnable','isShadowVisible','switch2Id','updateAttachPictureSprite','turnTowardPoint','scale','attachPictureSettings','characterName','RefVariables','MsgPopupFollower','firstSpawnedEventID','regionId','processMoveRouteMoveToCharacter','of\x20Preloaded\x20Maps.\x0a\x0a','SpawnEventAtXY','Stop','ARRAYJSON','_selfTargetNumberInput','ShadowHidePlayer','Scene_Map_createDisplayObjects','initMoveSpeed','_forceDashing','findTargetSprite','Game_Message_add','_targetScaleY','regionList','isAdvancedVariable','EventTimerFramesGain','removeMorph','_eventIcon','horizontal\x20mirror','updateEventLabelText','hasDragonbones','COBWEB','addChild','LIGHTBULB','dashSpeedModifier','left','setCommonEvent','Game_Player_isMapPassable','restoreIconsOnEventsDataKey','WalkAllow','directionOnLadderSpriteVS8dir','isRegionForbidPass','characterPatternYBasic','checkAdvancedSwitchVariablePresent','areFollowersForceShown','Game_Character_forceMoveRoute','NUM','isRunning','hasEventIcon','_needsPeriodicRefresh','initialize','_wholeDuration','getTileExpandData','setFrame','getDiagonalDestination','_poseDuration','_interpreter','VisuMZ_1_MessageCore','5666517NDwgjo','_encounterEffectDuration','Game_Switches_value','match','terrainTag','_addedHitbox','startsWith','character','Game_Interpreter_character','_periodicRefreshTimer','followers','_isCharacterSpriteSheetInvisible','setBalloonPose','updateMove','isOnRope','format','default','type','attachPictureBlendMode','destinationY','pattern','Hours','ShadowShowFollowers','TerrainTags','cwX','LOWER\x20RIGHT','sv\x20enemy','updateVisibility','checkEventTriggerAuto','bind','onDatabaseLoaded','_moveSpeed','code','roundY','isMapVariable','abs','%1DockRegionOnly','split','Game_CharacterBase_characterIndex','endOffsetY','resetIconsOnEventsDataKey','page','processMoveRouteBalloon','Walk','setMapValue','_tileExpand','deleteIconsOnEventsData','ShadowHideAllEvents','_activationProximity','_noEventMovementShadow','ShipSpeed','IconBufferY','_targetScaleX','TileX','randomInt','Game_Map_setupEvents','setPattern','Sprite_Balloon_setup','setOpacity','setupPlayerVisibilityOverrides','makeDeepCopy','processMoveSynchAway','convertSelfVariableValuesInScriptCall','3290013ZIVZFp','conditions','_MapSpawnedEventData','setupEventsMoveCoreEffects','shadowX','updateEventCustomZ','Game_Enemy_meetsSwitchCondition','FollowerID','mapValue','onMapLoaded','_randomMoveWeight','turnLeft90','return\x20%1','Game_Party_hasEncounterHalf','createContents','variables','hasStepAnime','Game_CharacterBase_opacity','update','getInputDir8','BlendMode','command108','text','_seconds','Sprite_Character_setCharacterBitmap','FavorHorz','isEventTest','createLabelWindows','updateShadow','Operation','Game_Vehicle_isMapPassable','TRUE','_fadeInDuration','isOnScreen','LEFT','_duration','removeTemporaryMapSpawnedEvents','chaseCharacter','target','OFF','StopAutoMoveEvents','updateSaveEventLocation','_callEventMap','advancedValue','Chase','IconBlendMode','processMoveCommandEventsMoveCore','updateAttachPictureBitmap','processMoveRouteHugWall','fadeOutDuration','_EventIcons','isJumping','_noFollowerMovementShadow','Game_Event_locate','push','Game_Party_hasEncounterNone','SelfSwitches','_selfEvent','areFollowersForceHidden','Game_Player_checkEventTriggerHere','isPlayerForceShown','defaultFontSize','processMoveRouteJumpForward','TargetVariableId','NORMAL','LineHeight','blt','Boat','spriteId','_proxyWindow','_data','timerText','VehicleDock','_isObjectCharacter','clearDestination','_direction','Game_CharacterBase_updatePattern','processMoveSynchDirection','updateEventsMoveCoreTagChanges','Scene_Load_onLoadSuccess','Game_Timer_start','setControlledFollowerID','checkRegionEventTrigger','clearPose','_spriteOffsetY','_actuallyMoving','SwitchId','_labelWindows','BoatSpeed','MsgPopupTargetTile','isSaveEventLocations','_randomHomeY','updateStop','moveDiagonally','setupPageSettings','_regionRules','executeMoveDir8','VariableId','setDirection','CarryPose','isSmartEventCollisionOn','ERROR:\x20Map\x20%1\x20has\x20not\x20been\x20preloaded\x20for\x20remove\x20usage.','setMoveRoute','onExpire','processMoveRoutePatternLock','createTextSprite','isInstanceOfSceneMap','IconBufferX','Game_Map_event','isPlayerWithinEncounterNoneEvents','SPIN\x20CW','isShadowShrink','custom','loadCPC','processMoveRouteStepToCharacter','add','SpawnEventDespawnAtXY','DEFAULT_SHIFT_Y','%1%2','Game_CharacterBase_screenX','VariableGetSelfVariableID','Game_Troop_meetsConditionsCPC','mirror\x20horizontal','isLongPressed','FaceSynchAllSynchTargets','1624854TOEyCt','meetsCPC','VehicleAllow','OpacitySpeed','updatePose','_attachPictureSprite','setupSpawnTest','Game_SelfSwitches_setValue','_patternLocked','executeCommonEvent','Game_Player_executeMove','isInVehicle','\x22Event\x20Popup:\x20Player\x22\x20plugin\x20command!','_tilemap','getPose','_moveSynch','USER-DEFINED\x204','resume','updateFadeIn','airship','checkEventProximity','TurnInPlaceDelay','createSpawnedEvent','characterPatternYVS8','floor','turn180','_fadeOutStart','autosaveEventLocation','meetsConditions','DIAGONAL_PATHFINDING_EVENT_LIMIT','start','TerrainTag','Icon','width','delay','processMoveSynchReverseMimic','startMapCommonEventOnOKTarget','prepareSpawnedEventAtXY','OperateValues','isSupportDiagonalMovement','isAnyEventStarting','USER-DEFINED\x203','eventId','SpawnEventAtRegion','EventTimerFramesSet','shiftY','min','isDashDisabled','resetIconsOnEventsData','_cpc','isMapSwitch','pages','DiagonalSpeedMultiplier','Step2MapId','PathfindMobileEnabled','forceCarrying','isTransparent','attachPictureScale','away','isSelfVariable','Setting','_spawnPreserved','MoveRouteIndex','Game_Player_getInputDirection','backY','createShadow','jump','VS8','getDirectionFromPoint','_event','_targetX','_eventCache','_hue','mirror\x20vertical','_lastAttachPictureType','_forceHideFollower','processMoveRouteFadeOut','canStartLocalEvents','VisibleEventLabels','Game_Map_setup','EventsMoveCore','characterIndexVS8','updatePeriodicRefresh','registerSelfEvent','random','_attachPicture','setupEventsMoveCoreCommentTags','All','ARRAYSTRUCT','lineHeight','pause','isPlaytest','Map\x20%1\x20Switch\x20%2','Step1MapId','Game_Variables_value','Game_Interpreter_updateWaitMode','_checkRelocateNotetag','canUpdate','JSON','horz\x20mirror','attachPictureOffsetX','trim','SelfVariables','scrolledY','SelfDataResetAll','Scene_Boot_onDatabaseLoaded','PosY','_SavedEventLocations','process_VisuMZ_EventsMoveCore_Switches_Variables','AllForbid','EVAL','activationRegionList','isMovementSucceeded','setPlayerDiagonalSetting','processMoveSynchMirrorHorz','arc','Template','removeChild','_offsetX','_eventOverload','Game_CharacterBase_moveDiagonally','EventTimerPause','Game_Player_increaseSteps','endScale','_frames','setValue','isValid','setupSpawn','_expireCommonEvent','increaseSteps','startCallEvent','_opacity','StopAutoMoveMessages','AdvancedVariables','EventForbid','Game_CharacterBase_isTransparent','_moveOnlyRegions','TileY','_startY','updateTextAngle','ARRAYSTR','isMapPassable','clearStepPattern','%1Forbid','approach','CallEvent','clearDashing','_type','Game_Troop_meetsConditions','Game_Message_setNumberInput','hideShadows','_commonEventId','rotation','Game_SelfSwitches_value','_fadeOutDuration','processMoveRouteAnimation','isPlayerWithinEncounterHalfEvents','vehicle','_eventPageIndex','setupFollowerVisibilityOverrides','isPassableByAnyDirection','string','Game_Follower_initialize','refresh','SCREEN','findProperPageIndex','ARRAYNUM','startOffset','name','none','Visible','processEraseEncounterSpawn','EventId','ITEM','_screenActivated','_scaleX','getEventIconData','indexOf','UPPER\x20LEFT','prepareSpawnedEventAtTerrainTag','clearSelfTarget','_eventScreenX','%1,%2,','deltaY','processMoveRouteSetIndex','mapId','Plugin\x20Parameters\x20>\x20Event\x20Template\x20Settings\x20>\x0a','AdvancedSwitches','Game_CharacterBase_canPass','processMoveSynchApproach','Name','Game_Timer_initialize','Window_NumberInput_start','deleteSavedEventLocationKey','despawnEverything','_visiblePlayerY','Settings','ShadowHideFollowers','setStopFollowerChasing','EventID','zoomScale','FontSize','resetFontSettings','labelWindowText','diamond','picture','CPC','shadowFilename','characterIndex','parameters','isAdvancedSwitch','patternWidth','unlockEvent','Sprite_Character_setTileBitmap','MapSwitches','Value','labelWindowRangeType','region','VisuMZ_Setup_Preload_Map','follower','resetSelfSwitchesForEvent','setEventLabelsVisible','updateDuration','Game_Followers_jumpAll','_realX','Region%1','autoEventIconBuffer','filter','isInvisibleCharacter','right','isEventOverloaded','events','round','createAttachPictureSprite','setLastPluginCommandInterpreter','isDestinationValid','MapId','checkActivationProximity','MULTIPLY','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','_counter','toLowerCase','Window_Message_startMessage','Game_Event_event','createLabelWindowForTarget','$preloadedMap_%1','roundXWithDirection','_commonEvents','erase','savePreservedMorphEventDataKey','attachPictureOffsetY','setImage','isBusy','padZero','getDirectionToPoint','createEventsMoveCoreMessagePopup','length','iconHeight','isOnLadder','setNumberInput','_pageIndex','Game_Character_processMoveCommand','Passability','setMoveSpeed','DashOnLadder','OffsetY','deltaYFrom','createProxyWindow','posNt','Game_Event_meetsConditionsCPC','prepareSpawnedEventAtRegion','Scene_Map_startEncounterEffect','MoveAllSynchTargets','delta','ADDITIVE','moveSynchType','getPosingCharacterPattern','findDirectionTo','setupDiagonalSupport','convertVariableValuesInScriptCall','_lastAttachPictureFilename','isEventRunning','Self\x20Variable\x20%1','addLoadListener','checkNeedForPeriodicRefresh','_character','isLabelVisible','PostCopyJS','isBattleTest','_forceCarrying','_forceShowFollower','updateScale','createDisplayObjects','setupSaveEventLocations','Map%1.json','_lastAttachPictureMaxSize','opacityDelta','Sprite_Character_initMembers','startScaleY','down','opacitySpeed','_eventLabelOffsetX','spawnPreserved','isPosing','switches','PostSpawnJS','isBigCharacter','isShip','startEncounterEffect','version','Scene_Map_onMapLoadedEncErase','deletePreservedMorphEventDataKey','determineEventOverload','lastSpawnedEvent','EventIconChangeForced','updateMoveSynchDirection','isEventsMoveCoreInvisible','contents','call','processMoveRouteMoveUntilStop','_waitMode','SPIN\x20CLOCKWISE','parse','startScaleX','isMoveOnlyRegionPassable','frontY','Region','updatePattern','processMoveRouteMoveRepeat','boxWidth','Game_Interpreter_PluginCommand','_saveEventLocation','processMoveRouteTeleportToCharacter','textSizeEx','LIGHT','moveByInput','TiltVert','BufferX','Game_Character_setMoveRoute','apply','_screenParallelOnce','_realY','RangeType','isDashingAndMoving','setupSpawnedEvents','inBattle','requestRefresh','PreCopyJS','_startAngle','Game_Map_unlockEvent','createSaveEventLocationData','loadSvEnemy','ALLOW_LADDER_DASH','pow','_settings','mirror\x20horz','isLandOk','_chaseOff','StrictCollision','absDistance','startMessage','ConvertParams','VICTORY','TemplateName','RIGHT','_visibleEventY','encounterProximityType','Toggle','setAllowEventAutoMovement','isPlayerControlDisabled','ship','createDummyWindow','LIGHT\x20BULB','checkExistingEntitiesAt','processMoveRouteStepTo','PostMorphJS','updateText','_followerChaseOff','splice','Game_System_initialize','Game_Player_isDashing','setTileBitmap','referEvent','_spriteset','SpawnEventDespawnTerrainTags','_speed','execute','Minutes','Game_CharacterBase_realMoveSpeed','shift','sqrt','description','_spawnData','turnRight90','requestMapLoadCommonEvents','Game_Vehicle_isLandOk','SpriteBased','direction','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','clamp','blendMode','isCollidedWithEvents','Game_Event_checkEventTriggerAuto','setPosition','updateVS8BalloonOffsets','_dragonbones','IconIndex','Game_Follower_chaseCharacter','reverse\x20copy','isInsideLabelRange','RegionOkTarget','eventsXy','_shadowOpacity','_arcPeak','USER-DEFINED\x202','max','roundYWithDirection','morphIntoTemplate','includes','reverse\x20mimic','processEraseEncounterEvents','list','isDiagonalDirection','note','_shadowSprite','lock','mainFontSize','updateShadowChanges','offsetX','_startX','Hidden','deltaX','_moveRoute','executeCommand','SuccessSwitchId','EventLabelRefresh','SPIN\x20CCW','updateSelfMovement','_randomHomeX','setupChild','canPass','bitmap','setFrames','findDiagonalDirectionTo','turnAwayFromCharacter','getControlledFollowerID','EventTimerResume','Game_Event_canPass','Game_CharacterBase_bushDepth','_noMovementShadow','characterPatternY','realMoveSpeed','moveTypeRandom','PlayerMovementDiagonal','isCollidedWithPlayerCharacters','pluginCommandCallEvent','Game_Event_meetsConditions','SPIN\x20ACW','AirshipSpeed','SlowerSpeed','_active','fadeDuration','parallelCommonEvents','LEFT\x20TO\x20RIGHT','getEventIconIndex','isStopFollowerChasing','create','getSelfTarget','resetSelfSwitchesForMap','row','pageId','_startScaleX','switchId','ApplyPopupExtraSettings','resizeWindow','_vehicleType','registerSelfTarget','gainFrames','stop','PreloadedMaps','FollowerIndex','LIGHT-BULB','BufferY','isTriggerIn','_labelWindow','Game_Message_setItemChoice','AutoMoveEvents','MsgPopupPlayer','cwY','checkEventTriggerEventsMoveCore','_EventsMoveCoreSettings','MapVariables','Step2EventId','updateTextPosition','endScaleX','setup','_targetY','processMoveSynchRandom','clearSpriteOffsets','Game_Variables_setValue','Game_Map_isDashDisabled','MessageText','Game_CharacterBase_pattern','contentsOpacity','jumpAll','NOTE','MapID','FollowerReset','processDrawIcon','Map\x20%1\x20Variable\x20%2','Game_Vehicle_initMoveSpeed','Game_Player_checkEventTriggerThere','forced','Game_CharacterBase_moveStraight','morphInto','isPassable','setCharacterSpriteSheetInvisible','clearAttachPictureSettings','OffsetX','firstSpawnedEvent','SelfSwitchABCD','updatePatternEventsMoveCore','isAllowCharacterTilt','LOVE','filename','VisuMZ_2_DragonbonesUnion','General','deleteEventLocation','_cacheVisibility','enemy','You\x20do\x20not\x20have\x20Map\x20%1\x20added\x20to\x20the\x20list\x0a','updateTextScale','ANGER','MUSIC\x20NOTE','deltaXFrom','MessageCore','isEventClickTriggered','Game_Event_setupPageSettings','_offsetY','Player','Game_Interpreter_executeCommand','Allow','_lastAttachPictureScale','VisuMZ_1_MessageCore\x20is\x20required\x20to\x20run\x20','roundX','_displayX','setupEvents','IconSize','outlineColor','restoreSavedEventPosition','Game_Event_initialize','initMembers','loadDataFile','isMobileDevice','clearPageSettings','_alwaysUpdateMove','drawText','fittingHeight','_trigger','isRegionAllowPass','updateSpritePosition','startScale','attachPictureType','deleteIconsOnEventsDataKey','endOffset','some','checkEventTriggerThere','_spriteOffsetX','updateBitmapSmoothing','MUSIC','_selfTargetItemChoice','despawnEventId','_DisablePlayerControl','Game_CharacterBase_hasStepAnime','refreshEventLabels','fadeOut','fontSize','Movement','encounterProximityDistance','WalkForbid','updateTileFrame','createIconSprite','_scaleY','pageIndex','Seconds','ShadowLayer','_stepPattern','hasMoveOnlyRegions','moveStraight','smooth','EXCLAMATION','EnableDashTilt','BalloonOffsetY','_scaleBaseX','_scene','isSpriteVS8dir','_working','_clickTrigger','startMapCommonEventOnTouch','activationProximityType','copy','fontFace','VisuMZ_0_CoreEngine','_forceHidePlayer','destroy','setHue','Game_CharacterBase_initMembers','_selfTarget','BalloonOffsetX','isAirshipPassable','EventIconChange','setDashingEnabled','EventLocationCreate','initEventsMoveCoreSettings','_saveEventLocations','_forceShowPlayer','toUpperCase','isNearTheScreen','_eventCopyData','Set\x20this\x20up\x20in\x20Events\x20&\x20Movement\x20Core\x27s\x0a','setCharacterBitmap','setEventIconDataKey','getAttachPictureBitmapWidth','PageId','pos','_characterSprites','%1,','setPose','radius','MUSIC-NOTE','PreMorphJS','_spawnedEvents','Window_NumberInput_processOk','updateMoveSynch','bufferY','eraseEvent','checkEventsMoveCoreStringTags','tileCoordinates','exit','visible','_checkEncounterRaw','charAt','saveEventLocation','switch2Valid','hasEncounterHalf','Game_Timer_stop','patternHeight','onAfterLoad','updateFadeOut','RefSwitches','CPCsMet','switch1Id','setDestination','bufferX','processMoveRouteJumpToCharacter','isDashing','_advancedSwitchVariable'];_0x2be9=function(){return _0x23e727;};return _0x2be9();}const _0x47bd44=_0x11bc;(function(_0x5622e9,_0x4db685){const _0x456f26=_0x11bc,_0x221cb0=_0x5622e9();while(!![]){try{const _0x13df51=parseInt(_0x456f26(0xf7))/0x1+-parseInt(_0x456f26(0x20c))/0x2+parseInt(_0x456f26(0x18f))/0x3*(parseInt(_0x456f26(0x4d6))/0x4)+parseInt(_0x456f26(0x524))/0x5+parseInt(_0x456f26(0x53d))/0x6*(-parseInt(_0x456f26(0x10a))/0x7)+parseInt(_0x456f26(0x4b2))/0x8+-parseInt(_0x456f26(0x150))/0x9;if(_0x13df51===_0x4db685)break;else _0x221cb0['push'](_0x221cb0['shift']());}catch(_0x119c2e){_0x221cb0['push'](_0x221cb0['shift']());}}}(_0x2be9,0x9dc7b));var label='EventsMoveCore',tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x47bd44(0x2ef)](function(_0x641958){const _0x5b19f2=_0x47bd44;return _0x641958['status']&&_0x641958[_0x5b19f2(0x393)]['includes']('['+label+']');})[0x0];VisuMZ[label]['Settings']=VisuMZ[label][_0x47bd44(0x2d0)]||{},VisuMZ[_0x47bd44(0x375)]=function(_0x1115e3,_0x4e39d1){const _0x589907=_0x47bd44;for(const _0x1934a2 in _0x4e39d1){if(_0x1934a2['match'](/(.*):(.*)/i)){const _0x10fe25=String(RegExp['$1']),_0x7daaca=String(RegExp['$2'])[_0x589907(0x474)]()[_0x589907(0x271)]();let _0x5a8dd9,_0x6fc7a5,_0x1d7d70;switch(_0x7daaca){case _0x589907(0x144):_0x5a8dd9=_0x4e39d1[_0x1934a2]!==''?Number(_0x4e39d1[_0x1934a2]):0x0;break;case _0x589907(0x2b2):_0x6fc7a5=_0x4e39d1[_0x1934a2]!==''?JSON['parse'](_0x4e39d1[_0x1934a2]):[],_0x5a8dd9=_0x6fc7a5['map'](_0x4ca54b=>Number(_0x4ca54b));break;case _0x589907(0x27a):_0x5a8dd9=_0x4e39d1[_0x1934a2]!==''?eval(_0x4e39d1[_0x1934a2]):null;break;case'ARRAYEVAL':_0x6fc7a5=_0x4e39d1[_0x1934a2]!==''?JSON['parse'](_0x4e39d1[_0x1934a2]):[],_0x5a8dd9=_0x6fc7a5[_0x589907(0x4de)](_0xeacc51=>eval(_0xeacc51));break;case _0x589907(0x26e):_0x5a8dd9=_0x4e39d1[_0x1934a2]!==''?JSON[_0x589907(0x34e)](_0x4e39d1[_0x1934a2]):'';break;case _0x589907(0x124):_0x6fc7a5=_0x4e39d1[_0x1934a2]!==''?JSON[_0x589907(0x34e)](_0x4e39d1[_0x1934a2]):[],_0x5a8dd9=_0x6fc7a5[_0x589907(0x4de)](_0x5d88f1=>JSON[_0x589907(0x34e)](_0x5d88f1));break;case _0x589907(0x560):_0x5a8dd9=_0x4e39d1[_0x1934a2]!==''?new Function(JSON[_0x589907(0x34e)](_0x4e39d1[_0x1934a2])):new Function(_0x589907(0xec));break;case'ARRAYFUNC':_0x6fc7a5=_0x4e39d1[_0x1934a2]!==''?JSON[_0x589907(0x34e)](_0x4e39d1[_0x1934a2]):[],_0x5a8dd9=_0x6fc7a5[_0x589907(0x4de)](_0x33033d=>new Function(JSON[_0x589907(0x34e)](_0x33033d)));break;case'STR':_0x5a8dd9=_0x4e39d1[_0x1934a2]!==''?String(_0x4e39d1[_0x1934a2]):'';break;case _0x589907(0x298):_0x6fc7a5=_0x4e39d1[_0x1934a2]!==''?JSON[_0x589907(0x34e)](_0x4e39d1[_0x1934a2]):[],_0x5a8dd9=_0x6fc7a5[_0x589907(0x4de)](_0x4a66ae=>String(_0x4a66ae));break;case _0x589907(0x532):_0x1d7d70=_0x4e39d1[_0x1934a2]!==''?JSON[_0x589907(0x34e)](_0x4e39d1[_0x1934a2]):{},_0x1115e3[_0x10fe25]={},VisuMZ[_0x589907(0x375)](_0x1115e3[_0x10fe25],_0x1d7d70);continue;case _0x589907(0x264):_0x6fc7a5=_0x4e39d1[_0x1934a2]!==''?JSON[_0x589907(0x34e)](_0x4e39d1[_0x1934a2]):[],_0x5a8dd9=_0x6fc7a5[_0x589907(0x4de)](_0x4e1109=>VisuMZ['ConvertParams']({},JSON['parse'](_0x4e1109)));break;default:continue;}_0x1115e3[_0x10fe25]=_0x5a8dd9;}}return _0x1115e3;},(_0x501a38=>{const _0x501414=_0x47bd44,_0x522112=_0x501a38[_0x501414(0x2b4)];for(const _0x55a833 of dependencies){if(!Imported[_0x55a833]){alert(_0x501414(0x39a)[_0x501414(0x15f)](_0x522112,_0x55a833)),SceneManager['exit']();break;}}const _0x3f2854=_0x501a38[_0x501414(0x393)];if(_0x3f2854[_0x501414(0x153)](/\[Version[ ](.*?)\]/i)){const _0x55b8a9=Number(RegExp['$1']);_0x55b8a9!==VisuMZ[label][_0x501414(0x341)]&&(alert(_0x501414(0x2fb)[_0x501414(0x15f)](_0x522112,_0x55b8a9)),SceneManager['exit']());}if(_0x3f2854[_0x501414(0x153)](/\[Tier[ ](\d+)\]/i)){const _0x475b84=Number(RegExp['$1']);_0x475b84<tier?(alert(_0x501414(0xa7)[_0x501414(0x15f)](_0x522112,_0x475b84,tier)),SceneManager[_0x501414(0x48a)]()):tier=Math[_0x501414(0x3ab)](_0x475b84,tier);}VisuMZ[_0x501414(0x375)](VisuMZ[label][_0x501414(0x2d0)],_0x501a38['parameters']);})(pluginData),VisuMZ[_0x47bd44(0x232)]=function(_0x4810c0,_0x2e20b7,_0x4118cc){switch(_0x4118cc){case'=':return _0x2e20b7;break;case'+':return _0x4810c0+_0x2e20b7;break;case'-':return _0x4810c0-_0x2e20b7;break;case'*':return _0x4810c0*_0x2e20b7;break;case'/':return _0x4810c0/_0x2e20b7;break;case'%':return _0x4810c0%_0x2e20b7;break;}return _0x4810c0;},PluginManager['registerCommand'](pluginData[_0x47bd44(0x2b4)],_0x47bd44(0x3f2),_0x810a5=>{const _0x1a658c=_0x47bd44;VisuMZ[_0x1a658c(0x375)](_0x810a5,_0x810a5);switch(_0x810a5['Value']){case'Allow':$gameSystem[_0x1a658c(0x37c)](!![]);break;case _0x1a658c(0x123):$gameSystem[_0x1a658c(0x37c)](![]);break;case _0x1a658c(0x37b):$gameSystem[_0x1a658c(0x37c)](!$gameSystem[_0x1a658c(0xa8)]());break;}}),PluginManager[_0x47bd44(0x551)](pluginData[_0x47bd44(0x2b4)],_0x47bd44(0x29d),_0x3dab40=>{const _0x32448d=_0x47bd44;VisuMZ[_0x32448d(0x375)](_0x3dab40,_0x3dab40);const _0x486ea4=$gameTemp[_0x32448d(0xab)](),_0x2d1338={'mapId':_0x3dab40[_0x32448d(0x2f8)],'eventId':_0x3dab40[_0x32448d(0x2b8)]||_0x486ea4[_0x32448d(0x236)](),'pageId':_0x3dab40['PageId']};if(_0x2d1338[_0x32448d(0x2c5)]<=0x0)_0x2d1338['mapId']=$gameMap?$gameMap[_0x32448d(0x2c5)]():0x1;$gameTemp[_0x32448d(0xab)]()['pluginCommandCallEvent'](_0x2d1338);}),PluginManager['registerCommand'](pluginData[_0x47bd44(0x2b4)],'DashEnableToggle',_0x263b69=>{const _0x3d3d1e=_0x47bd44;VisuMZ[_0x3d3d1e(0x375)](_0x263b69,_0x263b69);switch(_0x263b69['Value']){case'Enable':$gameSystem[_0x3d3d1e(0x46f)](!![]);break;case'Disable':$gameSystem[_0x3d3d1e(0x46f)](![]);break;case _0x3d3d1e(0x37b):$gameSystem[_0x3d3d1e(0x46f)](!$gameSystem[_0x3d3d1e(0x55a)]());break;}}),PluginManager['registerCommand'](pluginData[_0x47bd44(0x2b4)],_0x47bd44(0x46e),_0x54dbd=>{const _0x37bf21=_0x47bd44;VisuMZ[_0x37bf21(0x375)](_0x54dbd,_0x54dbd);const _0x26058e=$gameTemp['getLastPluginCommandInterpreter']();_0x54dbd[_0x37bf21(0x2f8)]=_0x54dbd[_0x37bf21(0x2f8)]||$gameMap[_0x37bf21(0x2c5)](),$gameSystem['setEventIconDataKey'](_0x54dbd[_0x37bf21(0x2f8)],_0x54dbd[_0x37bf21(0x2b8)]||_0x26058e[_0x37bf21(0x236)](),_0x54dbd[_0x37bf21(0x3a2)],_0x54dbd[_0x37bf21(0x1fa)],_0x54dbd[_0x37bf21(0x183)],_0x54dbd[_0x37bf21(0x1bc)],![]);}),PluginManager[_0x47bd44(0x551)](pluginData['name'],_0x47bd44(0x346),_0x47809c=>{const _0x377ef3=_0x47bd44;VisuMZ['ConvertParams'](_0x47809c,_0x47809c);const _0x439154=$gameTemp[_0x377ef3(0xab)]();_0x47809c[_0x377ef3(0x2f8)]=_0x47809c[_0x377ef3(0x2f8)]||$gameMap['mapId'](),$gameSystem[_0x377ef3(0x479)](_0x47809c['MapId'],_0x47809c[_0x377ef3(0x2b8)]||_0x439154[_0x377ef3(0x236)](),_0x47809c[_0x377ef3(0x3a2)],_0x47809c[_0x377ef3(0x1fa)],_0x47809c[_0x377ef3(0x183)],_0x47809c[_0x377ef3(0x1bc)],!![]);}),PluginManager['registerCommand'](pluginData[_0x47bd44(0x2b4)],_0x47bd44(0xee),_0xc8bf0d=>{const _0x1aa387=_0x47bd44;VisuMZ[_0x1aa387(0x375)](_0xc8bf0d,_0xc8bf0d);const _0x1ca3a4=$gameTemp[_0x1aa387(0xab)]();_0xc8bf0d[_0x1aa387(0x2f8)]=_0xc8bf0d[_0x1aa387(0x2f8)]||$gameMap['mapId'](),$gameSystem[_0x1aa387(0x43f)](_0xc8bf0d[_0x1aa387(0x2f8)],_0xc8bf0d[_0x1aa387(0x2b8)]||_0x1ca3a4[_0x1aa387(0x236)]());}),PluginManager[_0x47bd44(0x551)](pluginData[_0x47bd44(0x2b4)],'EventIconRestore',_0x1a265e=>{const _0x2248eb=_0x47bd44;VisuMZ[_0x2248eb(0x375)](_0x1a265e,_0x1a265e);const _0x1d943a=$gameTemp[_0x2248eb(0xab)]();_0x1a265e[_0x2248eb(0x2f8)]=_0x1a265e['MapId']||$gameMap['mapId'](),$gameSystem['restoreIconsOnEventsDataKey'](_0x1a265e[_0x2248eb(0x2f8)],_0x1a265e[_0x2248eb(0x2b8)]||_0x1d943a[_0x2248eb(0x236)]());}),PluginManager[_0x47bd44(0x551)](pluginData['name'],_0x47bd44(0x3bf),_0x4bb755=>{const _0x5130f7=_0x47bd44;if($gameMap)for(const _0xd02599 of $gameMap[_0x5130f7(0x2f3)]()){_0xd02599[_0x5130f7(0x2af)](),_0xd02599[_0x5130f7(0x133)]();}if(SceneManager['isSceneMap']()){const _0x2e9e35=SceneManager['_scene']['_spriteset'];if(_0x2e9e35)_0x2e9e35[_0x5130f7(0x44a)]();}}),PluginManager[_0x47bd44(0x551)](pluginData[_0x47bd44(0x2b4)],'EventLabelVisible',_0x2685aa=>{const _0x42b01b=_0x47bd44;VisuMZ[_0x42b01b(0x375)](_0x2685aa,_0x2685aa);switch(_0x2685aa['Visibility']){case _0x42b01b(0x2b6):$gameSystem[_0x42b01b(0x2e9)](!![]);break;case _0x42b01b(0x3ba):$gameSystem[_0x42b01b(0x2e9)](![]);break;case _0x42b01b(0x37b):$gameSystem['setEventLabelsVisible'](!$gameSystem['eventLabelsVisible']());break;}}),PluginManager[_0x47bd44(0x551)](pluginData['name'],_0x47bd44(0xa6),_0x5ba434=>{const _0x2381f4=_0x47bd44;VisuMZ[_0x2381f4(0x375)](_0x5ba434,_0x5ba434);const _0x1f764f=$gameTemp[_0x2381f4(0xab)]();if(!$gameMap)return;const _0x24a7d6=$gameMap[_0x2381f4(0xf1)](_0x5ba434[_0x2381f4(0x2b8)]||_0x1f764f[_0x2381f4(0x236)]());if(_0x24a7d6)_0x24a7d6[_0x2381f4(0x48e)]();}),PluginManager['registerCommand'](pluginData['name'],_0x47bd44(0x470),_0x118c58=>{const _0x17dd71=_0x47bd44;VisuMZ['ConvertParams'](_0x118c58,_0x118c58);const _0x3cf7f2=$gameTemp[_0x17dd71(0xab)](),_0x569a2b=_0x118c58[_0x17dd71(0x2f8)]||$gameMap[_0x17dd71(0x2c5)](),_0x115c69=_0x118c58[_0x17dd71(0x2b8)]||_0x3cf7f2[_0x17dd71(0x236)](),_0xff5f89=_0x118c58['PosX']||0x0,_0x1fe2b9=_0x118c58[_0x17dd71(0x276)]||0x0,_0x539fbd=_0x118c58['Direction']||0x2,_0x55be51=((_0x118c58[_0x17dd71(0x47b)]||0x1)-0x1)[_0x17dd71(0x39b)](0x0,0x13),_0xc6ebda=_0x118c58[_0x17dd71(0x24a)]||0x0;$gameSystem['createSaveEventLocationData'](_0x569a2b,_0x115c69,_0xff5f89,_0x1fe2b9,_0x539fbd,_0x55be51,_0xc6ebda);}),PluginManager[_0x47bd44(0x551)](pluginData[_0x47bd44(0x2b4)],'EventLocationDelete',_0x2fc192=>{const _0x26b0e5=_0x47bd44;VisuMZ[_0x26b0e5(0x375)](_0x2fc192,_0x2fc192);const _0x33e65f=$gameTemp[_0x26b0e5(0xab)](),_0x3105de=_0x2fc192['MapId']||$gameMap[_0x26b0e5(0x2c5)](),_0x153430=_0x2fc192[_0x26b0e5(0x2b8)]||_0x33e65f['eventId']();$gameSystem[_0x26b0e5(0x2cd)](_0x3105de,_0x153430);}),VisuMZ[_0x47bd44(0x25c)][_0x47bd44(0x3e5)]=function(_0x35359a,_0x4e97ed){const _0x22efea=_0x47bd44;_0x4e97ed=_0x4e97ed||{},_0x35359a['fadeDuration']={'fadeIn':_0x4e97ed[_0x22efea(0x53a)]||0x0,'fadeOut':_0x4e97ed[_0x22efea(0x1c0)]||0x0},_0x35359a[_0x22efea(0x2b3)]={'x':_0x4e97ed[_0x22efea(0x4df)]||0x0,'y':_0x4e97ed[_0x22efea(0x55d)]||0x0},_0x35359a['endOffset']={'x':_0x4e97ed[_0x22efea(0x562)]||0x0,'y':_0x4e97ed[_0x22efea(0x177)]||0x0},_0x35359a[_0x22efea(0x287)]={'x':_0x4e97ed[_0x22efea(0x3fa)]||0x0,'y':_0x4e97ed['endScaleY']||0x0},_0x35359a[_0x22efea(0x43d)]={'x':_0x4e97ed[_0x22efea(0x34f)]||0x0,'y':_0x4e97ed[_0x22efea(0x336)]||0x0},_0x35359a[_0x22efea(0xf8)]={'start':_0x4e97ed['startAngle']||0x0,'end':_0x4e97ed['endAngle']||0x0},_0x35359a[_0x22efea(0xfa)]={'arc':_0x4e97ed['Arc']||0x0};},PluginManager[_0x47bd44(0x551)](pluginData[_0x47bd44(0x2b4)],_0x47bd44(0x3f3),_0x30cfcb=>{const _0x3a3ecc=_0x47bd44;if(!SceneManager['isInstanceOfSceneMap']())return;if(!Imported['VisuMZ_1_MessageCore']){$gameTemp[_0x3a3ecc(0x267)]()&&alert(_0x3a3ecc(0x42b)+'\x22Event\x20Popup:\x20Player\x22\x20plugin\x20command!');return;}VisuMZ[_0x3a3ecc(0x375)](_0x30cfcb,_0x30cfcb);const _0x36c9cd={'text':_0x30cfcb[_0x3a3ecc(0x401)]||'','duration':Math[_0x3a3ecc(0x3ab)](_0x30cfcb['MsgDuration']||0x3c,0xc)},_0x501911=_0x30cfcb[_0x3a3ecc(0x4f8)]||{};VisuMZ[_0x3a3ecc(0x25c)]['ApplyPopupExtraSettings'](_0x36c9cd,_0x501911);const _0x5f0186=SceneManager['_scene'][_0x3a3ecc(0x38b)];if(_0x5f0186){const _0x3ffad3=$gamePlayer;_0x5f0186[_0x3a3ecc(0x30b)](_0x3ffad3,_0x36c9cd);}}),PluginManager[_0x47bd44(0x551)](pluginData[_0x47bd44(0x2b4)],_0x47bd44(0x11d),_0x55335d=>{const _0xc11f00=_0x47bd44;if(!SceneManager['isInstanceOfSceneMap']())return;if(!Imported['VisuMZ_1_MessageCore']){$gameTemp[_0xc11f00(0x267)]()&&alert(_0xc11f00(0x42b)+_0xc11f00(0x218));return;}VisuMZ[_0xc11f00(0x375)](_0x55335d,_0x55335d);const _0x3e62b4=_0x55335d[_0xc11f00(0x3ec)]||0x0,_0x56b021={'text':_0x55335d[_0xc11f00(0x401)]||'','duration':Math['max'](_0x55335d[_0xc11f00(0x510)]||0x3c,0xc)},_0xadd4cd=_0x55335d[_0xc11f00(0x4f8)]||{};VisuMZ['EventsMoveCore'][_0xc11f00(0x3e5)](_0x56b021,_0xadd4cd);const _0x5a8db1=SceneManager[_0xc11f00(0x45e)][_0xc11f00(0x38b)];if(_0x5a8db1){const _0x473f14=$gamePlayer[_0xc11f00(0x15a)]()['follower'](_0x3e62b4);_0x5a8db1[_0xc11f00(0x30b)](_0x473f14,_0x56b021);}}),PluginManager[_0x47bd44(0x551)](pluginData[_0x47bd44(0x2b4)],'MsgPopupEvent',_0xacb75d=>{const _0x5b1392=_0x47bd44;if(!SceneManager[_0x5b1392(0x1f9)]())return;if(!Imported[_0x5b1392(0x14f)]){$gameTemp['isPlaytest']()&&alert(_0x5b1392(0x42b)+'\x22Event\x20Popup:\x20Player\x22\x20plugin\x20command!');return;}VisuMZ[_0x5b1392(0x375)](_0xacb75d,_0xacb75d);const _0x48dfbc=$gameTemp[_0x5b1392(0xab)](),_0x1e1b27=_0xacb75d[_0x5b1392(0x2b8)]||(_0x48dfbc?_0x48dfbc[_0x5b1392(0x236)]():0x1),_0x4b1a1f={'text':_0xacb75d[_0x5b1392(0x401)]||'','duration':Math['max'](_0xacb75d[_0x5b1392(0x510)]||0x3c,0xc)},_0x11f815=_0xacb75d[_0x5b1392(0x4f8)]||{};VisuMZ['EventsMoveCore']['ApplyPopupExtraSettings'](_0x4b1a1f,_0x11f815);const _0x462a82=SceneManager[_0x5b1392(0x45e)][_0x5b1392(0x38b)];if(_0x462a82){const _0x5145ff=$gameMap[_0x5b1392(0xf1)](_0x1e1b27);_0x462a82[_0x5b1392(0x30b)](_0x5145ff,_0x4b1a1f);}}),PluginManager['registerCommand'](pluginData['name'],_0x47bd44(0x1e8),_0x205079=>{const _0x4dbaf4=_0x47bd44;if(!SceneManager['isInstanceOfSceneMap']())return;if(!Imported['VisuMZ_1_MessageCore']){$gameTemp['isPlaytest']()&&alert('VisuMZ_1_MessageCore\x20is\x20required\x20to\x20run\x20'+_0x4dbaf4(0x218));return;}VisuMZ[_0x4dbaf4(0x375)](_0x205079,_0x205079);const _0x30db30={'text':_0x205079[_0x4dbaf4(0x401)]||'','duration':Math[_0x4dbaf4(0x3ab)](_0x205079[_0x4dbaf4(0x510)]||0x3c,0xc),'tileCoordinates':{'x':Math[_0x4dbaf4(0x2f4)](_0x205079[_0x4dbaf4(0x185)]||0x0),'y':Math[_0x4dbaf4(0x2f4)](_0x205079[_0x4dbaf4(0x295)]||0x0)}},_0x35c385=_0x205079[_0x4dbaf4(0x4f8)]||{};VisuMZ[_0x4dbaf4(0x25c)]['ApplyPopupExtraSettings'](_0x30db30,_0x35c385);const _0x53c0e2=SceneManager[_0x4dbaf4(0x45e)][_0x4dbaf4(0x38b)];_0x53c0e2&&_0x53c0e2[_0x4dbaf4(0x4ac)](_0x30db30);}),PluginManager['registerCommand'](pluginData[_0x47bd44(0x2b4)],_0x47bd44(0xb3),_0x296b32=>{const _0x435a1c=_0x47bd44;VisuMZ[_0x435a1c(0x375)](_0x296b32,_0x296b32);const _0x46e872=_0x296b32['CommonEventID'];$gameTimer['setCommonEvent'](_0x46e872);}),PluginManager[_0x47bd44(0x551)](pluginData[_0x47bd44(0x2b4)],'EventTimerExpireClear',_0x5f5808=>{$gameTimer['setCommonEvent'](0x0);}),PluginManager[_0x47bd44(0x551)](pluginData[_0x47bd44(0x2b4)],_0x47bd44(0x12f),_0x253fab=>{const _0x55907a=_0x47bd44;if(!$gameTimer['isWorking']())return;VisuMZ[_0x55907a(0x375)](_0x253fab,_0x253fab);let _0x3594e6=0x0;_0x3594e6+=_0x253fab[_0x55907a(0x4d2)],_0x3594e6+=_0x253fab[_0x55907a(0x454)]*0x3c,_0x3594e6+=_0x253fab[_0x55907a(0x38f)]*0x3c*0x3c,_0x3594e6+=_0x253fab[_0x55907a(0x165)]*0x3c*0x3c*0x3c,$gameTimer[_0x55907a(0x3e9)](_0x3594e6);}),PluginManager[_0x47bd44(0x551)](pluginData['name'],_0x47bd44(0x238),_0x3b4c29=>{const _0x133423=_0x47bd44;if(!$gameTimer[_0x133423(0x10e)]())return;VisuMZ[_0x133423(0x375)](_0x3b4c29,_0x3b4c29);let _0x2506fc=0x0;_0x2506fc+=_0x3b4c29[_0x133423(0x4d2)],_0x2506fc+=_0x3b4c29[_0x133423(0x454)]*0x3c,_0x2506fc+=_0x3b4c29[_0x133423(0x38f)]*0x3c*0x3c,_0x2506fc+=_0x3b4c29['Hours']*0x3c*0x3c*0x3c,$gameTimer[_0x133423(0x3c6)](_0x2506fc);}),PluginManager[_0x47bd44(0x551)](pluginData[_0x47bd44(0x2b4)],_0x47bd44(0x285),_0x59a5aa=>{if(!$gameTimer['isWorking']())return;$gameTimer['pause']();}),PluginManager[_0x47bd44(0x551)](pluginData[_0x47bd44(0x2b4)],_0x47bd44(0x3ca),_0x325851=>{const _0xf49334=_0x47bd44;if(!$gameTimer[_0xf49334(0x10e)]())return;$gameTimer[_0xf49334(0x21d)]();}),PluginManager[_0x47bd44(0x551)](pluginData['name'],'EventTimerSpeed',_0xe80fda=>{const _0x5a3bb2=_0x47bd44;VisuMZ[_0x5a3bb2(0x375)](_0xe80fda,_0xe80fda);const _0x2a1946=_0xe80fda['Speed']||0x0;$gameTimer[_0x5a3bb2(0x4a9)](_0x2a1946);}),PluginManager[_0x47bd44(0x551)](pluginData[_0x47bd44(0x2b4)],_0x47bd44(0xa5),_0x575d76=>{const _0x4517b6=_0x47bd44;VisuMZ[_0x4517b6(0x375)](_0x575d76,_0x575d76);const _0x95e96d=!_0x575d76[_0x4517b6(0x1bb)];$gameSystem['setStopFollowerChasing'](_0x95e96d);}),PluginManager['registerCommand'](pluginData[_0x47bd44(0x2b4)],_0x47bd44(0x546),_0x7b2326=>{const _0x541a37=_0x47bd44;VisuMZ['ConvertParams'](_0x7b2326,_0x7b2326);const _0x4fb382=(_0x7b2326['FollowerID']||0x0)-0x1,_0x2d0840=!_0x7b2326[_0x541a37(0x1bb)],_0x1b8895=$gamePlayer[_0x541a37(0x15a)]()[_0x541a37(0x2e7)](_0x4fb382);if(_0x1b8895)_0x1b8895['setChaseOff'](_0x2d0840);}),PluginManager['registerCommand'](pluginData['name'],_0x47bd44(0x4fe),_0x180f27=>{const _0x38d9bd=_0x47bd44;VisuMZ[_0x38d9bd(0x375)](_0x180f27,_0x180f27);const _0x2abc36=_0x180f27[_0x38d9bd(0x196)];$gameSystem[_0x38d9bd(0x1e0)](_0x2abc36);}),PluginManager[_0x47bd44(0x551)](pluginData['name'],_0x47bd44(0x407),_0xffb87e=>{const _0x3ddc4f=_0x47bd44;VisuMZ['ConvertParams'](_0xffb87e,_0xffb87e),$gameSystem[_0x3ddc4f(0x1e0)](0x0),$gameSystem[_0x3ddc4f(0x2d2)](![]);for(const _0x346269 of $gamePlayer[_0x3ddc4f(0x15a)]()['_data']){if(_0x346269)_0x346269['setChaseOff'](![]);}}),PluginManager[_0x47bd44(0x551)](pluginData['name'],_0x47bd44(0x4d9),_0x170e5b=>{const _0x1eb998=_0x47bd44;VisuMZ[_0x1eb998(0x375)](_0x170e5b,_0x170e5b);const _0x5b97e9=$gameTemp[_0x1eb998(0xab)]();_0x170e5b['MapId']=_0x170e5b[_0x1eb998(0x2f8)]||$gameMap[_0x1eb998(0x2c5)]();const _0x5d974b=[_0x170e5b[_0x1eb998(0x2f8)],_0x170e5b[_0x1eb998(0x2b8)]||_0x5b97e9[_0x1eb998(0x236)](),_0x170e5b[_0x1eb998(0x100)]],_0x2842bf=_0x170e5b['TargetSwitchId'],_0x2c55b4=$gameSelfSwitches[_0x1eb998(0xad)](_0x5d974b)||![];$gameSwitches[_0x1eb998(0x289)](_0x2842bf,_0x2c55b4);}),PluginManager[_0x47bd44(0x551)](pluginData[_0x47bd44(0x2b4)],'SwitchGetSelfSwitchID',_0xd0f8d=>{const _0x35d3e3=_0x47bd44;VisuMZ[_0x35d3e3(0x375)](_0xd0f8d,_0xd0f8d);const _0x348f46=$gameTemp['getLastPluginCommandInterpreter']();_0xd0f8d[_0x35d3e3(0x2f8)]=_0xd0f8d['MapId']||$gameMap[_0x35d3e3(0x2c5)]();const _0x16aa6c=[_0xd0f8d['MapId'],_0xd0f8d[_0x35d3e3(0x2b8)]||_0x348f46[_0x35d3e3(0x236)](),'Self\x20Switch\x20%1'[_0x35d3e3(0x15f)](_0xd0f8d[_0x35d3e3(0x1e5)])],_0xf1988c=_0xd0f8d['TargetSwitchId'],_0x1fd4ae=$gameSelfSwitches[_0x35d3e3(0xad)](_0x16aa6c)||![];$gameSwitches[_0x35d3e3(0x289)](_0xf1988c,_0x1fd4ae);}),PluginManager['registerCommand'](pluginData[_0x47bd44(0x2b4)],_0x47bd44(0x207),_0x390e42=>{const _0x5c69ff=_0x47bd44;VisuMZ[_0x5c69ff(0x375)](_0x390e42,_0x390e42);const _0x505f4c=$gameTemp[_0x5c69ff(0xab)]();_0x390e42[_0x5c69ff(0x2f8)]=_0x390e42[_0x5c69ff(0x2f8)]||$gameMap[_0x5c69ff(0x2c5)]();const _0x39c593=[_0x390e42[_0x5c69ff(0x2f8)],_0x390e42[_0x5c69ff(0x2b8)]||_0x505f4c[_0x5c69ff(0x236)](),_0x5c69ff(0x326)[_0x5c69ff(0x15f)](_0x390e42['VariableId'])],_0x9e73ef=_0x390e42[_0x5c69ff(0x1ce)],_0x46e3d6=$gameSelfSwitches[_0x5c69ff(0xad)](_0x39c593)||![];$gameVariables['setValue'](_0x9e73ef,_0x46e3d6);}),PluginManager[_0x47bd44(0x551)](pluginData['name'],'MorphEventTo',_0x32a8f5=>{const _0x4a18b7=_0x47bd44;VisuMZ[_0x4a18b7(0x375)](_0x32a8f5,_0x32a8f5);if(!$gameMap)return;const _0x2e19b9=$gameTemp['getLastPluginCommandInterpreter'](),_0x463fe5=_0x32a8f5['Step2Preserve'];_0x32a8f5[_0x4a18b7(0x269)]=_0x32a8f5[_0x4a18b7(0x269)]||$gameMap[_0x4a18b7(0x2c5)](),_0x32a8f5[_0x4a18b7(0x241)]=_0x32a8f5[_0x4a18b7(0x241)]||$gameMap[_0x4a18b7(0x2c5)](),_0x32a8f5[_0x4a18b7(0x377)]=_0x32a8f5['TemplateName'][_0x4a18b7(0x474)]()[_0x4a18b7(0x271)]();if(!_0x463fe5&&_0x32a8f5['Step1MapId']!==$gameMap[_0x4a18b7(0x2c5)]())return;if($gameMap[_0x4a18b7(0x2c5)]()===_0x32a8f5[_0x4a18b7(0x269)]){const _0x258aa=$gameMap[_0x4a18b7(0xf1)](_0x32a8f5[_0x4a18b7(0x4a2)]||_0x2e19b9[_0x4a18b7(0x236)]());if(!_0x258aa)return;_0x32a8f5['TemplateName']!==_0x4a18b7(0x4af)?_0x258aa[_0x4a18b7(0x3ad)](_0x32a8f5[_0x4a18b7(0x377)]):_0x258aa['morphInto'](_0x32a8f5[_0x4a18b7(0x241)],_0x32a8f5[_0x4a18b7(0x3f8)]||_0x2e19b9['eventId']());}_0x463fe5&&$gameSystem[_0x4a18b7(0x305)](_0x32a8f5[_0x4a18b7(0x269)],_0x32a8f5[_0x4a18b7(0x4a2)],_0x32a8f5['TemplateName'],_0x32a8f5[_0x4a18b7(0x241)],_0x32a8f5[_0x4a18b7(0x3f8)]);}),PluginManager[_0x47bd44(0x551)](pluginData[_0x47bd44(0x2b4)],'MorphEventRemove',_0x45cf81=>{const _0x25c403=_0x47bd44;VisuMZ[_0x25c403(0x375)](_0x45cf81,_0x45cf81);if(!$gameMap)return;const _0x4dec60=$gameTemp[_0x25c403(0xab)]();_0x45cf81[_0x25c403(0x2f8)]=_0x45cf81[_0x25c403(0x2f8)]||$gameMap[_0x25c403(0x2c5)]();if($gameMap['mapId']()===_0x45cf81[_0x25c403(0x2f8)]){const _0xb501d1=$gameMap[_0x25c403(0xf1)](_0x45cf81[_0x25c403(0x2b8)]||_0x4dec60[_0x25c403(0x236)]());_0xb501d1[_0x25c403(0x130)]();}_0x45cf81['RemovePreserve']&&$gameSystem[_0x25c403(0x343)](_0x45cf81[_0x25c403(0x2f8)],_0x45cf81[_0x25c403(0x2b8)]||_0x4dec60[_0x25c403(0x236)]());}),PluginManager[_0x47bd44(0x551)](pluginData['name'],_0x47bd44(0x49e),_0x14593c=>{const _0x4108cb=_0x47bd44;VisuMZ[_0x4108cb(0x375)](_0x14593c,_0x14593c),$gameSystem[_0x4108cb(0x4e8)]($gamePlayer,_0x14593c['IconIndex'],_0x14593c[_0x4108cb(0x1fa)],_0x14593c['IconBufferY'],_0x14593c[_0x4108cb(0x1bc)]);}),PluginManager[_0x47bd44(0x551)](pluginData[_0x47bd44(0x2b4)],'PlayerIconDelete',_0x133f36=>{const _0xe68613=_0x47bd44;VisuMZ['ConvertParams'](_0x133f36,_0x133f36),$gameSystem[_0xe68613(0x17e)]($gamePlayer);}),PluginManager['registerCommand'](pluginData[_0x47bd44(0x2b4)],'PlayerMovementChange',_0x33b95c=>{const _0xecfffe=_0x47bd44;VisuMZ[_0xecfffe(0x375)](_0x33b95c,_0x33b95c),$gameSystem['setPlayerControlDisable'](!_0x33b95c['Enable']);}),PluginManager[_0x47bd44(0x551)](pluginData[_0x47bd44(0x2b4)],_0x47bd44(0x3d1),_0x3bf9eb=>{const _0x616629=_0x47bd44;VisuMZ['ConvertParams'](_0x3bf9eb,_0x3bf9eb),$gameSystem[_0x616629(0x27d)](_0x3bf9eb[_0x616629(0x248)]);}),PluginManager['registerCommand'](pluginData['name'],_0x47bd44(0x274),_0x409161=>{const _0x36ad65=_0x47bd44;VisuMZ['ConvertParams'](_0x409161,_0x409161);const _0x5581fa=_0x409161[_0x36ad65(0x2f8)]||$gameMap[_0x36ad65(0x2c5)]();$gameSelfSwitches['resetSelfSwitchesForMap'](_0x5581fa);}),PluginManager[_0x47bd44(0x551)](pluginData[_0x47bd44(0x2b4)],_0x47bd44(0x414),_0x1a5068=>{const _0x54f298=_0x47bd44;VisuMZ['ConvertParams'](_0x1a5068,_0x1a5068);const _0x21c4c8=$gameTemp[_0x54f298(0xab)]();_0x1a5068['MapId']=_0x1a5068['MapId']||$gameMap[_0x54f298(0x2c5)]();const _0x53d746=[_0x1a5068[_0x54f298(0x2f8)],_0x1a5068[_0x54f298(0x2b8)]||_0x21c4c8[_0x54f298(0x236)](),_0x1a5068[_0x54f298(0x100)]];switch(_0x1a5068[_0x54f298(0x2e3)]){case'ON':$gameSelfSwitches['setValue'](_0x53d746,!![]);break;case'OFF':$gameSelfSwitches[_0x54f298(0x289)](_0x53d746,![]);break;case _0x54f298(0x37b):$gameSelfSwitches['setValue'](_0x53d746,!$gameSelfSwitches[_0x54f298(0xad)](_0x53d746));break;}}),PluginManager[_0x47bd44(0x551)](pluginData[_0x47bd44(0x2b4)],'SelfSwitchID',_0x14bd9a=>{const _0x1147f1=_0x47bd44;VisuMZ[_0x1147f1(0x375)](_0x14bd9a,_0x14bd9a);const _0x1dc110=$gameTemp[_0x1147f1(0xab)]();_0x14bd9a[_0x1147f1(0x2f8)]=_0x14bd9a[_0x1147f1(0x2f8)]||$gameMap[_0x1147f1(0x2c5)]();const _0x792471=[_0x14bd9a[_0x1147f1(0x2f8)],_0x14bd9a['EventId']||_0x1dc110[_0x1147f1(0x236)](),_0x1147f1(0xcd)[_0x1147f1(0x15f)](_0x14bd9a['SwitchId'])];switch(_0x14bd9a[_0x1147f1(0x2e3)]){case'ON':$gameSelfSwitches[_0x1147f1(0x289)](_0x792471,!![]);break;case'OFF':$gameSelfSwitches[_0x1147f1(0x289)](_0x792471,![]);break;case _0x1147f1(0x37b):$gameSelfSwitches[_0x1147f1(0x289)](_0x792471,!$gameSelfSwitches[_0x1147f1(0xad)](_0x792471));break;}}),PluginManager[_0x47bd44(0x551)](pluginData['name'],'SelfVariableID',_0x91c488=>{const _0x2d69ac=_0x47bd44;VisuMZ[_0x2d69ac(0x375)](_0x91c488,_0x91c488);const _0x3be47c=$gameTemp['getLastPluginCommandInterpreter']();_0x91c488[_0x2d69ac(0x2f8)]=_0x91c488[_0x2d69ac(0x2f8)]||$gameMap['mapId']();const _0x2f480c=[_0x91c488['MapId'],_0x91c488['EventId']||_0x3be47c['eventId'](),_0x2d69ac(0x326)[_0x2d69ac(0x15f)](_0x91c488[_0x2d69ac(0x1f0)])],_0x41ed44=VisuMZ[_0x2d69ac(0x232)]($gameSelfSwitches[_0x2d69ac(0xad)](_0x2f480c),_0x91c488[_0x2d69ac(0x2e3)],_0x91c488[_0x2d69ac(0x1ac)]);$gameSelfSwitches[_0x2d69ac(0x289)](_0x2f480c,_0x41ed44);}),PluginManager[_0x47bd44(0x551)](pluginData[_0x47bd44(0x2b4)],_0x47bd44(0x126),_0x2c38fd=>{$gamePlayer['_noMovementShadow']=!![];}),PluginManager[_0x47bd44(0x551)](pluginData[_0x47bd44(0x2b4)],_0x47bd44(0x2d1),_0x2aa081=>{const _0x3275b0=_0x47bd44;$gamePlayer[_0x3275b0(0x1c3)]=!![];}),PluginManager[_0x47bd44(0x551)](pluginData[_0x47bd44(0x2b4)],_0x47bd44(0x17f),_0x436a40=>{const _0x2f97fe=_0x47bd44;$gamePlayer[_0x2f97fe(0x181)]=!![];}),PluginManager['registerCommand'](pluginData[_0x47bd44(0x2b4)],_0x47bd44(0x104),_0x4cc77f=>{const _0x3f8778=_0x47bd44;$gamePlayer[_0x3f8778(0x3cd)]=![];}),PluginManager['registerCommand'](pluginData['name'],_0x47bd44(0x166),_0x1db794=>{const _0x3589f7=_0x47bd44;$gamePlayer[_0x3589f7(0x1c3)]=![];}),PluginManager[_0x47bd44(0x551)](pluginData['name'],_0x47bd44(0xe5),_0x3343dc=>{const _0xb57802=_0x47bd44;$gamePlayer[_0xb57802(0x181)]=!![];}),PluginManager['registerCommand'](pluginData[_0x47bd44(0x2b4)],_0x47bd44(0x122),_0x164d56=>{const _0x1dad09=_0x47bd44;VisuMZ[_0x1dad09(0x375)](_0x164d56,_0x164d56);const _0x35d090=$gameTemp[_0x1dad09(0xab)](),_0x158c73={'template':_0x164d56[_0x1dad09(0x377)],'mapId':_0x164d56['MapId']||$gameMap['mapId'](),'eventId':_0x164d56[_0x1dad09(0x2b8)]||_0x35d090[_0x1dad09(0x236)](),'x':_0x164d56['PosX'],'y':_0x164d56[_0x1dad09(0x276)],'spawnPreserved':_0x164d56['Preserve'],'spawnEventId':$gameMap[_0x1dad09(0x483)][_0x1dad09(0x30c)]+0x3e8},_0x1628de=_0x164d56[_0x1dad09(0x3be)]||0x0;if(!VisuMZ['PreloadedMaps'][_0x158c73[_0x1dad09(0x2c5)]]&&_0x158c73['mapId']!==$gameMap[_0x1dad09(0x2c5)]()){let _0x9b4d4d='You\x20do\x20not\x20have\x20Map\x20%1\x20added\x20to\x20the\x20list\x0a'[_0x1dad09(0x15f)](_0x158c73['mapId']);_0x9b4d4d+=_0x1dad09(0x121),_0x9b4d4d+=_0x1dad09(0x477),_0x9b4d4d+=_0x1dad09(0x2c6),_0x9b4d4d+=_0x1dad09(0x4d7)[_0x1dad09(0x15f)](_0x158c73['mapId']),alert(_0x9b4d4d);return;}const _0x39e89f=$gameMap[_0x1dad09(0x231)](_0x158c73,_0x164d56['Collision'],_0x164d56[_0x1dad09(0x312)]);_0x1628de&&$gameSwitches['setValue'](_0x1628de,!!_0x39e89f);}),PluginManager[_0x47bd44(0x551)](pluginData[_0x47bd44(0x2b4)],_0x47bd44(0x237),_0xdb13fe=>{const _0x2585b5=_0x47bd44;VisuMZ[_0x2585b5(0x375)](_0xdb13fe,_0xdb13fe);const _0x2c6e1a=$gameTemp['getLastPluginCommandInterpreter'](),_0x33e291={'template':_0xdb13fe[_0x2585b5(0x377)],'mapId':_0xdb13fe[_0x2585b5(0x2f8)]||$gameMap[_0x2585b5(0x2c5)](),'eventId':_0xdb13fe[_0x2585b5(0x2b8)]||_0x2c6e1a[_0x2585b5(0x236)](),'x':-0x1,'y':-0x1,'spawnPreserved':_0xdb13fe[_0x2585b5(0xeb)],'spawnEventId':$gameMap[_0x2585b5(0x483)]['length']+0x3e8},_0x1ba150=_0xdb13fe[_0x2585b5(0x3be)]||0x0;if(!VisuMZ[_0x2585b5(0x3eb)][_0x33e291[_0x2585b5(0x2c5)]]&&_0x33e291[_0x2585b5(0x2c5)]!==$gameMap[_0x2585b5(0x2c5)]()){let _0x19b2b1=_0x2585b5(0x41e)[_0x2585b5(0x15f)](_0x33e291[_0x2585b5(0x2c5)]);_0x19b2b1+=_0x2585b5(0x121),_0x19b2b1+=_0x2585b5(0x477),_0x19b2b1+=_0x2585b5(0x2c6),_0x19b2b1+=_0x2585b5(0x4d7)[_0x2585b5(0x15f)](_0x33e291[_0x2585b5(0x2c5)]),alert(_0x19b2b1);return;}const _0x839d18=$gameMap['prepareSpawnedEventAtRegion'](_0x33e291,_0xdb13fe[_0x2585b5(0x352)],_0xdb13fe['Collision'],_0xdb13fe[_0x2585b5(0x312)]);_0x1ba150&&$gameSwitches[_0x2585b5(0x289)](_0x1ba150,!!_0x839d18);}),PluginManager[_0x47bd44(0x551)](pluginData[_0x47bd44(0x2b4)],'SpawnEventAtTerrainTag',_0xa8955=>{const _0x2feb71=_0x47bd44;VisuMZ[_0x2feb71(0x375)](_0xa8955,_0xa8955);const _0x5a147f=$gameTemp['getLastPluginCommandInterpreter'](),_0x532af1={'template':_0xa8955[_0x2feb71(0x377)],'mapId':_0xa8955[_0x2feb71(0x2f8)]||$gameMap['mapId'](),'eventId':_0xa8955[_0x2feb71(0x2b8)]||_0x5a147f['eventId'](),'x':-0x1,'y':-0x1,'spawnPreserved':_0xa8955[_0x2feb71(0xeb)],'spawnEventId':$gameMap[_0x2feb71(0x483)][_0x2feb71(0x30c)]+0x3e8},_0x1bf381=_0xa8955['SuccessSwitchId']||0x0;if(!VisuMZ[_0x2feb71(0x3eb)][_0x532af1['mapId']]&&_0x532af1[_0x2feb71(0x2c5)]!==$gameMap[_0x2feb71(0x2c5)]()){let _0x4786d9='You\x20do\x20not\x20have\x20Map\x20%1\x20added\x20to\x20the\x20list\x0a'[_0x2feb71(0x15f)](_0x532af1[_0x2feb71(0x2c5)]);_0x4786d9+=_0x2feb71(0x121),_0x4786d9+=_0x2feb71(0x477),_0x4786d9+=_0x2feb71(0x2c6),_0x4786d9+=_0x2feb71(0x4d7)['format'](_0x532af1[_0x2feb71(0x2c5)]),alert(_0x4786d9);return;}const _0x3ffad9=$gameMap['prepareSpawnedEventAtTerrainTag'](_0x532af1,_0xa8955[_0x2feb71(0x167)],_0xa8955['Collision'],_0xa8955[_0x2feb71(0x312)]);_0x1bf381&&$gameSwitches[_0x2feb71(0x289)](_0x1bf381,!!_0x3ffad9);}),PluginManager['registerCommand'](pluginData[_0x47bd44(0x2b4)],_0x47bd44(0x509),_0x2cc5ac=>{const _0x497dc0=_0x47bd44;VisuMZ[_0x497dc0(0x375)](_0x2cc5ac,_0x2cc5ac);const _0x337378=$gameTemp['getLastPluginCommandInterpreter']();$gameMap[_0x497dc0(0x447)](_0x2cc5ac[_0x497dc0(0x2d3)]||_0x337378[_0x497dc0(0x236)]());}),PluginManager[_0x47bd44(0x551)](pluginData[_0x47bd44(0x2b4)],_0x47bd44(0x203),_0x251cc2=>{const _0x3db2b3=_0x47bd44;VisuMZ[_0x3db2b3(0x375)](_0x251cc2,_0x251cc2);const _0x68a275=_0x251cc2['PosX'],_0x29e23b=_0x251cc2[_0x3db2b3(0x276)];$gameMap[_0x3db2b3(0x573)](_0x68a275,_0x29e23b);}),PluginManager[_0x47bd44(0x551)](pluginData['name'],'SpawnEventDespawnRegions',_0x4e9649=>{const _0x46b35e=_0x47bd44;VisuMZ[_0x46b35e(0x375)](_0x4e9649,_0x4e9649),$gameMap[_0x46b35e(0x543)](_0x4e9649[_0x46b35e(0x352)]);}),PluginManager[_0x47bd44(0x551)](pluginData[_0x47bd44(0x2b4)],_0x47bd44(0x38c),_0x1f740e=>{const _0xff620b=_0x47bd44;VisuMZ[_0xff620b(0x375)](_0x1f740e,_0x1f740e),$gameMap[_0xff620b(0x49f)](_0x1f740e[_0xff620b(0x167)]);}),PluginManager[_0x47bd44(0x551)](pluginData[_0x47bd44(0x2b4)],_0x47bd44(0x579),_0x3ef9c2=>{const _0x545b51=_0x47bd44;VisuMZ[_0x545b51(0x375)](_0x3ef9c2,_0x3ef9c2),$gameMap[_0x545b51(0x2ce)]();}),VisuMZ[_0x47bd44(0x25c)][_0x47bd44(0x275)]=Scene_Boot[_0x47bd44(0xc5)][_0x47bd44(0x16e)],Scene_Boot['prototype'][_0x47bd44(0x16e)]=function(){const _0xd17c4=_0x47bd44;VisuMZ[_0xd17c4(0x25c)][_0xd17c4(0x275)][_0xd17c4(0x34a)](this),this[_0xd17c4(0x4c1)](),this[_0xd17c4(0x278)]();if(VisuMZ[_0xd17c4(0x25c)][_0xd17c4(0x534)])VisuMZ[_0xd17c4(0x25c)]['CustomPageConditions']['initialize']();},VisuMZ[_0x47bd44(0x3eb)]=[],VisuMZ[_0x47bd44(0x505)]={},Scene_Boot[_0x47bd44(0xc5)][_0x47bd44(0x4c1)]=function(){const _0x2e2aa6=_0x47bd44;if(DataManager[_0x2e2aa6(0x32c)]()||DataManager['isEventTest']())return;const _0x39f670=VisuMZ['EventsMoveCore'][_0x2e2aa6(0x2d0)]['Template'],_0x3ff651=_0x39f670['PreloadMaps'][_0x2e2aa6(0xb2)](0x0);for(const _0x257e95 of _0x39f670[_0x2e2aa6(0x4b1)]){_0x257e95[_0x2e2aa6(0x2ca)]=_0x257e95['Name'][_0x2e2aa6(0x474)]()[_0x2e2aa6(0x271)](),VisuMZ[_0x2e2aa6(0x505)][_0x257e95[_0x2e2aa6(0x2ca)]]=_0x257e95;if(!_0x3ff651['includes'](_0x257e95[_0x2e2aa6(0x406)]))_0x3ff651['push'](_0x257e95[_0x2e2aa6(0x406)]);}for(const _0x5c4160 of _0x3ff651){if(VisuMZ[_0x2e2aa6(0x3eb)][_0x5c4160])continue;const _0x10d8f0=_0x2e2aa6(0x332)['format'](_0x5c4160[_0x2e2aa6(0x309)](0x3)),_0x59007f=_0x2e2aa6(0x301)[_0x2e2aa6(0x15f)](_0x5c4160);DataManager['loadDataFile'](_0x59007f,_0x10d8f0),setTimeout(this['VisuMZ_Setup_Preload_Map'][_0x2e2aa6(0x16d)](this,_0x5c4160,_0x59007f),0x64);}},Scene_Boot[_0x47bd44(0xc5)][_0x47bd44(0x2e6)]=function(_0xdd439d,_0x58b1ea){const _0x4096df=_0x47bd44;window[_0x58b1ea]?(VisuMZ[_0x4096df(0x3eb)][_0xdd439d]=window[_0x58b1ea],window[_0x58b1ea]=undefined):setTimeout(this[_0x4096df(0x2e6)][_0x4096df(0x16d)](this,_0xdd439d,_0x58b1ea),0x64);},VisuMZ[_0x47bd44(0x2c7)]=[],VisuMZ[_0x47bd44(0x1c7)]=[],VisuMZ['MapSwitches']=[],VisuMZ[_0x47bd44(0x495)]={},VisuMZ[_0x47bd44(0x291)]=[],VisuMZ[_0x47bd44(0x272)]=[],VisuMZ[_0x47bd44(0x3f7)]=[],VisuMZ[_0x47bd44(0x11c)]={},Scene_Boot[_0x47bd44(0xc5)][_0x47bd44(0x278)]=function(){const _0x21410a=_0x47bd44;for(let _0x3d01cf=0x1;_0x3d01cf<$dataSystem[_0x21410a(0x33c)]['length'];_0x3d01cf++){if($dataSystem[_0x21410a(0x33c)][_0x3d01cf][_0x21410a(0x153)](/<JS>\s*([\s\S]*)\s*<\/JS>/i))VisuMZ['AdvancedSwitches'][_0x21410a(0x1c5)](_0x3d01cf);if($dataSystem['switches'][_0x3d01cf][_0x21410a(0x153)](/<SELF>/i))VisuMZ[_0x21410a(0x1c7)][_0x21410a(0x1c5)](_0x3d01cf);if($dataSystem['switches'][_0x3d01cf][_0x21410a(0x153)](/<MAP>/i))VisuMZ[_0x21410a(0x2e2)]['push'](_0x3d01cf);if($dataSystem[_0x21410a(0x33c)][_0x3d01cf]['match'](/\(\((.*)\)\)/i)){const _0xf2e358=String(RegExp['$1'])['toUpperCase']()[_0x21410a(0x271)]();VisuMZ['RefSwitches'][_0xf2e358]=_0x3d01cf;}else{if($dataSystem[_0x21410a(0x33c)][_0x3d01cf][_0x21410a(0x153)](/\（\（(.*)\）\）/i)){const _0x49c2a3=String(RegExp['$1'])[_0x21410a(0x474)]()[_0x21410a(0x271)]();VisuMZ[_0x21410a(0x495)][_0x49c2a3]=_0x3d01cf;}}}for(let _0x507808=0x1;_0x507808<$dataSystem[_0x21410a(0x19e)][_0x21410a(0x30c)];_0x507808++){if($dataSystem['variables'][_0x507808]['match'](/<JS>\s*([\s\S]*)\s*<\/JS>/i))VisuMZ[_0x21410a(0x291)][_0x21410a(0x1c5)](_0x507808);if($dataSystem[_0x21410a(0x19e)][_0x507808][_0x21410a(0x153)](/<SELF>/i))VisuMZ['SelfVariables'][_0x21410a(0x1c5)](_0x507808);if($dataSystem[_0x21410a(0x19e)][_0x507808]['match'](/<MAP>/i))VisuMZ[_0x21410a(0x3f7)][_0x21410a(0x1c5)](_0x507808);if($dataSystem['variables'][_0x507808][_0x21410a(0x153)](/\(\((.*)\)\)/i)){const _0x5e61f6=String(RegExp['$1'])[_0x21410a(0x474)]()['trim']();VisuMZ['RefVariables'][_0x5e61f6]=_0x507808;}else{if($dataSystem['variables'][_0x507808][_0x21410a(0x153)](/\（\（(.*)\）\）/i)){const _0x452a13=String(RegExp['$1'])[_0x21410a(0x474)]()['trim']();VisuMZ[_0x21410a(0x11c)][_0x452a13]=_0x507808;}}}},VisuMZ[_0x47bd44(0x25c)]['CustomPageConditions']={},VisuMZ['EventsMoveCore'][_0x47bd44(0x534)]['initialize']=function(){const _0x3776e5=_0x47bd44;this['_interpreter']=new Game_CPCInterpreter(),this[_0x3776e5(0x4e7)]();},VisuMZ[_0x47bd44(0x25c)][_0x47bd44(0x534)]['determineCommonEventsWithCPC']=function(){const _0x3b7824=_0x47bd44;this[_0x3b7824(0x303)]=[];for(const _0x40aaa9 of $dataCommonEvents){if(!_0x40aaa9)continue;VisuMZ[_0x3b7824(0x25c)][_0x3b7824(0x534)][_0x3b7824(0x200)](_0x40aaa9);if(_0x40aaa9[_0x3b7824(0x2da)][_0x3b7824(0x30c)]>0x0)this[_0x3b7824(0x303)][_0x3b7824(0x1c5)](_0x40aaa9['id']);}},VisuMZ[_0x47bd44(0x25c)]['CustomPageConditions'][_0x47bd44(0x4bc)]=function(_0xe3450f,_0x5efadd,_0x452d46){const _0x383fc0=_0x47bd44;return this[_0x383fc0(0x14e)][_0x383fc0(0x3fb)](_0xe3450f,_0x5efadd),_0x452d46?this['_interpreter'][_0x383fc0(0x215)](_0x452d46):this[_0x383fc0(0x14e)]['execute'](),this['_interpreter']['_cpc'];},VisuMZ[_0x47bd44(0x25c)][_0x47bd44(0x534)]['loadCPC']=function(_0x17e5c3){const _0x312c6a=_0x47bd44;let _0x592458=![];_0x17e5c3['CPC']=[];for(const _0x509c01 of _0x17e5c3[_0x312c6a(0x3b1)]){if([0x6c,0x198][_0x312c6a(0x3ae)](_0x509c01[_0x312c6a(0x170)])){const _0x157eef=_0x509c01[_0x312c6a(0x2dd)][0x0];if(_0x157eef[_0x312c6a(0x153)](/<PAGE (?:CONDITION|CONDITIONS)>/i))_0x592458=!![];else _0x157eef[_0x312c6a(0x153)](/<\/PAGE (?:CONDITION|CONDITIONS)>/i)&&(_0x592458=![]);}_0x592458&&_0x17e5c3[_0x312c6a(0x2da)][_0x312c6a(0x1c5)](_0x509c01);}},getSelfSwitchValue=function(_0x447326,_0x4f7f7c,_0x3a225d){const _0x3390ba=_0x47bd44;let _0x46d201=[_0x447326,_0x4f7f7c,_0x3390ba(0xcd)['format'](_0x3a225d)];return typeof _0x3a225d==='string'&&(_0x46d201=[_0x447326,_0x4f7f7c,_0x3a225d['toUpperCase']()[_0x3390ba(0x271)]()]),$gameSelfSwitches[_0x3390ba(0xad)](_0x46d201);},getMapSwitchValue=function(_0x2df023,_0x3dcd49){const _0x3d6124=_0x47bd44;let _0x498dd4=[0x0,0x0,_0x3d6124(0x268)['format'](_0x2df023,_0x3dcd49)];return $gameSelfSwitches[_0x3d6124(0xad)](_0x498dd4);},getMapVariableValue=function(_0x1f4503,_0x342de9){const _0x25eabf=_0x47bd44;let _0x20ab4e=[0x0,0x0,_0x25eabf(0x409)[_0x25eabf(0x15f)](_0x1f4503,_0x342de9)];return $gameSelfSwitches[_0x25eabf(0xad)](_0x20ab4e);},getSelfVariableValue=function(_0x54ffd5,_0xf82c3f,_0x6bbfcd){const _0xcb183b=[_0x54ffd5,_0xf82c3f,'Self\x20Variable\x20%1'['format'](_0x6bbfcd)];return $gameSelfSwitches['value'](_0xcb183b);},setSelfSwitchValue=function(_0x3d1404,_0x1ac1d2,_0x39a379,_0x3af672){const _0x4e1b6f=_0x47bd44;let _0x199053=[_0x3d1404,_0x1ac1d2,_0x4e1b6f(0xcd)['format'](_0x39a379)];typeof _0x39a379===_0x4e1b6f(0x2ad)&&(_0x199053=[_0x3d1404,_0x1ac1d2,_0x39a379[_0x4e1b6f(0x474)]()[_0x4e1b6f(0x271)]()]),$gameSelfSwitches[_0x4e1b6f(0x289)](_0x199053,_0x3af672);},setSelfVariableValue=function(_0x46b731,_0x8feb18,_0x12cd1b,_0x4255b4){const _0x21fbbf=_0x47bd44,_0x3763d0=[_0x46b731,_0x8feb18,'Self\x20Variable\x20%1'[_0x21fbbf(0x15f)](_0x12cd1b)];$gameSelfSwitches[_0x21fbbf(0x289)](_0x3763d0,_0x4255b4);},setMapSwitchValue=function(_0x1b4f6d,_0x4905f0,_0x2e6d0c){const _0x182f8e=_0x47bd44;let _0x174d7d=[0x0,0x0,_0x182f8e(0x268)[_0x182f8e(0x15f)](_0x1b4f6d,_0x4905f0)];$gameSelfSwitches[_0x182f8e(0x289)](_0x174d7d,_0x2e6d0c);},setMapVariableValue=function(_0x263f84,_0x571b69,_0x81abe3){const _0x5907d7=_0x47bd44;let _0x6829f=[0x0,0x0,_0x5907d7(0x409)['format'](_0x263f84,_0x571b69)];$gameSelfSwitches[_0x5907d7(0x289)](_0x6829f,_0x81abe3);},DataManager[_0x47bd44(0x2de)]=function(_0x37886a){const _0xffd240=_0x47bd44;if(SceneManager[_0xffd240(0x45e)][_0xffd240(0x507)]===Scene_Debug)return![];return VisuMZ[_0xffd240(0x2c7)][_0xffd240(0x3ae)](_0x37886a);},DataManager[_0x47bd44(0x12e)]=function(_0x3c2135){const _0x4e8e20=_0x47bd44;if(SceneManager['_scene'][_0x4e8e20(0x507)]===Scene_Debug)return![];return VisuMZ[_0x4e8e20(0x291)][_0x4e8e20(0x3ae)](_0x3c2135);},DataManager['isSelfSwitch']=function(_0xcbdd5c){const _0x3e18ca=_0x47bd44;if(SceneManager[_0x3e18ca(0x45e)][_0x3e18ca(0x507)]===Scene_Debug)return![];return VisuMZ[_0x3e18ca(0x1c7)][_0x3e18ca(0x3ae)](_0xcbdd5c);},DataManager['isSelfVariable']=function(_0x329b97){const _0x1c7b1c=_0x47bd44;if(SceneManager['_scene'][_0x1c7b1c(0x507)]===Scene_Debug)return![];return VisuMZ['SelfVariables'][_0x1c7b1c(0x3ae)](_0x329b97);},DataManager[_0x47bd44(0x23e)]=function(_0x54e0b8){const _0x2b3475=_0x47bd44;if(BattleManager[_0x2b3475(0x32c)]())return![];return VisuMZ['MapSwitches'][_0x2b3475(0x3ae)](_0x54e0b8);},DataManager[_0x47bd44(0x172)]=function(_0x119ad7){const _0x340887=_0x47bd44;if(BattleManager[_0x340887(0x32c)]())return![];return VisuMZ[_0x340887(0x3f7)]['includes'](_0x119ad7);},ImageManager[_0x47bd44(0x2f0)]=function(_0x325b2c){return _0x325b2c['match'](/\[INV(?:|ISIBLE)\]/i);},SceneManager[_0x47bd44(0x4db)]=function(){const _0x4974c7=_0x47bd44;return this[_0x4974c7(0x45e)]&&this[_0x4974c7(0x45e)]['constructor']===Scene_Map;},SceneManager[_0x47bd44(0x1f9)]=function(){const _0xa9878e=_0x47bd44;return this['_scene']&&this[_0xa9878e(0x45e)]instanceof Scene_Map;},VisuMZ[_0x47bd44(0x25c)][_0x47bd44(0xf0)]=Game_Temp[_0x47bd44(0xc5)][_0x47bd44(0x498)],Game_Temp[_0x47bd44(0xc5)][_0x47bd44(0x498)]=function(_0x18627d,_0x59c5cb){const _0x390ba3=_0x47bd44;if(this[_0x390ba3(0x424)](_0x18627d,_0x59c5cb))return;VisuMZ[_0x390ba3(0x25c)][_0x390ba3(0xf0)][_0x390ba3(0x34a)](this,_0x18627d,_0x59c5cb);},Game_Temp[_0x47bd44(0xc5)][_0x47bd44(0x424)]=function(_0x3da764,_0x1d9b27){const _0x1fc4c7=_0x47bd44,_0x488580=$gameMap[_0x1fc4c7(0x3a7)](_0x3da764,_0x1d9b27);for(const _0x3adf31 of _0x488580){if(_0x3adf31&&_0x3adf31[_0x1fc4c7(0x511)]())return _0x3adf31['onClickTrigger'](),!![];}return TouchInput[_0x1fc4c7(0x20a)]()&&_0x488580[_0x1fc4c7(0x30c)]>0x0&&TouchInput[_0x1fc4c7(0x4ff)](),![];},Game_Temp[_0x47bd44(0xc5)][_0x47bd44(0x2f6)]=function(_0x13496f){const _0x288af4=_0x47bd44;this[_0x288af4(0x56d)]=_0x13496f;},Game_Temp[_0x47bd44(0xc5)][_0x47bd44(0xab)]=function(){return this['_lastPluginCommandInterpreter'];},Game_Temp['prototype'][_0x47bd44(0x3e8)]=function(_0x3c6201){const _0x181df3=_0x47bd44;this[_0x181df3(0x46b)]=_0x3c6201;},Game_Temp['prototype']['clearSelfTarget']=function(){this['_selfTarget']=undefined;},Game_Temp[_0x47bd44(0xc5)][_0x47bd44(0x3df)]=function(){const _0x565dad=_0x47bd44;return this[_0x565dad(0x46b)];},VisuMZ[_0x47bd44(0x25c)][_0x47bd44(0x387)]=Game_System['prototype']['initialize'],Game_System[_0x47bd44(0xc5)][_0x47bd44(0x148)]=function(){const _0x4f0d55=_0x47bd44;VisuMZ['EventsMoveCore'][_0x4f0d55(0x387)]['call'](this),this['initEventsMoveCore'](),this[_0x4f0d55(0x4d5)]();},Game_System['prototype'][_0x47bd44(0x51d)]=function(){const _0x852b32=_0x47bd44;this[_0x852b32(0x3f6)]={'DashingEnable':!![],'EventAutoMovement':!![],'VisibleEventLabels':!![]},this[_0x852b32(0x1c1)]={},this['_MapSpawnedEventData']=[],this[_0x852b32(0x4e0)]={},this[_0x852b32(0x277)]={},this[_0x852b32(0x448)]=![],this[_0x852b32(0x4cb)]=_0x852b32(0x160);},Game_System[_0x47bd44(0xc5)]['isDashingEnabled']=function(){const _0x349d60=_0x47bd44;if(this['_EventsMoveCoreSettings']===undefined)this['initEventsMoveCore']();if(this[_0x349d60(0x3f6)][_0x349d60(0x114)]===undefined)this[_0x349d60(0x51d)]();return this[_0x349d60(0x3f6)][_0x349d60(0x114)];},Game_System[_0x47bd44(0xc5)]['setDashingEnabled']=function(_0x2a9c37){const _0x131344=_0x47bd44;if(this[_0x131344(0x3f6)]===undefined)this[_0x131344(0x51d)]();if(this[_0x131344(0x3f6)][_0x131344(0x114)]===undefined)this[_0x131344(0x51d)]();this['_EventsMoveCoreSettings'][_0x131344(0x114)]=_0x2a9c37;},Game_System[_0x47bd44(0xc5)][_0x47bd44(0xa8)]=function(){const _0xafad2f=_0x47bd44;if(this[_0xafad2f(0x3f6)]===undefined)this['initEventsMoveCore']();if(this[_0xafad2f(0x3f6)]['EventAutoMovement']===undefined)this['initEventsMoveCore']();return this[_0xafad2f(0x3f6)]['EventAutoMovement'];},Game_System[_0x47bd44(0xc5)][_0x47bd44(0x37c)]=function(_0x4853b7){const _0x255db7=_0x47bd44;if(this['_EventsMoveCoreSettings']===undefined)this[_0x255db7(0x51d)]();if(this[_0x255db7(0x3f6)][_0x255db7(0x550)]===undefined)this[_0x255db7(0x51d)]();this[_0x255db7(0x3f6)][_0x255db7(0x550)]=_0x4853b7;},Game_System[_0x47bd44(0xc5)]['eventLabelsVisible']=function(){const _0x3104d3=_0x47bd44;if(this[_0x3104d3(0x3f6)]===undefined)this[_0x3104d3(0x51d)]();if(this[_0x3104d3(0x3f6)][_0x3104d3(0x25a)]===undefined)this['initEventsMoveCore']();return this[_0x3104d3(0x3f6)]['VisibleEventLabels'];},Game_System[_0x47bd44(0xc5)]['setEventLabelsVisible']=function(_0x179c64){const _0x5e3166=_0x47bd44;if(this[_0x5e3166(0x3f6)]===undefined)this[_0x5e3166(0x51d)]();if(this['_EventsMoveCoreSettings']['VisibleEventLabels']===undefined)this[_0x5e3166(0x51d)]();this['_EventsMoveCoreSettings']['VisibleEventLabels']=_0x179c64;},Game_System[_0x47bd44(0xc5)][_0x47bd44(0x37d)]=function(){const _0x3e5372=_0x47bd44;return this[_0x3e5372(0x448)]===undefined&&(this[_0x3e5372(0x448)]=![]),this[_0x3e5372(0x448)];},Game_System[_0x47bd44(0xc5)]['setPlayerControlDisable']=function(_0x172e9f){const _0x5b02fb=_0x47bd44;this[_0x5b02fb(0x448)]=_0x172e9f;},Game_System[_0x47bd44(0xc5)][_0x47bd44(0x52a)]=function(){const _0x330fa9=_0x47bd44;return this[_0x330fa9(0x4cb)];},Game_System[_0x47bd44(0xc5)][_0x47bd44(0x27d)]=function(_0xe217c9){const _0x3a3c41=_0x47bd44;this[_0x3a3c41(0x4cb)]=String(_0xe217c9)[_0x3a3c41(0x2fd)]()[_0x3a3c41(0x271)]();},Game_System['prototype'][_0x47bd44(0x2bc)]=function(_0x439377){const _0x1e740f=_0x47bd44;if(this['_EventIcons']===undefined)this[_0x1e740f(0x51d)]();if(!_0x439377)return null;if(_0x439377===$gamePlayer)return this[_0x1e740f(0x1c1)][_0x1e740f(0x427)];else{const _0x321130=VisuMZ[_0x1e740f(0x25c)][_0x1e740f(0x2d0)],_0x44092f='Map%1-Event%2'[_0x1e740f(0x15f)](_0x439377['_mapId'],_0x439377['_eventId']);return this['_EventIcons'][_0x44092f]=this[_0x1e740f(0x1c1)][_0x44092f]||{'iconIndex':0x0,'bufferX':_0x321130[_0x1e740f(0x22c)][_0x1e740f(0x35d)],'bufferY':_0x321130[_0x1e740f(0x22c)][_0x1e740f(0x3ee)],'blendMode':_0x321130[_0x1e740f(0x22c)][_0x1e740f(0x1a3)]},this[_0x1e740f(0x1c1)][_0x44092f];}},Game_System['prototype']['setEventIconData']=function(_0x249e2b,_0x1bf4ec,_0x4f518b,_0x215e1e,_0x2a0d25){const _0x3c016f=_0x47bd44;if(this[_0x3c016f(0x1c1)]===undefined)this[_0x3c016f(0x51d)]();const _0x1dc397=_0x249e2b===$gamePlayer?_0x3c016f(0x427):_0x3c016f(0x54c)[_0x3c016f(0x15f)](_0x249e2b[_0x3c016f(0x55b)],_0x249e2b[_0x3c016f(0xd2)]);this[_0x3c016f(0x1c1)][_0x1dc397]={'iconIndex':_0x1bf4ec,'bufferX':_0x4f518b,'bufferY':_0x215e1e,'blendMode':_0x2a0d25};},Game_System[_0x47bd44(0xc5)][_0x47bd44(0x479)]=function(_0xc704fc,_0x3011de,_0x4ed5f7,_0x301f23,_0x239b92,_0x103c1e,_0x9ae3b5){const _0x46b017=_0x47bd44;if(this[_0x46b017(0x1c1)]===undefined)this[_0x46b017(0x51d)]();const _0x5bf100=_0x46b017(0x54c)['format'](_0xc704fc,_0x3011de);this[_0x46b017(0x1c1)][_0x5bf100]={'iconIndex':_0x4ed5f7,'forced':_0x9ae3b5,'bufferX':_0x301f23,'bufferY':_0x239b92,'blendMode':_0x103c1e};},Game_System[_0x47bd44(0xc5)]['deleteIconsOnEventsData']=function(_0x2cac7e){const _0x51833e=_0x47bd44;if(this['_EventIcons']===undefined)this[_0x51833e(0x51d)]();if(!_0x2cac7e)return null;_0x2cac7e===$gamePlayer?delete this[_0x51833e(0x1c1)]['Player']:this[_0x51833e(0x43f)](_0x2cac7e[_0x51833e(0x55b)],_0x2cac7e['_eventId']);},Game_System[_0x47bd44(0xc5)][_0x47bd44(0x43f)]=function(_0x57e121,_0x3f1535){const _0x6ca2b6=_0x47bd44;if(this['_EventIcons']===undefined)this[_0x6ca2b6(0x51d)]();this[_0x6ca2b6(0x479)](_0x57e121,_0x3f1535,-0x1,0x0,0x0,0x0,![]);},Game_System[_0x47bd44(0xc5)][_0x47bd44(0x23c)]=function(_0xdc0de7){const _0x205429=_0x47bd44;if(this[_0x205429(0x1c1)]===undefined)this[_0x205429(0x51d)]();if(!_0xdc0de7)return null;_0xdc0de7===$gamePlayer?delete this[_0x205429(0x1c1)][_0x205429(0x427)]:this[_0x205429(0x178)](_0xdc0de7[_0x205429(0x55b)],_0xdc0de7[_0x205429(0xd2)]);},Game_System['prototype'][_0x47bd44(0x178)]=function(_0x145e1d,_0x275fe0){const _0x435238=_0x47bd44;if(this['_EventIcons']===undefined)this[_0x435238(0x51d)]();const _0x407fa7=_0x435238(0x54c)[_0x435238(0x15f)](_0x145e1d,_0x275fe0);if(this['_EventIcons'][_0x407fa7]){if(this[_0x435238(0x1c1)][_0x407fa7][_0x435238(0xb8)]<0x0)return;if(this[_0x435238(0x1c1)][_0x407fa7][_0x435238(0x40c)])return;}delete this['_EventIcons'][_0x407fa7];},Game_System['prototype'][_0x47bd44(0x13c)]=function(_0x1b5fbc,_0x16d678){const _0x386f2e=_0x47bd44;if(this[_0x386f2e(0x1c1)]===undefined)this[_0x386f2e(0x51d)]();const _0x48eb9a=_0x386f2e(0x54c)[_0x386f2e(0x15f)](_0x1b5fbc,_0x16d678);delete this[_0x386f2e(0x1c1)][_0x48eb9a];if(_0x1b5fbc!==$gameMap[_0x386f2e(0x2c5)]())return;const _0x157834=$gameMap['event'](_0x16d678);if(!_0x157834)return;_0x157834[_0x386f2e(0x1ed)]();},Game_System[_0x47bd44(0xc5)][_0x47bd44(0x529)]=function(_0x1d41c2){const _0x24d68f=_0x47bd44;if(this[_0x24d68f(0x277)]===undefined)this[_0x24d68f(0x51d)]();if(!_0x1d41c2)return null;const _0x5ac2c3='Map%1-Event%2'[_0x24d68f(0x15f)](_0x1d41c2['_mapId'],_0x1d41c2[_0x24d68f(0xd2)]);return this[_0x24d68f(0x277)][_0x5ac2c3];},Game_System[_0x47bd44(0xc5)][_0x47bd44(0x48e)]=function(_0x4bbd5f){const _0x54784f=_0x47bd44;if(this[_0x54784f(0x277)]===undefined)this[_0x54784f(0x51d)]();if(!_0x4bbd5f)return;const _0x18e43f=_0x54784f(0x54c)['format'](_0x4bbd5f[_0x54784f(0x55b)],_0x4bbd5f['_eventId']);this[_0x54784f(0x277)][_0x18e43f]={'direction':_0x4bbd5f[_0x54784f(0x399)](),'x':Math[_0x54784f(0x2f4)](_0x4bbd5f['x']),'y':Math['round'](_0x4bbd5f['y']),'pageIndex':_0x4bbd5f[_0x54784f(0x310)],'moveRouteIndex':_0x4bbd5f[_0x54784f(0x4a1)]};},Game_System[_0x47bd44(0xc5)][_0x47bd44(0xc6)]=function(_0x1cb866){const _0xe3f9e3=_0x47bd44;if(this[_0xe3f9e3(0x277)]===undefined)this['initEventsMoveCore']();if(!_0x1cb866)return;this[_0xe3f9e3(0x2cd)](_0x1cb866[_0xe3f9e3(0x55b)],_0x1cb866['_eventId']);},Game_System[_0x47bd44(0xc5)][_0x47bd44(0x2cd)]=function(_0x3e5a56,_0x1c891a){const _0x30b930=_0x47bd44;if(this[_0x30b930(0x277)]===undefined)this[_0x30b930(0x51d)]();const _0x138044='Map%1-Event%2'[_0x30b930(0x15f)](_0x3e5a56,_0x1c891a);delete this[_0x30b930(0x277)][_0x138044];},Game_System['prototype'][_0x47bd44(0x36a)]=function(_0x49e839,_0x4732f7,_0x117d1d,_0x2797db,_0x3606d0,_0x1b8cf2,_0x5a8247){const _0x1695ac=_0x47bd44;if(this[_0x1695ac(0x277)]===undefined)this['initEventsMoveCore']();const _0x4c9611=_0x1695ac(0x54c)[_0x1695ac(0x15f)](_0x49e839,_0x4732f7);this[_0x1695ac(0x277)][_0x4c9611]={'direction':_0x3606d0,'x':Math[_0x1695ac(0x2f4)](_0x117d1d),'y':Math[_0x1695ac(0x2f4)](_0x2797db),'pageIndex':_0x1b8cf2,'moveRouteIndex':_0x5a8247};},Game_System[_0x47bd44(0xc5)][_0x47bd44(0x57f)]=function(_0x5cad45){const _0x532d01=_0x47bd44;if(this[_0x532d01(0x4e0)]===undefined)this[_0x532d01(0x51d)]();if(!_0x5cad45)return;const _0x3d2208='Map%1-Event%2'['format'](_0x5cad45[_0x532d01(0x55b)],_0x5cad45['_eventId']);return this['_PreservedEventMorphData'][_0x3d2208];},Game_System[_0x47bd44(0xc5)][_0x47bd44(0x305)]=function(_0x5e8364,_0x2057ca,_0xf6142b,_0x46c44b,_0x2b1ae0){const _0x17fad4=_0x47bd44;if(this[_0x17fad4(0x4e0)]===undefined)this[_0x17fad4(0x51d)]();const _0x448da6=_0x17fad4(0x54c)[_0x17fad4(0x15f)](_0x5e8364,_0x2057ca);this['_PreservedEventMorphData'][_0x448da6]={'template':_0xf6142b,'mapId':_0x46c44b,'eventId':_0x2b1ae0};},Game_System[_0x47bd44(0xc5)][_0x47bd44(0x343)]=function(_0x275991,_0x17714e){const _0x30e14b=_0x47bd44;if(this[_0x30e14b(0x4e0)]===undefined)this[_0x30e14b(0x51d)]();const _0x262aaa='Map%1-Event%2'[_0x30e14b(0x15f)](_0x275991,_0x17714e);delete this[_0x30e14b(0x4e0)][_0x262aaa];},Game_System[_0x47bd44(0xc5)][_0x47bd44(0x4fb)]=function(_0x145eeb){const _0x178607=_0x47bd44;if(this[_0x178607(0x191)]===undefined)this[_0x178607(0x51d)]();return this[_0x178607(0x191)][_0x145eeb]=this['_MapSpawnedEventData'][_0x145eeb]||[],this['_MapSpawnedEventData'][_0x145eeb];},Game_System[_0x47bd44(0xc5)][_0x47bd44(0x1b3)]=function(_0x66b1a6){const _0x559f67=_0x47bd44,_0x590b2e=this[_0x559f67(0x4fb)](_0x66b1a6);for(const _0x4b387c of _0x590b2e){if(!_0x4b387c)continue;if(_0x4b387c[_0x559f67(0x249)])continue;const _0x2438e7=_0x590b2e[_0x559f67(0x2bd)](_0x4b387c);_0x590b2e[_0x2438e7]=null;}},Game_System[_0x47bd44(0xc5)][_0x47bd44(0x4d5)]=function(){const _0x325e59=_0x47bd44;this[_0x325e59(0x4b3)]=0x0,this[_0x325e59(0x385)]=![];},Game_System[_0x47bd44(0xc5)][_0x47bd44(0x3c9)]=function(){const _0x1219d6=_0x47bd44;if(this[_0x1219d6(0x4b3)]===undefined)this[_0x1219d6(0x4d5)]();return this[_0x1219d6(0x4b3)];},Game_System[_0x47bd44(0xc5)][_0x47bd44(0x1e0)]=function(_0x1c0a00){const _0x43f82f=_0x47bd44;if(this['_followerControlID']===undefined)this[_0x43f82f(0x4d5)]();this[_0x43f82f(0x4b3)]=_0x1c0a00;;},VisuMZ[_0x47bd44(0x25c)][_0x47bd44(0x158)]=Game_Interpreter[_0x47bd44(0xc5)]['character'],Game_Interpreter[_0x47bd44(0xc5)][_0x47bd44(0x157)]=function(_0x5cda0d){const _0x235994=_0x47bd44;if(!$gameParty[_0x235994(0x365)]()&&_0x5cda0d<0x0){let _0x13b694=$gameSystem[_0x235994(0x3c9)]();if(_0x13b694>0x0)return $gamePlayer['followers']()['follower'](_0x13b694-0x1);}return VisuMZ[_0x235994(0x25c)][_0x235994(0x158)][_0x235994(0x34a)](this,_0x5cda0d);},Game_System[_0x47bd44(0xc5)]['isStopFollowerChasing']=function(){const _0x11d221=_0x47bd44;if(this[_0x11d221(0x385)]===undefined)this[_0x11d221(0x4d5)]();return this[_0x11d221(0x385)];},Game_System['prototype'][_0x47bd44(0x2d2)]=function(_0x586b04){const _0x109eb7=_0x47bd44;if(this[_0x109eb7(0x385)]===undefined)this['initFollowerController']();this[_0x109eb7(0x385)]=_0x586b04;;},VisuMZ[_0x47bd44(0x25c)][_0x47bd44(0x2eb)]=Game_Followers['prototype'][_0x47bd44(0x404)],Game_Followers[_0x47bd44(0xc5)][_0x47bd44(0x404)]=function(){const _0x4837b0=_0x47bd44;if($gameSystem[_0x4837b0(0x3dd)]())return;VisuMZ[_0x4837b0(0x25c)][_0x4837b0(0x2eb)][_0x4837b0(0x34a)](this);},VisuMZ['EventsMoveCore'][_0x47bd44(0x2cb)]=Game_Timer[_0x47bd44(0xc5)][_0x47bd44(0x148)],Game_Timer[_0x47bd44(0xc5)][_0x47bd44(0x148)]=function(){const _0x45ce7e=_0x47bd44;VisuMZ[_0x45ce7e(0x25c)][_0x45ce7e(0x2cb)]['call'](this),this[_0x45ce7e(0x51d)]();},Game_Timer[_0x47bd44(0xc5)][_0x47bd44(0x51d)]=function(){const _0x53f4bb=_0x47bd44;this[_0x53f4bb(0x522)]=![],this[_0x53f4bb(0x38d)]=-0x1,this[_0x53f4bb(0x28c)]=0x0;},Game_Timer[_0x47bd44(0xc5)][_0x47bd44(0x1a1)]=function(_0x2a05e0){const _0x454d8e=_0x47bd44;if(!_0x2a05e0)return;if(!this[_0x454d8e(0x460)])return;if(this[_0x454d8e(0x522)])return;if(this[_0x454d8e(0x288)]<=0x0)return;if(this[_0x454d8e(0x38d)]===undefined)this['initEventsMoveCore']();this['_frames']+=this['_speed'],this[_0x454d8e(0x288)]<=0x0&&this[_0x454d8e(0x1f6)]();},VisuMZ[_0x47bd44(0x25c)][_0x47bd44(0x1df)]=Game_Timer[_0x47bd44(0xc5)][_0x47bd44(0x22a)],Game_Timer[_0x47bd44(0xc5)][_0x47bd44(0x22a)]=function(_0x3b87db){const _0x4935ce=_0x47bd44;VisuMZ[_0x4935ce(0x25c)][_0x4935ce(0x1df)]['call'](this,_0x3b87db);if(this[_0x4935ce(0x522)]===undefined)this[_0x4935ce(0x51d)]();this['_paused']=![];},VisuMZ[_0x47bd44(0x25c)]['Game_Timer_stop']=Game_Timer[_0x47bd44(0xc5)]['stop'],Game_Timer[_0x47bd44(0xc5)][_0x47bd44(0x3ea)]=function(){const _0x19b228=_0x47bd44;VisuMZ[_0x19b228(0x25c)][_0x19b228(0x491)]['call'](this);if(this[_0x19b228(0x522)]===undefined)this[_0x19b228(0x51d)]();this[_0x19b228(0x522)]=![];},Game_Timer[_0x47bd44(0xc5)][_0x47bd44(0x266)]=function(){const _0x293a51=_0x47bd44;if(this[_0x293a51(0x288)]<=0x0)return;this[_0x293a51(0x522)]=!![],this[_0x293a51(0x460)]=!![];},Game_Timer['prototype'][_0x47bd44(0x21d)]=function(){const _0x1572e7=_0x47bd44;if(this[_0x1572e7(0x288)]<=0x0)return;this[_0x1572e7(0x522)]=![],this[_0x1572e7(0x460)]=!![];},Game_Timer[_0x47bd44(0xc5)][_0x47bd44(0x3e9)]=function(_0x3c7c7c){const _0x13157e=_0x47bd44;this[_0x13157e(0x288)]=this[_0x13157e(0x288)]||0x0,this[_0x13157e(0x288)]+=_0x3c7c7c,this['_working']=!![],this[_0x13157e(0x288)]=Math['max'](0x1,this[_0x13157e(0x288)]);},Game_Timer[_0x47bd44(0xc5)]['setFrames']=function(_0x13beff){const _0x3d7929=_0x47bd44;this[_0x3d7929(0x288)]=this[_0x3d7929(0x288)]||0x0,this[_0x3d7929(0x288)]=_0x13beff,this[_0x3d7929(0x460)]=!![],this[_0x3d7929(0x288)]=Math['max'](0x1,this[_0x3d7929(0x288)]);},Game_Timer[_0x47bd44(0xc5)][_0x47bd44(0x4a9)]=function(_0x5d2e0f){const _0x46661c=_0x47bd44;this[_0x46661c(0x38d)]=_0x5d2e0f,this[_0x46661c(0x460)]=!![],_0x5d2e0f>0x0&&(this[_0x46661c(0x288)]=Math[_0x46661c(0x3ab)](this[_0x46661c(0x288)],0x1));},Game_Timer['prototype'][_0x47bd44(0x13a)]=function(_0x623879){const _0x126a8d=_0x47bd44;if(this[_0x126a8d(0x28c)]===undefined)this[_0x126a8d(0x51d)]();this[_0x126a8d(0x28c)]=_0x623879;},VisuMZ[_0x47bd44(0x25c)][_0x47bd44(0x4f2)]=Game_Timer[_0x47bd44(0xc5)][_0x47bd44(0x1f6)],Game_Timer[_0x47bd44(0xc5)][_0x47bd44(0x1f6)]=function(){const _0x189b35=_0x47bd44;if(this[_0x189b35(0x28c)]===undefined)this[_0x189b35(0x51d)]();this[_0x189b35(0x28c)]?$gameTemp[_0x189b35(0x4a5)](this[_0x189b35(0x28c)]):VisuMZ[_0x189b35(0x25c)]['Game_Timer_onExpire'][_0x189b35(0x34a)](this);},VisuMZ[_0x47bd44(0x25c)][_0x47bd44(0x12b)]=Game_Message[_0x47bd44(0xc5)][_0x47bd44(0x202)],Game_Message[_0x47bd44(0xc5)]['add']=function(_0x39fff4){const _0x4274fb=_0x47bd44;VisuMZ['EventsMoveCore'][_0x4274fb(0x12b)][_0x4274fb(0x34a)](this,_0x39fff4),this[_0x4274fb(0x1c8)]=$gameTemp[_0x4274fb(0x3df)]();},Game_Message['prototype']['registerSelfEvent']=function(){const _0x59c5f7=_0x47bd44;$gameTemp[_0x59c5f7(0x3e8)](this[_0x59c5f7(0x1c8)]);},VisuMZ[_0x47bd44(0x25c)][_0x47bd44(0x152)]=Game_Switches['prototype']['value'],Game_Switches['prototype']['value']=function(_0x52d189){const _0x5d75e3=_0x47bd44;typeof _0x52d189===_0x5d75e3(0x2ad)&&(_0x52d189=VisuMZ['RefSwitches'][_0x52d189[_0x5d75e3(0x474)]()[_0x5d75e3(0x271)]()]||0x1);if(DataManager[_0x5d75e3(0x2de)](_0x52d189))return!!this[_0x5d75e3(0x1ba)](_0x52d189);else{if(DataManager[_0x5d75e3(0x4d3)](_0x52d189))return!!this['selfValue'](_0x52d189);else return DataManager[_0x5d75e3(0x23e)](_0x52d189)?!!this[_0x5d75e3(0x197)](_0x52d189):VisuMZ[_0x5d75e3(0x25c)][_0x5d75e3(0x152)]['call'](this,_0x52d189);}},Game_Switches[_0x47bd44(0x4a0)]={},Game_Switches[_0x47bd44(0xc5)][_0x47bd44(0x1ba)]=function(_0x3df582){const _0x500b77=_0x47bd44;if(!Game_Switches[_0x500b77(0x4a0)][_0x3df582]){$dataSystem[_0x500b77(0x33c)][_0x3df582][_0x500b77(0x153)](/<JS>\s*([\s\S]*)\s*<\/JS>/i);const _0x33fa11=_0x500b77(0x19b)[_0x500b77(0x15f)](String(RegExp['$1']));Game_Switches['advancedFunc'][_0x3df582]=new Function('switchId',_0x33fa11);}const _0x17d43c=$gameTemp[_0x500b77(0x3df)]()||this;return Game_Switches['advancedFunc'][_0x3df582]['call'](_0x17d43c,_0x3df582);},Game_Switches[_0x47bd44(0xc5)][_0x47bd44(0xf9)]=function(_0x520c1a){const _0x338adc=_0x47bd44,_0x2ef0fb=$gameTemp[_0x338adc(0x3df)]()||this;if(_0x2ef0fb[_0x338adc(0x507)]!==Game_Event)return VisuMZ[_0x338adc(0x25c)]['Game_Switches_value'][_0x338adc(0x34a)](this,_0x520c1a);else{const _0x553c0c=[_0x2ef0fb[_0x338adc(0x55b)],_0x2ef0fb[_0x338adc(0xd2)],_0x338adc(0xcd)['format'](_0x520c1a)];return $gameSelfSwitches[_0x338adc(0xad)](_0x553c0c);}},Game_Switches['prototype'][_0x47bd44(0x197)]=function(_0x15f1e9){const _0x4b03d3=_0x47bd44,_0x26306e=$gameMap?$gameMap[_0x4b03d3(0x2c5)]():0x0,_0x100c18=[0x0,0x0,_0x4b03d3(0x268)[_0x4b03d3(0x15f)](_0x26306e,_0x15f1e9)];return $gameSelfSwitches[_0x4b03d3(0xad)](_0x100c18);},VisuMZ[_0x47bd44(0x25c)][_0x47bd44(0x53f)]=Game_Switches['prototype'][_0x47bd44(0x289)],Game_Switches['prototype'][_0x47bd44(0x289)]=function(_0x33fede,_0x46f5ff){const _0x32054e=_0x47bd44;typeof _0x33fede===_0x32054e(0x2ad)&&(_0x33fede=VisuMZ[_0x32054e(0x495)][_0x33fede[_0x32054e(0x474)]()['trim']()]||0x1);if(DataManager['isSelfSwitch'](_0x33fede))this[_0x32054e(0x4cd)](_0x33fede,_0x46f5ff);else DataManager[_0x32054e(0x23e)](_0x33fede)?this[_0x32054e(0x17c)](_0x33fede,_0x46f5ff):VisuMZ[_0x32054e(0x25c)][_0x32054e(0x53f)][_0x32054e(0x34a)](this,_0x33fede,_0x46f5ff);},Game_Switches[_0x47bd44(0xc5)][_0x47bd44(0x4cd)]=function(_0x1430a6,_0x30b20c){const _0x3e1e68=_0x47bd44,_0xcaa767=$gameTemp[_0x3e1e68(0x3df)]()||this;if(_0xcaa767[_0x3e1e68(0x507)]!==Game_Event)VisuMZ[_0x3e1e68(0x25c)][_0x3e1e68(0x53f)][_0x3e1e68(0x34a)](this,_0x1430a6,_0x30b20c);else{const _0x3da67a=[_0xcaa767['_mapId'],_0xcaa767[_0x3e1e68(0xd2)],_0x3e1e68(0xcd)[_0x3e1e68(0x15f)](_0x1430a6)];$gameSelfSwitches[_0x3e1e68(0x289)](_0x3da67a,_0x30b20c);}},Game_Switches['prototype']['setMapValue']=function(_0x2f994d,_0x1002da){const _0x43bfa9=_0x47bd44,_0x5169da=$gameMap?$gameMap[_0x43bfa9(0x2c5)]():0x0,_0x158c98=[0x0,0x0,'Map\x20%1\x20Switch\x20%2'[_0x43bfa9(0x15f)](_0x5169da,_0x2f994d)];return $gameSelfSwitches[_0x43bfa9(0x289)](_0x158c98,_0x1002da);},VisuMZ[_0x47bd44(0x25c)][_0x47bd44(0x26a)]=Game_Variables[_0x47bd44(0xc5)][_0x47bd44(0xad)],Game_Variables[_0x47bd44(0xc5)][_0x47bd44(0xad)]=function(_0x596c44){const _0x30fc3b=_0x47bd44;typeof _0x596c44===_0x30fc3b(0x2ad)&&(_0x596c44=VisuMZ[_0x30fc3b(0x11c)][switchId[_0x30fc3b(0x474)]()['trim']()]||0x1);if(DataManager[_0x30fc3b(0x12e)](_0x596c44))return this[_0x30fc3b(0x1ba)](_0x596c44);else{if(DataManager[_0x30fc3b(0x247)](_0x596c44))return this['selfValue'](_0x596c44);else return DataManager[_0x30fc3b(0x172)](_0x596c44)?this[_0x30fc3b(0x197)](_0x596c44):VisuMZ[_0x30fc3b(0x25c)]['Game_Variables_value']['call'](this,_0x596c44);}},Game_Variables[_0x47bd44(0x4a0)]={},Game_Variables[_0x47bd44(0xc5)][_0x47bd44(0x1ba)]=function(_0x56d127){const _0x3eb47d=_0x47bd44;if(!Game_Variables[_0x3eb47d(0x4a0)][_0x56d127]){$dataSystem[_0x3eb47d(0x19e)][_0x56d127][_0x3eb47d(0x153)](/<JS>\s*([\s\S]*)\s*<\/JS>/i);const _0x1172c3=_0x3eb47d(0x19b)[_0x3eb47d(0x15f)](String(RegExp['$1']));Game_Variables[_0x3eb47d(0x4a0)][_0x56d127]=new Function(_0x3eb47d(0x556),_0x1172c3);}const _0x377703=$gameTemp[_0x3eb47d(0x3df)]()||this;return Game_Variables[_0x3eb47d(0x4a0)][_0x56d127]['call'](_0x377703,_0x56d127);},Game_Variables['prototype']['selfValue']=function(_0x4bc384){const _0x8fba59=_0x47bd44,_0x605155=$gameTemp['getSelfTarget']()||this;if(_0x605155['constructor']!==Game_Event)return VisuMZ[_0x8fba59(0x25c)][_0x8fba59(0x26a)][_0x8fba59(0x34a)](this,_0x4bc384);else{const _0x496487=[_0x605155[_0x8fba59(0x55b)],_0x605155[_0x8fba59(0xd2)],'Self\x20Variable\x20%1'[_0x8fba59(0x15f)](_0x4bc384)];return $gameSelfSwitches[_0x8fba59(0xad)](_0x496487);}},Game_Variables['prototype'][_0x47bd44(0x197)]=function(_0x458edd){const _0x92015d=_0x47bd44,_0x3339ac=$gameMap?$gameMap[_0x92015d(0x2c5)]():0x0,_0x4aa045=[0x0,0x0,_0x92015d(0x409)[_0x92015d(0x15f)](_0x3339ac,_0x458edd)];return $gameSelfSwitches[_0x92015d(0xad)](_0x4aa045)||0x0;},VisuMZ[_0x47bd44(0x25c)][_0x47bd44(0x3ff)]=Game_Variables[_0x47bd44(0xc5)][_0x47bd44(0x289)],Game_Variables[_0x47bd44(0xc5)][_0x47bd44(0x289)]=function(_0x1c8095,_0x2ac8b1){const _0x38fec5=_0x47bd44;typeof _0x1c8095===_0x38fec5(0x2ad)&&(_0x1c8095=VisuMZ[_0x38fec5(0x11c)][switchId[_0x38fec5(0x474)]()['trim']()]||0x1);if(DataManager[_0x38fec5(0x247)](_0x1c8095))this[_0x38fec5(0x4cd)](_0x1c8095,_0x2ac8b1);else DataManager[_0x38fec5(0x172)](_0x1c8095)?this[_0x38fec5(0x17c)](_0x1c8095,_0x2ac8b1):VisuMZ[_0x38fec5(0x25c)]['Game_Variables_setValue'][_0x38fec5(0x34a)](this,_0x1c8095,_0x2ac8b1);},Game_Variables[_0x47bd44(0xc5)][_0x47bd44(0x4cd)]=function(_0x78a4ce,_0x35dd6f){const _0xbed232=_0x47bd44,_0x300396=$gameTemp[_0xbed232(0x3df)]()||this;if(_0x300396[_0xbed232(0x507)]!==Game_Event)VisuMZ[_0xbed232(0x25c)][_0xbed232(0x3ff)][_0xbed232(0x34a)](this,_0x78a4ce,_0x35dd6f);else{const _0xde1950=[_0x300396[_0xbed232(0x55b)],_0x300396[_0xbed232(0xd2)],_0xbed232(0x326)['format'](_0x78a4ce)];$gameSelfSwitches[_0xbed232(0x289)](_0xde1950,_0x35dd6f);}},Game_Variables['prototype'][_0x47bd44(0x17c)]=function(_0x28f503,_0x142319){const _0x4310ea=_0x47bd44,_0x1cd6e9=$gameMap?$gameMap[_0x4310ea(0x2c5)]():0x0,_0x1399a9=[0x0,0x0,_0x4310ea(0x409)[_0x4310ea(0x15f)](_0x1cd6e9,_0x28f503)];$gameSelfSwitches[_0x4310ea(0x289)](_0x1399a9,_0x142319);},VisuMZ[_0x47bd44(0x25c)][_0x47bd44(0x2a5)]=Game_SelfSwitches[_0x47bd44(0xc5)][_0x47bd44(0xad)],Game_SelfSwitches[_0x47bd44(0xc5)][_0x47bd44(0xad)]=function(_0x4f2385){const _0x28b5fe=_0x47bd44;if(_0x4f2385[0x2]['match'](/(?:SELF|MAP)/i))return this[_0x28b5fe(0xf9)](_0x4f2385);else{return VisuMZ[_0x28b5fe(0x25c)][_0x28b5fe(0x2a5)][_0x28b5fe(0x34a)](this,_0x4f2385);;}},Game_SelfSwitches[_0x47bd44(0xc5)][_0x47bd44(0xf9)]=function(_0x187b33){const _0x2221ef=_0x47bd44;return _0x187b33[0x2][_0x2221ef(0x153)](/VAR/i)?this[_0x2221ef(0x1d5)][_0x187b33]||0x0:!!this['_data'][_0x187b33];},VisuMZ[_0x47bd44(0x25c)][_0x47bd44(0x213)]=Game_SelfSwitches[_0x47bd44(0xc5)][_0x47bd44(0x289)],Game_SelfSwitches['prototype'][_0x47bd44(0x289)]=function(_0x353ef0,_0x146546){const _0xfd7a7d=_0x47bd44;_0x353ef0[0x2][_0xfd7a7d(0x153)](/(?:SELF|MAP)/i)?this['setSelfValue'](_0x353ef0,_0x146546):VisuMZ[_0xfd7a7d(0x25c)][_0xfd7a7d(0x213)][_0xfd7a7d(0x34a)](this,_0x353ef0,_0x146546);},Game_SelfSwitches[_0x47bd44(0xc5)][_0x47bd44(0x4cd)]=function(_0x483d74,_0x2b41be){const _0x35ac25=_0x47bd44;this[_0x35ac25(0x1d5)][_0x483d74]=_0x483d74[0x2]['match'](/VAR/i)?_0x2b41be:!!_0x2b41be,this['onChange']();},VisuMZ['EventsMoveCore']['Scene_Map_createDisplayObjects']=Scene_Map[_0x47bd44(0xc5)][_0x47bd44(0x330)],Scene_Map[_0x47bd44(0xc5)]['createDisplayObjects']=function(){const _0x576f47=_0x47bd44;$gameMap[_0x576f47(0xda)](),VisuMZ[_0x576f47(0x25c)][_0x576f47(0x127)][_0x576f47(0x34a)](this);},Game_Map['prototype'][_0x47bd44(0xda)]=function(){const _0x5aaae8=_0x47bd44;if(this[_0x5aaae8(0x4e3)]===this[_0x5aaae8(0x2c5)]())return;this[_0x5aaae8(0x4e3)]=this[_0x5aaae8(0x2c5)](),this[_0x5aaae8(0x253)]=undefined;const _0x55fc9b=this[_0x5aaae8(0x2f3)]();for(const _0x369ca7 of _0x55fc9b){if(_0x369ca7)$gameSelfSwitches[_0x5aaae8(0x2e8)](_0x369ca7);}},Game_SelfSwitches[_0x47bd44(0xc5)][_0x47bd44(0x2e8)]=function(_0x4dc084){const _0x3b5a2c=_0x47bd44;if(!_0x4dc084)return;if(!_0x4dc084[_0x3b5a2c(0xf1)]())return;const _0x5d4472=_0x4dc084[_0x3b5a2c(0xf1)]()[_0x3b5a2c(0x3b3)]||'';if(_0x5d4472[_0x3b5a2c(0x153)](/<(?:EXIT RESET|EXIT|TEMP|TEMPORARY) (?:SELF|SELF SWITCH|SELF SWITCHES|SELF DATA)>/i)){const _0x385fbe=_0x3b5a2c(0x2c2)[_0x3b5a2c(0x15f)]($gameMap['_mapId'],_0x4dc084['_eventId']),_0x439a3f=Object[_0x3b5a2c(0x4b8)](this[_0x3b5a2c(0x1d5)])[_0x3b5a2c(0x2ef)](_0x804063=>_0x804063[_0x3b5a2c(0x156)](_0x385fbe));while(_0x439a3f[_0x3b5a2c(0x30c)]>0x0){const _0x24b47f=_0x439a3f[_0x3b5a2c(0x391)]();delete this['_data'][_0x24b47f];}}},Game_SelfSwitches[_0x47bd44(0xc5)][_0x47bd44(0x3e0)]=function(_0x854395){const _0x459e0e=_0x47bd44,_0xf0e153=_0x459e0e(0x47e)[_0x459e0e(0x15f)]($gameMap['_mapId']),_0x27d072=Object[_0x459e0e(0x4b8)](this[_0x459e0e(0x1d5)])[_0x459e0e(0x2ef)](_0x14dc11=>_0x14dc11[_0x459e0e(0x156)](_0xf0e153));while(_0x27d072[_0x459e0e(0x30c)]>0x0){const _0x3031ad=_0x27d072[_0x459e0e(0x391)]();delete this[_0x459e0e(0x1d5)][_0x3031ad];}_0x854395===$gameMap[_0x459e0e(0x2c5)]()&&$gameMap['requestRefresh']();},VisuMZ[_0x47bd44(0x25c)]['Game_Enemy_meetsSwitchCondition']=Game_Enemy[_0x47bd44(0xc5)][_0x47bd44(0x4fc)],Game_Enemy[_0x47bd44(0xc5)]['meetsSwitchCondition']=function(_0x155f15){const _0x48e91a=_0x47bd44;$gameTemp[_0x48e91a(0x3e8)](this);const _0x235d9f=VisuMZ[_0x48e91a(0x25c)][_0x48e91a(0x195)]['call'](this,_0x155f15);return $gameTemp[_0x48e91a(0x2c0)](),_0x235d9f;},VisuMZ[_0x47bd44(0x25c)]['Game_Party_hasEncounterHalf']=Game_Party[_0x47bd44(0xc5)]['hasEncounterHalf'],Game_Party[_0x47bd44(0xc5)][_0x47bd44(0x490)]=function(){const _0x5ccd36=_0x47bd44;if(this[_0x5ccd36(0x2a8)]())return!![];return VisuMZ[_0x5ccd36(0x25c)][_0x5ccd36(0x19c)]['call'](this);},Game_Party['prototype'][_0x47bd44(0x2a8)]=function(){const _0x7e46f=_0x47bd44;if(this[_0x7e46f(0x48c)])return![];return $isTileEncounterHalf($gamePlayer['x'],$gamePlayer['y']);},VisuMZ[_0x47bd44(0x25c)][_0x47bd44(0x1c6)]=Game_Party[_0x47bd44(0xc5)]['hasEncounterNone'],Game_Party['prototype'][_0x47bd44(0xe6)]=function(){const _0x1d1091=_0x47bd44;if(this[_0x1d1091(0x1fc)]())return!![];return VisuMZ[_0x1d1091(0x25c)][_0x1d1091(0x1c6)][_0x1d1091(0x34a)](this);},Game_Party[_0x47bd44(0xc5)][_0x47bd44(0x1fc)]=function(){const _0x191726=_0x47bd44;if(this[_0x191726(0x48c)])return![];return $isTileEncounterNone($gamePlayer['x'],$gamePlayer['y']);};var $isTileEncounterHalf=function(_0x53a65b,_0x188b0f){const _0x9f95a4=_0x47bd44;if(!$gameMap)return![];_0x53a65b=Math[_0x9f95a4(0x2f4)](_0x53a65b||0x0),_0x188b0f=Math[_0x9f95a4(0x2f4)](_0x188b0f||0x0);const _0x302ee0=$gameMap[_0x9f95a4(0x2f3)]();for(const _0x18402e of _0x302ee0){if(!_0x18402e)continue;if(_0x18402e[_0x9f95a4(0xcf)])continue;const _0x32e289=_0x18402e['encounterProximityType'](!![]),_0x65c99d=_0x18402e[_0x9f95a4(0x44e)](!![]);if($gameMap[_0x9f95a4(0x220)](_0x53a65b,_0x188b0f,_0x18402e,_0x32e289,_0x65c99d))return!![];}return![];},$isTileEncounterNone=function(_0x1e5a83,_0xc21b0a){const _0x304c08=_0x47bd44;if(!$gameMap)return![];_0x1e5a83=Math[_0x304c08(0x2f4)](_0x1e5a83||0x0),_0xc21b0a=Math[_0x304c08(0x2f4)](_0xc21b0a||0x0);const _0x4b83bd=$gameMap[_0x304c08(0x2f3)]();for(const _0x2a9d7b of _0x4b83bd){if(!_0x2a9d7b)continue;if(_0x2a9d7b['_erased'])continue;const _0x245609=_0x2a9d7b[_0x304c08(0x37a)](![]),_0x5fd0b4=_0x2a9d7b[_0x304c08(0x44e)](![]);if($gameMap[_0x304c08(0x220)](_0x1e5a83,_0xc21b0a,_0x2a9d7b,_0x245609,_0x5fd0b4))return!![];}return![];};VisuMZ[_0x47bd44(0x25c)][_0x47bd44(0x2a0)]=Game_Troop['prototype'][_0x47bd44(0x228)],Game_Troop['prototype'][_0x47bd44(0x228)]=function(_0x5cb4e7){const _0x5ea0c8=_0x47bd44;$gameTemp[_0x5ea0c8(0x3e8)](this);const _0x504efb=VisuMZ[_0x5ea0c8(0x25c)][_0x5ea0c8(0x2a0)]['call'](this,_0x5cb4e7);return $gameTemp['clearSelfTarget'](),_0x504efb;},VisuMZ['EventsMoveCore'][_0x47bd44(0x25b)]=Game_Map[_0x47bd44(0xc5)][_0x47bd44(0x3fb)],Game_Map[_0x47bd44(0xc5)][_0x47bd44(0x3fb)]=function(_0x473c1f){const _0x6a0d68=_0x47bd44;this[_0x6a0d68(0x1b3)](_0x473c1f),this[_0x6a0d68(0x50e)](),VisuMZ[_0x6a0d68(0x25c)]['Game_Map_setup'][_0x6a0d68(0x34a)](this,_0x473c1f),this['clearEventCache'](),this['setupDiagonalSupport'](),this[_0x6a0d68(0x4ba)](),this[_0x6a0d68(0x331)](),this[_0x6a0d68(0x364)](),this[_0x6a0d68(0x18b)](),this[_0x6a0d68(0x2ab)](),this[_0x6a0d68(0x3b0)](),this['requestMapLoadCommonEvents'](),this[_0x6a0d68(0x50e)]();},VisuMZ[_0x47bd44(0x25c)][_0x47bd44(0x187)]=Game_Map[_0x47bd44(0xc5)][_0x47bd44(0x42e)],Game_Map[_0x47bd44(0xc5)][_0x47bd44(0x42e)]=function(){const _0x1de961=_0x47bd44;VisuMZ[_0x1de961(0x25c)][_0x1de961(0x187)][_0x1de961(0x34a)](this),this['refreshIfNeeded']();},Game_Map['_eventOverloadThreshold']=0xc8,Game_Map['prototype'][_0x47bd44(0x344)]=function(){const _0x137ea1=_0x47bd44,_0x469482=Game_Map['_eventOverloadThreshold'];this[_0x137ea1(0x283)]=this[_0x137ea1(0x2f3)]()['length']>_0x469482;if(this['_eventOverload']&&$gameTemp[_0x137ea1(0x267)]()){}},Game_Map[_0x47bd44(0xc5)][_0x47bd44(0x2f2)]=function(){const _0x5c333c=_0x47bd44;return this[_0x5c333c(0x283)];},Game_Map[_0x47bd44(0xc5)]['clearEventCache']=function(){const _0x25071c=_0x47bd44;this[_0x25071c(0x253)]=undefined;},Game_Map[_0x47bd44(0xc5)]['setupDiagonalSupport']=function(){const _0x1d7fe9=_0x47bd44;this[_0x1d7fe9(0x569)]=VisuMZ[_0x1d7fe9(0x25c)][_0x1d7fe9(0x2d0)][_0x1d7fe9(0x44d)][_0x1d7fe9(0x4f4)];const _0x5cd31a=$dataMap[_0x1d7fe9(0x3b3)]||'';if(_0x5cd31a['match'](/<DIAGONAL MOVEMENT: ON>/i))this[_0x1d7fe9(0x569)]=!![];else _0x5cd31a[_0x1d7fe9(0x153)](/<DIAGONAL MOVEMENT: OFF>/i)&&(this['_diagonalSupport']=![]);},Game_Map[_0x47bd44(0xa2)]=VisuMZ[_0x47bd44(0x25c)][_0x47bd44(0x2d0)][_0x47bd44(0x44d)][_0x47bd44(0x242)]??![],Game_Map[_0x47bd44(0xc5)][_0x47bd44(0x233)]=function(){const _0x4501f8=_0x47bd44;if(Utils[_0x4501f8(0x435)]()){if(!Game_Map[_0x4501f8(0xa2)])return![];}const _0x3a6e99=$gameSystem[_0x4501f8(0x52a)]();if(_0x3a6e99===_0x4501f8(0x56b))return!![];if(_0x3a6e99==='disable')return![];if(this['_diagonalSupport']===undefined)this[_0x4501f8(0x322)]();return this[_0x4501f8(0x569)];},Game_Map[_0x47bd44(0xc5)][_0x47bd44(0x302)]=function(_0x17302d,_0x4ba4e0){const _0x171ca4=_0x47bd44;if([0x1,0x4,0x7][_0x171ca4(0x3ae)](_0x4ba4e0))_0x17302d-=0x1;if([0x3,0x6,0x9]['includes'](_0x4ba4e0))_0x17302d+=0x1;return this[_0x171ca4(0x42c)](_0x17302d);},Game_Map[_0x47bd44(0xc5)]['roundYWithDirection']=function(_0x26ed45,_0x88596f){const _0x2ff25a=_0x47bd44;if([0x1,0x2,0x3][_0x2ff25a(0x3ae)](_0x88596f))_0x26ed45+=0x1;if([0x7,0x8,0x9][_0x2ff25a(0x3ae)](_0x88596f))_0x26ed45-=0x1;return this[_0x2ff25a(0x171)](_0x26ed45);},Game_Map[_0x47bd44(0xc5)][_0x47bd44(0x373)]=function(_0x1bf4e7,_0xbfd198,_0x7b6c52,_0x3e4015){const _0x4b67bc=_0x47bd44;return Math[_0x4b67bc(0x3ab)](Math[_0x4b67bc(0x173)](this[_0x4b67bc(0x3bb)](_0x1bf4e7,_0x7b6c52)),Math[_0x4b67bc(0x173)](this[_0x4b67bc(0x2c3)](_0xbfd198,_0x3e4015)));},Game_Map['prototype'][_0x47bd44(0x4ba)]=function(){const _0x2b9667=_0x47bd44,_0x2dc348=VisuMZ[_0x2b9667(0x25c)][_0x2b9667(0x2d0)][_0x2b9667(0x352)],_0x20996a={},_0x3c7399=[_0x2b9667(0x429),_0x2b9667(0xfd),_0x2b9667(0x51e)],_0x37eb26=[_0x2b9667(0x263),_0x2b9667(0x17b),'Player','Event','Vehicle',_0x2b9667(0x1d2),'Ship',_0x2b9667(0x540)];for(const _0x14e727 of _0x3c7399){for(const _0x353ecd of _0x37eb26){const _0x4904f9=_0x2b9667(0x205)[_0x2b9667(0x15f)](_0x353ecd,_0x14e727);_0x2dc348[_0x4904f9]&&(_0x20996a[_0x4904f9]=_0x2dc348[_0x4904f9]['slice'](0x0));}}const _0x2eb916=$dataMap['note']||'',_0x2a143b=_0x2eb916[_0x2b9667(0x153)](/<(.*) (.*) REGION:[ ]*(\d+(?:\s*,\s*\d+)*)>/gi);if(_0x2a143b)for(const _0x2adfaf of _0x2a143b){_0x2adfaf['match'](/<(.*) (.*) REGION:[ ]*(\d+(?:\s*,\s*\d+)*)>/i);let _0x454d67=String(RegExp['$1'])[_0x2b9667(0x2fd)]()[_0x2b9667(0x271)](),_0x2e39be=String(RegExp['$2'])[_0x2b9667(0x2fd)]()[_0x2b9667(0x271)]();const _0x1bee0d=JSON[_0x2b9667(0x34e)]('['+RegExp['$3'][_0x2b9667(0x153)](/\d+/g)+']');_0x454d67=_0x454d67[_0x2b9667(0x48d)](0x0)[_0x2b9667(0x474)]()+_0x454d67[_0x2b9667(0xb2)](0x1),_0x2e39be=_0x2e39be['charAt'](0x0)[_0x2b9667(0x474)]()+_0x2e39be[_0x2b9667(0xb2)](0x1);const _0x2800c0=_0x2b9667(0x205)[_0x2b9667(0x15f)](_0x454d67,_0x2e39be);if(_0x20996a[_0x2800c0])_0x20996a[_0x2800c0]=_0x20996a[_0x2800c0]['concat'](_0x1bee0d);}this[_0x2b9667(0x1ee)]=_0x20996a;},Game_Map[_0x47bd44(0xc5)][_0x47bd44(0x43b)]=function(_0x346cc6,_0x85f8e5,_0x3e0189,_0x1445b2){const _0x20c4f7=_0x47bd44,_0x111ffa=this['roundXWithDirection'](_0x346cc6,_0x3e0189),_0x184192=this['roundYWithDirection'](_0x85f8e5,_0x3e0189),_0x100a78=this[_0x20c4f7(0x11f)](_0x111ffa,_0x184192),_0x3e7e78=this[_0x20c4f7(0x1ee)];if(_0x3e7e78['AllAllow'][_0x20c4f7(0x3ae)](_0x100a78))return!![];else{if(_0x1445b2===_0x20c4f7(0x518))return _0x3e7e78[_0x20c4f7(0x52f)]['includes'](_0x100a78)||_0x3e7e78[_0x20c4f7(0x13d)][_0x20c4f7(0x3ae)](_0x100a78);else{if(_0x1445b2==='event')return _0x3e7e78[_0x20c4f7(0xf4)][_0x20c4f7(0x3ae)](_0x100a78)||_0x3e7e78[_0x20c4f7(0x13d)][_0x20c4f7(0x3ae)](_0x100a78);else{if(_0x3e7e78[_0x20c4f7(0x20e)][_0x20c4f7(0x3ae)](_0x100a78))return!![];else{const _0xf299e0='%1Allow'[_0x20c4f7(0x15f)](_0x1445b2[_0x20c4f7(0x48d)](0x0)[_0x20c4f7(0x474)]()+_0x1445b2[_0x20c4f7(0xb2)](0x1));if(_0x3e7e78[_0xf299e0])return _0x3e7e78[_0xf299e0][_0x20c4f7(0x3ae)](_0x100a78);}}}}return![];},Game_Map['prototype'][_0x47bd44(0x13f)]=function(_0xa3c80a,_0x248d3f,_0x4093ed,_0x52e376){const _0x3099ff=_0x47bd44,_0x531333=this['roundXWithDirection'](_0xa3c80a,_0x4093ed),_0x305a6c=this[_0x3099ff(0x3ac)](_0x248d3f,_0x4093ed),_0x1766dc=this[_0x3099ff(0x11f)](_0x531333,_0x305a6c),_0x23725a=this['_regionRules'];if(_0x23725a[_0x3099ff(0x279)][_0x3099ff(0x3ae)](_0x1766dc))return!![];else{if(_0x52e376==='player')return _0x23725a['PlayerForbid'][_0x3099ff(0x3ae)](_0x1766dc)||_0x23725a[_0x3099ff(0x44f)][_0x3099ff(0x3ae)](_0x1766dc);else{if(_0x52e376===_0x3099ff(0xf1))return _0x23725a[_0x3099ff(0x292)][_0x3099ff(0x3ae)](_0x1766dc)||_0x23725a[_0x3099ff(0x44f)]['includes'](_0x1766dc);else{if(_0x23725a['VehicleForbid'][_0x3099ff(0x3ae)](_0x1766dc))return!![];else{const _0x44bcb3=_0x3099ff(0x29b)[_0x3099ff(0x15f)](_0x52e376[_0x3099ff(0x48d)](0x0)['toUpperCase']()+_0x52e376[_0x3099ff(0xb2)](0x1));if(_0x23725a[_0x44bcb3])return _0x23725a[_0x44bcb3][_0x3099ff(0x3ae)](_0x1766dc);}}}}return![];},Game_Map[_0x47bd44(0xc5)]['isRegionDockable']=function(_0x33c5f7,_0x3afbe3,_0x2f04f8,_0x16fd74){const _0x405d31=_0x47bd44;_0x2f04f8=_0x16fd74===_0x405d31(0x21f)?0x5:_0x2f04f8;const _0x4399f4=this[_0x405d31(0x302)](_0x33c5f7,_0x2f04f8),_0x44b254=this[_0x405d31(0x3ac)](_0x3afbe3,_0x2f04f8),_0x1f08ac=this['regionId'](_0x4399f4,_0x44b254),_0xffd7ab=this[_0x405d31(0x1ee)];if(_0xffd7ab[_0x405d31(0x1d7)]['includes'](_0x1f08ac))return!![];else{const _0x302813=_0x405d31(0x4d1)[_0x405d31(0x15f)](_0x16fd74[_0x405d31(0x48d)](0x0)[_0x405d31(0x474)]()+_0x16fd74[_0x405d31(0xb2)](0x1));if(_0xffd7ab[_0x302813])return _0xffd7ab[_0x302813]['includes'](_0x1f08ac);}return![];},VisuMZ[_0x47bd44(0x25c)][_0x47bd44(0x4ad)]=Game_Map[_0x47bd44(0xc5)]['refresh'],Game_Map['prototype'][_0x47bd44(0x2af)]=function(){const _0x53e730=_0x47bd44;VisuMZ[_0x53e730(0x25c)][_0x53e730(0x4ad)][_0x53e730(0x34a)](this),this[_0x53e730(0x328)]();},Game_Map[_0x47bd44(0xc5)]['checkNeedForPeriodicRefresh']=function(){const _0x2a8b93=_0x47bd44;this[_0x2a8b93(0x147)]=![];if(this[_0x2a8b93(0x2f3)]()['some'](_0x2812ed=>_0x2812ed[_0x2a8b93(0x54e)]())){this[_0x2a8b93(0x147)]=!![];return;}if(this[_0x2a8b93(0x2f3)]()[_0x2a8b93(0x441)](_0x8b50e1=>_0x8b50e1[_0x2a8b93(0x574)]())){this['_needsPeriodicRefresh']=!![];return;}if(this[_0x2a8b93(0x303)][_0x2a8b93(0x441)](_0x5a2903=>_0x5a2903[_0x2a8b93(0x54e)]())){this[_0x2a8b93(0x147)]=!![];return;}if(this[_0x2a8b93(0x303)][_0x2a8b93(0x441)](_0x36b268=>_0x36b268['hasCPCs']())){this[_0x2a8b93(0x147)]=!![];return;}},VisuMZ['EventsMoveCore']['Game_Map_update']=Game_Map['prototype'][_0x47bd44(0x1a1)],Game_Map[_0x47bd44(0xc5)][_0x47bd44(0x1a1)]=function(_0x4c9ab7){const _0x26e088=_0x47bd44;this[_0x26e088(0x25e)](),VisuMZ[_0x26e088(0x25c)]['Game_Map_update'][_0x26e088(0x34a)](this,_0x4c9ab7);},Game_Map[_0x47bd44(0xc5)]['updatePeriodicRefresh']=function(){const _0x3eb4fd=_0x47bd44;if(!this['_needsPeriodicRefresh'])return;this[_0x3eb4fd(0x159)]=this[_0x3eb4fd(0x159)]||0x3c,this['_periodicRefreshTimer']--,this[_0x3eb4fd(0x159)]<=0x0&&(this[_0x3eb4fd(0x366)](),this['_periodicRefreshTimer']=0x3c);},VisuMZ[_0x47bd44(0x25c)]['Game_Map_isDashDisabled']=Game_Map[_0x47bd44(0xc5)][_0x47bd44(0x23b)],Game_Map[_0x47bd44(0xc5)][_0x47bd44(0x23b)]=function(){const _0x3b18b8=_0x47bd44;if(!$gameSystem[_0x3b18b8(0x55a)]())return!![];return VisuMZ[_0x3b18b8(0x25c)][_0x3b18b8(0x400)][_0x3b18b8(0x34a)](this);},Game_Map[_0x47bd44(0xc5)][_0x47bd44(0x331)]=function(){const _0x332fbd=_0x47bd44;this['_saveEventLocations']=![];const _0x3f5096=$dataMap['note']||'';_0x3f5096[_0x332fbd(0x153)](/<SAVE EVENT (?:LOCATION|LOCATIONS)>/i)&&(this['_saveEventLocations']=!![]);},Game_Map[_0x47bd44(0xc5)][_0x47bd44(0x1e9)]=function(){const _0xeaa2bb=_0x47bd44;if(this[_0xeaa2bb(0x472)]===undefined)this[_0xeaa2bb(0x331)]();return this[_0xeaa2bb(0x472)];},Game_Map[_0x47bd44(0xc5)][_0x47bd44(0x1b3)]=function(_0x542e84){const _0x33549f=_0x47bd44;_0x542e84!==this[_0x33549f(0x2c5)]()&&$gamePlayer&&$gameSystem[_0x33549f(0x1b3)](this[_0x33549f(0x2c5)]());},Game_Map['prototype']['setupSpawnedEvents']=function(){const _0x44816c=_0x47bd44;this[_0x44816c(0x483)]=$gameSystem['getMapSpawnedEventData'](this['mapId']()),this['_needsRefresh']=!![];},VisuMZ[_0x47bd44(0x25c)][_0x47bd44(0xc8)]=Game_Map[_0x47bd44(0xc5)]['events'],Game_Map[_0x47bd44(0xc5)]['events']=function(){const _0x20e25e=_0x47bd44;if(this[_0x20e25e(0x253)])return this[_0x20e25e(0x253)];const _0x619911=VisuMZ['EventsMoveCore'][_0x20e25e(0xc8)][_0x20e25e(0x34a)](this),_0x4e1f22=_0x619911['concat'](this[_0x20e25e(0x483)]||[]);return this['_eventCache']=_0x4e1f22['filter'](_0x5000e1=>!!_0x5000e1),this[_0x20e25e(0x253)];},VisuMZ[_0x47bd44(0x25c)][_0x47bd44(0x1fb)]=Game_Map['prototype'][_0x47bd44(0xf1)],Game_Map['prototype'][_0x47bd44(0xf1)]=function(_0x255f7b){const _0x5a3efb=_0x47bd44;return _0x255f7b>=0x3e8?(_0x255f7b-=0x3e8,this[_0x5a3efb(0x483)][_0x255f7b]):VisuMZ[_0x5a3efb(0x25c)][_0x5a3efb(0x1fb)]['call'](this,_0x255f7b);},Game_Map[_0x47bd44(0xc5)][_0x47bd44(0x487)]=function(_0x3af4e3){const _0x469aaa=_0x47bd44,_0x5a6845=this[_0x469aaa(0xf1)](_0x3af4e3);if(_0x5a6845)_0x5a6845[_0x469aaa(0x304)]();},Game_Map[_0x47bd44(0xc5)][_0x47bd44(0x212)]=function(){const _0x1143d7=_0x47bd44,_0x5e66fa={'template':_0x1143d7(0x55f),'mapId':0x1,'eventId':0xc,'x':$gamePlayer['x']+0x1,'y':$gamePlayer['y']+0x1,'spawnPreserved':!![],'spawnEventId':this['_spawnedEvents'][_0x1143d7(0x30c)]+0x3e8};this[_0x1143d7(0x558)](_0x5e66fa);},Game_Map[_0x47bd44(0xc5)][_0x47bd44(0x381)]=function(_0x240387,_0x29f2ed){const _0x3487c9=_0x47bd44;if(this[_0x3487c9(0x3a7)](_0x240387,_0x29f2ed)['length']>0x0)return!![];if($gamePlayer['x']===_0x240387&&$gamePlayer['y']===_0x29f2ed)return!![];if(this['boat']()[_0x3487c9(0x318)](_0x240387,_0x29f2ed))return!![];if(this[_0x3487c9(0x37e)]()[_0x3487c9(0x318)](_0x240387,_0x29f2ed))return!![];return![];},Game_Map[_0x47bd44(0xc5)][_0x47bd44(0xbd)]=function(_0x38ec49,_0x16b556,_0x6108fc){const _0x2558fa=_0x47bd44;$gameTemp[_0x2558fa(0x394)]=_0x38ec49;const _0x261f12=new Game_Event(_0x38ec49['mapId'],_0x38ec49[_0x2558fa(0x236)]);$gameTemp[_0x2558fa(0x394)]=undefined,_0x261f12['refresh']();let _0x5c6803=_0x16b556-_0x261f12[_0x2558fa(0x155)][_0x2558fa(0x139)],_0x15b650=_0x16b556+_0x261f12[_0x2558fa(0x155)][_0x2558fa(0x2f1)],_0x1e0b3c=_0x6108fc-_0x261f12[_0x2558fa(0x155)]['up'],_0x33b4ca=_0x6108fc+_0x261f12[_0x2558fa(0x155)]['down'];for(let _0x1947e9=_0x5c6803;_0x1947e9<=_0x15b650;_0x1947e9++){for(let _0x41f7ec=_0x1e0b3c;_0x41f7ec<=_0x33b4ca;_0x41f7ec++){if(this[_0x2558fa(0x381)](_0x1947e9,_0x41f7ec))return![];}}return!![];},Game_Map[_0x47bd44(0xc5)]['createSpawnedEventWithData']=function(_0x3973ad){const _0x44e181=_0x47bd44;$gameTemp[_0x44e181(0x394)]=_0x3973ad;const _0x2ea660=new Game_Event(_0x3973ad[_0x44e181(0x2c5)],_0x3973ad[_0x44e181(0x236)]);$gameTemp[_0x44e181(0x394)]=undefined,this[_0x44e181(0x483)][_0x44e181(0x1c5)](_0x2ea660),_0x2ea660[_0x44e181(0x28b)](_0x3973ad),this[_0x44e181(0x50e)]();},Game_Map[_0x47bd44(0xc5)][_0x47bd44(0x231)]=function(_0x47a2a3,_0x2143ec,_0xbe4853){const _0x51fcb2=_0x47bd44,_0x22ba00=_0x47a2a3[_0x51fcb2(0x504)][_0x51fcb2(0x474)]()[_0x51fcb2(0x271)]();if(_0x22ba00!==_0x51fcb2(0x4af)){const _0x300ea2=VisuMZ[_0x51fcb2(0x505)][_0x22ba00];_0x300ea2&&(_0x47a2a3[_0x51fcb2(0x2c5)]=_0x300ea2[_0x51fcb2(0x406)],_0x47a2a3[_0x51fcb2(0x236)]=_0x300ea2['EventID']);}const _0xa1cfb4=_0x47a2a3['x'],_0x4918fd=_0x47a2a3['y'];if(!this[_0x51fcb2(0x28a)](_0xa1cfb4,_0x4918fd))return![];if(_0x2143ec){if(this[_0x51fcb2(0x381)](_0xa1cfb4,_0x4918fd))return![];if(!this['isSpawnHitboxCollisionOk'](_0x47a2a3,_0xa1cfb4,_0x4918fd))return![];}if(_0xbe4853){if(!this['isPassableByAnyDirection'](_0xa1cfb4,_0x4918fd))return![];}return this['createSpawnedEventWithData'](_0x47a2a3),!![];},Game_Map['prototype'][_0x47bd44(0x31a)]=function(_0x42a703,_0x198c72,_0x4564c3,_0x552875){const _0x1c50d7=_0x47bd44,_0x327796=_0x42a703['template'][_0x1c50d7(0x474)]()['trim']();if(_0x327796!==_0x1c50d7(0x4af)){const _0x4bf673=VisuMZ[_0x1c50d7(0x505)][_0x327796];_0x4bf673&&(_0x42a703['mapId']=_0x4bf673[_0x1c50d7(0x406)],_0x42a703[_0x1c50d7(0x236)]=_0x4bf673[_0x1c50d7(0x2d3)]);}const _0xd1a705=[],_0x42393f=this[_0x1c50d7(0x22d)](),_0x58c5fa=this[_0x1c50d7(0x554)]();for(let _0x429543=0x0;_0x429543<_0x42393f;_0x429543++){for(let _0x22b122=0x0;_0x22b122<_0x58c5fa;_0x22b122++){if(!_0x198c72[_0x1c50d7(0x3ae)](this[_0x1c50d7(0x11f)](_0x429543,_0x22b122)))continue;if(!this[_0x1c50d7(0x28a)](_0x429543,_0x22b122))continue;if(_0x4564c3){if(this[_0x1c50d7(0x381)](_0x429543,_0x22b122))continue;if(!this[_0x1c50d7(0xbd)](_0x42a703,_0x429543,_0x22b122))continue;}if(_0x552875){if(!this['isPassableByAnyDirection'](_0x429543,_0x22b122))continue;}_0xd1a705[_0x1c50d7(0x1c5)]([_0x429543,_0x22b122]);}}if(_0xd1a705[_0x1c50d7(0x30c)]>0x0){const _0x2e73c9=_0xd1a705[Math[_0x1c50d7(0x186)](_0xd1a705[_0x1c50d7(0x30c)])];return _0x42a703['x']=_0x2e73c9[0x0],_0x42a703['y']=_0x2e73c9[0x1],this['createSpawnedEventWithData'](_0x42a703),!![];}return![];},Game_Map[_0x47bd44(0xc5)][_0x47bd44(0x2bf)]=function(_0x362981,_0x4a1c4f,_0x52fdb3,_0x46af98){const _0x35c0c7=_0x47bd44,_0x51aaaa=_0x362981['template']['toUpperCase']()['trim']();if(_0x51aaaa!==_0x35c0c7(0x4af)){const _0x20293b=VisuMZ[_0x35c0c7(0x505)][_0x51aaaa];_0x20293b&&(_0x362981[_0x35c0c7(0x2c5)]=_0x20293b['MapID'],_0x362981['eventId']=_0x20293b[_0x35c0c7(0x2d3)]);}const _0x13e143=[],_0x37885e=this[_0x35c0c7(0x22d)](),_0x46ab97=this[_0x35c0c7(0x554)]();for(let _0x135d9e=0x0;_0x135d9e<_0x37885e;_0x135d9e++){for(let _0x8a64f5=0x0;_0x8a64f5<_0x46ab97;_0x8a64f5++){if(!_0x4a1c4f[_0x35c0c7(0x3ae)](this['terrainTag'](_0x135d9e,_0x8a64f5)))continue;if(!this[_0x35c0c7(0x28a)](_0x135d9e,_0x8a64f5))continue;if(_0x52fdb3){if(this[_0x35c0c7(0x381)](_0x135d9e,_0x8a64f5))continue;if(!this['isSpawnHitboxCollisionOk'](_0x362981,_0x135d9e,_0x8a64f5))continue;}if(_0x46af98){if(!this[_0x35c0c7(0x2ac)](_0x135d9e,_0x8a64f5))continue;}_0x13e143[_0x35c0c7(0x1c5)]([_0x135d9e,_0x8a64f5]);}}if(_0x13e143[_0x35c0c7(0x30c)]>0x0){const _0x5b49a4=_0x13e143[Math[_0x35c0c7(0x186)](_0x13e143[_0x35c0c7(0x30c)])];return _0x362981['x']=_0x5b49a4[0x0],_0x362981['y']=_0x5b49a4[0x1],this[_0x35c0c7(0x558)](_0x362981),!![];}return![];},Game_Map['prototype'][_0x47bd44(0x2ac)]=function(_0x1f4074,_0x3d5741){const _0xb291f0=_0x47bd44;if(this[_0xb291f0(0x40f)](_0x1f4074,_0x3d5741,0x2))return!![];if(this[_0xb291f0(0x40f)](_0x1f4074,_0x3d5741,0x4))return!![];if(this['isPassable'](_0x1f4074,_0x3d5741,0x6))return!![];if(this['isPassable'](_0x1f4074,_0x3d5741,0x8))return!![];return![];},Game_Map['prototype'][_0x47bd44(0x447)]=function(_0x2fbb8d){const _0x574678=_0x47bd44;if(_0x2fbb8d<0x3e8)return;if(!this[_0x574678(0x483)])return;const _0x4da2a9=this['event'](_0x2fbb8d);_0x4da2a9[_0x574678(0x575)](-0x1,-0x1),_0x4da2a9[_0x574678(0x304)](),this[_0x574678(0x483)][_0x2fbb8d-0x3e8]=null,this['clearEventCache']();},Game_Map[_0x47bd44(0xc5)][_0x47bd44(0x413)]=function(){const _0x5c83be=_0x47bd44;for(const _0x5c67b9 of this[_0x5c83be(0x483)]){if(_0x5c67b9)return _0x5c67b9;}return null;},Game_Map[_0x47bd44(0xc5)][_0x47bd44(0x11e)]=function(){const _0x2e3171=_0x47bd44,_0x1a4c30=this[_0x2e3171(0x413)]();return _0x1a4c30?_0x1a4c30[_0x2e3171(0xd2)]:0x0;},Game_Map[_0x47bd44(0xc5)][_0x47bd44(0x345)]=function(){const _0x6f1f29=_0x47bd44,_0x3aaa76=this[_0x6f1f29(0x483)]['slice'](0x0)['reverse']();for(const _0x108c23 of _0x3aaa76){if(_0x108c23)return _0x108c23;}return null;},Game_Map[_0x47bd44(0xc5)]['lastSpawnedEventID']=function(){const _0x23521f=_0x47bd44,_0x24bf04=this['lastSpawnedEvent']();return _0x24bf04?_0x24bf04[_0x23521f(0xd2)]:0x0;},Game_Map[_0x47bd44(0xc5)][_0x47bd44(0x573)]=function(_0x3495db,_0x502b5f){const _0x5b1945=_0x47bd44,_0x404fa7=this['eventsXy'](_0x3495db,_0x502b5f);for(const _0x9c799 of _0x404fa7){if(!_0x9c799)continue;if(_0x9c799['isSpawnedEvent']())this[_0x5b1945(0x447)](_0x9c799[_0x5b1945(0xd2)]);}},Game_Map[_0x47bd44(0xc5)][_0x47bd44(0x543)]=function(_0x598063){const _0x11ac12=_0x47bd44;for(const _0x1b3028 of this[_0x11ac12(0x483)]){if(!_0x1b3028)continue;_0x598063['includes'](_0x1b3028[_0x11ac12(0x11f)]())&&this[_0x11ac12(0x447)](_0x1b3028['_eventId']);}},Game_Map[_0x47bd44(0xc5)]['despawnTerrainTags']=function(_0x7a5c5c){const _0x4fe832=_0x47bd44;for(const _0x1d5d27 of this[_0x4fe832(0x483)]){if(!_0x1d5d27)continue;_0x7a5c5c[_0x4fe832(0x3ae)](_0x1d5d27[_0x4fe832(0x154)]())&&this[_0x4fe832(0x447)](_0x1d5d27[_0x4fe832(0xd2)]);}},Game_Map[_0x47bd44(0xc5)][_0x47bd44(0x2ce)]=function(){const _0x24baa4=_0x47bd44;for(const _0xa0f3ec of this[_0x24baa4(0x483)]){if(!_0xa0f3ec)continue;this[_0x24baa4(0x447)](_0xa0f3ec[_0x24baa4(0xd2)]);}},VisuMZ[_0x47bd44(0x25c)][_0x47bd44(0x369)]=Game_Map[_0x47bd44(0xc5)]['unlockEvent'],Game_Map[_0x47bd44(0xc5)][_0x47bd44(0x2e0)]=function(_0x39ffe9){const _0x153f93=_0x47bd44;VisuMZ[_0x153f93(0x25c)]['Game_Map_unlockEvent']['call'](this,_0x39ffe9);if(_0x39ffe9>=0x3e8){const _0x48638a=this[_0x153f93(0xf1)](_0x39ffe9);if(_0x48638a)_0x48638a[_0x153f93(0xf3)]();}},Game_Map['prototype'][_0x47bd44(0x18b)]=function(){const _0x113fa3=_0x47bd44;this[_0x113fa3(0x473)]=![],this[_0x113fa3(0x467)]=![];if(!$dataMap)return;const _0x51c48e=$dataMap['note']||'';if(_0x51c48e['match'](/<HIDE PLAYER>/i))this[_0x113fa3(0x473)]=![],this['_forceHidePlayer']=!![];else _0x51c48e['match'](/<SHOW PLAYER>/i)&&(this['_forceShowPlayer']=!![],this['_forceHidePlayer']=![]);},Game_Map[_0x47bd44(0xc5)][_0x47bd44(0x1cb)]=function(){const _0x4b49ba=_0x47bd44;return this[_0x4b49ba(0x473)]===undefined&&this[_0x4b49ba(0x18b)](),this[_0x4b49ba(0x473)];},Game_Map[_0x47bd44(0xc5)]['isPlayerForceHidden']=function(){const _0x21b703=_0x47bd44;return this['_forceHidePlayer']===undefined&&this[_0x21b703(0x18b)](),this[_0x21b703(0x467)];},VisuMZ[_0x47bd44(0x25c)][_0x47bd44(0x293)]=Game_CharacterBase[_0x47bd44(0xc5)][_0x47bd44(0x244)],Game_CharacterBase['prototype'][_0x47bd44(0x244)]=function(){const _0x4387a2=_0x47bd44;if(this===$gamePlayer){if($gameMap['isPlayerForceShown']())return![];if($gameMap['isPlayerForceHidden']())return!![];}return VisuMZ['EventsMoveCore'][_0x4387a2(0x293)][_0x4387a2(0x34a)](this);},Game_Map[_0x47bd44(0xc5)]['setupFollowerVisibilityOverrides']=function(){const _0x49b974=_0x47bd44;this[_0x49b974(0x32e)]=![],this[_0x49b974(0x257)]=![];if(!$dataMap)return;const _0x27b6e5=$dataMap['note']||'';if(_0x27b6e5[_0x49b974(0x153)](/<HIDE FOLLOWERS>/i))this[_0x49b974(0x32e)]=![],this[_0x49b974(0x257)]=!![];else _0x27b6e5[_0x49b974(0x153)](/<SHOW FOLLOWERS>/i)&&(this[_0x49b974(0x32e)]=!![],this[_0x49b974(0x257)]=![]);},Game_Map['prototype'][_0x47bd44(0x142)]=function(){const _0x548328=_0x47bd44;return this[_0x548328(0x32e)]===undefined&&this[_0x548328(0x2ab)](),this['_forceShowFollower'];},Game_Map[_0x47bd44(0xc5)][_0x47bd44(0x1c9)]=function(){const _0xbba539=_0x47bd44;return this[_0xbba539(0x257)]===undefined&&this[_0xbba539(0x2ab)](),this[_0xbba539(0x257)];},VisuMZ[_0x47bd44(0x25c)]['Game_Followers_isVisible']=Game_Followers[_0x47bd44(0xc5)][_0x47bd44(0x54a)],Game_Followers[_0x47bd44(0xc5)][_0x47bd44(0x54a)]=function(){const _0x529deb=_0x47bd44;if($gameMap[_0x529deb(0x142)]())return!![];if($gameMap['areFollowersForceHidden']())return![];return VisuMZ['EventsMoveCore'][_0x529deb(0xb0)][_0x529deb(0x34a)](this);},Game_Map[_0x47bd44(0xc5)]['processEraseEncounterEvents']=function(){const _0x1d63bc=_0x47bd44,_0x41993d=this[_0x1d63bc(0x2f3)](),_0x3bb0e9=[];$gameParty[_0x1d63bc(0x48c)]=!![];for(const _0x241e20 of _0x41993d){if(!_0x241e20)continue;if(_0x241e20[_0x1d63bc(0xcf)])continue;_0x241e20['processEraseEncounterSpawn']()&&_0x3bb0e9[_0x1d63bc(0x1c5)](_0x241e20);}$gameParty[_0x1d63bc(0x48c)]=undefined;for(const _0x567550 of _0x3bb0e9){if(!_0x567550)continue;if(_0x567550[_0x1d63bc(0xcf)])continue;this['eraseEvent'](_0x567550[_0x1d63bc(0x236)]());}},Game_Event[_0x47bd44(0xc5)][_0x47bd44(0x2b7)]=function(){const _0x1a11d0=_0x47bd44,_0x306eaa=this[_0x1a11d0(0xf1)]()[_0x1a11d0(0x3b3)]||'';if(_0x306eaa['match'](/<ERASE IF ENC(?:|OUNTER) HALF>/i)){if($gameParty['hasEncounterHalf']())return!![];if($isTileEncounterHalf(this['x'],this['y']))return!![];}if(_0x306eaa[_0x1a11d0(0x153)](/<ERASE IF ENC(?:|OUNTER) NONE>/i)){if($gameParty[_0x1a11d0(0xe6)]())return!![];if($isTileEncounterNone(this['x'],this['y']))return!![];}return![];},VisuMZ[_0x47bd44(0x25c)][_0x47bd44(0x342)]=Scene_Map['prototype'][_0x47bd44(0x198)],Scene_Map[_0x47bd44(0xc5)][_0x47bd44(0x198)]=function(){const _0x33de40=_0x47bd44;VisuMZ[_0x33de40(0x25c)][_0x33de40(0x342)]['call'](this),$gameMap['processEraseEncounterEvents']();},Game_Map[_0x47bd44(0xc5)][_0x47bd44(0x396)]=function(){const _0x205899=_0x47bd44;if(!$dataMap)return;if(!$dataMap['note'])return;const _0xdc4a43=$dataMap[_0x205899(0x3b3)];if(_0xdc4a43[_0x205899(0x153)](/<MAP LOAD COMMON EVENT(?:|S):[ ](.*)>/i)){const _0x3e69b3=String(RegExp['$1'])[_0x205899(0x175)](',')[_0x205899(0x4de)](_0x2a56a0=>Number(_0x2a56a0));for(const _0x344582 of _0x3e69b3){$gameTemp[_0x205899(0x4a5)](_0x344582);}}},Game_CommonEvent[_0x47bd44(0xc5)][_0x47bd44(0x54e)]=function(){const _0x409ea3=_0x47bd44,_0x3e040e=this['event']();return this[_0x409ea3(0x506)]()&&_0x3e040e[_0x409ea3(0x4ae)]>=0x1&&DataManager[_0x409ea3(0x2de)](_0x3e040e[_0x409ea3(0x3e4)]);},Game_CommonEvent[_0x47bd44(0xc5)][_0x47bd44(0x574)]=function(){const _0x44b3c8=_0x47bd44;return VisuMZ[_0x44b3c8(0x25c)][_0x44b3c8(0x534)][_0x44b3c8(0x303)][_0x44b3c8(0x3ae)](this['_commonEventId']);},VisuMZ[_0x47bd44(0x25c)][_0x47bd44(0x55e)]=Game_CommonEvent[_0x47bd44(0xc5)]['isActive'],Game_CommonEvent[_0x47bd44(0xc5)][_0x47bd44(0x506)]=function(){const _0x4ee129=_0x47bd44;if(VisuMZ['EventsMoveCore'][_0x4ee129(0x55e)]['call'](this))return!![];else{const _0x559906=this[_0x4ee129(0xf1)]();return VisuMZ[_0x4ee129(0x25c)]['CustomPageConditions'][_0x4ee129(0x4bc)](this[_0x4ee129(0xf1)]()['CPC'],this[_0x4ee129(0x2a3)],_0x559906);}},VisuMZ[_0x47bd44(0x25c)]['Game_Map_parallelCommonEvents']=Game_Map['prototype'][_0x47bd44(0x3da)],Game_Map[_0x47bd44(0xc5)]['parallelCommonEvents']=function(){const _0x3cca89=_0x47bd44,_0x3a8a68=VisuMZ['EventsMoveCore'][_0x3cca89(0x4bf)][_0x3cca89(0x34a)](this),_0x62c4bb=VisuMZ[_0x3cca89(0x25c)][_0x3cca89(0x534)][_0x3cca89(0x303)]['map'](_0xe57ca2=>$dataCommonEvents[_0xe57ca2]);return _0x3a8a68[_0x3cca89(0xe1)](_0x62c4bb)[_0x3cca89(0x2ef)]((_0x31225d,_0xb106b4,_0x4bcf3d)=>_0x4bcf3d[_0x3cca89(0x2bd)](_0x31225d)===_0xb106b4);},Game_CharacterBase[_0x47bd44(0x36c)]=VisuMZ[_0x47bd44(0x25c)][_0x47bd44(0x2d0)][_0x47bd44(0x44d)][_0x47bd44(0x314)]??![],VisuMZ[_0x47bd44(0x25c)]['Game_CharacterBase_initMembers']=Game_CharacterBase[_0x47bd44(0xc5)][_0x47bd44(0x433)],Game_CharacterBase[_0x47bd44(0xc5)][_0x47bd44(0x433)]=function(){const _0x4b3a49=_0x47bd44;VisuMZ['EventsMoveCore'][_0x4b3a49(0x46a)][_0x4b3a49(0x34a)](this),this[_0x4b3a49(0x471)]();},Game_CharacterBase['prototype'][_0x47bd44(0x471)]=function(){const _0x5c2a10=_0x47bd44;this[_0x5c2a10(0x45d)]=0x1,this[_0x5c2a10(0x561)]=0x1,this[_0x5c2a10(0x214)]=![],this[_0x5c2a10(0x1e2)](),this[_0x5c2a10(0x29e)](),this[_0x5c2a10(0x3fe)](),this[_0x5c2a10(0x29a)]();},VisuMZ[_0x47bd44(0x25c)]['Game_CharacterBase_opacity']=Game_CharacterBase[_0x47bd44(0xc5)][_0x47bd44(0x544)],Game_CharacterBase['prototype'][_0x47bd44(0x544)]=function(){const _0x294524=_0x47bd44;let _0x41f077=VisuMZ[_0x294524(0x25c)][_0x294524(0x1a0)][_0x294524(0x34a)](this);return _0x41f077=this[_0x294524(0x109)](_0x41f077),_0x41f077;},Game_CharacterBase[_0x47bd44(0xc5)][_0x47bd44(0x109)]=function(_0x19d110){return _0x19d110;},Game_CharacterBase[_0x47bd44(0xc5)][_0x47bd44(0x45f)]=function(){const _0x3d427f=_0x47bd44;if(this[_0x3d427f(0x507)]===Game_Player&&this[_0x3d427f(0x217)]())return this[_0x3d427f(0x2a9)]()[_0x3d427f(0x11b)]()[_0x3d427f(0x153)](/\[VS8\]/i);else return Imported[_0x3d427f(0x419)]&&this[_0x3d427f(0x134)]()?!![]:this[_0x3d427f(0x11b)]()['match'](/\[VS8\]/i);},VisuMZ[_0x47bd44(0x25c)][_0x47bd44(0xaf)]=Game_CharacterBase[_0x47bd44(0xc5)][_0x47bd44(0x399)],Game_CharacterBase[_0x47bd44(0xc5)]['direction']=function(){const _0x15f520=_0x47bd44;if(!$dataMap)return this[_0x15f520(0x1da)]||0x2;if(this['isOnLadder']()&&!this['isJumping']()&&this['isSpriteVS8dir']())return this[_0x15f520(0x13e)]();else{if(this['isOnLadder']()&&!this[_0x15f520(0x1c2)]())return 0x8;else return this[_0x15f520(0x33b)]()&&this[_0x15f520(0x45f)]()?this[_0x15f520(0xfc)]():VisuMZ[_0x15f520(0x25c)][_0x15f520(0xaf)]['call'](this);}},VisuMZ[_0x47bd44(0x25c)][_0x47bd44(0xb5)]=Game_CharacterBase[_0x47bd44(0xc5)][_0x47bd44(0x1f1)],Game_CharacterBase[_0x47bd44(0xc5)][_0x47bd44(0x1f1)]=function(_0x4792c5){const _0x114cbd=_0x47bd44;if(!this[_0x114cbd(0x45f)]())_0x4792c5=this[_0x114cbd(0x4aa)](_0x4792c5);VisuMZ[_0x114cbd(0x25c)]['Game_CharacterBase_setDirection'][_0x114cbd(0x34a)](this,_0x4792c5),this[_0x114cbd(0x347)]();},Game_CharacterBase[_0x47bd44(0xc5)][_0x47bd44(0x4aa)]=function(_0x2894ac){const _0x5d8c24=_0x47bd44;if(_0x2894ac===0x1)return this[_0x5d8c24(0x3c4)](this['_x'],this['_y'],0x4)?0x4:0x2;if(_0x2894ac===0x3)return this[_0x5d8c24(0x3c4)](this['_x'],this['_y'],0x6)?0x6:0x2;if(_0x2894ac===0x7)return this[_0x5d8c24(0x3c4)](this['_x'],this['_y'],0x4)?0x4:0x8;if(_0x2894ac===0x9)return this[_0x5d8c24(0x3c4)](this['_x'],this['_y'],0x6)?0x6:0x8;return _0x2894ac;},Game_CharacterBase[_0x47bd44(0xc5)][_0x47bd44(0x3b2)]=function(_0x4f39a){const _0xf311f7=_0x47bd44;return[0x1,0x3,0x5,0x7,0x9][_0xf311f7(0x3ae)](_0x4f39a);},Game_CharacterBase[_0x47bd44(0xc5)][_0x47bd44(0x537)]=function(){const _0x41bc84=_0x47bd44;return this[_0x41bc84(0xf6)]||0x0;},VisuMZ['EventsMoveCore'][_0x47bd44(0x40d)]=Game_CharacterBase[_0x47bd44(0xc5)][_0x47bd44(0x458)],Game_CharacterBase[_0x47bd44(0xc5)][_0x47bd44(0x458)]=function(_0x13d1e1){const _0x56fa05=_0x47bd44;this[_0x56fa05(0xf6)]=_0x13d1e1,VisuMZ[_0x56fa05(0x25c)][_0x56fa05(0x40d)][_0x56fa05(0x34a)](this,_0x13d1e1);},Game_CharacterBase['prototype'][_0x47bd44(0x1ef)]=function(_0x3ffe87){const _0x1fe33a=_0x47bd44;if(!this[_0x1fe33a(0x3b2)](_0x3ffe87))return this[_0x1fe33a(0x458)](_0x3ffe87);let _0x507d5c=0x0,_0x462b3e=0x0;switch(_0x3ffe87){case 0x1:_0x507d5c=0x4,_0x462b3e=0x2;break;case 0x3:_0x507d5c=0x6,_0x462b3e=0x2;break;case 0x7:_0x507d5c=0x4,_0x462b3e=0x8;break;case 0x9:_0x507d5c=0x6,_0x462b3e=0x8;break;}if(VisuMZ[_0x1fe33a(0x25c)][_0x1fe33a(0x2d0)][_0x1fe33a(0x44d)][_0x1fe33a(0x372)]){if(!this['canPass'](this['_x'],this['_y'],_0x507d5c))return this[_0x1fe33a(0x458)](_0x462b3e);if(!this[_0x1fe33a(0x3c4)](this['_x'],this['_y'],_0x462b3e))return this[_0x1fe33a(0x458)](_0x507d5c);if(!this['canPassDiagonally'](this['_x'],this['_y'],_0x507d5c,_0x462b3e)){let _0x259191=VisuMZ[_0x1fe33a(0x25c)]['Settings'][_0x1fe33a(0x44d)][_0x1fe33a(0x1a8)]?_0x507d5c:_0x462b3e;return this[_0x1fe33a(0x458)](_0x259191);}}this['_lastMovedDirection']=_0x3ffe87,this[_0x1fe33a(0x1ec)](_0x507d5c,_0x462b3e);},VisuMZ[_0x47bd44(0x25c)]['Game_CharacterBase_realMoveSpeed']=Game_CharacterBase[_0x47bd44(0xc5)][_0x47bd44(0x3cf)],Game_CharacterBase[_0x47bd44(0xc5)][_0x47bd44(0x3cf)]=function(){const _0x5e44a4=_0x47bd44;let _0x22a35e=this[_0x5e44a4(0x16f)];return this[_0x5e44a4(0x49b)]()&&(_0x22a35e+=this[_0x5e44a4(0x138)]()),this['adjustDir8MovementSpeed'](_0x22a35e);},Game_CharacterBase[_0x47bd44(0xc5)][_0x47bd44(0x138)]=function(){const _0x344560=_0x47bd44,_0x588fe8=VisuMZ['EventsMoveCore'][_0x344560(0x2d0)][_0x344560(0x44d)];return _0x588fe8[_0x344560(0x525)]!==undefined?_0x588fe8[_0x344560(0x525)]:VisuMZ[_0x344560(0x25c)][_0x344560(0x390)][_0x344560(0x34a)](this)-this[_0x344560(0x16f)];},Game_CharacterBase[_0x47bd44(0xc5)]['adjustDir8MovementSpeed']=function(_0xc41ddd){const _0x44fb4d=_0x47bd44,_0x3ec61e=VisuMZ[_0x44fb4d(0x25c)]['Settings'][_0x44fb4d(0x44d)];if(!_0x3ec61e[_0x44fb4d(0x3d7)])return _0xc41ddd;return[0x1,0x3,0x7,0x9]['includes'](this[_0x44fb4d(0xf6)])&&(_0xc41ddd*=_0x3ec61e[_0x44fb4d(0x240)]||0.01),_0xc41ddd;},VisuMZ['EventsMoveCore']['Game_CharacterBase_isDashing']=Game_CharacterBase[_0x47bd44(0xc5)][_0x47bd44(0x49b)],Game_CharacterBase[_0x47bd44(0xc5)]['isDashing']=function(){const _0x3ebc06=_0x47bd44;if(!Game_CharacterBase[_0x3ebc06(0x36c)]&&this[_0x3ebc06(0x30e)]())return![];if(this[_0x3ebc06(0x129)])return!![];return VisuMZ['EventsMoveCore']['Game_CharacterBase_isDashing']['call'](this);},Game_CharacterBase[_0x47bd44(0xc5)][_0x47bd44(0x363)]=function(){const _0x4dbca3=_0x47bd44;return this[_0x4dbca3(0x49b)]()&&this[_0x4dbca3(0x10d)]===0x0;},VisuMZ['EventsMoveCore'][_0x47bd44(0x402)]=Game_CharacterBase[_0x47bd44(0xc5)][_0x47bd44(0x164)],Game_CharacterBase[_0x47bd44(0xc5)]['pattern']=function(){const _0x57f150=_0x47bd44;return this[_0x57f150(0x33b)]()?this[_0x57f150(0x320)]():VisuMZ[_0x57f150(0x25c)]['Game_CharacterBase_pattern'][_0x57f150(0x34a)](this);},VisuMZ[_0x47bd44(0x25c)][_0x47bd44(0x52b)]=Game_CharacterBase['prototype'][_0x47bd44(0x28d)],Game_CharacterBase[_0x47bd44(0xc5)][_0x47bd44(0x28d)]=function(){const _0x54bbfe=_0x47bd44;VisuMZ[_0x54bbfe(0x25c)][_0x54bbfe(0x52b)][_0x54bbfe(0x34a)](this),this[_0x54bbfe(0x1e2)]();},VisuMZ[_0x47bd44(0x25c)][_0x47bd44(0x176)]=Game_CharacterBase[_0x47bd44(0xc5)]['characterIndex'],Game_CharacterBase[_0x47bd44(0xc5)][_0x47bd44(0x2dc)]=function(){const _0x4475fb=_0x47bd44;if(this[_0x4475fb(0x45f)]())return this[_0x4475fb(0x25d)]();return VisuMZ[_0x4475fb(0x25c)][_0x4475fb(0x176)][_0x4475fb(0x34a)](this);},Game_CharacterBase['prototype'][_0x47bd44(0x25d)]=function(){const _0x1447cc=_0x47bd44,_0x270401=this[_0x1447cc(0x399)]();if(this['isJumping']()){if([0x2,0x4,0x6,0x8]['includes'](_0x270401))return 0x4;if([0x1,0x3,0x7,0x9][_0x1447cc(0x3ae)](_0x270401))return 0x5;}else{if(this[_0x1447cc(0x30e)]())return 0x6;else{if(this['isPosing']())return this['getPosingCharacterIndex']();else{if(this['_forceCarrying']){if([0x2,0x4,0x6,0x8]['includes'](_0x270401))return 0x4;if([0x1,0x3,0x7,0x9]['includes'](_0x270401))return 0x5;}else{if(this[_0x1447cc(0x146)]()&&this['useCarryPoseForIcons']()){if([0x2,0x4,0x6,0x8][_0x1447cc(0x3ae)](_0x270401))return 0x4;if([0x1,0x3,0x7,0x9][_0x1447cc(0x3ae)](_0x270401))return 0x5;}else{if(this[_0x1447cc(0x363)]()){if([0x2,0x4,0x6,0x8][_0x1447cc(0x3ae)](_0x270401))return 0x2;if([0x1,0x3,0x7,0x9][_0x1447cc(0x3ae)](_0x270401))return 0x3;}else{if([0x2,0x4,0x6,0x8][_0x1447cc(0x3ae)](_0x270401))return 0x0;if([0x1,0x3,0x7,0x9][_0x1447cc(0x3ae)](_0x270401))return 0x1;}}}}}}},Game_CharacterBase['prototype']['useCarryPoseForIcons']=function(){const _0x67c30=_0x47bd44;return VisuMZ['EventsMoveCore'][_0x67c30(0x2d0)][_0x67c30(0x24f)][_0x67c30(0x1f2)];},Game_CharacterBase[_0x47bd44(0xc5)][_0x47bd44(0x15e)]=function(){const _0x3a55da=_0x47bd44;return this['isOnLadder']()&&this[_0x3a55da(0x154)]()===VisuMZ[_0x3a55da(0x25c)][_0x3a55da(0x2d0)][_0x3a55da(0x22b)][_0x3a55da(0x571)];},Game_CharacterBase[_0x47bd44(0xc5)][_0x47bd44(0x13e)]=function(){return this['isOnRope']()?0x4:0x2;},VisuMZ['EventsMoveCore'][_0x47bd44(0xd7)]=Game_CharacterBase[_0x47bd44(0xc5)][_0x47bd44(0x1a1)],Game_CharacterBase['prototype'][_0x47bd44(0x1a1)]=function(){const _0x2f3092=_0x47bd44;this[_0x2f3092(0x112)](),VisuMZ[_0x2f3092(0x25c)][_0x2f3092(0xd7)][_0x2f3092(0x34a)](this),this[_0x2f3092(0x210)]();},Game_CharacterBase[_0x47bd44(0xc5)]['updateScaleBase']=function(){const _0x25a5f9=_0x47bd44;this[_0x25a5f9(0x2bb)]=this[_0x25a5f9(0x45d)]??0x1,this[_0x25a5f9(0x452)]=this[_0x25a5f9(0x561)]??0x1;},VisuMZ['EventsMoveCore']['Game_CharacterBase_bushDepth']=Game_CharacterBase[_0x47bd44(0xc5)]['bushDepth'],Game_CharacterBase[_0x47bd44(0xc5)]['bushDepth']=function(){const _0x5982f0=_0x47bd44;let _0x35b358=VisuMZ[_0x5982f0(0x25c)][_0x5982f0(0x3cc)]['call'](this);return this['_scaleY']!==undefined&&(_0x35b358/=Math[_0x5982f0(0x3ab)](this['_scaleY'],0.00001)),Math['floor'](_0x35b358);},Game_CharacterBase[_0x47bd44(0xc5)][_0x47bd44(0x210)]=function(){const _0x30807e=_0x47bd44;this[_0x30807e(0x14d)]=this[_0x30807e(0x14d)]||0x0;if(this[_0x30807e(0x14d)]>0x0){this[_0x30807e(0x14d)]--;if(this[_0x30807e(0x14d)]<=0x0&&this[_0x30807e(0xc2)]!==_0x30807e(0x52c))this[_0x30807e(0x1e2)]();}},VisuMZ[_0x47bd44(0x25c)][_0x47bd44(0x284)]=Game_CharacterBase[_0x47bd44(0xc5)][_0x47bd44(0x1ec)],Game_CharacterBase[_0x47bd44(0xc5)]['moveDiagonally']=function(_0x10bae6,_0x44826b){const _0xa60c2e=_0x47bd44;VisuMZ[_0xa60c2e(0x25c)][_0xa60c2e(0x284)][_0xa60c2e(0x34a)](this,_0x10bae6,_0x44826b);if(this[_0xa60c2e(0x45f)]())this[_0xa60c2e(0xf2)](_0x10bae6,_0x44826b);},Game_CharacterBase[_0x47bd44(0xc5)][_0x47bd44(0xf2)]=function(_0x4b5a74,_0x520d7a){const _0x5297d2=_0x47bd44;if(_0x4b5a74===0x4&&_0x520d7a===0x2)this['setDirection'](0x1);if(_0x4b5a74===0x6&&_0x520d7a===0x2)this[_0x5297d2(0x1f1)](0x3);if(_0x4b5a74===0x4&&_0x520d7a===0x8)this[_0x5297d2(0x1f1)](0x7);if(_0x4b5a74===0x6&&_0x520d7a===0x8)this[_0x5297d2(0x1f1)](0x9);},VisuMZ[_0x47bd44(0x25c)][_0x47bd44(0x449)]=Game_CharacterBase[_0x47bd44(0xc5)]['hasStepAnime'],Game_CharacterBase[_0x47bd44(0xc5)][_0x47bd44(0x19f)]=function(){const _0x538f2b=_0x47bd44;if(this[_0x538f2b(0x33b)]()&&this['getPose']()==='ZZZ')return!![];return VisuMZ[_0x538f2b(0x25c)][_0x538f2b(0x449)][_0x538f2b(0x34a)](this);},Game_CharacterBase[_0x47bd44(0xc5)]['setPose']=function(_0x4810dd,_0x2b94ce){const _0x4a0da0=_0x47bd44;if(_0x4810dd[_0x4a0da0(0x153)](/Z/i))_0x4810dd=_0x4a0da0(0x52c);if(_0x4810dd[_0x4a0da0(0x153)](/SLEEP/i))_0x4810dd='ZZZ';this[_0x4a0da0(0x45f)]()&&(this[_0x4a0da0(0xc2)]=_0x4810dd[_0x4a0da0(0x474)]()[_0x4a0da0(0x271)](),this[_0x4a0da0(0x14d)]=_0x2b94ce||Infinity);},Game_CharacterBase['prototype'][_0x47bd44(0x21a)]=function(){const _0x19aad4=_0x47bd44;return this[_0x19aad4(0x45f)]()?(this['_pose']||'')['toUpperCase']()[_0x19aad4(0x271)]():''['toUpperCase']()[_0x19aad4(0x271)]();},Game_CharacterBase[_0x47bd44(0xc5)]['setBalloonPose']=function(_0x989aee,_0x1c616c){const _0xa13c0a=_0x47bd44;if(this[_0xa13c0a(0x45f)]()){const _0x23b8c1=['',_0xa13c0a(0x45a),_0xa13c0a(0x106),_0xa13c0a(0x421),'HEART',_0xa13c0a(0x420),'SWEAT',_0xa13c0a(0x135),_0xa13c0a(0xdb),_0xa13c0a(0x380),_0xa13c0a(0x52c),'','','','',''][_0x989aee];this[_0xa13c0a(0x47f)](_0x23b8c1,_0x1c616c);}},Game_CharacterBase[_0x47bd44(0xc5)][_0x47bd44(0x1e2)]=function(){const _0x18998c=_0x47bd44;this[_0x18998c(0xc2)]='',this['_poseDuration']=0x0;},Game_CharacterBase['prototype'][_0x47bd44(0x33b)]=function(){const _0x3c9a07=_0x47bd44;return this['isSpriteVS8dir']()&&!!this[_0x3c9a07(0xc2)];},Game_CharacterBase[_0x47bd44(0xc5)]['getPosingCharacterIndex']=function(){const _0x5b8ec8=_0x47bd44,_0x462de9=this[_0x5b8ec8(0xc2)][_0x5b8ec8(0x474)]();switch(this[_0x5b8ec8(0xc2)][_0x5b8ec8(0x474)]()['trim']()){case _0x5b8ec8(0x2b9):case _0x5b8ec8(0xe8):case'VICTORY':case _0x5b8ec8(0xc4):case _0x5b8ec8(0xdd):case _0x5b8ec8(0x514):return 0x6;break;default:return 0x7;break;}},Game_CharacterBase[_0x47bd44(0xc5)][_0x47bd44(0xfc)]=function(){const _0x2823e4=_0x47bd44;switch(this['_pose'][_0x2823e4(0x474)]()){case _0x2823e4(0x45a):case _0x2823e4(0x106):case'MUSIC\x20NOTE':case'!':case'?':return 0x2;break;case _0x2823e4(0x101):case'ANGER':case _0x2823e4(0x528):return 0x4;break;case _0x2823e4(0x2b9):case _0x2823e4(0xe8):case _0x2823e4(0x376):case _0x2823e4(0x135):case _0x2823e4(0xdb):case _0x2823e4(0x380):return 0x6;break;case _0x2823e4(0xc4):case'KNEEL':case _0x2823e4(0x514):case _0x2823e4(0x52c):case _0x2823e4(0xd1):return 0x8;break;default:return VisuMZ[_0x2823e4(0x25c)][_0x2823e4(0xb5)]['call'](this);break;}},Game_CharacterBase[_0x47bd44(0xc5)][_0x47bd44(0x320)]=function(){const _0x2afae3=_0x47bd44;switch(this['_pose']['toUpperCase']()){case _0x2afae3(0x2b9):case _0x2afae3(0xc4):case _0x2afae3(0x45a):case'!':case'HEART':case'COBWEB':return 0x0;break;case _0x2afae3(0xe8):case _0x2afae3(0xdd):case _0x2afae3(0x106):case'?':case'ANGER':case _0x2afae3(0xdb):return 0x1;break;case'VICTORY':case _0x2afae3(0x514):case'MUSIC\x20NOTE':case _0x2afae3(0x528):case _0x2afae3(0x380):return 0x2;break;default:return VisuMZ[_0x2afae3(0x25c)]['Game_CharacterBase_pattern'][_0x2afae3(0x34a)](this);break;}},Game_CharacterBase[_0x47bd44(0xc5)][_0x47bd44(0x243)]=function(){this['_forceCarrying']=!![];},Game_CharacterBase[_0x47bd44(0xc5)]['clearCarrying']=function(){const _0x962f91=_0x47bd44;this[_0x962f91(0x32d)]=![];},Game_CharacterBase['prototype'][_0x47bd44(0xfb)]=function(){const _0x3a0456=_0x47bd44;this[_0x3a0456(0x129)]=!![];},Game_CharacterBase[_0x47bd44(0xc5)][_0x47bd44(0x29e)]=function(){const _0x147ac5=_0x47bd44;this[_0x147ac5(0x129)]=![];},Game_CharacterBase['prototype'][_0x47bd44(0x115)]=function(){const _0x114580=_0x47bd44;if(this['isTile']())return![];if(this[_0x114580(0x1d8)])return![];if(this['_characterName']==='')return![];if(this[_0x114580(0x507)]===Game_Vehicle)return![];if(this[_0x114580(0x244)]())return![];if(this[_0x114580(0x3cd)])return![];return!![];},Game_Follower[_0x47bd44(0xc5)][_0x47bd44(0x115)]=function(){const _0x2b6ae5=_0x47bd44;if($gamePlayer['_noFollowerMovementShadow'])return![];return Game_CharacterBase['prototype']['isShadowVisible'][_0x2b6ae5(0x34a)](this);},Game_CharacterBase[_0x47bd44(0xc5)][_0x47bd44(0x1fe)]=function(){const _0x55f05a=_0x47bd44;if(this[_0x55f05a(0x30e)]())return!![];if(this[_0x55f05a(0x507)]===Game_Player&&this[_0x55f05a(0x217)]())return!![];return![];},Game_CharacterBase['prototype'][_0x47bd44(0x2db)]=function(){const _0x5cfb2b=_0x47bd44;return VisuMZ[_0x5cfb2b(0x25c)]['Settings'][_0x5cfb2b(0x44d)][_0x5cfb2b(0x4eb)];},Game_CharacterBase[_0x47bd44(0xc5)][_0x47bd44(0x193)]=function(){return this['screenX']();},Game_CharacterBase['prototype']['shadowY']=function(){const _0x30cc18=_0x47bd44,_0xa9a0f4=$gameMap[_0x30cc18(0x108)]();return Math[_0x30cc18(0x224)](this[_0x30cc18(0x273)]()*_0xa9a0f4+_0xa9a0f4);},Game_CharacterBase['DIAGONAL_PATHFINDING_EVENT_LIMIT']=0x64,Game_CharacterBase['prototype'][_0x47bd44(0x14c)]=function(_0x552ef8,_0x4754b4){const _0x35979a=_0x47bd44;if(TouchInput[_0x35979a(0xa9)]())return![];if(!$gameMap[_0x35979a(0x233)]())return![];if($gameMap['eventsXyNt'](_0x552ef8,_0x4754b4)[_0x35979a(0x30c)]>0x0)return![];if(!$gameMap[_0x35979a(0x2ac)](_0x552ef8,_0x4754b4))return![];const _0x1a6a32=$gameMap[_0x35979a(0x4a8)][_0x35979a(0x30c)];if(_0x1a6a32>=Game_CharacterBase[_0x35979a(0x229)])return![];return!![];},Game_Character[_0x47bd44(0xc5)][_0x47bd44(0x3c7)]=function(_0x4e4fac,_0x384985){const _0x4c2e6e=_0x47bd44;let _0x265e74=this[_0x4c2e6e(0x321)](_0x4e4fac,_0x384985);if(!this[_0x4c2e6e(0x14c)](_0x4e4fac,_0x384985))return _0x265e74;if(this[_0x4c2e6e(0x39d)](_0x4e4fac,_0x384985))return _0x265e74;const _0x3cf496=_0x265e74;if(_0x265e74===0x2){if(_0x4e4fac>this['x']&&this[_0x4c2e6e(0x3c4)](this['x'],this['y'],0x6))_0x265e74=0x3;if(_0x4e4fac<this['x']&&this[_0x4c2e6e(0x3c4)](this['x'],this['y'],0x4))_0x265e74=0x1;}else{if(_0x265e74===0x4){if(_0x384985>this['y']&&this[_0x4c2e6e(0x3c4)](this['x'],this['y'],0x4))_0x265e74=0x1;if(_0x384985<this['y']&&this[_0x4c2e6e(0x3c4)](this['x'],this['y'],0x6))_0x265e74=0x7;}else{if(_0x265e74===0x6){if(_0x384985>this['y']&&this['canPass'](this['x'],this['y'],0x4))_0x265e74=0x3;if(_0x384985<this['y']&&this[_0x4c2e6e(0x3c4)](this['x'],this['y'],0x6))_0x265e74=0x9;}else{if(_0x265e74===0x8){if(_0x4e4fac>this['x']&&this['canPass'](this['x'],this['y'],0x6))_0x265e74=0x9;if(_0x4e4fac<this['x']&&this['canPass'](this['x'],this['y'],0x4))_0x265e74=0x7;}}}}if(!this[_0x4c2e6e(0x3c4)](this['x'],this['y'],_0x265e74))return _0x3cf496;const _0xb048a2=$gameMap[_0x4c2e6e(0x302)](this['x'],_0x265e74),_0x4828be=$gameMap['roundYWithDirection'](this['y'],_0x265e74);if(this[_0x4c2e6e(0x39d)](_0xb048a2,_0x4828be))_0x265e74=_0x3cf496;return _0x265e74;},VisuMZ[_0x47bd44(0x25c)]['Game_CharacterBase_canPass']=Game_CharacterBase[_0x47bd44(0xc5)][_0x47bd44(0x3c4)],Game_CharacterBase['prototype'][_0x47bd44(0x3c4)]=function(_0x91703a,_0x23f6a1,_0xfa37c8){const _0x2373dd=_0x47bd44;return this[_0x2373dd(0x3e7)]===_0x2373dd(0x21f)?this[_0x2373dd(0x2a9)]()[_0x2373dd(0x46d)](_0x91703a,_0x23f6a1,_0xfa37c8):VisuMZ[_0x2373dd(0x25c)][_0x2373dd(0x2c8)][_0x2373dd(0x34a)](this,_0x91703a,_0x23f6a1,_0xfa37c8);},Game_CharacterBase[_0x47bd44(0xc5)][_0x47bd44(0x3fe)]=function(){const _0x2faf54=_0x47bd44;this[_0x2faf54(0x443)]=0x0,this[_0x2faf54(0x1e3)]=0x0;},VisuMZ['EventsMoveCore'][_0x47bd44(0x206)]=Game_CharacterBase[_0x47bd44(0xc5)][_0x47bd44(0x566)],Game_CharacterBase['prototype'][_0x47bd44(0x566)]=function(){const _0x296276=_0x47bd44;return VisuMZ[_0x296276(0x25c)][_0x296276(0x206)][_0x296276(0x34a)](this)+(this[_0x296276(0x443)]||0x0);},VisuMZ['EventsMoveCore'][_0x47bd44(0x548)]=Game_CharacterBase[_0x47bd44(0xc5)][_0x47bd44(0x503)],Game_CharacterBase[_0x47bd44(0xc5)][_0x47bd44(0x503)]=function(){const _0x32494c=_0x47bd44;return VisuMZ[_0x32494c(0x25c)][_0x32494c(0x548)][_0x32494c(0x34a)](this)+(this[_0x32494c(0x1e3)]||0x0);},Game_CharacterBase[_0x47bd44(0x204)]=VisuMZ[_0x47bd44(0x25c)]['Settings']['Movement']['ShiftY']??-0x6,Game_CharacterBase['prototype'][_0x47bd44(0x239)]=function(){const _0x3e248d=_0x47bd44;let _0x909a7c=this[_0x3e248d(0x567)]()?0x0:-Game_CharacterBase[_0x3e248d(0x204)];return this[_0x3e248d(0x452)]&&(_0x909a7c*=this[_0x3e248d(0x452)]),Math[_0x3e248d(0x2f4)](_0x909a7c);},Game_CharacterBase[_0x47bd44(0xc5)][_0x47bd44(0x29a)]=function(){const _0x4a5587=_0x47bd44;this[_0x4a5587(0x456)]='';},VisuMZ['EventsMoveCore'][_0x47bd44(0x1db)]=Game_CharacterBase[_0x47bd44(0xc5)][_0x47bd44(0x353)],Game_CharacterBase['prototype'][_0x47bd44(0x353)]=function(){const _0x569bd3=_0x47bd44;if(this['_patternLocked'])return;if(this['updatePatternEventsMoveCore']())return;VisuMZ[_0x569bd3(0x25c)][_0x569bd3(0x1db)][_0x569bd3(0x34a)](this);},Game_CharacterBase[_0x47bd44(0xc5)][_0x47bd44(0x415)]=function(){const _0x5a192=_0x47bd44;if(!this[_0x5a192(0x19f)]()&&this[_0x5a192(0x10d)]>0x0)return![];switch(String(this[_0x5a192(0x456)])[_0x5a192(0x474)]()[_0x5a192(0x271)]()){case _0x5a192(0x3db):this['_pattern']+=0x1;if(this[_0x5a192(0x536)]>0x2)this['setPattern'](0x0);break;case'RIGHT\x20TO\x20LEFT':this[_0x5a192(0x536)]-=0x1;if(this[_0x5a192(0x536)]<0x0)this[_0x5a192(0x188)](0x2);break;case _0x5a192(0x34d):case _0x5a192(0x1fd):this['turnRight90']();break;case'SPIN\x20COUNTERCLOCKWISE':case _0x5a192(0x3c0):case'SPIN\x20ANTICLOCKWISE':case _0x5a192(0x3d5):this[_0x5a192(0x19a)]();break;default:return![];}return!![];},Game_CharacterBase[_0x47bd44(0xc5)]['getEventIconData']=function(){return $gameSystem['getEventIconData'](this);},Game_CharacterBase[_0x47bd44(0xc5)][_0x47bd44(0x146)]=function(){const _0x2e11ad=_0x47bd44,_0x370ba8=this[_0x2e11ad(0x2bc)]();if(!_0x370ba8)return![];return _0x370ba8['iconIndex']>0x0;},Game_CharacterBase[_0x47bd44(0xc5)]['frontX']=function(){const _0x344fe0=_0x47bd44,_0x380a40=this[_0x344fe0(0x399)]();return $gameMap['roundXWithDirection'](this['x'],_0x380a40);},Game_CharacterBase['prototype'][_0x47bd44(0x351)]=function(){const _0x335add=_0x47bd44,_0x413197=this[_0x335add(0x399)]();return $gameMap['roundYWithDirection'](this['y'],_0x413197);},Game_CharacterBase[_0x47bd44(0xc5)]['backX']=function(){const _0x51d1b6=_0x47bd44,_0x21f255=this[_0x51d1b6(0x10c)](this[_0x51d1b6(0x399)]());return $gameMap[_0x51d1b6(0x302)](this['x'],_0x21f255);},Game_CharacterBase[_0x47bd44(0xc5)][_0x47bd44(0x24c)]=function(){const _0x369394=_0x47bd44,_0x3837e5=this[_0x369394(0x10c)](this[_0x369394(0x399)]());return $gameMap['roundYWithDirection'](this['y'],_0x3837e5);},Game_CharacterBase[_0x47bd44(0xc5)][_0x47bd44(0x4c2)]=function(){const _0x5d3938=_0x47bd44,_0x1333fe=[0x0,0x3,0x6,0x9,0x2,0x5,0x8,0x1,0x4,0x7][this[_0x5d3938(0x399)]()];return $gameMap[_0x5d3938(0x302)](this['x'],_0x1333fe);},Game_CharacterBase[_0x47bd44(0xc5)]['ccwY']=function(){const _0x55972b=_0x47bd44,_0x52a84e=[0x0,0x3,0x6,0x9,0x2,0x5,0x8,0x1,0x4,0x7][this[_0x55972b(0x399)]()];return $gameMap[_0x55972b(0x3ac)](this['y'],_0x52a84e);},Game_CharacterBase[_0x47bd44(0xc5)][_0x47bd44(0x168)]=function(){const _0x829c6=_0x47bd44,_0x1f42db=[0x0,0x7,0x4,0x1,0x8,0x5,0x2,0x9,0x6,0x3][this[_0x829c6(0x399)]()];return $gameMap[_0x829c6(0x302)](this['x'],_0x1f42db);},Game_CharacterBase[_0x47bd44(0xc5)][_0x47bd44(0x3f4)]=function(){const _0x2750df=_0x47bd44,_0x4e2d59=[0x0,0x7,0x4,0x1,0x8,0x5,0x2,0x9,0x6,0x3][this[_0x2750df(0x399)]()];return $gameMap[_0x2750df(0x3ac)](this['y'],_0x4e2d59);},VisuMZ[_0x47bd44(0x25c)][_0x47bd44(0x35e)]=Game_Character[_0x47bd44(0xc5)][_0x47bd44(0x1f5)],Game_Character[_0x47bd44(0xc5)][_0x47bd44(0x1f5)]=function(_0x5747c8){const _0x9ed9d2=_0x47bd44;route=JsonEx[_0x9ed9d2(0x18c)](_0x5747c8),VisuMZ[_0x9ed9d2(0x25c)]['Game_Character_setMoveRoute'][_0x9ed9d2(0x34a)](this,route);},VisuMZ[_0x47bd44(0x25c)][_0x47bd44(0x143)]=Game_Character[_0x47bd44(0xc5)]['forceMoveRoute'],Game_Character[_0x47bd44(0xc5)]['forceMoveRoute']=function(_0x3c5210){const _0x1c94a0=_0x47bd44;route=JsonEx['makeDeepCopy'](_0x3c5210),VisuMZ['EventsMoveCore'][_0x1c94a0(0x143)][_0x1c94a0(0x34a)](this,route);},VisuMZ[_0x47bd44(0x25c)][_0x47bd44(0x311)]=Game_Character[_0x47bd44(0xc5)]['processMoveCommand'],Game_Character[_0x47bd44(0xc5)]['processMoveCommand']=function(_0x52cf29){const _0x4645ad=_0x47bd44,_0x5b1c24=Game_Character,_0x39a64d=_0x52cf29['parameters'];if(_0x52cf29[_0x4645ad(0x170)]===_0x5b1c24[_0x4645ad(0x512)]){let _0x3eae95=_0x52cf29[_0x4645ad(0x2dd)][0x0];_0x3eae95=this[_0x4645ad(0x323)](_0x3eae95),_0x3eae95=this['convertSelfVariableValuesInScriptCall'](_0x3eae95),this['processMoveCommandEventsMoveCore'](_0x52cf29,_0x3eae95);}else VisuMZ[_0x4645ad(0x25c)][_0x4645ad(0x311)][_0x4645ad(0x34a)](this,_0x52cf29);},Game_Character[_0x47bd44(0xc5)][_0x47bd44(0x323)]=function(_0x45df3f){const _0x31078a=_0x47bd44,_0x5b8728=/\$gameVariables\.value\((\d+)\)/gi,_0x2ac76a=/\\V\[(\d+)\]/gi;while(_0x45df3f[_0x31078a(0x153)](_0x5b8728)){_0x45df3f=_0x45df3f[_0x31078a(0x4e9)](_0x5b8728,(_0x34da8a,_0x36459b)=>$gameVariables[_0x31078a(0xad)](parseInt(_0x36459b)));}while(_0x45df3f['match'](_0x2ac76a)){_0x45df3f=_0x45df3f[_0x31078a(0x4e9)](_0x2ac76a,(_0x10fb14,_0x370a35)=>$gameVariables['value'](parseInt(_0x370a35)));}return _0x45df3f;},Game_Character['prototype'][_0x47bd44(0x18e)]=function(_0x50b20d){const _0x27439f=_0x47bd44,_0x5061db=/\\SELFVAR\[(\d+)\]/gi;while(_0x50b20d['match'](_0x5061db)){_0x50b20d=_0x50b20d[_0x27439f(0x4e9)](_0x5061db,(_0x42527f,_0x2e57fe)=>getSelfVariableValue(this[_0x27439f(0x55b)],this[_0x27439f(0xd2)],parseInt(_0x2e57fe)));}return _0x50b20d;},Game_Character[_0x47bd44(0xc5)][_0x47bd44(0x1bd)]=function(_0x3f2267,_0x35a027){const _0x3ef899=_0x47bd44;if(_0x35a027[_0x3ef899(0x153)](/ANIMATION:[ ](\d+)/i))return this[_0x3ef899(0x2a7)](Number(RegExp['$1']));if(_0x35a027['match'](/BALLOON:[ ](.*)/i))return this[_0x3ef899(0x17a)](String(RegExp['$1']));if(_0x35a027['match'](/FADE IN:[ ](\d+)/i))return this[_0x3ef899(0x4c9)](Number(RegExp['$1']));if(_0x35a027[_0x3ef899(0x153)](/FADE OUT:[ ](\d+)/i))return this[_0x3ef899(0x258)](Number(RegExp['$1']));if(_0x35a027[_0x3ef899(0x153)](/FORCE (?:CARRY|CARRYING|HOLD|HOLDING):[ ](?:TRUE|ON)/i))return this['forceCarrying']();if(_0x35a027[_0x3ef899(0x153)](/FORCE (?:CARRY|CARRYING|HOLD|HOLDING):[ ](?:FALSE|OFF)/i))return this[_0x3ef899(0x500)]();if(_0x35a027[_0x3ef899(0x153)](/FORCE (?:DASH|DASHING|RUN|RUNNING):[ ](?:TRUE|ON)/i))return this[_0x3ef899(0xfb)]();if(_0x35a027['match'](/FORCE (?:DASH|DASHING|RUN|RUNNING):[ ](?:FALSE|OFF)/i))return this[_0x3ef899(0x29e)]();if(_0x35a027[_0x3ef899(0x153)](/HUG:[ ]LEFT/i))return this['processMoveRouteHugWall'](_0x3ef899(0x139));if(_0x35a027[_0x3ef899(0x153)](/HUG:[ ]RIGHT/i))return this['processMoveRouteHugWall'](_0x3ef899(0x2f1));if(_0x35a027[_0x3ef899(0x153)](/INDEX:[ ](\d+)/i))return this[_0x3ef899(0x2c4)](Number(RegExp['$1']));if(_0x35a027[_0x3ef899(0x153)](/INDEX:[ ]([\+\-]\d+)/i)){const _0x4dec77=this[_0x3ef899(0x4e1)]+Number(RegExp['$1']);return this[_0x3ef899(0x2c4)](_0x4dec77);}if(_0x35a027[_0x3ef899(0x153)](/JUMP FORWARD:[ ](\d+)/i))return this[_0x3ef899(0x1cd)](Number(RegExp['$1']));if(_0x35a027['match'](/JUMP TO:\s*(\d+)\s*[, ]\s*(\d+)/i))return this[_0x3ef899(0x51b)](Number(RegExp['$1']),Number(RegExp['$2']));if(_0x35a027[_0x3ef899(0x153)](/JUMP TO EVENT:[ ](\d+)/i)){const _0x464678=$gameMap[_0x3ef899(0xf1)](Number(RegExp['$1']));return this[_0x3ef899(0x49a)](_0x464678);}if(_0x35a027[_0x3ef899(0x153)](/JUMP TO PLAYER/i))return this[_0x3ef899(0x49a)]($gamePlayer);if(_0x35a027[_0x3ef899(0x153)](/JUMP TO HOME/i)&&this['eventId']){const _0x40b515=this[_0x3ef899(0x3c2)],_0x34a3bc=this[_0x3ef899(0x1ea)];return this['processMoveRouteJumpTo'](_0x40b515,_0x34a3bc);}if(_0x35a027[_0x3ef899(0x153)](/MOVE[ ](.*)[ ]UNTIL STOP/i)){const _0x5c6c79=String(RegExp['$1']),_0x3a50d9=this[_0x3ef899(0x572)](_0x35a027);return this[_0x3ef899(0x34b)](_0x5c6c79,_0x3a50d9);}if(_0x35a027[_0x3ef899(0x153)](/MOVE TO:\s*(\d+)\s*[, ]\s*(\d+)/i)){const _0x31d2b5=Number(RegExp['$1']),_0x1a42b6=Number(RegExp['$2']),_0x2b2de6=this[_0x3ef899(0x572)](_0x35a027);return this['processMoveRouteMoveTo'](_0x31d2b5,_0x1a42b6,_0x2b2de6);}if(_0x35a027[_0x3ef899(0x153)](/MOVE TO EVENT:[ ](\d+)/i)){const _0x21b9e9=$gameMap[_0x3ef899(0xf1)](Number(RegExp['$1'])),_0x3d7acb=this[_0x3ef899(0x572)](_0x35a027);return this[_0x3ef899(0x120)](_0x21b9e9,_0x3d7acb);}if(_0x35a027[_0x3ef899(0x153)](/MOVE TO PLAYER/i)){const _0x524449=this[_0x3ef899(0x572)](_0x35a027);return this[_0x3ef899(0x120)]($gamePlayer,_0x524449);}if(_0x35a027[_0x3ef899(0x153)](/MOVE TO HOME/i)&&this['eventId']){const _0x1142cd=this[_0x3ef899(0x3c2)],_0x18f36c=this[_0x3ef899(0x1ea)],_0x49e75e=this[_0x3ef899(0x572)](_0x35a027);return this[_0x3ef899(0xbc)](_0x1142cd,_0x18f36c,_0x49e75e);}if(_0x35a027[_0x3ef899(0x153)](/MOVE LOWER LEFT:[ ](\d+)/i))return this[_0x3ef899(0x354)](0x1,Number(RegExp['$1']));if(_0x35a027[_0x3ef899(0x153)](/MOVE DOWN:[ ](\d+)/i))return this['processMoveRouteMoveRepeat'](0x2,Number(RegExp['$1']));if(_0x35a027['match'](/MOVE LOWER RIGHT:[ ](\d+)/i))return this[_0x3ef899(0x354)](0x3,Number(RegExp['$1']));if(_0x35a027['match'](/MOVE LEFT:[ ](\d+)/i))return this[_0x3ef899(0x354)](0x4,Number(RegExp['$1']));if(_0x35a027[_0x3ef899(0x153)](/MOVE RIGHT:[ ](\d+)/i))return this[_0x3ef899(0x354)](0x6,Number(RegExp['$1']));if(_0x35a027[_0x3ef899(0x153)](/MOVE UPPER LEFT:[ ](\d+)/i))return this[_0x3ef899(0x354)](0x7,Number(RegExp['$1']));if(_0x35a027['match'](/MOVE UP:[ ](\d+)/i))return this['processMoveRouteMoveRepeat'](0x8,Number(RegExp['$1']));if(_0x35a027['match'](/MOVE UPPER RIGHT:[ ](\d+)/i))return this[_0x3ef899(0x354)](0x9,Number(RegExp['$1']));if(_0x35a027['match'](/OPACITY:[ ](\d+)([%％])/i)){const _0x26203d=Math[_0x3ef899(0x2f4)](Number(RegExp['$1'])/0x64*0xff);return this['setOpacity'](_0x26203d['clamp'](0x0,0xff));}if(_0x35a027[_0x3ef899(0x153)](/OPACITY:[ ]([\+\-]\d+)([%％])/i)){const _0x2e1277=this[_0x3ef899(0x28f)]+Math[_0x3ef899(0x2f4)](Number(RegExp['$1'])/0x64*0xff);return this[_0x3ef899(0x18a)](_0x2e1277['clamp'](0x0,0xff));}if(_0x35a027[_0x3ef899(0x153)](/OPACITY:[ ]([\+\-]\d+)/i)){const _0x41fe57=this['_opacity']+Number(RegExp['$1']);return this[_0x3ef899(0x18a)](_0x41fe57[_0x3ef899(0x39b)](0x0,0xff));}if(_0x35a027['match'](/PATTERN LOCK:[ ](\d+)/i))return this['processMoveRoutePatternLock'](Number(RegExp['$1']));if(_0x35a027[_0x3ef899(0x153)](/PATTERN UNLOCK/i))return this[_0x3ef899(0x214)]=![];if(_0x35a027['match'](/POSE:[ ](.*)/i)){const _0x4036dd=String(RegExp['$1'])[_0x3ef899(0x474)]()['trim']();return this[_0x3ef899(0x47f)](_0x4036dd);}if(_0x35a027[_0x3ef899(0x153)](/STEP TOWARD:\s*(\d+)\s*[, ]\s*(\d+)/i)){const _0x2242cf=Number(RegExp['$1']),_0x244cfd=Number(RegExp['$2']);return this[_0x3ef899(0x382)](_0x2242cf,_0x244cfd);}if(_0x35a027[_0x3ef899(0x153)](/STEP TOWARD EVENT:[ ](\d+)/i)){const _0x4a2b26=$gameMap[_0x3ef899(0xf1)](Number(RegExp['$1']));return this['processMoveRouteStepToCharacter'](_0x4a2b26);}if(_0x35a027[_0x3ef899(0x153)](/STEP TOWARD PLAYER/i))return this[_0x3ef899(0x201)]($gamePlayer);if(_0x35a027[_0x3ef899(0x153)](/STEP TOWARD HOME/i)&&this['eventId']){const _0xad6b7b=this[_0x3ef899(0x3c2)],_0x478b83=this[_0x3ef899(0x1ea)];return this['processMoveRouteStepTo'](_0xad6b7b,_0x478b83);}if(_0x35a027[_0x3ef899(0x153)](/STEP AWAY FROM:\s*(\d+)\s*[, ]\s*(\d+)/i))return this['moveAwayFromPoint'](Number(RegExp['$1']),Number(RegExp['$2']));if(_0x35a027[_0x3ef899(0x153)](/STEP AWAY FROM EVENT:[ ](\d+)/i)){const _0x3abb02=$gameMap[_0x3ef899(0xf1)](Number(RegExp['$1']));return this['moveAwayFromCharacter'](_0x3abb02);}if(_0x35a027['match'](/STEP AWAY FROM PLAYER/i))return this[_0x3ef899(0xb9)]($gamePlayer);if(_0x35a027[_0x3ef899(0x153)](/STEP AWAY FROM HOME/i)&&this['eventId']){const _0x353644=this[_0x3ef899(0x3c2)],_0x4a4682=this[_0x3ef899(0x1ea)];return this[_0x3ef899(0xb7)](_0x353644,_0x4a4682);}if(_0x35a027['match'](/TURN TO:\s*(\d+)\s*[, ]\s*(\d+)/i))return this[_0x3ef899(0x563)](Number(RegExp['$1']),Number(RegExp['$2']));if(_0x35a027[_0x3ef899(0x153)](/TURN TO EVENT:[ ](\d+)/i)){const _0x122458=$gameMap[_0x3ef899(0xf1)](Number(RegExp['$1']));return this['turnTowardCharacter'](_0x122458);}if(_0x35a027['match'](/TURN TO PLAYER/i))return this['turnTowardCharacter']($gamePlayer);if(_0x35a027['match'](/TURN TO HOME/i)&&this[_0x3ef899(0x236)]){const _0x2a2fdc=this[_0x3ef899(0x3c2)],_0x52532e=this[_0x3ef899(0x1ea)];return this[_0x3ef899(0x118)](_0x2a2fdc,_0x52532e);}if(_0x35a027['match'](/TURN AWAY FROM:\s*(\d+)\s*[, ]\s*(\d+)/i))return this['turnAwayFromPoint'](Number(RegExp['$1']),Number(RegExp['$2']));if(_0x35a027[_0x3ef899(0x153)](/TURN AWAY FROM EVENT:[ ](\d+)/i)){const _0x5e629c=$gameMap[_0x3ef899(0xf1)](Number(RegExp['$1']));return this[_0x3ef899(0x3c8)](_0x5e629c);}if(_0x35a027[_0x3ef899(0x153)](/TURN AWAY FROM PLAYER/i))return this[_0x3ef899(0x3c8)]($gamePlayer);if(_0x35a027[_0x3ef899(0x153)](/TURN AWAY FROM HOME/i)&&this[_0x3ef899(0x236)]){const _0x301204=this[_0x3ef899(0x3c2)],_0x4f5f5c=this[_0x3ef899(0x1ea)];return this[_0x3ef899(0xe3)](_0x301204,_0x4f5f5c);}if(_0x35a027['match'](/TURN LOWER LEFT/i))return this['setDirection'](0x1);if(_0x35a027[_0x3ef899(0x153)](/TURN LOWER RIGHT/i))return this[_0x3ef899(0x1f1)](0x3);if(_0x35a027[_0x3ef899(0x153)](/TURN UPPER LEFT/i))return this[_0x3ef899(0x1f1)](0x7);if(_0x35a027[_0x3ef899(0x153)](/TURN UPPER RIGHT/i))return this['setDirection'](0x9);if(_0x35a027[_0x3ef899(0x153)](/Self Switch[ ](.*):[ ](.*)/i))return this['processMoveRouteSelfSwitch'](RegExp['$1'],RegExp['$2']);if(_0x35a027[_0x3ef899(0x153)](/Self Variable[ ](.*):[ ](.*)/i))return this[_0x3ef899(0xd4)](RegExp['$1'],RegExp['$2']);if(_0x35a027[_0x3ef899(0x153)](/TELEPORT TO:\s*(\d+)\s*[, ]\s*(\d+)/i))return this['processMoveRouteTeleportTo'](Number(RegExp['$1']),Number(RegExp['$2']));if(_0x35a027[_0x3ef899(0x153)](/TELEPORT TO EVENT:[ ](\d+)/i)){const _0x23b13f=$gameMap[_0x3ef899(0xf1)](Number(RegExp['$1']));return this[_0x3ef899(0x358)](_0x23b13f);}if(_0x35a027[_0x3ef899(0x153)](/TELEPORT TO PLAYER/i))return this[_0x3ef899(0x358)]($gamePlayer);if(_0x35a027[_0x3ef899(0x153)](/TELEPORT TO HOME/i)&&this[_0x3ef899(0x236)]){const _0x1817ea=this[_0x3ef899(0x3c2)],_0x510af2=this[_0x3ef899(0x1ea)];return this[_0x3ef899(0x54b)](_0x1817ea,_0x510af2);}try{VisuMZ[_0x3ef899(0x25c)][_0x3ef899(0x311)][_0x3ef899(0x34a)](this,_0x3f2267);}catch(_0x5b0515){if($gameTemp['isPlaytest']())console[_0x3ef899(0x4ee)](_0x5b0515);}},Game_Character['prototype'][_0x47bd44(0x2a7)]=function(_0x2b52ee){const _0xd28e6b=_0x47bd44;$gameTemp[_0xd28e6b(0xc3)]([this],_0x2b52ee);},Game_Character[_0x47bd44(0xc5)]['processMoveRouteBalloon']=function(_0x11ad7a){const _0x566cd0=_0x47bd44;let _0x1b2fa1=0x0;switch(_0x11ad7a[_0x566cd0(0x474)]()[_0x566cd0(0x271)]()){case'!':case _0x566cd0(0x45a):_0x1b2fa1=0x1;break;case'?':case _0x566cd0(0x106):_0x1b2fa1=0x2;break;case _0x566cd0(0x445):case _0x566cd0(0x405):case _0x566cd0(0x421):case _0x566cd0(0x481):case'MUSICNOTE':_0x1b2fa1=0x3;break;case _0x566cd0(0x101):case _0x566cd0(0x417):_0x1b2fa1=0x4;break;case _0x566cd0(0x420):_0x1b2fa1=0x5;break;case _0x566cd0(0x528):_0x1b2fa1=0x6;break;case _0x566cd0(0x135):case _0x566cd0(0xa0):case'FRUSTRATION':_0x1b2fa1=0x7;break;case'SILENCE':case _0x566cd0(0xca):_0x1b2fa1=0x8;break;case _0x566cd0(0x35a):case'BULB':case _0x566cd0(0x380):case _0x566cd0(0x3ed):case _0x566cd0(0x137):_0x1b2fa1=0x9;break;case'Z':case'ZZ':case _0x566cd0(0x52c):case _0x566cd0(0xd1):_0x1b2fa1=0xa;break;case _0x566cd0(0x559):_0x1b2fa1=0xb;break;case _0x566cd0(0x3aa):_0x1b2fa1=0xc;break;case _0x566cd0(0x235):_0x1b2fa1=0xd;break;case _0x566cd0(0x21c):_0x1b2fa1=0xe;break;case _0x566cd0(0x4d0):_0x1b2fa1=0xf;break;}$gameTemp[_0x566cd0(0xea)](this,_0x1b2fa1);},Game_Character[_0x47bd44(0xc5)][_0x47bd44(0x4c9)]=function(_0x311425){const _0x876be6=_0x47bd44;_0x311425+=this['_opacity'],this['setOpacity'](_0x311425[_0x876be6(0x39b)](0x0,0xff));if(this[_0x876be6(0x28f)]<0xff)this[_0x876be6(0x4a1)]--;},Game_Character[_0x47bd44(0xc5)][_0x47bd44(0x258)]=function(_0x588092){const _0x126d28=_0x47bd44;_0x588092=this[_0x126d28(0x28f)]-_0x588092,this[_0x126d28(0x18a)](_0x588092[_0x126d28(0x39b)](0x0,0xff));if(this[_0x126d28(0x28f)]>0x0)this[_0x126d28(0x4a1)]--;},Game_Character[_0x47bd44(0xc5)][_0x47bd44(0x1bf)]=function(_0x3114d0){const _0x17a078=_0x47bd44,_0x37aa80=[0x0,0x3,0x6,0x9,0x2,0x0,0x8,0x1,0x4,0x7],_0x5db430=[0x0,0x7,0x4,0x1,0x8,0x0,0x2,0x9,0x6,0x3],_0x216ba6=this[_0x17a078(0x399)](),_0x1e772d=(_0x3114d0===_0x17a078(0x139)?_0x37aa80:_0x5db430)[_0x216ba6],_0x19b654=(_0x3114d0===_0x17a078(0x139)?_0x5db430:_0x37aa80)[_0x216ba6];if(this[_0x17a078(0x3c4)](this['x'],this['y'],_0x1e772d))_0x3114d0===_0x17a078(0x139)?this['turnLeft90']():this[_0x17a078(0x395)]();else!this[_0x17a078(0x3c4)](this['x'],this['y'],this[_0x17a078(0x399)]())&&(this[_0x17a078(0x3c4)](this['x'],this['y'],_0x19b654)?_0x3114d0===_0x17a078(0x139)?this['turnRight90']():this[_0x17a078(0x19a)]():this[_0x17a078(0x225)]());this[_0x17a078(0x3c4)](this['x'],this['y'],this['direction']())&&this['moveForward']();},Game_Character[_0x47bd44(0xc5)][_0x47bd44(0x2c4)]=function(_0x5db202){const _0x59aecc=_0x47bd44;if(ImageManager[_0x59aecc(0x33e)](this[_0x59aecc(0x547)]))return;_0x5db202=_0x5db202['clamp'](0x0,0x7),this[_0x59aecc(0x307)](this['_characterName'],_0x5db202);},Game_Character[_0x47bd44(0xc5)]['processMoveRouteJumpForward']=function(_0x5e812a){const _0x1c01a8=_0x47bd44;switch(this[_0x1c01a8(0x399)]()){case 0x1:this[_0x1c01a8(0x24e)](-_0x5e812a,_0x5e812a);break;case 0x2:this[_0x1c01a8(0x24e)](0x0,_0x5e812a);break;case 0x3:this[_0x1c01a8(0x24e)](_0x5e812a,_0x5e812a);break;case 0x4:this[_0x1c01a8(0x24e)](-_0x5e812a,0x0);break;case 0x6:this['jump'](_0x5e812a,0x0);break;case 0x7:this['jump'](-_0x5e812a,-_0x5e812a);break;case 0x8:this[_0x1c01a8(0x24e)](0x0,-_0x5e812a);break;case 0x9:this['jump'](_0x5e812a,-_0x5e812a);break;}},Game_Character[_0x47bd44(0xc5)][_0x47bd44(0x51b)]=function(_0x166bbc,_0x264937){const _0x1878f1=_0x47bd44,_0x1437bf=Math[_0x1878f1(0x2f4)](_0x166bbc-this['x']),_0x45d0ba=Math[_0x1878f1(0x2f4)](_0x264937-this['y']);this[_0x1878f1(0x24e)](_0x1437bf,_0x45d0ba);},Game_Character[_0x47bd44(0xc5)]['processMoveRouteJumpToCharacter']=function(_0x100ab5){const _0x20c455=_0x47bd44;if(_0x100ab5)this[_0x20c455(0x51b)](_0x100ab5['x'],_0x100ab5['y']);},Game_Character[_0x47bd44(0xc5)]['processMoveRouteStepTo']=function(_0x235ee8,_0x12e307,_0x38637b){const _0x31424f=_0x47bd44;let _0x502208=0x0;if(_0x38637b)$gameTemp['_moveAllowPlayerCollision']=!![];$gameMap['isSupportDiagonalMovement']()?_0x502208=this[_0x31424f(0x3c7)](_0x235ee8,_0x12e307):_0x502208=this[_0x31424f(0x321)](_0x235ee8,_0x12e307);if(_0x38637b)$gameTemp[_0x31424f(0x526)]=![];this[_0x31424f(0x1ef)](_0x502208),this['setMovementSuccess'](!![]);},Game_Character[_0x47bd44(0xc5)][_0x47bd44(0x201)]=function(_0x17bde5){const _0x493ea7=_0x47bd44;if(_0x17bde5)this[_0x493ea7(0x382)](_0x17bde5['x'],_0x17bde5['y']);},Game_Character[_0x47bd44(0xc5)]['processMoveRouteStepFrom']=function(_0x1cf2af,_0x2c7ca3){const _0x322fcb=_0x47bd44,_0x5a3d6c=this[_0x322fcb(0x422)](_0x1cf2af),_0x10c12b=this[_0x322fcb(0x316)](_0x2c7ca3);},Game_Character['prototype'][_0x47bd44(0x572)]=function(_0x2b01a6){const _0x3b131e=_0x47bd44;if(_0x2b01a6[_0x3b131e(0x153)](/(?:CRASH|COLLIDE|COLLISION|ENCOUNTER|TOUCH)/i))return!![];else return _0x2b01a6[_0x3b131e(0x153)](/(?:AVOID|EVADE|DODGE)/i)?![]:![];},VisuMZ[_0x47bd44(0x25c)]['Game_Event_isCollidedWithPlayerCharacters']=Game_Event['prototype'][_0x47bd44(0x3d2)],Game_Event[_0x47bd44(0xc5)][_0x47bd44(0x3d2)]=function(_0x57ea9f,_0x3ad64a){const _0x37d176=_0x47bd44;if($gameTemp[_0x37d176(0x526)])return![];return VisuMZ['EventsMoveCore'][_0x37d176(0x4f5)][_0x37d176(0x34a)](this,_0x57ea9f,_0x3ad64a);},Game_Character['prototype'][_0x47bd44(0x34b)]=function(_0x30dbf0,_0x4c9fdb){const _0x176857=_0x47bd44,_0x22c5e5=['','LOWER\x20LEFT','DOWN',_0x176857(0x169),_0x176857(0x1b1),'',_0x176857(0x378),_0x176857(0x2be),'UP',_0x176857(0x103)],_0x42cab5=_0x22c5e5[_0x176857(0x2bd)](_0x30dbf0[_0x176857(0x474)]()[_0x176857(0x271)]());if(_0x42cab5<=0x0)return;_0x4c9fdb&&($gameTemp['_moveAllowPlayerCollision']=!![]),this[_0x176857(0x3c4)](this['x'],this['y'],_0x42cab5)&&(_0x4c9fdb&&($gameTemp[_0x176857(0x526)]=![]),this[_0x176857(0x1ef)](_0x42cab5),this[_0x176857(0x4a1)]-=0x1),_0x4c9fdb&&($gameTemp[_0x176857(0x526)]=![]);},VisuMZ[_0x47bd44(0x25c)][_0x47bd44(0x49d)]=Game_Event['prototype'][_0x47bd44(0x51c)],Game_Event[_0x47bd44(0xc5)][_0x47bd44(0x51c)]=function(_0x86c07a,_0x1063b3){const _0x304baa=_0x47bd44;if(VisuMZ[_0x304baa(0x25c)][_0x304baa(0x49d)][_0x304baa(0x34a)](this,_0x86c07a,_0x1063b3))return!![];if($gameMap[_0x304baa(0x325)]())return![];for(let _0x418bda=-this[_0x304baa(0x155)][_0x304baa(0x139)];_0x418bda<=this[_0x304baa(0x155)]['right'];_0x418bda++){for(let _0x1c4577=-this[_0x304baa(0x155)]['up'];_0x1c4577<=this[_0x304baa(0x155)][_0x304baa(0x337)];_0x1c4577++){if(VisuMZ[_0x304baa(0x25c)][_0x304baa(0x49d)][_0x304baa(0x34a)](this,_0x86c07a+_0x418bda,_0x1063b3+_0x1c4577))return!![];}}return![];},Game_Character[_0x47bd44(0xc5)][_0x47bd44(0xbc)]=function(_0x42ba04,_0x449c0c,_0x26c576){const _0x33f91b=_0x47bd44;this[_0x33f91b(0x382)](_0x42ba04,_0x449c0c,_0x26c576);if(this['x']!==_0x42ba04||this['y']!==_0x449c0c)this['_moveRouteIndex']--;},Game_Character[_0x47bd44(0xc5)][_0x47bd44(0x120)]=function(_0x35e928,_0x2d0821){const _0x39a9bc=_0x47bd44;if(_0x35e928&&!_0x35e928[_0x39a9bc(0xcf)]){this[_0x39a9bc(0xbc)](_0x35e928['x'],_0x35e928['y'],_0x2d0821);if(_0x35e928[_0x39a9bc(0x4d4)]()&&this['isNormalPriority']()){const _0x4d0015=$gameMap[_0x39a9bc(0x54d)](this['x'],this['y'],_0x35e928['x'],_0x35e928['y']);if(_0x4d0015<=0x1)this[_0x39a9bc(0x4a1)]++;}}},Game_Character[_0x47bd44(0xc5)]['processMoveRouteMoveRepeat']=function(_0x9f1d2f,_0x9f989d){const _0x43bff1=_0x47bd44;_0x9f989d=_0x9f989d||0x0;const _0x221c84={'code':0x1,'indent':null,'parameters':[]};_0x221c84[_0x43bff1(0x170)]=[0x0,0x5,0x1,0x6,0x2,0x0,0x3,0x7,0x4,0x8][_0x9f1d2f],this['_moveRoute'][_0x43bff1(0x3b1)][this['_moveRouteIndex']][_0x43bff1(0x2dd)][0x0]='';while(_0x9f989d--){this[_0x43bff1(0x3bc)][_0x43bff1(0x3b1)][_0x43bff1(0x386)](this[_0x43bff1(0x4a1)]+0x1,0x0,_0x221c84);}},Game_Character[_0x47bd44(0xc5)][_0x47bd44(0x1f7)]=function(_0x3134ba){const _0x2a7d90=_0x47bd44;this[_0x2a7d90(0x214)]=!![],this[_0x2a7d90(0x188)](_0x3134ba);},Game_Character[_0x47bd44(0xc5)][_0x47bd44(0xcb)]=function(_0x2144a0,_0x563ac7){const _0x471680=_0x47bd44;if(this===$gamePlayer)return;const _0x1ca012=[this[_0x471680(0x55b)],this[_0x471680(0xd2)],'A'];_0x2144a0[_0x471680(0x153)](/\b[ABCD]\b/i)?_0x1ca012[0x2]=String(_0x2144a0)[_0x471680(0x48d)](0x0)[_0x471680(0x474)]()['trim']():_0x1ca012[0x2]=_0x471680(0xcd)['format'](_0x2144a0);switch(_0x563ac7['toUpperCase']()[_0x471680(0x271)]()){case'ON':case _0x471680(0x1ae):$gameSelfSwitches[_0x471680(0x289)](_0x1ca012,!![]);break;case _0x471680(0x1b6):case _0x471680(0x50d):$gameSelfSwitches[_0x471680(0x289)](_0x1ca012,![]);break;case'TOGGLE':$gameSelfSwitches[_0x471680(0x289)](_0x1ca012,!$gameSelfSwitches['value'](_0x1ca012));break;}},Game_Character[_0x47bd44(0xc5)][_0x47bd44(0xd4)]=function(_0x20474a,_0x270642){const _0x1d66c6=_0x47bd44;if(this===$gamePlayer)return;const _0x4a3f65=[this['_mapId'],this[_0x1d66c6(0xd2)],_0x1d66c6(0x326)[_0x1d66c6(0x15f)](_0x20474a)];$gameSelfSwitches[_0x1d66c6(0x289)](_0x4a3f65,Number(_0x270642));},Game_Character[_0x47bd44(0xc5)][_0x47bd44(0x54b)]=function(_0x53a1eb,_0x1db4fc){const _0x29b044=_0x47bd44;this[_0x29b044(0x575)](_0x53a1eb,_0x1db4fc);},Game_Character['prototype'][_0x47bd44(0x358)]=function(_0x42fc38){const _0x413b7a=_0x47bd44;if(_0x42fc38)this[_0x413b7a(0x54b)](_0x42fc38['x'],_0x42fc38['y']);},Game_Character[_0x47bd44(0xc5)]['turnRight90']=function(){const _0x5bbd89=_0x47bd44;switch(this[_0x5bbd89(0x399)]()){case 0x1:this['setDirection'](0x7);break;case 0x2:this[_0x5bbd89(0x1f1)](0x4);break;case 0x3:this[_0x5bbd89(0x1f1)](0x1);break;case 0x4:this['setDirection'](0x8);break;case 0x6:this[_0x5bbd89(0x1f1)](0x2);break;case 0x7:this[_0x5bbd89(0x1f1)](0x9);break;case 0x8:this[_0x5bbd89(0x1f1)](0x6);break;case 0x9:this[_0x5bbd89(0x1f1)](0x3);break;}},Game_Character['prototype'][_0x47bd44(0x19a)]=function(){const _0x533757=_0x47bd44;switch(this[_0x533757(0x399)]()){case 0x1:this[_0x533757(0x1f1)](0x3);break;case 0x2:this[_0x533757(0x1f1)](0x6);break;case 0x3:this[_0x533757(0x1f1)](0x9);break;case 0x4:this['setDirection'](0x2);break;case 0x6:this['setDirection'](0x8);break;case 0x7:this[_0x533757(0x1f1)](0x1);break;case 0x8:this[_0x533757(0x1f1)](0x4);break;case 0x9:this['setDirection'](0x7);break;}},Game_Character[_0x47bd44(0xc5)][_0x47bd44(0x30a)]=function(_0x1fd13b,_0x889324,_0x407ff2){const _0x524b29=_0x47bd44,_0xc56a09=this[_0x524b29(0x422)](_0x1fd13b),_0x55efd9=this[_0x524b29(0x316)](_0x889324);if($gameMap[_0x524b29(0x233)]()){if(_0x407ff2||this[_0x524b29(0x45f)]()){if(_0xc56a09>0x0&&_0x55efd9<0x0)return 0x1;if(_0xc56a09<0x0&&_0x55efd9<0x0)return 0x3;if(_0xc56a09>0x0&&_0x55efd9>0x0)return 0x7;if(_0xc56a09<0x0&&_0x55efd9>0x0)return 0x9;}}if(Math[_0x524b29(0x173)](_0xc56a09)>Math[_0x524b29(0x173)](_0x55efd9))return _0xc56a09>0x0?0x4:0x6;else{if(_0x55efd9!==0x0)return _0x55efd9>0x0?0x8:0x2;}return 0x0;},Game_Character[_0x47bd44(0xc5)]['getDirectionFromPoint']=function(_0x793d2b,_0x200a7a,_0x5930bb){const _0x1d7c9a=_0x47bd44,_0x2f2cd4=this[_0x1d7c9a(0x422)](_0x793d2b),_0x39dfe3=this[_0x1d7c9a(0x316)](_0x200a7a);if($gameMap[_0x1d7c9a(0x233)]()){if(_0x5930bb||this[_0x1d7c9a(0x45f)]()){if(_0x2f2cd4>0x0&&_0x39dfe3<0x0)return 0x9;if(_0x2f2cd4<0x0&&_0x39dfe3<0x0)return 0x7;if(_0x2f2cd4>0x0&&_0x39dfe3>0x0)return 0x3;if(_0x2f2cd4<0x0&&_0x39dfe3>0x0)return 0x1;}}if(Math['abs'](_0x2f2cd4)>Math[_0x1d7c9a(0x173)](_0x39dfe3))return _0x2f2cd4>0x0?0x6:0x4;else{if(_0x39dfe3!==0x0)return _0x39dfe3>0x0?0x2:0x8;}return 0x0;},Game_Character[_0x47bd44(0xc5)][_0x47bd44(0x563)]=function(_0x8667ef,_0x5cfd8a){const _0x2a6962=_0x47bd44,_0x3626e0=this[_0x2a6962(0x30a)](_0x8667ef,_0x5cfd8a,!![]);if(_0x3626e0)this[_0x2a6962(0x1ef)](_0x3626e0);},Game_Character[_0x47bd44(0xc5)][_0x47bd44(0xb7)]=function(_0xabec77,_0x3ec5ba){const _0x2cec96=_0x47bd44,_0x52bf4d=this[_0x2cec96(0x250)](_0xabec77,_0x3ec5ba,!![]);if(_0x52bf4d)this[_0x2cec96(0x1ef)](_0x52bf4d);},Game_Character['prototype']['turnTowardPoint']=function(_0x4d3433,_0x352287){const _0x5140ba=_0x47bd44,_0x5cd9c7=this['getDirectionToPoint'](_0x4d3433,_0x352287,![]);if(_0x5cd9c7)this[_0x5140ba(0x1f1)](_0x5cd9c7);},Game_Character['prototype'][_0x47bd44(0xe3)]=function(_0x15f5ae,_0x37ae9d){const _0x56f123=_0x47bd44,_0x5a0643=this[_0x56f123(0x250)](_0x15f5ae,_0x37ae9d,![]);if(_0x5a0643)this[_0x56f123(0x1f1)](_0x5a0643);},Game_Character['prototype']['moveTowardCharacter']=function(_0x12740a){const _0x3c0c35=_0x47bd44;if(_0x12740a)this[_0x3c0c35(0x563)](_0x12740a['x'],_0x12740a['y']);},Game_Character[_0x47bd44(0xc5)][_0x47bd44(0xb9)]=function(_0x5542f6){if(_0x5542f6)this['moveAwayFromPoint'](_0x5542f6['x'],_0x5542f6['y']);},Game_Character[_0x47bd44(0xc5)]['turnTowardCharacter']=function(_0x141181){const _0x505291=_0x47bd44;if(_0x141181)this[_0x505291(0x118)](_0x141181['x'],_0x141181['y']);},Game_Character[_0x47bd44(0xc5)][_0x47bd44(0x3c8)]=function(_0xc96a67){const _0x2f20d6=_0x47bd44;if(_0xc96a67)this[_0x2f20d6(0xe3)](_0xc96a67['x'],_0xc96a67['y']);},VisuMZ[_0x47bd44(0x25c)][_0x47bd44(0x388)]=Game_Player[_0x47bd44(0xc5)][_0x47bd44(0x49b)],Game_Player['prototype'][_0x47bd44(0x49b)]=function(){const _0x144772=_0x47bd44;if(!Game_CharacterBase['ALLOW_LADDER_DASH']&&this['isOnLadder']())return![];if(this[_0x144772(0x129)])return!![];return VisuMZ[_0x144772(0x25c)]['Game_Player_isDashing']['call'](this);},VisuMZ[_0x47bd44(0x25c)][_0x47bd44(0x24b)]=Game_Player[_0x47bd44(0xc5)]['getInputDirection'],Game_Player[_0x47bd44(0xc5)][_0x47bd44(0x4ca)]=function(){const _0x3d79ac=_0x47bd44;return $gameMap[_0x3d79ac(0x233)]()?this[_0x3d79ac(0x1a2)]():VisuMZ[_0x3d79ac(0x25c)]['Game_Player_getInputDirection'][_0x3d79ac(0x34a)](this);},Game_Player['prototype'][_0x47bd44(0x1a2)]=function(){return Input['dir8'];},Game_Player[_0x47bd44(0xc5)][_0x47bd44(0x35b)]=function(){const _0x124162=_0x47bd44;if($gameSystem[_0x124162(0x37d)]())return 0x0;if(!this[_0x124162(0xed)]()&&this[_0x124162(0x57a)]()){let _0x2e8539=this[_0x124162(0x4ca)]();if(_0x2e8539>0x0)$gameTemp[_0x124162(0x1d9)]();else{if($gameTemp[_0x124162(0x2f7)]()){const _0x5375ff=$gameTemp[_0x124162(0x113)](),_0x22954d=$gameTemp[_0x124162(0x163)]();this[_0x124162(0x14c)](_0x5375ff,_0x22954d)?_0x2e8539=this[_0x124162(0x3c7)](_0x5375ff,_0x22954d):_0x2e8539=this['findDirectionTo'](_0x5375ff,_0x22954d);}}_0x2e8539>0x0?(this['_inputTime']=this[_0x124162(0xc0)]||0x0,this['isTurnInPlace']()?this[_0x124162(0x1f1)](_0x2e8539):this[_0x124162(0x564)](_0x2e8539),this[_0x124162(0xc0)]++):this[_0x124162(0xc0)]=0x0;}},Game_Player[_0x47bd44(0xc5)][_0x47bd44(0x4cc)]=function(){const _0x3a0f74=_0x47bd44,_0x1fba40=VisuMZ[_0x3a0f74(0x25c)][_0x3a0f74(0x2d0)][_0x3a0f74(0x44d)];if(!_0x1fba40[_0x3a0f74(0x527)])return![];if($gameTemp[_0x3a0f74(0x2f7)]())return![];if(this[_0x3a0f74(0x49b)]()||this[_0x3a0f74(0xed)]()||this['isOnLadder']())return![];return this[_0x3a0f74(0xc0)]<_0x1fba40[_0x3a0f74(0x221)];},VisuMZ['EventsMoveCore'][_0x47bd44(0x216)]=Game_Player[_0x47bd44(0xc5)][_0x47bd44(0x564)],Game_Player[_0x47bd44(0xc5)][_0x47bd44(0x564)]=function(_0x3c2b0e){const _0x83fd1c=_0x47bd44;$gameMap[_0x83fd1c(0x233)]()?this[_0x83fd1c(0x1ef)](_0x3c2b0e):VisuMZ['EventsMoveCore']['Game_Player_executeMove'][_0x83fd1c(0x34a)](this,_0x3c2b0e);},VisuMZ[_0x47bd44(0x25c)][_0x47bd44(0x13b)]=Game_Player[_0x47bd44(0xc5)][_0x47bd44(0x299)],Game_Player[_0x47bd44(0xc5)][_0x47bd44(0x299)]=function(_0x586537,_0x5480a2,_0x3fe7bf){const _0x23f938=_0x47bd44;if($gameMap['isRegionAllowPass'](_0x586537,_0x5480a2,_0x3fe7bf,_0x23f938(0x518)))return this['isInVehicle']()&&this[_0x23f938(0x2a9)]()?this[_0x23f938(0x2a9)]()[_0x23f938(0x299)](_0x586537,_0x5480a2,_0x3fe7bf):!![];if($gameMap[_0x23f938(0x13f)](_0x586537,_0x5480a2,_0x3fe7bf,_0x23f938(0x518)))return![];return VisuMZ[_0x23f938(0x25c)][_0x23f938(0x13b)][_0x23f938(0x34a)](this,_0x586537,_0x5480a2,_0x3fe7bf);},VisuMZ['EventsMoveCore'][_0x47bd44(0x1ca)]=Game_Player[_0x47bd44(0xc5)][_0x47bd44(0x4e6)],Game_Player[_0x47bd44(0xc5)][_0x47bd44(0x4e6)]=function(_0x812d2a){const _0xa1c0be=_0x47bd44;VisuMZ[_0xa1c0be(0x25c)]['Game_Player_checkEventTriggerHere'][_0xa1c0be(0x34a)](this,_0x812d2a);if(this[_0xa1c0be(0x259)]()){this[_0xa1c0be(0x3f5)](_0x812d2a);if(_0x812d2a[_0xa1c0be(0x3ae)](0x0)&&this[_0xa1c0be(0x230)]()===_0xa1c0be(0xe4))this[_0xa1c0be(0x56a)](this['x'],this['y']);else(_0x812d2a[_0xa1c0be(0x3ae)](0x1)||_0x812d2a[_0xa1c0be(0x3ae)](0x2))&&this[_0xa1c0be(0x462)]();}},VisuMZ['EventsMoveCore']['Game_Player_checkEventTriggerThere']=Game_Player[_0x47bd44(0xc5)][_0x47bd44(0x442)],Game_Player[_0x47bd44(0xc5)][_0x47bd44(0x442)]=function(_0x2d0e3d){const _0x1c77cc=_0x47bd44;VisuMZ[_0x1c77cc(0x25c)][_0x1c77cc(0x40b)][_0x1c77cc(0x34a)](this,_0x2d0e3d);if(this[_0x1c77cc(0x259)]()&&_0x2d0e3d[_0x1c77cc(0x3ae)](0x0)&&this[_0x1c77cc(0x230)]()==='front'){const _0x137e32=this['direction'](),_0x488abb=$gameMap[_0x1c77cc(0x302)](this['x'],_0x137e32),_0x193d26=$gameMap[_0x1c77cc(0x3ac)](this['y'],_0x137e32);this[_0x1c77cc(0x56a)](_0x488abb,_0x193d26);}},Game_Player[_0x47bd44(0xc5)][_0x47bd44(0x3f5)]=function(_0x736bb7){const _0x1253b4=_0x47bd44;if($gameMap[_0x1253b4(0x325)]())return;if($gameMap[_0x1253b4(0x234)]())return;const _0x3985fd=$gameMap['events']();for(const _0x310949 of _0x3985fd){if(!_0x310949)continue;if(!_0x310949[_0x1253b4(0x3ef)](_0x736bb7))continue;if(this[_0x1253b4(0x521)](_0x310949))return _0x310949[_0x1253b4(0x22a)]();if(this[_0x1253b4(0x535)](_0x310949))return _0x310949['start']();}},Game_Player[_0x47bd44(0xc5)][_0x47bd44(0x521)]=function(_0x5843e9){const _0x138aaf=_0x47bd44;if($gameMap[_0x138aaf(0x325)]())return![];if($gameMap[_0x138aaf(0x234)]())return![];return _0x5843e9[_0x138aaf(0x27b)]()[_0x138aaf(0x3ae)](this[_0x138aaf(0x11f)]());},Game_Player[_0x47bd44(0xc5)][_0x47bd44(0x535)]=function(_0x278b7c){const _0x8d1d6d=_0x47bd44;if($gameMap[_0x8d1d6d(0x325)]())return![];if($gameMap['isAnyEventStarting']())return![];if([_0x8d1d6d(0x2b5),_0x8d1d6d(0x2e5)][_0x8d1d6d(0x3ae)](_0x278b7c['activationProximityType']()))return![];const _0x13f7e2=_0x278b7c[_0x8d1d6d(0x463)](),_0x4d87a9=_0x278b7c[_0x8d1d6d(0x4b6)]();return this['checkEventProximity'](_0x278b7c,_0x13f7e2,_0x4d87a9);},Game_Map[_0x47bd44(0xc5)][_0x47bd44(0x220)]=function(_0xb6f507,_0x4fb33a,_0x453539,_0x376b9c,_0x42b51f){const _0x2c2f08=_0x47bd44;switch(_0x376b9c){case _0x2c2f08(0x578):return _0x42b51f>=Math[_0x2c2f08(0x173)](_0x453539['deltaXFrom'](_0xb6f507))&&_0x42b51f>=Math['abs'](_0x453539[_0x2c2f08(0x316)](_0x4fb33a));break;case _0x2c2f08(0x565):const _0x188f1f=Math[_0x2c2f08(0x36d)](_0x453539['x']-_0xb6f507,0x2),_0x335c30=Math[_0x2c2f08(0x36d)](_0x453539['y']-_0x4fb33a,0x2);return _0x42b51f>=Math['round'](Math[_0x2c2f08(0x392)](_0x188f1f+_0x335c30));break;case _0x2c2f08(0x480):case _0x2c2f08(0x31d):case _0x2c2f08(0x2d8):const _0x12f2ae=$gameMap[_0x2c2f08(0x54d)](_0xb6f507,_0x4fb33a,_0x453539['x'],_0x453539['y']);return _0x42b51f>=_0x12f2ae;break;case _0x2c2f08(0x3e1):return _0x42b51f>=Math[_0x2c2f08(0x173)](_0x453539[_0x2c2f08(0x316)](_0x4fb33a));break;case _0x2c2f08(0x52e):return _0x42b51f>=Math['abs'](_0x453539[_0x2c2f08(0x422)](_0xb6f507));break;}return![];},Game_Player['prototype'][_0x47bd44(0x220)]=function(_0xa90bfb,_0x5faba,_0x5b1a69){const _0x1d987b=this['x'],_0x5443f0=this['y'];return $gameMap['checkEventProximity'](_0x1d987b,_0x5443f0,_0xa90bfb,_0x5faba,_0x5b1a69);},Game_Player[_0x47bd44(0xc5)][_0x47bd44(0x56a)]=function(_0x59b119,_0x1b1284){const _0x1cafc4=_0x47bd44;if($gameMap['isEventRunning']())return;if($gameMap[_0x1cafc4(0x234)]())return;let _0x4b765e=VisuMZ[_0x1cafc4(0x25c)][_0x1cafc4(0x2d0)]['RegionOk'],_0x37c7b9=$gameMap[_0x1cafc4(0x11f)](_0x59b119,_0x1b1284);const _0x1f8d19=_0x1cafc4(0x2ed)[_0x1cafc4(0x15f)](_0x37c7b9);_0x4b765e[_0x1f8d19]&&$gameTemp[_0x1cafc4(0x4a5)](_0x4b765e[_0x1f8d19]);},Game_Player[_0x47bd44(0xc5)][_0x47bd44(0x230)]=function(){const _0x5ae029=_0x47bd44;return VisuMZ['EventsMoveCore'][_0x5ae029(0x2d0)][_0x5ae029(0x3a6)];},Game_Player[_0x47bd44(0xc5)][_0x47bd44(0x462)]=function(){const _0x1efdb3=_0x47bd44;if($gameMap[_0x1efdb3(0x325)]())return;if($gameMap[_0x1efdb3(0x234)]())return;let _0x41ec26=VisuMZ[_0x1efdb3(0x25c)]['Settings']['RegionTouch'];const _0x57b49c='Region%1'[_0x1efdb3(0x15f)](this[_0x1efdb3(0x11f)]());_0x41ec26[_0x57b49c]&&$gameTemp['reserveCommonEvent'](_0x41ec26[_0x57b49c]);},VisuMZ[_0x47bd44(0x25c)][_0x47bd44(0x286)]=Game_Player[_0x47bd44(0xc5)][_0x47bd44(0x28d)],Game_Player[_0x47bd44(0xc5)][_0x47bd44(0x28d)]=function(){const _0x66205a=_0x47bd44;VisuMZ['EventsMoveCore'][_0x66205a(0x286)]['call'](this),VisuMZ[_0x66205a(0x31c)](0x0);},Game_Player[_0x47bd44(0xc5)][_0x47bd44(0x347)]=function(){const _0x47441d=_0x47bd44;VisuMZ[_0x47441d(0x20b)](0x0);},VisuMZ[_0x47bd44(0x25c)][_0x47bd44(0x2ae)]=Game_Follower['prototype']['initialize'],Game_Follower['prototype']['initialize']=function(_0x190b87){const _0x50d3fd=_0x47bd44;VisuMZ[_0x50d3fd(0x25c)]['Game_Follower_initialize'][_0x50d3fd(0x34a)](this,_0x190b87),this[_0x50d3fd(0x371)]=![];},Game_Follower[_0x47bd44(0xc5)][_0x47bd44(0x49b)]=function(){const _0x278159=_0x47bd44;if(this[_0x278159(0x371)])return Game_Character[_0x278159(0xc5)][_0x278159(0x49b)][_0x278159(0x34a)](this);return $gamePlayer[_0x278159(0x49b)]();},Game_Follower['prototype'][_0x47bd44(0x363)]=function(){const _0x4c6da3=_0x47bd44;if(this[_0x4c6da3(0x371)])return Game_Character[_0x4c6da3(0xc5)][_0x4c6da3(0x363)]['call'](this);return $gamePlayer[_0x4c6da3(0x363)]()&&this['_actuallyMoving'];},Game_Follower[_0x47bd44(0xc5)][_0x47bd44(0x3cf)]=function(){const _0x15ff03=_0x47bd44;return $gamePlayer[_0x15ff03(0x3cf)]();},Game_Follower[_0x47bd44(0xc5)][_0x47bd44(0x1eb)]=function(){const _0x225e6e=_0x47bd44;Game_Character[_0x225e6e(0xc5)][_0x225e6e(0x1eb)]['call'](this),this[_0x225e6e(0x10d)]>0x0&&(this[_0x225e6e(0x1e4)]=![]);},Game_Follower[_0x47bd44(0xc5)]['setChaseOff']=function(_0x124a1d){const _0x564a48=_0x47bd44;this[_0x564a48(0x371)]=_0x124a1d;},VisuMZ['EventsMoveCore'][_0x47bd44(0x3a3)]=Game_Follower['prototype'][_0x47bd44(0x1b4)],Game_Follower[_0x47bd44(0xc5)]['chaseCharacter']=function(_0x45dc9a){const _0x2a8e13=_0x47bd44;if(this[_0x2a8e13(0x371)])return;if($gameSystem[_0x2a8e13(0x3dd)]())return;VisuMZ[_0x2a8e13(0x25c)][_0x2a8e13(0x3a3)][_0x2a8e13(0x34a)](this,_0x45dc9a),this['_actuallyMoving']=!![];},VisuMZ[_0x47bd44(0x25c)]['Game_Vehicle_isMapPassable']=Game_Vehicle[_0x47bd44(0xc5)][_0x47bd44(0x299)],Game_Vehicle[_0x47bd44(0xc5)][_0x47bd44(0x299)]=function(_0x4b9494,_0x4cb1f9,_0x19f489){const _0x1e6778=_0x47bd44;if($gameMap[_0x1e6778(0x43b)](_0x4b9494,_0x4cb1f9,_0x19f489,this['_type']))return!![];if($gameMap[_0x1e6778(0x13f)](_0x4b9494,_0x4cb1f9,_0x19f489,this[_0x1e6778(0x29f)]))return![];return VisuMZ[_0x1e6778(0x25c)][_0x1e6778(0x1ad)][_0x1e6778(0x34a)](this,_0x4b9494,_0x4cb1f9,_0x19f489);},Game_Vehicle['prototype'][_0x47bd44(0x46d)]=function(_0x2335a9,_0x4a0ed1,_0x47ea93){const _0x5f69c8=_0x47bd44;if($gameMap['isRegionAllowPass'](_0x2335a9,_0x4a0ed1,_0x47ea93,this[_0x5f69c8(0x29f)]))return!![];if($gameMap[_0x5f69c8(0x13f)](_0x2335a9,_0x4a0ed1,_0x47ea93,this[_0x5f69c8(0x29f)]))return![];return VisuMZ[_0x5f69c8(0x25c)][_0x5f69c8(0x2c8)][_0x5f69c8(0x34a)]($gamePlayer,_0x2335a9,_0x4a0ed1,_0x47ea93);},VisuMZ['EventsMoveCore'][_0x47bd44(0x397)]=Game_Vehicle[_0x47bd44(0xc5)]['isLandOk'],Game_Vehicle['prototype'][_0x47bd44(0x370)]=function(_0x2418fe,_0x47c658,_0xe9942a){const _0x47ccb1=_0x47bd44;if($gameMap[_0x47ccb1(0x4c4)](_0x2418fe,_0x47c658,_0xe9942a,this[_0x47ccb1(0x29f)]))return!![];const _0x1ff3c2=this[_0x47ccb1(0x29f)][_0x47ccb1(0x48d)](0x0)[_0x47ccb1(0x474)]()+this[_0x47ccb1(0x29f)]['slice'](0x1),_0x5c41ea=_0x47ccb1(0x174)[_0x47ccb1(0x15f)](_0x1ff3c2);return VisuMZ['EventsMoveCore'][_0x47ccb1(0x2d0)]['Region'][_0x5c41ea]?![]:VisuMZ[_0x47ccb1(0x25c)][_0x47ccb1(0x397)]['call'](this,_0x2418fe,_0x47c658,_0xe9942a);},VisuMZ[_0x47bd44(0x25c)][_0x47bd44(0x40a)]=Game_Vehicle['prototype'][_0x47bd44(0x128)],Game_Vehicle[_0x47bd44(0xc5)][_0x47bd44(0x128)]=function(){const _0x19cd9a=_0x47bd44;VisuMZ[_0x19cd9a(0x25c)][_0x19cd9a(0x40a)][_0x19cd9a(0x34a)](this);const _0x3cc2b0=VisuMZ[_0x19cd9a(0x25c)][_0x19cd9a(0x2d0)][_0x19cd9a(0x44d)];if(this['isBoat']()){if(_0x3cc2b0[_0x19cd9a(0x1e7)])this[_0x19cd9a(0x313)](_0x3cc2b0[_0x19cd9a(0x1e7)]);}else{if(this[_0x19cd9a(0x33f)]()){if(_0x3cc2b0['ShipSpeed'])this[_0x19cd9a(0x313)](_0x3cc2b0[_0x19cd9a(0x182)]);}else{if(this[_0x19cd9a(0xe0)]()){if(_0x3cc2b0[_0x19cd9a(0x3d6)])this[_0x19cd9a(0x313)](_0x3cc2b0['AirshipSpeed']);}}}},VisuMZ[_0x47bd44(0x25c)][_0x47bd44(0x432)]=Game_Event[_0x47bd44(0xc5)][_0x47bd44(0x148)],Game_Event[_0x47bd44(0xc5)][_0x47bd44(0x148)]=function(_0xfdad2a,_0xfae1d0){const _0x21b850=_0x47bd44;this[_0x21b850(0x26c)]=!![],VisuMZ[_0x21b850(0x25c)]['Game_Event_initialize']['call'](this,_0xfdad2a,_0xfae1d0),this[_0x21b850(0x26c)]=undefined,this[_0x21b850(0xc9)](),this['setupMorphEvent'](),this['restoreSavedEventPosition']();},Game_Map['prototype'][_0x47bd44(0x38a)]=function(_0x331543,_0xd37cf9){const _0x3b10c1=_0x47bd44;return _0x331543===$gameMap[_0x3b10c1(0x2c5)]()?$dataMap[_0x3b10c1(0x2f3)][_0xd37cf9]:VisuMZ[_0x3b10c1(0x3eb)][_0x331543]['events'][_0xd37cf9];},VisuMZ[_0x47bd44(0x25c)]['Game_Event_event']=Game_Event[_0x47bd44(0xc5)][_0x47bd44(0xf1)],Game_Event[_0x47bd44(0xc5)][_0x47bd44(0xf1)]=function(){const _0x39eeca=_0x47bd44;if(this['_eventMorphData']!==undefined){const _0x1650d=this[_0x39eeca(0xdc)][_0x39eeca(0x2c5)],_0x215b13=this[_0x39eeca(0xdc)][_0x39eeca(0x236)];return $gameMap[_0x39eeca(0x38a)](_0x1650d,_0x215b13);}if(this[_0x39eeca(0x476)]!==undefined){const _0x58c1c6=this['_eventCopyData'][_0x39eeca(0x2c5)],_0x220cc2=this[_0x39eeca(0x476)][_0x39eeca(0x236)];return $gameMap[_0x39eeca(0x38a)](_0x58c1c6,_0x220cc2);}if(this[_0x39eeca(0x4ef)]!==undefined){const _0x413c68=this['_eventSpawnData'][_0x39eeca(0x2c5)],_0xe3e87a=this[_0x39eeca(0x4ef)][_0x39eeca(0x236)];return $gameMap[_0x39eeca(0x38a)](_0x413c68,_0xe3e87a);}if($gameTemp['_spawnData']!==undefined){const _0xb73f7c=$gameTemp[_0x39eeca(0x394)]['mapId'],_0x197137=$gameTemp['_spawnData'][_0x39eeca(0x236)];return $gameMap['referEvent'](_0xb73f7c,_0x197137);}return VisuMZ[_0x39eeca(0x25c)][_0x39eeca(0x2ff)]['call'](this);},Game_Event['prototype']['checkValidEventerMap']=function(_0x46b838,_0x3fb305){const _0x520e45=_0x47bd44;if(_0x46b838===0x0||_0x3fb305===0x0)return![];if(_0x46b838===$gameMap[_0x520e45(0x2c5)]())return!![];if(!VisuMZ['PreloadedMaps'][_0x46b838]&&_0x46b838!==$gameMap[_0x520e45(0x2c5)]())return $gameTemp[_0x520e45(0x267)]()&&console['log'](_0x520e45(0x1f4)[_0x520e45(0x15f)](_0x46b838)),![];return!![];},VisuMZ[_0x47bd44(0x25c)][_0x47bd44(0xd5)]=Game_Event['prototype'][_0x47bd44(0x22a)],Game_Event[_0x47bd44(0xc5)][_0x47bd44(0x22a)]=function(){const _0x72e8f8=_0x47bd44;VisuMZ[_0x72e8f8(0x25c)][_0x72e8f8(0xd5)]['call'](this),Imported[_0x72e8f8(0x14f)]&&Input[_0x72e8f8(0xa9)](VisuMZ[_0x72e8f8(0x423)][_0x72e8f8(0x2d0)][_0x72e8f8(0x41a)]['FastForwardKey'])&&Input[_0x72e8f8(0x4ff)]();},Game_Event['prototype'][_0x47bd44(0xc9)]=function(){const _0x35b20b=_0x47bd44,_0x10d973=this['event']()[_0x35b20b(0x3b3)];if(_0x10d973==='')return;if(DataManager['isBattleTest']()||DataManager[_0x35b20b(0x1a9)]())return;const _0x2955a9=VisuMZ['EventsMoveCore']['Settings'][_0x35b20b(0x280)];let _0x120722=null,_0xde3c81=0x0,_0x3e4bb2=0x0;if(_0x10d973[_0x35b20b(0x153)](/<COPY EVENT:[ ]MAP[ ](\d+),[ ]EVENT[ ](\d+)>/i)){_0xde3c81=Number(RegExp['$1']),_0x3e4bb2=Number(RegExp['$2']);if(_0xde3c81===0x0)_0xde3c81=$gameMap['mapId']();}else{if(_0x10d973[_0x35b20b(0x153)](/<COPY EVENT:[ ](\d+),[ ](\d+)>/i)){_0xde3c81=Number(RegExp['$1']),_0x3e4bb2=Number(RegExp['$2']);if(_0xde3c81===0x0)_0xde3c81=$gameMap[_0x35b20b(0x2c5)]();}else{if(_0x10d973[_0x35b20b(0x153)](/<COPY EVENT:[ ](.*?)>/i)){const _0x16f54e=String(RegExp['$1'])[_0x35b20b(0x474)]()['trim']();_0x120722=VisuMZ[_0x35b20b(0x505)][_0x16f54e];if(!_0x120722)return;_0xde3c81=_0x120722[_0x35b20b(0x406)],_0x3e4bb2=_0x120722[_0x35b20b(0x2d3)];}}}if(!this[_0x35b20b(0xe9)](_0xde3c81,_0x3e4bb2))return;_0x2955a9[_0x35b20b(0x367)]['call'](this,_0xde3c81,_0x3e4bb2,this);if(_0x120722)_0x120722['PreCopyJS'][_0x35b20b(0x34a)](this,_0xde3c81,_0x3e4bb2,this);this['_eventCopyData']={'mapId':_0xde3c81,'eventId':_0x3e4bb2},this[_0x35b20b(0x310)]=-0x2,this[_0x35b20b(0x2af)](),_0x2955a9[_0x35b20b(0x32b)]['call'](this,_0xde3c81,_0x3e4bb2,this);if(_0x120722)_0x120722['PostCopyJS'][_0x35b20b(0x34a)](this,_0xde3c81,_0x3e4bb2,this);$gameMap[_0x35b20b(0x50e)]();},Game_Event[_0x47bd44(0xc5)]['setupMorphEvent']=function(){const _0x50e13a=_0x47bd44,_0x8870cc=$gameSystem[_0x50e13a(0x57f)](this);if(!_0x8870cc)return;const _0x1b134b=_0x8870cc['template']['toUpperCase']()[_0x50e13a(0x271)]();_0x1b134b!=='UNTITLED'?this[_0x50e13a(0x3ad)](_0x1b134b,!![]):this[_0x50e13a(0x40e)](_0x8870cc[_0x50e13a(0x2c5)],_0x8870cc[_0x50e13a(0x236)],!![]);},Game_Event[_0x47bd44(0xc5)][_0x47bd44(0x40e)]=function(_0x1b1af0,_0x2ccee0,_0x4667a7){const _0xfe494=_0x47bd44;if(!this[_0xfe494(0xe9)](_0x1b1af0,_0x2ccee0))return;const _0x3d77ad=VisuMZ[_0xfe494(0x25c)][_0xfe494(0x2d0)]['Template'];if(!_0x4667a7)_0x3d77ad[_0xfe494(0x482)][_0xfe494(0x34a)](this,_0x1b1af0,_0x2ccee0,this);this[_0xfe494(0xdc)]={'mapId':_0x1b1af0,'eventId':_0x2ccee0},this[_0xfe494(0x310)]=-0x2,this[_0xfe494(0x2af)]();if(!_0x4667a7)_0x3d77ad[_0xfe494(0x383)][_0xfe494(0x34a)](this,_0x1b1af0,_0x2ccee0,this);$gameMap['clearEventCache']();},Game_Event[_0x47bd44(0xc5)][_0x47bd44(0x3ad)]=function(_0x1527ec,_0x52232d){const _0x106438=_0x47bd44;_0x1527ec=_0x1527ec['toUpperCase']()[_0x106438(0x271)]();const _0x3984a7=VisuMZ[_0x106438(0x505)][_0x1527ec];if(!_0x3984a7)return;const _0x2ec023=_0x3984a7[_0x106438(0x406)],_0x32ee41=_0x3984a7['EventID'];if(!this['checkValidEventerMap'](_0x2ec023,_0x32ee41))return;if(!_0x52232d)_0x3984a7['PreMorphJS'][_0x106438(0x34a)](this,_0x2ec023,_0x32ee41,this);this[_0x106438(0x40e)](_0x2ec023,_0x32ee41,_0x52232d);if(!_0x52232d)_0x3984a7[_0x106438(0x383)][_0x106438(0x34a)](this,_0x2ec023,_0x32ee41,this);if($gameMap)$gameMap[_0x106438(0x50e)]();},Game_Event[_0x47bd44(0xc5)]['removeMorph']=function(){const _0x204da1=_0x47bd44;this['_eventMorphData']=undefined,this['_pageIndex']=-0x2,this[_0x204da1(0x2af)]();},Game_Event[_0x47bd44(0xc5)][_0x47bd44(0x28b)]=function(_0x4736ca){const _0x5e7937=_0x47bd44,_0x19018a=VisuMZ['EventsMoveCore'][_0x5e7937(0x2d0)][_0x5e7937(0x280)],_0x251319=_0x4736ca[_0x5e7937(0x504)][_0x5e7937(0x474)]()[_0x5e7937(0x271)](),_0x32f619=!['','UNTITLED'][_0x5e7937(0x3ae)](_0x251319);let _0x3a5ab5=0x0,_0x3e9849=0x0;if(_0x32f619){const _0x132d3a=VisuMZ['EventTemplates'][_0x251319];if(!_0x132d3a)return;_0x3a5ab5=_0x132d3a['MapID'],_0x3e9849=_0x132d3a[_0x5e7937(0x2d3)];}else _0x3a5ab5=_0x4736ca['mapId'],_0x3e9849=_0x4736ca[_0x5e7937(0x236)];if(!this['checkValidEventerMap'](_0x3a5ab5,_0x3e9849))return;if(_0x32f619){const _0x2c4397=VisuMZ['EventTemplates'][_0x251319];_0x2c4397[_0x5e7937(0x530)][_0x5e7937(0x34a)](this,_0x3a5ab5,_0x3e9849,this);}_0x19018a['PreSpawnJS'][_0x5e7937(0x34a)](this,_0x3a5ab5,_0x3e9849,this),this['_eventSpawnData']=_0x4736ca,this[_0x5e7937(0x310)]=-0x2,this[_0x5e7937(0x55b)]=$gameMap[_0x5e7937(0x2c5)](),this[_0x5e7937(0xd2)]=_0x4736ca[_0x5e7937(0x523)],this[_0x5e7937(0x249)]=_0x4736ca[_0x5e7937(0x33a)],this['locate'](_0x4736ca['x'],_0x4736ca['y']),this['setDirection'](_0x4736ca['direction']),this[_0x5e7937(0x2af)]();if(_0x32f619){const _0x2e6bf7=VisuMZ['EventTemplates'][_0x251319];if(!_0x2e6bf7)return;_0x2e6bf7[_0x5e7937(0x33d)][_0x5e7937(0x34a)](this,_0x3a5ab5,_0x3e9849,this);}_0x19018a[_0x5e7937(0x33d)][_0x5e7937(0x34a)](this,_0x3a5ab5,_0x3e9849,this);const _0x27933b=SceneManager[_0x5e7937(0x45e)];if(_0x27933b&&_0x27933b[_0x5e7937(0x38b)])_0x27933b[_0x5e7937(0x38b)]['createSpawnedEvent'](this);},Game_Event[_0x47bd44(0xc5)][_0x47bd44(0x501)]=function(){const _0x526bdd=_0x47bd44;return!!this[_0x526bdd(0x4ef)];},Game_Event[_0x47bd44(0xc5)][_0x47bd44(0x22a)]=function(){const _0x2ba7f3=_0x47bd44;if(!this[_0x2ba7f3(0x3b1)]())return;const _0x517587=this['list']()[_0x2ba7f3(0x2ef)](_0x4926fc=>_0x4926fc[_0x2ba7f3(0x170)]!==0x6c&&_0x4926fc[_0x2ba7f3(0x170)]!==0x198);_0x517587['length']>0x1&&(this[_0x2ba7f3(0x502)]=!![],this[_0x2ba7f3(0x3ef)]([0x0,0x1,0x2])&&this[_0x2ba7f3(0x3b5)]());},VisuMZ[_0x47bd44(0x25c)]['Game_Event_clearPageSettings']=Game_Event[_0x47bd44(0xc5)][_0x47bd44(0x436)],Game_Event[_0x47bd44(0xc5)][_0x47bd44(0x436)]=function(){const _0xd11864=_0x47bd44;VisuMZ[_0xd11864(0x25c)][_0xd11864(0x552)][_0xd11864(0x34a)](this),this[_0xd11864(0x4bd)](),this[_0xd11864(0x227)]();},VisuMZ[_0x47bd44(0x25c)][_0x47bd44(0x425)]=Game_Event['prototype']['setupPageSettings'],Game_Event[_0x47bd44(0xc5)][_0x47bd44(0x1ed)]=function(){const _0xf82c7f=_0x47bd44;this[_0xf82c7f(0xdf)]=!![],VisuMZ[_0xf82c7f(0x25c)][_0xf82c7f(0x425)][_0xf82c7f(0x34a)](this),this[_0xf82c7f(0x192)](),this[_0xf82c7f(0x227)](),this['_activationProximityAutoTriggerBypass']=![];},Game_Event['prototype'][_0x47bd44(0x192)]=function(){const _0x5a4879=_0x47bd44;if(!this[_0x5a4879(0xf1)]())return;this[_0x5a4879(0x4bd)](),this[_0x5a4879(0x4b0)](),this[_0x5a4879(0x262)](),this['updateEventsMoveCoreTagChanges']();},Game_Event[_0x47bd44(0xc5)][_0x47bd44(0x4b0)]=function(){const _0x504945=_0x47bd44,_0x5e2a6a=this[_0x504945(0xf1)]()[_0x504945(0x3b3)];if(_0x5e2a6a==='')return;this[_0x504945(0x488)](_0x5e2a6a);},Game_Event[_0x47bd44(0xc5)][_0x47bd44(0x262)]=function(){const _0x207486=_0x47bd44;if(!this[_0x207486(0x179)]())return;const _0x5e8961=this[_0x207486(0x3b1)]();let _0x163ee0='';for(const _0x50dbf6 of _0x5e8961){if([0x6c,0x198][_0x207486(0x3ae)](_0x50dbf6[_0x207486(0x170)])){if(_0x163ee0!=='')_0x163ee0+='\x0a';_0x163ee0+=_0x50dbf6[_0x207486(0x2dd)][0x0];}}this['checkEventsMoveCoreStringTags'](_0x163ee0);},Game_Event[_0x47bd44(0xc5)][_0x47bd44(0x4bd)]=function(){const _0x494846=_0x47bd44,_0xd61924=VisuMZ[_0x494846(0x25c)]['Settings'];this[_0x494846(0x180)]={'type':'none','distance':0x0,'regionList':[]},this['_alwaysUpdateMove']=![],this['clearAttachPictureSettings'](),this[_0x494846(0x461)]=![],this['_customZ']=![],(this[_0x494846(0xd6)]()||this['isObjectCharacter']())&&this[_0x494846(0x4da)]===0x0&&(this[_0x494846(0xde)]=0x0),this[_0x494846(0x155)]={'up':0x0,'down':0x0,'left':0x0,'right':0x0},this['_encounterHalfProximity']={'type':_0x494846(0x2b5),'distance':0x0},this[_0x494846(0x4a4)]={'type':_0x494846(0x2b5),'distance':0x0},$gameSystem[_0x494846(0x23c)](this),this[_0x494846(0x131)]=$gameSystem['getEventIconData'](this),this[_0x494846(0x3f0)]={'originalText':'','text':'','visibleRange':_0xd61924[_0x494846(0x56f)]['VisibleRange'],'rangeType':_0xd61924[_0x494846(0x56f)]['RangeType'],'offsetX':_0xd61924[_0x494846(0x56f)][_0x494846(0x412)],'offsetY':_0xd61924[_0x494846(0x56f)][_0x494846(0x315)],'hueShift':0x0},this[_0x494846(0x519)]=![],this[_0x494846(0x294)]=[],this[_0x494846(0x21b)]={'target':-0x1,'type':'random','delay':0x1,'opacityDelta':0x0},this[_0x494846(0x199)]=_0xd61924['Movement']['RandomMoveWeight']??0x0,this['_saveEventLocation']=![],this[_0x494846(0x45d)]=0x1,this[_0x494846(0x561)]=0x1,this[_0x494846(0x549)]=![],this[_0x494846(0x57b)]=![],this[_0x494846(0x360)]=![],this[_0x494846(0xae)]={'visible':!![],'filename':_0xd61924[_0x494846(0x44d)][_0x494846(0x4eb)]},this[_0x494846(0x17d)]={'up':0x0,'down':0x0,'left':0x0,'right':0x0},this[_0x494846(0x3fe)](),this[_0x494846(0x29a)]();},Game_Event['prototype'][_0x47bd44(0x488)]=function(_0x20bbae){const _0x380c11=_0x47bd44;if(_0x20bbae['match'](/<ACTIVATION[ ](?:REGION|REGIONS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i))this[_0x380c11(0x180)][_0x380c11(0x12d)]=JSON[_0x380c11(0x34e)]('['+RegExp['$1'][_0x380c11(0x153)](/\d+/g)+']'),this[_0x380c11(0x180)][_0x380c11(0x161)]='region';else _0x20bbae[_0x380c11(0x153)](/<ACTIVATION[ ](.*?):[ ](\d+)>/i)&&(type=String(RegExp['$1'])[_0x380c11(0x2fd)]()[_0x380c11(0x271)](),this[_0x380c11(0x180)]['type']=type,this[_0x380c11(0x180)][_0x380c11(0x54d)]=Number(RegExp['$2']));_0x20bbae[_0x380c11(0x153)](/<(?:ATTACH |)PICTURE FILENAME:[ ](.*?)>/i)&&(this[_0x380c11(0x261)]['filename']=String(RegExp['$1']),this[_0x380c11(0x261)]['type']='picture');if(_0x20bbae[_0x380c11(0x153)](/<(?:ATTACH |)(?:PICTURE|ENEMY|SV ENEMY) BLEND MODE:[ ](.*?)>/i)){const _0x4be676=String(RegExp['$1'])[_0x380c11(0x474)]()[_0x380c11(0x271)](),_0x33c896=[_0x380c11(0x1cf),_0x380c11(0x31e),_0x380c11(0x2fa),_0x380c11(0x2b0)];this['_attachPicture'][_0x380c11(0x39c)]=_0x33c896['indexOf'](_0x4be676)[_0x380c11(0x39b)](0x0,0x3);}_0x20bbae[_0x380c11(0x153)](/<(?:ATTACH |)(?:PICTURE|ENEMY|SV ENEMY) (?:SIZE|MAX SIZE|MAX):[ ](\d+)>/i)&&(this[_0x380c11(0x261)]['maxSize']=Number(RegExp['$1']));_0x20bbae[_0x380c11(0x153)](/<(?:ATTACH |)(?:PICTURE|ENEMY|SV ENEMY) OFFSET X:[ ]([\+\-]\d+)>/i)&&(this[_0x380c11(0x261)][_0x380c11(0x3b8)]=Number(RegExp['$1']));_0x20bbae[_0x380c11(0x153)](/<(?:ATTACH |)(?:PICTURE|ENEMY|SV ENEMY) OFFSET Y:[ ]([\+\-]\d+)>/i)&&(this[_0x380c11(0x261)][_0x380c11(0x4ed)]=Number(RegExp['$1']));_0x20bbae['match'](/<(?:ATTACH |)(?:PICTURE|ENEMY|SV ENEMY) OFFSET:[ ]([\+\-]\d+),[ ]([\+\-]\d+)>/i)&&(this[_0x380c11(0x261)]['offsetX']=Number(RegExp['$1']),this[_0x380c11(0x261)][_0x380c11(0x4ed)]=Number(RegExp['$2']));_0x20bbae['match'](/<(?:ATTACH |)(?:PICTURE|ENEMY|SV ENEMY) SCALE:[ ](\d+)([%％])>/i)&&(this['_attachPicture'][_0x380c11(0x119)]=Number(RegExp['$1'])*0.01);_0x20bbae[_0x380c11(0x153)](/<(?:ATTACH |)PICTURE TYPE:[ ](.*?)>/i)&&(this['_attachPicture']['type']=String(RegExp['$1'])[_0x380c11(0x2fd)]()['trim']());_0x20bbae[_0x380c11(0x153)](/<(?:ATTACH |)ENEMY FILENAME:[ ](.*?)>/i)&&(this[_0x380c11(0x261)][_0x380c11(0x418)]=String(RegExp['$1']),this[_0x380c11(0x261)][_0x380c11(0x161)]=_0x380c11(0x41d));_0x20bbae['match'](/<(?:ATTACH |)SV ENEMY FILENAME:[ ](.*?)>/i)&&(this[_0x380c11(0x261)][_0x380c11(0x418)]=String(RegExp['$1']),this['_attachPicture'][_0x380c11(0x161)]=_0x380c11(0x16a));_0x20bbae[_0x380c11(0x153)](/<ALWAYS UPDATE MOVEMENT>/i)&&(this[_0x380c11(0x437)]=!![]);_0x20bbae[_0x380c11(0x153)](/<CLICK TRIGGER>/i)&&(this[_0x380c11(0x461)]=!![]);_0x20bbae['match'](/<CUSTOM Z:[ ](.*?)>/i)&&(this[_0x380c11(0xde)]=Number(RegExp['$1'])||0x0);_0x20bbae[_0x380c11(0x153)](/<ENC(?:|OUNTER) HALF[ ](.*?):[ ](\d+)>/i)&&(type=String(RegExp['$1'])[_0x380c11(0x2fd)]()['trim'](),this['_encounterHalfProximity'][_0x380c11(0x161)]=type,this[_0x380c11(0x4dc)][_0x380c11(0x54d)]=Number(RegExp['$2']));_0x20bbae[_0x380c11(0x153)](/<ENC(?:|OUNTER) NONE[ ](.*?):[ ](\d+)>/i)&&(type=String(RegExp['$1'])[_0x380c11(0x2fd)]()[_0x380c11(0x271)](),this['_encounterNoneProximity'][_0x380c11(0x161)]=type,this[_0x380c11(0x4a4)][_0x380c11(0x54d)]=Number(RegExp['$2']));const _0x4cfa78=_0x20bbae[_0x380c11(0x153)](/<HITBOX[ ](.*?):[ ](\d+)>/gi);if(_0x4cfa78)for(const _0x3f0e8a of _0x4cfa78){if(_0x3f0e8a[_0x380c11(0x153)](/<HITBOX[ ](.*?):[ ](\d+)>/i)){const _0x2fdbea=String(RegExp['$1'])[_0x380c11(0x2fd)]()[_0x380c11(0x271)](),_0x2dfdc4=Number(RegExp['$2']);this[_0x380c11(0x155)][_0x2fdbea]=_0x2dfdc4;}}if(this[_0x380c11(0x131)][_0x380c11(0xb8)]>=0x0&&!this[_0x380c11(0x131)][_0x380c11(0x40c)]){_0x20bbae['match'](/<ICON:[ ](\d+)>/i)&&(this[_0x380c11(0x131)][_0x380c11(0xb8)]=Number(RegExp['$1']));_0x20bbae[_0x380c11(0x153)](/<ICON (?:BUFFER|OFFSET) X:[ ]([\+\-]\d+)>/i)&&(this[_0x380c11(0x131)][_0x380c11(0x499)]=Number(RegExp['$1']));_0x20bbae[_0x380c11(0x153)](/<ICON (?:BUFFER|OFFSET) Y:[ ]([\+\-]\d+)>/i)&&(this[_0x380c11(0x131)][_0x380c11(0x486)]=Number(RegExp['$1']));_0x20bbae[_0x380c11(0x153)](/<ICON (?:BUFFER|OFFSET):[ ]([\+\-]\d+),[ ]([\+\-]\d+)>/i)&&(this['_eventIcon'][_0x380c11(0x499)]=Number(RegExp['$1']),this[_0x380c11(0x131)][_0x380c11(0x486)]=Number(RegExp['$2']));if(_0x20bbae[_0x380c11(0x153)](/<ICON BLEND MODE:[ ](.*?)>/i)){const _0x3916c2=String(RegExp['$1'])[_0x380c11(0x474)]()[_0x380c11(0x271)](),_0x5aa1f3=['NORMAL',_0x380c11(0x31e),_0x380c11(0x2fa),'SCREEN'];this[_0x380c11(0x131)][_0x380c11(0x39c)]=_0x5aa1f3[_0x380c11(0x2bd)](_0x3916c2)[_0x380c11(0x39b)](0x0,0x3);}$gameSystem[_0x380c11(0x4e8)](this,this['_eventIcon'][_0x380c11(0xb8)],this['_eventIcon'][_0x380c11(0x499)],this[_0x380c11(0x131)][_0x380c11(0x486)],this[_0x380c11(0x131)][_0x380c11(0x39c)]);}if(_0x20bbae[_0x380c11(0x153)](/<LABEL:[ ](.*?)>/i)){let _0x3cbb6a=String(RegExp['$1'])['trim']();this['_labelWindow'][_0x380c11(0x1a5)]=_0x3cbb6a,this[_0x380c11(0x3f0)]['originalText']=_0x3cbb6a;}if(_0x20bbae[_0x380c11(0x153)](/<LABEL>\s*([\s\S]*)\s*<\/LABEL>/i)){let _0x21fead=String(RegExp['$1'])[_0x380c11(0x271)]();this[_0x380c11(0x3f0)]['text']=_0x21fead,this['_labelWindow'][_0x380c11(0x533)]=_0x21fead;}_0x20bbae['match'](/<LABEL (?:BUFFER|OFFSET) X:[ ]([\+\-]\d+)>/i)&&(this['_labelWindow']['offsetX']=Number(RegExp['$1']));_0x20bbae['match'](/<LABEL (?:BUFFER|OFFSET) Y:[ ]([\+\-]\d+)>/i)&&(this[_0x380c11(0x3f0)][_0x380c11(0x4ed)]=Number(RegExp['$1']));_0x20bbae[_0x380c11(0x153)](/<LABEL (?:BUFFER|OFFSET):[ ]([\+\-]\d+),[ ]([\+\-]\d+)>/i)&&(this[_0x380c11(0x3f0)][_0x380c11(0x3b8)]=Number(RegExp['$1']),this[_0x380c11(0x3f0)][_0x380c11(0x4ed)]=Number(RegExp['$2']));_0x20bbae['match'](/<LABEL HUE SHIFT:[ ](.*?)>/i)&&(this[_0x380c11(0x3f0)][_0x380c11(0xd8)]=Number(RegExp['$1']));_0x20bbae[_0x380c11(0x153)](/<LABEL RANGE:[ ](\d+)>/i)&&(this['_labelWindow']['visibleRange']=Number(RegExp['$1']));_0x20bbae[_0x380c11(0x153)](/<LABEL RANGE TYPE: SQUARE>/i)&&(this[_0x380c11(0x3f0)][_0x380c11(0xe7)]=_0x380c11(0x578));_0x20bbae[_0x380c11(0x153)](/<LABEL RANGE TYPE: (?:RADIUS|DELTA|DIAMOND)>/i)&&(this[_0x380c11(0x3f0)]['rangeType']='delta');_0x20bbae['match'](/<LABEL RANGE TYPE: CIRCLE>/i)&&(this[_0x380c11(0x3f0)][_0x380c11(0xe7)]=_0x380c11(0x565));this['updateEventLabelText']();_0x20bbae[_0x380c11(0x153)](/<MIRROR SPRITE>/i)&&(this[_0x380c11(0x519)]=!![]);if(_0x20bbae[_0x380c11(0x153)](/<MOVE ONLY (?:REGION|REGIONS):[ ](\d+(?:\s*,\s*\d+)*)>/i)){const _0x57b8a6=JSON[_0x380c11(0x34e)]('['+RegExp['$1'][_0x380c11(0x153)](/\d+/g)+']');this[_0x380c11(0x294)]=this[_0x380c11(0x294)]['concat'](_0x57b8a6),this[_0x380c11(0x294)]['remove'](0x0);}if(_0x20bbae[_0x380c11(0x153)](/<MOVE SYNCH TARGET:[ ](.*?)>/i)){const _0x118390=String(RegExp['$1']);if(_0x118390[_0x380c11(0x153)](/PLAYER/i))this[_0x380c11(0x21b)]['target']=0x0;else _0x118390[_0x380c11(0x153)](/EVENT[ ](\d+)/i)&&(this['_moveSynch'][_0x380c11(0x1b5)]=Number(RegExp['$1']));}_0x20bbae[_0x380c11(0x153)](/<MOVE SYNCH TYPE:[ ](.*?)>/i)&&(this['_moveSynch'][_0x380c11(0x161)]=String(RegExp['$1'])[_0x380c11(0x2fd)]()['trim']());_0x20bbae[_0x380c11(0x153)](/<MOVE SYNCH DELAY:[ ](\d+)>/i)&&(this[_0x380c11(0x21b)][_0x380c11(0x22e)]=Number(RegExp['$1']));_0x20bbae[_0x380c11(0x153)](/<MOVE SYNCH DISTANCE OPACITY:[ ](.*?)>/i)&&(this[_0x380c11(0x21b)]['opacityDelta']=Number(RegExp['$1']));if(_0x20bbae[_0x380c11(0x153)](/<TRUE RANDOM MOVE>/i))this[_0x380c11(0x199)]=0x0;else _0x20bbae[_0x380c11(0x153)](/<RANDOM MOVE WEIGHT:[ ](.*?)>/i)&&(this[_0x380c11(0x199)]=Number(RegExp['$1'])||0x0);_0x20bbae[_0x380c11(0x153)](/<SAVE EVENT (?:LOCATION|LOCATIONS)>/i)&&(this['_saveEventLocation']=!![]);_0x20bbae['match'](/<SCALE X:[ ](\d+)([%％])>/i)&&(this[_0x380c11(0x45d)]=Number(RegExp['$1'])*0.01);_0x20bbae[_0x380c11(0x153)](/<SCALE Y:[ ](\d+)([%％])>/i)&&(this['_scaleBaseY']=Number(RegExp['$1'])*0.01);if(_0x20bbae[_0x380c11(0x153)](/<SCALE:[ ](\d+)([%％])>/i)){const _0x44f640=Number(RegExp['$1'])*0.01;this[_0x380c11(0x45d)]=_0x44f640,this[_0x380c11(0x561)]=_0x44f640;}_0x20bbae['match'](/<SCREEN ACTIVATION>/i)&&(this[_0x380c11(0x549)]=!![],this[_0x380c11(0x57b)]=![],this[_0x380c11(0x360)]=![]);if(_0x20bbae[_0x380c11(0x153)](/<SCREEN PARALLEL>/i))this[_0x380c11(0x549)]=![],this[_0x380c11(0x57b)]=!![],this[_0x380c11(0x360)]=![];else _0x20bbae['match'](/<SCREEN PARALLEL ONCE>/i)&&(this[_0x380c11(0x549)]=![],this[_0x380c11(0x57b)]=!![],this[_0x380c11(0x360)]=!![]);_0x20bbae[_0x380c11(0x153)](/<HIDE SHADOW>/i)&&(this['_shadowGraphic'][_0x380c11(0x48b)]=![]),_0x20bbae[_0x380c11(0x153)](/<SHADOW FILENAME:[ ](.*?)>/i)&&(this[_0x380c11(0xae)]['filename']=String(RegExp['$1'])),_0x20bbae[_0x380c11(0x153)](/<SPRITE OFFSET X:[ ]([\+\-]\d+)>/i)&&(this[_0x380c11(0x443)]=Number(RegExp['$1'])),_0x20bbae['match'](/<SPRITE OFFSET Y:[ ]([\+\-]\d+)>/i)&&(this[_0x380c11(0x1e3)]=Number(RegExp['$1'])),_0x20bbae[_0x380c11(0x153)](/<SPRITE OFFSET:[ ]([\+\-]\d+),[ ]([\+\-]\d+)>/i)&&(this[_0x380c11(0x443)]=Number(RegExp['$1']),this['_spriteOffsetY']=Number(RegExp['$2'])),_0x20bbae['match'](/<STEP PATTERN:[ ](.*)>/i)&&(this[_0x380c11(0x456)]=String(RegExp['$1'])['toUpperCase']()[_0x380c11(0x271)]()),_0x20bbae[_0x380c11(0x153)](/<(?:TILE EXPAND|EXPAND TILE) UP:[ ](\d+)>/i)&&(this[_0x380c11(0x17d)]=this[_0x380c11(0x17d)]||{},this['_tileExpand']['up']=Number(RegExp['$1'])),_0x20bbae['match'](/<(?:TILE EXPAND|EXPAND TILE) DOWN:[ ](\d+)>/i)&&(this[_0x380c11(0x17d)]=this[_0x380c11(0x17d)]||{},this['_tileExpand'][_0x380c11(0x337)]=Number(RegExp['$1'])),_0x20bbae[_0x380c11(0x153)](/<(?:TILE EXPAND|EXPAND TILE) LEFT:[ ](\d+)>/i)&&(this[_0x380c11(0x17d)]=this['_tileExpand']||{},this[_0x380c11(0x17d)][_0x380c11(0x139)]=Number(RegExp['$1'])),_0x20bbae['match'](/<(?:TILE EXPAND|EXPAND TILE) RIGHT:[ ](\d+)>/i)&&(this[_0x380c11(0x17d)]=this[_0x380c11(0x17d)]||{},this[_0x380c11(0x17d)][_0x380c11(0x2f1)]=Number(RegExp['$1']));},Game_Event[_0x47bd44(0xc5)]['updateEventLabelText']=function(){const _0x39aef8=_0x47bd44;$gameTemp[_0x39aef8(0x3e8)](this),this[_0x39aef8(0x3f0)][_0x39aef8(0x1a5)]=this['_labelWindow'][_0x39aef8(0x533)];for(;;){if(this[_0x39aef8(0x3f0)][_0x39aef8(0x1a5)][_0x39aef8(0x153)](/\\V\[(\d+)\]/gi))this[_0x39aef8(0x3f0)][_0x39aef8(0x1a5)]=this['_labelWindow'][_0x39aef8(0x533)][_0x39aef8(0x4e9)](/\\V\[(\d+)\]/gi,(_0x1099ce,_0x5d0c26)=>$gameVariables[_0x39aef8(0xad)](parseInt(_0x5d0c26)));else break;}$gameTemp[_0x39aef8(0x2c0)]();},Game_Event[_0x47bd44(0xc5)][_0x47bd44(0x1dd)]=function(){const _0x3edd68=_0x47bd44;this[_0x3edd68(0x3b7)]();},Game_Event[_0x47bd44(0xc5)][_0x47bd44(0x475)]=function(){const _0x36afc6=_0x47bd44;if(this[_0x36afc6(0x437)])return!![];return Game_Character[_0x36afc6(0xc5)][_0x36afc6(0x475)][_0x36afc6(0x34a)](this);},VisuMZ['EventsMoveCore'][_0x47bd44(0xff)]=Game_Event[_0x47bd44(0xc5)][_0x47bd44(0x3c1)],Game_Event[_0x47bd44(0xc5)][_0x47bd44(0x3c1)]=function(){const _0x1eef44=_0x47bd44;if(this['isPreventSelfMovement']())return;VisuMZ[_0x1eef44(0x25c)]['Game_Event_updateSelfMovement'][_0x1eef44(0x34a)](this),this[_0x1eef44(0xed)]()&&VisuMZ['MoveAllSynchTargets'](this[_0x1eef44(0xd2)]);},Game_Event['prototype']['isPreventSelfMovement']=function(){const _0x2db368=_0x47bd44,_0x484888=VisuMZ['EventsMoveCore']['Settings']['Movement'];if($gameMap[_0x2db368(0x325)]()&&_0x484888[_0x2db368(0x1b7)])return!![];if($gameMessage[_0x2db368(0x308)]()&&_0x484888[_0x2db368(0x290)])return!![];if(!$gameSystem[_0x2db368(0xa8)]())return!![];if(this[_0x2db368(0xa1)]()>=0x0)return!![];if(!SceneManager['_scene'][_0x2db368(0x3d8)])return!![];return![];},Game_Event[_0x47bd44(0xc5)]['updateShadowChanges']=function(){const _0x3a3bfd=_0x47bd44,_0x5e745b=SceneManager[_0x3a3bfd(0x45e)][_0x3a3bfd(0x38b)];if(_0x5e745b){const _0x48e160=_0x5e745b[_0x3a3bfd(0x12a)](this);_0x48e160&&_0x48e160[_0x3a3bfd(0x3b4)]&&_0x48e160['_shadowSprite']['_filename']!==this[_0x3a3bfd(0x2db)]()&&(_0x48e160['_shadowSprite']['_filename']=this[_0x3a3bfd(0x2db)](),_0x48e160[_0x3a3bfd(0x3b4)]['bitmap']=ImageManager[_0x3a3bfd(0x555)](_0x48e160['_shadowSprite'][_0x3a3bfd(0x542)]));}},Game_Event[_0x47bd44(0xc5)]['shadowFilename']=function(){const _0xf442e9=_0x47bd44;return this['_shadowGraphic'][_0xf442e9(0x418)];},Game_Event[_0x47bd44(0xc5)][_0x47bd44(0x115)]=function(){const _0xb9878c=_0x47bd44;if(!this[_0xb9878c(0xae)][_0xb9878c(0x48b)])return![];if($gamePlayer[_0xb9878c(0x181)])return![];return Game_CharacterBase[_0xb9878c(0xc5)]['isShadowVisible']['call'](this);},Game_Event[_0x47bd44(0xc5)][_0x47bd44(0x2d7)]=function(){const _0x23b3b7=_0x47bd44;return this[_0x23b3b7(0x3f0)][_0x23b3b7(0x1a5)];},Game_Event['prototype'][_0x47bd44(0x4a7)]=function(){const _0x4e5190=_0x47bd44;return this[_0x4e5190(0x3f0)]['visibleRange']??VisuMZ[_0x4e5190(0x25c)][_0x4e5190(0x2d0)][_0x4e5190(0x56f)][_0x4e5190(0x4f9)];},Game_Event[_0x47bd44(0xc5)]['labelWindowRangeType']=function(){const _0x3a8bad=_0x47bd44;return this[_0x3a8bad(0x3f0)][_0x3a8bad(0xe7)]??VisuMZ[_0x3a8bad(0x25c)][_0x3a8bad(0x2d0)][_0x3a8bad(0x56f)][_0x3a8bad(0x362)]??_0x3a8bad(0x578);},VisuMZ[_0x47bd44(0x25c)][_0x47bd44(0x3a5)]=function(_0x14297d){const _0x1fd183=_0x47bd44,_0x2f640b=_0x14297d[_0x1fd183(0x2e4)](),_0x132b24=_0x14297d['labelWindowRange']();return $gameMap[_0x1fd183(0x220)]($gamePlayer['x'],$gamePlayer['y'],_0x14297d,_0x2f640b,_0x132b24);},Game_Event[_0x47bd44(0xc5)][_0x47bd44(0x299)]=function(_0x575e64,_0x39bcd3,_0x19044f){const _0x1ce0fd=_0x47bd44;if(this[_0x1ce0fd(0x457)]())return this[_0x1ce0fd(0x350)](_0x575e64,_0x39bcd3,_0x19044f);if($gameMap[_0x1ce0fd(0x43b)](_0x575e64,_0x39bcd3,_0x19044f,_0x1ce0fd(0xf1)))return!![];if($gameMap[_0x1ce0fd(0x13f)](_0x575e64,_0x39bcd3,_0x19044f,_0x1ce0fd(0xf1)))return![];return Game_Character['prototype']['isMapPassable'][_0x1ce0fd(0x34a)](this,_0x575e64,_0x39bcd3,_0x19044f);},Game_Event[_0x47bd44(0xc5)][_0x47bd44(0x457)]=function(){const _0x34dab5=_0x47bd44;if(this['_moveOnlyRegions']===undefined)this['initEventsMoveCoreEffects']();return this[_0x34dab5(0x294)][_0x34dab5(0x30c)]>0x0;},Game_Event['prototype']['isMoveOnlyRegionPassable']=function(_0x3381d3,_0x4be59b,_0x334b32){const _0x57e142=_0x47bd44,_0x46fef4=$gameMap[_0x57e142(0x302)](_0x3381d3,_0x334b32),_0x4eeb75=$gameMap[_0x57e142(0x3ac)](_0x4be59b,_0x334b32),_0x4a69da=$gameMap[_0x57e142(0x11f)](_0x46fef4,_0x4eeb75);return this[_0x57e142(0x294)][_0x57e142(0x3ae)](_0x4a69da);},VisuMZ[_0x47bd44(0x25c)][_0x47bd44(0x4c7)]=Game_Event[_0x47bd44(0xc5)][_0x47bd44(0x2b1)],Game_Event[_0x47bd44(0xc5)]['findProperPageIndex']=function(){const _0x563062=_0x47bd44;if(this[_0x563062(0xf1)]()&&!$gameTemp[_0x563062(0x267)]()){if(this[_0x563062(0xf1)]()['note'][_0x563062(0x153)](/<(?:PLAYTEST|PLAY TEST)>/i))return-0x1;}return this[_0x563062(0x49c)]=![],this[_0x563062(0x4f1)]=![],this[_0x563062(0xf1)]()?VisuMZ['EventsMoveCore'][_0x563062(0x4c7)][_0x563062(0x34a)](this):-0x1;},VisuMZ[_0x47bd44(0x25c)]['Game_Event_meetsConditions']=Game_Event[_0x47bd44(0xc5)][_0x47bd44(0x228)],Game_Event['prototype'][_0x47bd44(0x228)]=function(_0x104e6c){const _0x4c5e11=_0x47bd44;this[_0x4c5e11(0x141)](_0x104e6c),$gameTemp[_0x4c5e11(0x3e8)](this);const _0x59c3e5=VisuMZ['EventsMoveCore'][_0x4c5e11(0x3d4)][_0x4c5e11(0x34a)](this,_0x104e6c);return $gameTemp[_0x4c5e11(0x2c0)](),_0x59c3e5;},Game_Event[_0x47bd44(0xc5)][_0x47bd44(0x54e)]=function(){const _0xff01e=_0x47bd44;return this[_0xff01e(0x49c)];},Game_Event[_0x47bd44(0xc5)][_0x47bd44(0x141)]=function(_0x5984d3){const _0x2d7f09=_0x47bd44,_0x158194=_0x5984d3[_0x2d7f09(0x190)];if(_0x158194[_0x2d7f09(0x111)]&&DataManager[_0x2d7f09(0x2de)](_0x158194[_0x2d7f09(0x497)]))this[_0x2d7f09(0x49c)]=!![];else{if(_0x158194[_0x2d7f09(0x48f)]&&DataManager['isAdvancedSwitch'](_0x158194[_0x2d7f09(0x116)]))this[_0x2d7f09(0x49c)]=!![];else _0x158194[_0x2d7f09(0x4b7)]&&DataManager[_0x2d7f09(0x12e)](_0x158194['variableId'])&&(this[_0x2d7f09(0x49c)]=!![]);}},Game_Event['prototype'][_0x47bd44(0x511)]=function(){const _0x46ce0b=_0x47bd44;if(this[_0x46ce0b(0xcf)])return![];return this['_clickTrigger'];},Game_Event[_0x47bd44(0xc5)][_0x47bd44(0xc7)]=function(){const _0x1ed603=_0x47bd44;$gameTemp[_0x1ed603(0x1d9)](),this[_0x1ed603(0x22a)]();},Game_Event[_0x47bd44(0xc5)]['pos']=function(_0x3c8598,_0x1629e9){const _0x1b5baa=_0x47bd44;return this[_0x1b5baa(0x155)]?this['posEventsMoveCore'](_0x3c8598,_0x1629e9):Game_Character[_0x1b5baa(0xc5)][_0x1b5baa(0x47c)][_0x1b5baa(0x34a)](this,_0x3c8598,_0x1629e9);},Game_Event[_0x47bd44(0xc5)]['posEventsMoveCore']=function(_0x3dc52a,_0x32bfea){const _0xffd5ac=_0x47bd44;var _0xc87660=this['x']-this['_addedHitbox'][_0xffd5ac(0x139)],_0x2f9e2a=this['x']+this[_0xffd5ac(0x155)]['right'],_0x45021f=this['y']-this[_0xffd5ac(0x155)]['up'],_0x35b260=this['y']+this[_0xffd5ac(0x155)][_0xffd5ac(0x337)];return _0xc87660<=_0x3dc52a&&_0x3dc52a<=_0x2f9e2a&&_0x45021f<=_0x32bfea&&_0x32bfea<=_0x35b260;},VisuMZ[_0x47bd44(0x25c)][_0x47bd44(0x3cb)]=Game_Event['prototype'][_0x47bd44(0x3c4)],Game_Event[_0x47bd44(0xc5)][_0x47bd44(0x3c4)]=function(_0x25cb4c,_0x39651e,_0x50cfe7){const _0x1e3cb1=_0x47bd44;for(let _0x30013c=-this[_0x1e3cb1(0x155)]['left'];_0x30013c<=this[_0x1e3cb1(0x155)][_0x1e3cb1(0x2f1)];_0x30013c++){for(let _0x5f4f36=-this[_0x1e3cb1(0x155)]['up'];_0x5f4f36<=this[_0x1e3cb1(0x155)][_0x1e3cb1(0x337)];_0x5f4f36++){if(!Game_Character['prototype'][_0x1e3cb1(0x3c4)]['call'](this,_0x25cb4c+_0x30013c,_0x39651e+_0x5f4f36,_0x50cfe7))return![];}}return!![];},Game_Event[_0x47bd44(0xc5)][_0x47bd44(0x39d)]=function(_0x37354e,_0x51aa5c){const _0x3c4ccb=_0x47bd44;if(Imported[_0x3c4ccb(0x466)]&&this[_0x3c4ccb(0x1f3)]())return this['checkSmartEventCollision'](_0x37354e,_0x51aa5c);else{const _0x4b2c43=$gameMap[_0x3c4ccb(0xcc)](_0x37354e,_0x51aa5c)[_0x3c4ccb(0x2ef)](_0x306fda=>_0x306fda!==this);return _0x4b2c43[_0x3c4ccb(0x30c)]>0x0;}},Game_Event[_0x47bd44(0xc5)][_0x47bd44(0x513)]=function(_0xe22a69,_0x20e29a){const _0xa01632=_0x47bd44;if(!this[_0xa01632(0x4d4)]())return![];else{const _0x3037c1=$gameMap['eventsXyNt'](_0xe22a69,_0x20e29a)[_0xa01632(0x2ef)](_0x384103=>_0x384103!==this&&_0x384103[_0xa01632(0x4d4)]());return _0x3037c1['length']>0x0;}},Game_Event[_0x47bd44(0xc5)][_0x47bd44(0x463)]=function(){const _0x57b8b7=_0x47bd44;if(!this[_0x57b8b7(0x180)])return _0x57b8b7(0x2b5);return this[_0x57b8b7(0x180)][_0x57b8b7(0x161)]||_0x57b8b7(0x2b5);},Game_Event['prototype'][_0x47bd44(0x4b6)]=function(){const _0x3c15ee=_0x47bd44;if(!this['_activationProximity'])return 0x0;return this[_0x3c15ee(0x180)][_0x3c15ee(0x54d)]||0x0;},Game_Event[_0x47bd44(0xc5)][_0x47bd44(0x27b)]=function(){const _0x50fb06=_0x47bd44;if(!this[_0x50fb06(0x180)])return[];return this[_0x50fb06(0x180)][_0x50fb06(0x12d)]||[];},Game_Event['prototype'][_0x47bd44(0x28d)]=function(){const _0x122b22=_0x47bd44;Game_Character[_0x122b22(0xc5)]['increaseSteps'][_0x122b22(0x34a)](this);if([_0x122b22(0x2b5),_0x122b22(0x2e5)][_0x122b22(0x3ae)](this[_0x122b22(0x463)]()))return;$gamePlayer['checkEventTriggerEventsMoveCore']([0x2]);},Game_Event[_0x47bd44(0xc5)][_0x47bd44(0x1b0)]=function(){const _0x54564a=_0x47bd44,_0x15c7c6=Math[_0x54564a(0x2f4)]($gameMap[_0x54564a(0x42d)]),_0x1fc9f8=_0x15c7c6+Math['ceil']($gameMap['screenTileX']())-0x1,_0x6b6127=Math[_0x54564a(0x2f4)]($gameMap['_displayY']),_0x2e7d5a=_0x6b6127+Math['ceil']($gameMap['screenTileY']())-0x1;return this['x']>=_0x15c7c6&&this['x']<=_0x1fc9f8&&this['y']>=_0x6b6127&&this['y']<=_0x2e7d5a;},VisuMZ[_0x47bd44(0x25c)][_0x47bd44(0x39e)]=Game_Event[_0x47bd44(0xc5)][_0x47bd44(0x16c)],Game_Event[_0x47bd44(0xc5)][_0x47bd44(0x16c)]=function(){const _0x497793=_0x47bd44;if(this['_screenActivation']||this['_screenParallel']){if(this['isOnScreen']()){if(!this[_0x497793(0x2ba)]){this[_0x497793(0x2ba)]=!![];if(this[_0x497793(0x549)])this[_0x497793(0x22a)]();else this[_0x497793(0x57b)]&&(!this['_interpreter']&&(this[_0x497793(0x14e)]=new Game_Interpreter()),this[_0x497793(0x14e)][_0x497793(0x3fb)](this[_0x497793(0x3b1)](),this[_0x497793(0xd2)]));}return;}else{this[_0x497793(0x2ba)]=![];return;}}if(this[_0x497793(0x43a)]!==0x3)return;if(this[_0x497793(0xdf)])return;if(!this[_0x497793(0x1e1)](![]))return;if(!this[_0x497793(0x2f9)](![]))return;VisuMZ[_0x497793(0x25c)][_0x497793(0x39e)][_0x497793(0x34a)](this);},VisuMZ[_0x47bd44(0x25c)][_0x47bd44(0x4c3)]=Game_Event[_0x47bd44(0xc5)]['updateParallel'],Game_Event[_0x47bd44(0xc5)][_0x47bd44(0x52d)]=function(){const _0x85b335=_0x47bd44;if(!this[_0x85b335(0x14e)])return;if(!this[_0x85b335(0x1e1)](!![]))return;if(!this[_0x85b335(0x2f9)](!![]))return;if(this[_0x85b335(0x14e)]&&!this[_0x85b335(0x14e)][_0x85b335(0x145)]()&&this[_0x85b335(0x57b)]){!this[_0x85b335(0x360)]&&(this[_0x85b335(0x2ba)]=![]);return;}VisuMZ[_0x85b335(0x25c)][_0x85b335(0x4c3)][_0x85b335(0x34a)](this);},Game_Event[_0x47bd44(0xc5)][_0x47bd44(0x1e1)]=function(_0x108f38){const _0xc7be8c=_0x47bd44;if(!_0x108f38&&$gameMap[_0xc7be8c(0x325)]())return![];if(!_0x108f38&&$gameMap[_0xc7be8c(0x234)]())return![];if(this[_0xc7be8c(0x27b)]()<=0x0)return!![];return $gamePlayer[_0xc7be8c(0x521)](this);},Game_Event[_0x47bd44(0xc5)][_0x47bd44(0x2f9)]=function(_0x588b78){const _0x515ad9=_0x47bd44;if(!_0x588b78&&$gameMap[_0x515ad9(0x325)]())return![];if(!_0x588b78&&$gameMap[_0x515ad9(0x234)]())return![];if(['none',_0x515ad9(0x2e5)][_0x515ad9(0x3ae)](this[_0x515ad9(0x463)]()))return!![];return $gamePlayer[_0x515ad9(0x535)](this);},Game_Event[_0x47bd44(0xc5)][_0x47bd44(0x37a)]=function(_0x10cbad){const _0x2d27bc=_0x47bd44,_0x29b68c=_0x10cbad?this[_0x2d27bc(0x4dc)]:this[_0x2d27bc(0x4a4)];return _0x29b68c?_0x29b68c[_0x2d27bc(0x161)]:_0x2d27bc(0x2b5);},Game_Event[_0x47bd44(0xc5)]['encounterProximityDistance']=function(_0x201f05){const _0x1d7d9d=_0x47bd44,_0x4e7937=_0x201f05?this[_0x1d7d9d(0x4dc)]:this['_encounterNoneProximity'];return _0x4e7937?_0x4e7937['distance']:0x0;},VisuMZ[_0x47bd44(0x31c)]=function(_0x470737){const _0x41e5c5=_0x47bd44;for(const _0x451579 of $gameMap[_0x41e5c5(0x2f3)]()){if(!_0x451579)continue;_0x451579[_0x41e5c5(0xa1)]()===_0x470737&&_0x451579['updateMoveSynch']();}},VisuMZ[_0x47bd44(0x557)]=function(_0x455a50){if(_0x455a50===0x0)return $gamePlayer;return $gameMap['event'](_0x455a50);},Game_CharacterBase[_0x47bd44(0xc5)][_0x47bd44(0x347)]=function(){},Game_Event[_0x47bd44(0xc5)]['updateMoveSynchDirection']=function(){const _0x1a8d8b=_0x47bd44;VisuMZ[_0x1a8d8b(0x20b)](this[_0x1a8d8b(0xd2)]);},VisuMZ[_0x47bd44(0x20b)]=function(_0x17670a){const _0x4931c9=_0x47bd44;for(const _0x4b1134 of $gameMap[_0x4931c9(0x2f3)]()){if(!_0x4b1134)continue;_0x4b1134[_0x4931c9(0xa1)]()===_0x17670a&&_0x4b1134[_0x4931c9(0x1dc)]();}},Game_Event[_0x47bd44(0xc5)]['moveSynchTarget']=function(){const _0x4ebc19=_0x47bd44;return this[_0x4ebc19(0x21b)]['target'];},Game_Event['prototype'][_0x47bd44(0x31f)]=function(){const _0x23d633=_0x47bd44;return this[_0x23d633(0x21b)]['type'];},Game_Event['prototype'][_0x47bd44(0x3cf)]=function(){const _0x2264a3=_0x47bd44;if(this[_0x2264a3(0xa1)]()>=0x0){const _0x1bf8ea=VisuMZ[_0x2264a3(0x557)](this[_0x2264a3(0xa1)]());if(_0x1bf8ea)return _0x1bf8ea[_0x2264a3(0x3cf)]();}return Game_Character[_0x2264a3(0xc5)][_0x2264a3(0x3cf)][_0x2264a3(0x34a)](this);},Game_Event[_0x47bd44(0xc5)][_0x47bd44(0x485)]=function(){const _0x5be115=_0x47bd44;this[_0x5be115(0x21b)][_0x5be115(0x4e4)]=this[_0x5be115(0x21b)][_0x5be115(0x4e4)]||0x0,this[_0x5be115(0x21b)][_0x5be115(0x4e4)]--;if(this[_0x5be115(0x21b)][_0x5be115(0x4e4)]>0x0)return;this[_0x5be115(0x21b)]['timer']=this[_0x5be115(0x21b)][_0x5be115(0x22e)],this['processMoveSynch']();},Game_Event['prototype'][_0x47bd44(0x109)]=function(_0x439c6f){const _0x3925a3=_0x47bd44;if(this['moveSynchTarget']()>=0x0){const _0x58a17e=VisuMZ[_0x3925a3(0x557)](this[_0x3925a3(0xa1)]());if(_0x58a17e){const _0x390277=$gameMap[_0x3925a3(0x54d)](this[_0x3925a3(0x2ec)],this[_0x3925a3(0x361)],_0x58a17e['_realX'],_0x58a17e['_realY'])-0x1,_0x4f2d19=Math[_0x3925a3(0x23a)]($gameMap[_0x3925a3(0x51a)](),$gameMap[_0x3925a3(0x108)]()),_0x118879=this['_moveSynch'][_0x3925a3(0x334)]||0x0;_0x439c6f-=Math[_0x3925a3(0x3ab)](0x0,_0x390277)*_0x4f2d19*_0x118879;}}return _0x439c6f;},Game_Event[_0x47bd44(0xc5)]['processMoveSynch']=function(){const _0x5bc3db=_0x47bd44;switch(this[_0x5bc3db(0x31f)]()){case'random':this[_0x5bc3db(0x3fd)]();break;case _0x5bc3db(0x29c):this[_0x5bc3db(0x2c9)]();break;case _0x5bc3db(0x246):this['processMoveSynchAway']();break;case _0x5bc3db(0x1ff):this[_0x5bc3db(0x4fa)]();break;case _0x5bc3db(0xc1):case _0x5bc3db(0x464):this['processMoveSynchMimic']();break;case _0x5bc3db(0x3af):case _0x5bc3db(0x3a4):this['processMoveSynchReverseMimic']();break;case _0x5bc3db(0x209):case _0x5bc3db(0x132):case _0x5bc3db(0x36f):case _0x5bc3db(0x26f):this[_0x5bc3db(0x27e)]();break;case _0x5bc3db(0x255):case _0x5bc3db(0x4bb):case'mirror\x20vert':case'vert\x20mirror':this[_0x5bc3db(0x4ce)]();break;default:this[_0x5bc3db(0x3fd)]();break;}this[_0x5bc3db(0x1a1)]();},Game_Event[_0x47bd44(0xc5)][_0x47bd44(0x3fd)]=function(){const _0x5378ec=_0x47bd44,_0x430592=[0x2,0x4,0x6,0x8];$gameMap[_0x5378ec(0x233)]()&&_0x430592['push'](0x1,0x3,0x7,0x9);const _0xcaa2d8=[];for(const _0x58182c of _0x430592){if(this['canPass'](this['x'],this['y'],_0x58182c))_0xcaa2d8[_0x5378ec(0x1c5)](_0x58182c);}if(_0xcaa2d8[_0x5378ec(0x30c)]>0x0){const _0x45359c=_0xcaa2d8[Math['randomInt'](_0xcaa2d8['length'])];this['executeMoveDir8'](_0x45359c);}},Game_Event[_0x47bd44(0xc5)]['processMoveSynchApproach']=function(){const _0x5b77b6=_0x47bd44,_0x2de8c3=VisuMZ[_0x5b77b6(0x557)](this[_0x5b77b6(0xa1)]());this['moveTowardCharacter'](_0x2de8c3);},Game_Event[_0x47bd44(0xc5)][_0x47bd44(0x18d)]=function(){const _0x566ff8=_0x47bd44,_0x3f6d2b=VisuMZ[_0x566ff8(0x557)](this[_0x566ff8(0xa1)]());this['moveAwayFromCharacter'](_0x3f6d2b);},Game_Event['prototype'][_0x47bd44(0x4fa)]=function(){this['updateRoutineMove']();},Game_Event[_0x47bd44(0xc5)]['processMoveSynchMimic']=function(){const _0x21c30f=_0x47bd44,_0x1d9834=VisuMZ[_0x21c30f(0x557)](this[_0x21c30f(0xa1)]());this[_0x21c30f(0x1ef)](_0x1d9834['lastMovedDirection']());},Game_Event[_0x47bd44(0xc5)][_0x47bd44(0x22f)]=function(){const _0x1845db=_0x47bd44,_0x5342f2=VisuMZ['GetMoveSynchTarget'](this[_0x1845db(0xa1)]());this['executeMoveDir8'](this[_0x1845db(0x10c)](_0x5342f2[_0x1845db(0x537)]()));},Game_Event['prototype'][_0x47bd44(0x27e)]=function(){const _0x33f6b6=_0x47bd44,_0x48d5be=VisuMZ['GetMoveSynchTarget'](this['moveSynchTarget']()),_0x44bcb6=[0x0,0x7,0x8,0x9,0x4,0x0,0x6,0x1,0x2,0x3][_0x48d5be[_0x33f6b6(0x537)]()];this['executeMoveDir8'](_0x44bcb6);},Game_Event[_0x47bd44(0xc5)][_0x47bd44(0x4ce)]=function(){const _0x41dabb=_0x47bd44,_0x140a19=VisuMZ[_0x41dabb(0x557)](this['moveSynchTarget']()),_0xc50eca=[0x0,0x3,0x2,0x1,0x6,0x0,0x4,0x9,0x8,0x7][_0x140a19[_0x41dabb(0x537)]()];this[_0x41dabb(0x1ef)](_0xc50eca);},Game_Event[_0x47bd44(0xc5)][_0x47bd44(0x1dc)]=function(){const _0x9478c4=_0x47bd44,_0x4c7253=VisuMZ[_0x9478c4(0x557)](this[_0x9478c4(0xa1)]()),_0x7f0a34=_0x4c7253[_0x9478c4(0x399)]();switch(this[_0x9478c4(0x31f)]()){case'mimic':case'copy':this['setDirection'](_0x7f0a34);break;case _0x9478c4(0x3af):case _0x9478c4(0x3a4):this['setDirection'](this[_0x9478c4(0x10c)](_0x7f0a34));break;case _0x9478c4(0x209):case _0x9478c4(0x132):case _0x9478c4(0x36f):case'horz\x20mirror':this[_0x9478c4(0x1f1)]([0x0,0x7,0x8,0x9,0x4,0x0,0x6,0x1,0x2,0x3][_0x7f0a34]);break;case _0x9478c4(0x255):case _0x9478c4(0x4bb):case'mirror\x20vert':case'vert\x20mirror':this['setDirection']([0x0,0x3,0x2,0x1,0x6,0x0,0x4,0x9,0x8,0x7][_0x7f0a34]);break;default:return;}this[_0x9478c4(0x1a1)]();},Game_Event[_0x47bd44(0xc5)][_0x47bd44(0x431)]=function(){const _0x31dfbb=_0x47bd44,_0x36112f=$gameSystem[_0x31dfbb(0x529)](this);if(!_0x36112f)return;this[_0x31dfbb(0x39f)](_0x36112f['x'],_0x36112f['y']),this['refreshBushDepth'](),this[_0x31dfbb(0x1f1)](_0x36112f[_0x31dfbb(0x399)]),this[_0x31dfbb(0x310)]===_0x36112f[_0x31dfbb(0x453)]&&(this['_moveRouteIndex']=_0x36112f[_0x31dfbb(0xef)]);},VisuMZ['EventsMoveCore'][_0x47bd44(0x50b)]=Game_Event[_0x47bd44(0xc5)]['update'],Game_Event[_0x47bd44(0xc5)]['update']=function(){const _0x205e00=_0x47bd44;VisuMZ[_0x205e00(0x25c)][_0x205e00(0x50b)][_0x205e00(0x34a)](this),!Utils[_0x205e00(0x435)]()&&this[_0x205e00(0x1b8)]();},Game_Event['prototype'][_0x47bd44(0x15d)]=function(){const _0x12b68b=_0x47bd44;Game_Character['prototype']['updateMove']['call'](this),this[_0x12b68b(0x227)]();},Game_Event[_0x47bd44(0xc5)]['isSaveEventLocation']=function(){const _0x537963=_0x47bd44;if($gameMap[_0x537963(0x1e9)]())return!![];return this[_0x537963(0x357)];},Game_Event['prototype'][_0x47bd44(0x227)]=function(){const _0x547164=_0x47bd44;if(!this['isSaveEventLocation']())return;this[_0x547164(0x48e)]();},Game_Event[_0x47bd44(0xc5)][_0x47bd44(0x48e)]=function(){const _0x1ad1a3=_0x47bd44;this[_0x1ad1a3(0x53e)]=!![];},Game_Event[_0x47bd44(0xc5)][_0x47bd44(0x1b8)]=function(){const _0x18d6d5=_0x47bd44;this[_0x18d6d5(0x53e)]&&this[_0x18d6d5(0x50f)]();},Game_Event[_0x47bd44(0xc5)][_0x47bd44(0x50f)]=function(){const _0x19b81f=_0x47bd44;this[_0x19b81f(0x53e)]=![],$gameSystem[_0x19b81f(0x48e)](this);},Game_Event[_0x47bd44(0xc5)][_0x47bd44(0x41b)]=function(){const _0xc7f661=_0x47bd44;$gameSystem[_0xc7f661(0xc6)](this);},Game_Event[_0x47bd44(0xc5)][_0x47bd44(0x2bc)]=function(){const _0x17bb19=_0x47bd44;return $gameSystem[_0x17bb19(0x2bc)](this)?Game_Character[_0x17bb19(0xc5)]['getEventIconData'][_0x17bb19(0x34a)](this):{'iconIndex':0x0,'bufferX':settings[_0x17bb19(0x22c)][_0x17bb19(0x35d)],'bufferY':settings[_0x17bb19(0x22c)][_0x17bb19(0x3ee)],'blendMode':settings['Icon']['BlendMode']};},Game_Event['prototype']['hasCPCs']=function(){const _0x4d8561=_0x47bd44;return this[_0x4d8561(0x4f1)];},VisuMZ[_0x47bd44(0x25c)][_0x47bd44(0x319)]=Game_Event['prototype']['meetsConditions'],Game_Event['prototype']['meetsConditions']=function(_0x3fedb5){const _0x1549cf=_0x47bd44,_0x3da5f3=VisuMZ[_0x1549cf(0x25c)][_0x1549cf(0x319)][_0x1549cf(0x34a)](this,_0x3fedb5);if(!_0x3da5f3)return![];return this['meetsCPC'](_0x3fedb5);},Game_Event['prototype'][_0x47bd44(0x20d)]=function(_0x33ca35){const _0x44d932=_0x47bd44;VisuMZ[_0x44d932(0x25c)][_0x44d932(0x534)][_0x44d932(0x200)](_0x33ca35),this[_0x44d932(0x4f1)]=_0x33ca35['CPC'][_0x44d932(0x30c)]>0x0;_0x33ca35[_0x44d932(0x2da)]===undefined&&VisuMZ['EventsMoveCore'][_0x44d932(0x534)][_0x44d932(0x200)](_0x33ca35);if(_0x33ca35['CPC'][_0x44d932(0x30c)]>0x0)return $gameMap['event'](this['_eventId'])&&VisuMZ[_0x44d932(0x25c)][_0x44d932(0x534)][_0x44d932(0x4bc)](_0x33ca35[_0x44d932(0x2da)],this[_0x44d932(0xd2)]);return!![];},VisuMZ[_0x47bd44(0x25c)]['Game_Troop_meetsConditionsCPC']=Game_Troop[_0x47bd44(0xc5)][_0x47bd44(0x228)],Game_Troop[_0x47bd44(0xc5)][_0x47bd44(0x228)]=function(_0x5f1672){const _0x527888=_0x47bd44;var _0x38a9a0=VisuMZ['EventsMoveCore'][_0x527888(0x208)][_0x527888(0x34a)](this,_0x5f1672);return _0x38a9a0&&this[_0x527888(0x496)](_0x5f1672);},Game_Troop[_0x47bd44(0xc5)][_0x47bd44(0x496)]=function(_0xd257f7){const _0x12a531=_0x47bd44;_0xd257f7[_0x12a531(0x2da)]===undefined&&VisuMZ['EventsMoveCore'][_0x12a531(0x534)][_0x12a531(0x200)](_0xd257f7);if(_0xd257f7[_0x12a531(0x2da)][_0x12a531(0x30c)]>0x0)return VisuMZ[_0x12a531(0x25c)]['CustomPageConditions'][_0x12a531(0x4bc)](_0xd257f7['CPC'],0x0);return!![];},VisuMZ['EventsMoveCore'][_0x47bd44(0x1c4)]=Game_Event['prototype'][_0x47bd44(0x575)],Game_Event[_0x47bd44(0xc5)][_0x47bd44(0x575)]=function(_0xc02bad,_0x40d72c){const _0x83d6cb=_0x47bd44;if(this[_0x83d6cb(0x26c)]){const _0x58c7ac=this['event']()[_0x83d6cb(0x3b3)]||'';if(_0x58c7ac[_0x83d6cb(0x153)](/<(?:LOCATION|START|START LOCATION):[ ](.*?)>/i)){const _0xe75d85=String(RegExp['$1'])[_0x83d6cb(0x175)](',')['map'](_0x7735b=>Number(_0x7735b));_0xc02bad+=Number(_0xe75d85[0x0]||0x0)||0x0,_0x40d72c+=Number(_0xe75d85[0x1]||0x0)||0x0;}_0x58c7ac['match'](/<(?:LOCATION|START|START LOCATION) X:[ ](.*?)>/i)&&(_0xc02bad+=Number(RegExp['$1'])),_0x58c7ac[_0x83d6cb(0x153)](/<(?:LOCATION|START|START LOCATION) Y:[ ](.*?)>/i)&&(_0x40d72c+=Number(RegExp['$1']));}VisuMZ[_0x83d6cb(0x25c)]['Game_Event_locate']['call'](this,_0xc02bad,_0x40d72c),this['_randomHomeX']=_0xc02bad,this[_0x83d6cb(0x1ea)]=_0x40d72c,this[_0x83d6cb(0x227)]();},VisuMZ['EventsMoveCore'][_0x47bd44(0x570)]=Game_Event[_0x47bd44(0xc5)][_0x47bd44(0x3d0)],Game_Event[_0x47bd44(0xc5)][_0x47bd44(0x3d0)]=function(){const _0x4ce102=_0x47bd44,_0x2bd74e=$gameMap[_0x4ce102(0x54d)](this['x'],this['y'],this['_randomHomeX'],this[_0x4ce102(0x1ea)]),_0x320293=_0x2bd74e*(this['_randomMoveWeight']||0x0);Math[_0x4ce102(0x260)]()>=_0x320293?VisuMZ[_0x4ce102(0x25c)][_0x4ce102(0x570)]['call'](this):this['moveBackToRandomHome']();},Game_Event[_0x47bd44(0xc5)]['moveBackToRandomHome']=function(){const _0x2dc6bf=_0x47bd44,_0x3aea14=this[_0x2dc6bf(0x422)](this[_0x2dc6bf(0x3c2)]),_0x3ddb79=this[_0x2dc6bf(0x316)](this[_0x2dc6bf(0x1ea)]);if(Math['abs'](_0x3aea14)>Math[_0x2dc6bf(0x173)](_0x3ddb79))this['moveStraight'](_0x3aea14>0x0?0x4:0x6),!this[_0x2dc6bf(0x27c)]()&&_0x3ddb79!==0x0&&this[_0x2dc6bf(0x458)](_0x3ddb79>0x0?0x8:0x2);else _0x3ddb79!==0x0&&(this[_0x2dc6bf(0x458)](_0x3ddb79>0x0?0x8:0x2),!this[_0x2dc6bf(0x27c)]()&&_0x3aea14!==0x0&&this[_0x2dc6bf(0x458)](_0x3aea14>0x0?0x4:0x6));},Game_CharacterBase[_0x47bd44(0xc5)]['clearAttachPictureSettings']=function(){const _0x539755=_0x47bd44;this[_0x539755(0x261)]={'filename':'','type':_0x539755(0x2d9),'blendMode':0x0,'maxSize':0x0,'offsetX':0x0,'offsetY':0x0,'scale':0x1};},Game_CharacterBase['prototype']['attachPictureSettings']=function(){const _0x308fbe=_0x47bd44;if(this[_0x308fbe(0x261)]===undefined)this[_0x308fbe(0x411)]();return this[_0x308fbe(0x261)];},Game_CharacterBase[_0x47bd44(0xc5)][_0x47bd44(0x4be)]=function(){const _0x34ac4e=_0x47bd44;return this[_0x34ac4e(0x11a)]()[_0x34ac4e(0x418)]??'';},Game_CharacterBase[_0x47bd44(0xc5)][_0x47bd44(0x43e)]=function(){const _0x417707=_0x47bd44;return this['attachPictureSettings']()[_0x417707(0x2d9)]??_0x417707(0x2d9);},Game_CharacterBase[_0x47bd44(0xc5)][_0x47bd44(0x162)]=function(){const _0x2b5df4=_0x47bd44;return this[_0x2b5df4(0x11a)]()['blendMode']??0x0;},Game_CharacterBase[_0x47bd44(0xc5)]['attachPictureMaxSize']=function(){const _0x2ae0dc=_0x47bd44;return this[_0x2ae0dc(0x11a)]()[_0x2ae0dc(0x105)]??0x0;},Game_CharacterBase['prototype'][_0x47bd44(0x270)]=function(){const _0x40bbdb=_0x47bd44;return this[_0x40bbdb(0x11a)]()[_0x40bbdb(0x3b8)]??0x0;},Game_CharacterBase[_0x47bd44(0xc5)][_0x47bd44(0x306)]=function(){const _0x3aaa02=_0x47bd44;return this['attachPictureSettings']()[_0x3aaa02(0x4ed)]??0x0;},Game_CharacterBase[_0x47bd44(0xc5)][_0x47bd44(0x245)]=function(){const _0x475427=_0x47bd44;return this[_0x475427(0x11a)]()[_0x475427(0x119)]??0x1;},VisuMZ[_0x47bd44(0x25c)]['Game_Interpreter_updateWaitMode']=Game_Interpreter[_0x47bd44(0xc5)][_0x47bd44(0x107)],Game_Interpreter['prototype'][_0x47bd44(0x107)]=function(){const _0x218586=_0x47bd44;if(this['_waitMode']===_0x218586(0x29d)){if(window[this[_0x218586(0x1b9)]])this[_0x218586(0x34c)]='',this[_0x218586(0x28e)]();else return!![];}else return VisuMZ[_0x218586(0x25c)][_0x218586(0x26b)][_0x218586(0x34a)](this);},VisuMZ[_0x47bd44(0x25c)][_0x47bd44(0x428)]=Game_Interpreter[_0x47bd44(0xc5)][_0x47bd44(0x3bd)],Game_Interpreter[_0x47bd44(0xc5)][_0x47bd44(0x3bd)]=function(){const _0xc9fa78=_0x47bd44,_0x3d0e09=$gameMap&&this[_0xc9fa78(0xd2)]?$gameMap[_0xc9fa78(0xf1)](this[_0xc9fa78(0xd2)]):null;$gameTemp['registerSelfTarget'](_0x3d0e09);const _0xbf2229=VisuMZ[_0xc9fa78(0x25c)][_0xc9fa78(0x428)][_0xc9fa78(0x34a)](this);return $gameTemp[_0xc9fa78(0x2c0)](),_0xbf2229;},VisuMZ[_0x47bd44(0x25c)][_0x47bd44(0x356)]=Game_Interpreter[_0x47bd44(0xc5)]['command357'],Game_Interpreter[_0x47bd44(0xc5)]['command357']=function(_0x46d711){const _0x1c36d4=_0x47bd44;return $gameTemp['setLastPluginCommandInterpreter'](this),VisuMZ['EventsMoveCore'][_0x1c36d4(0x356)][_0x1c36d4(0x34a)](this,_0x46d711);},Game_Interpreter[_0x47bd44(0xc5)][_0x47bd44(0x3d3)]=function(_0x2504ae){const _0x16a33f=_0x47bd44;this[_0x16a33f(0x538)]=_0x2504ae;const _0x3c96d4=_0x16a33f(0x332)[_0x16a33f(0x15f)](_0x2504ae[_0x16a33f(0x2c5)]['padZero'](0x3));this[_0x16a33f(0x1b9)]='$callEventMap'+Graphics[_0x16a33f(0x517)]+'_'+this[_0x16a33f(0x236)](),DataManager[_0x16a33f(0x434)](this[_0x16a33f(0x1b9)],_0x3c96d4),window[this['_callEventMap']]?this[_0x16a33f(0x28e)]():this[_0x16a33f(0x4f0)](_0x16a33f(0x29d));},Game_Interpreter[_0x47bd44(0xc5)][_0x47bd44(0x28e)]=function(){const _0x3eb6f6=_0x47bd44,_0x4481db=this[_0x3eb6f6(0x538)],_0x2a012e=window[this[_0x3eb6f6(0x1b9)]],_0x35cee7=_0x2a012e[_0x3eb6f6(0x2f3)][_0x4481db[_0x3eb6f6(0x236)]];if(_0x35cee7&&_0x35cee7[_0x3eb6f6(0x23f)][_0x4481db[_0x3eb6f6(0x3e2)]-0x1]){const _0x56d019=_0x35cee7[_0x3eb6f6(0x23f)][_0x4481db['pageId']-0x1][_0x3eb6f6(0x3b1)];this[_0x3eb6f6(0x3c3)](_0x56d019,this[_0x3eb6f6(0x236)]());}window[this[_0x3eb6f6(0x1b9)]]=undefined,this[_0x3eb6f6(0x1b9)]=undefined,this['_callEventData']=undefined;};function Game_CPCInterpreter(){const _0x3dc193=_0x47bd44;this[_0x3dc193(0x148)][_0x3dc193(0x35f)](this,arguments);};Game_CPCInterpreter[_0x47bd44(0xc5)]=Object['create'](Game_Interpreter[_0x47bd44(0xc5)]),Game_CPCInterpreter['prototype']['constructor']=Game_CPCInterpreter,Game_CPCInterpreter[_0x47bd44(0xc5)][_0x47bd44(0x4ff)]=function(){const _0x3d61de=_0x47bd44;Game_Interpreter[_0x3d61de(0xc5)][_0x3d61de(0x4ff)][_0x3d61de(0x34a)](this),this[_0x3d61de(0x23d)]=![];},Game_CPCInterpreter['prototype'][_0x47bd44(0x38e)]=function(){const _0xafde15=_0x47bd44;while(this[_0xafde15(0x145)]()){this[_0xafde15(0x3bd)]();}},Game_CPCInterpreter['prototype']['executeCommonEvent']=function(_0x8cf500){const _0x1b685e=_0x47bd44;while(this[_0x1b685e(0x145)]()){this[_0x1b685e(0xa4)](_0x8cf500);}},Game_CPCInterpreter[_0x47bd44(0xc5)][_0x47bd44(0xa4)]=function(_0x3e40c5){const _0x255e83=_0x47bd44,_0x1fbaca=_0x3e40c5;$gameTemp[_0x255e83(0x3e8)](_0x1fbaca);const _0x54a3d0=VisuMZ['EventsMoveCore'][_0x255e83(0x428)]['call'](this);return $gameTemp[_0x255e83(0x2c0)](),_0x54a3d0;},Game_CPCInterpreter[_0x47bd44(0xc5)][_0x47bd44(0x1a4)]=function(_0x2661e){const _0x2afbc1=_0x47bd44;return Game_Interpreter[_0x2afbc1(0xc5)][_0x2afbc1(0x1a4)][_0x2afbc1(0x34a)](this,_0x2661e),this[_0x2afbc1(0x51f)][_0x2afbc1(0x441)](_0x136c77=>_0x136c77[_0x2afbc1(0x153)](/<(?:CONDITION|CONDITIONS) MET>/i))&&(this['_cpc']=!![]),!![];},VisuMZ[_0x47bd44(0x25c)][_0x47bd44(0x31b)]=Scene_Map[_0x47bd44(0xc5)][_0x47bd44(0x340)],Scene_Map['prototype'][_0x47bd44(0x340)]=function(){const _0x1a037a=_0x47bd44;VisuMZ[_0x1a037a(0x25c)]['Scene_Map_startEncounterEffect']['call'](this),this[_0x1a037a(0x38b)]['hideShadows']();},VisuMZ[_0x47bd44(0x25c)][_0x47bd44(0x1de)]=Scene_Load[_0x47bd44(0xc5)][_0x47bd44(0x577)],Scene_Load['prototype'][_0x47bd44(0x577)]=function(){const _0x81f564=_0x47bd44;if($gameMap)$gameMap[_0x81f564(0x50e)]();VisuMZ[_0x81f564(0x25c)][_0x81f564(0x1de)][_0x81f564(0x34a)](this);},VisuMZ[_0x47bd44(0x25c)][_0x47bd44(0x10b)]=Game_System[_0x47bd44(0xc5)]['onAfterLoad'],Game_System['prototype'][_0x47bd44(0x493)]=function(){const _0x5a4813=_0x47bd44;VisuMZ['EventsMoveCore'][_0x5a4813(0x10b)][_0x5a4813(0x34a)](this);if($gameMap)$gameMap[_0x5a4813(0x50e)]();},VisuMZ[_0x47bd44(0x25c)][_0x47bd44(0x335)]=Sprite_Character['prototype'][_0x47bd44(0x433)],Sprite_Character['prototype'][_0x47bd44(0x433)]=function(){const _0x3ddda9=_0x47bd44;VisuMZ[_0x3ddda9(0x25c)][_0x3ddda9(0x335)][_0x3ddda9(0x34a)](this),this[_0x3ddda9(0x4e5)](),this[_0x3ddda9(0x2f5)](),this[_0x3ddda9(0x451)]();},Sprite_Character[_0x47bd44(0xc5)][_0x47bd44(0x4e5)]=function(){const _0x1ac4e5=_0x47bd44;this[_0x1ac4e5(0x3a8)]=0xff,this[_0x1ac4e5(0x15b)]=![];},Sprite_Character['prototype']['isSpriteVS8dir']=function(){const _0x46dc24=_0x47bd44;return this['_characterName']&&this[_0x46dc24(0x547)][_0x46dc24(0x153)](/\[VS8\]/i);},Sprite_Character['prototype']['isAutoBufferIcon']=function(){const _0xd4c838=_0x47bd44;return this[_0xd4c838(0x45f)]()&&VisuMZ['EventsMoveCore'][_0xd4c838(0x2d0)][_0xd4c838(0x24f)]['AutoBuffer'];},Sprite_Character['prototype'][_0x47bd44(0x2f5)]=function(){const _0xad7741=_0x47bd44;this['_attachPictureSprite']=new Sprite(),this[_0xad7741(0x211)][_0xad7741(0x4f7)]['x']=0.5,this[_0xad7741(0x211)][_0xad7741(0x4f7)]['y']=0x1,this[_0xad7741(0x136)](this['_attachPictureSprite']),this[_0xad7741(0x117)]();},Sprite_Character[_0x47bd44(0xc5)][_0x47bd44(0x451)]=function(){const _0xa1a8cd=_0x47bd44;this['_eventIconSprite']=new Sprite(),this[_0xa1a8cd(0xd3)][_0xa1a8cd(0x3c5)]=ImageManager[_0xa1a8cd(0x555)](_0xa1a8cd(0x54f)),this[_0xa1a8cd(0xd3)][_0xa1a8cd(0x3c5)][_0xa1a8cd(0x459)]=![],this[_0xa1a8cd(0xd3)][_0xa1a8cd(0x14b)](0x0,0x0,0x0,0x0),this[_0xa1a8cd(0xd3)][_0xa1a8cd(0x4f7)]['x']=0.5,this[_0xa1a8cd(0xd3)][_0xa1a8cd(0x4f7)]['y']=0x1,this[_0xa1a8cd(0x136)](this[_0xa1a8cd(0xd3)]);},VisuMZ[_0x47bd44(0x25c)][_0x47bd44(0x55c)]=Sprite_Character[_0x47bd44(0xc5)][_0x47bd44(0x1a1)],Sprite_Character['prototype'][_0x47bd44(0x1a1)]=function(){const _0xe63ca9=_0x47bd44;VisuMZ[_0xe63ca9(0x25c)][_0xe63ca9(0x55c)]['call'](this),this[_0xe63ca9(0x4b4)]();},Sprite_Character['prototype'][_0x47bd44(0x16b)]=function(){const _0x3d905c=_0x47bd44;Sprite[_0x3d905c(0xc5)][_0x3d905c(0x16b)]['call'](this),this['isEventsMoveCoreInvisible']()&&(this[_0x3d905c(0x48b)]=![]);},Sprite_Character[_0x47bd44(0xc5)][_0x47bd44(0x348)]=function(){const _0x1209c6=_0x47bd44;if(this[_0x1209c6(0x3dc)]()>0x0)return![];if(this[_0x1209c6(0x329)]){if(this[_0x1209c6(0x329)][_0x1209c6(0x4be)]()!=='')return![];}return this['isEmptyCharacter']()||this['_character']&&this[_0x1209c6(0x329)][_0x1209c6(0x244)]();},Sprite_Character[_0x47bd44(0xc5)]['updateBitmapSmoothing']=function(){const _0x2c1105=_0x47bd44;if(!this['bitmap'])return;this[_0x2c1105(0x3c5)][_0x2c1105(0x459)]=!!VisuMZ['EventsMoveCore'][_0x2c1105(0x2d0)]['Movement'][_0x2c1105(0xb6)];},Sprite_Character[_0x47bd44(0xc5)]['updateEventsAndMovementCore']=function(){const _0x153135=_0x47bd44;this[_0x153135(0x112)](),this['updateTilt'](),this[_0x153135(0x1ab)](),this[_0x153135(0x4b9)](),this[_0x153135(0x194)](),this[_0x153135(0x4f6)](),this[_0x153135(0x117)]();},VisuMZ['EventsMoveCore'][_0x47bd44(0x2e1)]=Sprite_Character[_0x47bd44(0xc5)]['setTileBitmap'],Sprite_Character[_0x47bd44(0xc5)][_0x47bd44(0x389)]=function(){const _0x4ca8e6=_0x47bd44;VisuMZ[_0x4ca8e6(0x25c)]['Sprite_Character_setTileBitmap'][_0x4ca8e6(0x34a)](this),this[_0x4ca8e6(0x3c5)][_0x4ca8e6(0x327)](this['updateBitmapSmoothing'][_0x4ca8e6(0x16d)](this));},Sprite_Character[_0x47bd44(0xc5)][_0x47bd44(0x450)]=function(){const _0x2273be=_0x47bd44,_0xc8e58b=this['_tileId'],_0x3533f1=this[_0x2273be(0x2df)](),_0x4e2ac9=this[_0x2273be(0x492)](),_0x19b14a=(Math[_0x2273be(0x224)](_0xc8e58b/0x80)%0x2*0x8+_0xc8e58b%0x8)*_0x3533f1,_0x18d203=Math[_0x2273be(0x224)](_0xc8e58b%0x100/0x8)%0x10*_0x4e2ac9,_0x354a55=this[_0x2273be(0x14a)]();let _0x5994d7=_0x19b14a,_0x51173f=_0x18d203,_0x4504cc=_0x3533f1,_0x39b517=_0x4e2ac9;_0x354a55['up']&&_0x354a55['up']>0x0&&(_0x51173f-=_0x4e2ac9*_0x354a55['up'],_0x39b517+=_0x4e2ac9*_0x354a55['up']),_0x354a55[_0x2273be(0x337)]&&_0x354a55['down']>0x0&&(_0x39b517+=_0x4e2ac9*_0x354a55[_0x2273be(0x337)]),_0x354a55[_0x2273be(0x139)]&&_0x354a55[_0x2273be(0x139)]>0x0&&(_0x5994d7-=_0x3533f1*_0x354a55['left'],_0x4504cc+=_0x3533f1*_0x354a55['left']),_0x354a55[_0x2273be(0x2f1)]&&_0x354a55[_0x2273be(0x2f1)]>0x0&&(_0x4504cc+=_0x3533f1*_0x354a55[_0x2273be(0x2f1)]),this[_0x2273be(0x14b)](_0x5994d7,_0x51173f,_0x4504cc,_0x39b517);},Sprite_Character[_0x47bd44(0xc5)][_0x47bd44(0x14a)]=function(){const _0x43bea2=_0x47bd44;return this[_0x43bea2(0x329)]?this[_0x43bea2(0x329)][_0x43bea2(0x17d)]||{}:{};},VisuMZ[_0x47bd44(0x25c)][_0x47bd44(0x1a7)]=Sprite_Character[_0x47bd44(0xc5)][_0x47bd44(0x478)],Sprite_Character[_0x47bd44(0xc5)]['setCharacterBitmap']=function(){const _0x512da2=_0x47bd44;VisuMZ[_0x512da2(0x25c)][_0x512da2(0x1a7)][_0x512da2(0x34a)](this),this['bitmap'][_0x512da2(0x327)](this[_0x512da2(0x444)][_0x512da2(0x16d)](this)),this[_0x512da2(0x15b)]=ImageManager[_0x512da2(0x2f0)](this[_0x512da2(0x547)]),this[_0x512da2(0x15b)]&&this[_0x512da2(0x3c5)][_0x512da2(0x327)](this[_0x512da2(0x410)][_0x512da2(0x16d)](this));},Sprite_Character[_0x47bd44(0xc5)][_0x47bd44(0x410)]=function(){const _0x593837=_0x47bd44;this['bitmap']=new Bitmap(this['bitmap'][_0x593837(0x22d)],this[_0x593837(0x3c5)]['height']);},VisuMZ['EventsMoveCore']['Sprite_Character_characterPatternY']=Sprite_Character[_0x47bd44(0xc5)][_0x47bd44(0x3ce)],Sprite_Character['prototype'][_0x47bd44(0x3ce)]=function(){const _0x36a4f5=_0x47bd44;return this[_0x36a4f5(0x45f)]()?this[_0x36a4f5(0x223)]():this[_0x36a4f5(0x140)]();},Sprite_Character['prototype'][_0x47bd44(0x223)]=function(){const _0x4652bb=_0x47bd44,_0x48d9c1=this[_0x4652bb(0x329)][_0x4652bb(0x399)]();let _0x37e8d3=[0x2,0x2,0x2,0x4,0x4,0x2,0x6,0x6,0x8,0x8];return this[_0x4652bb(0x329)][_0x4652bb(0x519)]&&(_0x37e8d3=[0x2,0x4,0x2,0x2,0x6,0x2,0x4,0x8,0x8,0x6]),(_0x37e8d3[_0x48d9c1]-0x2)/0x2;},Sprite_Character['prototype'][_0x47bd44(0x140)]=function(){const _0x56b9f3=_0x47bd44;let _0xa5e755=this[_0x56b9f3(0x329)][_0x56b9f3(0x399)]();if(this[_0x56b9f3(0x329)][_0x56b9f3(0x519)]){if(_0xa5e755===0x4)_0xa5e755=0x6;else _0xa5e755===0x6&&(_0xa5e755=0x4);}return(_0xa5e755-0x2)/0x2;},Sprite_Character['prototype'][_0x47bd44(0x112)]=function(){const _0x4de788=_0x47bd44;this['scale']['x']=this[_0x4de788(0x329)][_0x4de788(0x2bb)]??0x1,this['scale']['y']=this[_0x4de788(0x329)][_0x4de788(0x452)]??0x1;},Sprite_Character['prototype']['updateTilt']=function(){const _0x358f37=_0x47bd44;if(!VisuMZ[_0x358f37(0x25c)]['Settings'][_0x358f37(0x44d)][_0x358f37(0x45b)])return;this[_0x358f37(0x2a4)]=0x0;if(this[_0x358f37(0x416)]()){const _0x5d2f3b=VisuMZ[_0x358f37(0x25c)][_0x358f37(0x2d0)][_0x358f37(0x44d)],_0x591ba8=this[_0x358f37(0x329)][_0x358f37(0x399)]();let _0x140318=0x0;if([0x1,0x4,0x7][_0x358f37(0x3ae)](_0x591ba8))_0x140318=_0x5d2f3b['TiltLeft'];if([0x3,0x6,0x9][_0x358f37(0x3ae)](_0x591ba8))_0x140318=_0x5d2f3b['TiltRight'];[0x2,0x8][_0x358f37(0x3ae)](_0x591ba8)&&(_0x140318=[-_0x5d2f3b['TiltVert'],0x0,_0x5d2f3b[_0x358f37(0x35c)]][this[_0x358f37(0x329)]['pattern']()]);if(this[_0x358f37(0x50c)])_0x140318*=-0x1;this[_0x358f37(0x2a4)]=_0x140318;}},Sprite_Character[_0x47bd44(0xc5)][_0x47bd44(0x416)]=function(){const _0x22749c=_0x47bd44;if(this[_0x22749c(0x3a1)])return![];return this[_0x22749c(0x329)][_0x22749c(0x363)]()&&!this[_0x22749c(0x329)][_0x22749c(0x30e)]()&&!this[_0x22749c(0x329)]['isPosing']()&&this[_0x22749c(0x3dc)]()===0x0;},Sprite_Character[_0x47bd44(0xc5)]['updateShadow']=function(){const _0x45a635=_0x47bd44;if(!this[_0x45a635(0x3b4)])return;this[_0x45a635(0x3b4)]['x']=this[_0x45a635(0x329)]['shadowX'](),this[_0x45a635(0x3b4)]['y']=this[_0x45a635(0x329)]['shadowY'](),this['_shadowSprite'][_0x45a635(0x544)]=this[_0x45a635(0x544)],this['_shadowSprite'][_0x45a635(0x48b)]=this[_0x45a635(0x329)][_0x45a635(0x115)](),this['_shadowSprite'][_0x45a635(0xac)]=this[_0x45a635(0xac)];if(this[_0x45a635(0x329)][_0x45a635(0x1fe)]())this[_0x45a635(0x3b4)][_0x45a635(0x119)]['x']=Math[_0x45a635(0x3ab)](0x0,this[_0x45a635(0x3b4)][_0x45a635(0x119)]['x']-0.1),this['_shadowSprite'][_0x45a635(0x119)]['y']=Math[_0x45a635(0x3ab)](0x0,this[_0x45a635(0x3b4)][_0x45a635(0x119)]['y']-0.1);else{if(this[_0x45a635(0x3b4)]['scale']['x']!==this['scale']['x']){if(this['_shadowSprite'][_0x45a635(0x119)]['x']>this[_0x45a635(0x119)]['x'])this['_shadowSprite'][_0x45a635(0x119)]['x']=Math[_0x45a635(0x23a)](this[_0x45a635(0x3b4)][_0x45a635(0x119)]['x']+0.1,this[_0x45a635(0x119)]['x']);if(this[_0x45a635(0x3b4)]['scale']['x']<this[_0x45a635(0x119)]['x'])this['_shadowSprite'][_0x45a635(0x119)]['x']=Math[_0x45a635(0x3ab)](this[_0x45a635(0x3b4)][_0x45a635(0x119)]['x']-0.1,this[_0x45a635(0x119)]['x']);}if(this[_0x45a635(0x3b4)][_0x45a635(0x119)]['y']!==this['scale']['y']){if(this[_0x45a635(0x3b4)][_0x45a635(0x119)]['y']>this['scale']['y'])this[_0x45a635(0x3b4)][_0x45a635(0x119)]['y']=Math[_0x45a635(0x23a)](this[_0x45a635(0x3b4)][_0x45a635(0x119)]['y']+0.1,this[_0x45a635(0x119)]['y']);if(this[_0x45a635(0x3b4)]['scale']['y']<this['scale']['y'])this['_shadowSprite'][_0x45a635(0x119)]['y']=Math['max'](this[_0x45a635(0x3b4)]['scale']['y']-0.1,this[_0x45a635(0x119)]['y']);}}},Sprite_Character[_0x47bd44(0xc5)][_0x47bd44(0x4b9)]=function(){const _0x4005d=_0x47bd44;if(!this[_0x4005d(0xd3)])return;const _0x8e34d3=this['_eventIconSprite'],_0x7cc0e7=this[_0x4005d(0x3dc)]();if(_0x7cc0e7<=0x0)return _0x8e34d3[_0x4005d(0x14b)](0x0,0x0,0x0,0x0);else{const _0x43497d=ImageManager['iconWidth'],_0xac073a=ImageManager['iconHeight'],_0x3652d3=_0x7cc0e7%0x10*_0x43497d,_0x58cb74=Math[_0x4005d(0x224)](_0x7cc0e7/0x10)*_0xac073a;_0x8e34d3[_0x4005d(0x14b)](_0x3652d3,_0x58cb74,_0x43497d,_0xac073a),this[_0x4005d(0x48b)]=!![];}const _0x55b289=this[_0x4005d(0x329)][_0x4005d(0x2bc)]();this[_0x4005d(0xba)]()?this[_0x4005d(0x2ee)](_0x8e34d3):(_0x8e34d3['x']=_0x55b289?_0x55b289[_0x4005d(0x499)]:0x0,_0x8e34d3['y']=_0x55b289?-this[_0x4005d(0x554)]+_0x55b289[_0x4005d(0x486)]:0x0),_0x8e34d3[_0x4005d(0x39c)]=_0x55b289?_0x55b289[_0x4005d(0x39c)]:0x0,this[_0x4005d(0x281)](_0x8e34d3),this[_0x4005d(0x136)](_0x8e34d3),_0x8e34d3['rotation']=-this[_0x4005d(0x2a4)];},Sprite_Character[_0x47bd44(0xc5)]['autoEventIconBuffer']=function(_0xf0f1a9){const _0x22daba=_0x47bd44;_0xf0f1a9['x']=0x0,_0xf0f1a9['y']=-this[_0x22daba(0x554)]+this[_0x22daba(0x554)]*0x2/0x5,this[_0x22daba(0x329)]['pattern']()!==0x1&&(_0xf0f1a9['y']+=0x1);},Sprite_Character[_0x47bd44(0xc5)][_0x47bd44(0x3dc)]=function(){const _0x4fef4c=_0x47bd44;if(!this['_character'])return 0x0;if(this[_0x4fef4c(0x329)]['_erased'])return 0x0;const _0x79faa1=this[_0x4fef4c(0x329)][_0x4fef4c(0x2bc)]();return _0x79faa1?_0x79faa1[_0x4fef4c(0xb8)]||0x0:0x0;},Sprite_Character['prototype']['updateEventCustomZ']=function(){const _0x28ca86=_0x47bd44;if(!this[_0x28ca86(0x329)])return;if(this['_character'][_0x28ca86(0xde)]===undefined)return;if(this[_0x28ca86(0x329)][_0x28ca86(0xde)]===![])return;this['z']=this[_0x28ca86(0x329)][_0x28ca86(0xde)],this[_0x28ca86(0x3b4)]&&(this['z']<0x0?this[_0x28ca86(0x3b4)]['z']=this['z']-0x1:this[_0x28ca86(0x3b4)]['z']=0x0);},Sprite_Character[_0x47bd44(0xc5)][_0x47bd44(0x4f6)]=function(){const _0x5c97db=_0x47bd44;if(!this[_0x5c97db(0x329)])return;let _0x14cf6b=!!this[_0x5c97db(0x329)][_0x5c97db(0x519)];this['scale']['x']=Math[_0x5c97db(0x173)](this['scale']['x'])*(_0x14cf6b?-0x1:0x1);},Sprite_Character[_0x47bd44(0xc5)][_0x47bd44(0x117)]=function(){const _0x4880fd=_0x47bd44;if(!this[_0x4880fd(0x211)])return;if(!this[_0x4880fd(0x329)])return;this[_0x4880fd(0x56e)](),this['updateAttachPictureBitmap']();},Sprite_Character[_0x47bd44(0xc5)]['setupAttachPictureBitmap']=function(){const _0x88d421=_0x47bd44;if(!this[_0x88d421(0x50a)]())return;const _0x4432f9=this[_0x88d421(0x329)][_0x88d421(0x11a)]();this[_0x88d421(0x324)]=_0x4432f9[_0x88d421(0x418)],this[_0x88d421(0x256)]=_0x4432f9[_0x88d421(0x161)],this[_0x88d421(0x333)]=_0x4432f9['maxSize'],this[_0x88d421(0x42a)]=_0x4432f9['scale'];if(_0x4432f9[_0x88d421(0x418)]!==''){if(_0x4432f9[_0x88d421(0x161)]===_0x88d421(0x41d)){const _0x53ac90=ImageManager['loadEnemy'](_0x4432f9[_0x88d421(0x418)]);_0x53ac90['addLoadListener'](this['onLoadAttachPicture'][_0x88d421(0x16d)](this,_0x53ac90));}else{if(_0x4432f9['type']===_0x88d421(0x16a)){const _0xe5d3e4=ImageManager[_0x88d421(0x36b)](_0x4432f9[_0x88d421(0x418)]);_0xe5d3e4['addLoadListener'](this['onLoadAttachPicture']['bind'](this,_0xe5d3e4));}else{const _0x2f93ab=ImageManager['loadPicture'](_0x4432f9[_0x88d421(0x418)]);_0x2f93ab[_0x88d421(0x327)](this[_0x88d421(0xb4)][_0x88d421(0x16d)](this,_0x2f93ab));}}}else this[_0x88d421(0x211)][_0x88d421(0x3c5)]=new Bitmap(0x1,0x1);},Sprite_Character['prototype']['updateAttachPictureBitmap']=function(){const _0xa498d7=_0x47bd44,_0x12938d=this[_0xa498d7(0x211)];_0x12938d['x']=this[_0xa498d7(0x329)][_0xa498d7(0x270)](),_0x12938d['y']=this[_0xa498d7(0x329)][_0xa498d7(0x306)](),_0x12938d['blendMode']=this[_0xa498d7(0x329)]['attachPictureBlendMode']();},Sprite_Character['prototype']['needsAttachPictureUpdate']=function(){const _0x3e411f=_0x47bd44,_0xf90339=this[_0x3e411f(0x329)][_0x3e411f(0x11a)]();if(_0xf90339){if(this[_0x3e411f(0x324)]!==_0xf90339[_0x3e411f(0x418)])return!![];if(this[_0x3e411f(0x256)]!==_0xf90339[_0x3e411f(0x161)])return!![];if(this[_0x3e411f(0x333)]!==_0xf90339[_0x3e411f(0x105)])return!![];if(this[_0x3e411f(0x42a)]!==_0xf90339['scale'])return!![];}return![];},Sprite_Character[_0x47bd44(0xc5)][_0x47bd44(0xb4)]=function(_0x3d2e2e){const _0x414807=_0x47bd44,_0x55a91d=this[_0x414807(0x211)];_0x55a91d[_0x414807(0x3c5)]=_0x3d2e2e;const _0x54f649=this[_0x414807(0x329)][_0x414807(0x11a)](),_0x377d93=_0x54f649[_0x414807(0x105)],_0x15a1de=_0x54f649[_0x414807(0x119)];let _0x1ff98b=0x1;if(_0x377d93>0x0){let _0x427e02=this[_0x414807(0x47a)]()||0x1,_0x1b2dc7=this[_0x414807(0xd9)]()||0x1;const _0x3659c2=Math[_0x414807(0x3ab)](0x1,_0x427e02,_0x1b2dc7);_0x1ff98b=_0x377d93/_0x3659c2;}_0x1ff98b*=_0x15a1de,_0x1ff98b!==0x1&&(this['_attachPictureSprite'][_0x414807(0x3c5)][_0x414807(0x459)]=!![]),_0x55a91d[_0x414807(0x119)]['x']=_0x1ff98b,_0x55a91d[_0x414807(0x119)]['y']=_0x1ff98b,this[_0x414807(0x48b)]=!![],this[_0x414807(0x1be)]();},Sprite_Character[_0x47bd44(0xc5)][_0x47bd44(0x47a)]=function(){const _0x1ed79d=_0x47bd44,_0x4db4a4=this[_0x1ed79d(0x211)];if(!_0x4db4a4)return 0x0;return _0x4db4a4['bitmap'][_0x1ed79d(0x22d)];},Sprite_Character[_0x47bd44(0xc5)]['getAttachPictureBitmapHeight']=function(){const _0x1c18d9=_0x47bd44,_0x3f3a5c=this[_0x1c18d9(0x211)];if(!_0x3f3a5c)return 0x0;return _0x3f3a5c['bitmap'][_0x1c18d9(0x554)];},VisuMZ[_0x47bd44(0x25c)][_0x47bd44(0x189)]=Sprite_Balloon[_0x47bd44(0xc5)]['setup'],Sprite_Balloon[_0x47bd44(0xc5)]['setup']=function(_0x9ce92b,_0x3554ef){const _0x24ad66=_0x47bd44;VisuMZ[_0x24ad66(0x25c)][_0x24ad66(0x189)][_0x24ad66(0x34a)](this,_0x9ce92b,_0x3554ef),VisuMZ['EventsMoveCore'][_0x24ad66(0x2d0)]['VS8']['AutoBalloon']&&this[_0x24ad66(0x4e2)]['_character'][_0x24ad66(0x15c)](_0x3554ef,this['_duration']);},VisuMZ[_0x47bd44(0x25c)]['Sprite_Balloon_updatePosition']=Sprite_Balloon[_0x47bd44(0xc5)][_0x47bd44(0x539)],Sprite_Balloon[_0x47bd44(0xc5)][_0x47bd44(0x539)]=function(){const _0x394389=_0x47bd44;VisuMZ['EventsMoveCore']['Sprite_Balloon_updatePosition'][_0x394389(0x34a)](this),this[_0x394389(0x3a0)]();},Sprite_Balloon[_0x47bd44(0xc5)]['updateVS8BalloonOffsets']=function(){const _0x38a462=_0x47bd44;this[_0x38a462(0x4e2)][_0x38a462(0x329)][_0x38a462(0x45f)]()&&(this['x']+=VisuMZ[_0x38a462(0x25c)][_0x38a462(0x2d0)]['VS8'][_0x38a462(0x46c)],this['y']+=VisuMZ[_0x38a462(0x25c)][_0x38a462(0x2d0)]['VS8'][_0x38a462(0x45c)]);},Sprite_Timer[_0x47bd44(0xc5)][_0x47bd44(0x576)]=function(){const _0x10b79d=_0x47bd44;this[_0x10b79d(0x3c5)]=new Bitmap(Math[_0x10b79d(0x2f4)](Graphics['boxWidth']/0x2),0x30),this['bitmap'][_0x10b79d(0x465)]=this['fontFace'](),this[_0x10b79d(0x3c5)]['fontSize']=this[_0x10b79d(0x44c)](),this['bitmap']['outlineColor']=ColorManager[_0x10b79d(0x430)]();},Sprite_Timer[_0x47bd44(0xc5)][_0x47bd44(0x1d6)]=function(){const _0x38511c=_0x47bd44,_0x3256a6=Math[_0x38511c(0x224)](this[_0x38511c(0x1a6)]/0x3c/0x3c),_0x5db645=Math[_0x38511c(0x224)](this[_0x38511c(0x1a6)]/0x3c)%0x3c,_0x19f5f0=this['_seconds']%0x3c;let _0x17333d=_0x5db645[_0x38511c(0x309)](0x2)+':'+_0x19f5f0[_0x38511c(0x309)](0x2);if(_0x3256a6>0x0)_0x17333d=_0x38511c(0x102)['format'](_0x3256a6,_0x17333d);return _0x17333d;};function Sprite_EventLabel(){const _0x5459dc=_0x47bd44;this[_0x5459dc(0x148)](...arguments);}Sprite_EventLabel[_0x47bd44(0xc5)]=Object[_0x47bd44(0x3de)](Sprite['prototype']),Sprite_EventLabel[_0x47bd44(0xc5)]['constructor']=Sprite_EventLabel,Sprite_EventLabel[_0x47bd44(0xc5)][_0x47bd44(0x148)]=function(_0x2003b4){const _0x345b79=_0x47bd44;this[_0x345b79(0x251)]=_0x2003b4,Sprite[_0x345b79(0xc5)][_0x345b79(0x148)]['call'](this),this[_0x345b79(0x433)](),this[_0x345b79(0x317)]();},Sprite_EventLabel['prototype']['initMembers']=function(){const _0x144e3e=_0x47bd44;this[_0x144e3e(0x4f7)]['x']=0.5,this[_0x144e3e(0x4f7)]['y']=0x1;},Sprite_EventLabel['prototype']['createProxyWindow']=function(){const _0x5b791f=_0x47bd44,_0x359efb=new Rectangle(0x0,0x0,0x1,0x1);this['_proxyWindow']=new Window_Base(_0x359efb),this[_0x5b791f(0x1d4)][_0x5b791f(0x4cf)]=0x0,this[_0x5b791f(0x544)]=this['isLabelVisible']()?0xff:0x0;},Sprite_EventLabel[_0x47bd44(0xc5)][_0x47bd44(0x1a1)]=function(){const _0x225480=_0x47bd44;Sprite[_0x225480(0xc5)][_0x225480(0x1a1)]['call'](this),this[_0x225480(0x384)](),this[_0x225480(0x32f)](),this[_0x225480(0x539)](),this[_0x225480(0x4c8)](),this['updateHueShift']();},Sprite_EventLabel[_0x47bd44(0xc5)][_0x47bd44(0x384)]=function(){const _0x172502=_0x47bd44;this[_0x172502(0x251)][_0x172502(0x2d7)]()!==this[_0x172502(0x4c6)]&&(this[_0x172502(0x4c6)]=this[_0x172502(0x251)][_0x172502(0x2d7)](),this[_0x172502(0x2af)]());},Sprite_EventLabel[_0x47bd44(0xc5)][_0x47bd44(0x2af)]=function(){const _0x3276a2=_0x47bd44;if(!this[_0x3276a2(0x1d4)])return;this[_0x3276a2(0x3e6)](),this['drawText']();},Sprite_EventLabel['prototype']['resizeWindow']=function(){const _0x466861=_0x47bd44,_0x1cc6da=this[_0x466861(0x1d4)]['textSizeEx'](this['_text']),_0x5e4c17=this[_0x466861(0x1d4)]['itemPadding'](),_0x1dc8e8=_0x1cc6da[_0x466861(0x22d)]+_0x5e4c17*0x2,_0x11a4c2=_0x1cc6da[_0x466861(0x554)];this[_0x466861(0x1d4)][_0x466861(0x545)](0x0,0x0,_0x1dc8e8,_0x11a4c2),this['_proxyWindow'][_0x466861(0x19d)](),this['bitmap']=this[_0x466861(0x1d4)][_0x466861(0x349)];},Sprite_EventLabel[_0x47bd44(0xc5)][_0x47bd44(0x438)]=function(){const _0x2d69ec=_0x47bd44,_0x26109b=this[_0x2d69ec(0x1d4)][_0x2d69ec(0x508)]();this['_proxyWindow']['drawTextEx'](this[_0x2d69ec(0x4c6)],_0x26109b,0x0);},Sprite_EventLabel[_0x47bd44(0xc5)][_0x47bd44(0x32f)]=function(){const _0x50c84e=_0x47bd44,_0x3f7dc2=VisuMZ[_0x50c84e(0x25c)]['Settings'][_0x50c84e(0x56f)][_0x50c84e(0x2d5)],_0xe920b0=$gameSystem[_0x50c84e(0x3b6)]()||0x1;this[_0x50c84e(0x119)]['x']=this[_0x50c84e(0x119)]['y']=_0x3f7dc2/_0xe920b0;},Sprite_EventLabel[_0x47bd44(0xc5)][_0x47bd44(0x539)]=function(){const _0x2edf67=_0x47bd44;if(!SceneManager['_scene'])return;if(!SceneManager[_0x2edf67(0x45e)]['_spriteset'])return;const _0x4ab9ec=SceneManager[_0x2edf67(0x45e)][_0x2edf67(0x38b)][_0x2edf67(0x12a)](this[_0x2edf67(0x251)]);if(!_0x4ab9ec)return;this['x']=this[_0x2edf67(0x251)][_0x2edf67(0x566)](),this['x']+=this[_0x2edf67(0x251)][_0x2edf67(0x3f0)][_0x2edf67(0x3b8)];if(_0x4ab9ec[_0x2edf67(0x324)]){const _0x570b19=_0x4ab9ec[_0x2edf67(0x211)];this['y']=this[_0x2edf67(0x251)][_0x2edf67(0x503)]()-_0x570b19[_0x2edf67(0x554)]*_0x570b19[_0x2edf67(0x119)]['y'];}else this['y']=this['_event'][_0x2edf67(0x503)]()-_0x4ab9ec['height']*_0x4ab9ec[_0x2edf67(0x119)]['y'];this['y']+=$gameSystem['windowPadding']()*-0.5,this['y']+=this[_0x2edf67(0x251)][_0x2edf67(0x3f0)][_0x2edf67(0x4ed)];},Sprite_EventLabel[_0x47bd44(0xc5)]['updateOpacity']=function(){const _0x210834=_0x47bd44;if(this[_0x210834(0x32a)]())this[_0x210834(0x544)]+=this[_0x210834(0x338)]();else SceneManager[_0x210834(0x45e)][_0x210834(0x151)]>0x0?this[_0x210834(0x544)]=0x0:this[_0x210834(0x544)]-=this[_0x210834(0x338)]();},Sprite_EventLabel[_0x47bd44(0xc5)]['updateHueShift']=function(){const _0x364bc7=_0x47bd44;if(this[_0x364bc7(0x32a)]()&&this[_0x364bc7(0x251)]&&this[_0x364bc7(0x251)][_0x364bc7(0x3f0)]['hueShift']){const _0x1727ca=this[_0x364bc7(0x254)]+(this[_0x364bc7(0x251)]['_labelWindow'][_0x364bc7(0xd8)]||0x0);this[_0x364bc7(0x469)](_0x1727ca);}},Sprite_EventLabel['prototype']['isLabelVisible']=function(){const _0x54518b=_0x47bd44;if(!$gameSystem[_0x54518b(0xf5)]())return![];if(this[_0x54518b(0x251)]?.[_0x54518b(0xcf)])return![];if(this[_0x54518b(0x251)]&&this['_event'][_0x54518b(0x310)]<0x0)return![];if(SceneManager[_0x54518b(0x45e)][_0x54518b(0x151)]>0x0)return![];const _0x2c46f0=$gamePlayer['x'],_0x5d361e=$gamePlayer['y'],_0x107a61=this['_event']['x'],_0x3ab878=this['_event']['y'];if(this[_0x54518b(0xbb)]===_0x2c46f0&&this[_0x54518b(0x2cf)]===_0x5d361e&&this[_0x54518b(0x110)]===_0x107a61&&this[_0x54518b(0x379)]===_0x3ab878)return this['_cacheVisibility'];this[_0x54518b(0xbb)]=$gamePlayer['x'],this['_visiblePlayerY']=$gamePlayer['y'],this[_0x54518b(0x110)]=this['_event']['x'],this[_0x54518b(0x379)]=this[_0x54518b(0x251)]['y'];if(!VisuMZ[_0x54518b(0x25c)][_0x54518b(0x3a5)](this['_event']))return this[_0x54518b(0x41c)]=![],![];return this[_0x54518b(0x41c)]=!![],!![];},Sprite_EventLabel[_0x47bd44(0xc5)][_0x47bd44(0x338)]=function(){const _0x2ddf30=_0x47bd44;return VisuMZ['EventsMoveCore'][_0x2ddf30(0x2d0)]['Label'][_0x2ddf30(0x20f)];};function Sprite_VisuMz_MessagePopup(){const _0x32c8fc=_0x47bd44;this[_0x32c8fc(0x148)](...arguments);}Sprite_VisuMz_MessagePopup[_0x47bd44(0xc5)]=Object['create'](Sprite['prototype']),Sprite_VisuMz_MessagePopup[_0x47bd44(0xc5)]['constructor']=Sprite_VisuMz_MessagePopup,Sprite_VisuMz_MessagePopup[_0x47bd44(0xc5)][_0x47bd44(0x148)]=function(_0x1bbbde){const _0xc3a293=_0x47bd44;this[_0xc3a293(0x36e)]=_0x1bbbde,Sprite['prototype'][_0xc3a293(0x148)][_0xc3a293(0x34a)](this),this[_0xc3a293(0x433)](),this[_0xc3a293(0x37f)](),this[_0xc3a293(0x1f8)](),this[_0xc3a293(0x1a1)]();},Sprite_VisuMz_MessagePopup[_0x47bd44(0xc5)]['initMembers']=function(){const _0x23b603=_0x47bd44;this[_0x23b603(0x1b2)]=this['_settings']['duration'],this[_0x23b603(0x149)]=this['_settings'][_0x23b603(0xaa)],this['z']=0x6,this[_0x23b603(0x1af)]=this[_0x23b603(0x36e)][_0x23b603(0x3d9)][_0x23b603(0x57c)],this['_fadeInDuration']>0x0&&this[_0x23b603(0x1af)]>=Math['floor'](this[_0x23b603(0x1b2)]*0.48)&&(this[_0x23b603(0x1af)]=Math[_0x23b603(0x224)](this['_duration']*0.48)),this[_0x23b603(0x544)]=this[_0x23b603(0x1af)]>0x0?0x0:0xff,this[_0x23b603(0x2a6)]=this[_0x23b603(0x36e)]['fadeDuration'][_0x23b603(0x44b)],this[_0x23b603(0x2a6)]>0x0&&this[_0x23b603(0x2a6)]>=Math['floor'](this[_0x23b603(0x1b2)]*0.48)&&(this[_0x23b603(0x2a6)]=Math[_0x23b603(0x224)](this[_0x23b603(0x1b2)]*0.48)),this[_0x23b603(0x226)]=this[_0x23b603(0x2a6)],this[_0x23b603(0x3b9)]=this[_0x23b603(0x36e)][_0x23b603(0x2b3)]['x'],this[_0x23b603(0x296)]=this[_0x23b603(0x36e)][_0x23b603(0x2b3)]['y'],this[_0x23b603(0x252)]=this['_settings'][_0x23b603(0x440)]['x'],this[_0x23b603(0x3fc)]=this[_0x23b603(0x36e)][_0x23b603(0x440)]['y'],this[_0x23b603(0x282)]=this['_startX'],this[_0x23b603(0x426)]=this[_0x23b603(0x296)],this[_0x23b603(0x3e3)]=this[_0x23b603(0x36e)][_0x23b603(0x43d)]['x'],this[_0x23b603(0x4c0)]=this[_0x23b603(0x36e)][_0x23b603(0x43d)]['y'],this[_0x23b603(0x184)]=this['_settings'][_0x23b603(0x287)]['x'],this[_0x23b603(0x12c)]=this[_0x23b603(0x36e)][_0x23b603(0x287)]['y'],this[_0x23b603(0x368)]=-this[_0x23b603(0x36e)][_0x23b603(0xf8)]['start'],this['_targetAngle']=-this[_0x23b603(0x36e)][_0x23b603(0xf8)][_0x23b603(0x10f)],this[_0x23b603(0x3a9)]=-this[_0x23b603(0x36e)][_0x23b603(0xfa)][_0x23b603(0x27f)],this['_currentArc']=0x0;},Sprite_VisuMz_MessagePopup[_0x47bd44(0xc5)][_0x47bd44(0x37f)]=function(){const _0x55db0d=_0x47bd44,_0x3aa4b3=this[_0x55db0d(0x36e)],_0x45c61e=new Rectangle(0x0,0x0,Graphics[_0x55db0d(0x22d)],Graphics['height']);this[_0x55db0d(0x4ab)]=new Window_Base(_0x45c61e);const _0x448c15=this[_0x55db0d(0x4ab)][_0x55db0d(0x359)](_0x3aa4b3[_0x55db0d(0x1a5)]),_0x2df6eb=_0x448c15[_0x55db0d(0x22d)],_0x1fb6e6=_0x448c15[_0x55db0d(0x554)],_0x3899f6=_0x2df6eb+$gameSystem['windowPadding']()*0x2,_0x163317=_0x1fb6e6+$gameSystem[_0x55db0d(0x56c)]()*0x2;this[_0x55db0d(0x4ab)]['move'](0x0,0x0,_0x3899f6,_0x163317),this[_0x55db0d(0x4ab)][_0x55db0d(0x19d)](),this[_0x55db0d(0x4ab)][_0x55db0d(0x4ea)](_0x3aa4b3[_0x55db0d(0x1a5)],0x0,0x0);},Sprite_VisuMz_MessagePopup[_0x47bd44(0xc5)][_0x47bd44(0x1f8)]=function(){const _0xf71ade=_0x47bd44;this[_0xf71ade(0x4c5)]=new Sprite(),this[_0xf71ade(0x4c5)][_0xf71ade(0x3c5)]=this[_0xf71ade(0x4ab)][_0xf71ade(0x349)],this['_textSprite'][_0xf71ade(0x4f7)]['x']=0.5,this[_0xf71ade(0x4c5)][_0xf71ade(0x4f7)]['y']=0.5,this[_0xf71ade(0x4c5)]['x']=this[_0xf71ade(0x3b9)],this['_textSprite']['y']=this[_0xf71ade(0x296)],this[_0xf71ade(0x4c5)][_0xf71ade(0x119)]['x']=this[_0xf71ade(0x3e3)],this[_0xf71ade(0x4c5)][_0xf71ade(0x119)]['y']=this['_startScaleY'],this[_0xf71ade(0x4c5)][_0xf71ade(0xf8)]=this[_0xf71ade(0x368)],this[_0xf71ade(0x136)](this[_0xf71ade(0x4c5)]);},Sprite_VisuMz_MessagePopup[_0x47bd44(0xc5)][_0x47bd44(0x1a1)]=function(){const _0x4628f7=_0x47bd44;Sprite[_0x4628f7(0xc5)]['update'][_0x4628f7(0x34a)](this);if(!this[_0x4628f7(0x26d)]())return;this[_0x4628f7(0x43c)](),this[_0x4628f7(0x3f9)](),this[_0x4628f7(0x41f)](),this[_0x4628f7(0x297)](),this[_0x4628f7(0x4c8)](),this[_0x4628f7(0x2ea)]();},Sprite_VisuMz_MessagePopup[_0x47bd44(0xc5)][_0x47bd44(0x26d)]=function(){const _0x29c49b=_0x47bd44;return!!this[_0x29c49b(0x4c5)];},Sprite_VisuMz_MessagePopup['prototype'][_0x47bd44(0x43c)]=function(){const _0x354537=_0x47bd44,_0x23dfa4=this[_0x354537(0x36e)];{const _0x38b2c6=$gameMap[_0x354537(0x51a)](),_0x2280b3=_0x23dfa4['tileCoordinates']['x'],_0x4c94a4=$gameMap[_0x354537(0x520)](_0x2280b3);this['x']=Math['floor'](_0x4c94a4*_0x38b2c6+_0x38b2c6/0x2);}{const _0x40a186=$gameMap[_0x354537(0x108)](),_0x39798c=_0x23dfa4[_0x354537(0x489)]['y'],_0x2d3939=$gameMap['adjustY'](_0x39798c);this['y']=Math['floor'](_0x2d3939*_0x40a186+_0x40a186);}},Sprite_VisuMz_MessagePopup[_0x47bd44(0xc5)][_0x47bd44(0x3f9)]=function(){const _0x339d4a=_0x47bd44;if(this[_0x339d4a(0x1b2)]<=0x0)return;const _0x18dba5=this[_0x339d4a(0x1b2)],_0x11f07f=this[_0x339d4a(0x149)];{this[_0x339d4a(0x282)]=(this[_0x339d4a(0x282)]*(_0x18dba5-0x1)+this[_0x339d4a(0x252)])/_0x18dba5,this['_offsetY']=(this[_0x339d4a(0x426)]*(_0x18dba5-0x1)+this[_0x339d4a(0x3fc)])/_0x18dba5;}{const _0x12803d=_0x11f07f-_0x18dba5,_0x3af51e=_0x11f07f/0x2,_0x119a58=this[_0x339d4a(0x3a9)],_0x8f645b=-_0x119a58/Math[_0x339d4a(0x36d)](_0x3af51e,0x2);this[_0x339d4a(0x4dd)]=_0x8f645b*Math[_0x339d4a(0x36d)](_0x12803d-_0x3af51e,0x2)+_0x119a58;}this[_0x339d4a(0x4c5)]['x']=this['_offsetX'],this[_0x339d4a(0x4c5)]['y']=this['_offsetY']+this[_0x339d4a(0x4dd)];},Sprite_VisuMz_MessagePopup['prototype']['updateTextScale']=function(){const _0x418332=_0x47bd44;if(this[_0x418332(0x1b2)]<=0x0)return;const _0x36fe03=this[_0x418332(0x1b2)];this[_0x418332(0x4c5)][_0x418332(0x119)]['x']=(this[_0x418332(0x4c5)][_0x418332(0x119)]['x']*(_0x36fe03-0x1)+this[_0x418332(0x184)])/_0x36fe03,this[_0x418332(0x4c5)][_0x418332(0x119)]['y']=(this[_0x418332(0x4c5)][_0x418332(0x119)]['y']*(_0x36fe03-0x1)+this[_0x418332(0x12c)])/_0x36fe03;},Sprite_VisuMz_MessagePopup['prototype'][_0x47bd44(0x297)]=function(){const _0x3db4b9=_0x47bd44;if(this[_0x3db4b9(0x1b2)]<=0x0)return;const _0x5947f3=this[_0x3db4b9(0x1b2)];this[_0x3db4b9(0x4c5)][_0x3db4b9(0xf8)]=(this[_0x3db4b9(0x4c5)][_0x3db4b9(0xf8)]*(_0x5947f3-0x1)+this['_targetAngle'])/_0x5947f3;},Sprite_VisuMz_MessagePopup[_0x47bd44(0xc5)][_0x47bd44(0x4c8)]=function(){const _0x155190=_0x47bd44;this[_0x155190(0x21e)](),this[_0x155190(0x494)]();},Sprite_VisuMz_MessagePopup[_0x47bd44(0xc5)][_0x47bd44(0x21e)]=function(){const _0x42afa4=_0x47bd44;if(this[_0x42afa4(0x1af)]<=0x0)return;const _0xc22db5=this[_0x42afa4(0x1af)];this[_0x42afa4(0x544)]=(this[_0x42afa4(0x544)]*(_0xc22db5-0x1)+0xff)/_0xc22db5,this[_0x42afa4(0x1af)]--,this[_0x42afa4(0x1af)]<=0x0&&(this[_0x42afa4(0x544)]=0xff);},Sprite_VisuMz_MessagePopup['prototype'][_0x47bd44(0x494)]=function(){const _0x29fb32=_0x47bd44;if(this[_0x29fb32(0x2a6)]<=0x0)return;if(this[_0x29fb32(0x1b2)]>this[_0x29fb32(0x226)])return;const _0x442cc7=this[_0x29fb32(0x2a6)];this[_0x29fb32(0x544)]=(this['opacity']*(_0x442cc7-0x1)+0x0)/_0x442cc7,this[_0x29fb32(0x2a6)]--,this[_0x29fb32(0x2a6)]<=0x0&&(this[_0x29fb32(0x544)]=0x0);},Sprite_VisuMz_MessagePopup[_0x47bd44(0xc5)][_0x47bd44(0x2ea)]=function(){const _0x5f3af0=_0x47bd44;if(this[_0x5f3af0(0x1b2)]<=0x0)return;this['_duration']--;if(this[_0x5f3af0(0x1b2)]<=0x0){if(this['parent'])this[_0x5f3af0(0x4f3)][_0x5f3af0(0x281)](this);this[_0x5f3af0(0x4c5)][_0x5f3af0(0x3c5)]&&this[_0x5f3af0(0x4c5)][_0x5f3af0(0x3c5)][_0x5f3af0(0x468)]();}},VisuMZ['EventsMoveCore'][_0x47bd44(0x4a3)]=Spriteset_Map[_0x47bd44(0xc5)][_0x47bd44(0x57d)],Spriteset_Map[_0x47bd44(0xc5)][_0x47bd44(0x57d)]=function(){const _0x3982c9=_0x47bd44;VisuMZ[_0x3982c9(0x25c)][_0x3982c9(0x4a3)][_0x3982c9(0x34a)](this),this[_0x3982c9(0x1aa)]();},VisuMZ[_0x47bd44(0x25c)]['Spriteset_Map_createShadow']=Spriteset_Map[_0x47bd44(0xc5)][_0x47bd44(0x24d)],Spriteset_Map[_0x47bd44(0xc5)][_0x47bd44(0x24d)]=function(){const _0xab78d3=_0x47bd44;VisuMZ[_0xab78d3(0x25c)][_0xab78d3(0x4b5)]['call'](this),this[_0xab78d3(0x553)]();},Spriteset_Map[_0x47bd44(0xc5)]['createShadows']=function(){const _0x14b79a=_0x47bd44;if(!VisuMZ[_0x14b79a(0x25c)][_0x14b79a(0x2d0)]['Movement']['ShowShadows'])return;for(const _0x269355 of this[_0x14b79a(0x47d)]){this['createCharacterShadow'](_0x269355);}},Spriteset_Map[_0x47bd44(0xc5)][_0x47bd44(0xd0)]=function(_0x31b39e){const _0x531538=_0x47bd44;_0x31b39e['_shadowSprite']=new Sprite(),_0x31b39e[_0x531538(0x3b4)]['_filename']=_0x31b39e[_0x531538(0x329)][_0x531538(0x2db)](),_0x31b39e['_shadowSprite'][_0x531538(0x3c5)]=ImageManager[_0x531538(0x555)](_0x31b39e[_0x531538(0x3b4)][_0x531538(0x542)]),_0x31b39e[_0x531538(0x3b4)][_0x531538(0x4f7)]['x']=0.5,_0x31b39e[_0x531538(0x3b4)][_0x531538(0x4f7)]['y']=0x1;const _0x1192ea=VisuMZ[_0x531538(0x25c)][_0x531538(0x2d0)][_0x531538(0x44d)][_0x531538(0x455)]??0.5;_0x31b39e['_shadowSprite']['z']=_0x1192ea,this[_0x531538(0x219)][_0x531538(0x136)](_0x31b39e[_0x531538(0x3b4)]);},Spriteset_Map['prototype'][_0x47bd44(0x2a2)]=function(){const _0x1a319d=_0x47bd44;if(!VisuMZ[_0x1a319d(0x25c)][_0x1a319d(0x2d0)][_0x1a319d(0x44d)]['ShowShadows'])return;for(const _0x4cc37e of this['_characterSprites']){this[_0x1a319d(0x219)]['removeChild'](_0x4cc37e[_0x1a319d(0x3b4)]);}},Spriteset_Map[_0x47bd44(0xc5)][_0x47bd44(0x1aa)]=function(){const _0x969ada=_0x47bd44;this[_0x969ada(0x1e6)]=[];for(const _0xefd52d of $gameMap[_0x969ada(0x2f3)]()){this[_0x969ada(0x300)](_0xefd52d);}},Spriteset_Map[_0x47bd44(0xbe)]=VisuMZ[_0x47bd44(0x25c)][_0x47bd44(0x2d0)][_0x47bd44(0x56f)][_0x47bd44(0xbf)]??!![],Spriteset_Map[_0x47bd44(0xc5)]['createLabelWindowForTarget']=function(_0x588c76){const _0x57dad9=_0x47bd44;if(!this[_0x57dad9(0x57e)](_0x588c76))return;if(Utils['isMobileDevice']()){if(!Spriteset_Map['MOBILE_EVENT_LABELS'])return;}let _0x411a37;const _0x32f186=VisuMZ[_0x57dad9(0x25c)]['Settings']['Label'][_0x57dad9(0x398)]??!![];_0x411a37=_0x32f186?new Sprite_EventLabel(_0x588c76):new Window_EventLabel(_0x588c76),_0x411a37['z']=0x8,_0x411a37[_0x57dad9(0x1d3)]=Sprite[_0x57dad9(0x2fc)]++,this[_0x57dad9(0x219)][_0x57dad9(0x136)](_0x411a37),this[_0x57dad9(0x1e6)][_0x57dad9(0x1c5)](_0x411a37);},Spriteset_Map[_0x47bd44(0xc5)][_0x47bd44(0x57e)]=function(_0x356347){const _0x14e2e2=_0x47bd44,_0x1fed17=_0x356347[_0x14e2e2(0xf1)]();if(_0x1fed17[_0x14e2e2(0x3b3)][_0x14e2e2(0x153)](/<LABEL:[ ](.*?)>/i))return!![];if(_0x1fed17[_0x14e2e2(0x3b3)]['match'](/<LABEL>\s*([\s\S]*)\s*<\/LABEL>/i))return!![];for(const _0x1eb343 of _0x1fed17[_0x14e2e2(0x23f)]){let _0x36c934='';for(const _0x2fd3a5 of _0x1eb343[_0x14e2e2(0x3b1)]){[0x6c,0x198][_0x14e2e2(0x3ae)](_0x2fd3a5['code'])&&(_0x36c934+=_0x2fd3a5[_0x14e2e2(0x2dd)][0x0]);}if(_0x36c934[_0x14e2e2(0x153)](/<LABEL:[ ](.*?)>/i))return!![];if(_0x36c934[_0x14e2e2(0x153)](/<LABEL>\s*([\s\S]*)\s*<\/LABEL>/i))return!![];}return![];},Spriteset_Map[_0x47bd44(0xc5)][_0x47bd44(0x222)]=function(_0x1a4cde){const _0x4b0305=_0x47bd44;this[_0x4b0305(0x47d)]=this[_0x4b0305(0x47d)]||[];const _0x2f9044=new Sprite_Character(_0x1a4cde);this[_0x4b0305(0x47d)][_0x4b0305(0x1c5)](_0x2f9044),this[_0x4b0305(0x219)][_0x4b0305(0x136)](_0x2f9044),this[_0x4b0305(0xd0)](_0x2f9044),this[_0x4b0305(0x300)](_0x1a4cde),_0x2f9044['update'](),_0x1a4cde[_0x4b0305(0x516)](),_0x2f9044[_0x4b0305(0x568)]();},Spriteset_Map[_0x47bd44(0xc5)][_0x47bd44(0x44a)]=function(){const _0x20df21=_0x47bd44;if(!this[_0x20df21(0x1e6)])return;for(const _0x39dbc1 of this['_labelWindows']){_0x39dbc1&&(_0x39dbc1[_0x20df21(0xbb)]=undefined,_0x39dbc1[_0x20df21(0x2af)]());}},Spriteset_Map['prototype'][_0x47bd44(0x30b)]=function(_0x7dc73d,_0xa2e42e){const _0x5f0d20=_0x47bd44;if(!_0x7dc73d)return;_0xa2e42e[_0x5f0d20(0x489)]={'x':_0x7dc73d['x'],'y':_0x7dc73d['y']},this['createEventsMoveCoreTileMessagePopup'](_0xa2e42e);},Spriteset_Map[_0x47bd44(0xc5)][_0x47bd44(0x4ac)]=function(_0x1c7174){const _0x14b2e4=_0x47bd44;if(!this[_0x14b2e4(0x219)])return;const _0x3dab03=new Sprite_VisuMz_MessagePopup(_0x1c7174);this[_0x14b2e4(0x219)][_0x14b2e4(0x136)](_0x3dab03);},VisuMZ[_0x47bd44(0x25c)][_0x47bd44(0x2a1)]=Game_Message['prototype'][_0x47bd44(0x30f)],Game_Message[_0x47bd44(0xc5)][_0x47bd44(0x30f)]=function(_0xff9788,_0x4a2da9){const _0x2f10a7=_0x47bd44;this['_selfTargetNumberInput']=$gameTemp[_0x2f10a7(0x3df)](),VisuMZ[_0x2f10a7(0x25c)][_0x2f10a7(0x2a1)][_0x2f10a7(0x34a)](this,_0xff9788,_0x4a2da9);},VisuMZ['EventsMoveCore'][_0x47bd44(0x2cc)]=Window_NumberInput[_0x47bd44(0xc5)]['start'],Window_NumberInput['prototype'][_0x47bd44(0x22a)]=function(){const _0x3fe1b8=_0x47bd44;$gameTemp[_0x3fe1b8(0x3e8)]($gameMessage[_0x3fe1b8(0x125)]),VisuMZ['EventsMoveCore'][_0x3fe1b8(0x2cc)]['call'](this),$gameTemp['clearSelfTarget']();},VisuMZ['EventsMoveCore'][_0x47bd44(0x484)]=Window_NumberInput[_0x47bd44(0xc5)]['processOk'],Window_NumberInput[_0x47bd44(0xc5)]['processOk']=function(){const _0x59971b=_0x47bd44;$gameTemp[_0x59971b(0x3e8)]($gameMessage[_0x59971b(0x125)]),VisuMZ[_0x59971b(0x25c)]['Window_NumberInput_processOk'][_0x59971b(0x34a)](this),$gameTemp[_0x59971b(0x2c0)](),$gameMessage[_0x59971b(0x125)]=undefined;},VisuMZ[_0x47bd44(0x25c)][_0x47bd44(0x3f1)]=Game_Message[_0x47bd44(0xc5)][_0x47bd44(0x531)],Game_Message[_0x47bd44(0xc5)][_0x47bd44(0x531)]=function(_0x59696e,_0x393e2e){const _0x50b51f=_0x47bd44;this[_0x50b51f(0x446)]=$gameTemp[_0x50b51f(0x3df)](),VisuMZ[_0x50b51f(0x25c)][_0x50b51f(0x3f1)][_0x50b51f(0x34a)](this,_0x59696e,_0x393e2e);},VisuMZ['EventsMoveCore'][_0x47bd44(0x53c)]=Window_EventItem[_0x47bd44(0xc5)][_0x47bd44(0xe2)],Window_EventItem[_0x47bd44(0xc5)][_0x47bd44(0xe2)]=function(){const _0x232a76=_0x47bd44;$gameTemp[_0x232a76(0x3e8)]($gameMessage[_0x232a76(0x446)]),VisuMZ['EventsMoveCore'][_0x232a76(0x53c)][_0x232a76(0x34a)](this),$gameTemp['clearSelfTarget'](),$gameMessage['_selfTargetItemChoice']=undefined;},VisuMZ['EventsMoveCore']['Window_EventItem_onCancel']=Window_EventItem[_0x47bd44(0xc5)]['onCancel'],Window_EventItem[_0x47bd44(0xc5)][_0x47bd44(0xce)]=function(){const _0x3590ce=_0x47bd44;$gameTemp[_0x3590ce(0x3e8)]($gameMessage[_0x3590ce(0x446)]),VisuMZ['EventsMoveCore']['Window_EventItem_onCancel'][_0x3590ce(0x34a)](this),$gameTemp['clearSelfTarget'](),$gameMessage['_selfTargetItemChoice']=undefined;},VisuMZ[_0x47bd44(0x25c)][_0x47bd44(0x2fe)]=Window_Message[_0x47bd44(0xc5)][_0x47bd44(0x374)],Window_Message[_0x47bd44(0xc5)][_0x47bd44(0x374)]=function(){const _0x2b4053=_0x47bd44;$gameMessage[_0x2b4053(0x25f)](),VisuMZ['EventsMoveCore'][_0x2b4053(0x2fe)][_0x2b4053(0x34a)](this),$gameTemp[_0x2b4053(0x2c0)]();},VisuMZ['EventsMoveCore'][_0x47bd44(0xfe)]=Window_ScrollText[_0x47bd44(0xc5)][_0x47bd44(0x374)],Window_ScrollText[_0x47bd44(0xc5)][_0x47bd44(0x374)]=function(){const _0x58c28c=_0x47bd44;$gameMessage[_0x58c28c(0x25f)](),VisuMZ[_0x58c28c(0x25c)][_0x58c28c(0xfe)][_0x58c28c(0x34a)](this),$gameTemp['clearSelfTarget']();};function Window_EventLabel(){const _0x41ab24=_0x47bd44;this[_0x41ab24(0x148)](...arguments);}Window_EventLabel[_0x47bd44(0xc5)]=Object[_0x47bd44(0x3de)](Window_Base[_0x47bd44(0xc5)]),Window_EventLabel[_0x47bd44(0xc5)][_0x47bd44(0x507)]=Window_EventLabel,Window_EventLabel[_0x47bd44(0xc5)][_0x47bd44(0x148)]=function(_0x50fb9a){const _0x2c9d66=_0x47bd44;this['_event']=_0x50fb9a;const _0x3918a4=new Rectangle(0x0,0x0,Graphics[_0x2c9d66(0x355)]/0x4,this[_0x2c9d66(0x439)](0x1));this[_0x2c9d66(0x433)](),Window_Base['prototype'][_0x2c9d66(0x148)][_0x2c9d66(0x34a)](this,_0x3918a4),this[_0x2c9d66(0x403)]=0x0,this['setBackgroundType'](0x2),this[_0x2c9d66(0x4c6)]='';},Window_EventLabel['prototype'][_0x47bd44(0x433)]=function(){const _0xa160c0=_0x47bd44;this[_0xa160c0(0x4a6)]=![],this['_screenZoomScale']=$gameScreen[_0xa160c0(0x2d4)](),this[_0xa160c0(0x2c1)]=this['_event'][_0xa160c0(0x566)](),this[_0xa160c0(0x4d8)]=this[_0xa160c0(0x251)][_0xa160c0(0x503)](),this['_eventLabelOffsetX']=this[_0xa160c0(0x251)][_0xa160c0(0x3f0)][_0xa160c0(0x3b8)],this['_eventLabelOffsetY']=this['_event']['_labelWindow'][_0xa160c0(0x4ed)],this['_eventPageIndex']=this[_0xa160c0(0x251)]['_pageIndex'],this[_0xa160c0(0x41c)]=this[_0xa160c0(0x32a)](),this[_0xa160c0(0xb1)]=$gameSystem[_0xa160c0(0xf5)](),this[_0xa160c0(0xbb)]=$gamePlayer['x'],this[_0xa160c0(0x2cf)]=$gamePlayer['y'],this[_0xa160c0(0x110)]=this['_event']['x'],this[_0xa160c0(0x379)]=this['_event']['y'];},Window_EventLabel[_0x47bd44(0xc5)]['update']=function(){const _0x389fe2=_0x47bd44;Window_Base[_0x389fe2(0xc5)][_0x389fe2(0x1a1)][_0x389fe2(0x34a)](this);if(!this[_0x389fe2(0x541)]())return;this[_0x389fe2(0x384)](),this[_0x389fe2(0x32f)](),this[_0x389fe2(0x539)](),this[_0x389fe2(0x4c8)]();},Window_EventLabel[_0x47bd44(0xc5)][_0x47bd44(0x541)]=function(){const _0x3feb46=_0x47bd44;if(!this[_0x3feb46(0x251)])return![];if(!this[_0x3feb46(0x251)]['_labelWindow'])return![];if(this[_0x3feb46(0x2aa)]!==this[_0x3feb46(0x251)][_0x3feb46(0x310)])return!![];if(this[_0x3feb46(0x251)]['_erased']&&!this[_0x3feb46(0x4a6)])return!![];if(this[_0x3feb46(0x251)]['_labelWindow'][_0x3feb46(0x1a5)]==='')return![];if(this[_0x3feb46(0x4fd)]!==$gameScreen[_0x3feb46(0x2d4)]())return!![];if(this[_0x3feb46(0x2c1)]!==this[_0x3feb46(0x251)][_0x3feb46(0x566)]())return!![];if(this[_0x3feb46(0x4d8)]!==this[_0x3feb46(0x251)][_0x3feb46(0x503)]())return!![];if(this[_0x3feb46(0x339)]!==this['_event'][_0x3feb46(0x3f0)][_0x3feb46(0x3b8)])return!![];if(this[_0x3feb46(0x4ec)]!==this['_event']['_labelWindow'][_0x3feb46(0x4ed)])return!![];if(this[_0x3feb46(0xbb)]!==$gamePlayer['x'])return!![];if(this['_visiblePlayerY']!==$gamePlayer['y'])return!![];if(this[_0x3feb46(0x110)]!==this[_0x3feb46(0x251)]['x'])return!![];if(this['_visibleEventY']!==this[_0x3feb46(0x251)]['y'])return!![];if(this['_cacheSystemVisible']!==$gameSystem[_0x3feb46(0xf5)]())return!![];if(this[_0x3feb46(0x41c)]&&this[_0x3feb46(0x403)]<0xff)return!![];if(!this[_0x3feb46(0x41c)]&&this[_0x3feb46(0x403)]>0x0)return!![];if(SceneManager[_0x3feb46(0x45e)][_0x3feb46(0x151)]>0x0)return!![];return![];},Window_EventLabel[_0x47bd44(0xc5)][_0x47bd44(0x384)]=function(){const _0x57414b=_0x47bd44;this[_0x57414b(0x251)][_0x57414b(0x2d7)]()!==this[_0x57414b(0x4c6)]&&(this['_text']=this[_0x57414b(0x251)]['labelWindowText'](),this['refresh']());},Window_EventLabel[_0x47bd44(0xc5)]['updateScale']=function(){const _0x5ad901=_0x47bd44;this[_0x5ad901(0x119)]['x']=0x1/$gameScreen[_0x5ad901(0x2d4)](),this[_0x5ad901(0x119)]['y']=0x1/$gameScreen['zoomScale'](),this[_0x5ad901(0x4fd)]=$gameScreen['zoomScale']();},Window_EventLabel[_0x47bd44(0xc5)][_0x47bd44(0x539)]=function(){const _0x4b24ca=_0x47bd44;if(!SceneManager[_0x4b24ca(0x45e)])return;if(!SceneManager['_scene'][_0x4b24ca(0x38b)])return;const _0x254c28=SceneManager[_0x4b24ca(0x45e)]['_spriteset'][_0x4b24ca(0x12a)](this['_event']);if(!_0x254c28)return;this['x']=Math['round'](this[_0x4b24ca(0x251)][_0x4b24ca(0x566)]()-Math[_0x4b24ca(0x224)](this[_0x4b24ca(0x22d)]*this['scale']['x']/0x2)),this['x']+=this[_0x4b24ca(0x251)]['_labelWindow'][_0x4b24ca(0x3b8)],this['y']=this[_0x4b24ca(0x251)][_0x4b24ca(0x503)]()-_0x254c28['height'],this['y']+=Math[_0x4b24ca(0x2f4)]($gameSystem[_0x4b24ca(0x56c)]()*0.5),this['y']-=Math['round'](this[_0x4b24ca(0x554)]*this[_0x4b24ca(0x119)]['y']),this['y']+=this[_0x4b24ca(0x251)][_0x4b24ca(0x3f0)][_0x4b24ca(0x4ed)],this[_0x4b24ca(0x4a6)]=this[_0x4b24ca(0x251)][_0x4b24ca(0xcf)],this[_0x4b24ca(0x2c1)]=this[_0x4b24ca(0x251)]['screenX'](),this[_0x4b24ca(0x4d8)]=this['_event'][_0x4b24ca(0x503)](),this[_0x4b24ca(0x339)]=this[_0x4b24ca(0x251)][_0x4b24ca(0x3f0)]['offsetX'],this[_0x4b24ca(0x4ec)]=this[_0x4b24ca(0x251)]['_labelWindow']['offsetY'],this[_0x4b24ca(0x2aa)]=this['_event'][_0x4b24ca(0x310)],this[_0x4b24ca(0x4a6)]&&(this[_0x4b24ca(0x403)]=0x0);},Window_EventLabel[_0x47bd44(0xc5)][_0x47bd44(0x4c8)]=function(){const _0x20b970=_0x47bd44;if(this[_0x20b970(0x32a)]())this[_0x20b970(0x403)]+=this['opacitySpeed']();else SceneManager[_0x20b970(0x45e)][_0x20b970(0x151)]>0x0?this[_0x20b970(0x403)]=0x0:this[_0x20b970(0x403)]-=this['opacitySpeed']();},Window_EventLabel[_0x47bd44(0xc5)][_0x47bd44(0x32a)]=function(){const _0x53d1a3=_0x47bd44;if(!$gameSystem[_0x53d1a3(0xf5)]())return![];if(this[_0x53d1a3(0x251)]?.['_erased'])return![];if(SceneManager[_0x53d1a3(0x45e)][_0x53d1a3(0x151)]>0x0)return![];const _0x2fd1e7=$gamePlayer['x'],_0x2644d2=$gamePlayer['y'],_0x2f1c89=this['_event']['x'],_0x5e4a4d=this['_event']['y'];if(this['_visiblePlayerX']===_0x2fd1e7&&this['_visiblePlayerY']===_0x2644d2&&this[_0x53d1a3(0x110)]===_0x2f1c89&&this[_0x53d1a3(0x379)]===_0x5e4a4d)return this[_0x53d1a3(0x41c)];this[_0x53d1a3(0xbb)]=$gamePlayer['x'],this['_visiblePlayerY']=$gamePlayer['y'],this[_0x53d1a3(0x110)]=this[_0x53d1a3(0x251)]['x'],this[_0x53d1a3(0x379)]=this['_event']['y'];if(!VisuMZ[_0x53d1a3(0x25c)][_0x53d1a3(0x3a5)](this[_0x53d1a3(0x251)]))return this[_0x53d1a3(0x41c)]=![],![];return this[_0x53d1a3(0x41c)]=!![],!![];},Window_EventLabel[_0x47bd44(0xc5)][_0x47bd44(0x338)]=function(){const _0x4a13c0=_0x47bd44;return VisuMZ[_0x4a13c0(0x25c)][_0x4a13c0(0x2d0)][_0x4a13c0(0x56f)][_0x4a13c0(0x20f)];},Window_EventLabel[_0x47bd44(0xc5)][_0x47bd44(0x3e6)]=function(){const _0x5d5d5f=_0x47bd44,_0x29ede9=this[_0x5d5d5f(0x359)](this[_0x5d5d5f(0x4c6)]);this[_0x5d5d5f(0x22d)]=_0x29ede9[_0x5d5d5f(0x22d)]+($gameSystem[_0x5d5d5f(0x56c)]()+this[_0x5d5d5f(0x508)]())*0x2,this[_0x5d5d5f(0x554)]=Math[_0x5d5d5f(0x3ab)](this[_0x5d5d5f(0x265)](),_0x29ede9[_0x5d5d5f(0x554)])+$gameSystem[_0x5d5d5f(0x56c)]()*0x2,this['createContents']();},Window_EventLabel['prototype'][_0x47bd44(0x265)]=function(){const _0x56fc1d=_0x47bd44;return VisuMZ[_0x56fc1d(0x25c)]['Settings'][_0x56fc1d(0x56f)][_0x56fc1d(0x1d0)];},Window_EventLabel['prototype'][_0x47bd44(0x2d6)]=function(){const _0x10e3e2=_0x47bd44;Window_Base[_0x10e3e2(0xc5)]['resetFontSettings'][_0x10e3e2(0x34a)](this),this[_0x10e3e2(0x349)]['fontSize']=this['defaultFontSize']();},Window_EventLabel['prototype'][_0x47bd44(0x1cc)]=function(){const _0x2a845d=_0x47bd44;return VisuMZ[_0x2a845d(0x25c)][_0x2a845d(0x2d0)][_0x2a845d(0x56f)][_0x2a845d(0x2d5)];},Window_EventLabel['prototype'][_0x47bd44(0x2af)]=function(){const _0x441d39=_0x47bd44;this[_0x441d39(0x3e6)](),this[_0x441d39(0x349)]['clear']();const _0x1c5dee=this['_text'][_0x441d39(0x175)](/[\r\n]+/);let _0x5974d1=0x0;for(const _0x562328 of _0x1c5dee){const _0x5f42ad=this[_0x441d39(0x359)](_0x562328),_0x6c411f=Math[_0x441d39(0x224)]((this['innerWidth']-_0x5f42ad['width'])/0x2);this[_0x441d39(0x4ea)](_0x562328,_0x6c411f,_0x5974d1),_0x5974d1+=_0x5f42ad[_0x441d39(0x554)];}},Window_EventLabel[_0x47bd44(0xc5)][_0x47bd44(0x408)]=function(_0x4d7cd5,_0x4292c0){const _0x46eafd=_0x47bd44;_0x4292c0[_0x46eafd(0x53b)]&&this[_0x46eafd(0x515)](_0x4d7cd5,_0x4292c0['x']+0x2,_0x4292c0['y']),_0x4292c0['x']+=Math[_0x46eafd(0x23a)](this[_0x46eafd(0xa3)](),ImageManager['iconWidth'])+0x4;},Window_EventLabel[_0x47bd44(0xc5)]['drawIcon']=function(_0x25c4a1,_0x37df49,_0x1eab25){const _0x29836e=_0x47bd44,_0x579d70=ImageManager['loadSystem'](_0x29836e(0x54f)),_0x4d0d97=ImageManager['iconWidth'],_0x471daa=ImageManager[_0x29836e(0x30d)],_0x12709a=_0x25c4a1%0x10*_0x4d0d97,_0x4c628a=Math['floor'](_0x25c4a1/0x10)*_0x471daa,_0x5d70fb=Math[_0x29836e(0x23a)](this['iconSize']()),_0x596526=Math[_0x29836e(0x23a)](this['iconSize']());this[_0x29836e(0x349)][_0x29836e(0x1d1)](_0x579d70,_0x12709a,_0x4c628a,_0x4d0d97,_0x471daa,_0x37df49,_0x1eab25,_0x5d70fb,_0x596526);},Window_EventLabel['prototype'][_0x47bd44(0xa3)]=function(){const _0x5bac95=_0x47bd44;return VisuMZ['EventsMoveCore'][_0x5bac95(0x2d0)][_0x5bac95(0x56f)][_0x5bac95(0x42f)];};