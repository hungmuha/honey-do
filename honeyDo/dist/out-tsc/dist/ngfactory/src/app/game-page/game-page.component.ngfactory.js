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
var i3 = require("../navbar/navbar.component.ngfactory");
var i4 = require("../../../../../src/app/navbar/navbar.component");
var i5 = require("@angular/router");
var i6 = require("../../../../../src/app/main/main.service");
var i7 = require("../../../../../src/app/game-page/game-page.component");
var i8 = require("@angular/forms");
var styles_GamePageComponent = [i0.styles];
exports.RenderType_GamePageComponent = i1.ɵcrt({ encapsulation: 0,
    styles: styles_GamePageComponent, data: {} });
function View_GamePageComponent_3(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 1, 'li', [['class',
                'actions']], null, [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.addScore(_v.context.$implicit, _v.parent.context.$implicit) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), i1.ɵted(null, ['\n			    				 ',
            '\n			    			']))], null, function (_ck, _v) {
        var currVal_0 = _v.context.$implicit.userName;
        _ck(_v, 1, 0, currVal_0);
    });
}
function View_GamePageComponent_2(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 17, 'ul', [], null, null, null, null, null)), (_l()(),
            i1.ɵted(null, ['\n			'])), (_l()(), i1.ɵeld(0, null, null, 14, 'li', [['class', 'taskList dropdown']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['				\n			    	'])),
        (_l()(), i1.ɵeld(0, null, null, 2, 'button', [['class', 'btn btn-primary  dropdown-toggle'],
            ['data-toggle', 'dropdown'], ['type', 'button']], null, null, null, null, null)), (_l()(), i1.ɵted(null, [' ', ' :    ', ' pts '])), (_l()(), i1.ɵeld(0, null, null, 0, 'span', [['class', 'caret']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n			    		'])), (_l()(),
            i1.ɵeld(0, null, null, 7, 'ul', [['class', 'dropdown-menu options']], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['\n			    			'])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_GamePageComponent_3)), i1.ɵdid(802816, null, 0, i2.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, 'ngForOf'] }, null), (_l()(), i1.ɵted(null, ['\n			    			'])),
        (_l()(), i1.ɵeld(0, null, null, 1, 'li', [['class', 'actions']], null, [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.deleteTask(_v.context.$implicit) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), i1.ɵted(null, ['\n			    				Delete\n			    			'])),
        (_l()(), i1.ɵted(null, ['\n			    		'])), (_l()(), i1.ɵted(null, ['\n			'])), (_l()(), i1.ɵted(null, ['\n		']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_2 = _co.oneGame.users;
        _ck(_v, 11, 0, currVal_2);
    }, function (_ck, _v) {
        var currVal_0 = _v.context.$implicit.task;
        var currVal_1 = _v.context.$implicit.point;
        _ck(_v, 5, 0, currVal_0, currVal_1);
    });
}
function View_GamePageComponent_1(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 4, 'div', [['class',
                'container']], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['\n		'])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_GamePageComponent_2)), i1.ɵdid(802816, null, 0, i2.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, 'ngForOf'] }, null), (_l()(), i1.ɵted(null, ['\n	']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.oneGame.tasks;
        _ck(_v, 3, 0, currVal_0);
    }, null);
}
function View_GamePageComponent_5(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 7, 'li', [['class',
                'playerInfo']], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['\n						'])), (_l()(), i1.ɵeld(0, null, null, 0, 'img', [], [[8, 'src', 4]], null, null, null, null)), (_l()(), i1.ɵted(null, ['\n						'])),
        (_l()(), i1.ɵted(null, ['\n						'])), (_l()(), i1.ɵeld(0, null, null, 1, 'h5', [], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['', ' Pts'])),
        (_l()(), i1.ɵted(null, ['\n					']))], null, function (_ck, _v) {
        var currVal_0 = i1.ɵinlineInterpolate(1, '', _v.context.$implicit.image, '');
        _ck(_v, 2, 0, currVal_0);
        var currVal_1 = _v.context.$implicit.score;
        _ck(_v, 6, 0, currVal_1);
    });
}
function View_GamePageComponent_4(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 10, 'div', [['class',
                'container playerSection']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n			'])), (_l()(), i1.ɵeld(0, null, null, 7, 'ul', [], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n				'])),
        (_l()(), i1.ɵeld(0, null, null, 4, 'div', [['class', 'player']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n					'])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_GamePageComponent_5)), i1.ɵdid(802816, null, 0, i2.NgForOf, [i1.ViewContainerRef,
            i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, 'ngForOf'] }, null),
        (_l()(), i1.ɵted(null, ['\n				'])), (_l()(), i1.ɵted(null, ['\n			'])),
        (_l()(), i1.ɵted(null, ['\n	']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.oneGame.users;
        _ck(_v, 7, 0, currVal_0);
    }, null);
}
function View_GamePageComponent_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 1, 'app-navbar', [], null, null, null, i3.View_NavbarComponent_0, i3.RenderType_NavbarComponent)),
        i1.ɵdid(114688, null, 0, i4.NavbarComponent, [i5.ActivatedRoute, i6.MainService], null, null), (_l()(), i1.ɵted(null, ['\n'])), (_l()(),
            i1.ɵeld(0, null, null, 4, 'div', [['class', 'container']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n	'])), (_l()(), i1.ɵeld(0, null, null, 1, 'h2', [], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['LOVE IS A COMPETITION'])), (_l()(), i1.ɵted(null, ['\n'])), (_l()(), i1.ɵted(null, ['\n\n'])), (_l()(), i1.ɵeld(0, null, null, 4, 'div', [['class', 'container']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n	'])), (_l()(), i1.ɵeld(0, null, null, 1, 'p', [], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['Add task and points'])), (_l()(), i1.ɵted(null, ['\n'])), (_l()(), i1.ɵted(null, ['\n\n'])), (_l()(), i1.ɵeld(0, null, null, 25, 'div', [['class', 'container']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n	'])), (_l()(), i1.ɵeld(0, null, null, 22, 'form', [['class',
                'playerTop'], ['novalidate', '']], [[2, 'ng-untouched', null], [2, 'ng-touched',
                null], [2, 'ng-pristine', null], [2, 'ng-dirty', null],
            [2, 'ng-valid', null], [2, 'ng-invalid', null], [2, 'ng-pending',
                null]], [[null, 'ngSubmit'], [null, 'submit'],
            [null, 'reset']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('submit' === en)) {
                var pd_0 = (i1.ɵnov(_v, 19).onSubmit($event) !== false);
                ad = (pd_0 && ad);
            }
            if (('reset' === en)) {
                var pd_1 = (i1.ɵnov(_v, 19).onReset() !== false);
                ad = (pd_1 && ad);
            }
            if (('ngSubmit' === en)) {
                var pd_2 = (_co.addNewTask(_co.newTask) !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, null, null)), i1.ɵdid(16384, null, 0, i8.ɵbf, [], null, null), i1.ɵdid(16384, null, 0, i8.NgForm, [[8,
                null], [8, null]], null, { ngSubmit: 'ngSubmit' }), i1.ɵprd(2048, null, i8.ControlContainer, null, [i8.NgForm]), i1.ɵdid(16384, null, 0, i8.NgControlStatusGroup, [i8.ControlContainer], null, null), (_l()(), i1.ɵted(null, ['\n		'])), (_l()(), i1.ɵeld(0, null, null, 5, 'input', [['name', 'task'], ['placeholder', 'Task'],
            ['type', 'text']], [[2, 'ng-untouched', null], [2, 'ng-touched', null],
            [2, 'ng-pristine', null], [2, 'ng-dirty', null], [2, 'ng-valid',
                null], [2, 'ng-invalid', null], [2, 'ng-pending', null]], [[null, 'ngModelChange'], [null, 'input'], [null,
                'blur'], [null, 'compositionstart'], [null, 'compositionend']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('input' === en)) {
                var pd_0 = (i1.ɵnov(_v, 24)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                var pd_1 = (i1.ɵnov(_v, 24).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
                var pd_2 = (i1.ɵnov(_v, 24)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
                var pd_3 = (i1.ɵnov(_v, 24)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (('ngModelChange' === en)) {
                var pd_4 = ((_co.newTask.task = $event) !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), i1.ɵdid(16384, null, 0, i8.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i8.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵprd(1024, null, i8.NG_VALUE_ACCESSOR, function (p0_0) {
            return [p0_0];
        }, [i8.DefaultValueAccessor]), i1.ɵdid(671744, null, 0, i8.NgModel, [[2, i8.ControlContainer],
            [8, null], [8, null], [2, i8.NG_VALUE_ACCESSOR]], { name: [0, 'name'],
            model: [1, 'model'] }, { update: 'ngModelChange' }), i1.ɵprd(2048, null, i8.NgControl, null, [i8.NgModel]), i1.ɵdid(16384, null, 0, i8.NgControlStatus, [i8.NgControl], null, null), (_l()(), i1.ɵted(null, ['\n		'])), (_l()(), i1.ɵeld(0, null, null, 5, 'input', [['name',
                'point'], ['placeholder', 'Points'], ['size', '4'], ['type', 'text']], [[2, 'ng-untouched',
                null], [2, 'ng-touched', null], [2, 'ng-pristine', null],
            [2, 'ng-dirty', null], [2, 'ng-valid', null], [2, 'ng-invalid',
                null], [2, 'ng-pending', null]], [[null, 'ngModelChange'],
            [null, 'input'], [null, 'blur'], [null, 'compositionstart'],
            [null, 'compositionend']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('input' === en)) {
                var pd_0 = (i1.ɵnov(_v, 31)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                var pd_1 = (i1.ɵnov(_v, 31).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
                var pd_2 = (i1.ɵnov(_v, 31)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
                var pd_3 = (i1.ɵnov(_v, 31)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (('ngModelChange' === en)) {
                var pd_4 = ((_co.newTask.point = $event) !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), i1.ɵdid(16384, null, 0, i8.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i8.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵprd(1024, null, i8.NG_VALUE_ACCESSOR, function (p0_0) {
            return [p0_0];
        }, [i8.DefaultValueAccessor]), i1.ɵdid(671744, null, 0, i8.NgModel, [[2, i8.ControlContainer],
            [8, null], [8, null], [2, i8.NG_VALUE_ACCESSOR]], { name: [0, 'name'],
            model: [1, 'model'] }, { update: 'ngModelChange' }), i1.ɵprd(2048, null, i8.NgControl, null, [i8.NgModel]), i1.ɵdid(16384, null, 0, i8.NgControlStatus, [i8.NgControl], null, null), (_l()(), i1.ɵted(null, ['\n		'])), (_l()(), i1.ɵeld(0, null, null, 1, 'button', [['class',
                'btn btn-primary'], ['type', 'submit']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['Add'])), (_l()(),
            i1.ɵted(null, ['\n	'])), (_l()(), i1.ɵted(null, ['\n'])), (_l()(),
            i1.ɵted(null, ['\n'])), (_l()(), i1.ɵeld(0, null, null, 7, 'div', [['class', 'list']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n	'])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_GamePageComponent_1)), i1.ɵdid(16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(), i1.ɵted(null, ['\n\n\n	'])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_GamePageComponent_4)), i1.ɵdid(16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(), i1.ɵted(null, ['\n'])), (_l()(), i1.ɵted(null, ['\n\n']))], function (_ck, _v) {
        var _co = _v.component;
        _ck(_v, 1, 0);
        var currVal_14 = 'task';
        var currVal_15 = _co.newTask.task;
        _ck(_v, 26, 0, currVal_14, currVal_15);
        var currVal_23 = 'point';
        var currVal_24 = _co.newTask.point;
        _ck(_v, 33, 0, currVal_23, currVal_24);
        var currVal_25 = _co.oneGame;
        _ck(_v, 45, 0, currVal_25);
        var currVal_26 = _co.oneGame;
        _ck(_v, 48, 0, currVal_26);
    }, function (_ck, _v) {
        var currVal_0 = i1.ɵnov(_v, 21).ngClassUntouched;
        var currVal_1 = i1.ɵnov(_v, 21).ngClassTouched;
        var currVal_2 = i1.ɵnov(_v, 21).ngClassPristine;
        var currVal_3 = i1.ɵnov(_v, 21).ngClassDirty;
        var currVal_4 = i1.ɵnov(_v, 21).ngClassValid;
        var currVal_5 = i1.ɵnov(_v, 21).ngClassInvalid;
        var currVal_6 = i1.ɵnov(_v, 21).ngClassPending;
        _ck(_v, 17, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);
        var currVal_7 = i1.ɵnov(_v, 28).ngClassUntouched;
        var currVal_8 = i1.ɵnov(_v, 28).ngClassTouched;
        var currVal_9 = i1.ɵnov(_v, 28).ngClassPristine;
        var currVal_10 = i1.ɵnov(_v, 28).ngClassDirty;
        var currVal_11 = i1.ɵnov(_v, 28).ngClassValid;
        var currVal_12 = i1.ɵnov(_v, 28).ngClassInvalid;
        var currVal_13 = i1.ɵnov(_v, 28).ngClassPending;
        _ck(_v, 23, 0, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13);
        var currVal_16 = i1.ɵnov(_v, 35).ngClassUntouched;
        var currVal_17 = i1.ɵnov(_v, 35).ngClassTouched;
        var currVal_18 = i1.ɵnov(_v, 35).ngClassPristine;
        var currVal_19 = i1.ɵnov(_v, 35).ngClassDirty;
        var currVal_20 = i1.ɵnov(_v, 35).ngClassValid;
        var currVal_21 = i1.ɵnov(_v, 35).ngClassInvalid;
        var currVal_22 = i1.ɵnov(_v, 35).ngClassPending;
        _ck(_v, 30, 0, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22);
    });
}
exports.View_GamePageComponent_0 = View_GamePageComponent_0;
function View_GamePageComponent_Host_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 1, 'app-game-page', [], null, null, null, View_GamePageComponent_0, exports.RenderType_GamePageComponent)), i1.ɵdid(114688, null, 0, i7.GamePageComponent, [i5.ActivatedRoute, i6.MainService], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
    }, null);
}
exports.View_GamePageComponent_Host_0 = View_GamePageComponent_Host_0;
exports.GamePageComponentNgFactory = i1.ɵccf('app-game-page', i7.GamePageComponent, View_GamePageComponent_Host_0, {}, {}, []);
//# sourceMappingURL=game-page.component.ngfactory.js.map