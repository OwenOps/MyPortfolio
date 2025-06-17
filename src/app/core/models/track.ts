export interface Track {
    id: number;
    name: string;
    artist: string;
    albumCover: string;
    spotifyUrl: string;
    embedUrl: string;
    isLoaded: boolean;
}

export const spotifyTracks: Track[] =
    [
        {
            id: 1,
            name: 'XO Tour Llif3',
            artist: 'Lil Uzi Vert',
            albumCover: 'assets/img/lil_uzi.png',
            spotifyUrl: 'https://open.spotify.com/intl-fr/track/7GX5flRQZVHRAGd6B4TmDO?si=600bb64cc10745e3',
            embedUrl: 'https://open.spotify.com/embed/track/7GX5flRQZVHRAGd6B4TmDO?si=ca7dd686418f46c6',
            isLoaded: false
        },
        {
            id: 2,
            name: 'Swimming Pool',
            artist: 'Kendrick Lamar',
            albumCover: 'assets/img/kendrick.png',
            spotifyUrl: 'https://open.spotify.com/intl-fr/track/6REbwUNlppTfcnV4d4ZoZi?si=d759079c850a4bef',
            embedUrl: 'https://open.spotify.com/embed/track/6REbwUNlppTfcnV4d4ZoZi?si=d759079c850a4bef',
            isLoaded: false
        },
        {
            id: 3,
            name: 'And To Those I Love',
            artist: '$uicideboy$',
            albumCover: 'assets/img/boys.jpg',
            spotifyUrl: 'https://open.spotify.com/intl-fr/track/30QR0ndUdiiMQMA9g1PGCm?si=983489b7f15d4b28',
            embedUrl: 'https://open.spotify.com/embed/track/30QR0ndUdiiMQMA9g1PGCm?si=983489b7f15d4b28',
            isLoaded: false
        },
        {
            id: 4,
            name: 'No Pole',
            artist: 'Don Toliver',
            albumCover: 'assets/img/don-toliver.png',
            spotifyUrl: 'https://open.spotify.com/intl-fr/track/0eaVIYo2zeOaGJeqZ5TwYz?si=b8b97ea1903843ec',
            embedUrl: 'https://open.spotify.com/embed/track/0eaVIYo2zeOaGJeqZ5TwYz?si=b8b97ea1903843ec',
            isLoaded: false
        },
        {
            id: 5,
            name: 'Timeless',
            artist: 'The Weeknd, Plaboi Carti',
            albumCover: 'assets/img/timeless.png',
            spotifyUrl: 'https://open.spotify.com/intl-fr/track/0FIDCNYYjNvPVimz5icugS?si=f8caa80c6c3e4306',
            embedUrl: 'https://open.spotify.com/embed/track/0FIDCNYYjNvPVimz5icugS?si=f8caa80c6c3e4306',
            isLoaded: false
        },
        {
            id: 6,
            name: 'Self Care',
            artist: 'Mac Miller',
            albumCover: 'assets/img/self-care.png',
            spotifyUrl: 'https://open.spotify.com/intl-fr/track/4c00fD972rl8ubRxZnyI2B?si=1042e978f99141ce',
            embedUrl: 'https://open.spotify.com/embed/track/4c00fD972rl8ubRxZnyI2B?si=1042e978f99141ce',
            isLoaded: false
        }
    ]