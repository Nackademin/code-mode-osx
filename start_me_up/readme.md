# start_me_up

Create a recurring calendar event in Automator which plays a track or playlist in Spotify.

## Usage

1. Open Automator and create a __Calendar Alarm__ document.
2. Search for __Run Javascript__ in the __Actions__ column and then drag it into the workflow.
3. Copy and paste this Javascript into the editor.
   
   ```javascript
   function run( input, parameters ) {
   
       // Select the Spotify application.
       var spotify = Application( "Spotify" );

       // Play it!
       spotify.playTrack( "spotify:user:spotifydiscover:playlist:3VmB1O2VItOKyDbyfKhvA9" );

   }
   ```
4. You can change which track or playlist to play by copying a Spotify URI and pasting into the `playTrack()` call.
5. Save your workflow. This will create and trigger an alarm at the current time and date in your calendar.
6. Edit the alarm to make it reoccur whenever it suits you, e.g. every workday at 09:30.

## Change audio output (to Airplay)

Take a look at *start-me-up-with-airplay.scpt*

```javascript
// Select applications for later reference.
var current = Application.currentApplication(),
    preferences = Application( "System Preferences" ),
    events = Application( "System Events" ),
    spotify = Application( "Spotify" );

// Include standard additions to be able to control volume.
current.includeStandardAdditions = true;

// Open System Preferences and reveal Sound > Output.
preferences.activate();

var sound = preferences.panes.byName( "Sound" ),
    output = sound.anchors.byName( "Output" );
	
sound.reveal( output );

// Launch System Events to access processes and user interface.
events.launch();

// Get the Output Device-table from the System Preferences-process.
var process = events.processes.byName( "System Preferences" ),
    table = process.windows.at(0).tabGroups.at(0).scrollAreas.at(0).tables.at(0);

// Pause Spotify for a clean transition to the new device (Airplay).
spotify.pause();

// Iterate through each row until its first text field matches our desired output device (Airplay).
for ( var i in table.rows ) {

    var row = table.rows[i],
        fields = row.textFields;

    if ( !fields.length ) {

        continue;

    }

    // Search for a output device with "airplay" in its name.
    if ( fields.at(0).value().match( /airplay/i ) ) {

        // Select this device for output.
        row.select();

        break;

    }

}

// Re-activate whichever application was previously active.
current.activate();

// Wait a second to allow the AirPlay to fully connect.
delay(1);

// Crank it up! Volume spans from 0 to 7. 5 seems reasonable.
current.setVolume(5);

// Play Spotify!
spotify.playTrack( "spotify:track:7xcqbjV2NfxlnJzqdRuO7E" );
```


