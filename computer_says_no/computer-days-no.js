
var app = Application.currentApplication();

// Include standard additions to be able to use text-to-speech.
app.includeStandardAdditions = true;

function run( args ) { 

    var flow = args[0];

    // If the current flow is under 0.75 (75%), that means it has just dipped below the "In flow" threshold.
    if ( flow < .75 ) {

        app.say( "You are loosing your flow. Back to work." );

    }

}
