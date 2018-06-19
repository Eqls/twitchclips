import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TwitchService } from '../services/twitch.service';

import { Clip } from '../models/clip';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  channelTop: Clip[] = [];
  gameTop: Clip[] = [];
  clip: Clip;
  query: String;

  constructor(private twitchService: TwitchService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.query = params['query'];
      if(!params['query']) {
        this.router.navigate(['/']);
      };
      this.twitchService.getChannelClips(params['query'], 10, 0).subscribe(data => {
        this.channelTop = [];
        this.gameTop = [];
        for (let entry of data.clips) {
          let clip = new Clip;
          clip.slug = entry.slug;
          clip.embed_url = entry.embed_url;
          clip.game = entry.game;
          clip.streamer = entry.broadcaster.name;
          clip.title = entry.title;
          clip.views = entry.views;
          clip.thumbnail = entry.thumbnails.medium;
          this.channelTop.push(clip);
        }
      }, err => {
        return false;
      });
    });

    this.route.params.subscribe(params => {
      this.channelTop = [];
      this.gameTop = [];
      this.twitchService.getGameClips(params['query'], 10, 0).subscribe(data => {
        for (let entry of data.clips) {
          let clip = new Clip;
          clip.slug = entry.slug;
          clip.embed_url = entry.embed_url;
          clip.game = entry.game;
          clip.streamer = entry.broadcaster.name;
          clip.title = entry.title;
          clip.views = entry.views;
          clip.thumbnail = entry.thumbnails.medium;
          this.gameTop.push(clip);
        }
      }, err => {
        return false;
      });
    });
  }
}
