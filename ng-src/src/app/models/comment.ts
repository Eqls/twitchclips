import { User } from '../models/user';

export class Comment {
    _id: String;
    user: User;
    clipSlug: String;
    message: String;
    when: Date;
    votes: [{
      uid: String;
      value: number;
      _id: String;
    }];
    points: number = 0;
    currentVote: Number = 0;
    editing: boolean;
}
