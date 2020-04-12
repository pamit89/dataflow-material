function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <div class=\"container-fluid\">\r\n\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <app-header></app-header>\r\n    </div>\r\n  </div>\r\n  <hr />\r\n  <div class=\"row\">\r\n    <div class=\"col-md-2 navbarTap\">\r\n      <app-menu></app-menu>\r\n    </div>\r\n    <div class=\"col-md-10\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</div> -->\r\n\r\n<mat-toolbar color=\"primary\">\r\n  <app-header></app-header>\r\n</mat-toolbar>\r\n\r\n<mat-drawer-container class=\"container\">\r\n  <mat-drawer mode=\"side\" opened class=\"sidebar\">\r\n    <app-menu></app-menu>\r\n  </mat-drawer>\r\n  <mat-drawer-content>\r\n    <router-outlet></router-outlet>\r\n  </mat-drawer-content>\r\n</mat-drawer-container>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/backlog-form/backlog-form.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/backlog-form/backlog-form.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBacklogFormBacklogFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"backlogForm\">\r\n    <div class=\"backlog\">\r\n        <div class=\"form-group row\">\r\n            <label for=\"classname\" class=\"col-md-3 col-form-label\">class_name</label>\r\n            <div class=\"col-md-9\">\r\n                <input type=\"text\" class=\"form-control\" id=\"classname\" formControlName=\"classname\">\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n            <label for=\"marketplace\" class=\"col-md-3 col-form-label\">marketplace</label>\r\n            <div class=\"col-md-9\">\r\n                <input type=\"text\" class=\"form-control\" id=\"marketplace\" formControlName=\"marketplace\">\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n            <label for=\"reviewstatus\" class=\"col-md-3 col-form-label\">review_status</label>\r\n            <div class=\"col-md-9\">\r\n                <input type=\"text\" class=\"form-control\" id=\"reviewstatus\" formControlName=\"reviewstatus\">\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n            <label for=\"asincatchdate\" class=\"col-md-3 col-form-label\">asin_catch_date</label>\r\n            <div class=\"col-md-9\">\r\n                <input type=\"text\" class=\"form-control\" id=\"asincatchdate\" formControlName=\"asincatchdate\">\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n            <label for=\"prioritycreatedate\" class=\"col-md-3 col-form-label\">priority_create_date</label>\r\n            <div class=\"col-md-9\">\r\n                <input type=\"text\" class=\"form-control\" id=\"prioritycreatedate\" formControlName=\"prioritycreatedate\">\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n            <label for=\"workingstatus\" class=\"col-md-3 col-form-label\">working_status</label>\r\n            <div class=\"col-md-9\">\r\n                <input type=\"text\" class=\"form-control\" id=\"workingstatus\" formControlName=\"workingstatus\">\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n            <label for=\"asinreviewdate\" class=\"col-md-3 col-form-label\">asin_review_date</label>\r\n            <div class=\"col-md-9\">\r\n                <input type=\"text\" class=\"form-control\" id=\"asinreviewdate\" formControlName=\"asinreviewdate\">\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n            <label for=\"productcategory\" class=\"col-md-3 col-form-label\">product_category</label>\r\n            <div class=\"col-md-9\">\r\n                <input type=\"text\" class=\"form-control\" id=\"productcategory\" formControlName=\"productcategory\">\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n            <label for=\"enforcementriskscore\" class=\"col-md-3 col-form-label\">enforcement_risk_score</label>\r\n            <div class=\"col-md-9\">\r\n                <input type=\"text\" class=\"form-control\" id=\"enforcementriskscore\"\r\n                    formControlName=\"enforcementriskscore\">\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n            <label for=\"csbriskscore\" class=\"col-md-3 col-form-label\">e csb_risk_score</label>\r\n            <div class=\"col-md-9\">\r\n                <input type=\"text\" class=\"form-control\" id=\"csbriskscore\" formControlName=\"csbriskscore\">\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n            <label for=\"policyversionid\" class=\"col-md-3 col-form-label\">policy_version_id</label>\r\n            <div class=\"col-md-9\">\r\n                <input type=\"text\" class=\"form-control\" id=\"policyversionid\" formControlName=\"policyversionid\">\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n            <div class=\"col-md-12\">\r\n                <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <div class=\"icon\">\r\n    <img src=\"https://image.flaticon.com/icons/svg/752/752006.svg\" />\r\n</div> -->\r\n<div>\r\n    <img src=\"https://image.flaticon.com/icons/svg/752/752006.svg\" style=\"\r\n    width: 45px;\r\n    height: 45px;\">\r\n    <span class=\"brand\">TAP - 2.0</span>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/inflow-form/inflow-form.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inflow-form/inflow-form.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppInflowFormInflowFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"inflowForm\">\r\n    <div class=\"inflow\">\r\n    <mat-form-field class=\"example-half-width\">\r\n        <mat-label>Choose from date</mat-label>\r\n        <input matInput [matDatepicker]=\"picker\" id=\"asincatchdatefrom\" formControlName=\"asincatchdatefrom\">\r\n        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n        <mat-datepicker #picker></mat-datepicker>   \r\n    </mat-form-field>\r\n    <mat-form-field class=\"example-half-width\">\r\n        <mat-label>Choose to date</mat-label>\r\n        <input matInput [matDatepicker]=\"picker2\" id=\"asincatchdateto\" formControlName=\"asincatchdateto\">\r\n        <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n        <mat-datepicker #picker2></mat-datepicker>   \r\n    </mat-form-field>\r\n    <mat-form-field class=\"example-full-width\">            \r\n        <!-- <input type=\"text\" matInput [elm]=10 id=\"enforcementriskscore\" placeholder=\"Enforcement Risk Score\"\r\n            formControlName=\"enforcementriskscore\" [matAutocomplete]=\"auto\"> -->\r\n            <mat-label>Enforcement Risk Score</mat-label>\r\n        <mat-select formControlName=\"enforcementriskscore\">\r\n            <mat-option *ngFor=\"let option of ers\" [value]=\"option\">\r\n                {{option}}\r\n            </mat-option>                \r\n        </mat-select>\r\n    </mat-form-field>\r\n    <mat-form-field class=\"example-full-width\">     \r\n        <!-- <input type=\"text\" matInput [elm]=11  id=\"csbriskscore\" placeholder=\"Csb Risk Score\" formControlName=\"csbriskscore\"> -->\r\n        <mat-label>Csb Risk Score</mat-label>\r\n        <mat-select formControlName=\"csbriskscore\">\r\n            <mat-option *ngFor=\"let option of crs\" [value]=\"option\">\r\n                {{option}}\r\n            </mat-option>                \r\n        </mat-select>\r\n    </mat-form-field>\r\n    <mat-form-field class=\"example-full-width\">            \r\n        <input type=\"text\" matInput [elm]=13 id=\"marketplace\" placeholder=\"MP\" formControlName=\"marketplace\" [matAutocomplete]=\"auto\">\r\n        <mat-autocomplete #auto=\"matAutocomplete\">\r\n            <mat-option *ngFor=\"let option of filteredOptionsMP | async\" [value]=\"option\">\r\n                {{option}}\r\n            </mat-option>\r\n        </mat-autocomplete>\r\n    </mat-form-field>\r\n    <mat-form-field class=\"example-full-width\">\r\n        <input type=\"text\" matInput [elm]=14 id=\"node\" placeholder=\"Node\" formControlName=\"node\" [matAutocomplete]=\"auto\">\r\n        <mat-autocomplete #auto=\"matAutocomplete\">\r\n            <mat-option *ngFor=\"let option of filteredOptionsNode | async\" [value]=\"option\">\r\n                {{option}}\r\n            </mat-option>\r\n        </mat-autocomplete>\r\n    </mat-form-field>    \r\n        \r\n        <mat-form-field class=\"example-full-width\">\r\n            <input matInput type=\"text\" [elm]=2 placeholder=\"Week\" id=\"inflowyw\" aria-label=\"Number\"\r\n                formControlName=\"inflowyw\" [matAutocomplete]=\"auto\">\r\n            <mat-autocomplete #auto=\"matAutocomplete\">\r\n                <mat-option *ngFor=\"let option of appService.filteredOptions | async\" [value]=\"option\">\r\n                    {{option}}\r\n                </mat-option>\r\n            </mat-autocomplete>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"example-full-width\">            \r\n                <input type=\"text\" matInput [elm]=3 id=\"inflowym\" placeholder=\"Month\" aria-label=\"Number\" \r\n                formControlName=\"inflowym\" [matAutocomplete]=\"auto\">\r\n                <mat-autocomplete #auto=\"matAutocomplete\">\r\n                    <mat-option *ngFor=\"let option of appService.filteredOptions | async\" [value]=\"option\">\r\n                        {{option}}\r\n                    </mat-option>\r\n                </mat-autocomplete>\r\n        </mat-form-field>        \r\n        <mat-form-field class=\"example-full-width\">                        \r\n                <input type=\"text\" matInput [elm]=6 id=\"Class\" placeholder=\"Class\" \r\n                formControlName=\"Class\" aria-label=\"Number\" >                            \r\n        </mat-form-field>        \r\n        <mat-form-field class=\"example-full-width\">            \r\n                <input type=\"text\" matInput [elm]=5 id=\"workingstatus\" placeholder=\"Working Status\" \r\n                formControlName=\"workingstatus\" [matAutocomplete]=\"auto\" aria-label=\"Number\">\r\n                <mat-autocomplete #auto=\"matAutocomplete\">\r\n                    <mat-option *ngFor=\"let option of appService.filteredOptions | async\" [value]=\"option\">\r\n                        {{option}}\r\n                    </mat-option>\r\n                </mat-autocomplete>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"example-full-width\">          \r\n                <mat-label>Priority</mat-label>\r\n                <mat-select formControlName=\"asinreviewpriority\">\r\n                    <mat-option *ngFor=\"let option of asinreviewpriority\" [value]=\"option\">\r\n                        {{option}}\r\n                    </mat-option>\r\n                </mat-select>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"example-full-width\">\r\n            <input type=\"text\" matInput [elm]=8 id=\"productcategory\" placeholder=\"Category\" \r\n            formControlName=\"productcategory\" [matAutocomplete]=\"auto\">\r\n            <mat-autocomplete #auto=\"matAutocomplete\">\r\n                <mat-option *ngFor=\"let option of appService.filteredOptions | async\" [value]=\"option\">\r\n                    {{option}}\r\n                </mat-option>\r\n            </mat-autocomplete>\r\n        </mat-form-field>        \r\n        <mat-form-field class=\"example-full-width\">\r\n            <input type=\"text\" matInput [elm]=9  id=\"policytype\" placeholder=\"Policy Type\" \r\n            formControlName=\"policytype\" [matAutocomplete]=\"auto\">\r\n            <mat-autocomplete #auto=\"matAutocomplete\">\r\n                <mat-option *ngFor=\"let option of appService.filteredOptions | async\" [value]=\"option\">\r\n                    {{option}}\r\n                </mat-option>\r\n            </mat-autocomplete>            \r\n        </mat-form-field>\r\n        \r\n        <mat-form-field class=\"example-full-width\">\r\n            <input type=\"text\" matInput [elm]=12 id=\"policyentityid\" placeholder=\"Policy Entity Id\" \r\n            formControlName=\"policyentityid\" [matAutocomplete]=\"auto\">\r\n            <mat-autocomplete #auto=\"matAutocomplete\">\r\n                <mat-option *ngFor=\"let option of appService.filteredOptions | async\" [value]=\"option\">\r\n                    {{option}}\r\n                </mat-option>\r\n            </mat-autocomplete>            \r\n        </mat-form-field>        \r\n        <div class=\"form-group row\">\r\n            <div class=\"col-md-12\">\r\n                <button mat-raised-button type=\"submit\" color=\"primary\">Submit</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMenuMenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-list role=\"list\">\r\n    <mat-list-item role=\"listitem\" routerLinkActive=\"active\" highlight [routerLink]=\"['/inflow']\">Inflow</mat-list-item>\r\n    <mat-list-item role=\"listitem\" routerLinkActive=\"active\" highlight [routerLink]=\"['/outflow']\">Outflow\r\n    </mat-list-item>\r\n    <mat-list-item role=\"listitem\" routerLinkActive=\"active\" highlight [routerLink]=\"['/backlog']\">Backlog\r\n    </mat-list-item>\r\n</mat-list>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/outflow-form/outflow-form.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/outflow-form/outflow-form.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOutflowFormOutflowFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"outflowForm\">\r\n    <div class=\"outflow\">\r\n        <mat-form-field class=\"example-full-width\">\r\n            <input type=\"text\" matInput [elm]=6 placeholder=\"Class\" id=\"class\" \r\n            formControlName=\"class\">           \r\n        </mat-form-field>\r\n        <mat-form-field class=\"example-full-width\">\r\n            <mat-label>Priority</mat-label>\r\n            <mat-select formControlName=\"asin_priority\" id=\"asin_priority\" multiple>\r\n                <mat-option *ngFor=\"let option of asinpriority\" [value]=\"option\">\r\n                    {{option}}\r\n                </mat-option>\r\n            </mat-select>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"example-full-width\">\r\n            <input type=\"text\" matInput [elm]=8 placeholder=\"Category\" id=\"product_category\" \r\n            formControlName=\"product_category\" [matAutocomplete]=\"auto\">\r\n            <mat-autocomplete #auto=\"matAutocomplete\">\r\n                <mat-option *ngFor=\"let option of filteredOptionsOutflow | async\" [value]=\"option\">\r\n                    {{option}}\r\n                </mat-option>\r\n            </mat-autocomplete>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"example-full-width\">            \r\n            <!-- <input type=\"text\" matInput [elm]=10 id=\"enforcementriskscore\" placeholder=\"Enforcement Risk Score\"\r\n                formControlName=\"enforcementriskscore\" [matAutocomplete]=\"auto\"> -->\r\n                <mat-label>Enforcement Risk Score</mat-label>\r\n            <mat-select formControlName=\"enforcement_risk_score\" id=enforcement_risk_score multiple>\r\n                <mat-option *ngFor=\"let option of ers\" [value]=\"option\">\r\n                    {{option}}\r\n                </mat-option>                \r\n            </mat-select>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"example-full-width\">     \r\n            <!-- <input type=\"text\" matInput [elm]=11  id=\"csbriskscore\" placeholder=\"Csb Risk Score\" formControlName=\"csbriskscore\"> -->\r\n            <mat-label>Csb Risk Score</mat-label>\r\n            <mat-select formControlName=\"csb_risk_score\" id=\"csb_risk_score\" multiple>\r\n                <mat-option *ngFor=\"let option of crs\" [value]=\"option\">\r\n                    {{option}}\r\n                </mat-option>                \r\n            </mat-select>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"example-full-width\">\r\n            <input type=\"text\" matInput [elm]=16 placeholder=\"Audit Label\" id=\"audittype\" \r\n            formControlName=\"audittype\" [matAutocomplete]=\"auto\">\r\n            <mat-autocomplete #auto=\"matAutocomplete\">\r\n                <mat-option *ngFor=\"let option of filteredOptionsOutflow | async\" [value]=\"option\">\r\n                    {{option}}\r\n                </mat-option>\r\n            </mat-autocomplete>            \r\n        </mat-form-field>\r\n        <mat-form-field class=\"example-full-width\">            \r\n            <input type=\"text\" matInput [elm]=17 id=\"decision\" placeholder=\"Decision\" \r\n            formControlName=\"decision\" [matAutocomplete]=\"auto\">\r\n            <mat-autocomplete #auto=\"matAutocomplete\">\r\n                <mat-option *ngFor=\"let option of filteredOptionsOutflow | async\" [value]=\"option\">\r\n                    {{option}}\r\n                </mat-option>\r\n            </mat-autocomplete>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"example-full-width\">            \r\n            <input type=\"text\" matInput [elm]=18 id=\"asin_auditor\" placeholder=\"Reviewer\" \r\n            formControlName=\"asin_auditor\" [matAutocomplete]=\"auto\">\r\n            <mat-autocomplete #auto=\"matAutocomplete\">\r\n                <mat-option *ngFor=\"let option of filteredOptionsOutflow | async\" [value]=\"option\">\r\n                    {{option}}\r\n                </mat-option>\r\n            </mat-autocomplete>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"example-full-width\">\r\n            <input type=\"text\" matInput [elm]=19 id=\"manager_id\" placeholder=\"Manager\" \r\n            formControlName=\"manager_id\" [matAutocomplete]=\"auto\">\r\n            <mat-autocomplete #auto=\"matAutocomplete\">\r\n                <mat-option *ngFor=\"let option of filteredOptionsOutflow | async\" [value]=\"option\">\r\n                    {{option}}\r\n                </mat-option>\r\n            </mat-autocomplete>        \r\n        </mat-form-field>\r\n        <mat-form-field class=\"example-full-width\">            \r\n            <mat-label>Choose review day</mat-label>\r\n            <input type=\"text\" matInput [matDatepicker]=\"picker\" id=\"reviewday\" \r\n            formControlName=\"reviewday\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n            <mat-datepicker #picker></mat-datepicker>               \r\n        </mat-form-field>\r\n        <mat-form-field class=\"example-full-width\">\r\n            <input type=\"text\" matInput [elm]=21 id=\"reviewweek\" placeholder=\"Week\" \r\n            formControlName=\"reviewweek\" [matAutocomplete]=\"auto\">\r\n            <mat-autocomplete #auto=\"matAutocomplete\">\r\n                <mat-option *ngFor=\"let option of filteredOptionsOutflow | async\" [value]=\"option\">\r\n                    {{option}}\r\n                </mat-option>\r\n            </mat-autocomplete>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"example-full-width\">\r\n            <input type=\"text\" matInput [elm]=22 id=\"reviewmonth\" placeholder=\"Month\" \r\n            formControlName=\"reviewmonth\" [matAutocomplete]=\"auto\">\r\n            <mat-autocomplete #auto=\"matAutocomplete\">\r\n                <mat-option *ngFor=\"let option of filteredOptionsOutflow | async\" [value]=\"option\">\r\n                    {{option}}\r\n                </mat-option>\r\n            </mat-autocomplete>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"example-full-width\">\r\n            <input type=\"text\" matInput [elm]=24 id=\"bulktype\" placeholder=\"Bulk Type\" \r\n            formControlName=\"bulktype\" [matAutocomplete]=\"auto\">\r\n            <mat-autocomplete #auto=\"matAutocomplete\">\r\n                <mat-option *ngFor=\"let option of filteredOptionsOutflow | async\" [value]=\"option\">\r\n                    {{option}}\r\n                </mat-option>\r\n            </mat-autocomplete>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"example-full-width\">\r\n            <input type=\"text\" matInput [elm]=23 id=\"outflowtype\" placeholder=\"Outflow Type\" \r\n            formControlName=\"outflowtype\" [matAutocomplete]=\"auto\">\r\n            <mat-autocomplete #auto=\"matAutocomplete\">\r\n                <mat-option *ngFor=\"let option of filteredOptionsOutflow | async\" [value]=\"option\">\r\n                    {{option}}\r\n                </mat-option>\r\n            </mat-autocomplete>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"example-full-width\">\r\n            <input type=\"text\" matInput [elm]=13 id=\"marketplace\" placeholder=\"MP\"\r\n                formControlName=\"marketplace\" [matAutocomplete]=\"auto\">\r\n            <mat-autocomplete #auto=\"matAutocomplete\">\r\n                <mat-option *ngFor=\"let option of filteredOptionsOutflow | async\" [value]=\"option\">\r\n                    {{option}}\r\n                </mat-option>\r\n            </mat-autocomplete>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"example-full-width\">\r\n            <input type=\"text\" matInput [elm]=26 id=\"neiflag\" placeholder=\"Nei Flag\" \r\n            formControlName=\"neiflag\" [matAutocomplete]=\"auto\">\r\n            <mat-autocomplete #auto=\"matAutocomplete\">\r\n                <mat-option *ngFor=\"let option of filteredOptionsOutflow | async\" [value]=\"option\">\r\n                    {{option}}\r\n                </mat-option>\r\n            </mat-autocomplete>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"example-full-width\">\r\n            <input type=\"text\" matInput [elm]=14 id=\"node\" placeholder=\"Node\"\r\n                formControlName=\"node\" [matAutocomplete]=\"auto\">\r\n            <mat-autocomplete #auto=\"matAutocomplete\">\r\n                <mat-option *ngFor=\"let option of filteredOptionsOutflow | async\" [value]=\"option\">\r\n                    {{option}}\r\n                </mat-option>\r\n            </mat-autocomplete>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"example-full-width\">\r\n            <input type=\"text\" matInput [elm]=25 id=\"org\" placeholder=\"Org\" \r\n            formControlName=\"org\" [matAutocomplete]=\"auto\">\r\n            <mat-autocomplete #auto=\"matAutocomplete\">\r\n                <mat-option *ngFor=\"let option of filteredOptionsOutflow | async\" [value]=\"option\">\r\n                    {{option}}\r\n                </mat-option>\r\n            </mat-autocomplete>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"example-full-width\">\r\n            <input type=\"text\" matInput [elm]=27 id=\"sla\" placeholder=\"SLA\" \r\n            formControlName=\"sla\" [matAutocomplete]=\"auto\">\r\n            <mat-autocomplete #auto=\"matAutocomplete\">\r\n                <mat-option *ngFor=\"let option of filteredOptionsOutflow | async\" [value]=\"option\">\r\n                    {{option}}\r\n                </mat-option>\r\n            </mat-autocomplete>\r\n        </mat-form-field>\r\n        <div class=\"form-group row\">\r\n            <div class=\"col-md-12\">\r\n                <button mat-raised-button type=\"submit\" color=\"primary\">Submit</button>\r\n            </div>\r\n        </div>\r\n</div>\r\n</form>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _inflow_form_inflow_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./inflow-form/inflow-form.component */
    "./src/app/inflow-form/inflow-form.component.ts");
    /* harmony import */


    var _outflow_form_outflow_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./outflow-form/outflow-form.component */
    "./src/app/outflow-form/outflow-form.component.ts");
    /* harmony import */


    var _backlog_form_backlog_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./backlog-form/backlog-form.component */
    "./src/app/backlog-form/backlog-form.component.ts");

    var routes = [{
      path: 'inflow',
      component: _inflow_form_inflow_form_component__WEBPACK_IMPORTED_MODULE_3__["InflowFormComponent"]
    }, {
      path: 'outflow',
      component: _outflow_form_outflow_form_component__WEBPACK_IMPORTED_MODULE_4__["OutflowFormComponent"]
    }, {
      path: 'backlog',
      component: _backlog_form_backlog_form_component__WEBPACK_IMPORTED_MODULE_5__["BacklogFormComponent"]
    }, {
      path: '**',
      redirectTo: 'inflow'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\n  width: 100%;\n  height: 100vh;\n}\n\n.sidebar {\n  min-width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXHRhcGFuZ3VsYXJfYmFkaVxcZGF0YWZsb3ctbWF0ZXJpYWwvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUNDSjs7QURDQTtFQUNJLGdCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG4uc2lkZWJhcntcclxuICAgIG1pbi13aWR0aDogMjAwcHg7XHJcbn0iLCIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi5zaWRlYmFyIHtcbiAgbWluLXdpZHRoOiAyMDBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'dataflow';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _menu_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./menu/menu.component */
    "./src/app/menu/menu.component.ts");
    /* harmony import */


    var _inflow_form_inflow_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./inflow-form/inflow-form.component */
    "./src/app/inflow-form/inflow-form.component.ts");
    /* harmony import */


    var _outflow_form_outflow_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./outflow-form/outflow-form.component */
    "./src/app/outflow-form/outflow-form.component.ts");
    /* harmony import */


    var _backlog_form_backlog_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./backlog-form/backlog-form.component */
    "./src/app/backlog-form/backlog-form.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _shared_highlight_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./shared/highlight.directive */
    "./src/app/shared/highlight.directive.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/esm2015/toolbar.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/esm2015/sidenav.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/esm2015/list.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/esm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _shared_elm_num_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./shared/elm-num.directive */
    "./src/app/shared/elm-num.directive.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/esm2015/datepicker.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_6__["MenuComponent"], _inflow_form_inflow_form_component__WEBPACK_IMPORTED_MODULE_7__["InflowFormComponent"], _outflow_form_outflow_form_component__WEBPACK_IMPORTED_MODULE_8__["OutflowFormComponent"], _backlog_form_backlog_form_component__WEBPACK_IMPORTED_MODULE_9__["BacklogFormComponent"], _shared_highlight_directive__WEBPACK_IMPORTED_MODULE_11__["HighlightDirective"], _shared_elm_num_directive__WEBPACK_IMPORTED_MODULE_21__["ElmNumDirective"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__["MatSidenavModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__["MatAutocompleteModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatNativeDateModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__["MatDatepickerModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MatSelectModule"]],
      providers: [_angular_common__WEBPACK_IMPORTED_MODULE_25__["DatePipe"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/backlog-form/backlog-form.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/backlog-form/backlog-form.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBacklogFormBacklogFormComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".backlog {\n  border: 1px solid rgba(0, 0, 0, 0.185);\n  padding: 20px;\n  border-radius: 2px;\n}\n\n.backlog .btn.btn-primary {\n  float: right;\n}\n\nlabel {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFja2xvZy1mb3JtL0Q6XFx0YXBhbmd1bGFyX2JhZGlcXGRhdGFmbG93LW1hdGVyaWFsL3NyY1xcYXBwXFxiYWNrbG9nLWZvcm1cXGJhY2tsb2ctZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYmFja2xvZy1mb3JtL2JhY2tsb2ctZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNDQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9iYWNrbG9nLWZvcm0vYmFja2xvZy1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tsb2d7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMTg1KTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbn1cclxuXHJcbi5iYWNrbG9nIC5idG4uYnRuLXByaW1hcnl7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbmxhYmVse1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59IiwiLmJhY2tsb2cge1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTg1KTtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG4uYmFja2xvZyAuYnRuLmJ0bi1wcmltYXJ5IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5sYWJlbCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/backlog-form/backlog-form.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/backlog-form/backlog-form.component.ts ***!
    \********************************************************/

  /*! exports provided: BacklogFormComponent */

  /***/
  function srcAppBacklogFormBacklogFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BacklogFormComponent", function () {
      return BacklogFormComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var BacklogFormComponent = /*#__PURE__*/function () {
      function BacklogFormComponent() {
        _classCallCheck(this, BacklogFormComponent);
      }

      _createClass(BacklogFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.backlogForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            "classname": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            "marketplace": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            "reviewstatus": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            "asincatchdate": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            "prioritycreatedate": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            "workingstatus": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            "asinreviewdate": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            "productcategory": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            "enforcementriskscore": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            "csbriskscore": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            "policyversionid": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          alert(JSON.stringify(this.backlogForm.value));
          console.log(this.backlogForm.value);
        }
      }]);

      return BacklogFormComponent;
    }();

    BacklogFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-backlog-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./backlog-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/backlog-form/backlog-form.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./backlog-form.component.scss */
      "./src/app/backlog-form/backlog-form.component.scss"))["default"]]
    })], BacklogFormComponent);
    /***/
  },

  /***/
  "./src/app/header/header.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/header/header.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".icon {\n  float: left;\n  width: 40px;\n  height: 40px;\n}\n\n.brand {\n  margin-left: 8px !important;\n  height: 100%;\n  vertical-align: top;\n  margin-top: 11px;\n  display: inline-block;\n  font-size: 25px;\n  font-family: cursive;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0Q6XFx0YXBhbmd1bGFyX2JhZGlcXGRhdGFmbG93LW1hdGVyaWFsL3NyY1xcYXBwXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ05KOztBRFFBO0VBQ0ksMkJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FDTEoiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLmhlYWRlcntcclxuLy8gICAgIHBhZGRpbmc6IDE1cHg7XHJcbi8vICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgLy9yZ2IoMjMsIDE2MywgMjEyKTtcclxuLy8gICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbi8vICAgICBjb2xvcjogIzE3YTNkNDtcclxuLy8gfVxyXG5cclxuLmljb257XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcbi5icmFuZHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICBtYXJnaW4tdG9wOiAxMXB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbn0iLCIuaWNvbiB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG4uYnJhbmQge1xuICBtYXJnaW4tbGVmdDogOHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTAwJTtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgbWFyZ2luLXRvcDogMTFweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.scss */
      "./src/app/header/header.component.scss"))["default"]]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/inflow-form/inflow-form.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/inflow-form/inflow-form.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppInflowFormInflowFormComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".inflow {\n  border: 1px solid rgba(0, 0, 0, 0.185);\n  padding: 20px;\n  border-radius: 2px;\n}\n\n.inflow .btn.btn-primary {\n  float: right;\n}\n\nlabel {\n  cursor: pointer;\n}\n\n.example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\n.example-half-width {\n  width: 45%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5mbG93LWZvcm0vRDpcXHRhcGFuZ3VsYXJfYmFkaVxcZGF0YWZsb3ctbWF0ZXJpYWwvc3JjXFxhcHBcXGluZmxvdy1mb3JtXFxpbmZsb3ctZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaW5mbG93LWZvcm0vaW5mbG93LWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQ0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFRTtFQUNFLFdBQUE7QUNDSjs7QURDRTtFQUNJLFVBQUE7QUNFTiIsImZpbGUiOiJzcmMvYXBwL2luZmxvdy1mb3JtL2luZmxvdy1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmluZmxvd3tcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4xODUpO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxufVxyXG5cclxuLmluZmxvdyAuYnRuLmJ0bi1wcmltYXJ5e1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG5sYWJlbHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmV4YW1wbGUtZm9ybSB7XHJcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAuZXhhbXBsZS1oYWxmLXdpZHRoe1xyXG4gICAgICB3aWR0aDogNDUlO1xyXG4gIH0iLCIuaW5mbG93IHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjE4NSk7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxuLmluZmxvdyAuYnRuLmJ0bi1wcmltYXJ5IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5sYWJlbCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmV4YW1wbGUtZm9ybSB7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5leGFtcGxlLWhhbGYtd2lkdGgge1xuICB3aWR0aDogNDUlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/inflow-form/inflow-form.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/inflow-form/inflow-form.component.ts ***!
    \******************************************************/

  /*! exports provided: InflowFormComponent */

  /***/
  function srcAppInflowFormInflowFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InflowFormComponent", function () {
      return InflowFormComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_inflow_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/inflow.service */
    "./src/app/services/inflow.service.ts");
    /* harmony import */


    var _services_app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/app.service */
    "./src/app/services/app.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var InflowFormComponent = /*#__PURE__*/function () {
      function InflowFormComponent(inflowService, appService, datePipe) {
        _classCallCheck(this, InflowFormComponent);

        this.inflowService = inflowService;
        this.appService = appService;
        this.datePipe = datePipe;
        this.mpOptions = ['DE', 'AU', 'NA', 'IT', 'UK', 'AE', 'ES', 'FR', 'IN', 'JP', 'MX', 'SG', 'NL', 'TR', 'CN', 'SA', 'BR'];
        this.nodeOptions = ['GDN', 'BLR', 'IAS', 'AMM', 'PEK', 'SJO', 'SZX', 'LUX', 'MUC', 'AMS', 'SEA', 'BNA', 'SHA', 'HND', 'DXB', 'LTN', 'GRU', 'CVG', 'LHR', 'SYD', 'CDG', 'SIN', 'LIN', 'MEX', 'MAD'];
        this.ers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.crs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.asinreviewpriority = [1, 2, 3, 4];
      }

      _createClass(InflowFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.inflowForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            asincatchdatefrom: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](new Date()),
            asincatchdateto: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](new Date()),
            "inflowyw": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            "inflowym": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            "Class": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            "workingstatus": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            "asinreviewpriority": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            "productcategory": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            "policytype": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            "enforcementriskscore": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            "csbriskscore": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            "policyentityid": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            "marketplace": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            "node": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
          });
          this.filteredOptionsMP = this.inflowForm.get("marketplace").valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (value) {
            return _this._filterMP(value);
          }));
          this.filteredOptionsNode = this.inflowForm.get("node").valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (value) {
            return _this._filterNode(value);
          }));
          this.inflowForm.valueChanges.subscribe(function (obj) {
            var lastid = _this.appService.selectedId;

            if (_this.appService.selectedId != undefined) {
              var control = obj[_this.appService.selectedId];

              if (control.length) {
                _this.inflowService.inflowAutoComplete(control).subscribe(function (elm) {
                  if (_this.appService.selectedId === lastid) {
                    _this.appService.filteredOptions = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(elm);
                    console.log('service Response -->', elm);
                  }
                });
              }
            }
          });
        }
      }, {
        key: "_filterMP",
        value: function _filterMP(value) {
          var filterValue1 = value.toLowerCase();
          console.log(this.mpOptions.filter(function (option) {
            return option.toLowerCase().includes(filterValue1);
          }));
          return this.mpOptions.filter(function (option) {
            return option.toLowerCase().includes(filterValue1);
          });
        }
      }, {
        key: "_filterNode",
        value: function _filterNode(value) {
          var filterValue2 = value.toLowerCase();
          console.log(this.nodeOptions.filter(function (option) {
            return option.toLowerCase().includes(filterValue2);
          }));
          return this.nodeOptions.filter(function (option) {
            return option.toLowerCase().includes(filterValue2);
          });
        }
      }, {
        key: "callInflowFilterService",
        value: function callInflowFilterService(model) {
          var _this2 = this;

          this.inflowService.inflowFormSubmit(model).subscribe(function (response) {
            //console.log(response);
            if (response != null && response != undefined && response.length > 0) {
              _this2.inflowService.downloadFile(response, "dataInflow", Object.keys(response[0]));
            }
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          //alert(JSON.stringify(this.inflowForm.value));
          var objSubmit = {
            "asin_catch_date_from": {},
            "asin_catch_date_to": {},
            "inflow_yw": [],
            "inflow_ym": [],
            "Class": [],
            "working_status": [],
            "asin_review_priority": [],
            "product_category": [],
            "policy_type": [],
            "enforcement_risk_score": [],
            "csb_risk_score": [],
            "policy_entity_id": [],
            "marketplace": [],
            "node": []
          };
          if (this.inflowForm.value.asincatchdatefrom != undefined && this.inflowForm.value.asincatchdatefrom != null) objSubmit.asin_catch_date_from = this.datePipe.transform(this.inflowForm.value.asincatchdatefrom, "MM/dd/yyyy");
          if (this.inflowForm.value.asincatchdateto != undefined && this.inflowForm.value.asincatchdateto != null) objSubmit.asin_catch_date_to = this.datePipe.transform(this.inflowForm.value.asincatchdateto, 'MM/dd/yyyy');
          if (this.inflowForm.value.inflowyw != undefined && this.inflowForm.value.inflowyw != null) objSubmit.inflow_yw.push(this.inflowForm.value.inflowyw);
          if (this.inflowForm.value.inflowym != undefined && this.inflowForm.value.inflowym != null) objSubmit.inflow_ym.push(this.inflowForm.value.inflowym);
          if (this.inflowForm.value.Class != undefined && this.inflowForm.value.Class != null) objSubmit.Class.push(this.inflowForm.value.Class);
          if (this.inflowForm.value.workingstatus != undefined && this.inflowForm.value.workingstatus != null) objSubmit.working_status.push(this.inflowForm.value.workingstatus);
          if (this.inflowForm.value.asinreviewpriority != undefined && this.inflowForm.value.asinreviewpriority != null) objSubmit.asin_review_priority.push(this.inflowForm.value.asinreviewpriority);
          if (this.inflowForm.value.productcategory != undefined && this.inflowForm.value.productcategory != null) objSubmit.product_category.push(this.inflowForm.value.productcategory);
          if (this.inflowForm.value.policytype != undefined && this.inflowForm.value.policytype != null) objSubmit.policy_type.push(this.inflowForm.value.policytype);
          if (this.inflowForm.value.policyentityid != undefined && this.inflowForm.value.policyentityid != null) objSubmit.policy_entity_id.push(this.inflowForm.value.policyentityid);
          if (this.inflowForm.value.enforcementriskscore != undefined && this.inflowForm.value.enforcementriskscore != null) objSubmit.enforcement_risk_score.push(this.inflowForm.value.enforcementriskscore);
          if (this.inflowForm.value.csbriskscore != undefined && this.inflowForm.value.csbriskscore != null) objSubmit.csb_risk_score.push(this.inflowForm.value.csbriskscore);
          if (this.inflowForm.value.marketplace != undefined && this.inflowForm.value.marketplace != null) objSubmit.marketplace.push(this.inflowForm.value.marketplace);
          if (this.inflowForm.value.node != undefined && this.inflowForm.value.node != null) objSubmit.node.push(this.inflowForm.value.node); //console.log(objSubmit);

          this.callInflowFilterService(objSubmit);
        }
      }]);

      return InflowFormComponent;
    }();

    InflowFormComponent.ctorParameters = function () {
      return [{
        type: _services_inflow_service__WEBPACK_IMPORTED_MODULE_5__["InflowService"]
      }, {
        type: _services_app_service__WEBPACK_IMPORTED_MODULE_6__["AppService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]
      }];
    };

    InflowFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-inflow-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./inflow-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/inflow-form/inflow-form.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./inflow-form.component.scss */
      "./src/app/inflow-form/inflow-form.component.scss"))["default"]]
    })], InflowFormComponent);
    /***/
  },

  /***/
  "./src/app/menu/menu.component.scss":
  /*!******************************************!*\
    !*** ./src/app/menu/menu.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppMenuMenuComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".active {\n  color: #3f51b5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9EOlxcdGFwYW5ndWxhcl9iYWRpXFxkYXRhZmxvdy1tYXRlcmlhbC9zcmNcXGFwcFxcbWVudVxcbWVudS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjdGl2ZXtcclxuICAgIGNvbG9yOiAjM2Y1MWI1O1xyXG59IiwiLmFjdGl2ZSB7XG4gIGNvbG9yOiAjM2Y1MWI1O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/menu/menu.component.ts":
  /*!****************************************!*\
    !*** ./src/app/menu/menu.component.ts ***!
    \****************************************/

  /*! exports provided: MenuComponent */

  /***/
  function srcAppMenuMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
      return MenuComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MenuComponent = /*#__PURE__*/function () {
      function MenuComponent() {
        _classCallCheck(this, MenuComponent);
      }

      _createClass(MenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MenuComponent;
    }();

    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-menu',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./menu.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./menu.component.scss */
      "./src/app/menu/menu.component.scss"))["default"]]
    })], MenuComponent);
    /***/
  },

  /***/
  "./src/app/outflow-form/outflow-form.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/outflow-form/outflow-form.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOutflowFormOutflowFormComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".outflow {\n  border: 1px solid rgba(0, 0, 0, 0.185);\n  padding: 20px;\n  border-radius: 2px;\n}\n\n.outflow .btn.btn-primary {\n  float: right;\n}\n\nlabel {\n  cursor: pointer;\n}\n\n.example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3V0Zmxvdy1mb3JtL0Q6XFx0YXBhbmd1bGFyX2JhZGlcXGRhdGFmbG93LW1hdGVyaWFsL3NyY1xcYXBwXFxvdXRmbG93LWZvcm1cXG91dGZsb3ctZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvb3V0Zmxvdy1mb3JtL291dGZsb3ctZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNDQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVFO0VBQ0UsV0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvb3V0Zmxvdy1mb3JtL291dGZsb3ctZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vdXRmbG93e1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwwLjE4NSk7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG59XHJcblxyXG4ub3V0ZmxvdyAuYnRuLmJ0bi1wcmltYXJ5e1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG5sYWJlbHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmV4YW1wbGUtZm9ybSB7XHJcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH0iLCIub3V0ZmxvdyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xODUpO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG5cbi5vdXRmbG93IC5idG4uYnRuLXByaW1hcnkge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbmxhYmVsIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZXhhbXBsZS1mb3JtIHtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/outflow-form/outflow-form.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/outflow-form/outflow-form.component.ts ***!
    \********************************************************/

  /*! exports provided: OutflowFormComponent */

  /***/
  function srcAppOutflowFormOutflowFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OutflowFormComponent", function () {
      return OutflowFormComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _services_outflow_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/outflow.service */
    "./src/app/services/outflow.service.ts");
    /* harmony import */


    var _services_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/app.service */
    "./src/app/services/app.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var OutflowFormComponent = /*#__PURE__*/function () {
      function OutflowFormComponent(outflowService, appService, datePipe) {
        _classCallCheck(this, OutflowFormComponent);

        this.outflowService = outflowService;
        this.appService = appService;
        this.datePipe = datePipe;
        this.mpOptions = ['DE', 'AU', 'NA', 'IT', 'UK', 'AE', 'ES', 'FR', 'IN', 'JP', 'MX', 'SG', 'NL', 'TR', 'CN', 'SA', 'BR'];
        this.nodeOptions = ['GDN', 'BLR', 'IAS', 'AMM', 'PEK', 'SJO', 'SZX', 'LUX', 'MUC', 'AMS', 'SEA', 'BNA', 'SHA', 'HND', 'DXB', 'LTN', 'GRU', 'CVG', 'LHR', 'SYD', 'CDG', 'SIN', 'LIN', 'MEX', 'MAD'];
        this.ers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.crs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.asinpriority = [1, 2, 3, 4];
      }

      _createClass(OutflowFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.outflowForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            "class": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            "asin_priority": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            "product_category": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            "enforcement_risk_score": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            "csb_risk_score": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            "audittype": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            "decision": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            "manager_id": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            "asin_auditor": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            "reviewday": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            "reviewweek": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            "reviewmonth": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            "outflowtype": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            "bulktype": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            "neiflag": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            "marketplace": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            "node": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            "org": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            "sla": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
          });
          this.filteredOptionsMP = this.outflowForm.get("marketplace").valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (value) {
            return _this3._filterMP(value);
          }));
          this.filteredOptionsNode = this.outflowForm.get("node").valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (value) {
            return _this3._filterNode(value);
          }));
          this.outflowForm.valueChanges.subscribe(function (obj) {
            if (_this3.appService.selectedId != undefined && !_this3.appService.selectedId.includes('node') && !_this3.appService.selectedId.includes('marketplace') && !_this3.appService.selectedId.includes('enforcementriskscore') && !_this3.appService.selectedId.includes('csbriskscore')) {
              var control = obj[_this3.appService.selectedId];

              if (control.length >= 1) {
                _this3.outflowService.outflowAutoComplete(control).subscribe(function (elm) {
                  _this3.filteredOptionsOutflow = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(elm);
                  console.log('service response outflowauto -->', elm);
                });
              }
            }
          });
        }
      }, {
        key: "_filterMP",
        value: function _filterMP(value) {
          var filterValue1 = value.toLowerCase();
          console.log(this.mpOptions.filter(function (option) {
            return option.toLowerCase().includes(filterValue1);
          }));
          return this.mpOptions.filter(function (option) {
            return option.toLowerCase().includes(filterValue1);
          });
        }
      }, {
        key: "_filterNode",
        value: function _filterNode(value) {
          var filterValue2 = value.toLowerCase();
          console.log(this.nodeOptions.filter(function (option) {
            return option.toLowerCase().includes(filterValue2);
          }));
          return this.nodeOptions.filter(function (option) {
            return option.toLowerCase().includes(filterValue2);
          });
        }
      }, {
        key: "callOutflowFilterService",
        value: function callOutflowFilterService(model) {
          var _this4 = this;

          this.outflowService.outflowFormSubmit(model).subscribe(function (response) {
            //console.log(response);
            if (response != null && response != undefined && response.length > 0) {
              _this4.outflowService.downloadFile(response, "dataOutflow", Object.keys(response[0]));
            }
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          //alert(JSON.stringify(this.outflowForm.value));
          console.log(this.outflowForm.value);
          var objSubmit = {
            'Class': [],
            'asin_priority': [],
            'product_category': [],
            'audit_type': [],
            'decision': [],
            'asin_auditor': [],
            'manager_id': [],
            'review_day': "",
            'review_week': [],
            'review_month': [],
            'outflow_type': [],
            'bulk_type': [],
            'enforcement_risk_score': [],
            'csb_risk_score': [],
            'marketplace': [],
            'node': [],
            'org': [],
            'nei_flag': [],
            'sla': []
          };
          if (this.outflowForm.value.reviewday != undefined && this.outflowForm.value.reviewday != null) objSubmit.review_day = this.datePipe.transform(this.outflowForm.value.reviewday, "MM/dd/yyyy");
          if (this.outflowForm.value["class"] != undefined && this.outflowForm.value["class"] != null) objSubmit.Class.push(this.outflowForm.value["class"]);
          if (this.outflowForm.value.audit_type != undefined && this.outflowForm.value.audit_type != null) objSubmit.audit_type.push(this.outflowForm.value.audittype);
          if (this.outflowForm.value.asin_priority != undefined && this.outflowForm.value.asin_priority != null) objSubmit.asin_priority = this.outflowForm.value.asin_priority;
          if (this.outflowForm.value.product_category != undefined && this.outflowForm.value.product_category != null) objSubmit.product_category.push(this.outflowForm.value.product_category);
          if (this.outflowForm.value.asin_auditor != undefined && this.outflowForm.value.asin_auditor != null) objSubmit.asin_auditor.push(this.outflowForm.value.asin_auditor);
          if (this.outflowForm.value.decision != undefined && this.outflowForm.value.decision != null) objSubmit.decision.push(this.outflowForm.value.decision);
          if (this.outflowForm.value.outflowtype != undefined && this.outflowForm.value.outflowtype != null) objSubmit.outflow_type.push(this.outflowForm.value.outflow_type);
          if (this.outflowForm.value.enforcement_risk_score != undefined && this.outflowForm.value.enforcement_risk_score != null) objSubmit.enforcement_risk_score = this.outflowForm.value.enforcement_risk_score;
          if (this.outflowForm.value.csb_risk_score != undefined && this.outflowForm.value.csb_risk_score != null) objSubmit.csb_risk_score = this.outflowForm.value.csb_risk_score;
          if (this.outflowForm.value.marketplace != undefined && this.outflowForm.value.marketplace != null) objSubmit.marketplace.push(this.outflowForm.value.marketplace);
          if (this.outflowForm.value.node != undefined && this.outflowForm.value.node != null) objSubmit.node.push(this.outflowForm.value.node); //console.log(objSubmit);

          this.callOutflowFilterService(objSubmit);
        }
      }]);

      return OutflowFormComponent;
    }();

    OutflowFormComponent.ctorParameters = function () {
      return [{
        type: _services_outflow_service__WEBPACK_IMPORTED_MODULE_4__["OutflowService"]
      }, {
        type: _services_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]
      }];
    };

    OutflowFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-outflow-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./outflow-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/outflow-form/outflow-form.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./outflow-form.component.scss */
      "./src/app/outflow-form/outflow-form.component.scss"))["default"]]
    })], OutflowFormComponent);
    /***/
  },

  /***/
  "./src/app/services/app.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/services/app.service.ts ***!
    \*****************************************/

  /*! exports provided: AppService */

  /***/
  function srcAppServicesAppServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppService", function () {
      return AppService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppService = /*#__PURE__*/function () {
      function AppService() {
        _classCallCheck(this, AppService);
      }

      _createClass(AppService, [{
        key: "selectedElm",
        get: function get() {
          return this.elm;
        },
        set: function set(e) {
          this.elm = e;
        }
      }, {
        key: "selectedId",
        get: function get() {
          return this.id;
        },
        set: function set(id) {
          this.id = id;
        }
      }]);

      return AppService;
    }();

    AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AppService);
    /***/
  },

  /***/
  "./src/app/services/inflow.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/inflow.service.ts ***!
    \********************************************/

  /*! exports provided: InflowService */

  /***/
  function srcAppServicesInflowServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InflowService", function () {
      return InflowService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.service */
    "./src/app/services/app.service.ts");

    var InflowService = /*#__PURE__*/function () {
      function InflowService(http, appService) {
        _classCallCheck(this, InflowService);

        this.http = http;
        this.appService = appService;
      }

      _createClass(InflowService, [{
        key: "inflowAutoComplete",
        value: function inflowAutoComplete(value) {
          return this.http.get('http://3.21.53.117:8080/api/GetFilterValues/getfiltervalueinfow', {
            params: {
              filterValues: this.appService.selectedElm,
              inptTxt: value
            }
          });
        }
      }, {
        key: "inflowFormSubmit",
        value: function inflowFormSubmit(inflowListModel) {
          return this.http.post('http://localhost:5000/api/Inflow/inflowdata', inflowListModel);
        }
      }, {
        key: "downloadFile",
        value: function downloadFile(data) {
          var filename = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'data';
          var headersList = arguments.length > 2 ? arguments[2] : undefined;
          var csvData = this.ConvertToCSV(data, headersList);
          console.log(csvData);
          var blob = new Blob(["\uFEFF" + csvData], {
            type: 'text/csv;charset=utf-8;'
          });
          var dwldLink = document.createElement("a");
          var url = URL.createObjectURL(blob);
          var isSafariBrowser = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;

          if (isSafariBrowser) {
            //if Safari open in new window to save file with random filename.
            dwldLink.setAttribute("target", "_blank");
          }

          dwldLink.setAttribute("href", url);
          dwldLink.setAttribute("download", filename + ".csv");
          dwldLink.style.visibility = "hidden";
          document.body.appendChild(dwldLink);
          dwldLink.click();
          document.body.removeChild(dwldLink);
        }
      }, {
        key: "ConvertToCSV",
        value: function ConvertToCSV(objArray, headerList) {
          var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
          var str = '';
          var row = 'S.No,';

          for (var index in headerList) {
            row += headerList[index] + ',';
          }

          row = row.slice(0, -1);
          str += row + '\r\n';

          for (var i = 0; i < array.length; i++) {
            var line = i + 1 + '';

            for (var _index in headerList) {
              var head = headerList[_index];
              line += ',' + array[i][head];
            }

            str += line + '\r\n';
          }

          return str;
        }
      }]);

      return InflowService;
    }();

    InflowService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]
      }];
    };

    InflowService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], InflowService);
    /***/
  },

  /***/
  "./src/app/services/outflow.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/outflow.service.ts ***!
    \*********************************************/

  /*! exports provided: OutflowService */

  /***/
  function srcAppServicesOutflowServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OutflowService", function () {
      return OutflowService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.service */
    "./src/app/services/app.service.ts");

    var OutflowService = /*#__PURE__*/function () {
      function OutflowService(http, appservice) {
        _classCallCheck(this, OutflowService);

        this.http = http;
        this.appservice = appservice;
      }

      _createClass(OutflowService, [{
        key: "outflowAutoComplete",
        value: function outflowAutoComplete(value) {
          return this.http.get('http://3.21.53.117:8080/api/GetFilterValues/getfiltervalueoutfow', {
            params: {
              filterValues: this.appservice.selectedElm,
              inptTxt: value
            }
          });
        }
      }, {
        key: "outflowFormSubmit",
        value: function outflowFormSubmit(outflowListModel) {
          return this.http.post('http://localhost:5000/api/Outflow/outflowdata', outflowListModel);
        }
      }, {
        key: "downloadFile",
        value: function downloadFile(data) {
          var filename = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'data';
          var headersList = arguments.length > 2 ? arguments[2] : undefined;
          var csvData = this.ConvertToCSV(data, headersList);
          console.log(csvData);
          var blob = new Blob(["\uFEFF" + csvData], {
            type: 'text/csv;charset=utf-8;'
          });
          var dwldLink = document.createElement("a");
          var url = URL.createObjectURL(blob);
          var isSafariBrowser = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;

          if (isSafariBrowser) {
            //if Safari open in new window to save file with random filename.
            dwldLink.setAttribute("target", "_blank");
          }

          dwldLink.setAttribute("href", url);
          dwldLink.setAttribute("download", filename + ".csv");
          dwldLink.style.visibility = "hidden";
          document.body.appendChild(dwldLink);
          dwldLink.click();
          document.body.removeChild(dwldLink);
        }
      }, {
        key: "ConvertToCSV",
        value: function ConvertToCSV(objArray, headerList) {
          var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
          var str = '';
          var row = 'S.No,';

          for (var index in headerList) {
            row += headerList[index] + ',';
          }

          row = row.slice(0, -1);
          str += row + '\r\n';

          for (var i = 0; i < array.length; i++) {
            var line = i + 1 + '';

            for (var _index2 in headerList) {
              var head = headerList[_index2];
              line += ',' + array[i][head];
            }

            str += line + '\r\n';
          }

          return str;
        }
      }]);

      return OutflowService;
    }();

    OutflowService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]
      }];
    };

    OutflowService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], OutflowService);
    /***/
  },

  /***/
  "./src/app/shared/elm-num.directive.ts":
  /*!*********************************************!*\
    !*** ./src/app/shared/elm-num.directive.ts ***!
    \*********************************************/

  /*! exports provided: ElmNumDirective */

  /***/
  function srcAppSharedElmNumDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ElmNumDirective", function () {
      return ElmNumDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/app.service */
    "./src/app/services/app.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var ElmNumDirective = /*#__PURE__*/function () {
      function ElmNumDirective(appService) {
        _classCallCheck(this, ElmNumDirective);

        this.appService = appService;
      }

      _createClass(ElmNumDirective, [{
        key: "inputSelected",
        value: function inputSelected() {
          this.appService.filteredOptions = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]);
          this.appService.selectedElm = this.elm;
          this.appService.selectedId = this.id;
        }
      }]);

      return ElmNumDirective;
    }();

    ElmNumDirective.ctorParameters = function () {
      return [{
        type: _services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ElmNumDirective.prototype, "elm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ElmNumDirective.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('focus')], ElmNumDirective.prototype, "inputSelected", null);
    ElmNumDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[elm]'
    })], ElmNumDirective);
    /***/
  },

  /***/
  "./src/app/shared/highlight.directive.ts":
  /*!***********************************************!*\
    !*** ./src/app/shared/highlight.directive.ts ***!
    \***********************************************/

  /*! exports provided: HighlightDirective */

  /***/
  function srcAppSharedHighlightDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HighlightDirective", function () {
      return HighlightDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HighlightDirective = /*#__PURE__*/function () {
      function HighlightDirective() {
        _classCallCheck(this, HighlightDirective);
      }

      _createClass(HighlightDirective, [{
        key: "onMouseEnter",
        value: function onMouseEnter() {
          this.bgColor = '#dddddd';
          this.color = '#3f51b5';
        }
      }, {
        key: "onMouseLeave",
        value: function onMouseLeave(event) {
          this.bgColor = 'transparent';

          if (!event.target.className.match(/active/)) {
            this.color = 'inherit';
          }
        }
      }]);

      return HighlightDirective;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.backgroundColor')], HighlightDirective.prototype, "bgColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.color')], HighlightDirective.prototype, "color", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseenter')], HighlightDirective.prototype, "onMouseEnter", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseleave', ['$event'])], HighlightDirective.prototype, "onMouseLeave", null);
    HighlightDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[highlight]'
    })], HighlightDirective);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\tapangular_badi\dataflow-material\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map