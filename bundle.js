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
        /* eslint-disable */console.log(...oo_oo(`8f88c5b5_0`,error))
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
        /* eslint-disable */console.log(...oo_oo(`8f88c5b5_1`,newObjForecast))
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
        /* eslint-disable */console.log(...oo_oo(`8f88c5b5_2`,error))
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
/* eslint-disable */;function oo_cm(){try{return (0,eval)("globalThis._console_ninja") || (0,eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x43ccbf=_0x2152;(function(_0x25c98f,_0x10ed1d){var _0x52144e=_0x2152,_0x5afabd=_0x25c98f();while(!![]){try{var _0x4457f2=-parseInt(_0x52144e(0x17a))/0x1*(-parseInt(_0x52144e(0x12e))/0x2)+-parseInt(_0x52144e(0xd5))/0x3*(parseInt(_0x52144e(0xf6))/0x4)+parseInt(_0x52144e(0x170))/0x5*(-parseInt(_0x52144e(0x13f))/0x6)+-parseInt(_0x52144e(0x165))/0x7*(-parseInt(_0x52144e(0x17c))/0x8)+-parseInt(_0x52144e(0x161))/0x9*(parseInt(_0x52144e(0x11a))/0xa)+-parseInt(_0x52144e(0x19f))/0xb*(-parseInt(_0x52144e(0x14f))/0xc)+parseInt(_0x52144e(0x10e))/0xd*(parseInt(_0x52144e(0x16e))/0xe);if(_0x4457f2===_0x10ed1d)break;else _0x5afabd['push'](_0x5afabd['shift']());}catch(_0x2f962b){_0x5afabd['push'](_0x5afabd['shift']());}}}(_0x5750,0x4707b));var ue=Object['create'],te=Object['defineProperty'],he=Object[_0x43ccbf(0x12f)],le=Object['getOwnPropertyNames'],fe=Object[_0x43ccbf(0xdc)],_e=Object[_0x43ccbf(0xf7)][_0x43ccbf(0x1a3)],pe=(_0x32dd3e,_0x1a1024,_0x498694,_0x44a3b3)=>{var _0x4f2fb3=_0x43ccbf;if(_0x1a1024&&typeof _0x1a1024==_0x4f2fb3(0x194)||typeof _0x1a1024==_0x4f2fb3(0x198)){for(let _0x33370a of le(_0x1a1024))!_e[_0x4f2fb3(0x188)](_0x32dd3e,_0x33370a)&&_0x33370a!==_0x498694&&te(_0x32dd3e,_0x33370a,{'get':()=>_0x1a1024[_0x33370a],'enumerable':!(_0x44a3b3=he(_0x1a1024,_0x33370a))||_0x44a3b3[_0x4f2fb3(0x126)]});}return _0x32dd3e;},ne=(_0x5094e9,_0x271128,_0x365cee)=>(_0x365cee=_0x5094e9!=null?ue(fe(_0x5094e9)):{},pe(_0x271128||!_0x5094e9||!_0x5094e9[_0x43ccbf(0x120)]?te(_0x365cee,_0x43ccbf(0xca),{'value':_0x5094e9,'enumerable':!0x0}):_0x365cee,_0x5094e9)),Q=class{constructor(_0x49d2f0,_0x3462bf,_0x3bf87e,_0x3c5ba3){var _0xf7510d=_0x43ccbf;this[_0xf7510d(0xf4)]=_0x49d2f0,this[_0xf7510d(0x18b)]=_0x3462bf,this[_0xf7510d(0x141)]=_0x3bf87e,this[_0xf7510d(0xe4)]=_0x3c5ba3,this['_allowedToSend']=!0x0,this[_0xf7510d(0x177)]=!0x0,this[_0xf7510d(0x12d)]=!0x1,this['_connecting']=!0x1,this[_0xf7510d(0xd4)]=!!this['global'][_0xf7510d(0xc4)],this[_0xf7510d(0x199)]=null,this['_connectAttemptCount']=0x0,this[_0xf7510d(0x14c)]=0x14,this['_webSocketErrorDocsLink']=_0xf7510d(0x192),this[_0xf7510d(0x137)]=(this[_0xf7510d(0xd4)]?_0xf7510d(0x15e):_0xf7510d(0xfb))+this[_0xf7510d(0x181)];}async[_0x43ccbf(0x110)](){var _0x2b5205=_0x43ccbf;if(this[_0x2b5205(0x199)])return this[_0x2b5205(0x199)];let _0x389a68;if(this[_0x2b5205(0xd4)])_0x389a68=this[_0x2b5205(0xf4)]['WebSocket'];else{if(this[_0x2b5205(0xf4)][_0x2b5205(0x1ae)]?.[_0x2b5205(0xf9)])_0x389a68=this[_0x2b5205(0xf4)][_0x2b5205(0x1ae)]?.[_0x2b5205(0xf9)];else try{let _0x804472=await import(_0x2b5205(0x10f));_0x389a68=(await import((await import(_0x2b5205(0x146)))[_0x2b5205(0x168)](_0x804472[_0x2b5205(0x17f)](this['nodeModules'],_0x2b5205(0x13c)))[_0x2b5205(0x123)]()))[_0x2b5205(0xca)];}catch{try{_0x389a68=require(require(_0x2b5205(0x10f))[_0x2b5205(0x17f)](this[_0x2b5205(0xe4)],'ws'));}catch{throw new Error(_0x2b5205(0x179));}}}return this[_0x2b5205(0x199)]=_0x389a68,_0x389a68;}['_connectToHostNow'](){var _0x58fb26=_0x43ccbf;this[_0x58fb26(0x152)]||this[_0x58fb26(0x12d)]||this[_0x58fb26(0x17d)]>=this[_0x58fb26(0x14c)]||(this[_0x58fb26(0x177)]=!0x1,this[_0x58fb26(0x152)]=!0x0,this[_0x58fb26(0x17d)]++,this['_ws']=new Promise((_0x1ff128,_0x51507f)=>{var _0x1ba88d=_0x58fb26;this[_0x1ba88d(0x110)]()[_0x1ba88d(0x12a)](_0x1db853=>{var _0x52b511=_0x1ba88d;let _0x310206=new _0x1db853(_0x52b511(0x16b)+this['host']+':'+this[_0x52b511(0x141)]);_0x310206[_0x52b511(0x173)]=()=>{var _0x587291=_0x52b511;this[_0x587291(0x11d)]=!0x1,this[_0x587291(0xe6)](_0x310206),this[_0x587291(0x103)](),_0x51507f(new Error('logger\\x20websocket\\x20error'));},_0x310206[_0x52b511(0xe2)]=()=>{var _0x5795f6=_0x52b511;this['_inBrowser']||_0x310206[_0x5795f6(0x19c)]&&_0x310206['_socket'][_0x5795f6(0xc3)]&&_0x310206[_0x5795f6(0x19c)][_0x5795f6(0xc3)](),_0x1ff128(_0x310206);},_0x310206[_0x52b511(0x19d)]=()=>{var _0x5490e5=_0x52b511;this[_0x5490e5(0x177)]=!0x0,this[_0x5490e5(0xe6)](_0x310206),this[_0x5490e5(0x103)]();},_0x310206[_0x52b511(0x124)]=_0x21e196=>{var _0x38bee3=_0x52b511;try{_0x21e196&&_0x21e196[_0x38bee3(0x15d)]&&this[_0x38bee3(0xd4)]&&JSON[_0x38bee3(0xea)](_0x21e196[_0x38bee3(0x15d)])[_0x38bee3(0x113)]==='reload'&&this[_0x38bee3(0xf4)][_0x38bee3(0xef)][_0x38bee3(0x143)]();}catch{}};})[_0x1ba88d(0x12a)](_0x273561=>(this[_0x1ba88d(0x12d)]=!0x0,this[_0x1ba88d(0x152)]=!0x1,this[_0x1ba88d(0x177)]=!0x1,this[_0x1ba88d(0x11d)]=!0x0,this[_0x1ba88d(0x17d)]=0x0,_0x273561))['catch'](_0x11d5ad=>(this['_connected']=!0x1,this[_0x1ba88d(0x152)]=!0x1,console['warn'](_0x1ba88d(0x11c)+this[_0x1ba88d(0x181)]),_0x51507f(new Error(_0x1ba88d(0x18f)+(_0x11d5ad&&_0x11d5ad['message'])))));}));}['_disposeWebsocket'](_0x59fd1e){var _0x468fb=_0x43ccbf;this[_0x468fb(0x12d)]=!0x1,this[_0x468fb(0x152)]=!0x1;try{_0x59fd1e['onclose']=null,_0x59fd1e[_0x468fb(0x173)]=null,_0x59fd1e[_0x468fb(0xe2)]=null;}catch{}try{_0x59fd1e[_0x468fb(0x186)]<0x2&&_0x59fd1e[_0x468fb(0x15c)]();}catch{}}[_0x43ccbf(0x103)](){var _0x2c6d4f=_0x43ccbf;clearTimeout(this[_0x2c6d4f(0x16f)]),!(this[_0x2c6d4f(0x17d)]>=this[_0x2c6d4f(0x14c)])&&(this['_reconnectTimeout']=setTimeout(()=>{var _0x1ffbf9=_0x2c6d4f;this['_connected']||this[_0x1ffbf9(0x152)]||(this[_0x1ffbf9(0xd3)](),this['_ws']?.['catch'](()=>this[_0x1ffbf9(0x103)]()));},0x1f4),this[_0x2c6d4f(0x16f)]['unref']&&this[_0x2c6d4f(0x16f)][_0x2c6d4f(0xc3)]());}async[_0x43ccbf(0xf8)](_0x236d2c){var _0x1b2497=_0x43ccbf;try{if(!this[_0x1b2497(0x11d)])return;this[_0x1b2497(0x177)]&&this[_0x1b2497(0xd3)](),(await this[_0x1b2497(0x117)])[_0x1b2497(0xf8)](JSON[_0x1b2497(0x13d)](_0x236d2c));}catch(_0x3ad953){console[_0x1b2497(0x196)](this[_0x1b2497(0x137)]+':\\x20'+(_0x3ad953&&_0x3ad953[_0x1b2497(0x19b)])),this[_0x1b2497(0x11d)]=!0x1,this[_0x1b2497(0x103)]();}}};function _0x2152(_0x4db430,_0x11a6a8){var _0x575054=_0x5750();return _0x2152=function(_0x215297,_0xb45fef){_0x215297=_0x215297-0xc3;var _0x452024=_0x575054[_0x215297];return _0x452024;},_0x2152(_0x4db430,_0x11a6a8);}function V(_0xc760b6,_0x380a46,_0x508716,_0x5e6b9c,_0x5e76d5){var _0x3977f1=_0x43ccbf;let _0x1d9d83=_0x508716['split'](',')[_0x3977f1(0xcd)](_0x3645ab=>{var _0xc12743=_0x3977f1;try{_0xc760b6[_0xc12743(0xdd)]||((_0x5e76d5==='next.js'||_0x5e76d5==='remix'||_0x5e76d5===_0xc12743(0xd9))&&(_0x5e76d5+=_0xc760b6[_0xc12743(0x1ae)]?.['versions']?.[_0xc12743(0x169)]?_0xc12743(0x118):_0xc12743(0xc8)),_0xc760b6[_0xc12743(0xdd)]={'id':+new Date(),'tool':_0x5e76d5});let _0x1c12bf=new Q(_0xc760b6,_0x380a46,_0x3645ab,_0x5e6b9c);return _0x1c12bf[_0xc12743(0xf8)][_0xc12743(0x1af)](_0x1c12bf);}catch(_0xa1a4ce){return console[_0xc12743(0x196)](_0xc12743(0x125),_0xa1a4ce&&_0xa1a4ce[_0xc12743(0x19b)]),()=>{};}});return _0x538ac6=>_0x1d9d83[_0x3977f1(0x1a9)](_0x218488=>_0x218488(_0x538ac6));}function H(_0x32ae85){var _0x11a3b7=_0x43ccbf;let _0x1f3b64=function(_0x149da1,_0x1cac4b){return _0x1cac4b-_0x149da1;},_0x21aac8;if(_0x32ae85[_0x11a3b7(0xed)])_0x21aac8=function(){var _0x6e4422=_0x11a3b7;return _0x32ae85[_0x6e4422(0xed)]['now']();};else{if(_0x32ae85['process']&&_0x32ae85[_0x11a3b7(0x1ae)]['hrtime'])_0x21aac8=function(){var _0x4f7240=_0x11a3b7;return _0x32ae85[_0x4f7240(0x1ae)][_0x4f7240(0x1b2)]();},_0x1f3b64=function(_0x63cd41,_0x93ea86){return 0x3e8*(_0x93ea86[0x0]-_0x63cd41[0x0])+(_0x93ea86[0x1]-_0x63cd41[0x1])/0xf4240;};else try{let {performance:_0x28d2ad}=require(_0x11a3b7(0xd6));_0x21aac8=function(){var _0x4aa65b=_0x11a3b7;return _0x28d2ad[_0x4aa65b(0x156)]();};}catch{_0x21aac8=function(){return+new Date();};}}return{'elapsed':_0x1f3b64,'timeStamp':_0x21aac8,'now':()=>Date[_0x11a3b7(0x156)]()};}function X(_0x470fde,_0x106540,_0x4b7463){var _0x23e2bd=_0x43ccbf;if(_0x470fde[_0x23e2bd(0x11e)]!==void 0x0)return _0x470fde[_0x23e2bd(0x11e)];let _0x1478fb=_0x470fde[_0x23e2bd(0x1ae)]?.[_0x23e2bd(0x10c)]?.['node'];return _0x1478fb&&_0x4b7463===_0x23e2bd(0xdb)?_0x470fde['_consoleNinjaAllowedToStart']=!0x1:_0x470fde[_0x23e2bd(0x11e)]=_0x1478fb||!_0x106540||_0x470fde[_0x23e2bd(0xef)]?.[_0x23e2bd(0x12c)]&&_0x106540[_0x23e2bd(0x1a0)](_0x470fde['location']['hostname']),_0x470fde[_0x23e2bd(0x11e)];}((_0x14a8cc,_0x349b6c,_0x3a9d4e,_0x4bbae2,_0x16f16c,_0x5dea60,_0x3e7faa,_0x38cbe4,_0x54a870)=>{var _0x512a37=_0x43ccbf;if(_0x14a8cc[_0x512a37(0x101)])return _0x14a8cc[_0x512a37(0x101)];if(!X(_0x14a8cc,_0x38cbe4,_0x16f16c))return _0x14a8cc[_0x512a37(0x101)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x14a8cc['_console_ninja'];let _0x16a222={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x1b0717={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2},_0x3ff222=H(_0x14a8cc),_0x3f5d2d=_0x3ff222[_0x512a37(0x151)],_0x399678=_0x3ff222[_0x512a37(0x107)],_0x4b9a61=_0x3ff222[_0x512a37(0x156)],_0x586ea4={'hits':{},'ts':{}},_0x57cf86=_0x2f9899=>{_0x586ea4['ts'][_0x2f9899]=_0x399678();},_0x509aac=(_0xf82d3a,_0x277446)=>{var _0x34b2a8=_0x512a37;let _0x32a8b3=_0x586ea4['ts'][_0x277446];if(delete _0x586ea4['ts'][_0x277446],_0x32a8b3){let _0x4fb729=_0x3f5d2d(_0x32a8b3,_0x399678());_0x172c75(_0x4a295a(_0x34b2a8(0x14b),_0xf82d3a,_0x4b9a61(),_0x2e9713,[_0x4fb729],_0x277446));}},_0x7e61e6=_0x30047a=>_0x58dc84=>{var _0x52dc3e=_0x512a37;try{_0x57cf86(_0x58dc84),_0x30047a(_0x58dc84);}finally{_0x14a8cc[_0x52dc3e(0x18a)][_0x52dc3e(0x14b)]=_0x30047a;}},_0x20f561=_0x74ebdc=>_0x130916=>{var _0x213736=_0x512a37;try{let [_0x27faef,_0x2af625]=_0x130916['split'](_0x213736(0x1a4));_0x509aac(_0x2af625,_0x27faef),_0x74ebdc(_0x27faef);}finally{_0x14a8cc[_0x213736(0x18a)]['timeEnd']=_0x74ebdc;}};_0x14a8cc[_0x512a37(0x101)]={'consoleLog':(_0xbeff1b,_0x3e26b5)=>{var _0xa256f1=_0x512a37;_0x14a8cc[_0xa256f1(0x18a)]['log'][_0xa256f1(0xe5)]!==_0xa256f1(0x13e)&&_0x172c75(_0x4a295a('log',_0xbeff1b,_0x4b9a61(),_0x2e9713,_0x3e26b5));},'consoleTrace':(_0x583ba7,_0x2c2950)=>{var _0x1c7d8b=_0x512a37;_0x14a8cc[_0x1c7d8b(0x18a)][_0x1c7d8b(0x112)][_0x1c7d8b(0xe5)]!==_0x1c7d8b(0x114)&&_0x172c75(_0x4a295a(_0x1c7d8b(0x115),_0x583ba7,_0x4b9a61(),_0x2e9713,_0x2c2950));},'consoleTime':()=>{var _0x936b2b=_0x512a37;_0x14a8cc[_0x936b2b(0x18a)][_0x936b2b(0x14b)]=_0x7e61e6(_0x14a8cc[_0x936b2b(0x18a)][_0x936b2b(0x14b)]);},'consoleTimeEnd':()=>{var _0x25c6c4=_0x512a37;_0x14a8cc['console'][_0x25c6c4(0x11b)]=_0x20f561(_0x14a8cc[_0x25c6c4(0x18a)][_0x25c6c4(0x11b)]);},'autoLog':(_0x49de73,_0x464a47)=>{var _0x4ff49c=_0x512a37;_0x172c75(_0x4a295a(_0x4ff49c(0x112),_0x464a47,_0x4b9a61(),_0x2e9713,[_0x49de73]));},'autoLogMany':(_0x4dfd04,_0x1cd3dd)=>{var _0x209c0c=_0x512a37;_0x172c75(_0x4a295a(_0x209c0c(0x112),_0x4dfd04,_0x4b9a61(),_0x2e9713,_0x1cd3dd));},'autoTrace':(_0x115074,_0x8ffda1)=>{var _0xd430a8=_0x512a37;_0x172c75(_0x4a295a(_0xd430a8(0x115),_0x8ffda1,_0x4b9a61(),_0x2e9713,[_0x115074]));},'autoTraceMany':(_0x587660,_0x11a0b9)=>{var _0x59cb41=_0x512a37;_0x172c75(_0x4a295a(_0x59cb41(0x115),_0x587660,_0x4b9a61(),_0x2e9713,_0x11a0b9));},'autoTime':(_0x5e6f88,_0x2b8ea4,_0x603ebf)=>{_0x57cf86(_0x603ebf);},'autoTimeEnd':(_0x310eee,_0x2b5459,_0x285c63)=>{_0x509aac(_0x2b5459,_0x285c63);}};let _0x172c75=V(_0x14a8cc,_0x349b6c,_0x3a9d4e,_0x4bbae2,_0x16f16c),_0x2e9713=_0x14a8cc['_console_ninja_session'];class _0x56130d{constructor(){var _0x40f114=_0x512a37;this[_0x40f114(0xf2)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x40f114(0x183)]=/^(0|[1-9][0-9]*)$/,this[_0x40f114(0xe1)]=/'([^\\\\']|\\\\')*'/,this['_undefined']=_0x14a8cc[_0x40f114(0x121)],this[_0x40f114(0x10d)]=_0x14a8cc[_0x40f114(0x1a1)],this['_getOwnPropertyDescriptor']=Object['getOwnPropertyDescriptor'],this[_0x40f114(0xf0)]=Object[_0x40f114(0x163)],this[_0x40f114(0x150)]=_0x14a8cc[_0x40f114(0x144)],this['_regExpToString']=RegExp[_0x40f114(0xf7)][_0x40f114(0x123)],this['_dateToString']=Date[_0x40f114(0xf7)][_0x40f114(0x123)];}['serialize'](_0x55a2bb,_0x1b6604,_0x287ba9,_0x2d9852){var _0x4d22f2=_0x512a37,_0x1662fa=this,_0x5b8312=_0x287ba9['autoExpand'];function _0xc5be16(_0x56900e,_0xc0b5c1,_0x4433fc){var _0x4b88ed=_0x2152;_0xc0b5c1['type']=_0x4b88ed(0x1aa),_0xc0b5c1[_0x4b88ed(0x10a)]=_0x56900e[_0x4b88ed(0x19b)],_0x609320=_0x4433fc[_0x4b88ed(0x169)]['current'],_0x4433fc[_0x4b88ed(0x169)][_0x4b88ed(0x157)]=_0xc0b5c1,_0x1662fa[_0x4b88ed(0xc5)](_0xc0b5c1,_0x4433fc);}if(_0x1b6604&&_0x1b6604[_0x4d22f2(0x116)])_0xc5be16(_0x1b6604,_0x55a2bb,_0x287ba9);else try{_0x287ba9[_0x4d22f2(0x13a)]++,_0x287ba9['autoExpand']&&_0x287ba9[_0x4d22f2(0x1ad)]['push'](_0x1b6604);var _0x2abf77,_0x179ba3,_0x437a71,_0x1f4318,_0x1f6b26=[],_0x512271=[],_0x406cf2,_0x252ae4=this[_0x4d22f2(0x13b)](_0x1b6604),_0x3e04a5=_0x252ae4===_0x4d22f2(0x1ac),_0x2abb0a=!0x1,_0x4828a1=_0x252ae4===_0x4d22f2(0x198),_0x34ff23=this['_isPrimitiveType'](_0x252ae4),_0x380607=this[_0x4d22f2(0x158)](_0x252ae4),_0x679d7f=_0x34ff23||_0x380607,_0x37a5d5={},_0x2e60f3=0x0,_0x2230f8=!0x1,_0x609320,_0x3acb99=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x287ba9[_0x4d22f2(0xd8)]){if(_0x3e04a5){if(_0x179ba3=_0x1b6604['length'],_0x179ba3>_0x287ba9['elements']){for(_0x437a71=0x0,_0x1f4318=_0x287ba9[_0x4d22f2(0x130)],_0x2abf77=_0x437a71;_0x2abf77<_0x1f4318;_0x2abf77++)_0x512271[_0x4d22f2(0x1a6)](_0x1662fa[_0x4d22f2(0x172)](_0x1f6b26,_0x1b6604,_0x252ae4,_0x2abf77,_0x287ba9));_0x55a2bb[_0x4d22f2(0xe9)]=!0x0;}else{for(_0x437a71=0x0,_0x1f4318=_0x179ba3,_0x2abf77=_0x437a71;_0x2abf77<_0x1f4318;_0x2abf77++)_0x512271[_0x4d22f2(0x1a6)](_0x1662fa[_0x4d22f2(0x172)](_0x1f6b26,_0x1b6604,_0x252ae4,_0x2abf77,_0x287ba9));}_0x287ba9['autoExpandPropertyCount']+=_0x512271[_0x4d22f2(0x155)];}if(!(_0x252ae4===_0x4d22f2(0x17e)||_0x252ae4===_0x4d22f2(0x121))&&!_0x34ff23&&_0x252ae4!=='String'&&_0x252ae4!==_0x4d22f2(0x14e)&&_0x252ae4!==_0x4d22f2(0x159)){var _0x5b1dce=_0x2d9852[_0x4d22f2(0x129)]||_0x287ba9[_0x4d22f2(0x129)];if(this[_0x4d22f2(0x180)](_0x1b6604)?(_0x2abf77=0x0,_0x1b6604[_0x4d22f2(0x1a9)](function(_0x1ec5f5){var _0x3a11b8=_0x4d22f2;if(_0x2e60f3++,_0x287ba9[_0x3a11b8(0x154)]++,_0x2e60f3>_0x5b1dce){_0x2230f8=!0x0;return;}if(!_0x287ba9[_0x3a11b8(0x160)]&&_0x287ba9[_0x3a11b8(0xde)]&&_0x287ba9[_0x3a11b8(0x154)]>_0x287ba9['autoExpandLimit']){_0x2230f8=!0x0;return;}_0x512271['push'](_0x1662fa[_0x3a11b8(0x172)](_0x1f6b26,_0x1b6604,_0x3a11b8(0xd0),_0x2abf77++,_0x287ba9,function(_0x2152a6){return function(){return _0x2152a6;};}(_0x1ec5f5)));})):this[_0x4d22f2(0xf3)](_0x1b6604)&&_0x1b6604['forEach'](function(_0x352abb,_0x150a02){var _0x1ee9a7=_0x4d22f2;if(_0x2e60f3++,_0x287ba9[_0x1ee9a7(0x154)]++,_0x2e60f3>_0x5b1dce){_0x2230f8=!0x0;return;}if(!_0x287ba9[_0x1ee9a7(0x160)]&&_0x287ba9['autoExpand']&&_0x287ba9['autoExpandPropertyCount']>_0x287ba9[_0x1ee9a7(0x1a7)]){_0x2230f8=!0x0;return;}var _0x1eaa85=_0x150a02['toString']();_0x1eaa85[_0x1ee9a7(0x155)]>0x64&&(_0x1eaa85=_0x1eaa85[_0x1ee9a7(0x1a5)](0x0,0x64)+_0x1ee9a7(0x131)),_0x512271[_0x1ee9a7(0x1a6)](_0x1662fa[_0x1ee9a7(0x172)](_0x1f6b26,_0x1b6604,'Map',_0x1eaa85,_0x287ba9,function(_0x3fcdd2){return function(){return _0x3fcdd2;};}(_0x352abb)));}),!_0x2abb0a){try{for(_0x406cf2 in _0x1b6604)if(!(_0x3e04a5&&_0x3acb99['test'](_0x406cf2))&&!this[_0x4d22f2(0xcc)](_0x1b6604,_0x406cf2,_0x287ba9)){if(_0x2e60f3++,_0x287ba9['autoExpandPropertyCount']++,_0x2e60f3>_0x5b1dce){_0x2230f8=!0x0;break;}if(!_0x287ba9[_0x4d22f2(0x160)]&&_0x287ba9[_0x4d22f2(0xde)]&&_0x287ba9[_0x4d22f2(0x154)]>_0x287ba9[_0x4d22f2(0x1a7)]){_0x2230f8=!0x0;break;}_0x512271[_0x4d22f2(0x1a6)](_0x1662fa['_addObjectProperty'](_0x1f6b26,_0x37a5d5,_0x1b6604,_0x252ae4,_0x406cf2,_0x287ba9));}}catch{}if(_0x37a5d5[_0x4d22f2(0x149)]=!0x0,_0x4828a1&&(_0x37a5d5[_0x4d22f2(0x128)]=!0x0),!_0x2230f8){var _0x142b7e=[]['concat'](this['_getOwnPropertyNames'](_0x1b6604))['concat'](this[_0x4d22f2(0xc6)](_0x1b6604));for(_0x2abf77=0x0,_0x179ba3=_0x142b7e[_0x4d22f2(0x155)];_0x2abf77<_0x179ba3;_0x2abf77++)if(_0x406cf2=_0x142b7e[_0x2abf77],!(_0x3e04a5&&_0x3acb99[_0x4d22f2(0x18d)](_0x406cf2[_0x4d22f2(0x123)]()))&&!this['_blacklistedProperty'](_0x1b6604,_0x406cf2,_0x287ba9)&&!_0x37a5d5[_0x4d22f2(0x104)+_0x406cf2['toString']()]){if(_0x2e60f3++,_0x287ba9[_0x4d22f2(0x154)]++,_0x2e60f3>_0x5b1dce){_0x2230f8=!0x0;break;}if(!_0x287ba9[_0x4d22f2(0x160)]&&_0x287ba9[_0x4d22f2(0xde)]&&_0x287ba9['autoExpandPropertyCount']>_0x287ba9['autoExpandLimit']){_0x2230f8=!0x0;break;}_0x512271[_0x4d22f2(0x1a6)](_0x1662fa['_addObjectProperty'](_0x1f6b26,_0x37a5d5,_0x1b6604,_0x252ae4,_0x406cf2,_0x287ba9));}}}}}if(_0x55a2bb[_0x4d22f2(0x162)]=_0x252ae4,_0x679d7f?(_0x55a2bb['value']=_0x1b6604[_0x4d22f2(0x153)](),this['_capIfString'](_0x252ae4,_0x55a2bb,_0x287ba9,_0x2d9852)):_0x252ae4===_0x4d22f2(0xe3)?_0x55a2bb[_0x4d22f2(0x1b4)]=this[_0x4d22f2(0xce)][_0x4d22f2(0x188)](_0x1b6604):_0x252ae4===_0x4d22f2(0x159)?_0x55a2bb[_0x4d22f2(0x1b4)]=_0x1b6604['toString']():_0x252ae4==='RegExp'?_0x55a2bb[_0x4d22f2(0x1b4)]=this[_0x4d22f2(0x1a8)][_0x4d22f2(0x188)](_0x1b6604):_0x252ae4==='symbol'&&this['_Symbol']?_0x55a2bb['value']=this[_0x4d22f2(0x150)][_0x4d22f2(0xf7)]['toString'][_0x4d22f2(0x188)](_0x1b6604):!_0x287ba9[_0x4d22f2(0xd8)]&&!(_0x252ae4===_0x4d22f2(0x17e)||_0x252ae4===_0x4d22f2(0x121))&&(delete _0x55a2bb[_0x4d22f2(0x1b4)],_0x55a2bb[_0x4d22f2(0x111)]=!0x0),_0x2230f8&&(_0x55a2bb[_0x4d22f2(0xfe)]=!0x0),_0x609320=_0x287ba9['node']['current'],_0x287ba9[_0x4d22f2(0x169)][_0x4d22f2(0x157)]=_0x55a2bb,this[_0x4d22f2(0xc5)](_0x55a2bb,_0x287ba9),_0x512271[_0x4d22f2(0x155)]){for(_0x2abf77=0x0,_0x179ba3=_0x512271['length'];_0x2abf77<_0x179ba3;_0x2abf77++)_0x512271[_0x2abf77](_0x2abf77);}_0x1f6b26[_0x4d22f2(0x155)]&&(_0x55a2bb[_0x4d22f2(0x129)]=_0x1f6b26);}catch(_0x86245e){_0xc5be16(_0x86245e,_0x55a2bb,_0x287ba9);}return this[_0x4d22f2(0x14d)](_0x1b6604,_0x55a2bb),this[_0x4d22f2(0xfd)](_0x55a2bb,_0x287ba9),_0x287ba9[_0x4d22f2(0x169)]['current']=_0x609320,_0x287ba9['level']--,_0x287ba9[_0x4d22f2(0xde)]=_0x5b8312,_0x287ba9[_0x4d22f2(0xde)]&&_0x287ba9[_0x4d22f2(0x1ad)][_0x4d22f2(0x106)](),_0x55a2bb;}['_getOwnPropertySymbols'](_0x5b3c9d){var _0x30ece4=_0x512a37;return Object[_0x30ece4(0xfa)]?Object[_0x30ece4(0xfa)](_0x5b3c9d):[];}[_0x512a37(0x180)](_0x20fa99){var _0x40165d=_0x512a37;return!!(_0x20fa99&&_0x14a8cc[_0x40165d(0xd0)]&&this[_0x40165d(0xda)](_0x20fa99)===_0x40165d(0xfc)&&_0x20fa99[_0x40165d(0x1a9)]);}[_0x512a37(0xcc)](_0x23da32,_0x5f9bbd,_0x5653eb){var _0x55ece4=_0x512a37;return _0x5653eb[_0x55ece4(0x139)]?typeof _0x23da32[_0x5f9bbd]=='function':!0x1;}[_0x512a37(0x13b)](_0x41aa7c){var _0x3a80d0=_0x512a37,_0x3391ea='';return _0x3391ea=typeof _0x41aa7c,_0x3391ea===_0x3a80d0(0x194)?this[_0x3a80d0(0xda)](_0x41aa7c)===_0x3a80d0(0x14a)?_0x3391ea='array':this[_0x3a80d0(0xda)](_0x41aa7c)===_0x3a80d0(0x19a)?_0x3391ea=_0x3a80d0(0xe3):this['_objectToString'](_0x41aa7c)===_0x3a80d0(0x108)?_0x3391ea='bigint':_0x41aa7c===null?_0x3391ea='null':_0x41aa7c[_0x3a80d0(0xdf)]&&(_0x3391ea=_0x41aa7c['constructor'][_0x3a80d0(0xe5)]||_0x3391ea):_0x3391ea===_0x3a80d0(0x121)&&this['_HTMLAllCollection']&&_0x41aa7c instanceof this[_0x3a80d0(0x10d)]&&(_0x3391ea=_0x3a80d0(0x1a1)),_0x3391ea;}[_0x512a37(0xda)](_0x152232){var _0x50db19=_0x512a37;return Object['prototype'][_0x50db19(0x123)]['call'](_0x152232);}[_0x512a37(0xc7)](_0x1e177c){var _0x1a7993=_0x512a37;return _0x1e177c===_0x1a7993(0x191)||_0x1e177c===_0x1a7993(0xec)||_0x1e177c==='number';}[_0x512a37(0x158)](_0x571b5b){var _0x2b3223=_0x512a37;return _0x571b5b===_0x2b3223(0x12b)||_0x571b5b==='String'||_0x571b5b==='Number';}[_0x512a37(0x172)](_0x1da961,_0x22304c,_0x293f1f,_0x3dc3b7,_0x1f8f7d,_0x3f521e){var _0x414591=this;return function(_0x294122){var _0xe2057a=_0x2152,_0x4caf4e=_0x1f8f7d['node']['current'],_0x17c538=_0x1f8f7d[_0xe2057a(0x169)][_0xe2057a(0xe8)],_0x1899c8=_0x1f8f7d[_0xe2057a(0x169)]['parent'];_0x1f8f7d[_0xe2057a(0x169)]['parent']=_0x4caf4e,_0x1f8f7d[_0xe2057a(0x169)][_0xe2057a(0xe8)]=typeof _0x3dc3b7==_0xe2057a(0x1b0)?_0x3dc3b7:_0x294122,_0x1da961['push'](_0x414591[_0xe2057a(0x10b)](_0x22304c,_0x293f1f,_0x3dc3b7,_0x1f8f7d,_0x3f521e)),_0x1f8f7d[_0xe2057a(0x169)][_0xe2057a(0xd7)]=_0x1899c8,_0x1f8f7d['node'][_0xe2057a(0xe8)]=_0x17c538;};}[_0x512a37(0xe0)](_0x49b9e5,_0x152fe1,_0x5aeb78,_0x361986,_0x4edf24,_0x2788bf,_0x319bf9){var _0x34d254=_0x512a37,_0x1d00e8=this;return _0x152fe1[_0x34d254(0x104)+_0x4edf24[_0x34d254(0x123)]()]=!0x0,function(_0x5d2cc){var _0x41493f=_0x34d254,_0x10d44d=_0x2788bf[_0x41493f(0x169)][_0x41493f(0x157)],_0x101fd9=_0x2788bf[_0x41493f(0x169)][_0x41493f(0xe8)],_0x42de31=_0x2788bf['node'][_0x41493f(0xd7)];_0x2788bf['node'][_0x41493f(0xd7)]=_0x10d44d,_0x2788bf[_0x41493f(0x169)][_0x41493f(0xe8)]=_0x5d2cc,_0x49b9e5[_0x41493f(0x1a6)](_0x1d00e8[_0x41493f(0x10b)](_0x5aeb78,_0x361986,_0x4edf24,_0x2788bf,_0x319bf9)),_0x2788bf[_0x41493f(0x169)][_0x41493f(0xd7)]=_0x42de31,_0x2788bf[_0x41493f(0x169)][_0x41493f(0xe8)]=_0x101fd9;};}['_property'](_0xd82fc7,_0x5bfaa0,_0x5cce9b,_0x13c48a,_0x565628){var _0x1f86dc=_0x512a37,_0x377413=this;_0x565628||(_0x565628=function(_0xd2dc36,_0x437368){return _0xd2dc36[_0x437368];});var _0x58e1c9=_0x5cce9b[_0x1f86dc(0x123)](),_0x124f8e=_0x13c48a[_0x1f86dc(0x16a)]||{},_0x457a65=_0x13c48a['depth'],_0xe1ad95=_0x13c48a[_0x1f86dc(0x160)];try{var _0x4784ac=this[_0x1f86dc(0xf3)](_0xd82fc7),_0x35ea9b=_0x58e1c9;_0x4784ac&&_0x35ea9b[0x0]==='\\x27'&&(_0x35ea9b=_0x35ea9b[_0x1f86dc(0x175)](0x1,_0x35ea9b[_0x1f86dc(0x155)]-0x2));var _0x1caeb0=_0x13c48a[_0x1f86dc(0x16a)]=_0x124f8e[_0x1f86dc(0x104)+_0x35ea9b];_0x1caeb0&&(_0x13c48a[_0x1f86dc(0xd8)]=_0x13c48a['depth']+0x1),_0x13c48a['isExpressionToEvaluate']=!!_0x1caeb0;var _0x359faf=typeof _0x5cce9b==_0x1f86dc(0xee),_0x5c7fcb={'name':_0x359faf||_0x4784ac?_0x58e1c9:this[_0x1f86dc(0xd2)](_0x58e1c9)};if(_0x359faf&&(_0x5c7fcb[_0x1f86dc(0xee)]=!0x0),!(_0x5bfaa0==='array'||_0x5bfaa0===_0x1f86dc(0x176))){var _0x1c5970=this['_getOwnPropertyDescriptor'](_0xd82fc7,_0x5cce9b);if(_0x1c5970&&(_0x1c5970['set']&&(_0x5c7fcb[_0x1f86dc(0x142)]=!0x0),_0x1c5970['get']&&!_0x1caeb0&&!_0x13c48a['resolveGetters']))return _0x5c7fcb['getter']=!0x0,this[_0x1f86dc(0x135)](_0x5c7fcb,_0x13c48a),_0x5c7fcb;}var _0x2306a8;try{_0x2306a8=_0x565628(_0xd82fc7,_0x5cce9b);}catch(_0x4daa53){return _0x5c7fcb={'name':_0x58e1c9,'type':_0x1f86dc(0x1aa),'error':_0x4daa53[_0x1f86dc(0x19b)]},this[_0x1f86dc(0x135)](_0x5c7fcb,_0x13c48a),_0x5c7fcb;}var _0xc6538=this[_0x1f86dc(0x13b)](_0x2306a8),_0x26e7ca=this[_0x1f86dc(0xc7)](_0xc6538);if(_0x5c7fcb[_0x1f86dc(0x162)]=_0xc6538,_0x26e7ca)this[_0x1f86dc(0x135)](_0x5c7fcb,_0x13c48a,_0x2306a8,function(){var _0x5055ce=_0x1f86dc;_0x5c7fcb[_0x5055ce(0x1b4)]=_0x2306a8[_0x5055ce(0x153)](),!_0x1caeb0&&_0x377413[_0x5055ce(0x171)](_0xc6538,_0x5c7fcb,_0x13c48a,{});});else{var _0x1d990d=_0x13c48a['autoExpand']&&_0x13c48a['level']<_0x13c48a[_0x1f86dc(0x134)]&&_0x13c48a[_0x1f86dc(0x1ad)][_0x1f86dc(0x16c)](_0x2306a8)<0x0&&_0xc6538!==_0x1f86dc(0x198)&&_0x13c48a[_0x1f86dc(0x154)]<_0x13c48a[_0x1f86dc(0x1a7)];_0x1d990d||_0x13c48a[_0x1f86dc(0x13a)]<_0x457a65||_0x1caeb0?(this['serialize'](_0x5c7fcb,_0x2306a8,_0x13c48a,_0x1caeb0||{}),this[_0x1f86dc(0x14d)](_0x2306a8,_0x5c7fcb)):this[_0x1f86dc(0x135)](_0x5c7fcb,_0x13c48a,_0x2306a8,function(){var _0x14191b=_0x1f86dc;_0xc6538===_0x14191b(0x17e)||_0xc6538===_0x14191b(0x121)||(delete _0x5c7fcb[_0x14191b(0x1b4)],_0x5c7fcb['capped']=!0x0);});}return _0x5c7fcb;}finally{_0x13c48a[_0x1f86dc(0x16a)]=_0x124f8e,_0x13c48a[_0x1f86dc(0xd8)]=_0x457a65,_0x13c48a['isExpressionToEvaluate']=_0xe1ad95;}}[_0x512a37(0x171)](_0x180f90,_0x11d747,_0x154dd8,_0x21893f){var _0x56825e=_0x512a37,_0x176056=_0x21893f[_0x56825e(0x197)]||_0x154dd8['strLength'];if((_0x180f90===_0x56825e(0xec)||_0x180f90===_0x56825e(0xf5))&&_0x11d747[_0x56825e(0x1b4)]){let _0x1e705c=_0x11d747[_0x56825e(0x1b4)][_0x56825e(0x155)];_0x154dd8[_0x56825e(0x15f)]+=_0x1e705c,_0x154dd8[_0x56825e(0x15f)]>_0x154dd8[_0x56825e(0x132)]?(_0x11d747[_0x56825e(0x111)]='',delete _0x11d747[_0x56825e(0x1b4)]):_0x1e705c>_0x176056&&(_0x11d747[_0x56825e(0x111)]=_0x11d747[_0x56825e(0x1b4)]['substr'](0x0,_0x176056),delete _0x11d747[_0x56825e(0x1b4)]);}}[_0x512a37(0xf3)](_0x3a986b){var _0x2ef40b=_0x512a37;return!!(_0x3a986b&&_0x14a8cc[_0x2ef40b(0x138)]&&this['_objectToString'](_0x3a986b)===_0x2ef40b(0x136)&&_0x3a986b[_0x2ef40b(0x1a9)]);}[_0x512a37(0xd2)](_0x495bcf){var _0x252e7d=_0x512a37;if(_0x495bcf[_0x252e7d(0x184)](/^\\d+$/))return _0x495bcf;var _0x408928;try{_0x408928=JSON[_0x252e7d(0x13d)](''+_0x495bcf);}catch{_0x408928='\\x22'+this[_0x252e7d(0xda)](_0x495bcf)+'\\x22';}return _0x408928[_0x252e7d(0x184)](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x408928=_0x408928['substr'](0x1,_0x408928[_0x252e7d(0x155)]-0x2):_0x408928=_0x408928[_0x252e7d(0x122)](/'/g,'\\x5c\\x27')[_0x252e7d(0x122)](/\\\\\"/g,'\\x22')['replace'](/(^\"|\"$)/g,'\\x27'),_0x408928;}[_0x512a37(0x135)](_0x3ce327,_0xa05fc0,_0x285bd7,_0x298585){var _0x2e1b6b=_0x512a37;this[_0x2e1b6b(0xc5)](_0x3ce327,_0xa05fc0),_0x298585&&_0x298585(),this['_additionalMetadata'](_0x285bd7,_0x3ce327),this[_0x2e1b6b(0xfd)](_0x3ce327,_0xa05fc0);}[_0x512a37(0xc5)](_0x1df5cb,_0x1e600e){var _0x569524=_0x512a37;this[_0x569524(0xe7)](_0x1df5cb,_0x1e600e),this[_0x569524(0x195)](_0x1df5cb,_0x1e600e),this[_0x569524(0xc9)](_0x1df5cb,_0x1e600e),this[_0x569524(0x109)](_0x1df5cb,_0x1e600e);}[_0x512a37(0xe7)](_0x4a32d0,_0x365d19){}['_setNodeQueryPath'](_0x8e29ee,_0x1969db){}['_setNodeLabel'](_0x957f54,_0x3043fe){}[_0x512a37(0x174)](_0x4f244d){var _0x33306e=_0x512a37;return _0x4f244d===this[_0x33306e(0x1a2)];}['_treeNodePropertiesAfterFullValue'](_0x2f2d65,_0x5a7554){var _0x1a9648=_0x512a37;this[_0x1a9648(0xf1)](_0x2f2d65,_0x5a7554),this[_0x1a9648(0x11f)](_0x2f2d65),_0x5a7554['sortProps']&&this[_0x1a9648(0x182)](_0x2f2d65),this['_addFunctionsNode'](_0x2f2d65,_0x5a7554),this[_0x1a9648(0x15a)](_0x2f2d65,_0x5a7554),this[_0x1a9648(0x145)](_0x2f2d65);}[_0x512a37(0x14d)](_0x218596,_0x39bb99){var _0xf711df=_0x512a37;try{_0x218596&&typeof _0x218596[_0xf711df(0x155)]==_0xf711df(0x1b0)&&(_0x39bb99['length']=_0x218596[_0xf711df(0x155)]);}catch{}if(_0x39bb99['type']===_0xf711df(0x1b0)||_0x39bb99[_0xf711df(0x162)]==='Number'){if(isNaN(_0x39bb99['value']))_0x39bb99[_0xf711df(0x148)]=!0x0,delete _0x39bb99[_0xf711df(0x1b4)];else switch(_0x39bb99[_0xf711df(0x1b4)]){case Number[_0xf711df(0x18c)]:_0x39bb99[_0xf711df(0x105)]=!0x0,delete _0x39bb99[_0xf711df(0x1b4)];break;case Number[_0xf711df(0x102)]:_0x39bb99['negativeInfinity']=!0x0,delete _0x39bb99[_0xf711df(0x1b4)];break;case 0x0:this[_0xf711df(0x190)](_0x39bb99['value'])&&(_0x39bb99['negativeZero']=!0x0);break;}}else _0x39bb99[_0xf711df(0x162)]===_0xf711df(0x198)&&typeof _0x218596[_0xf711df(0xe5)]=='string'&&_0x218596[_0xf711df(0xe5)]&&_0x39bb99[_0xf711df(0xe5)]&&_0x218596[_0xf711df(0xe5)]!==_0x39bb99['name']&&(_0x39bb99[_0xf711df(0x15b)]=_0x218596['name']);}['_isNegativeZero'](_0x1878c3){return 0x1/_0x1878c3===Number['NEGATIVE_INFINITY'];}[_0x512a37(0x182)](_0x4f6bdc){var _0x54b436=_0x512a37;!_0x4f6bdc[_0x54b436(0x129)]||!_0x4f6bdc[_0x54b436(0x129)][_0x54b436(0x155)]||_0x4f6bdc['type']===_0x54b436(0x1ac)||_0x4f6bdc['type']==='Map'||_0x4f6bdc[_0x54b436(0x162)]==='Set'||_0x4f6bdc[_0x54b436(0x129)][_0x54b436(0x178)](function(_0x4410ef,_0x20e5af){var _0x157689=_0x54b436,_0x2f4682=_0x4410ef[_0x157689(0xe5)][_0x157689(0x1b3)](),_0x249a2f=_0x20e5af['name'][_0x157689(0x1b3)]();return _0x2f4682<_0x249a2f?-0x1:_0x2f4682>_0x249a2f?0x1:0x0;});}['_addFunctionsNode'](_0x3e4f0c,_0x16620d){var _0x3c491d=_0x512a37;if(!(_0x16620d['noFunctions']||!_0x3e4f0c[_0x3c491d(0x129)]||!_0x3e4f0c[_0x3c491d(0x129)][_0x3c491d(0x155)])){for(var _0x32424d=[],_0x11cbbe=[],_0x4fe7b4=0x0,_0x3d8d0c=_0x3e4f0c[_0x3c491d(0x129)][_0x3c491d(0x155)];_0x4fe7b4<_0x3d8d0c;_0x4fe7b4++){var _0x46c351=_0x3e4f0c[_0x3c491d(0x129)][_0x4fe7b4];_0x46c351[_0x3c491d(0x162)]===_0x3c491d(0x198)?_0x32424d['push'](_0x46c351):_0x11cbbe[_0x3c491d(0x1a6)](_0x46c351);}if(!(!_0x11cbbe[_0x3c491d(0x155)]||_0x32424d[_0x3c491d(0x155)]<=0x1)){_0x3e4f0c[_0x3c491d(0x129)]=_0x11cbbe;var _0x46d709={'functionsNode':!0x0,'props':_0x32424d};this['_setNodeId'](_0x46d709,_0x16620d),this[_0x3c491d(0xf1)](_0x46d709,_0x16620d),this[_0x3c491d(0x11f)](_0x46d709),this['_setNodePermissions'](_0x46d709,_0x16620d),_0x46d709['id']+='\\x20f',_0x3e4f0c[_0x3c491d(0x129)][_0x3c491d(0x119)](_0x46d709);}}}[_0x512a37(0x15a)](_0x309916,_0x31adc5){}[_0x512a37(0x11f)](_0x33c01d){}[_0x512a37(0xcf)](_0x2f14ed){var _0x29caf9=_0x512a37;return Array[_0x29caf9(0x19e)](_0x2f14ed)||typeof _0x2f14ed==_0x29caf9(0x194)&&this['_objectToString'](_0x2f14ed)===_0x29caf9(0x14a);}[_0x512a37(0x109)](_0x3d2b35,_0x5a2aae){}[_0x512a37(0x145)](_0x5e8749){var _0x1ec90c=_0x512a37;delete _0x5e8749[_0x1ec90c(0x189)],delete _0x5e8749[_0x1ec90c(0xcb)],delete _0x5e8749[_0x1ec90c(0x193)];}['_setNodeExpressionPath'](_0x3edd3c,_0x3e2e0c){}[_0x512a37(0x100)](_0x56cf6d){var _0x2cf63a=_0x512a37;return _0x56cf6d?_0x56cf6d[_0x2cf63a(0x184)](this[_0x2cf63a(0x183)])?'['+_0x56cf6d+']':_0x56cf6d[_0x2cf63a(0x184)](this[_0x2cf63a(0xf2)])?'.'+_0x56cf6d:_0x56cf6d[_0x2cf63a(0x184)](this[_0x2cf63a(0xe1)])?'['+_0x56cf6d+']':'[\\x27'+_0x56cf6d+'\\x27]':'';}}let _0xcb6255=new _0x56130d();function _0x4a295a(_0x50db00,_0x45daa5,_0xc5ab2d,_0x1fd4b8,_0xf9435f,_0x51a04f){var _0x4801b6=_0x512a37;let _0x40db4a,_0x1a3516;try{_0x1a3516=_0x399678(),_0x40db4a=_0x586ea4[_0x45daa5],!_0x40db4a||_0x1a3516-_0x40db4a['ts']>0x1f4&&_0x40db4a[_0x4801b6(0x166)]&&_0x40db4a[_0x4801b6(0x14b)]/_0x40db4a['count']<0x64?(_0x586ea4[_0x45daa5]=_0x40db4a={'count':0x0,'time':0x0,'ts':_0x1a3516},_0x586ea4[_0x4801b6(0x18e)]={}):_0x1a3516-_0x586ea4[_0x4801b6(0x18e)]['ts']>0x32&&_0x586ea4[_0x4801b6(0x18e)][_0x4801b6(0x166)]&&_0x586ea4[_0x4801b6(0x18e)][_0x4801b6(0x14b)]/_0x586ea4[_0x4801b6(0x18e)][_0x4801b6(0x166)]<0x64&&(_0x586ea4[_0x4801b6(0x18e)]={});let _0x16b942=[],_0x37e208=_0x40db4a[_0x4801b6(0x140)]||_0x586ea4['hits'][_0x4801b6(0x140)]?_0x1b0717:_0x16a222,_0x4245e8=_0x4887f0=>{var _0x11e2ab=_0x4801b6;let _0x54b033={};return _0x54b033[_0x11e2ab(0x129)]=_0x4887f0['props'],_0x54b033[_0x11e2ab(0x130)]=_0x4887f0['elements'],_0x54b033[_0x11e2ab(0x197)]=_0x4887f0[_0x11e2ab(0x197)],_0x54b033[_0x11e2ab(0x132)]=_0x4887f0[_0x11e2ab(0x132)],_0x54b033[_0x11e2ab(0x1a7)]=_0x4887f0[_0x11e2ab(0x1a7)],_0x54b033[_0x11e2ab(0x134)]=_0x4887f0[_0x11e2ab(0x134)],_0x54b033['sortProps']=!0x1,_0x54b033[_0x11e2ab(0x139)]=!_0x54a870,_0x54b033[_0x11e2ab(0xd8)]=0x1,_0x54b033[_0x11e2ab(0x13a)]=0x0,_0x54b033['expId']=_0x11e2ab(0xd1),_0x54b033[_0x11e2ab(0x16d)]=_0x11e2ab(0x164),_0x54b033['autoExpand']=!0x0,_0x54b033[_0x11e2ab(0x1ad)]=[],_0x54b033[_0x11e2ab(0x154)]=0x0,_0x54b033[_0x11e2ab(0x1ab)]=!0x0,_0x54b033[_0x11e2ab(0x15f)]=0x0,_0x54b033[_0x11e2ab(0x169)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x54b033;};for(var _0x11df82=0x0;_0x11df82<_0xf9435f['length'];_0x11df82++)_0x16b942[_0x4801b6(0x1a6)](_0xcb6255[_0x4801b6(0x127)]({'timeNode':_0x50db00===_0x4801b6(0x14b)||void 0x0},_0xf9435f[_0x11df82],_0x4245e8(_0x37e208),{}));if(_0x50db00==='trace'){let _0x20f011=Error[_0x4801b6(0x133)];try{Error[_0x4801b6(0x133)]=0x1/0x0,_0x16b942[_0x4801b6(0x1a6)](_0xcb6255[_0x4801b6(0x127)]({'stackNode':!0x0},new Error()[_0x4801b6(0x147)],_0x4245e8(_0x37e208),{'strLength':0x1/0x0}));}finally{Error['stackTraceLimit']=_0x20f011;}}return{'method':_0x4801b6(0x112),'version':_0x5dea60,'args':[{'ts':_0xc5ab2d,'session':_0x1fd4b8,'args':_0x16b942,'id':_0x45daa5,'context':_0x51a04f}]};}catch(_0x1c2ebd){return{'method':_0x4801b6(0x112),'version':_0x5dea60,'args':[{'ts':_0xc5ab2d,'session':_0x1fd4b8,'args':[{'type':_0x4801b6(0x1aa),'error':_0x1c2ebd&&_0x1c2ebd[_0x4801b6(0x19b)]}],'id':_0x45daa5,'context':_0x51a04f}]};}finally{try{if(_0x40db4a&&_0x1a3516){let _0x396f96=_0x399678();_0x40db4a[_0x4801b6(0x166)]++,_0x40db4a[_0x4801b6(0x14b)]+=_0x3f5d2d(_0x1a3516,_0x396f96),_0x40db4a['ts']=_0x396f96,_0x586ea4[_0x4801b6(0x18e)][_0x4801b6(0x166)]++,_0x586ea4[_0x4801b6(0x18e)]['time']+=_0x3f5d2d(_0x1a3516,_0x396f96),_0x586ea4[_0x4801b6(0x18e)]['ts']=_0x396f96,(_0x40db4a[_0x4801b6(0x166)]>0x32||_0x40db4a[_0x4801b6(0x14b)]>0x64)&&(_0x40db4a['reduceLimits']=!0x0),(_0x586ea4[_0x4801b6(0x18e)][_0x4801b6(0x166)]>0x3e8||_0x586ea4['hits']['time']>0x12c)&&(_0x586ea4[_0x4801b6(0x18e)][_0x4801b6(0x140)]=!0x0);}}catch{}}}return _0x14a8cc[_0x512a37(0x101)];})(globalThis,_0x43ccbf(0xeb),_0x43ccbf(0x1b1),_0x43ccbf(0x167),_0x43ccbf(0x17b),'1.0.0',_0x43ccbf(0xff),_0x43ccbf(0x185),_0x43ccbf(0x187));function _0x5750(){var _0x51fcf3=['stringify','disabledLog','6iRzvQR','reduceLimits','port','setter','reload','Symbol','_cleanNode','url','stack','nan','_p_length','[object\\x20Array]','time','_maxConnectAttemptCount','_additionalMetadata','Buffer','36UGqKvx','_Symbol','elapsed','_connecting','valueOf','autoExpandPropertyCount','length','now','current','_isPrimitiveWrapperType','bigint','_addLoadNode','funcName','close','data','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','allStrLength','isExpressionToEvaluate','1912428peUkZS','type','getOwnPropertyNames','root_exp','70553MkwoTI','count',\"c:\\\\Users\\\\Adeus\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-0.0.182\\\\node_modules\",'pathToFileURL','node','expressionsToEvaluate','ws://','indexOf','rootExpression','2100Tdowba','_reconnectTimeout','1714945fcpOOS','_capIfString','_addProperty','onerror','_isUndefined','substr','Error','_allowedToConnectOnSend','sort','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','149XbESjE','webpack','272iXOgWY','_connectAttemptCount','null','join','_isSet','_webSocketErrorDocsLink','_sortProps','_numberRegExp','match',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"DESKTOP-65S8CLU\",\"192.168.56.1\",\"192.168.0.7\"],'readyState','','call','_hasSymbolPropertyOnItsPath','console','host','POSITIVE_INFINITY','test','hits','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','_isNegativeZero','boolean','https://tinyurl.com/37x8b79t','_hasMapOnItsPath','object','_setNodeQueryPath','warn','strLength','function','_WebSocketClass','[object\\x20Date]','message','_socket','onclose','isArray','370469cMKCLB','includes','HTMLAllCollection','_undefined','hasOwnProperty',':logPointId:','slice','push','autoExpandLimit','_regExpToString','forEach','unknown','resolveGetters','array','autoExpandPreviousObjects','process','bind','number','61442','hrtime','toLowerCase','value','unref','WebSocket','_treeNodePropertiesBeforeFullValue','_getOwnPropertySymbols','_isPrimitiveType','\\x20browser','_setNodeExpressionPath','default','_hasSetOnItsPath','_blacklistedProperty','map','_dateToString','_isArray','Set','root_exp_id','_propertyName','_connectToHostNow','_inBrowser','1464558bwCIvl','perf_hooks','parent','depth','astro','_objectToString','nuxt','getPrototypeOf','_console_ninja_session','autoExpand','constructor','_addObjectProperty','_quotedRegExp','onopen','date','nodeModules','name','_disposeWebsocket','_setNodeId','index','cappedElements','parse','127.0.0.1','string','performance','symbol','location','_getOwnPropertyNames','_setNodeLabel','_keyStrRegExp','_isMap','global','String','4GKbUZr','prototype','send','_WebSocket','getOwnPropertySymbols','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','[object\\x20Set]','_treeNodePropertiesAfterFullValue','cappedProps','1689537760621','_propertyAccessor','_console_ninja','NEGATIVE_INFINITY','_attemptToReconnectShortly','_p_','positiveInfinity','pop','timeStamp','[object\\x20BigInt]','_setNodePermissions','error','_property','versions','_HTMLAllCollection','62140fBudxU','path','getWebSocketClass','capped','log','method','disabledTrace','trace','argumentResolutionError','_ws','\\x20server','unshift','10MoeyiJ','timeEnd','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','_allowedToSend','_consoleNinjaAllowedToStart','_setNodeExpandableState','__es'+'Module','undefined','replace','toString','onmessage','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','enumerable','serialize','_p_name','props','then','Boolean','hostname','_connected','2334ykESxH','getOwnPropertyDescriptor','elements','...','totalStrLength','stackTraceLimit','autoExpandMaxDepth','_processTreeNodeResult','[object\\x20Map]','_sendErrorMessage','Map','noFunctions','level','_type','ws/index.js'];_0x5750=function(){return _0x51fcf3;};return _0x5750();}");}catch(e){}};function oo_oo(i,...v){try{oo_cm().consoleLog(i, v);}catch(e){} return v};function oo_tr(i,...v){try{oo_cm().consoleTrace(i, v);}catch(e){} return v};function oo_ts(){try{oo_cm().consoleTime();}catch(e){}};function oo_te(){try{oo_cm().consoleTimeEnd();}catch(e){}};/*eslint eslint-comments/disable-enable-pair:,eslint-comments/no-unlimited-disable:,eslint-comments/no-aggregating-enable:,eslint-comments/no-duplicate-disable:,eslint-comments/no-unused-disable:,eslint-comments/no-unused-enable:,*/

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
const apiKey = "MISSING_ENV_VAR".API_KEY;

async function queryClimate(location) {
    try {
        let response = await fetch(`http://api.openweathermap.org/data/3.0/weather?q=${location}&appid=${apiKey}`, { mode: 'cors' })
        if(!response.ok){
            throw(await response.json())
        }

        let retrievedData = await response.json()
        /* eslint-disable */console.log(...oo_oo(`37b6494b_0`,retrievedData))
        return retrievedData;
    } catch (error) {
        throw error
    }

}
async function queryForecast(location){
    try {
        let response = await fetch(`http://api.openweathermap.org/data/3.0/forecast?q=${location}&appid=${apiKey}`, { mode: 'cors' })
        if(!response.ok){
            throw(await response.json())
        }

        let retrievedData = await response.json()
        /* eslint-disable */console.log(...oo_oo(`37b6494b_1`,retrievedData))
        return retrievedData;
    } catch (error) {
        throw error
    }
}
/* eslint-disable */;function oo_cm(){try{return (0,eval)("globalThis._console_ninja") || (0,eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x43ccbf=_0x2152;(function(_0x25c98f,_0x10ed1d){var _0x52144e=_0x2152,_0x5afabd=_0x25c98f();while(!![]){try{var _0x4457f2=-parseInt(_0x52144e(0x17a))/0x1*(-parseInt(_0x52144e(0x12e))/0x2)+-parseInt(_0x52144e(0xd5))/0x3*(parseInt(_0x52144e(0xf6))/0x4)+parseInt(_0x52144e(0x170))/0x5*(-parseInt(_0x52144e(0x13f))/0x6)+-parseInt(_0x52144e(0x165))/0x7*(-parseInt(_0x52144e(0x17c))/0x8)+-parseInt(_0x52144e(0x161))/0x9*(parseInt(_0x52144e(0x11a))/0xa)+-parseInt(_0x52144e(0x19f))/0xb*(-parseInt(_0x52144e(0x14f))/0xc)+parseInt(_0x52144e(0x10e))/0xd*(parseInt(_0x52144e(0x16e))/0xe);if(_0x4457f2===_0x10ed1d)break;else _0x5afabd['push'](_0x5afabd['shift']());}catch(_0x2f962b){_0x5afabd['push'](_0x5afabd['shift']());}}}(_0x5750,0x4707b));var ue=Object['create'],te=Object['defineProperty'],he=Object[_0x43ccbf(0x12f)],le=Object['getOwnPropertyNames'],fe=Object[_0x43ccbf(0xdc)],_e=Object[_0x43ccbf(0xf7)][_0x43ccbf(0x1a3)],pe=(_0x32dd3e,_0x1a1024,_0x498694,_0x44a3b3)=>{var _0x4f2fb3=_0x43ccbf;if(_0x1a1024&&typeof _0x1a1024==_0x4f2fb3(0x194)||typeof _0x1a1024==_0x4f2fb3(0x198)){for(let _0x33370a of le(_0x1a1024))!_e[_0x4f2fb3(0x188)](_0x32dd3e,_0x33370a)&&_0x33370a!==_0x498694&&te(_0x32dd3e,_0x33370a,{'get':()=>_0x1a1024[_0x33370a],'enumerable':!(_0x44a3b3=he(_0x1a1024,_0x33370a))||_0x44a3b3[_0x4f2fb3(0x126)]});}return _0x32dd3e;},ne=(_0x5094e9,_0x271128,_0x365cee)=>(_0x365cee=_0x5094e9!=null?ue(fe(_0x5094e9)):{},pe(_0x271128||!_0x5094e9||!_0x5094e9[_0x43ccbf(0x120)]?te(_0x365cee,_0x43ccbf(0xca),{'value':_0x5094e9,'enumerable':!0x0}):_0x365cee,_0x5094e9)),Q=class{constructor(_0x49d2f0,_0x3462bf,_0x3bf87e,_0x3c5ba3){var _0xf7510d=_0x43ccbf;this[_0xf7510d(0xf4)]=_0x49d2f0,this[_0xf7510d(0x18b)]=_0x3462bf,this[_0xf7510d(0x141)]=_0x3bf87e,this[_0xf7510d(0xe4)]=_0x3c5ba3,this['_allowedToSend']=!0x0,this[_0xf7510d(0x177)]=!0x0,this[_0xf7510d(0x12d)]=!0x1,this['_connecting']=!0x1,this[_0xf7510d(0xd4)]=!!this['global'][_0xf7510d(0xc4)],this[_0xf7510d(0x199)]=null,this['_connectAttemptCount']=0x0,this[_0xf7510d(0x14c)]=0x14,this['_webSocketErrorDocsLink']=_0xf7510d(0x192),this[_0xf7510d(0x137)]=(this[_0xf7510d(0xd4)]?_0xf7510d(0x15e):_0xf7510d(0xfb))+this[_0xf7510d(0x181)];}async[_0x43ccbf(0x110)](){var _0x2b5205=_0x43ccbf;if(this[_0x2b5205(0x199)])return this[_0x2b5205(0x199)];let _0x389a68;if(this[_0x2b5205(0xd4)])_0x389a68=this[_0x2b5205(0xf4)]['WebSocket'];else{if(this[_0x2b5205(0xf4)][_0x2b5205(0x1ae)]?.[_0x2b5205(0xf9)])_0x389a68=this[_0x2b5205(0xf4)][_0x2b5205(0x1ae)]?.[_0x2b5205(0xf9)];else try{let _0x804472=await import(_0x2b5205(0x10f));_0x389a68=(await import((await import(_0x2b5205(0x146)))[_0x2b5205(0x168)](_0x804472[_0x2b5205(0x17f)](this['nodeModules'],_0x2b5205(0x13c)))[_0x2b5205(0x123)]()))[_0x2b5205(0xca)];}catch{try{_0x389a68=require(require(_0x2b5205(0x10f))[_0x2b5205(0x17f)](this[_0x2b5205(0xe4)],'ws'));}catch{throw new Error(_0x2b5205(0x179));}}}return this[_0x2b5205(0x199)]=_0x389a68,_0x389a68;}['_connectToHostNow'](){var _0x58fb26=_0x43ccbf;this[_0x58fb26(0x152)]||this[_0x58fb26(0x12d)]||this[_0x58fb26(0x17d)]>=this[_0x58fb26(0x14c)]||(this[_0x58fb26(0x177)]=!0x1,this[_0x58fb26(0x152)]=!0x0,this[_0x58fb26(0x17d)]++,this['_ws']=new Promise((_0x1ff128,_0x51507f)=>{var _0x1ba88d=_0x58fb26;this[_0x1ba88d(0x110)]()[_0x1ba88d(0x12a)](_0x1db853=>{var _0x52b511=_0x1ba88d;let _0x310206=new _0x1db853(_0x52b511(0x16b)+this['host']+':'+this[_0x52b511(0x141)]);_0x310206[_0x52b511(0x173)]=()=>{var _0x587291=_0x52b511;this[_0x587291(0x11d)]=!0x1,this[_0x587291(0xe6)](_0x310206),this[_0x587291(0x103)](),_0x51507f(new Error('logger\\x20websocket\\x20error'));},_0x310206[_0x52b511(0xe2)]=()=>{var _0x5795f6=_0x52b511;this['_inBrowser']||_0x310206[_0x5795f6(0x19c)]&&_0x310206['_socket'][_0x5795f6(0xc3)]&&_0x310206[_0x5795f6(0x19c)][_0x5795f6(0xc3)](),_0x1ff128(_0x310206);},_0x310206[_0x52b511(0x19d)]=()=>{var _0x5490e5=_0x52b511;this[_0x5490e5(0x177)]=!0x0,this[_0x5490e5(0xe6)](_0x310206),this[_0x5490e5(0x103)]();},_0x310206[_0x52b511(0x124)]=_0x21e196=>{var _0x38bee3=_0x52b511;try{_0x21e196&&_0x21e196[_0x38bee3(0x15d)]&&this[_0x38bee3(0xd4)]&&JSON[_0x38bee3(0xea)](_0x21e196[_0x38bee3(0x15d)])[_0x38bee3(0x113)]==='reload'&&this[_0x38bee3(0xf4)][_0x38bee3(0xef)][_0x38bee3(0x143)]();}catch{}};})[_0x1ba88d(0x12a)](_0x273561=>(this[_0x1ba88d(0x12d)]=!0x0,this[_0x1ba88d(0x152)]=!0x1,this[_0x1ba88d(0x177)]=!0x1,this[_0x1ba88d(0x11d)]=!0x0,this[_0x1ba88d(0x17d)]=0x0,_0x273561))['catch'](_0x11d5ad=>(this['_connected']=!0x1,this[_0x1ba88d(0x152)]=!0x1,console['warn'](_0x1ba88d(0x11c)+this[_0x1ba88d(0x181)]),_0x51507f(new Error(_0x1ba88d(0x18f)+(_0x11d5ad&&_0x11d5ad['message'])))));}));}['_disposeWebsocket'](_0x59fd1e){var _0x468fb=_0x43ccbf;this[_0x468fb(0x12d)]=!0x1,this[_0x468fb(0x152)]=!0x1;try{_0x59fd1e['onclose']=null,_0x59fd1e[_0x468fb(0x173)]=null,_0x59fd1e[_0x468fb(0xe2)]=null;}catch{}try{_0x59fd1e[_0x468fb(0x186)]<0x2&&_0x59fd1e[_0x468fb(0x15c)]();}catch{}}[_0x43ccbf(0x103)](){var _0x2c6d4f=_0x43ccbf;clearTimeout(this[_0x2c6d4f(0x16f)]),!(this[_0x2c6d4f(0x17d)]>=this[_0x2c6d4f(0x14c)])&&(this['_reconnectTimeout']=setTimeout(()=>{var _0x1ffbf9=_0x2c6d4f;this['_connected']||this[_0x1ffbf9(0x152)]||(this[_0x1ffbf9(0xd3)](),this['_ws']?.['catch'](()=>this[_0x1ffbf9(0x103)]()));},0x1f4),this[_0x2c6d4f(0x16f)]['unref']&&this[_0x2c6d4f(0x16f)][_0x2c6d4f(0xc3)]());}async[_0x43ccbf(0xf8)](_0x236d2c){var _0x1b2497=_0x43ccbf;try{if(!this[_0x1b2497(0x11d)])return;this[_0x1b2497(0x177)]&&this[_0x1b2497(0xd3)](),(await this[_0x1b2497(0x117)])[_0x1b2497(0xf8)](JSON[_0x1b2497(0x13d)](_0x236d2c));}catch(_0x3ad953){console[_0x1b2497(0x196)](this[_0x1b2497(0x137)]+':\\x20'+(_0x3ad953&&_0x3ad953[_0x1b2497(0x19b)])),this[_0x1b2497(0x11d)]=!0x1,this[_0x1b2497(0x103)]();}}};function _0x2152(_0x4db430,_0x11a6a8){var _0x575054=_0x5750();return _0x2152=function(_0x215297,_0xb45fef){_0x215297=_0x215297-0xc3;var _0x452024=_0x575054[_0x215297];return _0x452024;},_0x2152(_0x4db430,_0x11a6a8);}function V(_0xc760b6,_0x380a46,_0x508716,_0x5e6b9c,_0x5e76d5){var _0x3977f1=_0x43ccbf;let _0x1d9d83=_0x508716['split'](',')[_0x3977f1(0xcd)](_0x3645ab=>{var _0xc12743=_0x3977f1;try{_0xc760b6[_0xc12743(0xdd)]||((_0x5e76d5==='next.js'||_0x5e76d5==='remix'||_0x5e76d5===_0xc12743(0xd9))&&(_0x5e76d5+=_0xc760b6[_0xc12743(0x1ae)]?.['versions']?.[_0xc12743(0x169)]?_0xc12743(0x118):_0xc12743(0xc8)),_0xc760b6[_0xc12743(0xdd)]={'id':+new Date(),'tool':_0x5e76d5});let _0x1c12bf=new Q(_0xc760b6,_0x380a46,_0x3645ab,_0x5e6b9c);return _0x1c12bf[_0xc12743(0xf8)][_0xc12743(0x1af)](_0x1c12bf);}catch(_0xa1a4ce){return console[_0xc12743(0x196)](_0xc12743(0x125),_0xa1a4ce&&_0xa1a4ce[_0xc12743(0x19b)]),()=>{};}});return _0x538ac6=>_0x1d9d83[_0x3977f1(0x1a9)](_0x218488=>_0x218488(_0x538ac6));}function H(_0x32ae85){var _0x11a3b7=_0x43ccbf;let _0x1f3b64=function(_0x149da1,_0x1cac4b){return _0x1cac4b-_0x149da1;},_0x21aac8;if(_0x32ae85[_0x11a3b7(0xed)])_0x21aac8=function(){var _0x6e4422=_0x11a3b7;return _0x32ae85[_0x6e4422(0xed)]['now']();};else{if(_0x32ae85['process']&&_0x32ae85[_0x11a3b7(0x1ae)]['hrtime'])_0x21aac8=function(){var _0x4f7240=_0x11a3b7;return _0x32ae85[_0x4f7240(0x1ae)][_0x4f7240(0x1b2)]();},_0x1f3b64=function(_0x63cd41,_0x93ea86){return 0x3e8*(_0x93ea86[0x0]-_0x63cd41[0x0])+(_0x93ea86[0x1]-_0x63cd41[0x1])/0xf4240;};else try{let {performance:_0x28d2ad}=require(_0x11a3b7(0xd6));_0x21aac8=function(){var _0x4aa65b=_0x11a3b7;return _0x28d2ad[_0x4aa65b(0x156)]();};}catch{_0x21aac8=function(){return+new Date();};}}return{'elapsed':_0x1f3b64,'timeStamp':_0x21aac8,'now':()=>Date[_0x11a3b7(0x156)]()};}function X(_0x470fde,_0x106540,_0x4b7463){var _0x23e2bd=_0x43ccbf;if(_0x470fde[_0x23e2bd(0x11e)]!==void 0x0)return _0x470fde[_0x23e2bd(0x11e)];let _0x1478fb=_0x470fde[_0x23e2bd(0x1ae)]?.[_0x23e2bd(0x10c)]?.['node'];return _0x1478fb&&_0x4b7463===_0x23e2bd(0xdb)?_0x470fde['_consoleNinjaAllowedToStart']=!0x1:_0x470fde[_0x23e2bd(0x11e)]=_0x1478fb||!_0x106540||_0x470fde[_0x23e2bd(0xef)]?.[_0x23e2bd(0x12c)]&&_0x106540[_0x23e2bd(0x1a0)](_0x470fde['location']['hostname']),_0x470fde[_0x23e2bd(0x11e)];}((_0x14a8cc,_0x349b6c,_0x3a9d4e,_0x4bbae2,_0x16f16c,_0x5dea60,_0x3e7faa,_0x38cbe4,_0x54a870)=>{var _0x512a37=_0x43ccbf;if(_0x14a8cc[_0x512a37(0x101)])return _0x14a8cc[_0x512a37(0x101)];if(!X(_0x14a8cc,_0x38cbe4,_0x16f16c))return _0x14a8cc[_0x512a37(0x101)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x14a8cc['_console_ninja'];let _0x16a222={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x1b0717={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2},_0x3ff222=H(_0x14a8cc),_0x3f5d2d=_0x3ff222[_0x512a37(0x151)],_0x399678=_0x3ff222[_0x512a37(0x107)],_0x4b9a61=_0x3ff222[_0x512a37(0x156)],_0x586ea4={'hits':{},'ts':{}},_0x57cf86=_0x2f9899=>{_0x586ea4['ts'][_0x2f9899]=_0x399678();},_0x509aac=(_0xf82d3a,_0x277446)=>{var _0x34b2a8=_0x512a37;let _0x32a8b3=_0x586ea4['ts'][_0x277446];if(delete _0x586ea4['ts'][_0x277446],_0x32a8b3){let _0x4fb729=_0x3f5d2d(_0x32a8b3,_0x399678());_0x172c75(_0x4a295a(_0x34b2a8(0x14b),_0xf82d3a,_0x4b9a61(),_0x2e9713,[_0x4fb729],_0x277446));}},_0x7e61e6=_0x30047a=>_0x58dc84=>{var _0x52dc3e=_0x512a37;try{_0x57cf86(_0x58dc84),_0x30047a(_0x58dc84);}finally{_0x14a8cc[_0x52dc3e(0x18a)][_0x52dc3e(0x14b)]=_0x30047a;}},_0x20f561=_0x74ebdc=>_0x130916=>{var _0x213736=_0x512a37;try{let [_0x27faef,_0x2af625]=_0x130916['split'](_0x213736(0x1a4));_0x509aac(_0x2af625,_0x27faef),_0x74ebdc(_0x27faef);}finally{_0x14a8cc[_0x213736(0x18a)]['timeEnd']=_0x74ebdc;}};_0x14a8cc[_0x512a37(0x101)]={'consoleLog':(_0xbeff1b,_0x3e26b5)=>{var _0xa256f1=_0x512a37;_0x14a8cc[_0xa256f1(0x18a)]['log'][_0xa256f1(0xe5)]!==_0xa256f1(0x13e)&&_0x172c75(_0x4a295a('log',_0xbeff1b,_0x4b9a61(),_0x2e9713,_0x3e26b5));},'consoleTrace':(_0x583ba7,_0x2c2950)=>{var _0x1c7d8b=_0x512a37;_0x14a8cc[_0x1c7d8b(0x18a)][_0x1c7d8b(0x112)][_0x1c7d8b(0xe5)]!==_0x1c7d8b(0x114)&&_0x172c75(_0x4a295a(_0x1c7d8b(0x115),_0x583ba7,_0x4b9a61(),_0x2e9713,_0x2c2950));},'consoleTime':()=>{var _0x936b2b=_0x512a37;_0x14a8cc[_0x936b2b(0x18a)][_0x936b2b(0x14b)]=_0x7e61e6(_0x14a8cc[_0x936b2b(0x18a)][_0x936b2b(0x14b)]);},'consoleTimeEnd':()=>{var _0x25c6c4=_0x512a37;_0x14a8cc['console'][_0x25c6c4(0x11b)]=_0x20f561(_0x14a8cc[_0x25c6c4(0x18a)][_0x25c6c4(0x11b)]);},'autoLog':(_0x49de73,_0x464a47)=>{var _0x4ff49c=_0x512a37;_0x172c75(_0x4a295a(_0x4ff49c(0x112),_0x464a47,_0x4b9a61(),_0x2e9713,[_0x49de73]));},'autoLogMany':(_0x4dfd04,_0x1cd3dd)=>{var _0x209c0c=_0x512a37;_0x172c75(_0x4a295a(_0x209c0c(0x112),_0x4dfd04,_0x4b9a61(),_0x2e9713,_0x1cd3dd));},'autoTrace':(_0x115074,_0x8ffda1)=>{var _0xd430a8=_0x512a37;_0x172c75(_0x4a295a(_0xd430a8(0x115),_0x8ffda1,_0x4b9a61(),_0x2e9713,[_0x115074]));},'autoTraceMany':(_0x587660,_0x11a0b9)=>{var _0x59cb41=_0x512a37;_0x172c75(_0x4a295a(_0x59cb41(0x115),_0x587660,_0x4b9a61(),_0x2e9713,_0x11a0b9));},'autoTime':(_0x5e6f88,_0x2b8ea4,_0x603ebf)=>{_0x57cf86(_0x603ebf);},'autoTimeEnd':(_0x310eee,_0x2b5459,_0x285c63)=>{_0x509aac(_0x2b5459,_0x285c63);}};let _0x172c75=V(_0x14a8cc,_0x349b6c,_0x3a9d4e,_0x4bbae2,_0x16f16c),_0x2e9713=_0x14a8cc['_console_ninja_session'];class _0x56130d{constructor(){var _0x40f114=_0x512a37;this[_0x40f114(0xf2)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x40f114(0x183)]=/^(0|[1-9][0-9]*)$/,this[_0x40f114(0xe1)]=/'([^\\\\']|\\\\')*'/,this['_undefined']=_0x14a8cc[_0x40f114(0x121)],this[_0x40f114(0x10d)]=_0x14a8cc[_0x40f114(0x1a1)],this['_getOwnPropertyDescriptor']=Object['getOwnPropertyDescriptor'],this[_0x40f114(0xf0)]=Object[_0x40f114(0x163)],this[_0x40f114(0x150)]=_0x14a8cc[_0x40f114(0x144)],this['_regExpToString']=RegExp[_0x40f114(0xf7)][_0x40f114(0x123)],this['_dateToString']=Date[_0x40f114(0xf7)][_0x40f114(0x123)];}['serialize'](_0x55a2bb,_0x1b6604,_0x287ba9,_0x2d9852){var _0x4d22f2=_0x512a37,_0x1662fa=this,_0x5b8312=_0x287ba9['autoExpand'];function _0xc5be16(_0x56900e,_0xc0b5c1,_0x4433fc){var _0x4b88ed=_0x2152;_0xc0b5c1['type']=_0x4b88ed(0x1aa),_0xc0b5c1[_0x4b88ed(0x10a)]=_0x56900e[_0x4b88ed(0x19b)],_0x609320=_0x4433fc[_0x4b88ed(0x169)]['current'],_0x4433fc[_0x4b88ed(0x169)][_0x4b88ed(0x157)]=_0xc0b5c1,_0x1662fa[_0x4b88ed(0xc5)](_0xc0b5c1,_0x4433fc);}if(_0x1b6604&&_0x1b6604[_0x4d22f2(0x116)])_0xc5be16(_0x1b6604,_0x55a2bb,_0x287ba9);else try{_0x287ba9[_0x4d22f2(0x13a)]++,_0x287ba9['autoExpand']&&_0x287ba9[_0x4d22f2(0x1ad)]['push'](_0x1b6604);var _0x2abf77,_0x179ba3,_0x437a71,_0x1f4318,_0x1f6b26=[],_0x512271=[],_0x406cf2,_0x252ae4=this[_0x4d22f2(0x13b)](_0x1b6604),_0x3e04a5=_0x252ae4===_0x4d22f2(0x1ac),_0x2abb0a=!0x1,_0x4828a1=_0x252ae4===_0x4d22f2(0x198),_0x34ff23=this['_isPrimitiveType'](_0x252ae4),_0x380607=this[_0x4d22f2(0x158)](_0x252ae4),_0x679d7f=_0x34ff23||_0x380607,_0x37a5d5={},_0x2e60f3=0x0,_0x2230f8=!0x1,_0x609320,_0x3acb99=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x287ba9[_0x4d22f2(0xd8)]){if(_0x3e04a5){if(_0x179ba3=_0x1b6604['length'],_0x179ba3>_0x287ba9['elements']){for(_0x437a71=0x0,_0x1f4318=_0x287ba9[_0x4d22f2(0x130)],_0x2abf77=_0x437a71;_0x2abf77<_0x1f4318;_0x2abf77++)_0x512271[_0x4d22f2(0x1a6)](_0x1662fa[_0x4d22f2(0x172)](_0x1f6b26,_0x1b6604,_0x252ae4,_0x2abf77,_0x287ba9));_0x55a2bb[_0x4d22f2(0xe9)]=!0x0;}else{for(_0x437a71=0x0,_0x1f4318=_0x179ba3,_0x2abf77=_0x437a71;_0x2abf77<_0x1f4318;_0x2abf77++)_0x512271[_0x4d22f2(0x1a6)](_0x1662fa[_0x4d22f2(0x172)](_0x1f6b26,_0x1b6604,_0x252ae4,_0x2abf77,_0x287ba9));}_0x287ba9['autoExpandPropertyCount']+=_0x512271[_0x4d22f2(0x155)];}if(!(_0x252ae4===_0x4d22f2(0x17e)||_0x252ae4===_0x4d22f2(0x121))&&!_0x34ff23&&_0x252ae4!=='String'&&_0x252ae4!==_0x4d22f2(0x14e)&&_0x252ae4!==_0x4d22f2(0x159)){var _0x5b1dce=_0x2d9852[_0x4d22f2(0x129)]||_0x287ba9[_0x4d22f2(0x129)];if(this[_0x4d22f2(0x180)](_0x1b6604)?(_0x2abf77=0x0,_0x1b6604[_0x4d22f2(0x1a9)](function(_0x1ec5f5){var _0x3a11b8=_0x4d22f2;if(_0x2e60f3++,_0x287ba9[_0x3a11b8(0x154)]++,_0x2e60f3>_0x5b1dce){_0x2230f8=!0x0;return;}if(!_0x287ba9[_0x3a11b8(0x160)]&&_0x287ba9[_0x3a11b8(0xde)]&&_0x287ba9[_0x3a11b8(0x154)]>_0x287ba9['autoExpandLimit']){_0x2230f8=!0x0;return;}_0x512271['push'](_0x1662fa[_0x3a11b8(0x172)](_0x1f6b26,_0x1b6604,_0x3a11b8(0xd0),_0x2abf77++,_0x287ba9,function(_0x2152a6){return function(){return _0x2152a6;};}(_0x1ec5f5)));})):this[_0x4d22f2(0xf3)](_0x1b6604)&&_0x1b6604['forEach'](function(_0x352abb,_0x150a02){var _0x1ee9a7=_0x4d22f2;if(_0x2e60f3++,_0x287ba9[_0x1ee9a7(0x154)]++,_0x2e60f3>_0x5b1dce){_0x2230f8=!0x0;return;}if(!_0x287ba9[_0x1ee9a7(0x160)]&&_0x287ba9['autoExpand']&&_0x287ba9['autoExpandPropertyCount']>_0x287ba9[_0x1ee9a7(0x1a7)]){_0x2230f8=!0x0;return;}var _0x1eaa85=_0x150a02['toString']();_0x1eaa85[_0x1ee9a7(0x155)]>0x64&&(_0x1eaa85=_0x1eaa85[_0x1ee9a7(0x1a5)](0x0,0x64)+_0x1ee9a7(0x131)),_0x512271[_0x1ee9a7(0x1a6)](_0x1662fa[_0x1ee9a7(0x172)](_0x1f6b26,_0x1b6604,'Map',_0x1eaa85,_0x287ba9,function(_0x3fcdd2){return function(){return _0x3fcdd2;};}(_0x352abb)));}),!_0x2abb0a){try{for(_0x406cf2 in _0x1b6604)if(!(_0x3e04a5&&_0x3acb99['test'](_0x406cf2))&&!this[_0x4d22f2(0xcc)](_0x1b6604,_0x406cf2,_0x287ba9)){if(_0x2e60f3++,_0x287ba9['autoExpandPropertyCount']++,_0x2e60f3>_0x5b1dce){_0x2230f8=!0x0;break;}if(!_0x287ba9[_0x4d22f2(0x160)]&&_0x287ba9[_0x4d22f2(0xde)]&&_0x287ba9[_0x4d22f2(0x154)]>_0x287ba9[_0x4d22f2(0x1a7)]){_0x2230f8=!0x0;break;}_0x512271[_0x4d22f2(0x1a6)](_0x1662fa['_addObjectProperty'](_0x1f6b26,_0x37a5d5,_0x1b6604,_0x252ae4,_0x406cf2,_0x287ba9));}}catch{}if(_0x37a5d5[_0x4d22f2(0x149)]=!0x0,_0x4828a1&&(_0x37a5d5[_0x4d22f2(0x128)]=!0x0),!_0x2230f8){var _0x142b7e=[]['concat'](this['_getOwnPropertyNames'](_0x1b6604))['concat'](this[_0x4d22f2(0xc6)](_0x1b6604));for(_0x2abf77=0x0,_0x179ba3=_0x142b7e[_0x4d22f2(0x155)];_0x2abf77<_0x179ba3;_0x2abf77++)if(_0x406cf2=_0x142b7e[_0x2abf77],!(_0x3e04a5&&_0x3acb99[_0x4d22f2(0x18d)](_0x406cf2[_0x4d22f2(0x123)]()))&&!this['_blacklistedProperty'](_0x1b6604,_0x406cf2,_0x287ba9)&&!_0x37a5d5[_0x4d22f2(0x104)+_0x406cf2['toString']()]){if(_0x2e60f3++,_0x287ba9[_0x4d22f2(0x154)]++,_0x2e60f3>_0x5b1dce){_0x2230f8=!0x0;break;}if(!_0x287ba9[_0x4d22f2(0x160)]&&_0x287ba9[_0x4d22f2(0xde)]&&_0x287ba9['autoExpandPropertyCount']>_0x287ba9['autoExpandLimit']){_0x2230f8=!0x0;break;}_0x512271[_0x4d22f2(0x1a6)](_0x1662fa['_addObjectProperty'](_0x1f6b26,_0x37a5d5,_0x1b6604,_0x252ae4,_0x406cf2,_0x287ba9));}}}}}if(_0x55a2bb[_0x4d22f2(0x162)]=_0x252ae4,_0x679d7f?(_0x55a2bb['value']=_0x1b6604[_0x4d22f2(0x153)](),this['_capIfString'](_0x252ae4,_0x55a2bb,_0x287ba9,_0x2d9852)):_0x252ae4===_0x4d22f2(0xe3)?_0x55a2bb[_0x4d22f2(0x1b4)]=this[_0x4d22f2(0xce)][_0x4d22f2(0x188)](_0x1b6604):_0x252ae4===_0x4d22f2(0x159)?_0x55a2bb[_0x4d22f2(0x1b4)]=_0x1b6604['toString']():_0x252ae4==='RegExp'?_0x55a2bb[_0x4d22f2(0x1b4)]=this[_0x4d22f2(0x1a8)][_0x4d22f2(0x188)](_0x1b6604):_0x252ae4==='symbol'&&this['_Symbol']?_0x55a2bb['value']=this[_0x4d22f2(0x150)][_0x4d22f2(0xf7)]['toString'][_0x4d22f2(0x188)](_0x1b6604):!_0x287ba9[_0x4d22f2(0xd8)]&&!(_0x252ae4===_0x4d22f2(0x17e)||_0x252ae4===_0x4d22f2(0x121))&&(delete _0x55a2bb[_0x4d22f2(0x1b4)],_0x55a2bb[_0x4d22f2(0x111)]=!0x0),_0x2230f8&&(_0x55a2bb[_0x4d22f2(0xfe)]=!0x0),_0x609320=_0x287ba9['node']['current'],_0x287ba9[_0x4d22f2(0x169)][_0x4d22f2(0x157)]=_0x55a2bb,this[_0x4d22f2(0xc5)](_0x55a2bb,_0x287ba9),_0x512271[_0x4d22f2(0x155)]){for(_0x2abf77=0x0,_0x179ba3=_0x512271['length'];_0x2abf77<_0x179ba3;_0x2abf77++)_0x512271[_0x2abf77](_0x2abf77);}_0x1f6b26[_0x4d22f2(0x155)]&&(_0x55a2bb[_0x4d22f2(0x129)]=_0x1f6b26);}catch(_0x86245e){_0xc5be16(_0x86245e,_0x55a2bb,_0x287ba9);}return this[_0x4d22f2(0x14d)](_0x1b6604,_0x55a2bb),this[_0x4d22f2(0xfd)](_0x55a2bb,_0x287ba9),_0x287ba9[_0x4d22f2(0x169)]['current']=_0x609320,_0x287ba9['level']--,_0x287ba9[_0x4d22f2(0xde)]=_0x5b8312,_0x287ba9[_0x4d22f2(0xde)]&&_0x287ba9[_0x4d22f2(0x1ad)][_0x4d22f2(0x106)](),_0x55a2bb;}['_getOwnPropertySymbols'](_0x5b3c9d){var _0x30ece4=_0x512a37;return Object[_0x30ece4(0xfa)]?Object[_0x30ece4(0xfa)](_0x5b3c9d):[];}[_0x512a37(0x180)](_0x20fa99){var _0x40165d=_0x512a37;return!!(_0x20fa99&&_0x14a8cc[_0x40165d(0xd0)]&&this[_0x40165d(0xda)](_0x20fa99)===_0x40165d(0xfc)&&_0x20fa99[_0x40165d(0x1a9)]);}[_0x512a37(0xcc)](_0x23da32,_0x5f9bbd,_0x5653eb){var _0x55ece4=_0x512a37;return _0x5653eb[_0x55ece4(0x139)]?typeof _0x23da32[_0x5f9bbd]=='function':!0x1;}[_0x512a37(0x13b)](_0x41aa7c){var _0x3a80d0=_0x512a37,_0x3391ea='';return _0x3391ea=typeof _0x41aa7c,_0x3391ea===_0x3a80d0(0x194)?this[_0x3a80d0(0xda)](_0x41aa7c)===_0x3a80d0(0x14a)?_0x3391ea='array':this[_0x3a80d0(0xda)](_0x41aa7c)===_0x3a80d0(0x19a)?_0x3391ea=_0x3a80d0(0xe3):this['_objectToString'](_0x41aa7c)===_0x3a80d0(0x108)?_0x3391ea='bigint':_0x41aa7c===null?_0x3391ea='null':_0x41aa7c[_0x3a80d0(0xdf)]&&(_0x3391ea=_0x41aa7c['constructor'][_0x3a80d0(0xe5)]||_0x3391ea):_0x3391ea===_0x3a80d0(0x121)&&this['_HTMLAllCollection']&&_0x41aa7c instanceof this[_0x3a80d0(0x10d)]&&(_0x3391ea=_0x3a80d0(0x1a1)),_0x3391ea;}[_0x512a37(0xda)](_0x152232){var _0x50db19=_0x512a37;return Object['prototype'][_0x50db19(0x123)]['call'](_0x152232);}[_0x512a37(0xc7)](_0x1e177c){var _0x1a7993=_0x512a37;return _0x1e177c===_0x1a7993(0x191)||_0x1e177c===_0x1a7993(0xec)||_0x1e177c==='number';}[_0x512a37(0x158)](_0x571b5b){var _0x2b3223=_0x512a37;return _0x571b5b===_0x2b3223(0x12b)||_0x571b5b==='String'||_0x571b5b==='Number';}[_0x512a37(0x172)](_0x1da961,_0x22304c,_0x293f1f,_0x3dc3b7,_0x1f8f7d,_0x3f521e){var _0x414591=this;return function(_0x294122){var _0xe2057a=_0x2152,_0x4caf4e=_0x1f8f7d['node']['current'],_0x17c538=_0x1f8f7d[_0xe2057a(0x169)][_0xe2057a(0xe8)],_0x1899c8=_0x1f8f7d[_0xe2057a(0x169)]['parent'];_0x1f8f7d[_0xe2057a(0x169)]['parent']=_0x4caf4e,_0x1f8f7d[_0xe2057a(0x169)][_0xe2057a(0xe8)]=typeof _0x3dc3b7==_0xe2057a(0x1b0)?_0x3dc3b7:_0x294122,_0x1da961['push'](_0x414591[_0xe2057a(0x10b)](_0x22304c,_0x293f1f,_0x3dc3b7,_0x1f8f7d,_0x3f521e)),_0x1f8f7d[_0xe2057a(0x169)][_0xe2057a(0xd7)]=_0x1899c8,_0x1f8f7d['node'][_0xe2057a(0xe8)]=_0x17c538;};}[_0x512a37(0xe0)](_0x49b9e5,_0x152fe1,_0x5aeb78,_0x361986,_0x4edf24,_0x2788bf,_0x319bf9){var _0x34d254=_0x512a37,_0x1d00e8=this;return _0x152fe1[_0x34d254(0x104)+_0x4edf24[_0x34d254(0x123)]()]=!0x0,function(_0x5d2cc){var _0x41493f=_0x34d254,_0x10d44d=_0x2788bf[_0x41493f(0x169)][_0x41493f(0x157)],_0x101fd9=_0x2788bf[_0x41493f(0x169)][_0x41493f(0xe8)],_0x42de31=_0x2788bf['node'][_0x41493f(0xd7)];_0x2788bf['node'][_0x41493f(0xd7)]=_0x10d44d,_0x2788bf[_0x41493f(0x169)][_0x41493f(0xe8)]=_0x5d2cc,_0x49b9e5[_0x41493f(0x1a6)](_0x1d00e8[_0x41493f(0x10b)](_0x5aeb78,_0x361986,_0x4edf24,_0x2788bf,_0x319bf9)),_0x2788bf[_0x41493f(0x169)][_0x41493f(0xd7)]=_0x42de31,_0x2788bf[_0x41493f(0x169)][_0x41493f(0xe8)]=_0x101fd9;};}['_property'](_0xd82fc7,_0x5bfaa0,_0x5cce9b,_0x13c48a,_0x565628){var _0x1f86dc=_0x512a37,_0x377413=this;_0x565628||(_0x565628=function(_0xd2dc36,_0x437368){return _0xd2dc36[_0x437368];});var _0x58e1c9=_0x5cce9b[_0x1f86dc(0x123)](),_0x124f8e=_0x13c48a[_0x1f86dc(0x16a)]||{},_0x457a65=_0x13c48a['depth'],_0xe1ad95=_0x13c48a[_0x1f86dc(0x160)];try{var _0x4784ac=this[_0x1f86dc(0xf3)](_0xd82fc7),_0x35ea9b=_0x58e1c9;_0x4784ac&&_0x35ea9b[0x0]==='\\x27'&&(_0x35ea9b=_0x35ea9b[_0x1f86dc(0x175)](0x1,_0x35ea9b[_0x1f86dc(0x155)]-0x2));var _0x1caeb0=_0x13c48a[_0x1f86dc(0x16a)]=_0x124f8e[_0x1f86dc(0x104)+_0x35ea9b];_0x1caeb0&&(_0x13c48a[_0x1f86dc(0xd8)]=_0x13c48a['depth']+0x1),_0x13c48a['isExpressionToEvaluate']=!!_0x1caeb0;var _0x359faf=typeof _0x5cce9b==_0x1f86dc(0xee),_0x5c7fcb={'name':_0x359faf||_0x4784ac?_0x58e1c9:this[_0x1f86dc(0xd2)](_0x58e1c9)};if(_0x359faf&&(_0x5c7fcb[_0x1f86dc(0xee)]=!0x0),!(_0x5bfaa0==='array'||_0x5bfaa0===_0x1f86dc(0x176))){var _0x1c5970=this['_getOwnPropertyDescriptor'](_0xd82fc7,_0x5cce9b);if(_0x1c5970&&(_0x1c5970['set']&&(_0x5c7fcb[_0x1f86dc(0x142)]=!0x0),_0x1c5970['get']&&!_0x1caeb0&&!_0x13c48a['resolveGetters']))return _0x5c7fcb['getter']=!0x0,this[_0x1f86dc(0x135)](_0x5c7fcb,_0x13c48a),_0x5c7fcb;}var _0x2306a8;try{_0x2306a8=_0x565628(_0xd82fc7,_0x5cce9b);}catch(_0x4daa53){return _0x5c7fcb={'name':_0x58e1c9,'type':_0x1f86dc(0x1aa),'error':_0x4daa53[_0x1f86dc(0x19b)]},this[_0x1f86dc(0x135)](_0x5c7fcb,_0x13c48a),_0x5c7fcb;}var _0xc6538=this[_0x1f86dc(0x13b)](_0x2306a8),_0x26e7ca=this[_0x1f86dc(0xc7)](_0xc6538);if(_0x5c7fcb[_0x1f86dc(0x162)]=_0xc6538,_0x26e7ca)this[_0x1f86dc(0x135)](_0x5c7fcb,_0x13c48a,_0x2306a8,function(){var _0x5055ce=_0x1f86dc;_0x5c7fcb[_0x5055ce(0x1b4)]=_0x2306a8[_0x5055ce(0x153)](),!_0x1caeb0&&_0x377413[_0x5055ce(0x171)](_0xc6538,_0x5c7fcb,_0x13c48a,{});});else{var _0x1d990d=_0x13c48a['autoExpand']&&_0x13c48a['level']<_0x13c48a[_0x1f86dc(0x134)]&&_0x13c48a[_0x1f86dc(0x1ad)][_0x1f86dc(0x16c)](_0x2306a8)<0x0&&_0xc6538!==_0x1f86dc(0x198)&&_0x13c48a[_0x1f86dc(0x154)]<_0x13c48a[_0x1f86dc(0x1a7)];_0x1d990d||_0x13c48a[_0x1f86dc(0x13a)]<_0x457a65||_0x1caeb0?(this['serialize'](_0x5c7fcb,_0x2306a8,_0x13c48a,_0x1caeb0||{}),this[_0x1f86dc(0x14d)](_0x2306a8,_0x5c7fcb)):this[_0x1f86dc(0x135)](_0x5c7fcb,_0x13c48a,_0x2306a8,function(){var _0x14191b=_0x1f86dc;_0xc6538===_0x14191b(0x17e)||_0xc6538===_0x14191b(0x121)||(delete _0x5c7fcb[_0x14191b(0x1b4)],_0x5c7fcb['capped']=!0x0);});}return _0x5c7fcb;}finally{_0x13c48a[_0x1f86dc(0x16a)]=_0x124f8e,_0x13c48a[_0x1f86dc(0xd8)]=_0x457a65,_0x13c48a['isExpressionToEvaluate']=_0xe1ad95;}}[_0x512a37(0x171)](_0x180f90,_0x11d747,_0x154dd8,_0x21893f){var _0x56825e=_0x512a37,_0x176056=_0x21893f[_0x56825e(0x197)]||_0x154dd8['strLength'];if((_0x180f90===_0x56825e(0xec)||_0x180f90===_0x56825e(0xf5))&&_0x11d747[_0x56825e(0x1b4)]){let _0x1e705c=_0x11d747[_0x56825e(0x1b4)][_0x56825e(0x155)];_0x154dd8[_0x56825e(0x15f)]+=_0x1e705c,_0x154dd8[_0x56825e(0x15f)]>_0x154dd8[_0x56825e(0x132)]?(_0x11d747[_0x56825e(0x111)]='',delete _0x11d747[_0x56825e(0x1b4)]):_0x1e705c>_0x176056&&(_0x11d747[_0x56825e(0x111)]=_0x11d747[_0x56825e(0x1b4)]['substr'](0x0,_0x176056),delete _0x11d747[_0x56825e(0x1b4)]);}}[_0x512a37(0xf3)](_0x3a986b){var _0x2ef40b=_0x512a37;return!!(_0x3a986b&&_0x14a8cc[_0x2ef40b(0x138)]&&this['_objectToString'](_0x3a986b)===_0x2ef40b(0x136)&&_0x3a986b[_0x2ef40b(0x1a9)]);}[_0x512a37(0xd2)](_0x495bcf){var _0x252e7d=_0x512a37;if(_0x495bcf[_0x252e7d(0x184)](/^\\d+$/))return _0x495bcf;var _0x408928;try{_0x408928=JSON[_0x252e7d(0x13d)](''+_0x495bcf);}catch{_0x408928='\\x22'+this[_0x252e7d(0xda)](_0x495bcf)+'\\x22';}return _0x408928[_0x252e7d(0x184)](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x408928=_0x408928['substr'](0x1,_0x408928[_0x252e7d(0x155)]-0x2):_0x408928=_0x408928[_0x252e7d(0x122)](/'/g,'\\x5c\\x27')[_0x252e7d(0x122)](/\\\\\"/g,'\\x22')['replace'](/(^\"|\"$)/g,'\\x27'),_0x408928;}[_0x512a37(0x135)](_0x3ce327,_0xa05fc0,_0x285bd7,_0x298585){var _0x2e1b6b=_0x512a37;this[_0x2e1b6b(0xc5)](_0x3ce327,_0xa05fc0),_0x298585&&_0x298585(),this['_additionalMetadata'](_0x285bd7,_0x3ce327),this[_0x2e1b6b(0xfd)](_0x3ce327,_0xa05fc0);}[_0x512a37(0xc5)](_0x1df5cb,_0x1e600e){var _0x569524=_0x512a37;this[_0x569524(0xe7)](_0x1df5cb,_0x1e600e),this[_0x569524(0x195)](_0x1df5cb,_0x1e600e),this[_0x569524(0xc9)](_0x1df5cb,_0x1e600e),this[_0x569524(0x109)](_0x1df5cb,_0x1e600e);}[_0x512a37(0xe7)](_0x4a32d0,_0x365d19){}['_setNodeQueryPath'](_0x8e29ee,_0x1969db){}['_setNodeLabel'](_0x957f54,_0x3043fe){}[_0x512a37(0x174)](_0x4f244d){var _0x33306e=_0x512a37;return _0x4f244d===this[_0x33306e(0x1a2)];}['_treeNodePropertiesAfterFullValue'](_0x2f2d65,_0x5a7554){var _0x1a9648=_0x512a37;this[_0x1a9648(0xf1)](_0x2f2d65,_0x5a7554),this[_0x1a9648(0x11f)](_0x2f2d65),_0x5a7554['sortProps']&&this[_0x1a9648(0x182)](_0x2f2d65),this['_addFunctionsNode'](_0x2f2d65,_0x5a7554),this[_0x1a9648(0x15a)](_0x2f2d65,_0x5a7554),this[_0x1a9648(0x145)](_0x2f2d65);}[_0x512a37(0x14d)](_0x218596,_0x39bb99){var _0xf711df=_0x512a37;try{_0x218596&&typeof _0x218596[_0xf711df(0x155)]==_0xf711df(0x1b0)&&(_0x39bb99['length']=_0x218596[_0xf711df(0x155)]);}catch{}if(_0x39bb99['type']===_0xf711df(0x1b0)||_0x39bb99[_0xf711df(0x162)]==='Number'){if(isNaN(_0x39bb99['value']))_0x39bb99[_0xf711df(0x148)]=!0x0,delete _0x39bb99[_0xf711df(0x1b4)];else switch(_0x39bb99[_0xf711df(0x1b4)]){case Number[_0xf711df(0x18c)]:_0x39bb99[_0xf711df(0x105)]=!0x0,delete _0x39bb99[_0xf711df(0x1b4)];break;case Number[_0xf711df(0x102)]:_0x39bb99['negativeInfinity']=!0x0,delete _0x39bb99[_0xf711df(0x1b4)];break;case 0x0:this[_0xf711df(0x190)](_0x39bb99['value'])&&(_0x39bb99['negativeZero']=!0x0);break;}}else _0x39bb99[_0xf711df(0x162)]===_0xf711df(0x198)&&typeof _0x218596[_0xf711df(0xe5)]=='string'&&_0x218596[_0xf711df(0xe5)]&&_0x39bb99[_0xf711df(0xe5)]&&_0x218596[_0xf711df(0xe5)]!==_0x39bb99['name']&&(_0x39bb99[_0xf711df(0x15b)]=_0x218596['name']);}['_isNegativeZero'](_0x1878c3){return 0x1/_0x1878c3===Number['NEGATIVE_INFINITY'];}[_0x512a37(0x182)](_0x4f6bdc){var _0x54b436=_0x512a37;!_0x4f6bdc[_0x54b436(0x129)]||!_0x4f6bdc[_0x54b436(0x129)][_0x54b436(0x155)]||_0x4f6bdc['type']===_0x54b436(0x1ac)||_0x4f6bdc['type']==='Map'||_0x4f6bdc[_0x54b436(0x162)]==='Set'||_0x4f6bdc[_0x54b436(0x129)][_0x54b436(0x178)](function(_0x4410ef,_0x20e5af){var _0x157689=_0x54b436,_0x2f4682=_0x4410ef[_0x157689(0xe5)][_0x157689(0x1b3)](),_0x249a2f=_0x20e5af['name'][_0x157689(0x1b3)]();return _0x2f4682<_0x249a2f?-0x1:_0x2f4682>_0x249a2f?0x1:0x0;});}['_addFunctionsNode'](_0x3e4f0c,_0x16620d){var _0x3c491d=_0x512a37;if(!(_0x16620d['noFunctions']||!_0x3e4f0c[_0x3c491d(0x129)]||!_0x3e4f0c[_0x3c491d(0x129)][_0x3c491d(0x155)])){for(var _0x32424d=[],_0x11cbbe=[],_0x4fe7b4=0x0,_0x3d8d0c=_0x3e4f0c[_0x3c491d(0x129)][_0x3c491d(0x155)];_0x4fe7b4<_0x3d8d0c;_0x4fe7b4++){var _0x46c351=_0x3e4f0c[_0x3c491d(0x129)][_0x4fe7b4];_0x46c351[_0x3c491d(0x162)]===_0x3c491d(0x198)?_0x32424d['push'](_0x46c351):_0x11cbbe[_0x3c491d(0x1a6)](_0x46c351);}if(!(!_0x11cbbe[_0x3c491d(0x155)]||_0x32424d[_0x3c491d(0x155)]<=0x1)){_0x3e4f0c[_0x3c491d(0x129)]=_0x11cbbe;var _0x46d709={'functionsNode':!0x0,'props':_0x32424d};this['_setNodeId'](_0x46d709,_0x16620d),this[_0x3c491d(0xf1)](_0x46d709,_0x16620d),this[_0x3c491d(0x11f)](_0x46d709),this['_setNodePermissions'](_0x46d709,_0x16620d),_0x46d709['id']+='\\x20f',_0x3e4f0c[_0x3c491d(0x129)][_0x3c491d(0x119)](_0x46d709);}}}[_0x512a37(0x15a)](_0x309916,_0x31adc5){}[_0x512a37(0x11f)](_0x33c01d){}[_0x512a37(0xcf)](_0x2f14ed){var _0x29caf9=_0x512a37;return Array[_0x29caf9(0x19e)](_0x2f14ed)||typeof _0x2f14ed==_0x29caf9(0x194)&&this['_objectToString'](_0x2f14ed)===_0x29caf9(0x14a);}[_0x512a37(0x109)](_0x3d2b35,_0x5a2aae){}[_0x512a37(0x145)](_0x5e8749){var _0x1ec90c=_0x512a37;delete _0x5e8749[_0x1ec90c(0x189)],delete _0x5e8749[_0x1ec90c(0xcb)],delete _0x5e8749[_0x1ec90c(0x193)];}['_setNodeExpressionPath'](_0x3edd3c,_0x3e2e0c){}[_0x512a37(0x100)](_0x56cf6d){var _0x2cf63a=_0x512a37;return _0x56cf6d?_0x56cf6d[_0x2cf63a(0x184)](this[_0x2cf63a(0x183)])?'['+_0x56cf6d+']':_0x56cf6d[_0x2cf63a(0x184)](this[_0x2cf63a(0xf2)])?'.'+_0x56cf6d:_0x56cf6d[_0x2cf63a(0x184)](this[_0x2cf63a(0xe1)])?'['+_0x56cf6d+']':'[\\x27'+_0x56cf6d+'\\x27]':'';}}let _0xcb6255=new _0x56130d();function _0x4a295a(_0x50db00,_0x45daa5,_0xc5ab2d,_0x1fd4b8,_0xf9435f,_0x51a04f){var _0x4801b6=_0x512a37;let _0x40db4a,_0x1a3516;try{_0x1a3516=_0x399678(),_0x40db4a=_0x586ea4[_0x45daa5],!_0x40db4a||_0x1a3516-_0x40db4a['ts']>0x1f4&&_0x40db4a[_0x4801b6(0x166)]&&_0x40db4a[_0x4801b6(0x14b)]/_0x40db4a['count']<0x64?(_0x586ea4[_0x45daa5]=_0x40db4a={'count':0x0,'time':0x0,'ts':_0x1a3516},_0x586ea4[_0x4801b6(0x18e)]={}):_0x1a3516-_0x586ea4[_0x4801b6(0x18e)]['ts']>0x32&&_0x586ea4[_0x4801b6(0x18e)][_0x4801b6(0x166)]&&_0x586ea4[_0x4801b6(0x18e)][_0x4801b6(0x14b)]/_0x586ea4[_0x4801b6(0x18e)][_0x4801b6(0x166)]<0x64&&(_0x586ea4[_0x4801b6(0x18e)]={});let _0x16b942=[],_0x37e208=_0x40db4a[_0x4801b6(0x140)]||_0x586ea4['hits'][_0x4801b6(0x140)]?_0x1b0717:_0x16a222,_0x4245e8=_0x4887f0=>{var _0x11e2ab=_0x4801b6;let _0x54b033={};return _0x54b033[_0x11e2ab(0x129)]=_0x4887f0['props'],_0x54b033[_0x11e2ab(0x130)]=_0x4887f0['elements'],_0x54b033[_0x11e2ab(0x197)]=_0x4887f0[_0x11e2ab(0x197)],_0x54b033[_0x11e2ab(0x132)]=_0x4887f0[_0x11e2ab(0x132)],_0x54b033[_0x11e2ab(0x1a7)]=_0x4887f0[_0x11e2ab(0x1a7)],_0x54b033[_0x11e2ab(0x134)]=_0x4887f0[_0x11e2ab(0x134)],_0x54b033['sortProps']=!0x1,_0x54b033[_0x11e2ab(0x139)]=!_0x54a870,_0x54b033[_0x11e2ab(0xd8)]=0x1,_0x54b033[_0x11e2ab(0x13a)]=0x0,_0x54b033['expId']=_0x11e2ab(0xd1),_0x54b033[_0x11e2ab(0x16d)]=_0x11e2ab(0x164),_0x54b033['autoExpand']=!0x0,_0x54b033[_0x11e2ab(0x1ad)]=[],_0x54b033[_0x11e2ab(0x154)]=0x0,_0x54b033[_0x11e2ab(0x1ab)]=!0x0,_0x54b033[_0x11e2ab(0x15f)]=0x0,_0x54b033[_0x11e2ab(0x169)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x54b033;};for(var _0x11df82=0x0;_0x11df82<_0xf9435f['length'];_0x11df82++)_0x16b942[_0x4801b6(0x1a6)](_0xcb6255[_0x4801b6(0x127)]({'timeNode':_0x50db00===_0x4801b6(0x14b)||void 0x0},_0xf9435f[_0x11df82],_0x4245e8(_0x37e208),{}));if(_0x50db00==='trace'){let _0x20f011=Error[_0x4801b6(0x133)];try{Error[_0x4801b6(0x133)]=0x1/0x0,_0x16b942[_0x4801b6(0x1a6)](_0xcb6255[_0x4801b6(0x127)]({'stackNode':!0x0},new Error()[_0x4801b6(0x147)],_0x4245e8(_0x37e208),{'strLength':0x1/0x0}));}finally{Error['stackTraceLimit']=_0x20f011;}}return{'method':_0x4801b6(0x112),'version':_0x5dea60,'args':[{'ts':_0xc5ab2d,'session':_0x1fd4b8,'args':_0x16b942,'id':_0x45daa5,'context':_0x51a04f}]};}catch(_0x1c2ebd){return{'method':_0x4801b6(0x112),'version':_0x5dea60,'args':[{'ts':_0xc5ab2d,'session':_0x1fd4b8,'args':[{'type':_0x4801b6(0x1aa),'error':_0x1c2ebd&&_0x1c2ebd[_0x4801b6(0x19b)]}],'id':_0x45daa5,'context':_0x51a04f}]};}finally{try{if(_0x40db4a&&_0x1a3516){let _0x396f96=_0x399678();_0x40db4a[_0x4801b6(0x166)]++,_0x40db4a[_0x4801b6(0x14b)]+=_0x3f5d2d(_0x1a3516,_0x396f96),_0x40db4a['ts']=_0x396f96,_0x586ea4[_0x4801b6(0x18e)][_0x4801b6(0x166)]++,_0x586ea4[_0x4801b6(0x18e)]['time']+=_0x3f5d2d(_0x1a3516,_0x396f96),_0x586ea4[_0x4801b6(0x18e)]['ts']=_0x396f96,(_0x40db4a[_0x4801b6(0x166)]>0x32||_0x40db4a[_0x4801b6(0x14b)]>0x64)&&(_0x40db4a['reduceLimits']=!0x0),(_0x586ea4[_0x4801b6(0x18e)][_0x4801b6(0x166)]>0x3e8||_0x586ea4['hits']['time']>0x12c)&&(_0x586ea4[_0x4801b6(0x18e)][_0x4801b6(0x140)]=!0x0);}}catch{}}}return _0x14a8cc[_0x512a37(0x101)];})(globalThis,_0x43ccbf(0xeb),_0x43ccbf(0x1b1),_0x43ccbf(0x167),_0x43ccbf(0x17b),'1.0.0',_0x43ccbf(0xff),_0x43ccbf(0x185),_0x43ccbf(0x187));function _0x5750(){var _0x51fcf3=['stringify','disabledLog','6iRzvQR','reduceLimits','port','setter','reload','Symbol','_cleanNode','url','stack','nan','_p_length','[object\\x20Array]','time','_maxConnectAttemptCount','_additionalMetadata','Buffer','36UGqKvx','_Symbol','elapsed','_connecting','valueOf','autoExpandPropertyCount','length','now','current','_isPrimitiveWrapperType','bigint','_addLoadNode','funcName','close','data','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','allStrLength','isExpressionToEvaluate','1912428peUkZS','type','getOwnPropertyNames','root_exp','70553MkwoTI','count',\"c:\\\\Users\\\\Adeus\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-0.0.182\\\\node_modules\",'pathToFileURL','node','expressionsToEvaluate','ws://','indexOf','rootExpression','2100Tdowba','_reconnectTimeout','1714945fcpOOS','_capIfString','_addProperty','onerror','_isUndefined','substr','Error','_allowedToConnectOnSend','sort','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','149XbESjE','webpack','272iXOgWY','_connectAttemptCount','null','join','_isSet','_webSocketErrorDocsLink','_sortProps','_numberRegExp','match',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"DESKTOP-65S8CLU\",\"192.168.56.1\",\"192.168.0.7\"],'readyState','','call','_hasSymbolPropertyOnItsPath','console','host','POSITIVE_INFINITY','test','hits','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','_isNegativeZero','boolean','https://tinyurl.com/37x8b79t','_hasMapOnItsPath','object','_setNodeQueryPath','warn','strLength','function','_WebSocketClass','[object\\x20Date]','message','_socket','onclose','isArray','370469cMKCLB','includes','HTMLAllCollection','_undefined','hasOwnProperty',':logPointId:','slice','push','autoExpandLimit','_regExpToString','forEach','unknown','resolveGetters','array','autoExpandPreviousObjects','process','bind','number','61442','hrtime','toLowerCase','value','unref','WebSocket','_treeNodePropertiesBeforeFullValue','_getOwnPropertySymbols','_isPrimitiveType','\\x20browser','_setNodeExpressionPath','default','_hasSetOnItsPath','_blacklistedProperty','map','_dateToString','_isArray','Set','root_exp_id','_propertyName','_connectToHostNow','_inBrowser','1464558bwCIvl','perf_hooks','parent','depth','astro','_objectToString','nuxt','getPrototypeOf','_console_ninja_session','autoExpand','constructor','_addObjectProperty','_quotedRegExp','onopen','date','nodeModules','name','_disposeWebsocket','_setNodeId','index','cappedElements','parse','127.0.0.1','string','performance','symbol','location','_getOwnPropertyNames','_setNodeLabel','_keyStrRegExp','_isMap','global','String','4GKbUZr','prototype','send','_WebSocket','getOwnPropertySymbols','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','[object\\x20Set]','_treeNodePropertiesAfterFullValue','cappedProps','1689537760621','_propertyAccessor','_console_ninja','NEGATIVE_INFINITY','_attemptToReconnectShortly','_p_','positiveInfinity','pop','timeStamp','[object\\x20BigInt]','_setNodePermissions','error','_property','versions','_HTMLAllCollection','62140fBudxU','path','getWebSocketClass','capped','log','method','disabledTrace','trace','argumentResolutionError','_ws','\\x20server','unshift','10MoeyiJ','timeEnd','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','_allowedToSend','_consoleNinjaAllowedToStart','_setNodeExpandableState','__es'+'Module','undefined','replace','toString','onmessage','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','enumerable','serialize','_p_name','props','then','Boolean','hostname','_connected','2334ykESxH','getOwnPropertyDescriptor','elements','...','totalStrLength','stackTraceLimit','autoExpandMaxDepth','_processTreeNodeResult','[object\\x20Map]','_sendErrorMessage','Map','noFunctions','level','_type','ws/index.js'];_0x5750=function(){return _0x51fcf3;};return _0x5750();}");}catch(e){}};function oo_oo(i,...v){try{oo_cm().consoleLog(i, v);}catch(e){} return v};function oo_tr(i,...v){try{oo_cm().consoleTrace(i, v);}catch(e){} return v};function oo_ts(){try{oo_cm().consoleTime();}catch(e){}};function oo_te(){try{oo_cm().consoleTimeEnd();}catch(e){}};/*eslint eslint-comments/disable-enable-pair:,eslint-comments/no-unlimited-disable:,eslint-comments/no-aggregating-enable:,eslint-comments/no-duplicate-disable:,eslint-comments/no-unused-disable:,eslint-comments/no-unused-enable:,*/

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1R3RDtBQUN4RCxpRUFBZSw4REFBYTs7Ozs7Ozs7Ozs7Ozs7O0FDRDVCO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOcUU7QUFDSjtBQUNRO0FBQ2Q7QUFDUTtBQUNOO0FBQ0g7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQSx5QkFBeUIsd0VBQWMsaUJBQWlCO0FBQ3hEO0FBQ0EsNkVBQTZFO0FBQzdFO0FBQ0E7QUFDQTtBQUNBLGFBQWEscUVBQWU7QUFDNUIsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTTtBQUNOO0FBQ0E7QUFDQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esc0JBQXNCLDJFQUFpQixRQUFRO0FBQy9DO0FBQ0EsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHFFQUFlO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHFFQUFlO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtRUFBaUI7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHFFQUFlO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsZUFBZSxvRUFBVTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGtCQUFrQix1RUFBYTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxvQkFBb0IseUVBQWU7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHFFQUFlO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxXQUFXLG1FQUFpQjtBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxXQUFXLG1FQUFpQjtBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxXQUFXLG1FQUFpQjtBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxxRUFBZTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLHFFQUFlO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FB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RixJQUFJLGlCQUFpQixPQUFPLHVEQUF1RCw0Q0FBNEMsdUVBQXVFLHFDQUFxQyxJQUFJLFFBQVEsSUFBSSx5QkFBeUIsMEJBQTBCLDBnQkFBMGdCLFNBQVMsb0NBQW9DLDJJQUEySSxtQkFBbUIscWdCQUFxZ0IsdXhFQUF1eEUsOGlDQUE4aUMsbUJBQW1CLG1CQUFtQixrQkFBa0IsSUFBSSxZQUFZLHVCQUF1QixJQUFJLDBCQUEwQixXQUFXLFVBQVUsdUJBQXVCLElBQUksNEJBQTRCLFdBQVcsVUFBVSxpQkFBaUIsSUFBSSx1QkFBdUIsWUFBWSxpQkFBaUIsSUFBSSwwQkFBMEIsWUFBWTs7Ozs7O1VDL0J4dW9DO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNrRDtBQUNsRDtBQUNBLGtFQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9kZWZhdWx0TG9jYWxlL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9mb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9saWdodEZvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDRGF5T2ZZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ0lTT1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9wcm90ZWN0ZWRUb2tlbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENJU09XZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9hZGREYXlzL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9hZGRNaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2FkZE1vbnRocy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vYWRkL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9mb3JtYXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNWYWxpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRNYXRjaEZuL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXREaXN0YW5jZS9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0TG9uZy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2xvY2FsaXplL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9tYXRjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdWJNaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9kaXNwbGF5Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9xdWVyeS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZExlYWRpbmdaZXJvcyhudW1iZXIsIHRhcmdldExlbmd0aCkge1xyXG4gIHZhciBzaWduID0gbnVtYmVyIDwgMCA/ICctJyA6ICcnO1xyXG4gIHZhciBvdXRwdXQgPSBNYXRoLmFicyhudW1iZXIpLnRvU3RyaW5nKCk7XHJcblxyXG4gIHdoaWxlIChvdXRwdXQubGVuZ3RoIDwgdGFyZ2V0TGVuZ3RoKSB7XHJcbiAgICBvdXRwdXQgPSAnMCcgKyBvdXRwdXQ7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gc2lnbiArIG91dHB1dDtcclxufSIsImltcG9ydCBkZWZhdWx0TG9jYWxlIGZyb20gXCIuLi8uLi9sb2NhbGUvZW4tVVMvaW5kZXguanNcIjtcclxuZXhwb3J0IGRlZmF1bHQgZGVmYXVsdExvY2FsZTsiLCJ2YXIgZGVmYXVsdE9wdGlvbnMgPSB7fTtcclxuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRPcHRpb25zKCkge1xyXG4gIHJldHVybiBkZWZhdWx0T3B0aW9ucztcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2V0RGVmYXVsdE9wdGlvbnMobmV3T3B0aW9ucykge1xyXG4gIGRlZmF1bHRPcHRpb25zID0gbmV3T3B0aW9ucztcclxufSIsImltcG9ydCBnZXRVVENEYXlPZlllYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDRGF5T2ZZZWFyL2luZGV4LmpzXCI7XHJcbmltcG9ydCBnZXRVVENJU09XZWVrIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ0lTT1dlZWsvaW5kZXguanNcIjtcclxuaW1wb3J0IGdldFVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzXCI7XHJcbmltcG9ydCBnZXRVVENXZWVrIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ1dlZWsvaW5kZXguanNcIjtcclxuaW1wb3J0IGdldFVUQ1dlZWtZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XHJcbmltcG9ydCBhZGRMZWFkaW5nWmVyb3MgZnJvbSBcIi4uLy4uL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qc1wiO1xyXG5pbXBvcnQgbGlnaHRGb3JtYXR0ZXJzIGZyb20gXCIuLi9saWdodEZvcm1hdHRlcnMvaW5kZXguanNcIjtcclxudmFyIGRheVBlcmlvZEVudW0gPSB7XHJcbiAgYW06ICdhbScsXHJcbiAgcG06ICdwbScsXHJcbiAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXHJcbiAgbm9vbjogJ25vb24nLFxyXG4gIG1vcm5pbmc6ICdtb3JuaW5nJyxcclxuICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxyXG4gIGV2ZW5pbmc6ICdldmVuaW5nJyxcclxuICBuaWdodDogJ25pZ2h0J1xyXG59O1xyXG5cclxuLypcclxuICogfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG4gKiB8LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XHJcbiAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgTWlsbGlzZWNvbmRzIGluIGRheSAgICAgICAgICAgIHxcclxuICogfCAgYiAgfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgfCAgQiAgfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgfFxyXG4gKiB8ICBjICB8IFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrICB8ICBDKiB8IExvY2FsaXplZCBob3VyIHcvIGRheSBwZXJpb2QgICB8XHJcbiAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgIHxcclxuICogfCAgZSAgfCBMb2NhbCBkYXkgb2Ygd2VlayAgICAgICAgICAgICAgfCAgRSAgfCBEYXkgb2Ygd2VlayAgICAgICAgICAgICAgICAgICAgfFxyXG4gKiB8ICBmICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBGKiB8IERheSBvZiB3ZWVrIGluIG1vbnRoICAgICAgICAgICB8XHJcbiAqIHwgIGcqIHwgTW9kaWZpZWQgSnVsaWFuIGRheSAgICAgICAgICAgIHwgIEcgIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcclxuICogfCAgaCAgfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgfCAgSCAgfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgfFxyXG4gKiB8ICBpISB8IElTTyBkYXkgb2Ygd2VlayAgICAgICAgICAgICAgICB8ICBJISB8IElTTyB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgICB8XHJcbiAqIHwgIGoqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHwgIEoqIHwgTG9jYWxpemVkIGhvdXIgdy9vIGRheSBwZXJpb2QgIHxcclxuICogfCAgayAgfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgfCAgSyAgfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgfFxyXG4gKiB8ICBsKiB8IChkZXByZWNhdGVkKSAgICAgICAgICAgICAgICAgICB8ICBMICB8IFN0YW5kLWFsb25lIG1vbnRoICAgICAgICAgICAgICB8XHJcbiAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcclxuICogfCAgbiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG4gKiB8ICBvISB8IE9yZGluYWwgbnVtYmVyIG1vZGlmaWVyICAgICAgICB8ICBPICB8IFRpbWV6b25lIChHTVQpICAgICAgICAgICAgICAgICB8XHJcbiAqIHwgIHAhIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgIHwgIFAhIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgIHxcclxuICogfCAgcSAgfCBTdGFuZC1hbG9uZSBxdWFydGVyICAgICAgICAgICAgfCAgUSAgfCBRdWFydGVyICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG4gKiB8ICByKiB8IFJlbGF0ZWQgR3JlZ29yaWFuIHllYXIgICAgICAgICB8ICBSISB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICB8XHJcbiAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcclxuICogfCAgdCEgfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgfCAgVCEgfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgfFxyXG4gKiB8ICB1ICB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICB8ICBVKiB8IEN5Y2xpYyB5ZWFyICAgICAgICAgICAgICAgICAgICB8XHJcbiAqIHwgIHYqIHwgVGltZXpvbmUgKGdlbmVyaWMgbm9uLWxvY2F0LikgIHwgIFYqIHwgVGltZXpvbmUgKGxvY2F0aW9uKSAgICAgICAgICAgIHxcclxuICogfCAgdyAgfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgfCAgVyogfCBXZWVrIG9mIG1vbnRoICAgICAgICAgICAgICAgICAgfFxyXG4gKiB8ICB4ICB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICB8ICBYICB8IFRpbWV6b25lIChJU08tODYwMSkgICAgICAgICAgICB8XHJcbiAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgIHxcclxuICogfCAgeiAgfCBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0LikgfCAgWiogfCBUaW1lem9uZSAoYWxpYXNlcykgICAgICAgICAgICAgfFxyXG4gKlxyXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXHJcbiAqXHJcbiAqIExldHRlcnMgbWFya2VkIGJ5ICEgYXJlIG5vbi1zdGFuZGFyZCwgYnV0IGltcGxlbWVudGVkIGJ5IGRhdGUtZm5zOlxyXG4gKiAtIGBvYCBtb2RpZmllcyB0aGUgcHJldmlvdXMgdG9rZW4gdG8gdHVybiBpdCBpbnRvIGFuIG9yZGluYWwgKHNlZSBgZm9ybWF0YCBkb2NzKVxyXG4gKiAtIGBpYCBpcyBJU08gZGF5IG9mIHdlZWsuIEZvciBgaWAgYW5kIGBpaWAgaXMgcmV0dXJucyBudW1lcmljIElTTyB3ZWVrIGRheXMsXHJcbiAqICAgaS5lLiA3IGZvciBTdW5kYXksIDEgZm9yIE1vbmRheSwgZXRjLlxyXG4gKiAtIGBJYCBpcyBJU08gd2VlayBvZiB5ZWFyLCBhcyBvcHBvc2VkIHRvIGB3YCB3aGljaCBpcyBsb2NhbCB3ZWVrIG9mIHllYXIuXHJcbiAqIC0gYFJgIGlzIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyLCBhcyBvcHBvc2VkIHRvIGBZYCB3aGljaCBpcyBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyLlxyXG4gKiAgIGBSYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYElgIGFuZCBgaWBcclxuICogICBmb3IgdW5pdmVyc2FsIElTTyB3ZWVrLW51bWJlcmluZyBkYXRlLCB3aGVyZWFzXHJcbiAqICAgYFlgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgd2AgYW5kIGBlYFxyXG4gKiAgIGZvciB3ZWVrLW51bWJlcmluZyBkYXRlIHNwZWNpZmljIHRvIHRoZSBsb2NhbGUuXHJcbiAqIC0gYFBgIGlzIGxvbmcgbG9jYWxpemVkIGRhdGUgZm9ybWF0XHJcbiAqIC0gYHBgIGlzIGxvbmcgbG9jYWxpemVkIHRpbWUgZm9ybWF0XHJcbiAqL1xyXG52YXIgZm9ybWF0dGVycyA9IHtcclxuICAvLyBFcmFcclxuICBHOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XHJcbiAgICB2YXIgZXJhID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpID4gMCA/IDEgOiAwO1xyXG5cclxuICAgIHN3aXRjaCAodG9rZW4pIHtcclxuICAgICAgLy8gQUQsIEJDXHJcbiAgICAgIGNhc2UgJ0cnOlxyXG4gICAgICBjYXNlICdHRyc6XHJcbiAgICAgIGNhc2UgJ0dHRyc6XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcclxuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIC8vIEEsIEJcclxuXHJcbiAgICAgIGNhc2UgJ0dHR0dHJzpcclxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xyXG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIC8vIEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0XHJcblxyXG4gICAgICBjYXNlICdHR0dHJzpcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xyXG4gICAgICAgICAgd2lkdGg6ICd3aWRlJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgLy8gWWVhclxyXG4gIHk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcclxuICAgIC8vIE9yZGluYWwgbnVtYmVyXHJcbiAgICBpZiAodG9rZW4gPT09ICd5bycpIHtcclxuICAgICAgdmFyIHNpZ25lZFllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7IC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXHJcblxyXG4gICAgICB2YXIgeWVhciA9IHNpZ25lZFllYXIgPiAwID8gc2lnbmVkWWVhciA6IDEgLSBzaWduZWRZZWFyO1xyXG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih5ZWFyLCB7XHJcbiAgICAgICAgdW5pdDogJ3llYXInXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMueShkYXRlLCB0b2tlbik7XHJcbiAgfSxcclxuICAvLyBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyXHJcbiAgWTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xyXG4gICAgdmFyIHNpZ25lZFdlZWtZZWFyID0gZ2V0VVRDV2Vla1llYXIoZGF0ZSwgb3B0aW9ucyk7IC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXHJcblxyXG4gICAgdmFyIHdlZWtZZWFyID0gc2lnbmVkV2Vla1llYXIgPiAwID8gc2lnbmVkV2Vla1llYXIgOiAxIC0gc2lnbmVkV2Vla1llYXI7IC8vIFR3byBkaWdpdCB5ZWFyXHJcblxyXG4gICAgaWYgKHRva2VuID09PSAnWVknKSB7XHJcbiAgICAgIHZhciB0d29EaWdpdFllYXIgPSB3ZWVrWWVhciAlIDEwMDtcclxuICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0d29EaWdpdFllYXIsIDIpO1xyXG4gICAgfSAvLyBPcmRpbmFsIG51bWJlclxyXG5cclxuXHJcbiAgICBpZiAodG9rZW4gPT09ICdZbycpIHtcclxuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2Vla1llYXIsIHtcclxuICAgICAgICB1bml0OiAneWVhcidcclxuICAgICAgfSk7XHJcbiAgICB9IC8vIFBhZGRpbmdcclxuXHJcblxyXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh3ZWVrWWVhciwgdG9rZW4ubGVuZ3RoKTtcclxuICB9LFxyXG4gIC8vIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXHJcbiAgUjogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XHJcbiAgICB2YXIgaXNvV2Vla1llYXIgPSBnZXRVVENJU09XZWVrWWVhcihkYXRlKTsgLy8gUGFkZGluZ1xyXG5cclxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvV2Vla1llYXIsIHRva2VuLmxlbmd0aCk7XHJcbiAgfSxcclxuICAvLyBFeHRlbmRlZCB5ZWFyLiBUaGlzIGlzIGEgc2luZ2xlIG51bWJlciBkZXNpZ25hdGluZyB0aGUgeWVhciBvZiB0aGlzIGNhbGVuZGFyIHN5c3RlbS5cclxuICAvLyBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgbG9jYWxpemVycyBhcmUgQi5DLiB5ZWFyczpcclxuICAvLyB8IFllYXIgfCBgeWAgfCBgdWAgfFxyXG4gIC8vIHwtLS0tLS18LS0tLS18LS0tLS18XHJcbiAgLy8gfCBBQyAxIHwgICAxIHwgICAxIHxcclxuICAvLyB8IEJDIDEgfCAgIDEgfCAgIDAgfFxyXG4gIC8vIHwgQkMgMiB8ICAgMiB8ICAtMSB8XHJcbiAgLy8gQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxyXG4gIC8vIHdoaWxlIGB1dWAgcGFkcyBzaW5nbGUgZGlnaXQgeWVhcnMgdG8gMiBjaGFyYWN0ZXJzIGFuZCByZXR1cm5zIG90aGVyIHllYXJzIHVuY2hhbmdlZC5cclxuICB1OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcclxuICAgIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xyXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh5ZWFyLCB0b2tlbi5sZW5ndGgpO1xyXG4gIH0sXHJcbiAgLy8gUXVhcnRlclxyXG4gIFE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcclxuICAgIHZhciBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldFVUQ01vbnRoKCkgKyAxKSAvIDMpO1xyXG5cclxuICAgIHN3aXRjaCAodG9rZW4pIHtcclxuICAgICAgLy8gMSwgMiwgMywgNFxyXG4gICAgICBjYXNlICdRJzpcclxuICAgICAgICByZXR1cm4gU3RyaW5nKHF1YXJ0ZXIpO1xyXG4gICAgICAvLyAwMSwgMDIsIDAzLCAwNFxyXG5cclxuICAgICAgY2FzZSAnUVEnOlxyXG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MocXVhcnRlciwgMik7XHJcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxyXG5cclxuICAgICAgY2FzZSAnUW8nOlxyXG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHF1YXJ0ZXIsIHtcclxuICAgICAgICAgIHVuaXQ6ICdxdWFydGVyJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxyXG5cclxuICAgICAgY2FzZSAnUVFRJzpcclxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XHJcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcclxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAvLyAxLCAyLCAzLCA0IChuYXJyb3cgcXVhcnRlcjsgY291bGQgYmUgbm90IG51bWVyaWNhbClcclxuXHJcbiAgICAgIGNhc2UgJ1FRUVFRJzpcclxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XHJcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXHJcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcclxuICAgICAgICB9KTtcclxuICAgICAgLy8gMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi5cclxuXHJcbiAgICAgIGNhc2UgJ1FRUVEnOlxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcclxuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXHJcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9LFxyXG4gIC8vIFN0YW5kLWFsb25lIHF1YXJ0ZXJcclxuICBxOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XHJcbiAgICB2YXIgcXVhcnRlciA9IE1hdGguY2VpbCgoZGF0ZS5nZXRVVENNb250aCgpICsgMSkgLyAzKTtcclxuXHJcbiAgICBzd2l0Y2ggKHRva2VuKSB7XHJcbiAgICAgIC8vIDEsIDIsIDMsIDRcclxuICAgICAgY2FzZSAncSc6XHJcbiAgICAgICAgcmV0dXJuIFN0cmluZyhxdWFydGVyKTtcclxuICAgICAgLy8gMDEsIDAyLCAwMywgMDRcclxuXHJcbiAgICAgIGNhc2UgJ3FxJzpcclxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHF1YXJ0ZXIsIDIpO1xyXG4gICAgICAvLyAxc3QsIDJuZCwgM3JkLCA0dGhcclxuXHJcbiAgICAgIGNhc2UgJ3FvJzpcclxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7XHJcbiAgICAgICAgICB1bml0OiAncXVhcnRlcidcclxuICAgICAgICB9KTtcclxuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcclxuXHJcbiAgICAgIGNhc2UgJ3FxcSc6XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xyXG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXHJcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcclxuICAgICAgICB9KTtcclxuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXHJcblxyXG4gICAgICBjYXNlICdxcXFxcSc6XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xyXG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxyXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIC8vIDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uXHJcblxyXG4gICAgICBjYXNlICdxcXFxJzpcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XHJcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxyXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSxcclxuICAvLyBNb250aFxyXG4gIE06IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcclxuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcclxuXHJcbiAgICBzd2l0Y2ggKHRva2VuKSB7XHJcbiAgICAgIGNhc2UgJ00nOlxyXG4gICAgICBjYXNlICdNTSc6XHJcbiAgICAgICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5NKGRhdGUsIHRva2VuKTtcclxuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxyXG5cclxuICAgICAgY2FzZSAnTW8nOlxyXG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKG1vbnRoICsgMSwge1xyXG4gICAgICAgICAgdW5pdDogJ21vbnRoJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcclxuXHJcbiAgICAgIGNhc2UgJ01NTSc6XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XHJcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcclxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAvLyBKLCBGLCAuLi4sIERcclxuXHJcbiAgICAgIGNhc2UgJ01NTU1NJzpcclxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcclxuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcclxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxyXG5cclxuICAgICAgY2FzZSAnTU1NTSc6XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XHJcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxyXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSxcclxuICAvLyBTdGFuZC1hbG9uZSBtb250aFxyXG4gIEw6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcclxuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcclxuXHJcbiAgICBzd2l0Y2ggKHRva2VuKSB7XHJcbiAgICAgIC8vIDEsIDIsIC4uLiwgMTJcclxuICAgICAgY2FzZSAnTCc6XHJcbiAgICAgICAgcmV0dXJuIFN0cmluZyhtb250aCArIDEpO1xyXG4gICAgICAvLyAwMSwgMDIsIC4uLiwgMTJcclxuXHJcbiAgICAgIGNhc2UgJ0xMJzpcclxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKG1vbnRoICsgMSwgMik7XHJcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDEydGhcclxuXHJcbiAgICAgIGNhc2UgJ0xvJzpcclxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihtb250aCArIDEsIHtcclxuICAgICAgICAgIHVuaXQ6ICdtb250aCdcclxuICAgICAgICB9KTtcclxuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXHJcblxyXG4gICAgICBjYXNlICdMTEwnOlxyXG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xyXG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXHJcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcclxuICAgICAgICB9KTtcclxuICAgICAgLy8gSiwgRiwgLi4uLCBEXHJcblxyXG4gICAgICBjYXNlICdMTExMTCc6XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XHJcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXHJcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcclxuICAgICAgICB9KTtcclxuICAgICAgLy8gSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcclxuXHJcbiAgICAgIGNhc2UgJ0xMTEwnOlxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xyXG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcclxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgLy8gTG9jYWwgd2VlayBvZiB5ZWFyXHJcbiAgdzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xyXG4gICAgdmFyIHdlZWsgPSBnZXRVVENXZWVrKGRhdGUsIG9wdGlvbnMpO1xyXG5cclxuICAgIGlmICh0b2tlbiA9PT0gJ3dvJykge1xyXG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih3ZWVrLCB7XHJcbiAgICAgICAgdW5pdDogJ3dlZWsnXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3Mod2VlaywgdG9rZW4ubGVuZ3RoKTtcclxuICB9LFxyXG4gIC8vIElTTyB3ZWVrIG9mIHllYXJcclxuICBJOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XHJcbiAgICB2YXIgaXNvV2VlayA9IGdldFVUQ0lTT1dlZWsoZGF0ZSk7XHJcblxyXG4gICAgaWYgKHRva2VuID09PSAnSW8nKSB7XHJcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGlzb1dlZWssIHtcclxuICAgICAgICB1bml0OiAnd2VlaydcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29XZWVrLCB0b2tlbi5sZW5ndGgpO1xyXG4gIH0sXHJcbiAgLy8gRGF5IG9mIHRoZSBtb250aFxyXG4gIGQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcclxuICAgIGlmICh0b2tlbiA9PT0gJ2RvJykge1xyXG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ0RhdGUoKSwge1xyXG4gICAgICAgIHVuaXQ6ICdkYXRlJ1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLmQoZGF0ZSwgdG9rZW4pO1xyXG4gIH0sXHJcbiAgLy8gRGF5IG9mIHllYXJcclxuICBEOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XHJcbiAgICB2YXIgZGF5T2ZZZWFyID0gZ2V0VVRDRGF5T2ZZZWFyKGRhdGUpO1xyXG5cclxuICAgIGlmICh0b2tlbiA9PT0gJ0RvJykge1xyXG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXlPZlllYXIsIHtcclxuICAgICAgICB1bml0OiAnZGF5T2ZZZWFyJ1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRheU9mWWVhciwgdG9rZW4ubGVuZ3RoKTtcclxuICB9LFxyXG4gIC8vIERheSBvZiB3ZWVrXHJcbiAgRTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xyXG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XHJcblxyXG4gICAgc3dpdGNoICh0b2tlbikge1xyXG4gICAgICAvLyBUdWVcclxuICAgICAgY2FzZSAnRSc6XHJcbiAgICAgIGNhc2UgJ0VFJzpcclxuICAgICAgY2FzZSAnRUVFJzpcclxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xyXG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXHJcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcclxuICAgICAgICB9KTtcclxuICAgICAgLy8gVFxyXG5cclxuICAgICAgY2FzZSAnRUVFRUUnOlxyXG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XHJcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXHJcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcclxuICAgICAgICB9KTtcclxuICAgICAgLy8gVHVcclxuXHJcbiAgICAgIGNhc2UgJ0VFRUVFRSc6XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcclxuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxyXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIC8vIFR1ZXNkYXlcclxuXHJcbiAgICAgIGNhc2UgJ0VFRUUnOlxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XHJcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxyXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSxcclxuICAvLyBMb2NhbCBkYXkgb2Ygd2Vla1xyXG4gIGU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcclxuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xyXG4gICAgdmFyIGxvY2FsRGF5T2ZXZWVrID0gKGRheU9mV2VlayAtIG9wdGlvbnMud2Vla1N0YXJ0c09uICsgOCkgJSA3IHx8IDc7XHJcblxyXG4gICAgc3dpdGNoICh0b2tlbikge1xyXG4gICAgICAvLyBOdW1lcmljYWwgdmFsdWUgKE50aCBkYXkgb2Ygd2VlayB3aXRoIGN1cnJlbnQgbG9jYWxlIG9yIHdlZWtTdGFydHNPbilcclxuICAgICAgY2FzZSAnZSc6XHJcbiAgICAgICAgcmV0dXJuIFN0cmluZyhsb2NhbERheU9mV2Vlayk7XHJcbiAgICAgIC8vIFBhZGRlZCBudW1lcmljYWwgdmFsdWVcclxuXHJcbiAgICAgIGNhc2UgJ2VlJzpcclxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGxvY2FsRGF5T2ZXZWVrLCAyKTtcclxuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgN3RoXHJcblxyXG4gICAgICBjYXNlICdlbyc6XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobG9jYWxEYXlPZldlZWssIHtcclxuICAgICAgICAgIHVuaXQ6ICdkYXknXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICBjYXNlICdlZWUnOlxyXG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XHJcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcclxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAvLyBUXHJcblxyXG4gICAgICBjYXNlICdlZWVlZSc6XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcclxuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcclxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAvLyBUdVxyXG5cclxuICAgICAgY2FzZSAnZWVlZWVlJzpcclxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xyXG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXHJcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcclxuICAgICAgICB9KTtcclxuICAgICAgLy8gVHVlc2RheVxyXG5cclxuICAgICAgY2FzZSAnZWVlZSc6XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcclxuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXHJcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9LFxyXG4gIC8vIFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrXHJcbiAgYzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xyXG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XHJcbiAgICB2YXIgbG9jYWxEYXlPZldlZWsgPSAoZGF5T2ZXZWVrIC0gb3B0aW9ucy53ZWVrU3RhcnRzT24gKyA4KSAlIDcgfHwgNztcclxuXHJcbiAgICBzd2l0Y2ggKHRva2VuKSB7XHJcbiAgICAgIC8vIE51bWVyaWNhbCB2YWx1ZSAoc2FtZSBhcyBpbiBgZWApXHJcbiAgICAgIGNhc2UgJ2MnOlxyXG4gICAgICAgIHJldHVybiBTdHJpbmcobG9jYWxEYXlPZldlZWspO1xyXG4gICAgICAvLyBQYWRkZWQgbnVtZXJpY2FsIHZhbHVlXHJcblxyXG4gICAgICBjYXNlICdjYyc6XHJcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhsb2NhbERheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcclxuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgN3RoXHJcblxyXG4gICAgICBjYXNlICdjbyc6XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobG9jYWxEYXlPZldlZWssIHtcclxuICAgICAgICAgIHVuaXQ6ICdkYXknXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICBjYXNlICdjY2MnOlxyXG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XHJcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcclxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAvLyBUXHJcblxyXG4gICAgICBjYXNlICdjY2NjYyc6XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcclxuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcclxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAvLyBUdVxyXG5cclxuICAgICAgY2FzZSAnY2NjY2NjJzpcclxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xyXG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXHJcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcclxuICAgICAgICB9KTtcclxuICAgICAgLy8gVHVlc2RheVxyXG5cclxuICAgICAgY2FzZSAnY2NjYyc6XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcclxuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXHJcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9LFxyXG4gIC8vIElTTyBkYXkgb2Ygd2Vla1xyXG4gIGk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcclxuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xyXG4gICAgdmFyIGlzb0RheU9mV2VlayA9IGRheU9mV2VlayA9PT0gMCA/IDcgOiBkYXlPZldlZWs7XHJcblxyXG4gICAgc3dpdGNoICh0b2tlbikge1xyXG4gICAgICAvLyAyXHJcbiAgICAgIGNhc2UgJ2knOlxyXG4gICAgICAgIHJldHVybiBTdHJpbmcoaXNvRGF5T2ZXZWVrKTtcclxuICAgICAgLy8gMDJcclxuXHJcbiAgICAgIGNhc2UgJ2lpJzpcclxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb0RheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcclxuICAgICAgLy8gMm5kXHJcblxyXG4gICAgICBjYXNlICdpbyc6XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaXNvRGF5T2ZXZWVrLCB7XHJcbiAgICAgICAgICB1bml0OiAnZGF5J1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAvLyBUdWVcclxuXHJcbiAgICAgIGNhc2UgJ2lpaSc6XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcclxuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxyXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIC8vIFRcclxuXHJcbiAgICAgIGNhc2UgJ2lpaWlpJzpcclxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xyXG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxyXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIC8vIFR1XHJcblxyXG4gICAgICBjYXNlICdpaWlpaWknOlxyXG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XHJcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcclxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAvLyBUdWVzZGF5XHJcblxyXG4gICAgICBjYXNlICdpaWlpJzpcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xyXG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcclxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgLy8gQU0gb3IgUE1cclxuICBhOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XHJcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XHJcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlID0gaG91cnMgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XHJcblxyXG4gICAgc3dpdGNoICh0b2tlbikge1xyXG4gICAgICBjYXNlICdhJzpcclxuICAgICAgY2FzZSAnYWEnOlxyXG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XHJcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcclxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgY2FzZSAnYWFhJzpcclxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xyXG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXHJcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcclxuICAgICAgICB9KS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgY2FzZSAnYWFhYWEnOlxyXG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XHJcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXHJcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgIGNhc2UgJ2FhYWEnOlxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XHJcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxyXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSxcclxuICAvLyBBTSwgUE0sIG1pZG5pZ2h0LCBub29uXHJcbiAgYjogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xyXG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xyXG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZTtcclxuXHJcbiAgICBpZiAoaG91cnMgPT09IDEyKSB7XHJcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubm9vbjtcclxuICAgIH0gZWxzZSBpZiAoaG91cnMgPT09IDApIHtcclxuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5taWRuaWdodDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGhvdXJzIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xyXG4gICAgfVxyXG5cclxuICAgIHN3aXRjaCAodG9rZW4pIHtcclxuICAgICAgY2FzZSAnYic6XHJcbiAgICAgIGNhc2UgJ2JiJzpcclxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xyXG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXHJcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgIGNhc2UgJ2JiYic6XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcclxuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxyXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXHJcbiAgICAgICAgfSkudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAgIGNhc2UgJ2JiYmJiJzpcclxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xyXG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxyXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICBjYXNlICdiYmJiJzpcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xyXG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcclxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgLy8gaW4gdGhlIG1vcm5pbmcsIGluIHRoZSBhZnRlcm5vb24sIGluIHRoZSBldmVuaW5nLCBhdCBuaWdodFxyXG4gIEI6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcclxuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcclxuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWU7XHJcblxyXG4gICAgaWYgKGhvdXJzID49IDE3KSB7XHJcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0uZXZlbmluZztcclxuICAgIH0gZWxzZSBpZiAoaG91cnMgPj0gMTIpIHtcclxuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5hZnRlcm5vb247XHJcbiAgICB9IGVsc2UgaWYgKGhvdXJzID49IDQpIHtcclxuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5tb3JuaW5nO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5uaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBzd2l0Y2ggKHRva2VuKSB7XHJcbiAgICAgIGNhc2UgJ0InOlxyXG4gICAgICBjYXNlICdCQic6XHJcbiAgICAgIGNhc2UgJ0JCQic6XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcclxuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxyXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICBjYXNlICdCQkJCQic6XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcclxuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcclxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgY2FzZSAnQkJCQic6XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcclxuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXHJcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9LFxyXG4gIC8vIEhvdXIgWzEtMTJdXHJcbiAgaDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xyXG4gICAgaWYgKHRva2VuID09PSAnaG8nKSB7XHJcbiAgICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyO1xyXG4gICAgICBpZiAoaG91cnMgPT09IDApIGhvdXJzID0gMTI7XHJcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XHJcbiAgICAgICAgdW5pdDogJ2hvdXInXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuaChkYXRlLCB0b2tlbik7XHJcbiAgfSxcclxuICAvLyBIb3VyIFswLTIzXVxyXG4gIEg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcclxuICAgIGlmICh0b2tlbiA9PT0gJ0hvJykge1xyXG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ0hvdXJzKCksIHtcclxuICAgICAgICB1bml0OiAnaG91cidcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5IKGRhdGUsIHRva2VuKTtcclxuICB9LFxyXG4gIC8vIEhvdXIgWzAtMTFdXHJcbiAgSzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xyXG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpICUgMTI7XHJcblxyXG4gICAgaWYgKHRva2VuID09PSAnS28nKSB7XHJcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XHJcbiAgICAgICAgdW5pdDogJ2hvdXInXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaG91cnMsIHRva2VuLmxlbmd0aCk7XHJcbiAgfSxcclxuICAvLyBIb3VyIFsxLTI0XVxyXG4gIGs6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcclxuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcclxuICAgIGlmIChob3VycyA9PT0gMCkgaG91cnMgPSAyNDtcclxuXHJcbiAgICBpZiAodG9rZW4gPT09ICdrbycpIHtcclxuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcclxuICAgICAgICB1bml0OiAnaG91cidcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcclxuICB9LFxyXG4gIC8vIE1pbnV0ZVxyXG4gIG06IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcclxuICAgIGlmICh0b2tlbiA9PT0gJ21vJykge1xyXG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ01pbnV0ZXMoKSwge1xyXG4gICAgICAgIHVuaXQ6ICdtaW51dGUnXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMubShkYXRlLCB0b2tlbik7XHJcbiAgfSxcclxuICAvLyBTZWNvbmRcclxuICBzOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XHJcbiAgICBpZiAodG9rZW4gPT09ICdzbycpIHtcclxuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENTZWNvbmRzKCksIHtcclxuICAgICAgICB1bml0OiAnc2Vjb25kJ1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLnMoZGF0ZSwgdG9rZW4pO1xyXG4gIH0sXHJcbiAgLy8gRnJhY3Rpb24gb2Ygc2Vjb25kXHJcbiAgUzogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XHJcbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLlMoZGF0ZSwgdG9rZW4pO1xyXG4gIH0sXHJcbiAgLy8gVGltZXpvbmUgKElTTy04NjAxLiBJZiBvZmZzZXQgaXMgMCwgb3V0cHV0IGlzIGFsd2F5cyBgJ1onYClcclxuICBYOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xyXG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xyXG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XHJcblxyXG4gICAgaWYgKHRpbWV6b25lT2Zmc2V0ID09PSAwKSB7XHJcbiAgICAgIHJldHVybiAnWic7XHJcbiAgICB9XHJcblxyXG4gICAgc3dpdGNoICh0b2tlbikge1xyXG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xyXG4gICAgICBjYXNlICdYJzpcclxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcclxuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXHJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXHJcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYFhYYFxyXG5cclxuICAgICAgY2FzZSAnWFhYWCc6XHJcbiAgICAgIGNhc2UgJ1hYJzpcclxuICAgICAgICAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcclxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQpO1xyXG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcclxuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgWFhYYFxyXG5cclxuICAgICAgY2FzZSAnWFhYWFgnOlxyXG4gICAgICBjYXNlICdYWFgnOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRoIGA6YCBkZWxpbWl0ZXJcclxuXHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgLy8gVGltZXpvbmUgKElTTy04NjAxLiBJZiBvZmZzZXQgaXMgMCwgb3V0cHV0IGlzIGAnKzAwOjAwJ2Agb3IgZXF1aXZhbGVudClcclxuICB4OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xyXG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xyXG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XHJcblxyXG4gICAgc3dpdGNoICh0b2tlbikge1xyXG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xyXG4gICAgICBjYXNlICd4JzpcclxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcclxuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXHJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXHJcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYHh4YFxyXG5cclxuICAgICAgY2FzZSAneHh4eCc6XHJcbiAgICAgIGNhc2UgJ3h4JzpcclxuICAgICAgICAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcclxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQpO1xyXG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcclxuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgeHh4YFxyXG5cclxuICAgICAgY2FzZSAneHh4eHgnOlxyXG4gICAgICBjYXNlICd4eHgnOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRoIGA6YCBkZWxpbWl0ZXJcclxuXHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgLy8gVGltZXpvbmUgKEdNVClcclxuICBPOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xyXG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xyXG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XHJcblxyXG4gICAgc3dpdGNoICh0b2tlbikge1xyXG4gICAgICAvLyBTaG9ydFxyXG4gICAgICBjYXNlICdPJzpcclxuICAgICAgY2FzZSAnT08nOlxyXG4gICAgICBjYXNlICdPT08nOlxyXG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsICc6Jyk7XHJcbiAgICAgIC8vIExvbmdcclxuXHJcbiAgICAgIGNhc2UgJ09PT08nOlxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgLy8gVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdGlvbilcclxuICB6OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xyXG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xyXG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XHJcblxyXG4gICAgc3dpdGNoICh0b2tlbikge1xyXG4gICAgICAvLyBTaG9ydFxyXG4gICAgICBjYXNlICd6JzpcclxuICAgICAgY2FzZSAnenonOlxyXG4gICAgICBjYXNlICd6enonOlxyXG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsICc6Jyk7XHJcbiAgICAgIC8vIExvbmdcclxuXHJcbiAgICAgIGNhc2UgJ3p6enonOlxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgLy8gU2Vjb25kcyB0aW1lc3RhbXBcclxuICB0OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xyXG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xyXG4gICAgdmFyIHRpbWVzdGFtcCA9IE1hdGguZmxvb3Iob3JpZ2luYWxEYXRlLmdldFRpbWUoKSAvIDEwMDApO1xyXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XHJcbiAgfSxcclxuICAvLyBNaWxsaXNlY29uZHMgdGltZXN0YW1wXHJcbiAgVDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcclxuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcclxuICAgIHZhciB0aW1lc3RhbXAgPSBvcmlnaW5hbERhdGUuZ2V0VGltZSgpO1xyXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XHJcbiAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmVTaG9ydChvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKSB7XHJcbiAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xyXG4gIHZhciBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xyXG4gIHZhciBob3VycyA9IE1hdGguZmxvb3IoYWJzT2Zmc2V0IC8gNjApO1xyXG4gIHZhciBtaW51dGVzID0gYWJzT2Zmc2V0ICUgNjA7XHJcblxyXG4gIGlmIChtaW51dGVzID09PSAwKSB7XHJcbiAgICByZXR1cm4gc2lnbiArIFN0cmluZyhob3Vycyk7XHJcbiAgfVxyXG5cclxuICB2YXIgZGVsaW1pdGVyID0gZGlydHlEZWxpbWl0ZXIgfHwgJyc7XHJcbiAgcmV0dXJuIHNpZ24gKyBTdHJpbmcoaG91cnMpICsgZGVsaW1pdGVyICsgYWRkTGVhZGluZ1plcm9zKG1pbnV0ZXMsIDIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXMob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xyXG4gIGlmIChvZmZzZXQgJSA2MCA9PT0gMCkge1xyXG4gICAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xyXG4gICAgcmV0dXJuIHNpZ24gKyBhZGRMZWFkaW5nWmVyb3MoTWF0aC5hYnMob2Zmc2V0KSAvIDYwLCAyKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBmb3JtYXRUaW1lem9uZShvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmUob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xyXG4gIHZhciBkZWxpbWl0ZXIgPSBkaXJ0eURlbGltaXRlciB8fCAnJztcclxuICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XHJcbiAgdmFyIGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XHJcbiAgdmFyIGhvdXJzID0gYWRkTGVhZGluZ1plcm9zKE1hdGguZmxvb3IoYWJzT2Zmc2V0IC8gNjApLCAyKTtcclxuICB2YXIgbWludXRlcyA9IGFkZExlYWRpbmdaZXJvcyhhYnNPZmZzZXQgJSA2MCwgMik7XHJcbiAgcmV0dXJuIHNpZ24gKyBob3VycyArIGRlbGltaXRlciArIG1pbnV0ZXM7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdHRlcnM7IiwiaW1wb3J0IGFkZExlYWRpbmdaZXJvcyBmcm9tIFwiLi4vLi4vYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzXCI7XHJcbi8qXHJcbiAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcclxuICogfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxyXG4gKiB8ICBhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBBKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XHJcbiAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcclxuICogfCAgaCAgfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgfCAgSCAgfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgfFxyXG4gKiB8ICBtICB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBNICB8IE1vbnRoICAgICAgICAgICAgICAgICAgICAgICAgICB8XHJcbiAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcclxuICogfCAgeSAgfCBZZWFyIChhYnMpICAgICAgICAgICAgICAgICAgICAgfCAgWSAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG4gKlxyXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXHJcbiAqL1xyXG5cclxudmFyIGZvcm1hdHRlcnMgPSB7XHJcbiAgLy8gWWVhclxyXG4gIHk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xyXG4gICAgLy8gRnJvbSBodHRwOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LTMxL3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0Zvcm1hdF90b2tlbnNcclxuICAgIC8vIHwgWWVhciAgICAgfCAgICAgeSB8IHl5IHwgICB5eXkgfCAgeXl5eSB8IHl5eXl5IHxcclxuICAgIC8vIHwtLS0tLS0tLS0tfC0tLS0tLS18LS0tLXwtLS0tLS0tfC0tLS0tLS18LS0tLS0tLXxcclxuICAgIC8vIHwgQUQgMSAgICAgfCAgICAgMSB8IDAxIHwgICAwMDEgfCAgMDAwMSB8IDAwMDAxIHxcclxuICAgIC8vIHwgQUQgMTIgICAgfCAgICAxMiB8IDEyIHwgICAwMTIgfCAgMDAxMiB8IDAwMDEyIHxcclxuICAgIC8vIHwgQUQgMTIzICAgfCAgIDEyMyB8IDIzIHwgICAxMjMgfCAgMDEyMyB8IDAwMTIzIHxcclxuICAgIC8vIHwgQUQgMTIzNCAgfCAgMTIzNCB8IDM0IHwgIDEyMzQgfCAgMTIzNCB8IDAxMjM0IHxcclxuICAgIC8vIHwgQUQgMTIzNDUgfCAxMjM0NSB8IDQ1IHwgMTIzNDUgfCAxMjM0NSB8IDEyMzQ1IHxcclxuICAgIHZhciBzaWduZWRZZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpOyAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxyXG5cclxuICAgIHZhciB5ZWFyID0gc2lnbmVkWWVhciA+IDAgPyBzaWduZWRZZWFyIDogMSAtIHNpZ25lZFllYXI7XHJcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRva2VuID09PSAneXknID8geWVhciAlIDEwMCA6IHllYXIsIHRva2VuLmxlbmd0aCk7XHJcbiAgfSxcclxuICAvLyBNb250aFxyXG4gIE06IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xyXG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xyXG4gICAgcmV0dXJuIHRva2VuID09PSAnTScgPyBTdHJpbmcobW9udGggKyAxKSA6IGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xyXG4gIH0sXHJcbiAgLy8gRGF5IG9mIHRoZSBtb250aFxyXG4gIGQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xyXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0RhdGUoKSwgdG9rZW4ubGVuZ3RoKTtcclxuICB9LFxyXG4gIC8vIEFNIG9yIFBNXHJcbiAgYTogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XHJcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF0ZS5nZXRVVENIb3VycygpIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xyXG5cclxuICAgIHN3aXRjaCAodG9rZW4pIHtcclxuICAgICAgY2FzZSAnYSc6XHJcbiAgICAgIGNhc2UgJ2FhJzpcclxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlLnRvVXBwZXJDYXNlKCk7XHJcblxyXG4gICAgICBjYXNlICdhYWEnOlxyXG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWU7XHJcblxyXG4gICAgICBjYXNlICdhYWFhYSc6XHJcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZVswXTtcclxuXHJcbiAgICAgIGNhc2UgJ2FhYWEnOlxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWUgPT09ICdhbScgPyAnYS5tLicgOiAncC5tLic7XHJcbiAgICB9XHJcbiAgfSxcclxuICAvLyBIb3VyIFsxLTEyXVxyXG4gIGg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xyXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMiB8fCAxMiwgdG9rZW4ubGVuZ3RoKTtcclxuICB9LFxyXG4gIC8vIEhvdXIgWzAtMjNdXHJcbiAgSDogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XHJcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDSG91cnMoKSwgdG9rZW4ubGVuZ3RoKTtcclxuICB9LFxyXG4gIC8vIE1pbnV0ZVxyXG4gIG06IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xyXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ01pbnV0ZXMoKSwgdG9rZW4ubGVuZ3RoKTtcclxuICB9LFxyXG4gIC8vIFNlY29uZFxyXG4gIHM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xyXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ1NlY29uZHMoKSwgdG9rZW4ubGVuZ3RoKTtcclxuICB9LFxyXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxyXG4gIFM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xyXG4gICAgdmFyIG51bWJlck9mRGlnaXRzID0gdG9rZW4ubGVuZ3RoO1xyXG4gICAgdmFyIG1pbGxpc2Vjb25kcyA9IGRhdGUuZ2V0VVRDTWlsbGlzZWNvbmRzKCk7XHJcbiAgICB2YXIgZnJhY3Rpb25hbFNlY29uZHMgPSBNYXRoLmZsb29yKG1pbGxpc2Vjb25kcyAqIE1hdGgucG93KDEwLCBudW1iZXJPZkRpZ2l0cyAtIDMpKTtcclxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZnJhY3Rpb25hbFNlY29uZHMsIHRva2VuLmxlbmd0aCk7XHJcbiAgfVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBmb3JtYXR0ZXJzOyIsInZhciBkYXRlTG9uZ0Zvcm1hdHRlciA9IGZ1bmN0aW9uIChwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XHJcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XHJcbiAgICBjYXNlICdQJzpcclxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XHJcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcclxuICAgICAgfSk7XHJcblxyXG4gICAgY2FzZSAnUFAnOlxyXG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcclxuICAgICAgICB3aWR0aDogJ21lZGl1bSdcclxuICAgICAgfSk7XHJcblxyXG4gICAgY2FzZSAnUFBQJzpcclxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XHJcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xyXG4gICAgICB9KTtcclxuXHJcbiAgICBjYXNlICdQUFBQJzpcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xyXG4gICAgICAgIHdpZHRoOiAnZnVsbCdcclxuICAgICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxudmFyIHRpbWVMb25nRm9ybWF0dGVyID0gZnVuY3Rpb24gKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcclxuICBzd2l0Y2ggKHBhdHRlcm4pIHtcclxuICAgIGNhc2UgJ3AnOlxyXG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcclxuICAgICAgICB3aWR0aDogJ3Nob3J0J1xyXG4gICAgICB9KTtcclxuXHJcbiAgICBjYXNlICdwcCc6XHJcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xyXG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xyXG4gICAgICB9KTtcclxuXHJcbiAgICBjYXNlICdwcHAnOlxyXG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcclxuICAgICAgICB3aWR0aDogJ2xvbmcnXHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGNhc2UgJ3BwcHAnOlxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XHJcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xyXG4gICAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG52YXIgZGF0ZVRpbWVMb25nRm9ybWF0dGVyID0gZnVuY3Rpb24gKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcclxuICB2YXIgbWF0Y2hSZXN1bHQgPSBwYXR0ZXJuLm1hdGNoKC8oUCspKHArKT8vKSB8fCBbXTtcclxuICB2YXIgZGF0ZVBhdHRlcm4gPSBtYXRjaFJlc3VsdFsxXTtcclxuICB2YXIgdGltZVBhdHRlcm4gPSBtYXRjaFJlc3VsdFsyXTtcclxuXHJcbiAgaWYgKCF0aW1lUGF0dGVybikge1xyXG4gICAgcmV0dXJuIGRhdGVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpO1xyXG4gIH1cclxuXHJcbiAgdmFyIGRhdGVUaW1lRm9ybWF0O1xyXG5cclxuICBzd2l0Y2ggKGRhdGVQYXR0ZXJuKSB7XHJcbiAgICBjYXNlICdQJzpcclxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcclxuICAgICAgICB3aWR0aDogJ3Nob3J0J1xyXG4gICAgICB9KTtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSAnUFAnOlxyXG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xyXG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xyXG4gICAgICB9KTtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSAnUFBQJzpcclxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcclxuICAgICAgICB3aWR0aDogJ2xvbmcnXHJcbiAgICAgIH0pO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlICdQUFBQJzpcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XHJcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xyXG4gICAgICB9KTtcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZGF0ZVRpbWVGb3JtYXQucmVwbGFjZSgne3tkYXRlfX0nLCBkYXRlTG9uZ0Zvcm1hdHRlcihkYXRlUGF0dGVybiwgZm9ybWF0TG9uZykpLnJlcGxhY2UoJ3t7dGltZX19JywgdGltZUxvbmdGb3JtYXR0ZXIodGltZVBhdHRlcm4sIGZvcm1hdExvbmcpKTtcclxufTtcclxuXHJcbnZhciBsb25nRm9ybWF0dGVycyA9IHtcclxuICBwOiB0aW1lTG9uZ0Zvcm1hdHRlcixcclxuICBQOiBkYXRlVGltZUxvbmdGb3JtYXR0ZXJcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgbG9uZ0Zvcm1hdHRlcnM7IiwiLyoqXHJcbiAqIEdvb2dsZSBDaHJvbWUgYXMgb2YgNjcuMC4zMzk2Ljg3IGludHJvZHVjZWQgdGltZXpvbmVzIHdpdGggb2Zmc2V0IHRoYXQgaW5jbHVkZXMgc2Vjb25kcy5cclxuICogVGhleSB1c3VhbGx5IGFwcGVhciBmb3IgZGF0ZXMgdGhhdCBkZW5vdGUgdGltZSBiZWZvcmUgdGhlIHRpbWV6b25lcyB3ZXJlIGludHJvZHVjZWRcclxuICogKGUuZy4gZm9yICdFdXJvcGUvUHJhZ3VlJyB0aW1lem9uZSB0aGUgb2Zmc2V0IGlzIEdNVCswMDo1Nzo0NCBiZWZvcmUgMSBPY3RvYmVyIDE4OTFcclxuICogYW5kIEdNVCswMTowMDowMCBhZnRlciB0aGF0IGRhdGUpXHJcbiAqXHJcbiAqIERhdGUjZ2V0VGltZXpvbmVPZmZzZXQgcmV0dXJucyB0aGUgb2Zmc2V0IGluIG1pbnV0ZXMgYW5kIHdvdWxkIHJldHVybiA1NyBmb3IgdGhlIGV4YW1wbGUgYWJvdmUsXHJcbiAqIHdoaWNoIHdvdWxkIGxlYWQgdG8gaW5jb3JyZWN0IGNhbGN1bGF0aW9ucy5cclxuICpcclxuICogVGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSB0aW1lem9uZSBvZmZzZXQgaW4gbWlsbGlzZWNvbmRzIHRoYXQgdGFrZXMgc2Vjb25kcyBpbiBhY2NvdW50LlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlKSB7XHJcbiAgdmFyIHV0Y0RhdGUgPSBuZXcgRGF0ZShEYXRlLlVUQyhkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCksIGRhdGUuZ2V0SG91cnMoKSwgZGF0ZS5nZXRNaW51dGVzKCksIGRhdGUuZ2V0U2Vjb25kcygpLCBkYXRlLmdldE1pbGxpc2Vjb25kcygpKSk7XHJcbiAgdXRjRGF0ZS5zZXRVVENGdWxsWWVhcihkYXRlLmdldEZ1bGxZZWFyKCkpO1xyXG4gIHJldHVybiBkYXRlLmdldFRpbWUoKSAtIHV0Y0RhdGUuZ2V0VGltZSgpO1xyXG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XHJcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xyXG52YXIgTUlMTElTRUNPTkRTX0lOX0RBWSA9IDg2NDAwMDAwO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENEYXlPZlllYXIoZGlydHlEYXRlKSB7XHJcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XHJcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcclxuICB2YXIgdGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XHJcbiAgZGF0ZS5zZXRVVENNb250aCgwLCAxKTtcclxuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xyXG4gIHZhciBzdGFydE9mWWVhclRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xyXG4gIHZhciBkaWZmZXJlbmNlID0gdGltZXN0YW1wIC0gc3RhcnRPZlllYXJUaW1lc3RhbXA7XHJcbiAgcmV0dXJuIE1hdGguZmxvb3IoZGlmZmVyZW5jZSAvIE1JTExJU0VDT05EU19JTl9EQVkpICsgMTtcclxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xyXG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcclxuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpIHtcclxuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcclxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xyXG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xyXG4gIHZhciBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyID0gbmV3IERhdGUoMCk7XHJcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRVVENGdWxsWWVhcih5ZWFyICsgMSwgMCwgNCk7XHJcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcclxuICB2YXIgc3RhcnRPZk5leHRZZWFyID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhcik7XHJcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIgPSBuZXcgRGF0ZSgwKTtcclxuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIDQpO1xyXG4gIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XHJcbiAgdmFyIHN0YXJ0T2ZUaGlzWWVhciA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIpO1xyXG5cclxuICBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZk5leHRZZWFyLmdldFRpbWUoKSkge1xyXG4gICAgcmV0dXJuIHllYXIgKyAxO1xyXG4gIH0gZWxzZSBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xyXG4gICAgcmV0dXJuIHllYXI7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiB5ZWFyIC0gMTtcclxuICB9XHJcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcclxuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiO1xyXG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcclxuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XHJcbnZhciBNSUxMSVNFQ09ORFNfSU5fV0VFSyA9IDYwNDgwMDAwMDtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDSVNPV2VlayhkaXJ0eURhdGUpIHtcclxuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcclxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xyXG4gIHZhciBkaWZmID0gc3RhcnRPZlVUQ0lTT1dlZWsoZGF0ZSkuZ2V0VGltZSgpIC0gc3RhcnRPZlVUQ0lTT1dlZWtZZWFyKGRhdGUpLmdldFRpbWUoKTsgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXJcclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnRcclxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXHJcblxyXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBNSUxMSVNFQ09ORFNfSU5fV0VFSykgKyAxO1xyXG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XHJcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xyXG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzXCI7XHJcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiO1xyXG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENXZWVrWWVhcihkaXJ0eURhdGUsIG9wdGlvbnMpIHtcclxuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyRmaXJzdFdlZWtDb24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XHJcblxyXG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xyXG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XHJcbiAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XHJcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcclxuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJGZpcnN0V2Vla0NvbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9vcHRpb25zJGZpcnN0V2Vla0NvbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkZmlyc3RXZWVrQ29uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDEpOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDEgYW5kIDcgX2FuZF8gaXMgbm90IE5hTlxyXG5cclxuICBpZiAoIShmaXJzdFdlZWtDb250YWluc0RhdGUgPj0gMSAmJiBmaXJzdFdlZWtDb250YWluc0RhdGUgPD0gNykpIHtcclxuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdmaXJzdFdlZWtDb250YWluc0RhdGUgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDcgaW5jbHVzaXZlbHknKTtcclxuICB9XHJcblxyXG4gIHZhciBmaXJzdFdlZWtPZk5leHRZZWFyID0gbmV3IERhdGUoMCk7XHJcbiAgZmlyc3RXZWVrT2ZOZXh0WWVhci5zZXRVVENGdWxsWWVhcih5ZWFyICsgMSwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcclxuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xyXG4gIHZhciBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWtPZk5leHRZZWFyLCBvcHRpb25zKTtcclxuICB2YXIgZmlyc3RXZWVrT2ZUaGlzWWVhciA9IG5ldyBEYXRlKDApO1xyXG4gIGZpcnN0V2Vla09mVGhpc1llYXIuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcclxuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xyXG4gIHZhciBzdGFydE9mVGhpc1llYXIgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWtPZlRoaXNZZWFyLCBvcHRpb25zKTtcclxuXHJcbiAgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcclxuICAgIHJldHVybiB5ZWFyICsgMTtcclxuICB9IGVsc2UgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZUaGlzWWVhci5nZXRUaW1lKCkpIHtcclxuICAgIHJldHVybiB5ZWFyO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4geWVhciAtIDE7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XHJcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcclxuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrWWVhciBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XHJcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xyXG52YXIgTUlMTElTRUNPTkRTX0lOX1dFRUsgPSA2MDQ4MDAwMDA7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ1dlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XHJcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XHJcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcclxuICB2YXIgZGlmZiA9IHN0YXJ0T2ZVVENXZWVrKGRhdGUsIG9wdGlvbnMpLmdldFRpbWUoKSAtIHN0YXJ0T2ZVVENXZWVrWWVhcihkYXRlLCBvcHRpb25zKS5nZXRUaW1lKCk7IC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXHJcbiAgLy8gYmVjYXVzZSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBhIHdlZWsgaXMgbm90IGNvbnN0YW50XHJcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxyXG5cclxuICByZXR1cm4gTWF0aC5yb3VuZChkaWZmIC8gTUlMTElTRUNPTkRTX0lOX1dFRUspICsgMTtcclxufSIsInZhciBwcm90ZWN0ZWREYXlPZlllYXJUb2tlbnMgPSBbJ0QnLCAnREQnXTtcclxudmFyIHByb3RlY3RlZFdlZWtZZWFyVG9rZW5zID0gWydZWScsICdZWVlZJ107XHJcbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuKHRva2VuKSB7XHJcbiAgcmV0dXJuIHByb3RlY3RlZERheU9mWWVhclRva2Vucy5pbmRleE9mKHRva2VuKSAhPT0gLTE7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbih0b2tlbikge1xyXG4gIHJldHVybiBwcm90ZWN0ZWRXZWVrWWVhclRva2Vucy5pbmRleE9mKHRva2VuKSAhPT0gLTE7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHRocm93UHJvdGVjdGVkRXJyb3IodG9rZW4sIGZvcm1hdCwgaW5wdXQpIHtcclxuICBpZiAodG9rZW4gPT09ICdZWVlZJykge1xyXG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYHl5eXlgIGluc3RlYWQgb2YgYFlZWVlgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyB5ZWFycyB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXCIpKTtcclxuICB9IGVsc2UgaWYgKHRva2VuID09PSAnWVknKSB7XHJcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgeXlgIGluc3RlYWQgb2YgYFlZYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFwiKSk7XHJcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ0QnKSB7XHJcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgZGAgaW5zdGVhZCBvZiBgRGAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcIikpO1xyXG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdERCcpIHtcclxuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGBkZGAgaW5zdGVhZCBvZiBgRERgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXCIpKTtcclxuICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcclxuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xyXG4gIH1cclxufSIsImltcG9ydCBnZXRVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcclxuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiO1xyXG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSkge1xyXG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xyXG4gIHZhciB5ZWFyID0gZ2V0VVRDSVNPV2Vla1llYXIoZGlydHlEYXRlKTtcclxuICB2YXIgZm91cnRoT2ZKYW51YXJ5ID0gbmV3IERhdGUoMCk7XHJcbiAgZm91cnRoT2ZKYW51YXJ5LnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIDQpO1xyXG4gIGZvdXJ0aE9mSmFudWFyeS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcclxuICB2YXIgZGF0ZSA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeSk7XHJcbiAgcmV0dXJuIGRhdGU7XHJcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcclxuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENJU09XZWVrKGRpcnR5RGF0ZSkge1xyXG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xyXG4gIHZhciB3ZWVrU3RhcnRzT24gPSAxO1xyXG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XHJcbiAgdmFyIGRheSA9IGRhdGUuZ2V0VVRDRGF5KCk7XHJcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xyXG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSAtIGRpZmYpO1xyXG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XHJcbiAgcmV0dXJuIGRhdGU7XHJcbn0iLCJpbXBvcnQgZ2V0VVRDV2Vla1llYXIgZnJvbSBcIi4uL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XHJcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xyXG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzXCI7XHJcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiO1xyXG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDV2Vla1llYXIoZGlydHlEYXRlLCBvcHRpb25zKSB7XHJcbiAgdmFyIF9yZWYsIF9yZWYyLCBfcmVmMywgX29wdGlvbnMkZmlyc3RXZWVrQ29uLCBfb3B0aW9ucyRsb2NhbGUsIF9vcHRpb25zJGxvY2FsZSRvcHRpbywgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyO1xyXG5cclxuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcclxuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xyXG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkZmlyc3RXZWVrQ29uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX29wdGlvbnMkZmlyc3RXZWVrQ29uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRmaXJzdFdlZWtDb24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMSk7XHJcbiAgdmFyIHllYXIgPSBnZXRVVENXZWVrWWVhcihkaXJ0eURhdGUsIG9wdGlvbnMpO1xyXG4gIHZhciBmaXJzdFdlZWsgPSBuZXcgRGF0ZSgwKTtcclxuICBmaXJzdFdlZWsuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcclxuICBmaXJzdFdlZWsuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XHJcbiAgdmFyIGRhdGUgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWssIG9wdGlvbnMpO1xyXG4gIHJldHVybiBkYXRlO1xyXG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XHJcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xyXG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjtcclxuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ1dlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XHJcbiAgdmFyIF9yZWYsIF9yZWYyLCBfcmVmMywgX29wdGlvbnMkd2Vla1N0YXJ0c09uLCBfb3B0aW9ucyRsb2NhbGUsIF9vcHRpb25zJGxvY2FsZSRvcHRpbywgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyO1xyXG5cclxuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcclxuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xyXG4gIHZhciB3ZWVrU3RhcnRzT24gPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkd2Vla1N0YXJ0c09uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX29wdGlvbnMkd2Vla1N0YXJ0c09uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMCk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXHJcblxyXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xyXG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xyXG4gIH1cclxuXHJcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcclxuICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcclxuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XHJcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpIC0gZGlmZik7XHJcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcclxuICByZXR1cm4gZGF0ZTtcclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xyXG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcclxuICAgIHJldHVybiBOYU47XHJcbiAgfVxyXG5cclxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcclxuXHJcbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcclxuICAgIHJldHVybiBudW1iZXI7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xyXG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcclxuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XHJcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XHJcbi8qKlxyXG4gKiBAbmFtZSBhZGREYXlzXHJcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xyXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZGF5cyB0byB0aGUgZ2l2ZW4gZGF0ZS5cclxuICpcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIHRvIHRoZSBnaXZlbiBkYXRlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxyXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBkYXlzIHRvIGJlIGFkZGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXHJcbiAqIEByZXR1cm5zIHtEYXRlfSAtIHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBkYXlzIGFkZGVkXHJcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gLSAyIGFyZ3VtZW50cyByZXF1aXJlZFxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiAvLyBBZGQgMTAgZGF5cyB0byAxIFNlcHRlbWJlciAyMDE0OlxyXG4gKiBjb25zdCByZXN1bHQgPSBhZGREYXlzKG5ldyBEYXRlKDIwMTQsIDgsIDEpLCAxMClcclxuICogLy89PiBUaHUgU2VwIDExIDIwMTQgMDA6MDA6MDBcclxuICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGREYXlzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcclxuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcclxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xyXG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xyXG5cclxuICBpZiAoaXNOYU4oYW1vdW50KSkge1xyXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XHJcbiAgfVxyXG5cclxuICBpZiAoIWFtb3VudCkge1xyXG4gICAgLy8gSWYgMCBkYXlzLCBuby1vcCB0byBhdm9pZCBjaGFuZ2luZyB0aW1lcyBpbiB0aGUgaG91ciBiZWZvcmUgZW5kIG9mIERTVFxyXG4gICAgcmV0dXJuIGRhdGU7XHJcbiAgfVxyXG5cclxuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgKyBhbW91bnQpO1xyXG4gIHJldHVybiBkYXRlO1xyXG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcclxuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XHJcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XHJcbi8qKlxyXG4gKiBAbmFtZSBhZGRNaWxsaXNlY29uZHNcclxuICogQGNhdGVnb3J5IE1pbGxpc2Vjb25kIEhlbHBlcnNcclxuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cclxuICpcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXHJcbiAqXHJcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIG1pbGxpc2Vjb25kcyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxyXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIG1pbGxpc2Vjb25kcyBhZGRlZFxyXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqIC8vIEFkZCA3NTAgbWlsbGlzZWNvbmRzIHRvIDEwIEp1bHkgMjAxNCAxMjo0NTozMC4wMDA6XHJcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZE1pbGxpc2Vjb25kcyhuZXcgRGF0ZSgyMDE0LCA2LCAxMCwgMTIsIDQ1LCAzMCwgMCksIDc1MClcclxuICogLy89PiBUaHUgSnVsIDEwIDIwMTQgMTI6NDU6MzAuNzUwXHJcbiAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcclxuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcclxuICB2YXIgdGltZXN0YW1wID0gdG9EYXRlKGRpcnR5RGF0ZSkuZ2V0VGltZSgpO1xyXG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xyXG4gIHJldHVybiBuZXcgRGF0ZSh0aW1lc3RhbXAgKyBhbW91bnQpO1xyXG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcclxuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XHJcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XHJcbi8qKlxyXG4gKiBAbmFtZSBhZGRNb250aHNcclxuICogQGNhdGVnb3J5IE1vbnRoIEhlbHBlcnNcclxuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1vbnRocyB0byB0aGUgZ2l2ZW4gZGF0ZS5cclxuICpcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtb250aHMgdG8gdGhlIGdpdmVuIGRhdGUuXHJcbiAqXHJcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIG1vbnRocyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxyXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIG1vbnRocyBhZGRlZFxyXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqIC8vIEFkZCA1IG1vbnRocyB0byAxIFNlcHRlbWJlciAyMDE0OlxyXG4gKiBjb25zdCByZXN1bHQgPSBhZGRNb250aHMobmV3IERhdGUoMjAxNCwgOCwgMSksIDUpXHJcbiAqIC8vPT4gU3VuIEZlYiAwMSAyMDE1IDAwOjAwOjAwXHJcbiAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTW9udGhzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcclxuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcclxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xyXG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xyXG5cclxuICBpZiAoaXNOYU4oYW1vdW50KSkge1xyXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XHJcbiAgfVxyXG5cclxuICBpZiAoIWFtb3VudCkge1xyXG4gICAgLy8gSWYgMCBtb250aHMsIG5vLW9wIHRvIGF2b2lkIGNoYW5naW5nIHRpbWVzIGluIHRoZSBob3VyIGJlZm9yZSBlbmQgb2YgRFNUXHJcbiAgICByZXR1cm4gZGF0ZTtcclxuICB9XHJcblxyXG4gIHZhciBkYXlPZk1vbnRoID0gZGF0ZS5nZXREYXRlKCk7IC8vIFRoZSBKUyBEYXRlIG9iamVjdCBzdXBwb3J0cyBkYXRlIG1hdGggYnkgYWNjZXB0aW5nIG91dC1vZi1ib3VuZHMgdmFsdWVzIGZvclxyXG4gIC8vIG1vbnRoLCBkYXksIGV0Yy4gRm9yIGV4YW1wbGUsIG5ldyBEYXRlKDIwMjAsIDAsIDApIHJldHVybnMgMzEgRGVjIDIwMTkgYW5kXHJcbiAgLy8gbmV3IERhdGUoMjAyMCwgMTMsIDEpIHJldHVybnMgMSBGZWIgMjAyMS4gIFRoaXMgaXMgKmFsbW9zdCogdGhlIGJlaGF2aW9yIHdlXHJcbiAgLy8gd2FudCBleGNlcHQgdGhhdCBkYXRlcyB3aWxsIHdyYXAgYXJvdW5kIHRoZSBlbmQgb2YgYSBtb250aCwgbWVhbmluZyB0aGF0XHJcbiAgLy8gbmV3IERhdGUoMjAyMCwgMTMsIDMxKSB3aWxsIHJldHVybiAzIE1hciAyMDIxIG5vdCAyOCBGZWIgMjAyMSBhcyBkZXNpcmVkLiBTb1xyXG4gIC8vIHdlJ2xsIGRlZmF1bHQgdG8gdGhlIGVuZCBvZiB0aGUgZGVzaXJlZCBtb250aCBieSBhZGRpbmcgMSB0byB0aGUgZGVzaXJlZFxyXG4gIC8vIG1vbnRoIGFuZCB1c2luZyBhIGRhdGUgb2YgMCB0byBiYWNrIHVwIG9uZSBkYXkgdG8gdGhlIGVuZCBvZiB0aGUgZGVzaXJlZFxyXG4gIC8vIG1vbnRoLlxyXG5cclxuICB2YXIgZW5kT2ZEZXNpcmVkTW9udGggPSBuZXcgRGF0ZShkYXRlLmdldFRpbWUoKSk7XHJcbiAgZW5kT2ZEZXNpcmVkTW9udGguc2V0TW9udGgoZGF0ZS5nZXRNb250aCgpICsgYW1vdW50ICsgMSwgMCk7XHJcbiAgdmFyIGRheXNJbk1vbnRoID0gZW5kT2ZEZXNpcmVkTW9udGguZ2V0RGF0ZSgpO1xyXG5cclxuICBpZiAoZGF5T2ZNb250aCA+PSBkYXlzSW5Nb250aCkge1xyXG4gICAgLy8gSWYgd2UncmUgYWxyZWFkeSBhdCB0aGUgZW5kIG9mIHRoZSBtb250aCwgdGhlbiB0aGlzIGlzIHRoZSBjb3JyZWN0IGRhdGVcclxuICAgIC8vIGFuZCB3ZSdyZSBkb25lLlxyXG4gICAgcmV0dXJuIGVuZE9mRGVzaXJlZE1vbnRoO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyBPdGhlcndpc2UsIHdlIG5vdyBrbm93IHRoYXQgc2V0dGluZyB0aGUgb3JpZ2luYWwgZGF5LW9mLW1vbnRoIHZhbHVlIHdvbid0XHJcbiAgICAvLyBjYXVzZSBhbiBvdmVyZmxvdywgc28gc2V0IHRoZSBkZXNpcmVkIGRheS1vZi1tb250aC4gTm90ZSB0aGF0IHdlIGNhbid0XHJcbiAgICAvLyBqdXN0IHNldCB0aGUgZGF0ZSBvZiBgZW5kT2ZEZXNpcmVkTW9udGhgIGJlY2F1c2UgdGhhdCBvYmplY3QgbWF5IGhhdmUgaGFkXHJcbiAgICAvLyBpdHMgdGltZSBjaGFuZ2VkIGluIHRoZSB1bnVzdWFsIGNhc2Ugd2hlcmUgd2hlcmUgYSBEU1QgdHJhbnNpdGlvbiB3YXMgb25cclxuICAgIC8vIHRoZSBsYXN0IGRheSBvZiB0aGUgbW9udGggYW5kIGl0cyBsb2NhbCB0aW1lIHdhcyBpbiB0aGUgaG91ciBza2lwcGVkIG9yXHJcbiAgICAvLyByZXBlYXRlZCBuZXh0IHRvIGEgRFNUIHRyYW5zaXRpb24uICBTbyB3ZSB1c2UgYGRhdGVgIGluc3RlYWQgd2hpY2ggaXNcclxuICAgIC8vIGd1YXJhbnRlZWQgdG8gc3RpbGwgaGF2ZSB0aGUgb3JpZ2luYWwgdGltZS5cclxuICAgIGRhdGUuc2V0RnVsbFllYXIoZW5kT2ZEZXNpcmVkTW9udGguZ2V0RnVsbFllYXIoKSwgZW5kT2ZEZXNpcmVkTW9udGguZ2V0TW9udGgoKSwgZGF5T2ZNb250aCk7XHJcbiAgICByZXR1cm4gZGF0ZTtcclxuICB9XHJcbn0iLCJpbXBvcnQgYWRkRGF5cyBmcm9tIFwiLi4vYWRkRGF5cy9pbmRleC5qc1wiO1xyXG5pbXBvcnQgYWRkTW9udGhzIGZyb20gXCIuLi9hZGRNb250aHMvaW5kZXguanNcIjtcclxuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XHJcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XHJcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XHJcblxyXG4vKipcclxuICogQG5hbWUgYWRkXHJcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xyXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCB5ZWFycywgbW9udGhzLCB3ZWVrcywgZGF5cywgaG91cnMsIG1pbnV0ZXMgYW5kIHNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXHJcbiAqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBZGQgdGhlIHNwZWNpZmllZCB5ZWFycywgbW9udGhzLCB3ZWVrcywgZGF5cywgaG91cnMsIG1pbnV0ZXMgYW5kIHNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXHJcbiAqXHJcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXHJcbiAqIEBwYXJhbSB7RHVyYXRpb259IGR1cmF0aW9uIC0gdGhlIG9iamVjdCB3aXRoIHllYXJzLCBtb250aHMsIHdlZWtzLCBkYXlzLCBob3VycywgbWludXRlcyBhbmQgc2Vjb25kcyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxyXG4gKlxyXG4gKiB8IEtleSAgICAgICAgICAgIHwgRGVzY3JpcHRpb24gICAgICAgICAgICAgICAgICAgICAgICB8XHJcbiAqIHwtLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcclxuICogfCB5ZWFycyAgICAgICAgICB8IEFtb3VudCBvZiB5ZWFycyB0byBiZSBhZGRlZCAgICAgICAgfFxyXG4gKiB8IG1vbnRocyAgICAgICAgIHwgQW1vdW50IG9mIG1vbnRocyB0byBiZSBhZGRlZCAgICAgICB8XHJcbiAqIHwgd2Vla3MgICAgICAgICAgfCBBbW91bnQgb2Ygd2Vla3MgdG8gYmUgYWRkZWQgICAgICAgIHxcclxuICogfCBkYXlzICAgICAgICAgICB8IEFtb3VudCBvZiBkYXlzIHRvIGJlIGFkZGVkICAgICAgICAgfFxyXG4gKiB8IGhvdXJzICAgICAgICAgIHwgQW1vdW50IG9mIGhvdXJzIHRvIGJlIGFkZGVkICAgICAgICB8XHJcbiAqIHwgbWludXRlcyAgICAgICAgfCBBbW91bnQgb2YgbWludXRlcyB0byBiZSBhZGRlZCAgICAgIHxcclxuICogfCBzZWNvbmRzICAgICAgICB8IEFtb3VudCBvZiBzZWNvbmRzIHRvIGJlIGFkZGVkICAgICAgfFxyXG4gKlxyXG4gKiBBbGwgdmFsdWVzIGRlZmF1bHQgdG8gMFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIHNlY29uZHMgYWRkZWRcclxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiAvLyBBZGQgdGhlIGZvbGxvd2luZyBkdXJhdGlvbiB0byAxIFNlcHRlbWJlciAyMDE0LCAxMDoxOTo1MFxyXG4gKiBjb25zdCByZXN1bHQgPSBhZGQobmV3IERhdGUoMjAxNCwgOCwgMSwgMTAsIDE5LCA1MCksIHtcclxuICogICB5ZWFyczogMixcclxuICogICBtb250aHM6IDksXHJcbiAqICAgd2Vla3M6IDEsXHJcbiAqICAgZGF5czogNyxcclxuICogICBob3VyczogNSxcclxuICogICBtaW51dGVzOiA5LFxyXG4gKiAgIHNlY29uZHM6IDMwLFxyXG4gKiB9KVxyXG4gKiAvLz0+IFRodSBKdW4gMTUgMjAxNyAxNToyOToyMFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkKGRpcnR5RGF0ZSwgZHVyYXRpb24pIHtcclxuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcclxuICBpZiAoIWR1cmF0aW9uIHx8IHR5cGVvZiBkdXJhdGlvbiAhPT0gJ29iamVjdCcpIHJldHVybiBuZXcgRGF0ZShOYU4pO1xyXG4gIHZhciB5ZWFycyA9IGR1cmF0aW9uLnllYXJzID8gdG9JbnRlZ2VyKGR1cmF0aW9uLnllYXJzKSA6IDA7XHJcbiAgdmFyIG1vbnRocyA9IGR1cmF0aW9uLm1vbnRocyA/IHRvSW50ZWdlcihkdXJhdGlvbi5tb250aHMpIDogMDtcclxuICB2YXIgd2Vla3MgPSBkdXJhdGlvbi53ZWVrcyA/IHRvSW50ZWdlcihkdXJhdGlvbi53ZWVrcykgOiAwO1xyXG4gIHZhciBkYXlzID0gZHVyYXRpb24uZGF5cyA/IHRvSW50ZWdlcihkdXJhdGlvbi5kYXlzKSA6IDA7XHJcbiAgdmFyIGhvdXJzID0gZHVyYXRpb24uaG91cnMgPyB0b0ludGVnZXIoZHVyYXRpb24uaG91cnMpIDogMDtcclxuICB2YXIgbWludXRlcyA9IGR1cmF0aW9uLm1pbnV0ZXMgPyB0b0ludGVnZXIoZHVyYXRpb24ubWludXRlcykgOiAwO1xyXG4gIHZhciBzZWNvbmRzID0gZHVyYXRpb24uc2Vjb25kcyA/IHRvSW50ZWdlcihkdXJhdGlvbi5zZWNvbmRzKSA6IDA7IC8vIEFkZCB5ZWFycyBhbmQgbW9udGhzXHJcblxyXG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XHJcbiAgdmFyIGRhdGVXaXRoTW9udGhzID0gbW9udGhzIHx8IHllYXJzID8gYWRkTW9udGhzKGRhdGUsIG1vbnRocyArIHllYXJzICogMTIpIDogZGF0ZTsgLy8gQWRkIHdlZWtzIGFuZCBkYXlzXHJcblxyXG4gIHZhciBkYXRlV2l0aERheXMgPSBkYXlzIHx8IHdlZWtzID8gYWRkRGF5cyhkYXRlV2l0aE1vbnRocywgZGF5cyArIHdlZWtzICogNykgOiBkYXRlV2l0aE1vbnRoczsgLy8gQWRkIGRheXMsIGhvdXJzLCBtaW51dGVzIGFuZCBzZWNvbmRzXHJcblxyXG4gIHZhciBtaW51dGVzVG9BZGQgPSBtaW51dGVzICsgaG91cnMgKiA2MDtcclxuICB2YXIgc2Vjb25kc1RvQWRkID0gc2Vjb25kcyArIG1pbnV0ZXNUb0FkZCAqIDYwO1xyXG4gIHZhciBtc1RvQWRkID0gc2Vjb25kc1RvQWRkICogMTAwMDtcclxuICB2YXIgZmluYWxEYXRlID0gbmV3IERhdGUoZGF0ZVdpdGhEYXlzLmdldFRpbWUoKSArIG1zVG9BZGQpO1xyXG4gIHJldHVybiBmaW5hbERhdGU7XHJcbn0iLCJpbXBvcnQgaXNWYWxpZCBmcm9tIFwiLi4vaXNWYWxpZC9pbmRleC5qc1wiO1xyXG5pbXBvcnQgc3ViTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9zdWJNaWxsaXNlY29uZHMvaW5kZXguanNcIjtcclxuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XHJcbmltcG9ydCBmb3JtYXR0ZXJzIGZyb20gXCIuLi9fbGliL2Zvcm1hdC9mb3JtYXR0ZXJzL2luZGV4LmpzXCI7XHJcbmltcG9ydCBsb25nRm9ybWF0dGVycyBmcm9tIFwiLi4vX2xpYi9mb3JtYXQvbG9uZ0Zvcm1hdHRlcnMvaW5kZXguanNcIjtcclxuaW1wb3J0IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMgZnJvbSBcIi4uL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xyXG5pbXBvcnQgeyBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuLCBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4sIHRocm93UHJvdGVjdGVkRXJyb3IgfSBmcm9tIFwiLi4vX2xpYi9wcm90ZWN0ZWRUb2tlbnMvaW5kZXguanNcIjtcclxuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcclxuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcclxuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xyXG5pbXBvcnQgZGVmYXVsdExvY2FsZSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0TG9jYWxlL2luZGV4LmpzXCI7IC8vIFRoaXMgUmVnRXhwIGNvbnNpc3RzIG9mIHRocmVlIHBhcnRzIHNlcGFyYXRlZCBieSBgfGA6XHJcbi8vIC0gW3lZUXFNTHdJZERlY2loSEtrbXNdbyBtYXRjaGVzIGFueSBhdmFpbGFibGUgb3JkaW5hbCBudW1iZXIgdG9rZW5cclxuLy8gICAob25lIG9mIHRoZSBjZXJ0YWluIGxldHRlcnMgZm9sbG93ZWQgYnkgYG9gKVxyXG4vLyAtIChcXHcpXFwxKiBtYXRjaGVzIGFueSBzZXF1ZW5jZXMgb2YgdGhlIHNhbWUgbGV0dGVyXHJcbi8vIC0gJycgbWF0Y2hlcyB0d28gcXVvdGUgY2hhcmFjdGVycyBpbiBhIHJvd1xyXG4vLyAtICcoJyd8W14nXSkrKCd8JCkgbWF0Y2hlcyBhbnl0aGluZyBzdXJyb3VuZGVkIGJ5IHR3byBxdW90ZSBjaGFyYWN0ZXJzICgnKSxcclxuLy8gICBleGNlcHQgYSBzaW5nbGUgcXVvdGUgc3ltYm9sLCB3aGljaCBlbmRzIHRoZSBzZXF1ZW5jZS5cclxuLy8gICBUd28gcXVvdGUgY2hhcmFjdGVycyBkbyBub3QgZW5kIHRoZSBzZXF1ZW5jZS5cclxuLy8gICBJZiB0aGVyZSBpcyBubyBtYXRjaGluZyBzaW5nbGUgcXVvdGVcclxuLy8gICB0aGVuIHRoZSBzZXF1ZW5jZSB3aWxsIGNvbnRpbnVlIHVudGlsIHRoZSBlbmQgb2YgdGhlIHN0cmluZy5cclxuLy8gLSAuIG1hdGNoZXMgYW55IHNpbmdsZSBjaGFyYWN0ZXIgdW5tYXRjaGVkIGJ5IHByZXZpb3VzIHBhcnRzIG9mIHRoZSBSZWdFeHBzXHJcblxyXG52YXIgZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9IC9beVlRcU1Md0lkRGVjaWhIS2ttc11vfChcXHcpXFwxKnwnJ3wnKCcnfFteJ10pKygnfCQpfC4vZzsgLy8gVGhpcyBSZWdFeHAgY2F0Y2hlcyBzeW1ib2xzIGVzY2FwZWQgYnkgcXVvdGVzLCBhbmQgYWxzb1xyXG4vLyBzZXF1ZW5jZXMgb2Ygc3ltYm9scyBQLCBwLCBhbmQgdGhlIGNvbWJpbmF0aW9ucyBsaWtlIGBQUFBQUFBQcHBwcHBgXHJcblxyXG52YXIgbG9uZ0Zvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSAvUCtwK3xQK3xwK3wnJ3wnKCcnfFteJ10pKygnfCQpfC4vZztcclxudmFyIGVzY2FwZWRTdHJpbmdSZWdFeHAgPSAvXicoW15dKj8pJz8kLztcclxudmFyIGRvdWJsZVF1b3RlUmVnRXhwID0gLycnL2c7XHJcbnZhciB1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCA9IC9bYS16QS1aXS87XHJcbi8qKlxyXG4gKiBAbmFtZSBmb3JtYXRcclxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXHJcbiAqIEBzdW1tYXJ5IEZvcm1hdCB0aGUgZGF0ZS5cclxuICpcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFJldHVybiB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nIGluIHRoZSBnaXZlbiBmb3JtYXQuIFRoZSByZXN1bHQgbWF5IHZhcnkgYnkgbG9jYWxlLlxyXG4gKlxyXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoZSBgZm9ybWF0YCB0b2tlbnMgZGlmZmVyIGZyb20gTW9tZW50LmpzIGFuZCBvdGhlciBsaWJyYXJpZXMuXHJcbiAqID4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXHJcbiAqXHJcbiAqIFRoZSBjaGFyYWN0ZXJzIHdyYXBwZWQgYmV0d2VlbiB0d28gc2luZ2xlIHF1b3RlcyBjaGFyYWN0ZXJzICgnKSBhcmUgZXNjYXBlZC5cclxuICogVHdvIHNpbmdsZSBxdW90ZXMgaW4gYSByb3csIHdoZXRoZXIgaW5zaWRlIG9yIG91dHNpZGUgYSBxdW90ZWQgc2VxdWVuY2UsIHJlcHJlc2VudCBhICdyZWFsJyBzaW5nbGUgcXVvdGUuXHJcbiAqIChzZWUgdGhlIGxhc3QgZXhhbXBsZSlcclxuICpcclxuICogRm9ybWF0IG9mIHRoZSBzdHJpbmcgaXMgYmFzZWQgb24gVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxyXG4gKiBodHRwczovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS1kYXRlcy5odG1sI0RhdGVfRmllbGRfU3ltYm9sX1RhYmxlXHJcbiAqIHdpdGggYSBmZXcgYWRkaXRpb25zIChzZWUgbm90ZSA3IGJlbG93IHRoZSB0YWJsZSkuXHJcbiAqXHJcbiAqIEFjY2VwdGVkIHBhdHRlcm5zOlxyXG4gKiB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQYXR0ZXJuIHwgUmVzdWx0IGV4YW1wbGVzICAgICAgICAgICAgICAgICAgIHwgTm90ZXMgfFxyXG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tfFxyXG4gKiB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHLi5HR0cgIHwgQUQsIEJDICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHR0dHICAgIHwgQW5ubyBEb21pbmksIEJlZm9yZSBDaHJpc3QgICAgICAgIHwgMiAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHR0dHRyAgIHwgQSwgQiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxyXG4gKiB8IENhbGVuZGFyIHllYXIgICAgICAgICAgICAgICAgICAgfCB5ICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5byAgICAgIHwgNDR0aCwgMXN0LCAwdGgsIDE3dGggICAgICAgICAgICAgIHwgNSw3ICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXkgICAgIHwgMDQ0LCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgIHwgNSAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXl5ICAgIHwgMDA0NCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgIHwgNSAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXl5eSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxyXG4gKiB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgfCBZICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZbyAgICAgIHwgNDR0aCwgMXN0LCAxOTAwdGgsIDIwMTd0aCAgICAgICAgIHwgNSw3ICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSw4ICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVkgICAgIHwgMDQ0LCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgIHwgNSAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVlZICAgIHwgMDA0NCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgIHwgNSw4ICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVlZWSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxyXG4gKiB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICAgfCBSICAgICAgIHwgLTQzLCAwLCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSw3ICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUiAgICAgIHwgLTQzLCAwMCwgMDEsIDE5MDAsIDIwMTcgICAgICAgICAgIHwgNSw3ICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlIgICAgIHwgLTA0MywgMDAwLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgIHwgNSw3ICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlJSICAgIHwgLTAwNDMsIDAwMDAsIDAwMDEsIDE5MDAsIDIwMTcgICAgIHwgNSw3ICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlJSUiAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1LDcgfFxyXG4gKiB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICAgfCB1ICAgICAgIHwgLTQzLCAwLCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dSAgICAgIHwgLTQzLCAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgIHwgNSAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXUgICAgIHwgLTA0MywgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXV1ICAgIHwgLTAwNDMsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgIHwgNSAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXV1dSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxyXG4gKiB8IFF1YXJ0ZXIgKGZvcm1hdHRpbmcpICAgICAgICAgICAgfCBRICAgICAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVEgICAgIHwgUTEsIFEyLCBRMywgUTQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVFRICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVFRUSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxyXG4gKiB8IFF1YXJ0ZXIgKHN0YW5kLWFsb25lKSAgICAgICAgICAgfCBxICAgICAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXEgICAgIHwgUTEsIFEyLCBRMywgUTQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXFxICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXFxcSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxyXG4gKiB8IE1vbnRoIChmb3JtYXR0aW5nKSAgICAgICAgICAgICAgfCBNICAgICAgIHwgMSwgMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTSAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU0gICAgIHwgSmFuLCBGZWIsIC4uLiwgRGVjICAgICAgICAgICAgICAgIHwgICAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU1NICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU1NTSAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxyXG4gKiB8IE1vbnRoIChzdGFuZC1hbG9uZSkgICAgICAgICAgICAgfCBMICAgICAgIHwgMSwgMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTCAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTEwgICAgIHwgSmFuLCBGZWIsIC4uLiwgRGVjICAgICAgICAgICAgICAgIHwgICAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTExMICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTExMTCAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxyXG4gKiB8IExvY2FsIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgfCB3ICAgICAgIHwgMSwgMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB3byAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB3dyAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxyXG4gKiB8IElTTyB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgICAgfCBJICAgICAgIHwgMSwgMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBJbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBJSSAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxyXG4gKiB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICAgfCBkICAgICAgIHwgMSwgMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzFzdCAgICAgICAgICAgICAgIHwgNyAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkZCAgICAgIHwgMDEsIDAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxyXG4gKiB8IERheSBvZiB5ZWFyICAgICAgICAgICAgICAgICAgICAgfCBEICAgICAgIHwgMSwgMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgICAgIHwgOSAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzY1dGgsIDM2NnRoICAgICAgIHwgNyAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBERCAgICAgIHwgMDEsIDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgIHwgOSAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEREQgICAgIHwgMDAxLCAwMDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgIHwgICAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEREREICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxyXG4gKiB8IERheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICAgICAgfCBFLi5FRUUgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFRSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFRUUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxyXG4gKiB8IElTTyBkYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgICAgfCBpICAgICAgIHwgMSwgMiwgMywgLi4uLCA3ICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgN3RoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaSAgICAgIHwgMDEsIDAyLCAuLi4sIDA3ICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWkgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgNyAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiw3ICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpaSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgNyAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpaWkgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgNyAgICAgfFxyXG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgfCBlICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlbyAgICAgIHwgMm5kLCAzcmQsIC4uLiwgMXN0ICAgICAgICAgICAgICAgIHwgNyAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZSAgICAgIHwgMDIsIDAzLCAuLi4sIDAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWUgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlZSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlZWUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxyXG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChzdGFuZC1hbG9uZSkgfCBjICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjbyAgICAgIHwgMm5kLCAzcmQsIC4uLiwgMXN0ICAgICAgICAgICAgICAgIHwgNyAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjYyAgICAgIHwgMDIsIDAzLCAuLi4sIDAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2MgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjYyAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjY2MgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxyXG4gKiB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhLi5hYSAgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWEgICAgIHwgYW0sIHBtICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWFhICAgIHwgYS5tLiwgcC5tLiAgICAgICAgICAgICAgICAgICAgICAgIHwgMiAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWFhYSAgIHwgYSwgcCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxyXG4gKiB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgfCBiLi5iYiAgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICAgIHwgICAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmIgICAgIHwgYW0sIHBtLCBub29uLCBtaWRuaWdodCAgICAgICAgICAgIHwgICAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmJiICAgIHwgYS5tLiwgcC5tLiwgbm9vbiwgbWlkbmlnaHQgICAgICAgIHwgMiAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmJiYiAgIHwgYSwgcCwgbiwgbWkgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxyXG4gKiB8IEZsZXhpYmxlIGRheSBwZXJpb2QgICAgICAgICAgICAgfCBCLi5CQkIgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBCQkJCICAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgMiAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBCQkJCQiAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxyXG4gKiB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICAgfCBoICAgICAgIHwgMSwgMiwgLi4uLCAxMSwgMTIgICAgICAgICAgICAgICAgIHwgICAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBobyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTF0aCwgMTJ0aCAgICAgICAgIHwgNyAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBoaCAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgIHwgICAgICAgfFxyXG4gKiB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICAgfCBIICAgICAgIHwgMCwgMSwgMiwgLi4uLCAyMyAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBIbyAgICAgIHwgMHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgIHwgNyAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBISCAgICAgIHwgMDAsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxyXG4gKiB8IEhvdXIgWzAtMTFdICAgICAgICAgICAgICAgICAgICAgfCBLICAgICAgIHwgMSwgMiwgLi4uLCAxMSwgMCAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBLbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTF0aCwgMHRoICAgICAgICAgIHwgNyAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBLSyAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxyXG4gKiB8IEhvdXIgWzEtMjRdICAgICAgICAgICAgICAgICAgICAgfCBrICAgICAgIHwgMjQsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgIHwgICAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBrbyAgICAgIHwgMjR0aCwgMXN0LCAybmQsIC4uLiwgMjNyZCAgICAgICAgIHwgNyAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBrayAgICAgIHwgMjQsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxyXG4gKiB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtICAgICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtbyAgICAgIHwgMHRoLCAxc3QsIC4uLiwgNTl0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtbSAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxyXG4gKiB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzICAgICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzbyAgICAgIHwgMHRoLCAxc3QsIC4uLiwgNTl0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzcyAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxyXG4gKiB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICAgfCBTICAgICAgIHwgMCwgMSwgLi4uLCA5ICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTUyAgICAgIHwgMDAsIDAxLCAuLi4sIDk5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTU1MgICAgIHwgMDAwLCAwMDEsIC4uLiwgOTk5ICAgICAgICAgICAgICAgIHwgICAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTU1NTICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxyXG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3LyBaKSAgICAgICAgfCBYICAgICAgIHwgLTA4LCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWCAgICAgIHwgLTA4MDAsICswNTMwLCBaICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFggICAgIHwgLTA4OjAwLCArMDU6MzAsIFogICAgICAgICAgICAgICAgIHwgICAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFhYICAgIHwgLTA4MDAsICswNTMwLCBaLCArMTIzNDU2ICAgICAgICAgIHwgMiAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFhYWCAgIHwgLTA4OjAwLCArMDU6MzAsIFosICsxMjozNDo1NiAgICAgIHwgICAgICAgfFxyXG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICAgfCB4ICAgICAgIHwgLTA4LCArMDUzMCwgKzAwICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eCAgICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHggICAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCAgICAgICAgICAgIHwgMiAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHh4ICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCwgKzEyMzQ1NiAgICAgIHwgICAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHh4eCAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCwgKzEyOjM0OjU2IHwgICAgICAgfFxyXG4gKiB8IFRpbWV6b25lIChHTVQpICAgICAgICAgICAgICAgICAgfCBPLi4uT09PIHwgR01ULTgsIEdNVCs1OjMwLCBHTVQrMCAgICAgICAgICAgIHwgICAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBPT09PICAgIHwgR01ULTA4OjAwLCBHTVQrMDU6MzAsIEdNVCswMDowMCAgIHwgMiAgICAgfFxyXG4gKiB8IFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXQuKSAgfCB6Li4uenp6IHwgR01ULTgsIEdNVCs1OjMwLCBHTVQrMCAgICAgICAgICAgIHwgNiAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB6enp6ICAgIHwgR01ULTA4OjAwLCBHTVQrMDU6MzAsIEdNVCswMDowMCAgIHwgMiw2ICAgfFxyXG4gKiB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgICAgICAgICAgfCB0ICAgICAgIHwgNTEyOTY5NTIwICAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB0dCAgICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw3ICAgfFxyXG4gKiB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgfCBUICAgICAgIHwgNTEyOTY5NTIwOTAwICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBUVCAgICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw3ICAgfFxyXG4gKiB8IExvbmcgbG9jYWxpemVkIGRhdGUgICAgICAgICAgICAgfCBQICAgICAgIHwgMDQvMjkvMTQ1MyAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUCAgICAgIHwgQXByIDI5LCAxNDUzICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFAgICAgIHwgQXByaWwgMjl0aCwgMTQ1MyAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBQICAgIHwgRnJpZGF5LCBBcHJpbCAyOXRoLCAxNDUzICAgICAgICAgIHwgMiw3ICAgfFxyXG4gKiB8IExvbmcgbG9jYWxpemVkIHRpbWUgICAgICAgICAgICAgfCBwICAgICAgIHwgMTI6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcCAgICAgIHwgMTI6MDA6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcHAgICAgIHwgMTI6MDA6MDAgQU0gR01UKzIgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcHBwICAgIHwgMTI6MDA6MDAgQU0gR01UKzAyOjAwICAgICAgICAgICAgIHwgMiw3ICAgfFxyXG4gKiB8IENvbWJpbmF0aW9uIG9mIGRhdGUgYW5kIHRpbWUgICAgfCBQcCAgICAgIHwgMDQvMjkvMTQ1MywgMTI6MDAgQU0gICAgICAgICAgICAgIHwgNyAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUHBwICAgIHwgQXByIDI5LCAxNDUzLCAxMjowMDowMCBBTSAgICAgICAgIHwgNyAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBwcHAgIHwgQXByaWwgMjl0aCwgMTQ1MyBhdCAuLi4gICAgICAgICAgIHwgNyAgICAgfFxyXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBQcHBwcHwgRnJpZGF5LCBBcHJpbCAyOXRoLCAxNDUzIGF0IC4uLiAgIHwgMiw3ICAgfFxyXG4gKiBOb3RlczpcclxuICogMS4gXCJGb3JtYXR0aW5nXCIgdW5pdHMgKGUuZy4gZm9ybWF0dGluZyBxdWFydGVyKSBpbiB0aGUgZGVmYXVsdCBlbi1VUyBsb2NhbGVcclxuICogICAgYXJlIHRoZSBzYW1lIGFzIFwic3RhbmQtYWxvbmVcIiB1bml0cywgYnV0IGFyZSBkaWZmZXJlbnQgaW4gc29tZSBsYW5ndWFnZXMuXHJcbiAqICAgIFwiRm9ybWF0dGluZ1wiIHVuaXRzIGFyZSBkZWNsaW5lZCBhY2NvcmRpbmcgdG8gdGhlIHJ1bGVzIG9mIHRoZSBsYW5ndWFnZVxyXG4gKiAgICBpbiB0aGUgY29udGV4dCBvZiBhIGRhdGUuIFwiU3RhbmQtYWxvbmVcIiB1bml0cyBhcmUgYWx3YXlzIG5vbWluYXRpdmUgc2luZ3VsYXI6XHJcbiAqXHJcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnZG8gTExMTCcsIHtsb2NhbGU6IGNzfSkgLy89PiAnNi4gbGlzdG9wYWQnYFxyXG4gKlxyXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIE1NTU0nLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkdSdgXHJcbiAqXHJcbiAqIDIuIEFueSBzZXF1ZW5jZSBvZiB0aGUgaWRlbnRpY2FsIGxldHRlcnMgaXMgYSBwYXR0ZXJuLCB1bmxlc3MgaXQgaXMgZXNjYXBlZCBieVxyXG4gKiAgICB0aGUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgKHNlZSBiZWxvdykuXHJcbiAqICAgIElmIHRoZSBzZXF1ZW5jZSBpcyBsb25nZXIgdGhhbiBsaXN0ZWQgaW4gdGFibGUgKGUuZy4gYEVFRUVFRUVFRUVFYClcclxuICogICAgdGhlIG91dHB1dCB3aWxsIGJlIHRoZSBzYW1lIGFzIGRlZmF1bHQgcGF0dGVybiBmb3IgdGhpcyB1bml0LCB1c3VhbGx5XHJcbiAqICAgIHRoZSBsb25nZXN0IG9uZSAoaW4gY2FzZSBvZiBJU08gd2Vla2RheXMsIGBFRUVFYCkuIERlZmF1bHQgcGF0dGVybnMgZm9yIHVuaXRzXHJcbiAqICAgIGFyZSBtYXJrZWQgd2l0aCBcIjJcIiBpbiB0aGUgbGFzdCBjb2x1bW4gb2YgdGhlIHRhYmxlLlxyXG4gKlxyXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTScpIC8vPT4gJ05vdidgXHJcbiAqXHJcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcclxuICpcclxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTScpIC8vPT4gJ04nYFxyXG4gKlxyXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcclxuICpcclxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTU1NJykgLy89PiAnTm92ZW1iZXInYFxyXG4gKlxyXG4gKiAzLiBTb21lIHBhdHRlcm5zIGNvdWxkIGJlIHVubGltaXRlZCBsZW5ndGggKHN1Y2ggYXMgYHl5eXl5eXl5YCkuXHJcbiAqICAgIFRoZSBvdXRwdXQgd2lsbCBiZSBwYWRkZWQgd2l0aCB6ZXJvcyB0byBtYXRjaCB0aGUgbGVuZ3RoIG9mIHRoZSBwYXR0ZXJuLlxyXG4gKlxyXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ3l5eXl5eXl5JykgLy89PiAnMDAwMDIwMTcnYFxyXG4gKlxyXG4gKiA0LiBgUVFRUVFgIGFuZCBgcXFxcXFgIGNvdWxkIGJlIG5vdCBzdHJpY3RseSBudW1lcmljYWwgaW4gc29tZSBsb2NhbGVzLlxyXG4gKiAgICBUaGVzZSB0b2tlbnMgcmVwcmVzZW50IHRoZSBzaG9ydGVzdCBmb3JtIG9mIHRoZSBxdWFydGVyLlxyXG4gKlxyXG4gKiA1LiBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgcGF0dGVybnMgYXJlIEIuQy4geWVhcnM6XHJcbiAqXHJcbiAqICAgIHwgWWVhciB8IGB5YCB8IGB1YCB8XHJcbiAqICAgIHwtLS0tLS18LS0tLS18LS0tLS18XHJcbiAqICAgIHwgQUMgMSB8ICAgMSB8ICAgMSB8XHJcbiAqICAgIHwgQkMgMSB8ICAgMSB8ICAgMCB8XHJcbiAqICAgIHwgQkMgMiB8ICAgMiB8ICAtMSB8XHJcbiAqXHJcbiAqICAgIEFsc28gYHl5YCBhbHdheXMgcmV0dXJucyB0aGUgbGFzdCB0d28gZGlnaXRzIG9mIGEgeWVhcixcclxuICogICAgd2hpbGUgYHV1YCBwYWRzIHNpbmdsZSBkaWdpdCB5ZWFycyB0byAyIGNoYXJhY3RlcnMgYW5kIHJldHVybnMgb3RoZXIgeWVhcnMgdW5jaGFuZ2VkOlxyXG4gKlxyXG4gKiAgICB8IFllYXIgfCBgeXlgIHwgYHV1YCB8XHJcbiAqICAgIHwtLS0tLS18LS0tLS0tfC0tLS0tLXxcclxuICogICAgfCAxICAgIHwgICAwMSB8ICAgMDEgfFxyXG4gKiAgICB8IDE0ICAgfCAgIDE0IHwgICAxNCB8XHJcbiAqICAgIHwgMzc2ICB8ICAgNzYgfCAgMzc2IHxcclxuICogICAgfCAxNDUzIHwgICA1MyB8IDE0NTMgfFxyXG4gKlxyXG4gKiAgICBUaGUgc2FtZSBkaWZmZXJlbmNlIGlzIHRydWUgZm9yIGxvY2FsIGFuZCBJU08gd2Vlay1udW1iZXJpbmcgeWVhcnMgKGBZYCBhbmQgYFJgKSxcclxuICogICAgZXhjZXB0IGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJzIGFyZSBkZXBlbmRlbnQgb24gYG9wdGlvbnMud2Vla1N0YXJ0c09uYFxyXG4gKiAgICBhbmQgYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCAoY29tcGFyZSBbZ2V0SVNPV2Vla1llYXJde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZ2V0SVNPV2Vla1llYXJ9XHJcbiAqICAgIGFuZCBbZ2V0V2Vla1llYXJde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZ2V0V2Vla1llYXJ9KS5cclxuICpcclxuICogNi4gU3BlY2lmaWMgbm9uLWxvY2F0aW9uIHRpbWV6b25lcyBhcmUgY3VycmVudGx5IHVuYXZhaWxhYmxlIGluIGBkYXRlLWZuc2AsXHJcbiAqICAgIHNvIHJpZ2h0IG5vdyB0aGVzZSB0b2tlbnMgZmFsbCBiYWNrIHRvIEdNVCB0aW1lem9uZXMuXHJcbiAqXHJcbiAqIDcuIFRoZXNlIHBhdHRlcm5zIGFyZSBub3QgaW4gdGhlIFVuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNTpcclxuICogICAgLSBgaWA6IElTTyBkYXkgb2Ygd2Vla1xyXG4gKiAgICAtIGBJYDogSVNPIHdlZWsgb2YgeWVhclxyXG4gKiAgICAtIGBSYDogSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcclxuICogICAgLSBgdGA6IHNlY29uZHMgdGltZXN0YW1wXHJcbiAqICAgIC0gYFRgOiBtaWxsaXNlY29uZHMgdGltZXN0YW1wXHJcbiAqICAgIC0gYG9gOiBvcmRpbmFsIG51bWJlciBtb2RpZmllclxyXG4gKiAgICAtIGBQYDogbG9uZyBsb2NhbGl6ZWQgZGF0ZVxyXG4gKiAgICAtIGBwYDogbG9uZyBsb2NhbGl6ZWQgdGltZVxyXG4gKlxyXG4gKiA4LiBgWVlgIGFuZCBgWVlZWWAgdG9rZW5zIHJlcHJlc2VudCB3ZWVrLW51bWJlcmluZyB5ZWFycyBidXQgdGhleSBhcmUgb2Z0ZW4gY29uZnVzZWQgd2l0aCB5ZWFycy5cclxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXHJcbiAqXHJcbiAqIDkuIGBEYCBhbmQgYEREYCB0b2tlbnMgcmVwcmVzZW50IGRheXMgb2YgdGhlIHllYXIgYnV0IHRoZXkgYXJlIG9mdGVuIGNvbmZ1c2VkIHdpdGggZGF5cyBvZiB0aGUgbW9udGguXHJcbiAqICAgIFlvdSBzaG91bGQgZW5hYmxlIGBvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnNgIHRvIHVzZSB0aGVtLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcclxuICpcclxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBmb3JtYXQgLSB0aGUgc3RyaW5nIG9mIHRva2Vuc1xyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cclxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XHJcbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGU9MV0gLSB0aGUgZGF5IG9mIEphbnVhcnksIHdoaWNoIGlzXHJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zPWZhbHNlXSAtIGlmIHRydWUsIGFsbG93cyB1c2FnZSBvZiB0aGUgd2Vlay1udW1iZXJpbmcgeWVhciB0b2tlbnMgYFlZYCBhbmQgYFlZWVlgO1xyXG4gKiAgIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnM9ZmFsc2VdIC0gaWYgdHJ1ZSwgYWxsb3dzIHVzYWdlIG9mIHRoZSBkYXkgb2YgeWVhciB0b2tlbnMgYERgIGFuZCBgRERgO1xyXG4gKiAgIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxyXG4gKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nXHJcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcclxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYGRhdGVgIG11c3Qgbm90IGJlIEludmFsaWQgRGF0ZVxyXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgbG9jYWxpemVgIHByb3BlcnR5XHJcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBmb3JtYXRMb25nYCBwcm9wZXJ0eVxyXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XHJcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDdcclxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGB5eXl5YCBpbnN0ZWFkIG9mIGBZWVlZYCBmb3IgZm9ybWF0dGluZyB5ZWFycyB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXHJcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgeXlgIGluc3RlYWQgb2YgYFlZYCBmb3IgZm9ybWF0dGluZyB5ZWFycyB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXHJcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgZGAgaW5zdGVhZCBvZiBgRGAgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxyXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYGRkYCBpbnN0ZWFkIG9mIGBERGAgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxyXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBmb3JtYXQgc3RyaW5nIGNvbnRhaW5zIGFuIHVuZXNjYXBlZCBsYXRpbiBhbHBoYWJldCBjaGFyYWN0ZXJcclxuICpcclxuICogQGV4YW1wbGVcclxuICogLy8gUmVwcmVzZW50IDExIEZlYnJ1YXJ5IDIwMTQgaW4gbWlkZGxlLWVuZGlhbiBmb3JtYXQ6XHJcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCAxLCAxMSksICdNTS9kZC95eXl5JylcclxuICogLy89PiAnMDIvMTEvMjAxNCdcclxuICpcclxuICogQGV4YW1wbGVcclxuICogLy8gUmVwcmVzZW50IDIgSnVseSAyMDE0IGluIEVzcGVyYW50bzpcclxuICogaW1wb3J0IHsgZW9Mb2NhbGUgfSBmcm9tICdkYXRlLWZucy9sb2NhbGUvZW8nXHJcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyKSwgXCJkbyAnZGUnIE1NTU0geXl5eVwiLCB7XHJcbiAqICAgbG9jYWxlOiBlb0xvY2FsZVxyXG4gKiB9KVxyXG4gKiAvLz0+ICcyLWEgZGUganVsaW8gMjAxNCdcclxuICpcclxuICogQGV4YW1wbGVcclxuICogLy8gRXNjYXBlIHN0cmluZyBieSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyczpcclxuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDYsIDIsIDE1KSwgXCJoICdvJydjbG9jaydcIilcclxuICogLy89PiBcIjMgbydjbG9ja1wiXHJcbiAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0KGRpcnR5RGF0ZSwgZGlydHlGb3JtYXRTdHIsIG9wdGlvbnMpIHtcclxuICB2YXIgX3JlZiwgX29wdGlvbnMkbG9jYWxlLCBfcmVmMiwgX3JlZjMsIF9yZWY0LCBfb3B0aW9ucyRmaXJzdFdlZWtDb24sIF9vcHRpb25zJGxvY2FsZTIsIF9vcHRpb25zJGxvY2FsZTIkb3B0aSwgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLCBfcmVmNSwgX3JlZjYsIF9yZWY3LCBfb3B0aW9ucyR3ZWVrU3RhcnRzT24sIF9vcHRpb25zJGxvY2FsZTMsIF9vcHRpb25zJGxvY2FsZTMkb3B0aSwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMywgX2RlZmF1bHRPcHRpb25zJGxvY2FsNDtcclxuXHJcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XHJcbiAgdmFyIGZvcm1hdFN0ciA9IFN0cmluZyhkaXJ0eUZvcm1hdFN0cik7XHJcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcclxuICB2YXIgbG9jYWxlID0gKF9yZWYgPSAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmxvY2FsZSkgIT09IG51bGwgJiYgX29wdGlvbnMkbG9jYWxlICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRsb2NhbGUgOiBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiBkZWZhdWx0TG9jYWxlO1xyXG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSB0b0ludGVnZXIoKF9yZWYyID0gKF9yZWYzID0gKF9yZWY0ID0gKF9vcHRpb25zJGZpcnN0V2Vla0NvbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9vcHRpb25zJGZpcnN0V2Vla0NvbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkZmlyc3RXZWVrQ29uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlMiA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUyID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlMiRvcHRpID0gX29wdGlvbnMkbG9jYWxlMi5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUyJG9wdGkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZTIkb3B0aS5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWY0ICE9PSB2b2lkIDAgPyBfcmVmNCA6IGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogMSk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMSBhbmQgNyBfYW5kXyBpcyBub3QgTmFOXHJcblxyXG4gIGlmICghKGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA+PSAxICYmIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA8PSA3KSkge1xyXG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2ZpcnN0V2Vla0NvbnRhaW5zRGF0ZSBtdXN0IGJlIGJldHdlZW4gMSBhbmQgNyBpbmNsdXNpdmVseScpO1xyXG4gIH1cclxuXHJcbiAgdmFyIHdlZWtTdGFydHNPbiA9IHRvSW50ZWdlcigoX3JlZjUgPSAoX3JlZjYgPSAoX3JlZjcgPSAoX29wdGlvbnMkd2Vla1N0YXJ0c09uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX29wdGlvbnMkd2Vla1N0YXJ0c09uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUzID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZTMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUzJG9wdGkgPSBfb3B0aW9ucyRsb2NhbGUzLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZTMkb3B0aSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlMyRvcHRpLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjcgIT09IHZvaWQgMCA/IF9yZWY3IDogZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmNiAhPT0gdm9pZCAwID8gX3JlZjYgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMyA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDQgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwzLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDQud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmNSAhPT0gdm9pZCAwID8gX3JlZjUgOiAwKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cclxuXHJcbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XHJcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XHJcbiAgfVxyXG5cclxuICBpZiAoIWxvY2FsZS5sb2NhbGl6ZSkge1xyXG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2xvY2FsZSBtdXN0IGNvbnRhaW4gbG9jYWxpemUgcHJvcGVydHknKTtcclxuICB9XHJcblxyXG4gIGlmICghbG9jYWxlLmZvcm1hdExvbmcpIHtcclxuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdsb2NhbGUgbXVzdCBjb250YWluIGZvcm1hdExvbmcgcHJvcGVydHknKTtcclxuICB9XHJcblxyXG4gIHZhciBvcmlnaW5hbERhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcclxuXHJcbiAgaWYgKCFpc1ZhbGlkKG9yaWdpbmFsRGF0ZSkpIHtcclxuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHRpbWUgdmFsdWUnKTtcclxuICB9IC8vIENvbnZlcnQgdGhlIGRhdGUgaW4gc3lzdGVtIHRpbWV6b25lIHRvIHRoZSBzYW1lIGRhdGUgaW4gVVRDKzAwOjAwIHRpbWV6b25lLlxyXG4gIC8vIFRoaXMgZW5zdXJlcyB0aGF0IHdoZW4gVVRDIGZ1bmN0aW9ucyB3aWxsIGJlIGltcGxlbWVudGVkLCBsb2NhbGVzIHdpbGwgYmUgY29tcGF0aWJsZSB3aXRoIHRoZW0uXHJcbiAgLy8gU2VlIGFuIGlzc3VlIGFib3V0IFVUQyBmdW5jdGlvbnM6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XHJcblxyXG5cclxuICB2YXIgdGltZXpvbmVPZmZzZXQgPSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKG9yaWdpbmFsRGF0ZSk7XHJcbiAgdmFyIHV0Y0RhdGUgPSBzdWJNaWxsaXNlY29uZHMob3JpZ2luYWxEYXRlLCB0aW1lem9uZU9mZnNldCk7XHJcbiAgdmFyIGZvcm1hdHRlck9wdGlvbnMgPSB7XHJcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSxcclxuICAgIHdlZWtTdGFydHNPbjogd2Vla1N0YXJ0c09uLFxyXG4gICAgbG9jYWxlOiBsb2NhbGUsXHJcbiAgICBfb3JpZ2luYWxEYXRlOiBvcmlnaW5hbERhdGVcclxuICB9O1xyXG4gIHZhciByZXN1bHQgPSBmb3JtYXRTdHIubWF0Y2gobG9uZ0Zvcm1hdHRpbmdUb2tlbnNSZWdFeHApLm1hcChmdW5jdGlvbiAoc3Vic3RyaW5nKSB7XHJcbiAgICB2YXIgZmlyc3RDaGFyYWN0ZXIgPSBzdWJzdHJpbmdbMF07XHJcblxyXG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyID09PSAncCcgfHwgZmlyc3RDaGFyYWN0ZXIgPT09ICdQJykge1xyXG4gICAgICB2YXIgbG9uZ0Zvcm1hdHRlciA9IGxvbmdGb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXTtcclxuICAgICAgcmV0dXJuIGxvbmdGb3JtYXR0ZXIoc3Vic3RyaW5nLCBsb2NhbGUuZm9ybWF0TG9uZyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHN1YnN0cmluZztcclxuICB9KS5qb2luKCcnKS5tYXRjaChmb3JtYXR0aW5nVG9rZW5zUmVnRXhwKS5tYXAoZnVuY3Rpb24gKHN1YnN0cmluZykge1xyXG4gICAgLy8gUmVwbGFjZSB0d28gc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgd2l0aCBvbmUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlclxyXG4gICAgaWYgKHN1YnN0cmluZyA9PT0gXCInJ1wiKSB7XHJcbiAgICAgIHJldHVybiBcIidcIjtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgZmlyc3RDaGFyYWN0ZXIgPSBzdWJzdHJpbmdbMF07XHJcblxyXG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyID09PSBcIidcIikge1xyXG4gICAgICByZXR1cm4gY2xlYW5Fc2NhcGVkU3RyaW5nKHN1YnN0cmluZyk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGZvcm1hdHRlciA9IGZvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdO1xyXG5cclxuICAgIGlmIChmb3JtYXR0ZXIpIHtcclxuICAgICAgaWYgKCEob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnMpICYmIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbihzdWJzdHJpbmcpKSB7XHJcbiAgICAgICAgdGhyb3dQcm90ZWN0ZWRFcnJvcihzdWJzdHJpbmcsIGRpcnR5Rm9ybWF0U3RyLCBTdHJpbmcoZGlydHlEYXRlKSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICghKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2VucykgJiYgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbihzdWJzdHJpbmcpKSB7XHJcbiAgICAgICAgdGhyb3dQcm90ZWN0ZWRFcnJvcihzdWJzdHJpbmcsIGRpcnR5Rm9ybWF0U3RyLCBTdHJpbmcoZGlydHlEYXRlKSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBmb3JtYXR0ZXIodXRjRGF0ZSwgc3Vic3RyaW5nLCBsb2NhbGUubG9jYWxpemUsIGZvcm1hdHRlck9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChmaXJzdENoYXJhY3Rlci5tYXRjaCh1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCkpIHtcclxuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0Zvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlciBgJyArIGZpcnN0Q2hhcmFjdGVyICsgJ2AnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc3Vic3RyaW5nO1xyXG4gIH0pLmpvaW4oJycpO1xyXG4gIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsZWFuRXNjYXBlZFN0cmluZyhpbnB1dCkge1xyXG4gIHZhciBtYXRjaGVkID0gaW5wdXQubWF0Y2goZXNjYXBlZFN0cmluZ1JlZ0V4cCk7XHJcblxyXG4gIGlmICghbWF0Y2hlZCkge1xyXG4gICAgcmV0dXJuIGlucHV0O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG1hdGNoZWRbMV0ucmVwbGFjZShkb3VibGVRdW90ZVJlZ0V4cCwgXCInXCIpO1xyXG59IiwiaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcclxuLyoqXHJcbiAqIEBuYW1lIGlzRGF0ZVxyXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcclxuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIHZhbHVlIGEgZGF0ZT9cclxuICpcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZS4gVGhlIGZ1bmN0aW9uIHdvcmtzIGZvciBkYXRlcyB0cmFuc2ZlcnJlZCBhY3Jvc3MgaWZyYW1lcy5cclxuICpcclxuICogQHBhcmFtIHsqfSB2YWx1ZSAtIHRoZSB2YWx1ZSB0byBjaGVja1xyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSBkYXRlXHJcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudHMgcmVxdWlyZWRcclxuICpcclxuICogQGV4YW1wbGVcclxuICogLy8gRm9yIGEgdmFsaWQgZGF0ZTpcclxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKG5ldyBEYXRlKCkpXHJcbiAqIC8vPT4gdHJ1ZVxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiAvLyBGb3IgYW4gaW52YWxpZCBkYXRlOlxyXG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUobmV3IERhdGUoTmFOKSlcclxuICogLy89PiB0cnVlXHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqIC8vIEZvciBzb21lIHZhbHVlOlxyXG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUoJzIwMTQtMDItMzEnKVxyXG4gKiAvLz0+IGZhbHNlXHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqIC8vIEZvciBhbiBvYmplY3Q6XHJcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZSh7fSlcclxuICogLy89PiBmYWxzZVxyXG4gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzRGF0ZSh2YWx1ZSkge1xyXG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xyXG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIERhdGUgfHwgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBEYXRlXSc7XHJcbn0iLCJpbXBvcnQgaXNEYXRlIGZyb20gXCIuLi9pc0RhdGUvaW5kZXguanNcIjtcclxuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XHJcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XHJcbi8qKlxyXG4gKiBAbmFtZSBpc1ZhbGlkXHJcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xyXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB2YWxpZD9cclxuICpcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFJldHVybnMgZmFsc2UgaWYgYXJndW1lbnQgaXMgSW52YWxpZCBEYXRlIGFuZCB0cnVlIG90aGVyd2lzZS5cclxuICogQXJndW1lbnQgaXMgY29udmVydGVkIHRvIERhdGUgdXNpbmcgYHRvRGF0ZWAuIFNlZSBbdG9EYXRlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL3RvRGF0ZX1cclxuICogSW52YWxpZCBEYXRlIGlzIGEgRGF0ZSwgd2hvc2UgdGltZSB2YWx1ZSBpcyBOYU4uXHJcbiAqXHJcbiAqIFRpbWUgdmFsdWUgb2YgRGF0ZTogaHR0cDovL2VzNS5naXRodWIuaW8vI3gxNS45LjEuMVxyXG4gKlxyXG4gKiBAcGFyYW0geyp9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xyXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdmFsaWRcclxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqIC8vIEZvciB0aGUgdmFsaWQgZGF0ZTpcclxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgyMDE0LCAxLCAzMSkpXHJcbiAqIC8vPT4gdHJ1ZVxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiAvLyBGb3IgdGhlIHZhbHVlLCBjb252ZXJ0YWJsZSBpbnRvIGEgZGF0ZTpcclxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZCgxMzkzODA0ODAwMDAwKVxyXG4gKiAvLz0+IHRydWVcclxuICpcclxuICogQGV4YW1wbGVcclxuICogLy8gRm9yIHRoZSBpbnZhbGlkIGRhdGU6XHJcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoJycpKVxyXG4gKiAvLz0+IGZhbHNlXHJcbiAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNWYWxpZChkaXJ0eURhdGUpIHtcclxuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcclxuXHJcbiAgaWYgKCFpc0RhdGUoZGlydHlEYXRlKSAmJiB0eXBlb2YgZGlydHlEYXRlICE9PSAnbnVtYmVyJykge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcclxuICByZXR1cm4gIWlzTmFOKE51bWJlcihkYXRlKSk7XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZEZvcm1hdExvbmdGbihhcmdzKSB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcclxuICAgIC8vIFRPRE86IFJlbW92ZSBTdHJpbmcoKVxyXG4gICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xyXG4gICAgdmFyIGZvcm1hdCA9IGFyZ3MuZm9ybWF0c1t3aWR0aF0gfHwgYXJncy5mb3JtYXRzW2FyZ3MuZGVmYXVsdFdpZHRoXTtcclxuICAgIHJldHVybiBmb3JtYXQ7XHJcbiAgfTtcclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTG9jYWxpemVGbihhcmdzKSB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXJ0eUluZGV4LCBvcHRpb25zKSB7XHJcbiAgICB2YXIgY29udGV4dCA9IG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuY29udGV4dCA/IFN0cmluZyhvcHRpb25zLmNvbnRleHQpIDogJ3N0YW5kYWxvbmUnO1xyXG4gICAgdmFyIHZhbHVlc0FycmF5O1xyXG5cclxuICAgIGlmIChjb250ZXh0ID09PSAnZm9ybWF0dGluZycgJiYgYXJncy5mb3JtYXR0aW5nVmFsdWVzKSB7XHJcbiAgICAgIHZhciBkZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRGb3JtYXR0aW5nV2lkdGggfHwgYXJncy5kZWZhdWx0V2lkdGg7XHJcbiAgICAgIHZhciB3aWR0aCA9IG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBkZWZhdWx0V2lkdGg7XHJcbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy5mb3JtYXR0aW5nVmFsdWVzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbZGVmYXVsdFdpZHRoXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZhciBfZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0V2lkdGg7XHJcblxyXG4gICAgICB2YXIgX3dpZHRoID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xyXG5cclxuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLnZhbHVlc1tfd2lkdGhdIHx8IGFyZ3MudmFsdWVzW19kZWZhdWx0V2lkdGhdO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBpbmRleCA9IGFyZ3MuYXJndW1lbnRDYWxsYmFjayA/IGFyZ3MuYXJndW1lbnRDYWxsYmFjayhkaXJ0eUluZGV4KSA6IGRpcnR5SW5kZXg7IC8vIEB0cy1pZ25vcmU6IEZvciBzb21lIHJlYXNvbiBUeXBlU2NyaXB0IGp1c3QgZG9uJ3Qgd2FudCB0byBtYXRjaCBpdCwgbm8gbWF0dGVyIGhvdyBoYXJkIHdlIHRyeS4gSSBjaGFsbGVuZ2UgeW91IHRvIHRyeSB0byByZW1vdmUgaXQhXHJcblxyXG4gICAgcmV0dXJuIHZhbHVlc0FycmF5W2luZGV4XTtcclxuICB9O1xyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNYXRjaEZuKGFyZ3MpIHtcclxuICByZXR1cm4gZnVuY3Rpb24gKHN0cmluZykge1xyXG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xyXG4gICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aDtcclxuICAgIHZhciBtYXRjaFBhdHRlcm4gPSB3aWR0aCAmJiBhcmdzLm1hdGNoUGF0dGVybnNbd2lkdGhdIHx8IGFyZ3MubWF0Y2hQYXR0ZXJuc1thcmdzLmRlZmF1bHRNYXRjaFdpZHRoXTtcclxuICAgIHZhciBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChtYXRjaFBhdHRlcm4pO1xyXG5cclxuICAgIGlmICghbWF0Y2hSZXN1bHQpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcclxuICAgIHZhciBwYXJzZVBhdHRlcm5zID0gd2lkdGggJiYgYXJncy5wYXJzZVBhdHRlcm5zW3dpZHRoXSB8fCBhcmdzLnBhcnNlUGF0dGVybnNbYXJncy5kZWZhdWx0UGFyc2VXaWR0aF07XHJcbiAgICB2YXIga2V5ID0gQXJyYXkuaXNBcnJheShwYXJzZVBhdHRlcm5zKSA/IGZpbmRJbmRleChwYXJzZVBhdHRlcm5zLCBmdW5jdGlvbiAocGF0dGVybikge1xyXG4gICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xyXG4gICAgfSkgOiBmaW5kS2V5KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XHJcbiAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZyk7XHJcbiAgICB9KTtcclxuICAgIHZhciB2YWx1ZTtcclxuICAgIHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrID8gYXJncy52YWx1ZUNhbGxiYWNrKGtleSkgOiBrZXk7XHJcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcclxuICAgIHZhciByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHZhbHVlOiB2YWx1ZSxcclxuICAgICAgcmVzdDogcmVzdFxyXG4gICAgfTtcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBmaW5kS2V5KG9iamVjdCwgcHJlZGljYXRlKSB7XHJcbiAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xyXG4gICAgaWYgKG9iamVjdC5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIHByZWRpY2F0ZShvYmplY3Rba2V5XSkpIHtcclxuICAgICAgcmV0dXJuIGtleTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbmRJbmRleChhcnJheSwgcHJlZGljYXRlKSB7XHJcbiAgZm9yICh2YXIga2V5ID0gMDsga2V5IDwgYXJyYXkubGVuZ3RoOyBrZXkrKykge1xyXG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtrZXldKSkge1xyXG4gICAgICByZXR1cm4ga2V5O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHVuZGVmaW5lZDtcclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oYXJncykge1xyXG4gIHJldHVybiBmdW5jdGlvbiAoc3RyaW5nKSB7XHJcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XHJcbiAgICB2YXIgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5tYXRjaFBhdHRlcm4pO1xyXG4gICAgaWYgKCFtYXRjaFJlc3VsdCkgcmV0dXJuIG51bGw7XHJcbiAgICB2YXIgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xyXG4gICAgdmFyIHBhcnNlUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MucGFyc2VQYXR0ZXJuKTtcclxuICAgIGlmICghcGFyc2VSZXN1bHQpIHJldHVybiBudWxsO1xyXG4gICAgdmFyIHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrID8gYXJncy52YWx1ZUNhbGxiYWNrKHBhcnNlUmVzdWx0WzBdKSA6IHBhcnNlUmVzdWx0WzBdO1xyXG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XHJcbiAgICB2YXIgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB2YWx1ZTogdmFsdWUsXHJcbiAgICAgIHJlc3Q6IHJlc3RcclxuICAgIH07XHJcbiAgfTtcclxufSIsInZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcclxuICBsZXNzVGhhblhTZWNvbmRzOiB7XHJcbiAgICBvbmU6ICdsZXNzIHRoYW4gYSBzZWNvbmQnLFxyXG4gICAgb3RoZXI6ICdsZXNzIHRoYW4ge3tjb3VudH19IHNlY29uZHMnXHJcbiAgfSxcclxuICB4U2Vjb25kczoge1xyXG4gICAgb25lOiAnMSBzZWNvbmQnLFxyXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gc2Vjb25kcydcclxuICB9LFxyXG4gIGhhbGZBTWludXRlOiAnaGFsZiBhIG1pbnV0ZScsXHJcbiAgbGVzc1RoYW5YTWludXRlczoge1xyXG4gICAgb25lOiAnbGVzcyB0aGFuIGEgbWludXRlJyxcclxuICAgIG90aGVyOiAnbGVzcyB0aGFuIHt7Y291bnR9fSBtaW51dGVzJ1xyXG4gIH0sXHJcbiAgeE1pbnV0ZXM6IHtcclxuICAgIG9uZTogJzEgbWludXRlJyxcclxuICAgIG90aGVyOiAne3tjb3VudH19IG1pbnV0ZXMnXHJcbiAgfSxcclxuICBhYm91dFhIb3Vyczoge1xyXG4gICAgb25lOiAnYWJvdXQgMSBob3VyJyxcclxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IGhvdXJzJ1xyXG4gIH0sXHJcbiAgeEhvdXJzOiB7XHJcbiAgICBvbmU6ICcxIGhvdXInLFxyXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gaG91cnMnXHJcbiAgfSxcclxuICB4RGF5czoge1xyXG4gICAgb25lOiAnMSBkYXknLFxyXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gZGF5cydcclxuICB9LFxyXG4gIGFib3V0WFdlZWtzOiB7XHJcbiAgICBvbmU6ICdhYm91dCAxIHdlZWsnLFxyXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gd2Vla3MnXHJcbiAgfSxcclxuICB4V2Vla3M6IHtcclxuICAgIG9uZTogJzEgd2VlaycsXHJcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB3ZWVrcydcclxuICB9LFxyXG4gIGFib3V0WE1vbnRoczoge1xyXG4gICAgb25lOiAnYWJvdXQgMSBtb250aCcsXHJcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSBtb250aHMnXHJcbiAgfSxcclxuICB4TW9udGhzOiB7XHJcbiAgICBvbmU6ICcxIG1vbnRoJyxcclxuICAgIG90aGVyOiAne3tjb3VudH19IG1vbnRocydcclxuICB9LFxyXG4gIGFib3V0WFllYXJzOiB7XHJcbiAgICBvbmU6ICdhYm91dCAxIHllYXInLFxyXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0geWVhcnMnXHJcbiAgfSxcclxuICB4WWVhcnM6IHtcclxuICAgIG9uZTogJzEgeWVhcicsXHJcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB5ZWFycydcclxuICB9LFxyXG4gIG92ZXJYWWVhcnM6IHtcclxuICAgIG9uZTogJ292ZXIgMSB5ZWFyJyxcclxuICAgIG90aGVyOiAnb3ZlciB7e2NvdW50fX0geWVhcnMnXHJcbiAgfSxcclxuICBhbG1vc3RYWWVhcnM6IHtcclxuICAgIG9uZTogJ2FsbW9zdCAxIHllYXInLFxyXG4gICAgb3RoZXI6ICdhbG1vc3Qge3tjb3VudH19IHllYXJzJ1xyXG4gIH1cclxufTtcclxuXHJcbnZhciBmb3JtYXREaXN0YW5jZSA9IGZ1bmN0aW9uICh0b2tlbiwgY291bnQsIG9wdGlvbnMpIHtcclxuICB2YXIgcmVzdWx0O1xyXG4gIHZhciB0b2tlblZhbHVlID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dO1xyXG5cclxuICBpZiAodHlwZW9mIHRva2VuVmFsdWUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlO1xyXG4gIH0gZWxzZSBpZiAoY291bnQgPT09IDEpIHtcclxuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub25lO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm90aGVyLnJlcGxhY2UoJ3t7Y291bnR9fScsIGNvdW50LnRvU3RyaW5nKCkpO1xyXG4gIH1cclxuXHJcbiAgaWYgKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuYWRkU3VmZml4KSB7XHJcbiAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcclxuICAgICAgcmV0dXJuICdpbiAnICsgcmVzdWx0O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHJlc3VsdCArICcgYWdvJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiByZXN1bHQ7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmb3JtYXREaXN0YW5jZTsiLCJpbXBvcnQgYnVpbGRGb3JtYXRMb25nRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanNcIjtcclxudmFyIGRhdGVGb3JtYXRzID0ge1xyXG4gIGZ1bGw6ICdFRUVFLCBNTU1NIGRvLCB5JyxcclxuICBsb25nOiAnTU1NTSBkbywgeScsXHJcbiAgbWVkaXVtOiAnTU1NIGQsIHknLFxyXG4gIHNob3J0OiAnTU0vZGQveXl5eSdcclxufTtcclxudmFyIHRpbWVGb3JtYXRzID0ge1xyXG4gIGZ1bGw6ICdoOm1tOnNzIGEgenp6eicsXHJcbiAgbG9uZzogJ2g6bW06c3MgYSB6JyxcclxuICBtZWRpdW06ICdoOm1tOnNzIGEnLFxyXG4gIHNob3J0OiAnaDptbSBhJ1xyXG59O1xyXG52YXIgZGF0ZVRpbWVGb3JtYXRzID0ge1xyXG4gIGZ1bGw6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxyXG4gIGxvbmc6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxyXG4gIG1lZGl1bTogJ3t7ZGF0ZX19LCB7e3RpbWV9fScsXHJcbiAgc2hvcnQ6ICd7e2RhdGV9fSwge3t0aW1lfX0nXHJcbn07XHJcbnZhciBmb3JtYXRMb25nID0ge1xyXG4gIGRhdGU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcclxuICAgIGZvcm1hdHM6IGRhdGVGb3JtYXRzLFxyXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcclxuICB9KSxcclxuICB0aW1lOiBidWlsZEZvcm1hdExvbmdGbih7XHJcbiAgICBmb3JtYXRzOiB0aW1lRm9ybWF0cyxcclxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXHJcbiAgfSksXHJcbiAgZGF0ZVRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcclxuICAgIGZvcm1hdHM6IGRhdGVUaW1lRm9ybWF0cyxcclxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXHJcbiAgfSlcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0TG9uZzsiLCJ2YXIgZm9ybWF0UmVsYXRpdmVMb2NhbGUgPSB7XHJcbiAgbGFzdFdlZWs6IFwiJ2xhc3QnIGVlZWUgJ2F0JyBwXCIsXHJcbiAgeWVzdGVyZGF5OiBcIid5ZXN0ZXJkYXkgYXQnIHBcIixcclxuICB0b2RheTogXCIndG9kYXkgYXQnIHBcIixcclxuICB0b21vcnJvdzogXCIndG9tb3Jyb3cgYXQnIHBcIixcclxuICBuZXh0V2VlazogXCJlZWVlICdhdCcgcFwiLFxyXG4gIG90aGVyOiAnUCdcclxufTtcclxuXHJcbnZhciBmb3JtYXRSZWxhdGl2ZSA9IGZ1bmN0aW9uICh0b2tlbiwgX2RhdGUsIF9iYXNlRGF0ZSwgX29wdGlvbnMpIHtcclxuICByZXR1cm4gZm9ybWF0UmVsYXRpdmVMb2NhbGVbdG9rZW5dO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0UmVsYXRpdmU7IiwiaW1wb3J0IGJ1aWxkTG9jYWxpemVGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanNcIjtcclxudmFyIGVyYVZhbHVlcyA9IHtcclxuICBuYXJyb3c6IFsnQicsICdBJ10sXHJcbiAgYWJicmV2aWF0ZWQ6IFsnQkMnLCAnQUQnXSxcclxuICB3aWRlOiBbJ0JlZm9yZSBDaHJpc3QnLCAnQW5ubyBEb21pbmknXVxyXG59O1xyXG52YXIgcXVhcnRlclZhbHVlcyA9IHtcclxuICBuYXJyb3c6IFsnMScsICcyJywgJzMnLCAnNCddLFxyXG4gIGFiYnJldmlhdGVkOiBbJ1ExJywgJ1EyJywgJ1EzJywgJ1E0J10sXHJcbiAgd2lkZTogWycxc3QgcXVhcnRlcicsICcybmQgcXVhcnRlcicsICczcmQgcXVhcnRlcicsICc0dGggcXVhcnRlciddXHJcbn07IC8vIE5vdGU6IGluIEVuZ2xpc2gsIHRoZSBuYW1lcyBvZiBkYXlzIG9mIHRoZSB3ZWVrIGFuZCBtb250aHMgYXJlIGNhcGl0YWxpemVkLlxyXG4vLyBJZiB5b3UgYXJlIG1ha2luZyBhIG5ldyBsb2NhbGUgYmFzZWQgb24gdGhpcyBvbmUsIGNoZWNrIGlmIHRoZSBzYW1lIGlzIHRydWUgZm9yIHRoZSBsYW5ndWFnZSB5b3UncmUgd29ya2luZyBvbi5cclxuLy8gR2VuZXJhbGx5LCBmb3JtYXR0ZWQgZGF0ZXMgc2hvdWxkIGxvb2sgbGlrZSB0aGV5IGFyZSBpbiB0aGUgbWlkZGxlIG9mIGEgc2VudGVuY2UsXHJcbi8vIGUuZy4gaW4gU3BhbmlzaCBsYW5ndWFnZSB0aGUgd2Vla2RheXMgYW5kIG1vbnRocyBzaG91bGQgYmUgaW4gdGhlIGxvd2VyY2FzZS5cclxuXHJcbnZhciBtb250aFZhbHVlcyA9IHtcclxuICBuYXJyb3c6IFsnSicsICdGJywgJ00nLCAnQScsICdNJywgJ0onLCAnSicsICdBJywgJ1MnLCAnTycsICdOJywgJ0QnXSxcclxuICBhYmJyZXZpYXRlZDogWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddLFxyXG4gIHdpZGU6IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddXHJcbn07XHJcbnZhciBkYXlWYWx1ZXMgPSB7XHJcbiAgbmFycm93OiBbJ1MnLCAnTScsICdUJywgJ1cnLCAnVCcsICdGJywgJ1MnXSxcclxuICBzaG9ydDogWydTdScsICdNbycsICdUdScsICdXZScsICdUaCcsICdGcicsICdTYSddLFxyXG4gIGFiYnJldmlhdGVkOiBbJ1N1bicsICdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCddLFxyXG4gIHdpZGU6IFsnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXVxyXG59O1xyXG52YXIgZGF5UGVyaW9kVmFsdWVzID0ge1xyXG4gIG5hcnJvdzoge1xyXG4gICAgYW06ICdhJyxcclxuICAgIHBtOiAncCcsXHJcbiAgICBtaWRuaWdodDogJ21pJyxcclxuICAgIG5vb246ICduJyxcclxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcclxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXHJcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXHJcbiAgICBuaWdodDogJ25pZ2h0J1xyXG4gIH0sXHJcbiAgYWJicmV2aWF0ZWQ6IHtcclxuICAgIGFtOiAnQU0nLFxyXG4gICAgcG06ICdQTScsXHJcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcclxuICAgIG5vb246ICdub29uJyxcclxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcclxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXHJcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXHJcbiAgICBuaWdodDogJ25pZ2h0J1xyXG4gIH0sXHJcbiAgd2lkZToge1xyXG4gICAgYW06ICdhLm0uJyxcclxuICAgIHBtOiAncC5tLicsXHJcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcclxuICAgIG5vb246ICdub29uJyxcclxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcclxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXHJcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXHJcbiAgICBuaWdodDogJ25pZ2h0J1xyXG4gIH1cclxufTtcclxudmFyIGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMgPSB7XHJcbiAgbmFycm93OiB7XHJcbiAgICBhbTogJ2EnLFxyXG4gICAgcG06ICdwJyxcclxuICAgIG1pZG5pZ2h0OiAnbWknLFxyXG4gICAgbm9vbjogJ24nLFxyXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcclxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxyXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcclxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXHJcbiAgfSxcclxuICBhYmJyZXZpYXRlZDoge1xyXG4gICAgYW06ICdBTScsXHJcbiAgICBwbTogJ1BNJyxcclxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxyXG4gICAgbm9vbjogJ25vb24nLFxyXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcclxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxyXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcclxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXHJcbiAgfSxcclxuICB3aWRlOiB7XHJcbiAgICBhbTogJ2EubS4nLFxyXG4gICAgcG06ICdwLm0uJyxcclxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxyXG4gICAgbm9vbjogJ25vb24nLFxyXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcclxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxyXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcclxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXHJcbiAgfVxyXG59O1xyXG5cclxudmFyIG9yZGluYWxOdW1iZXIgPSBmdW5jdGlvbiAoZGlydHlOdW1iZXIsIF9vcHRpb25zKSB7XHJcbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7IC8vIElmIG9yZGluYWwgbnVtYmVycyBkZXBlbmQgb24gY29udGV4dCwgZm9yIGV4YW1wbGUsXHJcbiAgLy8gaWYgdGhleSBhcmUgZGlmZmVyZW50IGZvciBkaWZmZXJlbnQgZ3JhbW1hdGljYWwgZ2VuZGVycyxcclxuICAvLyB1c2UgYG9wdGlvbnMudW5pdGAuXHJcbiAgLy9cclxuICAvLyBgdW5pdGAgY2FuIGJlICd5ZWFyJywgJ3F1YXJ0ZXInLCAnbW9udGgnLCAnd2VlaycsICdkYXRlJywgJ2RheU9mWWVhcicsXHJcbiAgLy8gJ2RheScsICdob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnLlxyXG5cclxuICB2YXIgcmVtMTAwID0gbnVtYmVyICUgMTAwO1xyXG5cclxuICBpZiAocmVtMTAwID4gMjAgfHwgcmVtMTAwIDwgMTApIHtcclxuICAgIHN3aXRjaCAocmVtMTAwICUgMTApIHtcclxuICAgICAgY2FzZSAxOlxyXG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnc3QnO1xyXG5cclxuICAgICAgY2FzZSAyOlxyXG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnbmQnO1xyXG5cclxuICAgICAgY2FzZSAzOlxyXG4gICAgICAgIHJldHVybiBudW1iZXIgKyAncmQnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG51bWJlciArICd0aCc7XHJcbn07XHJcblxyXG52YXIgbG9jYWxpemUgPSB7XHJcbiAgb3JkaW5hbE51bWJlcjogb3JkaW5hbE51bWJlcixcclxuICBlcmE6IGJ1aWxkTG9jYWxpemVGbih7XHJcbiAgICB2YWx1ZXM6IGVyYVZhbHVlcyxcclxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXHJcbiAgfSksXHJcbiAgcXVhcnRlcjogYnVpbGRMb2NhbGl6ZUZuKHtcclxuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcclxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxyXG4gICAgYXJndW1lbnRDYWxsYmFjazogZnVuY3Rpb24gKHF1YXJ0ZXIpIHtcclxuICAgICAgcmV0dXJuIHF1YXJ0ZXIgLSAxO1xyXG4gICAgfVxyXG4gIH0pLFxyXG4gIG1vbnRoOiBidWlsZExvY2FsaXplRm4oe1xyXG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcclxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXHJcbiAgfSksXHJcbiAgZGF5OiBidWlsZExvY2FsaXplRm4oe1xyXG4gICAgdmFsdWVzOiBkYXlWYWx1ZXMsXHJcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xyXG4gIH0pLFxyXG4gIGRheVBlcmlvZDogYnVpbGRMb2NhbGl6ZUZuKHtcclxuICAgIHZhbHVlczogZGF5UGVyaW9kVmFsdWVzLFxyXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXHJcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzLFxyXG4gICAgZGVmYXVsdEZvcm1hdHRpbmdXaWR0aDogJ3dpZGUnXHJcbiAgfSlcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgbG9jYWxpemU7IiwiaW1wb3J0IGJ1aWxkTWF0Y2hGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanNcIjtcclxuaW1wb3J0IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qc1wiO1xyXG52YXIgbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9eKFxcZCspKHRofHN0fG5kfHJkKT8vaTtcclxudmFyIHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXFxkKy9pO1xyXG52YXIgbWF0Y2hFcmFQYXR0ZXJucyA9IHtcclxuICBuYXJyb3c6IC9eKGJ8YSkvaSxcclxuICBhYmJyZXZpYXRlZDogL14oYlxcLj9cXHM/Y1xcLj98YlxcLj9cXHM/Y1xcLj9cXHM/ZVxcLj98YVxcLj9cXHM/ZFxcLj98Y1xcLj9cXHM/ZVxcLj8pL2ksXHJcbiAgd2lkZTogL14oYmVmb3JlIGNocmlzdHxiZWZvcmUgY29tbW9uIGVyYXxhbm5vIGRvbWluaXxjb21tb24gZXJhKS9pXHJcbn07XHJcbnZhciBwYXJzZUVyYVBhdHRlcm5zID0ge1xyXG4gIGFueTogWy9eYi9pLCAvXihhfGMpL2ldXHJcbn07XHJcbnZhciBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyA9IHtcclxuICBuYXJyb3c6IC9eWzEyMzRdL2ksXHJcbiAgYWJicmV2aWF0ZWQ6IC9ecVsxMjM0XS9pLFxyXG4gIHdpZGU6IC9eWzEyMzRdKHRofHN0fG5kfHJkKT8gcXVhcnRlci9pXHJcbn07XHJcbnZhciBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyA9IHtcclxuICBhbnk6IFsvMS9pLCAvMi9pLCAvMy9pLCAvNC9pXVxyXG59O1xyXG52YXIgbWF0Y2hNb250aFBhdHRlcm5zID0ge1xyXG4gIG5hcnJvdzogL15bamZtYXNvbmRdL2ksXHJcbiAgYWJicmV2aWF0ZWQ6IC9eKGphbnxmZWJ8bWFyfGFwcnxtYXl8anVufGp1bHxhdWd8c2VwfG9jdHxub3Z8ZGVjKS9pLFxyXG4gIHdpZGU6IC9eKGphbnVhcnl8ZmVicnVhcnl8bWFyY2h8YXByaWx8bWF5fGp1bmV8anVseXxhdWd1c3R8c2VwdGVtYmVyfG9jdG9iZXJ8bm92ZW1iZXJ8ZGVjZW1iZXIpL2lcclxufTtcclxudmFyIHBhcnNlTW9udGhQYXR0ZXJucyA9IHtcclxuICBuYXJyb3c6IFsvXmovaSwgL15mL2ksIC9ebS9pLCAvXmEvaSwgL15tL2ksIC9eai9pLCAvXmovaSwgL15hL2ksIC9ecy9pLCAvXm8vaSwgL15uL2ksIC9eZC9pXSxcclxuICBhbnk6IFsvXmphL2ksIC9eZi9pLCAvXm1hci9pLCAvXmFwL2ksIC9ebWF5L2ksIC9eanVuL2ksIC9eanVsL2ksIC9eYXUvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldXHJcbn07XHJcbnZhciBtYXRjaERheVBhdHRlcm5zID0ge1xyXG4gIG5hcnJvdzogL15bc210d2ZdL2ksXHJcbiAgc2hvcnQ6IC9eKHN1fG1vfHR1fHdlfHRofGZyfHNhKS9pLFxyXG4gIGFiYnJldmlhdGVkOiAvXihzdW58bW9ufHR1ZXx3ZWR8dGh1fGZyaXxzYXQpL2ksXHJcbiAgd2lkZTogL14oc3VuZGF5fG1vbmRheXx0dWVzZGF5fHdlZG5lc2RheXx0aHVyc2RheXxmcmlkYXl8c2F0dXJkYXkpL2lcclxufTtcclxudmFyIHBhcnNlRGF5UGF0dGVybnMgPSB7XHJcbiAgbmFycm93OiBbL15zL2ksIC9ebS9pLCAvXnQvaSwgL153L2ksIC9edC9pLCAvXmYvaSwgL15zL2ldLFxyXG4gIGFueTogWy9ec3UvaSwgL15tL2ksIC9edHUvaSwgL153L2ksIC9edGgvaSwgL15mL2ksIC9ec2EvaV1cclxufTtcclxudmFyIG1hdGNoRGF5UGVyaW9kUGF0dGVybnMgPSB7XHJcbiAgbmFycm93OiAvXihhfHB8bWl8bnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2ksXHJcbiAgYW55OiAvXihbYXBdXFwuP1xccz9tXFwuP3xtaWRuaWdodHxub29ufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaVxyXG59O1xyXG52YXIgcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyA9IHtcclxuICBhbnk6IHtcclxuICAgIGFtOiAvXmEvaSxcclxuICAgIHBtOiAvXnAvaSxcclxuICAgIG1pZG5pZ2h0OiAvXm1pL2ksXHJcbiAgICBub29uOiAvXm5vL2ksXHJcbiAgICBtb3JuaW5nOiAvbW9ybmluZy9pLFxyXG4gICAgYWZ0ZXJub29uOiAvYWZ0ZXJub29uL2ksXHJcbiAgICBldmVuaW5nOiAvZXZlbmluZy9pLFxyXG4gICAgbmlnaHQ6IC9uaWdodC9pXHJcbiAgfVxyXG59O1xyXG52YXIgbWF0Y2ggPSB7XHJcbiAgb3JkaW5hbE51bWJlcjogYnVpbGRNYXRjaFBhdHRlcm5Gbih7XHJcbiAgICBtYXRjaFBhdHRlcm46IG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4sXHJcbiAgICBwYXJzZVBhdHRlcm46IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4sXHJcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCk7XHJcbiAgICB9XHJcbiAgfSksXHJcbiAgZXJhOiBidWlsZE1hdGNoRm4oe1xyXG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hFcmFQYXR0ZXJucyxcclxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXHJcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZUVyYVBhdHRlcm5zLFxyXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXHJcbiAgfSksXHJcbiAgcXVhcnRlcjogYnVpbGRNYXRjaEZuKHtcclxuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoUXVhcnRlclBhdHRlcm5zLFxyXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcclxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlUXVhcnRlclBhdHRlcm5zLFxyXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknLFxyXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gKGluZGV4KSB7XHJcbiAgICAgIHJldHVybiBpbmRleCArIDE7XHJcbiAgICB9XHJcbiAgfSksXHJcbiAgbW9udGg6IGJ1aWxkTWF0Y2hGbih7XHJcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaE1vbnRoUGF0dGVybnMsXHJcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxyXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VNb250aFBhdHRlcm5zLFxyXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXHJcbiAgfSksXHJcbiAgZGF5OiBidWlsZE1hdGNoRm4oe1xyXG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQYXR0ZXJucyxcclxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXHJcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBhdHRlcm5zLFxyXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXHJcbiAgfSksXHJcbiAgZGF5UGVyaW9kOiBidWlsZE1hdGNoRm4oe1xyXG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyxcclxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnYW55JyxcclxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGVyaW9kUGF0dGVybnMsXHJcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcclxuICB9KVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBtYXRjaDsiLCJpbXBvcnQgZm9ybWF0RGlzdGFuY2UgZnJvbSBcIi4vX2xpYi9mb3JtYXREaXN0YW5jZS9pbmRleC5qc1wiO1xyXG5pbXBvcnQgZm9ybWF0TG9uZyBmcm9tIFwiLi9fbGliL2Zvcm1hdExvbmcvaW5kZXguanNcIjtcclxuaW1wb3J0IGZvcm1hdFJlbGF0aXZlIGZyb20gXCIuL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanNcIjtcclxuaW1wb3J0IGxvY2FsaXplIGZyb20gXCIuL19saWIvbG9jYWxpemUvaW5kZXguanNcIjtcclxuaW1wb3J0IG1hdGNoIGZyb20gXCIuL19saWIvbWF0Y2gvaW5kZXguanNcIjtcclxuXHJcbi8qKlxyXG4gKiBAdHlwZSB7TG9jYWxlfVxyXG4gKiBAY2F0ZWdvcnkgTG9jYWxlc1xyXG4gKiBAc3VtbWFyeSBFbmdsaXNoIGxvY2FsZSAoVW5pdGVkIFN0YXRlcykuXHJcbiAqIEBsYW5ndWFnZSBFbmdsaXNoXHJcbiAqIEBpc28tNjM5LTIgZW5nXHJcbiAqIEBhdXRob3IgU2FzaGEgS29zcyBbQGtvc3Nub2NvcnBde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9rb3Nzbm9jb3JwfVxyXG4gKiBAYXV0aG9yIExlc2hhIEtvc3MgW0BsZXNoYWtvc3Nde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9sZXNoYWtvc3N9XHJcbiAqL1xyXG52YXIgbG9jYWxlID0ge1xyXG4gIGNvZGU6ICdlbi1VUycsXHJcbiAgZm9ybWF0RGlzdGFuY2U6IGZvcm1hdERpc3RhbmNlLFxyXG4gIGZvcm1hdExvbmc6IGZvcm1hdExvbmcsXHJcbiAgZm9ybWF0UmVsYXRpdmU6IGZvcm1hdFJlbGF0aXZlLFxyXG4gIGxvY2FsaXplOiBsb2NhbGl6ZSxcclxuICBtYXRjaDogbWF0Y2gsXHJcbiAgb3B0aW9uczoge1xyXG4gICAgd2Vla1N0YXJ0c09uOiAwXHJcbiAgICAvKiBTdW5kYXkgKi9cclxuICAgICxcclxuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogMVxyXG4gIH1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgbG9jYWxlOyIsImltcG9ydCBhZGRNaWxsaXNlY29uZHMgZnJvbSBcIi4uL2FkZE1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xyXG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xyXG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xyXG4vKipcclxuICogQG5hbWUgc3ViTWlsbGlzZWNvbmRzXHJcbiAqIEBjYXRlZ29yeSBNaWxsaXNlY29uZCBIZWxwZXJzXHJcbiAqIEBzdW1tYXJ5IFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxyXG4gKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogU3VidHJhY3QgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGZyb20gdGhlIGdpdmVuIGRhdGUuXHJcbiAqXHJcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIG1pbGxpc2Vjb25kcyB0byBiZSBzdWJ0cmFjdGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXHJcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgbWlsbGlzZWNvbmRzIHN1YnRyYWN0ZWRcclxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiAvLyBTdWJ0cmFjdCA3NTAgbWlsbGlzZWNvbmRzIGZyb20gMTAgSnVseSAyMDE0IDEyOjQ1OjMwLjAwMDpcclxuICogY29uc3QgcmVzdWx0ID0gc3ViTWlsbGlzZWNvbmRzKG5ldyBEYXRlKDIwMTQsIDYsIDEwLCAxMiwgNDUsIDMwLCAwKSwgNzUwKVxyXG4gKiAvLz0+IFRodSBKdWwgMTAgMjAxNCAxMjo0NToyOS4yNTBcclxuICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdWJNaWxsaXNlY29uZHMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xyXG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xyXG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xyXG4gIHJldHVybiBhZGRNaWxsaXNlY29uZHMoZGlydHlEYXRlLCAtYW1vdW50KTtcclxufSIsImltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XHJcbi8qKlxyXG4gKiBAbmFtZSB0b0RhdGVcclxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXHJcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXHJcbiAqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxyXG4gKlxyXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxyXG4gKlxyXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXHJcbiAqXHJcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxyXG4gKlxyXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cclxuICpcclxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxyXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcclxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxyXG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxyXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcclxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXHJcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXHJcbiAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XHJcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XHJcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXHJcblxyXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgdHlwZW9mIGFyZ3VtZW50ID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xyXG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXHJcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcclxuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xyXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcclxuICB9IGVsc2Uge1xyXG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxyXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXHJcblxyXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xyXG4gIH1cclxufSIsImltcG9ydCB7IHF1ZXJ5Q2xpbWF0ZSwgcXVlcnlGb3JlY2FzdCB9IGZyb20gXCIuL3F1ZXJ5XCJcclxuaW1wb3J0IHsgZm9ybWF0LCBhZGQsIG1heCB9IGZyb20gJ2RhdGUtZm5zJ1xyXG5pbXBvcnQgeyB0ZSB9IGZyb20gXCJkYXRlLWZucy9sb2NhbGVcIjtcclxuY29uc3QgaG9tZURpc3BsYXllZENpdGllcyA9IFsndG9reW8nLCAncm9tYScsICdmcmFuY2UnLCAnbmV3IHlvcmsnLCAnYXRoZW5zJywgJ2xvbmRvbiddXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVuZGVySG9tZVBhZ2UoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJlbmRlckxvYWRlcignTG9hZGluZyBIb21lIFBhZ2UuLi4nKVxyXG4gICAgICAgIGxldCBjYXJkc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNhcmRzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NhcmRzLWNvbnRhaW5lci1ob21lJyk7XHJcbiAgICAgICAgY2FyZHNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWFpbi1zdWItY29udGFpbmVyJylcclxuICAgICAgICBmb3IgKGNvbnN0IGNpdHkgb2YgaG9tZURpc3BsYXllZENpdGllcykge1xyXG4gICAgICAgICAgICBsZXQgY2l0eVJldHJpZXZlZERhdGEgPSBhd2FpdCBxdWVyeUNsaW1hdGUoY2l0eSk7XHJcbiAgICAgICAgICAgIGxldCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZC1ob21lJylcclxuICAgICAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKGNpdHkucmVwbGFjZSgvXFxzKy9nLCAnLScpKVxyXG5cclxuICAgICAgICAgICAgbGV0IGNpdHlOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGNpdHlOYW1lLnRleHRDb250ZW50ID0gY2l0eVJldHJpZXZlZERhdGEubmFtZTtcclxuICAgICAgICAgICAgY2l0eU5hbWUuY2xhc3NMaXN0LmFkZCgnY2l0eS1uYW1lLWhvbWUnKVxyXG5cclxuICAgICAgICAgICAgbGV0IGNpdHlUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGNpdHlUZW1wLmNsYXNzTGlzdC5hZGQoJ2NpdHktdGVtcC1ob21lJylcclxuICAgICAgICAgICAgY2l0eVRlbXAudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKGNpdHlSZXRyaWV2ZWREYXRhLm1haW4udGVtcCAtIDI3NSl9wrBDYDtcclxuXHJcbiAgICAgICAgICAgIGxldCBjaXR5V2VhdGhlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgICAgIGNpdHlXZWF0aGVyLmNsYXNzTGlzdC5hZGQoJ2NpdHktd2VhdGhlci1ob21lJylcclxuICAgICAgICAgICAgY2l0eVdlYXRoZXIudGV4dENvbnRlbnQgPSBjaXR5UmV0cmlldmVkRGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgY2l0eVJldHJpZXZlZERhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbi5zbGljZSgxKVxyXG5cclxuICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChjaXR5TmFtZSlcclxuICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChjaXR5V2VhdGhlcilcclxuICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChjaXR5VGVtcClcclxuICAgICAgICAgICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICAgICAgICAgICAgICByZW5kZXJRdWVyaWVkQ2l0eShjaXR5UmV0cmlldmVkRGF0YS5uYW1lKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBjYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkKVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuICAgICAgICBtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21haW4tY29udGFpbmVyLWhvbWUnKTtcclxuXHJcblxyXG5cclxuICAgICAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XHJcbiAgICAgICAgbGV0IGxvZ29Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIGxvZ29Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnbG9nby1kZWZhdWx0JylcclxuICAgICAgICBsZXQgbG9nb0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG4gICAgICAgIGxvZ29JY29uLnNyYyA9ICcuL2hlYWQtaWNvbi5naWYnXHJcbiAgICAgICAgbGV0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXHJcbiAgICAgICAgbG9nby5jbGFzc0xpc3QuYWRkKCdsb2dvLXRleHQtZGVmYXVsdCcpXHJcbiAgICAgICAgbG9nby50ZXh0Q29udGVudCA9ICdXwrdlwrdhwrd0wrdowrdlwrdyJ1xyXG4gICAgICAgIGxvZ28uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgbG9nb0NvbnRhaW5lci5hcHBlbmRDaGlsZChsb2dvSWNvbilcclxuICAgICAgICBsb2dvQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvZ28pXHJcblxyXG4gICAgICAgIGxldCBpbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxyXG4gICAgICAgIGlucHV0Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICByZW5kZXJRdWVyaWVkQ2l0eSgpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBpbnB1dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpbnB1dC1jb250YWluZXItaG9tZScpXHJcbiAgICAgICAgbGV0IGlucHV0Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG4gICAgICAgIGlucHV0Qm94LmNsYXNzTGlzdC5hZGQoJ2lucHV0LWhvbWUnKVxyXG5cclxuICAgICAgICBpbnB1dEJveC5wbGFjZWhvbGRlciA9ICdDaXR5Li4uJ1xyXG4gICAgICAgIGxldCBpbnB1dFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcclxuXHJcblxyXG4gICAgICAgIGxldCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG4gICAgICAgIHNlYXJjaEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzdWJtaXQtaG9tZScpXHJcbiAgICAgICAgc2VhcmNoQnV0dG9uLnNyYyA9ICcuL3N2Zy9tYWduaWZ5LnN2ZydcclxuICAgICAgICBzZWFyY2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW5kZXJRdWVyaWVkQ2l0eSlcclxuXHJcbiAgICAgICAgaW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXRCb3gpXHJcbiAgICAgICAgaW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXRTcGFuKVxyXG4gICAgICAgIGlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHNlYXJjaEJ1dHRvbilcclxuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobG9nb0NvbnRhaW5lcilcclxuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaW5wdXRDb250YWluZXIpXHJcblxyXG4gICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKVxyXG4gICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZHNDb250YWluZXIpXHJcblxyXG4gICAgICAgIGNsZWFyKClcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYWluQ29udGFpbmVyKVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBsZXQgZXJyb3JQcm9taXNlID0gYXdhaXQgZXJyb3JcclxuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSAqL2NvbnNvbGUubG9nKC4uLm9vX29vKGA4Zjg4YzViNV8wYCxlcnJvcikpXHJcbiAgICAgICAgcmVuZGVyRXJyb3IoZXJyb3JQcm9taXNlLm1lc3NhZ2UuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBlcnJvclByb21pc2UubWVzc2FnZS5zbGljZSgxKSlcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZW5kZXJRdWVyaWVkQ2l0eShjaXR5PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykudmFsdWUpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgbGV0IGZvcmVjYXN0ID0gYXdhaXQgcXVlcnlGb3JlY2FzdChjaXR5KVxyXG4gICAgICAgIGxldCB0aW1lem9uZSA9IGZvcmVjYXN0LmNpdHkudGltZXpvbmU7XHJcbiAgICAgICAgbGV0IGFyckZvcmVjYXN0ID0gZm9yZWNhc3QubGlzdDtcclxuICAgICAgICBsZXQgcmV0cmlldmVkRGF0YSA9IGF3YWl0IHF1ZXJ5Q2xpbWF0ZShjaXR5KVxyXG5cclxuICAgICAgICByZW5kZXJMb2FkZXIoJ1JldHJpZXZpbmcgRGF0YS4uLicpXHJcblxyXG4gICAgICAgIGxldCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG4gICAgICAgIG1haW5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWFpbi1jb250YWluZXItaG9tZScpO1xyXG5cclxuICAgICAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XHJcbiAgICAgICAgbGV0IGxvZ29Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIGxvZ29Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnbG9nby1kZWZhdWx0JylcclxuICAgICAgICBsZXQgbG9nb0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG4gICAgICAgIGxvZ29JY29uLnNyYyA9ICcuL2hlYWQtaWNvbi5naWYnXHJcbiAgICAgICAgbGV0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXHJcbiAgICAgICAgbG9nby5jbGFzc0xpc3QuYWRkKCdsb2dvLXRleHQtZGVmYXVsdCcpXHJcbiAgICAgICAgbG9nby50ZXh0Q29udGVudCA9ICdXwrdlwrdhwrd0wrdowrdlwrdyJ1xyXG4gICAgICAgIGxvZ28uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgbG9nb0NvbnRhaW5lci5hcHBlbmRDaGlsZChsb2dvSWNvbilcclxuICAgICAgICBsb2dvQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvZ28pXHJcblxyXG4gICAgICAgIGxldCBpbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxyXG4gICAgICAgIGlucHV0Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICByZW5kZXJRdWVyaWVkQ2l0eSgpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBpbnB1dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpbnB1dC1jb250YWluZXItaG9tZScpXHJcbiAgICAgICAgbGV0IGlucHV0Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG4gICAgICAgIGlucHV0Qm94LmNsYXNzTGlzdC5hZGQoJ2lucHV0LWhvbWUnKVxyXG4gICAgICAgIGlucHV0Qm94LnBsYWNlaG9sZGVyID0gJ0NpdHkuLi4nXHJcbiAgICAgICAgbGV0IGlucHV0U3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxyXG5cclxuXHJcbiAgICAgICAgbGV0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICAgICAgc2VhcmNoQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdC1ob21lJylcclxuICAgICAgICBzZWFyY2hCdXR0b24uc3JjID0gJy4vc3ZnL21hZ25pZnkuc3ZnJ1xyXG4gICAgICAgIHNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbmRlclF1ZXJpZWRDaXR5KVxyXG5cclxuICAgICAgICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dEJveClcclxuICAgICAgICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dFNwYW4pXHJcbiAgICAgICAgaW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VhcmNoQnV0dG9uKVxyXG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChsb2dvQ29udGFpbmVyKVxyXG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChpbnB1dENvbnRhaW5lcilcclxuXHJcbiAgICAgICAgbGV0IHF1ZXJpZWRNYWluQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBxdWVyaWVkTWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtYWluLWNvbnRhaW5lci1xdWVyaWVkJylcclxuXHJcbiAgICAgICAgLy8gdG9wIGhlYWRlclxyXG4gICAgICAgIGxldCBxdWVyaWVkSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBxdWVyaWVkSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3N1Yi1oZWFkZXItcXVlcmllZCcpXHJcblxyXG4gICAgICAgIGxldCBjaXR5TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgY2l0eU5hbWUuY2xhc3NMaXN0LmFkZCgnY2l0eS1uYW1lLXF1ZXJpZWQnKVxyXG4gICAgICAgIGNpdHlOYW1lLnRleHRDb250ZW50ID0gcmV0cmlldmVkRGF0YS5uYW1lXHJcbiAgICAgICAgbGV0IGNpdHlDb3VudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXHJcbiAgICAgICAgY2l0eUNvdW50cnkuY2xhc3NMaXN0LmFkZCgnY2l0eS1jb3VudHJ5LXF1ZXJpZWQnKVxyXG4gICAgICAgIGNpdHlDb3VudHJ5LnRleHRDb250ZW50ID0gcmV0cmlldmVkRGF0YS5zeXMuY291bnRyeVxyXG4gICAgICAgIGNpdHlOYW1lLmFwcGVuZENoaWxkKGNpdHlDb3VudHJ5KVxyXG5cclxuICAgICAgICBsZXQgY2l0eVRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIGNpdHlUZW1wLmNsYXNzTGlzdC5hZGQoJ2NpdHktdGVtcC1xdWVyaWVkJylcclxuICAgICAgICBjaXR5VGVtcC50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQocmV0cmlldmVkRGF0YS5tYWluLnRlbXAgLSAyNzUpfcKwYFxyXG4gICAgICAgIGxldCB3ZWF0aGVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICAgICAgd2VhdGhlckljb24uc3JjID0gYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7cmV0cmlldmVkRGF0YS53ZWF0aGVyWzBdLmljb259QDJ4LnBuZ2BcclxuICAgICAgICBjaXR5VGVtcC5hcHBlbmRDaGlsZCh3ZWF0aGVySWNvbilcclxuXHJcbiAgICAgICAgbGV0IGNpdHlXZWF0aGVyRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIGNpdHlXZWF0aGVyRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnY2l0eS13ZWF0aGVyLXF1ZXJpZWQnKVxyXG4gICAgICAgIGNpdHlXZWF0aGVyRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSByZXRyaWV2ZWREYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb24uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyByZXRyaWV2ZWREYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb24uc2xpY2UoMSlcclxuXHJcbiAgICAgICAgcXVlcmllZEhlYWRlci5hcHBlbmRDaGlsZChjaXR5TmFtZSlcclxuICAgICAgICBxdWVyaWVkSGVhZGVyLmFwcGVuZENoaWxkKGNpdHlUZW1wKVxyXG4gICAgICAgIHF1ZXJpZWRIZWFkZXIuYXBwZW5kQ2hpbGQoY2l0eVdlYXRoZXJEZXNjcmlwdGlvbilcclxuXHJcbiAgICAgICAgLy8gbWlkZGxlIGNvbnRhaW5lclxyXG4gICAgICAgIGxldCBxdWVyaWVkQWRkaXRpb25hbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgcXVlcmllZEFkZGl0aW9uYWxDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWlkZGxlLWNvbnRhaW5lci1xdWVyaWVkJylcclxuXHJcbiAgICAgICAgbGV0IGNpdHlIdW1pZGl0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgY2l0eUh1bWlkaXR5LmNsYXNzTGlzdC5hZGQoJ2NpdHktaHVtaWRpdHktY29udGFpbmVyLXF1ZXJpZWQnKVxyXG4gICAgICAgIGxldCBjaXR5SHVtaWRpdHlJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuICAgICAgICBjaXR5SHVtaWRpdHlJY29uLmNsYXNzTGlzdC5hZGQoJ2NpdHktaHVtaWRpdHktaWNvbi1xdWVyaWVkJylcclxuICAgICAgICBjaXR5SHVtaWRpdHlJY29uLnNyYyA9ICcuL3N2Zy9kcm9wLnBuZydcclxuICAgICAgICBsZXQgY2l0eUh1bWlkaXR5TWFpblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIGNpdHlIdW1pZGl0eU1haW5UZXh0LmNsYXNzTGlzdC5hZGQoJ2NpdHktaHVtaWRpdHktbWFpblRleHQtcXVlcmllZCcpXHJcbiAgICAgICAgY2l0eUh1bWlkaXR5TWFpblRleHQudGV4dENvbnRlbnQgPSAnSHVtaWRpdHknXHJcbiAgICAgICAgbGV0IGNpdHlIdW1pZGl0eVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIGNpdHlIdW1pZGl0eVRleHQuY2xhc3NMaXN0LmFkZCgnY2l0eS1odW1pZGl0eS10ZXh0LXF1ZXJpZWQnKVxyXG4gICAgICAgIGNpdHlIdW1pZGl0eVRleHQudGV4dENvbnRlbnQgPSBgJHtyZXRyaWV2ZWREYXRhLm1haW4uaHVtaWRpdHl9JWBcclxuICAgICAgICBjaXR5SHVtaWRpdHkuYXBwZW5kQ2hpbGQoY2l0eUh1bWlkaXR5SWNvbilcclxuICAgICAgICBjaXR5SHVtaWRpdHkuYXBwZW5kQ2hpbGQoY2l0eUh1bWlkaXR5TWFpblRleHQpXHJcbiAgICAgICAgY2l0eUh1bWlkaXR5LmFwcGVuZENoaWxkKGNpdHlIdW1pZGl0eVRleHQpXHJcblxyXG4gICAgICAgIGxldCBjaXR5Q2xvdWRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBjaXR5Q2xvdWRzLmNsYXNzTGlzdC5hZGQoJ2NpdHktY2xvdWRzLWNvbnRhaW5lci1xdWVyaWVkJylcclxuICAgICAgICBsZXQgY2l0eUNsb3Vkc0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG4gICAgICAgIGNpdHlDbG91ZHNJY29uLmNsYXNzTGlzdC5hZGQoJ2NpdHktY2xvdWRzLWljb24tcXVlcmllZCcpXHJcbiAgICAgICAgY2l0eUNsb3Vkc0ljb24uc3JjID0gJy4vc3ZnL2Nsb3VkLnBuZydcclxuICAgICAgICBsZXQgY2l0eUNsb3Vkc01haW5UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBjaXR5Q2xvdWRzTWFpblRleHQuY2xhc3NMaXN0LmFkZCgnY2l0eS1jbG91ZHMtbWFpblRleHQtcXVlcmllZCcpXHJcbiAgICAgICAgY2l0eUNsb3Vkc01haW5UZXh0LnRleHRDb250ZW50ID0gJ0Nsb3VkcydcclxuICAgICAgICBsZXQgY2l0eUNsb3Vkc1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIGNpdHlDbG91ZHNUZXh0LmNsYXNzTGlzdC5hZGQoJ2NpdHktY2xvdWRzLXRleHQtcXVlcmllZCcpXHJcbiAgICAgICAgY2l0eUNsb3Vkc1RleHQudGV4dENvbnRlbnQgPSBgJHtyZXRyaWV2ZWREYXRhLmNsb3Vkcy5hbGx9JWBcclxuICAgICAgICBjaXR5Q2xvdWRzLmFwcGVuZENoaWxkKGNpdHlDbG91ZHNJY29uKVxyXG4gICAgICAgIGNpdHlDbG91ZHMuYXBwZW5kQ2hpbGQoY2l0eUNsb3Vkc01haW5UZXh0KVxyXG4gICAgICAgIGNpdHlDbG91ZHMuYXBwZW5kQ2hpbGQoY2l0eUNsb3Vkc1RleHQpXHJcblxyXG4gICAgICAgIGxldCBjaXR5VmlzaWJpbGl0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgY2l0eVZpc2liaWxpdHkuY2xhc3NMaXN0LmFkZCgnY2l0eS12aXNpYmlsaXR5LWNvbnRhaW5lci1xdWVyaWVkJylcclxuICAgICAgICBsZXQgY2l0eVZpc2liaWxpdHlJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuICAgICAgICBjaXR5VmlzaWJpbGl0eUljb24uY2xhc3NMaXN0LmFkZCgnY2l0eS12aXNpYmlsaXR5LWljb24tcXVlcmllZCcpXHJcbiAgICAgICAgY2l0eVZpc2liaWxpdHlJY29uLnNyYyA9ICcuL3N2Zy92aXNpYmlsaXR5LnBuZydcclxuICAgICAgICBsZXQgY2l0eVZpc2liaWxpdHlNYWluVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgY2l0eVZpc2liaWxpdHlNYWluVGV4dC5jbGFzc0xpc3QuYWRkKCdjaXR5LXZpc2liaWxpdHktbWFpblRleHQtcXVlcmllZCcpXHJcbiAgICAgICAgY2l0eVZpc2liaWxpdHlNYWluVGV4dC50ZXh0Q29udGVudCA9ICdWaXNpYmlsaXR5J1xyXG4gICAgICAgIGxldCBjaXR5VmlzaWJpbGl0eVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIGNpdHlWaXNpYmlsaXR5VGV4dC5jbGFzc0xpc3QuYWRkKCdjaXR5LXZpc2liaWxpdHktdGV4dC1xdWVyaWVkJylcclxuICAgICAgICBjaXR5VmlzaWJpbGl0eVRleHQudGV4dENvbnRlbnQgPSBgJHsocmV0cmlldmVkRGF0YS52aXNpYmlsaXR5IC8gMTAwMCkudG9GaXhlZCgyKX0ga21gXHJcbiAgICAgICAgY2l0eVZpc2liaWxpdHkuYXBwZW5kQ2hpbGQoY2l0eVZpc2liaWxpdHlJY29uKVxyXG4gICAgICAgIGNpdHlWaXNpYmlsaXR5LmFwcGVuZENoaWxkKGNpdHlWaXNpYmlsaXR5TWFpblRleHQpXHJcbiAgICAgICAgY2l0eVZpc2liaWxpdHkuYXBwZW5kQ2hpbGQoY2l0eVZpc2liaWxpdHlUZXh0KVxyXG5cclxuICAgICAgICBxdWVyaWVkQWRkaXRpb25hbENvbnRhaW5lci5hcHBlbmRDaGlsZChjaXR5SHVtaWRpdHkpXHJcbiAgICAgICAgcXVlcmllZEFkZGl0aW9uYWxDb250YWluZXIuYXBwZW5kQ2hpbGQoY2l0eUNsb3VkcylcclxuICAgICAgICBxdWVyaWVkQWRkaXRpb25hbENvbnRhaW5lci5hcHBlbmRDaGlsZChjaXR5VmlzaWJpbGl0eSlcclxuXHJcbiAgICAgICAgLy8gaG91cmx5IGNvbnRhaW5lclxyXG4gICAgICAgIGxldCBxdWVyaWVkSG91cmx5Rm9yZWNhc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIHF1ZXJpZWRIb3VybHlGb3JlY2FzdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdob3VybHktZm9yZWNhc3QtY29udGFpbmVyLXF1ZXJpZWQnKVxyXG4gICAgICAgIGxldCBxdWVyaWVkSG91cmx5Rm9yZWNhc3RTdWJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIHF1ZXJpZWRIb3VybHlGb3JlY2FzdFN1YkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdob3VybHktc3ViLWNvbnRhaW5lci1xdWVyaWVkJylcclxuXHJcbiAgICAgICAgbGV0IGN1cnJlbnRGb3JlY2FzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgY3VycmVudEZvcmVjYXN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hvdXJseS1mb3JlY2FzdC1pdGVtLXF1ZXJpZWQnKVxyXG4gICAgICAgIGxldCBob3VybHlGb3JlY2FzdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgaG91cmx5Rm9yZWNhc3RIZWFkZXIuY2xhc3NMaXN0LmFkZCgnaG91cmx5LWhlYWRlci1xdWVyaWVkJylcclxuICAgICAgICBob3VybHlGb3JlY2FzdEhlYWRlci50ZXh0Q29udGVudCA9ICdOb3cnXHJcbiAgICAgICAgbGV0IGhvdXJseUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG4gICAgICAgIGhvdXJseUljb24uc3JjID0gYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7cmV0cmlldmVkRGF0YS53ZWF0aGVyWzBdLmljb259QDJ4LnBuZ2BcclxuICAgICAgICBsZXQgaG91cmx5VGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgaG91cmx5VGVtcC5jbGFzc0xpc3QuYWRkKCdob3VybHktdGVtcC1xdWVyaWVkJylcclxuICAgICAgICBob3VybHlUZW1wLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChyZXRyaWV2ZWREYXRhLm1haW4udGVtcCAtIDI3NSl9wrBgXHJcblxyXG4gICAgICAgIGN1cnJlbnRGb3JlY2FzdENvbnRhaW5lci5hcHBlbmRDaGlsZChob3VybHlGb3JlY2FzdEhlYWRlcilcclxuICAgICAgICBjdXJyZW50Rm9yZWNhc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoaG91cmx5SWNvbilcclxuICAgICAgICBjdXJyZW50Rm9yZWNhc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoaG91cmx5VGVtcClcclxuICAgICAgICBxdWVyaWVkSG91cmx5Rm9yZWNhc3RTdWJDb250YWluZXIuYXBwZW5kQ2hpbGQoY3VycmVudEZvcmVjYXN0Q29udGFpbmVyKVxyXG5cclxuXHJcbiAgICAgICAgYXJyRm9yZWNhc3QuZm9yRWFjaCgoY3VycmVudEZvcmVjYXN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50Rm9yZWNhc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgICAgICBjdXJyZW50Rm9yZWNhc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaG91cmx5LWZvcmVjYXN0LWl0ZW0tcXVlcmllZCcpXHJcbiAgICAgICAgICAgIGxldCBob3VybHlGb3JlY2FzdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgICAgIGhvdXJseUZvcmVjYXN0SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hvdXJseS1oZWFkZXItcXVlcmllZCcpXHJcbiAgICAgICAgICAgIGhvdXJseUZvcmVjYXN0SGVhZGVyLnRleHRDb250ZW50ID0gZm9ybWF0KGFkZChuZXcgRGF0ZShjdXJyZW50Rm9yZWNhc3QuZHRfdHh0KSwgeyBzZWNvbmRzOiB0aW1lem9uZSB9KSwgJ3AnKVxyXG4gICAgICAgICAgICBsZXQgaG91cmx5SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICAgICAgICAgIGhvdXJseUljb24uc3JjID0gYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7Y3VycmVudEZvcmVjYXN0LndlYXRoZXJbMF0uaWNvbn1AMngucG5nYFxyXG4gICAgICAgICAgICBsZXQgaG91cmx5VGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgICAgIGhvdXJseVRlbXAuY2xhc3NMaXN0LmFkZCgnaG91cmx5LXRlbXAtcXVlcmllZCcpXHJcbiAgICAgICAgICAgIGhvdXJseVRlbXAudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKGN1cnJlbnRGb3JlY2FzdC5tYWluLnRlbXAgLSAyNzUpfcKwYFxyXG5cclxuICAgICAgICAgICAgY3VycmVudEZvcmVjYXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGhvdXJseUZvcmVjYXN0SGVhZGVyKVxyXG4gICAgICAgICAgICBjdXJyZW50Rm9yZWNhc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoaG91cmx5SWNvbilcclxuICAgICAgICAgICAgY3VycmVudEZvcmVjYXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGhvdXJseVRlbXApXHJcblxyXG4gICAgICAgICAgICBxdWVyaWVkSG91cmx5Rm9yZWNhc3RTdWJDb250YWluZXIuYXBwZW5kQ2hpbGQoY3VycmVudEZvcmVjYXN0Q29udGFpbmVyKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGxldCBob3VybHlIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIGhvdXJseUhlYWRlci5jbGFzc0xpc3QuYWRkKCdob3VybHktaGVhZGVyLW1haW4tcXVlcmllZCcpXHJcbiAgICAgICAgaG91cmx5SGVhZGVyLnRleHRDb250ZW50ID0gJ0hPVVJMWSBGT1JFQ0FTVCdcclxuXHJcbiAgICAgICAgcXVlcmllZEhvdXJseUZvcmVjYXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGhvdXJseUhlYWRlcilcclxuICAgICAgICBxdWVyaWVkSG91cmx5Rm9yZWNhc3RDb250YWluZXIuYXBwZW5kQ2hpbGQocXVlcmllZEhvdXJseUZvcmVjYXN0U3ViQ29udGFpbmVyKVxyXG5cclxuICAgICAgICAvLyBsYXN0IGNvbnRhaW5lclxyXG4gICAgICAgIGxldCBxdWVyaWVkRGFpbHlGb3JlY2FzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgcXVlcmllZERhaWx5Rm9yZWNhc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZGFpbHktZm9yZWNhc3QtY29udGFpbmVyLXF1ZXJpZWQnKVxyXG4gICAgICAgIGxldCBxdWVyaWVkRGFpbHlGb3JlY2FzdFN1YkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgcXVlcmllZERhaWx5Rm9yZWNhc3RTdWJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZGFpbHktc3ViLWNvbnRhaW5lci1xdWVyaWVkJylcclxuICAgICAgICAvL3NvcnRpbmcgYW5kIGZvcm1hdHRpbmcgZGF0YVxyXG4gICAgICAgIGFyckZvcmVjYXN0ID0gYXJyRm9yZWNhc3QubWFwKChjcnIpID0+IHtcclxuICAgICAgICAgICAgbGV0IGZvcm1hdHRlZERhdGUgPSBmb3JtYXQoYWRkKG5ldyBEYXRlKGNyci5kdF90eHQpLCB7IHNlY29uZHM6IHRpbWV6b25lIH0pLCAnRUVFRScpXHJcbiAgICAgICAgICAgIGxldCBtYWluID0gY3JyLm1haW4udGVtcFxyXG4gICAgICAgICAgICBsZXQgaWNvbiA9IGNyci53ZWF0aGVyWzBdLmljb25cclxuICAgICAgICAgICAgcmV0dXJuIHsgZm9ybWF0dGVkRGF0ZSwgbWFpbiwgaWNvbiB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgbGV0IG5ld09iakZvcmVjYXN0ID0ge31cclxuICAgICAgICBhcnJGb3JlY2FzdC5mb3JFYWNoKChjcnIpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFuZXdPYmpGb3JlY2FzdFtjcnIuZm9ybWF0dGVkRGF0ZV0pIHtcclxuICAgICAgICAgICAgICAgIG5ld09iakZvcmVjYXN0W2Nyci5mb3JtYXR0ZWREYXRlXSA9XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4X3RlbXA6IGNyci5tYWluLFxyXG4gICAgICAgICAgICAgICAgICAgIG1pbl90ZW1wOiBjcnIubWFpbixcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiB7IFtjcnIuaWNvbl06IDEgfSxcclxuICAgICAgICAgICAgICAgICAgICBmaW5hbEljb24gOiBjcnIuaWNvblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFuZXdPYmpGb3JlY2FzdFtjcnIuZm9ybWF0dGVkRGF0ZV0uaWNvbltjcnIuaWNvbl0pIHtcclxuICAgICAgICAgICAgICAgIG5ld09iakZvcmVjYXN0W2Nyci5mb3JtYXR0ZWREYXRlXS5pY29uW2Nyci5pY29uXSA9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBuZXdPYmpGb3JlY2FzdFtjcnIuZm9ybWF0dGVkRGF0ZV0uaWNvbltjcnIuaWNvbl0rKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgbWF4TnVtID0gMDtcclxuICAgICAgICAgICAgZm9yKGNvbnN0IGtleXMgaW4gbmV3T2JqRm9yZWNhc3RbY3JyLmZvcm1hdHRlZERhdGVdLmljb24pe1xyXG4gICAgICAgICAgICAgICAgaWYobmV3T2JqRm9yZWNhc3RbY3JyLmZvcm1hdHRlZERhdGVdLmljb25ba2V5c10gPiBtYXhOdW0pe1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld09iakZvcmVjYXN0W2Nyci5mb3JtYXR0ZWREYXRlXS5maW5hbEljb24gPSBrZXlzO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heE51bSA9IG5ld09iakZvcmVjYXN0W2Nyci5mb3JtYXR0ZWREYXRlXS5pY29uW2tleXNdXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbmV3T2JqRm9yZWNhc3RbY3JyLmZvcm1hdHRlZERhdGVdLm1heF90ZW1wID0gTWF0aC5tYXgobmV3T2JqRm9yZWNhc3RbY3JyLmZvcm1hdHRlZERhdGVdLm1heF90ZW1wLCBjcnIubWFpbilcclxuICAgICAgICAgICAgbmV3T2JqRm9yZWNhc3RbY3JyLmZvcm1hdHRlZERhdGVdLm1pbl90ZW1wID0gTWF0aC5taW4obmV3T2JqRm9yZWNhc3RbY3JyLmZvcm1hdHRlZERhdGVdLm1pbl90ZW1wLCBjcnIubWFpbilcclxuXHJcbiAgICAgICAgfSlcclxuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSAqL2NvbnNvbGUubG9nKC4uLm9vX29vKGA4Zjg4YzViNV8xYCxuZXdPYmpGb3JlY2FzdCkpXHJcbiAgICAgICAgZm9yIChjb25zdCBrZXlzIGluIG5ld09iakZvcmVjYXN0KSB7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50Rm9yZWNhc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgICAgICBjdXJyZW50Rm9yZWNhc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZGFpbHktZm9yZWNhc3QtaXRlbS1xdWVyaWVkJylcclxuICAgICAgICAgICAgbGV0IGRhaWx5Rm9yZWNhc3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgICAgICBkYWlseUZvcmVjYXN0SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2RhaWx5LWhlYWRlci1xdWVyaWVkJylcclxuICAgICAgICAgICAgZGFpbHlGb3JlY2FzdEhlYWRlci50ZXh0Q29udGVudCA9IGtleXNcclxuICAgICAgICAgICAgbGV0IGRhaWx5SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICAgICAgICAgIGRhaWx5SWNvbi5zcmMgPSBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtuZXdPYmpGb3JlY2FzdFtrZXlzXS5maW5hbEljb259QDJ4LnBuZ2BcclxuICAgICAgICAgICAgbGV0IHRlbXBzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICAgICAgdGVtcHNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGVtcHMtY29udGFpbmVyLXF1ZXJpZWQnKVxyXG5cclxuICAgICAgICAgICAgbGV0IGRhaWx5TWF4VGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgICAgIGRhaWx5TWF4VGVtcC5jbGFzc0xpc3QuYWRkKCdkYWlseS1tYXgtdGVtcC1xdWVyaWVkJylcclxuICAgICAgICAgICAgZGFpbHlNYXhUZW1wLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChuZXdPYmpGb3JlY2FzdFtrZXlzXS5tYXhfdGVtcCAtIDI3NSl9wrBgXHJcbiAgICAgICAgICAgIGxldCBkYWlseU1pblRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgICAgICBkYWlseU1pblRlbXAuY2xhc3NMaXN0LmFkZCgnZGFpbHktbWluLXRlbXAtcXVlcmllZCcpXHJcbiAgICAgICAgICAgIGRhaWx5TWluVGVtcC50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQobmV3T2JqRm9yZWNhc3Rba2V5c10ubWluX3RlbXAgLSAyNzUpfcKwYFxyXG5cclxuICAgICAgICAgICAgdGVtcHNDb250YWluZXIuYXBwZW5kQ2hpbGQoZGFpbHlNYXhUZW1wKVxyXG4gICAgICAgICAgICB0ZW1wc0NvbnRhaW5lci5hcHBlbmRDaGlsZChkYWlseU1pblRlbXApXHJcbiAgICAgICAgICAgIGN1cnJlbnRGb3JlY2FzdENvbnRhaW5lci5hcHBlbmRDaGlsZChkYWlseUZvcmVjYXN0SGVhZGVyKVxyXG4gICAgICAgICAgICBjdXJyZW50Rm9yZWNhc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZGFpbHlJY29uKVxyXG4gICAgICAgICAgICBjdXJyZW50Rm9yZWNhc3RDb250YWluZXIuYXBwZW5kQ2hpbGQodGVtcHNDb250YWluZXIpXHJcblxyXG4gICAgICAgICAgICBxdWVyaWVkRGFpbHlGb3JlY2FzdFN1YkNvbnRhaW5lci5hcHBlbmRDaGlsZChjdXJyZW50Rm9yZWNhc3RDb250YWluZXIpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgZGFpbHlIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIGRhaWx5SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2RhaWx5LWhlYWRlci1tYWluLXF1ZXJpZWQnKVxyXG4gICAgICAgIGRhaWx5SGVhZGVyLnRleHRDb250ZW50ID0gJ0RBSUxZIEZPUkVDQVNUJ1xyXG5cclxuICAgICAgICBxdWVyaWVkRGFpbHlGb3JlY2FzdENvbnRhaW5lci5hcHBlbmRDaGlsZChkYWlseUhlYWRlcilcclxuICAgICAgICBxdWVyaWVkRGFpbHlGb3JlY2FzdENvbnRhaW5lci5hcHBlbmRDaGlsZChxdWVyaWVkRGFpbHlGb3JlY2FzdFN1YkNvbnRhaW5lcilcclxuXHJcbiAgICAgICAgcXVlcmllZE1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQocXVlcmllZEhlYWRlcilcclxuICAgICAgICBxdWVyaWVkTWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChxdWVyaWVkQWRkaXRpb25hbENvbnRhaW5lcilcclxuICAgICAgICBxdWVyaWVkTWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChxdWVyaWVkSG91cmx5Rm9yZWNhc3RDb250YWluZXIpXHJcbiAgICAgICAgcXVlcmllZE1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQocXVlcmllZERhaWx5Rm9yZWNhc3RDb250YWluZXIpXHJcblxyXG4gICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKVxyXG4gICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQocXVlcmllZE1haW5Db250YWluZXIpXHJcblxyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgY2xlYXIoKVxyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1haW5Db250YWluZXIpXHJcbiAgICAgICAgICAgIGxldCB0b2RheUhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYWlseS1oZWFkZXItcXVlcmllZCcpXHJcbiAgICAgICAgICAgIHRvZGF5SGVhZGVyLnRleHRDb250ZW50ID0gJ1RvZGF5J1xyXG4gICAgICAgIH0sIDUwMClcclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlICovY29uc29sZS5sb2coLi4ub29fb28oYDhmODhjNWI1XzJgLGVycm9yKSlcclxuICAgICAgICByZW5kZXJFcnJvcihlcnJvci5tZXNzYWdlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgZXJyb3IubWVzc2FnZS5zbGljZSgxKSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYXIoKSB7XHJcbiAgICB3aGlsZSAoZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckVycm9yKHRleHQpIHtcclxuICAgIGNsZWFyKClcclxuICAgIGxldCBlcnJvclNjcmVlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBlcnJvclNjcmVlbi5jbGFzc0xpc3QuYWRkKCdlcnJvci1zY3JlZW4nKVxyXG5cclxuICAgIGxldCBlcnJvckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgZXJyb3JJY29uLmNsYXNzTGlzdC5hZGQoJ2Vycm9yLWljb24nKVxyXG5cclxuICAgIGxldCBlcnJvclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXHJcbiAgICBlcnJvclRleHQudGV4dENvbnRlbnQgPSB0ZXh0XHJcblxyXG4gICAgZXJyb3JTY3JlZW4uYXBwZW5kQ2hpbGQoZXJyb3JJY29uKVxyXG4gICAgZXJyb3JTY3JlZW4uYXBwZW5kQ2hpbGQoZXJyb3JUZXh0KVxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlcnJvclNjcmVlbilcclxuXHJcbiAgICBzZXRUaW1lb3V0KHJlbmRlckhvbWVQYWdlLCAzMDAwKVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJMb2FkZXIodGV4dCkge1xyXG4gICAgY2xlYXIoKVxyXG4gICAgbGV0IGxvYWRpbmdTY3JlZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgbG9hZGluZ1NjcmVlbi5jbGFzc0xpc3QuYWRkKCdsb2FkaW5nLXNjcmVlbicpXHJcblxyXG4gICAgbGV0IGxvYWRlclNwaW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgbG9hZGVyU3Bpbm5lci5jbGFzc0xpc3QuYWRkKCdsb2FkZXInKVxyXG4gICAgbG9hZGVyU3Bpbm5lci50ZXh0Q29udGVudCA9ICdMb2FkaW5nLi4uJ1xyXG5cclxuICAgIGxldCBsb2FkaW5nVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcclxuICAgIGxvYWRpbmdUZXh0LnRleHRDb250ZW50ID0gdGV4dFxyXG5cclxuICAgIGxvYWRpbmdTY3JlZW4uYXBwZW5kQ2hpbGQobG9hZGVyU3Bpbm5lcilcclxuICAgIGxvYWRpbmdTY3JlZW4uYXBwZW5kQ2hpbGQobG9hZGluZ1RleHQpXHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxvYWRpbmdTY3JlZW4pXHJcbn1cbi8qIGVzbGludC1kaXNhYmxlICovO2Z1bmN0aW9uIG9vX2NtKCl7dHJ5e3JldHVybiAoMCxldmFsKShcImdsb2JhbFRoaXMuX2NvbnNvbGVfbmluamFcIikgfHwgKDAsZXZhbCkoXCIvKiBodHRwczovL2dpdGh1Yi5jb20vd2FsbGFieWpzL2NvbnNvbGUtbmluamEjaG93LWRvZXMtaXQtd29yayAqLyd1c2Ugc3RyaWN0Jzt2YXIgXzB4NDNjY2JmPV8weDIxNTI7KGZ1bmN0aW9uKF8weDI1Yzk4ZixfMHgxMGVkMWQpe3ZhciBfMHg1MjE0NGU9XzB4MjE1MixfMHg1YWZhYmQ9XzB4MjVjOThmKCk7d2hpbGUoISFbXSl7dHJ5e3ZhciBfMHg0NDU3ZjI9LXBhcnNlSW50KF8weDUyMTQ0ZSgweDE3YSkpLzB4MSooLXBhcnNlSW50KF8weDUyMTQ0ZSgweDEyZSkpLzB4MikrLXBhcnNlSW50KF8weDUyMTQ0ZSgweGQ1KSkvMHgzKihwYXJzZUludChfMHg1MjE0NGUoMHhmNikpLzB4NCkrcGFyc2VJbnQoXzB4NTIxNDRlKDB4MTcwKSkvMHg1KigtcGFyc2VJbnQoXzB4NTIxNDRlKDB4MTNmKSkvMHg2KSstcGFyc2VJbnQoXzB4NTIxNDRlKDB4MTY1KSkvMHg3KigtcGFyc2VJbnQoXzB4NTIxNDRlKDB4MTdjKSkvMHg4KSstcGFyc2VJbnQoXzB4NTIxNDRlKDB4MTYxKSkvMHg5KihwYXJzZUludChfMHg1MjE0NGUoMHgxMWEpKS8weGEpKy1wYXJzZUludChfMHg1MjE0NGUoMHgxOWYpKS8weGIqKC1wYXJzZUludChfMHg1MjE0NGUoMHgxNGYpKS8weGMpK3BhcnNlSW50KF8weDUyMTQ0ZSgweDEwZSkpLzB4ZCoocGFyc2VJbnQoXzB4NTIxNDRlKDB4MTZlKSkvMHhlKTtpZihfMHg0NDU3ZjI9PT1fMHgxMGVkMWQpYnJlYWs7ZWxzZSBfMHg1YWZhYmRbJ3B1c2gnXShfMHg1YWZhYmRbJ3NoaWZ0J10oKSk7fWNhdGNoKF8weDJmOTYyYil7XzB4NWFmYWJkWydwdXNoJ10oXzB4NWFmYWJkWydzaGlmdCddKCkpO319fShfMHg1NzUwLDB4NDcwN2IpKTt2YXIgdWU9T2JqZWN0WydjcmVhdGUnXSx0ZT1PYmplY3RbJ2RlZmluZVByb3BlcnR5J10saGU9T2JqZWN0W18weDQzY2NiZigweDEyZildLGxlPU9iamVjdFsnZ2V0T3duUHJvcGVydHlOYW1lcyddLGZlPU9iamVjdFtfMHg0M2NjYmYoMHhkYyldLF9lPU9iamVjdFtfMHg0M2NjYmYoMHhmNyldW18weDQzY2NiZigweDFhMyldLHBlPShfMHgzMmRkM2UsXzB4MWExMDI0LF8weDQ5ODY5NCxfMHg0NGEzYjMpPT57dmFyIF8weDRmMmZiMz1fMHg0M2NjYmY7aWYoXzB4MWExMDI0JiZ0eXBlb2YgXzB4MWExMDI0PT1fMHg0ZjJmYjMoMHgxOTQpfHx0eXBlb2YgXzB4MWExMDI0PT1fMHg0ZjJmYjMoMHgxOTgpKXtmb3IobGV0IF8weDMzMzcwYSBvZiBsZShfMHgxYTEwMjQpKSFfZVtfMHg0ZjJmYjMoMHgxODgpXShfMHgzMmRkM2UsXzB4MzMzNzBhKSYmXzB4MzMzNzBhIT09XzB4NDk4Njk0JiZ0ZShfMHgzMmRkM2UsXzB4MzMzNzBhLHsnZ2V0JzooKT0+XzB4MWExMDI0W18weDMzMzcwYV0sJ2VudW1lcmFibGUnOiEoXzB4NDRhM2IzPWhlKF8weDFhMTAyNCxfMHgzMzM3MGEpKXx8XzB4NDRhM2IzW18weDRmMmZiMygweDEyNildfSk7fXJldHVybiBfMHgzMmRkM2U7fSxuZT0oXzB4NTA5NGU5LF8weDI3MTEyOCxfMHgzNjVjZWUpPT4oXzB4MzY1Y2VlPV8weDUwOTRlOSE9bnVsbD91ZShmZShfMHg1MDk0ZTkpKTp7fSxwZShfMHgyNzExMjh8fCFfMHg1MDk0ZTl8fCFfMHg1MDk0ZTlbXzB4NDNjY2JmKDB4MTIwKV0/dGUoXzB4MzY1Y2VlLF8weDQzY2NiZigweGNhKSx7J3ZhbHVlJzpfMHg1MDk0ZTksJ2VudW1lcmFibGUnOiEweDB9KTpfMHgzNjVjZWUsXzB4NTA5NGU5KSksUT1jbGFzc3tjb25zdHJ1Y3RvcihfMHg0OWQyZjAsXzB4MzQ2MmJmLF8weDNiZjg3ZSxfMHgzYzViYTMpe3ZhciBfMHhmNzUxMGQ9XzB4NDNjY2JmO3RoaXNbXzB4Zjc1MTBkKDB4ZjQpXT1fMHg0OWQyZjAsdGhpc1tfMHhmNzUxMGQoMHgxOGIpXT1fMHgzNDYyYmYsdGhpc1tfMHhmNzUxMGQoMHgxNDEpXT1fMHgzYmY4N2UsdGhpc1tfMHhmNzUxMGQoMHhlNCldPV8weDNjNWJhMyx0aGlzWydfYWxsb3dlZFRvU2VuZCddPSEweDAsdGhpc1tfMHhmNzUxMGQoMHgxNzcpXT0hMHgwLHRoaXNbXzB4Zjc1MTBkKDB4MTJkKV09ITB4MSx0aGlzWydfY29ubmVjdGluZyddPSEweDEsdGhpc1tfMHhmNzUxMGQoMHhkNCldPSEhdGhpc1snZ2xvYmFsJ11bXzB4Zjc1MTBkKDB4YzQpXSx0aGlzW18weGY3NTEwZCgweDE5OSldPW51bGwsdGhpc1snX2Nvbm5lY3RBdHRlbXB0Q291bnQnXT0weDAsdGhpc1tfMHhmNzUxMGQoMHgxNGMpXT0weDE0LHRoaXNbJ193ZWJTb2NrZXRFcnJvckRvY3NMaW5rJ109XzB4Zjc1MTBkKDB4MTkyKSx0aGlzW18weGY3NTEwZCgweDEzNyldPSh0aGlzW18weGY3NTEwZCgweGQ0KV0/XzB4Zjc1MTBkKDB4MTVlKTpfMHhmNzUxMGQoMHhmYikpK3RoaXNbXzB4Zjc1MTBkKDB4MTgxKV07fWFzeW5jW18weDQzY2NiZigweDExMCldKCl7dmFyIF8weDJiNTIwNT1fMHg0M2NjYmY7aWYodGhpc1tfMHgyYjUyMDUoMHgxOTkpXSlyZXR1cm4gdGhpc1tfMHgyYjUyMDUoMHgxOTkpXTtsZXQgXzB4Mzg5YTY4O2lmKHRoaXNbXzB4MmI1MjA1KDB4ZDQpXSlfMHgzODlhNjg9dGhpc1tfMHgyYjUyMDUoMHhmNCldWydXZWJTb2NrZXQnXTtlbHNle2lmKHRoaXNbXzB4MmI1MjA1KDB4ZjQpXVtfMHgyYjUyMDUoMHgxYWUpXT8uW18weDJiNTIwNSgweGY5KV0pXzB4Mzg5YTY4PXRoaXNbXzB4MmI1MjA1KDB4ZjQpXVtfMHgyYjUyMDUoMHgxYWUpXT8uW18weDJiNTIwNSgweGY5KV07ZWxzZSB0cnl7bGV0IF8weDgwNDQ3Mj1hd2FpdCBpbXBvcnQoXzB4MmI1MjA1KDB4MTBmKSk7XzB4Mzg5YTY4PShhd2FpdCBpbXBvcnQoKGF3YWl0IGltcG9ydChfMHgyYjUyMDUoMHgxNDYpKSlbXzB4MmI1MjA1KDB4MTY4KV0oXzB4ODA0NDcyW18weDJiNTIwNSgweDE3ZildKHRoaXNbJ25vZGVNb2R1bGVzJ10sXzB4MmI1MjA1KDB4MTNjKSkpW18weDJiNTIwNSgweDEyMyldKCkpKVtfMHgyYjUyMDUoMHhjYSldO31jYXRjaHt0cnl7XzB4Mzg5YTY4PXJlcXVpcmUocmVxdWlyZShfMHgyYjUyMDUoMHgxMGYpKVtfMHgyYjUyMDUoMHgxN2YpXSh0aGlzW18weDJiNTIwNSgweGU0KV0sJ3dzJykpO31jYXRjaHt0aHJvdyBuZXcgRXJyb3IoXzB4MmI1MjA1KDB4MTc5KSk7fX19cmV0dXJuIHRoaXNbXzB4MmI1MjA1KDB4MTk5KV09XzB4Mzg5YTY4LF8weDM4OWE2ODt9WydfY29ubmVjdFRvSG9zdE5vdyddKCl7dmFyIF8weDU4ZmIyNj1fMHg0M2NjYmY7dGhpc1tfMHg1OGZiMjYoMHgxNTIpXXx8dGhpc1tfMHg1OGZiMjYoMHgxMmQpXXx8dGhpc1tfMHg1OGZiMjYoMHgxN2QpXT49dGhpc1tfMHg1OGZiMjYoMHgxNGMpXXx8KHRoaXNbXzB4NThmYjI2KDB4MTc3KV09ITB4MSx0aGlzW18weDU4ZmIyNigweDE1MildPSEweDAsdGhpc1tfMHg1OGZiMjYoMHgxN2QpXSsrLHRoaXNbJ193cyddPW5ldyBQcm9taXNlKChfMHgxZmYxMjgsXzB4NTE1MDdmKT0+e3ZhciBfMHgxYmE4OGQ9XzB4NThmYjI2O3RoaXNbXzB4MWJhODhkKDB4MTEwKV0oKVtfMHgxYmE4OGQoMHgxMmEpXShfMHgxZGI4NTM9Pnt2YXIgXzB4NTJiNTExPV8weDFiYTg4ZDtsZXQgXzB4MzEwMjA2PW5ldyBfMHgxZGI4NTMoXzB4NTJiNTExKDB4MTZiKSt0aGlzWydob3N0J10rJzonK3RoaXNbXzB4NTJiNTExKDB4MTQxKV0pO18weDMxMDIwNltfMHg1MmI1MTEoMHgxNzMpXT0oKT0+e3ZhciBfMHg1ODcyOTE9XzB4NTJiNTExO3RoaXNbXzB4NTg3MjkxKDB4MTFkKV09ITB4MSx0aGlzW18weDU4NzI5MSgweGU2KV0oXzB4MzEwMjA2KSx0aGlzW18weDU4NzI5MSgweDEwMyldKCksXzB4NTE1MDdmKG5ldyBFcnJvcignbG9nZ2VyXFxcXHgyMHdlYnNvY2tldFxcXFx4MjBlcnJvcicpKTt9LF8weDMxMDIwNltfMHg1MmI1MTEoMHhlMildPSgpPT57dmFyIF8weDU3OTVmNj1fMHg1MmI1MTE7dGhpc1snX2luQnJvd3NlciddfHxfMHgzMTAyMDZbXzB4NTc5NWY2KDB4MTljKV0mJl8weDMxMDIwNlsnX3NvY2tldCddW18weDU3OTVmNigweGMzKV0mJl8weDMxMDIwNltfMHg1Nzk1ZjYoMHgxOWMpXVtfMHg1Nzk1ZjYoMHhjMyldKCksXzB4MWZmMTI4KF8weDMxMDIwNik7fSxfMHgzMTAyMDZbXzB4NTJiNTExKDB4MTlkKV09KCk9Pnt2YXIgXzB4NTQ5MGU1PV8weDUyYjUxMTt0aGlzW18weDU0OTBlNSgweDE3NyldPSEweDAsdGhpc1tfMHg1NDkwZTUoMHhlNildKF8weDMxMDIwNiksdGhpc1tfMHg1NDkwZTUoMHgxMDMpXSgpO30sXzB4MzEwMjA2W18weDUyYjUxMSgweDEyNCldPV8weDIxZTE5Nj0+e3ZhciBfMHgzOGJlZTM9XzB4NTJiNTExO3RyeXtfMHgyMWUxOTYmJl8weDIxZTE5NltfMHgzOGJlZTMoMHgxNWQpXSYmdGhpc1tfMHgzOGJlZTMoMHhkNCldJiZKU09OW18weDM4YmVlMygweGVhKV0oXzB4MjFlMTk2W18weDM4YmVlMygweDE1ZCldKVtfMHgzOGJlZTMoMHgxMTMpXT09PSdyZWxvYWQnJiZ0aGlzW18weDM4YmVlMygweGY0KV1bXzB4MzhiZWUzKDB4ZWYpXVtfMHgzOGJlZTMoMHgxNDMpXSgpO31jYXRjaHt9fTt9KVtfMHgxYmE4OGQoMHgxMmEpXShfMHgyNzM1NjE9Pih0aGlzW18weDFiYTg4ZCgweDEyZCldPSEweDAsdGhpc1tfMHgxYmE4OGQoMHgxNTIpXT0hMHgxLHRoaXNbXzB4MWJhODhkKDB4MTc3KV09ITB4MSx0aGlzW18weDFiYTg4ZCgweDExZCldPSEweDAsdGhpc1tfMHgxYmE4OGQoMHgxN2QpXT0weDAsXzB4MjczNTYxKSlbJ2NhdGNoJ10oXzB4MTFkNWFkPT4odGhpc1snX2Nvbm5lY3RlZCddPSEweDEsdGhpc1tfMHgxYmE4OGQoMHgxNTIpXT0hMHgxLGNvbnNvbGVbJ3dhcm4nXShfMHgxYmE4OGQoMHgxMWMpK3RoaXNbXzB4MWJhODhkKDB4MTgxKV0pLF8weDUxNTA3ZihuZXcgRXJyb3IoXzB4MWJhODhkKDB4MThmKSsoXzB4MTFkNWFkJiZfMHgxMWQ1YWRbJ21lc3NhZ2UnXSkpKSkpO30pKTt9WydfZGlzcG9zZVdlYnNvY2tldCddKF8weDU5ZmQxZSl7dmFyIF8weDQ2OGZiPV8weDQzY2NiZjt0aGlzW18weDQ2OGZiKDB4MTJkKV09ITB4MSx0aGlzW18weDQ2OGZiKDB4MTUyKV09ITB4MTt0cnl7XzB4NTlmZDFlWydvbmNsb3NlJ109bnVsbCxfMHg1OWZkMWVbXzB4NDY4ZmIoMHgxNzMpXT1udWxsLF8weDU5ZmQxZVtfMHg0NjhmYigweGUyKV09bnVsbDt9Y2F0Y2h7fXRyeXtfMHg1OWZkMWVbXzB4NDY4ZmIoMHgxODYpXTwweDImJl8weDU5ZmQxZVtfMHg0NjhmYigweDE1YyldKCk7fWNhdGNoe319W18weDQzY2NiZigweDEwMyldKCl7dmFyIF8weDJjNmQ0Zj1fMHg0M2NjYmY7Y2xlYXJUaW1lb3V0KHRoaXNbXzB4MmM2ZDRmKDB4MTZmKV0pLCEodGhpc1tfMHgyYzZkNGYoMHgxN2QpXT49dGhpc1tfMHgyYzZkNGYoMHgxNGMpXSkmJih0aGlzWydfcmVjb25uZWN0VGltZW91dCddPXNldFRpbWVvdXQoKCk9Pnt2YXIgXzB4MWZmYmY5PV8weDJjNmQ0Zjt0aGlzWydfY29ubmVjdGVkJ118fHRoaXNbXzB4MWZmYmY5KDB4MTUyKV18fCh0aGlzW18weDFmZmJmOSgweGQzKV0oKSx0aGlzWydfd3MnXT8uWydjYXRjaCddKCgpPT50aGlzW18weDFmZmJmOSgweDEwMyldKCkpKTt9LDB4MWY0KSx0aGlzW18weDJjNmQ0ZigweDE2ZildWyd1bnJlZiddJiZ0aGlzW18weDJjNmQ0ZigweDE2ZildW18weDJjNmQ0ZigweGMzKV0oKSk7fWFzeW5jW18weDQzY2NiZigweGY4KV0oXzB4MjM2ZDJjKXt2YXIgXzB4MWIyNDk3PV8weDQzY2NiZjt0cnl7aWYoIXRoaXNbXzB4MWIyNDk3KDB4MTFkKV0pcmV0dXJuO3RoaXNbXzB4MWIyNDk3KDB4MTc3KV0mJnRoaXNbXzB4MWIyNDk3KDB4ZDMpXSgpLChhd2FpdCB0aGlzW18weDFiMjQ5NygweDExNyldKVtfMHgxYjI0OTcoMHhmOCldKEpTT05bXzB4MWIyNDk3KDB4MTNkKV0oXzB4MjM2ZDJjKSk7fWNhdGNoKF8weDNhZDk1Myl7Y29uc29sZVtfMHgxYjI0OTcoMHgxOTYpXSh0aGlzW18weDFiMjQ5NygweDEzNyldKyc6XFxcXHgyMCcrKF8weDNhZDk1MyYmXzB4M2FkOTUzW18weDFiMjQ5NygweDE5YildKSksdGhpc1tfMHgxYjI0OTcoMHgxMWQpXT0hMHgxLHRoaXNbXzB4MWIyNDk3KDB4MTAzKV0oKTt9fX07ZnVuY3Rpb24gXzB4MjE1MihfMHg0ZGI0MzAsXzB4MTFhNmE4KXt2YXIgXzB4NTc1MDU0PV8weDU3NTAoKTtyZXR1cm4gXzB4MjE1Mj1mdW5jdGlvbihfMHgyMTUyOTcsXzB4YjQ1ZmVmKXtfMHgyMTUyOTc9XzB4MjE1Mjk3LTB4YzM7dmFyIF8weDQ1MjAyND1fMHg1NzUwNTRbXzB4MjE1Mjk3XTtyZXR1cm4gXzB4NDUyMDI0O30sXzB4MjE1MihfMHg0ZGI0MzAsXzB4MTFhNmE4KTt9ZnVuY3Rpb24gVihfMHhjNzYwYjYsXzB4MzgwYTQ2LF8weDUwODcxNixfMHg1ZTZiOWMsXzB4NWU3NmQ1KXt2YXIgXzB4Mzk3N2YxPV8weDQzY2NiZjtsZXQgXzB4MWQ5ZDgzPV8weDUwODcxNlsnc3BsaXQnXSgnLCcpW18weDM5NzdmMSgweGNkKV0oXzB4MzY0NWFiPT57dmFyIF8weGMxMjc0Mz1fMHgzOTc3ZjE7dHJ5e18weGM3NjBiNltfMHhjMTI3NDMoMHhkZCldfHwoKF8weDVlNzZkNT09PSduZXh0LmpzJ3x8XzB4NWU3NmQ1PT09J3JlbWl4J3x8XzB4NWU3NmQ1PT09XzB4YzEyNzQzKDB4ZDkpKSYmKF8weDVlNzZkNSs9XzB4Yzc2MGI2W18weGMxMjc0MygweDFhZSldPy5bJ3ZlcnNpb25zJ10/LltfMHhjMTI3NDMoMHgxNjkpXT9fMHhjMTI3NDMoMHgxMTgpOl8weGMxMjc0MygweGM4KSksXzB4Yzc2MGI2W18weGMxMjc0MygweGRkKV09eydpZCc6K25ldyBEYXRlKCksJ3Rvb2wnOl8weDVlNzZkNX0pO2xldCBfMHgxYzEyYmY9bmV3IFEoXzB4Yzc2MGI2LF8weDM4MGE0NixfMHgzNjQ1YWIsXzB4NWU2YjljKTtyZXR1cm4gXzB4MWMxMmJmW18weGMxMjc0MygweGY4KV1bXzB4YzEyNzQzKDB4MWFmKV0oXzB4MWMxMmJmKTt9Y2F0Y2goXzB4YTFhNGNlKXtyZXR1cm4gY29uc29sZVtfMHhjMTI3NDMoMHgxOTYpXShfMHhjMTI3NDMoMHgxMjUpLF8weGExYTRjZSYmXzB4YTFhNGNlW18weGMxMjc0MygweDE5YildKSwoKT0+e307fX0pO3JldHVybiBfMHg1MzhhYzY9Pl8weDFkOWQ4M1tfMHgzOTc3ZjEoMHgxYTkpXShfMHgyMTg0ODg9Pl8weDIxODQ4OChfMHg1MzhhYzYpKTt9ZnVuY3Rpb24gSChfMHgzMmFlODUpe3ZhciBfMHgxMWEzYjc9XzB4NDNjY2JmO2xldCBfMHgxZjNiNjQ9ZnVuY3Rpb24oXzB4MTQ5ZGExLF8weDFjYWM0Yil7cmV0dXJuIF8weDFjYWM0Yi1fMHgxNDlkYTE7fSxfMHgyMWFhYzg7aWYoXzB4MzJhZTg1W18weDExYTNiNygweGVkKV0pXzB4MjFhYWM4PWZ1bmN0aW9uKCl7dmFyIF8weDZlNDQyMj1fMHgxMWEzYjc7cmV0dXJuIF8weDMyYWU4NVtfMHg2ZTQ0MjIoMHhlZCldWydub3cnXSgpO307ZWxzZXtpZihfMHgzMmFlODVbJ3Byb2Nlc3MnXSYmXzB4MzJhZTg1W18weDExYTNiNygweDFhZSldWydocnRpbWUnXSlfMHgyMWFhYzg9ZnVuY3Rpb24oKXt2YXIgXzB4NGY3MjQwPV8weDExYTNiNztyZXR1cm4gXzB4MzJhZTg1W18weDRmNzI0MCgweDFhZSldW18weDRmNzI0MCgweDFiMildKCk7fSxfMHgxZjNiNjQ9ZnVuY3Rpb24oXzB4NjNjZDQxLF8weDkzZWE4Nil7cmV0dXJuIDB4M2U4KihfMHg5M2VhODZbMHgwXS1fMHg2M2NkNDFbMHgwXSkrKF8weDkzZWE4NlsweDFdLV8weDYzY2Q0MVsweDFdKS8weGY0MjQwO307ZWxzZSB0cnl7bGV0IHtwZXJmb3JtYW5jZTpfMHgyOGQyYWR9PXJlcXVpcmUoXzB4MTFhM2I3KDB4ZDYpKTtfMHgyMWFhYzg9ZnVuY3Rpb24oKXt2YXIgXzB4NGFhNjViPV8weDExYTNiNztyZXR1cm4gXzB4MjhkMmFkW18weDRhYTY1YigweDE1NildKCk7fTt9Y2F0Y2h7XzB4MjFhYWM4PWZ1bmN0aW9uKCl7cmV0dXJuK25ldyBEYXRlKCk7fTt9fXJldHVybnsnZWxhcHNlZCc6XzB4MWYzYjY0LCd0aW1lU3RhbXAnOl8weDIxYWFjOCwnbm93JzooKT0+RGF0ZVtfMHgxMWEzYjcoMHgxNTYpXSgpfTt9ZnVuY3Rpb24gWChfMHg0NzBmZGUsXzB4MTA2NTQwLF8weDRiNzQ2Myl7dmFyIF8weDIzZTJiZD1fMHg0M2NjYmY7aWYoXzB4NDcwZmRlW18weDIzZTJiZCgweDExZSldIT09dm9pZCAweDApcmV0dXJuIF8weDQ3MGZkZVtfMHgyM2UyYmQoMHgxMWUpXTtsZXQgXzB4MTQ3OGZiPV8weDQ3MGZkZVtfMHgyM2UyYmQoMHgxYWUpXT8uW18weDIzZTJiZCgweDEwYyldPy5bJ25vZGUnXTtyZXR1cm4gXzB4MTQ3OGZiJiZfMHg0Yjc0NjM9PT1fMHgyM2UyYmQoMHhkYik/XzB4NDcwZmRlWydfY29uc29sZU5pbmphQWxsb3dlZFRvU3RhcnQnXT0hMHgxOl8weDQ3MGZkZVtfMHgyM2UyYmQoMHgxMWUpXT1fMHgxNDc4ZmJ8fCFfMHgxMDY1NDB8fF8weDQ3MGZkZVtfMHgyM2UyYmQoMHhlZildPy5bXzB4MjNlMmJkKDB4MTJjKV0mJl8weDEwNjU0MFtfMHgyM2UyYmQoMHgxYTApXShfMHg0NzBmZGVbJ2xvY2F0aW9uJ11bJ2hvc3RuYW1lJ10pLF8weDQ3MGZkZVtfMHgyM2UyYmQoMHgxMWUpXTt9KChfMHgxNGE4Y2MsXzB4MzQ5YjZjLF8weDNhOWQ0ZSxfMHg0YmJhZTIsXzB4MTZmMTZjLF8weDVkZWE2MCxfMHgzZTdmYWEsXzB4MzhjYmU0LF8weDU0YTg3MCk9Pnt2YXIgXzB4NTEyYTM3PV8weDQzY2NiZjtpZihfMHgxNGE4Y2NbXzB4NTEyYTM3KDB4MTAxKV0pcmV0dXJuIF8weDE0YThjY1tfMHg1MTJhMzcoMHgxMDEpXTtpZighWChfMHgxNGE4Y2MsXzB4MzhjYmU0LF8weDE2ZjE2YykpcmV0dXJuIF8weDE0YThjY1tfMHg1MTJhMzcoMHgxMDEpXT17J2NvbnNvbGVMb2cnOigpPT57fSwnY29uc29sZVRyYWNlJzooKT0+e30sJ2NvbnNvbGVUaW1lJzooKT0+e30sJ2NvbnNvbGVUaW1lRW5kJzooKT0+e30sJ2F1dG9Mb2cnOigpPT57fSwnYXV0b0xvZ01hbnknOigpPT57fSwnYXV0b1RyYWNlTWFueSc6KCk9Pnt9LCdhdXRvVHJhY2UnOigpPT57fSwnYXV0b1RpbWUnOigpPT57fSwnYXV0b1RpbWVFbmQnOigpPT57fX0sXzB4MTRhOGNjWydfY29uc29sZV9uaW5qYSddO2xldCBfMHgxNmEyMjI9eydwcm9wcyc6MHg2NCwnZWxlbWVudHMnOjB4NjQsJ3N0ckxlbmd0aCc6MHg0MDAqMHgzMiwndG90YWxTdHJMZW5ndGgnOjB4NDAwKjB4MzIsJ2F1dG9FeHBhbmRMaW1pdCc6MHgxMzg4LCdhdXRvRXhwYW5kTWF4RGVwdGgnOjB4YX0sXzB4MWIwNzE3PXsncHJvcHMnOjB4NSwnZWxlbWVudHMnOjB4NSwnc3RyTGVuZ3RoJzoweDEwMCwndG90YWxTdHJMZW5ndGgnOjB4MTAwKjB4MywnYXV0b0V4cGFuZExpbWl0JzoweDFlLCdhdXRvRXhwYW5kTWF4RGVwdGgnOjB4Mn0sXzB4M2ZmMjIyPUgoXzB4MTRhOGNjKSxfMHgzZjVkMmQ9XzB4M2ZmMjIyW18weDUxMmEzNygweDE1MSldLF8weDM5OTY3OD1fMHgzZmYyMjJbXzB4NTEyYTM3KDB4MTA3KV0sXzB4NGI5YTYxPV8weDNmZjIyMltfMHg1MTJhMzcoMHgxNTYpXSxfMHg1ODZlYTQ9eydoaXRzJzp7fSwndHMnOnt9fSxfMHg1N2NmODY9XzB4MmY5ODk5PT57XzB4NTg2ZWE0Wyd0cyddW18weDJmOTg5OV09XzB4Mzk5Njc4KCk7fSxfMHg1MDlhYWM9KF8weGY4MmQzYSxfMHgyNzc0NDYpPT57dmFyIF8weDM0YjJhOD1fMHg1MTJhMzc7bGV0IF8weDMyYThiMz1fMHg1ODZlYTRbJ3RzJ11bXzB4Mjc3NDQ2XTtpZihkZWxldGUgXzB4NTg2ZWE0Wyd0cyddW18weDI3NzQ0Nl0sXzB4MzJhOGIzKXtsZXQgXzB4NGZiNzI5PV8weDNmNWQyZChfMHgzMmE4YjMsXzB4Mzk5Njc4KCkpO18weDE3MmM3NShfMHg0YTI5NWEoXzB4MzRiMmE4KDB4MTRiKSxfMHhmODJkM2EsXzB4NGI5YTYxKCksXzB4MmU5NzEzLFtfMHg0ZmI3MjldLF8weDI3NzQ0NikpO319LF8weDdlNjFlNj1fMHgzMDA0N2E9Pl8weDU4ZGM4ND0+e3ZhciBfMHg1MmRjM2U9XzB4NTEyYTM3O3RyeXtfMHg1N2NmODYoXzB4NThkYzg0KSxfMHgzMDA0N2EoXzB4NThkYzg0KTt9ZmluYWxseXtfMHgxNGE4Y2NbXzB4NTJkYzNlKDB4MThhKV1bXzB4NTJkYzNlKDB4MTRiKV09XzB4MzAwNDdhO319LF8weDIwZjU2MT1fMHg3NGViZGM9Pl8weDEzMDkxNj0+e3ZhciBfMHgyMTM3MzY9XzB4NTEyYTM3O3RyeXtsZXQgW18weDI3ZmFlZixfMHgyYWY2MjVdPV8weDEzMDkxNlsnc3BsaXQnXShfMHgyMTM3MzYoMHgxYTQpKTtfMHg1MDlhYWMoXzB4MmFmNjI1LF8weDI3ZmFlZiksXzB4NzRlYmRjKF8weDI3ZmFlZik7fWZpbmFsbHl7XzB4MTRhOGNjW18weDIxMzczNigweDE4YSldWyd0aW1lRW5kJ109XzB4NzRlYmRjO319O18weDE0YThjY1tfMHg1MTJhMzcoMHgxMDEpXT17J2NvbnNvbGVMb2cnOihfMHhiZWZmMWIsXzB4M2UyNmI1KT0+e3ZhciBfMHhhMjU2ZjE9XzB4NTEyYTM3O18weDE0YThjY1tfMHhhMjU2ZjEoMHgxOGEpXVsnbG9nJ11bXzB4YTI1NmYxKDB4ZTUpXSE9PV8weGEyNTZmMSgweDEzZSkmJl8weDE3MmM3NShfMHg0YTI5NWEoJ2xvZycsXzB4YmVmZjFiLF8weDRiOWE2MSgpLF8weDJlOTcxMyxfMHgzZTI2YjUpKTt9LCdjb25zb2xlVHJhY2UnOihfMHg1ODNiYTcsXzB4MmMyOTUwKT0+e3ZhciBfMHgxYzdkOGI9XzB4NTEyYTM3O18weDE0YThjY1tfMHgxYzdkOGIoMHgxOGEpXVtfMHgxYzdkOGIoMHgxMTIpXVtfMHgxYzdkOGIoMHhlNSldIT09XzB4MWM3ZDhiKDB4MTE0KSYmXzB4MTcyYzc1KF8weDRhMjk1YShfMHgxYzdkOGIoMHgxMTUpLF8weDU4M2JhNyxfMHg0YjlhNjEoKSxfMHgyZTk3MTMsXzB4MmMyOTUwKSk7fSwnY29uc29sZVRpbWUnOigpPT57dmFyIF8weDkzNmIyYj1fMHg1MTJhMzc7XzB4MTRhOGNjW18weDkzNmIyYigweDE4YSldW18weDkzNmIyYigweDE0YildPV8weDdlNjFlNihfMHgxNGE4Y2NbXzB4OTM2YjJiKDB4MThhKV1bXzB4OTM2YjJiKDB4MTRiKV0pO30sJ2NvbnNvbGVUaW1lRW5kJzooKT0+e3ZhciBfMHgyNWM2YzQ9XzB4NTEyYTM3O18weDE0YThjY1snY29uc29sZSddW18weDI1YzZjNCgweDExYildPV8weDIwZjU2MShfMHgxNGE4Y2NbXzB4MjVjNmM0KDB4MThhKV1bXzB4MjVjNmM0KDB4MTFiKV0pO30sJ2F1dG9Mb2cnOihfMHg0OWRlNzMsXzB4NDY0YTQ3KT0+e3ZhciBfMHg0ZmY0OWM9XzB4NTEyYTM3O18weDE3MmM3NShfMHg0YTI5NWEoXzB4NGZmNDljKDB4MTEyKSxfMHg0NjRhNDcsXzB4NGI5YTYxKCksXzB4MmU5NzEzLFtfMHg0OWRlNzNdKSk7fSwnYXV0b0xvZ01hbnknOihfMHg0ZGZkMDQsXzB4MWNkM2RkKT0+e3ZhciBfMHgyMDljMGM9XzB4NTEyYTM3O18weDE3MmM3NShfMHg0YTI5NWEoXzB4MjA5YzBjKDB4MTEyKSxfMHg0ZGZkMDQsXzB4NGI5YTYxKCksXzB4MmU5NzEzLF8weDFjZDNkZCkpO30sJ2F1dG9UcmFjZSc6KF8weDExNTA3NCxfMHg4ZmZkYTEpPT57dmFyIF8weGQ0MzBhOD1fMHg1MTJhMzc7XzB4MTcyYzc1KF8weDRhMjk1YShfMHhkNDMwYTgoMHgxMTUpLF8weDhmZmRhMSxfMHg0YjlhNjEoKSxfMHgyZTk3MTMsW18weDExNTA3NF0pKTt9LCdhdXRvVHJhY2VNYW55JzooXzB4NTg3NjYwLF8weDExYTBiOSk9Pnt2YXIgXzB4NTljYjQxPV8weDUxMmEzNztfMHgxNzJjNzUoXzB4NGEyOTVhKF8weDU5Y2I0MSgweDExNSksXzB4NTg3NjYwLF8weDRiOWE2MSgpLF8weDJlOTcxMyxfMHgxMWEwYjkpKTt9LCdhdXRvVGltZSc6KF8weDVlNmY4OCxfMHgyYjhlYTQsXzB4NjAzZWJmKT0+e18weDU3Y2Y4NihfMHg2MDNlYmYpO30sJ2F1dG9UaW1lRW5kJzooXzB4MzEwZWVlLF8weDJiNTQ1OSxfMHgyODVjNjMpPT57XzB4NTA5YWFjKF8weDJiNTQ1OSxfMHgyODVjNjMpO319O2xldCBfMHgxNzJjNzU9VihfMHgxNGE4Y2MsXzB4MzQ5YjZjLF8weDNhOWQ0ZSxfMHg0YmJhZTIsXzB4MTZmMTZjKSxfMHgyZTk3MTM9XzB4MTRhOGNjWydfY29uc29sZV9uaW5qYV9zZXNzaW9uJ107Y2xhc3MgXzB4NTYxMzBke2NvbnN0cnVjdG9yKCl7dmFyIF8weDQwZjExND1fMHg1MTJhMzc7dGhpc1tfMHg0MGYxMTQoMHhmMildPS9eKD8hKD86ZG98aWZ8aW58Zm9yfGxldHxuZXd8dHJ5fHZhcnxjYXNlfGVsc2V8ZW51bXxldmFsfGZhbHNlfG51bGx8dGhpc3x0cnVlfHZvaWR8d2l0aHxicmVha3xjYXRjaHxjbGFzc3xjb25zdHxzdXBlcnx0aHJvd3x3aGlsZXx5aWVsZHxkZWxldGV8ZXhwb3J0fGltcG9ydHxwdWJsaWN8cmV0dXJufHN0YXRpY3xzd2l0Y2h8dHlwZW9mfGRlZmF1bHR8ZXh0ZW5kc3xmaW5hbGx5fHBhY2thZ2V8cHJpdmF0ZXxjb250aW51ZXxkZWJ1Z2dlcnxmdW5jdGlvbnxhcmd1bWVudHN8aW50ZXJmYWNlfHByb3RlY3RlZHxpbXBsZW1lbnRzfGluc3RhbmNlb2YpJClbXyRhLXpBLVpcXFxceEEwLVxcXFx1RkZGRl1bXyRhLXpBLVowLTlcXFxceEEwLVxcXFx1RkZGRl0qJC8sdGhpc1tfMHg0MGYxMTQoMHgxODMpXT0vXigwfFsxLTldWzAtOV0qKSQvLHRoaXNbXzB4NDBmMTE0KDB4ZTEpXT0vJyhbXlxcXFxcXFxcJ118XFxcXFxcXFwnKSonLyx0aGlzWydfdW5kZWZpbmVkJ109XzB4MTRhOGNjW18weDQwZjExNCgweDEyMSldLHRoaXNbXzB4NDBmMTE0KDB4MTBkKV09XzB4MTRhOGNjW18weDQwZjExNCgweDFhMSldLHRoaXNbJ19nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InXT1PYmplY3RbJ2dldE93blByb3BlcnR5RGVzY3JpcHRvciddLHRoaXNbXzB4NDBmMTE0KDB4ZjApXT1PYmplY3RbXzB4NDBmMTE0KDB4MTYzKV0sdGhpc1tfMHg0MGYxMTQoMHgxNTApXT1fMHgxNGE4Y2NbXzB4NDBmMTE0KDB4MTQ0KV0sdGhpc1snX3JlZ0V4cFRvU3RyaW5nJ109UmVnRXhwW18weDQwZjExNCgweGY3KV1bXzB4NDBmMTE0KDB4MTIzKV0sdGhpc1snX2RhdGVUb1N0cmluZyddPURhdGVbXzB4NDBmMTE0KDB4ZjcpXVtfMHg0MGYxMTQoMHgxMjMpXTt9WydzZXJpYWxpemUnXShfMHg1NWEyYmIsXzB4MWI2NjA0LF8weDI4N2JhOSxfMHgyZDk4NTIpe3ZhciBfMHg0ZDIyZjI9XzB4NTEyYTM3LF8weDE2NjJmYT10aGlzLF8weDViODMxMj1fMHgyODdiYTlbJ2F1dG9FeHBhbmQnXTtmdW5jdGlvbiBfMHhjNWJlMTYoXzB4NTY5MDBlLF8weGMwYjVjMSxfMHg0NDMzZmMpe3ZhciBfMHg0Yjg4ZWQ9XzB4MjE1MjtfMHhjMGI1YzFbJ3R5cGUnXT1fMHg0Yjg4ZWQoMHgxYWEpLF8weGMwYjVjMVtfMHg0Yjg4ZWQoMHgxMGEpXT1fMHg1NjkwMGVbXzB4NGI4OGVkKDB4MTliKV0sXzB4NjA5MzIwPV8weDQ0MzNmY1tfMHg0Yjg4ZWQoMHgxNjkpXVsnY3VycmVudCddLF8weDQ0MzNmY1tfMHg0Yjg4ZWQoMHgxNjkpXVtfMHg0Yjg4ZWQoMHgxNTcpXT1fMHhjMGI1YzEsXzB4MTY2MmZhW18weDRiODhlZCgweGM1KV0oXzB4YzBiNWMxLF8weDQ0MzNmYyk7fWlmKF8weDFiNjYwNCYmXzB4MWI2NjA0W18weDRkMjJmMigweDExNildKV8weGM1YmUxNihfMHgxYjY2MDQsXzB4NTVhMmJiLF8weDI4N2JhOSk7ZWxzZSB0cnl7XzB4Mjg3YmE5W18weDRkMjJmMigweDEzYSldKyssXzB4Mjg3YmE5WydhdXRvRXhwYW5kJ10mJl8weDI4N2JhOVtfMHg0ZDIyZjIoMHgxYWQpXVsncHVzaCddKF8weDFiNjYwNCk7dmFyIF8weDJhYmY3NyxfMHgxNzliYTMsXzB4NDM3YTcxLF8weDFmNDMxOCxfMHgxZjZiMjY9W10sXzB4NTEyMjcxPVtdLF8weDQwNmNmMixfMHgyNTJhZTQ9dGhpc1tfMHg0ZDIyZjIoMHgxM2IpXShfMHgxYjY2MDQpLF8weDNlMDRhNT1fMHgyNTJhZTQ9PT1fMHg0ZDIyZjIoMHgxYWMpLF8weDJhYmIwYT0hMHgxLF8weDQ4MjhhMT1fMHgyNTJhZTQ9PT1fMHg0ZDIyZjIoMHgxOTgpLF8weDM0ZmYyMz10aGlzWydfaXNQcmltaXRpdmVUeXBlJ10oXzB4MjUyYWU0KSxfMHgzODA2MDc9dGhpc1tfMHg0ZDIyZjIoMHgxNTgpXShfMHgyNTJhZTQpLF8weDY3OWQ3Zj1fMHgzNGZmMjN8fF8weDM4MDYwNyxfMHgzN2E1ZDU9e30sXzB4MmU2MGYzPTB4MCxfMHgyMjMwZjg9ITB4MSxfMHg2MDkzMjAsXzB4M2FjYjk5PS9eKChbMS05XXsxfVswLTldKil8MCkkLztpZihfMHgyODdiYTlbXzB4NGQyMmYyKDB4ZDgpXSl7aWYoXzB4M2UwNGE1KXtpZihfMHgxNzliYTM9XzB4MWI2NjA0WydsZW5ndGgnXSxfMHgxNzliYTM+XzB4Mjg3YmE5WydlbGVtZW50cyddKXtmb3IoXzB4NDM3YTcxPTB4MCxfMHgxZjQzMTg9XzB4Mjg3YmE5W18weDRkMjJmMigweDEzMCldLF8weDJhYmY3Nz1fMHg0MzdhNzE7XzB4MmFiZjc3PF8weDFmNDMxODtfMHgyYWJmNzcrKylfMHg1MTIyNzFbXzB4NGQyMmYyKDB4MWE2KV0oXzB4MTY2MmZhW18weDRkMjJmMigweDE3MildKF8weDFmNmIyNixfMHgxYjY2MDQsXzB4MjUyYWU0LF8weDJhYmY3NyxfMHgyODdiYTkpKTtfMHg1NWEyYmJbXzB4NGQyMmYyKDB4ZTkpXT0hMHgwO31lbHNle2ZvcihfMHg0MzdhNzE9MHgwLF8weDFmNDMxOD1fMHgxNzliYTMsXzB4MmFiZjc3PV8weDQzN2E3MTtfMHgyYWJmNzc8XzB4MWY0MzE4O18weDJhYmY3NysrKV8weDUxMjI3MVtfMHg0ZDIyZjIoMHgxYTYpXShfMHgxNjYyZmFbXzB4NGQyMmYyKDB4MTcyKV0oXzB4MWY2YjI2LF8weDFiNjYwNCxfMHgyNTJhZTQsXzB4MmFiZjc3LF8weDI4N2JhOSkpO31fMHgyODdiYTlbJ2F1dG9FeHBhbmRQcm9wZXJ0eUNvdW50J10rPV8weDUxMjI3MVtfMHg0ZDIyZjIoMHgxNTUpXTt9aWYoIShfMHgyNTJhZTQ9PT1fMHg0ZDIyZjIoMHgxN2UpfHxfMHgyNTJhZTQ9PT1fMHg0ZDIyZjIoMHgxMjEpKSYmIV8weDM0ZmYyMyYmXzB4MjUyYWU0IT09J1N0cmluZycmJl8weDI1MmFlNCE9PV8weDRkMjJmMigweDE0ZSkmJl8weDI1MmFlNCE9PV8weDRkMjJmMigweDE1OSkpe3ZhciBfMHg1YjFkY2U9XzB4MmQ5ODUyW18weDRkMjJmMigweDEyOSldfHxfMHgyODdiYTlbXzB4NGQyMmYyKDB4MTI5KV07aWYodGhpc1tfMHg0ZDIyZjIoMHgxODApXShfMHgxYjY2MDQpPyhfMHgyYWJmNzc9MHgwLF8weDFiNjYwNFtfMHg0ZDIyZjIoMHgxYTkpXShmdW5jdGlvbihfMHgxZWM1ZjUpe3ZhciBfMHgzYTExYjg9XzB4NGQyMmYyO2lmKF8weDJlNjBmMysrLF8weDI4N2JhOVtfMHgzYTExYjgoMHgxNTQpXSsrLF8weDJlNjBmMz5fMHg1YjFkY2Upe18weDIyMzBmOD0hMHgwO3JldHVybjt9aWYoIV8weDI4N2JhOVtfMHgzYTExYjgoMHgxNjApXSYmXzB4Mjg3YmE5W18weDNhMTFiOCgweGRlKV0mJl8weDI4N2JhOVtfMHgzYTExYjgoMHgxNTQpXT5fMHgyODdiYTlbJ2F1dG9FeHBhbmRMaW1pdCddKXtfMHgyMjMwZjg9ITB4MDtyZXR1cm47fV8weDUxMjI3MVsncHVzaCddKF8weDE2NjJmYVtfMHgzYTExYjgoMHgxNzIpXShfMHgxZjZiMjYsXzB4MWI2NjA0LF8weDNhMTFiOCgweGQwKSxfMHgyYWJmNzcrKyxfMHgyODdiYTksZnVuY3Rpb24oXzB4MjE1MmE2KXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gXzB4MjE1MmE2O307fShfMHgxZWM1ZjUpKSk7fSkpOnRoaXNbXzB4NGQyMmYyKDB4ZjMpXShfMHgxYjY2MDQpJiZfMHgxYjY2MDRbJ2ZvckVhY2gnXShmdW5jdGlvbihfMHgzNTJhYmIsXzB4MTUwYTAyKXt2YXIgXzB4MWVlOWE3PV8weDRkMjJmMjtpZihfMHgyZTYwZjMrKyxfMHgyODdiYTlbXzB4MWVlOWE3KDB4MTU0KV0rKyxfMHgyZTYwZjM+XzB4NWIxZGNlKXtfMHgyMjMwZjg9ITB4MDtyZXR1cm47fWlmKCFfMHgyODdiYTlbXzB4MWVlOWE3KDB4MTYwKV0mJl8weDI4N2JhOVsnYXV0b0V4cGFuZCddJiZfMHgyODdiYTlbJ2F1dG9FeHBhbmRQcm9wZXJ0eUNvdW50J10+XzB4Mjg3YmE5W18weDFlZTlhNygweDFhNyldKXtfMHgyMjMwZjg9ITB4MDtyZXR1cm47fXZhciBfMHgxZWFhODU9XzB4MTUwYTAyWyd0b1N0cmluZyddKCk7XzB4MWVhYTg1W18weDFlZTlhNygweDE1NSldPjB4NjQmJihfMHgxZWFhODU9XzB4MWVhYTg1W18weDFlZTlhNygweDFhNSldKDB4MCwweDY0KStfMHgxZWU5YTcoMHgxMzEpKSxfMHg1MTIyNzFbXzB4MWVlOWE3KDB4MWE2KV0oXzB4MTY2MmZhW18weDFlZTlhNygweDE3MildKF8weDFmNmIyNixfMHgxYjY2MDQsJ01hcCcsXzB4MWVhYTg1LF8weDI4N2JhOSxmdW5jdGlvbihfMHgzZmNkZDIpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBfMHgzZmNkZDI7fTt9KF8weDM1MmFiYikpKTt9KSwhXzB4MmFiYjBhKXt0cnl7Zm9yKF8weDQwNmNmMiBpbiBfMHgxYjY2MDQpaWYoIShfMHgzZTA0YTUmJl8weDNhY2I5OVsndGVzdCddKF8weDQwNmNmMikpJiYhdGhpc1tfMHg0ZDIyZjIoMHhjYyldKF8weDFiNjYwNCxfMHg0MDZjZjIsXzB4Mjg3YmE5KSl7aWYoXzB4MmU2MGYzKyssXzB4Mjg3YmE5WydhdXRvRXhwYW5kUHJvcGVydHlDb3VudCddKyssXzB4MmU2MGYzPl8weDViMWRjZSl7XzB4MjIzMGY4PSEweDA7YnJlYWs7fWlmKCFfMHgyODdiYTlbXzB4NGQyMmYyKDB4MTYwKV0mJl8weDI4N2JhOVtfMHg0ZDIyZjIoMHhkZSldJiZfMHgyODdiYTlbXzB4NGQyMmYyKDB4MTU0KV0+XzB4Mjg3YmE5W18weDRkMjJmMigweDFhNyldKXtfMHgyMjMwZjg9ITB4MDticmVhazt9XzB4NTEyMjcxW18weDRkMjJmMigweDFhNildKF8weDE2NjJmYVsnX2FkZE9iamVjdFByb3BlcnR5J10oXzB4MWY2YjI2LF8weDM3YTVkNSxfMHgxYjY2MDQsXzB4MjUyYWU0LF8weDQwNmNmMixfMHgyODdiYTkpKTt9fWNhdGNoe31pZihfMHgzN2E1ZDVbXzB4NGQyMmYyKDB4MTQ5KV09ITB4MCxfMHg0ODI4YTEmJihfMHgzN2E1ZDVbXzB4NGQyMmYyKDB4MTI4KV09ITB4MCksIV8weDIyMzBmOCl7dmFyIF8weDE0MmI3ZT1bXVsnY29uY2F0J10odGhpc1snX2dldE93blByb3BlcnR5TmFtZXMnXShfMHgxYjY2MDQpKVsnY29uY2F0J10odGhpc1tfMHg0ZDIyZjIoMHhjNildKF8weDFiNjYwNCkpO2ZvcihfMHgyYWJmNzc9MHgwLF8weDE3OWJhMz1fMHgxNDJiN2VbXzB4NGQyMmYyKDB4MTU1KV07XzB4MmFiZjc3PF8weDE3OWJhMztfMHgyYWJmNzcrKylpZihfMHg0MDZjZjI9XzB4MTQyYjdlW18weDJhYmY3N10sIShfMHgzZTA0YTUmJl8weDNhY2I5OVtfMHg0ZDIyZjIoMHgxOGQpXShfMHg0MDZjZjJbXzB4NGQyMmYyKDB4MTIzKV0oKSkpJiYhdGhpc1snX2JsYWNrbGlzdGVkUHJvcGVydHknXShfMHgxYjY2MDQsXzB4NDA2Y2YyLF8weDI4N2JhOSkmJiFfMHgzN2E1ZDVbXzB4NGQyMmYyKDB4MTA0KStfMHg0MDZjZjJbJ3RvU3RyaW5nJ10oKV0pe2lmKF8weDJlNjBmMysrLF8weDI4N2JhOVtfMHg0ZDIyZjIoMHgxNTQpXSsrLF8weDJlNjBmMz5fMHg1YjFkY2Upe18weDIyMzBmOD0hMHgwO2JyZWFrO31pZighXzB4Mjg3YmE5W18weDRkMjJmMigweDE2MCldJiZfMHgyODdiYTlbXzB4NGQyMmYyKDB4ZGUpXSYmXzB4Mjg3YmE5WydhdXRvRXhwYW5kUHJvcGVydHlDb3VudCddPl8weDI4N2JhOVsnYXV0b0V4cGFuZExpbWl0J10pe18weDIyMzBmOD0hMHgwO2JyZWFrO31fMHg1MTIyNzFbXzB4NGQyMmYyKDB4MWE2KV0oXzB4MTY2MmZhWydfYWRkT2JqZWN0UHJvcGVydHknXShfMHgxZjZiMjYsXzB4MzdhNWQ1LF8weDFiNjYwNCxfMHgyNTJhZTQsXzB4NDA2Y2YyLF8weDI4N2JhOSkpO319fX19aWYoXzB4NTVhMmJiW18weDRkMjJmMigweDE2MildPV8weDI1MmFlNCxfMHg2NzlkN2Y/KF8weDU1YTJiYlsndmFsdWUnXT1fMHgxYjY2MDRbXzB4NGQyMmYyKDB4MTUzKV0oKSx0aGlzWydfY2FwSWZTdHJpbmcnXShfMHgyNTJhZTQsXzB4NTVhMmJiLF8weDI4N2JhOSxfMHgyZDk4NTIpKTpfMHgyNTJhZTQ9PT1fMHg0ZDIyZjIoMHhlMyk/XzB4NTVhMmJiW18weDRkMjJmMigweDFiNCldPXRoaXNbXzB4NGQyMmYyKDB4Y2UpXVtfMHg0ZDIyZjIoMHgxODgpXShfMHgxYjY2MDQpOl8weDI1MmFlND09PV8weDRkMjJmMigweDE1OSk/XzB4NTVhMmJiW18weDRkMjJmMigweDFiNCldPV8weDFiNjYwNFsndG9TdHJpbmcnXSgpOl8weDI1MmFlND09PSdSZWdFeHAnP18weDU1YTJiYltfMHg0ZDIyZjIoMHgxYjQpXT10aGlzW18weDRkMjJmMigweDFhOCldW18weDRkMjJmMigweDE4OCldKF8weDFiNjYwNCk6XzB4MjUyYWU0PT09J3N5bWJvbCcmJnRoaXNbJ19TeW1ib2wnXT9fMHg1NWEyYmJbJ3ZhbHVlJ109dGhpc1tfMHg0ZDIyZjIoMHgxNTApXVtfMHg0ZDIyZjIoMHhmNyldWyd0b1N0cmluZyddW18weDRkMjJmMigweDE4OCldKF8weDFiNjYwNCk6IV8weDI4N2JhOVtfMHg0ZDIyZjIoMHhkOCldJiYhKF8weDI1MmFlND09PV8weDRkMjJmMigweDE3ZSl8fF8weDI1MmFlND09PV8weDRkMjJmMigweDEyMSkpJiYoZGVsZXRlIF8weDU1YTJiYltfMHg0ZDIyZjIoMHgxYjQpXSxfMHg1NWEyYmJbXzB4NGQyMmYyKDB4MTExKV09ITB4MCksXzB4MjIzMGY4JiYoXzB4NTVhMmJiW18weDRkMjJmMigweGZlKV09ITB4MCksXzB4NjA5MzIwPV8weDI4N2JhOVsnbm9kZSddWydjdXJyZW50J10sXzB4Mjg3YmE5W18weDRkMjJmMigweDE2OSldW18weDRkMjJmMigweDE1NyldPV8weDU1YTJiYix0aGlzW18weDRkMjJmMigweGM1KV0oXzB4NTVhMmJiLF8weDI4N2JhOSksXzB4NTEyMjcxW18weDRkMjJmMigweDE1NSldKXtmb3IoXzB4MmFiZjc3PTB4MCxfMHgxNzliYTM9XzB4NTEyMjcxWydsZW5ndGgnXTtfMHgyYWJmNzc8XzB4MTc5YmEzO18weDJhYmY3NysrKV8weDUxMjI3MVtfMHgyYWJmNzddKF8weDJhYmY3Nyk7fV8weDFmNmIyNltfMHg0ZDIyZjIoMHgxNTUpXSYmKF8weDU1YTJiYltfMHg0ZDIyZjIoMHgxMjkpXT1fMHgxZjZiMjYpO31jYXRjaChfMHg4NjI0NWUpe18weGM1YmUxNihfMHg4NjI0NWUsXzB4NTVhMmJiLF8weDI4N2JhOSk7fXJldHVybiB0aGlzW18weDRkMjJmMigweDE0ZCldKF8weDFiNjYwNCxfMHg1NWEyYmIpLHRoaXNbXzB4NGQyMmYyKDB4ZmQpXShfMHg1NWEyYmIsXzB4Mjg3YmE5KSxfMHgyODdiYTlbXzB4NGQyMmYyKDB4MTY5KV1bJ2N1cnJlbnQnXT1fMHg2MDkzMjAsXzB4Mjg3YmE5WydsZXZlbCddLS0sXzB4Mjg3YmE5W18weDRkMjJmMigweGRlKV09XzB4NWI4MzEyLF8weDI4N2JhOVtfMHg0ZDIyZjIoMHhkZSldJiZfMHgyODdiYTlbXzB4NGQyMmYyKDB4MWFkKV1bXzB4NGQyMmYyKDB4MTA2KV0oKSxfMHg1NWEyYmI7fVsnX2dldE93blByb3BlcnR5U3ltYm9scyddKF8weDViM2M5ZCl7dmFyIF8weDMwZWNlND1fMHg1MTJhMzc7cmV0dXJuIE9iamVjdFtfMHgzMGVjZTQoMHhmYSldP09iamVjdFtfMHgzMGVjZTQoMHhmYSldKF8weDViM2M5ZCk6W107fVtfMHg1MTJhMzcoMHgxODApXShfMHgyMGZhOTkpe3ZhciBfMHg0MDE2NWQ9XzB4NTEyYTM3O3JldHVybiEhKF8weDIwZmE5OSYmXzB4MTRhOGNjW18weDQwMTY1ZCgweGQwKV0mJnRoaXNbXzB4NDAxNjVkKDB4ZGEpXShfMHgyMGZhOTkpPT09XzB4NDAxNjVkKDB4ZmMpJiZfMHgyMGZhOTlbXzB4NDAxNjVkKDB4MWE5KV0pO31bXzB4NTEyYTM3KDB4Y2MpXShfMHgyM2RhMzIsXzB4NWY5YmJkLF8weDU2NTNlYil7dmFyIF8weDU1ZWNlND1fMHg1MTJhMzc7cmV0dXJuIF8weDU2NTNlYltfMHg1NWVjZTQoMHgxMzkpXT90eXBlb2YgXzB4MjNkYTMyW18weDVmOWJiZF09PSdmdW5jdGlvbic6ITB4MTt9W18weDUxMmEzNygweDEzYildKF8weDQxYWE3Yyl7dmFyIF8weDNhODBkMD1fMHg1MTJhMzcsXzB4MzM5MWVhPScnO3JldHVybiBfMHgzMzkxZWE9dHlwZW9mIF8weDQxYWE3YyxfMHgzMzkxZWE9PT1fMHgzYTgwZDAoMHgxOTQpP3RoaXNbXzB4M2E4MGQwKDB4ZGEpXShfMHg0MWFhN2MpPT09XzB4M2E4MGQwKDB4MTRhKT9fMHgzMzkxZWE9J2FycmF5Jzp0aGlzW18weDNhODBkMCgweGRhKV0oXzB4NDFhYTdjKT09PV8weDNhODBkMCgweDE5YSk/XzB4MzM5MWVhPV8weDNhODBkMCgweGUzKTp0aGlzWydfb2JqZWN0VG9TdHJpbmcnXShfMHg0MWFhN2MpPT09XzB4M2E4MGQwKDB4MTA4KT9fMHgzMzkxZWE9J2JpZ2ludCc6XzB4NDFhYTdjPT09bnVsbD9fMHgzMzkxZWE9J251bGwnOl8weDQxYWE3Y1tfMHgzYTgwZDAoMHhkZildJiYoXzB4MzM5MWVhPV8weDQxYWE3Y1snY29uc3RydWN0b3InXVtfMHgzYTgwZDAoMHhlNSldfHxfMHgzMzkxZWEpOl8weDMzOTFlYT09PV8weDNhODBkMCgweDEyMSkmJnRoaXNbJ19IVE1MQWxsQ29sbGVjdGlvbiddJiZfMHg0MWFhN2MgaW5zdGFuY2VvZiB0aGlzW18weDNhODBkMCgweDEwZCldJiYoXzB4MzM5MWVhPV8weDNhODBkMCgweDFhMSkpLF8weDMzOTFlYTt9W18weDUxMmEzNygweGRhKV0oXzB4MTUyMjMyKXt2YXIgXzB4NTBkYjE5PV8weDUxMmEzNztyZXR1cm4gT2JqZWN0Wydwcm90b3R5cGUnXVtfMHg1MGRiMTkoMHgxMjMpXVsnY2FsbCddKF8weDE1MjIzMik7fVtfMHg1MTJhMzcoMHhjNyldKF8weDFlMTc3Yyl7dmFyIF8weDFhNzk5Mz1fMHg1MTJhMzc7cmV0dXJuIF8weDFlMTc3Yz09PV8weDFhNzk5MygweDE5MSl8fF8weDFlMTc3Yz09PV8weDFhNzk5MygweGVjKXx8XzB4MWUxNzdjPT09J251bWJlcic7fVtfMHg1MTJhMzcoMHgxNTgpXShfMHg1NzFiNWIpe3ZhciBfMHgyYjMyMjM9XzB4NTEyYTM3O3JldHVybiBfMHg1NzFiNWI9PT1fMHgyYjMyMjMoMHgxMmIpfHxfMHg1NzFiNWI9PT0nU3RyaW5nJ3x8XzB4NTcxYjViPT09J051bWJlcic7fVtfMHg1MTJhMzcoMHgxNzIpXShfMHgxZGE5NjEsXzB4MjIzMDRjLF8weDI5M2YxZixfMHgzZGMzYjcsXzB4MWY4ZjdkLF8weDNmNTIxZSl7dmFyIF8weDQxNDU5MT10aGlzO3JldHVybiBmdW5jdGlvbihfMHgyOTQxMjIpe3ZhciBfMHhlMjA1N2E9XzB4MjE1MixfMHg0Y2FmNGU9XzB4MWY4ZjdkWydub2RlJ11bJ2N1cnJlbnQnXSxfMHgxN2M1Mzg9XzB4MWY4ZjdkW18weGUyMDU3YSgweDE2OSldW18weGUyMDU3YSgweGU4KV0sXzB4MTg5OWM4PV8weDFmOGY3ZFtfMHhlMjA1N2EoMHgxNjkpXVsncGFyZW50J107XzB4MWY4ZjdkW18weGUyMDU3YSgweDE2OSldWydwYXJlbnQnXT1fMHg0Y2FmNGUsXzB4MWY4ZjdkW18weGUyMDU3YSgweDE2OSldW18weGUyMDU3YSgweGU4KV09dHlwZW9mIF8weDNkYzNiNz09XzB4ZTIwNTdhKDB4MWIwKT9fMHgzZGMzYjc6XzB4Mjk0MTIyLF8weDFkYTk2MVsncHVzaCddKF8weDQxNDU5MVtfMHhlMjA1N2EoMHgxMGIpXShfMHgyMjMwNGMsXzB4MjkzZjFmLF8weDNkYzNiNyxfMHgxZjhmN2QsXzB4M2Y1MjFlKSksXzB4MWY4ZjdkW18weGUyMDU3YSgweDE2OSldW18weGUyMDU3YSgweGQ3KV09XzB4MTg5OWM4LF8weDFmOGY3ZFsnbm9kZSddW18weGUyMDU3YSgweGU4KV09XzB4MTdjNTM4O307fVtfMHg1MTJhMzcoMHhlMCldKF8weDQ5YjllNSxfMHgxNTJmZTEsXzB4NWFlYjc4LF8weDM2MTk4NixfMHg0ZWRmMjQsXzB4Mjc4OGJmLF8weDMxOWJmOSl7dmFyIF8weDM0ZDI1ND1fMHg1MTJhMzcsXzB4MWQwMGU4PXRoaXM7cmV0dXJuIF8weDE1MmZlMVtfMHgzNGQyNTQoMHgxMDQpK18weDRlZGYyNFtfMHgzNGQyNTQoMHgxMjMpXSgpXT0hMHgwLGZ1bmN0aW9uKF8weDVkMmNjKXt2YXIgXzB4NDE0OTNmPV8weDM0ZDI1NCxfMHgxMGQ0NGQ9XzB4Mjc4OGJmW18weDQxNDkzZigweDE2OSldW18weDQxNDkzZigweDE1NyldLF8weDEwMWZkOT1fMHgyNzg4YmZbXzB4NDE0OTNmKDB4MTY5KV1bXzB4NDE0OTNmKDB4ZTgpXSxfMHg0MmRlMzE9XzB4Mjc4OGJmWydub2RlJ11bXzB4NDE0OTNmKDB4ZDcpXTtfMHgyNzg4YmZbJ25vZGUnXVtfMHg0MTQ5M2YoMHhkNyldPV8weDEwZDQ0ZCxfMHgyNzg4YmZbXzB4NDE0OTNmKDB4MTY5KV1bXzB4NDE0OTNmKDB4ZTgpXT1fMHg1ZDJjYyxfMHg0OWI5ZTVbXzB4NDE0OTNmKDB4MWE2KV0oXzB4MWQwMGU4W18weDQxNDkzZigweDEwYildKF8weDVhZWI3OCxfMHgzNjE5ODYsXzB4NGVkZjI0LF8weDI3ODhiZixfMHgzMTliZjkpKSxfMHgyNzg4YmZbXzB4NDE0OTNmKDB4MTY5KV1bXzB4NDE0OTNmKDB4ZDcpXT1fMHg0MmRlMzEsXzB4Mjc4OGJmW18weDQxNDkzZigweDE2OSldW18weDQxNDkzZigweGU4KV09XzB4MTAxZmQ5O307fVsnX3Byb3BlcnR5J10oXzB4ZDgyZmM3LF8weDViZmFhMCxfMHg1Y2NlOWIsXzB4MTNjNDhhLF8weDU2NTYyOCl7dmFyIF8weDFmODZkYz1fMHg1MTJhMzcsXzB4Mzc3NDEzPXRoaXM7XzB4NTY1NjI4fHwoXzB4NTY1NjI4PWZ1bmN0aW9uKF8weGQyZGMzNixfMHg0MzczNjgpe3JldHVybiBfMHhkMmRjMzZbXzB4NDM3MzY4XTt9KTt2YXIgXzB4NThlMWM5PV8weDVjY2U5YltfMHgxZjg2ZGMoMHgxMjMpXSgpLF8weDEyNGY4ZT1fMHgxM2M0OGFbXzB4MWY4NmRjKDB4MTZhKV18fHt9LF8weDQ1N2E2NT1fMHgxM2M0OGFbJ2RlcHRoJ10sXzB4ZTFhZDk1PV8weDEzYzQ4YVtfMHgxZjg2ZGMoMHgxNjApXTt0cnl7dmFyIF8weDQ3ODRhYz10aGlzW18weDFmODZkYygweGYzKV0oXzB4ZDgyZmM3KSxfMHgzNWVhOWI9XzB4NThlMWM5O18weDQ3ODRhYyYmXzB4MzVlYTliWzB4MF09PT0nXFxcXHgyNycmJihfMHgzNWVhOWI9XzB4MzVlYTliW18weDFmODZkYygweDE3NSldKDB4MSxfMHgzNWVhOWJbXzB4MWY4NmRjKDB4MTU1KV0tMHgyKSk7dmFyIF8weDFjYWViMD1fMHgxM2M0OGFbXzB4MWY4NmRjKDB4MTZhKV09XzB4MTI0ZjhlW18weDFmODZkYygweDEwNCkrXzB4MzVlYTliXTtfMHgxY2FlYjAmJihfMHgxM2M0OGFbXzB4MWY4NmRjKDB4ZDgpXT1fMHgxM2M0OGFbJ2RlcHRoJ10rMHgxKSxfMHgxM2M0OGFbJ2lzRXhwcmVzc2lvblRvRXZhbHVhdGUnXT0hIV8weDFjYWViMDt2YXIgXzB4MzU5ZmFmPXR5cGVvZiBfMHg1Y2NlOWI9PV8weDFmODZkYygweGVlKSxfMHg1YzdmY2I9eyduYW1lJzpfMHgzNTlmYWZ8fF8weDQ3ODRhYz9fMHg1OGUxYzk6dGhpc1tfMHgxZjg2ZGMoMHhkMildKF8weDU4ZTFjOSl9O2lmKF8weDM1OWZhZiYmKF8weDVjN2ZjYltfMHgxZjg2ZGMoMHhlZSldPSEweDApLCEoXzB4NWJmYWEwPT09J2FycmF5J3x8XzB4NWJmYWEwPT09XzB4MWY4NmRjKDB4MTc2KSkpe3ZhciBfMHgxYzU5NzA9dGhpc1snX2dldE93blByb3BlcnR5RGVzY3JpcHRvciddKF8weGQ4MmZjNyxfMHg1Y2NlOWIpO2lmKF8weDFjNTk3MCYmKF8weDFjNTk3MFsnc2V0J10mJihfMHg1YzdmY2JbXzB4MWY4NmRjKDB4MTQyKV09ITB4MCksXzB4MWM1OTcwWydnZXQnXSYmIV8weDFjYWViMCYmIV8weDEzYzQ4YVsncmVzb2x2ZUdldHRlcnMnXSkpcmV0dXJuIF8weDVjN2ZjYlsnZ2V0dGVyJ109ITB4MCx0aGlzW18weDFmODZkYygweDEzNSldKF8weDVjN2ZjYixfMHgxM2M0OGEpLF8weDVjN2ZjYjt9dmFyIF8weDIzMDZhODt0cnl7XzB4MjMwNmE4PV8weDU2NTYyOChfMHhkODJmYzcsXzB4NWNjZTliKTt9Y2F0Y2goXzB4NGRhYTUzKXtyZXR1cm4gXzB4NWM3ZmNiPXsnbmFtZSc6XzB4NThlMWM5LCd0eXBlJzpfMHgxZjg2ZGMoMHgxYWEpLCdlcnJvcic6XzB4NGRhYTUzW18weDFmODZkYygweDE5YildfSx0aGlzW18weDFmODZkYygweDEzNSldKF8weDVjN2ZjYixfMHgxM2M0OGEpLF8weDVjN2ZjYjt9dmFyIF8weGM2NTM4PXRoaXNbXzB4MWY4NmRjKDB4MTNiKV0oXzB4MjMwNmE4KSxfMHgyNmU3Y2E9dGhpc1tfMHgxZjg2ZGMoMHhjNyldKF8weGM2NTM4KTtpZihfMHg1YzdmY2JbXzB4MWY4NmRjKDB4MTYyKV09XzB4YzY1MzgsXzB4MjZlN2NhKXRoaXNbXzB4MWY4NmRjKDB4MTM1KV0oXzB4NWM3ZmNiLF8weDEzYzQ4YSxfMHgyMzA2YTgsZnVuY3Rpb24oKXt2YXIgXzB4NTA1NWNlPV8weDFmODZkYztfMHg1YzdmY2JbXzB4NTA1NWNlKDB4MWI0KV09XzB4MjMwNmE4W18weDUwNTVjZSgweDE1MyldKCksIV8weDFjYWViMCYmXzB4Mzc3NDEzW18weDUwNTVjZSgweDE3MSldKF8weGM2NTM4LF8weDVjN2ZjYixfMHgxM2M0OGEse30pO30pO2Vsc2V7dmFyIF8weDFkOTkwZD1fMHgxM2M0OGFbJ2F1dG9FeHBhbmQnXSYmXzB4MTNjNDhhWydsZXZlbCddPF8weDEzYzQ4YVtfMHgxZjg2ZGMoMHgxMzQpXSYmXzB4MTNjNDhhW18weDFmODZkYygweDFhZCldW18weDFmODZkYygweDE2YyldKF8weDIzMDZhOCk8MHgwJiZfMHhjNjUzOCE9PV8weDFmODZkYygweDE5OCkmJl8weDEzYzQ4YVtfMHgxZjg2ZGMoMHgxNTQpXTxfMHgxM2M0OGFbXzB4MWY4NmRjKDB4MWE3KV07XzB4MWQ5OTBkfHxfMHgxM2M0OGFbXzB4MWY4NmRjKDB4MTNhKV08XzB4NDU3YTY1fHxfMHgxY2FlYjA/KHRoaXNbJ3NlcmlhbGl6ZSddKF8weDVjN2ZjYixfMHgyMzA2YTgsXzB4MTNjNDhhLF8weDFjYWViMHx8e30pLHRoaXNbXzB4MWY4NmRjKDB4MTRkKV0oXzB4MjMwNmE4LF8weDVjN2ZjYikpOnRoaXNbXzB4MWY4NmRjKDB4MTM1KV0oXzB4NWM3ZmNiLF8weDEzYzQ4YSxfMHgyMzA2YTgsZnVuY3Rpb24oKXt2YXIgXzB4MTQxOTFiPV8weDFmODZkYztfMHhjNjUzOD09PV8weDE0MTkxYigweDE3ZSl8fF8weGM2NTM4PT09XzB4MTQxOTFiKDB4MTIxKXx8KGRlbGV0ZSBfMHg1YzdmY2JbXzB4MTQxOTFiKDB4MWI0KV0sXzB4NWM3ZmNiWydjYXBwZWQnXT0hMHgwKTt9KTt9cmV0dXJuIF8weDVjN2ZjYjt9ZmluYWxseXtfMHgxM2M0OGFbXzB4MWY4NmRjKDB4MTZhKV09XzB4MTI0ZjhlLF8weDEzYzQ4YVtfMHgxZjg2ZGMoMHhkOCldPV8weDQ1N2E2NSxfMHgxM2M0OGFbJ2lzRXhwcmVzc2lvblRvRXZhbHVhdGUnXT1fMHhlMWFkOTU7fX1bXzB4NTEyYTM3KDB4MTcxKV0oXzB4MTgwZjkwLF8weDExZDc0NyxfMHgxNTRkZDgsXzB4MjE4OTNmKXt2YXIgXzB4NTY4MjVlPV8weDUxMmEzNyxfMHgxNzYwNTY9XzB4MjE4OTNmW18weDU2ODI1ZSgweDE5NyldfHxfMHgxNTRkZDhbJ3N0ckxlbmd0aCddO2lmKChfMHgxODBmOTA9PT1fMHg1NjgyNWUoMHhlYyl8fF8weDE4MGY5MD09PV8weDU2ODI1ZSgweGY1KSkmJl8weDExZDc0N1tfMHg1NjgyNWUoMHgxYjQpXSl7bGV0IF8weDFlNzA1Yz1fMHgxMWQ3NDdbXzB4NTY4MjVlKDB4MWI0KV1bXzB4NTY4MjVlKDB4MTU1KV07XzB4MTU0ZGQ4W18weDU2ODI1ZSgweDE1ZildKz1fMHgxZTcwNWMsXzB4MTU0ZGQ4W18weDU2ODI1ZSgweDE1ZildPl8weDE1NGRkOFtfMHg1NjgyNWUoMHgxMzIpXT8oXzB4MTFkNzQ3W18weDU2ODI1ZSgweDExMSldPScnLGRlbGV0ZSBfMHgxMWQ3NDdbXzB4NTY4MjVlKDB4MWI0KV0pOl8weDFlNzA1Yz5fMHgxNzYwNTYmJihfMHgxMWQ3NDdbXzB4NTY4MjVlKDB4MTExKV09XzB4MTFkNzQ3W18weDU2ODI1ZSgweDFiNCldWydzdWJzdHInXSgweDAsXzB4MTc2MDU2KSxkZWxldGUgXzB4MTFkNzQ3W18weDU2ODI1ZSgweDFiNCldKTt9fVtfMHg1MTJhMzcoMHhmMyldKF8weDNhOTg2Yil7dmFyIF8weDJlZjQwYj1fMHg1MTJhMzc7cmV0dXJuISEoXzB4M2E5ODZiJiZfMHgxNGE4Y2NbXzB4MmVmNDBiKDB4MTM4KV0mJnRoaXNbJ19vYmplY3RUb1N0cmluZyddKF8weDNhOTg2Yik9PT1fMHgyZWY0MGIoMHgxMzYpJiZfMHgzYTk4NmJbXzB4MmVmNDBiKDB4MWE5KV0pO31bXzB4NTEyYTM3KDB4ZDIpXShfMHg0OTViY2Ype3ZhciBfMHgyNTJlN2Q9XzB4NTEyYTM3O2lmKF8weDQ5NWJjZltfMHgyNTJlN2QoMHgxODQpXSgvXlxcXFxkKyQvKSlyZXR1cm4gXzB4NDk1YmNmO3ZhciBfMHg0MDg5Mjg7dHJ5e18weDQwODkyOD1KU09OW18weDI1MmU3ZCgweDEzZCldKCcnK18weDQ5NWJjZik7fWNhdGNoe18weDQwODkyOD0nXFxcXHgyMicrdGhpc1tfMHgyNTJlN2QoMHhkYSldKF8weDQ5NWJjZikrJ1xcXFx4MjInO31yZXR1cm4gXzB4NDA4OTI4W18weDI1MmU3ZCgweDE4NCldKC9eXFxcIihbYS16QS1aX11bYS16QS1aXzAtOV0qKVxcXCIkLyk/XzB4NDA4OTI4PV8weDQwODkyOFsnc3Vic3RyJ10oMHgxLF8weDQwODkyOFtfMHgyNTJlN2QoMHgxNTUpXS0weDIpOl8weDQwODkyOD1fMHg0MDg5MjhbXzB4MjUyZTdkKDB4MTIyKV0oLycvZywnXFxcXHg1Y1xcXFx4MjcnKVtfMHgyNTJlN2QoMHgxMjIpXSgvXFxcXFxcXFxcXFwiL2csJ1xcXFx4MjInKVsncmVwbGFjZSddKC8oXlxcXCJ8XFxcIiQpL2csJ1xcXFx4MjcnKSxfMHg0MDg5Mjg7fVtfMHg1MTJhMzcoMHgxMzUpXShfMHgzY2UzMjcsXzB4YTA1ZmMwLF8weDI4NWJkNyxfMHgyOTg1ODUpe3ZhciBfMHgyZTFiNmI9XzB4NTEyYTM3O3RoaXNbXzB4MmUxYjZiKDB4YzUpXShfMHgzY2UzMjcsXzB4YTA1ZmMwKSxfMHgyOTg1ODUmJl8weDI5ODU4NSgpLHRoaXNbJ19hZGRpdGlvbmFsTWV0YWRhdGEnXShfMHgyODViZDcsXzB4M2NlMzI3KSx0aGlzW18weDJlMWI2YigweGZkKV0oXzB4M2NlMzI3LF8weGEwNWZjMCk7fVtfMHg1MTJhMzcoMHhjNSldKF8weDFkZjVjYixfMHgxZTYwMGUpe3ZhciBfMHg1Njk1MjQ9XzB4NTEyYTM3O3RoaXNbXzB4NTY5NTI0KDB4ZTcpXShfMHgxZGY1Y2IsXzB4MWU2MDBlKSx0aGlzW18weDU2OTUyNCgweDE5NSldKF8weDFkZjVjYixfMHgxZTYwMGUpLHRoaXNbXzB4NTY5NTI0KDB4YzkpXShfMHgxZGY1Y2IsXzB4MWU2MDBlKSx0aGlzW18weDU2OTUyNCgweDEwOSldKF8weDFkZjVjYixfMHgxZTYwMGUpO31bXzB4NTEyYTM3KDB4ZTcpXShfMHg0YTMyZDAsXzB4MzY1ZDE5KXt9Wydfc2V0Tm9kZVF1ZXJ5UGF0aCddKF8weDhlMjllZSxfMHgxOTY5ZGIpe31bJ19zZXROb2RlTGFiZWwnXShfMHg5NTdmNTQsXzB4MzA0M2ZlKXt9W18weDUxMmEzNygweDE3NCldKF8weDRmMjQ0ZCl7dmFyIF8weDMzMzA2ZT1fMHg1MTJhMzc7cmV0dXJuIF8weDRmMjQ0ZD09PXRoaXNbXzB4MzMzMDZlKDB4MWEyKV07fVsnX3RyZWVOb2RlUHJvcGVydGllc0FmdGVyRnVsbFZhbHVlJ10oXzB4MmYyZDY1LF8weDVhNzU1NCl7dmFyIF8weDFhOTY0OD1fMHg1MTJhMzc7dGhpc1tfMHgxYTk2NDgoMHhmMSldKF8weDJmMmQ2NSxfMHg1YTc1NTQpLHRoaXNbXzB4MWE5NjQ4KDB4MTFmKV0oXzB4MmYyZDY1KSxfMHg1YTc1NTRbJ3NvcnRQcm9wcyddJiZ0aGlzW18weDFhOTY0OCgweDE4MildKF8weDJmMmQ2NSksdGhpc1snX2FkZEZ1bmN0aW9uc05vZGUnXShfMHgyZjJkNjUsXzB4NWE3NTU0KSx0aGlzW18weDFhOTY0OCgweDE1YSldKF8weDJmMmQ2NSxfMHg1YTc1NTQpLHRoaXNbXzB4MWE5NjQ4KDB4MTQ1KV0oXzB4MmYyZDY1KTt9W18weDUxMmEzNygweDE0ZCldKF8weDIxODU5NixfMHgzOWJiOTkpe3ZhciBfMHhmNzExZGY9XzB4NTEyYTM3O3RyeXtfMHgyMTg1OTYmJnR5cGVvZiBfMHgyMTg1OTZbXzB4ZjcxMWRmKDB4MTU1KV09PV8weGY3MTFkZigweDFiMCkmJihfMHgzOWJiOTlbJ2xlbmd0aCddPV8weDIxODU5NltfMHhmNzExZGYoMHgxNTUpXSk7fWNhdGNoe31pZihfMHgzOWJiOTlbJ3R5cGUnXT09PV8weGY3MTFkZigweDFiMCl8fF8weDM5YmI5OVtfMHhmNzExZGYoMHgxNjIpXT09PSdOdW1iZXInKXtpZihpc05hTihfMHgzOWJiOTlbJ3ZhbHVlJ10pKV8weDM5YmI5OVtfMHhmNzExZGYoMHgxNDgpXT0hMHgwLGRlbGV0ZSBfMHgzOWJiOTlbXzB4ZjcxMWRmKDB4MWI0KV07ZWxzZSBzd2l0Y2goXzB4MzliYjk5W18weGY3MTFkZigweDFiNCldKXtjYXNlIE51bWJlcltfMHhmNzExZGYoMHgxOGMpXTpfMHgzOWJiOTlbXzB4ZjcxMWRmKDB4MTA1KV09ITB4MCxkZWxldGUgXzB4MzliYjk5W18weGY3MTFkZigweDFiNCldO2JyZWFrO2Nhc2UgTnVtYmVyW18weGY3MTFkZigweDEwMildOl8weDM5YmI5OVsnbmVnYXRpdmVJbmZpbml0eSddPSEweDAsZGVsZXRlIF8weDM5YmI5OVtfMHhmNzExZGYoMHgxYjQpXTticmVhaztjYXNlIDB4MDp0aGlzW18weGY3MTFkZigweDE5MCldKF8weDM5YmI5OVsndmFsdWUnXSkmJihfMHgzOWJiOTlbJ25lZ2F0aXZlWmVybyddPSEweDApO2JyZWFrO319ZWxzZSBfMHgzOWJiOTlbXzB4ZjcxMWRmKDB4MTYyKV09PT1fMHhmNzExZGYoMHgxOTgpJiZ0eXBlb2YgXzB4MjE4NTk2W18weGY3MTFkZigweGU1KV09PSdzdHJpbmcnJiZfMHgyMTg1OTZbXzB4ZjcxMWRmKDB4ZTUpXSYmXzB4MzliYjk5W18weGY3MTFkZigweGU1KV0mJl8weDIxODU5NltfMHhmNzExZGYoMHhlNSldIT09XzB4MzliYjk5WyduYW1lJ10mJihfMHgzOWJiOTlbXzB4ZjcxMWRmKDB4MTViKV09XzB4MjE4NTk2WyduYW1lJ10pO31bJ19pc05lZ2F0aXZlWmVybyddKF8weDE4NzhjMyl7cmV0dXJuIDB4MS9fMHgxODc4YzM9PT1OdW1iZXJbJ05FR0FUSVZFX0lORklOSVRZJ107fVtfMHg1MTJhMzcoMHgxODIpXShfMHg0ZjZiZGMpe3ZhciBfMHg1NGI0MzY9XzB4NTEyYTM3OyFfMHg0ZjZiZGNbXzB4NTRiNDM2KDB4MTI5KV18fCFfMHg0ZjZiZGNbXzB4NTRiNDM2KDB4MTI5KV1bXzB4NTRiNDM2KDB4MTU1KV18fF8weDRmNmJkY1sndHlwZSddPT09XzB4NTRiNDM2KDB4MWFjKXx8XzB4NGY2YmRjWyd0eXBlJ109PT0nTWFwJ3x8XzB4NGY2YmRjW18weDU0YjQzNigweDE2MildPT09J1NldCd8fF8weDRmNmJkY1tfMHg1NGI0MzYoMHgxMjkpXVtfMHg1NGI0MzYoMHgxNzgpXShmdW5jdGlvbihfMHg0NDEwZWYsXzB4MjBlNWFmKXt2YXIgXzB4MTU3Njg5PV8weDU0YjQzNixfMHgyZjQ2ODI9XzB4NDQxMGVmW18weDE1NzY4OSgweGU1KV1bXzB4MTU3Njg5KDB4MWIzKV0oKSxfMHgyNDlhMmY9XzB4MjBlNWFmWyduYW1lJ11bXzB4MTU3Njg5KDB4MWIzKV0oKTtyZXR1cm4gXzB4MmY0NjgyPF8weDI0OWEyZj8tMHgxOl8weDJmNDY4Mj5fMHgyNDlhMmY/MHgxOjB4MDt9KTt9WydfYWRkRnVuY3Rpb25zTm9kZSddKF8weDNlNGYwYyxfMHgxNjYyMGQpe3ZhciBfMHgzYzQ5MWQ9XzB4NTEyYTM3O2lmKCEoXzB4MTY2MjBkWydub0Z1bmN0aW9ucyddfHwhXzB4M2U0ZjBjW18weDNjNDkxZCgweDEyOSldfHwhXzB4M2U0ZjBjW18weDNjNDkxZCgweDEyOSldW18weDNjNDkxZCgweDE1NSldKSl7Zm9yKHZhciBfMHgzMjQyNGQ9W10sXzB4MTFjYmJlPVtdLF8weDRmZTdiND0weDAsXzB4M2Q4ZDBjPV8weDNlNGYwY1tfMHgzYzQ5MWQoMHgxMjkpXVtfMHgzYzQ5MWQoMHgxNTUpXTtfMHg0ZmU3YjQ8XzB4M2Q4ZDBjO18weDRmZTdiNCsrKXt2YXIgXzB4NDZjMzUxPV8weDNlNGYwY1tfMHgzYzQ5MWQoMHgxMjkpXVtfMHg0ZmU3YjRdO18weDQ2YzM1MVtfMHgzYzQ5MWQoMHgxNjIpXT09PV8weDNjNDkxZCgweDE5OCk/XzB4MzI0MjRkWydwdXNoJ10oXzB4NDZjMzUxKTpfMHgxMWNiYmVbXzB4M2M0OTFkKDB4MWE2KV0oXzB4NDZjMzUxKTt9aWYoISghXzB4MTFjYmJlW18weDNjNDkxZCgweDE1NSldfHxfMHgzMjQyNGRbXzB4M2M0OTFkKDB4MTU1KV08PTB4MSkpe18weDNlNGYwY1tfMHgzYzQ5MWQoMHgxMjkpXT1fMHgxMWNiYmU7dmFyIF8weDQ2ZDcwOT17J2Z1bmN0aW9uc05vZGUnOiEweDAsJ3Byb3BzJzpfMHgzMjQyNGR9O3RoaXNbJ19zZXROb2RlSWQnXShfMHg0NmQ3MDksXzB4MTY2MjBkKSx0aGlzW18weDNjNDkxZCgweGYxKV0oXzB4NDZkNzA5LF8weDE2NjIwZCksdGhpc1tfMHgzYzQ5MWQoMHgxMWYpXShfMHg0NmQ3MDkpLHRoaXNbJ19zZXROb2RlUGVybWlzc2lvbnMnXShfMHg0NmQ3MDksXzB4MTY2MjBkKSxfMHg0NmQ3MDlbJ2lkJ10rPSdcXFxceDIwZicsXzB4M2U0ZjBjW18weDNjNDkxZCgweDEyOSldW18weDNjNDkxZCgweDExOSldKF8weDQ2ZDcwOSk7fX19W18weDUxMmEzNygweDE1YSldKF8weDMwOTkxNixfMHgzMWFkYzUpe31bXzB4NTEyYTM3KDB4MTFmKV0oXzB4MzNjMDFkKXt9W18weDUxMmEzNygweGNmKV0oXzB4MmYxNGVkKXt2YXIgXzB4MjljYWY5PV8weDUxMmEzNztyZXR1cm4gQXJyYXlbXzB4MjljYWY5KDB4MTllKV0oXzB4MmYxNGVkKXx8dHlwZW9mIF8weDJmMTRlZD09XzB4MjljYWY5KDB4MTk0KSYmdGhpc1snX29iamVjdFRvU3RyaW5nJ10oXzB4MmYxNGVkKT09PV8weDI5Y2FmOSgweDE0YSk7fVtfMHg1MTJhMzcoMHgxMDkpXShfMHgzZDJiMzUsXzB4NWEyYWFlKXt9W18weDUxMmEzNygweDE0NSldKF8weDVlODc0OSl7dmFyIF8weDFlYzkwYz1fMHg1MTJhMzc7ZGVsZXRlIF8weDVlODc0OVtfMHgxZWM5MGMoMHgxODkpXSxkZWxldGUgXzB4NWU4NzQ5W18weDFlYzkwYygweGNiKV0sZGVsZXRlIF8weDVlODc0OVtfMHgxZWM5MGMoMHgxOTMpXTt9Wydfc2V0Tm9kZUV4cHJlc3Npb25QYXRoJ10oXzB4M2VkZDNjLF8weDNlMmUwYyl7fVtfMHg1MTJhMzcoMHgxMDApXShfMHg1NmNmNmQpe3ZhciBfMHgyY2Y2M2E9XzB4NTEyYTM3O3JldHVybiBfMHg1NmNmNmQ/XzB4NTZjZjZkW18weDJjZjYzYSgweDE4NCldKHRoaXNbXzB4MmNmNjNhKDB4MTgzKV0pPydbJytfMHg1NmNmNmQrJ10nOl8weDU2Y2Y2ZFtfMHgyY2Y2M2EoMHgxODQpXSh0aGlzW18weDJjZjYzYSgweGYyKV0pPycuJytfMHg1NmNmNmQ6XzB4NTZjZjZkW18weDJjZjYzYSgweDE4NCldKHRoaXNbXzB4MmNmNjNhKDB4ZTEpXSk/J1snK18weDU2Y2Y2ZCsnXSc6J1tcXFxceDI3JytfMHg1NmNmNmQrJ1xcXFx4MjddJzonJzt9fWxldCBfMHhjYjYyNTU9bmV3IF8weDU2MTMwZCgpO2Z1bmN0aW9uIF8weDRhMjk1YShfMHg1MGRiMDAsXzB4NDVkYWE1LF8weGM1YWIyZCxfMHgxZmQ0YjgsXzB4Zjk0MzVmLF8weDUxYTA0Zil7dmFyIF8weDQ4MDFiNj1fMHg1MTJhMzc7bGV0IF8weDQwZGI0YSxfMHgxYTM1MTY7dHJ5e18weDFhMzUxNj1fMHgzOTk2NzgoKSxfMHg0MGRiNGE9XzB4NTg2ZWE0W18weDQ1ZGFhNV0sIV8weDQwZGI0YXx8XzB4MWEzNTE2LV8weDQwZGI0YVsndHMnXT4weDFmNCYmXzB4NDBkYjRhW18weDQ4MDFiNigweDE2NildJiZfMHg0MGRiNGFbXzB4NDgwMWI2KDB4MTRiKV0vXzB4NDBkYjRhWydjb3VudCddPDB4NjQ/KF8weDU4NmVhNFtfMHg0NWRhYTVdPV8weDQwZGI0YT17J2NvdW50JzoweDAsJ3RpbWUnOjB4MCwndHMnOl8weDFhMzUxNn0sXzB4NTg2ZWE0W18weDQ4MDFiNigweDE4ZSldPXt9KTpfMHgxYTM1MTYtXzB4NTg2ZWE0W18weDQ4MDFiNigweDE4ZSldWyd0cyddPjB4MzImJl8weDU4NmVhNFtfMHg0ODAxYjYoMHgxOGUpXVtfMHg0ODAxYjYoMHgxNjYpXSYmXzB4NTg2ZWE0W18weDQ4MDFiNigweDE4ZSldW18weDQ4MDFiNigweDE0YildL18weDU4NmVhNFtfMHg0ODAxYjYoMHgxOGUpXVtfMHg0ODAxYjYoMHgxNjYpXTwweDY0JiYoXzB4NTg2ZWE0W18weDQ4MDFiNigweDE4ZSldPXt9KTtsZXQgXzB4MTZiOTQyPVtdLF8weDM3ZTIwOD1fMHg0MGRiNGFbXzB4NDgwMWI2KDB4MTQwKV18fF8weDU4NmVhNFsnaGl0cyddW18weDQ4MDFiNigweDE0MCldP18weDFiMDcxNzpfMHgxNmEyMjIsXzB4NDI0NWU4PV8weDQ4ODdmMD0+e3ZhciBfMHgxMWUyYWI9XzB4NDgwMWI2O2xldCBfMHg1NGIwMzM9e307cmV0dXJuIF8weDU0YjAzM1tfMHgxMWUyYWIoMHgxMjkpXT1fMHg0ODg3ZjBbJ3Byb3BzJ10sXzB4NTRiMDMzW18weDExZTJhYigweDEzMCldPV8weDQ4ODdmMFsnZWxlbWVudHMnXSxfMHg1NGIwMzNbXzB4MTFlMmFiKDB4MTk3KV09XzB4NDg4N2YwW18weDExZTJhYigweDE5NyldLF8weDU0YjAzM1tfMHgxMWUyYWIoMHgxMzIpXT1fMHg0ODg3ZjBbXzB4MTFlMmFiKDB4MTMyKV0sXzB4NTRiMDMzW18weDExZTJhYigweDFhNyldPV8weDQ4ODdmMFtfMHgxMWUyYWIoMHgxYTcpXSxfMHg1NGIwMzNbXzB4MTFlMmFiKDB4MTM0KV09XzB4NDg4N2YwW18weDExZTJhYigweDEzNCldLF8weDU0YjAzM1snc29ydFByb3BzJ109ITB4MSxfMHg1NGIwMzNbXzB4MTFlMmFiKDB4MTM5KV09IV8weDU0YTg3MCxfMHg1NGIwMzNbXzB4MTFlMmFiKDB4ZDgpXT0weDEsXzB4NTRiMDMzW18weDExZTJhYigweDEzYSldPTB4MCxfMHg1NGIwMzNbJ2V4cElkJ109XzB4MTFlMmFiKDB4ZDEpLF8weDU0YjAzM1tfMHgxMWUyYWIoMHgxNmQpXT1fMHgxMWUyYWIoMHgxNjQpLF8weDU0YjAzM1snYXV0b0V4cGFuZCddPSEweDAsXzB4NTRiMDMzW18weDExZTJhYigweDFhZCldPVtdLF8weDU0YjAzM1tfMHgxMWUyYWIoMHgxNTQpXT0weDAsXzB4NTRiMDMzW18weDExZTJhYigweDFhYildPSEweDAsXzB4NTRiMDMzW18weDExZTJhYigweDE1ZildPTB4MCxfMHg1NGIwMzNbXzB4MTFlMmFiKDB4MTY5KV09eydjdXJyZW50Jzp2b2lkIDB4MCwncGFyZW50Jzp2b2lkIDB4MCwnaW5kZXgnOjB4MH0sXzB4NTRiMDMzO307Zm9yKHZhciBfMHgxMWRmODI9MHgwO18weDExZGY4MjxfMHhmOTQzNWZbJ2xlbmd0aCddO18weDExZGY4MisrKV8weDE2Yjk0MltfMHg0ODAxYjYoMHgxYTYpXShfMHhjYjYyNTVbXzB4NDgwMWI2KDB4MTI3KV0oeyd0aW1lTm9kZSc6XzB4NTBkYjAwPT09XzB4NDgwMWI2KDB4MTRiKXx8dm9pZCAweDB9LF8weGY5NDM1ZltfMHgxMWRmODJdLF8weDQyNDVlOChfMHgzN2UyMDgpLHt9KSk7aWYoXzB4NTBkYjAwPT09J3RyYWNlJyl7bGV0IF8weDIwZjAxMT1FcnJvcltfMHg0ODAxYjYoMHgxMzMpXTt0cnl7RXJyb3JbXzB4NDgwMWI2KDB4MTMzKV09MHgxLzB4MCxfMHgxNmI5NDJbXzB4NDgwMWI2KDB4MWE2KV0oXzB4Y2I2MjU1W18weDQ4MDFiNigweDEyNyldKHsnc3RhY2tOb2RlJzohMHgwfSxuZXcgRXJyb3IoKVtfMHg0ODAxYjYoMHgxNDcpXSxfMHg0MjQ1ZTgoXzB4MzdlMjA4KSx7J3N0ckxlbmd0aCc6MHgxLzB4MH0pKTt9ZmluYWxseXtFcnJvclsnc3RhY2tUcmFjZUxpbWl0J109XzB4MjBmMDExO319cmV0dXJueydtZXRob2QnOl8weDQ4MDFiNigweDExMiksJ3ZlcnNpb24nOl8weDVkZWE2MCwnYXJncyc6W3sndHMnOl8weGM1YWIyZCwnc2Vzc2lvbic6XzB4MWZkNGI4LCdhcmdzJzpfMHgxNmI5NDIsJ2lkJzpfMHg0NWRhYTUsJ2NvbnRleHQnOl8weDUxYTA0Zn1dfTt9Y2F0Y2goXzB4MWMyZWJkKXtyZXR1cm57J21ldGhvZCc6XzB4NDgwMWI2KDB4MTEyKSwndmVyc2lvbic6XzB4NWRlYTYwLCdhcmdzJzpbeyd0cyc6XzB4YzVhYjJkLCdzZXNzaW9uJzpfMHgxZmQ0YjgsJ2FyZ3MnOlt7J3R5cGUnOl8weDQ4MDFiNigweDFhYSksJ2Vycm9yJzpfMHgxYzJlYmQmJl8weDFjMmViZFtfMHg0ODAxYjYoMHgxOWIpXX1dLCdpZCc6XzB4NDVkYWE1LCdjb250ZXh0JzpfMHg1MWEwNGZ9XX07fWZpbmFsbHl7dHJ5e2lmKF8weDQwZGI0YSYmXzB4MWEzNTE2KXtsZXQgXzB4Mzk2Zjk2PV8weDM5OTY3OCgpO18weDQwZGI0YVtfMHg0ODAxYjYoMHgxNjYpXSsrLF8weDQwZGI0YVtfMHg0ODAxYjYoMHgxNGIpXSs9XzB4M2Y1ZDJkKF8weDFhMzUxNixfMHgzOTZmOTYpLF8weDQwZGI0YVsndHMnXT1fMHgzOTZmOTYsXzB4NTg2ZWE0W18weDQ4MDFiNigweDE4ZSldW18weDQ4MDFiNigweDE2NildKyssXzB4NTg2ZWE0W18weDQ4MDFiNigweDE4ZSldWyd0aW1lJ10rPV8weDNmNWQyZChfMHgxYTM1MTYsXzB4Mzk2Zjk2KSxfMHg1ODZlYTRbXzB4NDgwMWI2KDB4MThlKV1bJ3RzJ109XzB4Mzk2Zjk2LChfMHg0MGRiNGFbXzB4NDgwMWI2KDB4MTY2KV0+MHgzMnx8XzB4NDBkYjRhW18weDQ4MDFiNigweDE0YildPjB4NjQpJiYoXzB4NDBkYjRhWydyZWR1Y2VMaW1pdHMnXT0hMHgwKSwoXzB4NTg2ZWE0W18weDQ4MDFiNigweDE4ZSldW18weDQ4MDFiNigweDE2NildPjB4M2U4fHxfMHg1ODZlYTRbJ2hpdHMnXVsndGltZSddPjB4MTJjKSYmKF8weDU4NmVhNFtfMHg0ODAxYjYoMHgxOGUpXVtfMHg0ODAxYjYoMHgxNDApXT0hMHgwKTt9fWNhdGNoe319fXJldHVybiBfMHgxNGE4Y2NbXzB4NTEyYTM3KDB4MTAxKV07fSkoZ2xvYmFsVGhpcyxfMHg0M2NjYmYoMHhlYiksXzB4NDNjY2JmKDB4MWIxKSxfMHg0M2NjYmYoMHgxNjcpLF8weDQzY2NiZigweDE3YiksJzEuMC4wJyxfMHg0M2NjYmYoMHhmZiksXzB4NDNjY2JmKDB4MTg1KSxfMHg0M2NjYmYoMHgxODcpKTtmdW5jdGlvbiBfMHg1NzUwKCl7dmFyIF8weDUxZmNmMz1bJ3N0cmluZ2lmeScsJ2Rpc2FibGVkTG9nJywnNmlSenZRUicsJ3JlZHVjZUxpbWl0cycsJ3BvcnQnLCdzZXR0ZXInLCdyZWxvYWQnLCdTeW1ib2wnLCdfY2xlYW5Ob2RlJywndXJsJywnc3RhY2snLCduYW4nLCdfcF9sZW5ndGgnLCdbb2JqZWN0XFxcXHgyMEFycmF5XScsJ3RpbWUnLCdfbWF4Q29ubmVjdEF0dGVtcHRDb3VudCcsJ19hZGRpdGlvbmFsTWV0YWRhdGEnLCdCdWZmZXInLCczNlVHcUt2eCcsJ19TeW1ib2wnLCdlbGFwc2VkJywnX2Nvbm5lY3RpbmcnLCd2YWx1ZU9mJywnYXV0b0V4cGFuZFByb3BlcnR5Q291bnQnLCdsZW5ndGgnLCdub3cnLCdjdXJyZW50JywnX2lzUHJpbWl0aXZlV3JhcHBlclR5cGUnLCdiaWdpbnQnLCdfYWRkTG9hZE5vZGUnLCdmdW5jTmFtZScsJ2Nsb3NlJywnZGF0YScsJ0NvbnNvbGVcXFxceDIwTmluamFcXFxceDIwZmFpbGVkXFxcXHgyMHRvXFxcXHgyMHNlbmRcXFxceDIwbG9ncyxcXFxceDIwcmVmcmVzaGluZ1xcXFx4MjB0aGVcXFxceDIwcGFnZVxcXFx4MjBtYXlcXFxceDIwaGVscDtcXFxceDIwYWxzb1xcXFx4MjBzZWVcXFxceDIwJywnYWxsU3RyTGVuZ3RoJywnaXNFeHByZXNzaW9uVG9FdmFsdWF0ZScsJzE5MTI0MjhwZVVrWlMnLCd0eXBlJywnZ2V0T3duUHJvcGVydHlOYW1lcycsJ3Jvb3RfZXhwJywnNzA1NTNNa3dvVEknLCdjb3VudCcsXFxcImM6XFxcXFxcXFxVc2Vyc1xcXFxcXFxcQWRldXNcXFxcXFxcXC52c2NvZGVcXFxcXFxcXGV4dGVuc2lvbnNcXFxcXFxcXHdhbGxhYnlqcy5jb25zb2xlLW5pbmphLTAuMC4xODJcXFxcXFxcXG5vZGVfbW9kdWxlc1xcXCIsJ3BhdGhUb0ZpbGVVUkwnLCdub2RlJywnZXhwcmVzc2lvbnNUb0V2YWx1YXRlJywnd3M6Ly8nLCdpbmRleE9mJywncm9vdEV4cHJlc3Npb24nLCcyMTAwVGRvd2JhJywnX3JlY29ubmVjdFRpbWVvdXQnLCcxNzE0OTQ1ZmNwT09TJywnX2NhcElmU3RyaW5nJywnX2FkZFByb3BlcnR5Jywnb25lcnJvcicsJ19pc1VuZGVmaW5lZCcsJ3N1YnN0cicsJ0Vycm9yJywnX2FsbG93ZWRUb0Nvbm5lY3RPblNlbmQnLCdzb3J0JywnZmFpbGVkXFxcXHgyMHRvXFxcXHgyMGZpbmRcXFxceDIwYW5kXFxcXHgyMGxvYWRcXFxceDIwV2ViU29ja2V0JywnMTQ5WGJFU2pFJywnd2VicGFjaycsJzI3MmlYT2dXWScsJ19jb25uZWN0QXR0ZW1wdENvdW50JywnbnVsbCcsJ2pvaW4nLCdfaXNTZXQnLCdfd2ViU29ja2V0RXJyb3JEb2NzTGluaycsJ19zb3J0UHJvcHMnLCdfbnVtYmVyUmVnRXhwJywnbWF0Y2gnLFtcXFwibG9jYWxob3N0XFxcIixcXFwiMTI3LjAuMC4xXFxcIixcXFwiZXhhbXBsZS5jeXByZXNzLmlvXFxcIixcXFwiREVTS1RPUC02NVM4Q0xVXFxcIixcXFwiMTkyLjE2OC41Ni4xXFxcIixcXFwiMTkyLjE2OC4wLjdcXFwiXSwncmVhZHlTdGF0ZScsJycsJ2NhbGwnLCdfaGFzU3ltYm9sUHJvcGVydHlPbkl0c1BhdGgnLCdjb25zb2xlJywnaG9zdCcsJ1BPU0lUSVZFX0lORklOSVRZJywndGVzdCcsJ2hpdHMnLCdmYWlsZWRcXFxceDIwdG9cXFxceDIwY29ubmVjdFxcXFx4MjB0b1xcXFx4MjBob3N0OlxcXFx4MjAnLCdfaXNOZWdhdGl2ZVplcm8nLCdib29sZWFuJywnaHR0cHM6Ly90aW55dXJsLmNvbS8zN3g4Yjc5dCcsJ19oYXNNYXBPbkl0c1BhdGgnLCdvYmplY3QnLCdfc2V0Tm9kZVF1ZXJ5UGF0aCcsJ3dhcm4nLCdzdHJMZW5ndGgnLCdmdW5jdGlvbicsJ19XZWJTb2NrZXRDbGFzcycsJ1tvYmplY3RcXFxceDIwRGF0ZV0nLCdtZXNzYWdlJywnX3NvY2tldCcsJ29uY2xvc2UnLCdpc0FycmF5JywnMzcwNDY5Y01LQ0xCJywnaW5jbHVkZXMnLCdIVE1MQWxsQ29sbGVjdGlvbicsJ191bmRlZmluZWQnLCdoYXNPd25Qcm9wZXJ0eScsJzpsb2dQb2ludElkOicsJ3NsaWNlJywncHVzaCcsJ2F1dG9FeHBhbmRMaW1pdCcsJ19yZWdFeHBUb1N0cmluZycsJ2ZvckVhY2gnLCd1bmtub3duJywncmVzb2x2ZUdldHRlcnMnLCdhcnJheScsJ2F1dG9FeHBhbmRQcmV2aW91c09iamVjdHMnLCdwcm9jZXNzJywnYmluZCcsJ251bWJlcicsJzYxNDQyJywnaHJ0aW1lJywndG9Mb3dlckNhc2UnLCd2YWx1ZScsJ3VucmVmJywnV2ViU29ja2V0JywnX3RyZWVOb2RlUHJvcGVydGllc0JlZm9yZUZ1bGxWYWx1ZScsJ19nZXRPd25Qcm9wZXJ0eVN5bWJvbHMnLCdfaXNQcmltaXRpdmVUeXBlJywnXFxcXHgyMGJyb3dzZXInLCdfc2V0Tm9kZUV4cHJlc3Npb25QYXRoJywnZGVmYXVsdCcsJ19oYXNTZXRPbkl0c1BhdGgnLCdfYmxhY2tsaXN0ZWRQcm9wZXJ0eScsJ21hcCcsJ19kYXRlVG9TdHJpbmcnLCdfaXNBcnJheScsJ1NldCcsJ3Jvb3RfZXhwX2lkJywnX3Byb3BlcnR5TmFtZScsJ19jb25uZWN0VG9Ib3N0Tm93JywnX2luQnJvd3NlcicsJzE0NjQ1NThid0NJdmwnLCdwZXJmX2hvb2tzJywncGFyZW50JywnZGVwdGgnLCdhc3RybycsJ19vYmplY3RUb1N0cmluZycsJ251eHQnLCdnZXRQcm90b3R5cGVPZicsJ19jb25zb2xlX25pbmphX3Nlc3Npb24nLCdhdXRvRXhwYW5kJywnY29uc3RydWN0b3InLCdfYWRkT2JqZWN0UHJvcGVydHknLCdfcXVvdGVkUmVnRXhwJywnb25vcGVuJywnZGF0ZScsJ25vZGVNb2R1bGVzJywnbmFtZScsJ19kaXNwb3NlV2Vic29ja2V0JywnX3NldE5vZGVJZCcsJ2luZGV4JywnY2FwcGVkRWxlbWVudHMnLCdwYXJzZScsJzEyNy4wLjAuMScsJ3N0cmluZycsJ3BlcmZvcm1hbmNlJywnc3ltYm9sJywnbG9jYXRpb24nLCdfZ2V0T3duUHJvcGVydHlOYW1lcycsJ19zZXROb2RlTGFiZWwnLCdfa2V5U3RyUmVnRXhwJywnX2lzTWFwJywnZ2xvYmFsJywnU3RyaW5nJywnNEdLYlVacicsJ3Byb3RvdHlwZScsJ3NlbmQnLCdfV2ViU29ja2V0JywnZ2V0T3duUHJvcGVydHlTeW1ib2xzJywnQ29uc29sZVxcXFx4MjBOaW5qYVxcXFx4MjBmYWlsZWRcXFxceDIwdG9cXFxceDIwc2VuZFxcXFx4MjBsb2dzLFxcXFx4MjByZXN0YXJ0aW5nXFxcXHgyMHRoZVxcXFx4MjBwcm9jZXNzXFxcXHgyMG1heVxcXFx4MjBoZWxwO1xcXFx4MjBhbHNvXFxcXHgyMHNlZVxcXFx4MjAnLCdbb2JqZWN0XFxcXHgyMFNldF0nLCdfdHJlZU5vZGVQcm9wZXJ0aWVzQWZ0ZXJGdWxsVmFsdWUnLCdjYXBwZWRQcm9wcycsJzE2ODk1Mzc3NjA2MjEnLCdfcHJvcGVydHlBY2Nlc3NvcicsJ19jb25zb2xlX25pbmphJywnTkVHQVRJVkVfSU5GSU5JVFknLCdfYXR0ZW1wdFRvUmVjb25uZWN0U2hvcnRseScsJ19wXycsJ3Bvc2l0aXZlSW5maW5pdHknLCdwb3AnLCd0aW1lU3RhbXAnLCdbb2JqZWN0XFxcXHgyMEJpZ0ludF0nLCdfc2V0Tm9kZVBlcm1pc3Npb25zJywnZXJyb3InLCdfcHJvcGVydHknLCd2ZXJzaW9ucycsJ19IVE1MQWxsQ29sbGVjdGlvbicsJzYyMTQwZkJ1ZHhVJywncGF0aCcsJ2dldFdlYlNvY2tldENsYXNzJywnY2FwcGVkJywnbG9nJywnbWV0aG9kJywnZGlzYWJsZWRUcmFjZScsJ3RyYWNlJywnYXJndW1lbnRSZXNvbHV0aW9uRXJyb3InLCdfd3MnLCdcXFxceDIwc2VydmVyJywndW5zaGlmdCcsJzEwTW9leWlKJywndGltZUVuZCcsJ2xvZ2dlclxcXFx4MjBmYWlsZWRcXFxceDIwdG9cXFxceDIwY29ubmVjdFxcXFx4MjB0b1xcXFx4MjBob3N0LFxcXFx4MjBzZWVcXFxceDIwJywnX2FsbG93ZWRUb1NlbmQnLCdfY29uc29sZU5pbmphQWxsb3dlZFRvU3RhcnQnLCdfc2V0Tm9kZUV4cGFuZGFibGVTdGF0ZScsJ19fZXMnKydNb2R1bGUnLCd1bmRlZmluZWQnLCdyZXBsYWNlJywndG9TdHJpbmcnLCdvbm1lc3NhZ2UnLCdsb2dnZXJcXFxceDIwZmFpbGVkXFxcXHgyMHRvXFxcXHgyMGNvbm5lY3RcXFxceDIwdG9cXFxceDIwaG9zdCcsJ2VudW1lcmFibGUnLCdzZXJpYWxpemUnLCdfcF9uYW1lJywncHJvcHMnLCd0aGVuJywnQm9vbGVhbicsJ2hvc3RuYW1lJywnX2Nvbm5lY3RlZCcsJzIzMzR5a0VTeEgnLCdnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InLCdlbGVtZW50cycsJy4uLicsJ3RvdGFsU3RyTGVuZ3RoJywnc3RhY2tUcmFjZUxpbWl0JywnYXV0b0V4cGFuZE1heERlcHRoJywnX3Byb2Nlc3NUcmVlTm9kZVJlc3VsdCcsJ1tvYmplY3RcXFxceDIwTWFwXScsJ19zZW5kRXJyb3JNZXNzYWdlJywnTWFwJywnbm9GdW5jdGlvbnMnLCdsZXZlbCcsJ190eXBlJywnd3MvaW5kZXguanMnXTtfMHg1NzUwPWZ1bmN0aW9uKCl7cmV0dXJuIF8weDUxZmNmMzt9O3JldHVybiBfMHg1NzUwKCk7fVwiKTt9Y2F0Y2goZSl7fX07ZnVuY3Rpb24gb29fb28oaSwuLi52KXt0cnl7b29fY20oKS5jb25zb2xlTG9nKGksIHYpO31jYXRjaChlKXt9IHJldHVybiB2fTtmdW5jdGlvbiBvb190cihpLC4uLnYpe3RyeXtvb19jbSgpLmNvbnNvbGVUcmFjZShpLCB2KTt9Y2F0Y2goZSl7fSByZXR1cm4gdn07ZnVuY3Rpb24gb29fdHMoKXt0cnl7b29fY20oKS5jb25zb2xlVGltZSgpO31jYXRjaChlKXt9fTtmdW5jdGlvbiBvb190ZSgpe3RyeXtvb19jbSgpLmNvbnNvbGVUaW1lRW5kKCk7fWNhdGNoKGUpe319Oy8qZXNsaW50IGVzbGludC1jb21tZW50cy9kaXNhYmxlLWVuYWJsZS1wYWlyOixlc2xpbnQtY29tbWVudHMvbm8tdW5saW1pdGVkLWRpc2FibGU6LGVzbGludC1jb21tZW50cy9uby1hZ2dyZWdhdGluZy1lbmFibGU6LGVzbGludC1jb21tZW50cy9uby1kdXBsaWNhdGUtZGlzYWJsZTosZXNsaW50LWNvbW1lbnRzL25vLXVudXNlZC1kaXNhYmxlOixlc2xpbnQtY29tbWVudHMvbm8tdW51c2VkLWVuYWJsZTosKi8iLCJjb25zdCBhcGlLZXkgPSBwcm9jZXNzLmVudi5BUElfS0VZO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHF1ZXJ5Q2xpbWF0ZShsb2NhdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8zLjAvd2VhdGhlcj9xPSR7bG9jYXRpb259JmFwcGlkPSR7YXBpS2V5fWAsIHsgbW9kZTogJ2NvcnMnIH0pXHJcbiAgICAgICAgaWYoIXJlc3BvbnNlLm9rKXtcclxuICAgICAgICAgICAgdGhyb3coYXdhaXQgcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHJldHJpZXZlZERhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSAqL2NvbnNvbGUubG9nKC4uLm9vX29vKGAzN2I2NDk0Yl8wYCxyZXRyaWV2ZWREYXRhKSlcclxuICAgICAgICByZXR1cm4gcmV0cmlldmVkRGF0YTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgdGhyb3cgZXJyb3JcclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHF1ZXJ5Rm9yZWNhc3QobG9jYXRpb24pe1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8zLjAvZm9yZWNhc3Q/cT0ke2xvY2F0aW9ufSZhcHBpZD0ke2FwaUtleX1gLCB7IG1vZGU6ICdjb3JzJyB9KVxyXG4gICAgICAgIGlmKCFyZXNwb25zZS5vayl7XHJcbiAgICAgICAgICAgIHRocm93KGF3YWl0IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCByZXRyaWV2ZWREYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgKi9jb25zb2xlLmxvZyguLi5vb19vbyhgMzdiNjQ5NGJfMWAscmV0cmlldmVkRGF0YSkpXHJcbiAgICAgICAgcmV0dXJuIHJldHJpZXZlZERhdGE7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHRocm93IGVycm9yXHJcbiAgICB9XHJcbn1cbi8qIGVzbGludC1kaXNhYmxlICovO2Z1bmN0aW9uIG9vX2NtKCl7dHJ5e3JldHVybiAoMCxldmFsKShcImdsb2JhbFRoaXMuX2NvbnNvbGVfbmluamFcIikgfHwgKDAsZXZhbCkoXCIvKiBodHRwczovL2dpdGh1Yi5jb20vd2FsbGFieWpzL2NvbnNvbGUtbmluamEjaG93LWRvZXMtaXQtd29yayAqLyd1c2Ugc3RyaWN0Jzt2YXIgXzB4NDNjY2JmPV8weDIxNTI7KGZ1bmN0aW9uKF8weDI1Yzk4ZixfMHgxMGVkMWQpe3ZhciBfMHg1MjE0NGU9XzB4MjE1MixfMHg1YWZhYmQ9XzB4MjVjOThmKCk7d2hpbGUoISFbXSl7dHJ5e3ZhciBfMHg0NDU3ZjI9LXBhcnNlSW50KF8weDUyMTQ0ZSgweDE3YSkpLzB4MSooLXBhcnNlSW50KF8weDUyMTQ0ZSgweDEyZSkpLzB4MikrLXBhcnNlSW50KF8weDUyMTQ0ZSgweGQ1KSkvMHgzKihwYXJzZUludChfMHg1MjE0NGUoMHhmNikpLzB4NCkrcGFyc2VJbnQoXzB4NTIxNDRlKDB4MTcwKSkvMHg1KigtcGFyc2VJbnQoXzB4NTIxNDRlKDB4MTNmKSkvMHg2KSstcGFyc2VJbnQoXzB4NTIxNDRlKDB4MTY1KSkvMHg3KigtcGFyc2VJbnQoXzB4NTIxNDRlKDB4MTdjKSkvMHg4KSstcGFyc2VJbnQoXzB4NTIxNDRlKDB4MTYxKSkvMHg5KihwYXJzZUludChfMHg1MjE0NGUoMHgxMWEpKS8weGEpKy1wYXJzZUludChfMHg1MjE0NGUoMHgxOWYpKS8weGIqKC1wYXJzZUludChfMHg1MjE0NGUoMHgxNGYpKS8weGMpK3BhcnNlSW50KF8weDUyMTQ0ZSgweDEwZSkpLzB4ZCoocGFyc2VJbnQoXzB4NTIxNDRlKDB4MTZlKSkvMHhlKTtpZihfMHg0NDU3ZjI9PT1fMHgxMGVkMWQpYnJlYWs7ZWxzZSBfMHg1YWZhYmRbJ3B1c2gnXShfMHg1YWZhYmRbJ3NoaWZ0J10oKSk7fWNhdGNoKF8weDJmOTYyYil7XzB4NWFmYWJkWydwdXNoJ10oXzB4NWFmYWJkWydzaGlmdCddKCkpO319fShfMHg1NzUwLDB4NDcwN2IpKTt2YXIgdWU9T2JqZWN0WydjcmVhdGUnXSx0ZT1PYmplY3RbJ2RlZmluZVByb3BlcnR5J10saGU9T2JqZWN0W18weDQzY2NiZigweDEyZildLGxlPU9iamVjdFsnZ2V0T3duUHJvcGVydHlOYW1lcyddLGZlPU9iamVjdFtfMHg0M2NjYmYoMHhkYyldLF9lPU9iamVjdFtfMHg0M2NjYmYoMHhmNyldW18weDQzY2NiZigweDFhMyldLHBlPShfMHgzMmRkM2UsXzB4MWExMDI0LF8weDQ5ODY5NCxfMHg0NGEzYjMpPT57dmFyIF8weDRmMmZiMz1fMHg0M2NjYmY7aWYoXzB4MWExMDI0JiZ0eXBlb2YgXzB4MWExMDI0PT1fMHg0ZjJmYjMoMHgxOTQpfHx0eXBlb2YgXzB4MWExMDI0PT1fMHg0ZjJmYjMoMHgxOTgpKXtmb3IobGV0IF8weDMzMzcwYSBvZiBsZShfMHgxYTEwMjQpKSFfZVtfMHg0ZjJmYjMoMHgxODgpXShfMHgzMmRkM2UsXzB4MzMzNzBhKSYmXzB4MzMzNzBhIT09XzB4NDk4Njk0JiZ0ZShfMHgzMmRkM2UsXzB4MzMzNzBhLHsnZ2V0JzooKT0+XzB4MWExMDI0W18weDMzMzcwYV0sJ2VudW1lcmFibGUnOiEoXzB4NDRhM2IzPWhlKF8weDFhMTAyNCxfMHgzMzM3MGEpKXx8XzB4NDRhM2IzW18weDRmMmZiMygweDEyNildfSk7fXJldHVybiBfMHgzMmRkM2U7fSxuZT0oXzB4NTA5NGU5LF8weDI3MTEyOCxfMHgzNjVjZWUpPT4oXzB4MzY1Y2VlPV8weDUwOTRlOSE9bnVsbD91ZShmZShfMHg1MDk0ZTkpKTp7fSxwZShfMHgyNzExMjh8fCFfMHg1MDk0ZTl8fCFfMHg1MDk0ZTlbXzB4NDNjY2JmKDB4MTIwKV0/dGUoXzB4MzY1Y2VlLF8weDQzY2NiZigweGNhKSx7J3ZhbHVlJzpfMHg1MDk0ZTksJ2VudW1lcmFibGUnOiEweDB9KTpfMHgzNjVjZWUsXzB4NTA5NGU5KSksUT1jbGFzc3tjb25zdHJ1Y3RvcihfMHg0OWQyZjAsXzB4MzQ2MmJmLF8weDNiZjg3ZSxfMHgzYzViYTMpe3ZhciBfMHhmNzUxMGQ9XzB4NDNjY2JmO3RoaXNbXzB4Zjc1MTBkKDB4ZjQpXT1fMHg0OWQyZjAsdGhpc1tfMHhmNzUxMGQoMHgxOGIpXT1fMHgzNDYyYmYsdGhpc1tfMHhmNzUxMGQoMHgxNDEpXT1fMHgzYmY4N2UsdGhpc1tfMHhmNzUxMGQoMHhlNCldPV8weDNjNWJhMyx0aGlzWydfYWxsb3dlZFRvU2VuZCddPSEweDAsdGhpc1tfMHhmNzUxMGQoMHgxNzcpXT0hMHgwLHRoaXNbXzB4Zjc1MTBkKDB4MTJkKV09ITB4MSx0aGlzWydfY29ubmVjdGluZyddPSEweDEsdGhpc1tfMHhmNzUxMGQoMHhkNCldPSEhdGhpc1snZ2xvYmFsJ11bXzB4Zjc1MTBkKDB4YzQpXSx0aGlzW18weGY3NTEwZCgweDE5OSldPW51bGwsdGhpc1snX2Nvbm5lY3RBdHRlbXB0Q291bnQnXT0weDAsdGhpc1tfMHhmNzUxMGQoMHgxNGMpXT0weDE0LHRoaXNbJ193ZWJTb2NrZXRFcnJvckRvY3NMaW5rJ109XzB4Zjc1MTBkKDB4MTkyKSx0aGlzW18weGY3NTEwZCgweDEzNyldPSh0aGlzW18weGY3NTEwZCgweGQ0KV0/XzB4Zjc1MTBkKDB4MTVlKTpfMHhmNzUxMGQoMHhmYikpK3RoaXNbXzB4Zjc1MTBkKDB4MTgxKV07fWFzeW5jW18weDQzY2NiZigweDExMCldKCl7dmFyIF8weDJiNTIwNT1fMHg0M2NjYmY7aWYodGhpc1tfMHgyYjUyMDUoMHgxOTkpXSlyZXR1cm4gdGhpc1tfMHgyYjUyMDUoMHgxOTkpXTtsZXQgXzB4Mzg5YTY4O2lmKHRoaXNbXzB4MmI1MjA1KDB4ZDQpXSlfMHgzODlhNjg9dGhpc1tfMHgyYjUyMDUoMHhmNCldWydXZWJTb2NrZXQnXTtlbHNle2lmKHRoaXNbXzB4MmI1MjA1KDB4ZjQpXVtfMHgyYjUyMDUoMHgxYWUpXT8uW18weDJiNTIwNSgweGY5KV0pXzB4Mzg5YTY4PXRoaXNbXzB4MmI1MjA1KDB4ZjQpXVtfMHgyYjUyMDUoMHgxYWUpXT8uW18weDJiNTIwNSgweGY5KV07ZWxzZSB0cnl7bGV0IF8weDgwNDQ3Mj1hd2FpdCBpbXBvcnQoXzB4MmI1MjA1KDB4MTBmKSk7XzB4Mzg5YTY4PShhd2FpdCBpbXBvcnQoKGF3YWl0IGltcG9ydChfMHgyYjUyMDUoMHgxNDYpKSlbXzB4MmI1MjA1KDB4MTY4KV0oXzB4ODA0NDcyW18weDJiNTIwNSgweDE3ZildKHRoaXNbJ25vZGVNb2R1bGVzJ10sXzB4MmI1MjA1KDB4MTNjKSkpW18weDJiNTIwNSgweDEyMyldKCkpKVtfMHgyYjUyMDUoMHhjYSldO31jYXRjaHt0cnl7XzB4Mzg5YTY4PXJlcXVpcmUocmVxdWlyZShfMHgyYjUyMDUoMHgxMGYpKVtfMHgyYjUyMDUoMHgxN2YpXSh0aGlzW18weDJiNTIwNSgweGU0KV0sJ3dzJykpO31jYXRjaHt0aHJvdyBuZXcgRXJyb3IoXzB4MmI1MjA1KDB4MTc5KSk7fX19cmV0dXJuIHRoaXNbXzB4MmI1MjA1KDB4MTk5KV09XzB4Mzg5YTY4LF8weDM4OWE2ODt9WydfY29ubmVjdFRvSG9zdE5vdyddKCl7dmFyIF8weDU4ZmIyNj1fMHg0M2NjYmY7dGhpc1tfMHg1OGZiMjYoMHgxNTIpXXx8dGhpc1tfMHg1OGZiMjYoMHgxMmQpXXx8dGhpc1tfMHg1OGZiMjYoMHgxN2QpXT49dGhpc1tfMHg1OGZiMjYoMHgxNGMpXXx8KHRoaXNbXzB4NThmYjI2KDB4MTc3KV09ITB4MSx0aGlzW18weDU4ZmIyNigweDE1MildPSEweDAsdGhpc1tfMHg1OGZiMjYoMHgxN2QpXSsrLHRoaXNbJ193cyddPW5ldyBQcm9taXNlKChfMHgxZmYxMjgsXzB4NTE1MDdmKT0+e3ZhciBfMHgxYmE4OGQ9XzB4NThmYjI2O3RoaXNbXzB4MWJhODhkKDB4MTEwKV0oKVtfMHgxYmE4OGQoMHgxMmEpXShfMHgxZGI4NTM9Pnt2YXIgXzB4NTJiNTExPV8weDFiYTg4ZDtsZXQgXzB4MzEwMjA2PW5ldyBfMHgxZGI4NTMoXzB4NTJiNTExKDB4MTZiKSt0aGlzWydob3N0J10rJzonK3RoaXNbXzB4NTJiNTExKDB4MTQxKV0pO18weDMxMDIwNltfMHg1MmI1MTEoMHgxNzMpXT0oKT0+e3ZhciBfMHg1ODcyOTE9XzB4NTJiNTExO3RoaXNbXzB4NTg3MjkxKDB4MTFkKV09ITB4MSx0aGlzW18weDU4NzI5MSgweGU2KV0oXzB4MzEwMjA2KSx0aGlzW18weDU4NzI5MSgweDEwMyldKCksXzB4NTE1MDdmKG5ldyBFcnJvcignbG9nZ2VyXFxcXHgyMHdlYnNvY2tldFxcXFx4MjBlcnJvcicpKTt9LF8weDMxMDIwNltfMHg1MmI1MTEoMHhlMildPSgpPT57dmFyIF8weDU3OTVmNj1fMHg1MmI1MTE7dGhpc1snX2luQnJvd3NlciddfHxfMHgzMTAyMDZbXzB4NTc5NWY2KDB4MTljKV0mJl8weDMxMDIwNlsnX3NvY2tldCddW18weDU3OTVmNigweGMzKV0mJl8weDMxMDIwNltfMHg1Nzk1ZjYoMHgxOWMpXVtfMHg1Nzk1ZjYoMHhjMyldKCksXzB4MWZmMTI4KF8weDMxMDIwNik7fSxfMHgzMTAyMDZbXzB4NTJiNTExKDB4MTlkKV09KCk9Pnt2YXIgXzB4NTQ5MGU1PV8weDUyYjUxMTt0aGlzW18weDU0OTBlNSgweDE3NyldPSEweDAsdGhpc1tfMHg1NDkwZTUoMHhlNildKF8weDMxMDIwNiksdGhpc1tfMHg1NDkwZTUoMHgxMDMpXSgpO30sXzB4MzEwMjA2W18weDUyYjUxMSgweDEyNCldPV8weDIxZTE5Nj0+e3ZhciBfMHgzOGJlZTM9XzB4NTJiNTExO3RyeXtfMHgyMWUxOTYmJl8weDIxZTE5NltfMHgzOGJlZTMoMHgxNWQpXSYmdGhpc1tfMHgzOGJlZTMoMHhkNCldJiZKU09OW18weDM4YmVlMygweGVhKV0oXzB4MjFlMTk2W18weDM4YmVlMygweDE1ZCldKVtfMHgzOGJlZTMoMHgxMTMpXT09PSdyZWxvYWQnJiZ0aGlzW18weDM4YmVlMygweGY0KV1bXzB4MzhiZWUzKDB4ZWYpXVtfMHgzOGJlZTMoMHgxNDMpXSgpO31jYXRjaHt9fTt9KVtfMHgxYmE4OGQoMHgxMmEpXShfMHgyNzM1NjE9Pih0aGlzW18weDFiYTg4ZCgweDEyZCldPSEweDAsdGhpc1tfMHgxYmE4OGQoMHgxNTIpXT0hMHgxLHRoaXNbXzB4MWJhODhkKDB4MTc3KV09ITB4MSx0aGlzW18weDFiYTg4ZCgweDExZCldPSEweDAsdGhpc1tfMHgxYmE4OGQoMHgxN2QpXT0weDAsXzB4MjczNTYxKSlbJ2NhdGNoJ10oXzB4MTFkNWFkPT4odGhpc1snX2Nvbm5lY3RlZCddPSEweDEsdGhpc1tfMHgxYmE4OGQoMHgxNTIpXT0hMHgxLGNvbnNvbGVbJ3dhcm4nXShfMHgxYmE4OGQoMHgxMWMpK3RoaXNbXzB4MWJhODhkKDB4MTgxKV0pLF8weDUxNTA3ZihuZXcgRXJyb3IoXzB4MWJhODhkKDB4MThmKSsoXzB4MTFkNWFkJiZfMHgxMWQ1YWRbJ21lc3NhZ2UnXSkpKSkpO30pKTt9WydfZGlzcG9zZVdlYnNvY2tldCddKF8weDU5ZmQxZSl7dmFyIF8weDQ2OGZiPV8weDQzY2NiZjt0aGlzW18weDQ2OGZiKDB4MTJkKV09ITB4MSx0aGlzW18weDQ2OGZiKDB4MTUyKV09ITB4MTt0cnl7XzB4NTlmZDFlWydvbmNsb3NlJ109bnVsbCxfMHg1OWZkMWVbXzB4NDY4ZmIoMHgxNzMpXT1udWxsLF8weDU5ZmQxZVtfMHg0NjhmYigweGUyKV09bnVsbDt9Y2F0Y2h7fXRyeXtfMHg1OWZkMWVbXzB4NDY4ZmIoMHgxODYpXTwweDImJl8weDU5ZmQxZVtfMHg0NjhmYigweDE1YyldKCk7fWNhdGNoe319W18weDQzY2NiZigweDEwMyldKCl7dmFyIF8weDJjNmQ0Zj1fMHg0M2NjYmY7Y2xlYXJUaW1lb3V0KHRoaXNbXzB4MmM2ZDRmKDB4MTZmKV0pLCEodGhpc1tfMHgyYzZkNGYoMHgxN2QpXT49dGhpc1tfMHgyYzZkNGYoMHgxNGMpXSkmJih0aGlzWydfcmVjb25uZWN0VGltZW91dCddPXNldFRpbWVvdXQoKCk9Pnt2YXIgXzB4MWZmYmY5PV8weDJjNmQ0Zjt0aGlzWydfY29ubmVjdGVkJ118fHRoaXNbXzB4MWZmYmY5KDB4MTUyKV18fCh0aGlzW18weDFmZmJmOSgweGQzKV0oKSx0aGlzWydfd3MnXT8uWydjYXRjaCddKCgpPT50aGlzW18weDFmZmJmOSgweDEwMyldKCkpKTt9LDB4MWY0KSx0aGlzW18weDJjNmQ0ZigweDE2ZildWyd1bnJlZiddJiZ0aGlzW18weDJjNmQ0ZigweDE2ZildW18weDJjNmQ0ZigweGMzKV0oKSk7fWFzeW5jW18weDQzY2NiZigweGY4KV0oXzB4MjM2ZDJjKXt2YXIgXzB4MWIyNDk3PV8weDQzY2NiZjt0cnl7aWYoIXRoaXNbXzB4MWIyNDk3KDB4MTFkKV0pcmV0dXJuO3RoaXNbXzB4MWIyNDk3KDB4MTc3KV0mJnRoaXNbXzB4MWIyNDk3KDB4ZDMpXSgpLChhd2FpdCB0aGlzW18weDFiMjQ5NygweDExNyldKVtfMHgxYjI0OTcoMHhmOCldKEpTT05bXzB4MWIyNDk3KDB4MTNkKV0oXzB4MjM2ZDJjKSk7fWNhdGNoKF8weDNhZDk1Myl7Y29uc29sZVtfMHgxYjI0OTcoMHgxOTYpXSh0aGlzW18weDFiMjQ5NygweDEzNyldKyc6XFxcXHgyMCcrKF8weDNhZDk1MyYmXzB4M2FkOTUzW18weDFiMjQ5NygweDE5YildKSksdGhpc1tfMHgxYjI0OTcoMHgxMWQpXT0hMHgxLHRoaXNbXzB4MWIyNDk3KDB4MTAzKV0oKTt9fX07ZnVuY3Rpb24gXzB4MjE1MihfMHg0ZGI0MzAsXzB4MTFhNmE4KXt2YXIgXzB4NTc1MDU0PV8weDU3NTAoKTtyZXR1cm4gXzB4MjE1Mj1mdW5jdGlvbihfMHgyMTUyOTcsXzB4YjQ1ZmVmKXtfMHgyMTUyOTc9XzB4MjE1Mjk3LTB4YzM7dmFyIF8weDQ1MjAyND1fMHg1NzUwNTRbXzB4MjE1Mjk3XTtyZXR1cm4gXzB4NDUyMDI0O30sXzB4MjE1MihfMHg0ZGI0MzAsXzB4MTFhNmE4KTt9ZnVuY3Rpb24gVihfMHhjNzYwYjYsXzB4MzgwYTQ2LF8weDUwODcxNixfMHg1ZTZiOWMsXzB4NWU3NmQ1KXt2YXIgXzB4Mzk3N2YxPV8weDQzY2NiZjtsZXQgXzB4MWQ5ZDgzPV8weDUwODcxNlsnc3BsaXQnXSgnLCcpW18weDM5NzdmMSgweGNkKV0oXzB4MzY0NWFiPT57dmFyIF8weGMxMjc0Mz1fMHgzOTc3ZjE7dHJ5e18weGM3NjBiNltfMHhjMTI3NDMoMHhkZCldfHwoKF8weDVlNzZkNT09PSduZXh0LmpzJ3x8XzB4NWU3NmQ1PT09J3JlbWl4J3x8XzB4NWU3NmQ1PT09XzB4YzEyNzQzKDB4ZDkpKSYmKF8weDVlNzZkNSs9XzB4Yzc2MGI2W18weGMxMjc0MygweDFhZSldPy5bJ3ZlcnNpb25zJ10/LltfMHhjMTI3NDMoMHgxNjkpXT9fMHhjMTI3NDMoMHgxMTgpOl8weGMxMjc0MygweGM4KSksXzB4Yzc2MGI2W18weGMxMjc0MygweGRkKV09eydpZCc6K25ldyBEYXRlKCksJ3Rvb2wnOl8weDVlNzZkNX0pO2xldCBfMHgxYzEyYmY9bmV3IFEoXzB4Yzc2MGI2LF8weDM4MGE0NixfMHgzNjQ1YWIsXzB4NWU2YjljKTtyZXR1cm4gXzB4MWMxMmJmW18weGMxMjc0MygweGY4KV1bXzB4YzEyNzQzKDB4MWFmKV0oXzB4MWMxMmJmKTt9Y2F0Y2goXzB4YTFhNGNlKXtyZXR1cm4gY29uc29sZVtfMHhjMTI3NDMoMHgxOTYpXShfMHhjMTI3NDMoMHgxMjUpLF8weGExYTRjZSYmXzB4YTFhNGNlW18weGMxMjc0MygweDE5YildKSwoKT0+e307fX0pO3JldHVybiBfMHg1MzhhYzY9Pl8weDFkOWQ4M1tfMHgzOTc3ZjEoMHgxYTkpXShfMHgyMTg0ODg9Pl8weDIxODQ4OChfMHg1MzhhYzYpKTt9ZnVuY3Rpb24gSChfMHgzMmFlODUpe3ZhciBfMHgxMWEzYjc9XzB4NDNjY2JmO2xldCBfMHgxZjNiNjQ9ZnVuY3Rpb24oXzB4MTQ5ZGExLF8weDFjYWM0Yil7cmV0dXJuIF8weDFjYWM0Yi1fMHgxNDlkYTE7fSxfMHgyMWFhYzg7aWYoXzB4MzJhZTg1W18weDExYTNiNygweGVkKV0pXzB4MjFhYWM4PWZ1bmN0aW9uKCl7dmFyIF8weDZlNDQyMj1fMHgxMWEzYjc7cmV0dXJuIF8weDMyYWU4NVtfMHg2ZTQ0MjIoMHhlZCldWydub3cnXSgpO307ZWxzZXtpZihfMHgzMmFlODVbJ3Byb2Nlc3MnXSYmXzB4MzJhZTg1W18weDExYTNiNygweDFhZSldWydocnRpbWUnXSlfMHgyMWFhYzg9ZnVuY3Rpb24oKXt2YXIgXzB4NGY3MjQwPV8weDExYTNiNztyZXR1cm4gXzB4MzJhZTg1W18weDRmNzI0MCgweDFhZSldW18weDRmNzI0MCgweDFiMildKCk7fSxfMHgxZjNiNjQ9ZnVuY3Rpb24oXzB4NjNjZDQxLF8weDkzZWE4Nil7cmV0dXJuIDB4M2U4KihfMHg5M2VhODZbMHgwXS1fMHg2M2NkNDFbMHgwXSkrKF8weDkzZWE4NlsweDFdLV8weDYzY2Q0MVsweDFdKS8weGY0MjQwO307ZWxzZSB0cnl7bGV0IHtwZXJmb3JtYW5jZTpfMHgyOGQyYWR9PXJlcXVpcmUoXzB4MTFhM2I3KDB4ZDYpKTtfMHgyMWFhYzg9ZnVuY3Rpb24oKXt2YXIgXzB4NGFhNjViPV8weDExYTNiNztyZXR1cm4gXzB4MjhkMmFkW18weDRhYTY1YigweDE1NildKCk7fTt9Y2F0Y2h7XzB4MjFhYWM4PWZ1bmN0aW9uKCl7cmV0dXJuK25ldyBEYXRlKCk7fTt9fXJldHVybnsnZWxhcHNlZCc6XzB4MWYzYjY0LCd0aW1lU3RhbXAnOl8weDIxYWFjOCwnbm93JzooKT0+RGF0ZVtfMHgxMWEzYjcoMHgxNTYpXSgpfTt9ZnVuY3Rpb24gWChfMHg0NzBmZGUsXzB4MTA2NTQwLF8weDRiNzQ2Myl7dmFyIF8weDIzZTJiZD1fMHg0M2NjYmY7aWYoXzB4NDcwZmRlW18weDIzZTJiZCgweDExZSldIT09dm9pZCAweDApcmV0dXJuIF8weDQ3MGZkZVtfMHgyM2UyYmQoMHgxMWUpXTtsZXQgXzB4MTQ3OGZiPV8weDQ3MGZkZVtfMHgyM2UyYmQoMHgxYWUpXT8uW18weDIzZTJiZCgweDEwYyldPy5bJ25vZGUnXTtyZXR1cm4gXzB4MTQ3OGZiJiZfMHg0Yjc0NjM9PT1fMHgyM2UyYmQoMHhkYik/XzB4NDcwZmRlWydfY29uc29sZU5pbmphQWxsb3dlZFRvU3RhcnQnXT0hMHgxOl8weDQ3MGZkZVtfMHgyM2UyYmQoMHgxMWUpXT1fMHgxNDc4ZmJ8fCFfMHgxMDY1NDB8fF8weDQ3MGZkZVtfMHgyM2UyYmQoMHhlZildPy5bXzB4MjNlMmJkKDB4MTJjKV0mJl8weDEwNjU0MFtfMHgyM2UyYmQoMHgxYTApXShfMHg0NzBmZGVbJ2xvY2F0aW9uJ11bJ2hvc3RuYW1lJ10pLF8weDQ3MGZkZVtfMHgyM2UyYmQoMHgxMWUpXTt9KChfMHgxNGE4Y2MsXzB4MzQ5YjZjLF8weDNhOWQ0ZSxfMHg0YmJhZTIsXzB4MTZmMTZjLF8weDVkZWE2MCxfMHgzZTdmYWEsXzB4MzhjYmU0LF8weDU0YTg3MCk9Pnt2YXIgXzB4NTEyYTM3PV8weDQzY2NiZjtpZihfMHgxNGE4Y2NbXzB4NTEyYTM3KDB4MTAxKV0pcmV0dXJuIF8weDE0YThjY1tfMHg1MTJhMzcoMHgxMDEpXTtpZighWChfMHgxNGE4Y2MsXzB4MzhjYmU0LF8weDE2ZjE2YykpcmV0dXJuIF8weDE0YThjY1tfMHg1MTJhMzcoMHgxMDEpXT17J2NvbnNvbGVMb2cnOigpPT57fSwnY29uc29sZVRyYWNlJzooKT0+e30sJ2NvbnNvbGVUaW1lJzooKT0+e30sJ2NvbnNvbGVUaW1lRW5kJzooKT0+e30sJ2F1dG9Mb2cnOigpPT57fSwnYXV0b0xvZ01hbnknOigpPT57fSwnYXV0b1RyYWNlTWFueSc6KCk9Pnt9LCdhdXRvVHJhY2UnOigpPT57fSwnYXV0b1RpbWUnOigpPT57fSwnYXV0b1RpbWVFbmQnOigpPT57fX0sXzB4MTRhOGNjWydfY29uc29sZV9uaW5qYSddO2xldCBfMHgxNmEyMjI9eydwcm9wcyc6MHg2NCwnZWxlbWVudHMnOjB4NjQsJ3N0ckxlbmd0aCc6MHg0MDAqMHgzMiwndG90YWxTdHJMZW5ndGgnOjB4NDAwKjB4MzIsJ2F1dG9FeHBhbmRMaW1pdCc6MHgxMzg4LCdhdXRvRXhwYW5kTWF4RGVwdGgnOjB4YX0sXzB4MWIwNzE3PXsncHJvcHMnOjB4NSwnZWxlbWVudHMnOjB4NSwnc3RyTGVuZ3RoJzoweDEwMCwndG90YWxTdHJMZW5ndGgnOjB4MTAwKjB4MywnYXV0b0V4cGFuZExpbWl0JzoweDFlLCdhdXRvRXhwYW5kTWF4RGVwdGgnOjB4Mn0sXzB4M2ZmMjIyPUgoXzB4MTRhOGNjKSxfMHgzZjVkMmQ9XzB4M2ZmMjIyW18weDUxMmEzNygweDE1MSldLF8weDM5OTY3OD1fMHgzZmYyMjJbXzB4NTEyYTM3KDB4MTA3KV0sXzB4NGI5YTYxPV8weDNmZjIyMltfMHg1MTJhMzcoMHgxNTYpXSxfMHg1ODZlYTQ9eydoaXRzJzp7fSwndHMnOnt9fSxfMHg1N2NmODY9XzB4MmY5ODk5PT57XzB4NTg2ZWE0Wyd0cyddW18weDJmOTg5OV09XzB4Mzk5Njc4KCk7fSxfMHg1MDlhYWM9KF8weGY4MmQzYSxfMHgyNzc0NDYpPT57dmFyIF8weDM0YjJhOD1fMHg1MTJhMzc7bGV0IF8weDMyYThiMz1fMHg1ODZlYTRbJ3RzJ11bXzB4Mjc3NDQ2XTtpZihkZWxldGUgXzB4NTg2ZWE0Wyd0cyddW18weDI3NzQ0Nl0sXzB4MzJhOGIzKXtsZXQgXzB4NGZiNzI5PV8weDNmNWQyZChfMHgzMmE4YjMsXzB4Mzk5Njc4KCkpO18weDE3MmM3NShfMHg0YTI5NWEoXzB4MzRiMmE4KDB4MTRiKSxfMHhmODJkM2EsXzB4NGI5YTYxKCksXzB4MmU5NzEzLFtfMHg0ZmI3MjldLF8weDI3NzQ0NikpO319LF8weDdlNjFlNj1fMHgzMDA0N2E9Pl8weDU4ZGM4ND0+e3ZhciBfMHg1MmRjM2U9XzB4NTEyYTM3O3RyeXtfMHg1N2NmODYoXzB4NThkYzg0KSxfMHgzMDA0N2EoXzB4NThkYzg0KTt9ZmluYWxseXtfMHgxNGE4Y2NbXzB4NTJkYzNlKDB4MThhKV1bXzB4NTJkYzNlKDB4MTRiKV09XzB4MzAwNDdhO319LF8weDIwZjU2MT1fMHg3NGViZGM9Pl8weDEzMDkxNj0+e3ZhciBfMHgyMTM3MzY9XzB4NTEyYTM3O3RyeXtsZXQgW18weDI3ZmFlZixfMHgyYWY2MjVdPV8weDEzMDkxNlsnc3BsaXQnXShfMHgyMTM3MzYoMHgxYTQpKTtfMHg1MDlhYWMoXzB4MmFmNjI1LF8weDI3ZmFlZiksXzB4NzRlYmRjKF8weDI3ZmFlZik7fWZpbmFsbHl7XzB4MTRhOGNjW18weDIxMzczNigweDE4YSldWyd0aW1lRW5kJ109XzB4NzRlYmRjO319O18weDE0YThjY1tfMHg1MTJhMzcoMHgxMDEpXT17J2NvbnNvbGVMb2cnOihfMHhiZWZmMWIsXzB4M2UyNmI1KT0+e3ZhciBfMHhhMjU2ZjE9XzB4NTEyYTM3O18weDE0YThjY1tfMHhhMjU2ZjEoMHgxOGEpXVsnbG9nJ11bXzB4YTI1NmYxKDB4ZTUpXSE9PV8weGEyNTZmMSgweDEzZSkmJl8weDE3MmM3NShfMHg0YTI5NWEoJ2xvZycsXzB4YmVmZjFiLF8weDRiOWE2MSgpLF8weDJlOTcxMyxfMHgzZTI2YjUpKTt9LCdjb25zb2xlVHJhY2UnOihfMHg1ODNiYTcsXzB4MmMyOTUwKT0+e3ZhciBfMHgxYzdkOGI9XzB4NTEyYTM3O18weDE0YThjY1tfMHgxYzdkOGIoMHgxOGEpXVtfMHgxYzdkOGIoMHgxMTIpXVtfMHgxYzdkOGIoMHhlNSldIT09XzB4MWM3ZDhiKDB4MTE0KSYmXzB4MTcyYzc1KF8weDRhMjk1YShfMHgxYzdkOGIoMHgxMTUpLF8weDU4M2JhNyxfMHg0YjlhNjEoKSxfMHgyZTk3MTMsXzB4MmMyOTUwKSk7fSwnY29uc29sZVRpbWUnOigpPT57dmFyIF8weDkzNmIyYj1fMHg1MTJhMzc7XzB4MTRhOGNjW18weDkzNmIyYigweDE4YSldW18weDkzNmIyYigweDE0YildPV8weDdlNjFlNihfMHgxNGE4Y2NbXzB4OTM2YjJiKDB4MThhKV1bXzB4OTM2YjJiKDB4MTRiKV0pO30sJ2NvbnNvbGVUaW1lRW5kJzooKT0+e3ZhciBfMHgyNWM2YzQ9XzB4NTEyYTM3O18weDE0YThjY1snY29uc29sZSddW18weDI1YzZjNCgweDExYildPV8weDIwZjU2MShfMHgxNGE4Y2NbXzB4MjVjNmM0KDB4MThhKV1bXzB4MjVjNmM0KDB4MTFiKV0pO30sJ2F1dG9Mb2cnOihfMHg0OWRlNzMsXzB4NDY0YTQ3KT0+e3ZhciBfMHg0ZmY0OWM9XzB4NTEyYTM3O18weDE3MmM3NShfMHg0YTI5NWEoXzB4NGZmNDljKDB4MTEyKSxfMHg0NjRhNDcsXzB4NGI5YTYxKCksXzB4MmU5NzEzLFtfMHg0OWRlNzNdKSk7fSwnYXV0b0xvZ01hbnknOihfMHg0ZGZkMDQsXzB4MWNkM2RkKT0+e3ZhciBfMHgyMDljMGM9XzB4NTEyYTM3O18weDE3MmM3NShfMHg0YTI5NWEoXzB4MjA5YzBjKDB4MTEyKSxfMHg0ZGZkMDQsXzB4NGI5YTYxKCksXzB4MmU5NzEzLF8weDFjZDNkZCkpO30sJ2F1dG9UcmFjZSc6KF8weDExNTA3NCxfMHg4ZmZkYTEpPT57dmFyIF8weGQ0MzBhOD1fMHg1MTJhMzc7XzB4MTcyYzc1KF8weDRhMjk1YShfMHhkNDMwYTgoMHgxMTUpLF8weDhmZmRhMSxfMHg0YjlhNjEoKSxfMHgyZTk3MTMsW18weDExNTA3NF0pKTt9LCdhdXRvVHJhY2VNYW55JzooXzB4NTg3NjYwLF8weDExYTBiOSk9Pnt2YXIgXzB4NTljYjQxPV8weDUxMmEzNztfMHgxNzJjNzUoXzB4NGEyOTVhKF8weDU5Y2I0MSgweDExNSksXzB4NTg3NjYwLF8weDRiOWE2MSgpLF8weDJlOTcxMyxfMHgxMWEwYjkpKTt9LCdhdXRvVGltZSc6KF8weDVlNmY4OCxfMHgyYjhlYTQsXzB4NjAzZWJmKT0+e18weDU3Y2Y4NihfMHg2MDNlYmYpO30sJ2F1dG9UaW1lRW5kJzooXzB4MzEwZWVlLF8weDJiNTQ1OSxfMHgyODVjNjMpPT57XzB4NTA5YWFjKF8weDJiNTQ1OSxfMHgyODVjNjMpO319O2xldCBfMHgxNzJjNzU9VihfMHgxNGE4Y2MsXzB4MzQ5YjZjLF8weDNhOWQ0ZSxfMHg0YmJhZTIsXzB4MTZmMTZjKSxfMHgyZTk3MTM9XzB4MTRhOGNjWydfY29uc29sZV9uaW5qYV9zZXNzaW9uJ107Y2xhc3MgXzB4NTYxMzBke2NvbnN0cnVjdG9yKCl7dmFyIF8weDQwZjExND1fMHg1MTJhMzc7dGhpc1tfMHg0MGYxMTQoMHhmMildPS9eKD8hKD86ZG98aWZ8aW58Zm9yfGxldHxuZXd8dHJ5fHZhcnxjYXNlfGVsc2V8ZW51bXxldmFsfGZhbHNlfG51bGx8dGhpc3x0cnVlfHZvaWR8d2l0aHxicmVha3xjYXRjaHxjbGFzc3xjb25zdHxzdXBlcnx0aHJvd3x3aGlsZXx5aWVsZHxkZWxldGV8ZXhwb3J0fGltcG9ydHxwdWJsaWN8cmV0dXJufHN0YXRpY3xzd2l0Y2h8dHlwZW9mfGRlZmF1bHR8ZXh0ZW5kc3xmaW5hbGx5fHBhY2thZ2V8cHJpdmF0ZXxjb250aW51ZXxkZWJ1Z2dlcnxmdW5jdGlvbnxhcmd1bWVudHN8aW50ZXJmYWNlfHByb3RlY3RlZHxpbXBsZW1lbnRzfGluc3RhbmNlb2YpJClbXyRhLXpBLVpcXFxceEEwLVxcXFx1RkZGRl1bXyRhLXpBLVowLTlcXFxceEEwLVxcXFx1RkZGRl0qJC8sdGhpc1tfMHg0MGYxMTQoMHgxODMpXT0vXigwfFsxLTldWzAtOV0qKSQvLHRoaXNbXzB4NDBmMTE0KDB4ZTEpXT0vJyhbXlxcXFxcXFxcJ118XFxcXFxcXFwnKSonLyx0aGlzWydfdW5kZWZpbmVkJ109XzB4MTRhOGNjW18weDQwZjExNCgweDEyMSldLHRoaXNbXzB4NDBmMTE0KDB4MTBkKV09XzB4MTRhOGNjW18weDQwZjExNCgweDFhMSldLHRoaXNbJ19nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InXT1PYmplY3RbJ2dldE93blByb3BlcnR5RGVzY3JpcHRvciddLHRoaXNbXzB4NDBmMTE0KDB4ZjApXT1PYmplY3RbXzB4NDBmMTE0KDB4MTYzKV0sdGhpc1tfMHg0MGYxMTQoMHgxNTApXT1fMHgxNGE4Y2NbXzB4NDBmMTE0KDB4MTQ0KV0sdGhpc1snX3JlZ0V4cFRvU3RyaW5nJ109UmVnRXhwW18weDQwZjExNCgweGY3KV1bXzB4NDBmMTE0KDB4MTIzKV0sdGhpc1snX2RhdGVUb1N0cmluZyddPURhdGVbXzB4NDBmMTE0KDB4ZjcpXVtfMHg0MGYxMTQoMHgxMjMpXTt9WydzZXJpYWxpemUnXShfMHg1NWEyYmIsXzB4MWI2NjA0LF8weDI4N2JhOSxfMHgyZDk4NTIpe3ZhciBfMHg0ZDIyZjI9XzB4NTEyYTM3LF8weDE2NjJmYT10aGlzLF8weDViODMxMj1fMHgyODdiYTlbJ2F1dG9FeHBhbmQnXTtmdW5jdGlvbiBfMHhjNWJlMTYoXzB4NTY5MDBlLF8weGMwYjVjMSxfMHg0NDMzZmMpe3ZhciBfMHg0Yjg4ZWQ9XzB4MjE1MjtfMHhjMGI1YzFbJ3R5cGUnXT1fMHg0Yjg4ZWQoMHgxYWEpLF8weGMwYjVjMVtfMHg0Yjg4ZWQoMHgxMGEpXT1fMHg1NjkwMGVbXzB4NGI4OGVkKDB4MTliKV0sXzB4NjA5MzIwPV8weDQ0MzNmY1tfMHg0Yjg4ZWQoMHgxNjkpXVsnY3VycmVudCddLF8weDQ0MzNmY1tfMHg0Yjg4ZWQoMHgxNjkpXVtfMHg0Yjg4ZWQoMHgxNTcpXT1fMHhjMGI1YzEsXzB4MTY2MmZhW18weDRiODhlZCgweGM1KV0oXzB4YzBiNWMxLF8weDQ0MzNmYyk7fWlmKF8weDFiNjYwNCYmXzB4MWI2NjA0W18weDRkMjJmMigweDExNildKV8weGM1YmUxNihfMHgxYjY2MDQsXzB4NTVhMmJiLF8weDI4N2JhOSk7ZWxzZSB0cnl7XzB4Mjg3YmE5W18weDRkMjJmMigweDEzYSldKyssXzB4Mjg3YmE5WydhdXRvRXhwYW5kJ10mJl8weDI4N2JhOVtfMHg0ZDIyZjIoMHgxYWQpXVsncHVzaCddKF8weDFiNjYwNCk7dmFyIF8weDJhYmY3NyxfMHgxNzliYTMsXzB4NDM3YTcxLF8weDFmNDMxOCxfMHgxZjZiMjY9W10sXzB4NTEyMjcxPVtdLF8weDQwNmNmMixfMHgyNTJhZTQ9dGhpc1tfMHg0ZDIyZjIoMHgxM2IpXShfMHgxYjY2MDQpLF8weDNlMDRhNT1fMHgyNTJhZTQ9PT1fMHg0ZDIyZjIoMHgxYWMpLF8weDJhYmIwYT0hMHgxLF8weDQ4MjhhMT1fMHgyNTJhZTQ9PT1fMHg0ZDIyZjIoMHgxOTgpLF8weDM0ZmYyMz10aGlzWydfaXNQcmltaXRpdmVUeXBlJ10oXzB4MjUyYWU0KSxfMHgzODA2MDc9dGhpc1tfMHg0ZDIyZjIoMHgxNTgpXShfMHgyNTJhZTQpLF8weDY3OWQ3Zj1fMHgzNGZmMjN8fF8weDM4MDYwNyxfMHgzN2E1ZDU9e30sXzB4MmU2MGYzPTB4MCxfMHgyMjMwZjg9ITB4MSxfMHg2MDkzMjAsXzB4M2FjYjk5PS9eKChbMS05XXsxfVswLTldKil8MCkkLztpZihfMHgyODdiYTlbXzB4NGQyMmYyKDB4ZDgpXSl7aWYoXzB4M2UwNGE1KXtpZihfMHgxNzliYTM9XzB4MWI2NjA0WydsZW5ndGgnXSxfMHgxNzliYTM+XzB4Mjg3YmE5WydlbGVtZW50cyddKXtmb3IoXzB4NDM3YTcxPTB4MCxfMHgxZjQzMTg9XzB4Mjg3YmE5W18weDRkMjJmMigweDEzMCldLF8weDJhYmY3Nz1fMHg0MzdhNzE7XzB4MmFiZjc3PF8weDFmNDMxODtfMHgyYWJmNzcrKylfMHg1MTIyNzFbXzB4NGQyMmYyKDB4MWE2KV0oXzB4MTY2MmZhW18weDRkMjJmMigweDE3MildKF8weDFmNmIyNixfMHgxYjY2MDQsXzB4MjUyYWU0LF8weDJhYmY3NyxfMHgyODdiYTkpKTtfMHg1NWEyYmJbXzB4NGQyMmYyKDB4ZTkpXT0hMHgwO31lbHNle2ZvcihfMHg0MzdhNzE9MHgwLF8weDFmNDMxOD1fMHgxNzliYTMsXzB4MmFiZjc3PV8weDQzN2E3MTtfMHgyYWJmNzc8XzB4MWY0MzE4O18weDJhYmY3NysrKV8weDUxMjI3MVtfMHg0ZDIyZjIoMHgxYTYpXShfMHgxNjYyZmFbXzB4NGQyMmYyKDB4MTcyKV0oXzB4MWY2YjI2LF8weDFiNjYwNCxfMHgyNTJhZTQsXzB4MmFiZjc3LF8weDI4N2JhOSkpO31fMHgyODdiYTlbJ2F1dG9FeHBhbmRQcm9wZXJ0eUNvdW50J10rPV8weDUxMjI3MVtfMHg0ZDIyZjIoMHgxNTUpXTt9aWYoIShfMHgyNTJhZTQ9PT1fMHg0ZDIyZjIoMHgxN2UpfHxfMHgyNTJhZTQ9PT1fMHg0ZDIyZjIoMHgxMjEpKSYmIV8weDM0ZmYyMyYmXzB4MjUyYWU0IT09J1N0cmluZycmJl8weDI1MmFlNCE9PV8weDRkMjJmMigweDE0ZSkmJl8weDI1MmFlNCE9PV8weDRkMjJmMigweDE1OSkpe3ZhciBfMHg1YjFkY2U9XzB4MmQ5ODUyW18weDRkMjJmMigweDEyOSldfHxfMHgyODdiYTlbXzB4NGQyMmYyKDB4MTI5KV07aWYodGhpc1tfMHg0ZDIyZjIoMHgxODApXShfMHgxYjY2MDQpPyhfMHgyYWJmNzc9MHgwLF8weDFiNjYwNFtfMHg0ZDIyZjIoMHgxYTkpXShmdW5jdGlvbihfMHgxZWM1ZjUpe3ZhciBfMHgzYTExYjg9XzB4NGQyMmYyO2lmKF8weDJlNjBmMysrLF8weDI4N2JhOVtfMHgzYTExYjgoMHgxNTQpXSsrLF8weDJlNjBmMz5fMHg1YjFkY2Upe18weDIyMzBmOD0hMHgwO3JldHVybjt9aWYoIV8weDI4N2JhOVtfMHgzYTExYjgoMHgxNjApXSYmXzB4Mjg3YmE5W18weDNhMTFiOCgweGRlKV0mJl8weDI4N2JhOVtfMHgzYTExYjgoMHgxNTQpXT5fMHgyODdiYTlbJ2F1dG9FeHBhbmRMaW1pdCddKXtfMHgyMjMwZjg9ITB4MDtyZXR1cm47fV8weDUxMjI3MVsncHVzaCddKF8weDE2NjJmYVtfMHgzYTExYjgoMHgxNzIpXShfMHgxZjZiMjYsXzB4MWI2NjA0LF8weDNhMTFiOCgweGQwKSxfMHgyYWJmNzcrKyxfMHgyODdiYTksZnVuY3Rpb24oXzB4MjE1MmE2KXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gXzB4MjE1MmE2O307fShfMHgxZWM1ZjUpKSk7fSkpOnRoaXNbXzB4NGQyMmYyKDB4ZjMpXShfMHgxYjY2MDQpJiZfMHgxYjY2MDRbJ2ZvckVhY2gnXShmdW5jdGlvbihfMHgzNTJhYmIsXzB4MTUwYTAyKXt2YXIgXzB4MWVlOWE3PV8weDRkMjJmMjtpZihfMHgyZTYwZjMrKyxfMHgyODdiYTlbXzB4MWVlOWE3KDB4MTU0KV0rKyxfMHgyZTYwZjM+XzB4NWIxZGNlKXtfMHgyMjMwZjg9ITB4MDtyZXR1cm47fWlmKCFfMHgyODdiYTlbXzB4MWVlOWE3KDB4MTYwKV0mJl8weDI4N2JhOVsnYXV0b0V4cGFuZCddJiZfMHgyODdiYTlbJ2F1dG9FeHBhbmRQcm9wZXJ0eUNvdW50J10+XzB4Mjg3YmE5W18weDFlZTlhNygweDFhNyldKXtfMHgyMjMwZjg9ITB4MDtyZXR1cm47fXZhciBfMHgxZWFhODU9XzB4MTUwYTAyWyd0b1N0cmluZyddKCk7XzB4MWVhYTg1W18weDFlZTlhNygweDE1NSldPjB4NjQmJihfMHgxZWFhODU9XzB4MWVhYTg1W18weDFlZTlhNygweDFhNSldKDB4MCwweDY0KStfMHgxZWU5YTcoMHgxMzEpKSxfMHg1MTIyNzFbXzB4MWVlOWE3KDB4MWE2KV0oXzB4MTY2MmZhW18weDFlZTlhNygweDE3MildKF8weDFmNmIyNixfMHgxYjY2MDQsJ01hcCcsXzB4MWVhYTg1LF8weDI4N2JhOSxmdW5jdGlvbihfMHgzZmNkZDIpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBfMHgzZmNkZDI7fTt9KF8weDM1MmFiYikpKTt9KSwhXzB4MmFiYjBhKXt0cnl7Zm9yKF8weDQwNmNmMiBpbiBfMHgxYjY2MDQpaWYoIShfMHgzZTA0YTUmJl8weDNhY2I5OVsndGVzdCddKF8weDQwNmNmMikpJiYhdGhpc1tfMHg0ZDIyZjIoMHhjYyldKF8weDFiNjYwNCxfMHg0MDZjZjIsXzB4Mjg3YmE5KSl7aWYoXzB4MmU2MGYzKyssXzB4Mjg3YmE5WydhdXRvRXhwYW5kUHJvcGVydHlDb3VudCddKyssXzB4MmU2MGYzPl8weDViMWRjZSl7XzB4MjIzMGY4PSEweDA7YnJlYWs7fWlmKCFfMHgyODdiYTlbXzB4NGQyMmYyKDB4MTYwKV0mJl8weDI4N2JhOVtfMHg0ZDIyZjIoMHhkZSldJiZfMHgyODdiYTlbXzB4NGQyMmYyKDB4MTU0KV0+XzB4Mjg3YmE5W18weDRkMjJmMigweDFhNyldKXtfMHgyMjMwZjg9ITB4MDticmVhazt9XzB4NTEyMjcxW18weDRkMjJmMigweDFhNildKF8weDE2NjJmYVsnX2FkZE9iamVjdFByb3BlcnR5J10oXzB4MWY2YjI2LF8weDM3YTVkNSxfMHgxYjY2MDQsXzB4MjUyYWU0LF8weDQwNmNmMixfMHgyODdiYTkpKTt9fWNhdGNoe31pZihfMHgzN2E1ZDVbXzB4NGQyMmYyKDB4MTQ5KV09ITB4MCxfMHg0ODI4YTEmJihfMHgzN2E1ZDVbXzB4NGQyMmYyKDB4MTI4KV09ITB4MCksIV8weDIyMzBmOCl7dmFyIF8weDE0MmI3ZT1bXVsnY29uY2F0J10odGhpc1snX2dldE93blByb3BlcnR5TmFtZXMnXShfMHgxYjY2MDQpKVsnY29uY2F0J10odGhpc1tfMHg0ZDIyZjIoMHhjNildKF8weDFiNjYwNCkpO2ZvcihfMHgyYWJmNzc9MHgwLF8weDE3OWJhMz1fMHgxNDJiN2VbXzB4NGQyMmYyKDB4MTU1KV07XzB4MmFiZjc3PF8weDE3OWJhMztfMHgyYWJmNzcrKylpZihfMHg0MDZjZjI9XzB4MTQyYjdlW18weDJhYmY3N10sIShfMHgzZTA0YTUmJl8weDNhY2I5OVtfMHg0ZDIyZjIoMHgxOGQpXShfMHg0MDZjZjJbXzB4NGQyMmYyKDB4MTIzKV0oKSkpJiYhdGhpc1snX2JsYWNrbGlzdGVkUHJvcGVydHknXShfMHgxYjY2MDQsXzB4NDA2Y2YyLF8weDI4N2JhOSkmJiFfMHgzN2E1ZDVbXzB4NGQyMmYyKDB4MTA0KStfMHg0MDZjZjJbJ3RvU3RyaW5nJ10oKV0pe2lmKF8weDJlNjBmMysrLF8weDI4N2JhOVtfMHg0ZDIyZjIoMHgxNTQpXSsrLF8weDJlNjBmMz5fMHg1YjFkY2Upe18weDIyMzBmOD0hMHgwO2JyZWFrO31pZighXzB4Mjg3YmE5W18weDRkMjJmMigweDE2MCldJiZfMHgyODdiYTlbXzB4NGQyMmYyKDB4ZGUpXSYmXzB4Mjg3YmE5WydhdXRvRXhwYW5kUHJvcGVydHlDb3VudCddPl8weDI4N2JhOVsnYXV0b0V4cGFuZExpbWl0J10pe18weDIyMzBmOD0hMHgwO2JyZWFrO31fMHg1MTIyNzFbXzB4NGQyMmYyKDB4MWE2KV0oXzB4MTY2MmZhWydfYWRkT2JqZWN0UHJvcGVydHknXShfMHgxZjZiMjYsXzB4MzdhNWQ1LF8weDFiNjYwNCxfMHgyNTJhZTQsXzB4NDA2Y2YyLF8weDI4N2JhOSkpO319fX19aWYoXzB4NTVhMmJiW18weDRkMjJmMigweDE2MildPV8weDI1MmFlNCxfMHg2NzlkN2Y/KF8weDU1YTJiYlsndmFsdWUnXT1fMHgxYjY2MDRbXzB4NGQyMmYyKDB4MTUzKV0oKSx0aGlzWydfY2FwSWZTdHJpbmcnXShfMHgyNTJhZTQsXzB4NTVhMmJiLF8weDI4N2JhOSxfMHgyZDk4NTIpKTpfMHgyNTJhZTQ9PT1fMHg0ZDIyZjIoMHhlMyk/XzB4NTVhMmJiW18weDRkMjJmMigweDFiNCldPXRoaXNbXzB4NGQyMmYyKDB4Y2UpXVtfMHg0ZDIyZjIoMHgxODgpXShfMHgxYjY2MDQpOl8weDI1MmFlND09PV8weDRkMjJmMigweDE1OSk/XzB4NTVhMmJiW18weDRkMjJmMigweDFiNCldPV8weDFiNjYwNFsndG9TdHJpbmcnXSgpOl8weDI1MmFlND09PSdSZWdFeHAnP18weDU1YTJiYltfMHg0ZDIyZjIoMHgxYjQpXT10aGlzW18weDRkMjJmMigweDFhOCldW18weDRkMjJmMigweDE4OCldKF8weDFiNjYwNCk6XzB4MjUyYWU0PT09J3N5bWJvbCcmJnRoaXNbJ19TeW1ib2wnXT9fMHg1NWEyYmJbJ3ZhbHVlJ109dGhpc1tfMHg0ZDIyZjIoMHgxNTApXVtfMHg0ZDIyZjIoMHhmNyldWyd0b1N0cmluZyddW18weDRkMjJmMigweDE4OCldKF8weDFiNjYwNCk6IV8weDI4N2JhOVtfMHg0ZDIyZjIoMHhkOCldJiYhKF8weDI1MmFlND09PV8weDRkMjJmMigweDE3ZSl8fF8weDI1MmFlND09PV8weDRkMjJmMigweDEyMSkpJiYoZGVsZXRlIF8weDU1YTJiYltfMHg0ZDIyZjIoMHgxYjQpXSxfMHg1NWEyYmJbXzB4NGQyMmYyKDB4MTExKV09ITB4MCksXzB4MjIzMGY4JiYoXzB4NTVhMmJiW18weDRkMjJmMigweGZlKV09ITB4MCksXzB4NjA5MzIwPV8weDI4N2JhOVsnbm9kZSddWydjdXJyZW50J10sXzB4Mjg3YmE5W18weDRkMjJmMigweDE2OSldW18weDRkMjJmMigweDE1NyldPV8weDU1YTJiYix0aGlzW18weDRkMjJmMigweGM1KV0oXzB4NTVhMmJiLF8weDI4N2JhOSksXzB4NTEyMjcxW18weDRkMjJmMigweDE1NSldKXtmb3IoXzB4MmFiZjc3PTB4MCxfMHgxNzliYTM9XzB4NTEyMjcxWydsZW5ndGgnXTtfMHgyYWJmNzc8XzB4MTc5YmEzO18weDJhYmY3NysrKV8weDUxMjI3MVtfMHgyYWJmNzddKF8weDJhYmY3Nyk7fV8weDFmNmIyNltfMHg0ZDIyZjIoMHgxNTUpXSYmKF8weDU1YTJiYltfMHg0ZDIyZjIoMHgxMjkpXT1fMHgxZjZiMjYpO31jYXRjaChfMHg4NjI0NWUpe18weGM1YmUxNihfMHg4NjI0NWUsXzB4NTVhMmJiLF8weDI4N2JhOSk7fXJldHVybiB0aGlzW18weDRkMjJmMigweDE0ZCldKF8weDFiNjYwNCxfMHg1NWEyYmIpLHRoaXNbXzB4NGQyMmYyKDB4ZmQpXShfMHg1NWEyYmIsXzB4Mjg3YmE5KSxfMHgyODdiYTlbXzB4NGQyMmYyKDB4MTY5KV1bJ2N1cnJlbnQnXT1fMHg2MDkzMjAsXzB4Mjg3YmE5WydsZXZlbCddLS0sXzB4Mjg3YmE5W18weDRkMjJmMigweGRlKV09XzB4NWI4MzEyLF8weDI4N2JhOVtfMHg0ZDIyZjIoMHhkZSldJiZfMHgyODdiYTlbXzB4NGQyMmYyKDB4MWFkKV1bXzB4NGQyMmYyKDB4MTA2KV0oKSxfMHg1NWEyYmI7fVsnX2dldE93blByb3BlcnR5U3ltYm9scyddKF8weDViM2M5ZCl7dmFyIF8weDMwZWNlND1fMHg1MTJhMzc7cmV0dXJuIE9iamVjdFtfMHgzMGVjZTQoMHhmYSldP09iamVjdFtfMHgzMGVjZTQoMHhmYSldKF8weDViM2M5ZCk6W107fVtfMHg1MTJhMzcoMHgxODApXShfMHgyMGZhOTkpe3ZhciBfMHg0MDE2NWQ9XzB4NTEyYTM3O3JldHVybiEhKF8weDIwZmE5OSYmXzB4MTRhOGNjW18weDQwMTY1ZCgweGQwKV0mJnRoaXNbXzB4NDAxNjVkKDB4ZGEpXShfMHgyMGZhOTkpPT09XzB4NDAxNjVkKDB4ZmMpJiZfMHgyMGZhOTlbXzB4NDAxNjVkKDB4MWE5KV0pO31bXzB4NTEyYTM3KDB4Y2MpXShfMHgyM2RhMzIsXzB4NWY5YmJkLF8weDU2NTNlYil7dmFyIF8weDU1ZWNlND1fMHg1MTJhMzc7cmV0dXJuIF8weDU2NTNlYltfMHg1NWVjZTQoMHgxMzkpXT90eXBlb2YgXzB4MjNkYTMyW18weDVmOWJiZF09PSdmdW5jdGlvbic6ITB4MTt9W18weDUxMmEzNygweDEzYildKF8weDQxYWE3Yyl7dmFyIF8weDNhODBkMD1fMHg1MTJhMzcsXzB4MzM5MWVhPScnO3JldHVybiBfMHgzMzkxZWE9dHlwZW9mIF8weDQxYWE3YyxfMHgzMzkxZWE9PT1fMHgzYTgwZDAoMHgxOTQpP3RoaXNbXzB4M2E4MGQwKDB4ZGEpXShfMHg0MWFhN2MpPT09XzB4M2E4MGQwKDB4MTRhKT9fMHgzMzkxZWE9J2FycmF5Jzp0aGlzW18weDNhODBkMCgweGRhKV0oXzB4NDFhYTdjKT09PV8weDNhODBkMCgweDE5YSk/XzB4MzM5MWVhPV8weDNhODBkMCgweGUzKTp0aGlzWydfb2JqZWN0VG9TdHJpbmcnXShfMHg0MWFhN2MpPT09XzB4M2E4MGQwKDB4MTA4KT9fMHgzMzkxZWE9J2JpZ2ludCc6XzB4NDFhYTdjPT09bnVsbD9fMHgzMzkxZWE9J251bGwnOl8weDQxYWE3Y1tfMHgzYTgwZDAoMHhkZildJiYoXzB4MzM5MWVhPV8weDQxYWE3Y1snY29uc3RydWN0b3InXVtfMHgzYTgwZDAoMHhlNSldfHxfMHgzMzkxZWEpOl8weDMzOTFlYT09PV8weDNhODBkMCgweDEyMSkmJnRoaXNbJ19IVE1MQWxsQ29sbGVjdGlvbiddJiZfMHg0MWFhN2MgaW5zdGFuY2VvZiB0aGlzW18weDNhODBkMCgweDEwZCldJiYoXzB4MzM5MWVhPV8weDNhODBkMCgweDFhMSkpLF8weDMzOTFlYTt9W18weDUxMmEzNygweGRhKV0oXzB4MTUyMjMyKXt2YXIgXzB4NTBkYjE5PV8weDUxMmEzNztyZXR1cm4gT2JqZWN0Wydwcm90b3R5cGUnXVtfMHg1MGRiMTkoMHgxMjMpXVsnY2FsbCddKF8weDE1MjIzMik7fVtfMHg1MTJhMzcoMHhjNyldKF8weDFlMTc3Yyl7dmFyIF8weDFhNzk5Mz1fMHg1MTJhMzc7cmV0dXJuIF8weDFlMTc3Yz09PV8weDFhNzk5MygweDE5MSl8fF8weDFlMTc3Yz09PV8weDFhNzk5MygweGVjKXx8XzB4MWUxNzdjPT09J251bWJlcic7fVtfMHg1MTJhMzcoMHgxNTgpXShfMHg1NzFiNWIpe3ZhciBfMHgyYjMyMjM9XzB4NTEyYTM3O3JldHVybiBfMHg1NzFiNWI9PT1fMHgyYjMyMjMoMHgxMmIpfHxfMHg1NzFiNWI9PT0nU3RyaW5nJ3x8XzB4NTcxYjViPT09J051bWJlcic7fVtfMHg1MTJhMzcoMHgxNzIpXShfMHgxZGE5NjEsXzB4MjIzMDRjLF8weDI5M2YxZixfMHgzZGMzYjcsXzB4MWY4ZjdkLF8weDNmNTIxZSl7dmFyIF8weDQxNDU5MT10aGlzO3JldHVybiBmdW5jdGlvbihfMHgyOTQxMjIpe3ZhciBfMHhlMjA1N2E9XzB4MjE1MixfMHg0Y2FmNGU9XzB4MWY4ZjdkWydub2RlJ11bJ2N1cnJlbnQnXSxfMHgxN2M1Mzg9XzB4MWY4ZjdkW18weGUyMDU3YSgweDE2OSldW18weGUyMDU3YSgweGU4KV0sXzB4MTg5OWM4PV8weDFmOGY3ZFtfMHhlMjA1N2EoMHgxNjkpXVsncGFyZW50J107XzB4MWY4ZjdkW18weGUyMDU3YSgweDE2OSldWydwYXJlbnQnXT1fMHg0Y2FmNGUsXzB4MWY4ZjdkW18weGUyMDU3YSgweDE2OSldW18weGUyMDU3YSgweGU4KV09dHlwZW9mIF8weDNkYzNiNz09XzB4ZTIwNTdhKDB4MWIwKT9fMHgzZGMzYjc6XzB4Mjk0MTIyLF8weDFkYTk2MVsncHVzaCddKF8weDQxNDU5MVtfMHhlMjA1N2EoMHgxMGIpXShfMHgyMjMwNGMsXzB4MjkzZjFmLF8weDNkYzNiNyxfMHgxZjhmN2QsXzB4M2Y1MjFlKSksXzB4MWY4ZjdkW18weGUyMDU3YSgweDE2OSldW18weGUyMDU3YSgweGQ3KV09XzB4MTg5OWM4LF8weDFmOGY3ZFsnbm9kZSddW18weGUyMDU3YSgweGU4KV09XzB4MTdjNTM4O307fVtfMHg1MTJhMzcoMHhlMCldKF8weDQ5YjllNSxfMHgxNTJmZTEsXzB4NWFlYjc4LF8weDM2MTk4NixfMHg0ZWRmMjQsXzB4Mjc4OGJmLF8weDMxOWJmOSl7dmFyIF8weDM0ZDI1ND1fMHg1MTJhMzcsXzB4MWQwMGU4PXRoaXM7cmV0dXJuIF8weDE1MmZlMVtfMHgzNGQyNTQoMHgxMDQpK18weDRlZGYyNFtfMHgzNGQyNTQoMHgxMjMpXSgpXT0hMHgwLGZ1bmN0aW9uKF8weDVkMmNjKXt2YXIgXzB4NDE0OTNmPV8weDM0ZDI1NCxfMHgxMGQ0NGQ9XzB4Mjc4OGJmW18weDQxNDkzZigweDE2OSldW18weDQxNDkzZigweDE1NyldLF8weDEwMWZkOT1fMHgyNzg4YmZbXzB4NDE0OTNmKDB4MTY5KV1bXzB4NDE0OTNmKDB4ZTgpXSxfMHg0MmRlMzE9XzB4Mjc4OGJmWydub2RlJ11bXzB4NDE0OTNmKDB4ZDcpXTtfMHgyNzg4YmZbJ25vZGUnXVtfMHg0MTQ5M2YoMHhkNyldPV8weDEwZDQ0ZCxfMHgyNzg4YmZbXzB4NDE0OTNmKDB4MTY5KV1bXzB4NDE0OTNmKDB4ZTgpXT1fMHg1ZDJjYyxfMHg0OWI5ZTVbXzB4NDE0OTNmKDB4MWE2KV0oXzB4MWQwMGU4W18weDQxNDkzZigweDEwYildKF8weDVhZWI3OCxfMHgzNjE5ODYsXzB4NGVkZjI0LF8weDI3ODhiZixfMHgzMTliZjkpKSxfMHgyNzg4YmZbXzB4NDE0OTNmKDB4MTY5KV1bXzB4NDE0OTNmKDB4ZDcpXT1fMHg0MmRlMzEsXzB4Mjc4OGJmW18weDQxNDkzZigweDE2OSldW18weDQxNDkzZigweGU4KV09XzB4MTAxZmQ5O307fVsnX3Byb3BlcnR5J10oXzB4ZDgyZmM3LF8weDViZmFhMCxfMHg1Y2NlOWIsXzB4MTNjNDhhLF8weDU2NTYyOCl7dmFyIF8weDFmODZkYz1fMHg1MTJhMzcsXzB4Mzc3NDEzPXRoaXM7XzB4NTY1NjI4fHwoXzB4NTY1NjI4PWZ1bmN0aW9uKF8weGQyZGMzNixfMHg0MzczNjgpe3JldHVybiBfMHhkMmRjMzZbXzB4NDM3MzY4XTt9KTt2YXIgXzB4NThlMWM5PV8weDVjY2U5YltfMHgxZjg2ZGMoMHgxMjMpXSgpLF8weDEyNGY4ZT1fMHgxM2M0OGFbXzB4MWY4NmRjKDB4MTZhKV18fHt9LF8weDQ1N2E2NT1fMHgxM2M0OGFbJ2RlcHRoJ10sXzB4ZTFhZDk1PV8weDEzYzQ4YVtfMHgxZjg2ZGMoMHgxNjApXTt0cnl7dmFyIF8weDQ3ODRhYz10aGlzW18weDFmODZkYygweGYzKV0oXzB4ZDgyZmM3KSxfMHgzNWVhOWI9XzB4NThlMWM5O18weDQ3ODRhYyYmXzB4MzVlYTliWzB4MF09PT0nXFxcXHgyNycmJihfMHgzNWVhOWI9XzB4MzVlYTliW18weDFmODZkYygweDE3NSldKDB4MSxfMHgzNWVhOWJbXzB4MWY4NmRjKDB4MTU1KV0tMHgyKSk7dmFyIF8weDFjYWViMD1fMHgxM2M0OGFbXzB4MWY4NmRjKDB4MTZhKV09XzB4MTI0ZjhlW18weDFmODZkYygweDEwNCkrXzB4MzVlYTliXTtfMHgxY2FlYjAmJihfMHgxM2M0OGFbXzB4MWY4NmRjKDB4ZDgpXT1fMHgxM2M0OGFbJ2RlcHRoJ10rMHgxKSxfMHgxM2M0OGFbJ2lzRXhwcmVzc2lvblRvRXZhbHVhdGUnXT0hIV8weDFjYWViMDt2YXIgXzB4MzU5ZmFmPXR5cGVvZiBfMHg1Y2NlOWI9PV8weDFmODZkYygweGVlKSxfMHg1YzdmY2I9eyduYW1lJzpfMHgzNTlmYWZ8fF8weDQ3ODRhYz9fMHg1OGUxYzk6dGhpc1tfMHgxZjg2ZGMoMHhkMildKF8weDU4ZTFjOSl9O2lmKF8weDM1OWZhZiYmKF8weDVjN2ZjYltfMHgxZjg2ZGMoMHhlZSldPSEweDApLCEoXzB4NWJmYWEwPT09J2FycmF5J3x8XzB4NWJmYWEwPT09XzB4MWY4NmRjKDB4MTc2KSkpe3ZhciBfMHgxYzU5NzA9dGhpc1snX2dldE93blByb3BlcnR5RGVzY3JpcHRvciddKF8weGQ4MmZjNyxfMHg1Y2NlOWIpO2lmKF8weDFjNTk3MCYmKF8weDFjNTk3MFsnc2V0J10mJihfMHg1YzdmY2JbXzB4MWY4NmRjKDB4MTQyKV09ITB4MCksXzB4MWM1OTcwWydnZXQnXSYmIV8weDFjYWViMCYmIV8weDEzYzQ4YVsncmVzb2x2ZUdldHRlcnMnXSkpcmV0dXJuIF8weDVjN2ZjYlsnZ2V0dGVyJ109ITB4MCx0aGlzW18weDFmODZkYygweDEzNSldKF8weDVjN2ZjYixfMHgxM2M0OGEpLF8weDVjN2ZjYjt9dmFyIF8weDIzMDZhODt0cnl7XzB4MjMwNmE4PV8weDU2NTYyOChfMHhkODJmYzcsXzB4NWNjZTliKTt9Y2F0Y2goXzB4NGRhYTUzKXtyZXR1cm4gXzB4NWM3ZmNiPXsnbmFtZSc6XzB4NThlMWM5LCd0eXBlJzpfMHgxZjg2ZGMoMHgxYWEpLCdlcnJvcic6XzB4NGRhYTUzW18weDFmODZkYygweDE5YildfSx0aGlzW18weDFmODZkYygweDEzNSldKF8weDVjN2ZjYixfMHgxM2M0OGEpLF8weDVjN2ZjYjt9dmFyIF8weGM2NTM4PXRoaXNbXzB4MWY4NmRjKDB4MTNiKV0oXzB4MjMwNmE4KSxfMHgyNmU3Y2E9dGhpc1tfMHgxZjg2ZGMoMHhjNyldKF8weGM2NTM4KTtpZihfMHg1YzdmY2JbXzB4MWY4NmRjKDB4MTYyKV09XzB4YzY1MzgsXzB4MjZlN2NhKXRoaXNbXzB4MWY4NmRjKDB4MTM1KV0oXzB4NWM3ZmNiLF8weDEzYzQ4YSxfMHgyMzA2YTgsZnVuY3Rpb24oKXt2YXIgXzB4NTA1NWNlPV8weDFmODZkYztfMHg1YzdmY2JbXzB4NTA1NWNlKDB4MWI0KV09XzB4MjMwNmE4W18weDUwNTVjZSgweDE1MyldKCksIV8weDFjYWViMCYmXzB4Mzc3NDEzW18weDUwNTVjZSgweDE3MSldKF8weGM2NTM4LF8weDVjN2ZjYixfMHgxM2M0OGEse30pO30pO2Vsc2V7dmFyIF8weDFkOTkwZD1fMHgxM2M0OGFbJ2F1dG9FeHBhbmQnXSYmXzB4MTNjNDhhWydsZXZlbCddPF8weDEzYzQ4YVtfMHgxZjg2ZGMoMHgxMzQpXSYmXzB4MTNjNDhhW18weDFmODZkYygweDFhZCldW18weDFmODZkYygweDE2YyldKF8weDIzMDZhOCk8MHgwJiZfMHhjNjUzOCE9PV8weDFmODZkYygweDE5OCkmJl8weDEzYzQ4YVtfMHgxZjg2ZGMoMHgxNTQpXTxfMHgxM2M0OGFbXzB4MWY4NmRjKDB4MWE3KV07XzB4MWQ5OTBkfHxfMHgxM2M0OGFbXzB4MWY4NmRjKDB4MTNhKV08XzB4NDU3YTY1fHxfMHgxY2FlYjA/KHRoaXNbJ3NlcmlhbGl6ZSddKF8weDVjN2ZjYixfMHgyMzA2YTgsXzB4MTNjNDhhLF8weDFjYWViMHx8e30pLHRoaXNbXzB4MWY4NmRjKDB4MTRkKV0oXzB4MjMwNmE4LF8weDVjN2ZjYikpOnRoaXNbXzB4MWY4NmRjKDB4MTM1KV0oXzB4NWM3ZmNiLF8weDEzYzQ4YSxfMHgyMzA2YTgsZnVuY3Rpb24oKXt2YXIgXzB4MTQxOTFiPV8weDFmODZkYztfMHhjNjUzOD09PV8weDE0MTkxYigweDE3ZSl8fF8weGM2NTM4PT09XzB4MTQxOTFiKDB4MTIxKXx8KGRlbGV0ZSBfMHg1YzdmY2JbXzB4MTQxOTFiKDB4MWI0KV0sXzB4NWM3ZmNiWydjYXBwZWQnXT0hMHgwKTt9KTt9cmV0dXJuIF8weDVjN2ZjYjt9ZmluYWxseXtfMHgxM2M0OGFbXzB4MWY4NmRjKDB4MTZhKV09XzB4MTI0ZjhlLF8weDEzYzQ4YVtfMHgxZjg2ZGMoMHhkOCldPV8weDQ1N2E2NSxfMHgxM2M0OGFbJ2lzRXhwcmVzc2lvblRvRXZhbHVhdGUnXT1fMHhlMWFkOTU7fX1bXzB4NTEyYTM3KDB4MTcxKV0oXzB4MTgwZjkwLF8weDExZDc0NyxfMHgxNTRkZDgsXzB4MjE4OTNmKXt2YXIgXzB4NTY4MjVlPV8weDUxMmEzNyxfMHgxNzYwNTY9XzB4MjE4OTNmW18weDU2ODI1ZSgweDE5NyldfHxfMHgxNTRkZDhbJ3N0ckxlbmd0aCddO2lmKChfMHgxODBmOTA9PT1fMHg1NjgyNWUoMHhlYyl8fF8weDE4MGY5MD09PV8weDU2ODI1ZSgweGY1KSkmJl8weDExZDc0N1tfMHg1NjgyNWUoMHgxYjQpXSl7bGV0IF8weDFlNzA1Yz1fMHgxMWQ3NDdbXzB4NTY4MjVlKDB4MWI0KV1bXzB4NTY4MjVlKDB4MTU1KV07XzB4MTU0ZGQ4W18weDU2ODI1ZSgweDE1ZildKz1fMHgxZTcwNWMsXzB4MTU0ZGQ4W18weDU2ODI1ZSgweDE1ZildPl8weDE1NGRkOFtfMHg1NjgyNWUoMHgxMzIpXT8oXzB4MTFkNzQ3W18weDU2ODI1ZSgweDExMSldPScnLGRlbGV0ZSBfMHgxMWQ3NDdbXzB4NTY4MjVlKDB4MWI0KV0pOl8weDFlNzA1Yz5fMHgxNzYwNTYmJihfMHgxMWQ3NDdbXzB4NTY4MjVlKDB4MTExKV09XzB4MTFkNzQ3W18weDU2ODI1ZSgweDFiNCldWydzdWJzdHInXSgweDAsXzB4MTc2MDU2KSxkZWxldGUgXzB4MTFkNzQ3W18weDU2ODI1ZSgweDFiNCldKTt9fVtfMHg1MTJhMzcoMHhmMyldKF8weDNhOTg2Yil7dmFyIF8weDJlZjQwYj1fMHg1MTJhMzc7cmV0dXJuISEoXzB4M2E5ODZiJiZfMHgxNGE4Y2NbXzB4MmVmNDBiKDB4MTM4KV0mJnRoaXNbJ19vYmplY3RUb1N0cmluZyddKF8weDNhOTg2Yik9PT1fMHgyZWY0MGIoMHgxMzYpJiZfMHgzYTk4NmJbXzB4MmVmNDBiKDB4MWE5KV0pO31bXzB4NTEyYTM3KDB4ZDIpXShfMHg0OTViY2Ype3ZhciBfMHgyNTJlN2Q9XzB4NTEyYTM3O2lmKF8weDQ5NWJjZltfMHgyNTJlN2QoMHgxODQpXSgvXlxcXFxkKyQvKSlyZXR1cm4gXzB4NDk1YmNmO3ZhciBfMHg0MDg5Mjg7dHJ5e18weDQwODkyOD1KU09OW18weDI1MmU3ZCgweDEzZCldKCcnK18weDQ5NWJjZik7fWNhdGNoe18weDQwODkyOD0nXFxcXHgyMicrdGhpc1tfMHgyNTJlN2QoMHhkYSldKF8weDQ5NWJjZikrJ1xcXFx4MjInO31yZXR1cm4gXzB4NDA4OTI4W18weDI1MmU3ZCgweDE4NCldKC9eXFxcIihbYS16QS1aX11bYS16QS1aXzAtOV0qKVxcXCIkLyk/XzB4NDA4OTI4PV8weDQwODkyOFsnc3Vic3RyJ10oMHgxLF8weDQwODkyOFtfMHgyNTJlN2QoMHgxNTUpXS0weDIpOl8weDQwODkyOD1fMHg0MDg5MjhbXzB4MjUyZTdkKDB4MTIyKV0oLycvZywnXFxcXHg1Y1xcXFx4MjcnKVtfMHgyNTJlN2QoMHgxMjIpXSgvXFxcXFxcXFxcXFwiL2csJ1xcXFx4MjInKVsncmVwbGFjZSddKC8oXlxcXCJ8XFxcIiQpL2csJ1xcXFx4MjcnKSxfMHg0MDg5Mjg7fVtfMHg1MTJhMzcoMHgxMzUpXShfMHgzY2UzMjcsXzB4YTA1ZmMwLF8weDI4NWJkNyxfMHgyOTg1ODUpe3ZhciBfMHgyZTFiNmI9XzB4NTEyYTM3O3RoaXNbXzB4MmUxYjZiKDB4YzUpXShfMHgzY2UzMjcsXzB4YTA1ZmMwKSxfMHgyOTg1ODUmJl8weDI5ODU4NSgpLHRoaXNbJ19hZGRpdGlvbmFsTWV0YWRhdGEnXShfMHgyODViZDcsXzB4M2NlMzI3KSx0aGlzW18weDJlMWI2YigweGZkKV0oXzB4M2NlMzI3LF8weGEwNWZjMCk7fVtfMHg1MTJhMzcoMHhjNSldKF8weDFkZjVjYixfMHgxZTYwMGUpe3ZhciBfMHg1Njk1MjQ9XzB4NTEyYTM3O3RoaXNbXzB4NTY5NTI0KDB4ZTcpXShfMHgxZGY1Y2IsXzB4MWU2MDBlKSx0aGlzW18weDU2OTUyNCgweDE5NSldKF8weDFkZjVjYixfMHgxZTYwMGUpLHRoaXNbXzB4NTY5NTI0KDB4YzkpXShfMHgxZGY1Y2IsXzB4MWU2MDBlKSx0aGlzW18weDU2OTUyNCgweDEwOSldKF8weDFkZjVjYixfMHgxZTYwMGUpO31bXzB4NTEyYTM3KDB4ZTcpXShfMHg0YTMyZDAsXzB4MzY1ZDE5KXt9Wydfc2V0Tm9kZVF1ZXJ5UGF0aCddKF8weDhlMjllZSxfMHgxOTY5ZGIpe31bJ19zZXROb2RlTGFiZWwnXShfMHg5NTdmNTQsXzB4MzA0M2ZlKXt9W18weDUxMmEzNygweDE3NCldKF8weDRmMjQ0ZCl7dmFyIF8weDMzMzA2ZT1fMHg1MTJhMzc7cmV0dXJuIF8weDRmMjQ0ZD09PXRoaXNbXzB4MzMzMDZlKDB4MWEyKV07fVsnX3RyZWVOb2RlUHJvcGVydGllc0FmdGVyRnVsbFZhbHVlJ10oXzB4MmYyZDY1LF8weDVhNzU1NCl7dmFyIF8weDFhOTY0OD1fMHg1MTJhMzc7dGhpc1tfMHgxYTk2NDgoMHhmMSldKF8weDJmMmQ2NSxfMHg1YTc1NTQpLHRoaXNbXzB4MWE5NjQ4KDB4MTFmKV0oXzB4MmYyZDY1KSxfMHg1YTc1NTRbJ3NvcnRQcm9wcyddJiZ0aGlzW18weDFhOTY0OCgweDE4MildKF8weDJmMmQ2NSksdGhpc1snX2FkZEZ1bmN0aW9uc05vZGUnXShfMHgyZjJkNjUsXzB4NWE3NTU0KSx0aGlzW18weDFhOTY0OCgweDE1YSldKF8weDJmMmQ2NSxfMHg1YTc1NTQpLHRoaXNbXzB4MWE5NjQ4KDB4MTQ1KV0oXzB4MmYyZDY1KTt9W18weDUxMmEzNygweDE0ZCldKF8weDIxODU5NixfMHgzOWJiOTkpe3ZhciBfMHhmNzExZGY9XzB4NTEyYTM3O3RyeXtfMHgyMTg1OTYmJnR5cGVvZiBfMHgyMTg1OTZbXzB4ZjcxMWRmKDB4MTU1KV09PV8weGY3MTFkZigweDFiMCkmJihfMHgzOWJiOTlbJ2xlbmd0aCddPV8weDIxODU5NltfMHhmNzExZGYoMHgxNTUpXSk7fWNhdGNoe31pZihfMHgzOWJiOTlbJ3R5cGUnXT09PV8weGY3MTFkZigweDFiMCl8fF8weDM5YmI5OVtfMHhmNzExZGYoMHgxNjIpXT09PSdOdW1iZXInKXtpZihpc05hTihfMHgzOWJiOTlbJ3ZhbHVlJ10pKV8weDM5YmI5OVtfMHhmNzExZGYoMHgxNDgpXT0hMHgwLGRlbGV0ZSBfMHgzOWJiOTlbXzB4ZjcxMWRmKDB4MWI0KV07ZWxzZSBzd2l0Y2goXzB4MzliYjk5W18weGY3MTFkZigweDFiNCldKXtjYXNlIE51bWJlcltfMHhmNzExZGYoMHgxOGMpXTpfMHgzOWJiOTlbXzB4ZjcxMWRmKDB4MTA1KV09ITB4MCxkZWxldGUgXzB4MzliYjk5W18weGY3MTFkZigweDFiNCldO2JyZWFrO2Nhc2UgTnVtYmVyW18weGY3MTFkZigweDEwMildOl8weDM5YmI5OVsnbmVnYXRpdmVJbmZpbml0eSddPSEweDAsZGVsZXRlIF8weDM5YmI5OVtfMHhmNzExZGYoMHgxYjQpXTticmVhaztjYXNlIDB4MDp0aGlzW18weGY3MTFkZigweDE5MCldKF8weDM5YmI5OVsndmFsdWUnXSkmJihfMHgzOWJiOTlbJ25lZ2F0aXZlWmVybyddPSEweDApO2JyZWFrO319ZWxzZSBfMHgzOWJiOTlbXzB4ZjcxMWRmKDB4MTYyKV09PT1fMHhmNzExZGYoMHgxOTgpJiZ0eXBlb2YgXzB4MjE4NTk2W18weGY3MTFkZigweGU1KV09PSdzdHJpbmcnJiZfMHgyMTg1OTZbXzB4ZjcxMWRmKDB4ZTUpXSYmXzB4MzliYjk5W18weGY3MTFkZigweGU1KV0mJl8weDIxODU5NltfMHhmNzExZGYoMHhlNSldIT09XzB4MzliYjk5WyduYW1lJ10mJihfMHgzOWJiOTlbXzB4ZjcxMWRmKDB4MTViKV09XzB4MjE4NTk2WyduYW1lJ10pO31bJ19pc05lZ2F0aXZlWmVybyddKF8weDE4NzhjMyl7cmV0dXJuIDB4MS9fMHgxODc4YzM9PT1OdW1iZXJbJ05FR0FUSVZFX0lORklOSVRZJ107fVtfMHg1MTJhMzcoMHgxODIpXShfMHg0ZjZiZGMpe3ZhciBfMHg1NGI0MzY9XzB4NTEyYTM3OyFfMHg0ZjZiZGNbXzB4NTRiNDM2KDB4MTI5KV18fCFfMHg0ZjZiZGNbXzB4NTRiNDM2KDB4MTI5KV1bXzB4NTRiNDM2KDB4MTU1KV18fF8weDRmNmJkY1sndHlwZSddPT09XzB4NTRiNDM2KDB4MWFjKXx8XzB4NGY2YmRjWyd0eXBlJ109PT0nTWFwJ3x8XzB4NGY2YmRjW18weDU0YjQzNigweDE2MildPT09J1NldCd8fF8weDRmNmJkY1tfMHg1NGI0MzYoMHgxMjkpXVtfMHg1NGI0MzYoMHgxNzgpXShmdW5jdGlvbihfMHg0NDEwZWYsXzB4MjBlNWFmKXt2YXIgXzB4MTU3Njg5PV8weDU0YjQzNixfMHgyZjQ2ODI9XzB4NDQxMGVmW18weDE1NzY4OSgweGU1KV1bXzB4MTU3Njg5KDB4MWIzKV0oKSxfMHgyNDlhMmY9XzB4MjBlNWFmWyduYW1lJ11bXzB4MTU3Njg5KDB4MWIzKV0oKTtyZXR1cm4gXzB4MmY0NjgyPF8weDI0OWEyZj8tMHgxOl8weDJmNDY4Mj5fMHgyNDlhMmY/MHgxOjB4MDt9KTt9WydfYWRkRnVuY3Rpb25zTm9kZSddKF8weDNlNGYwYyxfMHgxNjYyMGQpe3ZhciBfMHgzYzQ5MWQ9XzB4NTEyYTM3O2lmKCEoXzB4MTY2MjBkWydub0Z1bmN0aW9ucyddfHwhXzB4M2U0ZjBjW18weDNjNDkxZCgweDEyOSldfHwhXzB4M2U0ZjBjW18weDNjNDkxZCgweDEyOSldW18weDNjNDkxZCgweDE1NSldKSl7Zm9yKHZhciBfMHgzMjQyNGQ9W10sXzB4MTFjYmJlPVtdLF8weDRmZTdiND0weDAsXzB4M2Q4ZDBjPV8weDNlNGYwY1tfMHgzYzQ5MWQoMHgxMjkpXVtfMHgzYzQ5MWQoMHgxNTUpXTtfMHg0ZmU3YjQ8XzB4M2Q4ZDBjO18weDRmZTdiNCsrKXt2YXIgXzB4NDZjMzUxPV8weDNlNGYwY1tfMHgzYzQ5MWQoMHgxMjkpXVtfMHg0ZmU3YjRdO18weDQ2YzM1MVtfMHgzYzQ5MWQoMHgxNjIpXT09PV8weDNjNDkxZCgweDE5OCk/XzB4MzI0MjRkWydwdXNoJ10oXzB4NDZjMzUxKTpfMHgxMWNiYmVbXzB4M2M0OTFkKDB4MWE2KV0oXzB4NDZjMzUxKTt9aWYoISghXzB4MTFjYmJlW18weDNjNDkxZCgweDE1NSldfHxfMHgzMjQyNGRbXzB4M2M0OTFkKDB4MTU1KV08PTB4MSkpe18weDNlNGYwY1tfMHgzYzQ5MWQoMHgxMjkpXT1fMHgxMWNiYmU7dmFyIF8weDQ2ZDcwOT17J2Z1bmN0aW9uc05vZGUnOiEweDAsJ3Byb3BzJzpfMHgzMjQyNGR9O3RoaXNbJ19zZXROb2RlSWQnXShfMHg0NmQ3MDksXzB4MTY2MjBkKSx0aGlzW18weDNjNDkxZCgweGYxKV0oXzB4NDZkNzA5LF8weDE2NjIwZCksdGhpc1tfMHgzYzQ5MWQoMHgxMWYpXShfMHg0NmQ3MDkpLHRoaXNbJ19zZXROb2RlUGVybWlzc2lvbnMnXShfMHg0NmQ3MDksXzB4MTY2MjBkKSxfMHg0NmQ3MDlbJ2lkJ10rPSdcXFxceDIwZicsXzB4M2U0ZjBjW18weDNjNDkxZCgweDEyOSldW18weDNjNDkxZCgweDExOSldKF8weDQ2ZDcwOSk7fX19W18weDUxMmEzNygweDE1YSldKF8weDMwOTkxNixfMHgzMWFkYzUpe31bXzB4NTEyYTM3KDB4MTFmKV0oXzB4MzNjMDFkKXt9W18weDUxMmEzNygweGNmKV0oXzB4MmYxNGVkKXt2YXIgXzB4MjljYWY5PV8weDUxMmEzNztyZXR1cm4gQXJyYXlbXzB4MjljYWY5KDB4MTllKV0oXzB4MmYxNGVkKXx8dHlwZW9mIF8weDJmMTRlZD09XzB4MjljYWY5KDB4MTk0KSYmdGhpc1snX29iamVjdFRvU3RyaW5nJ10oXzB4MmYxNGVkKT09PV8weDI5Y2FmOSgweDE0YSk7fVtfMHg1MTJhMzcoMHgxMDkpXShfMHgzZDJiMzUsXzB4NWEyYWFlKXt9W18weDUxMmEzNygweDE0NSldKF8weDVlODc0OSl7dmFyIF8weDFlYzkwYz1fMHg1MTJhMzc7ZGVsZXRlIF8weDVlODc0OVtfMHgxZWM5MGMoMHgxODkpXSxkZWxldGUgXzB4NWU4NzQ5W18weDFlYzkwYygweGNiKV0sZGVsZXRlIF8weDVlODc0OVtfMHgxZWM5MGMoMHgxOTMpXTt9Wydfc2V0Tm9kZUV4cHJlc3Npb25QYXRoJ10oXzB4M2VkZDNjLF8weDNlMmUwYyl7fVtfMHg1MTJhMzcoMHgxMDApXShfMHg1NmNmNmQpe3ZhciBfMHgyY2Y2M2E9XzB4NTEyYTM3O3JldHVybiBfMHg1NmNmNmQ/XzB4NTZjZjZkW18weDJjZjYzYSgweDE4NCldKHRoaXNbXzB4MmNmNjNhKDB4MTgzKV0pPydbJytfMHg1NmNmNmQrJ10nOl8weDU2Y2Y2ZFtfMHgyY2Y2M2EoMHgxODQpXSh0aGlzW18weDJjZjYzYSgweGYyKV0pPycuJytfMHg1NmNmNmQ6XzB4NTZjZjZkW18weDJjZjYzYSgweDE4NCldKHRoaXNbXzB4MmNmNjNhKDB4ZTEpXSk/J1snK18weDU2Y2Y2ZCsnXSc6J1tcXFxceDI3JytfMHg1NmNmNmQrJ1xcXFx4MjddJzonJzt9fWxldCBfMHhjYjYyNTU9bmV3IF8weDU2MTMwZCgpO2Z1bmN0aW9uIF8weDRhMjk1YShfMHg1MGRiMDAsXzB4NDVkYWE1LF8weGM1YWIyZCxfMHgxZmQ0YjgsXzB4Zjk0MzVmLF8weDUxYTA0Zil7dmFyIF8weDQ4MDFiNj1fMHg1MTJhMzc7bGV0IF8weDQwZGI0YSxfMHgxYTM1MTY7dHJ5e18weDFhMzUxNj1fMHgzOTk2NzgoKSxfMHg0MGRiNGE9XzB4NTg2ZWE0W18weDQ1ZGFhNV0sIV8weDQwZGI0YXx8XzB4MWEzNTE2LV8weDQwZGI0YVsndHMnXT4weDFmNCYmXzB4NDBkYjRhW18weDQ4MDFiNigweDE2NildJiZfMHg0MGRiNGFbXzB4NDgwMWI2KDB4MTRiKV0vXzB4NDBkYjRhWydjb3VudCddPDB4NjQ/KF8weDU4NmVhNFtfMHg0NWRhYTVdPV8weDQwZGI0YT17J2NvdW50JzoweDAsJ3RpbWUnOjB4MCwndHMnOl8weDFhMzUxNn0sXzB4NTg2ZWE0W18weDQ4MDFiNigweDE4ZSldPXt9KTpfMHgxYTM1MTYtXzB4NTg2ZWE0W18weDQ4MDFiNigweDE4ZSldWyd0cyddPjB4MzImJl8weDU4NmVhNFtfMHg0ODAxYjYoMHgxOGUpXVtfMHg0ODAxYjYoMHgxNjYpXSYmXzB4NTg2ZWE0W18weDQ4MDFiNigweDE4ZSldW18weDQ4MDFiNigweDE0YildL18weDU4NmVhNFtfMHg0ODAxYjYoMHgxOGUpXVtfMHg0ODAxYjYoMHgxNjYpXTwweDY0JiYoXzB4NTg2ZWE0W18weDQ4MDFiNigweDE4ZSldPXt9KTtsZXQgXzB4MTZiOTQyPVtdLF8weDM3ZTIwOD1fMHg0MGRiNGFbXzB4NDgwMWI2KDB4MTQwKV18fF8weDU4NmVhNFsnaGl0cyddW18weDQ4MDFiNigweDE0MCldP18weDFiMDcxNzpfMHgxNmEyMjIsXzB4NDI0NWU4PV8weDQ4ODdmMD0+e3ZhciBfMHgxMWUyYWI9XzB4NDgwMWI2O2xldCBfMHg1NGIwMzM9e307cmV0dXJuIF8weDU0YjAzM1tfMHgxMWUyYWIoMHgxMjkpXT1fMHg0ODg3ZjBbJ3Byb3BzJ10sXzB4NTRiMDMzW18weDExZTJhYigweDEzMCldPV8weDQ4ODdmMFsnZWxlbWVudHMnXSxfMHg1NGIwMzNbXzB4MTFlMmFiKDB4MTk3KV09XzB4NDg4N2YwW18weDExZTJhYigweDE5NyldLF8weDU0YjAzM1tfMHgxMWUyYWIoMHgxMzIpXT1fMHg0ODg3ZjBbXzB4MTFlMmFiKDB4MTMyKV0sXzB4NTRiMDMzW18weDExZTJhYigweDFhNyldPV8weDQ4ODdmMFtfMHgxMWUyYWIoMHgxYTcpXSxfMHg1NGIwMzNbXzB4MTFlMmFiKDB4MTM0KV09XzB4NDg4N2YwW18weDExZTJhYigweDEzNCldLF8weDU0YjAzM1snc29ydFByb3BzJ109ITB4MSxfMHg1NGIwMzNbXzB4MTFlMmFiKDB4MTM5KV09IV8weDU0YTg3MCxfMHg1NGIwMzNbXzB4MTFlMmFiKDB4ZDgpXT0weDEsXzB4NTRiMDMzW18weDExZTJhYigweDEzYSldPTB4MCxfMHg1NGIwMzNbJ2V4cElkJ109XzB4MTFlMmFiKDB4ZDEpLF8weDU0YjAzM1tfMHgxMWUyYWIoMHgxNmQpXT1fMHgxMWUyYWIoMHgxNjQpLF8weDU0YjAzM1snYXV0b0V4cGFuZCddPSEweDAsXzB4NTRiMDMzW18weDExZTJhYigweDFhZCldPVtdLF8weDU0YjAzM1tfMHgxMWUyYWIoMHgxNTQpXT0weDAsXzB4NTRiMDMzW18weDExZTJhYigweDFhYildPSEweDAsXzB4NTRiMDMzW18weDExZTJhYigweDE1ZildPTB4MCxfMHg1NGIwMzNbXzB4MTFlMmFiKDB4MTY5KV09eydjdXJyZW50Jzp2b2lkIDB4MCwncGFyZW50Jzp2b2lkIDB4MCwnaW5kZXgnOjB4MH0sXzB4NTRiMDMzO307Zm9yKHZhciBfMHgxMWRmODI9MHgwO18weDExZGY4MjxfMHhmOTQzNWZbJ2xlbmd0aCddO18weDExZGY4MisrKV8weDE2Yjk0MltfMHg0ODAxYjYoMHgxYTYpXShfMHhjYjYyNTVbXzB4NDgwMWI2KDB4MTI3KV0oeyd0aW1lTm9kZSc6XzB4NTBkYjAwPT09XzB4NDgwMWI2KDB4MTRiKXx8dm9pZCAweDB9LF8weGY5NDM1ZltfMHgxMWRmODJdLF8weDQyNDVlOChfMHgzN2UyMDgpLHt9KSk7aWYoXzB4NTBkYjAwPT09J3RyYWNlJyl7bGV0IF8weDIwZjAxMT1FcnJvcltfMHg0ODAxYjYoMHgxMzMpXTt0cnl7RXJyb3JbXzB4NDgwMWI2KDB4MTMzKV09MHgxLzB4MCxfMHgxNmI5NDJbXzB4NDgwMWI2KDB4MWE2KV0oXzB4Y2I2MjU1W18weDQ4MDFiNigweDEyNyldKHsnc3RhY2tOb2RlJzohMHgwfSxuZXcgRXJyb3IoKVtfMHg0ODAxYjYoMHgxNDcpXSxfMHg0MjQ1ZTgoXzB4MzdlMjA4KSx7J3N0ckxlbmd0aCc6MHgxLzB4MH0pKTt9ZmluYWxseXtFcnJvclsnc3RhY2tUcmFjZUxpbWl0J109XzB4MjBmMDExO319cmV0dXJueydtZXRob2QnOl8weDQ4MDFiNigweDExMiksJ3ZlcnNpb24nOl8weDVkZWE2MCwnYXJncyc6W3sndHMnOl8weGM1YWIyZCwnc2Vzc2lvbic6XzB4MWZkNGI4LCdhcmdzJzpfMHgxNmI5NDIsJ2lkJzpfMHg0NWRhYTUsJ2NvbnRleHQnOl8weDUxYTA0Zn1dfTt9Y2F0Y2goXzB4MWMyZWJkKXtyZXR1cm57J21ldGhvZCc6XzB4NDgwMWI2KDB4MTEyKSwndmVyc2lvbic6XzB4NWRlYTYwLCdhcmdzJzpbeyd0cyc6XzB4YzVhYjJkLCdzZXNzaW9uJzpfMHgxZmQ0YjgsJ2FyZ3MnOlt7J3R5cGUnOl8weDQ4MDFiNigweDFhYSksJ2Vycm9yJzpfMHgxYzJlYmQmJl8weDFjMmViZFtfMHg0ODAxYjYoMHgxOWIpXX1dLCdpZCc6XzB4NDVkYWE1LCdjb250ZXh0JzpfMHg1MWEwNGZ9XX07fWZpbmFsbHl7dHJ5e2lmKF8weDQwZGI0YSYmXzB4MWEzNTE2KXtsZXQgXzB4Mzk2Zjk2PV8weDM5OTY3OCgpO18weDQwZGI0YVtfMHg0ODAxYjYoMHgxNjYpXSsrLF8weDQwZGI0YVtfMHg0ODAxYjYoMHgxNGIpXSs9XzB4M2Y1ZDJkKF8weDFhMzUxNixfMHgzOTZmOTYpLF8weDQwZGI0YVsndHMnXT1fMHgzOTZmOTYsXzB4NTg2ZWE0W18weDQ4MDFiNigweDE4ZSldW18weDQ4MDFiNigweDE2NildKyssXzB4NTg2ZWE0W18weDQ4MDFiNigweDE4ZSldWyd0aW1lJ10rPV8weDNmNWQyZChfMHgxYTM1MTYsXzB4Mzk2Zjk2KSxfMHg1ODZlYTRbXzB4NDgwMWI2KDB4MThlKV1bJ3RzJ109XzB4Mzk2Zjk2LChfMHg0MGRiNGFbXzB4NDgwMWI2KDB4MTY2KV0+MHgzMnx8XzB4NDBkYjRhW18weDQ4MDFiNigweDE0YildPjB4NjQpJiYoXzB4NDBkYjRhWydyZWR1Y2VMaW1pdHMnXT0hMHgwKSwoXzB4NTg2ZWE0W18weDQ4MDFiNigweDE4ZSldW18weDQ4MDFiNigweDE2NildPjB4M2U4fHxfMHg1ODZlYTRbJ2hpdHMnXVsndGltZSddPjB4MTJjKSYmKF8weDU4NmVhNFtfMHg0ODAxYjYoMHgxOGUpXVtfMHg0ODAxYjYoMHgxNDApXT0hMHgwKTt9fWNhdGNoe319fXJldHVybiBfMHgxNGE4Y2NbXzB4NTEyYTM3KDB4MTAxKV07fSkoZ2xvYmFsVGhpcyxfMHg0M2NjYmYoMHhlYiksXzB4NDNjY2JmKDB4MWIxKSxfMHg0M2NjYmYoMHgxNjcpLF8weDQzY2NiZigweDE3YiksJzEuMC4wJyxfMHg0M2NjYmYoMHhmZiksXzB4NDNjY2JmKDB4MTg1KSxfMHg0M2NjYmYoMHgxODcpKTtmdW5jdGlvbiBfMHg1NzUwKCl7dmFyIF8weDUxZmNmMz1bJ3N0cmluZ2lmeScsJ2Rpc2FibGVkTG9nJywnNmlSenZRUicsJ3JlZHVjZUxpbWl0cycsJ3BvcnQnLCdzZXR0ZXInLCdyZWxvYWQnLCdTeW1ib2wnLCdfY2xlYW5Ob2RlJywndXJsJywnc3RhY2snLCduYW4nLCdfcF9sZW5ndGgnLCdbb2JqZWN0XFxcXHgyMEFycmF5XScsJ3RpbWUnLCdfbWF4Q29ubmVjdEF0dGVtcHRDb3VudCcsJ19hZGRpdGlvbmFsTWV0YWRhdGEnLCdCdWZmZXInLCczNlVHcUt2eCcsJ19TeW1ib2wnLCdlbGFwc2VkJywnX2Nvbm5lY3RpbmcnLCd2YWx1ZU9mJywnYXV0b0V4cGFuZFByb3BlcnR5Q291bnQnLCdsZW5ndGgnLCdub3cnLCdjdXJyZW50JywnX2lzUHJpbWl0aXZlV3JhcHBlclR5cGUnLCdiaWdpbnQnLCdfYWRkTG9hZE5vZGUnLCdmdW5jTmFtZScsJ2Nsb3NlJywnZGF0YScsJ0NvbnNvbGVcXFxceDIwTmluamFcXFxceDIwZmFpbGVkXFxcXHgyMHRvXFxcXHgyMHNlbmRcXFxceDIwbG9ncyxcXFxceDIwcmVmcmVzaGluZ1xcXFx4MjB0aGVcXFxceDIwcGFnZVxcXFx4MjBtYXlcXFxceDIwaGVscDtcXFxceDIwYWxzb1xcXFx4MjBzZWVcXFxceDIwJywnYWxsU3RyTGVuZ3RoJywnaXNFeHByZXNzaW9uVG9FdmFsdWF0ZScsJzE5MTI0MjhwZVVrWlMnLCd0eXBlJywnZ2V0T3duUHJvcGVydHlOYW1lcycsJ3Jvb3RfZXhwJywnNzA1NTNNa3dvVEknLCdjb3VudCcsXFxcImM6XFxcXFxcXFxVc2Vyc1xcXFxcXFxcQWRldXNcXFxcXFxcXC52c2NvZGVcXFxcXFxcXGV4dGVuc2lvbnNcXFxcXFxcXHdhbGxhYnlqcy5jb25zb2xlLW5pbmphLTAuMC4xODJcXFxcXFxcXG5vZGVfbW9kdWxlc1xcXCIsJ3BhdGhUb0ZpbGVVUkwnLCdub2RlJywnZXhwcmVzc2lvbnNUb0V2YWx1YXRlJywnd3M6Ly8nLCdpbmRleE9mJywncm9vdEV4cHJlc3Npb24nLCcyMTAwVGRvd2JhJywnX3JlY29ubmVjdFRpbWVvdXQnLCcxNzE0OTQ1ZmNwT09TJywnX2NhcElmU3RyaW5nJywnX2FkZFByb3BlcnR5Jywnb25lcnJvcicsJ19pc1VuZGVmaW5lZCcsJ3N1YnN0cicsJ0Vycm9yJywnX2FsbG93ZWRUb0Nvbm5lY3RPblNlbmQnLCdzb3J0JywnZmFpbGVkXFxcXHgyMHRvXFxcXHgyMGZpbmRcXFxceDIwYW5kXFxcXHgyMGxvYWRcXFxceDIwV2ViU29ja2V0JywnMTQ5WGJFU2pFJywnd2VicGFjaycsJzI3MmlYT2dXWScsJ19jb25uZWN0QXR0ZW1wdENvdW50JywnbnVsbCcsJ2pvaW4nLCdfaXNTZXQnLCdfd2ViU29ja2V0RXJyb3JEb2NzTGluaycsJ19zb3J0UHJvcHMnLCdfbnVtYmVyUmVnRXhwJywnbWF0Y2gnLFtcXFwibG9jYWxob3N0XFxcIixcXFwiMTI3LjAuMC4xXFxcIixcXFwiZXhhbXBsZS5jeXByZXNzLmlvXFxcIixcXFwiREVTS1RPUC02NVM4Q0xVXFxcIixcXFwiMTkyLjE2OC41Ni4xXFxcIixcXFwiMTkyLjE2OC4wLjdcXFwiXSwncmVhZHlTdGF0ZScsJycsJ2NhbGwnLCdfaGFzU3ltYm9sUHJvcGVydHlPbkl0c1BhdGgnLCdjb25zb2xlJywnaG9zdCcsJ1BPU0lUSVZFX0lORklOSVRZJywndGVzdCcsJ2hpdHMnLCdmYWlsZWRcXFxceDIwdG9cXFxceDIwY29ubmVjdFxcXFx4MjB0b1xcXFx4MjBob3N0OlxcXFx4MjAnLCdfaXNOZWdhdGl2ZVplcm8nLCdib29sZWFuJywnaHR0cHM6Ly90aW55dXJsLmNvbS8zN3g4Yjc5dCcsJ19oYXNNYXBPbkl0c1BhdGgnLCdvYmplY3QnLCdfc2V0Tm9kZVF1ZXJ5UGF0aCcsJ3dhcm4nLCdzdHJMZW5ndGgnLCdmdW5jdGlvbicsJ19XZWJTb2NrZXRDbGFzcycsJ1tvYmplY3RcXFxceDIwRGF0ZV0nLCdtZXNzYWdlJywnX3NvY2tldCcsJ29uY2xvc2UnLCdpc0FycmF5JywnMzcwNDY5Y01LQ0xCJywnaW5jbHVkZXMnLCdIVE1MQWxsQ29sbGVjdGlvbicsJ191bmRlZmluZWQnLCdoYXNPd25Qcm9wZXJ0eScsJzpsb2dQb2ludElkOicsJ3NsaWNlJywncHVzaCcsJ2F1dG9FeHBhbmRMaW1pdCcsJ19yZWdFeHBUb1N0cmluZycsJ2ZvckVhY2gnLCd1bmtub3duJywncmVzb2x2ZUdldHRlcnMnLCdhcnJheScsJ2F1dG9FeHBhbmRQcmV2aW91c09iamVjdHMnLCdwcm9jZXNzJywnYmluZCcsJ251bWJlcicsJzYxNDQyJywnaHJ0aW1lJywndG9Mb3dlckNhc2UnLCd2YWx1ZScsJ3VucmVmJywnV2ViU29ja2V0JywnX3RyZWVOb2RlUHJvcGVydGllc0JlZm9yZUZ1bGxWYWx1ZScsJ19nZXRPd25Qcm9wZXJ0eVN5bWJvbHMnLCdfaXNQcmltaXRpdmVUeXBlJywnXFxcXHgyMGJyb3dzZXInLCdfc2V0Tm9kZUV4cHJlc3Npb25QYXRoJywnZGVmYXVsdCcsJ19oYXNTZXRPbkl0c1BhdGgnLCdfYmxhY2tsaXN0ZWRQcm9wZXJ0eScsJ21hcCcsJ19kYXRlVG9TdHJpbmcnLCdfaXNBcnJheScsJ1NldCcsJ3Jvb3RfZXhwX2lkJywnX3Byb3BlcnR5TmFtZScsJ19jb25uZWN0VG9Ib3N0Tm93JywnX2luQnJvd3NlcicsJzE0NjQ1NThid0NJdmwnLCdwZXJmX2hvb2tzJywncGFyZW50JywnZGVwdGgnLCdhc3RybycsJ19vYmplY3RUb1N0cmluZycsJ251eHQnLCdnZXRQcm90b3R5cGVPZicsJ19jb25zb2xlX25pbmphX3Nlc3Npb24nLCdhdXRvRXhwYW5kJywnY29uc3RydWN0b3InLCdfYWRkT2JqZWN0UHJvcGVydHknLCdfcXVvdGVkUmVnRXhwJywnb25vcGVuJywnZGF0ZScsJ25vZGVNb2R1bGVzJywnbmFtZScsJ19kaXNwb3NlV2Vic29ja2V0JywnX3NldE5vZGVJZCcsJ2luZGV4JywnY2FwcGVkRWxlbWVudHMnLCdwYXJzZScsJzEyNy4wLjAuMScsJ3N0cmluZycsJ3BlcmZvcm1hbmNlJywnc3ltYm9sJywnbG9jYXRpb24nLCdfZ2V0T3duUHJvcGVydHlOYW1lcycsJ19zZXROb2RlTGFiZWwnLCdfa2V5U3RyUmVnRXhwJywnX2lzTWFwJywnZ2xvYmFsJywnU3RyaW5nJywnNEdLYlVacicsJ3Byb3RvdHlwZScsJ3NlbmQnLCdfV2ViU29ja2V0JywnZ2V0T3duUHJvcGVydHlTeW1ib2xzJywnQ29uc29sZVxcXFx4MjBOaW5qYVxcXFx4MjBmYWlsZWRcXFxceDIwdG9cXFxceDIwc2VuZFxcXFx4MjBsb2dzLFxcXFx4MjByZXN0YXJ0aW5nXFxcXHgyMHRoZVxcXFx4MjBwcm9jZXNzXFxcXHgyMG1heVxcXFx4MjBoZWxwO1xcXFx4MjBhbHNvXFxcXHgyMHNlZVxcXFx4MjAnLCdbb2JqZWN0XFxcXHgyMFNldF0nLCdfdHJlZU5vZGVQcm9wZXJ0aWVzQWZ0ZXJGdWxsVmFsdWUnLCdjYXBwZWRQcm9wcycsJzE2ODk1Mzc3NjA2MjEnLCdfcHJvcGVydHlBY2Nlc3NvcicsJ19jb25zb2xlX25pbmphJywnTkVHQVRJVkVfSU5GSU5JVFknLCdfYXR0ZW1wdFRvUmVjb25uZWN0U2hvcnRseScsJ19wXycsJ3Bvc2l0aXZlSW5maW5pdHknLCdwb3AnLCd0aW1lU3RhbXAnLCdbb2JqZWN0XFxcXHgyMEJpZ0ludF0nLCdfc2V0Tm9kZVBlcm1pc3Npb25zJywnZXJyb3InLCdfcHJvcGVydHknLCd2ZXJzaW9ucycsJ19IVE1MQWxsQ29sbGVjdGlvbicsJzYyMTQwZkJ1ZHhVJywncGF0aCcsJ2dldFdlYlNvY2tldENsYXNzJywnY2FwcGVkJywnbG9nJywnbWV0aG9kJywnZGlzYWJsZWRUcmFjZScsJ3RyYWNlJywnYXJndW1lbnRSZXNvbHV0aW9uRXJyb3InLCdfd3MnLCdcXFxceDIwc2VydmVyJywndW5zaGlmdCcsJzEwTW9leWlKJywndGltZUVuZCcsJ2xvZ2dlclxcXFx4MjBmYWlsZWRcXFxceDIwdG9cXFxceDIwY29ubmVjdFxcXFx4MjB0b1xcXFx4MjBob3N0LFxcXFx4MjBzZWVcXFxceDIwJywnX2FsbG93ZWRUb1NlbmQnLCdfY29uc29sZU5pbmphQWxsb3dlZFRvU3RhcnQnLCdfc2V0Tm9kZUV4cGFuZGFibGVTdGF0ZScsJ19fZXMnKydNb2R1bGUnLCd1bmRlZmluZWQnLCdyZXBsYWNlJywndG9TdHJpbmcnLCdvbm1lc3NhZ2UnLCdsb2dnZXJcXFxceDIwZmFpbGVkXFxcXHgyMHRvXFxcXHgyMGNvbm5lY3RcXFxceDIwdG9cXFxceDIwaG9zdCcsJ2VudW1lcmFibGUnLCdzZXJpYWxpemUnLCdfcF9uYW1lJywncHJvcHMnLCd0aGVuJywnQm9vbGVhbicsJ2hvc3RuYW1lJywnX2Nvbm5lY3RlZCcsJzIzMzR5a0VTeEgnLCdnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InLCdlbGVtZW50cycsJy4uLicsJ3RvdGFsU3RyTGVuZ3RoJywnc3RhY2tUcmFjZUxpbWl0JywnYXV0b0V4cGFuZE1heERlcHRoJywnX3Byb2Nlc3NUcmVlTm9kZVJlc3VsdCcsJ1tvYmplY3RcXFxceDIwTWFwXScsJ19zZW5kRXJyb3JNZXNzYWdlJywnTWFwJywnbm9GdW5jdGlvbnMnLCdsZXZlbCcsJ190eXBlJywnd3MvaW5kZXguanMnXTtfMHg1NzUwPWZ1bmN0aW9uKCl7cmV0dXJuIF8weDUxZmNmMzt9O3JldHVybiBfMHg1NzUwKCk7fVwiKTt9Y2F0Y2goZSl7fX07ZnVuY3Rpb24gb29fb28oaSwuLi52KXt0cnl7b29fY20oKS5jb25zb2xlTG9nKGksIHYpO31jYXRjaChlKXt9IHJldHVybiB2fTtmdW5jdGlvbiBvb190cihpLC4uLnYpe3RyeXtvb19jbSgpLmNvbnNvbGVUcmFjZShpLCB2KTt9Y2F0Y2goZSl7fSByZXR1cm4gdn07ZnVuY3Rpb24gb29fdHMoKXt0cnl7b29fY20oKS5jb25zb2xlVGltZSgpO31jYXRjaChlKXt9fTtmdW5jdGlvbiBvb190ZSgpe3RyeXtvb19jbSgpLmNvbnNvbGVUaW1lRW5kKCk7fWNhdGNoKGUpe319Oy8qZXNsaW50IGVzbGludC1jb21tZW50cy9kaXNhYmxlLWVuYWJsZS1wYWlyOixlc2xpbnQtY29tbWVudHMvbm8tdW5saW1pdGVkLWRpc2FibGU6LGVzbGludC1jb21tZW50cy9uby1hZ2dyZWdhdGluZy1lbmFibGU6LGVzbGludC1jb21tZW50cy9uby1kdXBsaWNhdGUtZGlzYWJsZTosZXNsaW50LWNvbW1lbnRzL25vLXVudXNlZC1kaXNhYmxlOixlc2xpbnQtY29tbWVudHMvbm8tdW51c2VkLWVuYWJsZTosKi8iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIlxyXG5pbXBvcnQge3JlbmRlckhvbWVQYWdlfSBmcm9tIFwiLi9kaXNwbGF5Q29udHJvbGxlclwiXHJcblxyXG5yZW5kZXJIb21lUGFnZSgpXHJcblxyXG5cclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9