
var app = Application.currentApplication();
// Include standard additions to be able to execute shell scripts.
app.includeStandardAdditions = true;

function run( args ) { 

    // The first argument is the flow precent.
    // Reverse it so that green equals low flow and vice versa.
    var flow = 1 - args[0],
    // The hue varies between 0 (red) and (30000) very light green. This value can be adjusted.
    hue = Math.round( flow * 30000 ),
	
    // Create a JSON for the API call.
    data = {
        "on": true,
        "sat": 254,
        "bri": 254,
        "hue": hue
    },
    json = JSON.stringify( data ),
    // Double quote the JSON since it will be parsed twice.
    quoted = json.replace( /[\"]/g, '\\"' ),
    script = 'curl --request PUT --data "' + quoted + '" http://192.168.0.30/api/7fa5c51e074020315a27d91574b45354/lights/1/state';

    // Do it!
    app.doShellScript( script )

}
