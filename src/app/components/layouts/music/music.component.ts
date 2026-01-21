import { Component } from '@angular/core';
import { spotifyTracks, Track } from 'src/app/core/models/track';
import { MessageService } from 'src/app/core/services/message/message.service';
import { UtilitiesService } from 'src/app/core/services/utilities/utilities.service';
import { SafeUrlPipe } from '../../shared/pipe/safe-url.pipe';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
    selector: 'app-music',
    templateUrl: './music.component.html',
    styleUrls: ['./music.component.scss'],
    imports: [SafeUrlPipe, SharedModule]
})
export class MusicComponent {
    tracks: Track[] = spotifyTracks;
    lastTrackClicked?: Track;
    userHasBeenWarnedMusic: boolean = false;

    constructor
        (
            private readonly messageService: MessageService,
            private readonly utilitiesService: UtilitiesService
        ) { }

    loadIframe(track: Track) {
        if (this.lastTrackClicked != null)
            this.lastTrackClicked.isLoaded = false;

        track.isLoaded = true;
        this.lastTrackClicked = track;

        if (!this.userHasBeenWarnedMusic) {
            this.utilitiesService.getTranslatedStrings(["HOBBIES.Music_Warning"]).subscribe(translations => {
                this.messageService.showMessageInfo(translations["HOBBIES.Music_Warning"]);
                this.userHasBeenWarnedMusic = true;
            });
        }
    }
}
