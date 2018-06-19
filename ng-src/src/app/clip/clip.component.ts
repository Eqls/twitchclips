import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, Title} from '@angular/platform-browser';

import { TwitchService } from '../services/twitch.service';

import { Clip } from '../models/clip';

@Component({
  selector: 'clip',
  templateUrl: './clip.component.html',
  styleUrls: ['./clip.component.css']
})
export class ClipComponent implements OnInit {

  related: Clip[] = [];
  clip: Clip;
  currentURL: String = window.location.href;

  clip_loaded: boolean = false;
  related_loaded: boolean = false;
  related2_loaded: boolean = false;

  last_cursor_games: String = null;
  last_cursor_channels: String = null;
  cursor_games: String = null;
  cursor_channels: String = null;

  constructor(private twitchService: TwitchService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private router: Router,
    private title: Title) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.related = [];
      this.twitchService.getClip(params['slug']).subscribe(data => {
        this.notLoaded();
        this.clip = new Clip;
        this.clip.slug = data.slug;
        this.clip.embed_url = this.sanitizer.bypassSecurityTrustResourceUrl(data.embed_url);
        this.clip.game = data.game;
        this.clip.streamer = data.broadcaster.name;
        this.clip.title = data.title;
        this.clip.views = data.views;
        this.clip.thumbnail = data.thumbnails.medium;
        this.title.setTitle(<string>this.clip.title + " | Twitchclips.io");
        this.loadRelated();
        this.clip_loaded = true;
      }, err => {
        return false;
      });
    });
  }

  notLoaded() {
    this.clip_loaded = false;
    this.related_loaded = false;
    this.related2_loaded = false;
  }

  loadRelated() {
    if (this.last_cursor_games != this.cursor_games || this.related.length == 0) {
      this.twitchService.getGameClips(this.clip.game, 5, this.cursor_games).subscribe(data => {
        this.last_cursor_games = this.cursor_games;
        this.cursor_games = data._cursor;
        let temp: Clip[] = [];
        for (let entry of data.clips) {
          let clip = new Clip;
          clip.slug = entry.slug;
          clip.embed_url = entry.embed_url;
          clip.game = entry.game;
          clip.streamer = entry.broadcaster.name;
          clip.title = entry.title;
          clip.views = entry.views;
          clip.thumbnail = entry.thumbnails.medium;
          temp.push(clip);
        }
        this.shuffle(temp);
        this.related.push.apply(this.related, temp);
        this.related_loaded = true;
      }, err => {
        return false;
      });
    }

    if (this.last_cursor_channels != this.cursor_channels || this.related.length == 0) {
      this.twitchService.getChannelClips(this.clip.streamer, 5, this.cursor_channels).subscribe(data => {
        this.last_cursor_channels = this.cursor_channels;
        this.cursor_channels = data._cursor;
        let temp: Clip[] = [];
        for (let entry of data.clips) {
          let clip = new Clip;
          clip.slug = entry.slug;
          clip.embed_url = entry.embed_url;
          clip.game = entry.game;
          clip.streamer = entry.broadcaster.name;
          clip.title = entry.title;
          clip.views = entry.views;
          clip.thumbnail = entry.thumbnails.medium;
          temp.push(clip);
        }
        this.shuffle(temp);
        this.related.push.apply(this.related, temp);
        this.related2_loaded = true;
      }, err => {
        return false;
      });
    }

  }

  isLoaded() {
    if(this.clip_loaded && this.related_loaded && this.related2_loaded) return true;
    return false;
  }

  // Shuffles array in place.
  // a - items The array containing the items.
  shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
      j = Math.floor(Math.random() * i);
      x = a[i - 1];
      a[i - 1] = a[j];
      a[j] = x;
    }
  }

}
