import { Component } from '@angular/core';
import { spotifyTracks, Track } from 'src/app/core/models/track';

@Component({
    selector: 'app-music',
    templateUrl: './music.component.html',
    styleUrls: ['./music.component.scss'],
    standalone: false
})
export class MusicComponent {
    tracks: Track[] = spotifyTracks;
    lastTrackClicked?: Track;

    loadIframe(track: Track) {
        if (this.lastTrackClicked != null)
            this.lastTrackClicked.isLoaded = false;

        track.isLoaded = true;
        this.lastTrackClicked = track;

        console.log(this.tracks)
    }
}
