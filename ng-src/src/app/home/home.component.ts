import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

import { TwitchService } from '../services/twitch.service';

import { Clip } from '../models/clip';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dayTop: Clip[] = [];
  weekTop: Clip[] = [];
  monthTop: Clip[] = [];

  dayLoaded: boolean = false;
  weekLoaded: boolean = false;
  monthLoaded: boolean = false;

  constructor(private twitchService: TwitchService,
              private title: Title,
              private meta: Meta) { }

  ngOnInit() {
    this.title.setTitle("Home | Twitchclips.io");
    this.meta.addTags([
      { name: 'keywords', content: 'twitch clips, twitch, clips browser, twitch clips browser, trending clips, popular clips'},
      { name: 'description', content: 'Biggest Twitch clips database' }
    ]);
    this.twitchService.getTopClips('day', 10).subscribe(data => {
      for (let entry of data.clips) {
        let clip = new Clip;
        clip.slug = entry.slug;
        clip.embed_url = entry.embed_url;
        clip.game = entry.game;
        clip.streamer = entry.broadcaster.name;
        clip.title = entry.title;
        clip.views = entry.views;
        clip.thumbnail = entry.thumbnails.medium;
        this.dayTop.push(clip);
      }
      this.shuffle(this.dayTop);
      this.dayLoaded = true;
    }, err => {
      return false;
    });

    this.twitchService.getTopClips('week', 10).subscribe(data => {
      for (let entry of data.clips) {
        let clip = new Clip;
        clip.slug = entry.slug;
        clip.embed_url = entry.embed_url;
        clip.game = entry.game;
        clip.streamer = entry.broadcaster.name;
        clip.title = entry.title;
        clip.views = entry.views;
        clip.thumbnail = entry.thumbnails.medium;
        this.weekTop.push(clip);
      }
      this.shuffle(this.weekTop);
      this.weekLoaded = true;
    }, err => {
      return false;
    });

    this.twitchService.getTopClips('month', 10).subscribe(data => {
      for (let entry of data.clips) {
        let clip = new Clip;
        clip.slug = entry.slug;
        clip.embed_url = entry.embed_url;
        clip.game = entry.game;
        clip.streamer = entry.broadcaster.name;
        clip.title = entry.title;
        clip.views = entry.views;
        clip.thumbnail = entry.thumbnails.medium;
        this.monthTop.push(clip);
      }
      this.shuffle(this.monthTop);
      this.monthLoaded = true;
    }, err => {
      console.log(err);
      return false;
    });
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
