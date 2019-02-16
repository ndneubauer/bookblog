(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _review_full_review_full_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./review-full/review-full.component */ "./src/app/review-full/review-full.component.ts");
/* harmony import */ var _review_list_review_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./review-list/review-list.component */ "./src/app/review-list/review-list.component.ts");





var routes = [
    { path: 'review/:id', component: _review_full_review_full_component__WEBPACK_IMPORTED_MODULE_3__["ReviewFullComponent"] },
    { path: '', component: _review_list_review_list_component__WEBPACK_IMPORTED_MODULE_4__["ReviewListComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _modules_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/material.module */ "./src/app/modules/material.module.ts");
/* harmony import */ var _review_full_review_full_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./review-full/review-full.component */ "./src/app/review-full/review-full.component.ts");
/* harmony import */ var _review_list_review_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./review-list/review-list.component */ "./src/app/review-list/review-list.component.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _review_full_review_full_component__WEBPACK_IMPORTED_MODULE_6__["ReviewFullComponent"],
                _review_list_review_list_component__WEBPACK_IMPORTED_MODULE_7__["ReviewListComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _modules_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/models/review.ts":
/*!**********************************!*\
  !*** ./src/app/models/review.ts ***!
  \**********************************/
/*! exports provided: Review */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Review", function() { return Review; });
var Review = /** @class */ (function () {
    function Review(ReviewId, BookTitle, BookAuthor, ReviewAuthor, ReviewDate, ImageUrl, Summary) {
        this.ReviewId = ReviewId;
        this.BookTitle = BookTitle;
        this.BookAuthor = BookAuthor;
        this.ReviewAuthor = ReviewAuthor;
        this.ReviewDate = ReviewDate;
        this.ImageUrl = ImageUrl;
        this.Summary = Summary;
    }
    return Review;
}());



/***/ }),

/***/ "./src/app/modules/material.module.ts":
/*!********************************************!*\
  !*** ./src/app/modules/material.module.ts ***!
  \********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"]
            ],
            exports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/review-full/review-full.component.html":
/*!********************************************************!*\
  !*** ./src/app/review-full/review-full.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  review-full works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/review-full/review-full.component.less":
/*!********************************************************!*\
  !*** ./src/app/review-full/review-full.component.less ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jldmlldy1mdWxsL3Jldmlldy1mdWxsLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/review-full/review-full.component.ts":
/*!******************************************************!*\
  !*** ./src/app/review-full/review-full.component.ts ***!
  \******************************************************/
/*! exports provided: ReviewFullComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewFullComponent", function() { return ReviewFullComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ReviewFullComponent = /** @class */ (function () {
    function ReviewFullComponent() {
    }
    ReviewFullComponent.prototype.ngOnInit = function () {
    };
    ReviewFullComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-review-full',
            template: __webpack_require__(/*! ./review-full.component.html */ "./src/app/review-full/review-full.component.html"),
            styles: [__webpack_require__(/*! ./review-full.component.less */ "./src/app/review-full/review-full.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ReviewFullComponent);
    return ReviewFullComponent;
}());



/***/ }),

/***/ "./src/app/review-list/review-list.component.html":
/*!********************************************************!*\
  !*** ./src/app/review-list/review-list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let review of reviews\">\r\n    <div style=\"padding: 20px; border: 1px solid gray; margin-bottom: 10px;\">\r\n        <h1><a routerLink=\"/review/{{review.ReviewId}}\">{{review.BookTitle}}</a><span> by {{review.BookAuthor}}</span></h1>\r\n        <div style=\"display: flex;\">\r\n            <p style=\"flex: 1; font-size: 1.2rem;\">{{review.Summary}}</p>\r\n            <img src={{review.ImageUrl}} alt=\"Image for {{review.BookTitle}}\" style=\"flex-basis: 100px;\">\r\n        </div>\r\n        <div style=\"display: flex;\">\r\n            <div style=\"flex: 1;\">\r\n                <a routerLink=\"/review/{{review.ReviewId}}\" mat-flat-button color=\"primary\">read the review</a>\r\n            </div>\r\n            <div style=\"flex: 1; line-height: 36px;\">\r\n                review written by {{review.ReviewAuthor}} on {{review.ReviewDate}}\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/review-list/review-list.component.less":
/*!********************************************************!*\
  !*** ./src/app/review-list/review-list.component.less ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jldmlldy1saXN0L3Jldmlldy1saXN0LmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/review-list/review-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/review-list/review-list.component.ts ***!
  \******************************************************/
/*! exports provided: ReviewListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewListComponent", function() { return ReviewListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_review__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/review */ "./src/app/models/review.ts");



var ReviewListComponent = /** @class */ (function () {
    function ReviewListComponent() {
    }
    ReviewListComponent.prototype.ngOnInit = function () {
        this.reviews = [
            new _models_review__WEBPACK_IMPORTED_MODULE_2__["Review"](1, 'Golden State', 'Ben Winters', 'Matt Buscemi', 'Friday 15th February 2019', 'https://img2.sfbook.com/books/small/golden-state.jpg', 'In the wake of the 2016 US presidential election, a meme boiled up to the surface of our cultural dialogue about us having entered an age of “post-truth.” As the election showed us, we have arrived into a societal configuration, in which two major ideological groups do not just vote for different parties, but also interpret the world in completely different ways. Hence, the term “post-truth.” On the surface, it seems to members of one side that the other is ignoring &l...'),
            new _models_review__WEBPACK_IMPORTED_MODULE_2__["Review"](2, 'Star Trek Prometheus: In the Heart of Chaos', 'Bernd Perplies', 'Sam Tyler', 'Thursday 14th February 2019', 'https://img2.sfbook.com/books/small/star-trek-prometheus:-in-the-heart-of-chaos.jpg', 'The original USS Enterprise was sent out on a five year mission to explore Space, but even the biggest Star Trek fan would not want to know about every single detail that happened on the voyage. We can forgo the times that they slept or went to the loo. Perhaps even skip a few lengthy sessions between colleagues spouting technobabble. The Star Trek Prometheus trilogy feels differently and sometimes put every extraneous detail was on the page, but now book three is in sight, things are startin...'),
            new _models_review__WEBPACK_IMPORTED_MODULE_2__["Review"](3, 'City of the Iron Fish', 'Simon Ings', 'Matt Buscemi', 'Monday 11th February 2019', 'https://img2.sfbook.com/books/small/city-of-the-iron-fish.jpg', 'By the end of the eighteenth century, our world had become fully charted, catalogued, mapped and explored. No longer could it be imagined that beyond some distant horizon there lay a land of extraordinary wonders—a hidden utopia, for example, nestled away somewhere safe from the corrupting influence of our imperfect, real-world societies. Or perhaps a fountain whose waters granted perpetual youth. Science fiction, of course, finds ways around this, the most obvious tropes being ...')
        ];
    };
    ReviewListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-review-list',
            template: __webpack_require__(/*! ./review-list.component.html */ "./src/app/review-list/review-list.component.html"),
            styles: [__webpack_require__(/*! ./review-list.component.less */ "./src/app/review-list/review-list.component.less")]
        })
    ], ReviewListComponent);
    return ReviewListComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\projects\bookblog\bookblog\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map