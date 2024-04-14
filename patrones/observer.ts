interface Observable {
    attach( observer: Observer ): void;
    notify(): void;
}

class YouTubeChannel implements Observable { 
    subscribers: Observer[] = [];
    videos: string[] = [];
    
    attach(newSubscriber: Observer): void {
        this.subscribers.push( newSubscriber );
    }

    postNewVideo(): void {
        console.log('Ibai: New video posted!');
        this.notify();
    }

    getLastVideoName(): string {
        return this.videos[ this.videos.length - 1 ];
    }

    getSubscribers(): Observer[] {
        return this.subscribers;
    }

    notify(): void {
        this.subscribers.forEach( ( subscriber ) => {
            subscriber.update();
        })
    }
}

interface Observer {
    update(): void;
}

class Subscriber implements Observer {

    youtubeChannel: YouTubeChannel;

    constructor( youtubeChannel: YouTubeChannel ) {
        this.youtubeChannel = youtubeChannel;
    }

    update(): void {
        console.log('Subscriber: New video from Ibai channel: ', this.youtubeChannel.getLastVideoName());
    }
}

//main
let Ibai: YouTubeChannel = new YouTubeChannel();
let videos: string[] = ['Mi House Tour 2024', 'Ultimo dia en Madrid'];

let subscriber1: Observer = new Subscriber( Ibai );
let subscriber2: Observer = new Subscriber( Ibai );

Ibai.videos = videos;

Ibai.attach( subscriber1 );
Ibai.attach( subscriber2);

Ibai.postNewVideo()

