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
