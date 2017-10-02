"use strict";
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("./user-profile.component.css.shim.ngstyle");
var i1 = require("@angular/core");
var i2 = require("@angular/forms");
var i3 = require("@angular/common");
var i4 = require("@angular/router");
var i5 = require("../../../../../src/app/user-profile/user-profile.component");
var i6 = require("../../../../../src/app/main/main.service");
var styles_UserProfileComponent = [i0.styles];
exports.RenderType_UserProfileComponent = i1.ɵcrt({ encapsulation: 0,
    styles: styles_UserProfileComponent, data: {} });
function View_UserProfileComponent_2(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 26, 'div', [['class',
                'container']], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['\n	'])), (_l()(), i1.ɵeld(0, null, null, 23, 'form', [['novalidate', '']], [[2, 'ng-untouched', null], [2, 'ng-touched',
                null], [2, 'ng-pristine', null], [2, 'ng-dirty', null],
            [2, 'ng-valid', null], [2, 'ng-invalid', null], [2, 'ng-pending',
                null]], [[null, 'submit'], [null, 'reset']], function (_v, en, $event) {
            var ad = true;
            if (('submit' === en)) {
                var pd_0 = (i1.ɵnov(_v, 4).onSubmit($event) !== false);
                ad = (pd_0 && ad);
            }
            if (('reset' === en)) {
                var pd_1 = (i1.ɵnov(_v, 4).onReset() !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, null, null)), i1.ɵdid(16384, null, 0, i2.ɵbf, [], null, null), i1.ɵdid(16384, null, 0, i2.NgForm, [[8,
                null], [8, null]], null, null), i1.ɵprd(2048, null, i2.ControlContainer, null, [i2.NgForm]), i1.ɵdid(16384, null, 0, i2.NgControlStatusGroup, [i2.ControlContainer], null, null), (_l()(), i1.ɵted(null, ['\n		'])), (_l()(), i1.ɵeld(0, null, null, 1, 'h2', [], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['Search Results'])), (_l()(), i1.ɵted(null, ['\n		'])), (_l()(), i1.ɵeld(0, null, null, 12, 'ul', [], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n			'])), (_l()(), i1.ɵeld(0, null, null, 9, 'li', [], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['\n				'])), (_l()(), i1.ɵeld(0, null, null, 1, 'h3', [], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['', ''])), (_l()(), i1.ɵted(null, ['\n				'])), (_l()(), i1.ɵeld(0, null, null, 1, 'h5', [], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['', ''])), (_l()(), i1.ɵted(null, ['\n				'])),
        (_l()(), i1.ɵeld(0, null, null, 0, 'img', [], [[8, 'src',
                4]], null, null, null, null)), (_l()(), i1.ɵted(null, ['	\n			'])), (_l()(), i1.ɵted(null, ['\n		'])), (_l()(), i1.ɵted(null, ['\n		'])), (_l()(), i1.ɵted(null, ['\n	'])), (_l()(), i1.ɵted(null, ['\n']))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = i1.ɵnov(_v, 6).ngClassUntouched;
        var currVal_1 = i1.ɵnov(_v, 6).ngClassTouched;
        var currVal_2 = i1.ɵnov(_v, 6).ngClassPristine;
        var currVal_3 = i1.ɵnov(_v, 6).ngClassDirty;
        var currVal_4 = i1.ɵnov(_v, 6).ngClassValid;
        var currVal_5 = i1.ɵnov(_v, 6).ngClassInvalid;
        var currVal_6 = i1.ɵnov(_v, 6).ngClassPending;
        _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);
        var currVal_7 = _co.partnerInfo.userName;
        _ck(_v, 16, 0, currVal_7);
        var currVal_8 = _co.partnerInfo.id;
        _ck(_v, 19, 0, currVal_8);
        var currVal_9 = i1.ɵinlineInterpolate(1, '', _co.partnerInfo.image, '');
        _ck(_v, 21, 0, currVal_9);
    });
}
function View_UserProfileComponent_1(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 69, 'div', [['class',
                'container']], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['\n	'])), (_l()(), i1.ɵeld(0, null, null, 1, 'h1', [], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['', ''])), (_l()(), i1.ɵted(null, ['\n	'])), (_l()(), i1.ɵeld(0, null, null, 0, 'img', [['alt',
                'your face']], [[8, 'src', 4]], null, null, null, null)),
        (_l()(), i1.ɵted(null, ['\n'])), (_l()(), i1.ɵeld(0, null, null, 62, 'div', [], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n\n'])), (_l()(), i1.ɵeld(0, null, null, 21, 'div', [['class', 'container']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n	'])), (_l()(), i1.ɵeld(0, null, null, 18, 'form', [['novalidate',
                '']], [[2, 'ng-untouched', null], [2, 'ng-touched', null], [2,
                'ng-pristine', null], [2, 'ng-dirty', null], [2, 'ng-valid',
                null], [2, 'ng-invalid', null], [2, 'ng-pending', null]], [[null, 'ngSubmit'], [null, 'submit'], [null, 'reset']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('submit' === en)) {
                var pd_0 = (i1.ɵnov(_v, 13).onSubmit($event) !== false);
                ad = (pd_0 && ad);
            }
            if (('reset' === en)) {
                var pd_1 = (i1.ɵnov(_v, 13).onReset() !== false);
                ad = (pd_1 && ad);
            }
            if (('ngSubmit' === en)) {
                var pd_2 = (_co.findPartner(_co.partnerName) !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, null, null)), i1.ɵdid(16384, null, 0, i2.ɵbf, [], null, null), i1.ɵdid(16384, null, 0, i2.NgForm, [[8,
                null], [8, null]], null, { ngSubmit: 'ngSubmit' }), i1.ɵprd(2048, null, i2.ControlContainer, null, [i2.NgForm]), i1.ɵdid(16384, null, 0, i2.NgControlStatusGroup, [i2.ControlContainer], null, null), (_l()(), i1.ɵted(null, ['\n		'])), (_l()(), i1.ɵeld(0, null, null, 1, 'h2', [], null, null, null, null, null)), (_l()(), i1.ɵted(null, [' Search for your partner '])), (_l()(), i1.ɵted(null, ['\n		'])),
        (_l()(), i1.ɵeld(0, null, null, 5, 'input', [['name', 'partner name'],
            ['placeholder', 'add name'], ['type', 'text']], [[2, 'ng-untouched', null],
            [2, 'ng-touched', null], [2, 'ng-pristine', null], [2, 'ng-dirty',
                null], [2, 'ng-valid', null], [2, 'ng-invalid', null],
            [2, 'ng-pending', null]], [[null, 'ngModelChange'], [null,
                'input'], [null, 'blur'], [null, 'compositionstart'], [null,
                'compositionend']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('input' === en)) {
                var pd_0 = (i1.ɵnov(_v, 21)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                var pd_1 = (i1.ɵnov(_v, 21).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
                var pd_2 = (i1.ɵnov(_v, 21)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
                var pd_3 = (i1.ɵnov(_v, 21)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (('ngModelChange' === en)) {
                var pd_4 = ((_co.partnerName = $event) !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), i1.ɵdid(16384, null, 0, i2.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i2.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵprd(1024, null, i2.NG_VALUE_ACCESSOR, function (p0_0) {
            return [p0_0];
        }, [i2.DefaultValueAccessor]), i1.ɵdid(671744, null, 0, i2.NgModel, [[2, i2.ControlContainer],
            [8, null], [8, null], [2, i2.NG_VALUE_ACCESSOR]], { name: [0, 'name'],
            model: [1, 'model'] }, { update: 'ngModelChange' }), i1.ɵprd(2048, null, i2.NgControl, null, [i2.NgModel]), i1.ɵdid(16384, null, 0, i2.NgControlStatus, [i2.NgControl], null, null), (_l()(), i1.ɵted(null, ['\n		'])), (_l()(), i1.ɵeld(0, null, null, 1, 'button', [['class',
                'btn btn-primary btn-sm'], ['type', 'submit']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['Add'])), (_l()(), i1.ɵted(null, ['\n	'])), (_l()(), i1.ɵted(null, ['\n'])), (_l()(), i1.ɵted(null, ['\n'])), (_l()(), i1.ɵeld(0, null, null, 4, 'section', [], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n'])), (_l()(),
            i1.ɵand(16777216, null, null, 1, null, View_UserProfileComponent_2)),
        i1.ɵdid(16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0,
                'ngIf'] }, null), (_l()(), i1.ɵted(null, ['\n'])), (_l()(), i1.ɵted(null, ['\n\n'])), (_l()(), i1.ɵeld(0, null, null, 30, 'div', [['class',
                'container']], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['\n	'])), (_l()(), i1.ɵeld(0, null, null, 21, 'form', [['novalidate', '']], [[2, 'ng-untouched', null], [2, 'ng-touched',
                null], [2, 'ng-pristine', null], [2, 'ng-dirty', null],
            [2, 'ng-valid', null], [2, 'ng-invalid', null], [2, 'ng-pending',
                null]], [[null, 'ngSubmit'], [null, 'submit'],
            [null, 'reset']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('submit' === en)) {
                var pd_0 = (i1.ɵnov(_v, 42).onSubmit($event) !== false);
                ad = (pd_0 && ad);
            }
            if (('reset' === en)) {
                var pd_1 = (i1.ɵnov(_v, 42).onReset() !== false);
                ad = (pd_1 && ad);
            }
            if (('ngSubmit' === en)) {
                var pd_2 = (_co.createGame(_co.game) !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, null, null)), i1.ɵdid(16384, null, 0, i2.ɵbf, [], null, null), i1.ɵdid(16384, null, 0, i2.NgForm, [[8,
                null], [8, null]], null, { ngSubmit: 'ngSubmit' }), i1.ɵprd(2048, null, i2.ControlContainer, null, [i2.NgForm]), i1.ɵdid(16384, null, 0, i2.NgControlStatusGroup, [i2.ControlContainer], null, null), (_l()(), i1.ɵted(null, ['\n		'])), (_l()(), i1.ɵeld(0, null, null, 1, 'h2', [], null, null, null, null, null)), (_l()(), i1.ɵted(null, [' Create New Game '])), (_l()(), i1.ɵted(null, ['\n		'])), (_l()(),
            i1.ɵeld(0, null, null, 1, 'p', [], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['If you don\'t have an on running game click "Start New Game"'])), (_l()(),
            i1.ɵted(null, ['\n		'])), (_l()(), i1.ɵeld(0, null, null, 5, 'input', [['name', 'game\'s name'], ['placeholder', 'add name'], ['type', 'text']], [[2, 'ng-untouched', null], [2, 'ng-touched', null], [2, 'ng-pristine',
                null], [2, 'ng-dirty', null], [2, 'ng-valid', null],
            [2, 'ng-invalid', null], [2, 'ng-pending', null]], [[null,
                'ngModelChange'], [null, 'input'], [null, 'blur'], [null,
                'compositionstart'], [null, 'compositionend']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('input' === en)) {
                var pd_0 = (i1.ɵnov(_v, 53)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                var pd_1 = (i1.ɵnov(_v, 53).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
                var pd_2 = (i1.ɵnov(_v, 53)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
                var pd_3 = (i1.ɵnov(_v, 53)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (('ngModelChange' === en)) {
                var pd_4 = ((_co.game.gameName = $event) !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), i1.ɵdid(16384, null, 0, i2.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i2.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵprd(1024, null, i2.NG_VALUE_ACCESSOR, function (p0_0) {
            return [p0_0];
        }, [i2.DefaultValueAccessor]), i1.ɵdid(671744, null, 0, i2.NgModel, [[2, i2.ControlContainer],
            [8, null], [8, null], [2, i2.NG_VALUE_ACCESSOR]], { name: [0, 'name'],
            model: [1, 'model'] }, { update: 'ngModelChange' }), i1.ɵprd(2048, null, i2.NgControl, null, [i2.NgModel]), i1.ɵdid(16384, null, 0, i2.NgControlStatus, [i2.NgControl], null, null), (_l()(), i1.ɵted(null, ['\n		'])), (_l()(), i1.ɵeld(0, null, null, 1, 'button', [['class',
                'btn btn-primary btn-sm'], ['type', 'submit']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['Start New Game'])), (_l()(), i1.ɵted(null, ['\n	'])), (_l()(), i1.ɵted(null, ['\n'])), (_l()(), i1.ɵted(null, ['\n	'])), (_l()(), i1.ɵeld(0, null, null, 3, 'button', [['class', 'btn btn-primary btn-sm']], null, null, null, null, null)), (_l()(), i1.ɵeld(0, null, null, 2, 'a', [], [[1, 'target', 0], [8, 'href',
                4]], [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            if (('click' === en)) {
                var pd_0 = (i1.ɵnov(_v, 66).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), i1.ɵdid(671744, null, 0, i4.RouterLinkWithHref, [i4.Router, i4.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, 'routerLink'] }, null), (_l()(), i1.ɵted(null, ['Resume Game'])), (_l()(), i1.ɵted(null, ['\n'])), (_l()(), i1.ɵted(null, ['\n']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_16 = 'partner name';
        var currVal_17 = _co.partnerName;
        _ck(_v, 23, 0, currVal_16, currVal_17);
        var currVal_18 = _co.partnerInfo;
        _ck(_v, 35, 0, currVal_18);
        var currVal_33 = 'game\'s name';
        var currVal_34 = _co.game.gameName;
        _ck(_v, 55, 0, currVal_33, currVal_34);
        var currVal_37 = i1.ɵinlineInterpolate(1, '/GamePage/', _co.currentUser.gameId, '');
        _ck(_v, 66, 0, currVal_37);
    }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.currentUser.userName;
        _ck(_v, 3, 0, currVal_0);
        var currVal_1 = i1.ɵinlineInterpolate(1, '', _co.currentUser.image, '');
        _ck(_v, 5, 0, currVal_1);
        var currVal_2 = i1.ɵnov(_v, 15).ngClassUntouched;
        var currVal_3 = i1.ɵnov(_v, 15).ngClassTouched;
        var currVal_4 = i1.ɵnov(_v, 15).ngClassPristine;
        var currVal_5 = i1.ɵnov(_v, 15).ngClassDirty;
        var currVal_6 = i1.ɵnov(_v, 15).ngClassValid;
        var currVal_7 = i1.ɵnov(_v, 15).ngClassInvalid;
        var currVal_8 = i1.ɵnov(_v, 15).ngClassPending;
        _ck(_v, 11, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8);
        var currVal_9 = i1.ɵnov(_v, 25).ngClassUntouched;
        var currVal_10 = i1.ɵnov(_v, 25).ngClassTouched;
        var currVal_11 = i1.ɵnov(_v, 25).ngClassPristine;
        var currVal_12 = i1.ɵnov(_v, 25).ngClassDirty;
        var currVal_13 = i1.ɵnov(_v, 25).ngClassValid;
        var currVal_14 = i1.ɵnov(_v, 25).ngClassInvalid;
        var currVal_15 = i1.ɵnov(_v, 25).ngClassPending;
        _ck(_v, 20, 0, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15);
        var currVal_19 = i1.ɵnov(_v, 44).ngClassUntouched;
        var currVal_20 = i1.ɵnov(_v, 44).ngClassTouched;
        var currVal_21 = i1.ɵnov(_v, 44).ngClassPristine;
        var currVal_22 = i1.ɵnov(_v, 44).ngClassDirty;
        var currVal_23 = i1.ɵnov(_v, 44).ngClassValid;
        var currVal_24 = i1.ɵnov(_v, 44).ngClassInvalid;
        var currVal_25 = i1.ɵnov(_v, 44).ngClassPending;
        _ck(_v, 40, 0, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25);
        var currVal_26 = i1.ɵnov(_v, 57).ngClassUntouched;
        var currVal_27 = i1.ɵnov(_v, 57).ngClassTouched;
        var currVal_28 = i1.ɵnov(_v, 57).ngClassPristine;
        var currVal_29 = i1.ɵnov(_v, 57).ngClassDirty;
        var currVal_30 = i1.ɵnov(_v, 57).ngClassValid;
        var currVal_31 = i1.ɵnov(_v, 57).ngClassInvalid;
        var currVal_32 = i1.ɵnov(_v, 57).ngClassPending;
        _ck(_v, 52, 0, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32);
        var currVal_35 = i1.ɵnov(_v, 66).target;
        var currVal_36 = i1.ɵnov(_v, 66).href;
        _ck(_v, 65, 0, currVal_35, currVal_36);
    });
}
function View_UserProfileComponent_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵted(null, ['\n'])), (_l()(), i1.ɵted(null, ['\n'])), (_l()(), i1.ɵeld(0, null, null, 1, 'h1', [], null, null, null, null, null)), (_l()(),
            i1.ɵted(null, [' User Profile'])), (_l()(), i1.ɵted(null, ['\n'])),
        (_l()(), i1.ɵand(16777216, null, null, 1, null, View_UserProfileComponent_1)),
        i1.ɵdid(16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0,
                'ngIf'] }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.currentUser;
        _ck(_v, 6, 0, currVal_0);
    }, null);
}
exports.View_UserProfileComponent_0 = View_UserProfileComponent_0;
function View_UserProfileComponent_Host_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 1, 'app-user-profile', [], null, null, null, View_UserProfileComponent_0, exports.RenderType_UserProfileComponent)), i1.ɵdid(114688, null, 0, i5.UserProfileComponent, [i4.ActivatedRoute, i6.MainService], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
    }, null);
}
exports.View_UserProfileComponent_Host_0 = View_UserProfileComponent_Host_0;
exports.UserProfileComponentNgFactory = i1.ɵccf('app-user-profile', i5.UserProfileComponent, View_UserProfileComponent_Host_0, {}, {}, []);
//# sourceMappingURL=user-profile.component.ngfactory.js.map