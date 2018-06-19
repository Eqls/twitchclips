webpackJsonp([1,4],{

/***/ 230:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 230;


/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(247);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(321),
        styles: [__webpack_require__(309)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_fontawesome_angular2_fontawesome__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_fontawesome_angular2_fontawesome___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_fontawesome_angular2_fontawesome__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_infinite_scroll__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_moment__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__topbar_topbar_component__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_home_component__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_twitch_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_auth_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_comments_service__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_users_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__clip_clip_component__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__search_search_component__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__comments_comments_component__ = __webpack_require__(242);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













//services







var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_12__home_home_component__["a" /* HomeComponent */] },
    { path: 'clip/:slug', component: __WEBPACK_IMPORTED_MODULE_17__clip_clip_component__["a" /* ClipComponent */] },
    { path: 'search/:query', component: __WEBPACK_IMPORTED_MODULE_18__search_search_component__["a" /* SearchComponent */] },
    { path: '**', redirectTo: '/' }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_11__topbar_topbar_component__["a" /* TopbarComponent */],
            __WEBPACK_IMPORTED_MODULE_12__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_17__clip_clip_component__["a" /* ClipComponent */],
            __WEBPACK_IMPORTED_MODULE_18__search_search_component__["a" /* SearchComponent */],
            __WEBPACK_IMPORTED_MODULE_19__comments_comments_component__["a" /* CommentsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(routes),
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_7_angular2_fontawesome_angular2_fontawesome__["Angular2FontawesomeModule"],
            __WEBPACK_IMPORTED_MODULE_8_ngx_infinite_scroll__["a" /* InfiniteScrollModule */],
            __WEBPACK_IMPORTED_MODULE_9_angular2_moment__["MomentModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_13__services_twitch_service__["a" /* TwitchService */], __WEBPACK_IMPORTED_MODULE_14__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_15__services_comments_service__["a" /* CommentsService */], __WEBPACK_IMPORTED_MODULE_16__services_users_service__["a" /* UsersService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_twitch_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_clip__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClipComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ClipComponent = (function () {
    function ClipComponent(twitchService, route, sanitizer, router, title) {
        this.twitchService = twitchService;
        this.route = route;
        this.sanitizer = sanitizer;
        this.router = router;
        this.title = title;
        this.related = [];
        this.currentURL = window.location.href;
        this.clip_loaded = false;
        this.related_loaded = false;
        this.related2_loaded = false;
        this.last_cursor_games = null;
        this.last_cursor_channels = null;
        this.cursor_games = null;
        this.cursor_channels = null;
    }
    ClipComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.related = [];
            _this.twitchService.getClip(params['slug']).subscribe(function (data) {
                _this.notLoaded();
                _this.clip = new __WEBPACK_IMPORTED_MODULE_4__models_clip__["a" /* Clip */];
                _this.clip.slug = data.slug;
                _this.clip.embed_url = _this.sanitizer.bypassSecurityTrustResourceUrl(data.embed_url);
                _this.clip.game = data.game;
                _this.clip.streamer = data.broadcaster.name;
                _this.clip.title = data.title;
                _this.clip.views = data.views;
                _this.clip.thumbnail = data.thumbnails.medium;
                _this.title.setTitle(_this.clip.title + " | Twitchclips.io");
                _this.loadRelated();
                _this.clip_loaded = true;
            }, function (err) {
                return false;
            });
        });
    };
    ClipComponent.prototype.notLoaded = function () {
        this.clip_loaded = false;
        this.related_loaded = false;
        this.related2_loaded = false;
    };
    ClipComponent.prototype.loadRelated = function () {
        var _this = this;
        if (this.last_cursor_games != this.cursor_games || this.related.length == 0) {
            this.twitchService.getGameClips(this.clip.game, 5, this.cursor_games).subscribe(function (data) {
                _this.last_cursor_games = _this.cursor_games;
                _this.cursor_games = data._cursor;
                var temp = [];
                for (var _i = 0, _a = data.clips; _i < _a.length; _i++) {
                    var entry = _a[_i];
                    var clip = new __WEBPACK_IMPORTED_MODULE_4__models_clip__["a" /* Clip */];
                    clip.slug = entry.slug;
                    clip.embed_url = entry.embed_url;
                    clip.game = entry.game;
                    clip.streamer = entry.broadcaster.name;
                    clip.title = entry.title;
                    clip.views = entry.views;
                    clip.thumbnail = entry.thumbnails.medium;
                    temp.push(clip);
                }
                _this.shuffle(temp);
                _this.related.push.apply(_this.related, temp);
                _this.related_loaded = true;
            }, function (err) {
                return false;
            });
        }
        if (this.last_cursor_channels != this.cursor_channels || this.related.length == 0) {
            this.twitchService.getChannelClips(this.clip.streamer, 5, this.cursor_channels).subscribe(function (data) {
                _this.last_cursor_channels = _this.cursor_channels;
                _this.cursor_channels = data._cursor;
                var temp = [];
                for (var _i = 0, _a = data.clips; _i < _a.length; _i++) {
                    var entry = _a[_i];
                    var clip = new __WEBPACK_IMPORTED_MODULE_4__models_clip__["a" /* Clip */];
                    clip.slug = entry.slug;
                    clip.embed_url = entry.embed_url;
                    clip.game = entry.game;
                    clip.streamer = entry.broadcaster.name;
                    clip.title = entry.title;
                    clip.views = entry.views;
                    clip.thumbnail = entry.thumbnails.medium;
                    temp.push(clip);
                }
                _this.shuffle(temp);
                _this.related.push.apply(_this.related, temp);
                _this.related2_loaded = true;
            }, function (err) {
                return false;
            });
        }
    };
    ClipComponent.prototype.isLoaded = function () {
        if (this.clip_loaded && this.related_loaded && this.related2_loaded)
            return true;
        return false;
    };
    // Shuffles array in place.
    // a - items The array containing the items.
    ClipComponent.prototype.shuffle = function (a) {
        var j, x, i;
        for (i = a.length; i; i--) {
            j = Math.floor(Math.random() * i);
            x = a[i - 1];
            a[i - 1] = a[j];
            a[j] = x;
        }
    };
    return ClipComponent;
}());
ClipComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'clip',
        template: __webpack_require__(322),
        styles: [__webpack_require__(310)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_twitch_service__["a" /* TwitchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_twitch_service__["a" /* TwitchService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["g" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["g" /* DomSanitizer */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["h" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["h" /* Title */]) === "function" && _e || Object])
], ClipComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=clip.component.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_comments_service__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_users_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_comment__ = __webpack_require__(244);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//Service imports



//Model imports

var CommentsComponent = (function () {
    function CommentsComponent(commentsService, usersService, authService, snackBar) {
        this.commentsService = commentsService;
        this.usersService = usersService;
        this.authService = authService;
        this.snackBar = snackBar;
        this.date = new Date();
    }
    CommentsComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    };
    CommentsComponent.prototype.ngOnInit = function () {
        this.loadUser();
        this.loadComments();
    };
    CommentsComponent.prototype.ngOnChanges = function () {
        this.loadComments();
    };
    CommentsComponent.prototype.loadUser = function () {
        var _this = this;
        this.authService.getUser().subscribe(function (data) {
            _this.user = data.user;
        }, function (err) {
            return false;
        });
    };
    CommentsComponent.prototype.isEditing = function (comment) {
        for (var _i = 0, _a = this.comments; _i < _a.length; _i++) {
            var entry = _a[_i];
            if (comment._id != entry._id && entry.editing)
                entry.editing = false;
        }
        if (comment.editing)
            comment.editing = false;
        else
            comment.editing = true;
    };
    CommentsComponent.prototype.loadComments = function () {
        var _this = this;
        this.commentsService.getComments(this.clipSlug).subscribe(function (data) {
            _this.comments = [];
            for (var _i = 0, _a = data.comments; _i < _a.length; _i++) {
                var entry = _a[_i];
                var comment = new __WEBPACK_IMPORTED_MODULE_6__models_comment__["a" /* Comment */];
                comment = entry;
                comment.editing = false;
                comment.points = _this.countPoints(comment);
                _this.setUserVotes(comment);
                _this.comments.push(comment);
                _this.sortComments(true);
            }
            //this.comments = data.comments as Comment[];
        }, function (err) {
            return false;
        });
    };
    CommentsComponent.prototype.countPoints = function (comment) {
        var total = 0;
        if (comment.votes) {
            for (var _i = 0, _a = comment.votes; _i < _a.length; _i++) {
                var entry = _a[_i];
                total += Number.parseInt(entry.value);
            }
        }
        return total;
    };
    CommentsComponent.prototype.setUserVotes = function (comment) {
        if (this.user) {
            for (var _i = 0, _a = comment.votes; _i < _a.length; _i++) {
                var entry = _a[_i];
                if (entry.uid == this.user._id) {
                    comment.currentVote = entry.value;
                }
            }
        }
    };
    CommentsComponent.prototype.sortComments = function (byPoints) {
        if (byPoints) {
            this.comments.sort(function (a, b) {
                return b.points - a.points;
            });
        }
        else {
            this.comments.sort(function (a, b) {
                return new Date(b.when).getTime() - new Date(a.when).getTime();
            });
        }
    };
    CommentsComponent.prototype.remove = function (comment) {
        var _this = this;
        this.commentsService.remove(comment).subscribe(function (res) {
            if (res.success) {
                var index = _this.comments.findIndex(function (obj) { return obj._id == comment._id; });
                _this.comments.splice(index, 1);
                _this.openSnackBar("Comment was successfuly removed!", null);
            }
            else {
                _this.openSnackBar("Error occured while removing the comment!", null);
            }
            ;
        });
    };
    CommentsComponent.prototype.vote = function (comment, action) {
        var _this = this;
        this.commentsService.vote(comment, action).subscribe(function (res) {
            if (res.success) {
                comment.points = _this.countPoints(res.comment);
                if (comment.currentVote == action) {
                    comment.currentVote = 0;
                }
                else {
                    comment.currentVote = action;
                }
                _this.openSnackBar("Success!", null);
            }
        });
    };
    CommentsComponent.prototype.update = function (comment) {
        var _this = this;
        this.commentsService.update(comment).subscribe(function (res) {
            if (res.success) {
                comment.editing = false;
                _this.openSnackBar("Comment was successfuly updated!", null);
            }
            else {
                _this.openSnackBar("Error occured while updating the comment!", null);
            }
            ;
        });
    };
    CommentsComponent.prototype.onSubmit = function (form) {
        var _this = this;
        var comment = new __WEBPACK_IMPORTED_MODULE_6__models_comment__["a" /* Comment */];
        comment.message = form.message;
        comment.clipSlug = this.clipSlug;
        comment.when = new Date();
        comment.editing = false;
        this.commentsService.create(comment).subscribe(function (res) {
            if (res.success) {
                _this.commentForm.resetForm();
                res.comment.user = _this.user;
                res.comment.points = _this.countPoints(res.comment);
                _this.comments.push(res.comment);
                _this.sortComments(true);
                _this.openSnackBar("Comment was successfuly published!", null);
            }
            else {
                _this.openSnackBar("Error occured while publishing the comment!", null);
            }
            ;
        });
    };
    return CommentsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CommentsComponent.prototype, "clipSlug", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('commentForm'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* NgForm */]) === "function" && _a || Object)
], CommentsComponent.prototype, "commentForm", void 0);
CommentsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'comments',
        template: __webpack_require__(323),
        styles: [__webpack_require__(311)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_comments_service__["a" /* CommentsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_comments_service__["a" /* CommentsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_users_service__["a" /* UsersService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdSnackBar */]) === "function" && _e || Object])
], CommentsComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=comments.component.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_twitch_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_clip__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = (function () {
    function HomeComponent(twitchService, title, meta) {
        this.twitchService = twitchService;
        this.title = title;
        this.meta = meta;
        this.dayTop = [];
        this.weekTop = [];
        this.monthTop = [];
        this.dayLoaded = false;
        this.weekLoaded = false;
        this.monthLoaded = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.title.setTitle("Home | Twitchclips.io");
        this.meta.addTags([
            { name: 'keywords', content: 'twitch clips, twitch, clips browser, twitch clips browser, trending clips, popular clips' },
            { name: 'description', content: 'Biggest Twitch clips database' }
        ]);
        this.twitchService.getTopClips('day', 10).subscribe(function (data) {
            for (var _i = 0, _a = data.clips; _i < _a.length; _i++) {
                var entry = _a[_i];
                var clip = new __WEBPACK_IMPORTED_MODULE_3__models_clip__["a" /* Clip */];
                clip.slug = entry.slug;
                clip.embed_url = entry.embed_url;
                clip.game = entry.game;
                clip.streamer = entry.broadcaster.name;
                clip.title = entry.title;
                clip.views = entry.views;
                clip.thumbnail = entry.thumbnails.medium;
                _this.dayTop.push(clip);
            }
            _this.shuffle(_this.dayTop);
            _this.dayLoaded = true;
        }, function (err) {
            return false;
        });
        this.twitchService.getTopClips('week', 10).subscribe(function (data) {
            for (var _i = 0, _a = data.clips; _i < _a.length; _i++) {
                var entry = _a[_i];
                var clip = new __WEBPACK_IMPORTED_MODULE_3__models_clip__["a" /* Clip */];
                clip.slug = entry.slug;
                clip.embed_url = entry.embed_url;
                clip.game = entry.game;
                clip.streamer = entry.broadcaster.name;
                clip.title = entry.title;
                clip.views = entry.views;
                clip.thumbnail = entry.thumbnails.medium;
                _this.weekTop.push(clip);
            }
            _this.shuffle(_this.weekTop);
            _this.weekLoaded = true;
        }, function (err) {
            return false;
        });
        this.twitchService.getTopClips('month', 10).subscribe(function (data) {
            for (var _i = 0, _a = data.clips; _i < _a.length; _i++) {
                var entry = _a[_i];
                var clip = new __WEBPACK_IMPORTED_MODULE_3__models_clip__["a" /* Clip */];
                clip.slug = entry.slug;
                clip.embed_url = entry.embed_url;
                clip.game = entry.game;
                clip.streamer = entry.broadcaster.name;
                clip.title = entry.title;
                clip.views = entry.views;
                clip.thumbnail = entry.thumbnails.medium;
                _this.monthTop.push(clip);
            }
            _this.shuffle(_this.monthTop);
            _this.monthLoaded = true;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    // Shuffles array in place.
    // a - items The array containing the items.
    HomeComponent.prototype.shuffle = function (a) {
        var j, x, i;
        for (i = a.length; i; i--) {
            j = Math.floor(Math.random() * i);
            x = a[i - 1];
            a[i - 1] = a[j];
            a[j] = x;
        }
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'home',
        template: __webpack_require__(324),
        styles: [__webpack_require__(312)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_twitch_service__["a" /* TwitchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_twitch_service__["a" /* TwitchService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["h" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["h" /* Title */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["i" /* Meta */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["i" /* Meta */]) === "function" && _c || Object])
], HomeComponent);

var _a, _b, _c;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Comment; });
var Comment = (function () {
    function Comment() {
        this.points = 0;
        this.currentVote = 0;
    }
    return Comment;
}());

//# sourceMappingURL=comment.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_twitch_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_clip__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchComponent = (function () {
    function SearchComponent(twitchService, route, router) {
        this.twitchService = twitchService;
        this.route = route;
        this.router = router;
        this.channelTop = [];
        this.gameTop = [];
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.query = params['query'];
            if (!params['query']) {
                _this.router.navigate(['/']);
            }
            ;
            _this.twitchService.getChannelClips(params['query'], 10, 0).subscribe(function (data) {
                _this.channelTop = [];
                _this.gameTop = [];
                for (var _i = 0, _a = data.clips; _i < _a.length; _i++) {
                    var entry = _a[_i];
                    var clip = new __WEBPACK_IMPORTED_MODULE_3__models_clip__["a" /* Clip */];
                    clip.slug = entry.slug;
                    clip.embed_url = entry.embed_url;
                    clip.game = entry.game;
                    clip.streamer = entry.broadcaster.name;
                    clip.title = entry.title;
                    clip.views = entry.views;
                    clip.thumbnail = entry.thumbnails.medium;
                    _this.channelTop.push(clip);
                }
            }, function (err) {
                return false;
            });
        });
        this.route.params.subscribe(function (params) {
            _this.channelTop = [];
            _this.gameTop = [];
            _this.twitchService.getGameClips(params['query'], 10, 0).subscribe(function (data) {
                for (var _i = 0, _a = data.clips; _i < _a.length; _i++) {
                    var entry = _a[_i];
                    var clip = new __WEBPACK_IMPORTED_MODULE_3__models_clip__["a" /* Clip */];
                    clip.slug = entry.slug;
                    clip.embed_url = entry.embed_url;
                    clip.game = entry.game;
                    clip.streamer = entry.broadcaster.name;
                    clip.title = entry.title;
                    clip.views = entry.views;
                    clip.thumbnail = entry.thumbnails.medium;
                    _this.gameTop.push(clip);
                }
            }, function (err) {
                return false;
            });
        });
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-search',
        template: __webpack_require__(325),
        styles: [__webpack_require__(313)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_twitch_service__["a" /* TwitchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_twitch_service__["a" /* TwitchService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], SearchComponent);

var _a, _b, _c;
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(44);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TopbarComponent = (function () {
    function TopbarComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    TopbarComponent.prototype.login = function () {
        this.authService.login();
    };
    TopbarComponent.prototype.logout = function () {
        var _this = this;
        this.authService.logout().subscribe(function (data) {
            if (data.success) {
                _this.router.navigate(['/']);
                _this.user = null;
            }
            else
                _this.router.navigate(['/error']);
        });
    };
    TopbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getUser().subscribe(function (data) {
            _this.user = data.user;
        }, function (err) {
            return false;
        });
    };
    return TopbarComponent;
}());
TopbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'topbar',
        template: __webpack_require__(326),
        styles: [__webpack_require__(314)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], TopbarComponent);

var _a, _b;
//# sourceMappingURL=topbar.component.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 309:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, ".container {\r\n  margin: 0 auto;\r\n  width: 90%;\r\n  padding: 5px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 310:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, ".container {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: start;\r\n      -ms-flex-align: start;\r\n          align-items: flex-start;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n}\r\n\r\n.video-card {\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.video-card .clip {\r\n  width: 100%;\r\n}\r\n\r\n\r\n/* Social buttons */\r\n\r\n.video-card ul {\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n  list-style-type: none;\r\n  -webkit-box-pack: end;\r\n      -ms-flex-pack: end;\r\n          justify-content: flex-end;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.video-card ul li {\r\n  width: 30px;\r\n  height: 30px;\r\n  line-height: 30px;\r\n  text-align: center;\r\n  margin: 3px;\r\n  color: white;\r\n  cursor: hand;\r\n  cursor: pointer;\r\n  border-radius: 100%;\r\n  transition: box-shadow 0.25s;\r\n}\r\n\r\n.trending-list {\r\n  padding-left: 15px;\r\n  padding-right: 15px;\r\n  height: 620px;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.trending-list::-webkit-scrollbar {\r\n  width: 6px;\r\n}\r\n\r\n.trending-list::-webkit-scrollbar-track {\r\n  background: #fafafa;\r\n}\r\n\r\n.trending-list::-webkit-scrollbar-thumb {\r\n  background-color: #3f51b5;\r\n  outline: 1px solid slategrey;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 311:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, ".container {}\r\n\r\n\r\n/* Comments */\r\n\r\n.comment {\r\n  background: #ffffff;\r\n  padding: 5px 10px 5px;\r\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12);\r\n  border-radius: 2px;\r\n  margin-bottom: 10px;\r\n  /*border-top: 1px solid #3f51b5;*/\r\n  border-left: 3px solid #3f51b5;\r\n  width: 925px;\r\n  position: relative;\r\n}\r\n\r\n.green {\r\n  border-left: 3px solid green;\r\n}\r\n\r\n.red {\r\n  border-left: 3px solid red;\r\n}\r\n\r\n.comment p {\r\n  width: 100%;\r\n}\r\n\r\n.comment:hover .hide {\r\n  opacity: 1;\r\n}\r\n\r\n.hide {\r\n  opacity: 0;\r\n}\r\n\r\n.upvote-box .upvote {\r\n  padding: 8px 8px 0 8px;\r\n  border-radius: 3px 3px 1px 1px;\r\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12);\r\n  margin-bottom: 1px;\r\n  cursor: pointer;\r\n}\r\n\r\n.upvote-box .downvote {\r\n  padding: 0 8px 8px 8px;\r\n  border-radius: 1px 1px 3px 3px;\r\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12);\r\n  margin-top: 1px;\r\n  cursor: pointer;\r\n}\r\n\r\n.upvote-box .upvote:hover, .upvote-box .downvote:hover {\r\n  color: #3f51b5;\r\n}\r\n\r\n.upvote-box {\r\n  opacity: 0;\r\n  position: absolute;\r\n  top: 0;\r\n  left: -45px;\r\n  padding: 3px 10px 20px 10px;\r\n  color: #000000;\r\n}\r\n\r\n.button-pressed {\r\n  color: #ffffff;\r\n  background-color: #3f51b5;\r\n}\r\n\r\n.button-pressed:hover {\r\n  color: #000000 !important;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 312:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 313:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 314:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, ".logo {\r\n  color: white;\r\n  text-decoration: none;\r\n}\r\n\r\n.search {\r\n  width: 100%;\r\n  height: 40px;\r\n  font-size: 24px;\r\n  background-color: #fafafa;\r\n  padding: 5px;\r\n  outline: none;\r\n  border: 0;\r\n  box-shadow: none;\r\n  transition: box-shadow 0.25s;\r\n  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);\r\n  box-sizing: border-box;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.search:focus {\r\n  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.search::-webkit-input-placeholder {\r\n  color: lightgray;\r\n}\r\n\r\n.search:-ms-input-placeholder {\r\n  color: lightgray;\r\n}\r\n\r\n.search::placeholder {\r\n  color: lightgray;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 318:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 96,
	"./af.js": 96,
	"./ar": 103,
	"./ar-dz": 97,
	"./ar-dz.js": 97,
	"./ar-kw": 98,
	"./ar-kw.js": 98,
	"./ar-ly": 99,
	"./ar-ly.js": 99,
	"./ar-ma": 100,
	"./ar-ma.js": 100,
	"./ar-sa": 101,
	"./ar-sa.js": 101,
	"./ar-tn": 102,
	"./ar-tn.js": 102,
	"./ar.js": 103,
	"./az": 104,
	"./az.js": 104,
	"./be": 105,
	"./be.js": 105,
	"./bg": 106,
	"./bg.js": 106,
	"./bn": 107,
	"./bn.js": 107,
	"./bo": 108,
	"./bo.js": 108,
	"./br": 109,
	"./br.js": 109,
	"./bs": 110,
	"./bs.js": 110,
	"./ca": 111,
	"./ca.js": 111,
	"./cs": 112,
	"./cs.js": 112,
	"./cv": 113,
	"./cv.js": 113,
	"./cy": 114,
	"./cy.js": 114,
	"./da": 115,
	"./da.js": 115,
	"./de": 118,
	"./de-at": 116,
	"./de-at.js": 116,
	"./de-ch": 117,
	"./de-ch.js": 117,
	"./de.js": 118,
	"./dv": 119,
	"./dv.js": 119,
	"./el": 120,
	"./el.js": 120,
	"./en-au": 121,
	"./en-au.js": 121,
	"./en-ca": 122,
	"./en-ca.js": 122,
	"./en-gb": 123,
	"./en-gb.js": 123,
	"./en-ie": 124,
	"./en-ie.js": 124,
	"./en-nz": 125,
	"./en-nz.js": 125,
	"./eo": 126,
	"./eo.js": 126,
	"./es": 128,
	"./es-do": 127,
	"./es-do.js": 127,
	"./es.js": 128,
	"./et": 129,
	"./et.js": 129,
	"./eu": 130,
	"./eu.js": 130,
	"./fa": 131,
	"./fa.js": 131,
	"./fi": 132,
	"./fi.js": 132,
	"./fo": 133,
	"./fo.js": 133,
	"./fr": 136,
	"./fr-ca": 134,
	"./fr-ca.js": 134,
	"./fr-ch": 135,
	"./fr-ch.js": 135,
	"./fr.js": 136,
	"./fy": 137,
	"./fy.js": 137,
	"./gd": 138,
	"./gd.js": 138,
	"./gl": 139,
	"./gl.js": 139,
	"./gom-latn": 140,
	"./gom-latn.js": 140,
	"./he": 141,
	"./he.js": 141,
	"./hi": 142,
	"./hi.js": 142,
	"./hr": 143,
	"./hr.js": 143,
	"./hu": 144,
	"./hu.js": 144,
	"./hy-am": 145,
	"./hy-am.js": 145,
	"./id": 146,
	"./id.js": 146,
	"./is": 147,
	"./is.js": 147,
	"./it": 148,
	"./it.js": 148,
	"./ja": 149,
	"./ja.js": 149,
	"./jv": 150,
	"./jv.js": 150,
	"./ka": 151,
	"./ka.js": 151,
	"./kk": 152,
	"./kk.js": 152,
	"./km": 153,
	"./km.js": 153,
	"./kn": 154,
	"./kn.js": 154,
	"./ko": 155,
	"./ko.js": 155,
	"./ky": 156,
	"./ky.js": 156,
	"./lb": 157,
	"./lb.js": 157,
	"./lo": 158,
	"./lo.js": 158,
	"./lt": 159,
	"./lt.js": 159,
	"./lv": 160,
	"./lv.js": 160,
	"./me": 161,
	"./me.js": 161,
	"./mi": 162,
	"./mi.js": 162,
	"./mk": 163,
	"./mk.js": 163,
	"./ml": 164,
	"./ml.js": 164,
	"./mr": 165,
	"./mr.js": 165,
	"./ms": 167,
	"./ms-my": 166,
	"./ms-my.js": 166,
	"./ms.js": 167,
	"./my": 168,
	"./my.js": 168,
	"./nb": 169,
	"./nb.js": 169,
	"./ne": 170,
	"./ne.js": 170,
	"./nl": 172,
	"./nl-be": 171,
	"./nl-be.js": 171,
	"./nl.js": 172,
	"./nn": 173,
	"./nn.js": 173,
	"./pa-in": 174,
	"./pa-in.js": 174,
	"./pl": 175,
	"./pl.js": 175,
	"./pt": 177,
	"./pt-br": 176,
	"./pt-br.js": 176,
	"./pt.js": 177,
	"./ro": 178,
	"./ro.js": 178,
	"./ru": 179,
	"./ru.js": 179,
	"./sd": 180,
	"./sd.js": 180,
	"./se": 181,
	"./se.js": 181,
	"./si": 182,
	"./si.js": 182,
	"./sk": 183,
	"./sk.js": 183,
	"./sl": 184,
	"./sl.js": 184,
	"./sq": 185,
	"./sq.js": 185,
	"./sr": 187,
	"./sr-cyrl": 186,
	"./sr-cyrl.js": 186,
	"./sr.js": 187,
	"./ss": 188,
	"./ss.js": 188,
	"./sv": 189,
	"./sv.js": 189,
	"./sw": 190,
	"./sw.js": 190,
	"./ta": 191,
	"./ta.js": 191,
	"./te": 192,
	"./te.js": 192,
	"./tet": 193,
	"./tet.js": 193,
	"./th": 194,
	"./th.js": 194,
	"./tl-ph": 195,
	"./tl-ph.js": 195,
	"./tlh": 196,
	"./tlh.js": 196,
	"./tr": 197,
	"./tr.js": 197,
	"./tzl": 198,
	"./tzl.js": 198,
	"./tzm": 200,
	"./tzm-latn": 199,
	"./tzm-latn.js": 199,
	"./tzm.js": 200,
	"./uk": 201,
	"./uk.js": 201,
	"./ur": 202,
	"./ur.js": 202,
	"./uz": 204,
	"./uz-latn": 203,
	"./uz-latn.js": 203,
	"./uz.js": 204,
	"./vi": 205,
	"./vi.js": 205,
	"./x-pseudo": 206,
	"./x-pseudo.js": 206,
	"./yo": 207,
	"./yo.js": 207,
	"./zh-cn": 208,
	"./zh-cn.js": 208,
	"./zh-hk": 209,
	"./zh-hk.js": 209,
	"./zh-tw": 210,
	"./zh-tw.js": 210
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 318;


/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TwitchService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TwitchService = (function () {
    function TwitchService(http) {
        this.http = http;
        //API_KEY: string = "u9hr04f105qdfs6rktl4i5qaggc8jc"; // localhost
        this.API_KEY = "f3wkzgrvb7qhl54sa3n54io035lnwj";
    }
    // Returns top clips from twitch
    // period - day, week, month, all
    // limit - how many entries to return
    TwitchService.prototype.getTopClips = function (period, limit) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Accept', 'application/vnd.twitchtv.v5+json');
        headers.append('Client-ID', this.API_KEY);
        return this.http.get('https://api.twitch.tv/kraken/clips/top?period='
            + period + '&trending=false&limit=' + limit, { headers: headers }).map(function (res) { return res.json(); });
    };
    // Return a clip with specific slug
    TwitchService.prototype.getClip = function (slug) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Accept', 'application/vnd.twitchtv.v5+json');
        headers.append('Client-ID', this.API_KEY);
        return this.http.get('https://api.twitch.tv/kraken/clips/' + slug, { headers: headers }).map(function (res) { return res.json(); });
    };
    // Returns top clips from specific game
    // game - name of the game
    // limit - how many items to fetch
    // cursor - from which count to start loading
    TwitchService.prototype.getGameClips = function (game, limit, cursor) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Accept', 'application/vnd.twitchtv.v5+json');
        headers.append('Client-ID', this.API_KEY);
        if (cursor)
            return this.http.get('https://api.twitch.tv/kraken/clips/top?limit=' + limit + '&cursor=' + cursor + '&game=' + game, { headers: headers }).map(function (res) { return res.json(); });
        else
            return this.http.get('https://api.twitch.tv/kraken/clips/top?limit=' + limit + '&game=' + game, { headers: headers }).map(function (res) { return res.json(); });
    };
    // Returns top clips from channel
    // channel - name of the channel
    // limit - how many items to fetch
    // cursor - from which count to start loading
    TwitchService.prototype.getChannelClips = function (channel, limit, cursor) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Accept', 'application/vnd.twitchtv.v5+json');
        headers.append('Client-ID', this.API_KEY);
        if (cursor)
            return this.http.get('https://api.twitch.tv/kraken/clips/top?limit=' + limit + '&cursor=' + cursor + '&channel=' + channel, { headers: headers }).map(function (res) { return res.json(); });
        else
            return this.http.get('https://api.twitch.tv/kraken/clips/top?limit=' + limit + '&channel=' + channel, { headers: headers }).map(function (res) { return res.json(); });
    };
    return TwitchService;
}());
TwitchService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], TwitchService);

var _a;
//# sourceMappingURL=twitch.service.js.map

/***/ }),

/***/ 321:
/***/ (function(module, exports) {

module.exports = "<topbar></topbar>\n<div class=\"container\">\n<router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 322:
/***/ (function(module, exports) {

module.exports = "<div id=\"fb-root\"></div>\r\n<div *ngIf=\"isLoaded(); else loading\" class=\"container\">\r\n  <div>\r\n  <md-card *ngIf=\"clip != null\" class=\"video-card\">\r\n    <md-card-header>\r\n      <md-card-title>{{clip.title}}</md-card-title>\r\n    </md-card-header>\r\n    <md-card-content>\r\n      <div class=\"clip\">\r\n        <iframe [src]='clip.embed_url' width='896' height='504' frameborder='0' scrolling='no' allowfullscreen='true'></iframe>\r\n      </div>\r\n      <ul>\r\n        <li mdTooltip=\"Share on facebook\" [mdTooltipPosition]=\"'below'\" class=\"fb-share-button\" [attr.data-href]=\"currentURL\" data-layout=\"button\" data-size=\"small\" style=\"background-color: #3b5998\">\r\n          <fa [name]=\"'facebook'\" [size]=1></fa>\r\n        </li>\r\n        <li mdTooltip=\"Share on twitter\" [mdTooltipPosition]=\"'below'\" style=\"background-color: #55acee\">\r\n          <fa [name]=\"'twitter'\" [size]=1></fa>\r\n        </li>\r\n        <li mdTooltip=\"Share on reddit\" [mdTooltipPosition]=\"'below'\" style=\"background-color: #ff4500\">\r\n          <fa [name]=\"'reddit-alien'\" [size]=1></fa>\r\n        </li>\r\n      </ul>\r\n    </md-card-content>\r\n  </md-card>\r\n  <comments [clipSlug]=\"clip.slug\"></comments>\r\n</div>\r\n  <div *ngIf=\"clip != null\" class=\"trending-list\" infiniteScroll [scrollWindow]=\"false\" (scrolled)=\"loadRelated()\">\r\n    <div *ngFor=\"let clip of related\" class=\"clip\">\r\n      <a [routerLink]=\"['/clip', clip.slug]\"><img src=\"{{clip.thumbnail}}\"></a>\r\n      <span class=\"title\" title=\"{{clip.title}}\"><a [routerLink]=\"['/clip', clip.slug]\">{{clip.title}}</a></span>\r\n      <div class=\"details\">\r\n        <span>{{clip.views}} views</span>\r\n        <span>on {{clip.streamer}}</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<ng-template #loading>\r\n  <div class=\"container\">\r\n    <fa [name]=\"'refresh'\" style=\"animation: fa-spin 1s infinite linear; margin:0 auto;\" [size]=2 [spin]=true aria-hidden=\"true\"></fa>\r\n  </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ 323:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <form *ngIf=\"user\" #commentForm=\"ngForm\" novalidate (ngSubmit)=\"commentForm.valid && onSubmit(commentForm.value)\" style=\"margin-bottom:10px;\">\r\n    <md-input-container [hideRequiredMarker]=\"true\" style=\"width:100%\">\r\n      <textarea mdInput ngModel #message=\"ngModel\" required minlength=\"5\" name=\"message\" rows=3 style=\"resize: vertical;\" placeholder=\"Your comment\"></textarea>\r\n    </md-input-container>\r\n    <div style=\"color:red;font-size:12px;\" *ngIf=\"message.errors && (message.dirty || message.touched)\" class=\"alert alert-danger\">\r\n      <p [hidden]=\"!message.errors.minlength\">\r\n        Message must be at least 5 characters long.\r\n      </p>\r\n    </div>\r\n    <button type=\"submit\" color=\"primary\" [disabled]=\"!commentForm.valid\" md-raised-button>Send</button>\r\n    <button (click)=\"commentForm.resetForm();\" md-raised-button>Clear</button>\r\n  </form>\r\n\r\n  <div *ngIf=\"comments == 0\" class=\"comment\">\r\n    <p>No comments yet! Be first! :)</p>\r\n  </div>\r\n  <div *ngIf=\"comments != 0\" style=\"display:flex;\">\r\n    <h4>{{comments?.length}} comments:</h4>\r\n    <span class=\"spacer\"></span>\r\n    <md-select placeholder=\"sort by\">\r\n      <md-option (click)=\"sortComments(true)\">Top</md-option>\r\n      <md-option (click)=\"sortComments(false)\">Date</md-option>\r\n    </md-select>\r\n  </div>\r\n\r\n  <div *ngFor=\"let comment of comments\" class=\"comment green red\" [class.green]=\"comment.currentVote == '1'\" [class.red]=\"comment.currentVote == '-1'\">\r\n    <!-- Upvoting START -->\r\n    <div *ngIf=\"user\" class=\"upvote-box hide\">\r\n      <div (click)=\"vote(comment, 1)\" class=\"upvote button-pressed\" [class.button-pressed]=\"comment.currentVote == '1'\">\r\n        <fa [name]=\"'sort-up'\" [size]=1></fa>\r\n      </div>\r\n      <div (click)=\"vote(comment, -1)\" class=\"downvote button-pressed\" [class.button-pressed]=\"comment.currentVote == '-1'\">\r\n        <fa [name]=\"'sort-down'\" [size]=1></fa>\r\n      </div>\r\n    </div>\r\n    <!-- Upvoting END -->\r\n    <div *ngIf=\"!comment.editing; else modify\">\r\n      <md-chip-list>\r\n        <md-chip *ngIf=\"comment.user.role == 'user'\">{{comment.user.username}}</md-chip>\r\n        <md-chip *ngIf=\"comment.user.role == 'admin'\" color=\"primary\" selected=\"true\">\r\n          <fa mdTooltip=\"Staff\" style=\"color:gold;\" [mdTooltipPosition]=\"'below'\" [name]=\"'wrench'\" [size]=0></fa> {{comment.user.username}}\r\n        </md-chip>\r\n        <md-chip style=\"background-color:#ffffff; color: gray;\">{{comment.when | amTimeAgo}}</md-chip>\r\n        <md-chip style=\"background-color:#ffffff; color: gray;\">{{comment.points}} points</md-chip>\r\n        <span class=\"spacer\"></span>\r\n        <div class=\"hide\" *ngIf=\"user && (user.twitchId == comment.user.twitchId || user.role == 'admin')\">\r\n          <md-chip style=\"background-color:#ffffff; color:black;  cursor: pointer;\" mdTooltip=\"Edit post\" [mdTooltipPosition]=\"'below'\" (click)=\"isEditing(comment)\" color=\"accent\" selected=\"true\">\r\n            <fa [name]=\"'pencil'\" [size]=1></fa>\r\n          </md-chip>\r\n          <md-chip style=\"background-color:#ffffff; color:black;  cursor: pointer;\" mdTooltip=\"Remove post\" [mdTooltipPosition]=\"'below'\" (click)=\"remove(comment)\" color=\"accent\" selected=\"true\">\r\n            <fa [name]=\"'trash'\" [size]=1></fa>\r\n          </md-chip>\r\n          <!-- <md-chip *ngIf=\"user.role == 'admin'\" mdTooltip=\"Ban user\" [mdTooltipPosition]=\"'below'\" (click)=\"console.log('banned')\" color=\"accent\" selected=\"true\">\r\n            <fa [name]=\"'ban'\" [size]=1></fa>\r\n          </md-chip> -->\r\n        </div>\r\n      </md-chip-list>\r\n      <p>{{comment.message}}</p>\r\n    </div>\r\n    <ng-template #modify>\r\n      <form #editForm=\"ngForm\" novalidate (ngSubmit)=\"editForm.valid && update(comment)\">\r\n        <md-input-container [hideRequiredMarker]=\"true\" style=\"width:100%\">\r\n          <textarea rows=3 mdInput required minlength=\"5\" style=\"resize: vertical;\" #message=\"ngModel\" name=\"message\" [(ngModel)]=\"comment.message\" placeholder=\"Your comment\">{{comment.message}}</textarea>\r\n        </md-input-container>\r\n        <div style=\"color:red;font-size:12px;\" *ngIf=\"message.errors && (message.dirty || message.touched)\">\r\n          <p [hidden]=\"!message.errors.minlength\">\r\n            Message must be at least 5 characters long.\r\n          </p>\r\n        </div>\r\n        <button type=\"submit\" color=\"primary\" [disabled]=\"!editForm.valid\" md-raised-button>Save</button>\r\n        <button (click)=\"isEditing(comment)\" color=\"primary\" md-raised-button>Cancel</button>\r\n      </form>\r\n    </ng-template>\r\n  </div>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ 324:
/***/ (function(module, exports) {

module.exports = "<div class=\"clipbox\">\r\n  <h3>Now trending</h3>\r\n  <fa *ngIf=\"!dayLoaded\" [name]=\"'refresh'\" style=\"animation: fa-spin 1s infinite linear; margin:0 auto;\" [size]=2 [spin]=true aria-hidden=\"true\"></fa>\r\n  <div *ngFor=\"let clip of dayTop\" class=\"clip\">\r\n    <a [routerLink]=\"['/clip', clip.slug]\"><img src=\"{{clip.thumbnail}}\"></a>\r\n    <span class=\"title\" title=\"{{clip.title}}\"><a [routerLink]=\"['/clip', clip.slug]\">{{clip.title}}</a></span>\r\n    <div class=\"details\">\r\n      <span>{{clip.views}} views</span>\r\n      <span>on {{clip.streamer}}</span>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"clipbox\">\r\n  <h3>Week's top</h3>\r\n  <fa *ngIf=\"!weekLoaded\" [name]=\"'refresh'\" style=\"animation: fa-spin 1s infinite linear; margin:0 auto;\" [size]=2 [spin]=true aria-hidden=\"true\"></fa>\r\n  <div *ngFor=\"let clip of weekTop\" class=\"clip\">\r\n    <a [routerLink]=\"['/clip', clip.slug]\"><img src=\"{{clip.thumbnail}}\"></a>\r\n    <span class=\"title\" title=\"{{clip.title}}\"><a [routerLink]=\"['/clip', clip.slug]\">{{clip.title}}</a></span>\r\n    <div class=\"details\">\r\n      <span>{{clip.views}} views</span>\r\n      <span>on {{clip.streamer}}</span>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"clipbox\">\r\n  <h3>Month's top</h3>\r\n  <fa *ngIf=\"!monthLoaded\" [name]=\"'refresh'\" style=\"animation: fa-spin 1s infinite linear; margin:0 auto;\" [size]=2 [spin]=true aria-hidden=\"true\"></fa>\r\n  <div *ngFor=\"let clip of monthTop\" class=\"clip\">\r\n    <a [routerLink]=\"['/clip', clip.slug]\"><img src=\"{{clip.thumbnail}}\"></a>\r\n    <span class=\"title\" title=\"{{clip.title}}\"><a [routerLink]=\"['/clip', clip.slug]\">{{clip.title}}</a></span>\r\n    <div class=\"details\">\r\n      <span>{{clip.views}} views</span>\r\n      <span>on {{clip.streamer}}</span>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 325:
/***/ (function(module, exports) {

module.exports = "<h3>Results for: {{query}}</h3>\r\n<md-tab-group>\r\n  <md-tab label=\"Channel\">\r\n    <div class=\"clipbox\">\r\n      <div *ngFor=\"let clip of channelTop\" class=\"clip\">\r\n        <a [routerLink]=\"['/clip', clip.slug]\"><img src=\"{{clip.thumbnail}}\"></a>\r\n        <span class=\"title\" title=\"{{clip.title}}\"><a [routerLink]=\"['/clip', clip.slug]\">{{clip.title}}</a></span>\r\n        <div class=\"details\">\r\n          <span>{{clip.views}} views</span>\r\n          <span>on {{clip.streamer}}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </md-tab>\r\n  <md-tab label=\"Game\">\r\n    <div class=\"clipbox\">\r\n      <div *ngFor=\"let clip of gameTop\" class=\"clip\">\r\n        <a [routerLink]=\"['/clip', clip.slug]\"><img src=\"{{clip.thumbnail}}\"></a>\r\n        <span class=\"title\" title=\"{{clip.title}}\"><a [routerLink]=\"['/clip', clip.slug]\">{{clip.title}}</a></span>\r\n        <div class=\"details\">\r\n          <span>{{clip.views}} views</span>\r\n          <span>on {{clip.streamer}}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </md-tab>\r\n</md-tab-group>\r\n"

/***/ }),

/***/ 326:
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"primary\">\r\n  <a class=\"logo\" [routerLink]=\"['/']\">twitchclips.io</a><md-icon style=\"color:yellow;\">trending_up</md-icon>\r\n  <span class=\"spacer\"></span>\r\n  <!--User login/register START (style=\"background: #17201F;\")-->\r\n  <div *ngIf=\"!user\">\r\n      <button (click)=\"login()\" md-button><fa [name]=\"'twitch'\" [size]=1></fa> LOGIN</button>\r\n  </div>\r\n  <div *ngIf=\"user\">\r\n    <button md-button [mdMenuTriggerFor]=\"appMenu\">\r\n      Logged as <span style=\"color:white;\">{{user.username}}</span>\r\n    </button>\r\n    <md-menu #appMenu=\"mdMenu\">\r\n      <button (click)=\"logout()\" md-menu-item>Logout</button>\r\n    </md-menu>\r\n  </div>\r\n  <!--User login/register END-->\r\n</md-toolbar>\r\n<form #query=\"ngForm\">\r\n  <input ngModel name=\"input\" class=\"search\" placeholder=\"Enter streamer's or game's name to search for...\">\r\n  <button type=\"submit\" [routerLink]=\"['/search', query.value.input]\" style=\"visibility: hidden;\"></button>\r\n</form>\r\n"

/***/ }),

/***/ 383:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(231);


/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Clip; });
var Clip = (function () {
    function Clip() {
    }
    return Clip;
}());

//# sourceMappingURL=clip.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.getUser = function () {
        return this.http.get('api/user', { withCredentials: true }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.login = function () {
        return window.location.href = 'api/auth/twitch';
    };
    AuthService.prototype.logout = function () {
        return this.http.get('api/logout', { withCredentials: true }).map(function (res) { return res.json(); });
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommentsService = (function () {
    function CommentsService(http) {
        this.http = http;
    }
    //Gets comments by defined clip slug
    CommentsService.prototype.getComments = function (slug) {
        return this.http.get('api/comments/' + slug, { withCredentials: true }).map(function (res) { return res.json(); });
    };
    //POST submits comment
    CommentsService.prototype.create = function (comment) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        return this.http.post('api/comments/', { comment: comment }, { headers: headers, withCredentials: true }).map(function (res) { return res.json(); });
    };
    //POST vote comment
    CommentsService.prototype.vote = function (comment, action) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        return this.http.post('api/comments/vote/' + action, { comment: comment }, { headers: headers, withCredentials: true }).map(function (res) { return res.json(); });
    };
    //POST removes comment from the DB
    CommentsService.prototype.remove = function (comment) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        return this.http.post('api/comments/remove', { comment: comment }, { headers: headers, withCredentials: true }).map(function (res) { return res.json(); });
    };
    //PUT updates existing comment
    CommentsService.prototype.update = function (comment) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        return this.http.put('api/comments/', { comment: comment }, { headers: headers, withCredentials: true }).map(function (res) { return res.json(); });
    };
    return CommentsService;
}());
CommentsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], CommentsService);

var _a;
//# sourceMappingURL=comments.service.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersService = (function () {
    function UsersService(http) {
        this.http = http;
    }
    return UsersService;
}());
UsersService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], UsersService);

var _a;
//# sourceMappingURL=users.service.js.map

/***/ })

},[383]);
//# sourceMappingURL=main.bundle.js.map