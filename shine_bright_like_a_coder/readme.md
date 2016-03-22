# shine_bright_like_a_coder

This script controls a Philips Hue lamp and changes its color between red and green depending on your current flow.

Before you're ready to follow the steps below, you need to make sure that your Philips Hue lamps have been setup to receive API calls according to this [guide](http://www.developers.meethue.com/documentation/getting-started)

## Usage

1. Download our app [Flow Triggers](https://src.rodolfo.nu/flowtriggers/flow-triggers.zip)

Flow Trigger tracks your activity within OS X and triggers shell commands when given conditions are met.

2. Configure Flow Triggers to track your flow. See more detailed instructions at the end of this document.

3. Edit __shine-bright-like-a-coder.scpt__ so that the URL in the API call matches your Philips Hue Bridge. 

4. Add a new trigger in Flow Triggers. Set __Trigger type__ to __Persistent__ and __Trigger on__ to __Every minute__. This trigger needs no conditions.

5. Paste this command into __Shell command__ `osascript /path/to/your/shine-bright-like-a-coder.scpt $flow`

Change `/path/to/your/shine-bright-like-a-coder.scpt` to match the location of __shine-bright-like-a-coder.scpt__ on your Mac.

6. All done!

## Flow Triggers

Flow Trigger is an app that we created which tracks your activity within OS X and triggers shell commands when given conditions are met.

Flow Trigger keeps track of your number of keypresses, mouse activity and application switches, as well as which applications you use and web pages you visit. At the moment, Flow Triggers only supports Google Chrome and Apple Safari when tracking browser activity.

### Configuring Flow Triggers

In order for Flow Triggers to be able to measure your flow, you need to tell it which applications and web pages that are productive and which are unproductive.

1. In Flow Triggers, go to the __Filter__ tab.
2. Start by adding your productive applications and pages.

__Application__ filters must match the application names __exactly__, e.g. __Sublime Text__ and not just __Sublime__
__Pages__ filters match the subdomain/domain and top domain without __www__, e.g. __google.com__, __docs.google.com__

To make the filters more dynamic you can make the filter string a [regular expression](https://en.wikipedia.org/wiki/Regular\_expression) by checking __Regular expression__. Only do this if you're familiar with regular expressions.

To increase the accuracy of the flow measuring, you can change __Filter type__ to match the main method of input, if there is one.

3. Change to the __Unproductive__ list and add all of your unproductive applications and pages.

### Creating triggers

#### Conditions

You can specify as many conditions as you want and make the trigger fire whenever either all or any of them are fulfilled. You can also choose not to specify any condition which makes the trigger fire as soon as it is tested.

#### Trigger types

* __Threshold:__ Fire once the conditions are fulfilled and then deactivate the trigger.
* __Persistent:__ Fire every time the conditions are fulfilled.
* __Switch:__ Fire every time the conditions go from not being fulfilled to being fulfilled and vice versa.

#### Trigger on

* __Every minute:__ Test conditions once a minute.
* __Every input:__ Test conditions on every keypress/mouse click. __Be careful with this one.__
* __Every app/page switch:__ Test conditions when the user switches between applications or web pages.

#### Shell command

The shell command will be executed once all conditions are fulfilled. The launch path is always __/usr/bin/env__.

You can include Flow Triggers variables in each calls just by inserting them into the field. For example, in `osascript /path/to/your/script.scpt $flow $app`, `$flow` would be replaced with the currently active application or web page and `$app` would be replaced with the name of the application or URL of the page. E.g. `osascript /path/to/your/script.scpt 0.63 "docs.google.com"`

Available variables are as follows:

* __$app__ The name of of the current application or (base) URL of the current page. Example: __"Sublime Text"__ or __"facebook.com"__
* __$appProductive__ Whether the current application/page is considered productive (1), neutral (0) or unproductive (-1). Example: __-1__
* __$appInputKeypresses__ The total number of keypresses in the current application/page. Example: __12701__
* __$appInputMouseclicks__ The total number of mouse clicks in the current application/page. Example: __495__
* __$appInputMousemoved__ The total number of pixels travelled by the mouse in the current application/page. Example: __324923.1___
* __$appInputMousescrolled__ The total number of pixels scrolled in the current application/page. Example: __3234.5__
* __$appInputAppswitches__ The total number of times the current application/page has been switched to. Example: __103__
* __$appInputTimetracked__ The total number of seconds spent in the current application/page. Example: __3645__
* __$flow__ The current flow, represented by a float between 0 (no flow) and 1 (max flow). Example: __0.75__
* __$flowDerivative__ The change in flow during the last minute. Example: __-0.32__
* __$inputKeypresses__ The total number of keypresses in any application/page. Example: __12701__
* __$inputMouseclicks__ The total number of mouse clicks in any application/page. Example: __495__
* __$inputMousemoved__ The total number of pixels travelled by the mouse in any application/page. Example: __324923.1___
* __$inputMousescrolled__ The total number of pixels scrolled in any application/page. Example: __3234.5__
* __$inputAppswitches__ The total number of times any application/page has been switched to. Example: __103__
* __$inputTimetracked__ The total number of seconds spent in any application/page. Example: __3645__
* __$productiveKeypresses__ The total number of keypresses in any productive application/page. Example: __12701__
* __$productiveMouseclicks__ The total number of mouse clicks in any productive application/page. Example: __495__
* __$productiveMousemoved__ The total number of pixels travelled by the mouse in any productive application/page. Example: __324923.1___
* __$productiveMousescrolled__ The total number of pixels scrolled in any productive application/page. Example: __3234.5__
* __$productiveAppswitches__ The total number of times any productive application/page has been switched to. Example: __103__
* __$productiveTimetracked__ The total number of seconds spent in any productive application/page. Example: __3645__
* __$unproductiveKeypresses__ The total number of keypresses in any unproductive application/page. Example: __12701__
* __$unproductiveMouseclicks__ The total number of mouse clicks in any unproductive application/page. Example: __495__
* __$unproductiveMousemoved__ The total number of pixels travelled by the mouse in any unproductive application/page. Example: __324923.1___
* __$unproductiveMousescrolled__ The total number of pixels scrolled in any unproductive application/page. Example: __3234.5__
* __$unproductiveAppswitches__ The total number of times any unproductive application/page has been switched to. Example: __103__
* __$unproductiveTimetracked__ The total number of seconds spent in any unproductive application/page. Example: __3645__
