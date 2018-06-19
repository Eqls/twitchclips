import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class TwitchService {

  //API_KEY: string = "u9hr04f105qdfs6rktl4i5qaggc8jc"; // localhost
  API_KEY: string = "f3wkzgrvb7qhl54sa3n54io035lnwj";

  constructor(private http: Http) { }

  // Returns top clips from twitch
  // period - day, week, month, all
  // limit - how many entries to return
  getTopClips(period, limit) {
    let headers = new Headers();
    headers.append('Accept', 'application/vnd.twitchtv.v5+json');
    headers.append('Client-ID', this.API_KEY);
    return this.http.get('https://api.twitch.tv/kraken/clips/top?period='
      +period+'&trending=false&limit='+limit, { headers }).map(res => res.json());
  }

  // Return a clip with specific slug
  getClip(slug) {
    let headers = new Headers();
    headers.append('Accept', 'application/vnd.twitchtv.v5+json');
    headers.append('Client-ID', this.API_KEY);
    return this.http.get('https://api.twitch.tv/kraken/clips/'+slug, { headers }).map(res => res.json());
  }

  // Returns top clips from specific game
  // game - name of the game
  // limit - how many items to fetch
  // cursor - from which count to start loading
  getGameClips(game, limit, cursor) {
    let headers = new Headers();
    headers.append('Accept', 'application/vnd.twitchtv.v5+json');
    headers.append('Client-ID', this.API_KEY);
    if(cursor)
    return this.http.get('https://api.twitch.tv/kraken/clips/top?limit='+limit+'&cursor='+cursor+'&game='+game, { headers }).map(res => res.json());
    else
    return this.http.get('https://api.twitch.tv/kraken/clips/top?limit='+limit+'&game='+game, { headers }).map(res => res.json());
  }

  // Returns top clips from channel
  // channel - name of the channel
  // limit - how many items to fetch
  // cursor - from which count to start loading
  getChannelClips(channel, limit, cursor) {
    let headers = new Headers();
    headers.append('Accept', 'application/vnd.twitchtv.v5+json');
    headers.append('Client-ID', this.API_KEY);
    if(cursor)
    return this.http.get('https://api.twitch.tv/kraken/clips/top?limit='+limit+'&cursor='+cursor+'&channel='+channel, { headers }).map(res => res.json());
    else
    return this.http.get('https://api.twitch.tv/kraken/clips/top?limit='+limit+'&channel='+channel, { headers }).map(res => res.json());
  }

}
