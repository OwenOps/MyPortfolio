import { Component } from '@angular/core';

@Component({
    selector: 'app-music',
    templateUrl: './music.component.html',
    styleUrls: ['./music.component.scss'],
    standalone: false
})
export class MusicComponent {

    public playAudio(event: Event, audioId: string): void {
        event.preventDefault();

        const audioElement = document.getElementById(audioId) as HTMLAudioElement;
        if (audioElement) {
            audioElement.volume = 0.35;
            audioElement.play();
        }
    }
}
