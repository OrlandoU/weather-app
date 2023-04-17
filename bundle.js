/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();

  while (output.length < targetLength) {
    output = '0' + output;
  }

  return sign + output;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultLocale/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../locale/en-US/index.js */ "./node_modules/date-fns/esm/locale/en-US/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDefaultOptions": () => (/* binding */ getDefaultOptions),
/* harmony export */   "setDefaultOptions": () => (/* binding */ setDefaultOptions)
/* harmony export */ });
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/formatters/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/formatters/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_lib/getUTCDayOfYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js");
/* harmony import */ var _lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js");
/* harmony import */ var _lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_lib/getUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js");
/* harmony import */ var _lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");
/* harmony import */ var _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lightFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js");







var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
};

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */
var formatters = {
  // Era
  G: function (date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;

    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {
          width: 'abbreviated'
        });
      // A, B

      case 'GGGGG':
        return localize.era(era, {
          width: 'narrow'
        });
      // Anno Domini, Before Christ

      case 'GGGG':
      default:
        return localize.era(era, {
          width: 'wide'
        });
    }
  },
  // Year
  y: function (date, token, localize) {
    // Ordinal number
    if (token === 'yo') {
      var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: 'year'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].y(date, token);
  },
  // Local week-numbering year
  Y: function (date, token, localize, options) {
    var signedWeekYear = (0,_lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(date, options); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear; // Two digit year

    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(twoDigitYear, 2);
    } // Ordinal number


    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {
        unit: 'year'
      });
    } // Padding


    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function (date, token) {
    var isoWeekYear = (0,_lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date); // Padding

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function (date, token) {
    var year = date.getUTCFullYear();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(year, token.length);
  },
  // Quarter
  Q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'QQ':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'Qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'QQQ':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'QQQQQ':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'formatting'
        });
      // 1st quarter, 2nd quarter, ...

      case 'QQQQ':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone quarter
  q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'qq':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'qqq':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'qqqqq':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'standalone'
        });
      // 1st quarter, 2nd quarter, ...

      case 'qqqq':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Month
  M: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      case 'M':
      case 'MM':
        return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].M(date, token);
      // 1st, 2nd, ..., 12th

      case 'Mo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'MMM':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // J, F, ..., D

      case 'MMMMM':
        return localize.month(month, {
          width: 'narrow',
          context: 'formatting'
        });
      // January, February, ..., December

      case 'MMMM':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone month
  L: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1);
      // 01, 02, ..., 12

      case 'LL':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(month + 1, 2);
      // 1st, 2nd, ..., 12th

      case 'Lo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'LLL':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // J, F, ..., D

      case 'LLLLL':
        return localize.month(month, {
          width: 'narrow',
          context: 'standalone'
        });
      // January, February, ..., December

      case 'LLLL':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Local week of year
  w: function (date, token, localize, options) {
    var week = (0,_lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(date, options);

    if (token === 'wo') {
      return localize.ordinalNumber(week, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(week, token.length);
  },
  // ISO week of year
  I: function (date, token, localize) {
    var isoWeek = (0,_lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(date);

    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeek, token.length);
  },
  // Day of the month
  d: function (date, token, localize) {
    if (token === 'do') {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: 'date'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].d(date, token);
  },
  // Day of year
  D: function (date, token, localize) {
    var dayOfYear = (0,_lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(date);

    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {
        unit: 'dayOfYear'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dayOfYear, token.length);
  },
  // Day of week
  E: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();

    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'EEEEE':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'EEEEEE':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Local day of week
  e: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'ee':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th

      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'eee':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'eeeee':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'eeeeee':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'eeee':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone local day of week
  c: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'cc':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th

      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'ccc':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // T

      case 'ccccc':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'standalone'
        });
      // Tu

      case 'cccccc':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'standalone'
        });
      // Tuesday

      case 'cccc':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // ISO day of week
  i: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;

    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek);
      // 02

      case 'ii':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoDayOfWeek, token.length);
      // 2nd

      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: 'day'
        });
      // Tue

      case 'iii':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'iiiii':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'iiiiii':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'iiii':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM or PM
  a: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM, PM, midnight, noon
  b: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    }

    switch (token) {
      case 'b':
      case 'bb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Hour [1-12]
  h: function (date, token, localize) {
    if (token === 'ho') {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].h(date, token);
  },
  // Hour [0-23]
  H: function (date, token, localize) {
    if (token === 'Ho') {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].H(date, token);
  },
  // Hour [0-11]
  K: function (date, token, localize) {
    var hours = date.getUTCHours() % 12;

    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Hour [1-24]
  k: function (date, token, localize) {
    var hours = date.getUTCHours();
    if (hours === 0) hours = 24;

    if (token === 'ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Minute
  m: function (date, token, localize) {
    if (token === 'mo') {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: 'minute'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].m(date, token);
  },
  // Second
  s: function (date, token, localize) {
    if (token === 'so') {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: 'second'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].s(date, token);
  },
  // Fraction of second
  S: function (date, token) {
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return 'Z';
    }

    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`

      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`

      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`

      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`

      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (GMT)
  O: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (specific non-location)
  z: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Seconds timestamp
  t: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  }
};

function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;

  if (minutes === 0) {
    return sign + String(hours);
  }

  var delimiter = dirtyDelimiter || '';
  return sign + String(hours) + delimiter + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.abs(offset) / 60, 2);
  }

  return formatTimezone(offset, dirtyDelimiter);
}

function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.floor(absOffset / 60), 2);
  var minutes = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

var formatters = {
  // Year
  y: function (date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
    var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(token === 'yy' ? year % 100 : year, token.length);
  },
  // Month
  M: function (date, token) {
    var month = date.getUTCMonth();
    return token === 'M' ? String(month + 1) : (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(month + 1, 2);
  },
  // Day of the month
  d: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function (date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return dayPeriodEnumValue.toUpperCase();

      case 'aaa':
        return dayPeriodEnumValue;

      case 'aaaaa':
        return dayPeriodEnumValue[0];

      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
    }
  },
  // Hour [1-12]
  h: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours(), token.length);
  },
  // Minute
  m: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function (date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(fractionalSeconds, token.length);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/longFormatters/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var dateLongFormatter = function (pattern, formatLong) {
  switch (pattern) {
    case 'P':
      return formatLong.date({
        width: 'short'
      });

    case 'PP':
      return formatLong.date({
        width: 'medium'
      });

    case 'PPP':
      return formatLong.date({
        width: 'long'
      });

    case 'PPPP':
    default:
      return formatLong.date({
        width: 'full'
      });
  }
};

var timeLongFormatter = function (pattern, formatLong) {
  switch (pattern) {
    case 'p':
      return formatLong.time({
        width: 'short'
      });

    case 'pp':
      return formatLong.time({
        width: 'medium'
      });

    case 'ppp':
      return formatLong.time({
        width: 'long'
      });

    case 'pppp':
    default:
      return formatLong.time({
        width: 'full'
      });
  }
};

var dateTimeLongFormatter = function (pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/) || [];
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  var dateTimeFormat;

  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({
        width: 'short'
      });
      break;

    case 'PP':
      dateTimeFormat = formatLong.dateTime({
        width: 'medium'
      });
      break;

    case 'PPP':
      dateTimeFormat = formatLong.dateTime({
        width: 'long'
      });
      break;

    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({
        width: 'full'
      });
      break;
  }

  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
};

var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (longFormatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCDayOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


var MILLISECONDS_IN_DAY = 86400000;
function getUTCDayOfYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");



function getUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfThisYear);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000;
function getUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date).getTime() - (0,_startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");





function getUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_2__.getDefaultOptions)();
  var firstWeekContainsDate = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeekOfNextYear, options);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeekOfThisYear, options);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeek/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000;
function getUTCWeek(dirtyDate, options) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date, options).getTime() - (0,_startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date, options).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/protectedTokens/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isProtectedDayOfYearToken": () => (/* binding */ isProtectedDayOfYearToken),
/* harmony export */   "isProtectedWeekYearToken": () => (/* binding */ isProtectedWeekYearToken),
/* harmony export */   "throwProtectedError": () => (/* binding */ throwProtectedError)
/* harmony export */ });
var protectedDayOfYearTokens = ['D', 'DD'];
var protectedWeekYearTokens = ['YY', 'YYYY'];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
  if (token === 'YYYY') {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'YY') {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'D') {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'DD') {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



function startOfUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var year = (0,_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuary);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


function startOfUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var weekStartsOn = 1;
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");





function startOfUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var firstWeekContainsDate = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
  var year = (0,_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate, options);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeek, options);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");




function startOfUTCWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addDays/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/addDays/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addDays)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} - the new date with the days added
 * @throws {TypeError} - 2 arguments required
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */

function addDays(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);

  if (isNaN(amount)) {
    return new Date(NaN);
  }

  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return date;
  }

  date.setDate(date.getDate() + amount);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/addMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */

function addMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var timestamp = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getTime();
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);
  return new Date(timestamp + amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addMonths/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/addMonths/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMonths)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addMonths
 * @category Month Helpers
 * @summary Add the specified number of months to the given date.
 *
 * @description
 * Add the specified number of months to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of months to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the months added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 5 months to 1 September 2014:
 * const result = addMonths(new Date(2014, 8, 1), 5)
 * //=> Sun Feb 01 2015 00:00:00
 */

function addMonths(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);

  if (isNaN(amount)) {
    return new Date(NaN);
  }

  if (!amount) {
    // If 0 months, no-op to avoid changing times in the hour before end of DST
    return date;
  }

  var dayOfMonth = date.getDate(); // The JS Date object supports date math by accepting out-of-bounds values for
  // month, day, etc. For example, new Date(2020, 0, 0) returns 31 Dec 2019 and
  // new Date(2020, 13, 1) returns 1 Feb 2021.  This is *almost* the behavior we
  // want except that dates will wrap around the end of a month, meaning that
  // new Date(2020, 13, 31) will return 3 Mar 2021 not 28 Feb 2021 as desired. So
  // we'll default to the end of the desired month by adding 1 to the desired
  // month and using a date of 0 to back up one day to the end of the desired
  // month.

  var endOfDesiredMonth = new Date(date.getTime());
  endOfDesiredMonth.setMonth(date.getMonth() + amount + 1, 0);
  var daysInMonth = endOfDesiredMonth.getDate();

  if (dayOfMonth >= daysInMonth) {
    // If we're already at the end of the month, then this is the correct date
    // and we're done.
    return endOfDesiredMonth;
  } else {
    // Otherwise, we now know that setting the original day-of-month value won't
    // cause an overflow, so set the desired day-of-month. Note that we can't
    // just set the date of `endOfDesiredMonth` because that object may have had
    // its time changed in the unusual case where where a DST transition was on
    // the last day of the month and its local time was in the hour skipped or
    // repeated next to a DST transition.  So we use `date` instead which is
    // guaranteed to still have the original time.
    date.setFullYear(endOfDesiredMonth.getFullYear(), endOfDesiredMonth.getMonth(), dayOfMonth);
    return date;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/add/index.js":
/*!************************************************!*\
  !*** ./node_modules/date-fns/esm/add/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ add)
/* harmony export */ });
/* harmony import */ var _addDays_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../addDays/index.js */ "./node_modules/date-fns/esm/addDays/index.js");
/* harmony import */ var _addMonths_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../addMonths/index.js */ "./node_modules/date-fns/esm/addMonths/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");






/**
 * @name add
 * @category Common Helpers
 * @summary Add the specified years, months, weeks, days, hours, minutes and seconds to the given date.
 *
 * @description
 * Add the specified years, months, weeks, days, hours, minutes and seconds to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Duration} duration - the object with years, months, weeks, days, hours, minutes and seconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 *
 * | Key            | Description                        |
 * |----------------|------------------------------------|
 * | years          | Amount of years to be added        |
 * | months         | Amount of months to be added       |
 * | weeks          | Amount of weeks to be added        |
 * | days           | Amount of days to be added         |
 * | hours          | Amount of hours to be added        |
 * | minutes        | Amount of minutes to be added      |
 * | seconds        | Amount of seconds to be added      |
 *
 * All values default to 0
 *
 * @returns {Date} the new date with the seconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add the following duration to 1 September 2014, 10:19:50
 * const result = add(new Date(2014, 8, 1, 10, 19, 50), {
 *   years: 2,
 *   months: 9,
 *   weeks: 1,
 *   days: 7,
 *   hours: 5,
 *   minutes: 9,
 *   seconds: 30,
 * })
 * //=> Thu Jun 15 2017 15:29:20
 */
function add(dirtyDate, duration) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  if (!duration || typeof duration !== 'object') return new Date(NaN);
  var years = duration.years ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(duration.years) : 0;
  var months = duration.months ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(duration.months) : 0;
  var weeks = duration.weeks ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(duration.weeks) : 0;
  var days = duration.days ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(duration.days) : 0;
  var hours = duration.hours ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(duration.hours) : 0;
  var minutes = duration.minutes ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(duration.minutes) : 0;
  var seconds = duration.seconds ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(duration.seconds) : 0; // Add years and months

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  var dateWithMonths = months || years ? (0,_addMonths_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date, months + years * 12) : date; // Add weeks and days

  var dateWithDays = days || weeks ? (0,_addDays_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dateWithMonths, days + weeks * 7) : dateWithMonths; // Add days, hours, minutes and seconds

  var minutesToAdd = minutes + hours * 60;
  var secondsToAdd = seconds + minutesToAdd * 60;
  var msToAdd = secondsToAdd * 1000;
  var finalDate = new Date(dateWithDays.getTime() + msToAdd);
  return finalDate;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/format/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/format/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ format)
/* harmony export */ });
/* harmony import */ var _isValid_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../isValid/index.js */ "./node_modules/date-fns/esm/isValid/index.js");
/* harmony import */ var _subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../subMilliseconds/index.js */ "./node_modules/date-fns/esm/subMilliseconds/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_lib/format/formatters/index.js */ "./node_modules/date-fns/esm/_lib/format/formatters/index.js");
/* harmony import */ var _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_lib/format/longFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_lib/protectedTokens/index.js */ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");
/* harmony import */ var _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/defaultLocale/index.js */ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js");










 // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps

var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, options) {
  var _ref, _options$locale, _ref2, _ref3, _ref4, _options$firstWeekCon, _options$locale2, _options$locale2$opti, _defaultOptions$local, _defaultOptions$local2, _ref5, _ref6, _ref7, _options$weekStartsOn, _options$locale3, _options$locale3$opti, _defaultOptions$local3, _defaultOptions$local4;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__["default"];
  var firstWeekContainsDate = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref2 = (_ref3 = (_ref4 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale2 = options.locale) === null || _options$locale2 === void 0 ? void 0 : (_options$locale2$opti = _options$locale2.options) === null || _options$locale2$opti === void 0 ? void 0 : _options$locale2$opti.firstWeekContainsDate) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : 1); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref5 = (_ref6 = (_ref7 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale3 = options.locale) === null || _options$locale3 === void 0 ? void 0 : (_options$locale3$opti = _options$locale3.options) === null || _options$locale3$opti === void 0 ? void 0 : _options$locale3$opti.weekStartsOn) !== null && _ref7 !== void 0 ? _ref7 : defaultOptions.weekStartsOn) !== null && _ref6 !== void 0 ? _ref6 : (_defaultOptions$local3 = defaultOptions.locale) === null || _defaultOptions$local3 === void 0 ? void 0 : (_defaultOptions$local4 = _defaultOptions$local3.options) === null || _defaultOptions$local4 === void 0 ? void 0 : _defaultOptions$local4.weekStartsOn) !== null && _ref5 !== void 0 ? _ref5 : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }

  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }

  var originalDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyDate);

  if (!(0,_isValid_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(originalDate)) {
    throw new RangeError('Invalid time value');
  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376


  var timezoneOffset = (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(originalDate);
  var utcDate = (0,_subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];

    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_8__["default"][firstCharacter];
      return longFormatter(substring, locale.formatLong);
    }

    return substring;
  }).join('').match(formattingTokensRegExp).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }

    var firstCharacter = substring[0];

    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }

    var formatter = _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_9__["default"][firstCharacter];

    if (formatter) {
      if (!(options !== null && options !== void 0 && options.useAdditionalWeekYearTokens) && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.isProtectedWeekYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));
      }

      if (!(options !== null && options !== void 0 && options.useAdditionalDayOfYearTokens) && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.isProtectedDayOfYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));
      }

      return formatter(utcDate, substring, locale.localize, formatterOptions);
    }

    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }

    return substring;
  }).join('');
  return result;
}

function cleanEscapedString(input) {
  var matched = input.match(escapedStringRegExp);

  if (!matched) {
    return input;
  }

  return matched[1].replace(doubleQuoteRegExp, "'");
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/isDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param {*} value - the value to check
 * @returns {boolean} true if the given value is a date
 * @throws {TypeError} 1 arguments required
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */

function isDate(value) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return value instanceof Date || typeof value === 'object' && Object.prototype.toString.call(value) === '[object Date]';
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isValid/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isValid/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _isDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isDate/index.js */ "./node_modules/date-fns/esm/isDate/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */

function isValid(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);

  if (!(0,_isDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate) && typeof dirtyDate !== 'number') {
    return false;
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  return !isNaN(Number(date));
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // TODO: Remove String()
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
function buildLocalizeFn(args) {
  return function (dirtyIndex, options) {
    var context = options !== null && options !== void 0 && options.context ? String(options.context) : 'standalone';
    var valuesArray;

    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;

      var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }

    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex; // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!

    return valuesArray[index];
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }

  return undefined;
}

function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }

  return undefined;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};

var formatDistance = function (token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];

  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString());
  }

  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDistance);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js");

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLong);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};

var formatRelative = function (token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatRelative);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js");

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
}; // Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.

var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};

var ordinalNumber = function (dirtyNumber, _options) {
  var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  var rem100 = number % 100;

  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';

      case 2:
        return number + 'nd';

      case 3:
        return number + 'rd';
    }
  }

  return number + 'th';
};

var localize = {
  ordinalNumber: ordinalNumber,
  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function (quarter) {
      return quarter - 1;
    }
  }),
  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localize);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js");
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js");


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function (value) {
      return parseInt(value, 10);
    }
  }),
  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function (index) {
      return index + 1;
    }
  }),
  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js");
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js");
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js");
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js");
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js");






/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale = {
  code: 'en-US',
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  options: {
    weekStartsOn: 0
    /* Sunday */
    ,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);

/***/ }),

/***/ "./node_modules/date-fns/esm/subMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/subMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ subMilliseconds)
/* harmony export */ });
/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMilliseconds/index.js */ "./node_modules/date-fns/esm/addMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */

function subMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
  return (0,_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, -amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/displayController.js":
/*!**********************************!*\
  !*** ./src/displayController.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderHomePage": () => (/* binding */ renderHomePage),
/* harmony export */   "renderQueriedCity": () => (/* binding */ renderQueriedCity)
/* harmony export */ });
/* harmony import */ var _query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./query */ "./src/query.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/add/index.js");



const homeDisplayedCities = ['tokyo', 'roma', 'france', 'new york', 'athens', 'london']

async function renderHomePage() {
    try {
        renderLoader('Loading Home Page...')
        let cardsContainer = document.createElement('div');
        cardsContainer.classList.add('cards-container-home');
        cardsContainer.classList.add('main-sub-container')
        for (const city of homeDisplayedCities) {
            let cityRetrievedData = await (0,_query__WEBPACK_IMPORTED_MODULE_0__.queryClimate)(city);
            let card = document.createElement('div');
            card.classList.add('card-home')
            card.classList.add(city.replace(/\s+/g, '-'))

            let cityName = document.createElement('div');
            cityName.textContent = cityRetrievedData.name;
            cityName.classList.add('city-name-home')

            let cityTemp = document.createElement('div');
            cityTemp.classList.add('city-temp-home')
            cityTemp.textContent = `${Math.round(cityRetrievedData.main.temp - 275)}°C`;

            let cityWeather = document.createElement('div')
            cityWeather.classList.add('city-weather-home')
            cityWeather.textContent = cityRetrievedData.weather[0].description.charAt(0).toUpperCase() + cityRetrievedData.weather[0].description.slice(1)

            card.appendChild(cityName)
            card.appendChild(cityWeather)
            card.appendChild(cityTemp)
            card.addEventListener('click', ()=>{
                renderQueriedCity(cityRetrievedData.name)
            })
            cardsContainer.appendChild(card)
        }
        let mainContainer = document.createElement('main');
        mainContainer.classList.add('main-container-home');



        let header = document.createElement('header');
        let logoContainer = document.createElement('div')
        logoContainer.classList.add('logo-default')
        let logoIcon = document.createElement('img')
        logoIcon.src = './head-icon.gif'
        let logo = document.createElement('h1')
        logo.classList.add('logo-text-default')
        logo.textContent = 'W·e·a·t·h·e·r'
        logo.addEventListener('click', ()=>{
            window.location.href = window.location.href;
        })
        logoContainer.appendChild(logoIcon)
        logoContainer.appendChild(logo)

        let inputContainer = document.createElement('form')
        inputContainer.addEventListener('submit', (e) => {
            e.preventDefault()
            renderQueriedCity()
        })
        inputContainer.classList.add('input-container-home')
        let inputBox = document.createElement('input')
        inputBox.classList.add('input-home')

        inputBox.placeholder = 'City...'
        let inputSpan = document.createElement('span')


        let searchButton = document.createElement('img')
        searchButton.classList.add('submit-home')
        searchButton.src = './svg/magnify.svg'
        searchButton.addEventListener('click', renderQueriedCity)

        inputContainer.appendChild(inputBox)
        inputContainer.appendChild(inputSpan)
        inputContainer.appendChild(searchButton)
        header.appendChild(logoContainer)
        header.appendChild(inputContainer)

        mainContainer.appendChild(header)
        mainContainer.appendChild(cardsContainer)

        clear()

        document.body.appendChild(mainContainer)
    } catch (error) {
        let errorPromise = await error
        /* eslint-disable */console.log(...oo_oo(`c48ff1_0`,error))
        renderError(errorPromise.message.charAt(0).toUpperCase() + errorPromise.message.slice(1))
    }
}


async function renderQueriedCity(city=document.querySelector('input').value) {
    try {
        let forecast = await (0,_query__WEBPACK_IMPORTED_MODULE_0__.queryForecast)(city)
        let timezone = forecast.city.timezone;
        let arrForecast = forecast.list;
        let retrievedData = await (0,_query__WEBPACK_IMPORTED_MODULE_0__.queryClimate)(city)

        renderLoader('Retrieving Data...')

        let mainContainer = document.createElement('main');
        mainContainer.classList.add('main-container-home');

        let header = document.createElement('header');
        let logoContainer = document.createElement('div')
        logoContainer.classList.add('logo-default')
        let logoIcon = document.createElement('img')
        logoIcon.src = './head-icon.gif'
        let logo = document.createElement('h1')
        logo.classList.add('logo-text-default')
        logo.textContent = 'W·e·a·t·h·e·r'
        logo.addEventListener('click', ()=>{
            window.location.href = window.location.href;
        })
        logoContainer.appendChild(logoIcon)
        logoContainer.appendChild(logo)

        let inputContainer = document.createElement('form')
        inputContainer.addEventListener('submit', (e) => {
            e.preventDefault()
            renderQueriedCity()
        })
        inputContainer.classList.add('input-container-home')
        let inputBox = document.createElement('input')
        inputBox.classList.add('input-home')
        inputBox.placeholder = 'City...'
        let inputSpan = document.createElement('span')


        let searchButton = document.createElement('img')
        searchButton.classList.add('submit-home')
        searchButton.src = './svg/magnify.svg'
        searchButton.addEventListener('click', renderQueriedCity)

        inputContainer.appendChild(inputBox)
        inputContainer.appendChild(inputSpan)
        inputContainer.appendChild(searchButton)
        header.appendChild(logoContainer)
        header.appendChild(inputContainer)

        let queriedMainContainer = document.createElement('div')
        queriedMainContainer.classList.add('main-container-queried')

        // top header
        let queriedHeader = document.createElement('div')
        queriedHeader.classList.add('sub-header-queried')

        let cityName = document.createElement('div')
        cityName.classList.add('city-name-queried')
        cityName.textContent = retrievedData.name
        let cityCountry = document.createElement('span')
        cityCountry.classList.add('city-country-queried')
        cityCountry.textContent = retrievedData.sys.country
        cityName.appendChild(cityCountry)

        let cityTemp = document.createElement('div')
        cityTemp.classList.add('city-temp-queried')
        cityTemp.textContent = `${Math.round(retrievedData.main.temp - 275)}°`
        let weatherIcon = document.createElement('img')
        weatherIcon.src = `http://openweathermap.org/img/wn/${retrievedData.weather[0].icon}@2x.png`
        cityTemp.appendChild(weatherIcon)

        let cityWeatherDescription = document.createElement('div')
        cityWeatherDescription.classList.add('city-weather-queried')
        cityWeatherDescription.textContent = retrievedData.weather[0].description.charAt(0).toUpperCase() + retrievedData.weather[0].description.slice(1)

        queriedHeader.appendChild(cityName)
        queriedHeader.appendChild(cityTemp)
        queriedHeader.appendChild(cityWeatherDescription)

        // middle container
        let queriedAdditionalContainer = document.createElement('div')
        queriedAdditionalContainer.classList.add('middle-container-queried')

        let cityHumidity = document.createElement('div')
        cityHumidity.classList.add('city-humidity-container-queried')
        let cityHumidityIcon = document.createElement('img')
        cityHumidityIcon.classList.add('city-humidity-icon-queried')
        cityHumidityIcon.src = './svg/drop.png'
        let cityHumidityMainText = document.createElement('div')
        cityHumidityMainText.classList.add('city-humidity-mainText-queried')
        cityHumidityMainText.textContent = 'Humidity'
        let cityHumidityText = document.createElement('div')
        cityHumidityText.classList.add('city-humidity-text-queried')
        cityHumidityText.textContent = `${retrievedData.main.humidity}%`
        cityHumidity.appendChild(cityHumidityIcon)
        cityHumidity.appendChild(cityHumidityMainText)
        cityHumidity.appendChild(cityHumidityText)

        let cityClouds = document.createElement('div')
        cityClouds.classList.add('city-clouds-container-queried')
        let cityCloudsIcon = document.createElement('img')
        cityCloudsIcon.classList.add('city-clouds-icon-queried')
        cityCloudsIcon.src = './svg/cloud.png'
        let cityCloudsMainText = document.createElement('div')
        cityCloudsMainText.classList.add('city-clouds-mainText-queried')
        cityCloudsMainText.textContent = 'Clouds'
        let cityCloudsText = document.createElement('div')
        cityCloudsText.classList.add('city-clouds-text-queried')
        cityCloudsText.textContent = `${retrievedData.clouds.all}%`
        cityClouds.appendChild(cityCloudsIcon)
        cityClouds.appendChild(cityCloudsMainText)
        cityClouds.appendChild(cityCloudsText)

        let cityVisibility = document.createElement('div')
        cityVisibility.classList.add('city-visibility-container-queried')
        let cityVisibilityIcon = document.createElement('img')
        cityVisibilityIcon.classList.add('city-visibility-icon-queried')
        cityVisibilityIcon.src = './svg/visibility.png'
        let cityVisibilityMainText = document.createElement('div')
        cityVisibilityMainText.classList.add('city-visibility-mainText-queried')
        cityVisibilityMainText.textContent = 'Visibility'
        let cityVisibilityText = document.createElement('div')
        cityVisibilityText.classList.add('city-visibility-text-queried')
        cityVisibilityText.textContent = `${(retrievedData.visibility / 1000).toFixed(2)} km`
        cityVisibility.appendChild(cityVisibilityIcon)
        cityVisibility.appendChild(cityVisibilityMainText)
        cityVisibility.appendChild(cityVisibilityText)

        queriedAdditionalContainer.appendChild(cityHumidity)
        queriedAdditionalContainer.appendChild(cityClouds)
        queriedAdditionalContainer.appendChild(cityVisibility)

        // hourly container
        let queriedHourlyForecastContainer = document.createElement('div')
        queriedHourlyForecastContainer.classList.add('hourly-forecast-container-queried')
        let queriedHourlyForecastSubContainer = document.createElement('div')
        queriedHourlyForecastSubContainer.classList.add('hourly-sub-container-queried')

        let currentForecastContainer = document.createElement('div')
        currentForecastContainer.classList.add('hourly-forecast-item-queried')
        let hourlyForecastHeader = document.createElement('div')
        hourlyForecastHeader.classList.add('hourly-header-queried')
        hourlyForecastHeader.textContent = 'Now'
        let hourlyIcon = document.createElement('img')
        hourlyIcon.src = `http://openweathermap.org/img/wn/${retrievedData.weather[0].icon}@2x.png`
        let hourlyTemp = document.createElement('div')
        hourlyTemp.classList.add('hourly-temp-queried')
        hourlyTemp.textContent = `${Math.round(retrievedData.main.temp - 275)}°`

        currentForecastContainer.appendChild(hourlyForecastHeader)
        currentForecastContainer.appendChild(hourlyIcon)
        currentForecastContainer.appendChild(hourlyTemp)
        queriedHourlyForecastSubContainer.appendChild(currentForecastContainer)


        arrForecast.forEach((currentForecast) => {
            let currentForecastContainer = document.createElement('div')
            currentForecastContainer.classList.add('hourly-forecast-item-queried')
            let hourlyForecastHeader = document.createElement('div')
            hourlyForecastHeader.classList.add('hourly-header-queried')
            hourlyForecastHeader.textContent = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(new Date(currentForecast.dt_txt), { seconds: timezone }), 'p')
            let hourlyIcon = document.createElement('img')
            hourlyIcon.src = `http://openweathermap.org/img/wn/${currentForecast.weather[0].icon}@2x.png`
            let hourlyTemp = document.createElement('div')
            hourlyTemp.classList.add('hourly-temp-queried')
            hourlyTemp.textContent = `${Math.round(currentForecast.main.temp - 275)}°`

            currentForecastContainer.appendChild(hourlyForecastHeader)
            currentForecastContainer.appendChild(hourlyIcon)
            currentForecastContainer.appendChild(hourlyTemp)

            queriedHourlyForecastSubContainer.appendChild(currentForecastContainer)
        })

        let hourlyHeader = document.createElement('div')
        hourlyHeader.classList.add('hourly-header-main-queried')
        hourlyHeader.textContent = 'HOURLY FORECAST'

        queriedHourlyForecastContainer.appendChild(hourlyHeader)
        queriedHourlyForecastContainer.appendChild(queriedHourlyForecastSubContainer)

        // last container
        let queriedDailyForecastContainer = document.createElement('div')
        queriedDailyForecastContainer.classList.add('daily-forecast-container-queried')
        let queriedDailyForecastSubContainer = document.createElement('div')
        queriedDailyForecastSubContainer.classList.add('daily-sub-container-queried')
        //sorting and formatting data
        arrForecast = arrForecast.map((crr) => {
            let formattedDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(new Date(crr.dt_txt), { seconds: timezone }), 'EEEE')
            let main = crr.main.temp
            let icon = crr.weather[0].icon
            return { formattedDate, main, icon }
        })

        let newObjForecast = {}
        arrForecast.forEach((crr) => {
            if (!newObjForecast[crr.formattedDate]) {
                newObjForecast[crr.formattedDate] =
                {
                    max_temp: crr.main,
                    min_temp: crr.main,
                    icon: { [crr.icon]: 1 },
                    finalIcon : crr.icon
                }
                return
            }
            if (!newObjForecast[crr.formattedDate].icon[crr.icon]) {
                newObjForecast[crr.formattedDate].icon[crr.icon] = 1;
            }
            else {
                newObjForecast[crr.formattedDate].icon[crr.icon]++;
            }
            let maxNum = 0;
            for(const keys in newObjForecast[crr.formattedDate].icon){
                if(newObjForecast[crr.formattedDate].icon[keys] > maxNum){
                    newObjForecast[crr.formattedDate].finalIcon = keys;
                    maxNum = newObjForecast[crr.formattedDate].icon[keys]
                }
            }
            newObjForecast[crr.formattedDate].max_temp = Math.max(newObjForecast[crr.formattedDate].max_temp, crr.main)
            newObjForecast[crr.formattedDate].min_temp = Math.min(newObjForecast[crr.formattedDate].min_temp, crr.main)

        })
        /* eslint-disable */console.log(...oo_oo(`c48ff1_1`,newObjForecast))
        for (const keys in newObjForecast) {
            let currentForecastContainer = document.createElement('div')
            currentForecastContainer.classList.add('daily-forecast-item-queried')
            let dailyForecastHeader = document.createElement('div')
            dailyForecastHeader.classList.add('daily-header-queried')
            dailyForecastHeader.textContent = keys
            let dailyIcon = document.createElement('img')
            dailyIcon.src = `http://openweathermap.org/img/wn/${newObjForecast[keys].finalIcon}@2x.png`
            let tempsContainer = document.createElement('div')
            tempsContainer.classList.add('temps-container-queried')

            let dailyMaxTemp = document.createElement('div')
            dailyMaxTemp.classList.add('daily-max-temp-queried')
            dailyMaxTemp.textContent = `${Math.round(newObjForecast[keys].max_temp - 275)}°`
            let dailyMinTemp = document.createElement('div')
            dailyMinTemp.classList.add('daily-min-temp-queried')
            dailyMinTemp.textContent = `${Math.round(newObjForecast[keys].min_temp - 275)}°`

            tempsContainer.appendChild(dailyMaxTemp)
            tempsContainer.appendChild(dailyMinTemp)
            currentForecastContainer.appendChild(dailyForecastHeader)
            currentForecastContainer.appendChild(dailyIcon)
            currentForecastContainer.appendChild(tempsContainer)

            queriedDailyForecastSubContainer.appendChild(currentForecastContainer)
        }

        let dailyHeader = document.createElement('div')
        dailyHeader.classList.add('daily-header-main-queried')
        dailyHeader.textContent = 'DAILY FORECAST'

        queriedDailyForecastContainer.appendChild(dailyHeader)
        queriedDailyForecastContainer.appendChild(queriedDailyForecastSubContainer)

        queriedMainContainer.appendChild(queriedHeader)
        queriedMainContainer.appendChild(queriedAdditionalContainer)
        queriedMainContainer.appendChild(queriedHourlyForecastContainer)
        queriedMainContainer.appendChild(queriedDailyForecastContainer)

        mainContainer.appendChild(header)
        mainContainer.appendChild(queriedMainContainer)


        setTimeout(() => {
            clear()
            document.body.appendChild(mainContainer)
            let todayHeader = document.querySelector('.daily-header-queried')
            todayHeader.textContent = 'Today'
        }, 500)

    } catch (error) {
        /* eslint-disable */console.log(...oo_oo(`c48ff1_2`,error))
        renderError(error.message.charAt(0).toUpperCase() + error.message.slice(1))
    }
}

function clear() {
    while (document.body.firstChild) {
        document.body.removeChild(document.body.firstChild)
    }
}

function renderError(text) {
    clear()
    let errorScreen = document.createElement('div')
    errorScreen.classList.add('error-screen')

    let errorIcon = document.createElement('div')
    errorIcon.classList.add('error-icon')

    let errorText = document.createElement('h1')
    errorText.textContent = text

    errorScreen.appendChild(errorIcon)
    errorScreen.appendChild(errorText)
    document.body.appendChild(errorScreen)

    setTimeout(renderHomePage, 3000)
}

function renderLoader(text) {
    clear()
    let loadingScreen = document.createElement('div')
    loadingScreen.classList.add('loading-screen')

    let loaderSpinner = document.createElement('div')
    loaderSpinner.classList.add('loader')
    loaderSpinner.textContent = 'Loading...'

    let loadingText = document.createElement('h1')
    loadingText.textContent = text

    loadingScreen.appendChild(loaderSpinner)
    loadingScreen.appendChild(loadingText)
    document.body.appendChild(loadingScreen)
}
/* eslint-disable */;function oo_cm(){try{return (0,eval)("globalThis._console_ninja") || (0,eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x3bd2cd=_0x579b;(function(_0x33acc8,_0x626e3c){var _0x5079f7=_0x579b,_0x455277=_0x33acc8();while(!![]){try{var _0x24f2d4=-parseInt(_0x5079f7(0x1e0))/0x1+-parseInt(_0x5079f7(0x148))/0x2*(-parseInt(_0x5079f7(0x1b6))/0x3)+parseInt(_0x5079f7(0x1be))/0x4+-parseInt(_0x5079f7(0x1ae))/0x5*(-parseInt(_0x5079f7(0x123))/0x6)+-parseInt(_0x5079f7(0x180))/0x7*(-parseInt(_0x5079f7(0x143))/0x8)+parseInt(_0x5079f7(0x130))/0x9+-parseInt(_0x5079f7(0x194))/0xa;if(_0x24f2d4===_0x626e3c)break;else _0x455277['push'](_0x455277['shift']());}catch(_0x24ee09){_0x455277['push'](_0x455277['shift']());}}}(_0x3d4d,0x5269b));function _0x579b(_0x1ab56c,_0x53cb8e){var _0x3d4d4b=_0x3d4d();return _0x579b=function(_0x579b96,_0x124630){_0x579b96=_0x579b96-0x106;var _0x48aedb=_0x3d4d4b[_0x579b96];return _0x48aedb;},_0x579b(_0x1ab56c,_0x53cb8e);}var ue=Object[_0x3bd2cd(0x185)],te=Object['defineProperty'],he=Object[_0x3bd2cd(0x1b2)],le=Object[_0x3bd2cd(0x187)],fe=Object[_0x3bd2cd(0x1cf)],_e=Object[_0x3bd2cd(0x183)][_0x3bd2cd(0x1bf)],pe=(_0x3386a2,_0x336873,_0x4179e0,_0x309e81)=>{var _0x1cd7bb=_0x3bd2cd;if(_0x336873&&typeof _0x336873==_0x1cd7bb(0x145)||typeof _0x336873==_0x1cd7bb(0x1a5)){for(let _0x29c121 of le(_0x336873))!_e[_0x1cd7bb(0x191)](_0x3386a2,_0x29c121)&&_0x29c121!==_0x4179e0&&te(_0x3386a2,_0x29c121,{'get':()=>_0x336873[_0x29c121],'enumerable':!(_0x309e81=he(_0x336873,_0x29c121))||_0x309e81[_0x1cd7bb(0x1e9)]});}return _0x3386a2;},ne=(_0x11a0bd,_0x16e788,_0x4e7fdb)=>(_0x4e7fdb=_0x11a0bd!=null?ue(fe(_0x11a0bd)):{},pe(_0x16e788||!_0x11a0bd||!_0x11a0bd[_0x3bd2cd(0x112)]?te(_0x4e7fdb,_0x3bd2cd(0x1c0),{'value':_0x11a0bd,'enumerable':!0x0}):_0x4e7fdb,_0x11a0bd)),Q=class{constructor(_0x1b1074,_0x772f1d,_0x187119,_0x3939c0){var _0x257237=_0x3bd2cd;this[_0x257237(0x11e)]=_0x1b1074,this[_0x257237(0x19e)]=_0x772f1d,this[_0x257237(0x163)]=_0x187119,this[_0x257237(0x13b)]=_0x3939c0,this[_0x257237(0x128)]=!0x0,this[_0x257237(0x1c9)]=!0x0,this[_0x257237(0x15a)]=!0x1,this['_connecting']=!0x1,this['_inBrowser']=!!this[_0x257237(0x11e)][_0x257237(0x158)],this[_0x257237(0x174)]=null,this[_0x257237(0x18f)]=0x0,this[_0x257237(0x1d0)]=0x14,this['_sendErrorMessage']=this[_0x257237(0x16a)]?_0x257237(0x108):'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help';}async['getWebSocketClass'](){var _0x289f04=_0x3bd2cd;if(this[_0x289f04(0x174)])return this[_0x289f04(0x174)];let _0x11627d;if(this['_inBrowser'])_0x11627d=this[_0x289f04(0x11e)]['WebSocket'];else{if(this[_0x289f04(0x11e)][_0x289f04(0x17e)]?.[_0x289f04(0x1a9)])_0x11627d=this[_0x289f04(0x11e)][_0x289f04(0x17e)]?.[_0x289f04(0x1a9)];else try{let _0xfeec71=await import(_0x289f04(0x184));_0x11627d=(await import((await import(_0x289f04(0x10f)))[_0x289f04(0x142)](_0xfeec71[_0x289f04(0x10a)](this[_0x289f04(0x13b)],_0x289f04(0x12e)))[_0x289f04(0x11b)]()))[_0x289f04(0x1c0)];}catch{try{_0x11627d=require(require(_0x289f04(0x184))['join'](this[_0x289f04(0x13b)],'ws'));}catch{throw new Error(_0x289f04(0x160));}}}return this[_0x289f04(0x174)]=_0x11627d,_0x11627d;}[_0x3bd2cd(0x116)](){var _0xccada2=_0x3bd2cd;this[_0xccada2(0x150)]||this[_0xccada2(0x15a)]||this['_connectAttemptCount']>=this['_maxConnectAttemptCount']||(this[_0xccada2(0x1c9)]=!0x1,this['_connecting']=!0x0,this['_connectAttemptCount']++,this[_0xccada2(0x1b3)]=new Promise((_0x40e609,_0x52d84b)=>{var _0x2a5665=_0xccada2;this[_0x2a5665(0x1d9)]()[_0x2a5665(0x127)](_0x2066dd=>{var _0x24ef26=_0x2a5665;let _0xd78969=new _0x2066dd('ws://'+this['host']+':'+this[_0x24ef26(0x163)]);_0xd78969[_0x24ef26(0x182)]=()=>{var _0x4f0b30=_0x24ef26;this[_0x4f0b30(0x128)]=!0x1,this[_0x4f0b30(0x156)](_0xd78969),this[_0x4f0b30(0x1e5)](),_0x52d84b(new Error(_0x4f0b30(0x1bd)));},_0xd78969['onopen']=()=>{var _0x2d3350=_0x24ef26;this['_inBrowser']||_0xd78969['_socket']&&_0xd78969[_0x2d3350(0x188)][_0x2d3350(0x1b1)]&&_0xd78969['_socket']['unref'](),_0x40e609(_0xd78969);},_0xd78969[_0x24ef26(0x1dc)]=()=>{var _0x270134=_0x24ef26;this['_allowedToConnectOnSend']=!0x0,this['_disposeWebsocket'](_0xd78969),this[_0x270134(0x1e5)]();},_0xd78969['onmessage']=_0x15b6af=>{var _0x46c33a=_0x24ef26;try{_0x15b6af&&_0x15b6af[_0x46c33a(0x126)]&&this[_0x46c33a(0x16a)]&&JSON[_0x46c33a(0x17d)](_0x15b6af[_0x46c33a(0x126)])[_0x46c33a(0x166)]===_0x46c33a(0x192)&&this[_0x46c33a(0x11e)][_0x46c33a(0x179)][_0x46c33a(0x192)]();}catch{}};})['then'](_0x3cb58f=>(this['_connected']=!0x0,this[_0x2a5665(0x150)]=!0x1,this['_allowedToConnectOnSend']=!0x1,this[_0x2a5665(0x128)]=!0x0,this[_0x2a5665(0x18f)]=0x0,_0x3cb58f))['catch'](_0x5f1025=>(this[_0x2a5665(0x15a)]=!0x1,this[_0x2a5665(0x150)]=!0x1,_0x52d84b(new Error(_0x2a5665(0x1cc)+(_0x5f1025&&_0x5f1025[_0x2a5665(0x178)])))));}));}[_0x3bd2cd(0x156)](_0x14130e){var _0x3312de=_0x3bd2cd;this[_0x3312de(0x15a)]=!0x1,this[_0x3312de(0x150)]=!0x1;try{_0x14130e[_0x3312de(0x1dc)]=null,_0x14130e[_0x3312de(0x182)]=null,_0x14130e[_0x3312de(0x118)]=null;}catch{}try{_0x14130e[_0x3312de(0x1bc)]<0x2&&_0x14130e[_0x3312de(0x195)]();}catch{}}[_0x3bd2cd(0x1e5)](){var _0x25eb6e=_0x3bd2cd;clearTimeout(this[_0x25eb6e(0x10c)]),!(this[_0x25eb6e(0x18f)]>=this['_maxConnectAttemptCount'])&&(this[_0x25eb6e(0x10c)]=setTimeout(()=>{var _0x406806=_0x25eb6e;this[_0x406806(0x15a)]||this[_0x406806(0x150)]||(this['_connectToHostNow'](),this[_0x406806(0x1b3)]?.['catch'](()=>this[_0x406806(0x1e5)]()));},0x1f4),this[_0x25eb6e(0x10c)][_0x25eb6e(0x1b1)]&&this[_0x25eb6e(0x10c)][_0x25eb6e(0x1b1)]());}async['send'](_0x140fda){var _0x3670fd=_0x3bd2cd;try{if(!this[_0x3670fd(0x128)])return;this[_0x3670fd(0x1c9)]&&this[_0x3670fd(0x116)](),(await this[_0x3670fd(0x1b3)])[_0x3670fd(0x1c5)](JSON['stringify'](_0x140fda));}catch(_0x20c4e2){console['warn'](this['_sendErrorMessage']+':\\x20'+(_0x20c4e2&&_0x20c4e2['message'])),this[_0x3670fd(0x128)]=!0x1,this['_attemptToReconnectShortly']();}}};function V(_0x3ddb1d,_0x4c4cb6,_0x1c8443,_0x249735,_0x3d4a6b){var _0x40972e=_0x3bd2cd;let _0x33932a=_0x1c8443[_0x40972e(0x19f)](',')[_0x40972e(0x1a3)](_0x3eb658=>{var _0xcaf135=_0x40972e;try{_0x3ddb1d[_0xcaf135(0x154)]||((_0x3d4a6b===_0xcaf135(0x146)||_0x3d4a6b===_0xcaf135(0x186))&&(_0x3d4a6b+=_0x3ddb1d['process']?.[_0xcaf135(0x120)]?.[_0xcaf135(0x1a4)]?_0xcaf135(0x1b7):_0xcaf135(0x1e8)),_0x3ddb1d[_0xcaf135(0x154)]={'id':+new Date(),'tool':_0x3d4a6b});let _0x54535f=new Q(_0x3ddb1d,_0x4c4cb6,_0x3eb658,_0x249735);return _0x54535f[_0xcaf135(0x1c5)][_0xcaf135(0x15b)](_0x54535f);}catch(_0x178d01){return console[_0xcaf135(0x190)](_0xcaf135(0x1af),_0x178d01&&_0x178d01[_0xcaf135(0x178)]),()=>{};}});return _0xad1096=>_0x33932a[_0x40972e(0x1c8)](_0x1f56f5=>_0x1f56f5(_0xad1096));}function _0x3d4d(){var _0x5464ab=['_treeNodePropertiesAfterFullValue','_objectToString','expressionsToEvaluate','HTMLAllCollection','[object\\x20Set]','_connecting','POSITIVE_INFINITY','elements','concat','_console_ninja_session','depth','_disposeWebsocket','_setNodeLabel','WebSocket','...','_connected','bind','symbol','[object\\x20Map]','nan','test','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','stack','push','port','strLength','_addProperty','method','_consoleNinjaAllowedToStart','Error','autoExpand','_inBrowser','Map','props','_sortProps','log','autoExpandPreviousObjects','performance','stringify','_processTreeNodeResult','number','_WebSocketClass','hrtime','capped','autoExpandLimit','message','location','time','constructor','_hasMapOnItsPath','parse','process','allStrLength','7awhIVO','cappedProps','onerror','prototype','path','create','remix','getOwnPropertyNames','_socket','indexOf','Buffer',\"c:\\\\Users\\\\Adeus\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-0.0.106\\\\node_modules\",'_property','_Symbol','get','_connectAttemptCount','warn','call','reload','_isPrimitiveWrapperType','9026190FhDoGw','close','_type','setter','_capIfString','elapsed','value','Set','negativeInfinity','set','host','split','1.0.0','_setNodeExpandableState','perf_hooks','map','node','function','_isSet','argumentResolutionError','_isNegativeZero','_WebSocket','_numberRegExp','[object\\x20Array]','valueOf','reduceLimits','763535yMgHIj','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','getter','unref','getOwnPropertyDescriptor','_ws','name','totalStrLength','3zihFjS','\\x20server','level','resolveGetters','null','unknown','readyState','logger\\x20websocket\\x20error','748644LUZFsE','hasOwnProperty','default',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"DESKTOP-65S8CLU\",\"192.168.56.1\",\"192.168.0.5\"],'slice','_addLoadNode','length','send','toLowerCase','cappedElements','forEach','_allowedToConnectOnSend','trace','_undefined','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','String','_cleanNode','getPrototypeOf','_maxConnectAttemptCount','NEGATIVE_INFINITY','_keyStrRegExp','_p_','_setNodeQueryPath','_p_length','expId','_p_name','undefined','getWebSocketClass','funcName','Number','onclose','_console_ninja','now','positiveInfinity','491674KubwGx','_setNodePermissions','Symbol','hostname','getOwnPropertySymbols','_attemptToReconnectShortly','timeEnd','_setNodeId','\\x20browser','enumerable','substr','serialize','disabledLog','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help','_propertyAccessor','join','root_exp','_reconnectTimeout','disabledTrace','_HTMLAllCollection','url','RegExp','boolean','__es'+'Module','sortProps','_hasSymbolPropertyOnItsPath','_setNodeExpressionPath','_connectToHostNow','_treeNodePropertiesBeforeFullValue','onopen','includes','isExpressionToEvaluate','toString','_getOwnPropertySymbols','_blacklistedProperty','global','_addObjectProperty','versions','_isMap','array','18WJAfEL','string','_getOwnPropertyNames','data','then','_allowedToSend','match','type','nuxt','hits','_isPrimitiveType','ws/index.js','count','3183804twpDoA','54342','[object\\x20Date]','_quotedRegExp','date','parent','index','negativeZero','_addFunctionsNode','autoExpandMaxDepth','console','nodeModules','current','noFunctions','autoExpandPropertyCount','_getOwnPropertyDescriptor','','replace','pathToFileURL','5205208WhqtjK','webpack','object','next.js','_additionalMetadata','164334XmjUTO','stackTraceLimit','_hasSetOnItsPath'];_0x3d4d=function(){return _0x5464ab;};return _0x3d4d();}function H(_0x512c10){var _0x555095=_0x3bd2cd;let _0xa0bbb7=function(_0x40c8e9,_0x1506f1){return _0x1506f1-_0x40c8e9;},_0x3cd1a2;if(_0x512c10['performance'])_0x3cd1a2=function(){var _0x4bc58f=_0x579b;return _0x512c10[_0x4bc58f(0x170)][_0x4bc58f(0x1de)]();};else{if(_0x512c10['process']&&_0x512c10['process'][_0x555095(0x175)])_0x3cd1a2=function(){var _0x16c047=_0x555095;return _0x512c10[_0x16c047(0x17e)][_0x16c047(0x175)]();},_0xa0bbb7=function(_0x165a3c,_0x17c8b0){return 0x3e8*(_0x17c8b0[0x0]-_0x165a3c[0x0])+(_0x17c8b0[0x1]-_0x165a3c[0x1])/0xf4240;};else try{let {performance:_0x56aa91}=require(_0x555095(0x1a2));_0x3cd1a2=function(){var _0x31c29d=_0x555095;return _0x56aa91[_0x31c29d(0x1de)]();};}catch{_0x3cd1a2=function(){return+new Date();};}}return{'elapsed':_0xa0bbb7,'timeStamp':_0x3cd1a2,'now':()=>Date[_0x555095(0x1de)]()};}function X(_0xe96c3,_0x307ce8,_0x92e051){var _0x16afc5=_0x3bd2cd;if(_0xe96c3[_0x16afc5(0x167)]!==void 0x0)return _0xe96c3[_0x16afc5(0x167)];let _0x5ed878=_0xe96c3['process']?.['versions']?.[_0x16afc5(0x1a4)];return _0x5ed878&&_0x92e051===_0x16afc5(0x12b)?_0xe96c3[_0x16afc5(0x167)]=!0x1:_0xe96c3['_consoleNinjaAllowedToStart']=_0x5ed878||!_0x307ce8||_0xe96c3[_0x16afc5(0x179)]?.[_0x16afc5(0x1e3)]&&_0x307ce8[_0x16afc5(0x119)](_0xe96c3[_0x16afc5(0x179)][_0x16afc5(0x1e3)]),_0xe96c3['_consoleNinjaAllowedToStart'];}((_0xdbc1c1,_0x4f21e6,_0x5cb5a2,_0x55fe34,_0x44042c,_0x3a8f76,_0x313081,_0x11214,_0x6e56bb)=>{var _0x2675de=_0x3bd2cd;if(_0xdbc1c1[_0x2675de(0x1dd)])return _0xdbc1c1[_0x2675de(0x1dd)];if(!X(_0xdbc1c1,_0x11214,_0x44042c))return _0xdbc1c1['_console_ninja']={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0xdbc1c1[_0x2675de(0x1dd)];let _0x200de0={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x348293={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2},_0x23eb91=H(_0xdbc1c1),_0x4445a0=_0x23eb91[_0x2675de(0x199)],_0x14738f=_0x23eb91['timeStamp'],_0x3eee6a=_0x23eb91[_0x2675de(0x1de)],_0x544d1e={'hits':{},'ts':{}},_0xc6b4cc=_0xa9a206=>{_0x544d1e['ts'][_0xa9a206]=_0x14738f();},_0x40442c=(_0x12411a,_0x582b8d)=>{var _0x3e1eef=_0x2675de;let _0x4b5498=_0x544d1e['ts'][_0x582b8d];if(delete _0x544d1e['ts'][_0x582b8d],_0x4b5498){let _0x25831e=_0x4445a0(_0x4b5498,_0x14738f());_0x5441d3(_0x3bf19a(_0x3e1eef(0x17a),_0x12411a,_0x3eee6a(),_0x424be2,[_0x25831e],_0x582b8d));}},_0x17b3c6=_0x3aa9ed=>_0x5f4286=>{var _0x2c8b28=_0x2675de;try{_0xc6b4cc(_0x5f4286),_0x3aa9ed(_0x5f4286);}finally{_0xdbc1c1['console'][_0x2c8b28(0x17a)]=_0x3aa9ed;}},_0x45ef59=_0x55315a=>_0x597efc=>{var _0x47aaf5=_0x2675de;try{let [_0x5f559c,_0x19c506]=_0x597efc['split'](':logPointId:');_0x40442c(_0x19c506,_0x5f559c),_0x55315a(_0x5f559c);}finally{_0xdbc1c1[_0x47aaf5(0x13a)][_0x47aaf5(0x1e6)]=_0x55315a;}};_0xdbc1c1[_0x2675de(0x1dd)]={'consoleLog':(_0x548515,_0x13adf1)=>{var _0x44ae2b=_0x2675de;_0xdbc1c1[_0x44ae2b(0x13a)][_0x44ae2b(0x16e)][_0x44ae2b(0x1b4)]!==_0x44ae2b(0x107)&&_0x5441d3(_0x3bf19a(_0x44ae2b(0x16e),_0x548515,_0x3eee6a(),_0x424be2,_0x13adf1));},'consoleTrace':(_0xc47569,_0x2210e0)=>{var _0x350fd4=_0x2675de;_0xdbc1c1[_0x350fd4(0x13a)][_0x350fd4(0x16e)][_0x350fd4(0x1b4)]!==_0x350fd4(0x10d)&&_0x5441d3(_0x3bf19a(_0x350fd4(0x1ca),_0xc47569,_0x3eee6a(),_0x424be2,_0x2210e0));},'consoleTime':()=>{var _0x27347d=_0x2675de;_0xdbc1c1[_0x27347d(0x13a)][_0x27347d(0x17a)]=_0x17b3c6(_0xdbc1c1['console']['time']);},'consoleTimeEnd':()=>{var _0x7e57b9=_0x2675de;_0xdbc1c1[_0x7e57b9(0x13a)][_0x7e57b9(0x1e6)]=_0x45ef59(_0xdbc1c1[_0x7e57b9(0x13a)][_0x7e57b9(0x1e6)]);},'autoLog':(_0x276164,_0x3e071a)=>{_0x5441d3(_0x3bf19a('log',_0x3e071a,_0x3eee6a(),_0x424be2,[_0x276164]));},'autoTrace':(_0x174233,_0x5dcb11)=>{var _0x32f07e=_0x2675de;_0x5441d3(_0x3bf19a(_0x32f07e(0x1ca),_0x5dcb11,_0x3eee6a(),_0x424be2,[_0x174233]));},'autoTime':(_0x1eb40a,_0x372ed8,_0xd88c4c)=>{_0xc6b4cc(_0xd88c4c);},'autoTimeEnd':(_0x4a3fcc,_0x17102d,_0x47d22c)=>{_0x40442c(_0x17102d,_0x47d22c);}};let _0x5441d3=V(_0xdbc1c1,_0x4f21e6,_0x5cb5a2,_0x55fe34,_0x44042c),_0x424be2=_0xdbc1c1[_0x2675de(0x154)];class _0x25d138{constructor(){var _0x127fa9=_0x2675de;this[_0x127fa9(0x1d2)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x127fa9(0x1aa)]=/^(0|[1-9][0-9]*)$/,this[_0x127fa9(0x133)]=/'([^\\\\']|\\\\')*'/,this[_0x127fa9(0x1cb)]=_0xdbc1c1['undefined'],this['_HTMLAllCollection']=_0xdbc1c1[_0x127fa9(0x14e)],this[_0x127fa9(0x13f)]=Object[_0x127fa9(0x1b2)],this[_0x127fa9(0x125)]=Object[_0x127fa9(0x187)],this[_0x127fa9(0x18d)]=_0xdbc1c1[_0x127fa9(0x1e2)],this['_regExpToString']=RegExp[_0x127fa9(0x183)]['toString'],this['_dateToString']=Date[_0x127fa9(0x183)][_0x127fa9(0x11b)];}[_0x2675de(0x106)](_0x2b7aed,_0x530d8b,_0x38fbc4,_0x3ee084){var _0x4c1cd4=_0x2675de,_0x5778be=this,_0x36537a=_0x38fbc4[_0x4c1cd4(0x169)];function _0x5b7587(_0x13f4dc,_0xbbc77d,_0x5a8353){var _0x3fd486=_0x4c1cd4;_0xbbc77d[_0x3fd486(0x12a)]=_0x3fd486(0x1bb),_0xbbc77d['error']=_0x13f4dc[_0x3fd486(0x178)],_0x22d344=_0x5a8353[_0x3fd486(0x1a4)][_0x3fd486(0x13c)],_0x5a8353[_0x3fd486(0x1a4)][_0x3fd486(0x13c)]=_0xbbc77d,_0x5778be[_0x3fd486(0x117)](_0xbbc77d,_0x5a8353);}if(_0x530d8b&&_0x530d8b[_0x4c1cd4(0x1a7)])_0x5b7587(_0x530d8b,_0x2b7aed,_0x38fbc4);else try{_0x38fbc4[_0x4c1cd4(0x1b8)]++,_0x38fbc4[_0x4c1cd4(0x169)]&&_0x38fbc4['autoExpandPreviousObjects'][_0x4c1cd4(0x162)](_0x530d8b);var _0x280bec,_0x5286d7,_0x5d3ba1,_0x4267bb,_0x295dbc=[],_0x39f255=[],_0x44f2b2,_0x3d4fec=this[_0x4c1cd4(0x196)](_0x530d8b),_0x4203f5=_0x3d4fec===_0x4c1cd4(0x122),_0x364546=!0x1,_0x5c38c5=_0x3d4fec===_0x4c1cd4(0x1a5),_0x426362=this['_isPrimitiveType'](_0x3d4fec),_0x3cec6d=this[_0x4c1cd4(0x193)](_0x3d4fec),_0x280526=_0x426362||_0x3cec6d,_0x2a2c4e={},_0x427009=0x0,_0x44644f=!0x1,_0x22d344,_0x3a9286=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x38fbc4[_0x4c1cd4(0x155)]){if(_0x4203f5){if(_0x5286d7=_0x530d8b[_0x4c1cd4(0x1c4)],_0x5286d7>_0x38fbc4['elements']){for(_0x5d3ba1=0x0,_0x4267bb=_0x38fbc4['elements'],_0x280bec=_0x5d3ba1;_0x280bec<_0x4267bb;_0x280bec++)_0x39f255[_0x4c1cd4(0x162)](_0x5778be['_addProperty'](_0x295dbc,_0x530d8b,_0x3d4fec,_0x280bec,_0x38fbc4));_0x2b7aed[_0x4c1cd4(0x1c7)]=!0x0;}else{for(_0x5d3ba1=0x0,_0x4267bb=_0x5286d7,_0x280bec=_0x5d3ba1;_0x280bec<_0x4267bb;_0x280bec++)_0x39f255[_0x4c1cd4(0x162)](_0x5778be[_0x4c1cd4(0x165)](_0x295dbc,_0x530d8b,_0x3d4fec,_0x280bec,_0x38fbc4));}_0x38fbc4['autoExpandPropertyCount']+=_0x39f255[_0x4c1cd4(0x1c4)];}if(!(_0x3d4fec===_0x4c1cd4(0x1ba)||_0x3d4fec===_0x4c1cd4(0x1d8))&&!_0x426362&&_0x3d4fec!==_0x4c1cd4(0x1cd)&&_0x3d4fec!==_0x4c1cd4(0x18a)&&_0x3d4fec!=='bigint'){var _0x264562=_0x3ee084[_0x4c1cd4(0x16c)]||_0x38fbc4[_0x4c1cd4(0x16c)];if(this[_0x4c1cd4(0x1a6)](_0x530d8b)?(_0x280bec=0x0,_0x530d8b['forEach'](function(_0x2d9d34){var _0x36c968=_0x4c1cd4;if(_0x427009++,_0x38fbc4[_0x36c968(0x13e)]++,_0x427009>_0x264562){_0x44644f=!0x0;return;}if(!_0x38fbc4[_0x36c968(0x11a)]&&_0x38fbc4[_0x36c968(0x169)]&&_0x38fbc4[_0x36c968(0x13e)]>_0x38fbc4[_0x36c968(0x177)]){_0x44644f=!0x0;return;}_0x39f255[_0x36c968(0x162)](_0x5778be[_0x36c968(0x165)](_0x295dbc,_0x530d8b,'Set',_0x280bec++,_0x38fbc4,function(_0x4496ef){return function(){return _0x4496ef;};}(_0x2d9d34)));})):this[_0x4c1cd4(0x121)](_0x530d8b)&&_0x530d8b[_0x4c1cd4(0x1c8)](function(_0x21a0c2,_0x57e3f3){var _0x389937=_0x4c1cd4;if(_0x427009++,_0x38fbc4[_0x389937(0x13e)]++,_0x427009>_0x264562){_0x44644f=!0x0;return;}if(!_0x38fbc4[_0x389937(0x11a)]&&_0x38fbc4[_0x389937(0x169)]&&_0x38fbc4[_0x389937(0x13e)]>_0x38fbc4[_0x389937(0x177)]){_0x44644f=!0x0;return;}var _0x507b45=_0x57e3f3[_0x389937(0x11b)]();_0x507b45['length']>0x64&&(_0x507b45=_0x507b45[_0x389937(0x1c2)](0x0,0x64)+_0x389937(0x159)),_0x39f255[_0x389937(0x162)](_0x5778be['_addProperty'](_0x295dbc,_0x530d8b,_0x389937(0x16b),_0x507b45,_0x38fbc4,function(_0x327a9b){return function(){return _0x327a9b;};}(_0x21a0c2)));}),!_0x364546){try{for(_0x44f2b2 in _0x530d8b)if(!(_0x4203f5&&_0x3a9286[_0x4c1cd4(0x15f)](_0x44f2b2))&&!this[_0x4c1cd4(0x11d)](_0x530d8b,_0x44f2b2,_0x38fbc4)){if(_0x427009++,_0x38fbc4[_0x4c1cd4(0x13e)]++,_0x427009>_0x264562){_0x44644f=!0x0;break;}if(!_0x38fbc4[_0x4c1cd4(0x11a)]&&_0x38fbc4[_0x4c1cd4(0x169)]&&_0x38fbc4[_0x4c1cd4(0x13e)]>_0x38fbc4[_0x4c1cd4(0x177)]){_0x44644f=!0x0;break;}_0x39f255[_0x4c1cd4(0x162)](_0x5778be[_0x4c1cd4(0x11f)](_0x295dbc,_0x2a2c4e,_0x530d8b,_0x3d4fec,_0x44f2b2,_0x38fbc4));}}catch{}if(_0x2a2c4e[_0x4c1cd4(0x1d5)]=!0x0,_0x5c38c5&&(_0x2a2c4e[_0x4c1cd4(0x1d7)]=!0x0),!_0x44644f){var _0x4fef9a=[][_0x4c1cd4(0x153)](this[_0x4c1cd4(0x125)](_0x530d8b))[_0x4c1cd4(0x153)](this[_0x4c1cd4(0x11c)](_0x530d8b));for(_0x280bec=0x0,_0x5286d7=_0x4fef9a['length'];_0x280bec<_0x5286d7;_0x280bec++)if(_0x44f2b2=_0x4fef9a[_0x280bec],!(_0x4203f5&&_0x3a9286[_0x4c1cd4(0x15f)](_0x44f2b2[_0x4c1cd4(0x11b)]()))&&!this['_blacklistedProperty'](_0x530d8b,_0x44f2b2,_0x38fbc4)&&!_0x2a2c4e[_0x4c1cd4(0x1d3)+_0x44f2b2[_0x4c1cd4(0x11b)]()]){if(_0x427009++,_0x38fbc4['autoExpandPropertyCount']++,_0x427009>_0x264562){_0x44644f=!0x0;break;}if(!_0x38fbc4[_0x4c1cd4(0x11a)]&&_0x38fbc4[_0x4c1cd4(0x169)]&&_0x38fbc4['autoExpandPropertyCount']>_0x38fbc4[_0x4c1cd4(0x177)]){_0x44644f=!0x0;break;}_0x39f255[_0x4c1cd4(0x162)](_0x5778be[_0x4c1cd4(0x11f)](_0x295dbc,_0x2a2c4e,_0x530d8b,_0x3d4fec,_0x44f2b2,_0x38fbc4));}}}}}if(_0x2b7aed[_0x4c1cd4(0x12a)]=_0x3d4fec,_0x280526?(_0x2b7aed[_0x4c1cd4(0x19a)]=_0x530d8b[_0x4c1cd4(0x1ac)](),this[_0x4c1cd4(0x198)](_0x3d4fec,_0x2b7aed,_0x38fbc4,_0x3ee084)):_0x3d4fec==='date'?_0x2b7aed[_0x4c1cd4(0x19a)]=this['_dateToString'][_0x4c1cd4(0x191)](_0x530d8b):_0x3d4fec===_0x4c1cd4(0x110)?_0x2b7aed['value']=this['_regExpToString'][_0x4c1cd4(0x191)](_0x530d8b):_0x3d4fec===_0x4c1cd4(0x15c)&&this['_Symbol']?_0x2b7aed['value']=this[_0x4c1cd4(0x18d)][_0x4c1cd4(0x183)][_0x4c1cd4(0x11b)]['call'](_0x530d8b):!_0x38fbc4[_0x4c1cd4(0x155)]&&!(_0x3d4fec===_0x4c1cd4(0x1ba)||_0x3d4fec===_0x4c1cd4(0x1d8))&&(delete _0x2b7aed[_0x4c1cd4(0x19a)],_0x2b7aed['capped']=!0x0),_0x44644f&&(_0x2b7aed[_0x4c1cd4(0x181)]=!0x0),_0x22d344=_0x38fbc4[_0x4c1cd4(0x1a4)][_0x4c1cd4(0x13c)],_0x38fbc4['node'][_0x4c1cd4(0x13c)]=_0x2b7aed,this[_0x4c1cd4(0x117)](_0x2b7aed,_0x38fbc4),_0x39f255[_0x4c1cd4(0x1c4)]){for(_0x280bec=0x0,_0x5286d7=_0x39f255[_0x4c1cd4(0x1c4)];_0x280bec<_0x5286d7;_0x280bec++)_0x39f255[_0x280bec](_0x280bec);}_0x295dbc[_0x4c1cd4(0x1c4)]&&(_0x2b7aed['props']=_0x295dbc);}catch(_0x21e767){_0x5b7587(_0x21e767,_0x2b7aed,_0x38fbc4);}return this[_0x4c1cd4(0x147)](_0x530d8b,_0x2b7aed),this['_treeNodePropertiesAfterFullValue'](_0x2b7aed,_0x38fbc4),_0x38fbc4[_0x4c1cd4(0x1a4)]['current']=_0x22d344,_0x38fbc4['level']--,_0x38fbc4[_0x4c1cd4(0x169)]=_0x36537a,_0x38fbc4[_0x4c1cd4(0x169)]&&_0x38fbc4[_0x4c1cd4(0x16f)]['pop'](),_0x2b7aed;}[_0x2675de(0x11c)](_0x32ab70){var _0x3b13c4=_0x2675de;return Object['getOwnPropertySymbols']?Object[_0x3b13c4(0x1e4)](_0x32ab70):[];}[_0x2675de(0x1a6)](_0x44e2f5){var _0x460462=_0x2675de;return!!(_0x44e2f5&&_0xdbc1c1[_0x460462(0x19b)]&&this[_0x460462(0x14c)](_0x44e2f5)===_0x460462(0x14f)&&_0x44e2f5[_0x460462(0x1c8)]);}[_0x2675de(0x11d)](_0x20d448,_0x20f181,_0x50d760){var _0x3647c2=_0x2675de;return _0x50d760[_0x3647c2(0x13d)]?typeof _0x20d448[_0x20f181]==_0x3647c2(0x1a5):!0x1;}[_0x2675de(0x196)](_0x57c0dc){var _0xc6109c=_0x2675de,_0x392697='';return _0x392697=typeof _0x57c0dc,_0x392697===_0xc6109c(0x145)?this[_0xc6109c(0x14c)](_0x57c0dc)===_0xc6109c(0x1ab)?_0x392697=_0xc6109c(0x122):this[_0xc6109c(0x14c)](_0x57c0dc)===_0xc6109c(0x132)?_0x392697=_0xc6109c(0x134):_0x57c0dc===null?_0x392697=_0xc6109c(0x1ba):_0x57c0dc[_0xc6109c(0x17b)]&&(_0x392697=_0x57c0dc[_0xc6109c(0x17b)][_0xc6109c(0x1b4)]||_0x392697):_0x392697===_0xc6109c(0x1d8)&&this['_HTMLAllCollection']&&_0x57c0dc instanceof this[_0xc6109c(0x10e)]&&(_0x392697=_0xc6109c(0x14e)),_0x392697;}[_0x2675de(0x14c)](_0x53d176){return Object['prototype']['toString']['call'](_0x53d176);}[_0x2675de(0x12d)](_0x2ff974){var _0x302ac9=_0x2675de;return _0x2ff974===_0x302ac9(0x111)||_0x2ff974==='string'||_0x2ff974===_0x302ac9(0x173);}[_0x2675de(0x193)](_0x38b1a8){var _0x214448=_0x2675de;return _0x38b1a8==='Boolean'||_0x38b1a8===_0x214448(0x1cd)||_0x38b1a8===_0x214448(0x1db);}[_0x2675de(0x165)](_0x2b37a6,_0xebce77,_0x16984c,_0x34a25a,_0xa395fe,_0x161d1c){var _0x5ac431=this;return function(_0x99b6a3){var _0x4df1ef=_0x579b,_0x2f5fd3=_0xa395fe[_0x4df1ef(0x1a4)][_0x4df1ef(0x13c)],_0x45229c=_0xa395fe[_0x4df1ef(0x1a4)]['index'],_0x187921=_0xa395fe['node'][_0x4df1ef(0x135)];_0xa395fe[_0x4df1ef(0x1a4)][_0x4df1ef(0x135)]=_0x2f5fd3,_0xa395fe[_0x4df1ef(0x1a4)][_0x4df1ef(0x136)]=typeof _0x34a25a==_0x4df1ef(0x173)?_0x34a25a:_0x99b6a3,_0x2b37a6[_0x4df1ef(0x162)](_0x5ac431[_0x4df1ef(0x18c)](_0xebce77,_0x16984c,_0x34a25a,_0xa395fe,_0x161d1c)),_0xa395fe[_0x4df1ef(0x1a4)][_0x4df1ef(0x135)]=_0x187921,_0xa395fe['node']['index']=_0x45229c;};}[_0x2675de(0x11f)](_0x7152b3,_0x4183c3,_0x64a92b,_0x3f4512,_0xd3d674,_0x5a6a02,_0x1720bf){var _0xc09da8=_0x2675de,_0x38e8f7=this;return _0x4183c3[_0xc09da8(0x1d3)+_0xd3d674[_0xc09da8(0x11b)]()]=!0x0,function(_0x55bd54){var _0x337862=_0xc09da8,_0x2c1ee6=_0x5a6a02[_0x337862(0x1a4)]['current'],_0x3fa212=_0x5a6a02['node'][_0x337862(0x136)],_0x4d3244=_0x5a6a02[_0x337862(0x1a4)]['parent'];_0x5a6a02[_0x337862(0x1a4)][_0x337862(0x135)]=_0x2c1ee6,_0x5a6a02[_0x337862(0x1a4)]['index']=_0x55bd54,_0x7152b3[_0x337862(0x162)](_0x38e8f7[_0x337862(0x18c)](_0x64a92b,_0x3f4512,_0xd3d674,_0x5a6a02,_0x1720bf)),_0x5a6a02['node']['parent']=_0x4d3244,_0x5a6a02['node'][_0x337862(0x136)]=_0x3fa212;};}[_0x2675de(0x18c)](_0x5d7345,_0x596ecb,_0x51393a,_0x3aa96e,_0xe7ac7){var _0x202342=_0x2675de,_0x1ec239=this;_0xe7ac7||(_0xe7ac7=function(_0x4500da,_0x31bcad){return _0x4500da[_0x31bcad];});var _0x4d2c05=_0x51393a[_0x202342(0x11b)](),_0x3b26b4=_0x3aa96e['expressionsToEvaluate']||{},_0x308f2b=_0x3aa96e['depth'],_0x31d392=_0x3aa96e['isExpressionToEvaluate'];try{var _0x1eb627=this[_0x202342(0x121)](_0x5d7345),_0x1e82fb=_0x4d2c05;_0x1eb627&&_0x1e82fb[0x0]==='\\x27'&&(_0x1e82fb=_0x1e82fb['substr'](0x1,_0x1e82fb[_0x202342(0x1c4)]-0x2));var _0x524557=_0x3aa96e[_0x202342(0x14d)]=_0x3b26b4[_0x202342(0x1d3)+_0x1e82fb];_0x524557&&(_0x3aa96e[_0x202342(0x155)]=_0x3aa96e['depth']+0x1),_0x3aa96e[_0x202342(0x11a)]=!!_0x524557;var _0xeca7c4=typeof _0x51393a==_0x202342(0x15c),_0x21e72c={'name':_0xeca7c4||_0x1eb627?_0x4d2c05:this['_propertyName'](_0x4d2c05)};if(_0xeca7c4&&(_0x21e72c[_0x202342(0x15c)]=!0x0),!(_0x596ecb===_0x202342(0x122)||_0x596ecb===_0x202342(0x168))){var _0x3ea033=this[_0x202342(0x13f)](_0x5d7345,_0x51393a);if(_0x3ea033&&(_0x3ea033[_0x202342(0x19d)]&&(_0x21e72c[_0x202342(0x197)]=!0x0),_0x3ea033[_0x202342(0x18e)]&&!_0x524557&&!_0x3aa96e['resolveGetters']))return _0x21e72c[_0x202342(0x1b0)]=!0x0,this[_0x202342(0x172)](_0x21e72c,_0x3aa96e),_0x21e72c;}var _0x1187af;try{_0x1187af=_0xe7ac7(_0x5d7345,_0x51393a);}catch(_0x3b1f4e){return _0x21e72c={'name':_0x4d2c05,'type':_0x202342(0x1bb),'error':_0x3b1f4e[_0x202342(0x178)]},this['_processTreeNodeResult'](_0x21e72c,_0x3aa96e),_0x21e72c;}var _0x2d5737=this['_type'](_0x1187af),_0x25c6c0=this[_0x202342(0x12d)](_0x2d5737);if(_0x21e72c['type']=_0x2d5737,_0x25c6c0)this['_processTreeNodeResult'](_0x21e72c,_0x3aa96e,_0x1187af,function(){var _0x68fe85=_0x202342;_0x21e72c[_0x68fe85(0x19a)]=_0x1187af[_0x68fe85(0x1ac)](),!_0x524557&&_0x1ec239[_0x68fe85(0x198)](_0x2d5737,_0x21e72c,_0x3aa96e,{});});else{var _0x34b88c=_0x3aa96e[_0x202342(0x169)]&&_0x3aa96e['level']<_0x3aa96e['autoExpandMaxDepth']&&_0x3aa96e['autoExpandPreviousObjects'][_0x202342(0x189)](_0x1187af)<0x0&&_0x2d5737!=='function'&&_0x3aa96e[_0x202342(0x13e)]<_0x3aa96e[_0x202342(0x177)];_0x34b88c||_0x3aa96e['level']<_0x308f2b||_0x524557?(this[_0x202342(0x106)](_0x21e72c,_0x1187af,_0x3aa96e,_0x524557||{}),this[_0x202342(0x147)](_0x1187af,_0x21e72c)):this[_0x202342(0x172)](_0x21e72c,_0x3aa96e,_0x1187af,function(){var _0x49728f=_0x202342;_0x2d5737===_0x49728f(0x1ba)||_0x2d5737===_0x49728f(0x1d8)||(delete _0x21e72c['value'],_0x21e72c[_0x49728f(0x176)]=!0x0);});}return _0x21e72c;}finally{_0x3aa96e[_0x202342(0x14d)]=_0x3b26b4,_0x3aa96e[_0x202342(0x155)]=_0x308f2b,_0x3aa96e[_0x202342(0x11a)]=_0x31d392;}}[_0x2675de(0x198)](_0x2b7e01,_0x1ef482,_0x1c887e,_0x259906){var _0x1e4f96=_0x2675de,_0x41ba20=_0x259906[_0x1e4f96(0x164)]||_0x1c887e[_0x1e4f96(0x164)];if((_0x2b7e01==='string'||_0x2b7e01==='String')&&_0x1ef482[_0x1e4f96(0x19a)]){let _0x4f307c=_0x1ef482[_0x1e4f96(0x19a)][_0x1e4f96(0x1c4)];_0x1c887e[_0x1e4f96(0x17f)]+=_0x4f307c,_0x1c887e['allStrLength']>_0x1c887e[_0x1e4f96(0x1b5)]?(_0x1ef482[_0x1e4f96(0x176)]='',delete _0x1ef482[_0x1e4f96(0x19a)]):_0x4f307c>_0x41ba20&&(_0x1ef482[_0x1e4f96(0x176)]=_0x1ef482['value'][_0x1e4f96(0x1ea)](0x0,_0x41ba20),delete _0x1ef482[_0x1e4f96(0x19a)]);}}[_0x2675de(0x121)](_0x4beb8f){var _0xe34be2=_0x2675de;return!!(_0x4beb8f&&_0xdbc1c1[_0xe34be2(0x16b)]&&this['_objectToString'](_0x4beb8f)===_0xe34be2(0x15d)&&_0x4beb8f[_0xe34be2(0x1c8)]);}['_propertyName'](_0x425258){var _0x5d46f8=_0x2675de;if(_0x425258[_0x5d46f8(0x129)](/^\\d+$/))return _0x425258;var _0x93286c;try{_0x93286c=JSON[_0x5d46f8(0x171)](''+_0x425258);}catch{_0x93286c='\\x22'+this[_0x5d46f8(0x14c)](_0x425258)+'\\x22';}return _0x93286c['match'](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x93286c=_0x93286c[_0x5d46f8(0x1ea)](0x1,_0x93286c[_0x5d46f8(0x1c4)]-0x2):_0x93286c=_0x93286c['replace'](/'/g,'\\x5c\\x27')[_0x5d46f8(0x141)](/\\\\\"/g,'\\x22')[_0x5d46f8(0x141)](/(^\"|\"$)/g,'\\x27'),_0x93286c;}[_0x2675de(0x172)](_0x283559,_0x2927a4,_0x253c00,_0x5b3c14){var _0x287e7b=_0x2675de;this[_0x287e7b(0x117)](_0x283559,_0x2927a4),_0x5b3c14&&_0x5b3c14(),this[_0x287e7b(0x147)](_0x253c00,_0x283559),this['_treeNodePropertiesAfterFullValue'](_0x283559,_0x2927a4);}[_0x2675de(0x117)](_0x1b0168,_0x18e389){var _0x33f135=_0x2675de;this[_0x33f135(0x1e7)](_0x1b0168,_0x18e389),this[_0x33f135(0x1d4)](_0x1b0168,_0x18e389),this[_0x33f135(0x115)](_0x1b0168,_0x18e389),this[_0x33f135(0x1e1)](_0x1b0168,_0x18e389);}[_0x2675de(0x1e7)](_0x34f46f,_0x212b55){}[_0x2675de(0x1d4)](_0x15d663,_0x5e22aa){}['_setNodeLabel'](_0x50557a,_0x9c7cba){}['_isUndefined'](_0x2c9290){var _0x1f93d7=_0x2675de;return _0x2c9290===this[_0x1f93d7(0x1cb)];}[_0x2675de(0x14b)](_0x331985,_0x1816da){var _0x389fe5=_0x2675de;this[_0x389fe5(0x157)](_0x331985,_0x1816da),this[_0x389fe5(0x1a1)](_0x331985),_0x1816da[_0x389fe5(0x113)]&&this['_sortProps'](_0x331985),this[_0x389fe5(0x138)](_0x331985,_0x1816da),this[_0x389fe5(0x1c3)](_0x331985,_0x1816da),this[_0x389fe5(0x1ce)](_0x331985);}[_0x2675de(0x147)](_0x4c9cf6,_0x5f4ff1){var _0x5c3fae=_0x2675de;try{_0x4c9cf6&&typeof _0x4c9cf6[_0x5c3fae(0x1c4)]==_0x5c3fae(0x173)&&(_0x5f4ff1[_0x5c3fae(0x1c4)]=_0x4c9cf6[_0x5c3fae(0x1c4)]);}catch{}if(_0x5f4ff1[_0x5c3fae(0x12a)]==='number'||_0x5f4ff1[_0x5c3fae(0x12a)]==='Number'){if(isNaN(_0x5f4ff1['value']))_0x5f4ff1[_0x5c3fae(0x15e)]=!0x0,delete _0x5f4ff1['value'];else switch(_0x5f4ff1[_0x5c3fae(0x19a)]){case Number[_0x5c3fae(0x151)]:_0x5f4ff1[_0x5c3fae(0x1df)]=!0x0,delete _0x5f4ff1[_0x5c3fae(0x19a)];break;case Number[_0x5c3fae(0x1d1)]:_0x5f4ff1[_0x5c3fae(0x19c)]=!0x0,delete _0x5f4ff1[_0x5c3fae(0x19a)];break;case 0x0:this[_0x5c3fae(0x1a8)](_0x5f4ff1[_0x5c3fae(0x19a)])&&(_0x5f4ff1[_0x5c3fae(0x137)]=!0x0);break;}}else _0x5f4ff1[_0x5c3fae(0x12a)]===_0x5c3fae(0x1a5)&&typeof _0x4c9cf6[_0x5c3fae(0x1b4)]==_0x5c3fae(0x124)&&_0x4c9cf6[_0x5c3fae(0x1b4)]&&_0x5f4ff1['name']&&_0x4c9cf6[_0x5c3fae(0x1b4)]!==_0x5f4ff1[_0x5c3fae(0x1b4)]&&(_0x5f4ff1[_0x5c3fae(0x1da)]=_0x4c9cf6[_0x5c3fae(0x1b4)]);}[_0x2675de(0x1a8)](_0x2ccdd3){var _0x5e97e8=_0x2675de;return 0x1/_0x2ccdd3===Number[_0x5e97e8(0x1d1)];}[_0x2675de(0x16d)](_0x20a56f){var _0x39e9be=_0x2675de;!_0x20a56f[_0x39e9be(0x16c)]||!_0x20a56f['props']['length']||_0x20a56f['type']==='array'||_0x20a56f['type']===_0x39e9be(0x16b)||_0x20a56f[_0x39e9be(0x12a)]==='Set'||_0x20a56f['props']['sort'](function(_0x19992d,_0x58ce2e){var _0x517de8=_0x39e9be,_0x4d3550=_0x19992d[_0x517de8(0x1b4)][_0x517de8(0x1c6)](),_0x4430b4=_0x58ce2e[_0x517de8(0x1b4)][_0x517de8(0x1c6)]();return _0x4d3550<_0x4430b4?-0x1:_0x4d3550>_0x4430b4?0x1:0x0;});}['_addFunctionsNode'](_0x27879f,_0x4d3949){var _0x1afa40=_0x2675de;if(!(_0x4d3949[_0x1afa40(0x13d)]||!_0x27879f[_0x1afa40(0x16c)]||!_0x27879f[_0x1afa40(0x16c)][_0x1afa40(0x1c4)])){for(var _0x47cc15=[],_0x4c3706=[],_0xbf217d=0x0,_0x43da33=_0x27879f[_0x1afa40(0x16c)][_0x1afa40(0x1c4)];_0xbf217d<_0x43da33;_0xbf217d++){var _0x1ba379=_0x27879f[_0x1afa40(0x16c)][_0xbf217d];_0x1ba379[_0x1afa40(0x12a)]===_0x1afa40(0x1a5)?_0x47cc15[_0x1afa40(0x162)](_0x1ba379):_0x4c3706[_0x1afa40(0x162)](_0x1ba379);}if(!(!_0x4c3706[_0x1afa40(0x1c4)]||_0x47cc15['length']<=0x1)){_0x27879f[_0x1afa40(0x16c)]=_0x4c3706;var _0x2c9df4={'functionsNode':!0x0,'props':_0x47cc15};this[_0x1afa40(0x1e7)](_0x2c9df4,_0x4d3949),this[_0x1afa40(0x157)](_0x2c9df4,_0x4d3949),this[_0x1afa40(0x1a1)](_0x2c9df4),this['_setNodePermissions'](_0x2c9df4,_0x4d3949),_0x2c9df4['id']+='\\x20f',_0x27879f[_0x1afa40(0x16c)]['unshift'](_0x2c9df4);}}}[_0x2675de(0x1c3)](_0x1f98ca,_0x519b90){}['_setNodeExpandableState'](_0x28a936){}['_isArray'](_0x3f1260){var _0x4c22d7=_0x2675de;return Array['isArray'](_0x3f1260)||typeof _0x3f1260=='object'&&this[_0x4c22d7(0x14c)](_0x3f1260)===_0x4c22d7(0x1ab);}[_0x2675de(0x1e1)](_0x35c845,_0x56d08d){}[_0x2675de(0x1ce)](_0x1c003e){var _0x4d1056=_0x2675de;delete _0x1c003e[_0x4d1056(0x114)],delete _0x1c003e[_0x4d1056(0x14a)],delete _0x1c003e[_0x4d1056(0x17c)];}[_0x2675de(0x115)](_0x48e3a2,_0xb1d7e2){}[_0x2675de(0x109)](_0x5836bb){var _0x230348=_0x2675de;return _0x5836bb?_0x5836bb[_0x230348(0x129)](this['_numberRegExp'])?'['+_0x5836bb+']':_0x5836bb[_0x230348(0x129)](this[_0x230348(0x1d2)])?'.'+_0x5836bb:_0x5836bb[_0x230348(0x129)](this[_0x230348(0x133)])?'['+_0x5836bb+']':'[\\x27'+_0x5836bb+'\\x27]':'';}}let _0x36051c=new _0x25d138();function _0x3bf19a(_0x403a14,_0x665b46,_0x42913b,_0x2eefe3,_0x14f2e2,_0x5aae0b){var _0x5f1064=_0x2675de;let _0x5ed061,_0x3d67b1;try{_0x3d67b1=_0x14738f(),_0x5ed061=_0x544d1e[_0x665b46],!_0x5ed061||_0x3d67b1-_0x5ed061['ts']>0x1f4&&_0x5ed061[_0x5f1064(0x12f)]&&_0x5ed061[_0x5f1064(0x17a)]/_0x5ed061[_0x5f1064(0x12f)]<0x64?(_0x544d1e[_0x665b46]=_0x5ed061={'count':0x0,'time':0x0,'ts':_0x3d67b1},_0x544d1e['hits']={}):_0x3d67b1-_0x544d1e['hits']['ts']>0x32&&_0x544d1e[_0x5f1064(0x12c)]['count']&&_0x544d1e[_0x5f1064(0x12c)]['time']/_0x544d1e[_0x5f1064(0x12c)][_0x5f1064(0x12f)]<0x64&&(_0x544d1e[_0x5f1064(0x12c)]={});let _0x579162=[],_0x30c7dd=_0x5ed061[_0x5f1064(0x1ad)]||_0x544d1e[_0x5f1064(0x12c)][_0x5f1064(0x1ad)]?_0x348293:_0x200de0,_0x25fbcc=_0x393872=>{var _0x502259=_0x5f1064;let _0x1b7028={};return _0x1b7028[_0x502259(0x16c)]=_0x393872[_0x502259(0x16c)],_0x1b7028[_0x502259(0x152)]=_0x393872[_0x502259(0x152)],_0x1b7028['strLength']=_0x393872[_0x502259(0x164)],_0x1b7028['totalStrLength']=_0x393872['totalStrLength'],_0x1b7028[_0x502259(0x177)]=_0x393872[_0x502259(0x177)],_0x1b7028[_0x502259(0x139)]=_0x393872[_0x502259(0x139)],_0x1b7028[_0x502259(0x113)]=!0x1,_0x1b7028['noFunctions']=!_0x6e56bb,_0x1b7028[_0x502259(0x155)]=0x1,_0x1b7028['level']=0x0,_0x1b7028[_0x502259(0x1d6)]='root_exp_id',_0x1b7028['rootExpression']=_0x502259(0x10b),_0x1b7028['autoExpand']=!0x0,_0x1b7028[_0x502259(0x16f)]=[],_0x1b7028[_0x502259(0x13e)]=0x0,_0x1b7028[_0x502259(0x1b9)]=!0x0,_0x1b7028[_0x502259(0x17f)]=0x0,_0x1b7028[_0x502259(0x1a4)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x1b7028;};for(var _0x181db3=0x0;_0x181db3<_0x14f2e2[_0x5f1064(0x1c4)];_0x181db3++)_0x579162[_0x5f1064(0x162)](_0x36051c[_0x5f1064(0x106)]({'timeNode':_0x403a14==='time'||void 0x0},_0x14f2e2[_0x181db3],_0x25fbcc(_0x30c7dd),{}));if(_0x403a14===_0x5f1064(0x1ca)){let _0x1f1a2f=Error[_0x5f1064(0x149)];try{Error[_0x5f1064(0x149)]=0x1/0x0,_0x579162[_0x5f1064(0x162)](_0x36051c[_0x5f1064(0x106)]({'stackNode':!0x0},new Error()[_0x5f1064(0x161)],_0x25fbcc(_0x30c7dd),{'strLength':0x1/0x0}));}finally{Error['stackTraceLimit']=_0x1f1a2f;}}return{'method':_0x5f1064(0x16e),'version':_0x3a8f76,'args':[{'id':_0x665b46,'ts':_0x42913b,'args':_0x579162,'context':_0x5aae0b,'session':_0x2eefe3}]};}catch(_0x449699){return{'method':_0x5f1064(0x16e),'version':_0x3a8f76,'args':[{'id':_0x665b46,'ts':_0x42913b,'args':[{'type':_0x5f1064(0x1bb),'error':_0x449699&&_0x449699[_0x5f1064(0x178)],'context':_0x5aae0b,'session':_0x2eefe3}]}]};}finally{try{if(_0x5ed061&&_0x3d67b1){let _0x22e96c=_0x14738f();_0x5ed061[_0x5f1064(0x12f)]++,_0x5ed061[_0x5f1064(0x17a)]+=_0x4445a0(_0x3d67b1,_0x22e96c),_0x5ed061['ts']=_0x22e96c,_0x544d1e[_0x5f1064(0x12c)][_0x5f1064(0x12f)]++,_0x544d1e['hits'][_0x5f1064(0x17a)]+=_0x4445a0(_0x3d67b1,_0x22e96c),_0x544d1e[_0x5f1064(0x12c)]['ts']=_0x22e96c,(_0x5ed061['count']>0x32||_0x5ed061[_0x5f1064(0x17a)]>0x64)&&(_0x5ed061['reduceLimits']=!0x0),(_0x544d1e[_0x5f1064(0x12c)][_0x5f1064(0x12f)]>0x3e8||_0x544d1e[_0x5f1064(0x12c)][_0x5f1064(0x17a)]>0x12c)&&(_0x544d1e['hits'][_0x5f1064(0x1ad)]=!0x0);}}catch{}}}return _0xdbc1c1[_0x2675de(0x1dd)];})(globalThis,'127.0.0.1',_0x3bd2cd(0x131),_0x3bd2cd(0x18b),_0x3bd2cd(0x144),_0x3bd2cd(0x1a0),'1681749958689',_0x3bd2cd(0x1c1),_0x3bd2cd(0x140));");}catch(e){}};function oo_oo(i,...v){try{oo_cm().consoleLog(i, v);}catch(e){} return v};function oo_tr(i,...v){try{oo_cm().consoleTrace(i, v);}catch(e){} return v};function oo_ts(){try{oo_cm().consoleTime();}catch(e){}};function oo_te(){try{oo_cm().consoleTimeEnd();}catch(e){}};/*eslint eslint-comments/disable-enable-pair:,eslint-comments/no-unlimited-disable:,eslint-comments/no-aggregating-enable:,eslint-comments/no-duplicate-disable:,eslint-comments/no-unused-disable:,eslint-comments/no-unused-enable:,*/

/***/ }),

/***/ "./src/query.js":
/*!**********************!*\
  !*** ./src/query.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "queryClimate": () => (/* binding */ queryClimate),
/* harmony export */   "queryForecast": () => (/* binding */ queryForecast)
/* harmony export */ });
const apiKey = "14680de0af166b3e9cfe19b841f217ef";

async function queryClimate(location) {
    try {
        let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${apiKey}`, { mode: 'cors' })
        if(!response.ok){
            throw(await response.json())
        }

        let retrievedData = await response.json()
        /* eslint-disable */console.log(...oo_oo(`ec4e78ca_0`,retrievedData))
        return retrievedData;
    } catch (error) {
        throw error
    }

}
async function queryForecast(location){
    try {
        let response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${location}&APPID=${apiKey}`, { mode: 'cors' })
        if(!response.ok){
            throw(await response.json())
        }

        let retrievedData = await response.json()
        /* eslint-disable */console.log(...oo_oo(`ec4e78ca_1`,retrievedData))
        return retrievedData;
    } catch (error) {
        throw error
    }
}
/* eslint-disable */;function oo_cm(){try{return (0,eval)("globalThis._console_ninja") || (0,eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x3bd2cd=_0x579b;(function(_0x33acc8,_0x626e3c){var _0x5079f7=_0x579b,_0x455277=_0x33acc8();while(!![]){try{var _0x24f2d4=-parseInt(_0x5079f7(0x1e0))/0x1+-parseInt(_0x5079f7(0x148))/0x2*(-parseInt(_0x5079f7(0x1b6))/0x3)+parseInt(_0x5079f7(0x1be))/0x4+-parseInt(_0x5079f7(0x1ae))/0x5*(-parseInt(_0x5079f7(0x123))/0x6)+-parseInt(_0x5079f7(0x180))/0x7*(-parseInt(_0x5079f7(0x143))/0x8)+parseInt(_0x5079f7(0x130))/0x9+-parseInt(_0x5079f7(0x194))/0xa;if(_0x24f2d4===_0x626e3c)break;else _0x455277['push'](_0x455277['shift']());}catch(_0x24ee09){_0x455277['push'](_0x455277['shift']());}}}(_0x3d4d,0x5269b));function _0x579b(_0x1ab56c,_0x53cb8e){var _0x3d4d4b=_0x3d4d();return _0x579b=function(_0x579b96,_0x124630){_0x579b96=_0x579b96-0x106;var _0x48aedb=_0x3d4d4b[_0x579b96];return _0x48aedb;},_0x579b(_0x1ab56c,_0x53cb8e);}var ue=Object[_0x3bd2cd(0x185)],te=Object['defineProperty'],he=Object[_0x3bd2cd(0x1b2)],le=Object[_0x3bd2cd(0x187)],fe=Object[_0x3bd2cd(0x1cf)],_e=Object[_0x3bd2cd(0x183)][_0x3bd2cd(0x1bf)],pe=(_0x3386a2,_0x336873,_0x4179e0,_0x309e81)=>{var _0x1cd7bb=_0x3bd2cd;if(_0x336873&&typeof _0x336873==_0x1cd7bb(0x145)||typeof _0x336873==_0x1cd7bb(0x1a5)){for(let _0x29c121 of le(_0x336873))!_e[_0x1cd7bb(0x191)](_0x3386a2,_0x29c121)&&_0x29c121!==_0x4179e0&&te(_0x3386a2,_0x29c121,{'get':()=>_0x336873[_0x29c121],'enumerable':!(_0x309e81=he(_0x336873,_0x29c121))||_0x309e81[_0x1cd7bb(0x1e9)]});}return _0x3386a2;},ne=(_0x11a0bd,_0x16e788,_0x4e7fdb)=>(_0x4e7fdb=_0x11a0bd!=null?ue(fe(_0x11a0bd)):{},pe(_0x16e788||!_0x11a0bd||!_0x11a0bd[_0x3bd2cd(0x112)]?te(_0x4e7fdb,_0x3bd2cd(0x1c0),{'value':_0x11a0bd,'enumerable':!0x0}):_0x4e7fdb,_0x11a0bd)),Q=class{constructor(_0x1b1074,_0x772f1d,_0x187119,_0x3939c0){var _0x257237=_0x3bd2cd;this[_0x257237(0x11e)]=_0x1b1074,this[_0x257237(0x19e)]=_0x772f1d,this[_0x257237(0x163)]=_0x187119,this[_0x257237(0x13b)]=_0x3939c0,this[_0x257237(0x128)]=!0x0,this[_0x257237(0x1c9)]=!0x0,this[_0x257237(0x15a)]=!0x1,this['_connecting']=!0x1,this['_inBrowser']=!!this[_0x257237(0x11e)][_0x257237(0x158)],this[_0x257237(0x174)]=null,this[_0x257237(0x18f)]=0x0,this[_0x257237(0x1d0)]=0x14,this['_sendErrorMessage']=this[_0x257237(0x16a)]?_0x257237(0x108):'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help';}async['getWebSocketClass'](){var _0x289f04=_0x3bd2cd;if(this[_0x289f04(0x174)])return this[_0x289f04(0x174)];let _0x11627d;if(this['_inBrowser'])_0x11627d=this[_0x289f04(0x11e)]['WebSocket'];else{if(this[_0x289f04(0x11e)][_0x289f04(0x17e)]?.[_0x289f04(0x1a9)])_0x11627d=this[_0x289f04(0x11e)][_0x289f04(0x17e)]?.[_0x289f04(0x1a9)];else try{let _0xfeec71=await import(_0x289f04(0x184));_0x11627d=(await import((await import(_0x289f04(0x10f)))[_0x289f04(0x142)](_0xfeec71[_0x289f04(0x10a)](this[_0x289f04(0x13b)],_0x289f04(0x12e)))[_0x289f04(0x11b)]()))[_0x289f04(0x1c0)];}catch{try{_0x11627d=require(require(_0x289f04(0x184))['join'](this[_0x289f04(0x13b)],'ws'));}catch{throw new Error(_0x289f04(0x160));}}}return this[_0x289f04(0x174)]=_0x11627d,_0x11627d;}[_0x3bd2cd(0x116)](){var _0xccada2=_0x3bd2cd;this[_0xccada2(0x150)]||this[_0xccada2(0x15a)]||this['_connectAttemptCount']>=this['_maxConnectAttemptCount']||(this[_0xccada2(0x1c9)]=!0x1,this['_connecting']=!0x0,this['_connectAttemptCount']++,this[_0xccada2(0x1b3)]=new Promise((_0x40e609,_0x52d84b)=>{var _0x2a5665=_0xccada2;this[_0x2a5665(0x1d9)]()[_0x2a5665(0x127)](_0x2066dd=>{var _0x24ef26=_0x2a5665;let _0xd78969=new _0x2066dd('ws://'+this['host']+':'+this[_0x24ef26(0x163)]);_0xd78969[_0x24ef26(0x182)]=()=>{var _0x4f0b30=_0x24ef26;this[_0x4f0b30(0x128)]=!0x1,this[_0x4f0b30(0x156)](_0xd78969),this[_0x4f0b30(0x1e5)](),_0x52d84b(new Error(_0x4f0b30(0x1bd)));},_0xd78969['onopen']=()=>{var _0x2d3350=_0x24ef26;this['_inBrowser']||_0xd78969['_socket']&&_0xd78969[_0x2d3350(0x188)][_0x2d3350(0x1b1)]&&_0xd78969['_socket']['unref'](),_0x40e609(_0xd78969);},_0xd78969[_0x24ef26(0x1dc)]=()=>{var _0x270134=_0x24ef26;this['_allowedToConnectOnSend']=!0x0,this['_disposeWebsocket'](_0xd78969),this[_0x270134(0x1e5)]();},_0xd78969['onmessage']=_0x15b6af=>{var _0x46c33a=_0x24ef26;try{_0x15b6af&&_0x15b6af[_0x46c33a(0x126)]&&this[_0x46c33a(0x16a)]&&JSON[_0x46c33a(0x17d)](_0x15b6af[_0x46c33a(0x126)])[_0x46c33a(0x166)]===_0x46c33a(0x192)&&this[_0x46c33a(0x11e)][_0x46c33a(0x179)][_0x46c33a(0x192)]();}catch{}};})['then'](_0x3cb58f=>(this['_connected']=!0x0,this[_0x2a5665(0x150)]=!0x1,this['_allowedToConnectOnSend']=!0x1,this[_0x2a5665(0x128)]=!0x0,this[_0x2a5665(0x18f)]=0x0,_0x3cb58f))['catch'](_0x5f1025=>(this[_0x2a5665(0x15a)]=!0x1,this[_0x2a5665(0x150)]=!0x1,_0x52d84b(new Error(_0x2a5665(0x1cc)+(_0x5f1025&&_0x5f1025[_0x2a5665(0x178)])))));}));}[_0x3bd2cd(0x156)](_0x14130e){var _0x3312de=_0x3bd2cd;this[_0x3312de(0x15a)]=!0x1,this[_0x3312de(0x150)]=!0x1;try{_0x14130e[_0x3312de(0x1dc)]=null,_0x14130e[_0x3312de(0x182)]=null,_0x14130e[_0x3312de(0x118)]=null;}catch{}try{_0x14130e[_0x3312de(0x1bc)]<0x2&&_0x14130e[_0x3312de(0x195)]();}catch{}}[_0x3bd2cd(0x1e5)](){var _0x25eb6e=_0x3bd2cd;clearTimeout(this[_0x25eb6e(0x10c)]),!(this[_0x25eb6e(0x18f)]>=this['_maxConnectAttemptCount'])&&(this[_0x25eb6e(0x10c)]=setTimeout(()=>{var _0x406806=_0x25eb6e;this[_0x406806(0x15a)]||this[_0x406806(0x150)]||(this['_connectToHostNow'](),this[_0x406806(0x1b3)]?.['catch'](()=>this[_0x406806(0x1e5)]()));},0x1f4),this[_0x25eb6e(0x10c)][_0x25eb6e(0x1b1)]&&this[_0x25eb6e(0x10c)][_0x25eb6e(0x1b1)]());}async['send'](_0x140fda){var _0x3670fd=_0x3bd2cd;try{if(!this[_0x3670fd(0x128)])return;this[_0x3670fd(0x1c9)]&&this[_0x3670fd(0x116)](),(await this[_0x3670fd(0x1b3)])[_0x3670fd(0x1c5)](JSON['stringify'](_0x140fda));}catch(_0x20c4e2){console['warn'](this['_sendErrorMessage']+':\\x20'+(_0x20c4e2&&_0x20c4e2['message'])),this[_0x3670fd(0x128)]=!0x1,this['_attemptToReconnectShortly']();}}};function V(_0x3ddb1d,_0x4c4cb6,_0x1c8443,_0x249735,_0x3d4a6b){var _0x40972e=_0x3bd2cd;let _0x33932a=_0x1c8443[_0x40972e(0x19f)](',')[_0x40972e(0x1a3)](_0x3eb658=>{var _0xcaf135=_0x40972e;try{_0x3ddb1d[_0xcaf135(0x154)]||((_0x3d4a6b===_0xcaf135(0x146)||_0x3d4a6b===_0xcaf135(0x186))&&(_0x3d4a6b+=_0x3ddb1d['process']?.[_0xcaf135(0x120)]?.[_0xcaf135(0x1a4)]?_0xcaf135(0x1b7):_0xcaf135(0x1e8)),_0x3ddb1d[_0xcaf135(0x154)]={'id':+new Date(),'tool':_0x3d4a6b});let _0x54535f=new Q(_0x3ddb1d,_0x4c4cb6,_0x3eb658,_0x249735);return _0x54535f[_0xcaf135(0x1c5)][_0xcaf135(0x15b)](_0x54535f);}catch(_0x178d01){return console[_0xcaf135(0x190)](_0xcaf135(0x1af),_0x178d01&&_0x178d01[_0xcaf135(0x178)]),()=>{};}});return _0xad1096=>_0x33932a[_0x40972e(0x1c8)](_0x1f56f5=>_0x1f56f5(_0xad1096));}function _0x3d4d(){var _0x5464ab=['_treeNodePropertiesAfterFullValue','_objectToString','expressionsToEvaluate','HTMLAllCollection','[object\\x20Set]','_connecting','POSITIVE_INFINITY','elements','concat','_console_ninja_session','depth','_disposeWebsocket','_setNodeLabel','WebSocket','...','_connected','bind','symbol','[object\\x20Map]','nan','test','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','stack','push','port','strLength','_addProperty','method','_consoleNinjaAllowedToStart','Error','autoExpand','_inBrowser','Map','props','_sortProps','log','autoExpandPreviousObjects','performance','stringify','_processTreeNodeResult','number','_WebSocketClass','hrtime','capped','autoExpandLimit','message','location','time','constructor','_hasMapOnItsPath','parse','process','allStrLength','7awhIVO','cappedProps','onerror','prototype','path','create','remix','getOwnPropertyNames','_socket','indexOf','Buffer',\"c:\\\\Users\\\\Adeus\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-0.0.106\\\\node_modules\",'_property','_Symbol','get','_connectAttemptCount','warn','call','reload','_isPrimitiveWrapperType','9026190FhDoGw','close','_type','setter','_capIfString','elapsed','value','Set','negativeInfinity','set','host','split','1.0.0','_setNodeExpandableState','perf_hooks','map','node','function','_isSet','argumentResolutionError','_isNegativeZero','_WebSocket','_numberRegExp','[object\\x20Array]','valueOf','reduceLimits','763535yMgHIj','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','getter','unref','getOwnPropertyDescriptor','_ws','name','totalStrLength','3zihFjS','\\x20server','level','resolveGetters','null','unknown','readyState','logger\\x20websocket\\x20error','748644LUZFsE','hasOwnProperty','default',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"DESKTOP-65S8CLU\",\"192.168.56.1\",\"192.168.0.5\"],'slice','_addLoadNode','length','send','toLowerCase','cappedElements','forEach','_allowedToConnectOnSend','trace','_undefined','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','String','_cleanNode','getPrototypeOf','_maxConnectAttemptCount','NEGATIVE_INFINITY','_keyStrRegExp','_p_','_setNodeQueryPath','_p_length','expId','_p_name','undefined','getWebSocketClass','funcName','Number','onclose','_console_ninja','now','positiveInfinity','491674KubwGx','_setNodePermissions','Symbol','hostname','getOwnPropertySymbols','_attemptToReconnectShortly','timeEnd','_setNodeId','\\x20browser','enumerable','substr','serialize','disabledLog','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help','_propertyAccessor','join','root_exp','_reconnectTimeout','disabledTrace','_HTMLAllCollection','url','RegExp','boolean','__es'+'Module','sortProps','_hasSymbolPropertyOnItsPath','_setNodeExpressionPath','_connectToHostNow','_treeNodePropertiesBeforeFullValue','onopen','includes','isExpressionToEvaluate','toString','_getOwnPropertySymbols','_blacklistedProperty','global','_addObjectProperty','versions','_isMap','array','18WJAfEL','string','_getOwnPropertyNames','data','then','_allowedToSend','match','type','nuxt','hits','_isPrimitiveType','ws/index.js','count','3183804twpDoA','54342','[object\\x20Date]','_quotedRegExp','date','parent','index','negativeZero','_addFunctionsNode','autoExpandMaxDepth','console','nodeModules','current','noFunctions','autoExpandPropertyCount','_getOwnPropertyDescriptor','','replace','pathToFileURL','5205208WhqtjK','webpack','object','next.js','_additionalMetadata','164334XmjUTO','stackTraceLimit','_hasSetOnItsPath'];_0x3d4d=function(){return _0x5464ab;};return _0x3d4d();}function H(_0x512c10){var _0x555095=_0x3bd2cd;let _0xa0bbb7=function(_0x40c8e9,_0x1506f1){return _0x1506f1-_0x40c8e9;},_0x3cd1a2;if(_0x512c10['performance'])_0x3cd1a2=function(){var _0x4bc58f=_0x579b;return _0x512c10[_0x4bc58f(0x170)][_0x4bc58f(0x1de)]();};else{if(_0x512c10['process']&&_0x512c10['process'][_0x555095(0x175)])_0x3cd1a2=function(){var _0x16c047=_0x555095;return _0x512c10[_0x16c047(0x17e)][_0x16c047(0x175)]();},_0xa0bbb7=function(_0x165a3c,_0x17c8b0){return 0x3e8*(_0x17c8b0[0x0]-_0x165a3c[0x0])+(_0x17c8b0[0x1]-_0x165a3c[0x1])/0xf4240;};else try{let {performance:_0x56aa91}=require(_0x555095(0x1a2));_0x3cd1a2=function(){var _0x31c29d=_0x555095;return _0x56aa91[_0x31c29d(0x1de)]();};}catch{_0x3cd1a2=function(){return+new Date();};}}return{'elapsed':_0xa0bbb7,'timeStamp':_0x3cd1a2,'now':()=>Date[_0x555095(0x1de)]()};}function X(_0xe96c3,_0x307ce8,_0x92e051){var _0x16afc5=_0x3bd2cd;if(_0xe96c3[_0x16afc5(0x167)]!==void 0x0)return _0xe96c3[_0x16afc5(0x167)];let _0x5ed878=_0xe96c3['process']?.['versions']?.[_0x16afc5(0x1a4)];return _0x5ed878&&_0x92e051===_0x16afc5(0x12b)?_0xe96c3[_0x16afc5(0x167)]=!0x1:_0xe96c3['_consoleNinjaAllowedToStart']=_0x5ed878||!_0x307ce8||_0xe96c3[_0x16afc5(0x179)]?.[_0x16afc5(0x1e3)]&&_0x307ce8[_0x16afc5(0x119)](_0xe96c3[_0x16afc5(0x179)][_0x16afc5(0x1e3)]),_0xe96c3['_consoleNinjaAllowedToStart'];}((_0xdbc1c1,_0x4f21e6,_0x5cb5a2,_0x55fe34,_0x44042c,_0x3a8f76,_0x313081,_0x11214,_0x6e56bb)=>{var _0x2675de=_0x3bd2cd;if(_0xdbc1c1[_0x2675de(0x1dd)])return _0xdbc1c1[_0x2675de(0x1dd)];if(!X(_0xdbc1c1,_0x11214,_0x44042c))return _0xdbc1c1['_console_ninja']={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0xdbc1c1[_0x2675de(0x1dd)];let _0x200de0={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x348293={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2},_0x23eb91=H(_0xdbc1c1),_0x4445a0=_0x23eb91[_0x2675de(0x199)],_0x14738f=_0x23eb91['timeStamp'],_0x3eee6a=_0x23eb91[_0x2675de(0x1de)],_0x544d1e={'hits':{},'ts':{}},_0xc6b4cc=_0xa9a206=>{_0x544d1e['ts'][_0xa9a206]=_0x14738f();},_0x40442c=(_0x12411a,_0x582b8d)=>{var _0x3e1eef=_0x2675de;let _0x4b5498=_0x544d1e['ts'][_0x582b8d];if(delete _0x544d1e['ts'][_0x582b8d],_0x4b5498){let _0x25831e=_0x4445a0(_0x4b5498,_0x14738f());_0x5441d3(_0x3bf19a(_0x3e1eef(0x17a),_0x12411a,_0x3eee6a(),_0x424be2,[_0x25831e],_0x582b8d));}},_0x17b3c6=_0x3aa9ed=>_0x5f4286=>{var _0x2c8b28=_0x2675de;try{_0xc6b4cc(_0x5f4286),_0x3aa9ed(_0x5f4286);}finally{_0xdbc1c1['console'][_0x2c8b28(0x17a)]=_0x3aa9ed;}},_0x45ef59=_0x55315a=>_0x597efc=>{var _0x47aaf5=_0x2675de;try{let [_0x5f559c,_0x19c506]=_0x597efc['split'](':logPointId:');_0x40442c(_0x19c506,_0x5f559c),_0x55315a(_0x5f559c);}finally{_0xdbc1c1[_0x47aaf5(0x13a)][_0x47aaf5(0x1e6)]=_0x55315a;}};_0xdbc1c1[_0x2675de(0x1dd)]={'consoleLog':(_0x548515,_0x13adf1)=>{var _0x44ae2b=_0x2675de;_0xdbc1c1[_0x44ae2b(0x13a)][_0x44ae2b(0x16e)][_0x44ae2b(0x1b4)]!==_0x44ae2b(0x107)&&_0x5441d3(_0x3bf19a(_0x44ae2b(0x16e),_0x548515,_0x3eee6a(),_0x424be2,_0x13adf1));},'consoleTrace':(_0xc47569,_0x2210e0)=>{var _0x350fd4=_0x2675de;_0xdbc1c1[_0x350fd4(0x13a)][_0x350fd4(0x16e)][_0x350fd4(0x1b4)]!==_0x350fd4(0x10d)&&_0x5441d3(_0x3bf19a(_0x350fd4(0x1ca),_0xc47569,_0x3eee6a(),_0x424be2,_0x2210e0));},'consoleTime':()=>{var _0x27347d=_0x2675de;_0xdbc1c1[_0x27347d(0x13a)][_0x27347d(0x17a)]=_0x17b3c6(_0xdbc1c1['console']['time']);},'consoleTimeEnd':()=>{var _0x7e57b9=_0x2675de;_0xdbc1c1[_0x7e57b9(0x13a)][_0x7e57b9(0x1e6)]=_0x45ef59(_0xdbc1c1[_0x7e57b9(0x13a)][_0x7e57b9(0x1e6)]);},'autoLog':(_0x276164,_0x3e071a)=>{_0x5441d3(_0x3bf19a('log',_0x3e071a,_0x3eee6a(),_0x424be2,[_0x276164]));},'autoTrace':(_0x174233,_0x5dcb11)=>{var _0x32f07e=_0x2675de;_0x5441d3(_0x3bf19a(_0x32f07e(0x1ca),_0x5dcb11,_0x3eee6a(),_0x424be2,[_0x174233]));},'autoTime':(_0x1eb40a,_0x372ed8,_0xd88c4c)=>{_0xc6b4cc(_0xd88c4c);},'autoTimeEnd':(_0x4a3fcc,_0x17102d,_0x47d22c)=>{_0x40442c(_0x17102d,_0x47d22c);}};let _0x5441d3=V(_0xdbc1c1,_0x4f21e6,_0x5cb5a2,_0x55fe34,_0x44042c),_0x424be2=_0xdbc1c1[_0x2675de(0x154)];class _0x25d138{constructor(){var _0x127fa9=_0x2675de;this[_0x127fa9(0x1d2)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x127fa9(0x1aa)]=/^(0|[1-9][0-9]*)$/,this[_0x127fa9(0x133)]=/'([^\\\\']|\\\\')*'/,this[_0x127fa9(0x1cb)]=_0xdbc1c1['undefined'],this['_HTMLAllCollection']=_0xdbc1c1[_0x127fa9(0x14e)],this[_0x127fa9(0x13f)]=Object[_0x127fa9(0x1b2)],this[_0x127fa9(0x125)]=Object[_0x127fa9(0x187)],this[_0x127fa9(0x18d)]=_0xdbc1c1[_0x127fa9(0x1e2)],this['_regExpToString']=RegExp[_0x127fa9(0x183)]['toString'],this['_dateToString']=Date[_0x127fa9(0x183)][_0x127fa9(0x11b)];}[_0x2675de(0x106)](_0x2b7aed,_0x530d8b,_0x38fbc4,_0x3ee084){var _0x4c1cd4=_0x2675de,_0x5778be=this,_0x36537a=_0x38fbc4[_0x4c1cd4(0x169)];function _0x5b7587(_0x13f4dc,_0xbbc77d,_0x5a8353){var _0x3fd486=_0x4c1cd4;_0xbbc77d[_0x3fd486(0x12a)]=_0x3fd486(0x1bb),_0xbbc77d['error']=_0x13f4dc[_0x3fd486(0x178)],_0x22d344=_0x5a8353[_0x3fd486(0x1a4)][_0x3fd486(0x13c)],_0x5a8353[_0x3fd486(0x1a4)][_0x3fd486(0x13c)]=_0xbbc77d,_0x5778be[_0x3fd486(0x117)](_0xbbc77d,_0x5a8353);}if(_0x530d8b&&_0x530d8b[_0x4c1cd4(0x1a7)])_0x5b7587(_0x530d8b,_0x2b7aed,_0x38fbc4);else try{_0x38fbc4[_0x4c1cd4(0x1b8)]++,_0x38fbc4[_0x4c1cd4(0x169)]&&_0x38fbc4['autoExpandPreviousObjects'][_0x4c1cd4(0x162)](_0x530d8b);var _0x280bec,_0x5286d7,_0x5d3ba1,_0x4267bb,_0x295dbc=[],_0x39f255=[],_0x44f2b2,_0x3d4fec=this[_0x4c1cd4(0x196)](_0x530d8b),_0x4203f5=_0x3d4fec===_0x4c1cd4(0x122),_0x364546=!0x1,_0x5c38c5=_0x3d4fec===_0x4c1cd4(0x1a5),_0x426362=this['_isPrimitiveType'](_0x3d4fec),_0x3cec6d=this[_0x4c1cd4(0x193)](_0x3d4fec),_0x280526=_0x426362||_0x3cec6d,_0x2a2c4e={},_0x427009=0x0,_0x44644f=!0x1,_0x22d344,_0x3a9286=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x38fbc4[_0x4c1cd4(0x155)]){if(_0x4203f5){if(_0x5286d7=_0x530d8b[_0x4c1cd4(0x1c4)],_0x5286d7>_0x38fbc4['elements']){for(_0x5d3ba1=0x0,_0x4267bb=_0x38fbc4['elements'],_0x280bec=_0x5d3ba1;_0x280bec<_0x4267bb;_0x280bec++)_0x39f255[_0x4c1cd4(0x162)](_0x5778be['_addProperty'](_0x295dbc,_0x530d8b,_0x3d4fec,_0x280bec,_0x38fbc4));_0x2b7aed[_0x4c1cd4(0x1c7)]=!0x0;}else{for(_0x5d3ba1=0x0,_0x4267bb=_0x5286d7,_0x280bec=_0x5d3ba1;_0x280bec<_0x4267bb;_0x280bec++)_0x39f255[_0x4c1cd4(0x162)](_0x5778be[_0x4c1cd4(0x165)](_0x295dbc,_0x530d8b,_0x3d4fec,_0x280bec,_0x38fbc4));}_0x38fbc4['autoExpandPropertyCount']+=_0x39f255[_0x4c1cd4(0x1c4)];}if(!(_0x3d4fec===_0x4c1cd4(0x1ba)||_0x3d4fec===_0x4c1cd4(0x1d8))&&!_0x426362&&_0x3d4fec!==_0x4c1cd4(0x1cd)&&_0x3d4fec!==_0x4c1cd4(0x18a)&&_0x3d4fec!=='bigint'){var _0x264562=_0x3ee084[_0x4c1cd4(0x16c)]||_0x38fbc4[_0x4c1cd4(0x16c)];if(this[_0x4c1cd4(0x1a6)](_0x530d8b)?(_0x280bec=0x0,_0x530d8b['forEach'](function(_0x2d9d34){var _0x36c968=_0x4c1cd4;if(_0x427009++,_0x38fbc4[_0x36c968(0x13e)]++,_0x427009>_0x264562){_0x44644f=!0x0;return;}if(!_0x38fbc4[_0x36c968(0x11a)]&&_0x38fbc4[_0x36c968(0x169)]&&_0x38fbc4[_0x36c968(0x13e)]>_0x38fbc4[_0x36c968(0x177)]){_0x44644f=!0x0;return;}_0x39f255[_0x36c968(0x162)](_0x5778be[_0x36c968(0x165)](_0x295dbc,_0x530d8b,'Set',_0x280bec++,_0x38fbc4,function(_0x4496ef){return function(){return _0x4496ef;};}(_0x2d9d34)));})):this[_0x4c1cd4(0x121)](_0x530d8b)&&_0x530d8b[_0x4c1cd4(0x1c8)](function(_0x21a0c2,_0x57e3f3){var _0x389937=_0x4c1cd4;if(_0x427009++,_0x38fbc4[_0x389937(0x13e)]++,_0x427009>_0x264562){_0x44644f=!0x0;return;}if(!_0x38fbc4[_0x389937(0x11a)]&&_0x38fbc4[_0x389937(0x169)]&&_0x38fbc4[_0x389937(0x13e)]>_0x38fbc4[_0x389937(0x177)]){_0x44644f=!0x0;return;}var _0x507b45=_0x57e3f3[_0x389937(0x11b)]();_0x507b45['length']>0x64&&(_0x507b45=_0x507b45[_0x389937(0x1c2)](0x0,0x64)+_0x389937(0x159)),_0x39f255[_0x389937(0x162)](_0x5778be['_addProperty'](_0x295dbc,_0x530d8b,_0x389937(0x16b),_0x507b45,_0x38fbc4,function(_0x327a9b){return function(){return _0x327a9b;};}(_0x21a0c2)));}),!_0x364546){try{for(_0x44f2b2 in _0x530d8b)if(!(_0x4203f5&&_0x3a9286[_0x4c1cd4(0x15f)](_0x44f2b2))&&!this[_0x4c1cd4(0x11d)](_0x530d8b,_0x44f2b2,_0x38fbc4)){if(_0x427009++,_0x38fbc4[_0x4c1cd4(0x13e)]++,_0x427009>_0x264562){_0x44644f=!0x0;break;}if(!_0x38fbc4[_0x4c1cd4(0x11a)]&&_0x38fbc4[_0x4c1cd4(0x169)]&&_0x38fbc4[_0x4c1cd4(0x13e)]>_0x38fbc4[_0x4c1cd4(0x177)]){_0x44644f=!0x0;break;}_0x39f255[_0x4c1cd4(0x162)](_0x5778be[_0x4c1cd4(0x11f)](_0x295dbc,_0x2a2c4e,_0x530d8b,_0x3d4fec,_0x44f2b2,_0x38fbc4));}}catch{}if(_0x2a2c4e[_0x4c1cd4(0x1d5)]=!0x0,_0x5c38c5&&(_0x2a2c4e[_0x4c1cd4(0x1d7)]=!0x0),!_0x44644f){var _0x4fef9a=[][_0x4c1cd4(0x153)](this[_0x4c1cd4(0x125)](_0x530d8b))[_0x4c1cd4(0x153)](this[_0x4c1cd4(0x11c)](_0x530d8b));for(_0x280bec=0x0,_0x5286d7=_0x4fef9a['length'];_0x280bec<_0x5286d7;_0x280bec++)if(_0x44f2b2=_0x4fef9a[_0x280bec],!(_0x4203f5&&_0x3a9286[_0x4c1cd4(0x15f)](_0x44f2b2[_0x4c1cd4(0x11b)]()))&&!this['_blacklistedProperty'](_0x530d8b,_0x44f2b2,_0x38fbc4)&&!_0x2a2c4e[_0x4c1cd4(0x1d3)+_0x44f2b2[_0x4c1cd4(0x11b)]()]){if(_0x427009++,_0x38fbc4['autoExpandPropertyCount']++,_0x427009>_0x264562){_0x44644f=!0x0;break;}if(!_0x38fbc4[_0x4c1cd4(0x11a)]&&_0x38fbc4[_0x4c1cd4(0x169)]&&_0x38fbc4['autoExpandPropertyCount']>_0x38fbc4[_0x4c1cd4(0x177)]){_0x44644f=!0x0;break;}_0x39f255[_0x4c1cd4(0x162)](_0x5778be[_0x4c1cd4(0x11f)](_0x295dbc,_0x2a2c4e,_0x530d8b,_0x3d4fec,_0x44f2b2,_0x38fbc4));}}}}}if(_0x2b7aed[_0x4c1cd4(0x12a)]=_0x3d4fec,_0x280526?(_0x2b7aed[_0x4c1cd4(0x19a)]=_0x530d8b[_0x4c1cd4(0x1ac)](),this[_0x4c1cd4(0x198)](_0x3d4fec,_0x2b7aed,_0x38fbc4,_0x3ee084)):_0x3d4fec==='date'?_0x2b7aed[_0x4c1cd4(0x19a)]=this['_dateToString'][_0x4c1cd4(0x191)](_0x530d8b):_0x3d4fec===_0x4c1cd4(0x110)?_0x2b7aed['value']=this['_regExpToString'][_0x4c1cd4(0x191)](_0x530d8b):_0x3d4fec===_0x4c1cd4(0x15c)&&this['_Symbol']?_0x2b7aed['value']=this[_0x4c1cd4(0x18d)][_0x4c1cd4(0x183)][_0x4c1cd4(0x11b)]['call'](_0x530d8b):!_0x38fbc4[_0x4c1cd4(0x155)]&&!(_0x3d4fec===_0x4c1cd4(0x1ba)||_0x3d4fec===_0x4c1cd4(0x1d8))&&(delete _0x2b7aed[_0x4c1cd4(0x19a)],_0x2b7aed['capped']=!0x0),_0x44644f&&(_0x2b7aed[_0x4c1cd4(0x181)]=!0x0),_0x22d344=_0x38fbc4[_0x4c1cd4(0x1a4)][_0x4c1cd4(0x13c)],_0x38fbc4['node'][_0x4c1cd4(0x13c)]=_0x2b7aed,this[_0x4c1cd4(0x117)](_0x2b7aed,_0x38fbc4),_0x39f255[_0x4c1cd4(0x1c4)]){for(_0x280bec=0x0,_0x5286d7=_0x39f255[_0x4c1cd4(0x1c4)];_0x280bec<_0x5286d7;_0x280bec++)_0x39f255[_0x280bec](_0x280bec);}_0x295dbc[_0x4c1cd4(0x1c4)]&&(_0x2b7aed['props']=_0x295dbc);}catch(_0x21e767){_0x5b7587(_0x21e767,_0x2b7aed,_0x38fbc4);}return this[_0x4c1cd4(0x147)](_0x530d8b,_0x2b7aed),this['_treeNodePropertiesAfterFullValue'](_0x2b7aed,_0x38fbc4),_0x38fbc4[_0x4c1cd4(0x1a4)]['current']=_0x22d344,_0x38fbc4['level']--,_0x38fbc4[_0x4c1cd4(0x169)]=_0x36537a,_0x38fbc4[_0x4c1cd4(0x169)]&&_0x38fbc4[_0x4c1cd4(0x16f)]['pop'](),_0x2b7aed;}[_0x2675de(0x11c)](_0x32ab70){var _0x3b13c4=_0x2675de;return Object['getOwnPropertySymbols']?Object[_0x3b13c4(0x1e4)](_0x32ab70):[];}[_0x2675de(0x1a6)](_0x44e2f5){var _0x460462=_0x2675de;return!!(_0x44e2f5&&_0xdbc1c1[_0x460462(0x19b)]&&this[_0x460462(0x14c)](_0x44e2f5)===_0x460462(0x14f)&&_0x44e2f5[_0x460462(0x1c8)]);}[_0x2675de(0x11d)](_0x20d448,_0x20f181,_0x50d760){var _0x3647c2=_0x2675de;return _0x50d760[_0x3647c2(0x13d)]?typeof _0x20d448[_0x20f181]==_0x3647c2(0x1a5):!0x1;}[_0x2675de(0x196)](_0x57c0dc){var _0xc6109c=_0x2675de,_0x392697='';return _0x392697=typeof _0x57c0dc,_0x392697===_0xc6109c(0x145)?this[_0xc6109c(0x14c)](_0x57c0dc)===_0xc6109c(0x1ab)?_0x392697=_0xc6109c(0x122):this[_0xc6109c(0x14c)](_0x57c0dc)===_0xc6109c(0x132)?_0x392697=_0xc6109c(0x134):_0x57c0dc===null?_0x392697=_0xc6109c(0x1ba):_0x57c0dc[_0xc6109c(0x17b)]&&(_0x392697=_0x57c0dc[_0xc6109c(0x17b)][_0xc6109c(0x1b4)]||_0x392697):_0x392697===_0xc6109c(0x1d8)&&this['_HTMLAllCollection']&&_0x57c0dc instanceof this[_0xc6109c(0x10e)]&&(_0x392697=_0xc6109c(0x14e)),_0x392697;}[_0x2675de(0x14c)](_0x53d176){return Object['prototype']['toString']['call'](_0x53d176);}[_0x2675de(0x12d)](_0x2ff974){var _0x302ac9=_0x2675de;return _0x2ff974===_0x302ac9(0x111)||_0x2ff974==='string'||_0x2ff974===_0x302ac9(0x173);}[_0x2675de(0x193)](_0x38b1a8){var _0x214448=_0x2675de;return _0x38b1a8==='Boolean'||_0x38b1a8===_0x214448(0x1cd)||_0x38b1a8===_0x214448(0x1db);}[_0x2675de(0x165)](_0x2b37a6,_0xebce77,_0x16984c,_0x34a25a,_0xa395fe,_0x161d1c){var _0x5ac431=this;return function(_0x99b6a3){var _0x4df1ef=_0x579b,_0x2f5fd3=_0xa395fe[_0x4df1ef(0x1a4)][_0x4df1ef(0x13c)],_0x45229c=_0xa395fe[_0x4df1ef(0x1a4)]['index'],_0x187921=_0xa395fe['node'][_0x4df1ef(0x135)];_0xa395fe[_0x4df1ef(0x1a4)][_0x4df1ef(0x135)]=_0x2f5fd3,_0xa395fe[_0x4df1ef(0x1a4)][_0x4df1ef(0x136)]=typeof _0x34a25a==_0x4df1ef(0x173)?_0x34a25a:_0x99b6a3,_0x2b37a6[_0x4df1ef(0x162)](_0x5ac431[_0x4df1ef(0x18c)](_0xebce77,_0x16984c,_0x34a25a,_0xa395fe,_0x161d1c)),_0xa395fe[_0x4df1ef(0x1a4)][_0x4df1ef(0x135)]=_0x187921,_0xa395fe['node']['index']=_0x45229c;};}[_0x2675de(0x11f)](_0x7152b3,_0x4183c3,_0x64a92b,_0x3f4512,_0xd3d674,_0x5a6a02,_0x1720bf){var _0xc09da8=_0x2675de,_0x38e8f7=this;return _0x4183c3[_0xc09da8(0x1d3)+_0xd3d674[_0xc09da8(0x11b)]()]=!0x0,function(_0x55bd54){var _0x337862=_0xc09da8,_0x2c1ee6=_0x5a6a02[_0x337862(0x1a4)]['current'],_0x3fa212=_0x5a6a02['node'][_0x337862(0x136)],_0x4d3244=_0x5a6a02[_0x337862(0x1a4)]['parent'];_0x5a6a02[_0x337862(0x1a4)][_0x337862(0x135)]=_0x2c1ee6,_0x5a6a02[_0x337862(0x1a4)]['index']=_0x55bd54,_0x7152b3[_0x337862(0x162)](_0x38e8f7[_0x337862(0x18c)](_0x64a92b,_0x3f4512,_0xd3d674,_0x5a6a02,_0x1720bf)),_0x5a6a02['node']['parent']=_0x4d3244,_0x5a6a02['node'][_0x337862(0x136)]=_0x3fa212;};}[_0x2675de(0x18c)](_0x5d7345,_0x596ecb,_0x51393a,_0x3aa96e,_0xe7ac7){var _0x202342=_0x2675de,_0x1ec239=this;_0xe7ac7||(_0xe7ac7=function(_0x4500da,_0x31bcad){return _0x4500da[_0x31bcad];});var _0x4d2c05=_0x51393a[_0x202342(0x11b)](),_0x3b26b4=_0x3aa96e['expressionsToEvaluate']||{},_0x308f2b=_0x3aa96e['depth'],_0x31d392=_0x3aa96e['isExpressionToEvaluate'];try{var _0x1eb627=this[_0x202342(0x121)](_0x5d7345),_0x1e82fb=_0x4d2c05;_0x1eb627&&_0x1e82fb[0x0]==='\\x27'&&(_0x1e82fb=_0x1e82fb['substr'](0x1,_0x1e82fb[_0x202342(0x1c4)]-0x2));var _0x524557=_0x3aa96e[_0x202342(0x14d)]=_0x3b26b4[_0x202342(0x1d3)+_0x1e82fb];_0x524557&&(_0x3aa96e[_0x202342(0x155)]=_0x3aa96e['depth']+0x1),_0x3aa96e[_0x202342(0x11a)]=!!_0x524557;var _0xeca7c4=typeof _0x51393a==_0x202342(0x15c),_0x21e72c={'name':_0xeca7c4||_0x1eb627?_0x4d2c05:this['_propertyName'](_0x4d2c05)};if(_0xeca7c4&&(_0x21e72c[_0x202342(0x15c)]=!0x0),!(_0x596ecb===_0x202342(0x122)||_0x596ecb===_0x202342(0x168))){var _0x3ea033=this[_0x202342(0x13f)](_0x5d7345,_0x51393a);if(_0x3ea033&&(_0x3ea033[_0x202342(0x19d)]&&(_0x21e72c[_0x202342(0x197)]=!0x0),_0x3ea033[_0x202342(0x18e)]&&!_0x524557&&!_0x3aa96e['resolveGetters']))return _0x21e72c[_0x202342(0x1b0)]=!0x0,this[_0x202342(0x172)](_0x21e72c,_0x3aa96e),_0x21e72c;}var _0x1187af;try{_0x1187af=_0xe7ac7(_0x5d7345,_0x51393a);}catch(_0x3b1f4e){return _0x21e72c={'name':_0x4d2c05,'type':_0x202342(0x1bb),'error':_0x3b1f4e[_0x202342(0x178)]},this['_processTreeNodeResult'](_0x21e72c,_0x3aa96e),_0x21e72c;}var _0x2d5737=this['_type'](_0x1187af),_0x25c6c0=this[_0x202342(0x12d)](_0x2d5737);if(_0x21e72c['type']=_0x2d5737,_0x25c6c0)this['_processTreeNodeResult'](_0x21e72c,_0x3aa96e,_0x1187af,function(){var _0x68fe85=_0x202342;_0x21e72c[_0x68fe85(0x19a)]=_0x1187af[_0x68fe85(0x1ac)](),!_0x524557&&_0x1ec239[_0x68fe85(0x198)](_0x2d5737,_0x21e72c,_0x3aa96e,{});});else{var _0x34b88c=_0x3aa96e[_0x202342(0x169)]&&_0x3aa96e['level']<_0x3aa96e['autoExpandMaxDepth']&&_0x3aa96e['autoExpandPreviousObjects'][_0x202342(0x189)](_0x1187af)<0x0&&_0x2d5737!=='function'&&_0x3aa96e[_0x202342(0x13e)]<_0x3aa96e[_0x202342(0x177)];_0x34b88c||_0x3aa96e['level']<_0x308f2b||_0x524557?(this[_0x202342(0x106)](_0x21e72c,_0x1187af,_0x3aa96e,_0x524557||{}),this[_0x202342(0x147)](_0x1187af,_0x21e72c)):this[_0x202342(0x172)](_0x21e72c,_0x3aa96e,_0x1187af,function(){var _0x49728f=_0x202342;_0x2d5737===_0x49728f(0x1ba)||_0x2d5737===_0x49728f(0x1d8)||(delete _0x21e72c['value'],_0x21e72c[_0x49728f(0x176)]=!0x0);});}return _0x21e72c;}finally{_0x3aa96e[_0x202342(0x14d)]=_0x3b26b4,_0x3aa96e[_0x202342(0x155)]=_0x308f2b,_0x3aa96e[_0x202342(0x11a)]=_0x31d392;}}[_0x2675de(0x198)](_0x2b7e01,_0x1ef482,_0x1c887e,_0x259906){var _0x1e4f96=_0x2675de,_0x41ba20=_0x259906[_0x1e4f96(0x164)]||_0x1c887e[_0x1e4f96(0x164)];if((_0x2b7e01==='string'||_0x2b7e01==='String')&&_0x1ef482[_0x1e4f96(0x19a)]){let _0x4f307c=_0x1ef482[_0x1e4f96(0x19a)][_0x1e4f96(0x1c4)];_0x1c887e[_0x1e4f96(0x17f)]+=_0x4f307c,_0x1c887e['allStrLength']>_0x1c887e[_0x1e4f96(0x1b5)]?(_0x1ef482[_0x1e4f96(0x176)]='',delete _0x1ef482[_0x1e4f96(0x19a)]):_0x4f307c>_0x41ba20&&(_0x1ef482[_0x1e4f96(0x176)]=_0x1ef482['value'][_0x1e4f96(0x1ea)](0x0,_0x41ba20),delete _0x1ef482[_0x1e4f96(0x19a)]);}}[_0x2675de(0x121)](_0x4beb8f){var _0xe34be2=_0x2675de;return!!(_0x4beb8f&&_0xdbc1c1[_0xe34be2(0x16b)]&&this['_objectToString'](_0x4beb8f)===_0xe34be2(0x15d)&&_0x4beb8f[_0xe34be2(0x1c8)]);}['_propertyName'](_0x425258){var _0x5d46f8=_0x2675de;if(_0x425258[_0x5d46f8(0x129)](/^\\d+$/))return _0x425258;var _0x93286c;try{_0x93286c=JSON[_0x5d46f8(0x171)](''+_0x425258);}catch{_0x93286c='\\x22'+this[_0x5d46f8(0x14c)](_0x425258)+'\\x22';}return _0x93286c['match'](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x93286c=_0x93286c[_0x5d46f8(0x1ea)](0x1,_0x93286c[_0x5d46f8(0x1c4)]-0x2):_0x93286c=_0x93286c['replace'](/'/g,'\\x5c\\x27')[_0x5d46f8(0x141)](/\\\\\"/g,'\\x22')[_0x5d46f8(0x141)](/(^\"|\"$)/g,'\\x27'),_0x93286c;}[_0x2675de(0x172)](_0x283559,_0x2927a4,_0x253c00,_0x5b3c14){var _0x287e7b=_0x2675de;this[_0x287e7b(0x117)](_0x283559,_0x2927a4),_0x5b3c14&&_0x5b3c14(),this[_0x287e7b(0x147)](_0x253c00,_0x283559),this['_treeNodePropertiesAfterFullValue'](_0x283559,_0x2927a4);}[_0x2675de(0x117)](_0x1b0168,_0x18e389){var _0x33f135=_0x2675de;this[_0x33f135(0x1e7)](_0x1b0168,_0x18e389),this[_0x33f135(0x1d4)](_0x1b0168,_0x18e389),this[_0x33f135(0x115)](_0x1b0168,_0x18e389),this[_0x33f135(0x1e1)](_0x1b0168,_0x18e389);}[_0x2675de(0x1e7)](_0x34f46f,_0x212b55){}[_0x2675de(0x1d4)](_0x15d663,_0x5e22aa){}['_setNodeLabel'](_0x50557a,_0x9c7cba){}['_isUndefined'](_0x2c9290){var _0x1f93d7=_0x2675de;return _0x2c9290===this[_0x1f93d7(0x1cb)];}[_0x2675de(0x14b)](_0x331985,_0x1816da){var _0x389fe5=_0x2675de;this[_0x389fe5(0x157)](_0x331985,_0x1816da),this[_0x389fe5(0x1a1)](_0x331985),_0x1816da[_0x389fe5(0x113)]&&this['_sortProps'](_0x331985),this[_0x389fe5(0x138)](_0x331985,_0x1816da),this[_0x389fe5(0x1c3)](_0x331985,_0x1816da),this[_0x389fe5(0x1ce)](_0x331985);}[_0x2675de(0x147)](_0x4c9cf6,_0x5f4ff1){var _0x5c3fae=_0x2675de;try{_0x4c9cf6&&typeof _0x4c9cf6[_0x5c3fae(0x1c4)]==_0x5c3fae(0x173)&&(_0x5f4ff1[_0x5c3fae(0x1c4)]=_0x4c9cf6[_0x5c3fae(0x1c4)]);}catch{}if(_0x5f4ff1[_0x5c3fae(0x12a)]==='number'||_0x5f4ff1[_0x5c3fae(0x12a)]==='Number'){if(isNaN(_0x5f4ff1['value']))_0x5f4ff1[_0x5c3fae(0x15e)]=!0x0,delete _0x5f4ff1['value'];else switch(_0x5f4ff1[_0x5c3fae(0x19a)]){case Number[_0x5c3fae(0x151)]:_0x5f4ff1[_0x5c3fae(0x1df)]=!0x0,delete _0x5f4ff1[_0x5c3fae(0x19a)];break;case Number[_0x5c3fae(0x1d1)]:_0x5f4ff1[_0x5c3fae(0x19c)]=!0x0,delete _0x5f4ff1[_0x5c3fae(0x19a)];break;case 0x0:this[_0x5c3fae(0x1a8)](_0x5f4ff1[_0x5c3fae(0x19a)])&&(_0x5f4ff1[_0x5c3fae(0x137)]=!0x0);break;}}else _0x5f4ff1[_0x5c3fae(0x12a)]===_0x5c3fae(0x1a5)&&typeof _0x4c9cf6[_0x5c3fae(0x1b4)]==_0x5c3fae(0x124)&&_0x4c9cf6[_0x5c3fae(0x1b4)]&&_0x5f4ff1['name']&&_0x4c9cf6[_0x5c3fae(0x1b4)]!==_0x5f4ff1[_0x5c3fae(0x1b4)]&&(_0x5f4ff1[_0x5c3fae(0x1da)]=_0x4c9cf6[_0x5c3fae(0x1b4)]);}[_0x2675de(0x1a8)](_0x2ccdd3){var _0x5e97e8=_0x2675de;return 0x1/_0x2ccdd3===Number[_0x5e97e8(0x1d1)];}[_0x2675de(0x16d)](_0x20a56f){var _0x39e9be=_0x2675de;!_0x20a56f[_0x39e9be(0x16c)]||!_0x20a56f['props']['length']||_0x20a56f['type']==='array'||_0x20a56f['type']===_0x39e9be(0x16b)||_0x20a56f[_0x39e9be(0x12a)]==='Set'||_0x20a56f['props']['sort'](function(_0x19992d,_0x58ce2e){var _0x517de8=_0x39e9be,_0x4d3550=_0x19992d[_0x517de8(0x1b4)][_0x517de8(0x1c6)](),_0x4430b4=_0x58ce2e[_0x517de8(0x1b4)][_0x517de8(0x1c6)]();return _0x4d3550<_0x4430b4?-0x1:_0x4d3550>_0x4430b4?0x1:0x0;});}['_addFunctionsNode'](_0x27879f,_0x4d3949){var _0x1afa40=_0x2675de;if(!(_0x4d3949[_0x1afa40(0x13d)]||!_0x27879f[_0x1afa40(0x16c)]||!_0x27879f[_0x1afa40(0x16c)][_0x1afa40(0x1c4)])){for(var _0x47cc15=[],_0x4c3706=[],_0xbf217d=0x0,_0x43da33=_0x27879f[_0x1afa40(0x16c)][_0x1afa40(0x1c4)];_0xbf217d<_0x43da33;_0xbf217d++){var _0x1ba379=_0x27879f[_0x1afa40(0x16c)][_0xbf217d];_0x1ba379[_0x1afa40(0x12a)]===_0x1afa40(0x1a5)?_0x47cc15[_0x1afa40(0x162)](_0x1ba379):_0x4c3706[_0x1afa40(0x162)](_0x1ba379);}if(!(!_0x4c3706[_0x1afa40(0x1c4)]||_0x47cc15['length']<=0x1)){_0x27879f[_0x1afa40(0x16c)]=_0x4c3706;var _0x2c9df4={'functionsNode':!0x0,'props':_0x47cc15};this[_0x1afa40(0x1e7)](_0x2c9df4,_0x4d3949),this[_0x1afa40(0x157)](_0x2c9df4,_0x4d3949),this[_0x1afa40(0x1a1)](_0x2c9df4),this['_setNodePermissions'](_0x2c9df4,_0x4d3949),_0x2c9df4['id']+='\\x20f',_0x27879f[_0x1afa40(0x16c)]['unshift'](_0x2c9df4);}}}[_0x2675de(0x1c3)](_0x1f98ca,_0x519b90){}['_setNodeExpandableState'](_0x28a936){}['_isArray'](_0x3f1260){var _0x4c22d7=_0x2675de;return Array['isArray'](_0x3f1260)||typeof _0x3f1260=='object'&&this[_0x4c22d7(0x14c)](_0x3f1260)===_0x4c22d7(0x1ab);}[_0x2675de(0x1e1)](_0x35c845,_0x56d08d){}[_0x2675de(0x1ce)](_0x1c003e){var _0x4d1056=_0x2675de;delete _0x1c003e[_0x4d1056(0x114)],delete _0x1c003e[_0x4d1056(0x14a)],delete _0x1c003e[_0x4d1056(0x17c)];}[_0x2675de(0x115)](_0x48e3a2,_0xb1d7e2){}[_0x2675de(0x109)](_0x5836bb){var _0x230348=_0x2675de;return _0x5836bb?_0x5836bb[_0x230348(0x129)](this['_numberRegExp'])?'['+_0x5836bb+']':_0x5836bb[_0x230348(0x129)](this[_0x230348(0x1d2)])?'.'+_0x5836bb:_0x5836bb[_0x230348(0x129)](this[_0x230348(0x133)])?'['+_0x5836bb+']':'[\\x27'+_0x5836bb+'\\x27]':'';}}let _0x36051c=new _0x25d138();function _0x3bf19a(_0x403a14,_0x665b46,_0x42913b,_0x2eefe3,_0x14f2e2,_0x5aae0b){var _0x5f1064=_0x2675de;let _0x5ed061,_0x3d67b1;try{_0x3d67b1=_0x14738f(),_0x5ed061=_0x544d1e[_0x665b46],!_0x5ed061||_0x3d67b1-_0x5ed061['ts']>0x1f4&&_0x5ed061[_0x5f1064(0x12f)]&&_0x5ed061[_0x5f1064(0x17a)]/_0x5ed061[_0x5f1064(0x12f)]<0x64?(_0x544d1e[_0x665b46]=_0x5ed061={'count':0x0,'time':0x0,'ts':_0x3d67b1},_0x544d1e['hits']={}):_0x3d67b1-_0x544d1e['hits']['ts']>0x32&&_0x544d1e[_0x5f1064(0x12c)]['count']&&_0x544d1e[_0x5f1064(0x12c)]['time']/_0x544d1e[_0x5f1064(0x12c)][_0x5f1064(0x12f)]<0x64&&(_0x544d1e[_0x5f1064(0x12c)]={});let _0x579162=[],_0x30c7dd=_0x5ed061[_0x5f1064(0x1ad)]||_0x544d1e[_0x5f1064(0x12c)][_0x5f1064(0x1ad)]?_0x348293:_0x200de0,_0x25fbcc=_0x393872=>{var _0x502259=_0x5f1064;let _0x1b7028={};return _0x1b7028[_0x502259(0x16c)]=_0x393872[_0x502259(0x16c)],_0x1b7028[_0x502259(0x152)]=_0x393872[_0x502259(0x152)],_0x1b7028['strLength']=_0x393872[_0x502259(0x164)],_0x1b7028['totalStrLength']=_0x393872['totalStrLength'],_0x1b7028[_0x502259(0x177)]=_0x393872[_0x502259(0x177)],_0x1b7028[_0x502259(0x139)]=_0x393872[_0x502259(0x139)],_0x1b7028[_0x502259(0x113)]=!0x1,_0x1b7028['noFunctions']=!_0x6e56bb,_0x1b7028[_0x502259(0x155)]=0x1,_0x1b7028['level']=0x0,_0x1b7028[_0x502259(0x1d6)]='root_exp_id',_0x1b7028['rootExpression']=_0x502259(0x10b),_0x1b7028['autoExpand']=!0x0,_0x1b7028[_0x502259(0x16f)]=[],_0x1b7028[_0x502259(0x13e)]=0x0,_0x1b7028[_0x502259(0x1b9)]=!0x0,_0x1b7028[_0x502259(0x17f)]=0x0,_0x1b7028[_0x502259(0x1a4)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x1b7028;};for(var _0x181db3=0x0;_0x181db3<_0x14f2e2[_0x5f1064(0x1c4)];_0x181db3++)_0x579162[_0x5f1064(0x162)](_0x36051c[_0x5f1064(0x106)]({'timeNode':_0x403a14==='time'||void 0x0},_0x14f2e2[_0x181db3],_0x25fbcc(_0x30c7dd),{}));if(_0x403a14===_0x5f1064(0x1ca)){let _0x1f1a2f=Error[_0x5f1064(0x149)];try{Error[_0x5f1064(0x149)]=0x1/0x0,_0x579162[_0x5f1064(0x162)](_0x36051c[_0x5f1064(0x106)]({'stackNode':!0x0},new Error()[_0x5f1064(0x161)],_0x25fbcc(_0x30c7dd),{'strLength':0x1/0x0}));}finally{Error['stackTraceLimit']=_0x1f1a2f;}}return{'method':_0x5f1064(0x16e),'version':_0x3a8f76,'args':[{'id':_0x665b46,'ts':_0x42913b,'args':_0x579162,'context':_0x5aae0b,'session':_0x2eefe3}]};}catch(_0x449699){return{'method':_0x5f1064(0x16e),'version':_0x3a8f76,'args':[{'id':_0x665b46,'ts':_0x42913b,'args':[{'type':_0x5f1064(0x1bb),'error':_0x449699&&_0x449699[_0x5f1064(0x178)],'context':_0x5aae0b,'session':_0x2eefe3}]}]};}finally{try{if(_0x5ed061&&_0x3d67b1){let _0x22e96c=_0x14738f();_0x5ed061[_0x5f1064(0x12f)]++,_0x5ed061[_0x5f1064(0x17a)]+=_0x4445a0(_0x3d67b1,_0x22e96c),_0x5ed061['ts']=_0x22e96c,_0x544d1e[_0x5f1064(0x12c)][_0x5f1064(0x12f)]++,_0x544d1e['hits'][_0x5f1064(0x17a)]+=_0x4445a0(_0x3d67b1,_0x22e96c),_0x544d1e[_0x5f1064(0x12c)]['ts']=_0x22e96c,(_0x5ed061['count']>0x32||_0x5ed061[_0x5f1064(0x17a)]>0x64)&&(_0x5ed061['reduceLimits']=!0x0),(_0x544d1e[_0x5f1064(0x12c)][_0x5f1064(0x12f)]>0x3e8||_0x544d1e[_0x5f1064(0x12c)][_0x5f1064(0x17a)]>0x12c)&&(_0x544d1e['hits'][_0x5f1064(0x1ad)]=!0x0);}}catch{}}}return _0xdbc1c1[_0x2675de(0x1dd)];})(globalThis,'127.0.0.1',_0x3bd2cd(0x131),_0x3bd2cd(0x18b),_0x3bd2cd(0x144),_0x3bd2cd(0x1a0),'1681749958689',_0x3bd2cd(0x1c1),_0x3bd2cd(0x140));");}catch(e){}};function oo_oo(i,...v){try{oo_cm().consoleLog(i, v);}catch(e){} return v};function oo_tr(i,...v){try{oo_cm().consoleTrace(i, v);}catch(e){} return v};function oo_ts(){try{oo_cm().consoleTime();}catch(e){}};function oo_te(){try{oo_cm().consoleTimeEnd();}catch(e){}};/*eslint eslint-comments/disable-enable-pair:,eslint-comments/no-unlimited-disable:,eslint-comments/no-aggregating-enable:,eslint-comments/no-duplicate-disable:,eslint-comments/no-unused-disable:,eslint-comments/no-unused-enable:,*/

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _displayController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayController */ "./src/displayController.js");



(0,_displayController__WEBPACK_IMPORTED_MODULE_0__.renderHomePage)()






})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1R3RDtBQUN4RCxpRUFBZSw4REFBYTs7Ozs7Ozs7Ozs7Ozs7O0FDRDVCO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOcUU7QUFDSjtBQUNRO0FBQ2Q7QUFDUTtBQUNOO0FBQ0g7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQSx5QkFBeUIsd0VBQWMsaUJBQWlCO0FBQ3hEO0FBQ0EsNkVBQTZFO0FBQzdFO0FBQ0E7QUFDQTtBQUNBLGFBQWEscUVBQWU7QUFDNUIsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTTtBQUNOO0FBQ0E7QUFDQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esc0JBQXNCLDJFQUFpQixRQUFRO0FBQy9DO0FBQ0EsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHFFQUFlO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHFFQUFlO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtRUFBaUI7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHFFQUFlO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsZUFBZSxvRUFBVTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGtCQUFrQix1RUFBYTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxvQkFBb0IseUVBQWU7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHFFQUFlO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxXQUFXLG1FQUFpQjtBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxXQUFXLG1FQUFpQjtBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxXQUFXLG1FQUFpQjtBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxxRUFBZTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLHFFQUFlO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FB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dUJBQXVCLElBQUksMEJBQTBCLFdBQVcsVUFBVSx1QkFBdUIsSUFBSSw0QkFBNEIsV0FBVyxVQUFVLGlCQUFpQixJQUFJLHVCQUF1QixZQUFZLGlCQUFpQixJQUFJLDBCQUEwQixZQUFZOzs7Ozs7VUMvQm4ybUM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05BO0FBQ2tEO0FBQ2xEO0FBQ0Esa0VBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2RlZmF1bHRMb2NhbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2xpZ2h0Rm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvbG9uZ0Zvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENEYXlPZlllYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDSVNPV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENXZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3Byb3RlY3RlZFRva2Vucy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENXZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2FkZERheXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2FkZE1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vYWRkTW9udGhzL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9hZGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2Zvcm1hdC9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNEYXRlL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1ZhbGlkL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRMb25nL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvbG9jYWxpemUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL21hdGNoL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N1Yk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Rpc3BsYXlDb250cm9sbGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3F1ZXJ5LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTGVhZGluZ1plcm9zKG51bWJlciwgdGFyZ2V0TGVuZ3RoKSB7XHJcbiAgdmFyIHNpZ24gPSBudW1iZXIgPCAwID8gJy0nIDogJyc7XHJcbiAgdmFyIG91dHB1dCA9IE1hdGguYWJzKG51bWJlcikudG9TdHJpbmcoKTtcclxuXHJcbiAgd2hpbGUgKG91dHB1dC5sZW5ndGggPCB0YXJnZXRMZW5ndGgpIHtcclxuICAgIG91dHB1dCA9ICcwJyArIG91dHB1dDtcclxuICB9XHJcblxyXG4gIHJldHVybiBzaWduICsgb3V0cHV0O1xyXG59IiwiaW1wb3J0IGRlZmF1bHRMb2NhbGUgZnJvbSBcIi4uLy4uL2xvY2FsZS9lbi1VUy9pbmRleC5qc1wiO1xyXG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0TG9jYWxlOyIsInZhciBkZWZhdWx0T3B0aW9ucyA9IHt9O1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdE9wdGlvbnMoKSB7XHJcbiAgcmV0dXJuIGRlZmF1bHRPcHRpb25zO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0T3B0aW9ucyhuZXdPcHRpb25zKSB7XHJcbiAgZGVmYXVsdE9wdGlvbnMgPSBuZXdPcHRpb25zO1xyXG59IiwiaW1wb3J0IGdldFVUQ0RheU9mWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENEYXlPZlllYXIvaW5kZXguanNcIjtcclxuaW1wb3J0IGdldFVUQ0lTT1dlZWsgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDSVNPV2Vlay9pbmRleC5qc1wiO1xyXG5pbXBvcnQgZ2V0VVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcclxuaW1wb3J0IGdldFVUQ1dlZWsgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDV2Vlay9pbmRleC5qc1wiO1xyXG5pbXBvcnQgZ2V0VVRDV2Vla1llYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDV2Vla1llYXIvaW5kZXguanNcIjtcclxuaW1wb3J0IGFkZExlYWRpbmdaZXJvcyBmcm9tIFwiLi4vLi4vYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzXCI7XHJcbmltcG9ydCBsaWdodEZvcm1hdHRlcnMgZnJvbSBcIi4uL2xpZ2h0Rm9ybWF0dGVycy9pbmRleC5qc1wiO1xyXG52YXIgZGF5UGVyaW9kRW51bSA9IHtcclxuICBhbTogJ2FtJyxcclxuICBwbTogJ3BtJyxcclxuICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcclxuICBub29uOiAnbm9vbicsXHJcbiAgbW9ybmluZzogJ21vcm5pbmcnLFxyXG4gIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXHJcbiAgZXZlbmluZzogJ2V2ZW5pbmcnLFxyXG4gIG5pZ2h0OiAnbmlnaHQnXHJcbn07XHJcblxyXG4vKlxyXG4gKiB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8XHJcbiAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcclxuICogfCAgYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgfCAgQSogfCBNaWxsaXNlY29uZHMgaW4gZGF5ICAgICAgICAgICAgfFxyXG4gKiB8ICBiICB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICB8ICBCICB8IEZsZXhpYmxlIGRheSBwZXJpb2QgICAgICAgICAgICB8XHJcbiAqIHwgIGMgIHwgU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWsgIHwgIEMqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHxcclxuICogfCAgZCAgfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgfCAgRCAgfCBEYXkgb2YgeWVhciAgICAgICAgICAgICAgICAgICAgfFxyXG4gKiB8ICBlICB8IExvY2FsIGRheSBvZiB3ZWVrICAgICAgICAgICAgICB8ICBFICB8IERheSBvZiB3ZWVrICAgICAgICAgICAgICAgICAgICB8XHJcbiAqIHwgIGYgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEYqIHwgRGF5IG9mIHdlZWsgaW4gbW9udGggICAgICAgICAgIHxcclxuICogfCAgZyogfCBNb2RpZmllZCBKdWxpYW4gZGF5ICAgICAgICAgICAgfCAgRyAgfCBFcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG4gKiB8ICBoICB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICB8ICBIICB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICB8XHJcbiAqIHwgIGkhIHwgSVNPIGRheSBvZiB3ZWVrICAgICAgICAgICAgICAgIHwgIEkhIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgIHxcclxuICogfCAgaiogfCBMb2NhbGl6ZWQgaG91ciB3LyBkYXkgcGVyaW9kICAgfCAgSiogfCBMb2NhbGl6ZWQgaG91ciB3L28gZGF5IHBlcmlvZCAgfFxyXG4gKiB8ICBrICB8IEhvdXIgWzEtMjRdICAgICAgICAgICAgICAgICAgICB8ICBLICB8IEhvdXIgWzAtMTFdICAgICAgICAgICAgICAgICAgICB8XHJcbiAqIHwgIGwqIHwgKGRlcHJlY2F0ZWQpICAgICAgICAgICAgICAgICAgIHwgIEwgIHwgU3RhbmQtYWxvbmUgbW9udGggICAgICAgICAgICAgIHxcclxuICogfCAgbSAgfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTSAgfCBNb250aCAgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG4gKiB8ICBuICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBOICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XHJcbiAqIHwgIG8hIHwgT3JkaW5hbCBudW1iZXIgbW9kaWZpZXIgICAgICAgIHwgIE8gIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgIHxcclxuICogfCAgcCEgfCBMb25nIGxvY2FsaXplZCB0aW1lICAgICAgICAgICAgfCAgUCEgfCBMb25nIGxvY2FsaXplZCBkYXRlICAgICAgICAgICAgfFxyXG4gKiB8ICBxICB8IFN0YW5kLWFsb25lIHF1YXJ0ZXIgICAgICAgICAgICB8ICBRICB8IFF1YXJ0ZXIgICAgICAgICAgICAgICAgICAgICAgICB8XHJcbiAqIHwgIHIqIHwgUmVsYXRlZCBHcmVnb3JpYW4geWVhciAgICAgICAgIHwgIFIhIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgIHxcclxuICogfCAgcyAgfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUyAgfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgfFxyXG4gKiB8ICB0ISB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgICAgICAgICB8ICBUISB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICB8XHJcbiAqIHwgIHUgIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgIHwgIFUqIHwgQ3ljbGljIHllYXIgICAgICAgICAgICAgICAgICAgIHxcclxuICogfCAgdiogfCBUaW1lem9uZSAoZ2VuZXJpYyBub24tbG9jYXQuKSAgfCAgViogfCBUaW1lem9uZSAobG9jYXRpb24pICAgICAgICAgICAgfFxyXG4gKiB8ICB3ICB8IExvY2FsIHdlZWsgb2YgeWVhciAgICAgICAgICAgICB8ICBXKiB8IFdlZWsgb2YgbW9udGggICAgICAgICAgICAgICAgICB8XHJcbiAqIHwgIHggIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgIHwgIFggIHwgVGltZXpvbmUgKElTTy04NjAxKSAgICAgICAgICAgIHxcclxuICogfCAgeSAgfCBZZWFyIChhYnMpICAgICAgICAgICAgICAgICAgICAgfCAgWSAgfCBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgfFxyXG4gKiB8ICB6ICB8IFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXQuKSB8ICBaKiB8IFRpbWV6b25lIChhbGlhc2VzKSAgICAgICAgICAgICB8XHJcbiAqXHJcbiAqIExldHRlcnMgbWFya2VkIGJ5ICogYXJlIG5vdCBpbXBsZW1lbnRlZCBidXQgcmVzZXJ2ZWQgYnkgVW5pY29kZSBzdGFuZGFyZC5cclxuICpcclxuICogTGV0dGVycyBtYXJrZWQgYnkgISBhcmUgbm9uLXN0YW5kYXJkLCBidXQgaW1wbGVtZW50ZWQgYnkgZGF0ZS1mbnM6XHJcbiAqIC0gYG9gIG1vZGlmaWVzIHRoZSBwcmV2aW91cyB0b2tlbiB0byB0dXJuIGl0IGludG8gYW4gb3JkaW5hbCAoc2VlIGBmb3JtYXRgIGRvY3MpXHJcbiAqIC0gYGlgIGlzIElTTyBkYXkgb2Ygd2Vlay4gRm9yIGBpYCBhbmQgYGlpYCBpcyByZXR1cm5zIG51bWVyaWMgSVNPIHdlZWsgZGF5cyxcclxuICogICBpLmUuIDcgZm9yIFN1bmRheSwgMSBmb3IgTW9uZGF5LCBldGMuXHJcbiAqIC0gYElgIGlzIElTTyB3ZWVrIG9mIHllYXIsIGFzIG9wcG9zZWQgdG8gYHdgIHdoaWNoIGlzIGxvY2FsIHdlZWsgb2YgeWVhci5cclxuICogLSBgUmAgaXMgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIsIGFzIG9wcG9zZWQgdG8gYFlgIHdoaWNoIGlzIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIuXHJcbiAqICAgYFJgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgSWAgYW5kIGBpYFxyXG4gKiAgIGZvciB1bml2ZXJzYWwgSVNPIHdlZWstbnVtYmVyaW5nIGRhdGUsIHdoZXJlYXNcclxuICogICBgWWAgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGB3YCBhbmQgYGVgXHJcbiAqICAgZm9yIHdlZWstbnVtYmVyaW5nIGRhdGUgc3BlY2lmaWMgdG8gdGhlIGxvY2FsZS5cclxuICogLSBgUGAgaXMgbG9uZyBsb2NhbGl6ZWQgZGF0ZSBmb3JtYXRcclxuICogLSBgcGAgaXMgbG9uZyBsb2NhbGl6ZWQgdGltZSBmb3JtYXRcclxuICovXHJcbnZhciBmb3JtYXR0ZXJzID0ge1xyXG4gIC8vIEVyYVxyXG4gIEc6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcclxuICAgIHZhciBlcmEgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCkgPiAwID8gMSA6IDA7XHJcblxyXG4gICAgc3dpdGNoICh0b2tlbikge1xyXG4gICAgICAvLyBBRCwgQkNcclxuICAgICAgY2FzZSAnRyc6XHJcbiAgICAgIGNhc2UgJ0dHJzpcclxuICAgICAgY2FzZSAnR0dHJzpcclxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xyXG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCdcclxuICAgICAgICB9KTtcclxuICAgICAgLy8gQSwgQlxyXG5cclxuICAgICAgY2FzZSAnR0dHR0cnOlxyXG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7XHJcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdydcclxuICAgICAgICB9KTtcclxuICAgICAgLy8gQW5ubyBEb21pbmksIEJlZm9yZSBDaHJpc3RcclxuXHJcbiAgICAgIGNhc2UgJ0dHR0cnOlxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7XHJcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSxcclxuICAvLyBZZWFyXHJcbiAgeTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xyXG4gICAgLy8gT3JkaW5hbCBudW1iZXJcclxuICAgIGlmICh0b2tlbiA9PT0gJ3lvJykge1xyXG4gICAgICB2YXIgc2lnbmVkWWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTsgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcclxuXHJcbiAgICAgIHZhciB5ZWFyID0gc2lnbmVkWWVhciA+IDAgPyBzaWduZWRZZWFyIDogMSAtIHNpZ25lZFllYXI7XHJcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHllYXIsIHtcclxuICAgICAgICB1bml0OiAneWVhcidcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy55KGRhdGUsIHRva2VuKTtcclxuICB9LFxyXG4gIC8vIExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJcclxuICBZOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XHJcbiAgICB2YXIgc2lnbmVkV2Vla1llYXIgPSBnZXRVVENXZWVrWWVhcihkYXRlLCBvcHRpb25zKTsgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcclxuXHJcbiAgICB2YXIgd2Vla1llYXIgPSBzaWduZWRXZWVrWWVhciA+IDAgPyBzaWduZWRXZWVrWWVhciA6IDEgLSBzaWduZWRXZWVrWWVhcjsgLy8gVHdvIGRpZ2l0IHllYXJcclxuXHJcbiAgICBpZiAodG9rZW4gPT09ICdZWScpIHtcclxuICAgICAgdmFyIHR3b0RpZ2l0WWVhciA9IHdlZWtZZWFyICUgMTAwO1xyXG4gICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHR3b0RpZ2l0WWVhciwgMik7XHJcbiAgICB9IC8vIE9yZGluYWwgbnVtYmVyXHJcblxyXG5cclxuICAgIGlmICh0b2tlbiA9PT0gJ1lvJykge1xyXG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih3ZWVrWWVhciwge1xyXG4gICAgICAgIHVuaXQ6ICd5ZWFyJ1xyXG4gICAgICB9KTtcclxuICAgIH0gLy8gUGFkZGluZ1xyXG5cclxuXHJcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHdlZWtZZWFyLCB0b2tlbi5sZW5ndGgpO1xyXG4gIH0sXHJcbiAgLy8gSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcclxuICBSOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcclxuICAgIHZhciBpc29XZWVrWWVhciA9IGdldFVUQ0lTT1dlZWtZZWFyKGRhdGUpOyAvLyBQYWRkaW5nXHJcblxyXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29XZWVrWWVhciwgdG9rZW4ubGVuZ3RoKTtcclxuICB9LFxyXG4gIC8vIEV4dGVuZGVkIHllYXIuIFRoaXMgaXMgYSBzaW5nbGUgbnVtYmVyIGRlc2lnbmF0aW5nIHRoZSB5ZWFyIG9mIHRoaXMgY2FsZW5kYXIgc3lzdGVtLlxyXG4gIC8vIFRoZSBtYWluIGRpZmZlcmVuY2UgYmV0d2VlbiBgeWAgYW5kIGB1YCBsb2NhbGl6ZXJzIGFyZSBCLkMuIHllYXJzOlxyXG4gIC8vIHwgWWVhciB8IGB5YCB8IGB1YCB8XHJcbiAgLy8gfC0tLS0tLXwtLS0tLXwtLS0tLXxcclxuICAvLyB8IEFDIDEgfCAgIDEgfCAgIDEgfFxyXG4gIC8vIHwgQkMgMSB8ICAgMSB8ICAgMCB8XHJcbiAgLy8gfCBCQyAyIHwgICAyIHwgIC0xIHxcclxuICAvLyBBbHNvIGB5eWAgYWx3YXlzIHJldHVybnMgdGhlIGxhc3QgdHdvIGRpZ2l0cyBvZiBhIHllYXIsXHJcbiAgLy8gd2hpbGUgYHV1YCBwYWRzIHNpbmdsZSBkaWdpdCB5ZWFycyB0byAyIGNoYXJhY3RlcnMgYW5kIHJldHVybnMgb3RoZXIgeWVhcnMgdW5jaGFuZ2VkLlxyXG4gIHU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xyXG4gICAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XHJcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHllYXIsIHRva2VuLmxlbmd0aCk7XHJcbiAgfSxcclxuICAvLyBRdWFydGVyXHJcbiAgUTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xyXG4gICAgdmFyIHF1YXJ0ZXIgPSBNYXRoLmNlaWwoKGRhdGUuZ2V0VVRDTW9udGgoKSArIDEpIC8gMyk7XHJcblxyXG4gICAgc3dpdGNoICh0b2tlbikge1xyXG4gICAgICAvLyAxLCAyLCAzLCA0XHJcbiAgICAgIGNhc2UgJ1EnOlxyXG4gICAgICAgIHJldHVybiBTdHJpbmcocXVhcnRlcik7XHJcbiAgICAgIC8vIDAxLCAwMiwgMDMsIDA0XHJcblxyXG4gICAgICBjYXNlICdRUSc6XHJcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhxdWFydGVyLCAyKTtcclxuICAgICAgLy8gMXN0LCAybmQsIDNyZCwgNHRoXHJcblxyXG4gICAgICBjYXNlICdRbyc6XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIocXVhcnRlciwge1xyXG4gICAgICAgICAgdW5pdDogJ3F1YXJ0ZXInXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIC8vIFExLCBRMiwgUTMsIFE0XHJcblxyXG4gICAgICBjYXNlICdRUVEnOlxyXG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcclxuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxyXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxyXG5cclxuICAgICAgY2FzZSAnUVFRUVEnOlxyXG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcclxuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcclxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxyXG5cclxuICAgICAgY2FzZSAnUVFRUSc6XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xyXG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcclxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgLy8gU3RhbmQtYWxvbmUgcXVhcnRlclxyXG4gIHE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcclxuICAgIHZhciBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldFVUQ01vbnRoKCkgKyAxKSAvIDMpO1xyXG5cclxuICAgIHN3aXRjaCAodG9rZW4pIHtcclxuICAgICAgLy8gMSwgMiwgMywgNFxyXG4gICAgICBjYXNlICdxJzpcclxuICAgICAgICByZXR1cm4gU3RyaW5nKHF1YXJ0ZXIpO1xyXG4gICAgICAvLyAwMSwgMDIsIDAzLCAwNFxyXG5cclxuICAgICAgY2FzZSAncXEnOlxyXG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MocXVhcnRlciwgMik7XHJcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxyXG5cclxuICAgICAgY2FzZSAncW8nOlxyXG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHF1YXJ0ZXIsIHtcclxuICAgICAgICAgIHVuaXQ6ICdxdWFydGVyJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxyXG5cclxuICAgICAgY2FzZSAncXFxJzpcclxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XHJcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcclxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAvLyAxLCAyLCAzLCA0IChuYXJyb3cgcXVhcnRlcjsgY291bGQgYmUgbm90IG51bWVyaWNhbClcclxuXHJcbiAgICAgIGNhc2UgJ3FxcXFxJzpcclxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XHJcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXHJcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcclxuICAgICAgICB9KTtcclxuICAgICAgLy8gMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi5cclxuXHJcbiAgICAgIGNhc2UgJ3FxcXEnOlxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcclxuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXHJcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9LFxyXG4gIC8vIE1vbnRoXHJcbiAgTTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xyXG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xyXG5cclxuICAgIHN3aXRjaCAodG9rZW4pIHtcclxuICAgICAgY2FzZSAnTSc6XHJcbiAgICAgIGNhc2UgJ01NJzpcclxuICAgICAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLk0oZGF0ZSwgdG9rZW4pO1xyXG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCAxMnRoXHJcblxyXG4gICAgICBjYXNlICdNbyc6XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobW9udGggKyAxLCB7XHJcbiAgICAgICAgICB1bml0OiAnbW9udGgnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xyXG5cclxuICAgICAgY2FzZSAnTU1NJzpcclxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcclxuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxyXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIC8vIEosIEYsIC4uLiwgRFxyXG5cclxuICAgICAgY2FzZSAnTU1NTU0nOlxyXG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xyXG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxyXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXHJcblxyXG4gICAgICBjYXNlICdNTU1NJzpcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcclxuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXHJcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9LFxyXG4gIC8vIFN0YW5kLWFsb25lIG1vbnRoXHJcbiAgTDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xyXG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xyXG5cclxuICAgIHN3aXRjaCAodG9rZW4pIHtcclxuICAgICAgLy8gMSwgMiwgLi4uLCAxMlxyXG4gICAgICBjYXNlICdMJzpcclxuICAgICAgICByZXR1cm4gU3RyaW5nKG1vbnRoICsgMSk7XHJcbiAgICAgIC8vIDAxLCAwMiwgLi4uLCAxMlxyXG5cclxuICAgICAgY2FzZSAnTEwnOlxyXG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobW9udGggKyAxLCAyKTtcclxuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxyXG5cclxuICAgICAgY2FzZSAnTG8nOlxyXG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKG1vbnRoICsgMSwge1xyXG4gICAgICAgICAgdW5pdDogJ21vbnRoJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcclxuXHJcbiAgICAgIGNhc2UgJ0xMTCc6XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XHJcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcclxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAvLyBKLCBGLCAuLi4sIERcclxuXHJcbiAgICAgIGNhc2UgJ0xMTExMJzpcclxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcclxuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcclxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxyXG5cclxuICAgICAgY2FzZSAnTExMTCc6XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XHJcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxyXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSxcclxuICAvLyBMb2NhbCB3ZWVrIG9mIHllYXJcclxuICB3OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XHJcbiAgICB2YXIgd2VlayA9IGdldFVUQ1dlZWsoZGF0ZSwgb3B0aW9ucyk7XHJcblxyXG4gICAgaWYgKHRva2VuID09PSAnd28nKSB7XHJcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHdlZWssIHtcclxuICAgICAgICB1bml0OiAnd2VlaydcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh3ZWVrLCB0b2tlbi5sZW5ndGgpO1xyXG4gIH0sXHJcbiAgLy8gSVNPIHdlZWsgb2YgeWVhclxyXG4gIEk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcclxuICAgIHZhciBpc29XZWVrID0gZ2V0VVRDSVNPV2VlayhkYXRlKTtcclxuXHJcbiAgICBpZiAodG9rZW4gPT09ICdJbycpIHtcclxuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaXNvV2Vlaywge1xyXG4gICAgICAgIHVuaXQ6ICd3ZWVrJ1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb1dlZWssIHRva2VuLmxlbmd0aCk7XHJcbiAgfSxcclxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXHJcbiAgZDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xyXG4gICAgaWYgKHRva2VuID09PSAnZG8nKSB7XHJcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDRGF0ZSgpLCB7XHJcbiAgICAgICAgdW5pdDogJ2RhdGUnXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuZChkYXRlLCB0b2tlbik7XHJcbiAgfSxcclxuICAvLyBEYXkgb2YgeWVhclxyXG4gIEQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcclxuICAgIHZhciBkYXlPZlllYXIgPSBnZXRVVENEYXlPZlllYXIoZGF0ZSk7XHJcblxyXG4gICAgaWYgKHRva2VuID09PSAnRG8nKSB7XHJcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRheU9mWWVhciwge1xyXG4gICAgICAgIHVuaXQ6ICdkYXlPZlllYXInXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF5T2ZZZWFyLCB0b2tlbi5sZW5ndGgpO1xyXG4gIH0sXHJcbiAgLy8gRGF5IG9mIHdlZWtcclxuICBFOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XHJcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcclxuXHJcbiAgICBzd2l0Y2ggKHRva2VuKSB7XHJcbiAgICAgIC8vIFR1ZVxyXG4gICAgICBjYXNlICdFJzpcclxuICAgICAgY2FzZSAnRUUnOlxyXG4gICAgICBjYXNlICdFRUUnOlxyXG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XHJcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcclxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAvLyBUXHJcblxyXG4gICAgICBjYXNlICdFRUVFRSc6XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcclxuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcclxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAvLyBUdVxyXG5cclxuICAgICAgY2FzZSAnRUVFRUVFJzpcclxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xyXG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXHJcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcclxuICAgICAgICB9KTtcclxuICAgICAgLy8gVHVlc2RheVxyXG5cclxuICAgICAgY2FzZSAnRUVFRSc6XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcclxuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXHJcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9LFxyXG4gIC8vIExvY2FsIGRheSBvZiB3ZWVrXHJcbiAgZTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xyXG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XHJcbiAgICB2YXIgbG9jYWxEYXlPZldlZWsgPSAoZGF5T2ZXZWVrIC0gb3B0aW9ucy53ZWVrU3RhcnRzT24gKyA4KSAlIDcgfHwgNztcclxuXHJcbiAgICBzd2l0Y2ggKHRva2VuKSB7XHJcbiAgICAgIC8vIE51bWVyaWNhbCB2YWx1ZSAoTnRoIGRheSBvZiB3ZWVrIHdpdGggY3VycmVudCBsb2NhbGUgb3Igd2Vla1N0YXJ0c09uKVxyXG4gICAgICBjYXNlICdlJzpcclxuICAgICAgICByZXR1cm4gU3RyaW5nKGxvY2FsRGF5T2ZXZWVrKTtcclxuICAgICAgLy8gUGFkZGVkIG51bWVyaWNhbCB2YWx1ZVxyXG5cclxuICAgICAgY2FzZSAnZWUnOlxyXG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobG9jYWxEYXlPZldlZWssIDIpO1xyXG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCA3dGhcclxuXHJcbiAgICAgIGNhc2UgJ2VvJzpcclxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihsb2NhbERheU9mV2Vlaywge1xyXG4gICAgICAgICAgdW5pdDogJ2RheSdcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgIGNhc2UgJ2VlZSc6XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcclxuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxyXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIC8vIFRcclxuXHJcbiAgICAgIGNhc2UgJ2VlZWVlJzpcclxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xyXG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxyXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIC8vIFR1XHJcblxyXG4gICAgICBjYXNlICdlZWVlZWUnOlxyXG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XHJcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcclxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAvLyBUdWVzZGF5XHJcblxyXG4gICAgICBjYXNlICdlZWVlJzpcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xyXG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcclxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgLy8gU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWtcclxuICBjOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XHJcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcclxuICAgIHZhciBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xyXG5cclxuICAgIHN3aXRjaCAodG9rZW4pIHtcclxuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChzYW1lIGFzIGluIGBlYClcclxuICAgICAgY2FzZSAnYyc6XHJcbiAgICAgICAgcmV0dXJuIFN0cmluZyhsb2NhbERheU9mV2Vlayk7XHJcbiAgICAgIC8vIFBhZGRlZCBudW1lcmljYWwgdmFsdWVcclxuXHJcbiAgICAgIGNhc2UgJ2NjJzpcclxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGxvY2FsRGF5T2ZXZWVrLCB0b2tlbi5sZW5ndGgpO1xyXG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCA3dGhcclxuXHJcbiAgICAgIGNhc2UgJ2NvJzpcclxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihsb2NhbERheU9mV2Vlaywge1xyXG4gICAgICAgICAgdW5pdDogJ2RheSdcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgIGNhc2UgJ2NjYyc6XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcclxuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxyXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIC8vIFRcclxuXHJcbiAgICAgIGNhc2UgJ2NjY2NjJzpcclxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xyXG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxyXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIC8vIFR1XHJcblxyXG4gICAgICBjYXNlICdjY2NjY2MnOlxyXG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XHJcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcclxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAvLyBUdWVzZGF5XHJcblxyXG4gICAgICBjYXNlICdjY2NjJzpcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xyXG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcclxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgLy8gSVNPIGRheSBvZiB3ZWVrXHJcbiAgaTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xyXG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XHJcbiAgICB2YXIgaXNvRGF5T2ZXZWVrID0gZGF5T2ZXZWVrID09PSAwID8gNyA6IGRheU9mV2VlaztcclxuXHJcbiAgICBzd2l0Y2ggKHRva2VuKSB7XHJcbiAgICAgIC8vIDJcclxuICAgICAgY2FzZSAnaSc6XHJcbiAgICAgICAgcmV0dXJuIFN0cmluZyhpc29EYXlPZldlZWspO1xyXG4gICAgICAvLyAwMlxyXG5cclxuICAgICAgY2FzZSAnaWknOlxyXG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvRGF5T2ZXZWVrLCB0b2tlbi5sZW5ndGgpO1xyXG4gICAgICAvLyAybmRcclxuXHJcbiAgICAgIGNhc2UgJ2lvJzpcclxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihpc29EYXlPZldlZWssIHtcclxuICAgICAgICAgIHVuaXQ6ICdkYXknXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIC8vIFR1ZVxyXG5cclxuICAgICAgY2FzZSAnaWlpJzpcclxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xyXG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXHJcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcclxuICAgICAgICB9KTtcclxuICAgICAgLy8gVFxyXG5cclxuICAgICAgY2FzZSAnaWlpaWknOlxyXG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XHJcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXHJcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcclxuICAgICAgICB9KTtcclxuICAgICAgLy8gVHVcclxuXHJcbiAgICAgIGNhc2UgJ2lpaWlpaSc6XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcclxuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxyXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIC8vIFR1ZXNkYXlcclxuXHJcbiAgICAgIGNhc2UgJ2lpaWknOlxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XHJcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxyXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSxcclxuICAvLyBBTSBvciBQTVxyXG4gIGE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcclxuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcclxuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWUgPSBob3VycyAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcclxuXHJcbiAgICBzd2l0Y2ggKHRva2VuKSB7XHJcbiAgICAgIGNhc2UgJ2EnOlxyXG4gICAgICBjYXNlICdhYSc6XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcclxuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxyXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICBjYXNlICdhYWEnOlxyXG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XHJcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcclxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xyXG4gICAgICAgIH0pLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgICBjYXNlICdhYWFhYSc6XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcclxuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcclxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgY2FzZSAnYWFhYSc6XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcclxuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXHJcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9LFxyXG4gIC8vIEFNLCBQTSwgbWlkbmlnaHQsIG5vb25cclxuICBiOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XHJcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XHJcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlO1xyXG5cclxuICAgIGlmIChob3VycyA9PT0gMTIpIHtcclxuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5ub29uO1xyXG4gICAgfSBlbHNlIGlmIChob3VycyA9PT0gMCkge1xyXG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm1pZG5pZ2h0O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gaG91cnMgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XHJcbiAgICB9XHJcblxyXG4gICAgc3dpdGNoICh0b2tlbikge1xyXG4gICAgICBjYXNlICdiJzpcclxuICAgICAgY2FzZSAnYmInOlxyXG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XHJcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcclxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgY2FzZSAnYmJiJzpcclxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xyXG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXHJcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcclxuICAgICAgICB9KS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgY2FzZSAnYmJiYmInOlxyXG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XHJcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXHJcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgIGNhc2UgJ2JiYmInOlxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XHJcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxyXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSxcclxuICAvLyBpbiB0aGUgbW9ybmluZywgaW4gdGhlIGFmdGVybm9vbiwgaW4gdGhlIGV2ZW5pbmcsIGF0IG5pZ2h0XHJcbiAgQjogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xyXG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xyXG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZTtcclxuXHJcbiAgICBpZiAoaG91cnMgPj0gMTcpIHtcclxuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5ldmVuaW5nO1xyXG4gICAgfSBlbHNlIGlmIChob3VycyA+PSAxMikge1xyXG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLmFmdGVybm9vbjtcclxuICAgIH0gZWxzZSBpZiAoaG91cnMgPj0gNCkge1xyXG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm1vcm5pbmc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm5pZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIHN3aXRjaCAodG9rZW4pIHtcclxuICAgICAgY2FzZSAnQic6XHJcbiAgICAgIGNhc2UgJ0JCJzpcclxuICAgICAgY2FzZSAnQkJCJzpcclxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xyXG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXHJcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgIGNhc2UgJ0JCQkJCJzpcclxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xyXG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxyXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICBjYXNlICdCQkJCJzpcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xyXG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcclxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgLy8gSG91ciBbMS0xMl1cclxuICBoOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XHJcbiAgICBpZiAodG9rZW4gPT09ICdobycpIHtcclxuICAgICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpICUgMTI7XHJcbiAgICAgIGlmIChob3VycyA9PT0gMCkgaG91cnMgPSAxMjtcclxuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcclxuICAgICAgICB1bml0OiAnaG91cidcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5oKGRhdGUsIHRva2VuKTtcclxuICB9LFxyXG4gIC8vIEhvdXIgWzAtMjNdXHJcbiAgSDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xyXG4gICAgaWYgKHRva2VuID09PSAnSG8nKSB7XHJcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDSG91cnMoKSwge1xyXG4gICAgICAgIHVuaXQ6ICdob3VyJ1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLkgoZGF0ZSwgdG9rZW4pO1xyXG4gIH0sXHJcbiAgLy8gSG91ciBbMC0xMV1cclxuICBLOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XHJcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMjtcclxuXHJcbiAgICBpZiAodG9rZW4gPT09ICdLbycpIHtcclxuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcclxuICAgICAgICB1bml0OiAnaG91cidcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcclxuICB9LFxyXG4gIC8vIEhvdXIgWzEtMjRdXHJcbiAgazogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xyXG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xyXG4gICAgaWYgKGhvdXJzID09PSAwKSBob3VycyA9IDI0O1xyXG5cclxuICAgIGlmICh0b2tlbiA9PT0gJ2tvJykge1xyXG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3Vycywge1xyXG4gICAgICAgIHVuaXQ6ICdob3VyJ1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGhvdXJzLCB0b2tlbi5sZW5ndGgpO1xyXG4gIH0sXHJcbiAgLy8gTWludXRlXHJcbiAgbTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xyXG4gICAgaWYgKHRva2VuID09PSAnbW8nKSB7XHJcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDTWludXRlcygpLCB7XHJcbiAgICAgICAgdW5pdDogJ21pbnV0ZSdcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5tKGRhdGUsIHRva2VuKTtcclxuICB9LFxyXG4gIC8vIFNlY29uZFxyXG4gIHM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcclxuICAgIGlmICh0b2tlbiA9PT0gJ3NvJykge1xyXG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ1NlY29uZHMoKSwge1xyXG4gICAgICAgIHVuaXQ6ICdzZWNvbmQnXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMucyhkYXRlLCB0b2tlbik7XHJcbiAgfSxcclxuICAvLyBGcmFjdGlvbiBvZiBzZWNvbmRcclxuICBTOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcclxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuUyhkYXRlLCB0b2tlbik7XHJcbiAgfSxcclxuICAvLyBUaW1lem9uZSAoSVNPLTg2MDEuIElmIG9mZnNldCBpcyAwLCBvdXRwdXQgaXMgYWx3YXlzIGAnWidgKVxyXG4gIFg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XHJcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XHJcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcclxuXHJcbiAgICBpZiAodGltZXpvbmVPZmZzZXQgPT09IDApIHtcclxuICAgICAgcmV0dXJuICdaJztcclxuICAgIH1cclxuXHJcbiAgICBzd2l0Y2ggKHRva2VuKSB7XHJcbiAgICAgIC8vIEhvdXJzIGFuZCBvcHRpb25hbCBtaW51dGVzXHJcbiAgICAgIGNhc2UgJ1gnOlxyXG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXModGltZXpvbmVPZmZzZXQpO1xyXG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcclxuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgWFhgXHJcblxyXG4gICAgICBjYXNlICdYWFhYJzpcclxuICAgICAgY2FzZSAnWFgnOlxyXG4gICAgICAgIC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxyXG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCk7XHJcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGggYDpgIGRlbGltaXRlclxyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xyXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGBYWFhgXHJcblxyXG4gICAgICBjYXNlICdYWFhYWCc6XHJcbiAgICAgIGNhc2UgJ1hYWCc6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxyXG5cclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XHJcbiAgICB9XHJcbiAgfSxcclxuICAvLyBUaW1lem9uZSAoSVNPLTg2MDEuIElmIG9mZnNldCBpcyAwLCBvdXRwdXQgaXMgYCcrMDA6MDAnYCBvciBlcXVpdmFsZW50KVxyXG4gIHg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XHJcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XHJcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcclxuXHJcbiAgICBzd2l0Y2ggKHRva2VuKSB7XHJcbiAgICAgIC8vIEhvdXJzIGFuZCBvcHRpb25hbCBtaW51dGVzXHJcbiAgICAgIGNhc2UgJ3gnOlxyXG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXModGltZXpvbmVPZmZzZXQpO1xyXG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcclxuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgeHhgXHJcblxyXG4gICAgICBjYXNlICd4eHh4JzpcclxuICAgICAgY2FzZSAneHgnOlxyXG4gICAgICAgIC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxyXG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCk7XHJcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGggYDpgIGRlbGltaXRlclxyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xyXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGB4eHhgXHJcblxyXG4gICAgICBjYXNlICd4eHh4eCc6XHJcbiAgICAgIGNhc2UgJ3h4eCc6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxyXG5cclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XHJcbiAgICB9XHJcbiAgfSxcclxuICAvLyBUaW1lem9uZSAoR01UKVxyXG4gIE86IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XHJcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XHJcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcclxuXHJcbiAgICBzd2l0Y2ggKHRva2VuKSB7XHJcbiAgICAgIC8vIFNob3J0XHJcbiAgICAgIGNhc2UgJ08nOlxyXG4gICAgICBjYXNlICdPTyc6XHJcbiAgICAgIGNhc2UgJ09PTyc6XHJcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmVTaG9ydCh0aW1lem9uZU9mZnNldCwgJzonKTtcclxuICAgICAgLy8gTG9uZ1xyXG5cclxuICAgICAgY2FzZSAnT09PTyc6XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XHJcbiAgICB9XHJcbiAgfSxcclxuICAvLyBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0aW9uKVxyXG4gIHo6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XHJcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XHJcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcclxuXHJcbiAgICBzd2l0Y2ggKHRva2VuKSB7XHJcbiAgICAgIC8vIFNob3J0XHJcbiAgICAgIGNhc2UgJ3onOlxyXG4gICAgICBjYXNlICd6eic6XHJcbiAgICAgIGNhc2UgJ3p6eic6XHJcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmVTaG9ydCh0aW1lem9uZU9mZnNldCwgJzonKTtcclxuICAgICAgLy8gTG9uZ1xyXG5cclxuICAgICAgY2FzZSAnenp6eic6XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XHJcbiAgICB9XHJcbiAgfSxcclxuICAvLyBTZWNvbmRzIHRpbWVzdGFtcFxyXG4gIHQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XHJcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XHJcbiAgICB2YXIgdGltZXN0YW1wID0gTWF0aC5mbG9vcihvcmlnaW5hbERhdGUuZ2V0VGltZSgpIC8gMTAwMCk7XHJcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRpbWVzdGFtcCwgdG9rZW4ubGVuZ3RoKTtcclxuICB9LFxyXG4gIC8vIE1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcclxuICBUOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xyXG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xyXG4gICAgdmFyIHRpbWVzdGFtcCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lKCk7XHJcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRpbWVzdGFtcCwgdG9rZW4ubGVuZ3RoKTtcclxuICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZVNob3J0KG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcclxuICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XHJcbiAgdmFyIGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XHJcbiAgdmFyIGhvdXJzID0gTWF0aC5mbG9vcihhYnNPZmZzZXQgLyA2MCk7XHJcbiAgdmFyIG1pbnV0ZXMgPSBhYnNPZmZzZXQgJSA2MDtcclxuXHJcbiAgaWYgKG1pbnV0ZXMgPT09IDApIHtcclxuICAgIHJldHVybiBzaWduICsgU3RyaW5nKGhvdXJzKTtcclxuICB9XHJcblxyXG4gIHZhciBkZWxpbWl0ZXIgPSBkaXJ0eURlbGltaXRlciB8fCAnJztcclxuICByZXR1cm4gc2lnbiArIFN0cmluZyhob3VycykgKyBkZWxpbWl0ZXIgKyBhZGRMZWFkaW5nWmVyb3MobWludXRlcywgMik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyhvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKSB7XHJcbiAgaWYgKG9mZnNldCAlIDYwID09PSAwKSB7XHJcbiAgICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XHJcbiAgICByZXR1cm4gc2lnbiArIGFkZExlYWRpbmdaZXJvcyhNYXRoLmFicyhvZmZzZXQpIC8gNjAsIDIpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZShvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKSB7XHJcbiAgdmFyIGRlbGltaXRlciA9IGRpcnR5RGVsaW1pdGVyIHx8ICcnO1xyXG4gIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcclxuICB2YXIgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KTtcclxuICB2YXIgaG91cnMgPSBhZGRMZWFkaW5nWmVyb3MoTWF0aC5mbG9vcihhYnNPZmZzZXQgLyA2MCksIDIpO1xyXG4gIHZhciBtaW51dGVzID0gYWRkTGVhZGluZ1plcm9zKGFic09mZnNldCAlIDYwLCAyKTtcclxuICByZXR1cm4gc2lnbiArIGhvdXJzICsgZGVsaW1pdGVyICsgbWludXRlcztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0dGVyczsiLCJpbXBvcnQgYWRkTGVhZGluZ1plcm9zIGZyb20gXCIuLi8uLi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanNcIjtcclxuLypcclxuICogfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG4gKiB8LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XHJcbiAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcclxuICogfCAgZCAgfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgfCAgRCAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG4gKiB8ICBoICB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICB8ICBIICB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICB8XHJcbiAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcclxuICogfCAgcyAgfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUyAgfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgfFxyXG4gKiB8ICB5ICB8IFllYXIgKGFicykgICAgICAgICAgICAgICAgICAgICB8ICBZICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XHJcbiAqXHJcbiAqIExldHRlcnMgbWFya2VkIGJ5ICogYXJlIG5vdCBpbXBsZW1lbnRlZCBidXQgcmVzZXJ2ZWQgYnkgVW5pY29kZSBzdGFuZGFyZC5cclxuICovXHJcblxyXG52YXIgZm9ybWF0dGVycyA9IHtcclxuICAvLyBZZWFyXHJcbiAgeTogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XHJcbiAgICAvLyBGcm9tIGh0dHA6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtMzEvdHIzNS1kYXRlcy5odG1sI0RhdGVfRm9ybWF0X3Rva2Vuc1xyXG4gICAgLy8gfCBZZWFyICAgICB8ICAgICB5IHwgeXkgfCAgIHl5eSB8ICB5eXl5IHwgeXl5eXkgfFxyXG4gICAgLy8gfC0tLS0tLS0tLS18LS0tLS0tLXwtLS0tfC0tLS0tLS18LS0tLS0tLXwtLS0tLS0tfFxyXG4gICAgLy8gfCBBRCAxICAgICB8ICAgICAxIHwgMDEgfCAgIDAwMSB8ICAwMDAxIHwgMDAwMDEgfFxyXG4gICAgLy8gfCBBRCAxMiAgICB8ICAgIDEyIHwgMTIgfCAgIDAxMiB8ICAwMDEyIHwgMDAwMTIgfFxyXG4gICAgLy8gfCBBRCAxMjMgICB8ICAgMTIzIHwgMjMgfCAgIDEyMyB8ICAwMTIzIHwgMDAxMjMgfFxyXG4gICAgLy8gfCBBRCAxMjM0ICB8ICAxMjM0IHwgMzQgfCAgMTIzNCB8ICAxMjM0IHwgMDEyMzQgfFxyXG4gICAgLy8gfCBBRCAxMjM0NSB8IDEyMzQ1IHwgNDUgfCAxMjM0NSB8IDEyMzQ1IHwgMTIzNDUgfFxyXG4gICAgdmFyIHNpZ25lZFllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7IC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXHJcblxyXG4gICAgdmFyIHllYXIgPSBzaWduZWRZZWFyID4gMCA/IHNpZ25lZFllYXIgOiAxIC0gc2lnbmVkWWVhcjtcclxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModG9rZW4gPT09ICd5eScgPyB5ZWFyICUgMTAwIDogeWVhciwgdG9rZW4ubGVuZ3RoKTtcclxuICB9LFxyXG4gIC8vIE1vbnRoXHJcbiAgTTogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XHJcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XHJcbiAgICByZXR1cm4gdG9rZW4gPT09ICdNJyA/IFN0cmluZyhtb250aCArIDEpIDogYWRkTGVhZGluZ1plcm9zKG1vbnRoICsgMSwgMik7XHJcbiAgfSxcclxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXHJcbiAgZDogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XHJcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDRGF0ZSgpLCB0b2tlbi5sZW5ndGgpO1xyXG4gIH0sXHJcbiAgLy8gQU0gb3IgUE1cclxuICBhOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcclxuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXRlLmdldFVUQ0hvdXJzKCkgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XHJcblxyXG4gICAgc3dpdGNoICh0b2tlbikge1xyXG4gICAgICBjYXNlICdhJzpcclxuICAgICAgY2FzZSAnYWEnOlxyXG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWUudG9VcHBlckNhc2UoKTtcclxuXHJcbiAgICAgIGNhc2UgJ2FhYSc6XHJcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZTtcclxuXHJcbiAgICAgIGNhc2UgJ2FhYWFhJzpcclxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlWzBdO1xyXG5cclxuICAgICAgY2FzZSAnYWFhYSc6XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZSA9PT0gJ2FtJyA/ICdhLm0uJyA6ICdwLm0uJztcclxuICAgIH1cclxuICB9LFxyXG4gIC8vIEhvdXIgWzEtMTJdXHJcbiAgaDogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XHJcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyIHx8IDEyLCB0b2tlbi5sZW5ndGgpO1xyXG4gIH0sXHJcbiAgLy8gSG91ciBbMC0yM11cclxuICBIOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcclxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENIb3VycygpLCB0b2tlbi5sZW5ndGgpO1xyXG4gIH0sXHJcbiAgLy8gTWludXRlXHJcbiAgbTogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XHJcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDTWludXRlcygpLCB0b2tlbi5sZW5ndGgpO1xyXG4gIH0sXHJcbiAgLy8gU2Vjb25kXHJcbiAgczogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XHJcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDU2Vjb25kcygpLCB0b2tlbi5sZW5ndGgpO1xyXG4gIH0sXHJcbiAgLy8gRnJhY3Rpb24gb2Ygc2Vjb25kXHJcbiAgUzogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XHJcbiAgICB2YXIgbnVtYmVyT2ZEaWdpdHMgPSB0b2tlbi5sZW5ndGg7XHJcbiAgICB2YXIgbWlsbGlzZWNvbmRzID0gZGF0ZS5nZXRVVENNaWxsaXNlY29uZHMoKTtcclxuICAgIHZhciBmcmFjdGlvbmFsU2Vjb25kcyA9IE1hdGguZmxvb3IobWlsbGlzZWNvbmRzICogTWF0aC5wb3coMTAsIG51bWJlck9mRGlnaXRzIC0gMykpO1xyXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhmcmFjdGlvbmFsU2Vjb25kcywgdG9rZW4ubGVuZ3RoKTtcclxuICB9XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdHRlcnM7IiwidmFyIGRhdGVMb25nRm9ybWF0dGVyID0gZnVuY3Rpb24gKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcclxuICBzd2l0Y2ggKHBhdHRlcm4pIHtcclxuICAgIGNhc2UgJ1AnOlxyXG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcclxuICAgICAgICB3aWR0aDogJ3Nob3J0J1xyXG4gICAgICB9KTtcclxuXHJcbiAgICBjYXNlICdQUCc6XHJcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xyXG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xyXG4gICAgICB9KTtcclxuXHJcbiAgICBjYXNlICdQUFAnOlxyXG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcclxuICAgICAgICB3aWR0aDogJ2xvbmcnXHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGNhc2UgJ1BQUFAnOlxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XHJcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xyXG4gICAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG52YXIgdGltZUxvbmdGb3JtYXR0ZXIgPSBmdW5jdGlvbiAocGF0dGVybiwgZm9ybWF0TG9uZykge1xyXG4gIHN3aXRjaCAocGF0dGVybikge1xyXG4gICAgY2FzZSAncCc6XHJcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xyXG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGNhc2UgJ3BwJzpcclxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XHJcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGNhc2UgJ3BwcCc6XHJcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xyXG4gICAgICAgIHdpZHRoOiAnbG9uZydcclxuICAgICAgfSk7XHJcblxyXG4gICAgY2FzZSAncHBwcCc6XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcclxuICAgICAgICB3aWR0aDogJ2Z1bGwnXHJcbiAgICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbnZhciBkYXRlVGltZUxvbmdGb3JtYXR0ZXIgPSBmdW5jdGlvbiAocGF0dGVybiwgZm9ybWF0TG9uZykge1xyXG4gIHZhciBtYXRjaFJlc3VsdCA9IHBhdHRlcm4ubWF0Y2goLyhQKykocCspPy8pIHx8IFtdO1xyXG4gIHZhciBkYXRlUGF0dGVybiA9IG1hdGNoUmVzdWx0WzFdO1xyXG4gIHZhciB0aW1lUGF0dGVybiA9IG1hdGNoUmVzdWx0WzJdO1xyXG5cclxuICBpZiAoIXRpbWVQYXR0ZXJuKSB7XHJcbiAgICByZXR1cm4gZGF0ZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZyk7XHJcbiAgfVxyXG5cclxuICB2YXIgZGF0ZVRpbWVGb3JtYXQ7XHJcblxyXG4gIHN3aXRjaCAoZGF0ZVBhdHRlcm4pIHtcclxuICAgIGNhc2UgJ1AnOlxyXG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xyXG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXHJcbiAgICAgIH0pO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlICdQUCc6XHJcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XHJcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXHJcbiAgICAgIH0pO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlICdQUFAnOlxyXG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xyXG4gICAgICAgIHdpZHRoOiAnbG9uZydcclxuICAgICAgfSk7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgJ1BQUFAnOlxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcclxuICAgICAgICB3aWR0aDogJ2Z1bGwnXHJcbiAgICAgIH0pO1xyXG4gICAgICBicmVhaztcclxuICB9XHJcblxyXG4gIHJldHVybiBkYXRlVGltZUZvcm1hdC5yZXBsYWNlKCd7e2RhdGV9fScsIGRhdGVMb25nRm9ybWF0dGVyKGRhdGVQYXR0ZXJuLCBmb3JtYXRMb25nKSkucmVwbGFjZSgne3t0aW1lfX0nLCB0aW1lTG9uZ0Zvcm1hdHRlcih0aW1lUGF0dGVybiwgZm9ybWF0TG9uZykpO1xyXG59O1xyXG5cclxudmFyIGxvbmdGb3JtYXR0ZXJzID0ge1xyXG4gIHA6IHRpbWVMb25nRm9ybWF0dGVyLFxyXG4gIFA6IGRhdGVUaW1lTG9uZ0Zvcm1hdHRlclxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBsb25nRm9ybWF0dGVyczsiLCIvKipcclxuICogR29vZ2xlIENocm9tZSBhcyBvZiA2Ny4wLjMzOTYuODcgaW50cm9kdWNlZCB0aW1lem9uZXMgd2l0aCBvZmZzZXQgdGhhdCBpbmNsdWRlcyBzZWNvbmRzLlxyXG4gKiBUaGV5IHVzdWFsbHkgYXBwZWFyIGZvciBkYXRlcyB0aGF0IGRlbm90ZSB0aW1lIGJlZm9yZSB0aGUgdGltZXpvbmVzIHdlcmUgaW50cm9kdWNlZFxyXG4gKiAoZS5nLiBmb3IgJ0V1cm9wZS9QcmFndWUnIHRpbWV6b25lIHRoZSBvZmZzZXQgaXMgR01UKzAwOjU3OjQ0IGJlZm9yZSAxIE9jdG9iZXIgMTg5MVxyXG4gKiBhbmQgR01UKzAxOjAwOjAwIGFmdGVyIHRoYXQgZGF0ZSlcclxuICpcclxuICogRGF0ZSNnZXRUaW1lem9uZU9mZnNldCByZXR1cm5zIHRoZSBvZmZzZXQgaW4gbWludXRlcyBhbmQgd291bGQgcmV0dXJuIDU3IGZvciB0aGUgZXhhbXBsZSBhYm92ZSxcclxuICogd2hpY2ggd291bGQgbGVhZCB0byBpbmNvcnJlY3QgY2FsY3VsYXRpb25zLlxyXG4gKlxyXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHRpbWV6b25lIG9mZnNldCBpbiBtaWxsaXNlY29uZHMgdGhhdCB0YWtlcyBzZWNvbmRzIGluIGFjY291bnQuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGUpIHtcclxuICB2YXIgdXRjRGF0ZSA9IG5ldyBEYXRlKERhdGUuVVRDKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSwgZGF0ZS5nZXRIb3VycygpLCBkYXRlLmdldE1pbnV0ZXMoKSwgZGF0ZS5nZXRTZWNvbmRzKCksIGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkpKTtcclxuICB1dGNEYXRlLnNldFVUQ0Z1bGxZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSk7XHJcbiAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpIC0gdXRjRGF0ZS5nZXRUaW1lKCk7XHJcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcclxuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XHJcbnZhciBNSUxMSVNFQ09ORFNfSU5fREFZID0gODY0MDAwMDA7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0RheU9mWWVhcihkaXJ0eURhdGUpIHtcclxuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcclxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xyXG4gIHZhciB0aW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcclxuICBkYXRlLnNldFVUQ01vbnRoKDAsIDEpO1xyXG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XHJcbiAgdmFyIHN0YXJ0T2ZZZWFyVGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XHJcbiAgdmFyIGRpZmZlcmVuY2UgPSB0aW1lc3RhbXAgLSBzdGFydE9mWWVhclRpbWVzdGFtcDtcclxuICByZXR1cm4gTWF0aC5mbG9vcihkaWZmZXJlbmNlIC8gTUlMTElTRUNPTkRTX0lOX0RBWSkgKyAxO1xyXG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XHJcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xyXG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSkge1xyXG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xyXG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XHJcbiAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XHJcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIgPSBuZXcgRGF0ZSgwKTtcclxuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIgKyAxLCAwLCA0KTtcclxuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xyXG4gIHZhciBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mVVRDSVNPV2Vlayhmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyKTtcclxuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhciA9IG5ldyBEYXRlKDApO1xyXG4gIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgNCk7XHJcbiAgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcclxuICB2YXIgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhcik7XHJcblxyXG4gIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mTmV4dFllYXIuZ2V0VGltZSgpKSB7XHJcbiAgICByZXR1cm4geWVhciArIDE7XHJcbiAgfSBlbHNlIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mVGhpc1llYXIuZ2V0VGltZSgpKSB7XHJcbiAgICByZXR1cm4geWVhcjtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIHllYXIgLSAxO1xyXG4gIH1cclxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xyXG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7XHJcbmltcG9ydCBzdGFydE9mVVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xyXG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcclxudmFyIE1JTExJU0VDT05EU19JTl9XRUVLID0gNjA0ODAwMDAwO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENJU09XZWVrKGRpcnR5RGF0ZSkge1xyXG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xyXG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XHJcbiAgdmFyIGRpZmYgPSBzdGFydE9mVVRDSVNPV2VlayhkYXRlKS5nZXRUaW1lKCkgLSBzdGFydE9mVVRDSVNPV2Vla1llYXIoZGF0ZSkuZ2V0VGltZSgpOyAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudFxyXG4gIC8vIChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSB3ZWVrIG9mIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdClcclxuXHJcbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIE1JTExJU0VDT05EU19JTl9XRUVLKSArIDE7XHJcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcclxuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XHJcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcclxuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7XHJcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xyXG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJGZpcnN0V2Vla0NvbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcclxuXHJcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XHJcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcclxuICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcclxuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xyXG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkZmlyc3RXZWVrQ29uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX29wdGlvbnMkZmlyc3RXZWVrQ29uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRmaXJzdFdlZWtDb24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMSk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMSBhbmQgNyBfYW5kXyBpcyBub3QgTmFOXHJcblxyXG4gIGlmICghKGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA+PSAxICYmIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA8PSA3KSkge1xyXG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2ZpcnN0V2Vla0NvbnRhaW5zRGF0ZSBtdXN0IGJlIGJldHdlZW4gMSBhbmQgNyBpbmNsdXNpdmVseScpO1xyXG4gIH1cclxuXHJcbiAgdmFyIGZpcnN0V2Vla09mTmV4dFllYXIgPSBuZXcgRGF0ZSgwKTtcclxuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIgKyAxLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xyXG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XHJcbiAgdmFyIHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZVVENXZWVrKGZpcnN0V2Vla09mTmV4dFllYXIsIG9wdGlvbnMpO1xyXG4gIHZhciBmaXJzdFdlZWtPZlRoaXNZZWFyID0gbmV3IERhdGUoMCk7XHJcbiAgZmlyc3RXZWVrT2ZUaGlzWWVhci5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xyXG4gIGZpcnN0V2Vla09mVGhpc1llYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XHJcbiAgdmFyIHN0YXJ0T2ZUaGlzWWVhciA9IHN0YXJ0T2ZVVENXZWVrKGZpcnN0V2Vla09mVGhpc1llYXIsIG9wdGlvbnMpO1xyXG5cclxuICBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZk5leHRZZWFyLmdldFRpbWUoKSkge1xyXG4gICAgcmV0dXJuIHllYXIgKyAxO1xyXG4gIH0gZWxzZSBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xyXG4gICAgcmV0dXJuIHllYXI7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiB5ZWFyIC0gMTtcclxuICB9XHJcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcclxuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xyXG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWtZZWFyIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vla1llYXIvaW5kZXguanNcIjtcclxuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XHJcbnZhciBNSUxMSVNFQ09ORFNfSU5fV0VFSyA9IDYwNDgwMDAwMDtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcclxuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcclxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xyXG4gIHZhciBkaWZmID0gc3RhcnRPZlVUQ1dlZWsoZGF0ZSwgb3B0aW9ucykuZ2V0VGltZSgpIC0gc3RhcnRPZlVUQ1dlZWtZZWFyKGRhdGUsIG9wdGlvbnMpLmdldFRpbWUoKTsgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXJcclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnRcclxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXHJcblxyXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBNSUxMSVNFQ09ORFNfSU5fV0VFSykgKyAxO1xyXG59IiwidmFyIHByb3RlY3RlZERheU9mWWVhclRva2VucyA9IFsnRCcsICdERCddO1xyXG52YXIgcHJvdGVjdGVkV2Vla1llYXJUb2tlbnMgPSBbJ1lZJywgJ1lZWVknXTtcclxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4odG9rZW4pIHtcclxuICByZXR1cm4gcHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW5zLmluZGV4T2YodG9rZW4pICE9PSAtMTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHRva2VuKSB7XHJcbiAgcmV0dXJuIHByb3RlY3RlZFdlZWtZZWFyVG9rZW5zLmluZGV4T2YodG9rZW4pICE9PSAtMTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gdGhyb3dQcm90ZWN0ZWRFcnJvcih0b2tlbiwgZm9ybWF0LCBpbnB1dCkge1xyXG4gIGlmICh0b2tlbiA9PT0gJ1lZWVknKSB7XHJcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgeXl5eWAgaW5zdGVhZCBvZiBgWVlZWWAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIHllYXJzIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcIikpO1xyXG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdZWScpIHtcclxuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGB5eWAgaW5zdGVhZCBvZiBgWVlgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyB5ZWFycyB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXCIpKTtcclxuICB9IGVsc2UgaWYgKHRva2VuID09PSAnRCcpIHtcclxuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGBkYCBpbnN0ZWFkIG9mIGBEYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFwiKSk7XHJcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ0REJykge1xyXG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYGRkYCBpbnN0ZWFkIG9mIGBERGAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcIikpO1xyXG4gIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xyXG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XHJcbiAgfVxyXG59IiwiaW1wb3J0IGdldFVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xyXG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7XHJcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDSVNPV2Vla1llYXIoZGlydHlEYXRlKSB7XHJcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XHJcbiAgdmFyIHllYXIgPSBnZXRVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpO1xyXG4gIHZhciBmb3VydGhPZkphbnVhcnkgPSBuZXcgRGF0ZSgwKTtcclxuICBmb3VydGhPZkphbnVhcnkuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgNCk7XHJcbiAgZm91cnRoT2ZKYW51YXJ5LnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xyXG4gIHZhciBkYXRlID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5KTtcclxuICByZXR1cm4gZGF0ZTtcclxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xyXG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ0lTT1dlZWsoZGlydHlEYXRlKSB7XHJcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XHJcbiAgdmFyIHdlZWtTdGFydHNPbiA9IDE7XHJcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcclxuICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcclxuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XHJcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpIC0gZGlmZik7XHJcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcclxuICByZXR1cm4gZGF0ZTtcclxufSIsImltcG9ydCBnZXRVVENXZWVrWWVhciBmcm9tIFwiLi4vZ2V0VVRDV2Vla1llYXIvaW5kZXguanNcIjtcclxuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XHJcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcclxuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7XHJcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENXZWVrWWVhcihkaXJ0eURhdGUsIG9wdGlvbnMpIHtcclxuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyRmaXJzdFdlZWtDb24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XHJcblxyXG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xyXG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XHJcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyRmaXJzdFdlZWtDb24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRmaXJzdFdlZWtDb24gIT09IHZvaWQgMCA/IF9vcHRpb25zJGZpcnN0V2Vla0NvbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8uZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAxKTtcclxuICB2YXIgeWVhciA9IGdldFVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgb3B0aW9ucyk7XHJcbiAgdmFyIGZpcnN0V2VlayA9IG5ldyBEYXRlKDApO1xyXG4gIGZpcnN0V2Vlay5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xyXG4gIGZpcnN0V2Vlay5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcclxuICB2YXIgZGF0ZSA9IHN0YXJ0T2ZVVENXZWVrKGZpcnN0V2Vlaywgb3B0aW9ucyk7XHJcbiAgcmV0dXJuIGRhdGU7XHJcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcclxuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XHJcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiO1xyXG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcclxuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyR3ZWVrU3RhcnRzT24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XHJcblxyXG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xyXG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XHJcbiAgdmFyIHdlZWtTdGFydHNPbiA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyR3ZWVrU3RhcnRzT24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gIT09IHZvaWQgMCA/IF9vcHRpb25zJHdlZWtTdGFydHNPbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8ud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAwKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cclxuXHJcbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XHJcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XHJcbiAgfVxyXG5cclxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xyXG4gIHZhciBkYXkgPSBkYXRlLmdldFVUQ0RheSgpO1xyXG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcclxuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgLSBkaWZmKTtcclxuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xyXG4gIHJldHVybiBkYXRlO1xyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XHJcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xyXG4gICAgcmV0dXJuIE5hTjtcclxuICB9XHJcblxyXG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xyXG5cclxuICBpZiAoaXNOYU4obnVtYmVyKSkge1xyXG4gICAgcmV0dXJuIG51bWJlcjtcclxuICB9XHJcblxyXG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XHJcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xyXG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcclxuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcclxuLyoqXHJcbiAqIEBuYW1lIGFkZERheXNcclxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXHJcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIHRvIHRoZSBnaXZlbiBkYXRlLlxyXG4gKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgdG8gdGhlIGdpdmVuIGRhdGUuXHJcbiAqXHJcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIGRheXMgdG8gYmUgYWRkZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cclxuICogQHJldHVybnMge0RhdGV9IC0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIGRheXMgYWRkZWRcclxuICogQHRocm93cyB7VHlwZUVycm9yfSAtIDIgYXJndW1lbnRzIHJlcXVpcmVkXHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqIC8vIEFkZCAxMCBkYXlzIHRvIDEgU2VwdGVtYmVyIDIwMTQ6XHJcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZERheXMobmV3IERhdGUoMjAxNCwgOCwgMSksIDEwKVxyXG4gKiAvLz0+IFRodSBTZXAgMTEgMjAxNCAwMDowMDowMFxyXG4gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZERheXMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xyXG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xyXG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XHJcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XHJcblxyXG4gIGlmIChpc05hTihhbW91bnQpKSB7XHJcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcclxuICB9XHJcblxyXG4gIGlmICghYW1vdW50KSB7XHJcbiAgICAvLyBJZiAwIGRheXMsIG5vLW9wIHRvIGF2b2lkIGNoYW5naW5nIHRpbWVzIGluIHRoZSBob3VyIGJlZm9yZSBlbmQgb2YgRFNUXHJcbiAgICByZXR1cm4gZGF0ZTtcclxuICB9XHJcblxyXG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIGFtb3VudCk7XHJcbiAgcmV0dXJuIGRhdGU7XHJcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xyXG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcclxuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcclxuLyoqXHJcbiAqIEBuYW1lIGFkZE1pbGxpc2Vjb25kc1xyXG4gKiBAY2F0ZWdvcnkgTWlsbGlzZWNvbmQgSGVscGVyc1xyXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHRoZSBnaXZlbiBkYXRlLlxyXG4gKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cclxuICpcclxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcclxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgbWlsbGlzZWNvbmRzIHRvIGJlIGFkZGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXHJcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgbWlsbGlzZWNvbmRzIGFkZGVkXHJcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcclxuICpcclxuICogQGV4YW1wbGVcclxuICogLy8gQWRkIDc1MCBtaWxsaXNlY29uZHMgdG8gMTAgSnVseSAyMDE0IDEyOjQ1OjMwLjAwMDpcclxuICogY29uc3QgcmVzdWx0ID0gYWRkTWlsbGlzZWNvbmRzKG5ldyBEYXRlKDIwMTQsIDYsIDEwLCAxMiwgNDUsIDMwLCAwKSwgNzUwKVxyXG4gKiAvLz0+IFRodSBKdWwgMTAgMjAxNCAxMjo0NTozMC43NTBcclxuICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRNaWxsaXNlY29uZHMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xyXG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xyXG4gIHZhciB0aW1lc3RhbXAgPSB0b0RhdGUoZGlydHlEYXRlKS5nZXRUaW1lKCk7XHJcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XHJcbiAgcmV0dXJuIG5ldyBEYXRlKHRpbWVzdGFtcCArIGFtb3VudCk7XHJcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xyXG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcclxuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcclxuLyoqXHJcbiAqIEBuYW1lIGFkZE1vbnRoc1xyXG4gKiBAY2F0ZWdvcnkgTW9udGggSGVscGVyc1xyXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbW9udGhzIHRvIHRoZSBnaXZlbiBkYXRlLlxyXG4gKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1vbnRocyB0byB0aGUgZ2l2ZW4gZGF0ZS5cclxuICpcclxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcclxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgbW9udGhzIHRvIGJlIGFkZGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXHJcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgbW9udGhzIGFkZGVkXHJcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcclxuICpcclxuICogQGV4YW1wbGVcclxuICogLy8gQWRkIDUgbW9udGhzIHRvIDEgU2VwdGVtYmVyIDIwMTQ6XHJcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZE1vbnRocyhuZXcgRGF0ZSgyMDE0LCA4LCAxKSwgNSlcclxuICogLy89PiBTdW4gRmViIDAxIDIwMTUgMDA6MDA6MDBcclxuICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRNb250aHMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xyXG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xyXG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XHJcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XHJcblxyXG4gIGlmIChpc05hTihhbW91bnQpKSB7XHJcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcclxuICB9XHJcblxyXG4gIGlmICghYW1vdW50KSB7XHJcbiAgICAvLyBJZiAwIG1vbnRocywgbm8tb3AgdG8gYXZvaWQgY2hhbmdpbmcgdGltZXMgaW4gdGhlIGhvdXIgYmVmb3JlIGVuZCBvZiBEU1RcclxuICAgIHJldHVybiBkYXRlO1xyXG4gIH1cclxuXHJcbiAgdmFyIGRheU9mTW9udGggPSBkYXRlLmdldERhdGUoKTsgLy8gVGhlIEpTIERhdGUgb2JqZWN0IHN1cHBvcnRzIGRhdGUgbWF0aCBieSBhY2NlcHRpbmcgb3V0LW9mLWJvdW5kcyB2YWx1ZXMgZm9yXHJcbiAgLy8gbW9udGgsIGRheSwgZXRjLiBGb3IgZXhhbXBsZSwgbmV3IERhdGUoMjAyMCwgMCwgMCkgcmV0dXJucyAzMSBEZWMgMjAxOSBhbmRcclxuICAvLyBuZXcgRGF0ZSgyMDIwLCAxMywgMSkgcmV0dXJucyAxIEZlYiAyMDIxLiAgVGhpcyBpcyAqYWxtb3N0KiB0aGUgYmVoYXZpb3Igd2VcclxuICAvLyB3YW50IGV4Y2VwdCB0aGF0IGRhdGVzIHdpbGwgd3JhcCBhcm91bmQgdGhlIGVuZCBvZiBhIG1vbnRoLCBtZWFuaW5nIHRoYXRcclxuICAvLyBuZXcgRGF0ZSgyMDIwLCAxMywgMzEpIHdpbGwgcmV0dXJuIDMgTWFyIDIwMjEgbm90IDI4IEZlYiAyMDIxIGFzIGRlc2lyZWQuIFNvXHJcbiAgLy8gd2UnbGwgZGVmYXVsdCB0byB0aGUgZW5kIG9mIHRoZSBkZXNpcmVkIG1vbnRoIGJ5IGFkZGluZyAxIHRvIHRoZSBkZXNpcmVkXHJcbiAgLy8gbW9udGggYW5kIHVzaW5nIGEgZGF0ZSBvZiAwIHRvIGJhY2sgdXAgb25lIGRheSB0byB0aGUgZW5kIG9mIHRoZSBkZXNpcmVkXHJcbiAgLy8gbW9udGguXHJcblxyXG4gIHZhciBlbmRPZkRlc2lyZWRNb250aCA9IG5ldyBEYXRlKGRhdGUuZ2V0VGltZSgpKTtcclxuICBlbmRPZkRlc2lyZWRNb250aC5zZXRNb250aChkYXRlLmdldE1vbnRoKCkgKyBhbW91bnQgKyAxLCAwKTtcclxuICB2YXIgZGF5c0luTW9udGggPSBlbmRPZkRlc2lyZWRNb250aC5nZXREYXRlKCk7XHJcblxyXG4gIGlmIChkYXlPZk1vbnRoID49IGRheXNJbk1vbnRoKSB7XHJcbiAgICAvLyBJZiB3ZSdyZSBhbHJlYWR5IGF0IHRoZSBlbmQgb2YgdGhlIG1vbnRoLCB0aGVuIHRoaXMgaXMgdGhlIGNvcnJlY3QgZGF0ZVxyXG4gICAgLy8gYW5kIHdlJ3JlIGRvbmUuXHJcbiAgICByZXR1cm4gZW5kT2ZEZXNpcmVkTW9udGg7XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIE90aGVyd2lzZSwgd2Ugbm93IGtub3cgdGhhdCBzZXR0aW5nIHRoZSBvcmlnaW5hbCBkYXktb2YtbW9udGggdmFsdWUgd29uJ3RcclxuICAgIC8vIGNhdXNlIGFuIG92ZXJmbG93LCBzbyBzZXQgdGhlIGRlc2lyZWQgZGF5LW9mLW1vbnRoLiBOb3RlIHRoYXQgd2UgY2FuJ3RcclxuICAgIC8vIGp1c3Qgc2V0IHRoZSBkYXRlIG9mIGBlbmRPZkRlc2lyZWRNb250aGAgYmVjYXVzZSB0aGF0IG9iamVjdCBtYXkgaGF2ZSBoYWRcclxuICAgIC8vIGl0cyB0aW1lIGNoYW5nZWQgaW4gdGhlIHVudXN1YWwgY2FzZSB3aGVyZSB3aGVyZSBhIERTVCB0cmFuc2l0aW9uIHdhcyBvblxyXG4gICAgLy8gdGhlIGxhc3QgZGF5IG9mIHRoZSBtb250aCBhbmQgaXRzIGxvY2FsIHRpbWUgd2FzIGluIHRoZSBob3VyIHNraXBwZWQgb3JcclxuICAgIC8vIHJlcGVhdGVkIG5leHQgdG8gYSBEU1QgdHJhbnNpdGlvbi4gIFNvIHdlIHVzZSBgZGF0ZWAgaW5zdGVhZCB3aGljaCBpc1xyXG4gICAgLy8gZ3VhcmFudGVlZCB0byBzdGlsbCBoYXZlIHRoZSBvcmlnaW5hbCB0aW1lLlxyXG4gICAgZGF0ZS5zZXRGdWxsWWVhcihlbmRPZkRlc2lyZWRNb250aC5nZXRGdWxsWWVhcigpLCBlbmRPZkRlc2lyZWRNb250aC5nZXRNb250aCgpLCBkYXlPZk1vbnRoKTtcclxuICAgIHJldHVybiBkYXRlO1xyXG4gIH1cclxufSIsImltcG9ydCBhZGREYXlzIGZyb20gXCIuLi9hZGREYXlzL2luZGV4LmpzXCI7XHJcbmltcG9ydCBhZGRNb250aHMgZnJvbSBcIi4uL2FkZE1vbnRocy9pbmRleC5qc1wiO1xyXG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcclxuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcclxuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBhZGRcclxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXHJcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIHllYXJzLCBtb250aHMsIHdlZWtzLCBkYXlzLCBob3VycywgbWludXRlcyBhbmQgc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cclxuICpcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEFkZCB0aGUgc3BlY2lmaWVkIHllYXJzLCBtb250aHMsIHdlZWtzLCBkYXlzLCBob3VycywgbWludXRlcyBhbmQgc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cclxuICpcclxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcclxuICogQHBhcmFtIHtEdXJhdGlvbn0gZHVyYXRpb24gLSB0aGUgb2JqZWN0IHdpdGggeWVhcnMsIG1vbnRocywgd2Vla3MsIGRheXMsIGhvdXJzLCBtaW51dGVzIGFuZCBzZWNvbmRzIHRvIGJlIGFkZGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXHJcbiAqXHJcbiAqIHwgS2V5ICAgICAgICAgICAgfCBEZXNjcmlwdGlvbiAgICAgICAgICAgICAgICAgICAgICAgIHxcclxuICogfC0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxyXG4gKiB8IHllYXJzICAgICAgICAgIHwgQW1vdW50IG9mIHllYXJzIHRvIGJlIGFkZGVkICAgICAgICB8XHJcbiAqIHwgbW9udGhzICAgICAgICAgfCBBbW91bnQgb2YgbW9udGhzIHRvIGJlIGFkZGVkICAgICAgIHxcclxuICogfCB3ZWVrcyAgICAgICAgICB8IEFtb3VudCBvZiB3ZWVrcyB0byBiZSBhZGRlZCAgICAgICAgfFxyXG4gKiB8IGRheXMgICAgICAgICAgIHwgQW1vdW50IG9mIGRheXMgdG8gYmUgYWRkZWQgICAgICAgICB8XHJcbiAqIHwgaG91cnMgICAgICAgICAgfCBBbW91bnQgb2YgaG91cnMgdG8gYmUgYWRkZWQgICAgICAgIHxcclxuICogfCBtaW51dGVzICAgICAgICB8IEFtb3VudCBvZiBtaW51dGVzIHRvIGJlIGFkZGVkICAgICAgfFxyXG4gKiB8IHNlY29uZHMgICAgICAgIHwgQW1vdW50IG9mIHNlY29uZHMgdG8gYmUgYWRkZWQgICAgICB8XHJcbiAqXHJcbiAqIEFsbCB2YWx1ZXMgZGVmYXVsdCB0byAwXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgc2Vjb25kcyBhZGRlZFxyXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqIC8vIEFkZCB0aGUgZm9sbG93aW5nIGR1cmF0aW9uIHRvIDEgU2VwdGVtYmVyIDIwMTQsIDEwOjE5OjUwXHJcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZChuZXcgRGF0ZSgyMDE0LCA4LCAxLCAxMCwgMTksIDUwKSwge1xyXG4gKiAgIHllYXJzOiAyLFxyXG4gKiAgIG1vbnRoczogOSxcclxuICogICB3ZWVrczogMSxcclxuICogICBkYXlzOiA3LFxyXG4gKiAgIGhvdXJzOiA1LFxyXG4gKiAgIG1pbnV0ZXM6IDksXHJcbiAqICAgc2Vjb25kczogMzAsXHJcbiAqIH0pXHJcbiAqIC8vPT4gVGh1IEp1biAxNSAyMDE3IDE1OjI5OjIwXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGQoZGlydHlEYXRlLCBkdXJhdGlvbikge1xyXG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xyXG4gIGlmICghZHVyYXRpb24gfHwgdHlwZW9mIGR1cmF0aW9uICE9PSAnb2JqZWN0JykgcmV0dXJuIG5ldyBEYXRlKE5hTik7XHJcbiAgdmFyIHllYXJzID0gZHVyYXRpb24ueWVhcnMgPyB0b0ludGVnZXIoZHVyYXRpb24ueWVhcnMpIDogMDtcclxuICB2YXIgbW9udGhzID0gZHVyYXRpb24ubW9udGhzID8gdG9JbnRlZ2VyKGR1cmF0aW9uLm1vbnRocykgOiAwO1xyXG4gIHZhciB3ZWVrcyA9IGR1cmF0aW9uLndlZWtzID8gdG9JbnRlZ2VyKGR1cmF0aW9uLndlZWtzKSA6IDA7XHJcbiAgdmFyIGRheXMgPSBkdXJhdGlvbi5kYXlzID8gdG9JbnRlZ2VyKGR1cmF0aW9uLmRheXMpIDogMDtcclxuICB2YXIgaG91cnMgPSBkdXJhdGlvbi5ob3VycyA/IHRvSW50ZWdlcihkdXJhdGlvbi5ob3VycykgOiAwO1xyXG4gIHZhciBtaW51dGVzID0gZHVyYXRpb24ubWludXRlcyA/IHRvSW50ZWdlcihkdXJhdGlvbi5taW51dGVzKSA6IDA7XHJcbiAgdmFyIHNlY29uZHMgPSBkdXJhdGlvbi5zZWNvbmRzID8gdG9JbnRlZ2VyKGR1cmF0aW9uLnNlY29uZHMpIDogMDsgLy8gQWRkIHllYXJzIGFuZCBtb250aHNcclxuXHJcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcclxuICB2YXIgZGF0ZVdpdGhNb250aHMgPSBtb250aHMgfHwgeWVhcnMgPyBhZGRNb250aHMoZGF0ZSwgbW9udGhzICsgeWVhcnMgKiAxMikgOiBkYXRlOyAvLyBBZGQgd2Vla3MgYW5kIGRheXNcclxuXHJcbiAgdmFyIGRhdGVXaXRoRGF5cyA9IGRheXMgfHwgd2Vla3MgPyBhZGREYXlzKGRhdGVXaXRoTW9udGhzLCBkYXlzICsgd2Vla3MgKiA3KSA6IGRhdGVXaXRoTW9udGhzOyAvLyBBZGQgZGF5cywgaG91cnMsIG1pbnV0ZXMgYW5kIHNlY29uZHNcclxuXHJcbiAgdmFyIG1pbnV0ZXNUb0FkZCA9IG1pbnV0ZXMgKyBob3VycyAqIDYwO1xyXG4gIHZhciBzZWNvbmRzVG9BZGQgPSBzZWNvbmRzICsgbWludXRlc1RvQWRkICogNjA7XHJcbiAgdmFyIG1zVG9BZGQgPSBzZWNvbmRzVG9BZGQgKiAxMDAwO1xyXG4gIHZhciBmaW5hbERhdGUgPSBuZXcgRGF0ZShkYXRlV2l0aERheXMuZ2V0VGltZSgpICsgbXNUb0FkZCk7XHJcbiAgcmV0dXJuIGZpbmFsRGF0ZTtcclxufSIsImltcG9ydCBpc1ZhbGlkIGZyb20gXCIuLi9pc1ZhbGlkL2luZGV4LmpzXCI7XHJcbmltcG9ydCBzdWJNaWxsaXNlY29uZHMgZnJvbSBcIi4uL3N1Yk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xyXG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcclxuaW1wb3J0IGZvcm1hdHRlcnMgZnJvbSBcIi4uL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMvaW5kZXguanNcIjtcclxuaW1wb3J0IGxvbmdGb3JtYXR0ZXJzIGZyb20gXCIuLi9fbGliL2Zvcm1hdC9sb25nRm9ybWF0dGVycy9pbmRleC5qc1wiO1xyXG5pbXBvcnQgZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XHJcbmltcG9ydCB7IGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4sIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbiwgdGhyb3dQcm90ZWN0ZWRFcnJvciB9IGZyb20gXCIuLi9fbGliL3Byb3RlY3RlZFRva2Vucy9pbmRleC5qc1wiO1xyXG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xyXG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xyXG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XHJcbmltcG9ydCBkZWZhdWx0TG9jYWxlIGZyb20gXCIuLi9fbGliL2RlZmF1bHRMb2NhbGUvaW5kZXguanNcIjsgLy8gVGhpcyBSZWdFeHAgY29uc2lzdHMgb2YgdGhyZWUgcGFydHMgc2VwYXJhdGVkIGJ5IGB8YDpcclxuLy8gLSBbeVlRcU1Md0lkRGVjaWhIS2ttc11vIG1hdGNoZXMgYW55IGF2YWlsYWJsZSBvcmRpbmFsIG51bWJlciB0b2tlblxyXG4vLyAgIChvbmUgb2YgdGhlIGNlcnRhaW4gbGV0dGVycyBmb2xsb3dlZCBieSBgb2ApXHJcbi8vIC0gKFxcdylcXDEqIG1hdGNoZXMgYW55IHNlcXVlbmNlcyBvZiB0aGUgc2FtZSBsZXR0ZXJcclxuLy8gLSAnJyBtYXRjaGVzIHR3byBxdW90ZSBjaGFyYWN0ZXJzIGluIGEgcm93XHJcbi8vIC0gJygnJ3xbXiddKSsoJ3wkKSBtYXRjaGVzIGFueXRoaW5nIHN1cnJvdW5kZWQgYnkgdHdvIHF1b3RlIGNoYXJhY3RlcnMgKCcpLFxyXG4vLyAgIGV4Y2VwdCBhIHNpbmdsZSBxdW90ZSBzeW1ib2wsIHdoaWNoIGVuZHMgdGhlIHNlcXVlbmNlLlxyXG4vLyAgIFR3byBxdW90ZSBjaGFyYWN0ZXJzIGRvIG5vdCBlbmQgdGhlIHNlcXVlbmNlLlxyXG4vLyAgIElmIHRoZXJlIGlzIG5vIG1hdGNoaW5nIHNpbmdsZSBxdW90ZVxyXG4vLyAgIHRoZW4gdGhlIHNlcXVlbmNlIHdpbGwgY29udGludWUgdW50aWwgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLlxyXG4vLyAtIC4gbWF0Y2hlcyBhbnkgc2luZ2xlIGNoYXJhY3RlciB1bm1hdGNoZWQgYnkgcHJldmlvdXMgcGFydHMgb2YgdGhlIFJlZ0V4cHNcclxuXHJcbnZhciBmb3JtYXR0aW5nVG9rZW5zUmVnRXhwID0gL1t5WVFxTUx3SWREZWNpaEhLa21zXW98KFxcdylcXDEqfCcnfCcoJyd8W14nXSkrKCd8JCl8Li9nOyAvLyBUaGlzIFJlZ0V4cCBjYXRjaGVzIHN5bWJvbHMgZXNjYXBlZCBieSBxdW90ZXMsIGFuZCBhbHNvXHJcbi8vIHNlcXVlbmNlcyBvZiBzeW1ib2xzIFAsIHAsIGFuZCB0aGUgY29tYmluYXRpb25zIGxpa2UgYFBQUFBQUFBwcHBwcGBcclxuXHJcbnZhciBsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9IC9QK3ArfFArfHArfCcnfCcoJyd8W14nXSkrKCd8JCl8Li9nO1xyXG52YXIgZXNjYXBlZFN0cmluZ1JlZ0V4cCA9IC9eJyhbXl0qPyknPyQvO1xyXG52YXIgZG91YmxlUXVvdGVSZWdFeHAgPSAvJycvZztcclxudmFyIHVuZXNjYXBlZExhdGluQ2hhcmFjdGVyUmVnRXhwID0gL1thLXpBLVpdLztcclxuLyoqXHJcbiAqIEBuYW1lIGZvcm1hdFxyXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcclxuICogQHN1bW1hcnkgRm9ybWF0IHRoZSBkYXRlLlxyXG4gKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogUmV0dXJuIHRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmcgaW4gdGhlIGdpdmVuIGZvcm1hdC4gVGhlIHJlc3VsdCBtYXkgdmFyeSBieSBsb2NhbGUuXHJcbiAqXHJcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhlIGBmb3JtYXRgIHRva2VucyBkaWZmZXIgZnJvbSBNb21lbnQuanMgYW5kIG90aGVyIGxpYnJhcmllcy5cclxuICogPiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcclxuICpcclxuICogVGhlIGNoYXJhY3RlcnMgd3JhcHBlZCBiZXR3ZWVuIHR3byBzaW5nbGUgcXVvdGVzIGNoYXJhY3RlcnMgKCcpIGFyZSBlc2NhcGVkLlxyXG4gKiBUd28gc2luZ2xlIHF1b3RlcyBpbiBhIHJvdywgd2hldGhlciBpbnNpZGUgb3Igb3V0c2lkZSBhIHF1b3RlZCBzZXF1ZW5jZSwgcmVwcmVzZW50IGEgJ3JlYWwnIHNpbmdsZSBxdW90ZS5cclxuICogKHNlZSB0aGUgbGFzdCBleGFtcGxlKVxyXG4gKlxyXG4gKiBGb3JtYXQgb2YgdGhlIHN0cmluZyBpcyBiYXNlZCBvbiBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XHJcbiAqIGh0dHBzOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9GaWVsZF9TeW1ib2xfVGFibGVcclxuICogd2l0aCBhIGZldyBhZGRpdGlvbnMgKHNlZSBub3RlIDcgYmVsb3cgdGhlIHRhYmxlKS5cclxuICpcclxuICogQWNjZXB0ZWQgcGF0dGVybnM6XHJcbiAqIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBhdHRlcm4gfCBSZXN1bHQgZXhhbXBsZXMgICAgICAgICAgICAgICAgICAgfCBOb3RlcyB8XHJcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS18XHJcbiAqIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEcuLkdHRyAgfCBBRCwgQkMgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdHR0cgICAgfCBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdCAgICAgICAgfCAyICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdHR0dHICAgfCBBLCBCICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XHJcbiAqIHwgQ2FsZW5kYXIgeWVhciAgICAgICAgICAgICAgICAgICB8IHkgICAgICAgfCA0NCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgICAgfCA1ICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHlvICAgICAgfCA0NHRoLCAxc3QsIDB0aCwgMTd0aCAgICAgICAgICAgICAgfCA1LDcgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5ICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA1ICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eSAgICAgfCAwNDQsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgfCA1ICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eXkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1ICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eXl5ICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XHJcbiAqIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICB8IFkgICAgICAgfCA0NCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgICAgfCA1ICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlvICAgICAgfCA0NHRoLCAxc3QsIDE5MDB0aCwgMjAxN3RoICAgICAgICAgfCA1LDcgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA1LDggICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWSAgICAgfCAwNDQsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgfCA1ICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWVkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1LDggICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWVlZICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XHJcbiAqIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgICB8IFIgICAgICAgfCAtNDMsIDAsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1LDcgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSICAgICAgfCAtNDMsIDAwLCAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgfCA1LDcgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUiAgICAgfCAtMDQzLCAwMDAsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgfCA1LDcgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUlIgICAgfCAtMDA0MywgMDAwMCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgfCA1LDcgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUlJSICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUsNyB8XHJcbiAqIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgICB8IHUgICAgICAgfCAtNDMsIDAsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1ICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1ICAgICAgfCAtNDMsIDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgfCA1ICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dSAgICAgfCAtMDQzLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1ICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dXUgICAgfCAtMDA0MywgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgfCA1ICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dXV1ICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XHJcbiAqIHwgUXVhcnRlciAoZm9ybWF0dGluZykgICAgICAgICAgICB8IFEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRICAgICAgfCAwMSwgMDIsIDAzLCAwNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUVEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUVFRICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCA0ICAgICB8XHJcbiAqIHwgUXVhcnRlciAoc3RhbmQtYWxvbmUpICAgICAgICAgICB8IHEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxICAgICAgfCAwMSwgMDIsIDAzLCAwNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcXEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcXFxICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCA0ICAgICB8XHJcbiAqIHwgTW9udGggKGZvcm1hdHRpbmcpICAgICAgICAgICAgICB8IE0gICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1vICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA3ICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NICAgICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTSAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTU0gICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTU1NICAgfCBKLCBGLCAuLi4sIEQgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XHJcbiAqIHwgTW9udGggKHN0YW5kLWFsb25lKSAgICAgICAgICAgICB8IEwgICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA3ICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMICAgICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTCAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTEwgICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTExMICAgfCBKLCBGLCAuLi4sIEQgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XHJcbiAqIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgICB8IHcgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHdvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA3ICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHd3ICAgICAgfCAwMSwgMDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XHJcbiAqIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgICB8IEkgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IElvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA3ICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IElJICAgICAgfCAwMSwgMDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XHJcbiAqIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgICB8IGQgICAgICAgfCAxLCAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGRvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzMXN0ICAgICAgICAgICAgICAgfCA3ICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGRkICAgICAgfCAwMSwgMDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XHJcbiAqIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgICB8IEQgICAgICAgfCAxLCAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgICAgfCA5ICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzNjV0aCwgMzY2dGggICAgICAgfCA3ICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEREICAgICAgfCAwMSwgMDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgICAgfCA5ICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERERCAgICAgfCAwMDEsIDAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgfCAgICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEREREQgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzICAgICB8XHJcbiAqIHwgRGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICAgICAgICB8IEUuLkVFRSAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUUgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUVFICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUVFRSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XHJcbiAqIHwgSVNPIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICB8IGkgICAgICAgfCAxLCAyLCAzLCAuLi4sIDcgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA3dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpICAgICAgfCAwMSwgMDIsIC4uLiwgMDcgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCA3ICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWkgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyLDcgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWlpICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCA3ICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWlpaSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCA3ICAgICB8XHJcbiAqIHwgTG9jYWwgZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICB8IGUgICAgICAgfCAyLCAzLCA0LCAuLi4sIDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVvICAgICAgfCAybmQsIDNyZCwgLi4uLCAxc3QgICAgICAgICAgICAgICAgfCA3ICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWUgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWVlICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWVlZSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XHJcbiAqIHwgTG9jYWwgZGF5IG9mIHdlZWsgKHN0YW5kLWFsb25lKSB8IGMgICAgICAgfCAyLCAzLCA0LCAuLi4sIDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNvICAgICAgfCAybmQsIDNyZCwgLi4uLCAxc3QgICAgICAgICAgICAgICAgfCA3ICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjYyAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2MgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2NjICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2NjYyAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XHJcbiAqIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICB8IGEuLmFhICAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYSAgICAgfCBhbSwgcG0gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYWEgICAgfCBhLm0uLCBwLm0uICAgICAgICAgICAgICAgICAgICAgICAgfCAyICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYWFhICAgfCBhLCBwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XHJcbiAqIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICB8IGIuLmJiICAgfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgICAgfCAgICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYiAgICAgfCBhbSwgcG0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgICAgfCAgICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYmIgICAgfCBhLm0uLCBwLm0uLCBub29uLCBtaWRuaWdodCAgICAgICAgfCAyICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYmJiICAgfCBhLCBwLCBuLCBtaSAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XHJcbiAqIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgICB8IEIuLkJCQiAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAgICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEJCQkIgICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAyICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEJCQkJCICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAgICAgICB8XHJcbiAqIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgICB8IGggICAgICAgfCAxLCAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgICAgfCAgICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGhvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAxMnRoICAgICAgICAgfCA3ICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGhoICAgICAgfCAwMSwgMDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgfCAgICAgICB8XHJcbiAqIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgICB8IEggICAgICAgfCAwLCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICAgfCAgICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEhvICAgICAgfCAwdGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICAgfCA3ICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEhIICAgICAgfCAwMCwgMDEsIDAyLCAuLi4sIDIzICAgICAgICAgICAgICAgfCAgICAgICB8XHJcbiAqIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgICB8IEsgICAgICAgfCAxLCAyLCAuLi4sIDExLCAwICAgICAgICAgICAgICAgICAgfCAgICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEtvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAwdGggICAgICAgICAgfCA3ICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEtLICAgICAgfCAwMSwgMDIsIC4uLiwgMTEsIDAwICAgICAgICAgICAgICAgfCAgICAgICB8XHJcbiAqIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgICB8IGsgICAgICAgfCAyNCwgMSwgMiwgLi4uLCAyMyAgICAgICAgICAgICAgICAgfCAgICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGtvICAgICAgfCAyNHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgfCA3ICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGtrICAgICAgfCAyNCwgMDEsIDAyLCAuLi4sIDIzICAgICAgICAgICAgICAgfCAgICAgICB8XHJcbiAqIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgICB8IG0gICAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG1vICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA3ICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG1tICAgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XHJcbiAqIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgICB8IHMgICAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNvICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA3ICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNzICAgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XHJcbiAqIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgICB8IFMgICAgICAgfCAwLCAxLCAuLi4sIDkgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTICAgICAgfCAwMCwgMDEsIC4uLiwgOTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTUyAgICAgfCAwMDAsIDAwMSwgLi4uLCA5OTkgICAgICAgICAgICAgICAgfCAgICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTU1MgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzICAgICB8XHJcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvIFopICAgICAgICB8IFggICAgICAgfCAtMDgsICswNTMwLCBaICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYICAgICAgfCAtMDgwMCwgKzA1MzAsIFogICAgICAgICAgICAgICAgICAgfCAgICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWCAgICAgfCAtMDg6MDAsICswNTozMCwgWiAgICAgICAgICAgICAgICAgfCAgICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWFggICAgfCAtMDgwMCwgKzA1MzAsIFosICsxMjM0NTYgICAgICAgICAgfCAyICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWFhYICAgfCAtMDg6MDAsICswNTozMCwgWiwgKzEyOjM0OjU2ICAgICAgfCAgICAgICB8XHJcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgICB8IHggICAgICAgfCAtMDgsICswNTMwLCArMDAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4ICAgICAgfCAtMDgwMCwgKzA1MzAsICswMDAwICAgICAgICAgICAgICAgfCAgICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eCAgICAgfCAtMDg6MDAsICswNTozMCwgKzAwOjAwICAgICAgICAgICAgfCAyICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eHggICAgfCAtMDgwMCwgKzA1MzAsICswMDAwLCArMTIzNDU2ICAgICAgfCAgICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eHh4ICAgfCAtMDg6MDAsICswNTozMCwgKzAwOjAwLCArMTI6MzQ6NTYgfCAgICAgICB8XHJcbiAqIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgICB8IE8uLi5PT08gfCBHTVQtOCwgR01UKzU6MzAsIEdNVCswICAgICAgICAgICAgfCAgICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE9PT08gICAgfCBHTVQtMDg6MDAsIEdNVCswNTozMCwgR01UKzAwOjAwICAgfCAyICAgICB8XHJcbiAqIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pICB8IHouLi56enogfCBHTVQtOCwgR01UKzU6MzAsIEdNVCswICAgICAgICAgICAgfCA2ICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHp6enogICAgfCBHTVQtMDg6MDAsIEdNVCswNTozMCwgR01UKzAwOjAwICAgfCAyLDYgICB8XHJcbiAqIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgICB8IHQgICAgICAgfCA1MTI5Njk1MjAgICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHR0ICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDcgICB8XHJcbiAqIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICB8IFQgICAgICAgfCA1MTI5Njk1MjA5MDAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFRUICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDcgICB8XHJcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgICB8IFAgICAgICAgfCAwNC8yOS8xNDUzICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQICAgICAgfCBBcHIgMjksIDE0NTMgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUCAgICAgfCBBcHJpbCAyOXRoLCAxNDUzICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUFAgICAgfCBGcmlkYXksIEFwcmlsIDI5dGgsIDE0NTMgICAgICAgICAgfCAyLDcgICB8XHJcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgICB8IHAgICAgICAgfCAxMjowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwICAgICAgfCAxMjowMDowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwcCAgICAgfCAxMjowMDowMCBBTSBHTVQrMiAgICAgICAgICAgICAgICAgfCA3ICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwcHAgICAgfCAxMjowMDowMCBBTSBHTVQrMDI6MDAgICAgICAgICAgICAgfCAyLDcgICB8XHJcbiAqIHwgQ29tYmluYXRpb24gb2YgZGF0ZSBhbmQgdGltZSAgICB8IFBwICAgICAgfCAwNC8yOS8xNDUzLCAxMjowMCBBTSAgICAgICAgICAgICAgfCA3ICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQcHAgICAgfCBBcHIgMjksIDE0NTMsIDEyOjAwOjAwIEFNICAgICAgICAgfCA3ICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUHBwcCAgfCBBcHJpbCAyOXRoLCAxNDUzIGF0IC4uLiAgICAgICAgICAgfCA3ICAgICB8XHJcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUFBwcHBwfCBGcmlkYXksIEFwcmlsIDI5dGgsIDE0NTMgYXQgLi4uICAgfCAyLDcgICB8XHJcbiAqIE5vdGVzOlxyXG4gKiAxLiBcIkZvcm1hdHRpbmdcIiB1bml0cyAoZS5nLiBmb3JtYXR0aW5nIHF1YXJ0ZXIpIGluIHRoZSBkZWZhdWx0IGVuLVVTIGxvY2FsZVxyXG4gKiAgICBhcmUgdGhlIHNhbWUgYXMgXCJzdGFuZC1hbG9uZVwiIHVuaXRzLCBidXQgYXJlIGRpZmZlcmVudCBpbiBzb21lIGxhbmd1YWdlcy5cclxuICogICAgXCJGb3JtYXR0aW5nXCIgdW5pdHMgYXJlIGRlY2xpbmVkIGFjY29yZGluZyB0byB0aGUgcnVsZXMgb2YgdGhlIGxhbmd1YWdlXHJcbiAqICAgIGluIHRoZSBjb250ZXh0IG9mIGEgZGF0ZS4gXCJTdGFuZC1hbG9uZVwiIHVuaXRzIGFyZSBhbHdheXMgbm9taW5hdGl2ZSBzaW5ndWxhcjpcclxuICpcclxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBMTExMJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZCdgXHJcbiAqXHJcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnZG8gTU1NTScsIHtsb2NhbGU6IGNzfSkgLy89PiAnNi4gbGlzdG9wYWR1J2BcclxuICpcclxuICogMi4gQW55IHNlcXVlbmNlIG9mIHRoZSBpZGVudGljYWwgbGV0dGVycyBpcyBhIHBhdHRlcm4sIHVubGVzcyBpdCBpcyBlc2NhcGVkIGJ5XHJcbiAqICAgIHRoZSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVycyAoc2VlIGJlbG93KS5cclxuICogICAgSWYgdGhlIHNlcXVlbmNlIGlzIGxvbmdlciB0aGFuIGxpc3RlZCBpbiB0YWJsZSAoZS5nLiBgRUVFRUVFRUVFRUVgKVxyXG4gKiAgICB0aGUgb3V0cHV0IHdpbGwgYmUgdGhlIHNhbWUgYXMgZGVmYXVsdCBwYXR0ZXJuIGZvciB0aGlzIHVuaXQsIHVzdWFsbHlcclxuICogICAgdGhlIGxvbmdlc3Qgb25lIChpbiBjYXNlIG9mIElTTyB3ZWVrZGF5cywgYEVFRUVgKS4gRGVmYXVsdCBwYXR0ZXJucyBmb3IgdW5pdHNcclxuICogICAgYXJlIG1hcmtlZCB3aXRoIFwiMlwiIGluIHRoZSBsYXN0IGNvbHVtbiBvZiB0aGUgdGFibGUuXHJcbiAqXHJcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NJykgLy89PiAnTm92J2BcclxuICpcclxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NJykgLy89PiAnTm92ZW1iZXInYFxyXG4gKlxyXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NJykgLy89PiAnTidgXHJcbiAqXHJcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU1NJykgLy89PiAnTm92ZW1iZXInYFxyXG4gKlxyXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXHJcbiAqXHJcbiAqIDMuIFNvbWUgcGF0dGVybnMgY291bGQgYmUgdW5saW1pdGVkIGxlbmd0aCAoc3VjaCBhcyBgeXl5eXl5eXlgKS5cclxuICogICAgVGhlIG91dHB1dCB3aWxsIGJlIHBhZGRlZCB3aXRoIHplcm9zIHRvIG1hdGNoIHRoZSBsZW5ndGggb2YgdGhlIHBhdHRlcm4uXHJcbiAqXHJcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAneXl5eXl5eXknKSAvLz0+ICcwMDAwMjAxNydgXHJcbiAqXHJcbiAqIDQuIGBRUVFRUWAgYW5kIGBxcXFxcWAgY291bGQgYmUgbm90IHN0cmljdGx5IG51bWVyaWNhbCBpbiBzb21lIGxvY2FsZXMuXHJcbiAqICAgIFRoZXNlIHRva2VucyByZXByZXNlbnQgdGhlIHNob3J0ZXN0IGZvcm0gb2YgdGhlIHF1YXJ0ZXIuXHJcbiAqXHJcbiAqIDUuIFRoZSBtYWluIGRpZmZlcmVuY2UgYmV0d2VlbiBgeWAgYW5kIGB1YCBwYXR0ZXJucyBhcmUgQi5DLiB5ZWFyczpcclxuICpcclxuICogICAgfCBZZWFyIHwgYHlgIHwgYHVgIHxcclxuICogICAgfC0tLS0tLXwtLS0tLXwtLS0tLXxcclxuICogICAgfCBBQyAxIHwgICAxIHwgICAxIHxcclxuICogICAgfCBCQyAxIHwgICAxIHwgICAwIHxcclxuICogICAgfCBCQyAyIHwgICAyIHwgIC0xIHxcclxuICpcclxuICogICAgQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxyXG4gKiAgICB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQ6XHJcbiAqXHJcbiAqICAgIHwgWWVhciB8IGB5eWAgfCBgdXVgIHxcclxuICogICAgfC0tLS0tLXwtLS0tLS18LS0tLS0tfFxyXG4gKiAgICB8IDEgICAgfCAgIDAxIHwgICAwMSB8XHJcbiAqICAgIHwgMTQgICB8ICAgMTQgfCAgIDE0IHxcclxuICogICAgfCAzNzYgIHwgICA3NiB8ICAzNzYgfFxyXG4gKiAgICB8IDE0NTMgfCAgIDUzIHwgMTQ1MyB8XHJcbiAqXHJcbiAqICAgIFRoZSBzYW1lIGRpZmZlcmVuY2UgaXMgdHJ1ZSBmb3IgbG9jYWwgYW5kIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFycyAoYFlgIGFuZCBgUmApLFxyXG4gKiAgICBleGNlcHQgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhcnMgYXJlIGRlcGVuZGVudCBvbiBgb3B0aW9ucy53ZWVrU3RhcnRzT25gXHJcbiAqICAgIGFuZCBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgIChjb21wYXJlIFtnZXRJU09XZWVrWWVhcl17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9nZXRJU09XZWVrWWVhcn1cclxuICogICAgYW5kIFtnZXRXZWVrWWVhcl17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9nZXRXZWVrWWVhcn0pLlxyXG4gKlxyXG4gKiA2LiBTcGVjaWZpYyBub24tbG9jYXRpb24gdGltZXpvbmVzIGFyZSBjdXJyZW50bHkgdW5hdmFpbGFibGUgaW4gYGRhdGUtZm5zYCxcclxuICogICAgc28gcmlnaHQgbm93IHRoZXNlIHRva2VucyBmYWxsIGJhY2sgdG8gR01UIHRpbWV6b25lcy5cclxuICpcclxuICogNy4gVGhlc2UgcGF0dGVybnMgYXJlIG5vdCBpbiB0aGUgVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxyXG4gKiAgICAtIGBpYDogSVNPIGRheSBvZiB3ZWVrXHJcbiAqICAgIC0gYElgOiBJU08gd2VlayBvZiB5ZWFyXHJcbiAqICAgIC0gYFJgOiBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxyXG4gKiAgICAtIGB0YDogc2Vjb25kcyB0aW1lc3RhbXBcclxuICogICAgLSBgVGA6IG1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcclxuICogICAgLSBgb2A6IG9yZGluYWwgbnVtYmVyIG1vZGlmaWVyXHJcbiAqICAgIC0gYFBgOiBsb25nIGxvY2FsaXplZCBkYXRlXHJcbiAqICAgIC0gYHBgOiBsb25nIGxvY2FsaXplZCB0aW1lXHJcbiAqXHJcbiAqIDguIGBZWWAgYW5kIGBZWVlZYCB0b2tlbnMgcmVwcmVzZW50IHdlZWstbnVtYmVyaW5nIHllYXJzIGJ1dCB0aGV5IGFyZSBvZnRlbiBjb25mdXNlZCB3aXRoIHllYXJzLlxyXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnNgIHRvIHVzZSB0aGVtLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcclxuICpcclxuICogOS4gYERgIGFuZCBgRERgIHRva2VucyByZXByZXNlbnQgZGF5cyBvZiB0aGUgeWVhciBidXQgdGhleSBhcmUgb2Z0ZW4gY29uZnVzZWQgd2l0aCBkYXlzIG9mIHRoZSBtb250aC5cclxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2Vuc2AgdG8gdXNlIHRoZW0uIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxyXG4gKlxyXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcclxuICogQHBhcmFtIHtTdHJpbmd9IGZvcm1hdCAtIHRoZSBzdHJpbmcgb2YgdG9rZW5zXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxyXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cclxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcclxuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZT0xXSAtIHRoZSBkYXkgb2YgSmFudWFyeSwgd2hpY2ggaXNcclxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnM9ZmFsc2VdIC0gaWYgdHJ1ZSwgYWxsb3dzIHVzYWdlIG9mIHRoZSB3ZWVrLW51bWJlcmluZyB5ZWFyIHRva2VucyBgWVlgIGFuZCBgWVlZWWA7XHJcbiAqICAgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXHJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2Vucz1mYWxzZV0gLSBpZiB0cnVlLCBhbGxvd3MgdXNhZ2Ugb2YgdGhlIGRheSBvZiB5ZWFyIHRva2VucyBgRGAgYW5kIGBERGA7XHJcbiAqICAgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmdcclxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxyXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgZGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXHJcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBsb2NhbGl6ZWAgcHJvcGVydHlcclxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGZvcm1hdExvbmdgIHByb3BlcnR5XHJcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcclxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCBtdXN0IGJlIGJldHdlZW4gMSBhbmQgN1xyXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYHl5eXlgIGluc3RlYWQgb2YgYFlZWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcclxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGB5eWAgaW5zdGVhZCBvZiBgWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcclxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGBkYCBpbnN0ZWFkIG9mIGBEYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXHJcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgZGRgIGluc3RlYWQgb2YgYEREYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXHJcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGZvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlclxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiAvLyBSZXByZXNlbnQgMTEgRmVicnVhcnkgMjAxNCBpbiBtaWRkbGUtZW5kaWFuIGZvcm1hdDpcclxuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDEsIDExKSwgJ01NL2RkL3l5eXknKVxyXG4gKiAvLz0+ICcwMi8xMS8yMDE0J1xyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiAvLyBSZXByZXNlbnQgMiBKdWx5IDIwMTQgaW4gRXNwZXJhbnRvOlxyXG4gKiBpbXBvcnQgeyBlb0xvY2FsZSB9IGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9lbydcclxuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDYsIDIpLCBcImRvICdkZScgTU1NTSB5eXl5XCIsIHtcclxuICogICBsb2NhbGU6IGVvTG9jYWxlXHJcbiAqIH0pXHJcbiAqIC8vPT4gJzItYSBkZSBqdWxpbyAyMDE0J1xyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiAvLyBFc2NhcGUgc3RyaW5nIGJ5IHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzOlxyXG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgNiwgMiwgMTUpLCBcImggJ28nJ2Nsb2NrJ1wiKVxyXG4gKiAvLz0+IFwiMyBvJ2Nsb2NrXCJcclxuICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXQoZGlydHlEYXRlLCBkaXJ0eUZvcm1hdFN0ciwgb3B0aW9ucykge1xyXG4gIHZhciBfcmVmLCBfb3B0aW9ucyRsb2NhbGUsIF9yZWYyLCBfcmVmMywgX3JlZjQsIF9vcHRpb25zJGZpcnN0V2Vla0NvbiwgX29wdGlvbnMkbG9jYWxlMiwgX29wdGlvbnMkbG9jYWxlMiRvcHRpLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIsIF9yZWY1LCBfcmVmNiwgX3JlZjcsIF9vcHRpb25zJHdlZWtTdGFydHNPbiwgX29wdGlvbnMkbG9jYWxlMywgX29wdGlvbnMkbG9jYWxlMyRvcHRpLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwzLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWw0O1xyXG5cclxuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcclxuICB2YXIgZm9ybWF0U3RyID0gU3RyaW5nKGRpcnR5Rm9ybWF0U3RyKTtcclxuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xyXG4gIHZhciBsb2NhbGUgPSAoX3JlZiA9IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMubG9jYWxlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRsb2NhbGUgIT09IHZvaWQgMCA/IF9vcHRpb25zJGxvY2FsZSA6IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IGRlZmF1bHRMb2NhbGU7XHJcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IHRvSW50ZWdlcigoX3JlZjIgPSAoX3JlZjMgPSAoX3JlZjQgPSAoX29wdGlvbnMkZmlyc3RXZWVrQ29uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX29wdGlvbnMkZmlyc3RXZWVrQ29uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRmaXJzdFdlZWtDb24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUyID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZTIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUyJG9wdGkgPSBfb3B0aW9ucyRsb2NhbGUyLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZTIkb3B0aSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlMiRvcHRpLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjQgIT09IHZvaWQgMCA/IF9yZWY0IDogZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAxKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAxIGFuZCA3IF9hbmRfIGlzIG5vdCBOYU5cclxuXHJcbiAgaWYgKCEoZmlyc3RXZWVrQ29udGFpbnNEYXRlID49IDEgJiYgZmlyc3RXZWVrQ29udGFpbnNEYXRlIDw9IDcpKSB7XHJcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignZmlyc3RXZWVrQ29udGFpbnNEYXRlIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3IGluY2x1c2l2ZWx5Jyk7XHJcbiAgfVxyXG5cclxuICB2YXIgd2Vla1N0YXJ0c09uID0gdG9JbnRlZ2VyKChfcmVmNSA9IChfcmVmNiA9IChfcmVmNyA9IChfb3B0aW9ucyR3ZWVrU3RhcnRzT24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gIT09IHZvaWQgMCA/IF9vcHRpb25zJHdlZWtTdGFydHNPbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZTMgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlMyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZTMkb3B0aSA9IF9vcHRpb25zJGxvY2FsZTMub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlMyRvcHRpID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUzJG9wdGkud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmNyAhPT0gdm9pZCAwID8gX3JlZjcgOiBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWY2ICE9PSB2b2lkIDAgPyBfcmVmNiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwzID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwzID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsNCA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDMub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsNCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsNC53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWY1ICE9PSB2b2lkIDAgPyBfcmVmNSA6IDApOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxyXG5cclxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcclxuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcclxuICB9XHJcblxyXG4gIGlmICghbG9jYWxlLmxvY2FsaXplKSB7XHJcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbG9jYWxlIG11c3QgY29udGFpbiBsb2NhbGl6ZSBwcm9wZXJ0eScpO1xyXG4gIH1cclxuXHJcbiAgaWYgKCFsb2NhbGUuZm9ybWF0TG9uZykge1xyXG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2xvY2FsZSBtdXN0IGNvbnRhaW4gZm9ybWF0TG9uZyBwcm9wZXJ0eScpO1xyXG4gIH1cclxuXHJcbiAgdmFyIG9yaWdpbmFsRGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xyXG5cclxuICBpZiAoIWlzVmFsaWQob3JpZ2luYWxEYXRlKSkge1xyXG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgdGltZSB2YWx1ZScpO1xyXG4gIH0gLy8gQ29udmVydCB0aGUgZGF0ZSBpbiBzeXN0ZW0gdGltZXpvbmUgdG8gdGhlIHNhbWUgZGF0ZSBpbiBVVEMrMDA6MDAgdGltZXpvbmUuXHJcbiAgLy8gVGhpcyBlbnN1cmVzIHRoYXQgd2hlbiBVVEMgZnVuY3Rpb25zIHdpbGwgYmUgaW1wbGVtZW50ZWQsIGxvY2FsZXMgd2lsbCBiZSBjb21wYXRpYmxlIHdpdGggdGhlbS5cclxuICAvLyBTZWUgYW4gaXNzdWUgYWJvdXQgVVRDIGZ1bmN0aW9uczogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcclxuXHJcblxyXG4gIHZhciB0aW1lem9uZU9mZnNldCA9IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMob3JpZ2luYWxEYXRlKTtcclxuICB2YXIgdXRjRGF0ZSA9IHN1Yk1pbGxpc2Vjb25kcyhvcmlnaW5hbERhdGUsIHRpbWV6b25lT2Zmc2V0KTtcclxuICB2YXIgZm9ybWF0dGVyT3B0aW9ucyA9IHtcclxuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogZmlyc3RXZWVrQ29udGFpbnNEYXRlLFxyXG4gICAgd2Vla1N0YXJ0c09uOiB3ZWVrU3RhcnRzT24sXHJcbiAgICBsb2NhbGU6IGxvY2FsZSxcclxuICAgIF9vcmlnaW5hbERhdGU6IG9yaWdpbmFsRGF0ZVxyXG4gIH07XHJcbiAgdmFyIHJlc3VsdCA9IGZvcm1hdFN0ci5tYXRjaChsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCkubWFwKGZ1bmN0aW9uIChzdWJzdHJpbmcpIHtcclxuICAgIHZhciBmaXJzdENoYXJhY3RlciA9IHN1YnN0cmluZ1swXTtcclxuXHJcbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09ICdwJyB8fCBmaXJzdENoYXJhY3RlciA9PT0gJ1AnKSB7XHJcbiAgICAgIHZhciBsb25nRm9ybWF0dGVyID0gbG9uZ0Zvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdO1xyXG4gICAgICByZXR1cm4gbG9uZ0Zvcm1hdHRlcihzdWJzdHJpbmcsIGxvY2FsZS5mb3JtYXRMb25nKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc3Vic3RyaW5nO1xyXG4gIH0pLmpvaW4oJycpLm1hdGNoKGZvcm1hdHRpbmdUb2tlbnNSZWdFeHApLm1hcChmdW5jdGlvbiAoc3Vic3RyaW5nKSB7XHJcbiAgICAvLyBSZXBsYWNlIHR3byBzaW5nbGUgcXVvdGUgY2hhcmFjdGVycyB3aXRoIG9uZSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyXHJcbiAgICBpZiAoc3Vic3RyaW5nID09PSBcIicnXCIpIHtcclxuICAgICAgcmV0dXJuIFwiJ1wiO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBmaXJzdENoYXJhY3RlciA9IHN1YnN0cmluZ1swXTtcclxuXHJcbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09IFwiJ1wiKSB7XHJcbiAgICAgIHJldHVybiBjbGVhbkVzY2FwZWRTdHJpbmcoc3Vic3RyaW5nKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgZm9ybWF0dGVyID0gZm9ybWF0dGVyc1tmaXJzdENoYXJhY3Rlcl07XHJcblxyXG4gICAgaWYgKGZvcm1hdHRlcikge1xyXG4gICAgICBpZiAoIShvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2VucykgJiYgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHN1YnN0cmluZykpIHtcclxuICAgICAgICB0aHJvd1Byb3RlY3RlZEVycm9yKHN1YnN0cmluZywgZGlydHlGb3JtYXRTdHIsIFN0cmluZyhkaXJ0eURhdGUpKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCEob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zKSAmJiBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuKHN1YnN0cmluZykpIHtcclxuICAgICAgICB0aHJvd1Byb3RlY3RlZEVycm9yKHN1YnN0cmluZywgZGlydHlGb3JtYXRTdHIsIFN0cmluZyhkaXJ0eURhdGUpKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGZvcm1hdHRlcih1dGNEYXRlLCBzdWJzdHJpbmcsIGxvY2FsZS5sb2NhbGl6ZSwgZm9ybWF0dGVyT3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyLm1hdGNoKHVuZXNjYXBlZExhdGluQ2hhcmFjdGVyUmVnRXhwKSkge1xyXG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignRm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyIGAnICsgZmlyc3RDaGFyYWN0ZXIgKyAnYCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzdWJzdHJpbmc7XHJcbiAgfSkuam9pbignJyk7XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYW5Fc2NhcGVkU3RyaW5nKGlucHV0KSB7XHJcbiAgdmFyIG1hdGNoZWQgPSBpbnB1dC5tYXRjaChlc2NhcGVkU3RyaW5nUmVnRXhwKTtcclxuXHJcbiAgaWYgKCFtYXRjaGVkKSB7XHJcbiAgICByZXR1cm4gaW5wdXQ7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbWF0Y2hlZFsxXS5yZXBsYWNlKGRvdWJsZVF1b3RlUmVnRXhwLCBcIidcIik7XHJcbn0iLCJpbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xyXG4vKipcclxuICogQG5hbWUgaXNEYXRlXHJcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xyXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gdmFsdWUgYSBkYXRlP1xyXG4gKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLiBUaGUgZnVuY3Rpb24gd29ya3MgZm9yIGRhdGVzIHRyYW5zZmVycmVkIGFjcm9zcyBpZnJhbWVzLlxyXG4gKlxyXG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gdGhlIHZhbHVlIHRvIGNoZWNrXHJcbiAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhIGRhdGVcclxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50cyByZXF1aXJlZFxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiAvLyBGb3IgYSB2YWxpZCBkYXRlOlxyXG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUobmV3IERhdGUoKSlcclxuICogLy89PiB0cnVlXHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqIC8vIEZvciBhbiBpbnZhbGlkIGRhdGU6XHJcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZShuZXcgRGF0ZShOYU4pKVxyXG4gKiAvLz0+IHRydWVcclxuICpcclxuICogQGV4YW1wbGVcclxuICogLy8gRm9yIHNvbWUgdmFsdWU6XHJcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZSgnMjAxNC0wMi0zMScpXHJcbiAqIC8vPT4gZmFsc2VcclxuICpcclxuICogQGV4YW1wbGVcclxuICogLy8gRm9yIGFuIG9iamVjdDpcclxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKHt9KVxyXG4gKiAvLz0+IGZhbHNlXHJcbiAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNEYXRlKHZhbHVlKSB7XHJcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XHJcbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IERhdGVdJztcclxufSIsImltcG9ydCBpc0RhdGUgZnJvbSBcIi4uL2lzRGF0ZS9pbmRleC5qc1wiO1xyXG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcclxuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcclxuLyoqXHJcbiAqIEBuYW1lIGlzVmFsaWRcclxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXHJcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHZhbGlkP1xyXG4gKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogUmV0dXJucyBmYWxzZSBpZiBhcmd1bWVudCBpcyBJbnZhbGlkIERhdGUgYW5kIHRydWUgb3RoZXJ3aXNlLlxyXG4gKiBBcmd1bWVudCBpcyBjb252ZXJ0ZWQgdG8gRGF0ZSB1c2luZyBgdG9EYXRlYC4gU2VlIFt0b0RhdGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvdG9EYXRlfVxyXG4gKiBJbnZhbGlkIERhdGUgaXMgYSBEYXRlLCB3aG9zZSB0aW1lIHZhbHVlIGlzIE5hTi5cclxuICpcclxuICogVGltZSB2YWx1ZSBvZiBEYXRlOiBodHRwOi8vZXM1LmdpdGh1Yi5pby8jeDE1LjkuMS4xXHJcbiAqXHJcbiAqIEBwYXJhbSB7Kn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXHJcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB2YWxpZFxyXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcclxuICpcclxuICogQGV4YW1wbGVcclxuICogLy8gRm9yIHRoZSB2YWxpZCBkYXRlOlxyXG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKDIwMTQsIDEsIDMxKSlcclxuICogLy89PiB0cnVlXHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqIC8vIEZvciB0aGUgdmFsdWUsIGNvbnZlcnRhYmxlIGludG8gYSBkYXRlOlxyXG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKDEzOTM4MDQ4MDAwMDApXHJcbiAqIC8vPT4gdHJ1ZVxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiAvLyBGb3IgdGhlIGludmFsaWQgZGF0ZTpcclxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgnJykpXHJcbiAqIC8vPT4gZmFsc2VcclxuICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1ZhbGlkKGRpcnR5RGF0ZSkge1xyXG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xyXG5cclxuICBpZiAoIWlzRGF0ZShkaXJ0eURhdGUpICYmIHR5cGVvZiBkaXJ0eURhdGUgIT09ICdudW1iZXInKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xyXG4gIHJldHVybiAhaXNOYU4oTnVtYmVyKGRhdGUpKTtcclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkRm9ybWF0TG9uZ0ZuKGFyZ3MpIHtcclxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xyXG4gICAgLy8gVE9ETzogUmVtb3ZlIFN0cmluZygpXHJcbiAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XHJcbiAgICB2YXIgZm9ybWF0ID0gYXJncy5mb3JtYXRzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHNbYXJncy5kZWZhdWx0V2lkdGhdO1xyXG4gICAgcmV0dXJuIGZvcm1hdDtcclxuICB9O1xyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRMb2NhbGl6ZUZuKGFyZ3MpIHtcclxuICByZXR1cm4gZnVuY3Rpb24gKGRpcnR5SW5kZXgsIG9wdGlvbnMpIHtcclxuICAgIHZhciBjb250ZXh0ID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5jb250ZXh0ID8gU3RyaW5nKG9wdGlvbnMuY29udGV4dCkgOiAnc3RhbmRhbG9uZSc7XHJcbiAgICB2YXIgdmFsdWVzQXJyYXk7XHJcblxyXG4gICAgaWYgKGNvbnRleHQgPT09ICdmb3JtYXR0aW5nJyAmJiBhcmdzLmZvcm1hdHRpbmdWYWx1ZXMpIHtcclxuICAgICAgdmFyIGRlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdEZvcm1hdHRpbmdXaWR0aCB8fCBhcmdzLmRlZmF1bHRXaWR0aDtcclxuICAgICAgdmFyIHdpZHRoID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGRlZmF1bHRXaWR0aDtcclxuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1tkZWZhdWx0V2lkdGhdO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdmFyIF9kZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRXaWR0aDtcclxuXHJcbiAgICAgIHZhciBfd2lkdGggPSBvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XHJcblxyXG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MudmFsdWVzW193aWR0aF0gfHwgYXJncy52YWx1ZXNbX2RlZmF1bHRXaWR0aF07XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGluZGV4ID0gYXJncy5hcmd1bWVudENhbGxiYWNrID8gYXJncy5hcmd1bWVudENhbGxiYWNrKGRpcnR5SW5kZXgpIDogZGlydHlJbmRleDsgLy8gQHRzLWlnbm9yZTogRm9yIHNvbWUgcmVhc29uIFR5cGVTY3JpcHQganVzdCBkb24ndCB3YW50IHRvIG1hdGNoIGl0LCBubyBtYXR0ZXIgaG93IGhhcmQgd2UgdHJ5LiBJIGNoYWxsZW5nZSB5b3UgdG8gdHJ5IHRvIHJlbW92ZSBpdCFcclxuXHJcbiAgICByZXR1cm4gdmFsdWVzQXJyYXlbaW5kZXhdO1xyXG4gIH07XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1hdGNoRm4oYXJncykge1xyXG4gIHJldHVybiBmdW5jdGlvbiAoc3RyaW5nKSB7XHJcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XHJcbiAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoO1xyXG4gICAgdmFyIG1hdGNoUGF0dGVybiA9IHdpZHRoICYmIGFyZ3MubWF0Y2hQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5tYXRjaFBhdHRlcm5zW2FyZ3MuZGVmYXVsdE1hdGNoV2lkdGhdO1xyXG4gICAgdmFyIG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKG1hdGNoUGF0dGVybik7XHJcblxyXG4gICAgaWYgKCFtYXRjaFJlc3VsdCkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xyXG4gICAgdmFyIHBhcnNlUGF0dGVybnMgPSB3aWR0aCAmJiBhcmdzLnBhcnNlUGF0dGVybnNbd2lkdGhdIHx8IGFyZ3MucGFyc2VQYXR0ZXJuc1thcmdzLmRlZmF1bHRQYXJzZVdpZHRoXTtcclxuICAgIHZhciBrZXkgPSBBcnJheS5pc0FycmF5KHBhcnNlUGF0dGVybnMpID8gZmluZEluZGV4KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XHJcbiAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZyk7XHJcbiAgICB9KSA6IGZpbmRLZXkocGFyc2VQYXR0ZXJucywgZnVuY3Rpb24gKHBhdHRlcm4pIHtcclxuICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKTtcclxuICAgIH0pO1xyXG4gICAgdmFyIHZhbHVlO1xyXG4gICAgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2soa2V5KSA6IGtleTtcclxuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xyXG4gICAgdmFyIHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdmFsdWU6IHZhbHVlLFxyXG4gICAgICByZXN0OiByZXN0XHJcbiAgICB9O1xyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbmRLZXkob2JqZWN0LCBwcmVkaWNhdGUpIHtcclxuICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XHJcbiAgICBpZiAob2JqZWN0Lmhhc093blByb3BlcnR5KGtleSkgJiYgcHJlZGljYXRlKG9iamVjdFtrZXldKSkge1xyXG4gICAgICByZXR1cm4ga2V5O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHVuZGVmaW5lZDtcclxufVxyXG5cclxuZnVuY3Rpb24gZmluZEluZGV4KGFycmF5LCBwcmVkaWNhdGUpIHtcclxuICBmb3IgKHZhciBrZXkgPSAwOyBrZXkgPCBhcnJheS5sZW5ndGg7IGtleSsrKSB7XHJcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2tleV0pKSB7XHJcbiAgICAgIHJldHVybiBrZXk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdW5kZWZpbmVkO1xyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNYXRjaFBhdHRlcm5GbihhcmdzKSB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uIChzdHJpbmcpIHtcclxuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcclxuICAgIHZhciBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLm1hdGNoUGF0dGVybik7XHJcbiAgICBpZiAoIW1hdGNoUmVzdWx0KSByZXR1cm4gbnVsbDtcclxuICAgIHZhciBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XHJcbiAgICB2YXIgcGFyc2VSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5wYXJzZVBhdHRlcm4pO1xyXG4gICAgaWYgKCFwYXJzZVJlc3VsdCkgcmV0dXJuIG51bGw7XHJcbiAgICB2YXIgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2socGFyc2VSZXN1bHRbMF0pIDogcGFyc2VSZXN1bHRbMF07XHJcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcclxuICAgIHZhciByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHZhbHVlOiB2YWx1ZSxcclxuICAgICAgcmVzdDogcmVzdFxyXG4gICAgfTtcclxuICB9O1xyXG59IiwidmFyIGZvcm1hdERpc3RhbmNlTG9jYWxlID0ge1xyXG4gIGxlc3NUaGFuWFNlY29uZHM6IHtcclxuICAgIG9uZTogJ2xlc3MgdGhhbiBhIHNlY29uZCcsXHJcbiAgICBvdGhlcjogJ2xlc3MgdGhhbiB7e2NvdW50fX0gc2Vjb25kcydcclxuICB9LFxyXG4gIHhTZWNvbmRzOiB7XHJcbiAgICBvbmU6ICcxIHNlY29uZCcsXHJcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBzZWNvbmRzJ1xyXG4gIH0sXHJcbiAgaGFsZkFNaW51dGU6ICdoYWxmIGEgbWludXRlJyxcclxuICBsZXNzVGhhblhNaW51dGVzOiB7XHJcbiAgICBvbmU6ICdsZXNzIHRoYW4gYSBtaW51dGUnLFxyXG4gICAgb3RoZXI6ICdsZXNzIHRoYW4ge3tjb3VudH19IG1pbnV0ZXMnXHJcbiAgfSxcclxuICB4TWludXRlczoge1xyXG4gICAgb25lOiAnMSBtaW51dGUnLFxyXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbWludXRlcydcclxuICB9LFxyXG4gIGFib3V0WEhvdXJzOiB7XHJcbiAgICBvbmU6ICdhYm91dCAxIGhvdXInLFxyXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gaG91cnMnXHJcbiAgfSxcclxuICB4SG91cnM6IHtcclxuICAgIG9uZTogJzEgaG91cicsXHJcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBob3VycydcclxuICB9LFxyXG4gIHhEYXlzOiB7XHJcbiAgICBvbmU6ICcxIGRheScsXHJcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBkYXlzJ1xyXG4gIH0sXHJcbiAgYWJvdXRYV2Vla3M6IHtcclxuICAgIG9uZTogJ2Fib3V0IDEgd2VlaycsXHJcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSB3ZWVrcydcclxuICB9LFxyXG4gIHhXZWVrczoge1xyXG4gICAgb25lOiAnMSB3ZWVrJyxcclxuICAgIG90aGVyOiAne3tjb3VudH19IHdlZWtzJ1xyXG4gIH0sXHJcbiAgYWJvdXRYTW9udGhzOiB7XHJcbiAgICBvbmU6ICdhYm91dCAxIG1vbnRoJyxcclxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IG1vbnRocydcclxuICB9LFxyXG4gIHhNb250aHM6IHtcclxuICAgIG9uZTogJzEgbW9udGgnLFxyXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbW9udGhzJ1xyXG4gIH0sXHJcbiAgYWJvdXRYWWVhcnM6IHtcclxuICAgIG9uZTogJ2Fib3V0IDEgeWVhcicsXHJcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSB5ZWFycydcclxuICB9LFxyXG4gIHhZZWFyczoge1xyXG4gICAgb25lOiAnMSB5ZWFyJyxcclxuICAgIG90aGVyOiAne3tjb3VudH19IHllYXJzJ1xyXG4gIH0sXHJcbiAgb3ZlclhZZWFyczoge1xyXG4gICAgb25lOiAnb3ZlciAxIHllYXInLFxyXG4gICAgb3RoZXI6ICdvdmVyIHt7Y291bnR9fSB5ZWFycydcclxuICB9LFxyXG4gIGFsbW9zdFhZZWFyczoge1xyXG4gICAgb25lOiAnYWxtb3N0IDEgeWVhcicsXHJcbiAgICBvdGhlcjogJ2FsbW9zdCB7e2NvdW50fX0geWVhcnMnXHJcbiAgfVxyXG59O1xyXG5cclxudmFyIGZvcm1hdERpc3RhbmNlID0gZnVuY3Rpb24gKHRva2VuLCBjb3VudCwgb3B0aW9ucykge1xyXG4gIHZhciByZXN1bHQ7XHJcbiAgdmFyIHRva2VuVmFsdWUgPSBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl07XHJcblxyXG4gIGlmICh0eXBlb2YgdG9rZW5WYWx1ZSA9PT0gJ3N0cmluZycpIHtcclxuICAgIHJlc3VsdCA9IHRva2VuVmFsdWU7XHJcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xyXG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vbmU7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub3RoZXIucmVwbGFjZSgne3tjb3VudH19JywgY291bnQudG9TdHJpbmcoKSk7XHJcbiAgfVxyXG5cclxuICBpZiAob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5hZGRTdWZmaXgpIHtcclxuICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gJiYgb3B0aW9ucy5jb21wYXJpc29uID4gMCkge1xyXG4gICAgICByZXR1cm4gJ2luICcgKyByZXN1bHQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gcmVzdWx0ICsgJyBhZ28nO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdERpc3RhbmNlOyIsImltcG9ydCBidWlsZEZvcm1hdExvbmdGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qc1wiO1xyXG52YXIgZGF0ZUZvcm1hdHMgPSB7XHJcbiAgZnVsbDogJ0VFRUUsIE1NTU0gZG8sIHknLFxyXG4gIGxvbmc6ICdNTU1NIGRvLCB5JyxcclxuICBtZWRpdW06ICdNTU0gZCwgeScsXHJcbiAgc2hvcnQ6ICdNTS9kZC95eXl5J1xyXG59O1xyXG52YXIgdGltZUZvcm1hdHMgPSB7XHJcbiAgZnVsbDogJ2g6bW06c3MgYSB6enp6JyxcclxuICBsb25nOiAnaDptbTpzcyBhIHonLFxyXG4gIG1lZGl1bTogJ2g6bW06c3MgYScsXHJcbiAgc2hvcnQ6ICdoOm1tIGEnXHJcbn07XHJcbnZhciBkYXRlVGltZUZvcm1hdHMgPSB7XHJcbiAgZnVsbDogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXHJcbiAgbG9uZzogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXHJcbiAgbWVkaXVtOiAne3tkYXRlfX0sIHt7dGltZX19JyxcclxuICBzaG9ydDogJ3t7ZGF0ZX19LCB7e3RpbWV9fSdcclxufTtcclxudmFyIGZvcm1hdExvbmcgPSB7XHJcbiAgZGF0ZTogYnVpbGRGb3JtYXRMb25nRm4oe1xyXG4gICAgZm9ybWF0czogZGF0ZUZvcm1hdHMsXHJcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xyXG4gIH0pLFxyXG4gIHRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcclxuICAgIGZvcm1hdHM6IHRpbWVGb3JtYXRzLFxyXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcclxuICB9KSxcclxuICBkYXRlVGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xyXG4gICAgZm9ybWF0czogZGF0ZVRpbWVGb3JtYXRzLFxyXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcclxuICB9KVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBmb3JtYXRMb25nOyIsInZhciBmb3JtYXRSZWxhdGl2ZUxvY2FsZSA9IHtcclxuICBsYXN0V2VlazogXCInbGFzdCcgZWVlZSAnYXQnIHBcIixcclxuICB5ZXN0ZXJkYXk6IFwiJ3llc3RlcmRheSBhdCcgcFwiLFxyXG4gIHRvZGF5OiBcIid0b2RheSBhdCcgcFwiLFxyXG4gIHRvbW9ycm93OiBcIid0b21vcnJvdyBhdCcgcFwiLFxyXG4gIG5leHRXZWVrOiBcImVlZWUgJ2F0JyBwXCIsXHJcbiAgb3RoZXI6ICdQJ1xyXG59O1xyXG5cclxudmFyIGZvcm1hdFJlbGF0aXZlID0gZnVuY3Rpb24gKHRva2VuLCBfZGF0ZSwgX2Jhc2VEYXRlLCBfb3B0aW9ucykge1xyXG4gIHJldHVybiBmb3JtYXRSZWxhdGl2ZUxvY2FsZVt0b2tlbl07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmb3JtYXRSZWxhdGl2ZTsiLCJpbXBvcnQgYnVpbGRMb2NhbGl6ZUZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qc1wiO1xyXG52YXIgZXJhVmFsdWVzID0ge1xyXG4gIG5hcnJvdzogWydCJywgJ0EnXSxcclxuICBhYmJyZXZpYXRlZDogWydCQycsICdBRCddLFxyXG4gIHdpZGU6IFsnQmVmb3JlIENocmlzdCcsICdBbm5vIERvbWluaSddXHJcbn07XHJcbnZhciBxdWFydGVyVmFsdWVzID0ge1xyXG4gIG5hcnJvdzogWycxJywgJzInLCAnMycsICc0J10sXHJcbiAgYWJicmV2aWF0ZWQ6IFsnUTEnLCAnUTInLCAnUTMnLCAnUTQnXSxcclxuICB3aWRlOiBbJzFzdCBxdWFydGVyJywgJzJuZCBxdWFydGVyJywgJzNyZCBxdWFydGVyJywgJzR0aCBxdWFydGVyJ11cclxufTsgLy8gTm90ZTogaW4gRW5nbGlzaCwgdGhlIG5hbWVzIG9mIGRheXMgb2YgdGhlIHdlZWsgYW5kIG1vbnRocyBhcmUgY2FwaXRhbGl6ZWQuXHJcbi8vIElmIHlvdSBhcmUgbWFraW5nIGEgbmV3IGxvY2FsZSBiYXNlZCBvbiB0aGlzIG9uZSwgY2hlY2sgaWYgdGhlIHNhbWUgaXMgdHJ1ZSBmb3IgdGhlIGxhbmd1YWdlIHlvdSdyZSB3b3JraW5nIG9uLlxyXG4vLyBHZW5lcmFsbHksIGZvcm1hdHRlZCBkYXRlcyBzaG91bGQgbG9vayBsaWtlIHRoZXkgYXJlIGluIHRoZSBtaWRkbGUgb2YgYSBzZW50ZW5jZSxcclxuLy8gZS5nLiBpbiBTcGFuaXNoIGxhbmd1YWdlIHRoZSB3ZWVrZGF5cyBhbmQgbW9udGhzIHNob3VsZCBiZSBpbiB0aGUgbG93ZXJjYXNlLlxyXG5cclxudmFyIG1vbnRoVmFsdWVzID0ge1xyXG4gIG5hcnJvdzogWydKJywgJ0YnLCAnTScsICdBJywgJ00nLCAnSicsICdKJywgJ0EnLCAnUycsICdPJywgJ04nLCAnRCddLFxyXG4gIGFiYnJldmlhdGVkOiBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJywgJ09jdCcsICdOb3YnLCAnRGVjJ10sXHJcbiAgd2lkZTogWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ11cclxufTtcclxudmFyIGRheVZhbHVlcyA9IHtcclxuICBuYXJyb3c6IFsnUycsICdNJywgJ1QnLCAnVycsICdUJywgJ0YnLCAnUyddLFxyXG4gIHNob3J0OiBbJ1N1JywgJ01vJywgJ1R1JywgJ1dlJywgJ1RoJywgJ0ZyJywgJ1NhJ10sXHJcbiAgYWJicmV2aWF0ZWQ6IFsnU3VuJywgJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodScsICdGcmknLCAnU2F0J10sXHJcbiAgd2lkZTogWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddXHJcbn07XHJcbnZhciBkYXlQZXJpb2RWYWx1ZXMgPSB7XHJcbiAgbmFycm93OiB7XHJcbiAgICBhbTogJ2EnLFxyXG4gICAgcG06ICdwJyxcclxuICAgIG1pZG5pZ2h0OiAnbWknLFxyXG4gICAgbm9vbjogJ24nLFxyXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxyXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcclxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcclxuICAgIG5pZ2h0OiAnbmlnaHQnXHJcbiAgfSxcclxuICBhYmJyZXZpYXRlZDoge1xyXG4gICAgYW06ICdBTScsXHJcbiAgICBwbTogJ1BNJyxcclxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxyXG4gICAgbm9vbjogJ25vb24nLFxyXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxyXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcclxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcclxuICAgIG5pZ2h0OiAnbmlnaHQnXHJcbiAgfSxcclxuICB3aWRlOiB7XHJcbiAgICBhbTogJ2EubS4nLFxyXG4gICAgcG06ICdwLm0uJyxcclxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxyXG4gICAgbm9vbjogJ25vb24nLFxyXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxyXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcclxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcclxuICAgIG5pZ2h0OiAnbmlnaHQnXHJcbiAgfVxyXG59O1xyXG52YXIgZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyA9IHtcclxuICBuYXJyb3c6IHtcclxuICAgIGFtOiAnYScsXHJcbiAgICBwbTogJ3AnLFxyXG4gICAgbWlkbmlnaHQ6ICdtaScsXHJcbiAgICBub29uOiAnbicsXHJcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxyXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXHJcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxyXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcclxuICB9LFxyXG4gIGFiYnJldmlhdGVkOiB7XHJcbiAgICBhbTogJ0FNJyxcclxuICAgIHBtOiAnUE0nLFxyXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXHJcbiAgICBub29uOiAnbm9vbicsXHJcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxyXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXHJcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxyXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcclxuICB9LFxyXG4gIHdpZGU6IHtcclxuICAgIGFtOiAnYS5tLicsXHJcbiAgICBwbTogJ3AubS4nLFxyXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXHJcbiAgICBub29uOiAnbm9vbicsXHJcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxyXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXHJcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxyXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcclxuICB9XHJcbn07XHJcblxyXG52YXIgb3JkaW5hbE51bWJlciA9IGZ1bmN0aW9uIChkaXJ0eU51bWJlciwgX29wdGlvbnMpIHtcclxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTsgLy8gSWYgb3JkaW5hbCBudW1iZXJzIGRlcGVuZCBvbiBjb250ZXh0LCBmb3IgZXhhbXBsZSxcclxuICAvLyBpZiB0aGV5IGFyZSBkaWZmZXJlbnQgZm9yIGRpZmZlcmVudCBncmFtbWF0aWNhbCBnZW5kZXJzLFxyXG4gIC8vIHVzZSBgb3B0aW9ucy51bml0YC5cclxuICAvL1xyXG4gIC8vIGB1bml0YCBjYW4gYmUgJ3llYXInLCAncXVhcnRlcicsICdtb250aCcsICd3ZWVrJywgJ2RhdGUnLCAnZGF5T2ZZZWFyJyxcclxuICAvLyAnZGF5JywgJ2hvdXInLCAnbWludXRlJywgJ3NlY29uZCcuXHJcblxyXG4gIHZhciByZW0xMDAgPSBudW1iZXIgJSAxMDA7XHJcblxyXG4gIGlmIChyZW0xMDAgPiAyMCB8fCByZW0xMDAgPCAxMCkge1xyXG4gICAgc3dpdGNoIChyZW0xMDAgJSAxMCkge1xyXG4gICAgICBjYXNlIDE6XHJcbiAgICAgICAgcmV0dXJuIG51bWJlciArICdzdCc7XHJcblxyXG4gICAgICBjYXNlIDI6XHJcbiAgICAgICAgcmV0dXJuIG51bWJlciArICduZCc7XHJcblxyXG4gICAgICBjYXNlIDM6XHJcbiAgICAgICAgcmV0dXJuIG51bWJlciArICdyZCc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbnVtYmVyICsgJ3RoJztcclxufTtcclxuXHJcbnZhciBsb2NhbGl6ZSA9IHtcclxuICBvcmRpbmFsTnVtYmVyOiBvcmRpbmFsTnVtYmVyLFxyXG4gIGVyYTogYnVpbGRMb2NhbGl6ZUZuKHtcclxuICAgIHZhbHVlczogZXJhVmFsdWVzLFxyXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcclxuICB9KSxcclxuICBxdWFydGVyOiBidWlsZExvY2FsaXplRm4oe1xyXG4gICAgdmFsdWVzOiBxdWFydGVyVmFsdWVzLFxyXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXHJcbiAgICBhcmd1bWVudENhbGxiYWNrOiBmdW5jdGlvbiAocXVhcnRlcikge1xyXG4gICAgICByZXR1cm4gcXVhcnRlciAtIDE7XHJcbiAgICB9XHJcbiAgfSksXHJcbiAgbW9udGg6IGJ1aWxkTG9jYWxpemVGbih7XHJcbiAgICB2YWx1ZXM6IG1vbnRoVmFsdWVzLFxyXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcclxuICB9KSxcclxuICBkYXk6IGJ1aWxkTG9jYWxpemVGbih7XHJcbiAgICB2YWx1ZXM6IGRheVZhbHVlcyxcclxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXHJcbiAgfSksXHJcbiAgZGF5UGVyaW9kOiBidWlsZExvY2FsaXplRm4oe1xyXG4gICAgdmFsdWVzOiBkYXlQZXJpb2RWYWx1ZXMsXHJcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcclxuICAgIGZvcm1hdHRpbmdWYWx1ZXM6IGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMsXHJcbiAgICBkZWZhdWx0Rm9ybWF0dGluZ1dpZHRoOiAnd2lkZSdcclxuICB9KVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBsb2NhbGl6ZTsiLCJpbXBvcnQgYnVpbGRNYXRjaEZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qc1wiO1xyXG5pbXBvcnQgYnVpbGRNYXRjaFBhdHRlcm5GbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzXCI7XHJcbnZhciBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL14oXFxkKykodGh8c3R8bmR8cmQpPy9pO1xyXG52YXIgcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9cXGQrL2k7XHJcbnZhciBtYXRjaEVyYVBhdHRlcm5zID0ge1xyXG4gIG5hcnJvdzogL14oYnxhKS9pLFxyXG4gIGFiYnJldmlhdGVkOiAvXihiXFwuP1xccz9jXFwuP3xiXFwuP1xccz9jXFwuP1xccz9lXFwuP3xhXFwuP1xccz9kXFwuP3xjXFwuP1xccz9lXFwuPykvaSxcclxuICB3aWRlOiAvXihiZWZvcmUgY2hyaXN0fGJlZm9yZSBjb21tb24gZXJhfGFubm8gZG9taW5pfGNvbW1vbiBlcmEpL2lcclxufTtcclxudmFyIHBhcnNlRXJhUGF0dGVybnMgPSB7XHJcbiAgYW55OiBbL15iL2ksIC9eKGF8YykvaV1cclxufTtcclxudmFyIG1hdGNoUXVhcnRlclBhdHRlcm5zID0ge1xyXG4gIG5hcnJvdzogL15bMTIzNF0vaSxcclxuICBhYmJyZXZpYXRlZDogL15xWzEyMzRdL2ksXHJcbiAgd2lkZTogL15bMTIzNF0odGh8c3R8bmR8cmQpPyBxdWFydGVyL2lcclxufTtcclxudmFyIHBhcnNlUXVhcnRlclBhdHRlcm5zID0ge1xyXG4gIGFueTogWy8xL2ksIC8yL2ksIC8zL2ksIC80L2ldXHJcbn07XHJcbnZhciBtYXRjaE1vbnRoUGF0dGVybnMgPSB7XHJcbiAgbmFycm93OiAvXltqZm1hc29uZF0vaSxcclxuICBhYmJyZXZpYXRlZDogL14oamFufGZlYnxtYXJ8YXByfG1heXxqdW58anVsfGF1Z3xzZXB8b2N0fG5vdnxkZWMpL2ksXHJcbiAgd2lkZTogL14oamFudWFyeXxmZWJydWFyeXxtYXJjaHxhcHJpbHxtYXl8anVuZXxqdWx5fGF1Z3VzdHxzZXB0ZW1iZXJ8b2N0b2Jlcnxub3ZlbWJlcnxkZWNlbWJlcikvaVxyXG59O1xyXG52YXIgcGFyc2VNb250aFBhdHRlcm5zID0ge1xyXG4gIG5hcnJvdzogWy9eai9pLCAvXmYvaSwgL15tL2ksIC9eYS9pLCAvXm0vaSwgL15qL2ksIC9eai9pLCAvXmEvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldLFxyXG4gIGFueTogWy9eamEvaSwgL15mL2ksIC9ebWFyL2ksIC9eYXAvaSwgL15tYXkvaSwgL15qdW4vaSwgL15qdWwvaSwgL15hdS9pLCAvXnMvaSwgL15vL2ksIC9ebi9pLCAvXmQvaV1cclxufTtcclxudmFyIG1hdGNoRGF5UGF0dGVybnMgPSB7XHJcbiAgbmFycm93OiAvXltzbXR3Zl0vaSxcclxuICBzaG9ydDogL14oc3V8bW98dHV8d2V8dGh8ZnJ8c2EpL2ksXHJcbiAgYWJicmV2aWF0ZWQ6IC9eKHN1bnxtb258dHVlfHdlZHx0aHV8ZnJpfHNhdCkvaSxcclxuICB3aWRlOiAvXihzdW5kYXl8bW9uZGF5fHR1ZXNkYXl8d2VkbmVzZGF5fHRodXJzZGF5fGZyaWRheXxzYXR1cmRheSkvaVxyXG59O1xyXG52YXIgcGFyc2VEYXlQYXR0ZXJucyA9IHtcclxuICBuYXJyb3c6IFsvXnMvaSwgL15tL2ksIC9edC9pLCAvXncvaSwgL150L2ksIC9eZi9pLCAvXnMvaV0sXHJcbiAgYW55OiBbL15zdS9pLCAvXm0vaSwgL150dS9pLCAvXncvaSwgL150aC9pLCAvXmYvaSwgL15zYS9pXVxyXG59O1xyXG52YXIgbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyA9IHtcclxuICBuYXJyb3c6IC9eKGF8cHxtaXxufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaSxcclxuICBhbnk6IC9eKFthcF1cXC4/XFxzP21cXC4/fG1pZG5pZ2h0fG5vb258KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pXHJcbn07XHJcbnZhciBwYXJzZURheVBlcmlvZFBhdHRlcm5zID0ge1xyXG4gIGFueToge1xyXG4gICAgYW06IC9eYS9pLFxyXG4gICAgcG06IC9ecC9pLFxyXG4gICAgbWlkbmlnaHQ6IC9ebWkvaSxcclxuICAgIG5vb246IC9ebm8vaSxcclxuICAgIG1vcm5pbmc6IC9tb3JuaW5nL2ksXHJcbiAgICBhZnRlcm5vb246IC9hZnRlcm5vb24vaSxcclxuICAgIGV2ZW5pbmc6IC9ldmVuaW5nL2ksXHJcbiAgICBuaWdodDogL25pZ2h0L2lcclxuICB9XHJcbn07XHJcbnZhciBtYXRjaCA9IHtcclxuICBvcmRpbmFsTnVtYmVyOiBidWlsZE1hdGNoUGF0dGVybkZuKHtcclxuICAgIG1hdGNoUGF0dGVybjogbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybixcclxuICAgIHBhcnNlUGF0dGVybjogcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybixcclxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUsIDEwKTtcclxuICAgIH1cclxuICB9KSxcclxuICBlcmE6IGJ1aWxkTWF0Y2hGbih7XHJcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaEVyYVBhdHRlcm5zLFxyXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcclxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRXJhUGF0dGVybnMsXHJcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcclxuICB9KSxcclxuICBxdWFydGVyOiBidWlsZE1hdGNoRm4oe1xyXG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hRdWFydGVyUGF0dGVybnMsXHJcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxyXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VRdWFydGVyUGF0dGVybnMsXHJcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueScsXHJcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiAoaW5kZXgpIHtcclxuICAgICAgcmV0dXJuIGluZGV4ICsgMTtcclxuICAgIH1cclxuICB9KSxcclxuICBtb250aDogYnVpbGRNYXRjaEZuKHtcclxuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoTW9udGhQYXR0ZXJucyxcclxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXHJcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZU1vbnRoUGF0dGVybnMsXHJcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcclxuICB9KSxcclxuICBkYXk6IGJ1aWxkTWF0Y2hGbih7XHJcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBhdHRlcm5zLFxyXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcclxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGF0dGVybnMsXHJcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcclxuICB9KSxcclxuICBkYXlQZXJpb2Q6IGJ1aWxkTWF0Y2hGbih7XHJcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBlcmlvZFBhdHRlcm5zLFxyXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICdhbnknLFxyXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyxcclxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xyXG4gIH0pXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IG1hdGNoOyIsImltcG9ydCBmb3JtYXREaXN0YW5jZSBmcm9tIFwiLi9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzXCI7XHJcbmltcG9ydCBmb3JtYXRMb25nIGZyb20gXCIuL19saWIvZm9ybWF0TG9uZy9pbmRleC5qc1wiO1xyXG5pbXBvcnQgZm9ybWF0UmVsYXRpdmUgZnJvbSBcIi4vX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qc1wiO1xyXG5pbXBvcnQgbG9jYWxpemUgZnJvbSBcIi4vX2xpYi9sb2NhbGl6ZS9pbmRleC5qc1wiO1xyXG5pbXBvcnQgbWF0Y2ggZnJvbSBcIi4vX2xpYi9tYXRjaC9pbmRleC5qc1wiO1xyXG5cclxuLyoqXHJcbiAqIEB0eXBlIHtMb2NhbGV9XHJcbiAqIEBjYXRlZ29yeSBMb2NhbGVzXHJcbiAqIEBzdW1tYXJ5IEVuZ2xpc2ggbG9jYWxlIChVbml0ZWQgU3RhdGVzKS5cclxuICogQGxhbmd1YWdlIEVuZ2xpc2hcclxuICogQGlzby02MzktMiBlbmdcclxuICogQGF1dGhvciBTYXNoYSBLb3NzIFtAa29zc25vY29ycF17QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2tvc3Nub2NvcnB9XHJcbiAqIEBhdXRob3IgTGVzaGEgS29zcyBbQGxlc2hha29zc117QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2xlc2hha29zc31cclxuICovXHJcbnZhciBsb2NhbGUgPSB7XHJcbiAgY29kZTogJ2VuLVVTJyxcclxuICBmb3JtYXREaXN0YW5jZTogZm9ybWF0RGlzdGFuY2UsXHJcbiAgZm9ybWF0TG9uZzogZm9ybWF0TG9uZyxcclxuICBmb3JtYXRSZWxhdGl2ZTogZm9ybWF0UmVsYXRpdmUsXHJcbiAgbG9jYWxpemU6IGxvY2FsaXplLFxyXG4gIG1hdGNoOiBtYXRjaCxcclxuICBvcHRpb25zOiB7XHJcbiAgICB3ZWVrU3RhcnRzT246IDBcclxuICAgIC8qIFN1bmRheSAqL1xyXG4gICAgLFxyXG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiAxXHJcbiAgfVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBsb2NhbGU7IiwiaW1wb3J0IGFkZE1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vYWRkTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XHJcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XHJcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XHJcbi8qKlxyXG4gKiBAbmFtZSBzdWJNaWxsaXNlY29uZHNcclxuICogQGNhdGVnb3J5IE1pbGxpc2Vjb25kIEhlbHBlcnNcclxuICogQHN1bW1hcnkgU3VidHJhY3QgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGZyb20gdGhlIGdpdmVuIGRhdGUuXHJcbiAqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cclxuICpcclxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcclxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgbWlsbGlzZWNvbmRzIHRvIGJlIHN1YnRyYWN0ZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cclxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtaWxsaXNlY29uZHMgc3VidHJhY3RlZFxyXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqIC8vIFN1YnRyYWN0IDc1MCBtaWxsaXNlY29uZHMgZnJvbSAxMCBKdWx5IDIwMTQgMTI6NDU6MzAuMDAwOlxyXG4gKiBjb25zdCByZXN1bHQgPSBzdWJNaWxsaXNlY29uZHMobmV3IERhdGUoMjAxNCwgNiwgMTAsIDEyLCA0NSwgMzAsIDApLCA3NTApXHJcbiAqIC8vPT4gVGh1IEp1bCAxMCAyMDE0IDEyOjQ1OjI5LjI1MFxyXG4gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN1Yk1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XHJcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XHJcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XHJcbiAgcmV0dXJuIGFkZE1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIC1hbW91bnQpO1xyXG59IiwiaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcclxuLyoqXHJcbiAqIEBuYW1lIHRvRGF0ZVxyXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcclxuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cclxuICpcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXHJcbiAqXHJcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXHJcbiAqXHJcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cclxuICpcclxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXHJcbiAqXHJcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxyXG4gKlxyXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XHJcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxyXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcclxuICpcclxuICogQGV4YW1wbGVcclxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XHJcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXHJcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxyXG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcclxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcclxuICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcclxuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcclxuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcclxuXHJcbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgYXJndW1lbnQgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XHJcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcclxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xyXG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XHJcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXHJcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjc3RyaW5nLWFyZ3VtZW50c1wiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcclxuXHJcbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgcXVlcnlDbGltYXRlLCBxdWVyeUZvcmVjYXN0IH0gZnJvbSBcIi4vcXVlcnlcIlxyXG5pbXBvcnQgeyBmb3JtYXQsIGFkZCwgbWF4IH0gZnJvbSAnZGF0ZS1mbnMnXHJcbmltcG9ydCB7IHRlIH0gZnJvbSBcImRhdGUtZm5zL2xvY2FsZVwiO1xyXG5jb25zdCBob21lRGlzcGxheWVkQ2l0aWVzID0gWyd0b2t5bycsICdyb21hJywgJ2ZyYW5jZScsICduZXcgeW9yaycsICdhdGhlbnMnLCAnbG9uZG9uJ11cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZW5kZXJIb21lUGFnZSgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmVuZGVyTG9hZGVyKCdMb2FkaW5nIEhvbWUgUGFnZS4uLicpXHJcbiAgICAgICAgbGV0IGNhcmRzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY2FyZHNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2FyZHMtY29udGFpbmVyLWhvbWUnKTtcclxuICAgICAgICBjYXJkc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtYWluLXN1Yi1jb250YWluZXInKVxyXG4gICAgICAgIGZvciAoY29uc3QgY2l0eSBvZiBob21lRGlzcGxheWVkQ2l0aWVzKSB7XHJcbiAgICAgICAgICAgIGxldCBjaXR5UmV0cmlldmVkRGF0YSA9IGF3YWl0IHF1ZXJ5Q2xpbWF0ZShjaXR5KTtcclxuICAgICAgICAgICAgbGV0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkLWhvbWUnKVxyXG4gICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoY2l0eS5yZXBsYWNlKC9cXHMrL2csICctJykpXHJcblxyXG4gICAgICAgICAgICBsZXQgY2l0eU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgY2l0eU5hbWUudGV4dENvbnRlbnQgPSBjaXR5UmV0cmlldmVkRGF0YS5uYW1lO1xyXG4gICAgICAgICAgICBjaXR5TmFtZS5jbGFzc0xpc3QuYWRkKCdjaXR5LW5hbWUtaG9tZScpXHJcblxyXG4gICAgICAgICAgICBsZXQgY2l0eVRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgY2l0eVRlbXAuY2xhc3NMaXN0LmFkZCgnY2l0eS10ZW1wLWhvbWUnKVxyXG4gICAgICAgICAgICBjaXR5VGVtcC50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoY2l0eVJldHJpZXZlZERhdGEubWFpbi50ZW1wIC0gMjc1KX3CsENgO1xyXG5cclxuICAgICAgICAgICAgbGV0IGNpdHlXZWF0aGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICAgICAgY2l0eVdlYXRoZXIuY2xhc3NMaXN0LmFkZCgnY2l0eS13ZWF0aGVyLWhvbWUnKVxyXG4gICAgICAgICAgICBjaXR5V2VhdGhlci50ZXh0Q29udGVudCA9IGNpdHlSZXRyaWV2ZWREYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb24uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBjaXR5UmV0cmlldmVkRGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLnNsaWNlKDEpXHJcblxyXG4gICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGNpdHlOYW1lKVxyXG4gICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGNpdHlXZWF0aGVyKVxyXG4gICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGNpdHlUZW1wKVxyXG4gICAgICAgICAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgICAgICAgICAgICAgIHJlbmRlclF1ZXJpZWRDaXR5KGNpdHlSZXRyaWV2ZWREYXRhLm5hbWUpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGNhcmRzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG4gICAgICAgIG1haW5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWFpbi1jb250YWluZXItaG9tZScpO1xyXG5cclxuXHJcblxyXG4gICAgICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuICAgICAgICBsZXQgbG9nb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgbG9nb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdsb2dvLWRlZmF1bHQnKVxyXG4gICAgICAgIGxldCBsb2dvSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICAgICAgbG9nb0ljb24uc3JjID0gJy4vaGVhZC1pY29uLmdpZidcclxuICAgICAgICBsZXQgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcclxuICAgICAgICBsb2dvLmNsYXNzTGlzdC5hZGQoJ2xvZ28tdGV4dC1kZWZhdWx0JylcclxuICAgICAgICBsb2dvLnRleHRDb250ZW50ID0gJ1fCt2XCt2HCt3TCt2jCt2XCt3InXHJcbiAgICAgICAgbG9nby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBsb2dvQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvZ29JY29uKVxyXG4gICAgICAgIGxvZ29Db250YWluZXIuYXBwZW5kQ2hpbGQobG9nbylcclxuXHJcbiAgICAgICAgbGV0IGlucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXHJcbiAgICAgICAgaW5wdXRDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAgIHJlbmRlclF1ZXJpZWRDaXR5KClcclxuICAgICAgICB9KVxyXG4gICAgICAgIGlucHV0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2lucHV0LWNvbnRhaW5lci1ob21lJylcclxuICAgICAgICBsZXQgaW5wdXRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcbiAgICAgICAgaW5wdXRCb3guY2xhc3NMaXN0LmFkZCgnaW5wdXQtaG9tZScpXHJcblxyXG4gICAgICAgIGlucHV0Qm94LnBsYWNlaG9sZGVyID0gJ0NpdHkuLi4nXHJcbiAgICAgICAgbGV0IGlucHV0U3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxyXG5cclxuXHJcbiAgICAgICAgbGV0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICAgICAgc2VhcmNoQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdC1ob21lJylcclxuICAgICAgICBzZWFyY2hCdXR0b24uc3JjID0gJy4vc3ZnL21hZ25pZnkuc3ZnJ1xyXG4gICAgICAgIHNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbmRlclF1ZXJpZWRDaXR5KVxyXG5cclxuICAgICAgICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dEJveClcclxuICAgICAgICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dFNwYW4pXHJcbiAgICAgICAgaW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VhcmNoQnV0dG9uKVxyXG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChsb2dvQ29udGFpbmVyKVxyXG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChpbnB1dENvbnRhaW5lcilcclxuXHJcbiAgICAgICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpXHJcbiAgICAgICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkc0NvbnRhaW5lcilcclxuXHJcbiAgICAgICAgY2xlYXIoKVxyXG5cclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1haW5Db250YWluZXIpXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGxldCBlcnJvclByb21pc2UgPSBhd2FpdCBlcnJvclxyXG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlICovY29uc29sZS5sb2coLi4ub29fb28oYGM0OGZmMV8wYCxlcnJvcikpXHJcbiAgICAgICAgcmVuZGVyRXJyb3IoZXJyb3JQcm9taXNlLm1lc3NhZ2UuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBlcnJvclByb21pc2UubWVzc2FnZS5zbGljZSgxKSlcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZW5kZXJRdWVyaWVkQ2l0eShjaXR5PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykudmFsdWUpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgbGV0IGZvcmVjYXN0ID0gYXdhaXQgcXVlcnlGb3JlY2FzdChjaXR5KVxyXG4gICAgICAgIGxldCB0aW1lem9uZSA9IGZvcmVjYXN0LmNpdHkudGltZXpvbmU7XHJcbiAgICAgICAgbGV0IGFyckZvcmVjYXN0ID0gZm9yZWNhc3QubGlzdDtcclxuICAgICAgICBsZXQgcmV0cmlldmVkRGF0YSA9IGF3YWl0IHF1ZXJ5Q2xpbWF0ZShjaXR5KVxyXG5cclxuICAgICAgICByZW5kZXJMb2FkZXIoJ1JldHJpZXZpbmcgRGF0YS4uLicpXHJcblxyXG4gICAgICAgIGxldCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG4gICAgICAgIG1haW5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWFpbi1jb250YWluZXItaG9tZScpO1xyXG5cclxuICAgICAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XHJcbiAgICAgICAgbGV0IGxvZ29Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIGxvZ29Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnbG9nby1kZWZhdWx0JylcclxuICAgICAgICBsZXQgbG9nb0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG4gICAgICAgIGxvZ29JY29uLnNyYyA9ICcuL2hlYWQtaWNvbi5naWYnXHJcbiAgICAgICAgbGV0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXHJcbiAgICAgICAgbG9nby5jbGFzc0xpc3QuYWRkKCdsb2dvLXRleHQtZGVmYXVsdCcpXHJcbiAgICAgICAgbG9nby50ZXh0Q29udGVudCA9ICdXwrdlwrdhwrd0wrdowrdlwrdyJ1xyXG4gICAgICAgIGxvZ28uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgbG9nb0NvbnRhaW5lci5hcHBlbmRDaGlsZChsb2dvSWNvbilcclxuICAgICAgICBsb2dvQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvZ28pXHJcblxyXG4gICAgICAgIGxldCBpbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxyXG4gICAgICAgIGlucHV0Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICByZW5kZXJRdWVyaWVkQ2l0eSgpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBpbnB1dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpbnB1dC1jb250YWluZXItaG9tZScpXHJcbiAgICAgICAgbGV0IGlucHV0Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG4gICAgICAgIGlucHV0Qm94LmNsYXNzTGlzdC5hZGQoJ2lucHV0LWhvbWUnKVxyXG4gICAgICAgIGlucHV0Qm94LnBsYWNlaG9sZGVyID0gJ0NpdHkuLi4nXHJcbiAgICAgICAgbGV0IGlucHV0U3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxyXG5cclxuXHJcbiAgICAgICAgbGV0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICAgICAgc2VhcmNoQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdC1ob21lJylcclxuICAgICAgICBzZWFyY2hCdXR0b24uc3JjID0gJy4vc3ZnL21hZ25pZnkuc3ZnJ1xyXG4gICAgICAgIHNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbmRlclF1ZXJpZWRDaXR5KVxyXG5cclxuICAgICAgICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dEJveClcclxuICAgICAgICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dFNwYW4pXHJcbiAgICAgICAgaW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VhcmNoQnV0dG9uKVxyXG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChsb2dvQ29udGFpbmVyKVxyXG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChpbnB1dENvbnRhaW5lcilcclxuXHJcbiAgICAgICAgbGV0IHF1ZXJpZWRNYWluQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBxdWVyaWVkTWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtYWluLWNvbnRhaW5lci1xdWVyaWVkJylcclxuXHJcbiAgICAgICAgLy8gdG9wIGhlYWRlclxyXG4gICAgICAgIGxldCBxdWVyaWVkSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBxdWVyaWVkSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3N1Yi1oZWFkZXItcXVlcmllZCcpXHJcblxyXG4gICAgICAgIGxldCBjaXR5TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgY2l0eU5hbWUuY2xhc3NMaXN0LmFkZCgnY2l0eS1uYW1lLXF1ZXJpZWQnKVxyXG4gICAgICAgIGNpdHlOYW1lLnRleHRDb250ZW50ID0gcmV0cmlldmVkRGF0YS5uYW1lXHJcbiAgICAgICAgbGV0IGNpdHlDb3VudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXHJcbiAgICAgICAgY2l0eUNvdW50cnkuY2xhc3NMaXN0LmFkZCgnY2l0eS1jb3VudHJ5LXF1ZXJpZWQnKVxyXG4gICAgICAgIGNpdHlDb3VudHJ5LnRleHRDb250ZW50ID0gcmV0cmlldmVkRGF0YS5zeXMuY291bnRyeVxyXG4gICAgICAgIGNpdHlOYW1lLmFwcGVuZENoaWxkKGNpdHlDb3VudHJ5KVxyXG5cclxuICAgICAgICBsZXQgY2l0eVRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIGNpdHlUZW1wLmNsYXNzTGlzdC5hZGQoJ2NpdHktdGVtcC1xdWVyaWVkJylcclxuICAgICAgICBjaXR5VGVtcC50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQocmV0cmlldmVkRGF0YS5tYWluLnRlbXAgLSAyNzUpfcKwYFxyXG4gICAgICAgIGxldCB3ZWF0aGVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICAgICAgd2VhdGhlckljb24uc3JjID0gYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7cmV0cmlldmVkRGF0YS53ZWF0aGVyWzBdLmljb259QDJ4LnBuZ2BcclxuICAgICAgICBjaXR5VGVtcC5hcHBlbmRDaGlsZCh3ZWF0aGVySWNvbilcclxuXHJcbiAgICAgICAgbGV0IGNpdHlXZWF0aGVyRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIGNpdHlXZWF0aGVyRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnY2l0eS13ZWF0aGVyLXF1ZXJpZWQnKVxyXG4gICAgICAgIGNpdHlXZWF0aGVyRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSByZXRyaWV2ZWREYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb24uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyByZXRyaWV2ZWREYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb24uc2xpY2UoMSlcclxuXHJcbiAgICAgICAgcXVlcmllZEhlYWRlci5hcHBlbmRDaGlsZChjaXR5TmFtZSlcclxuICAgICAgICBxdWVyaWVkSGVhZGVyLmFwcGVuZENoaWxkKGNpdHlUZW1wKVxyXG4gICAgICAgIHF1ZXJpZWRIZWFkZXIuYXBwZW5kQ2hpbGQoY2l0eVdlYXRoZXJEZXNjcmlwdGlvbilcclxuXHJcbiAgICAgICAgLy8gbWlkZGxlIGNvbnRhaW5lclxyXG4gICAgICAgIGxldCBxdWVyaWVkQWRkaXRpb25hbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgcXVlcmllZEFkZGl0aW9uYWxDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWlkZGxlLWNvbnRhaW5lci1xdWVyaWVkJylcclxuXHJcbiAgICAgICAgbGV0IGNpdHlIdW1pZGl0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgY2l0eUh1bWlkaXR5LmNsYXNzTGlzdC5hZGQoJ2NpdHktaHVtaWRpdHktY29udGFpbmVyLXF1ZXJpZWQnKVxyXG4gICAgICAgIGxldCBjaXR5SHVtaWRpdHlJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuICAgICAgICBjaXR5SHVtaWRpdHlJY29uLmNsYXNzTGlzdC5hZGQoJ2NpdHktaHVtaWRpdHktaWNvbi1xdWVyaWVkJylcclxuICAgICAgICBjaXR5SHVtaWRpdHlJY29uLnNyYyA9ICcuL3N2Zy9kcm9wLnBuZydcclxuICAgICAgICBsZXQgY2l0eUh1bWlkaXR5TWFpblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIGNpdHlIdW1pZGl0eU1haW5UZXh0LmNsYXNzTGlzdC5hZGQoJ2NpdHktaHVtaWRpdHktbWFpblRleHQtcXVlcmllZCcpXHJcbiAgICAgICAgY2l0eUh1bWlkaXR5TWFpblRleHQudGV4dENvbnRlbnQgPSAnSHVtaWRpdHknXHJcbiAgICAgICAgbGV0IGNpdHlIdW1pZGl0eVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIGNpdHlIdW1pZGl0eVRleHQuY2xhc3NMaXN0LmFkZCgnY2l0eS1odW1pZGl0eS10ZXh0LXF1ZXJpZWQnKVxyXG4gICAgICAgIGNpdHlIdW1pZGl0eVRleHQudGV4dENvbnRlbnQgPSBgJHtyZXRyaWV2ZWREYXRhLm1haW4uaHVtaWRpdHl9JWBcclxuICAgICAgICBjaXR5SHVtaWRpdHkuYXBwZW5kQ2hpbGQoY2l0eUh1bWlkaXR5SWNvbilcclxuICAgICAgICBjaXR5SHVtaWRpdHkuYXBwZW5kQ2hpbGQoY2l0eUh1bWlkaXR5TWFpblRleHQpXHJcbiAgICAgICAgY2l0eUh1bWlkaXR5LmFwcGVuZENoaWxkKGNpdHlIdW1pZGl0eVRleHQpXHJcblxyXG4gICAgICAgIGxldCBjaXR5Q2xvdWRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBjaXR5Q2xvdWRzLmNsYXNzTGlzdC5hZGQoJ2NpdHktY2xvdWRzLWNvbnRhaW5lci1xdWVyaWVkJylcclxuICAgICAgICBsZXQgY2l0eUNsb3Vkc0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG4gICAgICAgIGNpdHlDbG91ZHNJY29uLmNsYXNzTGlzdC5hZGQoJ2NpdHktY2xvdWRzLWljb24tcXVlcmllZCcpXHJcbiAgICAgICAgY2l0eUNsb3Vkc0ljb24uc3JjID0gJy4vc3ZnL2Nsb3VkLnBuZydcclxuICAgICAgICBsZXQgY2l0eUNsb3Vkc01haW5UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBjaXR5Q2xvdWRzTWFpblRleHQuY2xhc3NMaXN0LmFkZCgnY2l0eS1jbG91ZHMtbWFpblRleHQtcXVlcmllZCcpXHJcbiAgICAgICAgY2l0eUNsb3Vkc01haW5UZXh0LnRleHRDb250ZW50ID0gJ0Nsb3VkcydcclxuICAgICAgICBsZXQgY2l0eUNsb3Vkc1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIGNpdHlDbG91ZHNUZXh0LmNsYXNzTGlzdC5hZGQoJ2NpdHktY2xvdWRzLXRleHQtcXVlcmllZCcpXHJcbiAgICAgICAgY2l0eUNsb3Vkc1RleHQudGV4dENvbnRlbnQgPSBgJHtyZXRyaWV2ZWREYXRhLmNsb3Vkcy5hbGx9JWBcclxuICAgICAgICBjaXR5Q2xvdWRzLmFwcGVuZENoaWxkKGNpdHlDbG91ZHNJY29uKVxyXG4gICAgICAgIGNpdHlDbG91ZHMuYXBwZW5kQ2hpbGQoY2l0eUNsb3Vkc01haW5UZXh0KVxyXG4gICAgICAgIGNpdHlDbG91ZHMuYXBwZW5kQ2hpbGQoY2l0eUNsb3Vkc1RleHQpXHJcblxyXG4gICAgICAgIGxldCBjaXR5VmlzaWJpbGl0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgY2l0eVZpc2liaWxpdHkuY2xhc3NMaXN0LmFkZCgnY2l0eS12aXNpYmlsaXR5LWNvbnRhaW5lci1xdWVyaWVkJylcclxuICAgICAgICBsZXQgY2l0eVZpc2liaWxpdHlJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuICAgICAgICBjaXR5VmlzaWJpbGl0eUljb24uY2xhc3NMaXN0LmFkZCgnY2l0eS12aXNpYmlsaXR5LWljb24tcXVlcmllZCcpXHJcbiAgICAgICAgY2l0eVZpc2liaWxpdHlJY29uLnNyYyA9ICcuL3N2Zy92aXNpYmlsaXR5LnBuZydcclxuICAgICAgICBsZXQgY2l0eVZpc2liaWxpdHlNYWluVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgY2l0eVZpc2liaWxpdHlNYWluVGV4dC5jbGFzc0xpc3QuYWRkKCdjaXR5LXZpc2liaWxpdHktbWFpblRleHQtcXVlcmllZCcpXHJcbiAgICAgICAgY2l0eVZpc2liaWxpdHlNYWluVGV4dC50ZXh0Q29udGVudCA9ICdWaXNpYmlsaXR5J1xyXG4gICAgICAgIGxldCBjaXR5VmlzaWJpbGl0eVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIGNpdHlWaXNpYmlsaXR5VGV4dC5jbGFzc0xpc3QuYWRkKCdjaXR5LXZpc2liaWxpdHktdGV4dC1xdWVyaWVkJylcclxuICAgICAgICBjaXR5VmlzaWJpbGl0eVRleHQudGV4dENvbnRlbnQgPSBgJHsocmV0cmlldmVkRGF0YS52aXNpYmlsaXR5IC8gMTAwMCkudG9GaXhlZCgyKX0ga21gXHJcbiAgICAgICAgY2l0eVZpc2liaWxpdHkuYXBwZW5kQ2hpbGQoY2l0eVZpc2liaWxpdHlJY29uKVxyXG4gICAgICAgIGNpdHlWaXNpYmlsaXR5LmFwcGVuZENoaWxkKGNpdHlWaXNpYmlsaXR5TWFpblRleHQpXHJcbiAgICAgICAgY2l0eVZpc2liaWxpdHkuYXBwZW5kQ2hpbGQoY2l0eVZpc2liaWxpdHlUZXh0KVxyXG5cclxuICAgICAgICBxdWVyaWVkQWRkaXRpb25hbENvbnRhaW5lci5hcHBlbmRDaGlsZChjaXR5SHVtaWRpdHkpXHJcbiAgICAgICAgcXVlcmllZEFkZGl0aW9uYWxDb250YWluZXIuYXBwZW5kQ2hpbGQoY2l0eUNsb3VkcylcclxuICAgICAgICBxdWVyaWVkQWRkaXRpb25hbENvbnRhaW5lci5hcHBlbmRDaGlsZChjaXR5VmlzaWJpbGl0eSlcclxuXHJcbiAgICAgICAgLy8gaG91cmx5IGNvbnRhaW5lclxyXG4gICAgICAgIGxldCBxdWVyaWVkSG91cmx5Rm9yZWNhc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIHF1ZXJpZWRIb3VybHlGb3JlY2FzdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdob3VybHktZm9yZWNhc3QtY29udGFpbmVyLXF1ZXJpZWQnKVxyXG4gICAgICAgIGxldCBxdWVyaWVkSG91cmx5Rm9yZWNhc3RTdWJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIHF1ZXJpZWRIb3VybHlGb3JlY2FzdFN1YkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdob3VybHktc3ViLWNvbnRhaW5lci1xdWVyaWVkJylcclxuXHJcbiAgICAgICAgbGV0IGN1cnJlbnRGb3JlY2FzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgY3VycmVudEZvcmVjYXN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hvdXJseS1mb3JlY2FzdC1pdGVtLXF1ZXJpZWQnKVxyXG4gICAgICAgIGxldCBob3VybHlGb3JlY2FzdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgaG91cmx5Rm9yZWNhc3RIZWFkZXIuY2xhc3NMaXN0LmFkZCgnaG91cmx5LWhlYWRlci1xdWVyaWVkJylcclxuICAgICAgICBob3VybHlGb3JlY2FzdEhlYWRlci50ZXh0Q29udGVudCA9ICdOb3cnXHJcbiAgICAgICAgbGV0IGhvdXJseUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG4gICAgICAgIGhvdXJseUljb24uc3JjID0gYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7cmV0cmlldmVkRGF0YS53ZWF0aGVyWzBdLmljb259QDJ4LnBuZ2BcclxuICAgICAgICBsZXQgaG91cmx5VGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgaG91cmx5VGVtcC5jbGFzc0xpc3QuYWRkKCdob3VybHktdGVtcC1xdWVyaWVkJylcclxuICAgICAgICBob3VybHlUZW1wLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChyZXRyaWV2ZWREYXRhLm1haW4udGVtcCAtIDI3NSl9wrBgXHJcblxyXG4gICAgICAgIGN1cnJlbnRGb3JlY2FzdENvbnRhaW5lci5hcHBlbmRDaGlsZChob3VybHlGb3JlY2FzdEhlYWRlcilcclxuICAgICAgICBjdXJyZW50Rm9yZWNhc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoaG91cmx5SWNvbilcclxuICAgICAgICBjdXJyZW50Rm9yZWNhc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoaG91cmx5VGVtcClcclxuICAgICAgICBxdWVyaWVkSG91cmx5Rm9yZWNhc3RTdWJDb250YWluZXIuYXBwZW5kQ2hpbGQoY3VycmVudEZvcmVjYXN0Q29udGFpbmVyKVxyXG5cclxuXHJcbiAgICAgICAgYXJyRm9yZWNhc3QuZm9yRWFjaCgoY3VycmVudEZvcmVjYXN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50Rm9yZWNhc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgICAgICBjdXJyZW50Rm9yZWNhc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaG91cmx5LWZvcmVjYXN0LWl0ZW0tcXVlcmllZCcpXHJcbiAgICAgICAgICAgIGxldCBob3VybHlGb3JlY2FzdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgICAgIGhvdXJseUZvcmVjYXN0SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hvdXJseS1oZWFkZXItcXVlcmllZCcpXHJcbiAgICAgICAgICAgIGhvdXJseUZvcmVjYXN0SGVhZGVyLnRleHRDb250ZW50ID0gZm9ybWF0KGFkZChuZXcgRGF0ZShjdXJyZW50Rm9yZWNhc3QuZHRfdHh0KSwgeyBzZWNvbmRzOiB0aW1lem9uZSB9KSwgJ3AnKVxyXG4gICAgICAgICAgICBsZXQgaG91cmx5SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICAgICAgICAgIGhvdXJseUljb24uc3JjID0gYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7Y3VycmVudEZvcmVjYXN0LndlYXRoZXJbMF0uaWNvbn1AMngucG5nYFxyXG4gICAgICAgICAgICBsZXQgaG91cmx5VGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgICAgIGhvdXJseVRlbXAuY2xhc3NMaXN0LmFkZCgnaG91cmx5LXRlbXAtcXVlcmllZCcpXHJcbiAgICAgICAgICAgIGhvdXJseVRlbXAudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKGN1cnJlbnRGb3JlY2FzdC5tYWluLnRlbXAgLSAyNzUpfcKwYFxyXG5cclxuICAgICAgICAgICAgY3VycmVudEZvcmVjYXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGhvdXJseUZvcmVjYXN0SGVhZGVyKVxyXG4gICAgICAgICAgICBjdXJyZW50Rm9yZWNhc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoaG91cmx5SWNvbilcclxuICAgICAgICAgICAgY3VycmVudEZvcmVjYXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGhvdXJseVRlbXApXHJcblxyXG4gICAgICAgICAgICBxdWVyaWVkSG91cmx5Rm9yZWNhc3RTdWJDb250YWluZXIuYXBwZW5kQ2hpbGQoY3VycmVudEZvcmVjYXN0Q29udGFpbmVyKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGxldCBob3VybHlIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIGhvdXJseUhlYWRlci5jbGFzc0xpc3QuYWRkKCdob3VybHktaGVhZGVyLW1haW4tcXVlcmllZCcpXHJcbiAgICAgICAgaG91cmx5SGVhZGVyLnRleHRDb250ZW50ID0gJ0hPVVJMWSBGT1JFQ0FTVCdcclxuXHJcbiAgICAgICAgcXVlcmllZEhvdXJseUZvcmVjYXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGhvdXJseUhlYWRlcilcclxuICAgICAgICBxdWVyaWVkSG91cmx5Rm9yZWNhc3RDb250YWluZXIuYXBwZW5kQ2hpbGQocXVlcmllZEhvdXJseUZvcmVjYXN0U3ViQ29udGFpbmVyKVxyXG5cclxuICAgICAgICAvLyBsYXN0IGNvbnRhaW5lclxyXG4gICAgICAgIGxldCBxdWVyaWVkRGFpbHlGb3JlY2FzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgcXVlcmllZERhaWx5Rm9yZWNhc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZGFpbHktZm9yZWNhc3QtY29udGFpbmVyLXF1ZXJpZWQnKVxyXG4gICAgICAgIGxldCBxdWVyaWVkRGFpbHlGb3JlY2FzdFN1YkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgcXVlcmllZERhaWx5Rm9yZWNhc3RTdWJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZGFpbHktc3ViLWNvbnRhaW5lci1xdWVyaWVkJylcclxuICAgICAgICAvL3NvcnRpbmcgYW5kIGZvcm1hdHRpbmcgZGF0YVxyXG4gICAgICAgIGFyckZvcmVjYXN0ID0gYXJyRm9yZWNhc3QubWFwKChjcnIpID0+IHtcclxuICAgICAgICAgICAgbGV0IGZvcm1hdHRlZERhdGUgPSBmb3JtYXQoYWRkKG5ldyBEYXRlKGNyci5kdF90eHQpLCB7IHNlY29uZHM6IHRpbWV6b25lIH0pLCAnRUVFRScpXHJcbiAgICAgICAgICAgIGxldCBtYWluID0gY3JyLm1haW4udGVtcFxyXG4gICAgICAgICAgICBsZXQgaWNvbiA9IGNyci53ZWF0aGVyWzBdLmljb25cclxuICAgICAgICAgICAgcmV0dXJuIHsgZm9ybWF0dGVkRGF0ZSwgbWFpbiwgaWNvbiB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgbGV0IG5ld09iakZvcmVjYXN0ID0ge31cclxuICAgICAgICBhcnJGb3JlY2FzdC5mb3JFYWNoKChjcnIpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFuZXdPYmpGb3JlY2FzdFtjcnIuZm9ybWF0dGVkRGF0ZV0pIHtcclxuICAgICAgICAgICAgICAgIG5ld09iakZvcmVjYXN0W2Nyci5mb3JtYXR0ZWREYXRlXSA9XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4X3RlbXA6IGNyci5tYWluLFxyXG4gICAgICAgICAgICAgICAgICAgIG1pbl90ZW1wOiBjcnIubWFpbixcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiB7IFtjcnIuaWNvbl06IDEgfSxcclxuICAgICAgICAgICAgICAgICAgICBmaW5hbEljb24gOiBjcnIuaWNvblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFuZXdPYmpGb3JlY2FzdFtjcnIuZm9ybWF0dGVkRGF0ZV0uaWNvbltjcnIuaWNvbl0pIHtcclxuICAgICAgICAgICAgICAgIG5ld09iakZvcmVjYXN0W2Nyci5mb3JtYXR0ZWREYXRlXS5pY29uW2Nyci5pY29uXSA9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBuZXdPYmpGb3JlY2FzdFtjcnIuZm9ybWF0dGVkRGF0ZV0uaWNvbltjcnIuaWNvbl0rKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgbWF4TnVtID0gMDtcclxuICAgICAgICAgICAgZm9yKGNvbnN0IGtleXMgaW4gbmV3T2JqRm9yZWNhc3RbY3JyLmZvcm1hdHRlZERhdGVdLmljb24pe1xyXG4gICAgICAgICAgICAgICAgaWYobmV3T2JqRm9yZWNhc3RbY3JyLmZvcm1hdHRlZERhdGVdLmljb25ba2V5c10gPiBtYXhOdW0pe1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld09iakZvcmVjYXN0W2Nyci5mb3JtYXR0ZWREYXRlXS5maW5hbEljb24gPSBrZXlzO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heE51bSA9IG5ld09iakZvcmVjYXN0W2Nyci5mb3JtYXR0ZWREYXRlXS5pY29uW2tleXNdXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbmV3T2JqRm9yZWNhc3RbY3JyLmZvcm1hdHRlZERhdGVdLm1heF90ZW1wID0gTWF0aC5tYXgobmV3T2JqRm9yZWNhc3RbY3JyLmZvcm1hdHRlZERhdGVdLm1heF90ZW1wLCBjcnIubWFpbilcclxuICAgICAgICAgICAgbmV3T2JqRm9yZWNhc3RbY3JyLmZvcm1hdHRlZERhdGVdLm1pbl90ZW1wID0gTWF0aC5taW4obmV3T2JqRm9yZWNhc3RbY3JyLmZvcm1hdHRlZERhdGVdLm1pbl90ZW1wLCBjcnIubWFpbilcclxuXHJcbiAgICAgICAgfSlcclxuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSAqL2NvbnNvbGUubG9nKC4uLm9vX29vKGBjNDhmZjFfMWAsbmV3T2JqRm9yZWNhc3QpKVxyXG4gICAgICAgIGZvciAoY29uc3Qga2V5cyBpbiBuZXdPYmpGb3JlY2FzdCkge1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudEZvcmVjYXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICAgICAgY3VycmVudEZvcmVjYXN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2RhaWx5LWZvcmVjYXN0LWl0ZW0tcXVlcmllZCcpXHJcbiAgICAgICAgICAgIGxldCBkYWlseUZvcmVjYXN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICAgICAgZGFpbHlGb3JlY2FzdEhlYWRlci5jbGFzc0xpc3QuYWRkKCdkYWlseS1oZWFkZXItcXVlcmllZCcpXHJcbiAgICAgICAgICAgIGRhaWx5Rm9yZWNhc3RIZWFkZXIudGV4dENvbnRlbnQgPSBrZXlzXHJcbiAgICAgICAgICAgIGxldCBkYWlseUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG4gICAgICAgICAgICBkYWlseUljb24uc3JjID0gYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7bmV3T2JqRm9yZWNhc3Rba2V5c10uZmluYWxJY29ufUAyeC5wbmdgXHJcbiAgICAgICAgICAgIGxldCB0ZW1wc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgICAgIHRlbXBzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RlbXBzLWNvbnRhaW5lci1xdWVyaWVkJylcclxuXHJcbiAgICAgICAgICAgIGxldCBkYWlseU1heFRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgICAgICBkYWlseU1heFRlbXAuY2xhc3NMaXN0LmFkZCgnZGFpbHktbWF4LXRlbXAtcXVlcmllZCcpXHJcbiAgICAgICAgICAgIGRhaWx5TWF4VGVtcC50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQobmV3T2JqRm9yZWNhc3Rba2V5c10ubWF4X3RlbXAgLSAyNzUpfcKwYFxyXG4gICAgICAgICAgICBsZXQgZGFpbHlNaW5UZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICAgICAgZGFpbHlNaW5UZW1wLmNsYXNzTGlzdC5hZGQoJ2RhaWx5LW1pbi10ZW1wLXF1ZXJpZWQnKVxyXG4gICAgICAgICAgICBkYWlseU1pblRlbXAudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKG5ld09iakZvcmVjYXN0W2tleXNdLm1pbl90ZW1wIC0gMjc1KX3CsGBcclxuXHJcbiAgICAgICAgICAgIHRlbXBzQ29udGFpbmVyLmFwcGVuZENoaWxkKGRhaWx5TWF4VGVtcClcclxuICAgICAgICAgICAgdGVtcHNDb250YWluZXIuYXBwZW5kQ2hpbGQoZGFpbHlNaW5UZW1wKVxyXG4gICAgICAgICAgICBjdXJyZW50Rm9yZWNhc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZGFpbHlGb3JlY2FzdEhlYWRlcilcclxuICAgICAgICAgICAgY3VycmVudEZvcmVjYXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRhaWx5SWNvbilcclxuICAgICAgICAgICAgY3VycmVudEZvcmVjYXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRlbXBzQ29udGFpbmVyKVxyXG5cclxuICAgICAgICAgICAgcXVlcmllZERhaWx5Rm9yZWNhc3RTdWJDb250YWluZXIuYXBwZW5kQ2hpbGQoY3VycmVudEZvcmVjYXN0Q29udGFpbmVyKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGRhaWx5SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBkYWlseUhlYWRlci5jbGFzc0xpc3QuYWRkKCdkYWlseS1oZWFkZXItbWFpbi1xdWVyaWVkJylcclxuICAgICAgICBkYWlseUhlYWRlci50ZXh0Q29udGVudCA9ICdEQUlMWSBGT1JFQ0FTVCdcclxuXHJcbiAgICAgICAgcXVlcmllZERhaWx5Rm9yZWNhc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZGFpbHlIZWFkZXIpXHJcbiAgICAgICAgcXVlcmllZERhaWx5Rm9yZWNhc3RDb250YWluZXIuYXBwZW5kQ2hpbGQocXVlcmllZERhaWx5Rm9yZWNhc3RTdWJDb250YWluZXIpXHJcblxyXG4gICAgICAgIHF1ZXJpZWRNYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHF1ZXJpZWRIZWFkZXIpXHJcbiAgICAgICAgcXVlcmllZE1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQocXVlcmllZEFkZGl0aW9uYWxDb250YWluZXIpXHJcbiAgICAgICAgcXVlcmllZE1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQocXVlcmllZEhvdXJseUZvcmVjYXN0Q29udGFpbmVyKVxyXG4gICAgICAgIHF1ZXJpZWRNYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHF1ZXJpZWREYWlseUZvcmVjYXN0Q29udGFpbmVyKVxyXG5cclxuICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcilcclxuICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHF1ZXJpZWRNYWluQ29udGFpbmVyKVxyXG5cclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNsZWFyKClcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYWluQ29udGFpbmVyKVxyXG4gICAgICAgICAgICBsZXQgdG9kYXlIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGFpbHktaGVhZGVyLXF1ZXJpZWQnKVxyXG4gICAgICAgICAgICB0b2RheUhlYWRlci50ZXh0Q29udGVudCA9ICdUb2RheSdcclxuICAgICAgICB9LCA1MDApXHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSAqL2NvbnNvbGUubG9nKC4uLm9vX29vKGBjNDhmZjFfMmAsZXJyb3IpKVxyXG4gICAgICAgIHJlbmRlckVycm9yKGVycm9yLm1lc3NhZ2UuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBlcnJvci5tZXNzYWdlLnNsaWNlKDEpKVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhcigpIHtcclxuICAgIHdoaWxlIChkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZClcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyRXJyb3IodGV4dCkge1xyXG4gICAgY2xlYXIoKVxyXG4gICAgbGV0IGVycm9yU2NyZWVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGVycm9yU2NyZWVuLmNsYXNzTGlzdC5hZGQoJ2Vycm9yLXNjcmVlbicpXHJcblxyXG4gICAgbGV0IGVycm9ySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBlcnJvckljb24uY2xhc3NMaXN0LmFkZCgnZXJyb3ItaWNvbicpXHJcblxyXG4gICAgbGV0IGVycm9yVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcclxuICAgIGVycm9yVGV4dC50ZXh0Q29udGVudCA9IHRleHRcclxuXHJcbiAgICBlcnJvclNjcmVlbi5hcHBlbmRDaGlsZChlcnJvckljb24pXHJcbiAgICBlcnJvclNjcmVlbi5hcHBlbmRDaGlsZChlcnJvclRleHQpXHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVycm9yU2NyZWVuKVxyXG5cclxuICAgIHNldFRpbWVvdXQocmVuZGVySG9tZVBhZ2UsIDMwMDApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckxvYWRlcih0ZXh0KSB7XHJcbiAgICBjbGVhcigpXHJcbiAgICBsZXQgbG9hZGluZ1NjcmVlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBsb2FkaW5nU2NyZWVuLmNsYXNzTGlzdC5hZGQoJ2xvYWRpbmctc2NyZWVuJylcclxuXHJcbiAgICBsZXQgbG9hZGVyU3Bpbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBsb2FkZXJTcGlubmVyLmNsYXNzTGlzdC5hZGQoJ2xvYWRlcicpXHJcbiAgICBsb2FkZXJTcGlubmVyLnRleHRDb250ZW50ID0gJ0xvYWRpbmcuLi4nXHJcblxyXG4gICAgbGV0IGxvYWRpbmdUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxyXG4gICAgbG9hZGluZ1RleHQudGV4dENvbnRlbnQgPSB0ZXh0XHJcblxyXG4gICAgbG9hZGluZ1NjcmVlbi5hcHBlbmRDaGlsZChsb2FkZXJTcGlubmVyKVxyXG4gICAgbG9hZGluZ1NjcmVlbi5hcHBlbmRDaGlsZChsb2FkaW5nVGV4dClcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobG9hZGluZ1NjcmVlbilcclxufVxuLyogZXNsaW50LWRpc2FibGUgKi87ZnVuY3Rpb24gb29fY20oKXt0cnl7cmV0dXJuICgwLGV2YWwpKFwiZ2xvYmFsVGhpcy5fY29uc29sZV9uaW5qYVwiKSB8fCAoMCxldmFsKShcIi8qIGh0dHBzOi8vZ2l0aHViLmNvbS93YWxsYWJ5anMvY29uc29sZS1uaW5qYSNob3ctZG9lcy1pdC13b3JrICovJ3VzZSBzdHJpY3QnO3ZhciBfMHgzYmQyY2Q9XzB4NTc5YjsoZnVuY3Rpb24oXzB4MzNhY2M4LF8weDYyNmUzYyl7dmFyIF8weDUwNzlmNz1fMHg1NzliLF8weDQ1NTI3Nz1fMHgzM2FjYzgoKTt3aGlsZSghIVtdKXt0cnl7dmFyIF8weDI0ZjJkND0tcGFyc2VJbnQoXzB4NTA3OWY3KDB4MWUwKSkvMHgxKy1wYXJzZUludChfMHg1MDc5ZjcoMHgxNDgpKS8weDIqKC1wYXJzZUludChfMHg1MDc5ZjcoMHgxYjYpKS8weDMpK3BhcnNlSW50KF8weDUwNzlmNygweDFiZSkpLzB4NCstcGFyc2VJbnQoXzB4NTA3OWY3KDB4MWFlKSkvMHg1KigtcGFyc2VJbnQoXzB4NTA3OWY3KDB4MTIzKSkvMHg2KSstcGFyc2VJbnQoXzB4NTA3OWY3KDB4MTgwKSkvMHg3KigtcGFyc2VJbnQoXzB4NTA3OWY3KDB4MTQzKSkvMHg4KStwYXJzZUludChfMHg1MDc5ZjcoMHgxMzApKS8weDkrLXBhcnNlSW50KF8weDUwNzlmNygweDE5NCkpLzB4YTtpZihfMHgyNGYyZDQ9PT1fMHg2MjZlM2MpYnJlYWs7ZWxzZSBfMHg0NTUyNzdbJ3B1c2gnXShfMHg0NTUyNzdbJ3NoaWZ0J10oKSk7fWNhdGNoKF8weDI0ZWUwOSl7XzB4NDU1Mjc3WydwdXNoJ10oXzB4NDU1Mjc3WydzaGlmdCddKCkpO319fShfMHgzZDRkLDB4NTI2OWIpKTtmdW5jdGlvbiBfMHg1NzliKF8weDFhYjU2YyxfMHg1M2NiOGUpe3ZhciBfMHgzZDRkNGI9XzB4M2Q0ZCgpO3JldHVybiBfMHg1NzliPWZ1bmN0aW9uKF8weDU3OWI5NixfMHgxMjQ2MzApe18weDU3OWI5Nj1fMHg1NzliOTYtMHgxMDY7dmFyIF8weDQ4YWVkYj1fMHgzZDRkNGJbXzB4NTc5Yjk2XTtyZXR1cm4gXzB4NDhhZWRiO30sXzB4NTc5YihfMHgxYWI1NmMsXzB4NTNjYjhlKTt9dmFyIHVlPU9iamVjdFtfMHgzYmQyY2QoMHgxODUpXSx0ZT1PYmplY3RbJ2RlZmluZVByb3BlcnR5J10saGU9T2JqZWN0W18weDNiZDJjZCgweDFiMildLGxlPU9iamVjdFtfMHgzYmQyY2QoMHgxODcpXSxmZT1PYmplY3RbXzB4M2JkMmNkKDB4MWNmKV0sX2U9T2JqZWN0W18weDNiZDJjZCgweDE4MyldW18weDNiZDJjZCgweDFiZildLHBlPShfMHgzMzg2YTIsXzB4MzM2ODczLF8weDQxNzllMCxfMHgzMDllODEpPT57dmFyIF8weDFjZDdiYj1fMHgzYmQyY2Q7aWYoXzB4MzM2ODczJiZ0eXBlb2YgXzB4MzM2ODczPT1fMHgxY2Q3YmIoMHgxNDUpfHx0eXBlb2YgXzB4MzM2ODczPT1fMHgxY2Q3YmIoMHgxYTUpKXtmb3IobGV0IF8weDI5YzEyMSBvZiBsZShfMHgzMzY4NzMpKSFfZVtfMHgxY2Q3YmIoMHgxOTEpXShfMHgzMzg2YTIsXzB4MjljMTIxKSYmXzB4MjljMTIxIT09XzB4NDE3OWUwJiZ0ZShfMHgzMzg2YTIsXzB4MjljMTIxLHsnZ2V0JzooKT0+XzB4MzM2ODczW18weDI5YzEyMV0sJ2VudW1lcmFibGUnOiEoXzB4MzA5ZTgxPWhlKF8weDMzNjg3MyxfMHgyOWMxMjEpKXx8XzB4MzA5ZTgxW18weDFjZDdiYigweDFlOSldfSk7fXJldHVybiBfMHgzMzg2YTI7fSxuZT0oXzB4MTFhMGJkLF8weDE2ZTc4OCxfMHg0ZTdmZGIpPT4oXzB4NGU3ZmRiPV8weDExYTBiZCE9bnVsbD91ZShmZShfMHgxMWEwYmQpKTp7fSxwZShfMHgxNmU3ODh8fCFfMHgxMWEwYmR8fCFfMHgxMWEwYmRbXzB4M2JkMmNkKDB4MTEyKV0/dGUoXzB4NGU3ZmRiLF8weDNiZDJjZCgweDFjMCkseyd2YWx1ZSc6XzB4MTFhMGJkLCdlbnVtZXJhYmxlJzohMHgwfSk6XzB4NGU3ZmRiLF8weDExYTBiZCkpLFE9Y2xhc3N7Y29uc3RydWN0b3IoXzB4MWIxMDc0LF8weDc3MmYxZCxfMHgxODcxMTksXzB4MzkzOWMwKXt2YXIgXzB4MjU3MjM3PV8weDNiZDJjZDt0aGlzW18weDI1NzIzNygweDExZSldPV8weDFiMTA3NCx0aGlzW18weDI1NzIzNygweDE5ZSldPV8weDc3MmYxZCx0aGlzW18weDI1NzIzNygweDE2MyldPV8weDE4NzExOSx0aGlzW18weDI1NzIzNygweDEzYildPV8weDM5MzljMCx0aGlzW18weDI1NzIzNygweDEyOCldPSEweDAsdGhpc1tfMHgyNTcyMzcoMHgxYzkpXT0hMHgwLHRoaXNbXzB4MjU3MjM3KDB4MTVhKV09ITB4MSx0aGlzWydfY29ubmVjdGluZyddPSEweDEsdGhpc1snX2luQnJvd3NlciddPSEhdGhpc1tfMHgyNTcyMzcoMHgxMWUpXVtfMHgyNTcyMzcoMHgxNTgpXSx0aGlzW18weDI1NzIzNygweDE3NCldPW51bGwsdGhpc1tfMHgyNTcyMzcoMHgxOGYpXT0weDAsdGhpc1tfMHgyNTcyMzcoMHgxZDApXT0weDE0LHRoaXNbJ19zZW5kRXJyb3JNZXNzYWdlJ109dGhpc1tfMHgyNTcyMzcoMHgxNmEpXT9fMHgyNTcyMzcoMHgxMDgpOidDb25zb2xlXFxcXHgyME5pbmphXFxcXHgyMGZhaWxlZFxcXFx4MjB0b1xcXFx4MjBzZW5kXFxcXHgyMGxvZ3MsXFxcXHgyMHJlc3RhcnRpbmdcXFxceDIwdGhlXFxcXHgyMHByb2Nlc3NcXFxceDIwbWF5XFxcXHgyMGhlbHAnO31hc3luY1snZ2V0V2ViU29ja2V0Q2xhc3MnXSgpe3ZhciBfMHgyODlmMDQ9XzB4M2JkMmNkO2lmKHRoaXNbXzB4Mjg5ZjA0KDB4MTc0KV0pcmV0dXJuIHRoaXNbXzB4Mjg5ZjA0KDB4MTc0KV07bGV0IF8weDExNjI3ZDtpZih0aGlzWydfaW5Ccm93c2VyJ10pXzB4MTE2MjdkPXRoaXNbXzB4Mjg5ZjA0KDB4MTFlKV1bJ1dlYlNvY2tldCddO2Vsc2V7aWYodGhpc1tfMHgyODlmMDQoMHgxMWUpXVtfMHgyODlmMDQoMHgxN2UpXT8uW18weDI4OWYwNCgweDFhOSldKV8weDExNjI3ZD10aGlzW18weDI4OWYwNCgweDExZSldW18weDI4OWYwNCgweDE3ZSldPy5bXzB4Mjg5ZjA0KDB4MWE5KV07ZWxzZSB0cnl7bGV0IF8weGZlZWM3MT1hd2FpdCBpbXBvcnQoXzB4Mjg5ZjA0KDB4MTg0KSk7XzB4MTE2MjdkPShhd2FpdCBpbXBvcnQoKGF3YWl0IGltcG9ydChfMHgyODlmMDQoMHgxMGYpKSlbXzB4Mjg5ZjA0KDB4MTQyKV0oXzB4ZmVlYzcxW18weDI4OWYwNCgweDEwYSldKHRoaXNbXzB4Mjg5ZjA0KDB4MTNiKV0sXzB4Mjg5ZjA0KDB4MTJlKSkpW18weDI4OWYwNCgweDExYildKCkpKVtfMHgyODlmMDQoMHgxYzApXTt9Y2F0Y2h7dHJ5e18weDExNjI3ZD1yZXF1aXJlKHJlcXVpcmUoXzB4Mjg5ZjA0KDB4MTg0KSlbJ2pvaW4nXSh0aGlzW18weDI4OWYwNCgweDEzYildLCd3cycpKTt9Y2F0Y2h7dGhyb3cgbmV3IEVycm9yKF8weDI4OWYwNCgweDE2MCkpO319fXJldHVybiB0aGlzW18weDI4OWYwNCgweDE3NCldPV8weDExNjI3ZCxfMHgxMTYyN2Q7fVtfMHgzYmQyY2QoMHgxMTYpXSgpe3ZhciBfMHhjY2FkYTI9XzB4M2JkMmNkO3RoaXNbXzB4Y2NhZGEyKDB4MTUwKV18fHRoaXNbXzB4Y2NhZGEyKDB4MTVhKV18fHRoaXNbJ19jb25uZWN0QXR0ZW1wdENvdW50J10+PXRoaXNbJ19tYXhDb25uZWN0QXR0ZW1wdENvdW50J118fCh0aGlzW18weGNjYWRhMigweDFjOSldPSEweDEsdGhpc1snX2Nvbm5lY3RpbmcnXT0hMHgwLHRoaXNbJ19jb25uZWN0QXR0ZW1wdENvdW50J10rKyx0aGlzW18weGNjYWRhMigweDFiMyldPW5ldyBQcm9taXNlKChfMHg0MGU2MDksXzB4NTJkODRiKT0+e3ZhciBfMHgyYTU2NjU9XzB4Y2NhZGEyO3RoaXNbXzB4MmE1NjY1KDB4MWQ5KV0oKVtfMHgyYTU2NjUoMHgxMjcpXShfMHgyMDY2ZGQ9Pnt2YXIgXzB4MjRlZjI2PV8weDJhNTY2NTtsZXQgXzB4ZDc4OTY5PW5ldyBfMHgyMDY2ZGQoJ3dzOi8vJyt0aGlzWydob3N0J10rJzonK3RoaXNbXzB4MjRlZjI2KDB4MTYzKV0pO18weGQ3ODk2OVtfMHgyNGVmMjYoMHgxODIpXT0oKT0+e3ZhciBfMHg0ZjBiMzA9XzB4MjRlZjI2O3RoaXNbXzB4NGYwYjMwKDB4MTI4KV09ITB4MSx0aGlzW18weDRmMGIzMCgweDE1NildKF8weGQ3ODk2OSksdGhpc1tfMHg0ZjBiMzAoMHgxZTUpXSgpLF8weDUyZDg0YihuZXcgRXJyb3IoXzB4NGYwYjMwKDB4MWJkKSkpO30sXzB4ZDc4OTY5Wydvbm9wZW4nXT0oKT0+e3ZhciBfMHgyZDMzNTA9XzB4MjRlZjI2O3RoaXNbJ19pbkJyb3dzZXInXXx8XzB4ZDc4OTY5Wydfc29ja2V0J10mJl8weGQ3ODk2OVtfMHgyZDMzNTAoMHgxODgpXVtfMHgyZDMzNTAoMHgxYjEpXSYmXzB4ZDc4OTY5Wydfc29ja2V0J11bJ3VucmVmJ10oKSxfMHg0MGU2MDkoXzB4ZDc4OTY5KTt9LF8weGQ3ODk2OVtfMHgyNGVmMjYoMHgxZGMpXT0oKT0+e3ZhciBfMHgyNzAxMzQ9XzB4MjRlZjI2O3RoaXNbJ19hbGxvd2VkVG9Db25uZWN0T25TZW5kJ109ITB4MCx0aGlzWydfZGlzcG9zZVdlYnNvY2tldCddKF8weGQ3ODk2OSksdGhpc1tfMHgyNzAxMzQoMHgxZTUpXSgpO30sXzB4ZDc4OTY5Wydvbm1lc3NhZ2UnXT1fMHgxNWI2YWY9Pnt2YXIgXzB4NDZjMzNhPV8weDI0ZWYyNjt0cnl7XzB4MTViNmFmJiZfMHgxNWI2YWZbXzB4NDZjMzNhKDB4MTI2KV0mJnRoaXNbXzB4NDZjMzNhKDB4MTZhKV0mJkpTT05bXzB4NDZjMzNhKDB4MTdkKV0oXzB4MTViNmFmW18weDQ2YzMzYSgweDEyNildKVtfMHg0NmMzM2EoMHgxNjYpXT09PV8weDQ2YzMzYSgweDE5MikmJnRoaXNbXzB4NDZjMzNhKDB4MTFlKV1bXzB4NDZjMzNhKDB4MTc5KV1bXzB4NDZjMzNhKDB4MTkyKV0oKTt9Y2F0Y2h7fX07fSlbJ3RoZW4nXShfMHgzY2I1OGY9Pih0aGlzWydfY29ubmVjdGVkJ109ITB4MCx0aGlzW18weDJhNTY2NSgweDE1MCldPSEweDEsdGhpc1snX2FsbG93ZWRUb0Nvbm5lY3RPblNlbmQnXT0hMHgxLHRoaXNbXzB4MmE1NjY1KDB4MTI4KV09ITB4MCx0aGlzW18weDJhNTY2NSgweDE4ZildPTB4MCxfMHgzY2I1OGYpKVsnY2F0Y2gnXShfMHg1ZjEwMjU9Pih0aGlzW18weDJhNTY2NSgweDE1YSldPSEweDEsdGhpc1tfMHgyYTU2NjUoMHgxNTApXT0hMHgxLF8weDUyZDg0YihuZXcgRXJyb3IoXzB4MmE1NjY1KDB4MWNjKSsoXzB4NWYxMDI1JiZfMHg1ZjEwMjVbXzB4MmE1NjY1KDB4MTc4KV0pKSkpKTt9KSk7fVtfMHgzYmQyY2QoMHgxNTYpXShfMHgxNDEzMGUpe3ZhciBfMHgzMzEyZGU9XzB4M2JkMmNkO3RoaXNbXzB4MzMxMmRlKDB4MTVhKV09ITB4MSx0aGlzW18weDMzMTJkZSgweDE1MCldPSEweDE7dHJ5e18weDE0MTMwZVtfMHgzMzEyZGUoMHgxZGMpXT1udWxsLF8weDE0MTMwZVtfMHgzMzEyZGUoMHgxODIpXT1udWxsLF8weDE0MTMwZVtfMHgzMzEyZGUoMHgxMTgpXT1udWxsO31jYXRjaHt9dHJ5e18weDE0MTMwZVtfMHgzMzEyZGUoMHgxYmMpXTwweDImJl8weDE0MTMwZVtfMHgzMzEyZGUoMHgxOTUpXSgpO31jYXRjaHt9fVtfMHgzYmQyY2QoMHgxZTUpXSgpe3ZhciBfMHgyNWViNmU9XzB4M2JkMmNkO2NsZWFyVGltZW91dCh0aGlzW18weDI1ZWI2ZSgweDEwYyldKSwhKHRoaXNbXzB4MjVlYjZlKDB4MThmKV0+PXRoaXNbJ19tYXhDb25uZWN0QXR0ZW1wdENvdW50J10pJiYodGhpc1tfMHgyNWViNmUoMHgxMGMpXT1zZXRUaW1lb3V0KCgpPT57dmFyIF8weDQwNjgwNj1fMHgyNWViNmU7dGhpc1tfMHg0MDY4MDYoMHgxNWEpXXx8dGhpc1tfMHg0MDY4MDYoMHgxNTApXXx8KHRoaXNbJ19jb25uZWN0VG9Ib3N0Tm93J10oKSx0aGlzW18weDQwNjgwNigweDFiMyldPy5bJ2NhdGNoJ10oKCk9PnRoaXNbXzB4NDA2ODA2KDB4MWU1KV0oKSkpO30sMHgxZjQpLHRoaXNbXzB4MjVlYjZlKDB4MTBjKV1bXzB4MjVlYjZlKDB4MWIxKV0mJnRoaXNbXzB4MjVlYjZlKDB4MTBjKV1bXzB4MjVlYjZlKDB4MWIxKV0oKSk7fWFzeW5jWydzZW5kJ10oXzB4MTQwZmRhKXt2YXIgXzB4MzY3MGZkPV8weDNiZDJjZDt0cnl7aWYoIXRoaXNbXzB4MzY3MGZkKDB4MTI4KV0pcmV0dXJuO3RoaXNbXzB4MzY3MGZkKDB4MWM5KV0mJnRoaXNbXzB4MzY3MGZkKDB4MTE2KV0oKSwoYXdhaXQgdGhpc1tfMHgzNjcwZmQoMHgxYjMpXSlbXzB4MzY3MGZkKDB4MWM1KV0oSlNPTlsnc3RyaW5naWZ5J10oXzB4MTQwZmRhKSk7fWNhdGNoKF8weDIwYzRlMil7Y29uc29sZVsnd2FybiddKHRoaXNbJ19zZW5kRXJyb3JNZXNzYWdlJ10rJzpcXFxceDIwJysoXzB4MjBjNGUyJiZfMHgyMGM0ZTJbJ21lc3NhZ2UnXSkpLHRoaXNbXzB4MzY3MGZkKDB4MTI4KV09ITB4MSx0aGlzWydfYXR0ZW1wdFRvUmVjb25uZWN0U2hvcnRseSddKCk7fX19O2Z1bmN0aW9uIFYoXzB4M2RkYjFkLF8weDRjNGNiNixfMHgxYzg0NDMsXzB4MjQ5NzM1LF8weDNkNGE2Yil7dmFyIF8weDQwOTcyZT1fMHgzYmQyY2Q7bGV0IF8weDMzOTMyYT1fMHgxYzg0NDNbXzB4NDA5NzJlKDB4MTlmKV0oJywnKVtfMHg0MDk3MmUoMHgxYTMpXShfMHgzZWI2NTg9Pnt2YXIgXzB4Y2FmMTM1PV8weDQwOTcyZTt0cnl7XzB4M2RkYjFkW18weGNhZjEzNSgweDE1NCldfHwoKF8weDNkNGE2Yj09PV8weGNhZjEzNSgweDE0Nil8fF8weDNkNGE2Yj09PV8weGNhZjEzNSgweDE4NikpJiYoXzB4M2Q0YTZiKz1fMHgzZGRiMWRbJ3Byb2Nlc3MnXT8uW18weGNhZjEzNSgweDEyMCldPy5bXzB4Y2FmMTM1KDB4MWE0KV0/XzB4Y2FmMTM1KDB4MWI3KTpfMHhjYWYxMzUoMHgxZTgpKSxfMHgzZGRiMWRbXzB4Y2FmMTM1KDB4MTU0KV09eydpZCc6K25ldyBEYXRlKCksJ3Rvb2wnOl8weDNkNGE2Yn0pO2xldCBfMHg1NDUzNWY9bmV3IFEoXzB4M2RkYjFkLF8weDRjNGNiNixfMHgzZWI2NTgsXzB4MjQ5NzM1KTtyZXR1cm4gXzB4NTQ1MzVmW18weGNhZjEzNSgweDFjNSldW18weGNhZjEzNSgweDE1YildKF8weDU0NTM1Zik7fWNhdGNoKF8weDE3OGQwMSl7cmV0dXJuIGNvbnNvbGVbXzB4Y2FmMTM1KDB4MTkwKV0oXzB4Y2FmMTM1KDB4MWFmKSxfMHgxNzhkMDEmJl8weDE3OGQwMVtfMHhjYWYxMzUoMHgxNzgpXSksKCk9Pnt9O319KTtyZXR1cm4gXzB4YWQxMDk2PT5fMHgzMzkzMmFbXzB4NDA5NzJlKDB4MWM4KV0oXzB4MWY1NmY1PT5fMHgxZjU2ZjUoXzB4YWQxMDk2KSk7fWZ1bmN0aW9uIF8weDNkNGQoKXt2YXIgXzB4NTQ2NGFiPVsnX3RyZWVOb2RlUHJvcGVydGllc0FmdGVyRnVsbFZhbHVlJywnX29iamVjdFRvU3RyaW5nJywnZXhwcmVzc2lvbnNUb0V2YWx1YXRlJywnSFRNTEFsbENvbGxlY3Rpb24nLCdbb2JqZWN0XFxcXHgyMFNldF0nLCdfY29ubmVjdGluZycsJ1BPU0lUSVZFX0lORklOSVRZJywnZWxlbWVudHMnLCdjb25jYXQnLCdfY29uc29sZV9uaW5qYV9zZXNzaW9uJywnZGVwdGgnLCdfZGlzcG9zZVdlYnNvY2tldCcsJ19zZXROb2RlTGFiZWwnLCdXZWJTb2NrZXQnLCcuLi4nLCdfY29ubmVjdGVkJywnYmluZCcsJ3N5bWJvbCcsJ1tvYmplY3RcXFxceDIwTWFwXScsJ25hbicsJ3Rlc3QnLCdmYWlsZWRcXFxceDIwdG9cXFxceDIwZmluZFxcXFx4MjBhbmRcXFxceDIwbG9hZFxcXFx4MjBXZWJTb2NrZXQnLCdzdGFjaycsJ3B1c2gnLCdwb3J0Jywnc3RyTGVuZ3RoJywnX2FkZFByb3BlcnR5JywnbWV0aG9kJywnX2NvbnNvbGVOaW5qYUFsbG93ZWRUb1N0YXJ0JywnRXJyb3InLCdhdXRvRXhwYW5kJywnX2luQnJvd3NlcicsJ01hcCcsJ3Byb3BzJywnX3NvcnRQcm9wcycsJ2xvZycsJ2F1dG9FeHBhbmRQcmV2aW91c09iamVjdHMnLCdwZXJmb3JtYW5jZScsJ3N0cmluZ2lmeScsJ19wcm9jZXNzVHJlZU5vZGVSZXN1bHQnLCdudW1iZXInLCdfV2ViU29ja2V0Q2xhc3MnLCdocnRpbWUnLCdjYXBwZWQnLCdhdXRvRXhwYW5kTGltaXQnLCdtZXNzYWdlJywnbG9jYXRpb24nLCd0aW1lJywnY29uc3RydWN0b3InLCdfaGFzTWFwT25JdHNQYXRoJywncGFyc2UnLCdwcm9jZXNzJywnYWxsU3RyTGVuZ3RoJywnN2F3aElWTycsJ2NhcHBlZFByb3BzJywnb25lcnJvcicsJ3Byb3RvdHlwZScsJ3BhdGgnLCdjcmVhdGUnLCdyZW1peCcsJ2dldE93blByb3BlcnR5TmFtZXMnLCdfc29ja2V0JywnaW5kZXhPZicsJ0J1ZmZlcicsXFxcImM6XFxcXFxcXFxVc2Vyc1xcXFxcXFxcQWRldXNcXFxcXFxcXC52c2NvZGVcXFxcXFxcXGV4dGVuc2lvbnNcXFxcXFxcXHdhbGxhYnlqcy5jb25zb2xlLW5pbmphLTAuMC4xMDZcXFxcXFxcXG5vZGVfbW9kdWxlc1xcXCIsJ19wcm9wZXJ0eScsJ19TeW1ib2wnLCdnZXQnLCdfY29ubmVjdEF0dGVtcHRDb3VudCcsJ3dhcm4nLCdjYWxsJywncmVsb2FkJywnX2lzUHJpbWl0aXZlV3JhcHBlclR5cGUnLCc5MDI2MTkwRmhEb0d3JywnY2xvc2UnLCdfdHlwZScsJ3NldHRlcicsJ19jYXBJZlN0cmluZycsJ2VsYXBzZWQnLCd2YWx1ZScsJ1NldCcsJ25lZ2F0aXZlSW5maW5pdHknLCdzZXQnLCdob3N0Jywnc3BsaXQnLCcxLjAuMCcsJ19zZXROb2RlRXhwYW5kYWJsZVN0YXRlJywncGVyZl9ob29rcycsJ21hcCcsJ25vZGUnLCdmdW5jdGlvbicsJ19pc1NldCcsJ2FyZ3VtZW50UmVzb2x1dGlvbkVycm9yJywnX2lzTmVnYXRpdmVaZXJvJywnX1dlYlNvY2tldCcsJ19udW1iZXJSZWdFeHAnLCdbb2JqZWN0XFxcXHgyMEFycmF5XScsJ3ZhbHVlT2YnLCdyZWR1Y2VMaW1pdHMnLCc3NjM1MzV5TWdISWonLCdsb2dnZXJcXFxceDIwZmFpbGVkXFxcXHgyMHRvXFxcXHgyMGNvbm5lY3RcXFxceDIwdG9cXFxceDIwaG9zdCcsJ2dldHRlcicsJ3VucmVmJywnZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJywnX3dzJywnbmFtZScsJ3RvdGFsU3RyTGVuZ3RoJywnM3ppaEZqUycsJ1xcXFx4MjBzZXJ2ZXInLCdsZXZlbCcsJ3Jlc29sdmVHZXR0ZXJzJywnbnVsbCcsJ3Vua25vd24nLCdyZWFkeVN0YXRlJywnbG9nZ2VyXFxcXHgyMHdlYnNvY2tldFxcXFx4MjBlcnJvcicsJzc0ODY0NExVWkZzRScsJ2hhc093blByb3BlcnR5JywnZGVmYXVsdCcsW1xcXCJsb2NhbGhvc3RcXFwiLFxcXCIxMjcuMC4wLjFcXFwiLFxcXCJleGFtcGxlLmN5cHJlc3MuaW9cXFwiLFxcXCJERVNLVE9QLTY1UzhDTFVcXFwiLFxcXCIxOTIuMTY4LjU2LjFcXFwiLFxcXCIxOTIuMTY4LjAuNVxcXCJdLCdzbGljZScsJ19hZGRMb2FkTm9kZScsJ2xlbmd0aCcsJ3NlbmQnLCd0b0xvd2VyQ2FzZScsJ2NhcHBlZEVsZW1lbnRzJywnZm9yRWFjaCcsJ19hbGxvd2VkVG9Db25uZWN0T25TZW5kJywndHJhY2UnLCdfdW5kZWZpbmVkJywnZmFpbGVkXFxcXHgyMHRvXFxcXHgyMGNvbm5lY3RcXFxceDIwdG9cXFxceDIwaG9zdDpcXFxceDIwJywnU3RyaW5nJywnX2NsZWFuTm9kZScsJ2dldFByb3RvdHlwZU9mJywnX21heENvbm5lY3RBdHRlbXB0Q291bnQnLCdORUdBVElWRV9JTkZJTklUWScsJ19rZXlTdHJSZWdFeHAnLCdfcF8nLCdfc2V0Tm9kZVF1ZXJ5UGF0aCcsJ19wX2xlbmd0aCcsJ2V4cElkJywnX3BfbmFtZScsJ3VuZGVmaW5lZCcsJ2dldFdlYlNvY2tldENsYXNzJywnZnVuY05hbWUnLCdOdW1iZXInLCdvbmNsb3NlJywnX2NvbnNvbGVfbmluamEnLCdub3cnLCdwb3NpdGl2ZUluZmluaXR5JywnNDkxNjc0S3Vid0d4JywnX3NldE5vZGVQZXJtaXNzaW9ucycsJ1N5bWJvbCcsJ2hvc3RuYW1lJywnZ2V0T3duUHJvcGVydHlTeW1ib2xzJywnX2F0dGVtcHRUb1JlY29ubmVjdFNob3J0bHknLCd0aW1lRW5kJywnX3NldE5vZGVJZCcsJ1xcXFx4MjBicm93c2VyJywnZW51bWVyYWJsZScsJ3N1YnN0cicsJ3NlcmlhbGl6ZScsJ2Rpc2FibGVkTG9nJywnQ29uc29sZVxcXFx4MjBOaW5qYVxcXFx4MjBmYWlsZWRcXFxceDIwdG9cXFxceDIwc2VuZFxcXFx4MjBsb2dzLFxcXFx4MjByZWZyZXNoaW5nXFxcXHgyMHRoZVxcXFx4MjBwYWdlXFxcXHgyMG1heVxcXFx4MjBoZWxwJywnX3Byb3BlcnR5QWNjZXNzb3InLCdqb2luJywncm9vdF9leHAnLCdfcmVjb25uZWN0VGltZW91dCcsJ2Rpc2FibGVkVHJhY2UnLCdfSFRNTEFsbENvbGxlY3Rpb24nLCd1cmwnLCdSZWdFeHAnLCdib29sZWFuJywnX19lcycrJ01vZHVsZScsJ3NvcnRQcm9wcycsJ19oYXNTeW1ib2xQcm9wZXJ0eU9uSXRzUGF0aCcsJ19zZXROb2RlRXhwcmVzc2lvblBhdGgnLCdfY29ubmVjdFRvSG9zdE5vdycsJ190cmVlTm9kZVByb3BlcnRpZXNCZWZvcmVGdWxsVmFsdWUnLCdvbm9wZW4nLCdpbmNsdWRlcycsJ2lzRXhwcmVzc2lvblRvRXZhbHVhdGUnLCd0b1N0cmluZycsJ19nZXRPd25Qcm9wZXJ0eVN5bWJvbHMnLCdfYmxhY2tsaXN0ZWRQcm9wZXJ0eScsJ2dsb2JhbCcsJ19hZGRPYmplY3RQcm9wZXJ0eScsJ3ZlcnNpb25zJywnX2lzTWFwJywnYXJyYXknLCcxOFdKQWZFTCcsJ3N0cmluZycsJ19nZXRPd25Qcm9wZXJ0eU5hbWVzJywnZGF0YScsJ3RoZW4nLCdfYWxsb3dlZFRvU2VuZCcsJ21hdGNoJywndHlwZScsJ251eHQnLCdoaXRzJywnX2lzUHJpbWl0aXZlVHlwZScsJ3dzL2luZGV4LmpzJywnY291bnQnLCczMTgzODA0dHdwRG9BJywnNTQzNDInLCdbb2JqZWN0XFxcXHgyMERhdGVdJywnX3F1b3RlZFJlZ0V4cCcsJ2RhdGUnLCdwYXJlbnQnLCdpbmRleCcsJ25lZ2F0aXZlWmVybycsJ19hZGRGdW5jdGlvbnNOb2RlJywnYXV0b0V4cGFuZE1heERlcHRoJywnY29uc29sZScsJ25vZGVNb2R1bGVzJywnY3VycmVudCcsJ25vRnVuY3Rpb25zJywnYXV0b0V4cGFuZFByb3BlcnR5Q291bnQnLCdfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJywnJywncmVwbGFjZScsJ3BhdGhUb0ZpbGVVUkwnLCc1MjA1MjA4V2hxdGpLJywnd2VicGFjaycsJ29iamVjdCcsJ25leHQuanMnLCdfYWRkaXRpb25hbE1ldGFkYXRhJywnMTY0MzM0WG1qVVRPJywnc3RhY2tUcmFjZUxpbWl0JywnX2hhc1NldE9uSXRzUGF0aCddO18weDNkNGQ9ZnVuY3Rpb24oKXtyZXR1cm4gXzB4NTQ2NGFiO307cmV0dXJuIF8weDNkNGQoKTt9ZnVuY3Rpb24gSChfMHg1MTJjMTApe3ZhciBfMHg1NTUwOTU9XzB4M2JkMmNkO2xldCBfMHhhMGJiYjc9ZnVuY3Rpb24oXzB4NDBjOGU5LF8weDE1MDZmMSl7cmV0dXJuIF8weDE1MDZmMS1fMHg0MGM4ZTk7fSxfMHgzY2QxYTI7aWYoXzB4NTEyYzEwWydwZXJmb3JtYW5jZSddKV8weDNjZDFhMj1mdW5jdGlvbigpe3ZhciBfMHg0YmM1OGY9XzB4NTc5YjtyZXR1cm4gXzB4NTEyYzEwW18weDRiYzU4ZigweDE3MCldW18weDRiYzU4ZigweDFkZSldKCk7fTtlbHNle2lmKF8weDUxMmMxMFsncHJvY2VzcyddJiZfMHg1MTJjMTBbJ3Byb2Nlc3MnXVtfMHg1NTUwOTUoMHgxNzUpXSlfMHgzY2QxYTI9ZnVuY3Rpb24oKXt2YXIgXzB4MTZjMDQ3PV8weDU1NTA5NTtyZXR1cm4gXzB4NTEyYzEwW18weDE2YzA0NygweDE3ZSldW18weDE2YzA0NygweDE3NSldKCk7fSxfMHhhMGJiYjc9ZnVuY3Rpb24oXzB4MTY1YTNjLF8weDE3YzhiMCl7cmV0dXJuIDB4M2U4KihfMHgxN2M4YjBbMHgwXS1fMHgxNjVhM2NbMHgwXSkrKF8weDE3YzhiMFsweDFdLV8weDE2NWEzY1sweDFdKS8weGY0MjQwO307ZWxzZSB0cnl7bGV0IHtwZXJmb3JtYW5jZTpfMHg1NmFhOTF9PXJlcXVpcmUoXzB4NTU1MDk1KDB4MWEyKSk7XzB4M2NkMWEyPWZ1bmN0aW9uKCl7dmFyIF8weDMxYzI5ZD1fMHg1NTUwOTU7cmV0dXJuIF8weDU2YWE5MVtfMHgzMWMyOWQoMHgxZGUpXSgpO307fWNhdGNoe18weDNjZDFhMj1mdW5jdGlvbigpe3JldHVybituZXcgRGF0ZSgpO307fX1yZXR1cm57J2VsYXBzZWQnOl8weGEwYmJiNywndGltZVN0YW1wJzpfMHgzY2QxYTIsJ25vdyc6KCk9PkRhdGVbXzB4NTU1MDk1KDB4MWRlKV0oKX07fWZ1bmN0aW9uIFgoXzB4ZTk2YzMsXzB4MzA3Y2U4LF8weDkyZTA1MSl7dmFyIF8weDE2YWZjNT1fMHgzYmQyY2Q7aWYoXzB4ZTk2YzNbXzB4MTZhZmM1KDB4MTY3KV0hPT12b2lkIDB4MClyZXR1cm4gXzB4ZTk2YzNbXzB4MTZhZmM1KDB4MTY3KV07bGV0IF8weDVlZDg3OD1fMHhlOTZjM1sncHJvY2VzcyddPy5bJ3ZlcnNpb25zJ10/LltfMHgxNmFmYzUoMHgxYTQpXTtyZXR1cm4gXzB4NWVkODc4JiZfMHg5MmUwNTE9PT1fMHgxNmFmYzUoMHgxMmIpP18weGU5NmMzW18weDE2YWZjNSgweDE2NyldPSEweDE6XzB4ZTk2YzNbJ19jb25zb2xlTmluamFBbGxvd2VkVG9TdGFydCddPV8weDVlZDg3OHx8IV8weDMwN2NlOHx8XzB4ZTk2YzNbXzB4MTZhZmM1KDB4MTc5KV0/LltfMHgxNmFmYzUoMHgxZTMpXSYmXzB4MzA3Y2U4W18weDE2YWZjNSgweDExOSldKF8weGU5NmMzW18weDE2YWZjNSgweDE3OSldW18weDE2YWZjNSgweDFlMyldKSxfMHhlOTZjM1snX2NvbnNvbGVOaW5qYUFsbG93ZWRUb1N0YXJ0J107fSgoXzB4ZGJjMWMxLF8weDRmMjFlNixfMHg1Y2I1YTIsXzB4NTVmZTM0LF8weDQ0MDQyYyxfMHgzYThmNzYsXzB4MzEzMDgxLF8weDExMjE0LF8weDZlNTZiYik9Pnt2YXIgXzB4MjY3NWRlPV8weDNiZDJjZDtpZihfMHhkYmMxYzFbXzB4MjY3NWRlKDB4MWRkKV0pcmV0dXJuIF8weGRiYzFjMVtfMHgyNjc1ZGUoMHgxZGQpXTtpZighWChfMHhkYmMxYzEsXzB4MTEyMTQsXzB4NDQwNDJjKSlyZXR1cm4gXzB4ZGJjMWMxWydfY29uc29sZV9uaW5qYSddPXsnY29uc29sZUxvZyc6KCk9Pnt9LCdjb25zb2xlVHJhY2UnOigpPT57fSwnY29uc29sZVRpbWUnOigpPT57fSwnY29uc29sZVRpbWVFbmQnOigpPT57fSwnYXV0b0xvZyc6KCk9Pnt9LCdhdXRvVHJhY2UnOigpPT57fSwnYXV0b1RpbWUnOigpPT57fSwnYXV0b1RpbWVFbmQnOigpPT57fX0sXzB4ZGJjMWMxW18weDI2NzVkZSgweDFkZCldO2xldCBfMHgyMDBkZTA9eydwcm9wcyc6MHg2NCwnZWxlbWVudHMnOjB4NjQsJ3N0ckxlbmd0aCc6MHg0MDAqMHgzMiwndG90YWxTdHJMZW5ndGgnOjB4NDAwKjB4MzIsJ2F1dG9FeHBhbmRMaW1pdCc6MHgxMzg4LCdhdXRvRXhwYW5kTWF4RGVwdGgnOjB4YX0sXzB4MzQ4MjkzPXsncHJvcHMnOjB4NSwnZWxlbWVudHMnOjB4NSwnc3RyTGVuZ3RoJzoweDEwMCwndG90YWxTdHJMZW5ndGgnOjB4MTAwKjB4MywnYXV0b0V4cGFuZExpbWl0JzoweDFlLCdhdXRvRXhwYW5kTWF4RGVwdGgnOjB4Mn0sXzB4MjNlYjkxPUgoXzB4ZGJjMWMxKSxfMHg0NDQ1YTA9XzB4MjNlYjkxW18weDI2NzVkZSgweDE5OSldLF8weDE0NzM4Zj1fMHgyM2ViOTFbJ3RpbWVTdGFtcCddLF8weDNlZWU2YT1fMHgyM2ViOTFbXzB4MjY3NWRlKDB4MWRlKV0sXzB4NTQ0ZDFlPXsnaGl0cyc6e30sJ3RzJzp7fX0sXzB4YzZiNGNjPV8weGE5YTIwNj0+e18weDU0NGQxZVsndHMnXVtfMHhhOWEyMDZdPV8weDE0NzM4ZigpO30sXzB4NDA0NDJjPShfMHgxMjQxMWEsXzB4NTgyYjhkKT0+e3ZhciBfMHgzZTFlZWY9XzB4MjY3NWRlO2xldCBfMHg0YjU0OTg9XzB4NTQ0ZDFlWyd0cyddW18weDU4MmI4ZF07aWYoZGVsZXRlIF8weDU0NGQxZVsndHMnXVtfMHg1ODJiOGRdLF8weDRiNTQ5OCl7bGV0IF8weDI1ODMxZT1fMHg0NDQ1YTAoXzB4NGI1NDk4LF8weDE0NzM4ZigpKTtfMHg1NDQxZDMoXzB4M2JmMTlhKF8weDNlMWVlZigweDE3YSksXzB4MTI0MTFhLF8weDNlZWU2YSgpLF8weDQyNGJlMixbXzB4MjU4MzFlXSxfMHg1ODJiOGQpKTt9fSxfMHgxN2IzYzY9XzB4M2FhOWVkPT5fMHg1ZjQyODY9Pnt2YXIgXzB4MmM4YjI4PV8weDI2NzVkZTt0cnl7XzB4YzZiNGNjKF8weDVmNDI4NiksXzB4M2FhOWVkKF8weDVmNDI4Nik7fWZpbmFsbHl7XzB4ZGJjMWMxWydjb25zb2xlJ11bXzB4MmM4YjI4KDB4MTdhKV09XzB4M2FhOWVkO319LF8weDQ1ZWY1OT1fMHg1NTMxNWE9Pl8weDU5N2VmYz0+e3ZhciBfMHg0N2FhZjU9XzB4MjY3NWRlO3RyeXtsZXQgW18weDVmNTU5YyxfMHgxOWM1MDZdPV8weDU5N2VmY1snc3BsaXQnXSgnOmxvZ1BvaW50SWQ6Jyk7XzB4NDA0NDJjKF8weDE5YzUwNixfMHg1ZjU1OWMpLF8weDU1MzE1YShfMHg1ZjU1OWMpO31maW5hbGx5e18weGRiYzFjMVtfMHg0N2FhZjUoMHgxM2EpXVtfMHg0N2FhZjUoMHgxZTYpXT1fMHg1NTMxNWE7fX07XzB4ZGJjMWMxW18weDI2NzVkZSgweDFkZCldPXsnY29uc29sZUxvZyc6KF8weDU0ODUxNSxfMHgxM2FkZjEpPT57dmFyIF8weDQ0YWUyYj1fMHgyNjc1ZGU7XzB4ZGJjMWMxW18weDQ0YWUyYigweDEzYSldW18weDQ0YWUyYigweDE2ZSldW18weDQ0YWUyYigweDFiNCldIT09XzB4NDRhZTJiKDB4MTA3KSYmXzB4NTQ0MWQzKF8weDNiZjE5YShfMHg0NGFlMmIoMHgxNmUpLF8weDU0ODUxNSxfMHgzZWVlNmEoKSxfMHg0MjRiZTIsXzB4MTNhZGYxKSk7fSwnY29uc29sZVRyYWNlJzooXzB4YzQ3NTY5LF8weDIyMTBlMCk9Pnt2YXIgXzB4MzUwZmQ0PV8weDI2NzVkZTtfMHhkYmMxYzFbXzB4MzUwZmQ0KDB4MTNhKV1bXzB4MzUwZmQ0KDB4MTZlKV1bXzB4MzUwZmQ0KDB4MWI0KV0hPT1fMHgzNTBmZDQoMHgxMGQpJiZfMHg1NDQxZDMoXzB4M2JmMTlhKF8weDM1MGZkNCgweDFjYSksXzB4YzQ3NTY5LF8weDNlZWU2YSgpLF8weDQyNGJlMixfMHgyMjEwZTApKTt9LCdjb25zb2xlVGltZSc6KCk9Pnt2YXIgXzB4MjczNDdkPV8weDI2NzVkZTtfMHhkYmMxYzFbXzB4MjczNDdkKDB4MTNhKV1bXzB4MjczNDdkKDB4MTdhKV09XzB4MTdiM2M2KF8weGRiYzFjMVsnY29uc29sZSddWyd0aW1lJ10pO30sJ2NvbnNvbGVUaW1lRW5kJzooKT0+e3ZhciBfMHg3ZTU3Yjk9XzB4MjY3NWRlO18weGRiYzFjMVtfMHg3ZTU3YjkoMHgxM2EpXVtfMHg3ZTU3YjkoMHgxZTYpXT1fMHg0NWVmNTkoXzB4ZGJjMWMxW18weDdlNTdiOSgweDEzYSldW18weDdlNTdiOSgweDFlNildKTt9LCdhdXRvTG9nJzooXzB4Mjc2MTY0LF8weDNlMDcxYSk9PntfMHg1NDQxZDMoXzB4M2JmMTlhKCdsb2cnLF8weDNlMDcxYSxfMHgzZWVlNmEoKSxfMHg0MjRiZTIsW18weDI3NjE2NF0pKTt9LCdhdXRvVHJhY2UnOihfMHgxNzQyMzMsXzB4NWRjYjExKT0+e3ZhciBfMHgzMmYwN2U9XzB4MjY3NWRlO18weDU0NDFkMyhfMHgzYmYxOWEoXzB4MzJmMDdlKDB4MWNhKSxfMHg1ZGNiMTEsXzB4M2VlZTZhKCksXzB4NDI0YmUyLFtfMHgxNzQyMzNdKSk7fSwnYXV0b1RpbWUnOihfMHgxZWI0MGEsXzB4MzcyZWQ4LF8weGQ4OGM0Yyk9PntfMHhjNmI0Y2MoXzB4ZDg4YzRjKTt9LCdhdXRvVGltZUVuZCc6KF8weDRhM2ZjYyxfMHgxNzEwMmQsXzB4NDdkMjJjKT0+e18weDQwNDQyYyhfMHgxNzEwMmQsXzB4NDdkMjJjKTt9fTtsZXQgXzB4NTQ0MWQzPVYoXzB4ZGJjMWMxLF8weDRmMjFlNixfMHg1Y2I1YTIsXzB4NTVmZTM0LF8weDQ0MDQyYyksXzB4NDI0YmUyPV8weGRiYzFjMVtfMHgyNjc1ZGUoMHgxNTQpXTtjbGFzcyBfMHgyNWQxMzh7Y29uc3RydWN0b3IoKXt2YXIgXzB4MTI3ZmE5PV8weDI2NzVkZTt0aGlzW18weDEyN2ZhOSgweDFkMildPS9eKD8hKD86ZG98aWZ8aW58Zm9yfGxldHxuZXd8dHJ5fHZhcnxjYXNlfGVsc2V8ZW51bXxldmFsfGZhbHNlfG51bGx8dGhpc3x0cnVlfHZvaWR8d2l0aHxicmVha3xjYXRjaHxjbGFzc3xjb25zdHxzdXBlcnx0aHJvd3x3aGlsZXx5aWVsZHxkZWxldGV8ZXhwb3J0fGltcG9ydHxwdWJsaWN8cmV0dXJufHN0YXRpY3xzd2l0Y2h8dHlwZW9mfGRlZmF1bHR8ZXh0ZW5kc3xmaW5hbGx5fHBhY2thZ2V8cHJpdmF0ZXxjb250aW51ZXxkZWJ1Z2dlcnxmdW5jdGlvbnxhcmd1bWVudHN8aW50ZXJmYWNlfHByb3RlY3RlZHxpbXBsZW1lbnRzfGluc3RhbmNlb2YpJClbXyRhLXpBLVpcXFxceEEwLVxcXFx1RkZGRl1bXyRhLXpBLVowLTlcXFxceEEwLVxcXFx1RkZGRl0qJC8sdGhpc1tfMHgxMjdmYTkoMHgxYWEpXT0vXigwfFsxLTldWzAtOV0qKSQvLHRoaXNbXzB4MTI3ZmE5KDB4MTMzKV09LycoW15cXFxcXFxcXCddfFxcXFxcXFxcJykqJy8sdGhpc1tfMHgxMjdmYTkoMHgxY2IpXT1fMHhkYmMxYzFbJ3VuZGVmaW5lZCddLHRoaXNbJ19IVE1MQWxsQ29sbGVjdGlvbiddPV8weGRiYzFjMVtfMHgxMjdmYTkoMHgxNGUpXSx0aGlzW18weDEyN2ZhOSgweDEzZildPU9iamVjdFtfMHgxMjdmYTkoMHgxYjIpXSx0aGlzW18weDEyN2ZhOSgweDEyNSldPU9iamVjdFtfMHgxMjdmYTkoMHgxODcpXSx0aGlzW18weDEyN2ZhOSgweDE4ZCldPV8weGRiYzFjMVtfMHgxMjdmYTkoMHgxZTIpXSx0aGlzWydfcmVnRXhwVG9TdHJpbmcnXT1SZWdFeHBbXzB4MTI3ZmE5KDB4MTgzKV1bJ3RvU3RyaW5nJ10sdGhpc1snX2RhdGVUb1N0cmluZyddPURhdGVbXzB4MTI3ZmE5KDB4MTgzKV1bXzB4MTI3ZmE5KDB4MTFiKV07fVtfMHgyNjc1ZGUoMHgxMDYpXShfMHgyYjdhZWQsXzB4NTMwZDhiLF8weDM4ZmJjNCxfMHgzZWUwODQpe3ZhciBfMHg0YzFjZDQ9XzB4MjY3NWRlLF8weDU3NzhiZT10aGlzLF8weDM2NTM3YT1fMHgzOGZiYzRbXzB4NGMxY2Q0KDB4MTY5KV07ZnVuY3Rpb24gXzB4NWI3NTg3KF8weDEzZjRkYyxfMHhiYmM3N2QsXzB4NWE4MzUzKXt2YXIgXzB4M2ZkNDg2PV8weDRjMWNkNDtfMHhiYmM3N2RbXzB4M2ZkNDg2KDB4MTJhKV09XzB4M2ZkNDg2KDB4MWJiKSxfMHhiYmM3N2RbJ2Vycm9yJ109XzB4MTNmNGRjW18weDNmZDQ4NigweDE3OCldLF8weDIyZDM0ND1fMHg1YTgzNTNbXzB4M2ZkNDg2KDB4MWE0KV1bXzB4M2ZkNDg2KDB4MTNjKV0sXzB4NWE4MzUzW18weDNmZDQ4NigweDFhNCldW18weDNmZDQ4NigweDEzYyldPV8weGJiYzc3ZCxfMHg1Nzc4YmVbXzB4M2ZkNDg2KDB4MTE3KV0oXzB4YmJjNzdkLF8weDVhODM1Myk7fWlmKF8weDUzMGQ4YiYmXzB4NTMwZDhiW18weDRjMWNkNCgweDFhNyldKV8weDViNzU4NyhfMHg1MzBkOGIsXzB4MmI3YWVkLF8weDM4ZmJjNCk7ZWxzZSB0cnl7XzB4MzhmYmM0W18weDRjMWNkNCgweDFiOCldKyssXzB4MzhmYmM0W18weDRjMWNkNCgweDE2OSldJiZfMHgzOGZiYzRbJ2F1dG9FeHBhbmRQcmV2aW91c09iamVjdHMnXVtfMHg0YzFjZDQoMHgxNjIpXShfMHg1MzBkOGIpO3ZhciBfMHgyODBiZWMsXzB4NTI4NmQ3LF8weDVkM2JhMSxfMHg0MjY3YmIsXzB4Mjk1ZGJjPVtdLF8weDM5ZjI1NT1bXSxfMHg0NGYyYjIsXzB4M2Q0ZmVjPXRoaXNbXzB4NGMxY2Q0KDB4MTk2KV0oXzB4NTMwZDhiKSxfMHg0MjAzZjU9XzB4M2Q0ZmVjPT09XzB4NGMxY2Q0KDB4MTIyKSxfMHgzNjQ1NDY9ITB4MSxfMHg1YzM4YzU9XzB4M2Q0ZmVjPT09XzB4NGMxY2Q0KDB4MWE1KSxfMHg0MjYzNjI9dGhpc1snX2lzUHJpbWl0aXZlVHlwZSddKF8weDNkNGZlYyksXzB4M2NlYzZkPXRoaXNbXzB4NGMxY2Q0KDB4MTkzKV0oXzB4M2Q0ZmVjKSxfMHgyODA1MjY9XzB4NDI2MzYyfHxfMHgzY2VjNmQsXzB4MmEyYzRlPXt9LF8weDQyNzAwOT0weDAsXzB4NDQ2NDRmPSEweDEsXzB4MjJkMzQ0LF8weDNhOTI4Nj0vXigoWzEtOV17MX1bMC05XSopfDApJC87aWYoXzB4MzhmYmM0W18weDRjMWNkNCgweDE1NSldKXtpZihfMHg0MjAzZjUpe2lmKF8weDUyODZkNz1fMHg1MzBkOGJbXzB4NGMxY2Q0KDB4MWM0KV0sXzB4NTI4NmQ3Pl8weDM4ZmJjNFsnZWxlbWVudHMnXSl7Zm9yKF8weDVkM2JhMT0weDAsXzB4NDI2N2JiPV8weDM4ZmJjNFsnZWxlbWVudHMnXSxfMHgyODBiZWM9XzB4NWQzYmExO18weDI4MGJlYzxfMHg0MjY3YmI7XzB4MjgwYmVjKyspXzB4MzlmMjU1W18weDRjMWNkNCgweDE2MildKF8weDU3NzhiZVsnX2FkZFByb3BlcnR5J10oXzB4Mjk1ZGJjLF8weDUzMGQ4YixfMHgzZDRmZWMsXzB4MjgwYmVjLF8weDM4ZmJjNCkpO18weDJiN2FlZFtfMHg0YzFjZDQoMHgxYzcpXT0hMHgwO31lbHNle2ZvcihfMHg1ZDNiYTE9MHgwLF8weDQyNjdiYj1fMHg1Mjg2ZDcsXzB4MjgwYmVjPV8weDVkM2JhMTtfMHgyODBiZWM8XzB4NDI2N2JiO18weDI4MGJlYysrKV8weDM5ZjI1NVtfMHg0YzFjZDQoMHgxNjIpXShfMHg1Nzc4YmVbXzB4NGMxY2Q0KDB4MTY1KV0oXzB4Mjk1ZGJjLF8weDUzMGQ4YixfMHgzZDRmZWMsXzB4MjgwYmVjLF8weDM4ZmJjNCkpO31fMHgzOGZiYzRbJ2F1dG9FeHBhbmRQcm9wZXJ0eUNvdW50J10rPV8weDM5ZjI1NVtfMHg0YzFjZDQoMHgxYzQpXTt9aWYoIShfMHgzZDRmZWM9PT1fMHg0YzFjZDQoMHgxYmEpfHxfMHgzZDRmZWM9PT1fMHg0YzFjZDQoMHgxZDgpKSYmIV8weDQyNjM2MiYmXzB4M2Q0ZmVjIT09XzB4NGMxY2Q0KDB4MWNkKSYmXzB4M2Q0ZmVjIT09XzB4NGMxY2Q0KDB4MThhKSYmXzB4M2Q0ZmVjIT09J2JpZ2ludCcpe3ZhciBfMHgyNjQ1NjI9XzB4M2VlMDg0W18weDRjMWNkNCgweDE2YyldfHxfMHgzOGZiYzRbXzB4NGMxY2Q0KDB4MTZjKV07aWYodGhpc1tfMHg0YzFjZDQoMHgxYTYpXShfMHg1MzBkOGIpPyhfMHgyODBiZWM9MHgwLF8weDUzMGQ4YlsnZm9yRWFjaCddKGZ1bmN0aW9uKF8weDJkOWQzNCl7dmFyIF8weDM2Yzk2OD1fMHg0YzFjZDQ7aWYoXzB4NDI3MDA5KyssXzB4MzhmYmM0W18weDM2Yzk2OCgweDEzZSldKyssXzB4NDI3MDA5Pl8weDI2NDU2Mil7XzB4NDQ2NDRmPSEweDA7cmV0dXJuO31pZighXzB4MzhmYmM0W18weDM2Yzk2OCgweDExYSldJiZfMHgzOGZiYzRbXzB4MzZjOTY4KDB4MTY5KV0mJl8weDM4ZmJjNFtfMHgzNmM5NjgoMHgxM2UpXT5fMHgzOGZiYzRbXzB4MzZjOTY4KDB4MTc3KV0pe18weDQ0NjQ0Zj0hMHgwO3JldHVybjt9XzB4MzlmMjU1W18weDM2Yzk2OCgweDE2MildKF8weDU3NzhiZVtfMHgzNmM5NjgoMHgxNjUpXShfMHgyOTVkYmMsXzB4NTMwZDhiLCdTZXQnLF8weDI4MGJlYysrLF8weDM4ZmJjNCxmdW5jdGlvbihfMHg0NDk2ZWYpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBfMHg0NDk2ZWY7fTt9KF8weDJkOWQzNCkpKTt9KSk6dGhpc1tfMHg0YzFjZDQoMHgxMjEpXShfMHg1MzBkOGIpJiZfMHg1MzBkOGJbXzB4NGMxY2Q0KDB4MWM4KV0oZnVuY3Rpb24oXzB4MjFhMGMyLF8weDU3ZTNmMyl7dmFyIF8weDM4OTkzNz1fMHg0YzFjZDQ7aWYoXzB4NDI3MDA5KyssXzB4MzhmYmM0W18weDM4OTkzNygweDEzZSldKyssXzB4NDI3MDA5Pl8weDI2NDU2Mil7XzB4NDQ2NDRmPSEweDA7cmV0dXJuO31pZighXzB4MzhmYmM0W18weDM4OTkzNygweDExYSldJiZfMHgzOGZiYzRbXzB4Mzg5OTM3KDB4MTY5KV0mJl8weDM4ZmJjNFtfMHgzODk5MzcoMHgxM2UpXT5fMHgzOGZiYzRbXzB4Mzg5OTM3KDB4MTc3KV0pe18weDQ0NjQ0Zj0hMHgwO3JldHVybjt9dmFyIF8weDUwN2I0NT1fMHg1N2UzZjNbXzB4Mzg5OTM3KDB4MTFiKV0oKTtfMHg1MDdiNDVbJ2xlbmd0aCddPjB4NjQmJihfMHg1MDdiNDU9XzB4NTA3YjQ1W18weDM4OTkzNygweDFjMildKDB4MCwweDY0KStfMHgzODk5MzcoMHgxNTkpKSxfMHgzOWYyNTVbXzB4Mzg5OTM3KDB4MTYyKV0oXzB4NTc3OGJlWydfYWRkUHJvcGVydHknXShfMHgyOTVkYmMsXzB4NTMwZDhiLF8weDM4OTkzNygweDE2YiksXzB4NTA3YjQ1LF8weDM4ZmJjNCxmdW5jdGlvbihfMHgzMjdhOWIpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBfMHgzMjdhOWI7fTt9KF8weDIxYTBjMikpKTt9KSwhXzB4MzY0NTQ2KXt0cnl7Zm9yKF8weDQ0ZjJiMiBpbiBfMHg1MzBkOGIpaWYoIShfMHg0MjAzZjUmJl8weDNhOTI4NltfMHg0YzFjZDQoMHgxNWYpXShfMHg0NGYyYjIpKSYmIXRoaXNbXzB4NGMxY2Q0KDB4MTFkKV0oXzB4NTMwZDhiLF8weDQ0ZjJiMixfMHgzOGZiYzQpKXtpZihfMHg0MjcwMDkrKyxfMHgzOGZiYzRbXzB4NGMxY2Q0KDB4MTNlKV0rKyxfMHg0MjcwMDk+XzB4MjY0NTYyKXtfMHg0NDY0NGY9ITB4MDticmVhazt9aWYoIV8weDM4ZmJjNFtfMHg0YzFjZDQoMHgxMWEpXSYmXzB4MzhmYmM0W18weDRjMWNkNCgweDE2OSldJiZfMHgzOGZiYzRbXzB4NGMxY2Q0KDB4MTNlKV0+XzB4MzhmYmM0W18weDRjMWNkNCgweDE3NyldKXtfMHg0NDY0NGY9ITB4MDticmVhazt9XzB4MzlmMjU1W18weDRjMWNkNCgweDE2MildKF8weDU3NzhiZVtfMHg0YzFjZDQoMHgxMWYpXShfMHgyOTVkYmMsXzB4MmEyYzRlLF8weDUzMGQ4YixfMHgzZDRmZWMsXzB4NDRmMmIyLF8weDM4ZmJjNCkpO319Y2F0Y2h7fWlmKF8weDJhMmM0ZVtfMHg0YzFjZDQoMHgxZDUpXT0hMHgwLF8weDVjMzhjNSYmKF8weDJhMmM0ZVtfMHg0YzFjZDQoMHgxZDcpXT0hMHgwKSwhXzB4NDQ2NDRmKXt2YXIgXzB4NGZlZjlhPVtdW18weDRjMWNkNCgweDE1MyldKHRoaXNbXzB4NGMxY2Q0KDB4MTI1KV0oXzB4NTMwZDhiKSlbXzB4NGMxY2Q0KDB4MTUzKV0odGhpc1tfMHg0YzFjZDQoMHgxMWMpXShfMHg1MzBkOGIpKTtmb3IoXzB4MjgwYmVjPTB4MCxfMHg1Mjg2ZDc9XzB4NGZlZjlhWydsZW5ndGgnXTtfMHgyODBiZWM8XzB4NTI4NmQ3O18weDI4MGJlYysrKWlmKF8weDQ0ZjJiMj1fMHg0ZmVmOWFbXzB4MjgwYmVjXSwhKF8weDQyMDNmNSYmXzB4M2E5Mjg2W18weDRjMWNkNCgweDE1ZildKF8weDQ0ZjJiMltfMHg0YzFjZDQoMHgxMWIpXSgpKSkmJiF0aGlzWydfYmxhY2tsaXN0ZWRQcm9wZXJ0eSddKF8weDUzMGQ4YixfMHg0NGYyYjIsXzB4MzhmYmM0KSYmIV8weDJhMmM0ZVtfMHg0YzFjZDQoMHgxZDMpK18weDQ0ZjJiMltfMHg0YzFjZDQoMHgxMWIpXSgpXSl7aWYoXzB4NDI3MDA5KyssXzB4MzhmYmM0WydhdXRvRXhwYW5kUHJvcGVydHlDb3VudCddKyssXzB4NDI3MDA5Pl8weDI2NDU2Mil7XzB4NDQ2NDRmPSEweDA7YnJlYWs7fWlmKCFfMHgzOGZiYzRbXzB4NGMxY2Q0KDB4MTFhKV0mJl8weDM4ZmJjNFtfMHg0YzFjZDQoMHgxNjkpXSYmXzB4MzhmYmM0WydhdXRvRXhwYW5kUHJvcGVydHlDb3VudCddPl8weDM4ZmJjNFtfMHg0YzFjZDQoMHgxNzcpXSl7XzB4NDQ2NDRmPSEweDA7YnJlYWs7fV8weDM5ZjI1NVtfMHg0YzFjZDQoMHgxNjIpXShfMHg1Nzc4YmVbXzB4NGMxY2Q0KDB4MTFmKV0oXzB4Mjk1ZGJjLF8weDJhMmM0ZSxfMHg1MzBkOGIsXzB4M2Q0ZmVjLF8weDQ0ZjJiMixfMHgzOGZiYzQpKTt9fX19fWlmKF8weDJiN2FlZFtfMHg0YzFjZDQoMHgxMmEpXT1fMHgzZDRmZWMsXzB4MjgwNTI2PyhfMHgyYjdhZWRbXzB4NGMxY2Q0KDB4MTlhKV09XzB4NTMwZDhiW18weDRjMWNkNCgweDFhYyldKCksdGhpc1tfMHg0YzFjZDQoMHgxOTgpXShfMHgzZDRmZWMsXzB4MmI3YWVkLF8weDM4ZmJjNCxfMHgzZWUwODQpKTpfMHgzZDRmZWM9PT0nZGF0ZSc/XzB4MmI3YWVkW18weDRjMWNkNCgweDE5YSldPXRoaXNbJ19kYXRlVG9TdHJpbmcnXVtfMHg0YzFjZDQoMHgxOTEpXShfMHg1MzBkOGIpOl8weDNkNGZlYz09PV8weDRjMWNkNCgweDExMCk/XzB4MmI3YWVkWyd2YWx1ZSddPXRoaXNbJ19yZWdFeHBUb1N0cmluZyddW18weDRjMWNkNCgweDE5MSldKF8weDUzMGQ4Yik6XzB4M2Q0ZmVjPT09XzB4NGMxY2Q0KDB4MTVjKSYmdGhpc1snX1N5bWJvbCddP18weDJiN2FlZFsndmFsdWUnXT10aGlzW18weDRjMWNkNCgweDE4ZCldW18weDRjMWNkNCgweDE4MyldW18weDRjMWNkNCgweDExYildWydjYWxsJ10oXzB4NTMwZDhiKTohXzB4MzhmYmM0W18weDRjMWNkNCgweDE1NSldJiYhKF8weDNkNGZlYz09PV8weDRjMWNkNCgweDFiYSl8fF8weDNkNGZlYz09PV8weDRjMWNkNCgweDFkOCkpJiYoZGVsZXRlIF8weDJiN2FlZFtfMHg0YzFjZDQoMHgxOWEpXSxfMHgyYjdhZWRbJ2NhcHBlZCddPSEweDApLF8weDQ0NjQ0ZiYmKF8weDJiN2FlZFtfMHg0YzFjZDQoMHgxODEpXT0hMHgwKSxfMHgyMmQzNDQ9XzB4MzhmYmM0W18weDRjMWNkNCgweDFhNCldW18weDRjMWNkNCgweDEzYyldLF8weDM4ZmJjNFsnbm9kZSddW18weDRjMWNkNCgweDEzYyldPV8weDJiN2FlZCx0aGlzW18weDRjMWNkNCgweDExNyldKF8weDJiN2FlZCxfMHgzOGZiYzQpLF8weDM5ZjI1NVtfMHg0YzFjZDQoMHgxYzQpXSl7Zm9yKF8weDI4MGJlYz0weDAsXzB4NTI4NmQ3PV8weDM5ZjI1NVtfMHg0YzFjZDQoMHgxYzQpXTtfMHgyODBiZWM8XzB4NTI4NmQ3O18weDI4MGJlYysrKV8weDM5ZjI1NVtfMHgyODBiZWNdKF8weDI4MGJlYyk7fV8weDI5NWRiY1tfMHg0YzFjZDQoMHgxYzQpXSYmKF8weDJiN2FlZFsncHJvcHMnXT1fMHgyOTVkYmMpO31jYXRjaChfMHgyMWU3Njcpe18weDViNzU4NyhfMHgyMWU3NjcsXzB4MmI3YWVkLF8weDM4ZmJjNCk7fXJldHVybiB0aGlzW18weDRjMWNkNCgweDE0NyldKF8weDUzMGQ4YixfMHgyYjdhZWQpLHRoaXNbJ190cmVlTm9kZVByb3BlcnRpZXNBZnRlckZ1bGxWYWx1ZSddKF8weDJiN2FlZCxfMHgzOGZiYzQpLF8weDM4ZmJjNFtfMHg0YzFjZDQoMHgxYTQpXVsnY3VycmVudCddPV8weDIyZDM0NCxfMHgzOGZiYzRbJ2xldmVsJ10tLSxfMHgzOGZiYzRbXzB4NGMxY2Q0KDB4MTY5KV09XzB4MzY1MzdhLF8weDM4ZmJjNFtfMHg0YzFjZDQoMHgxNjkpXSYmXzB4MzhmYmM0W18weDRjMWNkNCgweDE2ZildWydwb3AnXSgpLF8weDJiN2FlZDt9W18weDI2NzVkZSgweDExYyldKF8weDMyYWI3MCl7dmFyIF8weDNiMTNjND1fMHgyNjc1ZGU7cmV0dXJuIE9iamVjdFsnZ2V0T3duUHJvcGVydHlTeW1ib2xzJ10/T2JqZWN0W18weDNiMTNjNCgweDFlNCldKF8weDMyYWI3MCk6W107fVtfMHgyNjc1ZGUoMHgxYTYpXShfMHg0NGUyZjUpe3ZhciBfMHg0NjA0NjI9XzB4MjY3NWRlO3JldHVybiEhKF8weDQ0ZTJmNSYmXzB4ZGJjMWMxW18weDQ2MDQ2MigweDE5YildJiZ0aGlzW18weDQ2MDQ2MigweDE0YyldKF8weDQ0ZTJmNSk9PT1fMHg0NjA0NjIoMHgxNGYpJiZfMHg0NGUyZjVbXzB4NDYwNDYyKDB4MWM4KV0pO31bXzB4MjY3NWRlKDB4MTFkKV0oXzB4MjBkNDQ4LF8weDIwZjE4MSxfMHg1MGQ3NjApe3ZhciBfMHgzNjQ3YzI9XzB4MjY3NWRlO3JldHVybiBfMHg1MGQ3NjBbXzB4MzY0N2MyKDB4MTNkKV0/dHlwZW9mIF8weDIwZDQ0OFtfMHgyMGYxODFdPT1fMHgzNjQ3YzIoMHgxYTUpOiEweDE7fVtfMHgyNjc1ZGUoMHgxOTYpXShfMHg1N2MwZGMpe3ZhciBfMHhjNjEwOWM9XzB4MjY3NWRlLF8weDM5MjY5Nz0nJztyZXR1cm4gXzB4MzkyNjk3PXR5cGVvZiBfMHg1N2MwZGMsXzB4MzkyNjk3PT09XzB4YzYxMDljKDB4MTQ1KT90aGlzW18weGM2MTA5YygweDE0YyldKF8weDU3YzBkYyk9PT1fMHhjNjEwOWMoMHgxYWIpP18weDM5MjY5Nz1fMHhjNjEwOWMoMHgxMjIpOnRoaXNbXzB4YzYxMDljKDB4MTRjKV0oXzB4NTdjMGRjKT09PV8weGM2MTA5YygweDEzMik/XzB4MzkyNjk3PV8weGM2MTA5YygweDEzNCk6XzB4NTdjMGRjPT09bnVsbD9fMHgzOTI2OTc9XzB4YzYxMDljKDB4MWJhKTpfMHg1N2MwZGNbXzB4YzYxMDljKDB4MTdiKV0mJihfMHgzOTI2OTc9XzB4NTdjMGRjW18weGM2MTA5YygweDE3YildW18weGM2MTA5YygweDFiNCldfHxfMHgzOTI2OTcpOl8weDM5MjY5Nz09PV8weGM2MTA5YygweDFkOCkmJnRoaXNbJ19IVE1MQWxsQ29sbGVjdGlvbiddJiZfMHg1N2MwZGMgaW5zdGFuY2VvZiB0aGlzW18weGM2MTA5YygweDEwZSldJiYoXzB4MzkyNjk3PV8weGM2MTA5YygweDE0ZSkpLF8weDM5MjY5Nzt9W18weDI2NzVkZSgweDE0YyldKF8weDUzZDE3Nil7cmV0dXJuIE9iamVjdFsncHJvdG90eXBlJ11bJ3RvU3RyaW5nJ11bJ2NhbGwnXShfMHg1M2QxNzYpO31bXzB4MjY3NWRlKDB4MTJkKV0oXzB4MmZmOTc0KXt2YXIgXzB4MzAyYWM5PV8weDI2NzVkZTtyZXR1cm4gXzB4MmZmOTc0PT09XzB4MzAyYWM5KDB4MTExKXx8XzB4MmZmOTc0PT09J3N0cmluZyd8fF8weDJmZjk3ND09PV8weDMwMmFjOSgweDE3Myk7fVtfMHgyNjc1ZGUoMHgxOTMpXShfMHgzOGIxYTgpe3ZhciBfMHgyMTQ0NDg9XzB4MjY3NWRlO3JldHVybiBfMHgzOGIxYTg9PT0nQm9vbGVhbid8fF8weDM4YjFhOD09PV8weDIxNDQ0OCgweDFjZCl8fF8weDM4YjFhOD09PV8weDIxNDQ0OCgweDFkYik7fVtfMHgyNjc1ZGUoMHgxNjUpXShfMHgyYjM3YTYsXzB4ZWJjZTc3LF8weDE2OTg0YyxfMHgzNGEyNWEsXzB4YTM5NWZlLF8weDE2MWQxYyl7dmFyIF8weDVhYzQzMT10aGlzO3JldHVybiBmdW5jdGlvbihfMHg5OWI2YTMpe3ZhciBfMHg0ZGYxZWY9XzB4NTc5YixfMHgyZjVmZDM9XzB4YTM5NWZlW18weDRkZjFlZigweDFhNCldW18weDRkZjFlZigweDEzYyldLF8weDQ1MjI5Yz1fMHhhMzk1ZmVbXzB4NGRmMWVmKDB4MWE0KV1bJ2luZGV4J10sXzB4MTg3OTIxPV8weGEzOTVmZVsnbm9kZSddW18weDRkZjFlZigweDEzNSldO18weGEzOTVmZVtfMHg0ZGYxZWYoMHgxYTQpXVtfMHg0ZGYxZWYoMHgxMzUpXT1fMHgyZjVmZDMsXzB4YTM5NWZlW18weDRkZjFlZigweDFhNCldW18weDRkZjFlZigweDEzNildPXR5cGVvZiBfMHgzNGEyNWE9PV8weDRkZjFlZigweDE3Myk/XzB4MzRhMjVhOl8weDk5YjZhMyxfMHgyYjM3YTZbXzB4NGRmMWVmKDB4MTYyKV0oXzB4NWFjNDMxW18weDRkZjFlZigweDE4YyldKF8weGViY2U3NyxfMHgxNjk4NGMsXzB4MzRhMjVhLF8weGEzOTVmZSxfMHgxNjFkMWMpKSxfMHhhMzk1ZmVbXzB4NGRmMWVmKDB4MWE0KV1bXzB4NGRmMWVmKDB4MTM1KV09XzB4MTg3OTIxLF8weGEzOTVmZVsnbm9kZSddWydpbmRleCddPV8weDQ1MjI5Yzt9O31bXzB4MjY3NWRlKDB4MTFmKV0oXzB4NzE1MmIzLF8weDQxODNjMyxfMHg2NGE5MmIsXzB4M2Y0NTEyLF8weGQzZDY3NCxfMHg1YTZhMDIsXzB4MTcyMGJmKXt2YXIgXzB4YzA5ZGE4PV8weDI2NzVkZSxfMHgzOGU4Zjc9dGhpcztyZXR1cm4gXzB4NDE4M2MzW18weGMwOWRhOCgweDFkMykrXzB4ZDNkNjc0W18weGMwOWRhOCgweDExYildKCldPSEweDAsZnVuY3Rpb24oXzB4NTViZDU0KXt2YXIgXzB4MzM3ODYyPV8weGMwOWRhOCxfMHgyYzFlZTY9XzB4NWE2YTAyW18weDMzNzg2MigweDFhNCldWydjdXJyZW50J10sXzB4M2ZhMjEyPV8weDVhNmEwMlsnbm9kZSddW18weDMzNzg2MigweDEzNildLF8weDRkMzI0ND1fMHg1YTZhMDJbXzB4MzM3ODYyKDB4MWE0KV1bJ3BhcmVudCddO18weDVhNmEwMltfMHgzMzc4NjIoMHgxYTQpXVtfMHgzMzc4NjIoMHgxMzUpXT1fMHgyYzFlZTYsXzB4NWE2YTAyW18weDMzNzg2MigweDFhNCldWydpbmRleCddPV8weDU1YmQ1NCxfMHg3MTUyYjNbXzB4MzM3ODYyKDB4MTYyKV0oXzB4MzhlOGY3W18weDMzNzg2MigweDE4YyldKF8weDY0YTkyYixfMHgzZjQ1MTIsXzB4ZDNkNjc0LF8weDVhNmEwMixfMHgxNzIwYmYpKSxfMHg1YTZhMDJbJ25vZGUnXVsncGFyZW50J109XzB4NGQzMjQ0LF8weDVhNmEwMlsnbm9kZSddW18weDMzNzg2MigweDEzNildPV8weDNmYTIxMjt9O31bXzB4MjY3NWRlKDB4MThjKV0oXzB4NWQ3MzQ1LF8weDU5NmVjYixfMHg1MTM5M2EsXzB4M2FhOTZlLF8weGU3YWM3KXt2YXIgXzB4MjAyMzQyPV8weDI2NzVkZSxfMHgxZWMyMzk9dGhpcztfMHhlN2FjN3x8KF8weGU3YWM3PWZ1bmN0aW9uKF8weDQ1MDBkYSxfMHgzMWJjYWQpe3JldHVybiBfMHg0NTAwZGFbXzB4MzFiY2FkXTt9KTt2YXIgXzB4NGQyYzA1PV8weDUxMzkzYVtfMHgyMDIzNDIoMHgxMWIpXSgpLF8weDNiMjZiND1fMHgzYWE5NmVbJ2V4cHJlc3Npb25zVG9FdmFsdWF0ZSddfHx7fSxfMHgzMDhmMmI9XzB4M2FhOTZlWydkZXB0aCddLF8weDMxZDM5Mj1fMHgzYWE5NmVbJ2lzRXhwcmVzc2lvblRvRXZhbHVhdGUnXTt0cnl7dmFyIF8weDFlYjYyNz10aGlzW18weDIwMjM0MigweDEyMSldKF8weDVkNzM0NSksXzB4MWU4MmZiPV8weDRkMmMwNTtfMHgxZWI2MjcmJl8weDFlODJmYlsweDBdPT09J1xcXFx4MjcnJiYoXzB4MWU4MmZiPV8weDFlODJmYlsnc3Vic3RyJ10oMHgxLF8weDFlODJmYltfMHgyMDIzNDIoMHgxYzQpXS0weDIpKTt2YXIgXzB4NTI0NTU3PV8weDNhYTk2ZVtfMHgyMDIzNDIoMHgxNGQpXT1fMHgzYjI2YjRbXzB4MjAyMzQyKDB4MWQzKStfMHgxZTgyZmJdO18weDUyNDU1NyYmKF8weDNhYTk2ZVtfMHgyMDIzNDIoMHgxNTUpXT1fMHgzYWE5NmVbJ2RlcHRoJ10rMHgxKSxfMHgzYWE5NmVbXzB4MjAyMzQyKDB4MTFhKV09ISFfMHg1MjQ1NTc7dmFyIF8weGVjYTdjND10eXBlb2YgXzB4NTEzOTNhPT1fMHgyMDIzNDIoMHgxNWMpLF8weDIxZTcyYz17J25hbWUnOl8weGVjYTdjNHx8XzB4MWViNjI3P18weDRkMmMwNTp0aGlzWydfcHJvcGVydHlOYW1lJ10oXzB4NGQyYzA1KX07aWYoXzB4ZWNhN2M0JiYoXzB4MjFlNzJjW18weDIwMjM0MigweDE1YyldPSEweDApLCEoXzB4NTk2ZWNiPT09XzB4MjAyMzQyKDB4MTIyKXx8XzB4NTk2ZWNiPT09XzB4MjAyMzQyKDB4MTY4KSkpe3ZhciBfMHgzZWEwMzM9dGhpc1tfMHgyMDIzNDIoMHgxM2YpXShfMHg1ZDczNDUsXzB4NTEzOTNhKTtpZihfMHgzZWEwMzMmJihfMHgzZWEwMzNbXzB4MjAyMzQyKDB4MTlkKV0mJihfMHgyMWU3MmNbXzB4MjAyMzQyKDB4MTk3KV09ITB4MCksXzB4M2VhMDMzW18weDIwMjM0MigweDE4ZSldJiYhXzB4NTI0NTU3JiYhXzB4M2FhOTZlWydyZXNvbHZlR2V0dGVycyddKSlyZXR1cm4gXzB4MjFlNzJjW18weDIwMjM0MigweDFiMCldPSEweDAsdGhpc1tfMHgyMDIzNDIoMHgxNzIpXShfMHgyMWU3MmMsXzB4M2FhOTZlKSxfMHgyMWU3MmM7fXZhciBfMHgxMTg3YWY7dHJ5e18weDExODdhZj1fMHhlN2FjNyhfMHg1ZDczNDUsXzB4NTEzOTNhKTt9Y2F0Y2goXzB4M2IxZjRlKXtyZXR1cm4gXzB4MjFlNzJjPXsnbmFtZSc6XzB4NGQyYzA1LCd0eXBlJzpfMHgyMDIzNDIoMHgxYmIpLCdlcnJvcic6XzB4M2IxZjRlW18weDIwMjM0MigweDE3OCldfSx0aGlzWydfcHJvY2Vzc1RyZWVOb2RlUmVzdWx0J10oXzB4MjFlNzJjLF8weDNhYTk2ZSksXzB4MjFlNzJjO312YXIgXzB4MmQ1NzM3PXRoaXNbJ190eXBlJ10oXzB4MTE4N2FmKSxfMHgyNWM2YzA9dGhpc1tfMHgyMDIzNDIoMHgxMmQpXShfMHgyZDU3MzcpO2lmKF8weDIxZTcyY1sndHlwZSddPV8weDJkNTczNyxfMHgyNWM2YzApdGhpc1snX3Byb2Nlc3NUcmVlTm9kZVJlc3VsdCddKF8weDIxZTcyYyxfMHgzYWE5NmUsXzB4MTE4N2FmLGZ1bmN0aW9uKCl7dmFyIF8weDY4ZmU4NT1fMHgyMDIzNDI7XzB4MjFlNzJjW18weDY4ZmU4NSgweDE5YSldPV8weDExODdhZltfMHg2OGZlODUoMHgxYWMpXSgpLCFfMHg1MjQ1NTcmJl8weDFlYzIzOVtfMHg2OGZlODUoMHgxOTgpXShfMHgyZDU3MzcsXzB4MjFlNzJjLF8weDNhYTk2ZSx7fSk7fSk7ZWxzZXt2YXIgXzB4MzRiODhjPV8weDNhYTk2ZVtfMHgyMDIzNDIoMHgxNjkpXSYmXzB4M2FhOTZlWydsZXZlbCddPF8weDNhYTk2ZVsnYXV0b0V4cGFuZE1heERlcHRoJ10mJl8weDNhYTk2ZVsnYXV0b0V4cGFuZFByZXZpb3VzT2JqZWN0cyddW18weDIwMjM0MigweDE4OSldKF8weDExODdhZik8MHgwJiZfMHgyZDU3MzchPT0nZnVuY3Rpb24nJiZfMHgzYWE5NmVbXzB4MjAyMzQyKDB4MTNlKV08XzB4M2FhOTZlW18weDIwMjM0MigweDE3NyldO18weDM0Yjg4Y3x8XzB4M2FhOTZlWydsZXZlbCddPF8weDMwOGYyYnx8XzB4NTI0NTU3Pyh0aGlzW18weDIwMjM0MigweDEwNildKF8weDIxZTcyYyxfMHgxMTg3YWYsXzB4M2FhOTZlLF8weDUyNDU1N3x8e30pLHRoaXNbXzB4MjAyMzQyKDB4MTQ3KV0oXzB4MTE4N2FmLF8weDIxZTcyYykpOnRoaXNbXzB4MjAyMzQyKDB4MTcyKV0oXzB4MjFlNzJjLF8weDNhYTk2ZSxfMHgxMTg3YWYsZnVuY3Rpb24oKXt2YXIgXzB4NDk3MjhmPV8weDIwMjM0MjtfMHgyZDU3Mzc9PT1fMHg0OTcyOGYoMHgxYmEpfHxfMHgyZDU3Mzc9PT1fMHg0OTcyOGYoMHgxZDgpfHwoZGVsZXRlIF8weDIxZTcyY1sndmFsdWUnXSxfMHgyMWU3MmNbXzB4NDk3MjhmKDB4MTc2KV09ITB4MCk7fSk7fXJldHVybiBfMHgyMWU3MmM7fWZpbmFsbHl7XzB4M2FhOTZlW18weDIwMjM0MigweDE0ZCldPV8weDNiMjZiNCxfMHgzYWE5NmVbXzB4MjAyMzQyKDB4MTU1KV09XzB4MzA4ZjJiLF8weDNhYTk2ZVtfMHgyMDIzNDIoMHgxMWEpXT1fMHgzMWQzOTI7fX1bXzB4MjY3NWRlKDB4MTk4KV0oXzB4MmI3ZTAxLF8weDFlZjQ4MixfMHgxYzg4N2UsXzB4MjU5OTA2KXt2YXIgXzB4MWU0Zjk2PV8weDI2NzVkZSxfMHg0MWJhMjA9XzB4MjU5OTA2W18weDFlNGY5NigweDE2NCldfHxfMHgxYzg4N2VbXzB4MWU0Zjk2KDB4MTY0KV07aWYoKF8weDJiN2UwMT09PSdzdHJpbmcnfHxfMHgyYjdlMDE9PT0nU3RyaW5nJykmJl8weDFlZjQ4MltfMHgxZTRmOTYoMHgxOWEpXSl7bGV0IF8weDRmMzA3Yz1fMHgxZWY0ODJbXzB4MWU0Zjk2KDB4MTlhKV1bXzB4MWU0Zjk2KDB4MWM0KV07XzB4MWM4ODdlW18weDFlNGY5NigweDE3ZildKz1fMHg0ZjMwN2MsXzB4MWM4ODdlWydhbGxTdHJMZW5ndGgnXT5fMHgxYzg4N2VbXzB4MWU0Zjk2KDB4MWI1KV0/KF8weDFlZjQ4MltfMHgxZTRmOTYoMHgxNzYpXT0nJyxkZWxldGUgXzB4MWVmNDgyW18weDFlNGY5NigweDE5YSldKTpfMHg0ZjMwN2M+XzB4NDFiYTIwJiYoXzB4MWVmNDgyW18weDFlNGY5NigweDE3NildPV8weDFlZjQ4MlsndmFsdWUnXVtfMHgxZTRmOTYoMHgxZWEpXSgweDAsXzB4NDFiYTIwKSxkZWxldGUgXzB4MWVmNDgyW18weDFlNGY5NigweDE5YSldKTt9fVtfMHgyNjc1ZGUoMHgxMjEpXShfMHg0YmViOGYpe3ZhciBfMHhlMzRiZTI9XzB4MjY3NWRlO3JldHVybiEhKF8weDRiZWI4ZiYmXzB4ZGJjMWMxW18weGUzNGJlMigweDE2YildJiZ0aGlzWydfb2JqZWN0VG9TdHJpbmcnXShfMHg0YmViOGYpPT09XzB4ZTM0YmUyKDB4MTVkKSYmXzB4NGJlYjhmW18weGUzNGJlMigweDFjOCldKTt9WydfcHJvcGVydHlOYW1lJ10oXzB4NDI1MjU4KXt2YXIgXzB4NWQ0NmY4PV8weDI2NzVkZTtpZihfMHg0MjUyNThbXzB4NWQ0NmY4KDB4MTI5KV0oL15cXFxcZCskLykpcmV0dXJuIF8weDQyNTI1ODt2YXIgXzB4OTMyODZjO3RyeXtfMHg5MzI4NmM9SlNPTltfMHg1ZDQ2ZjgoMHgxNzEpXSgnJytfMHg0MjUyNTgpO31jYXRjaHtfMHg5MzI4NmM9J1xcXFx4MjInK3RoaXNbXzB4NWQ0NmY4KDB4MTRjKV0oXzB4NDI1MjU4KSsnXFxcXHgyMic7fXJldHVybiBfMHg5MzI4NmNbJ21hdGNoJ10oL15cXFwiKFthLXpBLVpfXVthLXpBLVpfMC05XSopXFxcIiQvKT9fMHg5MzI4NmM9XzB4OTMyODZjW18weDVkNDZmOCgweDFlYSldKDB4MSxfMHg5MzI4NmNbXzB4NWQ0NmY4KDB4MWM0KV0tMHgyKTpfMHg5MzI4NmM9XzB4OTMyODZjWydyZXBsYWNlJ10oLycvZywnXFxcXHg1Y1xcXFx4MjcnKVtfMHg1ZDQ2ZjgoMHgxNDEpXSgvXFxcXFxcXFxcXFwiL2csJ1xcXFx4MjInKVtfMHg1ZDQ2ZjgoMHgxNDEpXSgvKF5cXFwifFxcXCIkKS9nLCdcXFxceDI3JyksXzB4OTMyODZjO31bXzB4MjY3NWRlKDB4MTcyKV0oXzB4MjgzNTU5LF8weDI5MjdhNCxfMHgyNTNjMDAsXzB4NWIzYzE0KXt2YXIgXzB4Mjg3ZTdiPV8weDI2NzVkZTt0aGlzW18weDI4N2U3YigweDExNyldKF8weDI4MzU1OSxfMHgyOTI3YTQpLF8weDViM2MxNCYmXzB4NWIzYzE0KCksdGhpc1tfMHgyODdlN2IoMHgxNDcpXShfMHgyNTNjMDAsXzB4MjgzNTU5KSx0aGlzWydfdHJlZU5vZGVQcm9wZXJ0aWVzQWZ0ZXJGdWxsVmFsdWUnXShfMHgyODM1NTksXzB4MjkyN2E0KTt9W18weDI2NzVkZSgweDExNyldKF8weDFiMDE2OCxfMHgxOGUzODkpe3ZhciBfMHgzM2YxMzU9XzB4MjY3NWRlO3RoaXNbXzB4MzNmMTM1KDB4MWU3KV0oXzB4MWIwMTY4LF8weDE4ZTM4OSksdGhpc1tfMHgzM2YxMzUoMHgxZDQpXShfMHgxYjAxNjgsXzB4MThlMzg5KSx0aGlzW18weDMzZjEzNSgweDExNSldKF8weDFiMDE2OCxfMHgxOGUzODkpLHRoaXNbXzB4MzNmMTM1KDB4MWUxKV0oXzB4MWIwMTY4LF8weDE4ZTM4OSk7fVtfMHgyNjc1ZGUoMHgxZTcpXShfMHgzNGY0NmYsXzB4MjEyYjU1KXt9W18weDI2NzVkZSgweDFkNCldKF8weDE1ZDY2MyxfMHg1ZTIyYWEpe31bJ19zZXROb2RlTGFiZWwnXShfMHg1MDU1N2EsXzB4OWM3Y2JhKXt9WydfaXNVbmRlZmluZWQnXShfMHgyYzkyOTApe3ZhciBfMHgxZjkzZDc9XzB4MjY3NWRlO3JldHVybiBfMHgyYzkyOTA9PT10aGlzW18weDFmOTNkNygweDFjYildO31bXzB4MjY3NWRlKDB4MTRiKV0oXzB4MzMxOTg1LF8weDE4MTZkYSl7dmFyIF8weDM4OWZlNT1fMHgyNjc1ZGU7dGhpc1tfMHgzODlmZTUoMHgxNTcpXShfMHgzMzE5ODUsXzB4MTgxNmRhKSx0aGlzW18weDM4OWZlNSgweDFhMSldKF8weDMzMTk4NSksXzB4MTgxNmRhW18weDM4OWZlNSgweDExMyldJiZ0aGlzWydfc29ydFByb3BzJ10oXzB4MzMxOTg1KSx0aGlzW18weDM4OWZlNSgweDEzOCldKF8weDMzMTk4NSxfMHgxODE2ZGEpLHRoaXNbXzB4Mzg5ZmU1KDB4MWMzKV0oXzB4MzMxOTg1LF8weDE4MTZkYSksdGhpc1tfMHgzODlmZTUoMHgxY2UpXShfMHgzMzE5ODUpO31bXzB4MjY3NWRlKDB4MTQ3KV0oXzB4NGM5Y2Y2LF8weDVmNGZmMSl7dmFyIF8weDVjM2ZhZT1fMHgyNjc1ZGU7dHJ5e18weDRjOWNmNiYmdHlwZW9mIF8weDRjOWNmNltfMHg1YzNmYWUoMHgxYzQpXT09XzB4NWMzZmFlKDB4MTczKSYmKF8weDVmNGZmMVtfMHg1YzNmYWUoMHgxYzQpXT1fMHg0YzljZjZbXzB4NWMzZmFlKDB4MWM0KV0pO31jYXRjaHt9aWYoXzB4NWY0ZmYxW18weDVjM2ZhZSgweDEyYSldPT09J251bWJlcid8fF8weDVmNGZmMVtfMHg1YzNmYWUoMHgxMmEpXT09PSdOdW1iZXInKXtpZihpc05hTihfMHg1ZjRmZjFbJ3ZhbHVlJ10pKV8weDVmNGZmMVtfMHg1YzNmYWUoMHgxNWUpXT0hMHgwLGRlbGV0ZSBfMHg1ZjRmZjFbJ3ZhbHVlJ107ZWxzZSBzd2l0Y2goXzB4NWY0ZmYxW18weDVjM2ZhZSgweDE5YSldKXtjYXNlIE51bWJlcltfMHg1YzNmYWUoMHgxNTEpXTpfMHg1ZjRmZjFbXzB4NWMzZmFlKDB4MWRmKV09ITB4MCxkZWxldGUgXzB4NWY0ZmYxW18weDVjM2ZhZSgweDE5YSldO2JyZWFrO2Nhc2UgTnVtYmVyW18weDVjM2ZhZSgweDFkMSldOl8weDVmNGZmMVtfMHg1YzNmYWUoMHgxOWMpXT0hMHgwLGRlbGV0ZSBfMHg1ZjRmZjFbXzB4NWMzZmFlKDB4MTlhKV07YnJlYWs7Y2FzZSAweDA6dGhpc1tfMHg1YzNmYWUoMHgxYTgpXShfMHg1ZjRmZjFbXzB4NWMzZmFlKDB4MTlhKV0pJiYoXzB4NWY0ZmYxW18weDVjM2ZhZSgweDEzNyldPSEweDApO2JyZWFrO319ZWxzZSBfMHg1ZjRmZjFbXzB4NWMzZmFlKDB4MTJhKV09PT1fMHg1YzNmYWUoMHgxYTUpJiZ0eXBlb2YgXzB4NGM5Y2Y2W18weDVjM2ZhZSgweDFiNCldPT1fMHg1YzNmYWUoMHgxMjQpJiZfMHg0YzljZjZbXzB4NWMzZmFlKDB4MWI0KV0mJl8weDVmNGZmMVsnbmFtZSddJiZfMHg0YzljZjZbXzB4NWMzZmFlKDB4MWI0KV0hPT1fMHg1ZjRmZjFbXzB4NWMzZmFlKDB4MWI0KV0mJihfMHg1ZjRmZjFbXzB4NWMzZmFlKDB4MWRhKV09XzB4NGM5Y2Y2W18weDVjM2ZhZSgweDFiNCldKTt9W18weDI2NzVkZSgweDFhOCldKF8weDJjY2RkMyl7dmFyIF8weDVlOTdlOD1fMHgyNjc1ZGU7cmV0dXJuIDB4MS9fMHgyY2NkZDM9PT1OdW1iZXJbXzB4NWU5N2U4KDB4MWQxKV07fVtfMHgyNjc1ZGUoMHgxNmQpXShfMHgyMGE1NmYpe3ZhciBfMHgzOWU5YmU9XzB4MjY3NWRlOyFfMHgyMGE1NmZbXzB4MzllOWJlKDB4MTZjKV18fCFfMHgyMGE1NmZbJ3Byb3BzJ11bJ2xlbmd0aCddfHxfMHgyMGE1NmZbJ3R5cGUnXT09PSdhcnJheSd8fF8weDIwYTU2ZlsndHlwZSddPT09XzB4MzllOWJlKDB4MTZiKXx8XzB4MjBhNTZmW18weDM5ZTliZSgweDEyYSldPT09J1NldCd8fF8weDIwYTU2ZlsncHJvcHMnXVsnc29ydCddKGZ1bmN0aW9uKF8weDE5OTkyZCxfMHg1OGNlMmUpe3ZhciBfMHg1MTdkZTg9XzB4MzllOWJlLF8weDRkMzU1MD1fMHgxOTk5MmRbXzB4NTE3ZGU4KDB4MWI0KV1bXzB4NTE3ZGU4KDB4MWM2KV0oKSxfMHg0NDMwYjQ9XzB4NThjZTJlW18weDUxN2RlOCgweDFiNCldW18weDUxN2RlOCgweDFjNildKCk7cmV0dXJuIF8weDRkMzU1MDxfMHg0NDMwYjQ/LTB4MTpfMHg0ZDM1NTA+XzB4NDQzMGI0PzB4MToweDA7fSk7fVsnX2FkZEZ1bmN0aW9uc05vZGUnXShfMHgyNzg3OWYsXzB4NGQzOTQ5KXt2YXIgXzB4MWFmYTQwPV8weDI2NzVkZTtpZighKF8weDRkMzk0OVtfMHgxYWZhNDAoMHgxM2QpXXx8IV8weDI3ODc5ZltfMHgxYWZhNDAoMHgxNmMpXXx8IV8weDI3ODc5ZltfMHgxYWZhNDAoMHgxNmMpXVtfMHgxYWZhNDAoMHgxYzQpXSkpe2Zvcih2YXIgXzB4NDdjYzE1PVtdLF8weDRjMzcwNj1bXSxfMHhiZjIxN2Q9MHgwLF8weDQzZGEzMz1fMHgyNzg3OWZbXzB4MWFmYTQwKDB4MTZjKV1bXzB4MWFmYTQwKDB4MWM0KV07XzB4YmYyMTdkPF8weDQzZGEzMztfMHhiZjIxN2QrKyl7dmFyIF8weDFiYTM3OT1fMHgyNzg3OWZbXzB4MWFmYTQwKDB4MTZjKV1bXzB4YmYyMTdkXTtfMHgxYmEzNzlbXzB4MWFmYTQwKDB4MTJhKV09PT1fMHgxYWZhNDAoMHgxYTUpP18weDQ3Y2MxNVtfMHgxYWZhNDAoMHgxNjIpXShfMHgxYmEzNzkpOl8weDRjMzcwNltfMHgxYWZhNDAoMHgxNjIpXShfMHgxYmEzNzkpO31pZighKCFfMHg0YzM3MDZbXzB4MWFmYTQwKDB4MWM0KV18fF8weDQ3Y2MxNVsnbGVuZ3RoJ108PTB4MSkpe18weDI3ODc5ZltfMHgxYWZhNDAoMHgxNmMpXT1fMHg0YzM3MDY7dmFyIF8weDJjOWRmND17J2Z1bmN0aW9uc05vZGUnOiEweDAsJ3Byb3BzJzpfMHg0N2NjMTV9O3RoaXNbXzB4MWFmYTQwKDB4MWU3KV0oXzB4MmM5ZGY0LF8weDRkMzk0OSksdGhpc1tfMHgxYWZhNDAoMHgxNTcpXShfMHgyYzlkZjQsXzB4NGQzOTQ5KSx0aGlzW18weDFhZmE0MCgweDFhMSldKF8weDJjOWRmNCksdGhpc1snX3NldE5vZGVQZXJtaXNzaW9ucyddKF8weDJjOWRmNCxfMHg0ZDM5NDkpLF8weDJjOWRmNFsnaWQnXSs9J1xcXFx4MjBmJyxfMHgyNzg3OWZbXzB4MWFmYTQwKDB4MTZjKV1bJ3Vuc2hpZnQnXShfMHgyYzlkZjQpO319fVtfMHgyNjc1ZGUoMHgxYzMpXShfMHgxZjk4Y2EsXzB4NTE5YjkwKXt9Wydfc2V0Tm9kZUV4cGFuZGFibGVTdGF0ZSddKF8weDI4YTkzNil7fVsnX2lzQXJyYXknXShfMHgzZjEyNjApe3ZhciBfMHg0YzIyZDc9XzB4MjY3NWRlO3JldHVybiBBcnJheVsnaXNBcnJheSddKF8weDNmMTI2MCl8fHR5cGVvZiBfMHgzZjEyNjA9PSdvYmplY3QnJiZ0aGlzW18weDRjMjJkNygweDE0YyldKF8weDNmMTI2MCk9PT1fMHg0YzIyZDcoMHgxYWIpO31bXzB4MjY3NWRlKDB4MWUxKV0oXzB4MzVjODQ1LF8weDU2ZDA4ZCl7fVtfMHgyNjc1ZGUoMHgxY2UpXShfMHgxYzAwM2Upe3ZhciBfMHg0ZDEwNTY9XzB4MjY3NWRlO2RlbGV0ZSBfMHgxYzAwM2VbXzB4NGQxMDU2KDB4MTE0KV0sZGVsZXRlIF8weDFjMDAzZVtfMHg0ZDEwNTYoMHgxNGEpXSxkZWxldGUgXzB4MWMwMDNlW18weDRkMTA1NigweDE3YyldO31bXzB4MjY3NWRlKDB4MTE1KV0oXzB4NDhlM2EyLF8weGIxZDdlMil7fVtfMHgyNjc1ZGUoMHgxMDkpXShfMHg1ODM2YmIpe3ZhciBfMHgyMzAzNDg9XzB4MjY3NWRlO3JldHVybiBfMHg1ODM2YmI/XzB4NTgzNmJiW18weDIzMDM0OCgweDEyOSldKHRoaXNbJ19udW1iZXJSZWdFeHAnXSk/J1snK18weDU4MzZiYisnXSc6XzB4NTgzNmJiW18weDIzMDM0OCgweDEyOSldKHRoaXNbXzB4MjMwMzQ4KDB4MWQyKV0pPycuJytfMHg1ODM2YmI6XzB4NTgzNmJiW18weDIzMDM0OCgweDEyOSldKHRoaXNbXzB4MjMwMzQ4KDB4MTMzKV0pPydbJytfMHg1ODM2YmIrJ10nOidbXFxcXHgyNycrXzB4NTgzNmJiKydcXFxceDI3XSc6Jyc7fX1sZXQgXzB4MzYwNTFjPW5ldyBfMHgyNWQxMzgoKTtmdW5jdGlvbiBfMHgzYmYxOWEoXzB4NDAzYTE0LF8weDY2NWI0NixfMHg0MjkxM2IsXzB4MmVlZmUzLF8weDE0ZjJlMixfMHg1YWFlMGIpe3ZhciBfMHg1ZjEwNjQ9XzB4MjY3NWRlO2xldCBfMHg1ZWQwNjEsXzB4M2Q2N2IxO3RyeXtfMHgzZDY3YjE9XzB4MTQ3MzhmKCksXzB4NWVkMDYxPV8weDU0NGQxZVtfMHg2NjViNDZdLCFfMHg1ZWQwNjF8fF8weDNkNjdiMS1fMHg1ZWQwNjFbJ3RzJ10+MHgxZjQmJl8weDVlZDA2MVtfMHg1ZjEwNjQoMHgxMmYpXSYmXzB4NWVkMDYxW18weDVmMTA2NCgweDE3YSldL18weDVlZDA2MVtfMHg1ZjEwNjQoMHgxMmYpXTwweDY0PyhfMHg1NDRkMWVbXzB4NjY1YjQ2XT1fMHg1ZWQwNjE9eydjb3VudCc6MHgwLCd0aW1lJzoweDAsJ3RzJzpfMHgzZDY3YjF9LF8weDU0NGQxZVsnaGl0cyddPXt9KTpfMHgzZDY3YjEtXzB4NTQ0ZDFlWydoaXRzJ11bJ3RzJ10+MHgzMiYmXzB4NTQ0ZDFlW18weDVmMTA2NCgweDEyYyldWydjb3VudCddJiZfMHg1NDRkMWVbXzB4NWYxMDY0KDB4MTJjKV1bJ3RpbWUnXS9fMHg1NDRkMWVbXzB4NWYxMDY0KDB4MTJjKV1bXzB4NWYxMDY0KDB4MTJmKV08MHg2NCYmKF8weDU0NGQxZVtfMHg1ZjEwNjQoMHgxMmMpXT17fSk7bGV0IF8weDU3OTE2Mj1bXSxfMHgzMGM3ZGQ9XzB4NWVkMDYxW18weDVmMTA2NCgweDFhZCldfHxfMHg1NDRkMWVbXzB4NWYxMDY0KDB4MTJjKV1bXzB4NWYxMDY0KDB4MWFkKV0/XzB4MzQ4MjkzOl8weDIwMGRlMCxfMHgyNWZiY2M9XzB4MzkzODcyPT57dmFyIF8weDUwMjI1OT1fMHg1ZjEwNjQ7bGV0IF8weDFiNzAyOD17fTtyZXR1cm4gXzB4MWI3MDI4W18weDUwMjI1OSgweDE2YyldPV8weDM5Mzg3MltfMHg1MDIyNTkoMHgxNmMpXSxfMHgxYjcwMjhbXzB4NTAyMjU5KDB4MTUyKV09XzB4MzkzODcyW18weDUwMjI1OSgweDE1MildLF8weDFiNzAyOFsnc3RyTGVuZ3RoJ109XzB4MzkzODcyW18weDUwMjI1OSgweDE2NCldLF8weDFiNzAyOFsndG90YWxTdHJMZW5ndGgnXT1fMHgzOTM4NzJbJ3RvdGFsU3RyTGVuZ3RoJ10sXzB4MWI3MDI4W18weDUwMjI1OSgweDE3NyldPV8weDM5Mzg3MltfMHg1MDIyNTkoMHgxNzcpXSxfMHgxYjcwMjhbXzB4NTAyMjU5KDB4MTM5KV09XzB4MzkzODcyW18weDUwMjI1OSgweDEzOSldLF8weDFiNzAyOFtfMHg1MDIyNTkoMHgxMTMpXT0hMHgxLF8weDFiNzAyOFsnbm9GdW5jdGlvbnMnXT0hXzB4NmU1NmJiLF8weDFiNzAyOFtfMHg1MDIyNTkoMHgxNTUpXT0weDEsXzB4MWI3MDI4WydsZXZlbCddPTB4MCxfMHgxYjcwMjhbXzB4NTAyMjU5KDB4MWQ2KV09J3Jvb3RfZXhwX2lkJyxfMHgxYjcwMjhbJ3Jvb3RFeHByZXNzaW9uJ109XzB4NTAyMjU5KDB4MTBiKSxfMHgxYjcwMjhbJ2F1dG9FeHBhbmQnXT0hMHgwLF8weDFiNzAyOFtfMHg1MDIyNTkoMHgxNmYpXT1bXSxfMHgxYjcwMjhbXzB4NTAyMjU5KDB4MTNlKV09MHgwLF8weDFiNzAyOFtfMHg1MDIyNTkoMHgxYjkpXT0hMHgwLF8weDFiNzAyOFtfMHg1MDIyNTkoMHgxN2YpXT0weDAsXzB4MWI3MDI4W18weDUwMjI1OSgweDFhNCldPXsnY3VycmVudCc6dm9pZCAweDAsJ3BhcmVudCc6dm9pZCAweDAsJ2luZGV4JzoweDB9LF8weDFiNzAyODt9O2Zvcih2YXIgXzB4MTgxZGIzPTB4MDtfMHgxODFkYjM8XzB4MTRmMmUyW18weDVmMTA2NCgweDFjNCldO18weDE4MWRiMysrKV8weDU3OTE2MltfMHg1ZjEwNjQoMHgxNjIpXShfMHgzNjA1MWNbXzB4NWYxMDY0KDB4MTA2KV0oeyd0aW1lTm9kZSc6XzB4NDAzYTE0PT09J3RpbWUnfHx2b2lkIDB4MH0sXzB4MTRmMmUyW18weDE4MWRiM10sXzB4MjVmYmNjKF8weDMwYzdkZCkse30pKTtpZihfMHg0MDNhMTQ9PT1fMHg1ZjEwNjQoMHgxY2EpKXtsZXQgXzB4MWYxYTJmPUVycm9yW18weDVmMTA2NCgweDE0OSldO3RyeXtFcnJvcltfMHg1ZjEwNjQoMHgxNDkpXT0weDEvMHgwLF8weDU3OTE2MltfMHg1ZjEwNjQoMHgxNjIpXShfMHgzNjA1MWNbXzB4NWYxMDY0KDB4MTA2KV0oeydzdGFja05vZGUnOiEweDB9LG5ldyBFcnJvcigpW18weDVmMTA2NCgweDE2MSldLF8weDI1ZmJjYyhfMHgzMGM3ZGQpLHsnc3RyTGVuZ3RoJzoweDEvMHgwfSkpO31maW5hbGx5e0Vycm9yWydzdGFja1RyYWNlTGltaXQnXT1fMHgxZjFhMmY7fX1yZXR1cm57J21ldGhvZCc6XzB4NWYxMDY0KDB4MTZlKSwndmVyc2lvbic6XzB4M2E4Zjc2LCdhcmdzJzpbeydpZCc6XzB4NjY1YjQ2LCd0cyc6XzB4NDI5MTNiLCdhcmdzJzpfMHg1NzkxNjIsJ2NvbnRleHQnOl8weDVhYWUwYiwnc2Vzc2lvbic6XzB4MmVlZmUzfV19O31jYXRjaChfMHg0NDk2OTkpe3JldHVybnsnbWV0aG9kJzpfMHg1ZjEwNjQoMHgxNmUpLCd2ZXJzaW9uJzpfMHgzYThmNzYsJ2FyZ3MnOlt7J2lkJzpfMHg2NjViNDYsJ3RzJzpfMHg0MjkxM2IsJ2FyZ3MnOlt7J3R5cGUnOl8weDVmMTA2NCgweDFiYiksJ2Vycm9yJzpfMHg0NDk2OTkmJl8weDQ0OTY5OVtfMHg1ZjEwNjQoMHgxNzgpXSwnY29udGV4dCc6XzB4NWFhZTBiLCdzZXNzaW9uJzpfMHgyZWVmZTN9XX1dfTt9ZmluYWxseXt0cnl7aWYoXzB4NWVkMDYxJiZfMHgzZDY3YjEpe2xldCBfMHgyMmU5NmM9XzB4MTQ3MzhmKCk7XzB4NWVkMDYxW18weDVmMTA2NCgweDEyZildKyssXzB4NWVkMDYxW18weDVmMTA2NCgweDE3YSldKz1fMHg0NDQ1YTAoXzB4M2Q2N2IxLF8weDIyZTk2YyksXzB4NWVkMDYxWyd0cyddPV8weDIyZTk2YyxfMHg1NDRkMWVbXzB4NWYxMDY0KDB4MTJjKV1bXzB4NWYxMDY0KDB4MTJmKV0rKyxfMHg1NDRkMWVbJ2hpdHMnXVtfMHg1ZjEwNjQoMHgxN2EpXSs9XzB4NDQ0NWEwKF8weDNkNjdiMSxfMHgyMmU5NmMpLF8weDU0NGQxZVtfMHg1ZjEwNjQoMHgxMmMpXVsndHMnXT1fMHgyMmU5NmMsKF8weDVlZDA2MVsnY291bnQnXT4weDMyfHxfMHg1ZWQwNjFbXzB4NWYxMDY0KDB4MTdhKV0+MHg2NCkmJihfMHg1ZWQwNjFbJ3JlZHVjZUxpbWl0cyddPSEweDApLChfMHg1NDRkMWVbXzB4NWYxMDY0KDB4MTJjKV1bXzB4NWYxMDY0KDB4MTJmKV0+MHgzZTh8fF8weDU0NGQxZVtfMHg1ZjEwNjQoMHgxMmMpXVtfMHg1ZjEwNjQoMHgxN2EpXT4weDEyYykmJihfMHg1NDRkMWVbJ2hpdHMnXVtfMHg1ZjEwNjQoMHgxYWQpXT0hMHgwKTt9fWNhdGNoe319fXJldHVybiBfMHhkYmMxYzFbXzB4MjY3NWRlKDB4MWRkKV07fSkoZ2xvYmFsVGhpcywnMTI3LjAuMC4xJyxfMHgzYmQyY2QoMHgxMzEpLF8weDNiZDJjZCgweDE4YiksXzB4M2JkMmNkKDB4MTQ0KSxfMHgzYmQyY2QoMHgxYTApLCcxNjgxNzQ5OTU4Njg5JyxfMHgzYmQyY2QoMHgxYzEpLF8weDNiZDJjZCgweDE0MCkpO1wiKTt9Y2F0Y2goZSl7fX07ZnVuY3Rpb24gb29fb28oaSwuLi52KXt0cnl7b29fY20oKS5jb25zb2xlTG9nKGksIHYpO31jYXRjaChlKXt9IHJldHVybiB2fTtmdW5jdGlvbiBvb190cihpLC4uLnYpe3RyeXtvb19jbSgpLmNvbnNvbGVUcmFjZShpLCB2KTt9Y2F0Y2goZSl7fSByZXR1cm4gdn07ZnVuY3Rpb24gb29fdHMoKXt0cnl7b29fY20oKS5jb25zb2xlVGltZSgpO31jYXRjaChlKXt9fTtmdW5jdGlvbiBvb190ZSgpe3RyeXtvb19jbSgpLmNvbnNvbGVUaW1lRW5kKCk7fWNhdGNoKGUpe319Oy8qZXNsaW50IGVzbGludC1jb21tZW50cy9kaXNhYmxlLWVuYWJsZS1wYWlyOixlc2xpbnQtY29tbWVudHMvbm8tdW5saW1pdGVkLWRpc2FibGU6LGVzbGludC1jb21tZW50cy9uby1hZ2dyZWdhdGluZy1lbmFibGU6LGVzbGludC1jb21tZW50cy9uby1kdXBsaWNhdGUtZGlzYWJsZTosZXNsaW50LWNvbW1lbnRzL25vLXVudXNlZC1kaXNhYmxlOixlc2xpbnQtY29tbWVudHMvbm8tdW51c2VkLWVuYWJsZTosKi8iLCJjb25zdCBhcGlLZXkgPSBwcm9jZXNzLmVudi5BUElfS0VZO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHF1ZXJ5Q2xpbWF0ZShsb2NhdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7bG9jYXRpb259JkFQUElEPSR7YXBpS2V5fWAsIHsgbW9kZTogJ2NvcnMnIH0pXHJcbiAgICAgICAgaWYoIXJlc3BvbnNlLm9rKXtcclxuICAgICAgICAgICAgdGhyb3coYXdhaXQgcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHJldHJpZXZlZERhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSAqL2NvbnNvbGUubG9nKC4uLm9vX29vKGBlYzRlNzhjYV8wYCxyZXRyaWV2ZWREYXRhKSlcclxuICAgICAgICByZXR1cm4gcmV0cmlldmVkRGF0YTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgdGhyb3cgZXJyb3JcclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHF1ZXJ5Rm9yZWNhc3QobG9jYXRpb24pe1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvZm9yZWNhc3Q/cT0ke2xvY2F0aW9ufSZBUFBJRD0ke2FwaUtleX1gLCB7IG1vZGU6ICdjb3JzJyB9KVxyXG4gICAgICAgIGlmKCFyZXNwb25zZS5vayl7XHJcbiAgICAgICAgICAgIHRocm93KGF3YWl0IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCByZXRyaWV2ZWREYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgKi9jb25zb2xlLmxvZyguLi5vb19vbyhgZWM0ZTc4Y2FfMWAscmV0cmlldmVkRGF0YSkpXHJcbiAgICAgICAgcmV0dXJuIHJldHJpZXZlZERhdGE7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHRocm93IGVycm9yXHJcbiAgICB9XHJcbn1cbi8qIGVzbGludC1kaXNhYmxlICovO2Z1bmN0aW9uIG9vX2NtKCl7dHJ5e3JldHVybiAoMCxldmFsKShcImdsb2JhbFRoaXMuX2NvbnNvbGVfbmluamFcIikgfHwgKDAsZXZhbCkoXCIvKiBodHRwczovL2dpdGh1Yi5jb20vd2FsbGFieWpzL2NvbnNvbGUtbmluamEjaG93LWRvZXMtaXQtd29yayAqLyd1c2Ugc3RyaWN0Jzt2YXIgXzB4M2JkMmNkPV8weDU3OWI7KGZ1bmN0aW9uKF8weDMzYWNjOCxfMHg2MjZlM2Mpe3ZhciBfMHg1MDc5Zjc9XzB4NTc5YixfMHg0NTUyNzc9XzB4MzNhY2M4KCk7d2hpbGUoISFbXSl7dHJ5e3ZhciBfMHgyNGYyZDQ9LXBhcnNlSW50KF8weDUwNzlmNygweDFlMCkpLzB4MSstcGFyc2VJbnQoXzB4NTA3OWY3KDB4MTQ4KSkvMHgyKigtcGFyc2VJbnQoXzB4NTA3OWY3KDB4MWI2KSkvMHgzKStwYXJzZUludChfMHg1MDc5ZjcoMHgxYmUpKS8weDQrLXBhcnNlSW50KF8weDUwNzlmNygweDFhZSkpLzB4NSooLXBhcnNlSW50KF8weDUwNzlmNygweDEyMykpLzB4NikrLXBhcnNlSW50KF8weDUwNzlmNygweDE4MCkpLzB4NyooLXBhcnNlSW50KF8weDUwNzlmNygweDE0MykpLzB4OCkrcGFyc2VJbnQoXzB4NTA3OWY3KDB4MTMwKSkvMHg5Ky1wYXJzZUludChfMHg1MDc5ZjcoMHgxOTQpKS8weGE7aWYoXzB4MjRmMmQ0PT09XzB4NjI2ZTNjKWJyZWFrO2Vsc2UgXzB4NDU1Mjc3WydwdXNoJ10oXzB4NDU1Mjc3WydzaGlmdCddKCkpO31jYXRjaChfMHgyNGVlMDkpe18weDQ1NTI3N1sncHVzaCddKF8weDQ1NTI3N1snc2hpZnQnXSgpKTt9fX0oXzB4M2Q0ZCwweDUyNjliKSk7ZnVuY3Rpb24gXzB4NTc5YihfMHgxYWI1NmMsXzB4NTNjYjhlKXt2YXIgXzB4M2Q0ZDRiPV8weDNkNGQoKTtyZXR1cm4gXzB4NTc5Yj1mdW5jdGlvbihfMHg1NzliOTYsXzB4MTI0NjMwKXtfMHg1NzliOTY9XzB4NTc5Yjk2LTB4MTA2O3ZhciBfMHg0OGFlZGI9XzB4M2Q0ZDRiW18weDU3OWI5Nl07cmV0dXJuIF8weDQ4YWVkYjt9LF8weDU3OWIoXzB4MWFiNTZjLF8weDUzY2I4ZSk7fXZhciB1ZT1PYmplY3RbXzB4M2JkMmNkKDB4MTg1KV0sdGU9T2JqZWN0WydkZWZpbmVQcm9wZXJ0eSddLGhlPU9iamVjdFtfMHgzYmQyY2QoMHgxYjIpXSxsZT1PYmplY3RbXzB4M2JkMmNkKDB4MTg3KV0sZmU9T2JqZWN0W18weDNiZDJjZCgweDFjZildLF9lPU9iamVjdFtfMHgzYmQyY2QoMHgxODMpXVtfMHgzYmQyY2QoMHgxYmYpXSxwZT0oXzB4MzM4NmEyLF8weDMzNjg3MyxfMHg0MTc5ZTAsXzB4MzA5ZTgxKT0+e3ZhciBfMHgxY2Q3YmI9XzB4M2JkMmNkO2lmKF8weDMzNjg3MyYmdHlwZW9mIF8weDMzNjg3Mz09XzB4MWNkN2JiKDB4MTQ1KXx8dHlwZW9mIF8weDMzNjg3Mz09XzB4MWNkN2JiKDB4MWE1KSl7Zm9yKGxldCBfMHgyOWMxMjEgb2YgbGUoXzB4MzM2ODczKSkhX2VbXzB4MWNkN2JiKDB4MTkxKV0oXzB4MzM4NmEyLF8weDI5YzEyMSkmJl8weDI5YzEyMSE9PV8weDQxNzllMCYmdGUoXzB4MzM4NmEyLF8weDI5YzEyMSx7J2dldCc6KCk9Pl8weDMzNjg3M1tfMHgyOWMxMjFdLCdlbnVtZXJhYmxlJzohKF8weDMwOWU4MT1oZShfMHgzMzY4NzMsXzB4MjljMTIxKSl8fF8weDMwOWU4MVtfMHgxY2Q3YmIoMHgxZTkpXX0pO31yZXR1cm4gXzB4MzM4NmEyO30sbmU9KF8weDExYTBiZCxfMHgxNmU3ODgsXzB4NGU3ZmRiKT0+KF8weDRlN2ZkYj1fMHgxMWEwYmQhPW51bGw/dWUoZmUoXzB4MTFhMGJkKSk6e30scGUoXzB4MTZlNzg4fHwhXzB4MTFhMGJkfHwhXzB4MTFhMGJkW18weDNiZDJjZCgweDExMildP3RlKF8weDRlN2ZkYixfMHgzYmQyY2QoMHgxYzApLHsndmFsdWUnOl8weDExYTBiZCwnZW51bWVyYWJsZSc6ITB4MH0pOl8weDRlN2ZkYixfMHgxMWEwYmQpKSxRPWNsYXNze2NvbnN0cnVjdG9yKF8weDFiMTA3NCxfMHg3NzJmMWQsXzB4MTg3MTE5LF8weDM5MzljMCl7dmFyIF8weDI1NzIzNz1fMHgzYmQyY2Q7dGhpc1tfMHgyNTcyMzcoMHgxMWUpXT1fMHgxYjEwNzQsdGhpc1tfMHgyNTcyMzcoMHgxOWUpXT1fMHg3NzJmMWQsdGhpc1tfMHgyNTcyMzcoMHgxNjMpXT1fMHgxODcxMTksdGhpc1tfMHgyNTcyMzcoMHgxM2IpXT1fMHgzOTM5YzAsdGhpc1tfMHgyNTcyMzcoMHgxMjgpXT0hMHgwLHRoaXNbXzB4MjU3MjM3KDB4MWM5KV09ITB4MCx0aGlzW18weDI1NzIzNygweDE1YSldPSEweDEsdGhpc1snX2Nvbm5lY3RpbmcnXT0hMHgxLHRoaXNbJ19pbkJyb3dzZXInXT0hIXRoaXNbXzB4MjU3MjM3KDB4MTFlKV1bXzB4MjU3MjM3KDB4MTU4KV0sdGhpc1tfMHgyNTcyMzcoMHgxNzQpXT1udWxsLHRoaXNbXzB4MjU3MjM3KDB4MThmKV09MHgwLHRoaXNbXzB4MjU3MjM3KDB4MWQwKV09MHgxNCx0aGlzWydfc2VuZEVycm9yTWVzc2FnZSddPXRoaXNbXzB4MjU3MjM3KDB4MTZhKV0/XzB4MjU3MjM3KDB4MTA4KTonQ29uc29sZVxcXFx4MjBOaW5qYVxcXFx4MjBmYWlsZWRcXFxceDIwdG9cXFxceDIwc2VuZFxcXFx4MjBsb2dzLFxcXFx4MjByZXN0YXJ0aW5nXFxcXHgyMHRoZVxcXFx4MjBwcm9jZXNzXFxcXHgyMG1heVxcXFx4MjBoZWxwJzt9YXN5bmNbJ2dldFdlYlNvY2tldENsYXNzJ10oKXt2YXIgXzB4Mjg5ZjA0PV8weDNiZDJjZDtpZih0aGlzW18weDI4OWYwNCgweDE3NCldKXJldHVybiB0aGlzW18weDI4OWYwNCgweDE3NCldO2xldCBfMHgxMTYyN2Q7aWYodGhpc1snX2luQnJvd3NlciddKV8weDExNjI3ZD10aGlzW18weDI4OWYwNCgweDExZSldWydXZWJTb2NrZXQnXTtlbHNle2lmKHRoaXNbXzB4Mjg5ZjA0KDB4MTFlKV1bXzB4Mjg5ZjA0KDB4MTdlKV0/LltfMHgyODlmMDQoMHgxYTkpXSlfMHgxMTYyN2Q9dGhpc1tfMHgyODlmMDQoMHgxMWUpXVtfMHgyODlmMDQoMHgxN2UpXT8uW18weDI4OWYwNCgweDFhOSldO2Vsc2UgdHJ5e2xldCBfMHhmZWVjNzE9YXdhaXQgaW1wb3J0KF8weDI4OWYwNCgweDE4NCkpO18weDExNjI3ZD0oYXdhaXQgaW1wb3J0KChhd2FpdCBpbXBvcnQoXzB4Mjg5ZjA0KDB4MTBmKSkpW18weDI4OWYwNCgweDE0MildKF8weGZlZWM3MVtfMHgyODlmMDQoMHgxMGEpXSh0aGlzW18weDI4OWYwNCgweDEzYildLF8weDI4OWYwNCgweDEyZSkpKVtfMHgyODlmMDQoMHgxMWIpXSgpKSlbXzB4Mjg5ZjA0KDB4MWMwKV07fWNhdGNoe3RyeXtfMHgxMTYyN2Q9cmVxdWlyZShyZXF1aXJlKF8weDI4OWYwNCgweDE4NCkpWydqb2luJ10odGhpc1tfMHgyODlmMDQoMHgxM2IpXSwnd3MnKSk7fWNhdGNoe3Rocm93IG5ldyBFcnJvcihfMHgyODlmMDQoMHgxNjApKTt9fX1yZXR1cm4gdGhpc1tfMHgyODlmMDQoMHgxNzQpXT1fMHgxMTYyN2QsXzB4MTE2MjdkO31bXzB4M2JkMmNkKDB4MTE2KV0oKXt2YXIgXzB4Y2NhZGEyPV8weDNiZDJjZDt0aGlzW18weGNjYWRhMigweDE1MCldfHx0aGlzW18weGNjYWRhMigweDE1YSldfHx0aGlzWydfY29ubmVjdEF0dGVtcHRDb3VudCddPj10aGlzWydfbWF4Q29ubmVjdEF0dGVtcHRDb3VudCddfHwodGhpc1tfMHhjY2FkYTIoMHgxYzkpXT0hMHgxLHRoaXNbJ19jb25uZWN0aW5nJ109ITB4MCx0aGlzWydfY29ubmVjdEF0dGVtcHRDb3VudCddKyssdGhpc1tfMHhjY2FkYTIoMHgxYjMpXT1uZXcgUHJvbWlzZSgoXzB4NDBlNjA5LF8weDUyZDg0Yik9Pnt2YXIgXzB4MmE1NjY1PV8weGNjYWRhMjt0aGlzW18weDJhNTY2NSgweDFkOSldKClbXzB4MmE1NjY1KDB4MTI3KV0oXzB4MjA2NmRkPT57dmFyIF8weDI0ZWYyNj1fMHgyYTU2NjU7bGV0IF8weGQ3ODk2OT1uZXcgXzB4MjA2NmRkKCd3czovLycrdGhpc1snaG9zdCddKyc6Jyt0aGlzW18weDI0ZWYyNigweDE2MyldKTtfMHhkNzg5NjlbXzB4MjRlZjI2KDB4MTgyKV09KCk9Pnt2YXIgXzB4NGYwYjMwPV8weDI0ZWYyNjt0aGlzW18weDRmMGIzMCgweDEyOCldPSEweDEsdGhpc1tfMHg0ZjBiMzAoMHgxNTYpXShfMHhkNzg5NjkpLHRoaXNbXzB4NGYwYjMwKDB4MWU1KV0oKSxfMHg1MmQ4NGIobmV3IEVycm9yKF8weDRmMGIzMCgweDFiZCkpKTt9LF8weGQ3ODk2OVsnb25vcGVuJ109KCk9Pnt2YXIgXzB4MmQzMzUwPV8weDI0ZWYyNjt0aGlzWydfaW5Ccm93c2VyJ118fF8weGQ3ODk2OVsnX3NvY2tldCddJiZfMHhkNzg5NjlbXzB4MmQzMzUwKDB4MTg4KV1bXzB4MmQzMzUwKDB4MWIxKV0mJl8weGQ3ODk2OVsnX3NvY2tldCddWyd1bnJlZiddKCksXzB4NDBlNjA5KF8weGQ3ODk2OSk7fSxfMHhkNzg5NjlbXzB4MjRlZjI2KDB4MWRjKV09KCk9Pnt2YXIgXzB4MjcwMTM0PV8weDI0ZWYyNjt0aGlzWydfYWxsb3dlZFRvQ29ubmVjdE9uU2VuZCddPSEweDAsdGhpc1snX2Rpc3Bvc2VXZWJzb2NrZXQnXShfMHhkNzg5NjkpLHRoaXNbXzB4MjcwMTM0KDB4MWU1KV0oKTt9LF8weGQ3ODk2OVsnb25tZXNzYWdlJ109XzB4MTViNmFmPT57dmFyIF8weDQ2YzMzYT1fMHgyNGVmMjY7dHJ5e18weDE1YjZhZiYmXzB4MTViNmFmW18weDQ2YzMzYSgweDEyNildJiZ0aGlzW18weDQ2YzMzYSgweDE2YSldJiZKU09OW18weDQ2YzMzYSgweDE3ZCldKF8weDE1YjZhZltfMHg0NmMzM2EoMHgxMjYpXSlbXzB4NDZjMzNhKDB4MTY2KV09PT1fMHg0NmMzM2EoMHgxOTIpJiZ0aGlzW18weDQ2YzMzYSgweDExZSldW18weDQ2YzMzYSgweDE3OSldW18weDQ2YzMzYSgweDE5MildKCk7fWNhdGNoe319O30pWyd0aGVuJ10oXzB4M2NiNThmPT4odGhpc1snX2Nvbm5lY3RlZCddPSEweDAsdGhpc1tfMHgyYTU2NjUoMHgxNTApXT0hMHgxLHRoaXNbJ19hbGxvd2VkVG9Db25uZWN0T25TZW5kJ109ITB4MSx0aGlzW18weDJhNTY2NSgweDEyOCldPSEweDAsdGhpc1tfMHgyYTU2NjUoMHgxOGYpXT0weDAsXzB4M2NiNThmKSlbJ2NhdGNoJ10oXzB4NWYxMDI1PT4odGhpc1tfMHgyYTU2NjUoMHgxNWEpXT0hMHgxLHRoaXNbXzB4MmE1NjY1KDB4MTUwKV09ITB4MSxfMHg1MmQ4NGIobmV3IEVycm9yKF8weDJhNTY2NSgweDFjYykrKF8weDVmMTAyNSYmXzB4NWYxMDI1W18weDJhNTY2NSgweDE3OCldKSkpKSk7fSkpO31bXzB4M2JkMmNkKDB4MTU2KV0oXzB4MTQxMzBlKXt2YXIgXzB4MzMxMmRlPV8weDNiZDJjZDt0aGlzW18weDMzMTJkZSgweDE1YSldPSEweDEsdGhpc1tfMHgzMzEyZGUoMHgxNTApXT0hMHgxO3RyeXtfMHgxNDEzMGVbXzB4MzMxMmRlKDB4MWRjKV09bnVsbCxfMHgxNDEzMGVbXzB4MzMxMmRlKDB4MTgyKV09bnVsbCxfMHgxNDEzMGVbXzB4MzMxMmRlKDB4MTE4KV09bnVsbDt9Y2F0Y2h7fXRyeXtfMHgxNDEzMGVbXzB4MzMxMmRlKDB4MWJjKV08MHgyJiZfMHgxNDEzMGVbXzB4MzMxMmRlKDB4MTk1KV0oKTt9Y2F0Y2h7fX1bXzB4M2JkMmNkKDB4MWU1KV0oKXt2YXIgXzB4MjVlYjZlPV8weDNiZDJjZDtjbGVhclRpbWVvdXQodGhpc1tfMHgyNWViNmUoMHgxMGMpXSksISh0aGlzW18weDI1ZWI2ZSgweDE4ZildPj10aGlzWydfbWF4Q29ubmVjdEF0dGVtcHRDb3VudCddKSYmKHRoaXNbXzB4MjVlYjZlKDB4MTBjKV09c2V0VGltZW91dCgoKT0+e3ZhciBfMHg0MDY4MDY9XzB4MjVlYjZlO3RoaXNbXzB4NDA2ODA2KDB4MTVhKV18fHRoaXNbXzB4NDA2ODA2KDB4MTUwKV18fCh0aGlzWydfY29ubmVjdFRvSG9zdE5vdyddKCksdGhpc1tfMHg0MDY4MDYoMHgxYjMpXT8uWydjYXRjaCddKCgpPT50aGlzW18weDQwNjgwNigweDFlNSldKCkpKTt9LDB4MWY0KSx0aGlzW18weDI1ZWI2ZSgweDEwYyldW18weDI1ZWI2ZSgweDFiMSldJiZ0aGlzW18weDI1ZWI2ZSgweDEwYyldW18weDI1ZWI2ZSgweDFiMSldKCkpO31hc3luY1snc2VuZCddKF8weDE0MGZkYSl7dmFyIF8weDM2NzBmZD1fMHgzYmQyY2Q7dHJ5e2lmKCF0aGlzW18weDM2NzBmZCgweDEyOCldKXJldHVybjt0aGlzW18weDM2NzBmZCgweDFjOSldJiZ0aGlzW18weDM2NzBmZCgweDExNildKCksKGF3YWl0IHRoaXNbXzB4MzY3MGZkKDB4MWIzKV0pW18weDM2NzBmZCgweDFjNSldKEpTT05bJ3N0cmluZ2lmeSddKF8weDE0MGZkYSkpO31jYXRjaChfMHgyMGM0ZTIpe2NvbnNvbGVbJ3dhcm4nXSh0aGlzWydfc2VuZEVycm9yTWVzc2FnZSddKyc6XFxcXHgyMCcrKF8weDIwYzRlMiYmXzB4MjBjNGUyWydtZXNzYWdlJ10pKSx0aGlzW18weDM2NzBmZCgweDEyOCldPSEweDEsdGhpc1snX2F0dGVtcHRUb1JlY29ubmVjdFNob3J0bHknXSgpO319fTtmdW5jdGlvbiBWKF8weDNkZGIxZCxfMHg0YzRjYjYsXzB4MWM4NDQzLF8weDI0OTczNSxfMHgzZDRhNmIpe3ZhciBfMHg0MDk3MmU9XzB4M2JkMmNkO2xldCBfMHgzMzkzMmE9XzB4MWM4NDQzW18weDQwOTcyZSgweDE5ZildKCcsJylbXzB4NDA5NzJlKDB4MWEzKV0oXzB4M2ViNjU4PT57dmFyIF8weGNhZjEzNT1fMHg0MDk3MmU7dHJ5e18weDNkZGIxZFtfMHhjYWYxMzUoMHgxNTQpXXx8KChfMHgzZDRhNmI9PT1fMHhjYWYxMzUoMHgxNDYpfHxfMHgzZDRhNmI9PT1fMHhjYWYxMzUoMHgxODYpKSYmKF8weDNkNGE2Yis9XzB4M2RkYjFkWydwcm9jZXNzJ10/LltfMHhjYWYxMzUoMHgxMjApXT8uW18weGNhZjEzNSgweDFhNCldP18weGNhZjEzNSgweDFiNyk6XzB4Y2FmMTM1KDB4MWU4KSksXzB4M2RkYjFkW18weGNhZjEzNSgweDE1NCldPXsnaWQnOituZXcgRGF0ZSgpLCd0b29sJzpfMHgzZDRhNmJ9KTtsZXQgXzB4NTQ1MzVmPW5ldyBRKF8weDNkZGIxZCxfMHg0YzRjYjYsXzB4M2ViNjU4LF8weDI0OTczNSk7cmV0dXJuIF8weDU0NTM1ZltfMHhjYWYxMzUoMHgxYzUpXVtfMHhjYWYxMzUoMHgxNWIpXShfMHg1NDUzNWYpO31jYXRjaChfMHgxNzhkMDEpe3JldHVybiBjb25zb2xlW18weGNhZjEzNSgweDE5MCldKF8weGNhZjEzNSgweDFhZiksXzB4MTc4ZDAxJiZfMHgxNzhkMDFbXzB4Y2FmMTM1KDB4MTc4KV0pLCgpPT57fTt9fSk7cmV0dXJuIF8weGFkMTA5Nj0+XzB4MzM5MzJhW18weDQwOTcyZSgweDFjOCldKF8weDFmNTZmNT0+XzB4MWY1NmY1KF8weGFkMTA5NikpO31mdW5jdGlvbiBfMHgzZDRkKCl7dmFyIF8weDU0NjRhYj1bJ190cmVlTm9kZVByb3BlcnRpZXNBZnRlckZ1bGxWYWx1ZScsJ19vYmplY3RUb1N0cmluZycsJ2V4cHJlc3Npb25zVG9FdmFsdWF0ZScsJ0hUTUxBbGxDb2xsZWN0aW9uJywnW29iamVjdFxcXFx4MjBTZXRdJywnX2Nvbm5lY3RpbmcnLCdQT1NJVElWRV9JTkZJTklUWScsJ2VsZW1lbnRzJywnY29uY2F0JywnX2NvbnNvbGVfbmluamFfc2Vzc2lvbicsJ2RlcHRoJywnX2Rpc3Bvc2VXZWJzb2NrZXQnLCdfc2V0Tm9kZUxhYmVsJywnV2ViU29ja2V0JywnLi4uJywnX2Nvbm5lY3RlZCcsJ2JpbmQnLCdzeW1ib2wnLCdbb2JqZWN0XFxcXHgyME1hcF0nLCduYW4nLCd0ZXN0JywnZmFpbGVkXFxcXHgyMHRvXFxcXHgyMGZpbmRcXFxceDIwYW5kXFxcXHgyMGxvYWRcXFxceDIwV2ViU29ja2V0Jywnc3RhY2snLCdwdXNoJywncG9ydCcsJ3N0ckxlbmd0aCcsJ19hZGRQcm9wZXJ0eScsJ21ldGhvZCcsJ19jb25zb2xlTmluamFBbGxvd2VkVG9TdGFydCcsJ0Vycm9yJywnYXV0b0V4cGFuZCcsJ19pbkJyb3dzZXInLCdNYXAnLCdwcm9wcycsJ19zb3J0UHJvcHMnLCdsb2cnLCdhdXRvRXhwYW5kUHJldmlvdXNPYmplY3RzJywncGVyZm9ybWFuY2UnLCdzdHJpbmdpZnknLCdfcHJvY2Vzc1RyZWVOb2RlUmVzdWx0JywnbnVtYmVyJywnX1dlYlNvY2tldENsYXNzJywnaHJ0aW1lJywnY2FwcGVkJywnYXV0b0V4cGFuZExpbWl0JywnbWVzc2FnZScsJ2xvY2F0aW9uJywndGltZScsJ2NvbnN0cnVjdG9yJywnX2hhc01hcE9uSXRzUGF0aCcsJ3BhcnNlJywncHJvY2VzcycsJ2FsbFN0ckxlbmd0aCcsJzdhd2hJVk8nLCdjYXBwZWRQcm9wcycsJ29uZXJyb3InLCdwcm90b3R5cGUnLCdwYXRoJywnY3JlYXRlJywncmVtaXgnLCdnZXRPd25Qcm9wZXJ0eU5hbWVzJywnX3NvY2tldCcsJ2luZGV4T2YnLCdCdWZmZXInLFxcXCJjOlxcXFxcXFxcVXNlcnNcXFxcXFxcXEFkZXVzXFxcXFxcXFwudnNjb2RlXFxcXFxcXFxleHRlbnNpb25zXFxcXFxcXFx3YWxsYWJ5anMuY29uc29sZS1uaW5qYS0wLjAuMTA2XFxcXFxcXFxub2RlX21vZHVsZXNcXFwiLCdfcHJvcGVydHknLCdfU3ltYm9sJywnZ2V0JywnX2Nvbm5lY3RBdHRlbXB0Q291bnQnLCd3YXJuJywnY2FsbCcsJ3JlbG9hZCcsJ19pc1ByaW1pdGl2ZVdyYXBwZXJUeXBlJywnOTAyNjE5MEZoRG9HdycsJ2Nsb3NlJywnX3R5cGUnLCdzZXR0ZXInLCdfY2FwSWZTdHJpbmcnLCdlbGFwc2VkJywndmFsdWUnLCdTZXQnLCduZWdhdGl2ZUluZmluaXR5Jywnc2V0JywnaG9zdCcsJ3NwbGl0JywnMS4wLjAnLCdfc2V0Tm9kZUV4cGFuZGFibGVTdGF0ZScsJ3BlcmZfaG9va3MnLCdtYXAnLCdub2RlJywnZnVuY3Rpb24nLCdfaXNTZXQnLCdhcmd1bWVudFJlc29sdXRpb25FcnJvcicsJ19pc05lZ2F0aXZlWmVybycsJ19XZWJTb2NrZXQnLCdfbnVtYmVyUmVnRXhwJywnW29iamVjdFxcXFx4MjBBcnJheV0nLCd2YWx1ZU9mJywncmVkdWNlTGltaXRzJywnNzYzNTM1eU1nSElqJywnbG9nZ2VyXFxcXHgyMGZhaWxlZFxcXFx4MjB0b1xcXFx4MjBjb25uZWN0XFxcXHgyMHRvXFxcXHgyMGhvc3QnLCdnZXR0ZXInLCd1bnJlZicsJ2dldE93blByb3BlcnR5RGVzY3JpcHRvcicsJ193cycsJ25hbWUnLCd0b3RhbFN0ckxlbmd0aCcsJzN6aWhGalMnLCdcXFxceDIwc2VydmVyJywnbGV2ZWwnLCdyZXNvbHZlR2V0dGVycycsJ251bGwnLCd1bmtub3duJywncmVhZHlTdGF0ZScsJ2xvZ2dlclxcXFx4MjB3ZWJzb2NrZXRcXFxceDIwZXJyb3InLCc3NDg2NDRMVVpGc0UnLCdoYXNPd25Qcm9wZXJ0eScsJ2RlZmF1bHQnLFtcXFwibG9jYWxob3N0XFxcIixcXFwiMTI3LjAuMC4xXFxcIixcXFwiZXhhbXBsZS5jeXByZXNzLmlvXFxcIixcXFwiREVTS1RPUC02NVM4Q0xVXFxcIixcXFwiMTkyLjE2OC41Ni4xXFxcIixcXFwiMTkyLjE2OC4wLjVcXFwiXSwnc2xpY2UnLCdfYWRkTG9hZE5vZGUnLCdsZW5ndGgnLCdzZW5kJywndG9Mb3dlckNhc2UnLCdjYXBwZWRFbGVtZW50cycsJ2ZvckVhY2gnLCdfYWxsb3dlZFRvQ29ubmVjdE9uU2VuZCcsJ3RyYWNlJywnX3VuZGVmaW5lZCcsJ2ZhaWxlZFxcXFx4MjB0b1xcXFx4MjBjb25uZWN0XFxcXHgyMHRvXFxcXHgyMGhvc3Q6XFxcXHgyMCcsJ1N0cmluZycsJ19jbGVhbk5vZGUnLCdnZXRQcm90b3R5cGVPZicsJ19tYXhDb25uZWN0QXR0ZW1wdENvdW50JywnTkVHQVRJVkVfSU5GSU5JVFknLCdfa2V5U3RyUmVnRXhwJywnX3BfJywnX3NldE5vZGVRdWVyeVBhdGgnLCdfcF9sZW5ndGgnLCdleHBJZCcsJ19wX25hbWUnLCd1bmRlZmluZWQnLCdnZXRXZWJTb2NrZXRDbGFzcycsJ2Z1bmNOYW1lJywnTnVtYmVyJywnb25jbG9zZScsJ19jb25zb2xlX25pbmphJywnbm93JywncG9zaXRpdmVJbmZpbml0eScsJzQ5MTY3NEt1YndHeCcsJ19zZXROb2RlUGVybWlzc2lvbnMnLCdTeW1ib2wnLCdob3N0bmFtZScsJ2dldE93blByb3BlcnR5U3ltYm9scycsJ19hdHRlbXB0VG9SZWNvbm5lY3RTaG9ydGx5JywndGltZUVuZCcsJ19zZXROb2RlSWQnLCdcXFxceDIwYnJvd3NlcicsJ2VudW1lcmFibGUnLCdzdWJzdHInLCdzZXJpYWxpemUnLCdkaXNhYmxlZExvZycsJ0NvbnNvbGVcXFxceDIwTmluamFcXFxceDIwZmFpbGVkXFxcXHgyMHRvXFxcXHgyMHNlbmRcXFxceDIwbG9ncyxcXFxceDIwcmVmcmVzaGluZ1xcXFx4MjB0aGVcXFxceDIwcGFnZVxcXFx4MjBtYXlcXFxceDIwaGVscCcsJ19wcm9wZXJ0eUFjY2Vzc29yJywnam9pbicsJ3Jvb3RfZXhwJywnX3JlY29ubmVjdFRpbWVvdXQnLCdkaXNhYmxlZFRyYWNlJywnX0hUTUxBbGxDb2xsZWN0aW9uJywndXJsJywnUmVnRXhwJywnYm9vbGVhbicsJ19fZXMnKydNb2R1bGUnLCdzb3J0UHJvcHMnLCdfaGFzU3ltYm9sUHJvcGVydHlPbkl0c1BhdGgnLCdfc2V0Tm9kZUV4cHJlc3Npb25QYXRoJywnX2Nvbm5lY3RUb0hvc3ROb3cnLCdfdHJlZU5vZGVQcm9wZXJ0aWVzQmVmb3JlRnVsbFZhbHVlJywnb25vcGVuJywnaW5jbHVkZXMnLCdpc0V4cHJlc3Npb25Ub0V2YWx1YXRlJywndG9TdHJpbmcnLCdfZ2V0T3duUHJvcGVydHlTeW1ib2xzJywnX2JsYWNrbGlzdGVkUHJvcGVydHknLCdnbG9iYWwnLCdfYWRkT2JqZWN0UHJvcGVydHknLCd2ZXJzaW9ucycsJ19pc01hcCcsJ2FycmF5JywnMThXSkFmRUwnLCdzdHJpbmcnLCdfZ2V0T3duUHJvcGVydHlOYW1lcycsJ2RhdGEnLCd0aGVuJywnX2FsbG93ZWRUb1NlbmQnLCdtYXRjaCcsJ3R5cGUnLCdudXh0JywnaGl0cycsJ19pc1ByaW1pdGl2ZVR5cGUnLCd3cy9pbmRleC5qcycsJ2NvdW50JywnMzE4MzgwNHR3cERvQScsJzU0MzQyJywnW29iamVjdFxcXFx4MjBEYXRlXScsJ19xdW90ZWRSZWdFeHAnLCdkYXRlJywncGFyZW50JywnaW5kZXgnLCduZWdhdGl2ZVplcm8nLCdfYWRkRnVuY3Rpb25zTm9kZScsJ2F1dG9FeHBhbmRNYXhEZXB0aCcsJ2NvbnNvbGUnLCdub2RlTW9kdWxlcycsJ2N1cnJlbnQnLCdub0Z1bmN0aW9ucycsJ2F1dG9FeHBhbmRQcm9wZXJ0eUNvdW50JywnX2dldE93blByb3BlcnR5RGVzY3JpcHRvcicsJycsJ3JlcGxhY2UnLCdwYXRoVG9GaWxlVVJMJywnNTIwNTIwOFdocXRqSycsJ3dlYnBhY2snLCdvYmplY3QnLCduZXh0LmpzJywnX2FkZGl0aW9uYWxNZXRhZGF0YScsJzE2NDMzNFhtalVUTycsJ3N0YWNrVHJhY2VMaW1pdCcsJ19oYXNTZXRPbkl0c1BhdGgnXTtfMHgzZDRkPWZ1bmN0aW9uKCl7cmV0dXJuIF8weDU0NjRhYjt9O3JldHVybiBfMHgzZDRkKCk7fWZ1bmN0aW9uIEgoXzB4NTEyYzEwKXt2YXIgXzB4NTU1MDk1PV8weDNiZDJjZDtsZXQgXzB4YTBiYmI3PWZ1bmN0aW9uKF8weDQwYzhlOSxfMHgxNTA2ZjEpe3JldHVybiBfMHgxNTA2ZjEtXzB4NDBjOGU5O30sXzB4M2NkMWEyO2lmKF8weDUxMmMxMFsncGVyZm9ybWFuY2UnXSlfMHgzY2QxYTI9ZnVuY3Rpb24oKXt2YXIgXzB4NGJjNThmPV8weDU3OWI7cmV0dXJuIF8weDUxMmMxMFtfMHg0YmM1OGYoMHgxNzApXVtfMHg0YmM1OGYoMHgxZGUpXSgpO307ZWxzZXtpZihfMHg1MTJjMTBbJ3Byb2Nlc3MnXSYmXzB4NTEyYzEwWydwcm9jZXNzJ11bXzB4NTU1MDk1KDB4MTc1KV0pXzB4M2NkMWEyPWZ1bmN0aW9uKCl7dmFyIF8weDE2YzA0Nz1fMHg1NTUwOTU7cmV0dXJuIF8weDUxMmMxMFtfMHgxNmMwNDcoMHgxN2UpXVtfMHgxNmMwNDcoMHgxNzUpXSgpO30sXzB4YTBiYmI3PWZ1bmN0aW9uKF8weDE2NWEzYyxfMHgxN2M4YjApe3JldHVybiAweDNlOCooXzB4MTdjOGIwWzB4MF0tXzB4MTY1YTNjWzB4MF0pKyhfMHgxN2M4YjBbMHgxXS1fMHgxNjVhM2NbMHgxXSkvMHhmNDI0MDt9O2Vsc2UgdHJ5e2xldCB7cGVyZm9ybWFuY2U6XzB4NTZhYTkxfT1yZXF1aXJlKF8weDU1NTA5NSgweDFhMikpO18weDNjZDFhMj1mdW5jdGlvbigpe3ZhciBfMHgzMWMyOWQ9XzB4NTU1MDk1O3JldHVybiBfMHg1NmFhOTFbXzB4MzFjMjlkKDB4MWRlKV0oKTt9O31jYXRjaHtfMHgzY2QxYTI9ZnVuY3Rpb24oKXtyZXR1cm4rbmV3IERhdGUoKTt9O319cmV0dXJueydlbGFwc2VkJzpfMHhhMGJiYjcsJ3RpbWVTdGFtcCc6XzB4M2NkMWEyLCdub3cnOigpPT5EYXRlW18weDU1NTA5NSgweDFkZSldKCl9O31mdW5jdGlvbiBYKF8weGU5NmMzLF8weDMwN2NlOCxfMHg5MmUwNTEpe3ZhciBfMHgxNmFmYzU9XzB4M2JkMmNkO2lmKF8weGU5NmMzW18weDE2YWZjNSgweDE2NyldIT09dm9pZCAweDApcmV0dXJuIF8weGU5NmMzW18weDE2YWZjNSgweDE2NyldO2xldCBfMHg1ZWQ4Nzg9XzB4ZTk2YzNbJ3Byb2Nlc3MnXT8uWyd2ZXJzaW9ucyddPy5bXzB4MTZhZmM1KDB4MWE0KV07cmV0dXJuIF8weDVlZDg3OCYmXzB4OTJlMDUxPT09XzB4MTZhZmM1KDB4MTJiKT9fMHhlOTZjM1tfMHgxNmFmYzUoMHgxNjcpXT0hMHgxOl8weGU5NmMzWydfY29uc29sZU5pbmphQWxsb3dlZFRvU3RhcnQnXT1fMHg1ZWQ4Nzh8fCFfMHgzMDdjZTh8fF8weGU5NmMzW18weDE2YWZjNSgweDE3OSldPy5bXzB4MTZhZmM1KDB4MWUzKV0mJl8weDMwN2NlOFtfMHgxNmFmYzUoMHgxMTkpXShfMHhlOTZjM1tfMHgxNmFmYzUoMHgxNzkpXVtfMHgxNmFmYzUoMHgxZTMpXSksXzB4ZTk2YzNbJ19jb25zb2xlTmluamFBbGxvd2VkVG9TdGFydCddO30oKF8weGRiYzFjMSxfMHg0ZjIxZTYsXzB4NWNiNWEyLF8weDU1ZmUzNCxfMHg0NDA0MmMsXzB4M2E4Zjc2LF8weDMxMzA4MSxfMHgxMTIxNCxfMHg2ZTU2YmIpPT57dmFyIF8weDI2NzVkZT1fMHgzYmQyY2Q7aWYoXzB4ZGJjMWMxW18weDI2NzVkZSgweDFkZCldKXJldHVybiBfMHhkYmMxYzFbXzB4MjY3NWRlKDB4MWRkKV07aWYoIVgoXzB4ZGJjMWMxLF8weDExMjE0LF8weDQ0MDQyYykpcmV0dXJuIF8weGRiYzFjMVsnX2NvbnNvbGVfbmluamEnXT17J2NvbnNvbGVMb2cnOigpPT57fSwnY29uc29sZVRyYWNlJzooKT0+e30sJ2NvbnNvbGVUaW1lJzooKT0+e30sJ2NvbnNvbGVUaW1lRW5kJzooKT0+e30sJ2F1dG9Mb2cnOigpPT57fSwnYXV0b1RyYWNlJzooKT0+e30sJ2F1dG9UaW1lJzooKT0+e30sJ2F1dG9UaW1lRW5kJzooKT0+e319LF8weGRiYzFjMVtfMHgyNjc1ZGUoMHgxZGQpXTtsZXQgXzB4MjAwZGUwPXsncHJvcHMnOjB4NjQsJ2VsZW1lbnRzJzoweDY0LCdzdHJMZW5ndGgnOjB4NDAwKjB4MzIsJ3RvdGFsU3RyTGVuZ3RoJzoweDQwMCoweDMyLCdhdXRvRXhwYW5kTGltaXQnOjB4MTM4OCwnYXV0b0V4cGFuZE1heERlcHRoJzoweGF9LF8weDM0ODI5Mz17J3Byb3BzJzoweDUsJ2VsZW1lbnRzJzoweDUsJ3N0ckxlbmd0aCc6MHgxMDAsJ3RvdGFsU3RyTGVuZ3RoJzoweDEwMCoweDMsJ2F1dG9FeHBhbmRMaW1pdCc6MHgxZSwnYXV0b0V4cGFuZE1heERlcHRoJzoweDJ9LF8weDIzZWI5MT1IKF8weGRiYzFjMSksXzB4NDQ0NWEwPV8weDIzZWI5MVtfMHgyNjc1ZGUoMHgxOTkpXSxfMHgxNDczOGY9XzB4MjNlYjkxWyd0aW1lU3RhbXAnXSxfMHgzZWVlNmE9XzB4MjNlYjkxW18weDI2NzVkZSgweDFkZSldLF8weDU0NGQxZT17J2hpdHMnOnt9LCd0cyc6e319LF8weGM2YjRjYz1fMHhhOWEyMDY9PntfMHg1NDRkMWVbJ3RzJ11bXzB4YTlhMjA2XT1fMHgxNDczOGYoKTt9LF8weDQwNDQyYz0oXzB4MTI0MTFhLF8weDU4MmI4ZCk9Pnt2YXIgXzB4M2UxZWVmPV8weDI2NzVkZTtsZXQgXzB4NGI1NDk4PV8weDU0NGQxZVsndHMnXVtfMHg1ODJiOGRdO2lmKGRlbGV0ZSBfMHg1NDRkMWVbJ3RzJ11bXzB4NTgyYjhkXSxfMHg0YjU0OTgpe2xldCBfMHgyNTgzMWU9XzB4NDQ0NWEwKF8weDRiNTQ5OCxfMHgxNDczOGYoKSk7XzB4NTQ0MWQzKF8weDNiZjE5YShfMHgzZTFlZWYoMHgxN2EpLF8weDEyNDExYSxfMHgzZWVlNmEoKSxfMHg0MjRiZTIsW18weDI1ODMxZV0sXzB4NTgyYjhkKSk7fX0sXzB4MTdiM2M2PV8weDNhYTllZD0+XzB4NWY0Mjg2PT57dmFyIF8weDJjOGIyOD1fMHgyNjc1ZGU7dHJ5e18weGM2YjRjYyhfMHg1ZjQyODYpLF8weDNhYTllZChfMHg1ZjQyODYpO31maW5hbGx5e18weGRiYzFjMVsnY29uc29sZSddW18weDJjOGIyOCgweDE3YSldPV8weDNhYTllZDt9fSxfMHg0NWVmNTk9XzB4NTUzMTVhPT5fMHg1OTdlZmM9Pnt2YXIgXzB4NDdhYWY1PV8weDI2NzVkZTt0cnl7bGV0IFtfMHg1ZjU1OWMsXzB4MTljNTA2XT1fMHg1OTdlZmNbJ3NwbGl0J10oJzpsb2dQb2ludElkOicpO18weDQwNDQyYyhfMHgxOWM1MDYsXzB4NWY1NTljKSxfMHg1NTMxNWEoXzB4NWY1NTljKTt9ZmluYWxseXtfMHhkYmMxYzFbXzB4NDdhYWY1KDB4MTNhKV1bXzB4NDdhYWY1KDB4MWU2KV09XzB4NTUzMTVhO319O18weGRiYzFjMVtfMHgyNjc1ZGUoMHgxZGQpXT17J2NvbnNvbGVMb2cnOihfMHg1NDg1MTUsXzB4MTNhZGYxKT0+e3ZhciBfMHg0NGFlMmI9XzB4MjY3NWRlO18weGRiYzFjMVtfMHg0NGFlMmIoMHgxM2EpXVtfMHg0NGFlMmIoMHgxNmUpXVtfMHg0NGFlMmIoMHgxYjQpXSE9PV8weDQ0YWUyYigweDEwNykmJl8weDU0NDFkMyhfMHgzYmYxOWEoXzB4NDRhZTJiKDB4MTZlKSxfMHg1NDg1MTUsXzB4M2VlZTZhKCksXzB4NDI0YmUyLF8weDEzYWRmMSkpO30sJ2NvbnNvbGVUcmFjZSc6KF8weGM0NzU2OSxfMHgyMjEwZTApPT57dmFyIF8weDM1MGZkND1fMHgyNjc1ZGU7XzB4ZGJjMWMxW18weDM1MGZkNCgweDEzYSldW18weDM1MGZkNCgweDE2ZSldW18weDM1MGZkNCgweDFiNCldIT09XzB4MzUwZmQ0KDB4MTBkKSYmXzB4NTQ0MWQzKF8weDNiZjE5YShfMHgzNTBmZDQoMHgxY2EpLF8weGM0NzU2OSxfMHgzZWVlNmEoKSxfMHg0MjRiZTIsXzB4MjIxMGUwKSk7fSwnY29uc29sZVRpbWUnOigpPT57dmFyIF8weDI3MzQ3ZD1fMHgyNjc1ZGU7XzB4ZGJjMWMxW18weDI3MzQ3ZCgweDEzYSldW18weDI3MzQ3ZCgweDE3YSldPV8weDE3YjNjNihfMHhkYmMxYzFbJ2NvbnNvbGUnXVsndGltZSddKTt9LCdjb25zb2xlVGltZUVuZCc6KCk9Pnt2YXIgXzB4N2U1N2I5PV8weDI2NzVkZTtfMHhkYmMxYzFbXzB4N2U1N2I5KDB4MTNhKV1bXzB4N2U1N2I5KDB4MWU2KV09XzB4NDVlZjU5KF8weGRiYzFjMVtfMHg3ZTU3YjkoMHgxM2EpXVtfMHg3ZTU3YjkoMHgxZTYpXSk7fSwnYXV0b0xvZyc6KF8weDI3NjE2NCxfMHgzZTA3MWEpPT57XzB4NTQ0MWQzKF8weDNiZjE5YSgnbG9nJyxfMHgzZTA3MWEsXzB4M2VlZTZhKCksXzB4NDI0YmUyLFtfMHgyNzYxNjRdKSk7fSwnYXV0b1RyYWNlJzooXzB4MTc0MjMzLF8weDVkY2IxMSk9Pnt2YXIgXzB4MzJmMDdlPV8weDI2NzVkZTtfMHg1NDQxZDMoXzB4M2JmMTlhKF8weDMyZjA3ZSgweDFjYSksXzB4NWRjYjExLF8weDNlZWU2YSgpLF8weDQyNGJlMixbXzB4MTc0MjMzXSkpO30sJ2F1dG9UaW1lJzooXzB4MWViNDBhLF8weDM3MmVkOCxfMHhkODhjNGMpPT57XzB4YzZiNGNjKF8weGQ4OGM0Yyk7fSwnYXV0b1RpbWVFbmQnOihfMHg0YTNmY2MsXzB4MTcxMDJkLF8weDQ3ZDIyYyk9PntfMHg0MDQ0MmMoXzB4MTcxMDJkLF8weDQ3ZDIyYyk7fX07bGV0IF8weDU0NDFkMz1WKF8weGRiYzFjMSxfMHg0ZjIxZTYsXzB4NWNiNWEyLF8weDU1ZmUzNCxfMHg0NDA0MmMpLF8weDQyNGJlMj1fMHhkYmMxYzFbXzB4MjY3NWRlKDB4MTU0KV07Y2xhc3MgXzB4MjVkMTM4e2NvbnN0cnVjdG9yKCl7dmFyIF8weDEyN2ZhOT1fMHgyNjc1ZGU7dGhpc1tfMHgxMjdmYTkoMHgxZDIpXT0vXig/ISg/OmRvfGlmfGlufGZvcnxsZXR8bmV3fHRyeXx2YXJ8Y2FzZXxlbHNlfGVudW18ZXZhbHxmYWxzZXxudWxsfHRoaXN8dHJ1ZXx2b2lkfHdpdGh8YnJlYWt8Y2F0Y2h8Y2xhc3N8Y29uc3R8c3VwZXJ8dGhyb3d8d2hpbGV8eWllbGR8ZGVsZXRlfGV4cG9ydHxpbXBvcnR8cHVibGljfHJldHVybnxzdGF0aWN8c3dpdGNofHR5cGVvZnxkZWZhdWx0fGV4dGVuZHN8ZmluYWxseXxwYWNrYWdlfHByaXZhdGV8Y29udGludWV8ZGVidWdnZXJ8ZnVuY3Rpb258YXJndW1lbnRzfGludGVyZmFjZXxwcm90ZWN0ZWR8aW1wbGVtZW50c3xpbnN0YW5jZW9mKSQpW18kYS16QS1aXFxcXHhBMC1cXFxcdUZGRkZdW18kYS16QS1aMC05XFxcXHhBMC1cXFxcdUZGRkZdKiQvLHRoaXNbXzB4MTI3ZmE5KDB4MWFhKV09L14oMHxbMS05XVswLTldKikkLyx0aGlzW18weDEyN2ZhOSgweDEzMyldPS8nKFteXFxcXFxcXFwnXXxcXFxcXFxcXCcpKicvLHRoaXNbXzB4MTI3ZmE5KDB4MWNiKV09XzB4ZGJjMWMxWyd1bmRlZmluZWQnXSx0aGlzWydfSFRNTEFsbENvbGxlY3Rpb24nXT1fMHhkYmMxYzFbXzB4MTI3ZmE5KDB4MTRlKV0sdGhpc1tfMHgxMjdmYTkoMHgxM2YpXT1PYmplY3RbXzB4MTI3ZmE5KDB4MWIyKV0sdGhpc1tfMHgxMjdmYTkoMHgxMjUpXT1PYmplY3RbXzB4MTI3ZmE5KDB4MTg3KV0sdGhpc1tfMHgxMjdmYTkoMHgxOGQpXT1fMHhkYmMxYzFbXzB4MTI3ZmE5KDB4MWUyKV0sdGhpc1snX3JlZ0V4cFRvU3RyaW5nJ109UmVnRXhwW18weDEyN2ZhOSgweDE4MyldWyd0b1N0cmluZyddLHRoaXNbJ19kYXRlVG9TdHJpbmcnXT1EYXRlW18weDEyN2ZhOSgweDE4MyldW18weDEyN2ZhOSgweDExYildO31bXzB4MjY3NWRlKDB4MTA2KV0oXzB4MmI3YWVkLF8weDUzMGQ4YixfMHgzOGZiYzQsXzB4M2VlMDg0KXt2YXIgXzB4NGMxY2Q0PV8weDI2NzVkZSxfMHg1Nzc4YmU9dGhpcyxfMHgzNjUzN2E9XzB4MzhmYmM0W18weDRjMWNkNCgweDE2OSldO2Z1bmN0aW9uIF8weDViNzU4NyhfMHgxM2Y0ZGMsXzB4YmJjNzdkLF8weDVhODM1Myl7dmFyIF8weDNmZDQ4Nj1fMHg0YzFjZDQ7XzB4YmJjNzdkW18weDNmZDQ4NigweDEyYSldPV8weDNmZDQ4NigweDFiYiksXzB4YmJjNzdkWydlcnJvciddPV8weDEzZjRkY1tfMHgzZmQ0ODYoMHgxNzgpXSxfMHgyMmQzNDQ9XzB4NWE4MzUzW18weDNmZDQ4NigweDFhNCldW18weDNmZDQ4NigweDEzYyldLF8weDVhODM1M1tfMHgzZmQ0ODYoMHgxYTQpXVtfMHgzZmQ0ODYoMHgxM2MpXT1fMHhiYmM3N2QsXzB4NTc3OGJlW18weDNmZDQ4NigweDExNyldKF8weGJiYzc3ZCxfMHg1YTgzNTMpO31pZihfMHg1MzBkOGImJl8weDUzMGQ4YltfMHg0YzFjZDQoMHgxYTcpXSlfMHg1Yjc1ODcoXzB4NTMwZDhiLF8weDJiN2FlZCxfMHgzOGZiYzQpO2Vsc2UgdHJ5e18weDM4ZmJjNFtfMHg0YzFjZDQoMHgxYjgpXSsrLF8weDM4ZmJjNFtfMHg0YzFjZDQoMHgxNjkpXSYmXzB4MzhmYmM0WydhdXRvRXhwYW5kUHJldmlvdXNPYmplY3RzJ11bXzB4NGMxY2Q0KDB4MTYyKV0oXzB4NTMwZDhiKTt2YXIgXzB4MjgwYmVjLF8weDUyODZkNyxfMHg1ZDNiYTEsXzB4NDI2N2JiLF8weDI5NWRiYz1bXSxfMHgzOWYyNTU9W10sXzB4NDRmMmIyLF8weDNkNGZlYz10aGlzW18weDRjMWNkNCgweDE5NildKF8weDUzMGQ4YiksXzB4NDIwM2Y1PV8weDNkNGZlYz09PV8weDRjMWNkNCgweDEyMiksXzB4MzY0NTQ2PSEweDEsXzB4NWMzOGM1PV8weDNkNGZlYz09PV8weDRjMWNkNCgweDFhNSksXzB4NDI2MzYyPXRoaXNbJ19pc1ByaW1pdGl2ZVR5cGUnXShfMHgzZDRmZWMpLF8weDNjZWM2ZD10aGlzW18weDRjMWNkNCgweDE5MyldKF8weDNkNGZlYyksXzB4MjgwNTI2PV8weDQyNjM2Mnx8XzB4M2NlYzZkLF8weDJhMmM0ZT17fSxfMHg0MjcwMDk9MHgwLF8weDQ0NjQ0Zj0hMHgxLF8weDIyZDM0NCxfMHgzYTkyODY9L14oKFsxLTldezF9WzAtOV0qKXwwKSQvO2lmKF8weDM4ZmJjNFtfMHg0YzFjZDQoMHgxNTUpXSl7aWYoXzB4NDIwM2Y1KXtpZihfMHg1Mjg2ZDc9XzB4NTMwZDhiW18weDRjMWNkNCgweDFjNCldLF8weDUyODZkNz5fMHgzOGZiYzRbJ2VsZW1lbnRzJ10pe2ZvcihfMHg1ZDNiYTE9MHgwLF8weDQyNjdiYj1fMHgzOGZiYzRbJ2VsZW1lbnRzJ10sXzB4MjgwYmVjPV8weDVkM2JhMTtfMHgyODBiZWM8XzB4NDI2N2JiO18weDI4MGJlYysrKV8weDM5ZjI1NVtfMHg0YzFjZDQoMHgxNjIpXShfMHg1Nzc4YmVbJ19hZGRQcm9wZXJ0eSddKF8weDI5NWRiYyxfMHg1MzBkOGIsXzB4M2Q0ZmVjLF8weDI4MGJlYyxfMHgzOGZiYzQpKTtfMHgyYjdhZWRbXzB4NGMxY2Q0KDB4MWM3KV09ITB4MDt9ZWxzZXtmb3IoXzB4NWQzYmExPTB4MCxfMHg0MjY3YmI9XzB4NTI4NmQ3LF8weDI4MGJlYz1fMHg1ZDNiYTE7XzB4MjgwYmVjPF8weDQyNjdiYjtfMHgyODBiZWMrKylfMHgzOWYyNTVbXzB4NGMxY2Q0KDB4MTYyKV0oXzB4NTc3OGJlW18weDRjMWNkNCgweDE2NSldKF8weDI5NWRiYyxfMHg1MzBkOGIsXzB4M2Q0ZmVjLF8weDI4MGJlYyxfMHgzOGZiYzQpKTt9XzB4MzhmYmM0WydhdXRvRXhwYW5kUHJvcGVydHlDb3VudCddKz1fMHgzOWYyNTVbXzB4NGMxY2Q0KDB4MWM0KV07fWlmKCEoXzB4M2Q0ZmVjPT09XzB4NGMxY2Q0KDB4MWJhKXx8XzB4M2Q0ZmVjPT09XzB4NGMxY2Q0KDB4MWQ4KSkmJiFfMHg0MjYzNjImJl8weDNkNGZlYyE9PV8weDRjMWNkNCgweDFjZCkmJl8weDNkNGZlYyE9PV8weDRjMWNkNCgweDE4YSkmJl8weDNkNGZlYyE9PSdiaWdpbnQnKXt2YXIgXzB4MjY0NTYyPV8weDNlZTA4NFtfMHg0YzFjZDQoMHgxNmMpXXx8XzB4MzhmYmM0W18weDRjMWNkNCgweDE2YyldO2lmKHRoaXNbXzB4NGMxY2Q0KDB4MWE2KV0oXzB4NTMwZDhiKT8oXzB4MjgwYmVjPTB4MCxfMHg1MzBkOGJbJ2ZvckVhY2gnXShmdW5jdGlvbihfMHgyZDlkMzQpe3ZhciBfMHgzNmM5Njg9XzB4NGMxY2Q0O2lmKF8weDQyNzAwOSsrLF8weDM4ZmJjNFtfMHgzNmM5NjgoMHgxM2UpXSsrLF8weDQyNzAwOT5fMHgyNjQ1NjIpe18weDQ0NjQ0Zj0hMHgwO3JldHVybjt9aWYoIV8weDM4ZmJjNFtfMHgzNmM5NjgoMHgxMWEpXSYmXzB4MzhmYmM0W18weDM2Yzk2OCgweDE2OSldJiZfMHgzOGZiYzRbXzB4MzZjOTY4KDB4MTNlKV0+XzB4MzhmYmM0W18weDM2Yzk2OCgweDE3NyldKXtfMHg0NDY0NGY9ITB4MDtyZXR1cm47fV8weDM5ZjI1NVtfMHgzNmM5NjgoMHgxNjIpXShfMHg1Nzc4YmVbXzB4MzZjOTY4KDB4MTY1KV0oXzB4Mjk1ZGJjLF8weDUzMGQ4YiwnU2V0JyxfMHgyODBiZWMrKyxfMHgzOGZiYzQsZnVuY3Rpb24oXzB4NDQ5NmVmKXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gXzB4NDQ5NmVmO307fShfMHgyZDlkMzQpKSk7fSkpOnRoaXNbXzB4NGMxY2Q0KDB4MTIxKV0oXzB4NTMwZDhiKSYmXzB4NTMwZDhiW18weDRjMWNkNCgweDFjOCldKGZ1bmN0aW9uKF8weDIxYTBjMixfMHg1N2UzZjMpe3ZhciBfMHgzODk5Mzc9XzB4NGMxY2Q0O2lmKF8weDQyNzAwOSsrLF8weDM4ZmJjNFtfMHgzODk5MzcoMHgxM2UpXSsrLF8weDQyNzAwOT5fMHgyNjQ1NjIpe18weDQ0NjQ0Zj0hMHgwO3JldHVybjt9aWYoIV8weDM4ZmJjNFtfMHgzODk5MzcoMHgxMWEpXSYmXzB4MzhmYmM0W18weDM4OTkzNygweDE2OSldJiZfMHgzOGZiYzRbXzB4Mzg5OTM3KDB4MTNlKV0+XzB4MzhmYmM0W18weDM4OTkzNygweDE3NyldKXtfMHg0NDY0NGY9ITB4MDtyZXR1cm47fXZhciBfMHg1MDdiNDU9XzB4NTdlM2YzW18weDM4OTkzNygweDExYildKCk7XzB4NTA3YjQ1WydsZW5ndGgnXT4weDY0JiYoXzB4NTA3YjQ1PV8weDUwN2I0NVtfMHgzODk5MzcoMHgxYzIpXSgweDAsMHg2NCkrXzB4Mzg5OTM3KDB4MTU5KSksXzB4MzlmMjU1W18weDM4OTkzNygweDE2MildKF8weDU3NzhiZVsnX2FkZFByb3BlcnR5J10oXzB4Mjk1ZGJjLF8weDUzMGQ4YixfMHgzODk5MzcoMHgxNmIpLF8weDUwN2I0NSxfMHgzOGZiYzQsZnVuY3Rpb24oXzB4MzI3YTliKXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gXzB4MzI3YTliO307fShfMHgyMWEwYzIpKSk7fSksIV8weDM2NDU0Nil7dHJ5e2ZvcihfMHg0NGYyYjIgaW4gXzB4NTMwZDhiKWlmKCEoXzB4NDIwM2Y1JiZfMHgzYTkyODZbXzB4NGMxY2Q0KDB4MTVmKV0oXzB4NDRmMmIyKSkmJiF0aGlzW18weDRjMWNkNCgweDExZCldKF8weDUzMGQ4YixfMHg0NGYyYjIsXzB4MzhmYmM0KSl7aWYoXzB4NDI3MDA5KyssXzB4MzhmYmM0W18weDRjMWNkNCgweDEzZSldKyssXzB4NDI3MDA5Pl8weDI2NDU2Mil7XzB4NDQ2NDRmPSEweDA7YnJlYWs7fWlmKCFfMHgzOGZiYzRbXzB4NGMxY2Q0KDB4MTFhKV0mJl8weDM4ZmJjNFtfMHg0YzFjZDQoMHgxNjkpXSYmXzB4MzhmYmM0W18weDRjMWNkNCgweDEzZSldPl8weDM4ZmJjNFtfMHg0YzFjZDQoMHgxNzcpXSl7XzB4NDQ2NDRmPSEweDA7YnJlYWs7fV8weDM5ZjI1NVtfMHg0YzFjZDQoMHgxNjIpXShfMHg1Nzc4YmVbXzB4NGMxY2Q0KDB4MTFmKV0oXzB4Mjk1ZGJjLF8weDJhMmM0ZSxfMHg1MzBkOGIsXzB4M2Q0ZmVjLF8weDQ0ZjJiMixfMHgzOGZiYzQpKTt9fWNhdGNoe31pZihfMHgyYTJjNGVbXzB4NGMxY2Q0KDB4MWQ1KV09ITB4MCxfMHg1YzM4YzUmJihfMHgyYTJjNGVbXzB4NGMxY2Q0KDB4MWQ3KV09ITB4MCksIV8weDQ0NjQ0Zil7dmFyIF8weDRmZWY5YT1bXVtfMHg0YzFjZDQoMHgxNTMpXSh0aGlzW18weDRjMWNkNCgweDEyNSldKF8weDUzMGQ4YikpW18weDRjMWNkNCgweDE1MyldKHRoaXNbXzB4NGMxY2Q0KDB4MTFjKV0oXzB4NTMwZDhiKSk7Zm9yKF8weDI4MGJlYz0weDAsXzB4NTI4NmQ3PV8weDRmZWY5YVsnbGVuZ3RoJ107XzB4MjgwYmVjPF8weDUyODZkNztfMHgyODBiZWMrKylpZihfMHg0NGYyYjI9XzB4NGZlZjlhW18weDI4MGJlY10sIShfMHg0MjAzZjUmJl8weDNhOTI4NltfMHg0YzFjZDQoMHgxNWYpXShfMHg0NGYyYjJbXzB4NGMxY2Q0KDB4MTFiKV0oKSkpJiYhdGhpc1snX2JsYWNrbGlzdGVkUHJvcGVydHknXShfMHg1MzBkOGIsXzB4NDRmMmIyLF8weDM4ZmJjNCkmJiFfMHgyYTJjNGVbXzB4NGMxY2Q0KDB4MWQzKStfMHg0NGYyYjJbXzB4NGMxY2Q0KDB4MTFiKV0oKV0pe2lmKF8weDQyNzAwOSsrLF8weDM4ZmJjNFsnYXV0b0V4cGFuZFByb3BlcnR5Q291bnQnXSsrLF8weDQyNzAwOT5fMHgyNjQ1NjIpe18weDQ0NjQ0Zj0hMHgwO2JyZWFrO31pZighXzB4MzhmYmM0W18weDRjMWNkNCgweDExYSldJiZfMHgzOGZiYzRbXzB4NGMxY2Q0KDB4MTY5KV0mJl8weDM4ZmJjNFsnYXV0b0V4cGFuZFByb3BlcnR5Q291bnQnXT5fMHgzOGZiYzRbXzB4NGMxY2Q0KDB4MTc3KV0pe18weDQ0NjQ0Zj0hMHgwO2JyZWFrO31fMHgzOWYyNTVbXzB4NGMxY2Q0KDB4MTYyKV0oXzB4NTc3OGJlW18weDRjMWNkNCgweDExZildKF8weDI5NWRiYyxfMHgyYTJjNGUsXzB4NTMwZDhiLF8weDNkNGZlYyxfMHg0NGYyYjIsXzB4MzhmYmM0KSk7fX19fX1pZihfMHgyYjdhZWRbXzB4NGMxY2Q0KDB4MTJhKV09XzB4M2Q0ZmVjLF8weDI4MDUyNj8oXzB4MmI3YWVkW18weDRjMWNkNCgweDE5YSldPV8weDUzMGQ4YltfMHg0YzFjZDQoMHgxYWMpXSgpLHRoaXNbXzB4NGMxY2Q0KDB4MTk4KV0oXzB4M2Q0ZmVjLF8weDJiN2FlZCxfMHgzOGZiYzQsXzB4M2VlMDg0KSk6XzB4M2Q0ZmVjPT09J2RhdGUnP18weDJiN2FlZFtfMHg0YzFjZDQoMHgxOWEpXT10aGlzWydfZGF0ZVRvU3RyaW5nJ11bXzB4NGMxY2Q0KDB4MTkxKV0oXzB4NTMwZDhiKTpfMHgzZDRmZWM9PT1fMHg0YzFjZDQoMHgxMTApP18weDJiN2FlZFsndmFsdWUnXT10aGlzWydfcmVnRXhwVG9TdHJpbmcnXVtfMHg0YzFjZDQoMHgxOTEpXShfMHg1MzBkOGIpOl8weDNkNGZlYz09PV8weDRjMWNkNCgweDE1YykmJnRoaXNbJ19TeW1ib2wnXT9fMHgyYjdhZWRbJ3ZhbHVlJ109dGhpc1tfMHg0YzFjZDQoMHgxOGQpXVtfMHg0YzFjZDQoMHgxODMpXVtfMHg0YzFjZDQoMHgxMWIpXVsnY2FsbCddKF8weDUzMGQ4Yik6IV8weDM4ZmJjNFtfMHg0YzFjZDQoMHgxNTUpXSYmIShfMHgzZDRmZWM9PT1fMHg0YzFjZDQoMHgxYmEpfHxfMHgzZDRmZWM9PT1fMHg0YzFjZDQoMHgxZDgpKSYmKGRlbGV0ZSBfMHgyYjdhZWRbXzB4NGMxY2Q0KDB4MTlhKV0sXzB4MmI3YWVkWydjYXBwZWQnXT0hMHgwKSxfMHg0NDY0NGYmJihfMHgyYjdhZWRbXzB4NGMxY2Q0KDB4MTgxKV09ITB4MCksXzB4MjJkMzQ0PV8weDM4ZmJjNFtfMHg0YzFjZDQoMHgxYTQpXVtfMHg0YzFjZDQoMHgxM2MpXSxfMHgzOGZiYzRbJ25vZGUnXVtfMHg0YzFjZDQoMHgxM2MpXT1fMHgyYjdhZWQsdGhpc1tfMHg0YzFjZDQoMHgxMTcpXShfMHgyYjdhZWQsXzB4MzhmYmM0KSxfMHgzOWYyNTVbXzB4NGMxY2Q0KDB4MWM0KV0pe2ZvcihfMHgyODBiZWM9MHgwLF8weDUyODZkNz1fMHgzOWYyNTVbXzB4NGMxY2Q0KDB4MWM0KV07XzB4MjgwYmVjPF8weDUyODZkNztfMHgyODBiZWMrKylfMHgzOWYyNTVbXzB4MjgwYmVjXShfMHgyODBiZWMpO31fMHgyOTVkYmNbXzB4NGMxY2Q0KDB4MWM0KV0mJihfMHgyYjdhZWRbJ3Byb3BzJ109XzB4Mjk1ZGJjKTt9Y2F0Y2goXzB4MjFlNzY3KXtfMHg1Yjc1ODcoXzB4MjFlNzY3LF8weDJiN2FlZCxfMHgzOGZiYzQpO31yZXR1cm4gdGhpc1tfMHg0YzFjZDQoMHgxNDcpXShfMHg1MzBkOGIsXzB4MmI3YWVkKSx0aGlzWydfdHJlZU5vZGVQcm9wZXJ0aWVzQWZ0ZXJGdWxsVmFsdWUnXShfMHgyYjdhZWQsXzB4MzhmYmM0KSxfMHgzOGZiYzRbXzB4NGMxY2Q0KDB4MWE0KV1bJ2N1cnJlbnQnXT1fMHgyMmQzNDQsXzB4MzhmYmM0WydsZXZlbCddLS0sXzB4MzhmYmM0W18weDRjMWNkNCgweDE2OSldPV8weDM2NTM3YSxfMHgzOGZiYzRbXzB4NGMxY2Q0KDB4MTY5KV0mJl8weDM4ZmJjNFtfMHg0YzFjZDQoMHgxNmYpXVsncG9wJ10oKSxfMHgyYjdhZWQ7fVtfMHgyNjc1ZGUoMHgxMWMpXShfMHgzMmFiNzApe3ZhciBfMHgzYjEzYzQ9XzB4MjY3NWRlO3JldHVybiBPYmplY3RbJ2dldE93blByb3BlcnR5U3ltYm9scyddP09iamVjdFtfMHgzYjEzYzQoMHgxZTQpXShfMHgzMmFiNzApOltdO31bXzB4MjY3NWRlKDB4MWE2KV0oXzB4NDRlMmY1KXt2YXIgXzB4NDYwNDYyPV8weDI2NzVkZTtyZXR1cm4hIShfMHg0NGUyZjUmJl8weGRiYzFjMVtfMHg0NjA0NjIoMHgxOWIpXSYmdGhpc1tfMHg0NjA0NjIoMHgxNGMpXShfMHg0NGUyZjUpPT09XzB4NDYwNDYyKDB4MTRmKSYmXzB4NDRlMmY1W18weDQ2MDQ2MigweDFjOCldKTt9W18weDI2NzVkZSgweDExZCldKF8weDIwZDQ0OCxfMHgyMGYxODEsXzB4NTBkNzYwKXt2YXIgXzB4MzY0N2MyPV8weDI2NzVkZTtyZXR1cm4gXzB4NTBkNzYwW18weDM2NDdjMigweDEzZCldP3R5cGVvZiBfMHgyMGQ0NDhbXzB4MjBmMTgxXT09XzB4MzY0N2MyKDB4MWE1KTohMHgxO31bXzB4MjY3NWRlKDB4MTk2KV0oXzB4NTdjMGRjKXt2YXIgXzB4YzYxMDljPV8weDI2NzVkZSxfMHgzOTI2OTc9Jyc7cmV0dXJuIF8weDM5MjY5Nz10eXBlb2YgXzB4NTdjMGRjLF8weDM5MjY5Nz09PV8weGM2MTA5YygweDE0NSk/dGhpc1tfMHhjNjEwOWMoMHgxNGMpXShfMHg1N2MwZGMpPT09XzB4YzYxMDljKDB4MWFiKT9fMHgzOTI2OTc9XzB4YzYxMDljKDB4MTIyKTp0aGlzW18weGM2MTA5YygweDE0YyldKF8weDU3YzBkYyk9PT1fMHhjNjEwOWMoMHgxMzIpP18weDM5MjY5Nz1fMHhjNjEwOWMoMHgxMzQpOl8weDU3YzBkYz09PW51bGw/XzB4MzkyNjk3PV8weGM2MTA5YygweDFiYSk6XzB4NTdjMGRjW18weGM2MTA5YygweDE3YildJiYoXzB4MzkyNjk3PV8weDU3YzBkY1tfMHhjNjEwOWMoMHgxN2IpXVtfMHhjNjEwOWMoMHgxYjQpXXx8XzB4MzkyNjk3KTpfMHgzOTI2OTc9PT1fMHhjNjEwOWMoMHgxZDgpJiZ0aGlzWydfSFRNTEFsbENvbGxlY3Rpb24nXSYmXzB4NTdjMGRjIGluc3RhbmNlb2YgdGhpc1tfMHhjNjEwOWMoMHgxMGUpXSYmKF8weDM5MjY5Nz1fMHhjNjEwOWMoMHgxNGUpKSxfMHgzOTI2OTc7fVtfMHgyNjc1ZGUoMHgxNGMpXShfMHg1M2QxNzYpe3JldHVybiBPYmplY3RbJ3Byb3RvdHlwZSddWyd0b1N0cmluZyddWydjYWxsJ10oXzB4NTNkMTc2KTt9W18weDI2NzVkZSgweDEyZCldKF8weDJmZjk3NCl7dmFyIF8weDMwMmFjOT1fMHgyNjc1ZGU7cmV0dXJuIF8weDJmZjk3ND09PV8weDMwMmFjOSgweDExMSl8fF8weDJmZjk3ND09PSdzdHJpbmcnfHxfMHgyZmY5NzQ9PT1fMHgzMDJhYzkoMHgxNzMpO31bXzB4MjY3NWRlKDB4MTkzKV0oXzB4MzhiMWE4KXt2YXIgXzB4MjE0NDQ4PV8weDI2NzVkZTtyZXR1cm4gXzB4MzhiMWE4PT09J0Jvb2xlYW4nfHxfMHgzOGIxYTg9PT1fMHgyMTQ0NDgoMHgxY2QpfHxfMHgzOGIxYTg9PT1fMHgyMTQ0NDgoMHgxZGIpO31bXzB4MjY3NWRlKDB4MTY1KV0oXzB4MmIzN2E2LF8weGViY2U3NyxfMHgxNjk4NGMsXzB4MzRhMjVhLF8weGEzOTVmZSxfMHgxNjFkMWMpe3ZhciBfMHg1YWM0MzE9dGhpcztyZXR1cm4gZnVuY3Rpb24oXzB4OTliNmEzKXt2YXIgXzB4NGRmMWVmPV8weDU3OWIsXzB4MmY1ZmQzPV8weGEzOTVmZVtfMHg0ZGYxZWYoMHgxYTQpXVtfMHg0ZGYxZWYoMHgxM2MpXSxfMHg0NTIyOWM9XzB4YTM5NWZlW18weDRkZjFlZigweDFhNCldWydpbmRleCddLF8weDE4NzkyMT1fMHhhMzk1ZmVbJ25vZGUnXVtfMHg0ZGYxZWYoMHgxMzUpXTtfMHhhMzk1ZmVbXzB4NGRmMWVmKDB4MWE0KV1bXzB4NGRmMWVmKDB4MTM1KV09XzB4MmY1ZmQzLF8weGEzOTVmZVtfMHg0ZGYxZWYoMHgxYTQpXVtfMHg0ZGYxZWYoMHgxMzYpXT10eXBlb2YgXzB4MzRhMjVhPT1fMHg0ZGYxZWYoMHgxNzMpP18weDM0YTI1YTpfMHg5OWI2YTMsXzB4MmIzN2E2W18weDRkZjFlZigweDE2MildKF8weDVhYzQzMVtfMHg0ZGYxZWYoMHgxOGMpXShfMHhlYmNlNzcsXzB4MTY5ODRjLF8weDM0YTI1YSxfMHhhMzk1ZmUsXzB4MTYxZDFjKSksXzB4YTM5NWZlW18weDRkZjFlZigweDFhNCldW18weDRkZjFlZigweDEzNSldPV8weDE4NzkyMSxfMHhhMzk1ZmVbJ25vZGUnXVsnaW5kZXgnXT1fMHg0NTIyOWM7fTt9W18weDI2NzVkZSgweDExZildKF8weDcxNTJiMyxfMHg0MTgzYzMsXzB4NjRhOTJiLF8weDNmNDUxMixfMHhkM2Q2NzQsXzB4NWE2YTAyLF8weDE3MjBiZil7dmFyIF8weGMwOWRhOD1fMHgyNjc1ZGUsXzB4MzhlOGY3PXRoaXM7cmV0dXJuIF8weDQxODNjM1tfMHhjMDlkYTgoMHgxZDMpK18weGQzZDY3NFtfMHhjMDlkYTgoMHgxMWIpXSgpXT0hMHgwLGZ1bmN0aW9uKF8weDU1YmQ1NCl7dmFyIF8weDMzNzg2Mj1fMHhjMDlkYTgsXzB4MmMxZWU2PV8weDVhNmEwMltfMHgzMzc4NjIoMHgxYTQpXVsnY3VycmVudCddLF8weDNmYTIxMj1fMHg1YTZhMDJbJ25vZGUnXVtfMHgzMzc4NjIoMHgxMzYpXSxfMHg0ZDMyNDQ9XzB4NWE2YTAyW18weDMzNzg2MigweDFhNCldWydwYXJlbnQnXTtfMHg1YTZhMDJbXzB4MzM3ODYyKDB4MWE0KV1bXzB4MzM3ODYyKDB4MTM1KV09XzB4MmMxZWU2LF8weDVhNmEwMltfMHgzMzc4NjIoMHgxYTQpXVsnaW5kZXgnXT1fMHg1NWJkNTQsXzB4NzE1MmIzW18weDMzNzg2MigweDE2MildKF8weDM4ZThmN1tfMHgzMzc4NjIoMHgxOGMpXShfMHg2NGE5MmIsXzB4M2Y0NTEyLF8weGQzZDY3NCxfMHg1YTZhMDIsXzB4MTcyMGJmKSksXzB4NWE2YTAyWydub2RlJ11bJ3BhcmVudCddPV8weDRkMzI0NCxfMHg1YTZhMDJbJ25vZGUnXVtfMHgzMzc4NjIoMHgxMzYpXT1fMHgzZmEyMTI7fTt9W18weDI2NzVkZSgweDE4YyldKF8weDVkNzM0NSxfMHg1OTZlY2IsXzB4NTEzOTNhLF8weDNhYTk2ZSxfMHhlN2FjNyl7dmFyIF8weDIwMjM0Mj1fMHgyNjc1ZGUsXzB4MWVjMjM5PXRoaXM7XzB4ZTdhYzd8fChfMHhlN2FjNz1mdW5jdGlvbihfMHg0NTAwZGEsXzB4MzFiY2FkKXtyZXR1cm4gXzB4NDUwMGRhW18weDMxYmNhZF07fSk7dmFyIF8weDRkMmMwNT1fMHg1MTM5M2FbXzB4MjAyMzQyKDB4MTFiKV0oKSxfMHgzYjI2YjQ9XzB4M2FhOTZlWydleHByZXNzaW9uc1RvRXZhbHVhdGUnXXx8e30sXzB4MzA4ZjJiPV8weDNhYTk2ZVsnZGVwdGgnXSxfMHgzMWQzOTI9XzB4M2FhOTZlWydpc0V4cHJlc3Npb25Ub0V2YWx1YXRlJ107dHJ5e3ZhciBfMHgxZWI2Mjc9dGhpc1tfMHgyMDIzNDIoMHgxMjEpXShfMHg1ZDczNDUpLF8weDFlODJmYj1fMHg0ZDJjMDU7XzB4MWViNjI3JiZfMHgxZTgyZmJbMHgwXT09PSdcXFxceDI3JyYmKF8weDFlODJmYj1fMHgxZTgyZmJbJ3N1YnN0ciddKDB4MSxfMHgxZTgyZmJbXzB4MjAyMzQyKDB4MWM0KV0tMHgyKSk7dmFyIF8weDUyNDU1Nz1fMHgzYWE5NmVbXzB4MjAyMzQyKDB4MTRkKV09XzB4M2IyNmI0W18weDIwMjM0MigweDFkMykrXzB4MWU4MmZiXTtfMHg1MjQ1NTcmJihfMHgzYWE5NmVbXzB4MjAyMzQyKDB4MTU1KV09XzB4M2FhOTZlWydkZXB0aCddKzB4MSksXzB4M2FhOTZlW18weDIwMjM0MigweDExYSldPSEhXzB4NTI0NTU3O3ZhciBfMHhlY2E3YzQ9dHlwZW9mIF8weDUxMzkzYT09XzB4MjAyMzQyKDB4MTVjKSxfMHgyMWU3MmM9eyduYW1lJzpfMHhlY2E3YzR8fF8weDFlYjYyNz9fMHg0ZDJjMDU6dGhpc1snX3Byb3BlcnR5TmFtZSddKF8weDRkMmMwNSl9O2lmKF8weGVjYTdjNCYmKF8weDIxZTcyY1tfMHgyMDIzNDIoMHgxNWMpXT0hMHgwKSwhKF8weDU5NmVjYj09PV8weDIwMjM0MigweDEyMil8fF8weDU5NmVjYj09PV8weDIwMjM0MigweDE2OCkpKXt2YXIgXzB4M2VhMDMzPXRoaXNbXzB4MjAyMzQyKDB4MTNmKV0oXzB4NWQ3MzQ1LF8weDUxMzkzYSk7aWYoXzB4M2VhMDMzJiYoXzB4M2VhMDMzW18weDIwMjM0MigweDE5ZCldJiYoXzB4MjFlNzJjW18weDIwMjM0MigweDE5NyldPSEweDApLF8weDNlYTAzM1tfMHgyMDIzNDIoMHgxOGUpXSYmIV8weDUyNDU1NyYmIV8weDNhYTk2ZVsncmVzb2x2ZUdldHRlcnMnXSkpcmV0dXJuIF8weDIxZTcyY1tfMHgyMDIzNDIoMHgxYjApXT0hMHgwLHRoaXNbXzB4MjAyMzQyKDB4MTcyKV0oXzB4MjFlNzJjLF8weDNhYTk2ZSksXzB4MjFlNzJjO312YXIgXzB4MTE4N2FmO3RyeXtfMHgxMTg3YWY9XzB4ZTdhYzcoXzB4NWQ3MzQ1LF8weDUxMzkzYSk7fWNhdGNoKF8weDNiMWY0ZSl7cmV0dXJuIF8weDIxZTcyYz17J25hbWUnOl8weDRkMmMwNSwndHlwZSc6XzB4MjAyMzQyKDB4MWJiKSwnZXJyb3InOl8weDNiMWY0ZVtfMHgyMDIzNDIoMHgxNzgpXX0sdGhpc1snX3Byb2Nlc3NUcmVlTm9kZVJlc3VsdCddKF8weDIxZTcyYyxfMHgzYWE5NmUpLF8weDIxZTcyYzt9dmFyIF8weDJkNTczNz10aGlzWydfdHlwZSddKF8weDExODdhZiksXzB4MjVjNmMwPXRoaXNbXzB4MjAyMzQyKDB4MTJkKV0oXzB4MmQ1NzM3KTtpZihfMHgyMWU3MmNbJ3R5cGUnXT1fMHgyZDU3MzcsXzB4MjVjNmMwKXRoaXNbJ19wcm9jZXNzVHJlZU5vZGVSZXN1bHQnXShfMHgyMWU3MmMsXzB4M2FhOTZlLF8weDExODdhZixmdW5jdGlvbigpe3ZhciBfMHg2OGZlODU9XzB4MjAyMzQyO18weDIxZTcyY1tfMHg2OGZlODUoMHgxOWEpXT1fMHgxMTg3YWZbXzB4NjhmZTg1KDB4MWFjKV0oKSwhXzB4NTI0NTU3JiZfMHgxZWMyMzlbXzB4NjhmZTg1KDB4MTk4KV0oXzB4MmQ1NzM3LF8weDIxZTcyYyxfMHgzYWE5NmUse30pO30pO2Vsc2V7dmFyIF8weDM0Yjg4Yz1fMHgzYWE5NmVbXzB4MjAyMzQyKDB4MTY5KV0mJl8weDNhYTk2ZVsnbGV2ZWwnXTxfMHgzYWE5NmVbJ2F1dG9FeHBhbmRNYXhEZXB0aCddJiZfMHgzYWE5NmVbJ2F1dG9FeHBhbmRQcmV2aW91c09iamVjdHMnXVtfMHgyMDIzNDIoMHgxODkpXShfMHgxMTg3YWYpPDB4MCYmXzB4MmQ1NzM3IT09J2Z1bmN0aW9uJyYmXzB4M2FhOTZlW18weDIwMjM0MigweDEzZSldPF8weDNhYTk2ZVtfMHgyMDIzNDIoMHgxNzcpXTtfMHgzNGI4OGN8fF8weDNhYTk2ZVsnbGV2ZWwnXTxfMHgzMDhmMmJ8fF8weDUyNDU1Nz8odGhpc1tfMHgyMDIzNDIoMHgxMDYpXShfMHgyMWU3MmMsXzB4MTE4N2FmLF8weDNhYTk2ZSxfMHg1MjQ1NTd8fHt9KSx0aGlzW18weDIwMjM0MigweDE0NyldKF8weDExODdhZixfMHgyMWU3MmMpKTp0aGlzW18weDIwMjM0MigweDE3MildKF8weDIxZTcyYyxfMHgzYWE5NmUsXzB4MTE4N2FmLGZ1bmN0aW9uKCl7dmFyIF8weDQ5NzI4Zj1fMHgyMDIzNDI7XzB4MmQ1NzM3PT09XzB4NDk3MjhmKDB4MWJhKXx8XzB4MmQ1NzM3PT09XzB4NDk3MjhmKDB4MWQ4KXx8KGRlbGV0ZSBfMHgyMWU3MmNbJ3ZhbHVlJ10sXzB4MjFlNzJjW18weDQ5NzI4ZigweDE3NildPSEweDApO30pO31yZXR1cm4gXzB4MjFlNzJjO31maW5hbGx5e18weDNhYTk2ZVtfMHgyMDIzNDIoMHgxNGQpXT1fMHgzYjI2YjQsXzB4M2FhOTZlW18weDIwMjM0MigweDE1NSldPV8weDMwOGYyYixfMHgzYWE5NmVbXzB4MjAyMzQyKDB4MTFhKV09XzB4MzFkMzkyO319W18weDI2NzVkZSgweDE5OCldKF8weDJiN2UwMSxfMHgxZWY0ODIsXzB4MWM4ODdlLF8weDI1OTkwNil7dmFyIF8weDFlNGY5Nj1fMHgyNjc1ZGUsXzB4NDFiYTIwPV8weDI1OTkwNltfMHgxZTRmOTYoMHgxNjQpXXx8XzB4MWM4ODdlW18weDFlNGY5NigweDE2NCldO2lmKChfMHgyYjdlMDE9PT0nc3RyaW5nJ3x8XzB4MmI3ZTAxPT09J1N0cmluZycpJiZfMHgxZWY0ODJbXzB4MWU0Zjk2KDB4MTlhKV0pe2xldCBfMHg0ZjMwN2M9XzB4MWVmNDgyW18weDFlNGY5NigweDE5YSldW18weDFlNGY5NigweDFjNCldO18weDFjODg3ZVtfMHgxZTRmOTYoMHgxN2YpXSs9XzB4NGYzMDdjLF8weDFjODg3ZVsnYWxsU3RyTGVuZ3RoJ10+XzB4MWM4ODdlW18weDFlNGY5NigweDFiNSldPyhfMHgxZWY0ODJbXzB4MWU0Zjk2KDB4MTc2KV09JycsZGVsZXRlIF8weDFlZjQ4MltfMHgxZTRmOTYoMHgxOWEpXSk6XzB4NGYzMDdjPl8weDQxYmEyMCYmKF8weDFlZjQ4MltfMHgxZTRmOTYoMHgxNzYpXT1fMHgxZWY0ODJbJ3ZhbHVlJ11bXzB4MWU0Zjk2KDB4MWVhKV0oMHgwLF8weDQxYmEyMCksZGVsZXRlIF8weDFlZjQ4MltfMHgxZTRmOTYoMHgxOWEpXSk7fX1bXzB4MjY3NWRlKDB4MTIxKV0oXzB4NGJlYjhmKXt2YXIgXzB4ZTM0YmUyPV8weDI2NzVkZTtyZXR1cm4hIShfMHg0YmViOGYmJl8weGRiYzFjMVtfMHhlMzRiZTIoMHgxNmIpXSYmdGhpc1snX29iamVjdFRvU3RyaW5nJ10oXzB4NGJlYjhmKT09PV8weGUzNGJlMigweDE1ZCkmJl8weDRiZWI4ZltfMHhlMzRiZTIoMHgxYzgpXSk7fVsnX3Byb3BlcnR5TmFtZSddKF8weDQyNTI1OCl7dmFyIF8weDVkNDZmOD1fMHgyNjc1ZGU7aWYoXzB4NDI1MjU4W18weDVkNDZmOCgweDEyOSldKC9eXFxcXGQrJC8pKXJldHVybiBfMHg0MjUyNTg7dmFyIF8weDkzMjg2Yzt0cnl7XzB4OTMyODZjPUpTT05bXzB4NWQ0NmY4KDB4MTcxKV0oJycrXzB4NDI1MjU4KTt9Y2F0Y2h7XzB4OTMyODZjPSdcXFxceDIyJyt0aGlzW18weDVkNDZmOCgweDE0YyldKF8weDQyNTI1OCkrJ1xcXFx4MjInO31yZXR1cm4gXzB4OTMyODZjWydtYXRjaCddKC9eXFxcIihbYS16QS1aX11bYS16QS1aXzAtOV0qKVxcXCIkLyk/XzB4OTMyODZjPV8weDkzMjg2Y1tfMHg1ZDQ2ZjgoMHgxZWEpXSgweDEsXzB4OTMyODZjW18weDVkNDZmOCgweDFjNCldLTB4Mik6XzB4OTMyODZjPV8weDkzMjg2Y1sncmVwbGFjZSddKC8nL2csJ1xcXFx4NWNcXFxceDI3JylbXzB4NWQ0NmY4KDB4MTQxKV0oL1xcXFxcXFxcXFxcIi9nLCdcXFxceDIyJylbXzB4NWQ0NmY4KDB4MTQxKV0oLyheXFxcInxcXFwiJCkvZywnXFxcXHgyNycpLF8weDkzMjg2Yzt9W18weDI2NzVkZSgweDE3MildKF8weDI4MzU1OSxfMHgyOTI3YTQsXzB4MjUzYzAwLF8weDViM2MxNCl7dmFyIF8weDI4N2U3Yj1fMHgyNjc1ZGU7dGhpc1tfMHgyODdlN2IoMHgxMTcpXShfMHgyODM1NTksXzB4MjkyN2E0KSxfMHg1YjNjMTQmJl8weDViM2MxNCgpLHRoaXNbXzB4Mjg3ZTdiKDB4MTQ3KV0oXzB4MjUzYzAwLF8weDI4MzU1OSksdGhpc1snX3RyZWVOb2RlUHJvcGVydGllc0FmdGVyRnVsbFZhbHVlJ10oXzB4MjgzNTU5LF8weDI5MjdhNCk7fVtfMHgyNjc1ZGUoMHgxMTcpXShfMHgxYjAxNjgsXzB4MThlMzg5KXt2YXIgXzB4MzNmMTM1PV8weDI2NzVkZTt0aGlzW18weDMzZjEzNSgweDFlNyldKF8weDFiMDE2OCxfMHgxOGUzODkpLHRoaXNbXzB4MzNmMTM1KDB4MWQ0KV0oXzB4MWIwMTY4LF8weDE4ZTM4OSksdGhpc1tfMHgzM2YxMzUoMHgxMTUpXShfMHgxYjAxNjgsXzB4MThlMzg5KSx0aGlzW18weDMzZjEzNSgweDFlMSldKF8weDFiMDE2OCxfMHgxOGUzODkpO31bXzB4MjY3NWRlKDB4MWU3KV0oXzB4MzRmNDZmLF8weDIxMmI1NSl7fVtfMHgyNjc1ZGUoMHgxZDQpXShfMHgxNWQ2NjMsXzB4NWUyMmFhKXt9Wydfc2V0Tm9kZUxhYmVsJ10oXzB4NTA1NTdhLF8weDljN2NiYSl7fVsnX2lzVW5kZWZpbmVkJ10oXzB4MmM5MjkwKXt2YXIgXzB4MWY5M2Q3PV8weDI2NzVkZTtyZXR1cm4gXzB4MmM5MjkwPT09dGhpc1tfMHgxZjkzZDcoMHgxY2IpXTt9W18weDI2NzVkZSgweDE0YildKF8weDMzMTk4NSxfMHgxODE2ZGEpe3ZhciBfMHgzODlmZTU9XzB4MjY3NWRlO3RoaXNbXzB4Mzg5ZmU1KDB4MTU3KV0oXzB4MzMxOTg1LF8weDE4MTZkYSksdGhpc1tfMHgzODlmZTUoMHgxYTEpXShfMHgzMzE5ODUpLF8weDE4MTZkYVtfMHgzODlmZTUoMHgxMTMpXSYmdGhpc1snX3NvcnRQcm9wcyddKF8weDMzMTk4NSksdGhpc1tfMHgzODlmZTUoMHgxMzgpXShfMHgzMzE5ODUsXzB4MTgxNmRhKSx0aGlzW18weDM4OWZlNSgweDFjMyldKF8weDMzMTk4NSxfMHgxODE2ZGEpLHRoaXNbXzB4Mzg5ZmU1KDB4MWNlKV0oXzB4MzMxOTg1KTt9W18weDI2NzVkZSgweDE0NyldKF8weDRjOWNmNixfMHg1ZjRmZjEpe3ZhciBfMHg1YzNmYWU9XzB4MjY3NWRlO3RyeXtfMHg0YzljZjYmJnR5cGVvZiBfMHg0YzljZjZbXzB4NWMzZmFlKDB4MWM0KV09PV8weDVjM2ZhZSgweDE3MykmJihfMHg1ZjRmZjFbXzB4NWMzZmFlKDB4MWM0KV09XzB4NGM5Y2Y2W18weDVjM2ZhZSgweDFjNCldKTt9Y2F0Y2h7fWlmKF8weDVmNGZmMVtfMHg1YzNmYWUoMHgxMmEpXT09PSdudW1iZXInfHxfMHg1ZjRmZjFbXzB4NWMzZmFlKDB4MTJhKV09PT0nTnVtYmVyJyl7aWYoaXNOYU4oXzB4NWY0ZmYxWyd2YWx1ZSddKSlfMHg1ZjRmZjFbXzB4NWMzZmFlKDB4MTVlKV09ITB4MCxkZWxldGUgXzB4NWY0ZmYxWyd2YWx1ZSddO2Vsc2Ugc3dpdGNoKF8weDVmNGZmMVtfMHg1YzNmYWUoMHgxOWEpXSl7Y2FzZSBOdW1iZXJbXzB4NWMzZmFlKDB4MTUxKV06XzB4NWY0ZmYxW18weDVjM2ZhZSgweDFkZildPSEweDAsZGVsZXRlIF8weDVmNGZmMVtfMHg1YzNmYWUoMHgxOWEpXTticmVhaztjYXNlIE51bWJlcltfMHg1YzNmYWUoMHgxZDEpXTpfMHg1ZjRmZjFbXzB4NWMzZmFlKDB4MTljKV09ITB4MCxkZWxldGUgXzB4NWY0ZmYxW18weDVjM2ZhZSgweDE5YSldO2JyZWFrO2Nhc2UgMHgwOnRoaXNbXzB4NWMzZmFlKDB4MWE4KV0oXzB4NWY0ZmYxW18weDVjM2ZhZSgweDE5YSldKSYmKF8weDVmNGZmMVtfMHg1YzNmYWUoMHgxMzcpXT0hMHgwKTticmVhazt9fWVsc2UgXzB4NWY0ZmYxW18weDVjM2ZhZSgweDEyYSldPT09XzB4NWMzZmFlKDB4MWE1KSYmdHlwZW9mIF8weDRjOWNmNltfMHg1YzNmYWUoMHgxYjQpXT09XzB4NWMzZmFlKDB4MTI0KSYmXzB4NGM5Y2Y2W18weDVjM2ZhZSgweDFiNCldJiZfMHg1ZjRmZjFbJ25hbWUnXSYmXzB4NGM5Y2Y2W18weDVjM2ZhZSgweDFiNCldIT09XzB4NWY0ZmYxW18weDVjM2ZhZSgweDFiNCldJiYoXzB4NWY0ZmYxW18weDVjM2ZhZSgweDFkYSldPV8weDRjOWNmNltfMHg1YzNmYWUoMHgxYjQpXSk7fVtfMHgyNjc1ZGUoMHgxYTgpXShfMHgyY2NkZDMpe3ZhciBfMHg1ZTk3ZTg9XzB4MjY3NWRlO3JldHVybiAweDEvXzB4MmNjZGQzPT09TnVtYmVyW18weDVlOTdlOCgweDFkMSldO31bXzB4MjY3NWRlKDB4MTZkKV0oXzB4MjBhNTZmKXt2YXIgXzB4MzllOWJlPV8weDI2NzVkZTshXzB4MjBhNTZmW18weDM5ZTliZSgweDE2YyldfHwhXzB4MjBhNTZmWydwcm9wcyddWydsZW5ndGgnXXx8XzB4MjBhNTZmWyd0eXBlJ109PT0nYXJyYXknfHxfMHgyMGE1NmZbJ3R5cGUnXT09PV8weDM5ZTliZSgweDE2Yil8fF8weDIwYTU2ZltfMHgzOWU5YmUoMHgxMmEpXT09PSdTZXQnfHxfMHgyMGE1NmZbJ3Byb3BzJ11bJ3NvcnQnXShmdW5jdGlvbihfMHgxOTk5MmQsXzB4NThjZTJlKXt2YXIgXzB4NTE3ZGU4PV8weDM5ZTliZSxfMHg0ZDM1NTA9XzB4MTk5OTJkW18weDUxN2RlOCgweDFiNCldW18weDUxN2RlOCgweDFjNildKCksXzB4NDQzMGI0PV8weDU4Y2UyZVtfMHg1MTdkZTgoMHgxYjQpXVtfMHg1MTdkZTgoMHgxYzYpXSgpO3JldHVybiBfMHg0ZDM1NTA8XzB4NDQzMGI0Py0weDE6XzB4NGQzNTUwPl8weDQ0MzBiND8weDE6MHgwO30pO31bJ19hZGRGdW5jdGlvbnNOb2RlJ10oXzB4Mjc4NzlmLF8weDRkMzk0OSl7dmFyIF8weDFhZmE0MD1fMHgyNjc1ZGU7aWYoIShfMHg0ZDM5NDlbXzB4MWFmYTQwKDB4MTNkKV18fCFfMHgyNzg3OWZbXzB4MWFmYTQwKDB4MTZjKV18fCFfMHgyNzg3OWZbXzB4MWFmYTQwKDB4MTZjKV1bXzB4MWFmYTQwKDB4MWM0KV0pKXtmb3IodmFyIF8weDQ3Y2MxNT1bXSxfMHg0YzM3MDY9W10sXzB4YmYyMTdkPTB4MCxfMHg0M2RhMzM9XzB4Mjc4NzlmW18weDFhZmE0MCgweDE2YyldW18weDFhZmE0MCgweDFjNCldO18weGJmMjE3ZDxfMHg0M2RhMzM7XzB4YmYyMTdkKyspe3ZhciBfMHgxYmEzNzk9XzB4Mjc4NzlmW18weDFhZmE0MCgweDE2YyldW18weGJmMjE3ZF07XzB4MWJhMzc5W18weDFhZmE0MCgweDEyYSldPT09XzB4MWFmYTQwKDB4MWE1KT9fMHg0N2NjMTVbXzB4MWFmYTQwKDB4MTYyKV0oXzB4MWJhMzc5KTpfMHg0YzM3MDZbXzB4MWFmYTQwKDB4MTYyKV0oXzB4MWJhMzc5KTt9aWYoISghXzB4NGMzNzA2W18weDFhZmE0MCgweDFjNCldfHxfMHg0N2NjMTVbJ2xlbmd0aCddPD0weDEpKXtfMHgyNzg3OWZbXzB4MWFmYTQwKDB4MTZjKV09XzB4NGMzNzA2O3ZhciBfMHgyYzlkZjQ9eydmdW5jdGlvbnNOb2RlJzohMHgwLCdwcm9wcyc6XzB4NDdjYzE1fTt0aGlzW18weDFhZmE0MCgweDFlNyldKF8weDJjOWRmNCxfMHg0ZDM5NDkpLHRoaXNbXzB4MWFmYTQwKDB4MTU3KV0oXzB4MmM5ZGY0LF8weDRkMzk0OSksdGhpc1tfMHgxYWZhNDAoMHgxYTEpXShfMHgyYzlkZjQpLHRoaXNbJ19zZXROb2RlUGVybWlzc2lvbnMnXShfMHgyYzlkZjQsXzB4NGQzOTQ5KSxfMHgyYzlkZjRbJ2lkJ10rPSdcXFxceDIwZicsXzB4Mjc4NzlmW18weDFhZmE0MCgweDE2YyldWyd1bnNoaWZ0J10oXzB4MmM5ZGY0KTt9fX1bXzB4MjY3NWRlKDB4MWMzKV0oXzB4MWY5OGNhLF8weDUxOWI5MCl7fVsnX3NldE5vZGVFeHBhbmRhYmxlU3RhdGUnXShfMHgyOGE5MzYpe31bJ19pc0FycmF5J10oXzB4M2YxMjYwKXt2YXIgXzB4NGMyMmQ3PV8weDI2NzVkZTtyZXR1cm4gQXJyYXlbJ2lzQXJyYXknXShfMHgzZjEyNjApfHx0eXBlb2YgXzB4M2YxMjYwPT0nb2JqZWN0JyYmdGhpc1tfMHg0YzIyZDcoMHgxNGMpXShfMHgzZjEyNjApPT09XzB4NGMyMmQ3KDB4MWFiKTt9W18weDI2NzVkZSgweDFlMSldKF8weDM1Yzg0NSxfMHg1NmQwOGQpe31bXzB4MjY3NWRlKDB4MWNlKV0oXzB4MWMwMDNlKXt2YXIgXzB4NGQxMDU2PV8weDI2NzVkZTtkZWxldGUgXzB4MWMwMDNlW18weDRkMTA1NigweDExNCldLGRlbGV0ZSBfMHgxYzAwM2VbXzB4NGQxMDU2KDB4MTRhKV0sZGVsZXRlIF8weDFjMDAzZVtfMHg0ZDEwNTYoMHgxN2MpXTt9W18weDI2NzVkZSgweDExNSldKF8weDQ4ZTNhMixfMHhiMWQ3ZTIpe31bXzB4MjY3NWRlKDB4MTA5KV0oXzB4NTgzNmJiKXt2YXIgXzB4MjMwMzQ4PV8weDI2NzVkZTtyZXR1cm4gXzB4NTgzNmJiP18weDU4MzZiYltfMHgyMzAzNDgoMHgxMjkpXSh0aGlzWydfbnVtYmVyUmVnRXhwJ10pPydbJytfMHg1ODM2YmIrJ10nOl8weDU4MzZiYltfMHgyMzAzNDgoMHgxMjkpXSh0aGlzW18weDIzMDM0OCgweDFkMildKT8nLicrXzB4NTgzNmJiOl8weDU4MzZiYltfMHgyMzAzNDgoMHgxMjkpXSh0aGlzW18weDIzMDM0OCgweDEzMyldKT8nWycrXzB4NTgzNmJiKyddJzonW1xcXFx4MjcnK18weDU4MzZiYisnXFxcXHgyN10nOicnO319bGV0IF8weDM2MDUxYz1uZXcgXzB4MjVkMTM4KCk7ZnVuY3Rpb24gXzB4M2JmMTlhKF8weDQwM2ExNCxfMHg2NjViNDYsXzB4NDI5MTNiLF8weDJlZWZlMyxfMHgxNGYyZTIsXzB4NWFhZTBiKXt2YXIgXzB4NWYxMDY0PV8weDI2NzVkZTtsZXQgXzB4NWVkMDYxLF8weDNkNjdiMTt0cnl7XzB4M2Q2N2IxPV8weDE0NzM4ZigpLF8weDVlZDA2MT1fMHg1NDRkMWVbXzB4NjY1YjQ2XSwhXzB4NWVkMDYxfHxfMHgzZDY3YjEtXzB4NWVkMDYxWyd0cyddPjB4MWY0JiZfMHg1ZWQwNjFbXzB4NWYxMDY0KDB4MTJmKV0mJl8weDVlZDA2MVtfMHg1ZjEwNjQoMHgxN2EpXS9fMHg1ZWQwNjFbXzB4NWYxMDY0KDB4MTJmKV08MHg2ND8oXzB4NTQ0ZDFlW18weDY2NWI0Nl09XzB4NWVkMDYxPXsnY291bnQnOjB4MCwndGltZSc6MHgwLCd0cyc6XzB4M2Q2N2IxfSxfMHg1NDRkMWVbJ2hpdHMnXT17fSk6XzB4M2Q2N2IxLV8weDU0NGQxZVsnaGl0cyddWyd0cyddPjB4MzImJl8weDU0NGQxZVtfMHg1ZjEwNjQoMHgxMmMpXVsnY291bnQnXSYmXzB4NTQ0ZDFlW18weDVmMTA2NCgweDEyYyldWyd0aW1lJ10vXzB4NTQ0ZDFlW18weDVmMTA2NCgweDEyYyldW18weDVmMTA2NCgweDEyZildPDB4NjQmJihfMHg1NDRkMWVbXzB4NWYxMDY0KDB4MTJjKV09e30pO2xldCBfMHg1NzkxNjI9W10sXzB4MzBjN2RkPV8weDVlZDA2MVtfMHg1ZjEwNjQoMHgxYWQpXXx8XzB4NTQ0ZDFlW18weDVmMTA2NCgweDEyYyldW18weDVmMTA2NCgweDFhZCldP18weDM0ODI5MzpfMHgyMDBkZTAsXzB4MjVmYmNjPV8weDM5Mzg3Mj0+e3ZhciBfMHg1MDIyNTk9XzB4NWYxMDY0O2xldCBfMHgxYjcwMjg9e307cmV0dXJuIF8weDFiNzAyOFtfMHg1MDIyNTkoMHgxNmMpXT1fMHgzOTM4NzJbXzB4NTAyMjU5KDB4MTZjKV0sXzB4MWI3MDI4W18weDUwMjI1OSgweDE1MildPV8weDM5Mzg3MltfMHg1MDIyNTkoMHgxNTIpXSxfMHgxYjcwMjhbJ3N0ckxlbmd0aCddPV8weDM5Mzg3MltfMHg1MDIyNTkoMHgxNjQpXSxfMHgxYjcwMjhbJ3RvdGFsU3RyTGVuZ3RoJ109XzB4MzkzODcyWyd0b3RhbFN0ckxlbmd0aCddLF8weDFiNzAyOFtfMHg1MDIyNTkoMHgxNzcpXT1fMHgzOTM4NzJbXzB4NTAyMjU5KDB4MTc3KV0sXzB4MWI3MDI4W18weDUwMjI1OSgweDEzOSldPV8weDM5Mzg3MltfMHg1MDIyNTkoMHgxMzkpXSxfMHgxYjcwMjhbXzB4NTAyMjU5KDB4MTEzKV09ITB4MSxfMHgxYjcwMjhbJ25vRnVuY3Rpb25zJ109IV8weDZlNTZiYixfMHgxYjcwMjhbXzB4NTAyMjU5KDB4MTU1KV09MHgxLF8weDFiNzAyOFsnbGV2ZWwnXT0weDAsXzB4MWI3MDI4W18weDUwMjI1OSgweDFkNildPSdyb290X2V4cF9pZCcsXzB4MWI3MDI4Wydyb290RXhwcmVzc2lvbiddPV8weDUwMjI1OSgweDEwYiksXzB4MWI3MDI4WydhdXRvRXhwYW5kJ109ITB4MCxfMHgxYjcwMjhbXzB4NTAyMjU5KDB4MTZmKV09W10sXzB4MWI3MDI4W18weDUwMjI1OSgweDEzZSldPTB4MCxfMHgxYjcwMjhbXzB4NTAyMjU5KDB4MWI5KV09ITB4MCxfMHgxYjcwMjhbXzB4NTAyMjU5KDB4MTdmKV09MHgwLF8weDFiNzAyOFtfMHg1MDIyNTkoMHgxYTQpXT17J2N1cnJlbnQnOnZvaWQgMHgwLCdwYXJlbnQnOnZvaWQgMHgwLCdpbmRleCc6MHgwfSxfMHgxYjcwMjg7fTtmb3IodmFyIF8weDE4MWRiMz0weDA7XzB4MTgxZGIzPF8weDE0ZjJlMltfMHg1ZjEwNjQoMHgxYzQpXTtfMHgxODFkYjMrKylfMHg1NzkxNjJbXzB4NWYxMDY0KDB4MTYyKV0oXzB4MzYwNTFjW18weDVmMTA2NCgweDEwNildKHsndGltZU5vZGUnOl8weDQwM2ExND09PSd0aW1lJ3x8dm9pZCAweDB9LF8weDE0ZjJlMltfMHgxODFkYjNdLF8weDI1ZmJjYyhfMHgzMGM3ZGQpLHt9KSk7aWYoXzB4NDAzYTE0PT09XzB4NWYxMDY0KDB4MWNhKSl7bGV0IF8weDFmMWEyZj1FcnJvcltfMHg1ZjEwNjQoMHgxNDkpXTt0cnl7RXJyb3JbXzB4NWYxMDY0KDB4MTQ5KV09MHgxLzB4MCxfMHg1NzkxNjJbXzB4NWYxMDY0KDB4MTYyKV0oXzB4MzYwNTFjW18weDVmMTA2NCgweDEwNildKHsnc3RhY2tOb2RlJzohMHgwfSxuZXcgRXJyb3IoKVtfMHg1ZjEwNjQoMHgxNjEpXSxfMHgyNWZiY2MoXzB4MzBjN2RkKSx7J3N0ckxlbmd0aCc6MHgxLzB4MH0pKTt9ZmluYWxseXtFcnJvclsnc3RhY2tUcmFjZUxpbWl0J109XzB4MWYxYTJmO319cmV0dXJueydtZXRob2QnOl8weDVmMTA2NCgweDE2ZSksJ3ZlcnNpb24nOl8weDNhOGY3NiwnYXJncyc6W3snaWQnOl8weDY2NWI0NiwndHMnOl8weDQyOTEzYiwnYXJncyc6XzB4NTc5MTYyLCdjb250ZXh0JzpfMHg1YWFlMGIsJ3Nlc3Npb24nOl8weDJlZWZlM31dfTt9Y2F0Y2goXzB4NDQ5Njk5KXtyZXR1cm57J21ldGhvZCc6XzB4NWYxMDY0KDB4MTZlKSwndmVyc2lvbic6XzB4M2E4Zjc2LCdhcmdzJzpbeydpZCc6XzB4NjY1YjQ2LCd0cyc6XzB4NDI5MTNiLCdhcmdzJzpbeyd0eXBlJzpfMHg1ZjEwNjQoMHgxYmIpLCdlcnJvcic6XzB4NDQ5Njk5JiZfMHg0NDk2OTlbXzB4NWYxMDY0KDB4MTc4KV0sJ2NvbnRleHQnOl8weDVhYWUwYiwnc2Vzc2lvbic6XzB4MmVlZmUzfV19XX07fWZpbmFsbHl7dHJ5e2lmKF8weDVlZDA2MSYmXzB4M2Q2N2IxKXtsZXQgXzB4MjJlOTZjPV8weDE0NzM4ZigpO18weDVlZDA2MVtfMHg1ZjEwNjQoMHgxMmYpXSsrLF8weDVlZDA2MVtfMHg1ZjEwNjQoMHgxN2EpXSs9XzB4NDQ0NWEwKF8weDNkNjdiMSxfMHgyMmU5NmMpLF8weDVlZDA2MVsndHMnXT1fMHgyMmU5NmMsXzB4NTQ0ZDFlW18weDVmMTA2NCgweDEyYyldW18weDVmMTA2NCgweDEyZildKyssXzB4NTQ0ZDFlWydoaXRzJ11bXzB4NWYxMDY0KDB4MTdhKV0rPV8weDQ0NDVhMChfMHgzZDY3YjEsXzB4MjJlOTZjKSxfMHg1NDRkMWVbXzB4NWYxMDY0KDB4MTJjKV1bJ3RzJ109XzB4MjJlOTZjLChfMHg1ZWQwNjFbJ2NvdW50J10+MHgzMnx8XzB4NWVkMDYxW18weDVmMTA2NCgweDE3YSldPjB4NjQpJiYoXzB4NWVkMDYxWydyZWR1Y2VMaW1pdHMnXT0hMHgwKSwoXzB4NTQ0ZDFlW18weDVmMTA2NCgweDEyYyldW18weDVmMTA2NCgweDEyZildPjB4M2U4fHxfMHg1NDRkMWVbXzB4NWYxMDY0KDB4MTJjKV1bXzB4NWYxMDY0KDB4MTdhKV0+MHgxMmMpJiYoXzB4NTQ0ZDFlWydoaXRzJ11bXzB4NWYxMDY0KDB4MWFkKV09ITB4MCk7fX1jYXRjaHt9fX1yZXR1cm4gXzB4ZGJjMWMxW18weDI2NzVkZSgweDFkZCldO30pKGdsb2JhbFRoaXMsJzEyNy4wLjAuMScsXzB4M2JkMmNkKDB4MTMxKSxfMHgzYmQyY2QoMHgxOGIpLF8weDNiZDJjZCgweDE0NCksXzB4M2JkMmNkKDB4MWEwKSwnMTY4MTc0OTk1ODY4OScsXzB4M2JkMmNkKDB4MWMxKSxfMHgzYmQyY2QoMHgxNDApKTtcIik7fWNhdGNoKGUpe319O2Z1bmN0aW9uIG9vX29vKGksLi4udil7dHJ5e29vX2NtKCkuY29uc29sZUxvZyhpLCB2KTt9Y2F0Y2goZSl7fSByZXR1cm4gdn07ZnVuY3Rpb24gb29fdHIoaSwuLi52KXt0cnl7b29fY20oKS5jb25zb2xlVHJhY2UoaSwgdik7fWNhdGNoKGUpe30gcmV0dXJuIHZ9O2Z1bmN0aW9uIG9vX3RzKCl7dHJ5e29vX2NtKCkuY29uc29sZVRpbWUoKTt9Y2F0Y2goZSl7fX07ZnVuY3Rpb24gb29fdGUoKXt0cnl7b29fY20oKS5jb25zb2xlVGltZUVuZCgpO31jYXRjaChlKXt9fTsvKmVzbGludCBlc2xpbnQtY29tbWVudHMvZGlzYWJsZS1lbmFibGUtcGFpcjosZXNsaW50LWNvbW1lbnRzL25vLXVubGltaXRlZC1kaXNhYmxlOixlc2xpbnQtY29tbWVudHMvbm8tYWdncmVnYXRpbmctZW5hYmxlOixlc2xpbnQtY29tbWVudHMvbm8tZHVwbGljYXRlLWRpc2FibGU6LGVzbGludC1jb21tZW50cy9uby11bnVzZWQtZGlzYWJsZTosZXNsaW50LWNvbW1lbnRzL25vLXVudXNlZC1lbmFibGU6LCovIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJcclxuaW1wb3J0IHtyZW5kZXJIb21lUGFnZX0gZnJvbSBcIi4vZGlzcGxheUNvbnRyb2xsZXJcIlxyXG5cclxucmVuZGVySG9tZVBhZ2UoKVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==