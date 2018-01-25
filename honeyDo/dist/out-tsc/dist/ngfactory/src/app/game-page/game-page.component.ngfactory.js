"use strict";
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("./game-page.component.css.shim.ngstyle");
var i1 = require("@angular/core");
var i2 = require("@angular/common");
var i3 = require("@angular/forms");
var i4 = require("../../../../../src/app/game-page/game-page.component");
var i5 = require("@angular/router");
var i6 = require("../../../../../src/app/main/main.service");
var styles_GamePageComponent = [i0.styles];
exports.RenderType_GamePageComponent = i1.ɵcrt({ encapsulation: 0,
    styles: styles_GamePageComponent, data: {} });
function View_GamePageComponent_4(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 4, 'ul', [], null, null, null, null, null)), (_l()(),
            i1.ɵted(null, ['\n			    			'])), (_l()(), i1.ɵeld(0, null, null, 1, 'li', [['class', 'taskList']], null, [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.addScore(_v.context.$implicit, _v.parent.parent.context.$implicit) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), i1.ɵted(null, [' ', ' '])), (_l()(),
            i1.ɵted(null, ['\n			    		']))], null, function (_ck, _v) {
        var currVal_0 = _v.context.$implicit.userName;
        _ck(_v, 3, 0, currVal_0);
    });
}
function View_GamePageComponent_3(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 4, 'div', [], null, [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.dismissNav() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), i1.ɵted(null, ['\n			    		'])),
        (_l()(), i1.ɵand(16777216, null, null, 1, null, View_GamePageComponent_4)),
        i1.ɵdid(802816, null, 0, i2.NgForOf, [i1.ViewContainerRef, i1.TemplateRef,
            i1.IterableDiffers], { ngForOf: [0, 'ngForOf'] }, null), (_l()(), i1.ɵted(null, ['\n			    	']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.oneGame.users;
        _ck(_v, 3, 0, currVal_0);
    }, null);
}
function View_GamePageComponent_2(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 22, 'li', [], null, null, null, null, null)), (_l()(),
            i1.ɵted(null, ['\n			'])), (_l()(), i1.ɵeld(0, null, null, 19, 'div', [['class', 'list']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n				'])), (_l()(), i1.ɵeld(0, null, null, 1, 'p', [], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['',
            ' :    ', ' pts'])), (_l()(), i1.ɵted(null, ['\n			\n				'])), (_l()(), i1.ɵeld(0, null, null, 7, 'form', [['novalidate', '']], [[2, 'ng-untouched',
                null], [2, 'ng-touched', null], [2, 'ng-pristine', null],
            [2, 'ng-dirty', null], [2, 'ng-valid', null], [2, 'ng-invalid',
                null], [2, 'ng-pending', null]], [[null, 'ngSubmit'],
            [null, 'submit'], [null, 'reset']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('submit' === en)) {
                var pd_0 = (i1.ɵnov(_v, 9).onSubmit($event) !== false);
                ad = (pd_0 && ad);
            }
            if (('reset' === en)) {
                var pd_1 = (i1.ɵnov(_v, 9).onReset() !== false);
                ad = (pd_1 && ad);
            }
            if (('ngSubmit' === en)) {
                var pd_2 = (_co.deleteTask(_v.context.$implicit) !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, null, null)), i1.ɵdid(16384, null, 0, i3.ɵbf, [], null, null), i1.ɵdid(16384, null, 0, i3.NgForm, [[8, null],
            [8, null]], null, { ngSubmit: 'ngSubmit' }), i1.ɵprd(2048, null, i3.ControlContainer, null, [i3.NgForm]), i1.ɵdid(16384, null, 0, i3.NgControlStatusGroup, [i3.ControlContainer], null, null), (_l()(),
            i1.ɵted(null, ['\n			         '])), (_l()(), i1.ɵeld(0, null, null, 0, 'input', [['class', 'btn btn-secondary'], ['type', 'submit'], ['value', 'Delete']], null, null, null, null, null)), (_l()(),
            i1.ɵted(null, ['\n			    '])), (_l()(), i1.ɵted(null, ['\n			    '])),
        (_l()(), i1.ɵeld(0, null, null, 1, 'button', [['class', 'btn btn-primary dropdown-toggle'],
            ['data-toggle', 'dropdown'], ['type', 'button']], null, [[null,
                'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.toggleNav() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), i1.ɵted(null, ['who did this?'])),
        (_l()(), i1.ɵted(null, ['\n			    	'])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_GamePageComponent_3)), i1.ɵdid(16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, 'ngIf'] }, null),
        (_l()(), i1.ɵted(null, ['\n		    '])), (_l()(), i1.ɵted(null, ['\n		']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_9 = _co.navExpanded;
        _ck(_v, 20, 0, currVal_9);
    }, function (_ck, _v) {
        var currVal_0 = _v.context.$implicit.task;
        var currVal_1 = _v.context.$implicit.point;
        _ck(_v, 5, 0, currVal_0, currVal_1);
        var currVal_2 = i1.ɵnov(_v, 11).ngClassUntouched;
        var currVal_3 = i1.ɵnov(_v, 11).ngClassTouched;
        var currVal_4 = i1.ɵnov(_v, 11).ngClassPristine;
        var currVal_5 = i1.ɵnov(_v, 11).ngClassDirty;
        var currVal_6 = i1.ɵnov(_v, 11).ngClassValid;
        var currVal_7 = i1.ɵnov(_v, 11).ngClassInvalid;
        var currVal_8 = i1.ɵnov(_v, 11).ngClassPending;
        _ck(_v, 7, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8);
    });
}
function View_GamePageComponent_1(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 7, 'div', [['class',
                'container']], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['\n	'])), (_l()(), i1.ɵeld(0, null, null, 4, 'ul', [], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n		'])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_GamePageComponent_2)), i1.ɵdid(802816, null, 0, i2.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, 'ngForOf'] }, null), (_l()(), i1.ɵted(null, ['\n	'])),
        (_l()(), i1.ɵted(null, ['\n']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.oneGame.tasks;
        _ck(_v, 5, 0, currVal_0);
    }, null);
}
function View_GamePageComponent_6(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 7, 'li', [], null, null, null, null, null)), (_l()(),
            i1.ɵted(null, ['\n					'])), (_l()(), i1.ɵeld(0, null, null, 0, 'img', [], [[8, 'src', 4]], null, null, null, null)), (_l()(), i1.ɵted(null, ['\n					'])), (_l()(), i1.ɵted(null, ['\n					'])), (_l()(), i1.ɵeld(0, null, null, 1, 'h5', [], null, null, null, null, null)), (_l()(),
            i1.ɵted(null, ['', ' Pts'])), (_l()(), i1.ɵted(null, ['\n				']))], null, function (_ck, _v) {
        var currVal_0 = i1.ɵinlineInterpolate(1, '', _v.context.$implicit.image, '');
        _ck(_v, 2, 0, currVal_0);
        var currVal_1 = _v.context.$implicit.score;
        _ck(_v, 6, 0, currVal_1);
    });
}
function View_GamePageComponent_5(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 10, 'div', [['class',
                'container']], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['\n		'])), (_l()(), i1.ɵeld(0, null, null, 7, 'ul', [], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n			'])), (_l()(), i1.ɵeld(0, null, null, 4, 'div', [['class', 'player']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n				'])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_GamePageComponent_6)), i1.ɵdid(802816, null, 0, i2.NgForOf, [i1.ViewContainerRef,
            i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, 'ngForOf'] }, null),
        (_l()(), i1.ɵted(null, ['\n			'])), (_l()(), i1.ɵted(null, ['\n		'])),
        (_l()(), i1.ɵted(null, ['\n']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.oneGame.users;
        _ck(_v, 7, 0, currVal_0);
    }, null);
}
function View_GamePageComponent_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵted(null, ['\n'])), (_l()(), i1.ɵeld(0, null, null, 4, 'div', [['class', 'container']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n	'])), (_l()(),
            i1.ɵeld(0, null, null, 1, 'h2', [], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['"HOW MUCH YOU LOVE EACH OTHER ?"'])), (_l()(), i1.ɵted(null, ['\n'])),
        (_l()(), i1.ɵted(null, ['\n'])), (_l()(), i1.ɵeld(0, null, null, 25, 'div', [['class', 'container']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n	'])), (_l()(),
            i1.ɵeld(0, null, null, 22, 'form', [['class', 'playerTop'], ['novalidate',
                    '']], [[2, 'ng-untouched', null], [2, 'ng-touched', null],
                [2, 'ng-pristine', null], [2, 'ng-dirty', null], [2, 'ng-valid',
                    null], [2, 'ng-invalid', null], [2, 'ng-pending', null]], [[null, 'ngSubmit'], [null, 'submit'], [null,
                    'reset']], function (_v, en, $event) {
                var ad = true;
                var _co = _v.component;
                if (('submit' === en)) {
                    var pd_0 = (i1.ɵnov(_v, 11).onSubmit($event) !== false);
                    ad = (pd_0 && ad);
                }
                if (('reset' === en)) {
                    var pd_1 = (i1.ɵnov(_v, 11).onReset() !== false);
                    ad = (pd_1 && ad);
                }
                if (('ngSubmit' === en)) {
                    var pd_2 = (_co.addNewTask(_co.newTask) !== false);
                    ad = (pd_2 && ad);
                }
                return ad;
            }, null, null)), i1.ɵdid(16384, null, 0, i3.ɵbf, [], null, null), i1.ɵdid(16384, null, 0, i3.NgForm, [[8, null], [8, null]], null, { ngSubmit: 'ngSubmit' }),
        i1.ɵprd(2048, null, i3.ControlContainer, null, [i3.NgForm]), i1.ɵdid(16384, null, 0, i3.NgControlStatusGroup, [i3.ControlContainer], null, null), (_l()(), i1.ɵted(null, ['\n		'])), (_l()(), i1.ɵeld(0, null, null, 5, 'input', [['name', 'task'], ['placeholder', 'add a task'],
            ['type', 'text']], [[2, 'ng-untouched', null], [2, 'ng-touched', null],
            [2, 'ng-pristine', null], [2, 'ng-dirty', null], [2, 'ng-valid',
                null], [2, 'ng-invalid', null], [2, 'ng-pending', null]], [[null, 'ngModelChange'], [null, 'input'], [null,
                'blur'], [null, 'compositionstart'], [null, 'compositionend']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('input' === en)) {
                var pd_0 = (i1.ɵnov(_v, 16)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                var pd_1 = (i1.ɵnov(_v, 16).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
                var pd_2 = (i1.ɵnov(_v, 16)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
                var pd_3 = (i1.ɵnov(_v, 16)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (('ngModelChange' === en)) {
                var pd_4 = ((_co.newTask.task = $event) !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), i1.ɵdid(16384, null, 0, i3.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i3.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵprd(1024, null, i3.NG_VALUE_ACCESSOR, function (p0_0) {
            return [p0_0];
        }, [i3.DefaultValueAccessor]), i1.ɵdid(671744, null, 0, i3.NgModel, [[2, i3.ControlContainer],
            [8, null], [8, null], [2, i3.NG_VALUE_ACCESSOR]], { name: [0, 'name'],
            model: [1, 'model'] }, { update: 'ngModelChange' }), i1.ɵprd(2048, null, i3.NgControl, null, [i3.NgModel]), i1.ɵdid(16384, null, 0, i3.NgControlStatus, [i3.NgControl], null, null), (_l()(), i1.ɵted(null, ['\n		'])), (_l()(), i1.ɵeld(0, null, null, 5, 'input', [['name',
                'point'], ['placeholder', 'add point'], ['type', 'text']], [[2, 'ng-untouched',
                null], [2, 'ng-touched', null], [2, 'ng-pristine', null],
            [2, 'ng-dirty', null], [2, 'ng-valid', null], [2, 'ng-invalid',
                null], [2, 'ng-pending', null]], [[null, 'ngModelChange'],
            [null, 'input'], [null, 'blur'], [null, 'compositionstart'],
            [null, 'compositionend']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('input' === en)) {
                var pd_0 = (i1.ɵnov(_v, 23)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                var pd_1 = (i1.ɵnov(_v, 23).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
                var pd_2 = (i1.ɵnov(_v, 23)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
                var pd_3 = (i1.ɵnov(_v, 23)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (('ngModelChange' === en)) {
                var pd_4 = ((_co.newTask.point = $event) !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), i1.ɵdid(16384, null, 0, i3.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i3.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵprd(1024, null, i3.NG_VALUE_ACCESSOR, function (p0_0) {
            return [p0_0];
        }, [i3.DefaultValueAccessor]), i1.ɵdid(671744, null, 0, i3.NgModel, [[2, i3.ControlContainer],
            [8, null], [8, null], [2, i3.NG_VALUE_ACCESSOR]], { name: [0, 'name'],
            model: [1, 'model'] }, { update: 'ngModelChange' }), i1.ɵprd(2048, null, i3.NgControl, null, [i3.NgModel]), i1.ɵdid(16384, null, 0, i3.NgControlStatus, [i3.NgControl], null, null), (_l()(), i1.ɵted(null, ['\n		'])), (_l()(), i1.ɵeld(0, null, null, 1, 'button', [['class',
                'btn btn-primary'], ['type', 'submit']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['Add'])), (_l()(),
            i1.ɵted(null, ['\n	'])), (_l()(), i1.ɵted(null, ['\n'])), (_l()(),
            i1.ɵted(null, ['\n\n'])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_GamePageComponent_1)), i1.ɵdid(16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, 'ngIf'] }, null),
        (_l()(), i1.ɵted(null, ['\n\n\n'])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_GamePageComponent_5)), i1.ɵdid(16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, 'ngIf'] }, null),
        (_l()(), i1.ɵted(null, ['\n\n']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_14 = 'task';
        var currVal_15 = _co.newTask.task;
        _ck(_v, 18, 0, currVal_14, currVal_15);
        var currVal_23 = 'point';
        var currVal_24 = _co.newTask.point;
        _ck(_v, 25, 0, currVal_23, currVal_24);
        var currVal_25 = _co.oneGame;
        _ck(_v, 35, 0, currVal_25);
        var currVal_26 = _co.oneGame;
        _ck(_v, 38, 0, currVal_26);
    }, function (_ck, _v) {
        var currVal_0 = i1.ɵnov(_v, 13).ngClassUntouched;
        var currVal_1 = i1.ɵnov(_v, 13).ngClassTouched;
        var currVal_2 = i1.ɵnov(_v, 13).ngClassPristine;
        var currVal_3 = i1.ɵnov(_v, 13).ngClassDirty;
        var currVal_4 = i1.ɵnov(_v, 13).ngClassValid;
        var currVal_5 = i1.ɵnov(_v, 13).ngClassInvalid;
        var currVal_6 = i1.ɵnov(_v, 13).ngClassPending;
        _ck(_v, 9, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);
        var currVal_7 = i1.ɵnov(_v, 20).ngClassUntouched;
        var currVal_8 = i1.ɵnov(_v, 20).ngClassTouched;
        var currVal_9 = i1.ɵnov(_v, 20).ngClassPristine;
        var currVal_10 = i1.ɵnov(_v, 20).ngClassDirty;
        var currVal_11 = i1.ɵnov(_v, 20).ngClassValid;
        var currVal_12 = i1.ɵnov(_v, 20).ngClassInvalid;
        var currVal_13 = i1.ɵnov(_v, 20).ngClassPending;
        _ck(_v, 15, 0, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13);
        var currVal_16 = i1.ɵnov(_v, 27).ngClassUntouched;
        var currVal_17 = i1.ɵnov(_v, 27).ngClassTouched;
        var currVal_18 = i1.ɵnov(_v, 27).ngClassPristine;
        var currVal_19 = i1.ɵnov(_v, 27).ngClassDirty;
        var currVal_20 = i1.ɵnov(_v, 27).ngClassValid;
        var currVal_21 = i1.ɵnov(_v, 27).ngClassInvalid;
        var currVal_22 = i1.ɵnov(_v, 27).ngClassPending;
        _ck(_v, 22, 0, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22);
    });
}
exports.View_GamePageComponent_0 = View_GamePageComponent_0;
function View_GamePageComponent_Host_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 1, 'app-game-page', [], null, null, null, View_GamePageComponent_0, exports.RenderType_GamePageComponent)), i1.ɵdid(114688, null, 0, i4.GamePageComponent, [i5.ActivatedRoute, i6.MainService], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
    }, null);
}
exports.View_GamePageComponent_Host_0 = View_GamePageComponent_Host_0;
exports.GamePageComponentNgFactory = i1.ɵccf('app-game-page', i4.GamePageComponent, View_GamePageComponent_Host_0, {}, {}, []);
//# sourceMappingURL=game-page.component.ngfactory.js.map