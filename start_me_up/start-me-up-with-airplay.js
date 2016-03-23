
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
