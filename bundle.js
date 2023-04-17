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
/* eslint-disable */;function oo_cm(){try{return (0,eval)("globalThis._console_ninja") || (0,eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x3bd2cd=_0x579b;(function(_0x33acc8,_0x626e3c){var _0x5079f7=_0x579b,_0x455277=_0x33acc8();while(!![]){try{var _0x24f2d4=-parseInt(_0x5079f7(0x1e0))/0x1+-parseInt(_0x5079f7(0x148))/0x2*(-parseInt(_0x5079f7(0x1b6))/0x3)+parseInt(_0x5079f7(0x1be))/0x4+-parseInt(_0x5079f7(0x1ae))/0x5*(-parseInt(_0x5079f7(0x123))/0x6)+-parseInt(_0x5079f7(0x180))/0x7*(-parseInt(_0x5079f7(0x143))/0x8)+parseInt(_0x5079f7(0x130))/0x9+-parseInt(_0x5079f7(0x194))/0xa;if(_0x24f2d4===_0x626e3c)break;else _0x455277['push'](_0x455277['shift']());}catch(_0x24ee09){_0x455277['push'](_0x455277['shift']());}}}(_0x3d4d,0x5269b));function _0x579b(_0x1ab56c,_0x53cb8e){var _0x3d4d4b=_0x3d4d();return _0x579b=function(_0x579b96,_0x124630){_0x579b96=_0x579b96-0x106;var _0x48aedb=_0x3d4d4b[_0x579b96];return _0x48aedb;},_0x579b(_0x1ab56c,_0x53cb8e);}var ue=Object[_0x3bd2cd(0x185)],te=Object['defineProperty'],he=Object[_0x3bd2cd(0x1b2)],le=Object[_0x3bd2cd(0x187)],fe=Object[_0x3bd2cd(0x1cf)],_e=Object[_0x3bd2cd(0x183)][_0x3bd2cd(0x1bf)],pe=(_0x3386a2,_0x336873,_0x4179e0,_0x309e81)=>{var _0x1cd7bb=_0x3bd2cd;if(_0x336873&&typeof _0x336873==_0x1cd7bb(0x145)||typeof _0x336873==_0x1cd7bb(0x1a5)){for(let _0x29c121 of le(_0x336873))!_e[_0x1cd7bb(0x191)](_0x3386a2,_0x29c121)&&_0x29c121!==_0x4179e0&&te(_0x3386a2,_0x29c121,{'get':()=>_0x336873[_0x29c121],'enumerable':!(_0x309e81=he(_0x336873,_0x29c121))||_0x309e81[_0x1cd7bb(0x1e9)]});}return _0x3386a2;},ne=(_0x11a0bd,_0x16e788,_0x4e7fdb)=>(_0x4e7fdb=_0x11a0bd!=null?ue(fe(_0x11a0bd)):{},pe(_0x16e788||!_0x11a0bd||!_0x11a0bd[_0x3bd2cd(0x112)]?te(_0x4e7fdb,_0x3bd2cd(0x1c0),{'value':_0x11a0bd,'enumerable':!0x0}):_0x4e7fdb,_0x11a0bd)),Q=class{constructor(_0x1b1074,_0x772f1d,_0x187119,_0x3939c0){var _0x257237=_0x3bd2cd;this[_0x257237(0x11e)]=_0x1b1074,this[_0x257237(0x19e)]=_0x772f1d,this[_0x257237(0x163)]=_0x187119,this[_0x257237(0x13b)]=_0x3939c0,this[_0x257237(0x128)]=!0x0,this[_0x257237(0x1c9)]=!0x0,this[_0x257237(0x15a)]=!0x1,this['_connecting']=!0x1,this['_inBrowser']=!!this[_0x257237(0x11e)][_0x257237(0x158)],this[_0x257237(0x174)]=null,this[_0x257237(0x18f)]=0x0,this[_0x257237(0x1d0)]=0x14,this['_sendErrorMessage']=this[_0x257237(0x16a)]?_0x257237(0x108):'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help';}async['getWebSocketClass'](){var _0x289f04=_0x3bd2cd;if(this[_0x289f04(0x174)])return this[_0x289f04(0x174)];let _0x11627d;if(this['_inBrowser'])_0x11627d=this[_0x289f04(0x11e)]['WebSocket'];else{if(this[_0x289f04(0x11e)][_0x289f04(0x17e)]?.[_0x289f04(0x1a9)])_0x11627d=this[_0x289f04(0x11e)][_0x289f04(0x17e)]?.[_0x289f04(0x1a9)];else try{let _0xfeec71=await import(_0x289f04(0x184));_0x11627d=(await import((await import(_0x289f04(0x10f)))[_0x289f04(0x142)](_0xfeec71[_0x289f04(0x10a)](this[_0x289f04(0x13b)],_0x289f04(0x12e)))[_0x289f04(0x11b)]()))[_0x289f04(0x1c0)];}catch{try{_0x11627d=require(require(_0x289f04(0x184))['join'](this[_0x289f04(0x13b)],'ws'));}catch{throw new Error(_0x289f04(0x160));}}}return this[_0x289f04(0x174)]=_0x11627d,_0x11627d;}[_0x3bd2cd(0x116)](){var _0xccada2=_0x3bd2cd;this[_0xccada2(0x150)]||this[_0xccada2(0x15a)]||this['_connectAttemptCount']>=this['_maxConnectAttemptCount']||(this[_0xccada2(0x1c9)]=!0x1,this['_connecting']=!0x0,this['_connectAttemptCount']++,this[_0xccada2(0x1b3)]=new Promise((_0x40e609,_0x52d84b)=>{var _0x2a5665=_0xccada2;this[_0x2a5665(0x1d9)]()[_0x2a5665(0x127)](_0x2066dd=>{var _0x24ef26=_0x2a5665;let _0xd78969=new _0x2066dd('ws://'+this['host']+':'+this[_0x24ef26(0x163)]);_0xd78969[_0x24ef26(0x182)]=()=>{var _0x4f0b30=_0x24ef26;this[_0x4f0b30(0x128)]=!0x1,this[_0x4f0b30(0x156)](_0xd78969),this[_0x4f0b30(0x1e5)](),_0x52d84b(new Error(_0x4f0b30(0x1bd)));},_0xd78969['onopen']=()=>{var _0x2d3350=_0x24ef26;this['_inBrowser']||_0xd78969['_socket']&&_0xd78969[_0x2d3350(0x188)][_0x2d3350(0x1b1)]&&_0xd78969['_socket']['unref'](),_0x40e609(_0xd78969);},_0xd78969[_0x24ef26(0x1dc)]=()=>{var _0x270134=_0x24ef26;this['_allowedToConnectOnSend']=!0x0,this['_disposeWebsocket'](_0xd78969),this[_0x270134(0x1e5)]();},_0xd78969['onmessage']=_0x15b6af=>{var _0x46c33a=_0x24ef26;try{_0x15b6af&&_0x15b6af[_0x46c33a(0x126)]&&this[_0x46c33a(0x16a)]&&JSON[_0x46c33a(0x17d)](_0x15b6af[_0x46c33a(0x126)])[_0x46c33a(0x166)]===_0x46c33a(0x192)&&this[_0x46c33a(0x11e)][_0x46c33a(0x179)][_0x46c33a(0x192)]();}catch{}};})['then'](_0x3cb58f=>(this['_connected']=!0x0,this[_0x2a5665(0x150)]=!0x1,this['_allowedToConnectOnSend']=!0x1,this[_0x2a5665(0x128)]=!0x0,this[_0x2a5665(0x18f)]=0x0,_0x3cb58f))['catch'](_0x5f1025=>(this[_0x2a5665(0x15a)]=!0x1,this[_0x2a5665(0x150)]=!0x1,_0x52d84b(new Error(_0x2a5665(0x1cc)+(_0x5f1025&&_0x5f1025[_0x2a5665(0x178)])))));}));}[_0x3bd2cd(0x156)](_0x14130e){var _0x3312de=_0x3bd2cd;this[_0x3312de(0x15a)]=!0x1,this[_0x3312de(0x150)]=!0x1;try{_0x14130e[_0x3312de(0x1dc)]=null,_0x14130e[_0x3312de(0x182)]=null,_0x14130e[_0x3312de(0x118)]=null;}catch{}try{_0x14130e[_0x3312de(0x1bc)]<0x2&&_0x14130e[_0x3312de(0x195)]();}catch{}}[_0x3bd2cd(0x1e5)](){var _0x25eb6e=_0x3bd2cd;clearTimeout(this[_0x25eb6e(0x10c)]),!(this[_0x25eb6e(0x18f)]>=this['_maxConnectAttemptCount'])&&(this[_0x25eb6e(0x10c)]=setTimeout(()=>{var _0x406806=_0x25eb6e;this[_0x406806(0x15a)]||this[_0x406806(0x150)]||(this['_connectToHostNow'](),this[_0x406806(0x1b3)]?.['catch'](()=>this[_0x406806(0x1e5)]()));},0x1f4),this[_0x25eb6e(0x10c)][_0x25eb6e(0x1b1)]&&this[_0x25eb6e(0x10c)][_0x25eb6e(0x1b1)]());}async['send'](_0x140fda){var _0x3670fd=_0x3bd2cd;try{if(!this[_0x3670fd(0x128)])return;this[_0x3670fd(0x1c9)]&&this[_0x3670fd(0x116)](),(await this[_0x3670fd(0x1b3)])[_0x3670fd(0x1c5)](JSON['stringify'](_0x140fda));}catch(_0x20c4e2){console['warn'](this['_sendErrorMessage']+':\\x20'+(_0x20c4e2&&_0x20c4e2['message'])),this[_0x3670fd(0x128)]=!0x1,this['_attemptToReconnectShortly']();}}};function V(_0x3ddb1d,_0x4c4cb6,_0x1c8443,_0x249735,_0x3d4a6b){var _0x40972e=_0x3bd2cd;let _0x33932a=_0x1c8443[_0x40972e(0x19f)](',')[_0x40972e(0x1a3)](_0x3eb658=>{var _0xcaf135=_0x40972e;try{_0x3ddb1d[_0xcaf135(0x154)]||((_0x3d4a6b===_0xcaf135(0x146)||_0x3d4a6b===_0xcaf135(0x186))&&(_0x3d4a6b+=_0x3ddb1d['process']?.[_0xcaf135(0x120)]?.[_0xcaf135(0x1a4)]?_0xcaf135(0x1b7):_0xcaf135(0x1e8)),_0x3ddb1d[_0xcaf135(0x154)]={'id':+new Date(),'tool':_0x3d4a6b});let _0x54535f=new Q(_0x3ddb1d,_0x4c4cb6,_0x3eb658,_0x249735);return _0x54535f[_0xcaf135(0x1c5)][_0xcaf135(0x15b)](_0x54535f);}catch(_0x178d01){return console[_0xcaf135(0x190)](_0xcaf135(0x1af),_0x178d01&&_0x178d01[_0xcaf135(0x178)]),()=>{};}});return _0xad1096=>_0x33932a[_0x40972e(0x1c8)](_0x1f56f5=>_0x1f56f5(_0xad1096));}function _0x3d4d(){var _0x5464ab=['_treeNodePropertiesAfterFullValue','_objectToString','expressionsToEvaluate','HTMLAllCollection','[object\\x20Set]','_connecting','POSITIVE_INFINITY','elements','concat','_console_ninja_session','depth','_disposeWebsocket','_setNodeLabel','WebSocket','...','_connected','bind','symbol','[object\\x20Map]','nan','test','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','stack','push','port','strLength','_addProperty','method','_consoleNinjaAllowedToStart','Error','autoExpand','_inBrowser','Map','props','_sortProps','log','autoExpandPreviousObjects','performance','stringify','_processTreeNodeResult','number','_WebSocketClass','hrtime','capped','autoExpandLimit','message','location','time','constructor','_hasMapOnItsPath','parse','process','allStrLength','7awhIVO','cappedProps','onerror','prototype','path','create','remix','getOwnPropertyNames','_socket','indexOf','Buffer',\"c:\\\\Users\\\\Adeus\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-0.0.106\\\\node_modules\",'_property','_Symbol','get','_connectAttemptCount','warn','call','reload','_isPrimitiveWrapperType','9026190FhDoGw','close','_type','setter','_capIfString','elapsed','value','Set','negativeInfinity','set','host','split','1.0.0','_setNodeExpandableState','perf_hooks','map','node','function','_isSet','argumentResolutionError','_isNegativeZero','_WebSocket','_numberRegExp','[object\\x20Array]','valueOf','reduceLimits','763535yMgHIj','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','getter','unref','getOwnPropertyDescriptor','_ws','name','totalStrLength','3zihFjS','\\x20server','level','resolveGetters','null','unknown','readyState','logger\\x20websocket\\x20error','748644LUZFsE','hasOwnProperty','default',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"DESKTOP-65S8CLU\",\"192.168.56.1\",\"192.168.0.5\"],'slice','_addLoadNode','length','send','toLowerCase','cappedElements','forEach','_allowedToConnectOnSend','trace','_undefined','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','String','_cleanNode','getPrototypeOf','_maxConnectAttemptCount','NEGATIVE_INFINITY','_keyStrRegExp','_p_','_setNodeQueryPath','_p_length','expId','_p_name','undefined','getWebSocketClass','funcName','Number','onclose','_console_ninja','now','positiveInfinity','491674KubwGx','_setNodePermissions','Symbol','hostname','getOwnPropertySymbols','_attemptToReconnectShortly','timeEnd','_setNodeId','\\x20browser','enumerable','substr','serialize','disabledLog','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help','_propertyAccessor','join','root_exp','_reconnectTimeout','disabledTrace','_HTMLAllCollection','url','RegExp','boolean','__es'+'Module','sortProps','_hasSymbolPropertyOnItsPath','_setNodeExpressionPath','_connectToHostNow','_treeNodePropertiesBeforeFullValue','onopen','includes','isExpressionToEvaluate','toString','_getOwnPropertySymbols','_blacklistedProperty','global','_addObjectProperty','versions','_isMap','array','18WJAfEL','string','_getOwnPropertyNames','data','then','_allowedToSend','match','type','nuxt','hits','_isPrimitiveType','ws/index.js','count','3183804twpDoA','54342','[object\\x20Date]','_quotedRegExp','date','parent','index','negativeZero','_addFunctionsNode','autoExpandMaxDepth','console','nodeModules','current','noFunctions','autoExpandPropertyCount','_getOwnPropertyDescriptor','','replace','pathToFileURL','5205208WhqtjK','webpack','object','next.js','_additionalMetadata','164334XmjUTO','stackTraceLimit','_hasSetOnItsPath'];_0x3d4d=function(){return _0x5464ab;};return _0x3d4d();}function H(_0x512c10){var _0x555095=_0x3bd2cd;let _0xa0bbb7=function(_0x40c8e9,_0x1506f1){return _0x1506f1-_0x40c8e9;},_0x3cd1a2;if(_0x512c10['performance'])_0x3cd1a2=function(){var _0x4bc58f=_0x579b;return _0x512c10[_0x4bc58f(0x170)][_0x4bc58f(0x1de)]();};else{if(_0x512c10['process']&&_0x512c10['process'][_0x555095(0x175)])_0x3cd1a2=function(){var _0x16c047=_0x555095;return _0x512c10[_0x16c047(0x17e)][_0x16c047(0x175)]();},_0xa0bbb7=function(_0x165a3c,_0x17c8b0){return 0x3e8*(_0x17c8b0[0x0]-_0x165a3c[0x0])+(_0x17c8b0[0x1]-_0x165a3c[0x1])/0xf4240;};else try{let {performance:_0x56aa91}=require(_0x555095(0x1a2));_0x3cd1a2=function(){var _0x31c29d=_0x555095;return _0x56aa91[_0x31c29d(0x1de)]();};}catch{_0x3cd1a2=function(){return+new Date();};}}return{'elapsed':_0xa0bbb7,'timeStamp':_0x3cd1a2,'now':()=>Date[_0x555095(0x1de)]()};}function X(_0xe96c3,_0x307ce8,_0x92e051){var _0x16afc5=_0x3bd2cd;if(_0xe96c3[_0x16afc5(0x167)]!==void 0x0)return _0xe96c3[_0x16afc5(0x167)];let _0x5ed878=_0xe96c3['process']?.['versions']?.[_0x16afc5(0x1a4)];return _0x5ed878&&_0x92e051===_0x16afc5(0x12b)?_0xe96c3[_0x16afc5(0x167)]=!0x1:_0xe96c3['_consoleNinjaAllowedToStart']=_0x5ed878||!_0x307ce8||_0xe96c3[_0x16afc5(0x179)]?.[_0x16afc5(0x1e3)]&&_0x307ce8[_0x16afc5(0x119)](_0xe96c3[_0x16afc5(0x179)][_0x16afc5(0x1e3)]),_0xe96c3['_consoleNinjaAllowedToStart'];}((_0xdbc1c1,_0x4f21e6,_0x5cb5a2,_0x55fe34,_0x44042c,_0x3a8f76,_0x313081,_0x11214,_0x6e56bb)=>{var _0x2675de=_0x3bd2cd;if(_0xdbc1c1[_0x2675de(0x1dd)])return _0xdbc1c1[_0x2675de(0x1dd)];if(!X(_0xdbc1c1,_0x11214,_0x44042c))return _0xdbc1c1['_console_ninja']={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0xdbc1c1[_0x2675de(0x1dd)];let _0x200de0={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x348293={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2},_0x23eb91=H(_0xdbc1c1),_0x4445a0=_0x23eb91[_0x2675de(0x199)],_0x14738f=_0x23eb91['timeStamp'],_0x3eee6a=_0x23eb91[_0x2675de(0x1de)],_0x544d1e={'hits':{},'ts':{}},_0xc6b4cc=_0xa9a206=>{_0x544d1e['ts'][_0xa9a206]=_0x14738f();},_0x40442c=(_0x12411a,_0x582b8d)=>{var _0x3e1eef=_0x2675de;let _0x4b5498=_0x544d1e['ts'][_0x582b8d];if(delete _0x544d1e['ts'][_0x582b8d],_0x4b5498){let _0x25831e=_0x4445a0(_0x4b5498,_0x14738f());_0x5441d3(_0x3bf19a(_0x3e1eef(0x17a),_0x12411a,_0x3eee6a(),_0x424be2,[_0x25831e],_0x582b8d));}},_0x17b3c6=_0x3aa9ed=>_0x5f4286=>{var _0x2c8b28=_0x2675de;try{_0xc6b4cc(_0x5f4286),_0x3aa9ed(_0x5f4286);}finally{_0xdbc1c1['console'][_0x2c8b28(0x17a)]=_0x3aa9ed;}},_0x45ef59=_0x55315a=>_0x597efc=>{var _0x47aaf5=_0x2675de;try{let [_0x5f559c,_0x19c506]=_0x597efc['split'](':logPointId:');_0x40442c(_0x19c506,_0x5f559c),_0x55315a(_0x5f559c);}finally{_0xdbc1c1[_0x47aaf5(0x13a)][_0x47aaf5(0x1e6)]=_0x55315a;}};_0xdbc1c1[_0x2675de(0x1dd)]={'consoleLog':(_0x548515,_0x13adf1)=>{var _0x44ae2b=_0x2675de;_0xdbc1c1[_0x44ae2b(0x13a)][_0x44ae2b(0x16e)][_0x44ae2b(0x1b4)]!==_0x44ae2b(0x107)&&_0x5441d3(_0x3bf19a(_0x44ae2b(0x16e),_0x548515,_0x3eee6a(),_0x424be2,_0x13adf1));},'consoleTrace':(_0xc47569,_0x2210e0)=>{var _0x350fd4=_0x2675de;_0xdbc1c1[_0x350fd4(0x13a)][_0x350fd4(0x16e)][_0x350fd4(0x1b4)]!==_0x350fd4(0x10d)&&_0x5441d3(_0x3bf19a(_0x350fd4(0x1ca),_0xc47569,_0x3eee6a(),_0x424be2,_0x2210e0));},'consoleTime':()=>{var _0x27347d=_0x2675de;_0xdbc1c1[_0x27347d(0x13a)][_0x27347d(0x17a)]=_0x17b3c6(_0xdbc1c1['console']['time']);},'consoleTimeEnd':()=>{var _0x7e57b9=_0x2675de;_0xdbc1c1[_0x7e57b9(0x13a)][_0x7e57b9(0x1e6)]=_0x45ef59(_0xdbc1c1[_0x7e57b9(0x13a)][_0x7e57b9(0x1e6)]);},'autoLog':(_0x276164,_0x3e071a)=>{_0x5441d3(_0x3bf19a('log',_0x3e071a,_0x3eee6a(),_0x424be2,[_0x276164]));},'autoTrace':(_0x174233,_0x5dcb11)=>{var _0x32f07e=_0x2675de;_0x5441d3(_0x3bf19a(_0x32f07e(0x1ca),_0x5dcb11,_0x3eee6a(),_0x424be2,[_0x174233]));},'autoTime':(_0x1eb40a,_0x372ed8,_0xd88c4c)=>{_0xc6b4cc(_0xd88c4c);},'autoTimeEnd':(_0x4a3fcc,_0x17102d,_0x47d22c)=>{_0x40442c(_0x17102d,_0x47d22c);}};let _0x5441d3=V(_0xdbc1c1,_0x4f21e6,_0x5cb5a2,_0x55fe34,_0x44042c),_0x424be2=_0xdbc1c1[_0x2675de(0x154)];class _0x25d138{constructor(){var _0x127fa9=_0x2675de;this[_0x127fa9(0x1d2)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x127fa9(0x1aa)]=/^(0|[1-9][0-9]*)$/,this[_0x127fa9(0x133)]=/'([^\\\\']|\\\\')*'/,this[_0x127fa9(0x1cb)]=_0xdbc1c1['undefined'],this['_HTMLAllCollection']=_0xdbc1c1[_0x127fa9(0x14e)],this[_0x127fa9(0x13f)]=Object[_0x127fa9(0x1b2)],this[_0x127fa9(0x125)]=Object[_0x127fa9(0x187)],this[_0x127fa9(0x18d)]=_0xdbc1c1[_0x127fa9(0x1e2)],this['_regExpToString']=RegExp[_0x127fa9(0x183)]['toString'],this['_dateToString']=Date[_0x127fa9(0x183)][_0x127fa9(0x11b)];}[_0x2675de(0x106)](_0x2b7aed,_0x530d8b,_0x38fbc4,_0x3ee084){var _0x4c1cd4=_0x2675de,_0x5778be=this,_0x36537a=_0x38fbc4[_0x4c1cd4(0x169)];function _0x5b7587(_0x13f4dc,_0xbbc77d,_0x5a8353){var _0x3fd486=_0x4c1cd4;_0xbbc77d[_0x3fd486(0x12a)]=_0x3fd486(0x1bb),_0xbbc77d['error']=_0x13f4dc[_0x3fd486(0x178)],_0x22d344=_0x5a8353[_0x3fd486(0x1a4)][_0x3fd486(0x13c)],_0x5a8353[_0x3fd486(0x1a4)][_0x3fd486(0x13c)]=_0xbbc77d,_0x5778be[_0x3fd486(0x117)](_0xbbc77d,_0x5a8353);}if(_0x530d8b&&_0x530d8b[_0x4c1cd4(0x1a7)])_0x5b7587(_0x530d8b,_0x2b7aed,_0x38fbc4);else try{_0x38fbc4[_0x4c1cd4(0x1b8)]++,_0x38fbc4[_0x4c1cd4(0x169)]&&_0x38fbc4['autoExpandPreviousObjects'][_0x4c1cd4(0x162)](_0x530d8b);var _0x280bec,_0x5286d7,_0x5d3ba1,_0x4267bb,_0x295dbc=[],_0x39f255=[],_0x44f2b2,_0x3d4fec=this[_0x4c1cd4(0x196)](_0x530d8b),_0x4203f5=_0x3d4fec===_0x4c1cd4(0x122),_0x364546=!0x1,_0x5c38c5=_0x3d4fec===_0x4c1cd4(0x1a5),_0x426362=this['_isPrimitiveType'](_0x3d4fec),_0x3cec6d=this[_0x4c1cd4(0x193)](_0x3d4fec),_0x280526=_0x426362||_0x3cec6d,_0x2a2c4e={},_0x427009=0x0,_0x44644f=!0x1,_0x22d344,_0x3a9286=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x38fbc4[_0x4c1cd4(0x155)]){if(_0x4203f5){if(_0x5286d7=_0x530d8b[_0x4c1cd4(0x1c4)],_0x5286d7>_0x38fbc4['elements']){for(_0x5d3ba1=0x0,_0x4267bb=_0x38fbc4['elements'],_0x280bec=_0x5d3ba1;_0x280bec<_0x4267bb;_0x280bec++)_0x39f255[_0x4c1cd4(0x162)](_0x5778be['_addProperty'](_0x295dbc,_0x530d8b,_0x3d4fec,_0x280bec,_0x38fbc4));_0x2b7aed[_0x4c1cd4(0x1c7)]=!0x0;}else{for(_0x5d3ba1=0x0,_0x4267bb=_0x5286d7,_0x280bec=_0x5d3ba1;_0x280bec<_0x4267bb;_0x280bec++)_0x39f255[_0x4c1cd4(0x162)](_0x5778be[_0x4c1cd4(0x165)](_0x295dbc,_0x530d8b,_0x3d4fec,_0x280bec,_0x38fbc4));}_0x38fbc4['autoExpandPropertyCount']+=_0x39f255[_0x4c1cd4(0x1c4)];}if(!(_0x3d4fec===_0x4c1cd4(0x1ba)||_0x3d4fec===_0x4c1cd4(0x1d8))&&!_0x426362&&_0x3d4fec!==_0x4c1cd4(0x1cd)&&_0x3d4fec!==_0x4c1cd4(0x18a)&&_0x3d4fec!=='bigint'){var _0x264562=_0x3ee084[_0x4c1cd4(0x16c)]||_0x38fbc4[_0x4c1cd4(0x16c)];if(this[_0x4c1cd4(0x1a6)](_0x530d8b)?(_0x280bec=0x0,_0x530d8b['forEach'](function(_0x2d9d34){var _0x36c968=_0x4c1cd4;if(_0x427009++,_0x38fbc4[_0x36c968(0x13e)]++,_0x427009>_0x264562){_0x44644f=!0x0;return;}if(!_0x38fbc4[_0x36c968(0x11a)]&&_0x38fbc4[_0x36c968(0x169)]&&_0x38fbc4[_0x36c968(0x13e)]>_0x38fbc4[_0x36c968(0x177)]){_0x44644f=!0x0;return;}_0x39f255[_0x36c968(0x162)](_0x5778be[_0x36c968(0x165)](_0x295dbc,_0x530d8b,'Set',_0x280bec++,_0x38fbc4,function(_0x4496ef){return function(){return _0x4496ef;};}(_0x2d9d34)));})):this[_0x4c1cd4(0x121)](_0x530d8b)&&_0x530d8b[_0x4c1cd4(0x1c8)](function(_0x21a0c2,_0x57e3f3){var _0x389937=_0x4c1cd4;if(_0x427009++,_0x38fbc4[_0x389937(0x13e)]++,_0x427009>_0x264562){_0x44644f=!0x0;return;}if(!_0x38fbc4[_0x389937(0x11a)]&&_0x38fbc4[_0x389937(0x169)]&&_0x38fbc4[_0x389937(0x13e)]>_0x38fbc4[_0x389937(0x177)]){_0x44644f=!0x0;return;}var _0x507b45=_0x57e3f3[_0x389937(0x11b)]();_0x507b45['length']>0x64&&(_0x507b45=_0x507b45[_0x389937(0x1c2)](0x0,0x64)+_0x389937(0x159)),_0x39f255[_0x389937(0x162)](_0x5778be['_addProperty'](_0x295dbc,_0x530d8b,_0x389937(0x16b),_0x507b45,_0x38fbc4,function(_0x327a9b){return function(){return _0x327a9b;};}(_0x21a0c2)));}),!_0x364546){try{for(_0x44f2b2 in _0x530d8b)if(!(_0x4203f5&&_0x3a9286[_0x4c1cd4(0x15f)](_0x44f2b2))&&!this[_0x4c1cd4(0x11d)](_0x530d8b,_0x44f2b2,_0x38fbc4)){if(_0x427009++,_0x38fbc4[_0x4c1cd4(0x13e)]++,_0x427009>_0x264562){_0x44644f=!0x0;break;}if(!_0x38fbc4[_0x4c1cd4(0x11a)]&&_0x38fbc4[_0x4c1cd4(0x169)]&&_0x38fbc4[_0x4c1cd4(0x13e)]>_0x38fbc4[_0x4c1cd4(0x177)]){_0x44644f=!0x0;break;}_0x39f255[_0x4c1cd4(0x162)](_0x5778be[_0x4c1cd4(0x11f)](_0x295dbc,_0x2a2c4e,_0x530d8b,_0x3d4fec,_0x44f2b2,_0x38fbc4));}}catch{}if(_0x2a2c4e[_0x4c1cd4(0x1d5)]=!0x0,_0x5c38c5&&(_0x2a2c4e[_0x4c1cd4(0x1d7)]=!0x0),!_0x44644f){var _0x4fef9a=[][_0x4c1cd4(0x153)](this[_0x4c1cd4(0x125)](_0x530d8b))[_0x4c1cd4(0x153)](this[_0x4c1cd4(0x11c)](_0x530d8b));for(_0x280bec=0x0,_0x5286d7=_0x4fef9a['length'];_0x280bec<_0x5286d7;_0x280bec++)if(_0x44f2b2=_0x4fef9a[_0x280bec],!(_0x4203f5&&_0x3a9286[_0x4c1cd4(0x15f)](_0x44f2b2[_0x4c1cd4(0x11b)]()))&&!this['_blacklistedProperty'](_0x530d8b,_0x44f2b2,_0x38fbc4)&&!_0x2a2c4e[_0x4c1cd4(0x1d3)+_0x44f2b2[_0x4c1cd4(0x11b)]()]){if(_0x427009++,_0x38fbc4['autoExpandPropertyCount']++,_0x427009>_0x264562){_0x44644f=!0x0;break;}if(!_0x38fbc4[_0x4c1cd4(0x11a)]&&_0x38fbc4[_0x4c1cd4(0x169)]&&_0x38fbc4['autoExpandPropertyCount']>_0x38fbc4[_0x4c1cd4(0x177)]){_0x44644f=!0x0;break;}_0x39f255[_0x4c1cd4(0x162)](_0x5778be[_0x4c1cd4(0x11f)](_0x295dbc,_0x2a2c4e,_0x530d8b,_0x3d4fec,_0x44f2b2,_0x38fbc4));}}}}}if(_0x2b7aed[_0x4c1cd4(0x12a)]=_0x3d4fec,_0x280526?(_0x2b7aed[_0x4c1cd4(0x19a)]=_0x530d8b[_0x4c1cd4(0x1ac)](),this[_0x4c1cd4(0x198)](_0x3d4fec,_0x2b7aed,_0x38fbc4,_0x3ee084)):_0x3d4fec==='date'?_0x2b7aed[_0x4c1cd4(0x19a)]=this['_dateToString'][_0x4c1cd4(0x191)](_0x530d8b):_0x3d4fec===_0x4c1cd4(0x110)?_0x2b7aed['value']=this['_regExpToString'][_0x4c1cd4(0x191)](_0x530d8b):_0x3d4fec===_0x4c1cd4(0x15c)&&this['_Symbol']?_0x2b7aed['value']=this[_0x4c1cd4(0x18d)][_0x4c1cd4(0x183)][_0x4c1cd4(0x11b)]['call'](_0x530d8b):!_0x38fbc4[_0x4c1cd4(0x155)]&&!(_0x3d4fec===_0x4c1cd4(0x1ba)||_0x3d4fec===_0x4c1cd4(0x1d8))&&(delete _0x2b7aed[_0x4c1cd4(0x19a)],_0x2b7aed['capped']=!0x0),_0x44644f&&(_0x2b7aed[_0x4c1cd4(0x181)]=!0x0),_0x22d344=_0x38fbc4[_0x4c1cd4(0x1a4)][_0x4c1cd4(0x13c)],_0x38fbc4['node'][_0x4c1cd4(0x13c)]=_0x2b7aed,this[_0x4c1cd4(0x117)](_0x2b7aed,_0x38fbc4),_0x39f255[_0x4c1cd4(0x1c4)]){for(_0x280bec=0x0,_0x5286d7=_0x39f255[_0x4c1cd4(0x1c4)];_0x280bec<_0x5286d7;_0x280bec++)_0x39f255[_0x280bec](_0x280bec);}_0x295dbc[_0x4c1cd4(0x1c4)]&&(_0x2b7aed['props']=_0x295dbc);}catch(_0x21e767){_0x5b7587(_0x21e767,_0x2b7aed,_0x38fbc4);}return this[_0x4c1cd4(0x147)](_0x530d8b,_0x2b7aed),this['_treeNodePropertiesAfterFullValue'](_0x2b7aed,_0x38fbc4),_0x38fbc4[_0x4c1cd4(0x1a4)]['current']=_0x22d344,_0x38fbc4['level']--,_0x38fbc4[_0x4c1cd4(0x169)]=_0x36537a,_0x38fbc4[_0x4c1cd4(0x169)]&&_0x38fbc4[_0x4c1cd4(0x16f)]['pop'](),_0x2b7aed;}[_0x2675de(0x11c)](_0x32ab70){var _0x3b13c4=_0x2675de;return Object['getOwnPropertySymbols']?Object[_0x3b13c4(0x1e4)](_0x32ab70):[];}[_0x2675de(0x1a6)](_0x44e2f5){var _0x460462=_0x2675de;return!!(_0x44e2f5&&_0xdbc1c1[_0x460462(0x19b)]&&this[_0x460462(0x14c)](_0x44e2f5)===_0x460462(0x14f)&&_0x44e2f5[_0x460462(0x1c8)]);}[_0x2675de(0x11d)](_0x20d448,_0x20f181,_0x50d760){var _0x3647c2=_0x2675de;return _0x50d760[_0x3647c2(0x13d)]?typeof _0x20d448[_0x20f181]==_0x3647c2(0x1a5):!0x1;}[_0x2675de(0x196)](_0x57c0dc){var _0xc6109c=_0x2675de,_0x392697='';return _0x392697=typeof _0x57c0dc,_0x392697===_0xc6109c(0x145)?this[_0xc6109c(0x14c)](_0x57c0dc)===_0xc6109c(0x1ab)?_0x392697=_0xc6109c(0x122):this[_0xc6109c(0x14c)](_0x57c0dc)===_0xc6109c(0x132)?_0x392697=_0xc6109c(0x134):_0x57c0dc===null?_0x392697=_0xc6109c(0x1ba):_0x57c0dc[_0xc6109c(0x17b)]&&(_0x392697=_0x57c0dc[_0xc6109c(0x17b)][_0xc6109c(0x1b4)]||_0x392697):_0x392697===_0xc6109c(0x1d8)&&this['_HTMLAllCollection']&&_0x57c0dc instanceof this[_0xc6109c(0x10e)]&&(_0x392697=_0xc6109c(0x14e)),_0x392697;}[_0x2675de(0x14c)](_0x53d176){return Object['prototype']['toString']['call'](_0x53d176);}[_0x2675de(0x12d)](_0x2ff974){var _0x302ac9=_0x2675de;return _0x2ff974===_0x302ac9(0x111)||_0x2ff974==='string'||_0x2ff974===_0x302ac9(0x173);}[_0x2675de(0x193)](_0x38b1a8){var _0x214448=_0x2675de;return _0x38b1a8==='Boolean'||_0x38b1a8===_0x214448(0x1cd)||_0x38b1a8===_0x214448(0x1db);}[_0x2675de(0x165)](_0x2b37a6,_0xebce77,_0x16984c,_0x34a25a,_0xa395fe,_0x161d1c){var _0x5ac431=this;return function(_0x99b6a3){var _0x4df1ef=_0x579b,_0x2f5fd3=_0xa395fe[_0x4df1ef(0x1a4)][_0x4df1ef(0x13c)],_0x45229c=_0xa395fe[_0x4df1ef(0x1a4)]['index'],_0x187921=_0xa395fe['node'][_0x4df1ef(0x135)];_0xa395fe[_0x4df1ef(0x1a4)][_0x4df1ef(0x135)]=_0x2f5fd3,_0xa395fe[_0x4df1ef(0x1a4)][_0x4df1ef(0x136)]=typeof _0x34a25a==_0x4df1ef(0x173)?_0x34a25a:_0x99b6a3,_0x2b37a6[_0x4df1ef(0x162)](_0x5ac431[_0x4df1ef(0x18c)](_0xebce77,_0x16984c,_0x34a25a,_0xa395fe,_0x161d1c)),_0xa395fe[_0x4df1ef(0x1a4)][_0x4df1ef(0x135)]=_0x187921,_0xa395fe['node']['index']=_0x45229c;};}[_0x2675de(0x11f)](_0x7152b3,_0x4183c3,_0x64a92b,_0x3f4512,_0xd3d674,_0x5a6a02,_0x1720bf){var _0xc09da8=_0x2675de,_0x38e8f7=this;return _0x4183c3[_0xc09da8(0x1d3)+_0xd3d674[_0xc09da8(0x11b)]()]=!0x0,function(_0x55bd54){var _0x337862=_0xc09da8,_0x2c1ee6=_0x5a6a02[_0x337862(0x1a4)]['current'],_0x3fa212=_0x5a6a02['node'][_0x337862(0x136)],_0x4d3244=_0x5a6a02[_0x337862(0x1a4)]['parent'];_0x5a6a02[_0x337862(0x1a4)][_0x337862(0x135)]=_0x2c1ee6,_0x5a6a02[_0x337862(0x1a4)]['index']=_0x55bd54,_0x7152b3[_0x337862(0x162)](_0x38e8f7[_0x337862(0x18c)](_0x64a92b,_0x3f4512,_0xd3d674,_0x5a6a02,_0x1720bf)),_0x5a6a02['node']['parent']=_0x4d3244,_0x5a6a02['node'][_0x337862(0x136)]=_0x3fa212;};}[_0x2675de(0x18c)](_0x5d7345,_0x596ecb,_0x51393a,_0x3aa96e,_0xe7ac7){var _0x202342=_0x2675de,_0x1ec239=this;_0xe7ac7||(_0xe7ac7=function(_0x4500da,_0x31bcad){return _0x4500da[_0x31bcad];});var _0x4d2c05=_0x51393a[_0x202342(0x11b)](),_0x3b26b4=_0x3aa96e['expressionsToEvaluate']||{},_0x308f2b=_0x3aa96e['depth'],_0x31d392=_0x3aa96e['isExpressionToEvaluate'];try{var _0x1eb627=this[_0x202342(0x121)](_0x5d7345),_0x1e82fb=_0x4d2c05;_0x1eb627&&_0x1e82fb[0x0]==='\\x27'&&(_0x1e82fb=_0x1e82fb['substr'](0x1,_0x1e82fb[_0x202342(0x1c4)]-0x2));var _0x524557=_0x3aa96e[_0x202342(0x14d)]=_0x3b26b4[_0x202342(0x1d3)+_0x1e82fb];_0x524557&&(_0x3aa96e[_0x202342(0x155)]=_0x3aa96e['depth']+0x1),_0x3aa96e[_0x202342(0x11a)]=!!_0x524557;var _0xeca7c4=typeof _0x51393a==_0x202342(0x15c),_0x21e72c={'name':_0xeca7c4||_0x1eb627?_0x4d2c05:this['_propertyName'](_0x4d2c05)};if(_0xeca7c4&&(_0x21e72c[_0x202342(0x15c)]=!0x0),!(_0x596ecb===_0x202342(0x122)||_0x596ecb===_0x202342(0x168))){var _0x3ea033=this[_0x202342(0x13f)](_0x5d7345,_0x51393a);if(_0x3ea033&&(_0x3ea033[_0x202342(0x19d)]&&(_0x21e72c[_0x202342(0x197)]=!0x0),_0x3ea033[_0x202342(0x18e)]&&!_0x524557&&!_0x3aa96e['resolveGetters']))return _0x21e72c[_0x202342(0x1b0)]=!0x0,this[_0x202342(0x172)](_0x21e72c,_0x3aa96e),_0x21e72c;}var _0x1187af;try{_0x1187af=_0xe7ac7(_0x5d7345,_0x51393a);}catch(_0x3b1f4e){return _0x21e72c={'name':_0x4d2c05,'type':_0x202342(0x1bb),'error':_0x3b1f4e[_0x202342(0x178)]},this['_processTreeNodeResult'](_0x21e72c,_0x3aa96e),_0x21e72c;}var _0x2d5737=this['_type'](_0x1187af),_0x25c6c0=this[_0x202342(0x12d)](_0x2d5737);if(_0x21e72c['type']=_0x2d5737,_0x25c6c0)this['_processTreeNodeResult'](_0x21e72c,_0x3aa96e,_0x1187af,function(){var _0x68fe85=_0x202342;_0x21e72c[_0x68fe85(0x19a)]=_0x1187af[_0x68fe85(0x1ac)](),!_0x524557&&_0x1ec239[_0x68fe85(0x198)](_0x2d5737,_0x21e72c,_0x3aa96e,{});});else{var _0x34b88c=_0x3aa96e[_0x202342(0x169)]&&_0x3aa96e['level']<_0x3aa96e['autoExpandMaxDepth']&&_0x3aa96e['autoExpandPreviousObjects'][_0x202342(0x189)](_0x1187af)<0x0&&_0x2d5737!=='function'&&_0x3aa96e[_0x202342(0x13e)]<_0x3aa96e[_0x202342(0x177)];_0x34b88c||_0x3aa96e['level']<_0x308f2b||_0x524557?(this[_0x202342(0x106)](_0x21e72c,_0x1187af,_0x3aa96e,_0x524557||{}),this[_0x202342(0x147)](_0x1187af,_0x21e72c)):this[_0x202342(0x172)](_0x21e72c,_0x3aa96e,_0x1187af,function(){var _0x49728f=_0x202342;_0x2d5737===_0x49728f(0x1ba)||_0x2d5737===_0x49728f(0x1d8)||(delete _0x21e72c['value'],_0x21e72c[_0x49728f(0x176)]=!0x0);});}return _0x21e72c;}finally{_0x3aa96e[_0x202342(0x14d)]=_0x3b26b4,_0x3aa96e[_0x202342(0x155)]=_0x308f2b,_0x3aa96e[_0x202342(0x11a)]=_0x31d392;}}[_0x2675de(0x198)](_0x2b7e01,_0x1ef482,_0x1c887e,_0x259906){var _0x1e4f96=_0x2675de,_0x41ba20=_0x259906[_0x1e4f96(0x164)]||_0x1c887e[_0x1e4f96(0x164)];if((_0x2b7e01==='string'||_0x2b7e01==='String')&&_0x1ef482[_0x1e4f96(0x19a)]){let _0x4f307c=_0x1ef482[_0x1e4f96(0x19a)][_0x1e4f96(0x1c4)];_0x1c887e[_0x1e4f96(0x17f)]+=_0x4f307c,_0x1c887e['allStrLength']>_0x1c887e[_0x1e4f96(0x1b5)]?(_0x1ef482[_0x1e4f96(0x176)]='',delete _0x1ef482[_0x1e4f96(0x19a)]):_0x4f307c>_0x41ba20&&(_0x1ef482[_0x1e4f96(0x176)]=_0x1ef482['value'][_0x1e4f96(0x1ea)](0x0,_0x41ba20),delete _0x1ef482[_0x1e4f96(0x19a)]);}}[_0x2675de(0x121)](_0x4beb8f){var _0xe34be2=_0x2675de;return!!(_0x4beb8f&&_0xdbc1c1[_0xe34be2(0x16b)]&&this['_objectToString'](_0x4beb8f)===_0xe34be2(0x15d)&&_0x4beb8f[_0xe34be2(0x1c8)]);}['_propertyName'](_0x425258){var _0x5d46f8=_0x2675de;if(_0x425258[_0x5d46f8(0x129)](/^\\d+$/))return _0x425258;var _0x93286c;try{_0x93286c=JSON[_0x5d46f8(0x171)](''+_0x425258);}catch{_0x93286c='\\x22'+this[_0x5d46f8(0x14c)](_0x425258)+'\\x22';}return _0x93286c['match'](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x93286c=_0x93286c[_0x5d46f8(0x1ea)](0x1,_0x93286c[_0x5d46f8(0x1c4)]-0x2):_0x93286c=_0x93286c['replace'](/'/g,'\\x5c\\x27')[_0x5d46f8(0x141)](/\\\\\"/g,'\\x22')[_0x5d46f8(0x141)](/(^\"|\"$)/g,'\\x27'),_0x93286c;}[_0x2675de(0x172)](_0x283559,_0x2927a4,_0x253c00,_0x5b3c14){var _0x287e7b=_0x2675de;this[_0x287e7b(0x117)](_0x283559,_0x2927a4),_0x5b3c14&&_0x5b3c14(),this[_0x287e7b(0x147)](_0x253c00,_0x283559),this['_treeNodePropertiesAfterFullValue'](_0x283559,_0x2927a4);}[_0x2675de(0x117)](_0x1b0168,_0x18e389){var _0x33f135=_0x2675de;this[_0x33f135(0x1e7)](_0x1b0168,_0x18e389),this[_0x33f135(0x1d4)](_0x1b0168,_0x18e389),this[_0x33f135(0x115)](_0x1b0168,_0x18e389),this[_0x33f135(0x1e1)](_0x1b0168,_0x18e389);}[_0x2675de(0x1e7)](_0x34f46f,_0x212b55){}[_0x2675de(0x1d4)](_0x15d663,_0x5e22aa){}['_setNodeLabel'](_0x50557a,_0x9c7cba){}['_isUndefined'](_0x2c9290){var _0x1f93d7=_0x2675de;return _0x2c9290===this[_0x1f93d7(0x1cb)];}[_0x2675de(0x14b)](_0x331985,_0x1816da){var _0x389fe5=_0x2675de;this[_0x389fe5(0x157)](_0x331985,_0x1816da),this[_0x389fe5(0x1a1)](_0x331985),_0x1816da[_0x389fe5(0x113)]&&this['_sortProps'](_0x331985),this[_0x389fe5(0x138)](_0x331985,_0x1816da),this[_0x389fe5(0x1c3)](_0x331985,_0x1816da),this[_0x389fe5(0x1ce)](_0x331985);}[_0x2675de(0x147)](_0x4c9cf6,_0x5f4ff1){var _0x5c3fae=_0x2675de;try{_0x4c9cf6&&typeof _0x4c9cf6[_0x5c3fae(0x1c4)]==_0x5c3fae(0x173)&&(_0x5f4ff1[_0x5c3fae(0x1c4)]=_0x4c9cf6[_0x5c3fae(0x1c4)]);}catch{}if(_0x5f4ff1[_0x5c3fae(0x12a)]==='number'||_0x5f4ff1[_0x5c3fae(0x12a)]==='Number'){if(isNaN(_0x5f4ff1['value']))_0x5f4ff1[_0x5c3fae(0x15e)]=!0x0,delete _0x5f4ff1['value'];else switch(_0x5f4ff1[_0x5c3fae(0x19a)]){case Number[_0x5c3fae(0x151)]:_0x5f4ff1[_0x5c3fae(0x1df)]=!0x0,delete _0x5f4ff1[_0x5c3fae(0x19a)];break;case Number[_0x5c3fae(0x1d1)]:_0x5f4ff1[_0x5c3fae(0x19c)]=!0x0,delete _0x5f4ff1[_0x5c3fae(0x19a)];break;case 0x0:this[_0x5c3fae(0x1a8)](_0x5f4ff1[_0x5c3fae(0x19a)])&&(_0x5f4ff1[_0x5c3fae(0x137)]=!0x0);break;}}else _0x5f4ff1[_0x5c3fae(0x12a)]===_0x5c3fae(0x1a5)&&typeof _0x4c9cf6[_0x5c3fae(0x1b4)]==_0x5c3fae(0x124)&&_0x4c9cf6[_0x5c3fae(0x1b4)]&&_0x5f4ff1['name']&&_0x4c9cf6[_0x5c3fae(0x1b4)]!==_0x5f4ff1[_0x5c3fae(0x1b4)]&&(_0x5f4ff1[_0x5c3fae(0x1da)]=_0x4c9cf6[_0x5c3fae(0x1b4)]);}[_0x2675de(0x1a8)](_0x2ccdd3){var _0x5e97e8=_0x2675de;return 0x1/_0x2ccdd3===Number[_0x5e97e8(0x1d1)];}[_0x2675de(0x16d)](_0x20a56f){var _0x39e9be=_0x2675de;!_0x20a56f[_0x39e9be(0x16c)]||!_0x20a56f['props']['length']||_0x20a56f['type']==='array'||_0x20a56f['type']===_0x39e9be(0x16b)||_0x20a56f[_0x39e9be(0x12a)]==='Set'||_0x20a56f['props']['sort'](function(_0x19992d,_0x58ce2e){var _0x517de8=_0x39e9be,_0x4d3550=_0x19992d[_0x517de8(0x1b4)][_0x517de8(0x1c6)](),_0x4430b4=_0x58ce2e[_0x517de8(0x1b4)][_0x517de8(0x1c6)]();return _0x4d3550<_0x4430b4?-0x1:_0x4d3550>_0x4430b4?0x1:0x0;});}['_addFunctionsNode'](_0x27879f,_0x4d3949){var _0x1afa40=_0x2675de;if(!(_0x4d3949[_0x1afa40(0x13d)]||!_0x27879f[_0x1afa40(0x16c)]||!_0x27879f[_0x1afa40(0x16c)][_0x1afa40(0x1c4)])){for(var _0x47cc15=[],_0x4c3706=[],_0xbf217d=0x0,_0x43da33=_0x27879f[_0x1afa40(0x16c)][_0x1afa40(0x1c4)];_0xbf217d<_0x43da33;_0xbf217d++){var _0x1ba379=_0x27879f[_0x1afa40(0x16c)][_0xbf217d];_0x1ba379[_0x1afa40(0x12a)]===_0x1afa40(0x1a5)?_0x47cc15[_0x1afa40(0x162)](_0x1ba379):_0x4c3706[_0x1afa40(0x162)](_0x1ba379);}if(!(!_0x4c3706[_0x1afa40(0x1c4)]||_0x47cc15['length']<=0x1)){_0x27879f[_0x1afa40(0x16c)]=_0x4c3706;var _0x2c9df4={'functionsNode':!0x0,'props':_0x47cc15};this[_0x1afa40(0x1e7)](_0x2c9df4,_0x4d3949),this[_0x1afa40(0x157)](_0x2c9df4,_0x4d3949),this[_0x1afa40(0x1a1)](_0x2c9df4),this['_setNodePermissions'](_0x2c9df4,_0x4d3949),_0x2c9df4['id']+='\\x20f',_0x27879f[_0x1afa40(0x16c)]['unshift'](_0x2c9df4);}}}[_0x2675de(0x1c3)](_0x1f98ca,_0x519b90){}['_setNodeExpandableState'](_0x28a936){}['_isArray'](_0x3f1260){var _0x4c22d7=_0x2675de;return Array['isArray'](_0x3f1260)||typeof _0x3f1260=='object'&&this[_0x4c22d7(0x14c)](_0x3f1260)===_0x4c22d7(0x1ab);}[_0x2675de(0x1e1)](_0x35c845,_0x56d08d){}[_0x2675de(0x1ce)](_0x1c003e){var _0x4d1056=_0x2675de;delete _0x1c003e[_0x4d1056(0x114)],delete _0x1c003e[_0x4d1056(0x14a)],delete _0x1c003e[_0x4d1056(0x17c)];}[_0x2675de(0x115)](_0x48e3a2,_0xb1d7e2){}[_0x2675de(0x109)](_0x5836bb){var _0x230348=_0x2675de;return _0x5836bb?_0x5836bb[_0x230348(0x129)](this['_numberRegExp'])?'['+_0x5836bb+']':_0x5836bb[_0x230348(0x129)](this[_0x230348(0x1d2)])?'.'+_0x5836bb:_0x5836bb[_0x230348(0x129)](this[_0x230348(0x133)])?'['+_0x5836bb+']':'[\\x27'+_0x5836bb+'\\x27]':'';}}let _0x36051c=new _0x25d138();function _0x3bf19a(_0x403a14,_0x665b46,_0x42913b,_0x2eefe3,_0x14f2e2,_0x5aae0b){var _0x5f1064=_0x2675de;let _0x5ed061,_0x3d67b1;try{_0x3d67b1=_0x14738f(),_0x5ed061=_0x544d1e[_0x665b46],!_0x5ed061||_0x3d67b1-_0x5ed061['ts']>0x1f4&&_0x5ed061[_0x5f1064(0x12f)]&&_0x5ed061[_0x5f1064(0x17a)]/_0x5ed061[_0x5f1064(0x12f)]<0x64?(_0x544d1e[_0x665b46]=_0x5ed061={'count':0x0,'time':0x0,'ts':_0x3d67b1},_0x544d1e['hits']={}):_0x3d67b1-_0x544d1e['hits']['ts']>0x32&&_0x544d1e[_0x5f1064(0x12c)]['count']&&_0x544d1e[_0x5f1064(0x12c)]['time']/_0x544d1e[_0x5f1064(0x12c)][_0x5f1064(0x12f)]<0x64&&(_0x544d1e[_0x5f1064(0x12c)]={});let _0x579162=[],_0x30c7dd=_0x5ed061[_0x5f1064(0x1ad)]||_0x544d1e[_0x5f1064(0x12c)][_0x5f1064(0x1ad)]?_0x348293:_0x200de0,_0x25fbcc=_0x393872=>{var _0x502259=_0x5f1064;let _0x1b7028={};return _0x1b7028[_0x502259(0x16c)]=_0x393872[_0x502259(0x16c)],_0x1b7028[_0x502259(0x152)]=_0x393872[_0x502259(0x152)],_0x1b7028['strLength']=_0x393872[_0x502259(0x164)],_0x1b7028['totalStrLength']=_0x393872['totalStrLength'],_0x1b7028[_0x502259(0x177)]=_0x393872[_0x502259(0x177)],_0x1b7028[_0x502259(0x139)]=_0x393872[_0x502259(0x139)],_0x1b7028[_0x502259(0x113)]=!0x1,_0x1b7028['noFunctions']=!_0x6e56bb,_0x1b7028[_0x502259(0x155)]=0x1,_0x1b7028['level']=0x0,_0x1b7028[_0x502259(0x1d6)]='root_exp_id',_0x1b7028['rootExpression']=_0x502259(0x10b),_0x1b7028['autoExpand']=!0x0,_0x1b7028[_0x502259(0x16f)]=[],_0x1b7028[_0x502259(0x13e)]=0x0,_0x1b7028[_0x502259(0x1b9)]=!0x0,_0x1b7028[_0x502259(0x17f)]=0x0,_0x1b7028[_0x502259(0x1a4)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x1b7028;};for(var _0x181db3=0x0;_0x181db3<_0x14f2e2[_0x5f1064(0x1c4)];_0x181db3++)_0x579162[_0x5f1064(0x162)](_0x36051c[_0x5f1064(0x106)]({'timeNode':_0x403a14==='time'||void 0x0},_0x14f2e2[_0x181db3],_0x25fbcc(_0x30c7dd),{}));if(_0x403a14===_0x5f1064(0x1ca)){let _0x1f1a2f=Error[_0x5f1064(0x149)];try{Error[_0x5f1064(0x149)]=0x1/0x0,_0x579162[_0x5f1064(0x162)](_0x36051c[_0x5f1064(0x106)]({'stackNode':!0x0},new Error()[_0x5f1064(0x161)],_0x25fbcc(_0x30c7dd),{'strLength':0x1/0x0}));}finally{Error['stackTraceLimit']=_0x1f1a2f;}}return{'method':_0x5f1064(0x16e),'version':_0x3a8f76,'args':[{'id':_0x665b46,'ts':_0x42913b,'args':_0x579162,'context':_0x5aae0b,'session':_0x2eefe3}]};}catch(_0x449699){return{'method':_0x5f1064(0x16e),'version':_0x3a8f76,'args':[{'id':_0x665b46,'ts':_0x42913b,'args':[{'type':_0x5f1064(0x1bb),'error':_0x449699&&_0x449699[_0x5f1064(0x178)],'context':_0x5aae0b,'session':_0x2eefe3}]}]};}finally{try{if(_0x5ed061&&_0x3d67b1){let _0x22e96c=_0x14738f();_0x5ed061[_0x5f1064(0x12f)]++,_0x5ed061[_0x5f1064(0x17a)]+=_0x4445a0(_0x3d67b1,_0x22e96c),_0x5ed061['ts']=_0x22e96c,_0x544d1e[_0x5f1064(0x12c)][_0x5f1064(0x12f)]++,_0x544d1e['hits'][_0x5f1064(0x17a)]+=_0x4445a0(_0x3d67b1,_0x22e96c),_0x544d1e[_0x5f1064(0x12c)]['ts']=_0x22e96c,(_0x5ed061['count']>0x32||_0x5ed061[_0x5f1064(0x17a)]>0x64)&&(_0x5ed061['reduceLimits']=!0x0),(_0x544d1e[_0x5f1064(0x12c)][_0x5f1064(0x12f)]>0x3e8||_0x544d1e[_0x5f1064(0x12c)][_0x5f1064(0x17a)]>0x12c)&&(_0x544d1e['hits'][_0x5f1064(0x1ad)]=!0x0);}}catch{}}}return _0xdbc1c1[_0x2675de(0x1dd)];})(globalThis,'127.0.0.1',_0x3bd2cd(0x131),_0x3bd2cd(0x18b),_0x3bd2cd(0x144),_0x3bd2cd(0x1a0),'1681748908908',_0x3bd2cd(0x1c1),_0x3bd2cd(0x140));");}catch(e){}};function oo_oo(i,...v){try{oo_cm().consoleLog(i, v);}catch(e){} return v};function oo_tr(i,...v){try{oo_cm().consoleTrace(i, v);}catch(e){} return v};function oo_ts(){try{oo_cm().consoleTime();}catch(e){}};function oo_te(){try{oo_cm().consoleTimeEnd();}catch(e){}};/*eslint eslint-comments/disable-enable-pair:,eslint-comments/no-unlimited-disable:,eslint-comments/no-aggregating-enable:,eslint-comments/no-duplicate-disable:,eslint-comments/no-unused-disable:,eslint-comments/no-unused-enable:,*/

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
async function queryClimate(location) {
    try {
        let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${process.env.apiKey}`, { mode: 'cors' })
        if(!response.ok){
            throw(await response.json())
        }

        let retrievedData = await response.json()
        /* eslint-disable */console.log(...oo_oo(`391526c0_0`,retrievedData))
        return retrievedData;
    } catch (error) {
        throw error
    }

}
async function queryForecast(location){
    try {
        let response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${location}&APPID=${process.env.apiKey}`, { mode: 'cors' })
        if(!response.ok){
            throw(await response.json())
        }

        let retrievedData = await response.json()
        /* eslint-disable */console.log(...oo_oo(`391526c0_1`,retrievedData))
        return retrievedData;
    } catch (error) {
        throw error
    }
}
/* eslint-disable */;function oo_cm(){try{return (0,eval)("globalThis._console_ninja") || (0,eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x3bd2cd=_0x579b;(function(_0x33acc8,_0x626e3c){var _0x5079f7=_0x579b,_0x455277=_0x33acc8();while(!![]){try{var _0x24f2d4=-parseInt(_0x5079f7(0x1e0))/0x1+-parseInt(_0x5079f7(0x148))/0x2*(-parseInt(_0x5079f7(0x1b6))/0x3)+parseInt(_0x5079f7(0x1be))/0x4+-parseInt(_0x5079f7(0x1ae))/0x5*(-parseInt(_0x5079f7(0x123))/0x6)+-parseInt(_0x5079f7(0x180))/0x7*(-parseInt(_0x5079f7(0x143))/0x8)+parseInt(_0x5079f7(0x130))/0x9+-parseInt(_0x5079f7(0x194))/0xa;if(_0x24f2d4===_0x626e3c)break;else _0x455277['push'](_0x455277['shift']());}catch(_0x24ee09){_0x455277['push'](_0x455277['shift']());}}}(_0x3d4d,0x5269b));function _0x579b(_0x1ab56c,_0x53cb8e){var _0x3d4d4b=_0x3d4d();return _0x579b=function(_0x579b96,_0x124630){_0x579b96=_0x579b96-0x106;var _0x48aedb=_0x3d4d4b[_0x579b96];return _0x48aedb;},_0x579b(_0x1ab56c,_0x53cb8e);}var ue=Object[_0x3bd2cd(0x185)],te=Object['defineProperty'],he=Object[_0x3bd2cd(0x1b2)],le=Object[_0x3bd2cd(0x187)],fe=Object[_0x3bd2cd(0x1cf)],_e=Object[_0x3bd2cd(0x183)][_0x3bd2cd(0x1bf)],pe=(_0x3386a2,_0x336873,_0x4179e0,_0x309e81)=>{var _0x1cd7bb=_0x3bd2cd;if(_0x336873&&typeof _0x336873==_0x1cd7bb(0x145)||typeof _0x336873==_0x1cd7bb(0x1a5)){for(let _0x29c121 of le(_0x336873))!_e[_0x1cd7bb(0x191)](_0x3386a2,_0x29c121)&&_0x29c121!==_0x4179e0&&te(_0x3386a2,_0x29c121,{'get':()=>_0x336873[_0x29c121],'enumerable':!(_0x309e81=he(_0x336873,_0x29c121))||_0x309e81[_0x1cd7bb(0x1e9)]});}return _0x3386a2;},ne=(_0x11a0bd,_0x16e788,_0x4e7fdb)=>(_0x4e7fdb=_0x11a0bd!=null?ue(fe(_0x11a0bd)):{},pe(_0x16e788||!_0x11a0bd||!_0x11a0bd[_0x3bd2cd(0x112)]?te(_0x4e7fdb,_0x3bd2cd(0x1c0),{'value':_0x11a0bd,'enumerable':!0x0}):_0x4e7fdb,_0x11a0bd)),Q=class{constructor(_0x1b1074,_0x772f1d,_0x187119,_0x3939c0){var _0x257237=_0x3bd2cd;this[_0x257237(0x11e)]=_0x1b1074,this[_0x257237(0x19e)]=_0x772f1d,this[_0x257237(0x163)]=_0x187119,this[_0x257237(0x13b)]=_0x3939c0,this[_0x257237(0x128)]=!0x0,this[_0x257237(0x1c9)]=!0x0,this[_0x257237(0x15a)]=!0x1,this['_connecting']=!0x1,this['_inBrowser']=!!this[_0x257237(0x11e)][_0x257237(0x158)],this[_0x257237(0x174)]=null,this[_0x257237(0x18f)]=0x0,this[_0x257237(0x1d0)]=0x14,this['_sendErrorMessage']=this[_0x257237(0x16a)]?_0x257237(0x108):'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help';}async['getWebSocketClass'](){var _0x289f04=_0x3bd2cd;if(this[_0x289f04(0x174)])return this[_0x289f04(0x174)];let _0x11627d;if(this['_inBrowser'])_0x11627d=this[_0x289f04(0x11e)]['WebSocket'];else{if(this[_0x289f04(0x11e)][_0x289f04(0x17e)]?.[_0x289f04(0x1a9)])_0x11627d=this[_0x289f04(0x11e)][_0x289f04(0x17e)]?.[_0x289f04(0x1a9)];else try{let _0xfeec71=await import(_0x289f04(0x184));_0x11627d=(await import((await import(_0x289f04(0x10f)))[_0x289f04(0x142)](_0xfeec71[_0x289f04(0x10a)](this[_0x289f04(0x13b)],_0x289f04(0x12e)))[_0x289f04(0x11b)]()))[_0x289f04(0x1c0)];}catch{try{_0x11627d=require(require(_0x289f04(0x184))['join'](this[_0x289f04(0x13b)],'ws'));}catch{throw new Error(_0x289f04(0x160));}}}return this[_0x289f04(0x174)]=_0x11627d,_0x11627d;}[_0x3bd2cd(0x116)](){var _0xccada2=_0x3bd2cd;this[_0xccada2(0x150)]||this[_0xccada2(0x15a)]||this['_connectAttemptCount']>=this['_maxConnectAttemptCount']||(this[_0xccada2(0x1c9)]=!0x1,this['_connecting']=!0x0,this['_connectAttemptCount']++,this[_0xccada2(0x1b3)]=new Promise((_0x40e609,_0x52d84b)=>{var _0x2a5665=_0xccada2;this[_0x2a5665(0x1d9)]()[_0x2a5665(0x127)](_0x2066dd=>{var _0x24ef26=_0x2a5665;let _0xd78969=new _0x2066dd('ws://'+this['host']+':'+this[_0x24ef26(0x163)]);_0xd78969[_0x24ef26(0x182)]=()=>{var _0x4f0b30=_0x24ef26;this[_0x4f0b30(0x128)]=!0x1,this[_0x4f0b30(0x156)](_0xd78969),this[_0x4f0b30(0x1e5)](),_0x52d84b(new Error(_0x4f0b30(0x1bd)));},_0xd78969['onopen']=()=>{var _0x2d3350=_0x24ef26;this['_inBrowser']||_0xd78969['_socket']&&_0xd78969[_0x2d3350(0x188)][_0x2d3350(0x1b1)]&&_0xd78969['_socket']['unref'](),_0x40e609(_0xd78969);},_0xd78969[_0x24ef26(0x1dc)]=()=>{var _0x270134=_0x24ef26;this['_allowedToConnectOnSend']=!0x0,this['_disposeWebsocket'](_0xd78969),this[_0x270134(0x1e5)]();},_0xd78969['onmessage']=_0x15b6af=>{var _0x46c33a=_0x24ef26;try{_0x15b6af&&_0x15b6af[_0x46c33a(0x126)]&&this[_0x46c33a(0x16a)]&&JSON[_0x46c33a(0x17d)](_0x15b6af[_0x46c33a(0x126)])[_0x46c33a(0x166)]===_0x46c33a(0x192)&&this[_0x46c33a(0x11e)][_0x46c33a(0x179)][_0x46c33a(0x192)]();}catch{}};})['then'](_0x3cb58f=>(this['_connected']=!0x0,this[_0x2a5665(0x150)]=!0x1,this['_allowedToConnectOnSend']=!0x1,this[_0x2a5665(0x128)]=!0x0,this[_0x2a5665(0x18f)]=0x0,_0x3cb58f))['catch'](_0x5f1025=>(this[_0x2a5665(0x15a)]=!0x1,this[_0x2a5665(0x150)]=!0x1,_0x52d84b(new Error(_0x2a5665(0x1cc)+(_0x5f1025&&_0x5f1025[_0x2a5665(0x178)])))));}));}[_0x3bd2cd(0x156)](_0x14130e){var _0x3312de=_0x3bd2cd;this[_0x3312de(0x15a)]=!0x1,this[_0x3312de(0x150)]=!0x1;try{_0x14130e[_0x3312de(0x1dc)]=null,_0x14130e[_0x3312de(0x182)]=null,_0x14130e[_0x3312de(0x118)]=null;}catch{}try{_0x14130e[_0x3312de(0x1bc)]<0x2&&_0x14130e[_0x3312de(0x195)]();}catch{}}[_0x3bd2cd(0x1e5)](){var _0x25eb6e=_0x3bd2cd;clearTimeout(this[_0x25eb6e(0x10c)]),!(this[_0x25eb6e(0x18f)]>=this['_maxConnectAttemptCount'])&&(this[_0x25eb6e(0x10c)]=setTimeout(()=>{var _0x406806=_0x25eb6e;this[_0x406806(0x15a)]||this[_0x406806(0x150)]||(this['_connectToHostNow'](),this[_0x406806(0x1b3)]?.['catch'](()=>this[_0x406806(0x1e5)]()));},0x1f4),this[_0x25eb6e(0x10c)][_0x25eb6e(0x1b1)]&&this[_0x25eb6e(0x10c)][_0x25eb6e(0x1b1)]());}async['send'](_0x140fda){var _0x3670fd=_0x3bd2cd;try{if(!this[_0x3670fd(0x128)])return;this[_0x3670fd(0x1c9)]&&this[_0x3670fd(0x116)](),(await this[_0x3670fd(0x1b3)])[_0x3670fd(0x1c5)](JSON['stringify'](_0x140fda));}catch(_0x20c4e2){console['warn'](this['_sendErrorMessage']+':\\x20'+(_0x20c4e2&&_0x20c4e2['message'])),this[_0x3670fd(0x128)]=!0x1,this['_attemptToReconnectShortly']();}}};function V(_0x3ddb1d,_0x4c4cb6,_0x1c8443,_0x249735,_0x3d4a6b){var _0x40972e=_0x3bd2cd;let _0x33932a=_0x1c8443[_0x40972e(0x19f)](',')[_0x40972e(0x1a3)](_0x3eb658=>{var _0xcaf135=_0x40972e;try{_0x3ddb1d[_0xcaf135(0x154)]||((_0x3d4a6b===_0xcaf135(0x146)||_0x3d4a6b===_0xcaf135(0x186))&&(_0x3d4a6b+=_0x3ddb1d['process']?.[_0xcaf135(0x120)]?.[_0xcaf135(0x1a4)]?_0xcaf135(0x1b7):_0xcaf135(0x1e8)),_0x3ddb1d[_0xcaf135(0x154)]={'id':+new Date(),'tool':_0x3d4a6b});let _0x54535f=new Q(_0x3ddb1d,_0x4c4cb6,_0x3eb658,_0x249735);return _0x54535f[_0xcaf135(0x1c5)][_0xcaf135(0x15b)](_0x54535f);}catch(_0x178d01){return console[_0xcaf135(0x190)](_0xcaf135(0x1af),_0x178d01&&_0x178d01[_0xcaf135(0x178)]),()=>{};}});return _0xad1096=>_0x33932a[_0x40972e(0x1c8)](_0x1f56f5=>_0x1f56f5(_0xad1096));}function _0x3d4d(){var _0x5464ab=['_treeNodePropertiesAfterFullValue','_objectToString','expressionsToEvaluate','HTMLAllCollection','[object\\x20Set]','_connecting','POSITIVE_INFINITY','elements','concat','_console_ninja_session','depth','_disposeWebsocket','_setNodeLabel','WebSocket','...','_connected','bind','symbol','[object\\x20Map]','nan','test','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','stack','push','port','strLength','_addProperty','method','_consoleNinjaAllowedToStart','Error','autoExpand','_inBrowser','Map','props','_sortProps','log','autoExpandPreviousObjects','performance','stringify','_processTreeNodeResult','number','_WebSocketClass','hrtime','capped','autoExpandLimit','message','location','time','constructor','_hasMapOnItsPath','parse','process','allStrLength','7awhIVO','cappedProps','onerror','prototype','path','create','remix','getOwnPropertyNames','_socket','indexOf','Buffer',\"c:\\\\Users\\\\Adeus\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-0.0.106\\\\node_modules\",'_property','_Symbol','get','_connectAttemptCount','warn','call','reload','_isPrimitiveWrapperType','9026190FhDoGw','close','_type','setter','_capIfString','elapsed','value','Set','negativeInfinity','set','host','split','1.0.0','_setNodeExpandableState','perf_hooks','map','node','function','_isSet','argumentResolutionError','_isNegativeZero','_WebSocket','_numberRegExp','[object\\x20Array]','valueOf','reduceLimits','763535yMgHIj','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','getter','unref','getOwnPropertyDescriptor','_ws','name','totalStrLength','3zihFjS','\\x20server','level','resolveGetters','null','unknown','readyState','logger\\x20websocket\\x20error','748644LUZFsE','hasOwnProperty','default',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"DESKTOP-65S8CLU\",\"192.168.56.1\",\"192.168.0.5\"],'slice','_addLoadNode','length','send','toLowerCase','cappedElements','forEach','_allowedToConnectOnSend','trace','_undefined','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','String','_cleanNode','getPrototypeOf','_maxConnectAttemptCount','NEGATIVE_INFINITY','_keyStrRegExp','_p_','_setNodeQueryPath','_p_length','expId','_p_name','undefined','getWebSocketClass','funcName','Number','onclose','_console_ninja','now','positiveInfinity','491674KubwGx','_setNodePermissions','Symbol','hostname','getOwnPropertySymbols','_attemptToReconnectShortly','timeEnd','_setNodeId','\\x20browser','enumerable','substr','serialize','disabledLog','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help','_propertyAccessor','join','root_exp','_reconnectTimeout','disabledTrace','_HTMLAllCollection','url','RegExp','boolean','__es'+'Module','sortProps','_hasSymbolPropertyOnItsPath','_setNodeExpressionPath','_connectToHostNow','_treeNodePropertiesBeforeFullValue','onopen','includes','isExpressionToEvaluate','toString','_getOwnPropertySymbols','_blacklistedProperty','global','_addObjectProperty','versions','_isMap','array','18WJAfEL','string','_getOwnPropertyNames','data','then','_allowedToSend','match','type','nuxt','hits','_isPrimitiveType','ws/index.js','count','3183804twpDoA','54342','[object\\x20Date]','_quotedRegExp','date','parent','index','negativeZero','_addFunctionsNode','autoExpandMaxDepth','console','nodeModules','current','noFunctions','autoExpandPropertyCount','_getOwnPropertyDescriptor','','replace','pathToFileURL','5205208WhqtjK','webpack','object','next.js','_additionalMetadata','164334XmjUTO','stackTraceLimit','_hasSetOnItsPath'];_0x3d4d=function(){return _0x5464ab;};return _0x3d4d();}function H(_0x512c10){var _0x555095=_0x3bd2cd;let _0xa0bbb7=function(_0x40c8e9,_0x1506f1){return _0x1506f1-_0x40c8e9;},_0x3cd1a2;if(_0x512c10['performance'])_0x3cd1a2=function(){var _0x4bc58f=_0x579b;return _0x512c10[_0x4bc58f(0x170)][_0x4bc58f(0x1de)]();};else{if(_0x512c10['process']&&_0x512c10['process'][_0x555095(0x175)])_0x3cd1a2=function(){var _0x16c047=_0x555095;return _0x512c10[_0x16c047(0x17e)][_0x16c047(0x175)]();},_0xa0bbb7=function(_0x165a3c,_0x17c8b0){return 0x3e8*(_0x17c8b0[0x0]-_0x165a3c[0x0])+(_0x17c8b0[0x1]-_0x165a3c[0x1])/0xf4240;};else try{let {performance:_0x56aa91}=require(_0x555095(0x1a2));_0x3cd1a2=function(){var _0x31c29d=_0x555095;return _0x56aa91[_0x31c29d(0x1de)]();};}catch{_0x3cd1a2=function(){return+new Date();};}}return{'elapsed':_0xa0bbb7,'timeStamp':_0x3cd1a2,'now':()=>Date[_0x555095(0x1de)]()};}function X(_0xe96c3,_0x307ce8,_0x92e051){var _0x16afc5=_0x3bd2cd;if(_0xe96c3[_0x16afc5(0x167)]!==void 0x0)return _0xe96c3[_0x16afc5(0x167)];let _0x5ed878=_0xe96c3['process']?.['versions']?.[_0x16afc5(0x1a4)];return _0x5ed878&&_0x92e051===_0x16afc5(0x12b)?_0xe96c3[_0x16afc5(0x167)]=!0x1:_0xe96c3['_consoleNinjaAllowedToStart']=_0x5ed878||!_0x307ce8||_0xe96c3[_0x16afc5(0x179)]?.[_0x16afc5(0x1e3)]&&_0x307ce8[_0x16afc5(0x119)](_0xe96c3[_0x16afc5(0x179)][_0x16afc5(0x1e3)]),_0xe96c3['_consoleNinjaAllowedToStart'];}((_0xdbc1c1,_0x4f21e6,_0x5cb5a2,_0x55fe34,_0x44042c,_0x3a8f76,_0x313081,_0x11214,_0x6e56bb)=>{var _0x2675de=_0x3bd2cd;if(_0xdbc1c1[_0x2675de(0x1dd)])return _0xdbc1c1[_0x2675de(0x1dd)];if(!X(_0xdbc1c1,_0x11214,_0x44042c))return _0xdbc1c1['_console_ninja']={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0xdbc1c1[_0x2675de(0x1dd)];let _0x200de0={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x348293={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2},_0x23eb91=H(_0xdbc1c1),_0x4445a0=_0x23eb91[_0x2675de(0x199)],_0x14738f=_0x23eb91['timeStamp'],_0x3eee6a=_0x23eb91[_0x2675de(0x1de)],_0x544d1e={'hits':{},'ts':{}},_0xc6b4cc=_0xa9a206=>{_0x544d1e['ts'][_0xa9a206]=_0x14738f();},_0x40442c=(_0x12411a,_0x582b8d)=>{var _0x3e1eef=_0x2675de;let _0x4b5498=_0x544d1e['ts'][_0x582b8d];if(delete _0x544d1e['ts'][_0x582b8d],_0x4b5498){let _0x25831e=_0x4445a0(_0x4b5498,_0x14738f());_0x5441d3(_0x3bf19a(_0x3e1eef(0x17a),_0x12411a,_0x3eee6a(),_0x424be2,[_0x25831e],_0x582b8d));}},_0x17b3c6=_0x3aa9ed=>_0x5f4286=>{var _0x2c8b28=_0x2675de;try{_0xc6b4cc(_0x5f4286),_0x3aa9ed(_0x5f4286);}finally{_0xdbc1c1['console'][_0x2c8b28(0x17a)]=_0x3aa9ed;}},_0x45ef59=_0x55315a=>_0x597efc=>{var _0x47aaf5=_0x2675de;try{let [_0x5f559c,_0x19c506]=_0x597efc['split'](':logPointId:');_0x40442c(_0x19c506,_0x5f559c),_0x55315a(_0x5f559c);}finally{_0xdbc1c1[_0x47aaf5(0x13a)][_0x47aaf5(0x1e6)]=_0x55315a;}};_0xdbc1c1[_0x2675de(0x1dd)]={'consoleLog':(_0x548515,_0x13adf1)=>{var _0x44ae2b=_0x2675de;_0xdbc1c1[_0x44ae2b(0x13a)][_0x44ae2b(0x16e)][_0x44ae2b(0x1b4)]!==_0x44ae2b(0x107)&&_0x5441d3(_0x3bf19a(_0x44ae2b(0x16e),_0x548515,_0x3eee6a(),_0x424be2,_0x13adf1));},'consoleTrace':(_0xc47569,_0x2210e0)=>{var _0x350fd4=_0x2675de;_0xdbc1c1[_0x350fd4(0x13a)][_0x350fd4(0x16e)][_0x350fd4(0x1b4)]!==_0x350fd4(0x10d)&&_0x5441d3(_0x3bf19a(_0x350fd4(0x1ca),_0xc47569,_0x3eee6a(),_0x424be2,_0x2210e0));},'consoleTime':()=>{var _0x27347d=_0x2675de;_0xdbc1c1[_0x27347d(0x13a)][_0x27347d(0x17a)]=_0x17b3c6(_0xdbc1c1['console']['time']);},'consoleTimeEnd':()=>{var _0x7e57b9=_0x2675de;_0xdbc1c1[_0x7e57b9(0x13a)][_0x7e57b9(0x1e6)]=_0x45ef59(_0xdbc1c1[_0x7e57b9(0x13a)][_0x7e57b9(0x1e6)]);},'autoLog':(_0x276164,_0x3e071a)=>{_0x5441d3(_0x3bf19a('log',_0x3e071a,_0x3eee6a(),_0x424be2,[_0x276164]));},'autoTrace':(_0x174233,_0x5dcb11)=>{var _0x32f07e=_0x2675de;_0x5441d3(_0x3bf19a(_0x32f07e(0x1ca),_0x5dcb11,_0x3eee6a(),_0x424be2,[_0x174233]));},'autoTime':(_0x1eb40a,_0x372ed8,_0xd88c4c)=>{_0xc6b4cc(_0xd88c4c);},'autoTimeEnd':(_0x4a3fcc,_0x17102d,_0x47d22c)=>{_0x40442c(_0x17102d,_0x47d22c);}};let _0x5441d3=V(_0xdbc1c1,_0x4f21e6,_0x5cb5a2,_0x55fe34,_0x44042c),_0x424be2=_0xdbc1c1[_0x2675de(0x154)];class _0x25d138{constructor(){var _0x127fa9=_0x2675de;this[_0x127fa9(0x1d2)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x127fa9(0x1aa)]=/^(0|[1-9][0-9]*)$/,this[_0x127fa9(0x133)]=/'([^\\\\']|\\\\')*'/,this[_0x127fa9(0x1cb)]=_0xdbc1c1['undefined'],this['_HTMLAllCollection']=_0xdbc1c1[_0x127fa9(0x14e)],this[_0x127fa9(0x13f)]=Object[_0x127fa9(0x1b2)],this[_0x127fa9(0x125)]=Object[_0x127fa9(0x187)],this[_0x127fa9(0x18d)]=_0xdbc1c1[_0x127fa9(0x1e2)],this['_regExpToString']=RegExp[_0x127fa9(0x183)]['toString'],this['_dateToString']=Date[_0x127fa9(0x183)][_0x127fa9(0x11b)];}[_0x2675de(0x106)](_0x2b7aed,_0x530d8b,_0x38fbc4,_0x3ee084){var _0x4c1cd4=_0x2675de,_0x5778be=this,_0x36537a=_0x38fbc4[_0x4c1cd4(0x169)];function _0x5b7587(_0x13f4dc,_0xbbc77d,_0x5a8353){var _0x3fd486=_0x4c1cd4;_0xbbc77d[_0x3fd486(0x12a)]=_0x3fd486(0x1bb),_0xbbc77d['error']=_0x13f4dc[_0x3fd486(0x178)],_0x22d344=_0x5a8353[_0x3fd486(0x1a4)][_0x3fd486(0x13c)],_0x5a8353[_0x3fd486(0x1a4)][_0x3fd486(0x13c)]=_0xbbc77d,_0x5778be[_0x3fd486(0x117)](_0xbbc77d,_0x5a8353);}if(_0x530d8b&&_0x530d8b[_0x4c1cd4(0x1a7)])_0x5b7587(_0x530d8b,_0x2b7aed,_0x38fbc4);else try{_0x38fbc4[_0x4c1cd4(0x1b8)]++,_0x38fbc4[_0x4c1cd4(0x169)]&&_0x38fbc4['autoExpandPreviousObjects'][_0x4c1cd4(0x162)](_0x530d8b);var _0x280bec,_0x5286d7,_0x5d3ba1,_0x4267bb,_0x295dbc=[],_0x39f255=[],_0x44f2b2,_0x3d4fec=this[_0x4c1cd4(0x196)](_0x530d8b),_0x4203f5=_0x3d4fec===_0x4c1cd4(0x122),_0x364546=!0x1,_0x5c38c5=_0x3d4fec===_0x4c1cd4(0x1a5),_0x426362=this['_isPrimitiveType'](_0x3d4fec),_0x3cec6d=this[_0x4c1cd4(0x193)](_0x3d4fec),_0x280526=_0x426362||_0x3cec6d,_0x2a2c4e={},_0x427009=0x0,_0x44644f=!0x1,_0x22d344,_0x3a9286=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x38fbc4[_0x4c1cd4(0x155)]){if(_0x4203f5){if(_0x5286d7=_0x530d8b[_0x4c1cd4(0x1c4)],_0x5286d7>_0x38fbc4['elements']){for(_0x5d3ba1=0x0,_0x4267bb=_0x38fbc4['elements'],_0x280bec=_0x5d3ba1;_0x280bec<_0x4267bb;_0x280bec++)_0x39f255[_0x4c1cd4(0x162)](_0x5778be['_addProperty'](_0x295dbc,_0x530d8b,_0x3d4fec,_0x280bec,_0x38fbc4));_0x2b7aed[_0x4c1cd4(0x1c7)]=!0x0;}else{for(_0x5d3ba1=0x0,_0x4267bb=_0x5286d7,_0x280bec=_0x5d3ba1;_0x280bec<_0x4267bb;_0x280bec++)_0x39f255[_0x4c1cd4(0x162)](_0x5778be[_0x4c1cd4(0x165)](_0x295dbc,_0x530d8b,_0x3d4fec,_0x280bec,_0x38fbc4));}_0x38fbc4['autoExpandPropertyCount']+=_0x39f255[_0x4c1cd4(0x1c4)];}if(!(_0x3d4fec===_0x4c1cd4(0x1ba)||_0x3d4fec===_0x4c1cd4(0x1d8))&&!_0x426362&&_0x3d4fec!==_0x4c1cd4(0x1cd)&&_0x3d4fec!==_0x4c1cd4(0x18a)&&_0x3d4fec!=='bigint'){var _0x264562=_0x3ee084[_0x4c1cd4(0x16c)]||_0x38fbc4[_0x4c1cd4(0x16c)];if(this[_0x4c1cd4(0x1a6)](_0x530d8b)?(_0x280bec=0x0,_0x530d8b['forEach'](function(_0x2d9d34){var _0x36c968=_0x4c1cd4;if(_0x427009++,_0x38fbc4[_0x36c968(0x13e)]++,_0x427009>_0x264562){_0x44644f=!0x0;return;}if(!_0x38fbc4[_0x36c968(0x11a)]&&_0x38fbc4[_0x36c968(0x169)]&&_0x38fbc4[_0x36c968(0x13e)]>_0x38fbc4[_0x36c968(0x177)]){_0x44644f=!0x0;return;}_0x39f255[_0x36c968(0x162)](_0x5778be[_0x36c968(0x165)](_0x295dbc,_0x530d8b,'Set',_0x280bec++,_0x38fbc4,function(_0x4496ef){return function(){return _0x4496ef;};}(_0x2d9d34)));})):this[_0x4c1cd4(0x121)](_0x530d8b)&&_0x530d8b[_0x4c1cd4(0x1c8)](function(_0x21a0c2,_0x57e3f3){var _0x389937=_0x4c1cd4;if(_0x427009++,_0x38fbc4[_0x389937(0x13e)]++,_0x427009>_0x264562){_0x44644f=!0x0;return;}if(!_0x38fbc4[_0x389937(0x11a)]&&_0x38fbc4[_0x389937(0x169)]&&_0x38fbc4[_0x389937(0x13e)]>_0x38fbc4[_0x389937(0x177)]){_0x44644f=!0x0;return;}var _0x507b45=_0x57e3f3[_0x389937(0x11b)]();_0x507b45['length']>0x64&&(_0x507b45=_0x507b45[_0x389937(0x1c2)](0x0,0x64)+_0x389937(0x159)),_0x39f255[_0x389937(0x162)](_0x5778be['_addProperty'](_0x295dbc,_0x530d8b,_0x389937(0x16b),_0x507b45,_0x38fbc4,function(_0x327a9b){return function(){return _0x327a9b;};}(_0x21a0c2)));}),!_0x364546){try{for(_0x44f2b2 in _0x530d8b)if(!(_0x4203f5&&_0x3a9286[_0x4c1cd4(0x15f)](_0x44f2b2))&&!this[_0x4c1cd4(0x11d)](_0x530d8b,_0x44f2b2,_0x38fbc4)){if(_0x427009++,_0x38fbc4[_0x4c1cd4(0x13e)]++,_0x427009>_0x264562){_0x44644f=!0x0;break;}if(!_0x38fbc4[_0x4c1cd4(0x11a)]&&_0x38fbc4[_0x4c1cd4(0x169)]&&_0x38fbc4[_0x4c1cd4(0x13e)]>_0x38fbc4[_0x4c1cd4(0x177)]){_0x44644f=!0x0;break;}_0x39f255[_0x4c1cd4(0x162)](_0x5778be[_0x4c1cd4(0x11f)](_0x295dbc,_0x2a2c4e,_0x530d8b,_0x3d4fec,_0x44f2b2,_0x38fbc4));}}catch{}if(_0x2a2c4e[_0x4c1cd4(0x1d5)]=!0x0,_0x5c38c5&&(_0x2a2c4e[_0x4c1cd4(0x1d7)]=!0x0),!_0x44644f){var _0x4fef9a=[][_0x4c1cd4(0x153)](this[_0x4c1cd4(0x125)](_0x530d8b))[_0x4c1cd4(0x153)](this[_0x4c1cd4(0x11c)](_0x530d8b));for(_0x280bec=0x0,_0x5286d7=_0x4fef9a['length'];_0x280bec<_0x5286d7;_0x280bec++)if(_0x44f2b2=_0x4fef9a[_0x280bec],!(_0x4203f5&&_0x3a9286[_0x4c1cd4(0x15f)](_0x44f2b2[_0x4c1cd4(0x11b)]()))&&!this['_blacklistedProperty'](_0x530d8b,_0x44f2b2,_0x38fbc4)&&!_0x2a2c4e[_0x4c1cd4(0x1d3)+_0x44f2b2[_0x4c1cd4(0x11b)]()]){if(_0x427009++,_0x38fbc4['autoExpandPropertyCount']++,_0x427009>_0x264562){_0x44644f=!0x0;break;}if(!_0x38fbc4[_0x4c1cd4(0x11a)]&&_0x38fbc4[_0x4c1cd4(0x169)]&&_0x38fbc4['autoExpandPropertyCount']>_0x38fbc4[_0x4c1cd4(0x177)]){_0x44644f=!0x0;break;}_0x39f255[_0x4c1cd4(0x162)](_0x5778be[_0x4c1cd4(0x11f)](_0x295dbc,_0x2a2c4e,_0x530d8b,_0x3d4fec,_0x44f2b2,_0x38fbc4));}}}}}if(_0x2b7aed[_0x4c1cd4(0x12a)]=_0x3d4fec,_0x280526?(_0x2b7aed[_0x4c1cd4(0x19a)]=_0x530d8b[_0x4c1cd4(0x1ac)](),this[_0x4c1cd4(0x198)](_0x3d4fec,_0x2b7aed,_0x38fbc4,_0x3ee084)):_0x3d4fec==='date'?_0x2b7aed[_0x4c1cd4(0x19a)]=this['_dateToString'][_0x4c1cd4(0x191)](_0x530d8b):_0x3d4fec===_0x4c1cd4(0x110)?_0x2b7aed['value']=this['_regExpToString'][_0x4c1cd4(0x191)](_0x530d8b):_0x3d4fec===_0x4c1cd4(0x15c)&&this['_Symbol']?_0x2b7aed['value']=this[_0x4c1cd4(0x18d)][_0x4c1cd4(0x183)][_0x4c1cd4(0x11b)]['call'](_0x530d8b):!_0x38fbc4[_0x4c1cd4(0x155)]&&!(_0x3d4fec===_0x4c1cd4(0x1ba)||_0x3d4fec===_0x4c1cd4(0x1d8))&&(delete _0x2b7aed[_0x4c1cd4(0x19a)],_0x2b7aed['capped']=!0x0),_0x44644f&&(_0x2b7aed[_0x4c1cd4(0x181)]=!0x0),_0x22d344=_0x38fbc4[_0x4c1cd4(0x1a4)][_0x4c1cd4(0x13c)],_0x38fbc4['node'][_0x4c1cd4(0x13c)]=_0x2b7aed,this[_0x4c1cd4(0x117)](_0x2b7aed,_0x38fbc4),_0x39f255[_0x4c1cd4(0x1c4)]){for(_0x280bec=0x0,_0x5286d7=_0x39f255[_0x4c1cd4(0x1c4)];_0x280bec<_0x5286d7;_0x280bec++)_0x39f255[_0x280bec](_0x280bec);}_0x295dbc[_0x4c1cd4(0x1c4)]&&(_0x2b7aed['props']=_0x295dbc);}catch(_0x21e767){_0x5b7587(_0x21e767,_0x2b7aed,_0x38fbc4);}return this[_0x4c1cd4(0x147)](_0x530d8b,_0x2b7aed),this['_treeNodePropertiesAfterFullValue'](_0x2b7aed,_0x38fbc4),_0x38fbc4[_0x4c1cd4(0x1a4)]['current']=_0x22d344,_0x38fbc4['level']--,_0x38fbc4[_0x4c1cd4(0x169)]=_0x36537a,_0x38fbc4[_0x4c1cd4(0x169)]&&_0x38fbc4[_0x4c1cd4(0x16f)]['pop'](),_0x2b7aed;}[_0x2675de(0x11c)](_0x32ab70){var _0x3b13c4=_0x2675de;return Object['getOwnPropertySymbols']?Object[_0x3b13c4(0x1e4)](_0x32ab70):[];}[_0x2675de(0x1a6)](_0x44e2f5){var _0x460462=_0x2675de;return!!(_0x44e2f5&&_0xdbc1c1[_0x460462(0x19b)]&&this[_0x460462(0x14c)](_0x44e2f5)===_0x460462(0x14f)&&_0x44e2f5[_0x460462(0x1c8)]);}[_0x2675de(0x11d)](_0x20d448,_0x20f181,_0x50d760){var _0x3647c2=_0x2675de;return _0x50d760[_0x3647c2(0x13d)]?typeof _0x20d448[_0x20f181]==_0x3647c2(0x1a5):!0x1;}[_0x2675de(0x196)](_0x57c0dc){var _0xc6109c=_0x2675de,_0x392697='';return _0x392697=typeof _0x57c0dc,_0x392697===_0xc6109c(0x145)?this[_0xc6109c(0x14c)](_0x57c0dc)===_0xc6109c(0x1ab)?_0x392697=_0xc6109c(0x122):this[_0xc6109c(0x14c)](_0x57c0dc)===_0xc6109c(0x132)?_0x392697=_0xc6109c(0x134):_0x57c0dc===null?_0x392697=_0xc6109c(0x1ba):_0x57c0dc[_0xc6109c(0x17b)]&&(_0x392697=_0x57c0dc[_0xc6109c(0x17b)][_0xc6109c(0x1b4)]||_0x392697):_0x392697===_0xc6109c(0x1d8)&&this['_HTMLAllCollection']&&_0x57c0dc instanceof this[_0xc6109c(0x10e)]&&(_0x392697=_0xc6109c(0x14e)),_0x392697;}[_0x2675de(0x14c)](_0x53d176){return Object['prototype']['toString']['call'](_0x53d176);}[_0x2675de(0x12d)](_0x2ff974){var _0x302ac9=_0x2675de;return _0x2ff974===_0x302ac9(0x111)||_0x2ff974==='string'||_0x2ff974===_0x302ac9(0x173);}[_0x2675de(0x193)](_0x38b1a8){var _0x214448=_0x2675de;return _0x38b1a8==='Boolean'||_0x38b1a8===_0x214448(0x1cd)||_0x38b1a8===_0x214448(0x1db);}[_0x2675de(0x165)](_0x2b37a6,_0xebce77,_0x16984c,_0x34a25a,_0xa395fe,_0x161d1c){var _0x5ac431=this;return function(_0x99b6a3){var _0x4df1ef=_0x579b,_0x2f5fd3=_0xa395fe[_0x4df1ef(0x1a4)][_0x4df1ef(0x13c)],_0x45229c=_0xa395fe[_0x4df1ef(0x1a4)]['index'],_0x187921=_0xa395fe['node'][_0x4df1ef(0x135)];_0xa395fe[_0x4df1ef(0x1a4)][_0x4df1ef(0x135)]=_0x2f5fd3,_0xa395fe[_0x4df1ef(0x1a4)][_0x4df1ef(0x136)]=typeof _0x34a25a==_0x4df1ef(0x173)?_0x34a25a:_0x99b6a3,_0x2b37a6[_0x4df1ef(0x162)](_0x5ac431[_0x4df1ef(0x18c)](_0xebce77,_0x16984c,_0x34a25a,_0xa395fe,_0x161d1c)),_0xa395fe[_0x4df1ef(0x1a4)][_0x4df1ef(0x135)]=_0x187921,_0xa395fe['node']['index']=_0x45229c;};}[_0x2675de(0x11f)](_0x7152b3,_0x4183c3,_0x64a92b,_0x3f4512,_0xd3d674,_0x5a6a02,_0x1720bf){var _0xc09da8=_0x2675de,_0x38e8f7=this;return _0x4183c3[_0xc09da8(0x1d3)+_0xd3d674[_0xc09da8(0x11b)]()]=!0x0,function(_0x55bd54){var _0x337862=_0xc09da8,_0x2c1ee6=_0x5a6a02[_0x337862(0x1a4)]['current'],_0x3fa212=_0x5a6a02['node'][_0x337862(0x136)],_0x4d3244=_0x5a6a02[_0x337862(0x1a4)]['parent'];_0x5a6a02[_0x337862(0x1a4)][_0x337862(0x135)]=_0x2c1ee6,_0x5a6a02[_0x337862(0x1a4)]['index']=_0x55bd54,_0x7152b3[_0x337862(0x162)](_0x38e8f7[_0x337862(0x18c)](_0x64a92b,_0x3f4512,_0xd3d674,_0x5a6a02,_0x1720bf)),_0x5a6a02['node']['parent']=_0x4d3244,_0x5a6a02['node'][_0x337862(0x136)]=_0x3fa212;};}[_0x2675de(0x18c)](_0x5d7345,_0x596ecb,_0x51393a,_0x3aa96e,_0xe7ac7){var _0x202342=_0x2675de,_0x1ec239=this;_0xe7ac7||(_0xe7ac7=function(_0x4500da,_0x31bcad){return _0x4500da[_0x31bcad];});var _0x4d2c05=_0x51393a[_0x202342(0x11b)](),_0x3b26b4=_0x3aa96e['expressionsToEvaluate']||{},_0x308f2b=_0x3aa96e['depth'],_0x31d392=_0x3aa96e['isExpressionToEvaluate'];try{var _0x1eb627=this[_0x202342(0x121)](_0x5d7345),_0x1e82fb=_0x4d2c05;_0x1eb627&&_0x1e82fb[0x0]==='\\x27'&&(_0x1e82fb=_0x1e82fb['substr'](0x1,_0x1e82fb[_0x202342(0x1c4)]-0x2));var _0x524557=_0x3aa96e[_0x202342(0x14d)]=_0x3b26b4[_0x202342(0x1d3)+_0x1e82fb];_0x524557&&(_0x3aa96e[_0x202342(0x155)]=_0x3aa96e['depth']+0x1),_0x3aa96e[_0x202342(0x11a)]=!!_0x524557;var _0xeca7c4=typeof _0x51393a==_0x202342(0x15c),_0x21e72c={'name':_0xeca7c4||_0x1eb627?_0x4d2c05:this['_propertyName'](_0x4d2c05)};if(_0xeca7c4&&(_0x21e72c[_0x202342(0x15c)]=!0x0),!(_0x596ecb===_0x202342(0x122)||_0x596ecb===_0x202342(0x168))){var _0x3ea033=this[_0x202342(0x13f)](_0x5d7345,_0x51393a);if(_0x3ea033&&(_0x3ea033[_0x202342(0x19d)]&&(_0x21e72c[_0x202342(0x197)]=!0x0),_0x3ea033[_0x202342(0x18e)]&&!_0x524557&&!_0x3aa96e['resolveGetters']))return _0x21e72c[_0x202342(0x1b0)]=!0x0,this[_0x202342(0x172)](_0x21e72c,_0x3aa96e),_0x21e72c;}var _0x1187af;try{_0x1187af=_0xe7ac7(_0x5d7345,_0x51393a);}catch(_0x3b1f4e){return _0x21e72c={'name':_0x4d2c05,'type':_0x202342(0x1bb),'error':_0x3b1f4e[_0x202342(0x178)]},this['_processTreeNodeResult'](_0x21e72c,_0x3aa96e),_0x21e72c;}var _0x2d5737=this['_type'](_0x1187af),_0x25c6c0=this[_0x202342(0x12d)](_0x2d5737);if(_0x21e72c['type']=_0x2d5737,_0x25c6c0)this['_processTreeNodeResult'](_0x21e72c,_0x3aa96e,_0x1187af,function(){var _0x68fe85=_0x202342;_0x21e72c[_0x68fe85(0x19a)]=_0x1187af[_0x68fe85(0x1ac)](),!_0x524557&&_0x1ec239[_0x68fe85(0x198)](_0x2d5737,_0x21e72c,_0x3aa96e,{});});else{var _0x34b88c=_0x3aa96e[_0x202342(0x169)]&&_0x3aa96e['level']<_0x3aa96e['autoExpandMaxDepth']&&_0x3aa96e['autoExpandPreviousObjects'][_0x202342(0x189)](_0x1187af)<0x0&&_0x2d5737!=='function'&&_0x3aa96e[_0x202342(0x13e)]<_0x3aa96e[_0x202342(0x177)];_0x34b88c||_0x3aa96e['level']<_0x308f2b||_0x524557?(this[_0x202342(0x106)](_0x21e72c,_0x1187af,_0x3aa96e,_0x524557||{}),this[_0x202342(0x147)](_0x1187af,_0x21e72c)):this[_0x202342(0x172)](_0x21e72c,_0x3aa96e,_0x1187af,function(){var _0x49728f=_0x202342;_0x2d5737===_0x49728f(0x1ba)||_0x2d5737===_0x49728f(0x1d8)||(delete _0x21e72c['value'],_0x21e72c[_0x49728f(0x176)]=!0x0);});}return _0x21e72c;}finally{_0x3aa96e[_0x202342(0x14d)]=_0x3b26b4,_0x3aa96e[_0x202342(0x155)]=_0x308f2b,_0x3aa96e[_0x202342(0x11a)]=_0x31d392;}}[_0x2675de(0x198)](_0x2b7e01,_0x1ef482,_0x1c887e,_0x259906){var _0x1e4f96=_0x2675de,_0x41ba20=_0x259906[_0x1e4f96(0x164)]||_0x1c887e[_0x1e4f96(0x164)];if((_0x2b7e01==='string'||_0x2b7e01==='String')&&_0x1ef482[_0x1e4f96(0x19a)]){let _0x4f307c=_0x1ef482[_0x1e4f96(0x19a)][_0x1e4f96(0x1c4)];_0x1c887e[_0x1e4f96(0x17f)]+=_0x4f307c,_0x1c887e['allStrLength']>_0x1c887e[_0x1e4f96(0x1b5)]?(_0x1ef482[_0x1e4f96(0x176)]='',delete _0x1ef482[_0x1e4f96(0x19a)]):_0x4f307c>_0x41ba20&&(_0x1ef482[_0x1e4f96(0x176)]=_0x1ef482['value'][_0x1e4f96(0x1ea)](0x0,_0x41ba20),delete _0x1ef482[_0x1e4f96(0x19a)]);}}[_0x2675de(0x121)](_0x4beb8f){var _0xe34be2=_0x2675de;return!!(_0x4beb8f&&_0xdbc1c1[_0xe34be2(0x16b)]&&this['_objectToString'](_0x4beb8f)===_0xe34be2(0x15d)&&_0x4beb8f[_0xe34be2(0x1c8)]);}['_propertyName'](_0x425258){var _0x5d46f8=_0x2675de;if(_0x425258[_0x5d46f8(0x129)](/^\\d+$/))return _0x425258;var _0x93286c;try{_0x93286c=JSON[_0x5d46f8(0x171)](''+_0x425258);}catch{_0x93286c='\\x22'+this[_0x5d46f8(0x14c)](_0x425258)+'\\x22';}return _0x93286c['match'](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x93286c=_0x93286c[_0x5d46f8(0x1ea)](0x1,_0x93286c[_0x5d46f8(0x1c4)]-0x2):_0x93286c=_0x93286c['replace'](/'/g,'\\x5c\\x27')[_0x5d46f8(0x141)](/\\\\\"/g,'\\x22')[_0x5d46f8(0x141)](/(^\"|\"$)/g,'\\x27'),_0x93286c;}[_0x2675de(0x172)](_0x283559,_0x2927a4,_0x253c00,_0x5b3c14){var _0x287e7b=_0x2675de;this[_0x287e7b(0x117)](_0x283559,_0x2927a4),_0x5b3c14&&_0x5b3c14(),this[_0x287e7b(0x147)](_0x253c00,_0x283559),this['_treeNodePropertiesAfterFullValue'](_0x283559,_0x2927a4);}[_0x2675de(0x117)](_0x1b0168,_0x18e389){var _0x33f135=_0x2675de;this[_0x33f135(0x1e7)](_0x1b0168,_0x18e389),this[_0x33f135(0x1d4)](_0x1b0168,_0x18e389),this[_0x33f135(0x115)](_0x1b0168,_0x18e389),this[_0x33f135(0x1e1)](_0x1b0168,_0x18e389);}[_0x2675de(0x1e7)](_0x34f46f,_0x212b55){}[_0x2675de(0x1d4)](_0x15d663,_0x5e22aa){}['_setNodeLabel'](_0x50557a,_0x9c7cba){}['_isUndefined'](_0x2c9290){var _0x1f93d7=_0x2675de;return _0x2c9290===this[_0x1f93d7(0x1cb)];}[_0x2675de(0x14b)](_0x331985,_0x1816da){var _0x389fe5=_0x2675de;this[_0x389fe5(0x157)](_0x331985,_0x1816da),this[_0x389fe5(0x1a1)](_0x331985),_0x1816da[_0x389fe5(0x113)]&&this['_sortProps'](_0x331985),this[_0x389fe5(0x138)](_0x331985,_0x1816da),this[_0x389fe5(0x1c3)](_0x331985,_0x1816da),this[_0x389fe5(0x1ce)](_0x331985);}[_0x2675de(0x147)](_0x4c9cf6,_0x5f4ff1){var _0x5c3fae=_0x2675de;try{_0x4c9cf6&&typeof _0x4c9cf6[_0x5c3fae(0x1c4)]==_0x5c3fae(0x173)&&(_0x5f4ff1[_0x5c3fae(0x1c4)]=_0x4c9cf6[_0x5c3fae(0x1c4)]);}catch{}if(_0x5f4ff1[_0x5c3fae(0x12a)]==='number'||_0x5f4ff1[_0x5c3fae(0x12a)]==='Number'){if(isNaN(_0x5f4ff1['value']))_0x5f4ff1[_0x5c3fae(0x15e)]=!0x0,delete _0x5f4ff1['value'];else switch(_0x5f4ff1[_0x5c3fae(0x19a)]){case Number[_0x5c3fae(0x151)]:_0x5f4ff1[_0x5c3fae(0x1df)]=!0x0,delete _0x5f4ff1[_0x5c3fae(0x19a)];break;case Number[_0x5c3fae(0x1d1)]:_0x5f4ff1[_0x5c3fae(0x19c)]=!0x0,delete _0x5f4ff1[_0x5c3fae(0x19a)];break;case 0x0:this[_0x5c3fae(0x1a8)](_0x5f4ff1[_0x5c3fae(0x19a)])&&(_0x5f4ff1[_0x5c3fae(0x137)]=!0x0);break;}}else _0x5f4ff1[_0x5c3fae(0x12a)]===_0x5c3fae(0x1a5)&&typeof _0x4c9cf6[_0x5c3fae(0x1b4)]==_0x5c3fae(0x124)&&_0x4c9cf6[_0x5c3fae(0x1b4)]&&_0x5f4ff1['name']&&_0x4c9cf6[_0x5c3fae(0x1b4)]!==_0x5f4ff1[_0x5c3fae(0x1b4)]&&(_0x5f4ff1[_0x5c3fae(0x1da)]=_0x4c9cf6[_0x5c3fae(0x1b4)]);}[_0x2675de(0x1a8)](_0x2ccdd3){var _0x5e97e8=_0x2675de;return 0x1/_0x2ccdd3===Number[_0x5e97e8(0x1d1)];}[_0x2675de(0x16d)](_0x20a56f){var _0x39e9be=_0x2675de;!_0x20a56f[_0x39e9be(0x16c)]||!_0x20a56f['props']['length']||_0x20a56f['type']==='array'||_0x20a56f['type']===_0x39e9be(0x16b)||_0x20a56f[_0x39e9be(0x12a)]==='Set'||_0x20a56f['props']['sort'](function(_0x19992d,_0x58ce2e){var _0x517de8=_0x39e9be,_0x4d3550=_0x19992d[_0x517de8(0x1b4)][_0x517de8(0x1c6)](),_0x4430b4=_0x58ce2e[_0x517de8(0x1b4)][_0x517de8(0x1c6)]();return _0x4d3550<_0x4430b4?-0x1:_0x4d3550>_0x4430b4?0x1:0x0;});}['_addFunctionsNode'](_0x27879f,_0x4d3949){var _0x1afa40=_0x2675de;if(!(_0x4d3949[_0x1afa40(0x13d)]||!_0x27879f[_0x1afa40(0x16c)]||!_0x27879f[_0x1afa40(0x16c)][_0x1afa40(0x1c4)])){for(var _0x47cc15=[],_0x4c3706=[],_0xbf217d=0x0,_0x43da33=_0x27879f[_0x1afa40(0x16c)][_0x1afa40(0x1c4)];_0xbf217d<_0x43da33;_0xbf217d++){var _0x1ba379=_0x27879f[_0x1afa40(0x16c)][_0xbf217d];_0x1ba379[_0x1afa40(0x12a)]===_0x1afa40(0x1a5)?_0x47cc15[_0x1afa40(0x162)](_0x1ba379):_0x4c3706[_0x1afa40(0x162)](_0x1ba379);}if(!(!_0x4c3706[_0x1afa40(0x1c4)]||_0x47cc15['length']<=0x1)){_0x27879f[_0x1afa40(0x16c)]=_0x4c3706;var _0x2c9df4={'functionsNode':!0x0,'props':_0x47cc15};this[_0x1afa40(0x1e7)](_0x2c9df4,_0x4d3949),this[_0x1afa40(0x157)](_0x2c9df4,_0x4d3949),this[_0x1afa40(0x1a1)](_0x2c9df4),this['_setNodePermissions'](_0x2c9df4,_0x4d3949),_0x2c9df4['id']+='\\x20f',_0x27879f[_0x1afa40(0x16c)]['unshift'](_0x2c9df4);}}}[_0x2675de(0x1c3)](_0x1f98ca,_0x519b90){}['_setNodeExpandableState'](_0x28a936){}['_isArray'](_0x3f1260){var _0x4c22d7=_0x2675de;return Array['isArray'](_0x3f1260)||typeof _0x3f1260=='object'&&this[_0x4c22d7(0x14c)](_0x3f1260)===_0x4c22d7(0x1ab);}[_0x2675de(0x1e1)](_0x35c845,_0x56d08d){}[_0x2675de(0x1ce)](_0x1c003e){var _0x4d1056=_0x2675de;delete _0x1c003e[_0x4d1056(0x114)],delete _0x1c003e[_0x4d1056(0x14a)],delete _0x1c003e[_0x4d1056(0x17c)];}[_0x2675de(0x115)](_0x48e3a2,_0xb1d7e2){}[_0x2675de(0x109)](_0x5836bb){var _0x230348=_0x2675de;return _0x5836bb?_0x5836bb[_0x230348(0x129)](this['_numberRegExp'])?'['+_0x5836bb+']':_0x5836bb[_0x230348(0x129)](this[_0x230348(0x1d2)])?'.'+_0x5836bb:_0x5836bb[_0x230348(0x129)](this[_0x230348(0x133)])?'['+_0x5836bb+']':'[\\x27'+_0x5836bb+'\\x27]':'';}}let _0x36051c=new _0x25d138();function _0x3bf19a(_0x403a14,_0x665b46,_0x42913b,_0x2eefe3,_0x14f2e2,_0x5aae0b){var _0x5f1064=_0x2675de;let _0x5ed061,_0x3d67b1;try{_0x3d67b1=_0x14738f(),_0x5ed061=_0x544d1e[_0x665b46],!_0x5ed061||_0x3d67b1-_0x5ed061['ts']>0x1f4&&_0x5ed061[_0x5f1064(0x12f)]&&_0x5ed061[_0x5f1064(0x17a)]/_0x5ed061[_0x5f1064(0x12f)]<0x64?(_0x544d1e[_0x665b46]=_0x5ed061={'count':0x0,'time':0x0,'ts':_0x3d67b1},_0x544d1e['hits']={}):_0x3d67b1-_0x544d1e['hits']['ts']>0x32&&_0x544d1e[_0x5f1064(0x12c)]['count']&&_0x544d1e[_0x5f1064(0x12c)]['time']/_0x544d1e[_0x5f1064(0x12c)][_0x5f1064(0x12f)]<0x64&&(_0x544d1e[_0x5f1064(0x12c)]={});let _0x579162=[],_0x30c7dd=_0x5ed061[_0x5f1064(0x1ad)]||_0x544d1e[_0x5f1064(0x12c)][_0x5f1064(0x1ad)]?_0x348293:_0x200de0,_0x25fbcc=_0x393872=>{var _0x502259=_0x5f1064;let _0x1b7028={};return _0x1b7028[_0x502259(0x16c)]=_0x393872[_0x502259(0x16c)],_0x1b7028[_0x502259(0x152)]=_0x393872[_0x502259(0x152)],_0x1b7028['strLength']=_0x393872[_0x502259(0x164)],_0x1b7028['totalStrLength']=_0x393872['totalStrLength'],_0x1b7028[_0x502259(0x177)]=_0x393872[_0x502259(0x177)],_0x1b7028[_0x502259(0x139)]=_0x393872[_0x502259(0x139)],_0x1b7028[_0x502259(0x113)]=!0x1,_0x1b7028['noFunctions']=!_0x6e56bb,_0x1b7028[_0x502259(0x155)]=0x1,_0x1b7028['level']=0x0,_0x1b7028[_0x502259(0x1d6)]='root_exp_id',_0x1b7028['rootExpression']=_0x502259(0x10b),_0x1b7028['autoExpand']=!0x0,_0x1b7028[_0x502259(0x16f)]=[],_0x1b7028[_0x502259(0x13e)]=0x0,_0x1b7028[_0x502259(0x1b9)]=!0x0,_0x1b7028[_0x502259(0x17f)]=0x0,_0x1b7028[_0x502259(0x1a4)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x1b7028;};for(var _0x181db3=0x0;_0x181db3<_0x14f2e2[_0x5f1064(0x1c4)];_0x181db3++)_0x579162[_0x5f1064(0x162)](_0x36051c[_0x5f1064(0x106)]({'timeNode':_0x403a14==='time'||void 0x0},_0x14f2e2[_0x181db3],_0x25fbcc(_0x30c7dd),{}));if(_0x403a14===_0x5f1064(0x1ca)){let _0x1f1a2f=Error[_0x5f1064(0x149)];try{Error[_0x5f1064(0x149)]=0x1/0x0,_0x579162[_0x5f1064(0x162)](_0x36051c[_0x5f1064(0x106)]({'stackNode':!0x0},new Error()[_0x5f1064(0x161)],_0x25fbcc(_0x30c7dd),{'strLength':0x1/0x0}));}finally{Error['stackTraceLimit']=_0x1f1a2f;}}return{'method':_0x5f1064(0x16e),'version':_0x3a8f76,'args':[{'id':_0x665b46,'ts':_0x42913b,'args':_0x579162,'context':_0x5aae0b,'session':_0x2eefe3}]};}catch(_0x449699){return{'method':_0x5f1064(0x16e),'version':_0x3a8f76,'args':[{'id':_0x665b46,'ts':_0x42913b,'args':[{'type':_0x5f1064(0x1bb),'error':_0x449699&&_0x449699[_0x5f1064(0x178)],'context':_0x5aae0b,'session':_0x2eefe3}]}]};}finally{try{if(_0x5ed061&&_0x3d67b1){let _0x22e96c=_0x14738f();_0x5ed061[_0x5f1064(0x12f)]++,_0x5ed061[_0x5f1064(0x17a)]+=_0x4445a0(_0x3d67b1,_0x22e96c),_0x5ed061['ts']=_0x22e96c,_0x544d1e[_0x5f1064(0x12c)][_0x5f1064(0x12f)]++,_0x544d1e['hits'][_0x5f1064(0x17a)]+=_0x4445a0(_0x3d67b1,_0x22e96c),_0x544d1e[_0x5f1064(0x12c)]['ts']=_0x22e96c,(_0x5ed061['count']>0x32||_0x5ed061[_0x5f1064(0x17a)]>0x64)&&(_0x5ed061['reduceLimits']=!0x0),(_0x544d1e[_0x5f1064(0x12c)][_0x5f1064(0x12f)]>0x3e8||_0x544d1e[_0x5f1064(0x12c)][_0x5f1064(0x17a)]>0x12c)&&(_0x544d1e['hits'][_0x5f1064(0x1ad)]=!0x0);}}catch{}}}return _0xdbc1c1[_0x2675de(0x1dd)];})(globalThis,'127.0.0.1',_0x3bd2cd(0x131),_0x3bd2cd(0x18b),_0x3bd2cd(0x144),_0x3bd2cd(0x1a0),'1681748908908',_0x3bd2cd(0x1c1),_0x3bd2cd(0x140));");}catch(e){}};function oo_oo(i,...v){try{oo_cm().consoleLog(i, v);}catch(e){} return v};function oo_tr(i,...v){try{oo_cm().consoleTrace(i, v);}catch(e){} return v};function oo_ts(){try{oo_cm().consoleTime();}catch(e){}};function oo_te(){try{oo_cm().consoleTimeEnd();}catch(e){}};/*eslint eslint-comments/disable-enable-pair:,eslint-comments/no-unlimited-disable:,eslint-comments/no-aggregating-enable:,eslint-comments/no-duplicate-disable:,eslint-comments/no-unused-disable:,eslint-comments/no-unused-enable:,*/

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1R3RDtBQUN4RCxpRUFBZSw4REFBYTs7Ozs7Ozs7Ozs7Ozs7O0FDRDVCO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOcUU7QUFDSjtBQUNRO0FBQ2Q7QUFDUTtBQUNOO0FBQ0g7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQSx5QkFBeUIsd0VBQWMsaUJBQWlCO0FBQ3hEO0FBQ0EsNkVBQTZFO0FBQzdFO0FBQ0E7QUFDQTtBQUNBLGFBQWEscUVBQWU7QUFDNUIsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTTtBQUNOO0FBQ0E7QUFDQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esc0JBQXNCLDJFQUFpQixRQUFRO0FBQy9DO0FBQ0EsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHFFQUFlO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHFFQUFlO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtRUFBaUI7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHFFQUFlO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsZUFBZSxvRUFBVTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGtCQUFrQix1RUFBYTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxvQkFBb0IseUVBQWU7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHFFQUFlO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxXQUFXLG1FQUFpQjtBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxXQUFXLG1FQUFpQjtBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxXQUFXLG1FQUFpQjtBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxxRUFBZTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLHFFQUFlO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FB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V0FBVyxVQUFVLHVCQUF1QixJQUFJLDRCQUE0QixXQUFXLFVBQVUsaUJBQWlCLElBQUksdUJBQXVCLFlBQVksaUJBQWlCLElBQUksMEJBQTBCLFlBQVk7Ozs7OztVQzdCbjJtQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTkE7QUFDa0Q7QUFDbEQ7QUFDQSxrRUFBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZGVmYXVsdExvY2FsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvZm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvbGlnaHRGb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9sb25nRm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ0RheU9mWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENJU09XZWVrL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcHJvdGVjdGVkVG9rZW5zL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDSVNPV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vYWRkRGF5cy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vYWRkTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9hZGRNb250aHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2FkZC9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZm9ybWF0L2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVmFsaWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdExvbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9sb2NhbGl6ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvbWF0Y2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3ViTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZGlzcGxheUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvcXVlcnkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRMZWFkaW5nWmVyb3MobnVtYmVyLCB0YXJnZXRMZW5ndGgpIHtcclxuICB2YXIgc2lnbiA9IG51bWJlciA8IDAgPyAnLScgOiAnJztcclxuICB2YXIgb3V0cHV0ID0gTWF0aC5hYnMobnVtYmVyKS50b1N0cmluZygpO1xyXG5cclxuICB3aGlsZSAob3V0cHV0Lmxlbmd0aCA8IHRhcmdldExlbmd0aCkge1xyXG4gICAgb3V0cHV0ID0gJzAnICsgb3V0cHV0O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHNpZ24gKyBvdXRwdXQ7XHJcbn0iLCJpbXBvcnQgZGVmYXVsdExvY2FsZSBmcm9tIFwiLi4vLi4vbG9jYWxlL2VuLVVTL2luZGV4LmpzXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGRlZmF1bHRMb2NhbGU7IiwidmFyIGRlZmF1bHRPcHRpb25zID0ge307XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0T3B0aW9ucygpIHtcclxuICByZXR1cm4gZGVmYXVsdE9wdGlvbnM7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNldERlZmF1bHRPcHRpb25zKG5ld09wdGlvbnMpIHtcclxuICBkZWZhdWx0T3B0aW9ucyA9IG5ld09wdGlvbnM7XHJcbn0iLCJpbXBvcnQgZ2V0VVRDRGF5T2ZZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ0RheU9mWWVhci9pbmRleC5qc1wiO1xyXG5pbXBvcnQgZ2V0VVRDSVNPV2VlayBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENJU09XZWVrL2luZGV4LmpzXCI7XHJcbmltcG9ydCBnZXRVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xyXG5pbXBvcnQgZ2V0VVRDV2VlayBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENXZWVrL2luZGV4LmpzXCI7XHJcbmltcG9ydCBnZXRVVENXZWVrWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENXZWVrWWVhci9pbmRleC5qc1wiO1xyXG5pbXBvcnQgYWRkTGVhZGluZ1plcm9zIGZyb20gXCIuLi8uLi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanNcIjtcclxuaW1wb3J0IGxpZ2h0Rm9ybWF0dGVycyBmcm9tIFwiLi4vbGlnaHRGb3JtYXR0ZXJzL2luZGV4LmpzXCI7XHJcbnZhciBkYXlQZXJpb2RFbnVtID0ge1xyXG4gIGFtOiAnYW0nLFxyXG4gIHBtOiAncG0nLFxyXG4gIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxyXG4gIG5vb246ICdub29uJyxcclxuICBtb3JuaW5nOiAnbW9ybmluZycsXHJcbiAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcclxuICBldmVuaW5nOiAnZXZlbmluZycsXHJcbiAgbmlnaHQ6ICduaWdodCdcclxufTtcclxuXHJcbi8qXHJcbiAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcclxuICogfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxyXG4gKiB8ICBhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBBKiB8IE1pbGxpc2Vjb25kcyBpbiBkYXkgICAgICAgICAgICB8XHJcbiAqIHwgIGIgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgIHwgIEIgIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgIHxcclxuICogfCAgYyAgfCBTdGFuZC1hbG9uZSBsb2NhbCBkYXkgb2Ygd2VlayAgfCAgQyogfCBMb2NhbGl6ZWQgaG91ciB3LyBkYXkgcGVyaW9kICAgfFxyXG4gKiB8ICBkICB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICB8ICBEICB8IERheSBvZiB5ZWFyICAgICAgICAgICAgICAgICAgICB8XHJcbiAqIHwgIGUgIHwgTG9jYWwgZGF5IG9mIHdlZWsgICAgICAgICAgICAgIHwgIEUgIHwgRGF5IG9mIHdlZWsgICAgICAgICAgICAgICAgICAgIHxcclxuICogfCAgZiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgRiogfCBEYXkgb2Ygd2VlayBpbiBtb250aCAgICAgICAgICAgfFxyXG4gKiB8ICBnKiB8IE1vZGlmaWVkIEp1bGlhbiBkYXkgICAgICAgICAgICB8ICBHICB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XHJcbiAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcclxuICogfCAgaSEgfCBJU08gZGF5IG9mIHdlZWsgICAgICAgICAgICAgICAgfCAgSSEgfCBJU08gd2VlayBvZiB5ZWFyICAgICAgICAgICAgICAgfFxyXG4gKiB8ICBqKiB8IExvY2FsaXplZCBob3VyIHcvIGRheSBwZXJpb2QgICB8ICBKKiB8IExvY2FsaXplZCBob3VyIHcvbyBkYXkgcGVyaW9kICB8XHJcbiAqIHwgIGsgIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgIHwgIEsgIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgIHxcclxuICogfCAgbCogfCAoZGVwcmVjYXRlZCkgICAgICAgICAgICAgICAgICAgfCAgTCAgfCBTdGFuZC1hbG9uZSBtb250aCAgICAgICAgICAgICAgfFxyXG4gKiB8ICBtICB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBNICB8IE1vbnRoICAgICAgICAgICAgICAgICAgICAgICAgICB8XHJcbiAqIHwgIG4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcclxuICogfCAgbyEgfCBPcmRpbmFsIG51bWJlciBtb2RpZmllciAgICAgICAgfCAgTyAgfCBUaW1lem9uZSAoR01UKSAgICAgICAgICAgICAgICAgfFxyXG4gKiB8ICBwISB8IExvbmcgbG9jYWxpemVkIHRpbWUgICAgICAgICAgICB8ICBQISB8IExvbmcgbG9jYWxpemVkIGRhdGUgICAgICAgICAgICB8XHJcbiAqIHwgIHEgIHwgU3RhbmQtYWxvbmUgcXVhcnRlciAgICAgICAgICAgIHwgIFEgIHwgUXVhcnRlciAgICAgICAgICAgICAgICAgICAgICAgIHxcclxuICogfCAgciogfCBSZWxhdGVkIEdyZWdvcmlhbiB5ZWFyICAgICAgICAgfCAgUiEgfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICAgfFxyXG4gKiB8ICBzICB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICB8ICBTICB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICB8XHJcbiAqIHwgIHQhIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgIHwgIFQhIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgIHxcclxuICogfCAgdSAgfCBFeHRlbmRlZCB5ZWFyICAgICAgICAgICAgICAgICAgfCAgVSogfCBDeWNsaWMgeWVhciAgICAgICAgICAgICAgICAgICAgfFxyXG4gKiB8ICB2KiB8IFRpbWV6b25lIChnZW5lcmljIG5vbi1sb2NhdC4pICB8ICBWKiB8IFRpbWV6b25lIChsb2NhdGlvbikgICAgICAgICAgICB8XHJcbiAqIHwgIHcgIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgIHwgIFcqIHwgV2VlayBvZiBtb250aCAgICAgICAgICAgICAgICAgIHxcclxuICogfCAgeCAgfCBUaW1lem9uZSAoSVNPLTg2MDEgdy9vIFopICAgICAgfCAgWCAgfCBUaW1lem9uZSAoSVNPLTg2MDEpICAgICAgICAgICAgfFxyXG4gKiB8ICB5ICB8IFllYXIgKGFicykgICAgICAgICAgICAgICAgICAgICB8ICBZICB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICB8XHJcbiAqIHwgIHogIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pIHwgIFoqIHwgVGltZXpvbmUgKGFsaWFzZXMpICAgICAgICAgICAgIHxcclxuICpcclxuICogTGV0dGVycyBtYXJrZWQgYnkgKiBhcmUgbm90IGltcGxlbWVudGVkIGJ1dCByZXNlcnZlZCBieSBVbmljb2RlIHN0YW5kYXJkLlxyXG4gKlxyXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAhIGFyZSBub24tc3RhbmRhcmQsIGJ1dCBpbXBsZW1lbnRlZCBieSBkYXRlLWZuczpcclxuICogLSBgb2AgbW9kaWZpZXMgdGhlIHByZXZpb3VzIHRva2VuIHRvIHR1cm4gaXQgaW50byBhbiBvcmRpbmFsIChzZWUgYGZvcm1hdGAgZG9jcylcclxuICogLSBgaWAgaXMgSVNPIGRheSBvZiB3ZWVrLiBGb3IgYGlgIGFuZCBgaWlgIGlzIHJldHVybnMgbnVtZXJpYyBJU08gd2VlayBkYXlzLFxyXG4gKiAgIGkuZS4gNyBmb3IgU3VuZGF5LCAxIGZvciBNb25kYXksIGV0Yy5cclxuICogLSBgSWAgaXMgSVNPIHdlZWsgb2YgeWVhciwgYXMgb3Bwb3NlZCB0byBgd2Agd2hpY2ggaXMgbG9jYWwgd2VlayBvZiB5ZWFyLlxyXG4gKiAtIGBSYCBpcyBJU08gd2Vlay1udW1iZXJpbmcgeWVhciwgYXMgb3Bwb3NlZCB0byBgWWAgd2hpY2ggaXMgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhci5cclxuICogICBgUmAgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGBJYCBhbmQgYGlgXHJcbiAqICAgZm9yIHVuaXZlcnNhbCBJU08gd2Vlay1udW1iZXJpbmcgZGF0ZSwgd2hlcmVhc1xyXG4gKiAgIGBZYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYHdgIGFuZCBgZWBcclxuICogICBmb3Igd2Vlay1udW1iZXJpbmcgZGF0ZSBzcGVjaWZpYyB0byB0aGUgbG9jYWxlLlxyXG4gKiAtIGBQYCBpcyBsb25nIGxvY2FsaXplZCBkYXRlIGZvcm1hdFxyXG4gKiAtIGBwYCBpcyBsb25nIGxvY2FsaXplZCB0aW1lIGZvcm1hdFxyXG4gKi9cclxudmFyIGZvcm1hdHRlcnMgPSB7XHJcbiAgLy8gRXJhXHJcbiAgRzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xyXG4gICAgdmFyIGVyYSA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKSA+IDAgPyAxIDogMDtcclxuXHJcbiAgICBzd2l0Y2ggKHRva2VuKSB7XHJcbiAgICAgIC8vIEFELCBCQ1xyXG4gICAgICBjYXNlICdHJzpcclxuICAgICAgY2FzZSAnR0cnOlxyXG4gICAgICBjYXNlICdHR0cnOlxyXG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7XHJcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAvLyBBLCBCXHJcblxyXG4gICAgICBjYXNlICdHR0dHRyc6XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcclxuICAgICAgICAgIHdpZHRoOiAnbmFycm93J1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAvLyBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdFxyXG5cclxuICAgICAgY2FzZSAnR0dHRyc6XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcclxuICAgICAgICAgIHdpZHRoOiAnd2lkZSdcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9LFxyXG4gIC8vIFllYXJcclxuICB5OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XHJcbiAgICAvLyBPcmRpbmFsIG51bWJlclxyXG4gICAgaWYgKHRva2VuID09PSAneW8nKSB7XHJcbiAgICAgIHZhciBzaWduZWRZZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpOyAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxyXG5cclxuICAgICAgdmFyIHllYXIgPSBzaWduZWRZZWFyID4gMCA/IHNpZ25lZFllYXIgOiAxIC0gc2lnbmVkWWVhcjtcclxuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoeWVhciwge1xyXG4gICAgICAgIHVuaXQ6ICd5ZWFyJ1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLnkoZGF0ZSwgdG9rZW4pO1xyXG4gIH0sXHJcbiAgLy8gTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhclxyXG4gIFk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcclxuICAgIHZhciBzaWduZWRXZWVrWWVhciA9IGdldFVUQ1dlZWtZZWFyKGRhdGUsIG9wdGlvbnMpOyAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxyXG5cclxuICAgIHZhciB3ZWVrWWVhciA9IHNpZ25lZFdlZWtZZWFyID4gMCA/IHNpZ25lZFdlZWtZZWFyIDogMSAtIHNpZ25lZFdlZWtZZWFyOyAvLyBUd28gZGlnaXQgeWVhclxyXG5cclxuICAgIGlmICh0b2tlbiA9PT0gJ1lZJykge1xyXG4gICAgICB2YXIgdHdvRGlnaXRZZWFyID0gd2Vla1llYXIgJSAxMDA7XHJcbiAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModHdvRGlnaXRZZWFyLCAyKTtcclxuICAgIH0gLy8gT3JkaW5hbCBudW1iZXJcclxuXHJcblxyXG4gICAgaWYgKHRva2VuID09PSAnWW8nKSB7XHJcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHdlZWtZZWFyLCB7XHJcbiAgICAgICAgdW5pdDogJ3llYXInXHJcbiAgICAgIH0pO1xyXG4gICAgfSAvLyBQYWRkaW5nXHJcblxyXG5cclxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3Mod2Vla1llYXIsIHRva2VuLmxlbmd0aCk7XHJcbiAgfSxcclxuICAvLyBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxyXG4gIFI6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xyXG4gICAgdmFyIGlzb1dlZWtZZWFyID0gZ2V0VVRDSVNPV2Vla1llYXIoZGF0ZSk7IC8vIFBhZGRpbmdcclxuXHJcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb1dlZWtZZWFyLCB0b2tlbi5sZW5ndGgpO1xyXG4gIH0sXHJcbiAgLy8gRXh0ZW5kZWQgeWVhci4gVGhpcyBpcyBhIHNpbmdsZSBudW1iZXIgZGVzaWduYXRpbmcgdGhlIHllYXIgb2YgdGhpcyBjYWxlbmRhciBzeXN0ZW0uXHJcbiAgLy8gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIGB5YCBhbmQgYHVgIGxvY2FsaXplcnMgYXJlIEIuQy4geWVhcnM6XHJcbiAgLy8gfCBZZWFyIHwgYHlgIHwgYHVgIHxcclxuICAvLyB8LS0tLS0tfC0tLS0tfC0tLS0tfFxyXG4gIC8vIHwgQUMgMSB8ICAgMSB8ICAgMSB8XHJcbiAgLy8gfCBCQyAxIHwgICAxIHwgICAwIHxcclxuICAvLyB8IEJDIDIgfCAgIDIgfCAgLTEgfFxyXG4gIC8vIEFsc28gYHl5YCBhbHdheXMgcmV0dXJucyB0aGUgbGFzdCB0d28gZGlnaXRzIG9mIGEgeWVhcixcclxuICAvLyB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQuXHJcbiAgdTogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XHJcbiAgICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcclxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoeWVhciwgdG9rZW4ubGVuZ3RoKTtcclxuICB9LFxyXG4gIC8vIFF1YXJ0ZXJcclxuICBROiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XHJcbiAgICB2YXIgcXVhcnRlciA9IE1hdGguY2VpbCgoZGF0ZS5nZXRVVENNb250aCgpICsgMSkgLyAzKTtcclxuXHJcbiAgICBzd2l0Y2ggKHRva2VuKSB7XHJcbiAgICAgIC8vIDEsIDIsIDMsIDRcclxuICAgICAgY2FzZSAnUSc6XHJcbiAgICAgICAgcmV0dXJuIFN0cmluZyhxdWFydGVyKTtcclxuICAgICAgLy8gMDEsIDAyLCAwMywgMDRcclxuXHJcbiAgICAgIGNhc2UgJ1FRJzpcclxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHF1YXJ0ZXIsIDIpO1xyXG4gICAgICAvLyAxc3QsIDJuZCwgM3JkLCA0dGhcclxuXHJcbiAgICAgIGNhc2UgJ1FvJzpcclxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7XHJcbiAgICAgICAgICB1bml0OiAncXVhcnRlcidcclxuICAgICAgICB9KTtcclxuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcclxuXHJcbiAgICAgIGNhc2UgJ1FRUSc6XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xyXG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXHJcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcclxuICAgICAgICB9KTtcclxuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXHJcblxyXG4gICAgICBjYXNlICdRUVFRUSc6XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xyXG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxyXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIC8vIDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uXHJcblxyXG4gICAgICBjYXNlICdRUVFRJzpcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XHJcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxyXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSxcclxuICAvLyBTdGFuZC1hbG9uZSBxdWFydGVyXHJcbiAgcTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xyXG4gICAgdmFyIHF1YXJ0ZXIgPSBNYXRoLmNlaWwoKGRhdGUuZ2V0VVRDTW9udGgoKSArIDEpIC8gMyk7XHJcblxyXG4gICAgc3dpdGNoICh0b2tlbikge1xyXG4gICAgICAvLyAxLCAyLCAzLCA0XHJcbiAgICAgIGNhc2UgJ3EnOlxyXG4gICAgICAgIHJldHVybiBTdHJpbmcocXVhcnRlcik7XHJcbiAgICAgIC8vIDAxLCAwMiwgMDMsIDA0XHJcblxyXG4gICAgICBjYXNlICdxcSc6XHJcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhxdWFydGVyLCAyKTtcclxuICAgICAgLy8gMXN0LCAybmQsIDNyZCwgNHRoXHJcblxyXG4gICAgICBjYXNlICdxbyc6XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIocXVhcnRlciwge1xyXG4gICAgICAgICAgdW5pdDogJ3F1YXJ0ZXInXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIC8vIFExLCBRMiwgUTMsIFE0XHJcblxyXG4gICAgICBjYXNlICdxcXEnOlxyXG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcclxuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxyXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxyXG5cclxuICAgICAgY2FzZSAncXFxcXEnOlxyXG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcclxuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcclxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxyXG5cclxuICAgICAgY2FzZSAncXFxcSc6XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xyXG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcclxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgLy8gTW9udGhcclxuICBNOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XHJcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XHJcblxyXG4gICAgc3dpdGNoICh0b2tlbikge1xyXG4gICAgICBjYXNlICdNJzpcclxuICAgICAgY2FzZSAnTU0nOlxyXG4gICAgICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuTShkYXRlLCB0b2tlbik7XHJcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDEydGhcclxuXHJcbiAgICAgIGNhc2UgJ01vJzpcclxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihtb250aCArIDEsIHtcclxuICAgICAgICAgIHVuaXQ6ICdtb250aCdcclxuICAgICAgICB9KTtcclxuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXHJcblxyXG4gICAgICBjYXNlICdNTU0nOlxyXG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xyXG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXHJcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcclxuICAgICAgICB9KTtcclxuICAgICAgLy8gSiwgRiwgLi4uLCBEXHJcblxyXG4gICAgICBjYXNlICdNTU1NTSc6XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XHJcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXHJcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcclxuICAgICAgICB9KTtcclxuICAgICAgLy8gSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcclxuXHJcbiAgICAgIGNhc2UgJ01NTU0nOlxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xyXG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcclxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgLy8gU3RhbmQtYWxvbmUgbW9udGhcclxuICBMOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XHJcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XHJcblxyXG4gICAgc3dpdGNoICh0b2tlbikge1xyXG4gICAgICAvLyAxLCAyLCAuLi4sIDEyXHJcbiAgICAgIGNhc2UgJ0wnOlxyXG4gICAgICAgIHJldHVybiBTdHJpbmcobW9udGggKyAxKTtcclxuICAgICAgLy8gMDEsIDAyLCAuLi4sIDEyXHJcblxyXG4gICAgICBjYXNlICdMTCc6XHJcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xyXG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCAxMnRoXHJcblxyXG4gICAgICBjYXNlICdMbyc6XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobW9udGggKyAxLCB7XHJcbiAgICAgICAgICB1bml0OiAnbW9udGgnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xyXG5cclxuICAgICAgY2FzZSAnTExMJzpcclxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcclxuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxyXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIC8vIEosIEYsIC4uLiwgRFxyXG5cclxuICAgICAgY2FzZSAnTExMTEwnOlxyXG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xyXG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxyXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXHJcblxyXG4gICAgICBjYXNlICdMTExMJzpcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcclxuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXHJcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9LFxyXG4gIC8vIExvY2FsIHdlZWsgb2YgeWVhclxyXG4gIHc6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcclxuICAgIHZhciB3ZWVrID0gZ2V0VVRDV2VlayhkYXRlLCBvcHRpb25zKTtcclxuXHJcbiAgICBpZiAodG9rZW4gPT09ICd3bycpIHtcclxuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2Vlaywge1xyXG4gICAgICAgIHVuaXQ6ICd3ZWVrJ1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHdlZWssIHRva2VuLmxlbmd0aCk7XHJcbiAgfSxcclxuICAvLyBJU08gd2VlayBvZiB5ZWFyXHJcbiAgSTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xyXG4gICAgdmFyIGlzb1dlZWsgPSBnZXRVVENJU09XZWVrKGRhdGUpO1xyXG5cclxuICAgIGlmICh0b2tlbiA9PT0gJ0lvJykge1xyXG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihpc29XZWVrLCB7XHJcbiAgICAgICAgdW5pdDogJ3dlZWsnXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvV2VlaywgdG9rZW4ubGVuZ3RoKTtcclxuICB9LFxyXG4gIC8vIERheSBvZiB0aGUgbW9udGhcclxuICBkOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XHJcbiAgICBpZiAodG9rZW4gPT09ICdkbycpIHtcclxuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENEYXRlKCksIHtcclxuICAgICAgICB1bml0OiAnZGF0ZSdcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5kKGRhdGUsIHRva2VuKTtcclxuICB9LFxyXG4gIC8vIERheSBvZiB5ZWFyXHJcbiAgRDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xyXG4gICAgdmFyIGRheU9mWWVhciA9IGdldFVUQ0RheU9mWWVhcihkYXRlKTtcclxuXHJcbiAgICBpZiAodG9rZW4gPT09ICdEbycpIHtcclxuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF5T2ZZZWFyLCB7XHJcbiAgICAgICAgdW5pdDogJ2RheU9mWWVhcidcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXlPZlllYXIsIHRva2VuLmxlbmd0aCk7XHJcbiAgfSxcclxuICAvLyBEYXkgb2Ygd2Vla1xyXG4gIEU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcclxuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xyXG5cclxuICAgIHN3aXRjaCAodG9rZW4pIHtcclxuICAgICAgLy8gVHVlXHJcbiAgICAgIGNhc2UgJ0UnOlxyXG4gICAgICBjYXNlICdFRSc6XHJcbiAgICAgIGNhc2UgJ0VFRSc6XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcclxuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxyXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIC8vIFRcclxuXHJcbiAgICAgIGNhc2UgJ0VFRUVFJzpcclxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xyXG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxyXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIC8vIFR1XHJcblxyXG4gICAgICBjYXNlICdFRUVFRUUnOlxyXG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XHJcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcclxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAvLyBUdWVzZGF5XHJcblxyXG4gICAgICBjYXNlICdFRUVFJzpcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xyXG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcclxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgLy8gTG9jYWwgZGF5IG9mIHdlZWtcclxuICBlOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XHJcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcclxuICAgIHZhciBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xyXG5cclxuICAgIHN3aXRjaCAodG9rZW4pIHtcclxuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChOdGggZGF5IG9mIHdlZWsgd2l0aCBjdXJyZW50IGxvY2FsZSBvciB3ZWVrU3RhcnRzT24pXHJcbiAgICAgIGNhc2UgJ2UnOlxyXG4gICAgICAgIHJldHVybiBTdHJpbmcobG9jYWxEYXlPZldlZWspO1xyXG4gICAgICAvLyBQYWRkZWQgbnVtZXJpY2FsIHZhbHVlXHJcblxyXG4gICAgICBjYXNlICdlZSc6XHJcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhsb2NhbERheU9mV2VlaywgMik7XHJcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDd0aFxyXG5cclxuICAgICAgY2FzZSAnZW8nOlxyXG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGxvY2FsRGF5T2ZXZWVrLCB7XHJcbiAgICAgICAgICB1bml0OiAnZGF5J1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgY2FzZSAnZWVlJzpcclxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xyXG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXHJcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcclxuICAgICAgICB9KTtcclxuICAgICAgLy8gVFxyXG5cclxuICAgICAgY2FzZSAnZWVlZWUnOlxyXG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XHJcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXHJcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcclxuICAgICAgICB9KTtcclxuICAgICAgLy8gVHVcclxuXHJcbiAgICAgIGNhc2UgJ2VlZWVlZSc6XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcclxuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxyXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIC8vIFR1ZXNkYXlcclxuXHJcbiAgICAgIGNhc2UgJ2VlZWUnOlxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XHJcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxyXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSxcclxuICAvLyBTdGFuZC1hbG9uZSBsb2NhbCBkYXkgb2Ygd2Vla1xyXG4gIGM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcclxuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xyXG4gICAgdmFyIGxvY2FsRGF5T2ZXZWVrID0gKGRheU9mV2VlayAtIG9wdGlvbnMud2Vla1N0YXJ0c09uICsgOCkgJSA3IHx8IDc7XHJcblxyXG4gICAgc3dpdGNoICh0b2tlbikge1xyXG4gICAgICAvLyBOdW1lcmljYWwgdmFsdWUgKHNhbWUgYXMgaW4gYGVgKVxyXG4gICAgICBjYXNlICdjJzpcclxuICAgICAgICByZXR1cm4gU3RyaW5nKGxvY2FsRGF5T2ZXZWVrKTtcclxuICAgICAgLy8gUGFkZGVkIG51bWVyaWNhbCB2YWx1ZVxyXG5cclxuICAgICAgY2FzZSAnY2MnOlxyXG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobG9jYWxEYXlPZldlZWssIHRva2VuLmxlbmd0aCk7XHJcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDd0aFxyXG5cclxuICAgICAgY2FzZSAnY28nOlxyXG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGxvY2FsRGF5T2ZXZWVrLCB7XHJcbiAgICAgICAgICB1bml0OiAnZGF5J1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgY2FzZSAnY2NjJzpcclxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xyXG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXHJcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcclxuICAgICAgICB9KTtcclxuICAgICAgLy8gVFxyXG5cclxuICAgICAgY2FzZSAnY2NjY2MnOlxyXG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XHJcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXHJcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcclxuICAgICAgICB9KTtcclxuICAgICAgLy8gVHVcclxuXHJcbiAgICAgIGNhc2UgJ2NjY2NjYyc6XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcclxuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxyXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIC8vIFR1ZXNkYXlcclxuXHJcbiAgICAgIGNhc2UgJ2NjY2MnOlxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XHJcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxyXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSxcclxuICAvLyBJU08gZGF5IG9mIHdlZWtcclxuICBpOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XHJcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcclxuICAgIHZhciBpc29EYXlPZldlZWsgPSBkYXlPZldlZWsgPT09IDAgPyA3IDogZGF5T2ZXZWVrO1xyXG5cclxuICAgIHN3aXRjaCAodG9rZW4pIHtcclxuICAgICAgLy8gMlxyXG4gICAgICBjYXNlICdpJzpcclxuICAgICAgICByZXR1cm4gU3RyaW5nKGlzb0RheU9mV2Vlayk7XHJcbiAgICAgIC8vIDAyXHJcblxyXG4gICAgICBjYXNlICdpaSc6XHJcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29EYXlPZldlZWssIHRva2VuLmxlbmd0aCk7XHJcbiAgICAgIC8vIDJuZFxyXG5cclxuICAgICAgY2FzZSAnaW8nOlxyXG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGlzb0RheU9mV2Vlaywge1xyXG4gICAgICAgICAgdW5pdDogJ2RheSdcclxuICAgICAgICB9KTtcclxuICAgICAgLy8gVHVlXHJcblxyXG4gICAgICBjYXNlICdpaWknOlxyXG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XHJcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcclxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAvLyBUXHJcblxyXG4gICAgICBjYXNlICdpaWlpaSc6XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcclxuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcclxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAvLyBUdVxyXG5cclxuICAgICAgY2FzZSAnaWlpaWlpJzpcclxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xyXG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXHJcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcclxuICAgICAgICB9KTtcclxuICAgICAgLy8gVHVlc2RheVxyXG5cclxuICAgICAgY2FzZSAnaWlpaSc6XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcclxuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXHJcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9LFxyXG4gIC8vIEFNIG9yIFBNXHJcbiAgYTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xyXG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xyXG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZSA9IGhvdXJzIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xyXG5cclxuICAgIHN3aXRjaCAodG9rZW4pIHtcclxuICAgICAgY2FzZSAnYSc6XHJcbiAgICAgIGNhc2UgJ2FhJzpcclxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xyXG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXHJcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgIGNhc2UgJ2FhYSc6XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcclxuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxyXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXHJcbiAgICAgICAgfSkudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAgIGNhc2UgJ2FhYWFhJzpcclxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xyXG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxyXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICBjYXNlICdhYWFhJzpcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xyXG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcclxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgLy8gQU0sIFBNLCBtaWRuaWdodCwgbm9vblxyXG4gIGI6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcclxuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcclxuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWU7XHJcblxyXG4gICAgaWYgKGhvdXJzID09PSAxMikge1xyXG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm5vb247XHJcbiAgICB9IGVsc2UgaWYgKGhvdXJzID09PSAwKSB7XHJcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubWlkbmlnaHQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBob3VycyAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcclxuICAgIH1cclxuXHJcbiAgICBzd2l0Y2ggKHRva2VuKSB7XHJcbiAgICAgIGNhc2UgJ2InOlxyXG4gICAgICBjYXNlICdiYic6XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcclxuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxyXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICBjYXNlICdiYmInOlxyXG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XHJcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcclxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xyXG4gICAgICAgIH0pLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgICBjYXNlICdiYmJiYic6XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcclxuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcclxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgY2FzZSAnYmJiYic6XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcclxuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXHJcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9LFxyXG4gIC8vIGluIHRoZSBtb3JuaW5nLCBpbiB0aGUgYWZ0ZXJub29uLCBpbiB0aGUgZXZlbmluZywgYXQgbmlnaHRcclxuICBCOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XHJcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XHJcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlO1xyXG5cclxuICAgIGlmIChob3VycyA+PSAxNykge1xyXG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLmV2ZW5pbmc7XHJcbiAgICB9IGVsc2UgaWYgKGhvdXJzID49IDEyKSB7XHJcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0uYWZ0ZXJub29uO1xyXG4gICAgfSBlbHNlIGlmIChob3VycyA+PSA0KSB7XHJcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubW9ybmluZztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubmlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgc3dpdGNoICh0b2tlbikge1xyXG4gICAgICBjYXNlICdCJzpcclxuICAgICAgY2FzZSAnQkInOlxyXG4gICAgICBjYXNlICdCQkInOlxyXG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XHJcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcclxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgY2FzZSAnQkJCQkInOlxyXG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XHJcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXHJcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgIGNhc2UgJ0JCQkInOlxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XHJcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxyXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSxcclxuICAvLyBIb3VyIFsxLTEyXVxyXG4gIGg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcclxuICAgIGlmICh0b2tlbiA9PT0gJ2hvJykge1xyXG4gICAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMjtcclxuICAgICAgaWYgKGhvdXJzID09PSAwKSBob3VycyA9IDEyO1xyXG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3Vycywge1xyXG4gICAgICAgIHVuaXQ6ICdob3VyJ1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLmgoZGF0ZSwgdG9rZW4pO1xyXG4gIH0sXHJcbiAgLy8gSG91ciBbMC0yM11cclxuICBIOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XHJcbiAgICBpZiAodG9rZW4gPT09ICdIbycpIHtcclxuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENIb3VycygpLCB7XHJcbiAgICAgICAgdW5pdDogJ2hvdXInXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuSChkYXRlLCB0b2tlbik7XHJcbiAgfSxcclxuICAvLyBIb3VyIFswLTExXVxyXG4gIEs6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcclxuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyO1xyXG5cclxuICAgIGlmICh0b2tlbiA9PT0gJ0tvJykge1xyXG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3Vycywge1xyXG4gICAgICAgIHVuaXQ6ICdob3VyJ1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGhvdXJzLCB0b2tlbi5sZW5ndGgpO1xyXG4gIH0sXHJcbiAgLy8gSG91ciBbMS0yNF1cclxuICBrOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XHJcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XHJcbiAgICBpZiAoaG91cnMgPT09IDApIGhvdXJzID0gMjQ7XHJcblxyXG4gICAgaWYgKHRva2VuID09PSAna28nKSB7XHJcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XHJcbiAgICAgICAgdW5pdDogJ2hvdXInXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaG91cnMsIHRva2VuLmxlbmd0aCk7XHJcbiAgfSxcclxuICAvLyBNaW51dGVcclxuICBtOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XHJcbiAgICBpZiAodG9rZW4gPT09ICdtbycpIHtcclxuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENNaW51dGVzKCksIHtcclxuICAgICAgICB1bml0OiAnbWludXRlJ1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLm0oZGF0ZSwgdG9rZW4pO1xyXG4gIH0sXHJcbiAgLy8gU2Vjb25kXHJcbiAgczogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xyXG4gICAgaWYgKHRva2VuID09PSAnc28nKSB7XHJcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDU2Vjb25kcygpLCB7XHJcbiAgICAgICAgdW5pdDogJ3NlY29uZCdcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5zKGRhdGUsIHRva2VuKTtcclxuICB9LFxyXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxyXG4gIFM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xyXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5TKGRhdGUsIHRva2VuKTtcclxuICB9LFxyXG4gIC8vIFRpbWV6b25lIChJU08tODYwMS4gSWYgb2Zmc2V0IGlzIDAsIG91dHB1dCBpcyBhbHdheXMgYCdaJ2ApXHJcbiAgWDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcclxuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcclxuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xyXG5cclxuICAgIGlmICh0aW1lem9uZU9mZnNldCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gJ1onO1xyXG4gICAgfVxyXG5cclxuICAgIHN3aXRjaCAodG9rZW4pIHtcclxuICAgICAgLy8gSG91cnMgYW5kIG9wdGlvbmFsIG1pbnV0ZXNcclxuICAgICAgY2FzZSAnWCc6XHJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyh0aW1lem9uZU9mZnNldCk7XHJcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xyXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGBYWGBcclxuXHJcbiAgICAgIGNhc2UgJ1hYWFgnOlxyXG4gICAgICBjYXNlICdYWCc6XHJcbiAgICAgICAgLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXHJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KTtcclxuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aCBgOmAgZGVsaW1pdGVyXHJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXHJcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYFhYWGBcclxuXHJcbiAgICAgIGNhc2UgJ1hYWFhYJzpcclxuICAgICAgY2FzZSAnWFhYJzogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXHJcblxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcclxuICAgIH1cclxuICB9LFxyXG4gIC8vIFRpbWV6b25lIChJU08tODYwMS4gSWYgb2Zmc2V0IGlzIDAsIG91dHB1dCBpcyBgJyswMDowMCdgIG9yIGVxdWl2YWxlbnQpXHJcbiAgeDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcclxuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcclxuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xyXG5cclxuICAgIHN3aXRjaCAodG9rZW4pIHtcclxuICAgICAgLy8gSG91cnMgYW5kIG9wdGlvbmFsIG1pbnV0ZXNcclxuICAgICAgY2FzZSAneCc6XHJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyh0aW1lem9uZU9mZnNldCk7XHJcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xyXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGB4eGBcclxuXHJcbiAgICAgIGNhc2UgJ3h4eHgnOlxyXG4gICAgICBjYXNlICd4eCc6XHJcbiAgICAgICAgLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXHJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KTtcclxuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aCBgOmAgZGVsaW1pdGVyXHJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXHJcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYHh4eGBcclxuXHJcbiAgICAgIGNhc2UgJ3h4eHh4JzpcclxuICAgICAgY2FzZSAneHh4JzogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXHJcblxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcclxuICAgIH1cclxuICB9LFxyXG4gIC8vIFRpbWV6b25lIChHTVQpXHJcbiAgTzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcclxuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcclxuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xyXG5cclxuICAgIHN3aXRjaCAodG9rZW4pIHtcclxuICAgICAgLy8gU2hvcnRcclxuICAgICAgY2FzZSAnTyc6XHJcbiAgICAgIGNhc2UgJ09PJzpcclxuICAgICAgY2FzZSAnT09PJzpcclxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZVNob3J0KHRpbWV6b25lT2Zmc2V0LCAnOicpO1xyXG4gICAgICAvLyBMb25nXHJcblxyXG4gICAgICBjYXNlICdPT09PJzpcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcclxuICAgIH1cclxuICB9LFxyXG4gIC8vIFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXRpb24pXHJcbiAgejogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcclxuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcclxuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xyXG5cclxuICAgIHN3aXRjaCAodG9rZW4pIHtcclxuICAgICAgLy8gU2hvcnRcclxuICAgICAgY2FzZSAneic6XHJcbiAgICAgIGNhc2UgJ3p6JzpcclxuICAgICAgY2FzZSAnenp6JzpcclxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZVNob3J0KHRpbWV6b25lT2Zmc2V0LCAnOicpO1xyXG4gICAgICAvLyBMb25nXHJcblxyXG4gICAgICBjYXNlICd6enp6JzpcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcclxuICAgIH1cclxuICB9LFxyXG4gIC8vIFNlY29uZHMgdGltZXN0YW1wXHJcbiAgdDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcclxuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcclxuICAgIHZhciB0aW1lc3RhbXAgPSBNYXRoLmZsb29yKG9yaWdpbmFsRGF0ZS5nZXRUaW1lKCkgLyAxMDAwKTtcclxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModGltZXN0YW1wLCB0b2tlbi5sZW5ndGgpO1xyXG4gIH0sXHJcbiAgLy8gTWlsbGlzZWNvbmRzIHRpbWVzdGFtcFxyXG4gIFQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XHJcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XHJcbiAgICB2YXIgdGltZXN0YW1wID0gb3JpZ2luYWxEYXRlLmdldFRpbWUoKTtcclxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModGltZXN0YW1wLCB0b2tlbi5sZW5ndGgpO1xyXG4gIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lU2hvcnQob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xyXG4gIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcclxuICB2YXIgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KTtcclxuICB2YXIgaG91cnMgPSBNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKTtcclxuICB2YXIgbWludXRlcyA9IGFic09mZnNldCAlIDYwO1xyXG5cclxuICBpZiAobWludXRlcyA9PT0gMCkge1xyXG4gICAgcmV0dXJuIHNpZ24gKyBTdHJpbmcoaG91cnMpO1xyXG4gIH1cclxuXHJcbiAgdmFyIGRlbGltaXRlciA9IGRpcnR5RGVsaW1pdGVyIHx8ICcnO1xyXG4gIHJldHVybiBzaWduICsgU3RyaW5nKGhvdXJzKSArIGRlbGltaXRlciArIGFkZExlYWRpbmdaZXJvcyhtaW51dGVzLCAyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcclxuICBpZiAob2Zmc2V0ICUgNjAgPT09IDApIHtcclxuICAgIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcclxuICAgIHJldHVybiBzaWduICsgYWRkTGVhZGluZ1plcm9zKE1hdGguYWJzKG9mZnNldCkgLyA2MCwgMik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZm9ybWF0VGltZXpvbmUob2Zmc2V0LCBkaXJ0eURlbGltaXRlcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcclxuICB2YXIgZGVsaW1pdGVyID0gZGlydHlEZWxpbWl0ZXIgfHwgJyc7XHJcbiAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xyXG4gIHZhciBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xyXG4gIHZhciBob3VycyA9IGFkZExlYWRpbmdaZXJvcyhNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKSwgMik7XHJcbiAgdmFyIG1pbnV0ZXMgPSBhZGRMZWFkaW5nWmVyb3MoYWJzT2Zmc2V0ICUgNjAsIDIpO1xyXG4gIHJldHVybiBzaWduICsgaG91cnMgKyBkZWxpbWl0ZXIgKyBtaW51dGVzO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmb3JtYXR0ZXJzOyIsImltcG9ydCBhZGRMZWFkaW5nWmVyb3MgZnJvbSBcIi4uLy4uL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qc1wiO1xyXG4vKlxyXG4gKiB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8XHJcbiAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcclxuICogfCAgYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgfCAgQSogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG4gKiB8ICBkICB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICB8ICBEICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XHJcbiAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcclxuICogfCAgbSAgfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTSAgfCBNb250aCAgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG4gKiB8ICBzICB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICB8ICBTICB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICB8XHJcbiAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcclxuICpcclxuICogTGV0dGVycyBtYXJrZWQgYnkgKiBhcmUgbm90IGltcGxlbWVudGVkIGJ1dCByZXNlcnZlZCBieSBVbmljb2RlIHN0YW5kYXJkLlxyXG4gKi9cclxuXHJcbnZhciBmb3JtYXR0ZXJzID0ge1xyXG4gIC8vIFllYXJcclxuICB5OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcclxuICAgIC8vIEZyb20gaHR0cDovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS0zMS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9Gb3JtYXRfdG9rZW5zXHJcbiAgICAvLyB8IFllYXIgICAgIHwgICAgIHkgfCB5eSB8ICAgeXl5IHwgIHl5eXkgfCB5eXl5eSB8XHJcbiAgICAvLyB8LS0tLS0tLS0tLXwtLS0tLS0tfC0tLS18LS0tLS0tLXwtLS0tLS0tfC0tLS0tLS18XHJcbiAgICAvLyB8IEFEIDEgICAgIHwgICAgIDEgfCAwMSB8ICAgMDAxIHwgIDAwMDEgfCAwMDAwMSB8XHJcbiAgICAvLyB8IEFEIDEyICAgIHwgICAgMTIgfCAxMiB8ICAgMDEyIHwgIDAwMTIgfCAwMDAxMiB8XHJcbiAgICAvLyB8IEFEIDEyMyAgIHwgICAxMjMgfCAyMyB8ICAgMTIzIHwgIDAxMjMgfCAwMDEyMyB8XHJcbiAgICAvLyB8IEFEIDEyMzQgIHwgIDEyMzQgfCAzNCB8ICAxMjM0IHwgIDEyMzQgfCAwMTIzNCB8XHJcbiAgICAvLyB8IEFEIDEyMzQ1IHwgMTIzNDUgfCA0NSB8IDEyMzQ1IHwgMTIzNDUgfCAxMjM0NSB8XHJcbiAgICB2YXIgc2lnbmVkWWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTsgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcclxuXHJcbiAgICB2YXIgeWVhciA9IHNpZ25lZFllYXIgPiAwID8gc2lnbmVkWWVhciA6IDEgLSBzaWduZWRZZWFyO1xyXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0b2tlbiA9PT0gJ3l5JyA/IHllYXIgJSAxMDAgOiB5ZWFyLCB0b2tlbi5sZW5ndGgpO1xyXG4gIH0sXHJcbiAgLy8gTW9udGhcclxuICBNOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcclxuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcclxuICAgIHJldHVybiB0b2tlbiA9PT0gJ00nID8gU3RyaW5nKG1vbnRoICsgMSkgOiBhZGRMZWFkaW5nWmVyb3MobW9udGggKyAxLCAyKTtcclxuICB9LFxyXG4gIC8vIERheSBvZiB0aGUgbW9udGhcclxuICBkOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcclxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENEYXRlKCksIHRva2VuLmxlbmd0aCk7XHJcbiAgfSxcclxuICAvLyBBTSBvciBQTVxyXG4gIGE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xyXG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRhdGUuZ2V0VVRDSG91cnMoKSAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcclxuXHJcbiAgICBzd2l0Y2ggKHRva2VuKSB7XHJcbiAgICAgIGNhc2UgJ2EnOlxyXG4gICAgICBjYXNlICdhYSc6XHJcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZS50b1VwcGVyQ2FzZSgpO1xyXG5cclxuICAgICAgY2FzZSAnYWFhJzpcclxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlO1xyXG5cclxuICAgICAgY2FzZSAnYWFhYWEnOlxyXG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWVbMF07XHJcblxyXG4gICAgICBjYXNlICdhYWFhJzpcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlID09PSAnYW0nID8gJ2EubS4nIDogJ3AubS4nO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgLy8gSG91ciBbMS0xMl1cclxuICBoOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcclxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENIb3VycygpICUgMTIgfHwgMTIsIHRva2VuLmxlbmd0aCk7XHJcbiAgfSxcclxuICAvLyBIb3VyIFswLTIzXVxyXG4gIEg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xyXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0hvdXJzKCksIHRva2VuLmxlbmd0aCk7XHJcbiAgfSxcclxuICAvLyBNaW51dGVcclxuICBtOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcclxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENNaW51dGVzKCksIHRva2VuLmxlbmd0aCk7XHJcbiAgfSxcclxuICAvLyBTZWNvbmRcclxuICBzOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcclxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENTZWNvbmRzKCksIHRva2VuLmxlbmd0aCk7XHJcbiAgfSxcclxuICAvLyBGcmFjdGlvbiBvZiBzZWNvbmRcclxuICBTOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcclxuICAgIHZhciBudW1iZXJPZkRpZ2l0cyA9IHRva2VuLmxlbmd0aDtcclxuICAgIHZhciBtaWxsaXNlY29uZHMgPSBkYXRlLmdldFVUQ01pbGxpc2Vjb25kcygpO1xyXG4gICAgdmFyIGZyYWN0aW9uYWxTZWNvbmRzID0gTWF0aC5mbG9vcihtaWxsaXNlY29uZHMgKiBNYXRoLnBvdygxMCwgbnVtYmVyT2ZEaWdpdHMgLSAzKSk7XHJcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGZyYWN0aW9uYWxTZWNvbmRzLCB0b2tlbi5sZW5ndGgpO1xyXG4gIH1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0dGVyczsiLCJ2YXIgZGF0ZUxvbmdGb3JtYXR0ZXIgPSBmdW5jdGlvbiAocGF0dGVybiwgZm9ybWF0TG9uZykge1xyXG4gIHN3aXRjaCAocGF0dGVybikge1xyXG4gICAgY2FzZSAnUCc6XHJcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xyXG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGNhc2UgJ1BQJzpcclxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XHJcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGNhc2UgJ1BQUCc6XHJcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xyXG4gICAgICAgIHdpZHRoOiAnbG9uZydcclxuICAgICAgfSk7XHJcblxyXG4gICAgY2FzZSAnUFBQUCc6XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcclxuICAgICAgICB3aWR0aDogJ2Z1bGwnXHJcbiAgICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbnZhciB0aW1lTG9uZ0Zvcm1hdHRlciA9IGZ1bmN0aW9uIChwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XHJcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XHJcbiAgICBjYXNlICdwJzpcclxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XHJcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcclxuICAgICAgfSk7XHJcblxyXG4gICAgY2FzZSAncHAnOlxyXG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcclxuICAgICAgICB3aWR0aDogJ21lZGl1bSdcclxuICAgICAgfSk7XHJcblxyXG4gICAgY2FzZSAncHBwJzpcclxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XHJcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xyXG4gICAgICB9KTtcclxuXHJcbiAgICBjYXNlICdwcHBwJzpcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xyXG4gICAgICAgIHdpZHRoOiAnZnVsbCdcclxuICAgICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxudmFyIGRhdGVUaW1lTG9uZ0Zvcm1hdHRlciA9IGZ1bmN0aW9uIChwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XHJcbiAgdmFyIG1hdGNoUmVzdWx0ID0gcGF0dGVybi5tYXRjaCgvKFArKShwKyk/LykgfHwgW107XHJcbiAgdmFyIGRhdGVQYXR0ZXJuID0gbWF0Y2hSZXN1bHRbMV07XHJcbiAgdmFyIHRpbWVQYXR0ZXJuID0gbWF0Y2hSZXN1bHRbMl07XHJcblxyXG4gIGlmICghdGltZVBhdHRlcm4pIHtcclxuICAgIHJldHVybiBkYXRlTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKTtcclxuICB9XHJcblxyXG4gIHZhciBkYXRlVGltZUZvcm1hdDtcclxuXHJcbiAgc3dpdGNoIChkYXRlUGF0dGVybikge1xyXG4gICAgY2FzZSAnUCc6XHJcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XHJcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcclxuICAgICAgfSk7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgJ1BQJzpcclxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcclxuICAgICAgICB3aWR0aDogJ21lZGl1bSdcclxuICAgICAgfSk7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgJ1BQUCc6XHJcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XHJcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xyXG4gICAgICB9KTtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSAnUFBQUCc6XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xyXG4gICAgICAgIHdpZHRoOiAnZnVsbCdcclxuICAgICAgfSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGRhdGVUaW1lRm9ybWF0LnJlcGxhY2UoJ3t7ZGF0ZX19JywgZGF0ZUxvbmdGb3JtYXR0ZXIoZGF0ZVBhdHRlcm4sIGZvcm1hdExvbmcpKS5yZXBsYWNlKCd7e3RpbWV9fScsIHRpbWVMb25nRm9ybWF0dGVyKHRpbWVQYXR0ZXJuLCBmb3JtYXRMb25nKSk7XHJcbn07XHJcblxyXG52YXIgbG9uZ0Zvcm1hdHRlcnMgPSB7XHJcbiAgcDogdGltZUxvbmdGb3JtYXR0ZXIsXHJcbiAgUDogZGF0ZVRpbWVMb25nRm9ybWF0dGVyXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGxvbmdGb3JtYXR0ZXJzOyIsIi8qKlxyXG4gKiBHb29nbGUgQ2hyb21lIGFzIG9mIDY3LjAuMzM5Ni44NyBpbnRyb2R1Y2VkIHRpbWV6b25lcyB3aXRoIG9mZnNldCB0aGF0IGluY2x1ZGVzIHNlY29uZHMuXHJcbiAqIFRoZXkgdXN1YWxseSBhcHBlYXIgZm9yIGRhdGVzIHRoYXQgZGVub3RlIHRpbWUgYmVmb3JlIHRoZSB0aW1lem9uZXMgd2VyZSBpbnRyb2R1Y2VkXHJcbiAqIChlLmcuIGZvciAnRXVyb3BlL1ByYWd1ZScgdGltZXpvbmUgdGhlIG9mZnNldCBpcyBHTVQrMDA6NTc6NDQgYmVmb3JlIDEgT2N0b2JlciAxODkxXHJcbiAqIGFuZCBHTVQrMDE6MDA6MDAgYWZ0ZXIgdGhhdCBkYXRlKVxyXG4gKlxyXG4gKiBEYXRlI2dldFRpbWV6b25lT2Zmc2V0IHJldHVybnMgdGhlIG9mZnNldCBpbiBtaW51dGVzIGFuZCB3b3VsZCByZXR1cm4gNTcgZm9yIHRoZSBleGFtcGxlIGFib3ZlLFxyXG4gKiB3aGljaCB3b3VsZCBsZWFkIHRvIGluY29ycmVjdCBjYWxjdWxhdGlvbnMuXHJcbiAqXHJcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgdGltZXpvbmUgb2Zmc2V0IGluIG1pbGxpc2Vjb25kcyB0aGF0IHRha2VzIHNlY29uZHMgaW4gYWNjb3VudC5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZSkge1xyXG4gIHZhciB1dGNEYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpLCBkYXRlLmdldEhvdXJzKCksIGRhdGUuZ2V0TWludXRlcygpLCBkYXRlLmdldFNlY29uZHMoKSwgZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSkpO1xyXG4gIHV0Y0RhdGUuc2V0VVRDRnVsbFllYXIoZGF0ZS5nZXRGdWxsWWVhcigpKTtcclxuICByZXR1cm4gZGF0ZS5nZXRUaW1lKCkgLSB1dGNEYXRlLmdldFRpbWUoKTtcclxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xyXG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcclxudmFyIE1JTExJU0VDT05EU19JTl9EQVkgPSA4NjQwMDAwMDtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDRGF5T2ZZZWFyKGRpcnR5RGF0ZSkge1xyXG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xyXG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XHJcbiAgdmFyIHRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xyXG4gIGRhdGUuc2V0VVRDTW9udGgoMCwgMSk7XHJcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcclxuICB2YXIgc3RhcnRPZlllYXJUaW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcclxuICB2YXIgZGlmZmVyZW5jZSA9IHRpbWVzdGFtcCAtIHN0YXJ0T2ZZZWFyVGltZXN0YW1wO1xyXG4gIHJldHVybiBNYXRoLmZsb29yKGRpZmZlcmVuY2UgLyBNSUxMSVNFQ09ORFNfSU5fREFZKSArIDE7XHJcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcclxuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XHJcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDSVNPV2Vla1llYXIoZGlydHlEYXRlKSB7XHJcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XHJcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcclxuICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcclxuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhciA9IG5ldyBEYXRlKDApO1xyXG4gIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIuc2V0VVRDRnVsbFllYXIoeWVhciArIDEsIDAsIDQpO1xyXG4gIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XHJcbiAgdmFyIHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIpO1xyXG4gIHZhciBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyID0gbmV3IERhdGUoMCk7XHJcbiAgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhci5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCA0KTtcclxuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xyXG4gIHZhciBzdGFydE9mVGhpc1llYXIgPSBzdGFydE9mVVRDSVNPV2Vlayhmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyKTtcclxuXHJcbiAgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcclxuICAgIHJldHVybiB5ZWFyICsgMTtcclxuICB9IGVsc2UgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZUaGlzWWVhci5nZXRUaW1lKCkpIHtcclxuICAgIHJldHVybiB5ZWFyO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4geWVhciAtIDE7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XHJcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcclxuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzXCI7XHJcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xyXG52YXIgTUlMTElTRUNPTkRTX0lOX1dFRUsgPSA2MDQ4MDAwMDA7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0lTT1dlZWsoZGlydHlEYXRlKSB7XHJcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XHJcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcclxuICB2YXIgZGlmZiA9IHN0YXJ0T2ZVVENJU09XZWVrKGRhdGUpLmdldFRpbWUoKSAtIHN0YXJ0T2ZVVENJU09XZWVrWWVhcihkYXRlKS5nZXRUaW1lKCk7IC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXHJcbiAgLy8gYmVjYXVzZSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBhIHdlZWsgaXMgbm90IGNvbnN0YW50XHJcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxyXG5cclxuICByZXR1cm4gTWF0aC5yb3VuZChkaWZmIC8gTUlMTElTRUNPTkRTX0lOX1dFRUspICsgMTtcclxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xyXG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcclxuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xyXG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjtcclxuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDV2Vla1llYXIoZGlydHlEYXRlLCBvcHRpb25zKSB7XHJcbiAgdmFyIF9yZWYsIF9yZWYyLCBfcmVmMywgX29wdGlvbnMkZmlyc3RXZWVrQ29uLCBfb3B0aW9ucyRsb2NhbGUsIF9vcHRpb25zJGxvY2FsZSRvcHRpbywgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyO1xyXG5cclxuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcclxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xyXG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xyXG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XHJcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyRmaXJzdFdlZWtDb24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRmaXJzdFdlZWtDb24gIT09IHZvaWQgMCA/IF9vcHRpb25zJGZpcnN0V2Vla0NvbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8uZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAxKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAxIGFuZCA3IF9hbmRfIGlzIG5vdCBOYU5cclxuXHJcbiAgaWYgKCEoZmlyc3RXZWVrQ29udGFpbnNEYXRlID49IDEgJiYgZmlyc3RXZWVrQ29udGFpbnNEYXRlIDw9IDcpKSB7XHJcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignZmlyc3RXZWVrQ29udGFpbnNEYXRlIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3IGluY2x1c2l2ZWx5Jyk7XHJcbiAgfVxyXG5cclxuICB2YXIgZmlyc3RXZWVrT2ZOZXh0WWVhciA9IG5ldyBEYXRlKDApO1xyXG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0VVRDRnVsbFllYXIoeWVhciArIDEsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XHJcbiAgZmlyc3RXZWVrT2ZOZXh0WWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcclxuICB2YXIgc3RhcnRPZk5leHRZZWFyID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrT2ZOZXh0WWVhciwgb3B0aW9ucyk7XHJcbiAgdmFyIGZpcnN0V2Vla09mVGhpc1llYXIgPSBuZXcgRGF0ZSgwKTtcclxuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XHJcbiAgZmlyc3RXZWVrT2ZUaGlzWWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcclxuICB2YXIgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrT2ZUaGlzWWVhciwgb3B0aW9ucyk7XHJcblxyXG4gIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mTmV4dFllYXIuZ2V0VGltZSgpKSB7XHJcbiAgICByZXR1cm4geWVhciArIDE7XHJcbiAgfSBlbHNlIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mVGhpc1llYXIuZ2V0VGltZSgpKSB7XHJcbiAgICByZXR1cm4geWVhcjtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIHllYXIgLSAxO1xyXG4gIH1cclxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xyXG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzXCI7XHJcbmltcG9ydCBzdGFydE9mVVRDV2Vla1llYXIgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrWWVhci9pbmRleC5qc1wiO1xyXG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcclxudmFyIE1JTExJU0VDT05EU19JTl9XRUVLID0gNjA0ODAwMDAwO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xyXG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xyXG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XHJcbiAgdmFyIGRpZmYgPSBzdGFydE9mVVRDV2VlayhkYXRlLCBvcHRpb25zKS5nZXRUaW1lKCkgLSBzdGFydE9mVVRDV2Vla1llYXIoZGF0ZSwgb3B0aW9ucykuZ2V0VGltZSgpOyAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudFxyXG4gIC8vIChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSB3ZWVrIG9mIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdClcclxuXHJcbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIE1JTExJU0VDT05EU19JTl9XRUVLKSArIDE7XHJcbn0iLCJ2YXIgcHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW5zID0gWydEJywgJ0REJ107XHJcbnZhciBwcm90ZWN0ZWRXZWVrWWVhclRva2VucyA9IFsnWVknLCAnWVlZWSddO1xyXG5leHBvcnQgZnVuY3Rpb24gaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbih0b2tlbikge1xyXG4gIHJldHVybiBwcm90ZWN0ZWREYXlPZlllYXJUb2tlbnMuaW5kZXhPZih0b2tlbikgIT09IC0xO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4odG9rZW4pIHtcclxuICByZXR1cm4gcHJvdGVjdGVkV2Vla1llYXJUb2tlbnMuaW5kZXhPZih0b2tlbikgIT09IC0xO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiB0aHJvd1Byb3RlY3RlZEVycm9yKHRva2VuLCBmb3JtYXQsIGlucHV0KSB7XHJcbiAgaWYgKHRva2VuID09PSAnWVlZWScpIHtcclxuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGB5eXl5YCBpbnN0ZWFkIG9mIGBZWVlZYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFwiKSk7XHJcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ1lZJykge1xyXG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYHl5YCBpbnN0ZWFkIG9mIGBZWWAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIHllYXJzIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcIikpO1xyXG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdEJykge1xyXG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYGRgIGluc3RlYWQgb2YgYERgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXCIpKTtcclxuICB9IGVsc2UgaWYgKHRva2VuID09PSAnREQnKSB7XHJcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgZGRgIGluc3RlYWQgb2YgYEREYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFwiKSk7XHJcbiAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XHJcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcclxuICB9XHJcbn0iLCJpbXBvcnQgZ2V0VVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uL2dldFVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzXCI7XHJcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcclxuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpIHtcclxuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcclxuICB2YXIgeWVhciA9IGdldFVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSk7XHJcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeSA9IG5ldyBEYXRlKDApO1xyXG4gIGZvdXJ0aE9mSmFudWFyeS5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCA0KTtcclxuICBmb3VydGhPZkphbnVhcnkuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XHJcbiAgdmFyIGRhdGUgPSBzdGFydE9mVVRDSVNPV2Vlayhmb3VydGhPZkphbnVhcnkpO1xyXG4gIHJldHVybiBkYXRlO1xyXG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XHJcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDSVNPV2VlayhkaXJ0eURhdGUpIHtcclxuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcclxuICB2YXIgd2Vla1N0YXJ0c09uID0gMTtcclxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xyXG4gIHZhciBkYXkgPSBkYXRlLmdldFVUQ0RheSgpO1xyXG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcclxuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgLSBkaWZmKTtcclxuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xyXG4gIHJldHVybiBkYXRlO1xyXG59IiwiaW1wb3J0IGdldFVUQ1dlZWtZZWFyIGZyb20gXCIuLi9nZXRVVENXZWVrWWVhci9pbmRleC5qc1wiO1xyXG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcclxuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xyXG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjtcclxuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xyXG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJGZpcnN0V2Vla0NvbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcclxuXHJcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XHJcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcclxuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJGZpcnN0V2Vla0NvbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9vcHRpb25zJGZpcnN0V2Vla0NvbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkZmlyc3RXZWVrQ29uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDEpO1xyXG4gIHZhciB5ZWFyID0gZ2V0VVRDV2Vla1llYXIoZGlydHlEYXRlLCBvcHRpb25zKTtcclxuICB2YXIgZmlyc3RXZWVrID0gbmV3IERhdGUoMCk7XHJcbiAgZmlyc3RXZWVrLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XHJcbiAgZmlyc3RXZWVrLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xyXG4gIHZhciBkYXRlID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrLCBvcHRpb25zKTtcclxuICByZXR1cm4gZGF0ZTtcclxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xyXG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcclxuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7XHJcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xyXG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJHdlZWtTdGFydHNPbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcclxuXHJcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XHJcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcclxuICB2YXIgd2Vla1N0YXJ0c09uID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJHdlZWtTdGFydHNPbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9vcHRpb25zJHdlZWtTdGFydHNPbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkd2Vla1N0YXJ0c09uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDApOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxyXG5cclxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcclxuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcclxuICB9XHJcblxyXG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XHJcbiAgdmFyIGRheSA9IGRhdGUuZ2V0VVRDRGF5KCk7XHJcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xyXG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSAtIGRpZmYpO1xyXG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XHJcbiAgcmV0dXJuIGRhdGU7XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcclxuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XHJcbiAgICByZXR1cm4gTmFOO1xyXG4gIH1cclxuXHJcbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XHJcblxyXG4gIGlmIChpc05hTihudW1iZXIpKSB7XHJcbiAgICByZXR1cm4gbnVtYmVyO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcclxufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XHJcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xyXG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xyXG4vKipcclxuICogQG5hbWUgYWRkRGF5c1xyXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcclxuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgdG8gdGhlIGdpdmVuIGRhdGUuXHJcbiAqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZGF5cyB0byB0aGUgZ2l2ZW4gZGF0ZS5cclxuICpcclxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcclxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgZGF5cyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxyXG4gKiBAcmV0dXJucyB7RGF0ZX0gLSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgZGF5cyBhZGRlZFxyXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IC0gMiBhcmd1bWVudHMgcmVxdWlyZWRcclxuICpcclxuICogQGV4YW1wbGVcclxuICogLy8gQWRkIDEwIGRheXMgdG8gMSBTZXB0ZW1iZXIgMjAxNDpcclxuICogY29uc3QgcmVzdWx0ID0gYWRkRGF5cyhuZXcgRGF0ZSgyMDE0LCA4LCAxKSwgMTApXHJcbiAqIC8vPT4gVGh1IFNlcCAxMSAyMDE0IDAwOjAwOjAwXHJcbiAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkRGF5cyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XHJcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XHJcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcclxuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcclxuXHJcbiAgaWYgKGlzTmFOKGFtb3VudCkpIHtcclxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xyXG4gIH1cclxuXHJcbiAgaWYgKCFhbW91bnQpIHtcclxuICAgIC8vIElmIDAgZGF5cywgbm8tb3AgdG8gYXZvaWQgY2hhbmdpbmcgdGltZXMgaW4gdGhlIGhvdXIgYmVmb3JlIGVuZCBvZiBEU1RcclxuICAgIHJldHVybiBkYXRlO1xyXG4gIH1cclxuXHJcbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgYW1vdW50KTtcclxuICByZXR1cm4gZGF0ZTtcclxufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XHJcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xyXG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xyXG4vKipcclxuICogQG5hbWUgYWRkTWlsbGlzZWNvbmRzXHJcbiAqIEBjYXRlZ29yeSBNaWxsaXNlY29uZCBIZWxwZXJzXHJcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXHJcbiAqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHRoZSBnaXZlbiBkYXRlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxyXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBtaWxsaXNlY29uZHMgdG8gYmUgYWRkZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cclxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtaWxsaXNlY29uZHMgYWRkZWRcclxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiAvLyBBZGQgNzUwIG1pbGxpc2Vjb25kcyB0byAxMCBKdWx5IDIwMTQgMTI6NDU6MzAuMDAwOlxyXG4gKiBjb25zdCByZXN1bHQgPSBhZGRNaWxsaXNlY29uZHMobmV3IERhdGUoMjAxNCwgNiwgMTAsIDEyLCA0NSwgMzAsIDApLCA3NTApXHJcbiAqIC8vPT4gVGh1IEp1bCAxMCAyMDE0IDEyOjQ1OjMwLjc1MFxyXG4gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZE1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XHJcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XHJcbiAgdmFyIHRpbWVzdGFtcCA9IHRvRGF0ZShkaXJ0eURhdGUpLmdldFRpbWUoKTtcclxuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcclxuICByZXR1cm4gbmV3IERhdGUodGltZXN0YW1wICsgYW1vdW50KTtcclxufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XHJcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xyXG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xyXG4vKipcclxuICogQG5hbWUgYWRkTW9udGhzXHJcbiAqIEBjYXRlZ29yeSBNb250aCBIZWxwZXJzXHJcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtb250aHMgdG8gdGhlIGdpdmVuIGRhdGUuXHJcbiAqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbW9udGhzIHRvIHRoZSBnaXZlbiBkYXRlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxyXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBtb250aHMgdG8gYmUgYWRkZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cclxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtb250aHMgYWRkZWRcclxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiAvLyBBZGQgNSBtb250aHMgdG8gMSBTZXB0ZW1iZXIgMjAxNDpcclxuICogY29uc3QgcmVzdWx0ID0gYWRkTW9udGhzKG5ldyBEYXRlKDIwMTQsIDgsIDEpLCA1KVxyXG4gKiAvLz0+IFN1biBGZWIgMDEgMjAxNSAwMDowMDowMFxyXG4gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZE1vbnRocyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XHJcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XHJcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcclxuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcclxuXHJcbiAgaWYgKGlzTmFOKGFtb3VudCkpIHtcclxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xyXG4gIH1cclxuXHJcbiAgaWYgKCFhbW91bnQpIHtcclxuICAgIC8vIElmIDAgbW9udGhzLCBuby1vcCB0byBhdm9pZCBjaGFuZ2luZyB0aW1lcyBpbiB0aGUgaG91ciBiZWZvcmUgZW5kIG9mIERTVFxyXG4gICAgcmV0dXJuIGRhdGU7XHJcbiAgfVxyXG5cclxuICB2YXIgZGF5T2ZNb250aCA9IGRhdGUuZ2V0RGF0ZSgpOyAvLyBUaGUgSlMgRGF0ZSBvYmplY3Qgc3VwcG9ydHMgZGF0ZSBtYXRoIGJ5IGFjY2VwdGluZyBvdXQtb2YtYm91bmRzIHZhbHVlcyBmb3JcclxuICAvLyBtb250aCwgZGF5LCBldGMuIEZvciBleGFtcGxlLCBuZXcgRGF0ZSgyMDIwLCAwLCAwKSByZXR1cm5zIDMxIERlYyAyMDE5IGFuZFxyXG4gIC8vIG5ldyBEYXRlKDIwMjAsIDEzLCAxKSByZXR1cm5zIDEgRmViIDIwMjEuICBUaGlzIGlzICphbG1vc3QqIHRoZSBiZWhhdmlvciB3ZVxyXG4gIC8vIHdhbnQgZXhjZXB0IHRoYXQgZGF0ZXMgd2lsbCB3cmFwIGFyb3VuZCB0aGUgZW5kIG9mIGEgbW9udGgsIG1lYW5pbmcgdGhhdFxyXG4gIC8vIG5ldyBEYXRlKDIwMjAsIDEzLCAzMSkgd2lsbCByZXR1cm4gMyBNYXIgMjAyMSBub3QgMjggRmViIDIwMjEgYXMgZGVzaXJlZC4gU29cclxuICAvLyB3ZSdsbCBkZWZhdWx0IHRvIHRoZSBlbmQgb2YgdGhlIGRlc2lyZWQgbW9udGggYnkgYWRkaW5nIDEgdG8gdGhlIGRlc2lyZWRcclxuICAvLyBtb250aCBhbmQgdXNpbmcgYSBkYXRlIG9mIDAgdG8gYmFjayB1cCBvbmUgZGF5IHRvIHRoZSBlbmQgb2YgdGhlIGRlc2lyZWRcclxuICAvLyBtb250aC5cclxuXHJcbiAgdmFyIGVuZE9mRGVzaXJlZE1vbnRoID0gbmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkpO1xyXG4gIGVuZE9mRGVzaXJlZE1vbnRoLnNldE1vbnRoKGRhdGUuZ2V0TW9udGgoKSArIGFtb3VudCArIDEsIDApO1xyXG4gIHZhciBkYXlzSW5Nb250aCA9IGVuZE9mRGVzaXJlZE1vbnRoLmdldERhdGUoKTtcclxuXHJcbiAgaWYgKGRheU9mTW9udGggPj0gZGF5c0luTW9udGgpIHtcclxuICAgIC8vIElmIHdlJ3JlIGFscmVhZHkgYXQgdGhlIGVuZCBvZiB0aGUgbW9udGgsIHRoZW4gdGhpcyBpcyB0aGUgY29ycmVjdCBkYXRlXHJcbiAgICAvLyBhbmQgd2UncmUgZG9uZS5cclxuICAgIHJldHVybiBlbmRPZkRlc2lyZWRNb250aDtcclxuICB9IGVsc2Uge1xyXG4gICAgLy8gT3RoZXJ3aXNlLCB3ZSBub3cga25vdyB0aGF0IHNldHRpbmcgdGhlIG9yaWdpbmFsIGRheS1vZi1tb250aCB2YWx1ZSB3b24ndFxyXG4gICAgLy8gY2F1c2UgYW4gb3ZlcmZsb3csIHNvIHNldCB0aGUgZGVzaXJlZCBkYXktb2YtbW9udGguIE5vdGUgdGhhdCB3ZSBjYW4ndFxyXG4gICAgLy8ganVzdCBzZXQgdGhlIGRhdGUgb2YgYGVuZE9mRGVzaXJlZE1vbnRoYCBiZWNhdXNlIHRoYXQgb2JqZWN0IG1heSBoYXZlIGhhZFxyXG4gICAgLy8gaXRzIHRpbWUgY2hhbmdlZCBpbiB0aGUgdW51c3VhbCBjYXNlIHdoZXJlIHdoZXJlIGEgRFNUIHRyYW5zaXRpb24gd2FzIG9uXHJcbiAgICAvLyB0aGUgbGFzdCBkYXkgb2YgdGhlIG1vbnRoIGFuZCBpdHMgbG9jYWwgdGltZSB3YXMgaW4gdGhlIGhvdXIgc2tpcHBlZCBvclxyXG4gICAgLy8gcmVwZWF0ZWQgbmV4dCB0byBhIERTVCB0cmFuc2l0aW9uLiAgU28gd2UgdXNlIGBkYXRlYCBpbnN0ZWFkIHdoaWNoIGlzXHJcbiAgICAvLyBndWFyYW50ZWVkIHRvIHN0aWxsIGhhdmUgdGhlIG9yaWdpbmFsIHRpbWUuXHJcbiAgICBkYXRlLnNldEZ1bGxZZWFyKGVuZE9mRGVzaXJlZE1vbnRoLmdldEZ1bGxZZWFyKCksIGVuZE9mRGVzaXJlZE1vbnRoLmdldE1vbnRoKCksIGRheU9mTW9udGgpO1xyXG4gICAgcmV0dXJuIGRhdGU7XHJcbiAgfVxyXG59IiwiaW1wb3J0IGFkZERheXMgZnJvbSBcIi4uL2FkZERheXMvaW5kZXguanNcIjtcclxuaW1wb3J0IGFkZE1vbnRocyBmcm9tIFwiLi4vYWRkTW9udGhzL2luZGV4LmpzXCI7XHJcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xyXG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xyXG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIGFkZFxyXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcclxuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgeWVhcnMsIG1vbnRocywgd2Vla3MsIGRheXMsIGhvdXJzLCBtaW51dGVzIGFuZCBzZWNvbmRzIHRvIHRoZSBnaXZlbiBkYXRlLlxyXG4gKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQWRkIHRoZSBzcGVjaWZpZWQgeWVhcnMsIG1vbnRocywgd2Vla3MsIGRheXMsIGhvdXJzLCBtaW51dGVzIGFuZCBzZWNvbmRzIHRvIHRoZSBnaXZlbiBkYXRlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxyXG4gKiBAcGFyYW0ge0R1cmF0aW9ufSBkdXJhdGlvbiAtIHRoZSBvYmplY3Qgd2l0aCB5ZWFycywgbW9udGhzLCB3ZWVrcywgZGF5cywgaG91cnMsIG1pbnV0ZXMgYW5kIHNlY29uZHMgdG8gYmUgYWRkZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cclxuICpcclxuICogfCBLZXkgICAgICAgICAgICB8IERlc2NyaXB0aW9uICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG4gKiB8LS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XHJcbiAqIHwgeWVhcnMgICAgICAgICAgfCBBbW91bnQgb2YgeWVhcnMgdG8gYmUgYWRkZWQgICAgICAgIHxcclxuICogfCBtb250aHMgICAgICAgICB8IEFtb3VudCBvZiBtb250aHMgdG8gYmUgYWRkZWQgICAgICAgfFxyXG4gKiB8IHdlZWtzICAgICAgICAgIHwgQW1vdW50IG9mIHdlZWtzIHRvIGJlIGFkZGVkICAgICAgICB8XHJcbiAqIHwgZGF5cyAgICAgICAgICAgfCBBbW91bnQgb2YgZGF5cyB0byBiZSBhZGRlZCAgICAgICAgIHxcclxuICogfCBob3VycyAgICAgICAgICB8IEFtb3VudCBvZiBob3VycyB0byBiZSBhZGRlZCAgICAgICAgfFxyXG4gKiB8IG1pbnV0ZXMgICAgICAgIHwgQW1vdW50IG9mIG1pbnV0ZXMgdG8gYmUgYWRkZWQgICAgICB8XHJcbiAqIHwgc2Vjb25kcyAgICAgICAgfCBBbW91bnQgb2Ygc2Vjb25kcyB0byBiZSBhZGRlZCAgICAgIHxcclxuICpcclxuICogQWxsIHZhbHVlcyBkZWZhdWx0IHRvIDBcclxuICpcclxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBzZWNvbmRzIGFkZGVkXHJcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcclxuICpcclxuICogQGV4YW1wbGVcclxuICogLy8gQWRkIHRoZSBmb2xsb3dpbmcgZHVyYXRpb24gdG8gMSBTZXB0ZW1iZXIgMjAxNCwgMTA6MTk6NTBcclxuICogY29uc3QgcmVzdWx0ID0gYWRkKG5ldyBEYXRlKDIwMTQsIDgsIDEsIDEwLCAxOSwgNTApLCB7XHJcbiAqICAgeWVhcnM6IDIsXHJcbiAqICAgbW9udGhzOiA5LFxyXG4gKiAgIHdlZWtzOiAxLFxyXG4gKiAgIGRheXM6IDcsXHJcbiAqICAgaG91cnM6IDUsXHJcbiAqICAgbWludXRlczogOSxcclxuICogICBzZWNvbmRzOiAzMCxcclxuICogfSlcclxuICogLy89PiBUaHUgSnVuIDE1IDIwMTcgMTU6Mjk6MjBcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZChkaXJ0eURhdGUsIGR1cmF0aW9uKSB7XHJcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XHJcbiAgaWYgKCFkdXJhdGlvbiB8fCB0eXBlb2YgZHVyYXRpb24gIT09ICdvYmplY3QnKSByZXR1cm4gbmV3IERhdGUoTmFOKTtcclxuICB2YXIgeWVhcnMgPSBkdXJhdGlvbi55ZWFycyA/IHRvSW50ZWdlcihkdXJhdGlvbi55ZWFycykgOiAwO1xyXG4gIHZhciBtb250aHMgPSBkdXJhdGlvbi5tb250aHMgPyB0b0ludGVnZXIoZHVyYXRpb24ubW9udGhzKSA6IDA7XHJcbiAgdmFyIHdlZWtzID0gZHVyYXRpb24ud2Vla3MgPyB0b0ludGVnZXIoZHVyYXRpb24ud2Vla3MpIDogMDtcclxuICB2YXIgZGF5cyA9IGR1cmF0aW9uLmRheXMgPyB0b0ludGVnZXIoZHVyYXRpb24uZGF5cykgOiAwO1xyXG4gIHZhciBob3VycyA9IGR1cmF0aW9uLmhvdXJzID8gdG9JbnRlZ2VyKGR1cmF0aW9uLmhvdXJzKSA6IDA7XHJcbiAgdmFyIG1pbnV0ZXMgPSBkdXJhdGlvbi5taW51dGVzID8gdG9JbnRlZ2VyKGR1cmF0aW9uLm1pbnV0ZXMpIDogMDtcclxuICB2YXIgc2Vjb25kcyA9IGR1cmF0aW9uLnNlY29uZHMgPyB0b0ludGVnZXIoZHVyYXRpb24uc2Vjb25kcykgOiAwOyAvLyBBZGQgeWVhcnMgYW5kIG1vbnRoc1xyXG5cclxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xyXG4gIHZhciBkYXRlV2l0aE1vbnRocyA9IG1vbnRocyB8fCB5ZWFycyA/IGFkZE1vbnRocyhkYXRlLCBtb250aHMgKyB5ZWFycyAqIDEyKSA6IGRhdGU7IC8vIEFkZCB3ZWVrcyBhbmQgZGF5c1xyXG5cclxuICB2YXIgZGF0ZVdpdGhEYXlzID0gZGF5cyB8fCB3ZWVrcyA/IGFkZERheXMoZGF0ZVdpdGhNb250aHMsIGRheXMgKyB3ZWVrcyAqIDcpIDogZGF0ZVdpdGhNb250aHM7IC8vIEFkZCBkYXlzLCBob3VycywgbWludXRlcyBhbmQgc2Vjb25kc1xyXG5cclxuICB2YXIgbWludXRlc1RvQWRkID0gbWludXRlcyArIGhvdXJzICogNjA7XHJcbiAgdmFyIHNlY29uZHNUb0FkZCA9IHNlY29uZHMgKyBtaW51dGVzVG9BZGQgKiA2MDtcclxuICB2YXIgbXNUb0FkZCA9IHNlY29uZHNUb0FkZCAqIDEwMDA7XHJcbiAgdmFyIGZpbmFsRGF0ZSA9IG5ldyBEYXRlKGRhdGVXaXRoRGF5cy5nZXRUaW1lKCkgKyBtc1RvQWRkKTtcclxuICByZXR1cm4gZmluYWxEYXRlO1xyXG59IiwiaW1wb3J0IGlzVmFsaWQgZnJvbSBcIi4uL2lzVmFsaWQvaW5kZXguanNcIjtcclxuaW1wb3J0IHN1Yk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vc3ViTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XHJcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xyXG5pbXBvcnQgZm9ybWF0dGVycyBmcm9tIFwiLi4vX2xpYi9mb3JtYXQvZm9ybWF0dGVycy9pbmRleC5qc1wiO1xyXG5pbXBvcnQgbG9uZ0Zvcm1hdHRlcnMgZnJvbSBcIi4uL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzL2luZGV4LmpzXCI7XHJcbmltcG9ydCBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanNcIjtcclxuaW1wb3J0IHsgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbiwgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuLCB0aHJvd1Byb3RlY3RlZEVycm9yIH0gZnJvbSBcIi4uL19saWIvcHJvdGVjdGVkVG9rZW5zL2luZGV4LmpzXCI7XHJcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XHJcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XHJcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcclxuaW1wb3J0IGRlZmF1bHRMb2NhbGUgZnJvbSBcIi4uL19saWIvZGVmYXVsdExvY2FsZS9pbmRleC5qc1wiOyAvLyBUaGlzIFJlZ0V4cCBjb25zaXN0cyBvZiB0aHJlZSBwYXJ0cyBzZXBhcmF0ZWQgYnkgYHxgOlxyXG4vLyAtIFt5WVFxTUx3SWREZWNpaEhLa21zXW8gbWF0Y2hlcyBhbnkgYXZhaWxhYmxlIG9yZGluYWwgbnVtYmVyIHRva2VuXHJcbi8vICAgKG9uZSBvZiB0aGUgY2VydGFpbiBsZXR0ZXJzIGZvbGxvd2VkIGJ5IGBvYClcclxuLy8gLSAoXFx3KVxcMSogbWF0Y2hlcyBhbnkgc2VxdWVuY2VzIG9mIHRoZSBzYW1lIGxldHRlclxyXG4vLyAtICcnIG1hdGNoZXMgdHdvIHF1b3RlIGNoYXJhY3RlcnMgaW4gYSByb3dcclxuLy8gLSAnKCcnfFteJ10pKygnfCQpIG1hdGNoZXMgYW55dGhpbmcgc3Vycm91bmRlZCBieSB0d28gcXVvdGUgY2hhcmFjdGVycyAoJyksXHJcbi8vICAgZXhjZXB0IGEgc2luZ2xlIHF1b3RlIHN5bWJvbCwgd2hpY2ggZW5kcyB0aGUgc2VxdWVuY2UuXHJcbi8vICAgVHdvIHF1b3RlIGNoYXJhY3RlcnMgZG8gbm90IGVuZCB0aGUgc2VxdWVuY2UuXHJcbi8vICAgSWYgdGhlcmUgaXMgbm8gbWF0Y2hpbmcgc2luZ2xlIHF1b3RlXHJcbi8vICAgdGhlbiB0aGUgc2VxdWVuY2Ugd2lsbCBjb250aW51ZSB1bnRpbCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcuXHJcbi8vIC0gLiBtYXRjaGVzIGFueSBzaW5nbGUgY2hhcmFjdGVyIHVubWF0Y2hlZCBieSBwcmV2aW91cyBwYXJ0cyBvZiB0aGUgUmVnRXhwc1xyXG5cclxudmFyIGZvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSAvW3lZUXFNTHdJZERlY2loSEtrbXNdb3woXFx3KVxcMSp8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7IC8vIFRoaXMgUmVnRXhwIGNhdGNoZXMgc3ltYm9scyBlc2NhcGVkIGJ5IHF1b3RlcywgYW5kIGFsc29cclxuLy8gc2VxdWVuY2VzIG9mIHN5bWJvbHMgUCwgcCwgYW5kIHRoZSBjb21iaW5hdGlvbnMgbGlrZSBgUFBQUFBQUHBwcHBwYFxyXG5cclxudmFyIGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwID0gL1ArcCt8UCt8cCt8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7XHJcbnZhciBlc2NhcGVkU3RyaW5nUmVnRXhwID0gL14nKFteXSo/KSc/JC87XHJcbnZhciBkb3VibGVRdW90ZVJlZ0V4cCA9IC8nJy9nO1xyXG52YXIgdW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHAgPSAvW2EtekEtWl0vO1xyXG4vKipcclxuICogQG5hbWUgZm9ybWF0XHJcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xyXG4gKiBAc3VtbWFyeSBGb3JtYXQgdGhlIGRhdGUuXHJcbiAqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBSZXR1cm4gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZyBpbiB0aGUgZ2l2ZW4gZm9ybWF0LiBUaGUgcmVzdWx0IG1heSB2YXJ5IGJ5IGxvY2FsZS5cclxuICpcclxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGUgYGZvcm1hdGAgdG9rZW5zIGRpZmZlciBmcm9tIE1vbWVudC5qcyBhbmQgb3RoZXIgbGlicmFyaWVzLlxyXG4gKiA+IFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxyXG4gKlxyXG4gKiBUaGUgY2hhcmFjdGVycyB3cmFwcGVkIGJldHdlZW4gdHdvIHNpbmdsZSBxdW90ZXMgY2hhcmFjdGVycyAoJykgYXJlIGVzY2FwZWQuXHJcbiAqIFR3byBzaW5nbGUgcXVvdGVzIGluIGEgcm93LCB3aGV0aGVyIGluc2lkZSBvciBvdXRzaWRlIGEgcXVvdGVkIHNlcXVlbmNlLCByZXByZXNlbnQgYSAncmVhbCcgc2luZ2xlIHF1b3RlLlxyXG4gKiAoc2VlIHRoZSBsYXN0IGV4YW1wbGUpXHJcbiAqXHJcbiAqIEZvcm1hdCBvZiB0aGUgc3RyaW5nIGlzIGJhc2VkIG9uIFVuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNTpcclxuICogaHR0cHM6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0ZpZWxkX1N5bWJvbF9UYWJsZVxyXG4gKiB3aXRoIGEgZmV3IGFkZGl0aW9ucyAoc2VlIG5vdGUgNyBiZWxvdyB0aGUgdGFibGUpLlxyXG4gKlxyXG4gKiBBY2NlcHRlZCBwYXR0ZXJuczpcclxuICogfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUGF0dGVybiB8IFJlc3VsdCBleGFtcGxlcyAgICAgICAgICAgICAgICAgICB8IE5vdGVzIHxcclxuICogfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLXxcclxuICogfCBFcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRy4uR0dHICB8IEFELCBCQyAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgR0dHRyAgICB8IEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0ICAgICAgICB8IDIgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgR0dHR0cgICB8IEEsIEIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcclxuICogfCBDYWxlbmRhciB5ZWFyICAgICAgICAgICAgICAgICAgIHwgeSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeW8gICAgICB8IDQ0dGgsIDFzdCwgMHRoLCAxN3RoICAgICAgICAgICAgICB8IDUsNyAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXkgICAgICB8IDQ0LCAwMSwgMDAsIDE3ICAgICAgICAgICAgICAgICAgICB8IDUgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5ICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5eSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDUgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5eXkgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcclxuICogfCBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgIHwgWSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWW8gICAgICB8IDQ0dGgsIDFzdCwgMTkwMHRoLCAyMDE3dGggICAgICAgICB8IDUsNyAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVkgICAgICB8IDQ0LCAwMSwgMDAsIDE3ICAgICAgICAgICAgICAgICAgICB8IDUsOCAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZWSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDUsOCAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZWVkgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcclxuICogfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICAgIHwgUiAgICAgICB8IC00MywgMCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUsNyAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlIgICAgICB8IC00MywgMDAsIDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICB8IDUsNyAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSICAgICB8IC0wNDMsIDAwMCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICB8IDUsNyAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSUiAgICB8IC0wMDQzLCAwMDAwLCAwMDAxLCAxOTAwLCAyMDE3ICAgICB8IDUsNyAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSUlIgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSw3IHxcclxuICogfCBFeHRlbmRlZCB5ZWFyICAgICAgICAgICAgICAgICAgIHwgdSAgICAgICB8IC00MywgMCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXUgICAgICB8IC00MywgMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICB8IDUgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1ICAgICB8IC0wNDMsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1dSAgICB8IC0wMDQzLCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICB8IDUgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1dXUgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcclxuICogfCBRdWFydGVyIChmb3JtYXR0aW5nKSAgICAgICAgICAgIHwgUSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUW8gICAgICB8IDFzdCwgMm5kLCAzcmQsIDR0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRUSAgICB8IDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uICAgICB8IDIgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRUVEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcclxuICogfCBRdWFydGVyIChzdGFuZC1hbG9uZSkgICAgICAgICAgIHwgcSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcW8gICAgICB8IDFzdCwgMm5kLCAzcmQsIDR0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxcSAgICB8IDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uICAgICB8IDIgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxcXEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcclxuICogfCBNb250aCAoZm9ybWF0dGluZykgICAgICAgICAgICAgIHwgTSAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDEydGggICAgICAgICAgICAgICB8IDcgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU0gICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NTSAgICB8IEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyICB8IDIgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NTU0gICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcclxuICogfCBNb250aCAoc3RhbmQtYWxvbmUpICAgICAgICAgICAgIHwgTCAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDEydGggICAgICAgICAgICAgICB8IDcgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTEwgICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMTCAgICB8IEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyICB8IDIgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMTEwgICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcclxuICogfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgIHwgdyAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgd28gICAgICB8IDFzdCwgMm5kLCAuLi4sIDUzdGggICAgICAgICAgICAgICB8IDcgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgd3cgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcclxuICogfCBJU08gd2VlayBvZiB5ZWFyICAgICAgICAgICAgICAgIHwgSSAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDUzdGggICAgICAgICAgICAgICB8IDcgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSUkgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcclxuICogfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgIHwgZCAgICAgICB8IDEsIDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDMxc3QgICAgICAgICAgICAgICB8IDcgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZGQgICAgICB8IDAxLCAwMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcclxuICogfCBEYXkgb2YgeWVhciAgICAgICAgICAgICAgICAgICAgIHwgRCAgICAgICB8IDEsIDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgICAgICB8IDkgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDM2NXRoLCAzNjZ0aCAgICAgICB8IDcgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgREQgICAgICB8IDAxLCAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgICB8IDkgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgREREICAgICB8IDAwMSwgMDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICB8ICAgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRERERCAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMgICAgIHxcclxuICogfCBEYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgICAgICAgIHwgRS4uRUVFICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRUUgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRUVFICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcclxuICogfCBJU08gZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICAgIHwgaSAgICAgICB8IDEsIDIsIDMsIC4uLiwgNyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDd0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWkgICAgICB8IDAxLCAwMiwgLi4uLCAwNyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8IDcgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIsNyAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaWkgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8IDcgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaWlpICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8IDcgICAgIHxcclxuICogfCBMb2NhbCBkYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgIHwgZSAgICAgICB8IDIsIDMsIDQsIC4uLiwgMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZW8gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDcgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWUgICAgICB8IDAyLCAwMywgLi4uLCAwMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZWUgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZWVlICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcclxuICogfCBMb2NhbCBkYXkgb2Ygd2VlayAoc3RhbmQtYWxvbmUpIHwgYyAgICAgICB8IDIsIDMsIDQsIC4uLiwgMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY28gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDcgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2MgICAgICB8IDAyLCAwMywgLi4uLCAwMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjYyAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjY2MgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjY2NjICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcclxuICogfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgYS4uYWEgICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhICAgICB8IGFtLCBwbSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhYSAgICB8IGEubS4sIHAubS4gICAgICAgICAgICAgICAgICAgICAgICB8IDIgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhYWEgICB8IGEsIHAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcclxuICogfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgIHwgYi4uYmIgICB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgICB8ICAgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiICAgICB8IGFtLCBwbSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgICB8ICAgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiYiAgICB8IGEubS4sIHAubS4sIG5vb24sIG1pZG5pZ2h0ICAgICAgICB8IDIgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiYmIgICB8IGEsIHAsIG4sIG1pICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcclxuICogfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgIHwgQi4uQkJCICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQkJCQiAgICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8IDIgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQkJCQkIgICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcclxuICogfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgIHwgaCAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgICB8ICAgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDExdGgsIDEydGggICAgICAgICB8IDcgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaGggICAgICB8IDAxLCAwMiwgLi4uLCAxMSwgMTIgICAgICAgICAgICAgICB8ICAgICAgIHxcclxuICogfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgIHwgSCAgICAgICB8IDAsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSG8gICAgICB8IDB0aCwgMXN0LCAybmQsIC4uLiwgMjNyZCAgICAgICAgICB8IDcgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSEggICAgICB8IDAwLCAwMSwgMDIsIC4uLiwgMjMgICAgICAgICAgICAgICB8ICAgICAgIHxcclxuICogfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgIHwgSyAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgS28gICAgICB8IDFzdCwgMm5kLCAuLi4sIDExdGgsIDB0aCAgICAgICAgICB8IDcgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgS0sgICAgICB8IDAxLCAwMiwgLi4uLCAxMSwgMDAgICAgICAgICAgICAgICB8ICAgICAgIHxcclxuICogfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgIHwgayAgICAgICB8IDI0LCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICB8ICAgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwga28gICAgICB8IDI0dGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICB8IDcgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwga2sgICAgICB8IDI0LCAwMSwgMDIsIC4uLiwgMjMgICAgICAgICAgICAgICB8ICAgICAgIHxcclxuICogfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbSAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbW8gICAgICB8IDB0aCwgMXN0LCAuLi4sIDU5dGggICAgICAgICAgICAgICB8IDcgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbW0gICAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcclxuICogfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcyAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgc28gICAgICB8IDB0aCwgMXN0LCAuLi4sIDU5dGggICAgICAgICAgICAgICB8IDcgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgc3MgICAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcclxuICogfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgIHwgUyAgICAgICB8IDAsIDEsIC4uLiwgOSAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1MgICAgICB8IDAwLCAwMSwgLi4uLCA5OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1NTICAgICB8IDAwMCwgMDAxLCAuLi4sIDk5OSAgICAgICAgICAgICAgICB8ICAgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1NTUyAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMgICAgIHxcclxuICogfCBUaW1lem9uZSAoSVNPLTg2MDEgdy8gWikgICAgICAgIHwgWCAgICAgICB8IC0wOCwgKzA1MzAsIFogICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFggICAgICB8IC0wODAwLCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYICAgICB8IC0wODowMCwgKzA1OjMwLCBaICAgICAgICAgICAgICAgICB8ICAgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYWCAgICB8IC0wODAwLCArMDUzMCwgWiwgKzEyMzQ1NiAgICAgICAgICB8IDIgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYWFggICB8IC0wODowMCwgKzA1OjMwLCBaLCArMTI6MzQ6NTYgICAgICB8ICAgICAgIHxcclxuICogfCBUaW1lem9uZSAoSVNPLTg2MDEgdy9vIFopICAgICAgIHwgeCAgICAgICB8IC0wOCwgKzA1MzAsICswMCAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHggICAgICB8IC0wODAwLCArMDUzMCwgKzAwMDAgICAgICAgICAgICAgICB8ICAgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4ICAgICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAgICAgICAgICAgICB8IDIgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4eCAgICB8IC0wODAwLCArMDUzMCwgKzAwMDAsICsxMjM0NTYgICAgICB8ICAgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4eHggICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAsICsxMjozNDo1NiB8ICAgICAgIHxcclxuICogfCBUaW1lem9uZSAoR01UKSAgICAgICAgICAgICAgICAgIHwgTy4uLk9PTyB8IEdNVC04LCBHTVQrNTozMCwgR01UKzAgICAgICAgICAgICB8ICAgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgT09PTyAgICB8IEdNVC0wODowMCwgR01UKzA1OjMwLCBHTVQrMDA6MDAgICB8IDIgICAgIHxcclxuICogfCBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0LikgIHwgei4uLnp6eiB8IEdNVC04LCBHTVQrNTozMCwgR01UKzAgICAgICAgICAgICB8IDYgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgenp6eiAgICB8IEdNVC0wODowMCwgR01UKzA1OjMwLCBHTVQrMDA6MDAgICB8IDIsNiAgIHxcclxuICogfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgIHwgdCAgICAgICB8IDUxMjk2OTUyMCAgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdHQgICAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNyAgIHxcclxuICogfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgIHwgVCAgICAgICB8IDUxMjk2OTUyMDkwMCAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgVFQgICAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNyAgIHxcclxuICogfCBMb25nIGxvY2FsaXplZCBkYXRlICAgICAgICAgICAgIHwgUCAgICAgICB8IDA0LzI5LzE0NTMgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFAgICAgICB8IEFwciAyOSwgMTQ1MyAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQICAgICB8IEFwcmlsIDI5dGgsIDE0NTMgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQUCAgICB8IEZyaWRheSwgQXByaWwgMjl0aCwgMTQ1MyAgICAgICAgICB8IDIsNyAgIHxcclxuICogfCBMb25nIGxvY2FsaXplZCB0aW1lICAgICAgICAgICAgIHwgcCAgICAgICB8IDEyOjAwIEFNICAgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHAgICAgICB8IDEyOjAwOjAwIEFNICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHBwICAgICB8IDEyOjAwOjAwIEFNIEdNVCsyICAgICAgICAgICAgICAgICB8IDcgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHBwcCAgICB8IDEyOjAwOjAwIEFNIEdNVCswMjowMCAgICAgICAgICAgICB8IDIsNyAgIHxcclxuICogfCBDb21iaW5hdGlvbiBvZiBkYXRlIGFuZCB0aW1lICAgIHwgUHAgICAgICB8IDA0LzI5LzE0NTMsIDEyOjAwIEFNICAgICAgICAgICAgICB8IDcgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBwcCAgICB8IEFwciAyOSwgMTQ1MywgMTI6MDA6MDAgQU0gICAgICAgICB8IDcgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQcHBwICB8IEFwcmlsIDI5dGgsIDE0NTMgYXQgLi4uICAgICAgICAgICB8IDcgICAgIHxcclxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQUHBwcHB8IEZyaWRheSwgQXByaWwgMjl0aCwgMTQ1MyBhdCAuLi4gICB8IDIsNyAgIHxcclxuICogTm90ZXM6XHJcbiAqIDEuIFwiRm9ybWF0dGluZ1wiIHVuaXRzIChlLmcuIGZvcm1hdHRpbmcgcXVhcnRlcikgaW4gdGhlIGRlZmF1bHQgZW4tVVMgbG9jYWxlXHJcbiAqICAgIGFyZSB0aGUgc2FtZSBhcyBcInN0YW5kLWFsb25lXCIgdW5pdHMsIGJ1dCBhcmUgZGlmZmVyZW50IGluIHNvbWUgbGFuZ3VhZ2VzLlxyXG4gKiAgICBcIkZvcm1hdHRpbmdcIiB1bml0cyBhcmUgZGVjbGluZWQgYWNjb3JkaW5nIHRvIHRoZSBydWxlcyBvZiB0aGUgbGFuZ3VhZ2VcclxuICogICAgaW4gdGhlIGNvbnRleHQgb2YgYSBkYXRlLiBcIlN0YW5kLWFsb25lXCIgdW5pdHMgYXJlIGFsd2F5cyBub21pbmF0aXZlIHNpbmd1bGFyOlxyXG4gKlxyXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIExMTEwnLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkJ2BcclxuICpcclxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBNTU1NJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZHUnYFxyXG4gKlxyXG4gKiAyLiBBbnkgc2VxdWVuY2Ugb2YgdGhlIGlkZW50aWNhbCBsZXR0ZXJzIGlzIGEgcGF0dGVybiwgdW5sZXNzIGl0IGlzIGVzY2FwZWQgYnlcclxuICogICAgdGhlIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIChzZWUgYmVsb3cpLlxyXG4gKiAgICBJZiB0aGUgc2VxdWVuY2UgaXMgbG9uZ2VyIHRoYW4gbGlzdGVkIGluIHRhYmxlIChlLmcuIGBFRUVFRUVFRUVFRWApXHJcbiAqICAgIHRoZSBvdXRwdXQgd2lsbCBiZSB0aGUgc2FtZSBhcyBkZWZhdWx0IHBhdHRlcm4gZm9yIHRoaXMgdW5pdCwgdXN1YWxseVxyXG4gKiAgICB0aGUgbG9uZ2VzdCBvbmUgKGluIGNhc2Ugb2YgSVNPIHdlZWtkYXlzLCBgRUVFRWApLiBEZWZhdWx0IHBhdHRlcm5zIGZvciB1bml0c1xyXG4gKiAgICBhcmUgbWFya2VkIHdpdGggXCIyXCIgaW4gdGhlIGxhc3QgY29sdW1uIG9mIHRoZSB0YWJsZS5cclxuICpcclxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU0nKSAvLz0+ICdOb3YnYFxyXG4gKlxyXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXHJcbiAqXHJcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU0nKSAvLz0+ICdOJ2BcclxuICpcclxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXHJcbiAqXHJcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcclxuICpcclxuICogMy4gU29tZSBwYXR0ZXJucyBjb3VsZCBiZSB1bmxpbWl0ZWQgbGVuZ3RoIChzdWNoIGFzIGB5eXl5eXl5eWApLlxyXG4gKiAgICBUaGUgb3V0cHV0IHdpbGwgYmUgcGFkZGVkIHdpdGggemVyb3MgdG8gbWF0Y2ggdGhlIGxlbmd0aCBvZiB0aGUgcGF0dGVybi5cclxuICpcclxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICd5eXl5eXl5eScpIC8vPT4gJzAwMDAyMDE3J2BcclxuICpcclxuICogNC4gYFFRUVFRYCBhbmQgYHFxcXFxYCBjb3VsZCBiZSBub3Qgc3RyaWN0bHkgbnVtZXJpY2FsIGluIHNvbWUgbG9jYWxlcy5cclxuICogICAgVGhlc2UgdG9rZW5zIHJlcHJlc2VudCB0aGUgc2hvcnRlc3QgZm9ybSBvZiB0aGUgcXVhcnRlci5cclxuICpcclxuICogNS4gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIGB5YCBhbmQgYHVgIHBhdHRlcm5zIGFyZSBCLkMuIHllYXJzOlxyXG4gKlxyXG4gKiAgICB8IFllYXIgfCBgeWAgfCBgdWAgfFxyXG4gKiAgICB8LS0tLS0tfC0tLS0tfC0tLS0tfFxyXG4gKiAgICB8IEFDIDEgfCAgIDEgfCAgIDEgfFxyXG4gKiAgICB8IEJDIDEgfCAgIDEgfCAgIDAgfFxyXG4gKiAgICB8IEJDIDIgfCAgIDIgfCAgLTEgfFxyXG4gKlxyXG4gKiAgICBBbHNvIGB5eWAgYWx3YXlzIHJldHVybnMgdGhlIGxhc3QgdHdvIGRpZ2l0cyBvZiBhIHllYXIsXHJcbiAqICAgIHdoaWxlIGB1dWAgcGFkcyBzaW5nbGUgZGlnaXQgeWVhcnMgdG8gMiBjaGFyYWN0ZXJzIGFuZCByZXR1cm5zIG90aGVyIHllYXJzIHVuY2hhbmdlZDpcclxuICpcclxuICogICAgfCBZZWFyIHwgYHl5YCB8IGB1dWAgfFxyXG4gKiAgICB8LS0tLS0tfC0tLS0tLXwtLS0tLS18XHJcbiAqICAgIHwgMSAgICB8ICAgMDEgfCAgIDAxIHxcclxuICogICAgfCAxNCAgIHwgICAxNCB8ICAgMTQgfFxyXG4gKiAgICB8IDM3NiAgfCAgIDc2IHwgIDM3NiB8XHJcbiAqICAgIHwgMTQ1MyB8ICAgNTMgfCAxNDUzIHxcclxuICpcclxuICogICAgVGhlIHNhbWUgZGlmZmVyZW5jZSBpcyB0cnVlIGZvciBsb2NhbCBhbmQgSVNPIHdlZWstbnVtYmVyaW5nIHllYXJzIChgWWAgYW5kIGBSYCksXHJcbiAqICAgIGV4Y2VwdCBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFycyBhcmUgZGVwZW5kZW50IG9uIGBvcHRpb25zLndlZWtTdGFydHNPbmBcclxuICogICAgYW5kIGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgKGNvbXBhcmUgW2dldElTT1dlZWtZZWFyXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL2dldElTT1dlZWtZZWFyfVxyXG4gKiAgICBhbmQgW2dldFdlZWtZZWFyXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL2dldFdlZWtZZWFyfSkuXHJcbiAqXHJcbiAqIDYuIFNwZWNpZmljIG5vbi1sb2NhdGlvbiB0aW1lem9uZXMgYXJlIGN1cnJlbnRseSB1bmF2YWlsYWJsZSBpbiBgZGF0ZS1mbnNgLFxyXG4gKiAgICBzbyByaWdodCBub3cgdGhlc2UgdG9rZW5zIGZhbGwgYmFjayB0byBHTVQgdGltZXpvbmVzLlxyXG4gKlxyXG4gKiA3LiBUaGVzZSBwYXR0ZXJucyBhcmUgbm90IGluIHRoZSBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XHJcbiAqICAgIC0gYGlgOiBJU08gZGF5IG9mIHdlZWtcclxuICogICAgLSBgSWA6IElTTyB3ZWVrIG9mIHllYXJcclxuICogICAgLSBgUmA6IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXHJcbiAqICAgIC0gYHRgOiBzZWNvbmRzIHRpbWVzdGFtcFxyXG4gKiAgICAtIGBUYDogbWlsbGlzZWNvbmRzIHRpbWVzdGFtcFxyXG4gKiAgICAtIGBvYDogb3JkaW5hbCBudW1iZXIgbW9kaWZpZXJcclxuICogICAgLSBgUGA6IGxvbmcgbG9jYWxpemVkIGRhdGVcclxuICogICAgLSBgcGA6IGxvbmcgbG9jYWxpemVkIHRpbWVcclxuICpcclxuICogOC4gYFlZYCBhbmQgYFlZWVlgIHRva2VucyByZXByZXNlbnQgd2Vlay1udW1iZXJpbmcgeWVhcnMgYnV0IHRoZXkgYXJlIG9mdGVuIGNvbmZ1c2VkIHdpdGggeWVhcnMuXHJcbiAqICAgIFlvdSBzaG91bGQgZW5hYmxlIGBvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2Vuc2AgdG8gdXNlIHRoZW0uIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxyXG4gKlxyXG4gKiA5LiBgRGAgYW5kIGBERGAgdG9rZW5zIHJlcHJlc2VudCBkYXlzIG9mIHRoZSB5ZWFyIGJ1dCB0aGV5IGFyZSBvZnRlbiBjb25mdXNlZCB3aXRoIGRheXMgb2YgdGhlIG1vbnRoLlxyXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXHJcbiAqXHJcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZm9ybWF0IC0gdGhlIHN0cmluZyBvZiB0b2tlbnNcclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXHJcbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxyXG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxyXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlPTFdIC0gdGhlIGRheSBvZiBKYW51YXJ5LCB3aGljaCBpc1xyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2Vucz1mYWxzZV0gLSBpZiB0cnVlLCBhbGxvd3MgdXNhZ2Ugb2YgdGhlIHdlZWstbnVtYmVyaW5nIHllYXIgdG9rZW5zIGBZWWAgYW5kIGBZWVlZYDtcclxuICogICBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcclxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zPWZhbHNlXSAtIGlmIHRydWUsIGFsbG93cyB1c2FnZSBvZiB0aGUgZGF5IG9mIHllYXIgdG9rZW5zIGBEYCBhbmQgYEREYDtcclxuICogICBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcclxuICogQHJldHVybnMge1N0cmluZ30gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZ1xyXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXHJcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBkYXRlYCBtdXN0IG5vdCBiZSBJbnZhbGlkIERhdGVcclxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGxvY2FsaXplYCBwcm9wZXJ0eVxyXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgZm9ybWF0TG9uZ2AgcHJvcGVydHlcclxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxyXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3XHJcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgeXl5eWAgaW5zdGVhZCBvZiBgWVlZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxyXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYHl5YCBpbnN0ZWFkIG9mIGBZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxyXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYGRgIGluc3RlYWQgb2YgYERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcclxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGBkZGAgaW5zdGVhZCBvZiBgRERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcclxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gZm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyXHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqIC8vIFJlcHJlc2VudCAxMSBGZWJydWFyeSAyMDE0IGluIG1pZGRsZS1lbmRpYW4gZm9ybWF0OlxyXG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgMSwgMTEpLCAnTU0vZGQveXl5eScpXHJcbiAqIC8vPT4gJzAyLzExLzIwMTQnXHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqIC8vIFJlcHJlc2VudCAyIEp1bHkgMjAxNCBpbiBFc3BlcmFudG86XHJcbiAqIGltcG9ydCB7IGVvTG9jYWxlIH0gZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL2VvJ1xyXG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgNiwgMiksIFwiZG8gJ2RlJyBNTU1NIHl5eXlcIiwge1xyXG4gKiAgIGxvY2FsZTogZW9Mb2NhbGVcclxuICogfSlcclxuICogLy89PiAnMi1hIGRlIGp1bGlvIDIwMTQnXHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqIC8vIEVzY2FwZSBzdHJpbmcgYnkgc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnM6XHJcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxNSksIFwiaCAnbycnY2xvY2snXCIpXHJcbiAqIC8vPT4gXCIzIG8nY2xvY2tcIlxyXG4gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdChkaXJ0eURhdGUsIGRpcnR5Rm9ybWF0U3RyLCBvcHRpb25zKSB7XHJcbiAgdmFyIF9yZWYsIF9vcHRpb25zJGxvY2FsZSwgX3JlZjIsIF9yZWYzLCBfcmVmNCwgX29wdGlvbnMkZmlyc3RXZWVrQ29uLCBfb3B0aW9ucyRsb2NhbGUyLCBfb3B0aW9ucyRsb2NhbGUyJG9wdGksIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiwgX3JlZjUsIF9yZWY2LCBfcmVmNywgX29wdGlvbnMkd2Vla1N0YXJ0c09uLCBfb3B0aW9ucyRsb2NhbGUzLCBfb3B0aW9ucyRsb2NhbGUzJG9wdGksIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDMsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDQ7XHJcblxyXG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xyXG4gIHZhciBmb3JtYXRTdHIgPSBTdHJpbmcoZGlydHlGb3JtYXRTdHIpO1xyXG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XHJcbiAgdmFyIGxvY2FsZSA9IChfcmVmID0gKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5sb2NhbGUpICE9PSBudWxsICYmIF9vcHRpb25zJGxvY2FsZSAhPT0gdm9pZCAwID8gX29wdGlvbnMkbG9jYWxlIDogZGVmYXVsdE9wdGlvbnMubG9jYWxlKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogZGVmYXVsdExvY2FsZTtcclxuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gdG9JbnRlZ2VyKChfcmVmMiA9IChfcmVmMyA9IChfcmVmNCA9IChfb3B0aW9ucyRmaXJzdFdlZWtDb24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRmaXJzdFdlZWtDb24gIT09IHZvaWQgMCA/IF9vcHRpb25zJGZpcnN0V2Vla0NvbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZTIgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZTIkb3B0aSA9IF9vcHRpb25zJGxvY2FsZTIub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlMiRvcHRpID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUyJG9wdGkuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmNCAhPT0gdm9pZCAwID8gX3JlZjQgOiBkZWZhdWx0T3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IDEpOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDEgYW5kIDcgX2FuZF8gaXMgbm90IE5hTlxyXG5cclxuICBpZiAoIShmaXJzdFdlZWtDb250YWluc0RhdGUgPj0gMSAmJiBmaXJzdFdlZWtDb250YWluc0RhdGUgPD0gNykpIHtcclxuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdmaXJzdFdlZWtDb250YWluc0RhdGUgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDcgaW5jbHVzaXZlbHknKTtcclxuICB9XHJcblxyXG4gIHZhciB3ZWVrU3RhcnRzT24gPSB0b0ludGVnZXIoKF9yZWY1ID0gKF9yZWY2ID0gKF9yZWY3ID0gKF9vcHRpb25zJHdlZWtTdGFydHNPbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9vcHRpb25zJHdlZWtTdGFydHNPbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkd2Vla1N0YXJ0c09uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlMyA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUzID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlMyRvcHRpID0gX29wdGlvbnMkbG9jYWxlMy5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUzJG9wdGkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZTMkb3B0aS53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWY3ICE9PSB2b2lkIDAgPyBfcmVmNyA6IGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjYgIT09IHZvaWQgMCA/IF9yZWY2IDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDMgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWw0ID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsMy5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWw0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWw0LndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjUgIT09IHZvaWQgMCA/IF9yZWY1IDogMCk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXHJcblxyXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xyXG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xyXG4gIH1cclxuXHJcbiAgaWYgKCFsb2NhbGUubG9jYWxpemUpIHtcclxuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdsb2NhbGUgbXVzdCBjb250YWluIGxvY2FsaXplIHByb3BlcnR5Jyk7XHJcbiAgfVxyXG5cclxuICBpZiAoIWxvY2FsZS5mb3JtYXRMb25nKSB7XHJcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbG9jYWxlIG11c3QgY29udGFpbiBmb3JtYXRMb25nIHByb3BlcnR5Jyk7XHJcbiAgfVxyXG5cclxuICB2YXIgb3JpZ2luYWxEYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XHJcblxyXG4gIGlmICghaXNWYWxpZChvcmlnaW5hbERhdGUpKSB7XHJcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCB0aW1lIHZhbHVlJyk7XHJcbiAgfSAvLyBDb252ZXJ0IHRoZSBkYXRlIGluIHN5c3RlbSB0aW1lem9uZSB0byB0aGUgc2FtZSBkYXRlIGluIFVUQyswMDowMCB0aW1lem9uZS5cclxuICAvLyBUaGlzIGVuc3VyZXMgdGhhdCB3aGVuIFVUQyBmdW5jdGlvbnMgd2lsbCBiZSBpbXBsZW1lbnRlZCwgbG9jYWxlcyB3aWxsIGJlIGNvbXBhdGlibGUgd2l0aCB0aGVtLlxyXG4gIC8vIFNlZSBhbiBpc3N1ZSBhYm91dCBVVEMgZnVuY3Rpb25zOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxyXG5cclxuXHJcbiAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhvcmlnaW5hbERhdGUpO1xyXG4gIHZhciB1dGNEYXRlID0gc3ViTWlsbGlzZWNvbmRzKG9yaWdpbmFsRGF0ZSwgdGltZXpvbmVPZmZzZXQpO1xyXG4gIHZhciBmb3JtYXR0ZXJPcHRpb25zID0ge1xyXG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiBmaXJzdFdlZWtDb250YWluc0RhdGUsXHJcbiAgICB3ZWVrU3RhcnRzT246IHdlZWtTdGFydHNPbixcclxuICAgIGxvY2FsZTogbG9jYWxlLFxyXG4gICAgX29yaWdpbmFsRGF0ZTogb3JpZ2luYWxEYXRlXHJcbiAgfTtcclxuICB2YXIgcmVzdWx0ID0gZm9ybWF0U3RyLm1hdGNoKGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwKS5tYXAoZnVuY3Rpb24gKHN1YnN0cmluZykge1xyXG4gICAgdmFyIGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xyXG5cclxuICAgIGlmIChmaXJzdENoYXJhY3RlciA9PT0gJ3AnIHx8IGZpcnN0Q2hhcmFjdGVyID09PSAnUCcpIHtcclxuICAgICAgdmFyIGxvbmdGb3JtYXR0ZXIgPSBsb25nRm9ybWF0dGVyc1tmaXJzdENoYXJhY3Rlcl07XHJcbiAgICAgIHJldHVybiBsb25nRm9ybWF0dGVyKHN1YnN0cmluZywgbG9jYWxlLmZvcm1hdExvbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzdWJzdHJpbmc7XHJcbiAgfSkuam9pbignJykubWF0Y2goZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCkubWFwKGZ1bmN0aW9uIChzdWJzdHJpbmcpIHtcclxuICAgIC8vIFJlcGxhY2UgdHdvIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIHdpdGggb25lIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJcclxuICAgIGlmIChzdWJzdHJpbmcgPT09IFwiJydcIikge1xyXG4gICAgICByZXR1cm4gXCInXCI7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xyXG5cclxuICAgIGlmIChmaXJzdENoYXJhY3RlciA9PT0gXCInXCIpIHtcclxuICAgICAgcmV0dXJuIGNsZWFuRXNjYXBlZFN0cmluZyhzdWJzdHJpbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBmb3JtYXR0ZXIgPSBmb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXTtcclxuXHJcbiAgICBpZiAoZm9ybWF0dGVyKSB7XHJcbiAgICAgIGlmICghKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zKSAmJiBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4oc3Vic3RyaW5nKSkge1xyXG4gICAgICAgIHRocm93UHJvdGVjdGVkRXJyb3Ioc3Vic3RyaW5nLCBkaXJ0eUZvcm1hdFN0ciwgU3RyaW5nKGRpcnR5RGF0ZSkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIShvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnMpICYmIGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4oc3Vic3RyaW5nKSkge1xyXG4gICAgICAgIHRocm93UHJvdGVjdGVkRXJyb3Ioc3Vic3RyaW5nLCBkaXJ0eUZvcm1hdFN0ciwgU3RyaW5nKGRpcnR5RGF0ZSkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gZm9ybWF0dGVyKHV0Y0RhdGUsIHN1YnN0cmluZywgbG9jYWxlLmxvY2FsaXplLCBmb3JtYXR0ZXJPcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIubWF0Y2godW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHApKSB7XHJcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdGb3JtYXQgc3RyaW5nIGNvbnRhaW5zIGFuIHVuZXNjYXBlZCBsYXRpbiBhbHBoYWJldCBjaGFyYWN0ZXIgYCcgKyBmaXJzdENoYXJhY3RlciArICdgJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHN1YnN0cmluZztcclxuICB9KS5qb2luKCcnKTtcclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhbkVzY2FwZWRTdHJpbmcoaW5wdXQpIHtcclxuICB2YXIgbWF0Y2hlZCA9IGlucHV0Lm1hdGNoKGVzY2FwZWRTdHJpbmdSZWdFeHApO1xyXG5cclxuICBpZiAoIW1hdGNoZWQpIHtcclxuICAgIHJldHVybiBpbnB1dDtcclxuICB9XHJcblxyXG4gIHJldHVybiBtYXRjaGVkWzFdLnJlcGxhY2UoZG91YmxlUXVvdGVSZWdFeHAsIFwiJ1wiKTtcclxufSIsImltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XHJcbi8qKlxyXG4gKiBAbmFtZSBpc0RhdGVcclxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXHJcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiB2YWx1ZSBhIGRhdGU/XHJcbiAqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGFuIGluc3RhbmNlIG9mIERhdGUuIFRoZSBmdW5jdGlvbiB3b3JrcyBmb3IgZGF0ZXMgdHJhbnNmZXJyZWQgYWNyb3NzIGlmcmFtZXMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSB0aGUgdmFsdWUgdG8gY2hlY2tcclxuICogQHJldHVybnMge2Jvb2xlYW59IHRydWUgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgZGF0ZVxyXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnRzIHJlcXVpcmVkXHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqIC8vIEZvciBhIHZhbGlkIGRhdGU6XHJcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZShuZXcgRGF0ZSgpKVxyXG4gKiAvLz0+IHRydWVcclxuICpcclxuICogQGV4YW1wbGVcclxuICogLy8gRm9yIGFuIGludmFsaWQgZGF0ZTpcclxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKG5ldyBEYXRlKE5hTikpXHJcbiAqIC8vPT4gdHJ1ZVxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiAvLyBGb3Igc29tZSB2YWx1ZTpcclxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKCcyMDE0LTAyLTMxJylcclxuICogLy89PiBmYWxzZVxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiAvLyBGb3IgYW4gb2JqZWN0OlxyXG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUoe30pXHJcbiAqIC8vPT4gZmFsc2VcclxuICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0RhdGUodmFsdWUpIHtcclxuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcclxuICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBEYXRlIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xyXG59IiwiaW1wb3J0IGlzRGF0ZSBmcm9tIFwiLi4vaXNEYXRlL2luZGV4LmpzXCI7XHJcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xyXG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xyXG4vKipcclxuICogQG5hbWUgaXNWYWxpZFxyXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcclxuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdmFsaWQ/XHJcbiAqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBSZXR1cm5zIGZhbHNlIGlmIGFyZ3VtZW50IGlzIEludmFsaWQgRGF0ZSBhbmQgdHJ1ZSBvdGhlcndpc2UuXHJcbiAqIEFyZ3VtZW50IGlzIGNvbnZlcnRlZCB0byBEYXRlIHVzaW5nIGB0b0RhdGVgLiBTZWUgW3RvRGF0ZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy90b0RhdGV9XHJcbiAqIEludmFsaWQgRGF0ZSBpcyBhIERhdGUsIHdob3NlIHRpbWUgdmFsdWUgaXMgTmFOLlxyXG4gKlxyXG4gKiBUaW1lIHZhbHVlIG9mIERhdGU6IGh0dHA6Ly9lczUuZ2l0aHViLmlvLyN4MTUuOS4xLjFcclxuICpcclxuICogQHBhcmFtIHsqfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcclxuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHZhbGlkXHJcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiAvLyBGb3IgdGhlIHZhbGlkIGRhdGU6XHJcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoMjAxNCwgMSwgMzEpKVxyXG4gKiAvLz0+IHRydWVcclxuICpcclxuICogQGV4YW1wbGVcclxuICogLy8gRm9yIHRoZSB2YWx1ZSwgY29udmVydGFibGUgaW50byBhIGRhdGU6XHJcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQoMTM5MzgwNDgwMDAwMClcclxuICogLy89PiB0cnVlXHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqIC8vIEZvciB0aGUgaW52YWxpZCBkYXRlOlxyXG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKCcnKSlcclxuICogLy89PiBmYWxzZVxyXG4gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVmFsaWQoZGlydHlEYXRlKSB7XHJcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XHJcblxyXG4gIGlmICghaXNEYXRlKGRpcnR5RGF0ZSkgJiYgdHlwZW9mIGRpcnR5RGF0ZSAhPT0gJ251bWJlcicpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XHJcbiAgcmV0dXJuICFpc05hTihOdW1iZXIoZGF0ZSkpO1xyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRGb3JtYXRMb25nRm4oYXJncykge1xyXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XHJcbiAgICAvLyBUT0RPOiBSZW1vdmUgU3RyaW5nKClcclxuICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcclxuICAgIHZhciBmb3JtYXQgPSBhcmdzLmZvcm1hdHNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0c1thcmdzLmRlZmF1bHRXaWR0aF07XHJcbiAgICByZXR1cm4gZm9ybWF0O1xyXG4gIH07XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZExvY2FsaXplRm4oYXJncykge1xyXG4gIHJldHVybiBmdW5jdGlvbiAoZGlydHlJbmRleCwgb3B0aW9ucykge1xyXG4gICAgdmFyIGNvbnRleHQgPSBvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmNvbnRleHQgPyBTdHJpbmcob3B0aW9ucy5jb250ZXh0KSA6ICdzdGFuZGFsb25lJztcclxuICAgIHZhciB2YWx1ZXNBcnJheTtcclxuXHJcbiAgICBpZiAoY29udGV4dCA9PT0gJ2Zvcm1hdHRpbmcnICYmIGFyZ3MuZm9ybWF0dGluZ1ZhbHVlcykge1xyXG4gICAgICB2YXIgZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0Rm9ybWF0dGluZ1dpZHRoIHx8IGFyZ3MuZGVmYXVsdFdpZHRoO1xyXG4gICAgICB2YXIgd2lkdGggPSBvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogZGVmYXVsdFdpZHRoO1xyXG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1t3aWR0aF0gfHwgYXJncy5mb3JtYXR0aW5nVmFsdWVzW2RlZmF1bHRXaWR0aF07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2YXIgX2RlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdFdpZHRoO1xyXG5cclxuICAgICAgdmFyIF93aWR0aCA9IG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcclxuXHJcbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy52YWx1ZXNbX3dpZHRoXSB8fCBhcmdzLnZhbHVlc1tfZGVmYXVsdFdpZHRoXTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgaW5kZXggPSBhcmdzLmFyZ3VtZW50Q2FsbGJhY2sgPyBhcmdzLmFyZ3VtZW50Q2FsbGJhY2soZGlydHlJbmRleCkgOiBkaXJ0eUluZGV4OyAvLyBAdHMtaWdub3JlOiBGb3Igc29tZSByZWFzb24gVHlwZVNjcmlwdCBqdXN0IGRvbid0IHdhbnQgdG8gbWF0Y2ggaXQsIG5vIG1hdHRlciBob3cgaGFyZCB3ZSB0cnkuIEkgY2hhbGxlbmdlIHlvdSB0byB0cnkgdG8gcmVtb3ZlIGl0IVxyXG5cclxuICAgIHJldHVybiB2YWx1ZXNBcnJheVtpbmRleF07XHJcbiAgfTtcclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hGbihhcmdzKSB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uIChzdHJpbmcpIHtcclxuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcclxuICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGg7XHJcbiAgICB2YXIgbWF0Y2hQYXR0ZXJuID0gd2lkdGggJiYgYXJncy5tYXRjaFBhdHRlcm5zW3dpZHRoXSB8fCBhcmdzLm1hdGNoUGF0dGVybnNbYXJncy5kZWZhdWx0TWF0Y2hXaWR0aF07XHJcbiAgICB2YXIgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2gobWF0Y2hQYXR0ZXJuKTtcclxuXHJcbiAgICBpZiAoIW1hdGNoUmVzdWx0KSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XHJcbiAgICB2YXIgcGFyc2VQYXR0ZXJucyA9IHdpZHRoICYmIGFyZ3MucGFyc2VQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5wYXJzZVBhdHRlcm5zW2FyZ3MuZGVmYXVsdFBhcnNlV2lkdGhdO1xyXG4gICAgdmFyIGtleSA9IEFycmF5LmlzQXJyYXkocGFyc2VQYXR0ZXJucykgPyBmaW5kSW5kZXgocGFyc2VQYXR0ZXJucywgZnVuY3Rpb24gKHBhdHRlcm4pIHtcclxuICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKTtcclxuICAgIH0pIDogZmluZEtleShwYXJzZVBhdHRlcm5zLCBmdW5jdGlvbiAocGF0dGVybikge1xyXG4gICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xyXG4gICAgfSk7XHJcbiAgICB2YXIgdmFsdWU7XHJcbiAgICB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayhrZXkpIDoga2V5O1xyXG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XHJcbiAgICB2YXIgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB2YWx1ZTogdmFsdWUsXHJcbiAgICAgIHJlc3Q6IHJlc3RcclxuICAgIH07XHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gZmluZEtleShvYmplY3QsIHByZWRpY2F0ZSkge1xyXG4gIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcclxuICAgIGlmIChvYmplY3QuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBwcmVkaWNhdGUob2JqZWN0W2tleV0pKSB7XHJcbiAgICAgIHJldHVybiBrZXk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdW5kZWZpbmVkO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmaW5kSW5kZXgoYXJyYXksIHByZWRpY2F0ZSkge1xyXG4gIGZvciAodmFyIGtleSA9IDA7IGtleSA8IGFycmF5Lmxlbmd0aDsga2V5KyspIHtcclxuICAgIGlmIChwcmVkaWNhdGUoYXJyYXlba2V5XSkpIHtcclxuICAgICAgcmV0dXJuIGtleTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB1bmRlZmluZWQ7XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1hdGNoUGF0dGVybkZuKGFyZ3MpIHtcclxuICByZXR1cm4gZnVuY3Rpb24gKHN0cmluZykge1xyXG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xyXG4gICAgdmFyIG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MubWF0Y2hQYXR0ZXJuKTtcclxuICAgIGlmICghbWF0Y2hSZXN1bHQpIHJldHVybiBudWxsO1xyXG4gICAgdmFyIG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcclxuICAgIHZhciBwYXJzZVJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLnBhcnNlUGF0dGVybik7XHJcbiAgICBpZiAoIXBhcnNlUmVzdWx0KSByZXR1cm4gbnVsbDtcclxuICAgIHZhciB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayhwYXJzZVJlc3VsdFswXSkgOiBwYXJzZVJlc3VsdFswXTtcclxuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xyXG4gICAgdmFyIHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdmFsdWU6IHZhbHVlLFxyXG4gICAgICByZXN0OiByZXN0XHJcbiAgICB9O1xyXG4gIH07XHJcbn0iLCJ2YXIgZm9ybWF0RGlzdGFuY2VMb2NhbGUgPSB7XHJcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xyXG4gICAgb25lOiAnbGVzcyB0aGFuIGEgc2Vjb25kJyxcclxuICAgIG90aGVyOiAnbGVzcyB0aGFuIHt7Y291bnR9fSBzZWNvbmRzJ1xyXG4gIH0sXHJcbiAgeFNlY29uZHM6IHtcclxuICAgIG9uZTogJzEgc2Vjb25kJyxcclxuICAgIG90aGVyOiAne3tjb3VudH19IHNlY29uZHMnXHJcbiAgfSxcclxuICBoYWxmQU1pbnV0ZTogJ2hhbGYgYSBtaW51dGUnLFxyXG4gIGxlc3NUaGFuWE1pbnV0ZXM6IHtcclxuICAgIG9uZTogJ2xlc3MgdGhhbiBhIG1pbnV0ZScsXHJcbiAgICBvdGhlcjogJ2xlc3MgdGhhbiB7e2NvdW50fX0gbWludXRlcydcclxuICB9LFxyXG4gIHhNaW51dGVzOiB7XHJcbiAgICBvbmU6ICcxIG1pbnV0ZScsXHJcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtaW51dGVzJ1xyXG4gIH0sXHJcbiAgYWJvdXRYSG91cnM6IHtcclxuICAgIG9uZTogJ2Fib3V0IDEgaG91cicsXHJcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSBob3VycydcclxuICB9LFxyXG4gIHhIb3Vyczoge1xyXG4gICAgb25lOiAnMSBob3VyJyxcclxuICAgIG90aGVyOiAne3tjb3VudH19IGhvdXJzJ1xyXG4gIH0sXHJcbiAgeERheXM6IHtcclxuICAgIG9uZTogJzEgZGF5JyxcclxuICAgIG90aGVyOiAne3tjb3VudH19IGRheXMnXHJcbiAgfSxcclxuICBhYm91dFhXZWVrczoge1xyXG4gICAgb25lOiAnYWJvdXQgMSB3ZWVrJyxcclxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IHdlZWtzJ1xyXG4gIH0sXHJcbiAgeFdlZWtzOiB7XHJcbiAgICBvbmU6ICcxIHdlZWsnLFxyXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gd2Vla3MnXHJcbiAgfSxcclxuICBhYm91dFhNb250aHM6IHtcclxuICAgIG9uZTogJ2Fib3V0IDEgbW9udGgnLFxyXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gbW9udGhzJ1xyXG4gIH0sXHJcbiAgeE1vbnRoczoge1xyXG4gICAgb25lOiAnMSBtb250aCcsXHJcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtb250aHMnXHJcbiAgfSxcclxuICBhYm91dFhZZWFyczoge1xyXG4gICAgb25lOiAnYWJvdXQgMSB5ZWFyJyxcclxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IHllYXJzJ1xyXG4gIH0sXHJcbiAgeFllYXJzOiB7XHJcbiAgICBvbmU6ICcxIHllYXInLFxyXG4gICAgb3RoZXI6ICd7e2NvdW50fX0geWVhcnMnXHJcbiAgfSxcclxuICBvdmVyWFllYXJzOiB7XHJcbiAgICBvbmU6ICdvdmVyIDEgeWVhcicsXHJcbiAgICBvdGhlcjogJ292ZXIge3tjb3VudH19IHllYXJzJ1xyXG4gIH0sXHJcbiAgYWxtb3N0WFllYXJzOiB7XHJcbiAgICBvbmU6ICdhbG1vc3QgMSB5ZWFyJyxcclxuICAgIG90aGVyOiAnYWxtb3N0IHt7Y291bnR9fSB5ZWFycydcclxuICB9XHJcbn07XHJcblxyXG52YXIgZm9ybWF0RGlzdGFuY2UgPSBmdW5jdGlvbiAodG9rZW4sIGNvdW50LCBvcHRpb25zKSB7XHJcbiAgdmFyIHJlc3VsdDtcclxuICB2YXIgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcclxuXHJcbiAgaWYgKHR5cGVvZiB0b2tlblZhbHVlID09PSAnc3RyaW5nJykge1xyXG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZTtcclxuICB9IGVsc2UgaWYgKGNvdW50ID09PSAxKSB7XHJcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm9uZTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vdGhlci5yZXBsYWNlKCd7e2NvdW50fX0nLCBjb3VudC50b1N0cmluZygpKTtcclxuICB9XHJcblxyXG4gIGlmIChvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmFkZFN1ZmZpeCkge1xyXG4gICAgaWYgKG9wdGlvbnMuY29tcGFyaXNvbiAmJiBvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XHJcbiAgICAgIHJldHVybiAnaW4gJyArIHJlc3VsdDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiByZXN1bHQgKyAnIGFnbyc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0RGlzdGFuY2U7IiwiaW1wb3J0IGJ1aWxkRm9ybWF0TG9uZ0ZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuL2luZGV4LmpzXCI7XHJcbnZhciBkYXRlRm9ybWF0cyA9IHtcclxuICBmdWxsOiAnRUVFRSwgTU1NTSBkbywgeScsXHJcbiAgbG9uZzogJ01NTU0gZG8sIHknLFxyXG4gIG1lZGl1bTogJ01NTSBkLCB5JyxcclxuICBzaG9ydDogJ01NL2RkL3l5eXknXHJcbn07XHJcbnZhciB0aW1lRm9ybWF0cyA9IHtcclxuICBmdWxsOiAnaDptbTpzcyBhIHp6enonLFxyXG4gIGxvbmc6ICdoOm1tOnNzIGEgeicsXHJcbiAgbWVkaXVtOiAnaDptbTpzcyBhJyxcclxuICBzaG9ydDogJ2g6bW0gYSdcclxufTtcclxudmFyIGRhdGVUaW1lRm9ybWF0cyA9IHtcclxuICBmdWxsOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcclxuICBsb25nOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcclxuICBtZWRpdW06ICd7e2RhdGV9fSwge3t0aW1lfX0nLFxyXG4gIHNob3J0OiAne3tkYXRlfX0sIHt7dGltZX19J1xyXG59O1xyXG52YXIgZm9ybWF0TG9uZyA9IHtcclxuICBkYXRlOiBidWlsZEZvcm1hdExvbmdGbih7XHJcbiAgICBmb3JtYXRzOiBkYXRlRm9ybWF0cyxcclxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXHJcbiAgfSksXHJcbiAgdGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xyXG4gICAgZm9ybWF0czogdGltZUZvcm1hdHMsXHJcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xyXG4gIH0pLFxyXG4gIGRhdGVUaW1lOiBidWlsZEZvcm1hdExvbmdGbih7XHJcbiAgICBmb3JtYXRzOiBkYXRlVGltZUZvcm1hdHMsXHJcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xyXG4gIH0pXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdExvbmc7IiwidmFyIGZvcm1hdFJlbGF0aXZlTG9jYWxlID0ge1xyXG4gIGxhc3RXZWVrOiBcIidsYXN0JyBlZWVlICdhdCcgcFwiLFxyXG4gIHllc3RlcmRheTogXCIneWVzdGVyZGF5IGF0JyBwXCIsXHJcbiAgdG9kYXk6IFwiJ3RvZGF5IGF0JyBwXCIsXHJcbiAgdG9tb3Jyb3c6IFwiJ3RvbW9ycm93IGF0JyBwXCIsXHJcbiAgbmV4dFdlZWs6IFwiZWVlZSAnYXQnIHBcIixcclxuICBvdGhlcjogJ1AnXHJcbn07XHJcblxyXG52YXIgZm9ybWF0UmVsYXRpdmUgPSBmdW5jdGlvbiAodG9rZW4sIF9kYXRlLCBfYmFzZURhdGUsIF9vcHRpb25zKSB7XHJcbiAgcmV0dXJuIGZvcm1hdFJlbGF0aXZlTG9jYWxlW3Rva2VuXTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdFJlbGF0aXZlOyIsImltcG9ydCBidWlsZExvY2FsaXplRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzXCI7XHJcbnZhciBlcmFWYWx1ZXMgPSB7XHJcbiAgbmFycm93OiBbJ0InLCAnQSddLFxyXG4gIGFiYnJldmlhdGVkOiBbJ0JDJywgJ0FEJ10sXHJcbiAgd2lkZTogWydCZWZvcmUgQ2hyaXN0JywgJ0Fubm8gRG9taW5pJ11cclxufTtcclxudmFyIHF1YXJ0ZXJWYWx1ZXMgPSB7XHJcbiAgbmFycm93OiBbJzEnLCAnMicsICczJywgJzQnXSxcclxuICBhYmJyZXZpYXRlZDogWydRMScsICdRMicsICdRMycsICdRNCddLFxyXG4gIHdpZGU6IFsnMXN0IHF1YXJ0ZXInLCAnMm5kIHF1YXJ0ZXInLCAnM3JkIHF1YXJ0ZXInLCAnNHRoIHF1YXJ0ZXInXVxyXG59OyAvLyBOb3RlOiBpbiBFbmdsaXNoLCB0aGUgbmFtZXMgb2YgZGF5cyBvZiB0aGUgd2VlayBhbmQgbW9udGhzIGFyZSBjYXBpdGFsaXplZC5cclxuLy8gSWYgeW91IGFyZSBtYWtpbmcgYSBuZXcgbG9jYWxlIGJhc2VkIG9uIHRoaXMgb25lLCBjaGVjayBpZiB0aGUgc2FtZSBpcyB0cnVlIGZvciB0aGUgbGFuZ3VhZ2UgeW91J3JlIHdvcmtpbmcgb24uXHJcbi8vIEdlbmVyYWxseSwgZm9ybWF0dGVkIGRhdGVzIHNob3VsZCBsb29rIGxpa2UgdGhleSBhcmUgaW4gdGhlIG1pZGRsZSBvZiBhIHNlbnRlbmNlLFxyXG4vLyBlLmcuIGluIFNwYW5pc2ggbGFuZ3VhZ2UgdGhlIHdlZWtkYXlzIGFuZCBtb250aHMgc2hvdWxkIGJlIGluIHRoZSBsb3dlcmNhc2UuXHJcblxyXG52YXIgbW9udGhWYWx1ZXMgPSB7XHJcbiAgbmFycm93OiBbJ0onLCAnRicsICdNJywgJ0EnLCAnTScsICdKJywgJ0onLCAnQScsICdTJywgJ08nLCAnTicsICdEJ10sXHJcbiAgYWJicmV2aWF0ZWQ6IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLCAnT2N0JywgJ05vdicsICdEZWMnXSxcclxuICB3aWRlOiBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXVxyXG59O1xyXG52YXIgZGF5VmFsdWVzID0ge1xyXG4gIG5hcnJvdzogWydTJywgJ00nLCAnVCcsICdXJywgJ1QnLCAnRicsICdTJ10sXHJcbiAgc2hvcnQ6IFsnU3UnLCAnTW8nLCAnVHUnLCAnV2UnLCAnVGgnLCAnRnInLCAnU2EnXSxcclxuICBhYmJyZXZpYXRlZDogWydTdW4nLCAnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnXSxcclxuICB3aWRlOiBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J11cclxufTtcclxudmFyIGRheVBlcmlvZFZhbHVlcyA9IHtcclxuICBuYXJyb3c6IHtcclxuICAgIGFtOiAnYScsXHJcbiAgICBwbTogJ3AnLFxyXG4gICAgbWlkbmlnaHQ6ICdtaScsXHJcbiAgICBub29uOiAnbicsXHJcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXHJcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxyXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxyXG4gICAgbmlnaHQ6ICduaWdodCdcclxuICB9LFxyXG4gIGFiYnJldmlhdGVkOiB7XHJcbiAgICBhbTogJ0FNJyxcclxuICAgIHBtOiAnUE0nLFxyXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXHJcbiAgICBub29uOiAnbm9vbicsXHJcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXHJcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxyXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxyXG4gICAgbmlnaHQ6ICduaWdodCdcclxuICB9LFxyXG4gIHdpZGU6IHtcclxuICAgIGFtOiAnYS5tLicsXHJcbiAgICBwbTogJ3AubS4nLFxyXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXHJcbiAgICBub29uOiAnbm9vbicsXHJcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXHJcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxyXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxyXG4gICAgbmlnaHQ6ICduaWdodCdcclxuICB9XHJcbn07XHJcbnZhciBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzID0ge1xyXG4gIG5hcnJvdzoge1xyXG4gICAgYW06ICdhJyxcclxuICAgIHBtOiAncCcsXHJcbiAgICBtaWRuaWdodDogJ21pJyxcclxuICAgIG5vb246ICduJyxcclxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXHJcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcclxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXHJcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xyXG4gIH0sXHJcbiAgYWJicmV2aWF0ZWQ6IHtcclxuICAgIGFtOiAnQU0nLFxyXG4gICAgcG06ICdQTScsXHJcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcclxuICAgIG5vb246ICdub29uJyxcclxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXHJcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcclxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXHJcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xyXG4gIH0sXHJcbiAgd2lkZToge1xyXG4gICAgYW06ICdhLm0uJyxcclxuICAgIHBtOiAncC5tLicsXHJcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcclxuICAgIG5vb246ICdub29uJyxcclxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXHJcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcclxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXHJcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xyXG4gIH1cclxufTtcclxuXHJcbnZhciBvcmRpbmFsTnVtYmVyID0gZnVuY3Rpb24gKGRpcnR5TnVtYmVyLCBfb3B0aW9ucykge1xyXG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpOyAvLyBJZiBvcmRpbmFsIG51bWJlcnMgZGVwZW5kIG9uIGNvbnRleHQsIGZvciBleGFtcGxlLFxyXG4gIC8vIGlmIHRoZXkgYXJlIGRpZmZlcmVudCBmb3IgZGlmZmVyZW50IGdyYW1tYXRpY2FsIGdlbmRlcnMsXHJcbiAgLy8gdXNlIGBvcHRpb25zLnVuaXRgLlxyXG4gIC8vXHJcbiAgLy8gYHVuaXRgIGNhbiBiZSAneWVhcicsICdxdWFydGVyJywgJ21vbnRoJywgJ3dlZWsnLCAnZGF0ZScsICdkYXlPZlllYXInLFxyXG4gIC8vICdkYXknLCAnaG91cicsICdtaW51dGUnLCAnc2Vjb25kJy5cclxuXHJcbiAgdmFyIHJlbTEwMCA9IG51bWJlciAlIDEwMDtcclxuXHJcbiAgaWYgKHJlbTEwMCA+IDIwIHx8IHJlbTEwMCA8IDEwKSB7XHJcbiAgICBzd2l0Y2ggKHJlbTEwMCAlIDEwKSB7XHJcbiAgICAgIGNhc2UgMTpcclxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3N0JztcclxuXHJcbiAgICAgIGNhc2UgMjpcclxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ25kJztcclxuXHJcbiAgICAgIGNhc2UgMzpcclxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3JkJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBudW1iZXIgKyAndGgnO1xyXG59O1xyXG5cclxudmFyIGxvY2FsaXplID0ge1xyXG4gIG9yZGluYWxOdW1iZXI6IG9yZGluYWxOdW1iZXIsXHJcbiAgZXJhOiBidWlsZExvY2FsaXplRm4oe1xyXG4gICAgdmFsdWVzOiBlcmFWYWx1ZXMsXHJcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xyXG4gIH0pLFxyXG4gIHF1YXJ0ZXI6IGJ1aWxkTG9jYWxpemVGbih7XHJcbiAgICB2YWx1ZXM6IHF1YXJ0ZXJWYWx1ZXMsXHJcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcclxuICAgIGFyZ3VtZW50Q2FsbGJhY2s6IGZ1bmN0aW9uIChxdWFydGVyKSB7XHJcbiAgICAgIHJldHVybiBxdWFydGVyIC0gMTtcclxuICAgIH1cclxuICB9KSxcclxuICBtb250aDogYnVpbGRMb2NhbGl6ZUZuKHtcclxuICAgIHZhbHVlczogbW9udGhWYWx1ZXMsXHJcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xyXG4gIH0pLFxyXG4gIGRheTogYnVpbGRMb2NhbGl6ZUZuKHtcclxuICAgIHZhbHVlczogZGF5VmFsdWVzLFxyXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcclxuICB9KSxcclxuICBkYXlQZXJpb2Q6IGJ1aWxkTG9jYWxpemVGbih7XHJcbiAgICB2YWx1ZXM6IGRheVBlcmlvZFZhbHVlcyxcclxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxyXG4gICAgZm9ybWF0dGluZ1ZhbHVlczogZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyxcclxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6ICd3aWRlJ1xyXG4gIH0pXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGxvY2FsaXplOyIsImltcG9ydCBidWlsZE1hdGNoRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaEZuL2luZGV4LmpzXCI7XHJcbmltcG9ydCBidWlsZE1hdGNoUGF0dGVybkZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanNcIjtcclxudmFyIG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXihcXGQrKSh0aHxzdHxuZHxyZCk/L2k7XHJcbnZhciBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL1xcZCsvaTtcclxudmFyIG1hdGNoRXJhUGF0dGVybnMgPSB7XHJcbiAgbmFycm93OiAvXihifGEpL2ksXHJcbiAgYWJicmV2aWF0ZWQ6IC9eKGJcXC4/XFxzP2NcXC4/fGJcXC4/XFxzP2NcXC4/XFxzP2VcXC4/fGFcXC4/XFxzP2RcXC4/fGNcXC4/XFxzP2VcXC4/KS9pLFxyXG4gIHdpZGU6IC9eKGJlZm9yZSBjaHJpc3R8YmVmb3JlIGNvbW1vbiBlcmF8YW5ubyBkb21pbml8Y29tbW9uIGVyYSkvaVxyXG59O1xyXG52YXIgcGFyc2VFcmFQYXR0ZXJucyA9IHtcclxuICBhbnk6IFsvXmIvaSwgL14oYXxjKS9pXVxyXG59O1xyXG52YXIgbWF0Y2hRdWFydGVyUGF0dGVybnMgPSB7XHJcbiAgbmFycm93OiAvXlsxMjM0XS9pLFxyXG4gIGFiYnJldmlhdGVkOiAvXnFbMTIzNF0vaSxcclxuICB3aWRlOiAvXlsxMjM0XSh0aHxzdHxuZHxyZCk/IHF1YXJ0ZXIvaVxyXG59O1xyXG52YXIgcGFyc2VRdWFydGVyUGF0dGVybnMgPSB7XHJcbiAgYW55OiBbLzEvaSwgLzIvaSwgLzMvaSwgLzQvaV1cclxufTtcclxudmFyIG1hdGNoTW9udGhQYXR0ZXJucyA9IHtcclxuICBuYXJyb3c6IC9eW2pmbWFzb25kXS9pLFxyXG4gIGFiYnJldmlhdGVkOiAvXihqYW58ZmVifG1hcnxhcHJ8bWF5fGp1bnxqdWx8YXVnfHNlcHxvY3R8bm92fGRlYykvaSxcclxuICB3aWRlOiAvXihqYW51YXJ5fGZlYnJ1YXJ5fG1hcmNofGFwcmlsfG1heXxqdW5lfGp1bHl8YXVndXN0fHNlcHRlbWJlcnxvY3RvYmVyfG5vdmVtYmVyfGRlY2VtYmVyKS9pXHJcbn07XHJcbnZhciBwYXJzZU1vbnRoUGF0dGVybnMgPSB7XHJcbiAgbmFycm93OiBbL15qL2ksIC9eZi9pLCAvXm0vaSwgL15hL2ksIC9ebS9pLCAvXmovaSwgL15qL2ksIC9eYS9pLCAvXnMvaSwgL15vL2ksIC9ebi9pLCAvXmQvaV0sXHJcbiAgYW55OiBbL15qYS9pLCAvXmYvaSwgL15tYXIvaSwgL15hcC9pLCAvXm1heS9pLCAvXmp1bi9pLCAvXmp1bC9pLCAvXmF1L2ksIC9ecy9pLCAvXm8vaSwgL15uL2ksIC9eZC9pXVxyXG59O1xyXG52YXIgbWF0Y2hEYXlQYXR0ZXJucyA9IHtcclxuICBuYXJyb3c6IC9eW3NtdHdmXS9pLFxyXG4gIHNob3J0OiAvXihzdXxtb3x0dXx3ZXx0aHxmcnxzYSkvaSxcclxuICBhYmJyZXZpYXRlZDogL14oc3VufG1vbnx0dWV8d2VkfHRodXxmcml8c2F0KS9pLFxyXG4gIHdpZGU6IC9eKHN1bmRheXxtb25kYXl8dHVlc2RheXx3ZWRuZXNkYXl8dGh1cnNkYXl8ZnJpZGF5fHNhdHVyZGF5KS9pXHJcbn07XHJcbnZhciBwYXJzZURheVBhdHRlcm5zID0ge1xyXG4gIG5hcnJvdzogWy9ecy9pLCAvXm0vaSwgL150L2ksIC9edy9pLCAvXnQvaSwgL15mL2ksIC9ecy9pXSxcclxuICBhbnk6IFsvXnN1L2ksIC9ebS9pLCAvXnR1L2ksIC9edy9pLCAvXnRoL2ksIC9eZi9pLCAvXnNhL2ldXHJcbn07XHJcbnZhciBtYXRjaERheVBlcmlvZFBhdHRlcm5zID0ge1xyXG4gIG5hcnJvdzogL14oYXxwfG1pfG58KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pLFxyXG4gIGFueTogL14oW2FwXVxcLj9cXHM/bVxcLj98bWlkbmlnaHR8bm9vbnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2lcclxufTtcclxudmFyIHBhcnNlRGF5UGVyaW9kUGF0dGVybnMgPSB7XHJcbiAgYW55OiB7XHJcbiAgICBhbTogL15hL2ksXHJcbiAgICBwbTogL15wL2ksXHJcbiAgICBtaWRuaWdodDogL15taS9pLFxyXG4gICAgbm9vbjogL15uby9pLFxyXG4gICAgbW9ybmluZzogL21vcm5pbmcvaSxcclxuICAgIGFmdGVybm9vbjogL2FmdGVybm9vbi9pLFxyXG4gICAgZXZlbmluZzogL2V2ZW5pbmcvaSxcclxuICAgIG5pZ2h0OiAvbmlnaHQvaVxyXG4gIH1cclxufTtcclxudmFyIG1hdGNoID0ge1xyXG4gIG9yZGluYWxOdW1iZXI6IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oe1xyXG4gICAgbWF0Y2hQYXR0ZXJuOiBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuLFxyXG4gICAgcGFyc2VQYXR0ZXJuOiBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuLFxyXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSwgMTApO1xyXG4gICAgfVxyXG4gIH0pLFxyXG4gIGVyYTogYnVpbGRNYXRjaEZuKHtcclxuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRXJhUGF0dGVybnMsXHJcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxyXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VFcmFQYXR0ZXJucyxcclxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xyXG4gIH0pLFxyXG4gIHF1YXJ0ZXI6IGJ1aWxkTWF0Y2hGbih7XHJcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyxcclxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXHJcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyxcclxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55JyxcclxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uIChpbmRleCkge1xyXG4gICAgICByZXR1cm4gaW5kZXggKyAxO1xyXG4gICAgfVxyXG4gIH0pLFxyXG4gIG1vbnRoOiBidWlsZE1hdGNoRm4oe1xyXG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hNb250aFBhdHRlcm5zLFxyXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcclxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlTW9udGhQYXR0ZXJucyxcclxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xyXG4gIH0pLFxyXG4gIGRheTogYnVpbGRNYXRjaEZuKHtcclxuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGF0dGVybnMsXHJcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxyXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQYXR0ZXJucyxcclxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xyXG4gIH0pLFxyXG4gIGRheVBlcmlvZDogYnVpbGRNYXRjaEZuKHtcclxuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGVyaW9kUGF0dGVybnMsXHJcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ2FueScsXHJcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBlcmlvZFBhdHRlcm5zLFxyXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXHJcbiAgfSlcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgbWF0Y2g7IiwiaW1wb3J0IGZvcm1hdERpc3RhbmNlIGZyb20gXCIuL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanNcIjtcclxuaW1wb3J0IGZvcm1hdExvbmcgZnJvbSBcIi4vX2xpYi9mb3JtYXRMb25nL2luZGV4LmpzXCI7XHJcbmltcG9ydCBmb3JtYXRSZWxhdGl2ZSBmcm9tIFwiLi9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzXCI7XHJcbmltcG9ydCBsb2NhbGl6ZSBmcm9tIFwiLi9fbGliL2xvY2FsaXplL2luZGV4LmpzXCI7XHJcbmltcG9ydCBtYXRjaCBmcm9tIFwiLi9fbGliL21hdGNoL2luZGV4LmpzXCI7XHJcblxyXG4vKipcclxuICogQHR5cGUge0xvY2FsZX1cclxuICogQGNhdGVnb3J5IExvY2FsZXNcclxuICogQHN1bW1hcnkgRW5nbGlzaCBsb2NhbGUgKFVuaXRlZCBTdGF0ZXMpLlxyXG4gKiBAbGFuZ3VhZ2UgRW5nbGlzaFxyXG4gKiBAaXNvLTYzOS0yIGVuZ1xyXG4gKiBAYXV0aG9yIFNhc2hhIEtvc3MgW0Brb3Nzbm9jb3JwXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20va29zc25vY29ycH1cclxuICogQGF1dGhvciBMZXNoYSBLb3NzIFtAbGVzaGFrb3NzXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbGVzaGFrb3NzfVxyXG4gKi9cclxudmFyIGxvY2FsZSA9IHtcclxuICBjb2RlOiAnZW4tVVMnLFxyXG4gIGZvcm1hdERpc3RhbmNlOiBmb3JtYXREaXN0YW5jZSxcclxuICBmb3JtYXRMb25nOiBmb3JtYXRMb25nLFxyXG4gIGZvcm1hdFJlbGF0aXZlOiBmb3JtYXRSZWxhdGl2ZSxcclxuICBsb2NhbGl6ZTogbG9jYWxpemUsXHJcbiAgbWF0Y2g6IG1hdGNoLFxyXG4gIG9wdGlvbnM6IHtcclxuICAgIHdlZWtTdGFydHNPbjogMFxyXG4gICAgLyogU3VuZGF5ICovXHJcbiAgICAsXHJcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDFcclxuICB9XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGxvY2FsZTsiLCJpbXBvcnQgYWRkTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9hZGRNaWxsaXNlY29uZHMvaW5kZXguanNcIjtcclxuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcclxuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcclxuLyoqXHJcbiAqIEBuYW1lIHN1Yk1pbGxpc2Vjb25kc1xyXG4gKiBAY2F0ZWdvcnkgTWlsbGlzZWNvbmQgSGVscGVyc1xyXG4gKiBAc3VtbWFyeSBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cclxuICpcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxyXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBtaWxsaXNlY29uZHMgdG8gYmUgc3VidHJhY3RlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxyXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIG1pbGxpc2Vjb25kcyBzdWJ0cmFjdGVkXHJcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcclxuICpcclxuICogQGV4YW1wbGVcclxuICogLy8gU3VidHJhY3QgNzUwIG1pbGxpc2Vjb25kcyBmcm9tIDEwIEp1bHkgMjAxNCAxMjo0NTozMC4wMDA6XHJcbiAqIGNvbnN0IHJlc3VsdCA9IHN1Yk1pbGxpc2Vjb25kcyhuZXcgRGF0ZSgyMDE0LCA2LCAxMCwgMTIsIDQ1LCAzMCwgMCksIDc1MClcclxuICogLy89PiBUaHUgSnVsIDEwIDIwMTQgMTI6NDU6MjkuMjUwXHJcbiAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3ViTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcclxuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcclxuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcclxuICByZXR1cm4gYWRkTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgLWFtb3VudCk7XHJcbn0iLCJpbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xyXG4vKipcclxuICogQG5hbWUgdG9EYXRlXHJcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xyXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxyXG4gKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cclxuICpcclxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cclxuICpcclxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxyXG4gKlxyXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cclxuICpcclxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXHJcbiAqXHJcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcclxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXHJcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcclxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcclxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcclxuICpcclxuICogQGV4YW1wbGVcclxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XHJcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxyXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxyXG4gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xyXG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xyXG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxyXG5cclxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IHR5cGVvZiBhcmd1bWVudCA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcclxuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxyXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XHJcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcclxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcclxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNzdHJpbmctYXJndW1lbnRzXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxyXG5cclxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBxdWVyeUNsaW1hdGUsIHF1ZXJ5Rm9yZWNhc3QgfSBmcm9tIFwiLi9xdWVyeVwiXHJcbmltcG9ydCB7IGZvcm1hdCwgYWRkLCBtYXggfSBmcm9tICdkYXRlLWZucydcclxuaW1wb3J0IHsgdGUgfSBmcm9tIFwiZGF0ZS1mbnMvbG9jYWxlXCI7XHJcbmNvbnN0IGhvbWVEaXNwbGF5ZWRDaXRpZXMgPSBbJ3Rva3lvJywgJ3JvbWEnLCAnZnJhbmNlJywgJ25ldyB5b3JrJywgJ2F0aGVucycsICdsb25kb24nXVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlbmRlckhvbWVQYWdlKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICByZW5kZXJMb2FkZXIoJ0xvYWRpbmcgSG9tZSBQYWdlLi4uJylcclxuICAgICAgICBsZXQgY2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjYXJkc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjYXJkcy1jb250YWluZXItaG9tZScpO1xyXG4gICAgICAgIGNhcmRzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21haW4tc3ViLWNvbnRhaW5lcicpXHJcbiAgICAgICAgZm9yIChjb25zdCBjaXR5IG9mIGhvbWVEaXNwbGF5ZWRDaXRpZXMpIHtcclxuICAgICAgICAgICAgbGV0IGNpdHlSZXRyaWV2ZWREYXRhID0gYXdhaXQgcXVlcnlDbGltYXRlKGNpdHkpO1xyXG4gICAgICAgICAgICBsZXQgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmQtaG9tZScpXHJcbiAgICAgICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZChjaXR5LnJlcGxhY2UoL1xccysvZywgJy0nKSlcclxuXHJcbiAgICAgICAgICAgIGxldCBjaXR5TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBjaXR5TmFtZS50ZXh0Q29udGVudCA9IGNpdHlSZXRyaWV2ZWREYXRhLm5hbWU7XHJcbiAgICAgICAgICAgIGNpdHlOYW1lLmNsYXNzTGlzdC5hZGQoJ2NpdHktbmFtZS1ob21lJylcclxuXHJcbiAgICAgICAgICAgIGxldCBjaXR5VGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBjaXR5VGVtcC5jbGFzc0xpc3QuYWRkKCdjaXR5LXRlbXAtaG9tZScpXHJcbiAgICAgICAgICAgIGNpdHlUZW1wLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChjaXR5UmV0cmlldmVkRGF0YS5tYWluLnRlbXAgLSAyNzUpfcKwQ2A7XHJcblxyXG4gICAgICAgICAgICBsZXQgY2l0eVdlYXRoZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgICAgICBjaXR5V2VhdGhlci5jbGFzc0xpc3QuYWRkKCdjaXR5LXdlYXRoZXItaG9tZScpXHJcbiAgICAgICAgICAgIGNpdHlXZWF0aGVyLnRleHRDb250ZW50ID0gY2l0eVJldHJpZXZlZERhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGNpdHlSZXRyaWV2ZWREYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb24uc2xpY2UoMSlcclxuXHJcbiAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2l0eU5hbWUpXHJcbiAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2l0eVdlYXRoZXIpXHJcbiAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2l0eVRlbXApXHJcbiAgICAgICAgICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyUXVlcmllZENpdHkoY2l0eVJldHJpZXZlZERhdGEubmFtZSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgY2FyZHNDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZClcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcbiAgICAgICAgbWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtYWluLWNvbnRhaW5lci1ob21lJyk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG4gICAgICAgIGxldCBsb2dvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBsb2dvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2xvZ28tZGVmYXVsdCcpXHJcbiAgICAgICAgbGV0IGxvZ29JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuICAgICAgICBsb2dvSWNvbi5zcmMgPSAnLi9oZWFkLWljb24uZ2lmJ1xyXG4gICAgICAgIGxldCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxyXG4gICAgICAgIGxvZ28uY2xhc3NMaXN0LmFkZCgnbG9nby10ZXh0LWRlZmF1bHQnKVxyXG4gICAgICAgIGxvZ28udGV4dENvbnRlbnQgPSAnV8K3ZcK3YcK3dMK3aMK3ZcK3cidcclxuICAgICAgICBsb2dvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICAgICAgICB9KVxyXG4gICAgICAgIGxvZ29Db250YWluZXIuYXBwZW5kQ2hpbGQobG9nb0ljb24pXHJcbiAgICAgICAgbG9nb0NvbnRhaW5lci5hcHBlbmRDaGlsZChsb2dvKVxyXG5cclxuICAgICAgICBsZXQgaW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcclxuICAgICAgICBpbnB1dENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgcmVuZGVyUXVlcmllZENpdHkoKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaW5wdXRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaW5wdXQtY29udGFpbmVyLWhvbWUnKVxyXG4gICAgICAgIGxldCBpbnB1dEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcclxuICAgICAgICBpbnB1dEJveC5jbGFzc0xpc3QuYWRkKCdpbnB1dC1ob21lJylcclxuXHJcbiAgICAgICAgaW5wdXRCb3gucGxhY2Vob2xkZXIgPSAnQ2l0eS4uLidcclxuICAgICAgICBsZXQgaW5wdXRTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXHJcblxyXG5cclxuICAgICAgICBsZXQgc2VhcmNoQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuICAgICAgICBzZWFyY2hCdXR0b24uY2xhc3NMaXN0LmFkZCgnc3VibWl0LWhvbWUnKVxyXG4gICAgICAgIHNlYXJjaEJ1dHRvbi5zcmMgPSAnLi9zdmcvbWFnbmlmeS5zdmcnXHJcbiAgICAgICAgc2VhcmNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVuZGVyUXVlcmllZENpdHkpXHJcblxyXG4gICAgICAgIGlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0Qm94KVxyXG4gICAgICAgIGlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0U3BhbilcclxuICAgICAgICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChzZWFyY2hCdXR0b24pXHJcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGxvZ29Db250YWluZXIpXHJcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGlucHV0Q29udGFpbmVyKVxyXG5cclxuICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcilcclxuICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmRzQ29udGFpbmVyKVxyXG5cclxuICAgICAgICBjbGVhcigpXHJcblxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWFpbkNvbnRhaW5lcilcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgbGV0IGVycm9yUHJvbWlzZSA9IGF3YWl0IGVycm9yXHJcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgKi9jb25zb2xlLmxvZyguLi5vb19vbyhgYzQ4ZmYxXzBgLGVycm9yKSlcclxuICAgICAgICByZW5kZXJFcnJvcihlcnJvclByb21pc2UubWVzc2FnZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGVycm9yUHJvbWlzZS5tZXNzYWdlLnNsaWNlKDEpKVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlbmRlclF1ZXJpZWRDaXR5KGNpdHk9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKS52YWx1ZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBsZXQgZm9yZWNhc3QgPSBhd2FpdCBxdWVyeUZvcmVjYXN0KGNpdHkpXHJcbiAgICAgICAgbGV0IHRpbWV6b25lID0gZm9yZWNhc3QuY2l0eS50aW1lem9uZTtcclxuICAgICAgICBsZXQgYXJyRm9yZWNhc3QgPSBmb3JlY2FzdC5saXN0O1xyXG4gICAgICAgIGxldCByZXRyaWV2ZWREYXRhID0gYXdhaXQgcXVlcnlDbGltYXRlKGNpdHkpXHJcblxyXG4gICAgICAgIHJlbmRlckxvYWRlcignUmV0cmlldmluZyBEYXRhLi4uJylcclxuXHJcbiAgICAgICAgbGV0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcbiAgICAgICAgbWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtYWluLWNvbnRhaW5lci1ob21lJyk7XHJcblxyXG4gICAgICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuICAgICAgICBsZXQgbG9nb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgbG9nb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdsb2dvLWRlZmF1bHQnKVxyXG4gICAgICAgIGxldCBsb2dvSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICAgICAgbG9nb0ljb24uc3JjID0gJy4vaGVhZC1pY29uLmdpZidcclxuICAgICAgICBsZXQgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcclxuICAgICAgICBsb2dvLmNsYXNzTGlzdC5hZGQoJ2xvZ28tdGV4dC1kZWZhdWx0JylcclxuICAgICAgICBsb2dvLnRleHRDb250ZW50ID0gJ1fCt2XCt2HCt3TCt2jCt2XCt3InXHJcbiAgICAgICAgbG9nby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBsb2dvQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvZ29JY29uKVxyXG4gICAgICAgIGxvZ29Db250YWluZXIuYXBwZW5kQ2hpbGQobG9nbylcclxuXHJcbiAgICAgICAgbGV0IGlucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXHJcbiAgICAgICAgaW5wdXRDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAgIHJlbmRlclF1ZXJpZWRDaXR5KClcclxuICAgICAgICB9KVxyXG4gICAgICAgIGlucHV0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2lucHV0LWNvbnRhaW5lci1ob21lJylcclxuICAgICAgICBsZXQgaW5wdXRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcbiAgICAgICAgaW5wdXRCb3guY2xhc3NMaXN0LmFkZCgnaW5wdXQtaG9tZScpXHJcbiAgICAgICAgaW5wdXRCb3gucGxhY2Vob2xkZXIgPSAnQ2l0eS4uLidcclxuICAgICAgICBsZXQgaW5wdXRTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXHJcblxyXG5cclxuICAgICAgICBsZXQgc2VhcmNoQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuICAgICAgICBzZWFyY2hCdXR0b24uY2xhc3NMaXN0LmFkZCgnc3VibWl0LWhvbWUnKVxyXG4gICAgICAgIHNlYXJjaEJ1dHRvbi5zcmMgPSAnLi9zdmcvbWFnbmlmeS5zdmcnXHJcbiAgICAgICAgc2VhcmNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVuZGVyUXVlcmllZENpdHkpXHJcblxyXG4gICAgICAgIGlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0Qm94KVxyXG4gICAgICAgIGlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0U3BhbilcclxuICAgICAgICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChzZWFyY2hCdXR0b24pXHJcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGxvZ29Db250YWluZXIpXHJcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGlucHV0Q29udGFpbmVyKVxyXG5cclxuICAgICAgICBsZXQgcXVlcmllZE1haW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIHF1ZXJpZWRNYWluQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21haW4tY29udGFpbmVyLXF1ZXJpZWQnKVxyXG5cclxuICAgICAgICAvLyB0b3AgaGVhZGVyXHJcbiAgICAgICAgbGV0IHF1ZXJpZWRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIHF1ZXJpZWRIZWFkZXIuY2xhc3NMaXN0LmFkZCgnc3ViLWhlYWRlci1xdWVyaWVkJylcclxuXHJcbiAgICAgICAgbGV0IGNpdHlOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBjaXR5TmFtZS5jbGFzc0xpc3QuYWRkKCdjaXR5LW5hbWUtcXVlcmllZCcpXHJcbiAgICAgICAgY2l0eU5hbWUudGV4dENvbnRlbnQgPSByZXRyaWV2ZWREYXRhLm5hbWVcclxuICAgICAgICBsZXQgY2l0eUNvdW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcclxuICAgICAgICBjaXR5Q291bnRyeS5jbGFzc0xpc3QuYWRkKCdjaXR5LWNvdW50cnktcXVlcmllZCcpXHJcbiAgICAgICAgY2l0eUNvdW50cnkudGV4dENvbnRlbnQgPSByZXRyaWV2ZWREYXRhLnN5cy5jb3VudHJ5XHJcbiAgICAgICAgY2l0eU5hbWUuYXBwZW5kQ2hpbGQoY2l0eUNvdW50cnkpXHJcblxyXG4gICAgICAgIGxldCBjaXR5VGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgY2l0eVRlbXAuY2xhc3NMaXN0LmFkZCgnY2l0eS10ZW1wLXF1ZXJpZWQnKVxyXG4gICAgICAgIGNpdHlUZW1wLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChyZXRyaWV2ZWREYXRhLm1haW4udGVtcCAtIDI3NSl9wrBgXHJcbiAgICAgICAgbGV0IHdlYXRoZXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuICAgICAgICB3ZWF0aGVySWNvbi5zcmMgPSBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtyZXRyaWV2ZWREYXRhLndlYXRoZXJbMF0uaWNvbn1AMngucG5nYFxyXG4gICAgICAgIGNpdHlUZW1wLmFwcGVuZENoaWxkKHdlYXRoZXJJY29uKVxyXG5cclxuICAgICAgICBsZXQgY2l0eVdlYXRoZXJEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgY2l0eVdlYXRoZXJEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdjaXR5LXdlYXRoZXItcXVlcmllZCcpXHJcbiAgICAgICAgY2l0eVdlYXRoZXJEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHJldHJpZXZlZERhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHJldHJpZXZlZERhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbi5zbGljZSgxKVxyXG5cclxuICAgICAgICBxdWVyaWVkSGVhZGVyLmFwcGVuZENoaWxkKGNpdHlOYW1lKVxyXG4gICAgICAgIHF1ZXJpZWRIZWFkZXIuYXBwZW5kQ2hpbGQoY2l0eVRlbXApXHJcbiAgICAgICAgcXVlcmllZEhlYWRlci5hcHBlbmRDaGlsZChjaXR5V2VhdGhlckRlc2NyaXB0aW9uKVxyXG5cclxuICAgICAgICAvLyBtaWRkbGUgY29udGFpbmVyXHJcbiAgICAgICAgbGV0IHF1ZXJpZWRBZGRpdGlvbmFsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBxdWVyaWVkQWRkaXRpb25hbENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtaWRkbGUtY29udGFpbmVyLXF1ZXJpZWQnKVxyXG5cclxuICAgICAgICBsZXQgY2l0eUh1bWlkaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBjaXR5SHVtaWRpdHkuY2xhc3NMaXN0LmFkZCgnY2l0eS1odW1pZGl0eS1jb250YWluZXItcXVlcmllZCcpXHJcbiAgICAgICAgbGV0IGNpdHlIdW1pZGl0eUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG4gICAgICAgIGNpdHlIdW1pZGl0eUljb24uY2xhc3NMaXN0LmFkZCgnY2l0eS1odW1pZGl0eS1pY29uLXF1ZXJpZWQnKVxyXG4gICAgICAgIGNpdHlIdW1pZGl0eUljb24uc3JjID0gJy4vc3ZnL2Ryb3AucG5nJ1xyXG4gICAgICAgIGxldCBjaXR5SHVtaWRpdHlNYWluVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgY2l0eUh1bWlkaXR5TWFpblRleHQuY2xhc3NMaXN0LmFkZCgnY2l0eS1odW1pZGl0eS1tYWluVGV4dC1xdWVyaWVkJylcclxuICAgICAgICBjaXR5SHVtaWRpdHlNYWluVGV4dC50ZXh0Q29udGVudCA9ICdIdW1pZGl0eSdcclxuICAgICAgICBsZXQgY2l0eUh1bWlkaXR5VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgY2l0eUh1bWlkaXR5VGV4dC5jbGFzc0xpc3QuYWRkKCdjaXR5LWh1bWlkaXR5LXRleHQtcXVlcmllZCcpXHJcbiAgICAgICAgY2l0eUh1bWlkaXR5VGV4dC50ZXh0Q29udGVudCA9IGAke3JldHJpZXZlZERhdGEubWFpbi5odW1pZGl0eX0lYFxyXG4gICAgICAgIGNpdHlIdW1pZGl0eS5hcHBlbmRDaGlsZChjaXR5SHVtaWRpdHlJY29uKVxyXG4gICAgICAgIGNpdHlIdW1pZGl0eS5hcHBlbmRDaGlsZChjaXR5SHVtaWRpdHlNYWluVGV4dClcclxuICAgICAgICBjaXR5SHVtaWRpdHkuYXBwZW5kQ2hpbGQoY2l0eUh1bWlkaXR5VGV4dClcclxuXHJcbiAgICAgICAgbGV0IGNpdHlDbG91ZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIGNpdHlDbG91ZHMuY2xhc3NMaXN0LmFkZCgnY2l0eS1jbG91ZHMtY29udGFpbmVyLXF1ZXJpZWQnKVxyXG4gICAgICAgIGxldCBjaXR5Q2xvdWRzSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICAgICAgY2l0eUNsb3Vkc0ljb24uY2xhc3NMaXN0LmFkZCgnY2l0eS1jbG91ZHMtaWNvbi1xdWVyaWVkJylcclxuICAgICAgICBjaXR5Q2xvdWRzSWNvbi5zcmMgPSAnLi9zdmcvY2xvdWQucG5nJ1xyXG4gICAgICAgIGxldCBjaXR5Q2xvdWRzTWFpblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIGNpdHlDbG91ZHNNYWluVGV4dC5jbGFzc0xpc3QuYWRkKCdjaXR5LWNsb3Vkcy1tYWluVGV4dC1xdWVyaWVkJylcclxuICAgICAgICBjaXR5Q2xvdWRzTWFpblRleHQudGV4dENvbnRlbnQgPSAnQ2xvdWRzJ1xyXG4gICAgICAgIGxldCBjaXR5Q2xvdWRzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgY2l0eUNsb3Vkc1RleHQuY2xhc3NMaXN0LmFkZCgnY2l0eS1jbG91ZHMtdGV4dC1xdWVyaWVkJylcclxuICAgICAgICBjaXR5Q2xvdWRzVGV4dC50ZXh0Q29udGVudCA9IGAke3JldHJpZXZlZERhdGEuY2xvdWRzLmFsbH0lYFxyXG4gICAgICAgIGNpdHlDbG91ZHMuYXBwZW5kQ2hpbGQoY2l0eUNsb3Vkc0ljb24pXHJcbiAgICAgICAgY2l0eUNsb3Vkcy5hcHBlbmRDaGlsZChjaXR5Q2xvdWRzTWFpblRleHQpXHJcbiAgICAgICAgY2l0eUNsb3Vkcy5hcHBlbmRDaGlsZChjaXR5Q2xvdWRzVGV4dClcclxuXHJcbiAgICAgICAgbGV0IGNpdHlWaXNpYmlsaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBjaXR5VmlzaWJpbGl0eS5jbGFzc0xpc3QuYWRkKCdjaXR5LXZpc2liaWxpdHktY29udGFpbmVyLXF1ZXJpZWQnKVxyXG4gICAgICAgIGxldCBjaXR5VmlzaWJpbGl0eUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG4gICAgICAgIGNpdHlWaXNpYmlsaXR5SWNvbi5jbGFzc0xpc3QuYWRkKCdjaXR5LXZpc2liaWxpdHktaWNvbi1xdWVyaWVkJylcclxuICAgICAgICBjaXR5VmlzaWJpbGl0eUljb24uc3JjID0gJy4vc3ZnL3Zpc2liaWxpdHkucG5nJ1xyXG4gICAgICAgIGxldCBjaXR5VmlzaWJpbGl0eU1haW5UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBjaXR5VmlzaWJpbGl0eU1haW5UZXh0LmNsYXNzTGlzdC5hZGQoJ2NpdHktdmlzaWJpbGl0eS1tYWluVGV4dC1xdWVyaWVkJylcclxuICAgICAgICBjaXR5VmlzaWJpbGl0eU1haW5UZXh0LnRleHRDb250ZW50ID0gJ1Zpc2liaWxpdHknXHJcbiAgICAgICAgbGV0IGNpdHlWaXNpYmlsaXR5VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgY2l0eVZpc2liaWxpdHlUZXh0LmNsYXNzTGlzdC5hZGQoJ2NpdHktdmlzaWJpbGl0eS10ZXh0LXF1ZXJpZWQnKVxyXG4gICAgICAgIGNpdHlWaXNpYmlsaXR5VGV4dC50ZXh0Q29udGVudCA9IGAkeyhyZXRyaWV2ZWREYXRhLnZpc2liaWxpdHkgLyAxMDAwKS50b0ZpeGVkKDIpfSBrbWBcclxuICAgICAgICBjaXR5VmlzaWJpbGl0eS5hcHBlbmRDaGlsZChjaXR5VmlzaWJpbGl0eUljb24pXHJcbiAgICAgICAgY2l0eVZpc2liaWxpdHkuYXBwZW5kQ2hpbGQoY2l0eVZpc2liaWxpdHlNYWluVGV4dClcclxuICAgICAgICBjaXR5VmlzaWJpbGl0eS5hcHBlbmRDaGlsZChjaXR5VmlzaWJpbGl0eVRleHQpXHJcblxyXG4gICAgICAgIHF1ZXJpZWRBZGRpdGlvbmFsQ29udGFpbmVyLmFwcGVuZENoaWxkKGNpdHlIdW1pZGl0eSlcclxuICAgICAgICBxdWVyaWVkQWRkaXRpb25hbENvbnRhaW5lci5hcHBlbmRDaGlsZChjaXR5Q2xvdWRzKVxyXG4gICAgICAgIHF1ZXJpZWRBZGRpdGlvbmFsQ29udGFpbmVyLmFwcGVuZENoaWxkKGNpdHlWaXNpYmlsaXR5KVxyXG5cclxuICAgICAgICAvLyBob3VybHkgY29udGFpbmVyXHJcbiAgICAgICAgbGV0IHF1ZXJpZWRIb3VybHlGb3JlY2FzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgcXVlcmllZEhvdXJseUZvcmVjYXN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hvdXJseS1mb3JlY2FzdC1jb250YWluZXItcXVlcmllZCcpXHJcbiAgICAgICAgbGV0IHF1ZXJpZWRIb3VybHlGb3JlY2FzdFN1YkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgcXVlcmllZEhvdXJseUZvcmVjYXN0U3ViQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hvdXJseS1zdWItY29udGFpbmVyLXF1ZXJpZWQnKVxyXG5cclxuICAgICAgICBsZXQgY3VycmVudEZvcmVjYXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBjdXJyZW50Rm9yZWNhc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaG91cmx5LWZvcmVjYXN0LWl0ZW0tcXVlcmllZCcpXHJcbiAgICAgICAgbGV0IGhvdXJseUZvcmVjYXN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBob3VybHlGb3JlY2FzdEhlYWRlci5jbGFzc0xpc3QuYWRkKCdob3VybHktaGVhZGVyLXF1ZXJpZWQnKVxyXG4gICAgICAgIGhvdXJseUZvcmVjYXN0SGVhZGVyLnRleHRDb250ZW50ID0gJ05vdydcclxuICAgICAgICBsZXQgaG91cmx5SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICAgICAgaG91cmx5SWNvbi5zcmMgPSBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtyZXRyaWV2ZWREYXRhLndlYXRoZXJbMF0uaWNvbn1AMngucG5nYFxyXG4gICAgICAgIGxldCBob3VybHlUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBob3VybHlUZW1wLmNsYXNzTGlzdC5hZGQoJ2hvdXJseS10ZW1wLXF1ZXJpZWQnKVxyXG4gICAgICAgIGhvdXJseVRlbXAudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKHJldHJpZXZlZERhdGEubWFpbi50ZW1wIC0gMjc1KX3CsGBcclxuXHJcbiAgICAgICAgY3VycmVudEZvcmVjYXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGhvdXJseUZvcmVjYXN0SGVhZGVyKVxyXG4gICAgICAgIGN1cnJlbnRGb3JlY2FzdENvbnRhaW5lci5hcHBlbmRDaGlsZChob3VybHlJY29uKVxyXG4gICAgICAgIGN1cnJlbnRGb3JlY2FzdENvbnRhaW5lci5hcHBlbmRDaGlsZChob3VybHlUZW1wKVxyXG4gICAgICAgIHF1ZXJpZWRIb3VybHlGb3JlY2FzdFN1YkNvbnRhaW5lci5hcHBlbmRDaGlsZChjdXJyZW50Rm9yZWNhc3RDb250YWluZXIpXHJcblxyXG5cclxuICAgICAgICBhcnJGb3JlY2FzdC5mb3JFYWNoKChjdXJyZW50Rm9yZWNhc3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRGb3JlY2FzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgICAgIGN1cnJlbnRGb3JlY2FzdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdob3VybHktZm9yZWNhc3QtaXRlbS1xdWVyaWVkJylcclxuICAgICAgICAgICAgbGV0IGhvdXJseUZvcmVjYXN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICAgICAgaG91cmx5Rm9yZWNhc3RIZWFkZXIuY2xhc3NMaXN0LmFkZCgnaG91cmx5LWhlYWRlci1xdWVyaWVkJylcclxuICAgICAgICAgICAgaG91cmx5Rm9yZWNhc3RIZWFkZXIudGV4dENvbnRlbnQgPSBmb3JtYXQoYWRkKG5ldyBEYXRlKGN1cnJlbnRGb3JlY2FzdC5kdF90eHQpLCB7IHNlY29uZHM6IHRpbWV6b25lIH0pLCAncCcpXHJcbiAgICAgICAgICAgIGxldCBob3VybHlJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuICAgICAgICAgICAgaG91cmx5SWNvbi5zcmMgPSBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtjdXJyZW50Rm9yZWNhc3Qud2VhdGhlclswXS5pY29ufUAyeC5wbmdgXHJcbiAgICAgICAgICAgIGxldCBob3VybHlUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICAgICAgaG91cmx5VGVtcC5jbGFzc0xpc3QuYWRkKCdob3VybHktdGVtcC1xdWVyaWVkJylcclxuICAgICAgICAgICAgaG91cmx5VGVtcC50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoY3VycmVudEZvcmVjYXN0Lm1haW4udGVtcCAtIDI3NSl9wrBgXHJcblxyXG4gICAgICAgICAgICBjdXJyZW50Rm9yZWNhc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoaG91cmx5Rm9yZWNhc3RIZWFkZXIpXHJcbiAgICAgICAgICAgIGN1cnJlbnRGb3JlY2FzdENvbnRhaW5lci5hcHBlbmRDaGlsZChob3VybHlJY29uKVxyXG4gICAgICAgICAgICBjdXJyZW50Rm9yZWNhc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoaG91cmx5VGVtcClcclxuXHJcbiAgICAgICAgICAgIHF1ZXJpZWRIb3VybHlGb3JlY2FzdFN1YkNvbnRhaW5lci5hcHBlbmRDaGlsZChjdXJyZW50Rm9yZWNhc3RDb250YWluZXIpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgbGV0IGhvdXJseUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgaG91cmx5SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hvdXJseS1oZWFkZXItbWFpbi1xdWVyaWVkJylcclxuICAgICAgICBob3VybHlIZWFkZXIudGV4dENvbnRlbnQgPSAnSE9VUkxZIEZPUkVDQVNUJ1xyXG5cclxuICAgICAgICBxdWVyaWVkSG91cmx5Rm9yZWNhc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoaG91cmx5SGVhZGVyKVxyXG4gICAgICAgIHF1ZXJpZWRIb3VybHlGb3JlY2FzdENvbnRhaW5lci5hcHBlbmRDaGlsZChxdWVyaWVkSG91cmx5Rm9yZWNhc3RTdWJDb250YWluZXIpXHJcblxyXG4gICAgICAgIC8vIGxhc3QgY29udGFpbmVyXHJcbiAgICAgICAgbGV0IHF1ZXJpZWREYWlseUZvcmVjYXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBxdWVyaWVkRGFpbHlGb3JlY2FzdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkYWlseS1mb3JlY2FzdC1jb250YWluZXItcXVlcmllZCcpXHJcbiAgICAgICAgbGV0IHF1ZXJpZWREYWlseUZvcmVjYXN0U3ViQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBxdWVyaWVkRGFpbHlGb3JlY2FzdFN1YkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkYWlseS1zdWItY29udGFpbmVyLXF1ZXJpZWQnKVxyXG4gICAgICAgIC8vc29ydGluZyBhbmQgZm9ybWF0dGluZyBkYXRhXHJcbiAgICAgICAgYXJyRm9yZWNhc3QgPSBhcnJGb3JlY2FzdC5tYXAoKGNycikgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZm9ybWF0dGVkRGF0ZSA9IGZvcm1hdChhZGQobmV3IERhdGUoY3JyLmR0X3R4dCksIHsgc2Vjb25kczogdGltZXpvbmUgfSksICdFRUVFJylcclxuICAgICAgICAgICAgbGV0IG1haW4gPSBjcnIubWFpbi50ZW1wXHJcbiAgICAgICAgICAgIGxldCBpY29uID0gY3JyLndlYXRoZXJbMF0uaWNvblxyXG4gICAgICAgICAgICByZXR1cm4geyBmb3JtYXR0ZWREYXRlLCBtYWluLCBpY29uIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBsZXQgbmV3T2JqRm9yZWNhc3QgPSB7fVxyXG4gICAgICAgIGFyckZvcmVjYXN0LmZvckVhY2goKGNycikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIW5ld09iakZvcmVjYXN0W2Nyci5mb3JtYXR0ZWREYXRlXSkge1xyXG4gICAgICAgICAgICAgICAgbmV3T2JqRm9yZWNhc3RbY3JyLmZvcm1hdHRlZERhdGVdID1cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXhfdGVtcDogY3JyLm1haW4sXHJcbiAgICAgICAgICAgICAgICAgICAgbWluX3RlbXA6IGNyci5tYWluLFxyXG4gICAgICAgICAgICAgICAgICAgIGljb246IHsgW2Nyci5pY29uXTogMSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbmFsSWNvbiA6IGNyci5pY29uXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIW5ld09iakZvcmVjYXN0W2Nyci5mb3JtYXR0ZWREYXRlXS5pY29uW2Nyci5pY29uXSkge1xyXG4gICAgICAgICAgICAgICAgbmV3T2JqRm9yZWNhc3RbY3JyLmZvcm1hdHRlZERhdGVdLmljb25bY3JyLmljb25dID0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5ld09iakZvcmVjYXN0W2Nyci5mb3JtYXR0ZWREYXRlXS5pY29uW2Nyci5pY29uXSsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBtYXhOdW0gPSAwO1xyXG4gICAgICAgICAgICBmb3IoY29uc3Qga2V5cyBpbiBuZXdPYmpGb3JlY2FzdFtjcnIuZm9ybWF0dGVkRGF0ZV0uaWNvbil7XHJcbiAgICAgICAgICAgICAgICBpZihuZXdPYmpGb3JlY2FzdFtjcnIuZm9ybWF0dGVkRGF0ZV0uaWNvbltrZXlzXSA+IG1heE51bSl7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3T2JqRm9yZWNhc3RbY3JyLmZvcm1hdHRlZERhdGVdLmZpbmFsSWNvbiA9IGtleXM7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4TnVtID0gbmV3T2JqRm9yZWNhc3RbY3JyLmZvcm1hdHRlZERhdGVdLmljb25ba2V5c11cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBuZXdPYmpGb3JlY2FzdFtjcnIuZm9ybWF0dGVkRGF0ZV0ubWF4X3RlbXAgPSBNYXRoLm1heChuZXdPYmpGb3JlY2FzdFtjcnIuZm9ybWF0dGVkRGF0ZV0ubWF4X3RlbXAsIGNyci5tYWluKVxyXG4gICAgICAgICAgICBuZXdPYmpGb3JlY2FzdFtjcnIuZm9ybWF0dGVkRGF0ZV0ubWluX3RlbXAgPSBNYXRoLm1pbihuZXdPYmpGb3JlY2FzdFtjcnIuZm9ybWF0dGVkRGF0ZV0ubWluX3RlbXAsIGNyci5tYWluKVxyXG5cclxuICAgICAgICB9KVxyXG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlICovY29uc29sZS5sb2coLi4ub29fb28oYGM0OGZmMV8xYCxuZXdPYmpGb3JlY2FzdCkpXHJcbiAgICAgICAgZm9yIChjb25zdCBrZXlzIGluIG5ld09iakZvcmVjYXN0KSB7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50Rm9yZWNhc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgICAgICBjdXJyZW50Rm9yZWNhc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZGFpbHktZm9yZWNhc3QtaXRlbS1xdWVyaWVkJylcclxuICAgICAgICAgICAgbGV0IGRhaWx5Rm9yZWNhc3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgICAgICBkYWlseUZvcmVjYXN0SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2RhaWx5LWhlYWRlci1xdWVyaWVkJylcclxuICAgICAgICAgICAgZGFpbHlGb3JlY2FzdEhlYWRlci50ZXh0Q29udGVudCA9IGtleXNcclxuICAgICAgICAgICAgbGV0IGRhaWx5SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICAgICAgICAgIGRhaWx5SWNvbi5zcmMgPSBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtuZXdPYmpGb3JlY2FzdFtrZXlzXS5maW5hbEljb259QDJ4LnBuZ2BcclxuICAgICAgICAgICAgbGV0IHRlbXBzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICAgICAgdGVtcHNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGVtcHMtY29udGFpbmVyLXF1ZXJpZWQnKVxyXG5cclxuICAgICAgICAgICAgbGV0IGRhaWx5TWF4VGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgICAgIGRhaWx5TWF4VGVtcC5jbGFzc0xpc3QuYWRkKCdkYWlseS1tYXgtdGVtcC1xdWVyaWVkJylcclxuICAgICAgICAgICAgZGFpbHlNYXhUZW1wLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChuZXdPYmpGb3JlY2FzdFtrZXlzXS5tYXhfdGVtcCAtIDI3NSl9wrBgXHJcbiAgICAgICAgICAgIGxldCBkYWlseU1pblRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgICAgICBkYWlseU1pblRlbXAuY2xhc3NMaXN0LmFkZCgnZGFpbHktbWluLXRlbXAtcXVlcmllZCcpXHJcbiAgICAgICAgICAgIGRhaWx5TWluVGVtcC50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQobmV3T2JqRm9yZWNhc3Rba2V5c10ubWluX3RlbXAgLSAyNzUpfcKwYFxyXG5cclxuICAgICAgICAgICAgdGVtcHNDb250YWluZXIuYXBwZW5kQ2hpbGQoZGFpbHlNYXhUZW1wKVxyXG4gICAgICAgICAgICB0ZW1wc0NvbnRhaW5lci5hcHBlbmRDaGlsZChkYWlseU1pblRlbXApXHJcbiAgICAgICAgICAgIGN1cnJlbnRGb3JlY2FzdENvbnRhaW5lci5hcHBlbmRDaGlsZChkYWlseUZvcmVjYXN0SGVhZGVyKVxyXG4gICAgICAgICAgICBjdXJyZW50Rm9yZWNhc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZGFpbHlJY29uKVxyXG4gICAgICAgICAgICBjdXJyZW50Rm9yZWNhc3RDb250YWluZXIuYXBwZW5kQ2hpbGQodGVtcHNDb250YWluZXIpXHJcblxyXG4gICAgICAgICAgICBxdWVyaWVkRGFpbHlGb3JlY2FzdFN1YkNvbnRhaW5lci5hcHBlbmRDaGlsZChjdXJyZW50Rm9yZWNhc3RDb250YWluZXIpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgZGFpbHlIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIGRhaWx5SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2RhaWx5LWhlYWRlci1tYWluLXF1ZXJpZWQnKVxyXG4gICAgICAgIGRhaWx5SGVhZGVyLnRleHRDb250ZW50ID0gJ0RBSUxZIEZPUkVDQVNUJ1xyXG5cclxuICAgICAgICBxdWVyaWVkRGFpbHlGb3JlY2FzdENvbnRhaW5lci5hcHBlbmRDaGlsZChkYWlseUhlYWRlcilcclxuICAgICAgICBxdWVyaWVkRGFpbHlGb3JlY2FzdENvbnRhaW5lci5hcHBlbmRDaGlsZChxdWVyaWVkRGFpbHlGb3JlY2FzdFN1YkNvbnRhaW5lcilcclxuXHJcbiAgICAgICAgcXVlcmllZE1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQocXVlcmllZEhlYWRlcilcclxuICAgICAgICBxdWVyaWVkTWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChxdWVyaWVkQWRkaXRpb25hbENvbnRhaW5lcilcclxuICAgICAgICBxdWVyaWVkTWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChxdWVyaWVkSG91cmx5Rm9yZWNhc3RDb250YWluZXIpXHJcbiAgICAgICAgcXVlcmllZE1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQocXVlcmllZERhaWx5Rm9yZWNhc3RDb250YWluZXIpXHJcblxyXG4gICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKVxyXG4gICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQocXVlcmllZE1haW5Db250YWluZXIpXHJcblxyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgY2xlYXIoKVxyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1haW5Db250YWluZXIpXHJcbiAgICAgICAgICAgIGxldCB0b2RheUhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYWlseS1oZWFkZXItcXVlcmllZCcpXHJcbiAgICAgICAgICAgIHRvZGF5SGVhZGVyLnRleHRDb250ZW50ID0gJ1RvZGF5J1xyXG4gICAgICAgIH0sIDUwMClcclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlICovY29uc29sZS5sb2coLi4ub29fb28oYGM0OGZmMV8yYCxlcnJvcikpXHJcbiAgICAgICAgcmVuZGVyRXJyb3IoZXJyb3IubWVzc2FnZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGVycm9yLm1lc3NhZ2Uuc2xpY2UoMSkpXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsZWFyKCkge1xyXG4gICAgd2hpbGUgKGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJFcnJvcih0ZXh0KSB7XHJcbiAgICBjbGVhcigpXHJcbiAgICBsZXQgZXJyb3JTY3JlZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgZXJyb3JTY3JlZW4uY2xhc3NMaXN0LmFkZCgnZXJyb3Itc2NyZWVuJylcclxuXHJcbiAgICBsZXQgZXJyb3JJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGVycm9ySWNvbi5jbGFzc0xpc3QuYWRkKCdlcnJvci1pY29uJylcclxuXHJcbiAgICBsZXQgZXJyb3JUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxyXG4gICAgZXJyb3JUZXh0LnRleHRDb250ZW50ID0gdGV4dFxyXG5cclxuICAgIGVycm9yU2NyZWVuLmFwcGVuZENoaWxkKGVycm9ySWNvbilcclxuICAgIGVycm9yU2NyZWVuLmFwcGVuZENoaWxkKGVycm9yVGV4dClcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZXJyb3JTY3JlZW4pXHJcblxyXG4gICAgc2V0VGltZW91dChyZW5kZXJIb21lUGFnZSwgMzAwMClcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyTG9hZGVyKHRleHQpIHtcclxuICAgIGNsZWFyKClcclxuICAgIGxldCBsb2FkaW5nU2NyZWVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGxvYWRpbmdTY3JlZW4uY2xhc3NMaXN0LmFkZCgnbG9hZGluZy1zY3JlZW4nKVxyXG5cclxuICAgIGxldCBsb2FkZXJTcGlubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGxvYWRlclNwaW5uZXIuY2xhc3NMaXN0LmFkZCgnbG9hZGVyJylcclxuICAgIGxvYWRlclNwaW5uZXIudGV4dENvbnRlbnQgPSAnTG9hZGluZy4uLidcclxuXHJcbiAgICBsZXQgbG9hZGluZ1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXHJcbiAgICBsb2FkaW5nVGV4dC50ZXh0Q29udGVudCA9IHRleHRcclxuXHJcbiAgICBsb2FkaW5nU2NyZWVuLmFwcGVuZENoaWxkKGxvYWRlclNwaW5uZXIpXHJcbiAgICBsb2FkaW5nU2NyZWVuLmFwcGVuZENoaWxkKGxvYWRpbmdUZXh0KVxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsb2FkaW5nU2NyZWVuKVxyXG59XG4vKiBlc2xpbnQtZGlzYWJsZSAqLztmdW5jdGlvbiBvb19jbSgpe3RyeXtyZXR1cm4gKDAsZXZhbCkoXCJnbG9iYWxUaGlzLl9jb25zb2xlX25pbmphXCIpIHx8ICgwLGV2YWwpKFwiLyogaHR0cHM6Ly9naXRodWIuY29tL3dhbGxhYnlqcy9jb25zb2xlLW5pbmphI2hvdy1kb2VzLWl0LXdvcmsgKi8ndXNlIHN0cmljdCc7dmFyIF8weDNiZDJjZD1fMHg1NzliOyhmdW5jdGlvbihfMHgzM2FjYzgsXzB4NjI2ZTNjKXt2YXIgXzB4NTA3OWY3PV8weDU3OWIsXzB4NDU1Mjc3PV8weDMzYWNjOCgpO3doaWxlKCEhW10pe3RyeXt2YXIgXzB4MjRmMmQ0PS1wYXJzZUludChfMHg1MDc5ZjcoMHgxZTApKS8weDErLXBhcnNlSW50KF8weDUwNzlmNygweDE0OCkpLzB4MiooLXBhcnNlSW50KF8weDUwNzlmNygweDFiNikpLzB4MykrcGFyc2VJbnQoXzB4NTA3OWY3KDB4MWJlKSkvMHg0Ky1wYXJzZUludChfMHg1MDc5ZjcoMHgxYWUpKS8weDUqKC1wYXJzZUludChfMHg1MDc5ZjcoMHgxMjMpKS8weDYpKy1wYXJzZUludChfMHg1MDc5ZjcoMHgxODApKS8weDcqKC1wYXJzZUludChfMHg1MDc5ZjcoMHgxNDMpKS8weDgpK3BhcnNlSW50KF8weDUwNzlmNygweDEzMCkpLzB4OSstcGFyc2VJbnQoXzB4NTA3OWY3KDB4MTk0KSkvMHhhO2lmKF8weDI0ZjJkND09PV8weDYyNmUzYylicmVhaztlbHNlIF8weDQ1NTI3N1sncHVzaCddKF8weDQ1NTI3N1snc2hpZnQnXSgpKTt9Y2F0Y2goXzB4MjRlZTA5KXtfMHg0NTUyNzdbJ3B1c2gnXShfMHg0NTUyNzdbJ3NoaWZ0J10oKSk7fX19KF8weDNkNGQsMHg1MjY5YikpO2Z1bmN0aW9uIF8weDU3OWIoXzB4MWFiNTZjLF8weDUzY2I4ZSl7dmFyIF8weDNkNGQ0Yj1fMHgzZDRkKCk7cmV0dXJuIF8weDU3OWI9ZnVuY3Rpb24oXzB4NTc5Yjk2LF8weDEyNDYzMCl7XzB4NTc5Yjk2PV8weDU3OWI5Ni0weDEwNjt2YXIgXzB4NDhhZWRiPV8weDNkNGQ0YltfMHg1NzliOTZdO3JldHVybiBfMHg0OGFlZGI7fSxfMHg1NzliKF8weDFhYjU2YyxfMHg1M2NiOGUpO312YXIgdWU9T2JqZWN0W18weDNiZDJjZCgweDE4NSldLHRlPU9iamVjdFsnZGVmaW5lUHJvcGVydHknXSxoZT1PYmplY3RbXzB4M2JkMmNkKDB4MWIyKV0sbGU9T2JqZWN0W18weDNiZDJjZCgweDE4NyldLGZlPU9iamVjdFtfMHgzYmQyY2QoMHgxY2YpXSxfZT1PYmplY3RbXzB4M2JkMmNkKDB4MTgzKV1bXzB4M2JkMmNkKDB4MWJmKV0scGU9KF8weDMzODZhMixfMHgzMzY4NzMsXzB4NDE3OWUwLF8weDMwOWU4MSk9Pnt2YXIgXzB4MWNkN2JiPV8weDNiZDJjZDtpZihfMHgzMzY4NzMmJnR5cGVvZiBfMHgzMzY4NzM9PV8weDFjZDdiYigweDE0NSl8fHR5cGVvZiBfMHgzMzY4NzM9PV8weDFjZDdiYigweDFhNSkpe2ZvcihsZXQgXzB4MjljMTIxIG9mIGxlKF8weDMzNjg3MykpIV9lW18weDFjZDdiYigweDE5MSldKF8weDMzODZhMixfMHgyOWMxMjEpJiZfMHgyOWMxMjEhPT1fMHg0MTc5ZTAmJnRlKF8weDMzODZhMixfMHgyOWMxMjEseydnZXQnOigpPT5fMHgzMzY4NzNbXzB4MjljMTIxXSwnZW51bWVyYWJsZSc6IShfMHgzMDllODE9aGUoXzB4MzM2ODczLF8weDI5YzEyMSkpfHxfMHgzMDllODFbXzB4MWNkN2JiKDB4MWU5KV19KTt9cmV0dXJuIF8weDMzODZhMjt9LG5lPShfMHgxMWEwYmQsXzB4MTZlNzg4LF8weDRlN2ZkYik9PihfMHg0ZTdmZGI9XzB4MTFhMGJkIT1udWxsP3VlKGZlKF8weDExYTBiZCkpOnt9LHBlKF8weDE2ZTc4OHx8IV8weDExYTBiZHx8IV8weDExYTBiZFtfMHgzYmQyY2QoMHgxMTIpXT90ZShfMHg0ZTdmZGIsXzB4M2JkMmNkKDB4MWMwKSx7J3ZhbHVlJzpfMHgxMWEwYmQsJ2VudW1lcmFibGUnOiEweDB9KTpfMHg0ZTdmZGIsXzB4MTFhMGJkKSksUT1jbGFzc3tjb25zdHJ1Y3RvcihfMHgxYjEwNzQsXzB4NzcyZjFkLF8weDE4NzExOSxfMHgzOTM5YzApe3ZhciBfMHgyNTcyMzc9XzB4M2JkMmNkO3RoaXNbXzB4MjU3MjM3KDB4MTFlKV09XzB4MWIxMDc0LHRoaXNbXzB4MjU3MjM3KDB4MTllKV09XzB4NzcyZjFkLHRoaXNbXzB4MjU3MjM3KDB4MTYzKV09XzB4MTg3MTE5LHRoaXNbXzB4MjU3MjM3KDB4MTNiKV09XzB4MzkzOWMwLHRoaXNbXzB4MjU3MjM3KDB4MTI4KV09ITB4MCx0aGlzW18weDI1NzIzNygweDFjOSldPSEweDAsdGhpc1tfMHgyNTcyMzcoMHgxNWEpXT0hMHgxLHRoaXNbJ19jb25uZWN0aW5nJ109ITB4MSx0aGlzWydfaW5Ccm93c2VyJ109ISF0aGlzW18weDI1NzIzNygweDExZSldW18weDI1NzIzNygweDE1OCldLHRoaXNbXzB4MjU3MjM3KDB4MTc0KV09bnVsbCx0aGlzW18weDI1NzIzNygweDE4ZildPTB4MCx0aGlzW18weDI1NzIzNygweDFkMCldPTB4MTQsdGhpc1snX3NlbmRFcnJvck1lc3NhZ2UnXT10aGlzW18weDI1NzIzNygweDE2YSldP18weDI1NzIzNygweDEwOCk6J0NvbnNvbGVcXFxceDIwTmluamFcXFxceDIwZmFpbGVkXFxcXHgyMHRvXFxcXHgyMHNlbmRcXFxceDIwbG9ncyxcXFxceDIwcmVzdGFydGluZ1xcXFx4MjB0aGVcXFxceDIwcHJvY2Vzc1xcXFx4MjBtYXlcXFxceDIwaGVscCc7fWFzeW5jWydnZXRXZWJTb2NrZXRDbGFzcyddKCl7dmFyIF8weDI4OWYwND1fMHgzYmQyY2Q7aWYodGhpc1tfMHgyODlmMDQoMHgxNzQpXSlyZXR1cm4gdGhpc1tfMHgyODlmMDQoMHgxNzQpXTtsZXQgXzB4MTE2MjdkO2lmKHRoaXNbJ19pbkJyb3dzZXInXSlfMHgxMTYyN2Q9dGhpc1tfMHgyODlmMDQoMHgxMWUpXVsnV2ViU29ja2V0J107ZWxzZXtpZih0aGlzW18weDI4OWYwNCgweDExZSldW18weDI4OWYwNCgweDE3ZSldPy5bXzB4Mjg5ZjA0KDB4MWE5KV0pXzB4MTE2MjdkPXRoaXNbXzB4Mjg5ZjA0KDB4MTFlKV1bXzB4Mjg5ZjA0KDB4MTdlKV0/LltfMHgyODlmMDQoMHgxYTkpXTtlbHNlIHRyeXtsZXQgXzB4ZmVlYzcxPWF3YWl0IGltcG9ydChfMHgyODlmMDQoMHgxODQpKTtfMHgxMTYyN2Q9KGF3YWl0IGltcG9ydCgoYXdhaXQgaW1wb3J0KF8weDI4OWYwNCgweDEwZikpKVtfMHgyODlmMDQoMHgxNDIpXShfMHhmZWVjNzFbXzB4Mjg5ZjA0KDB4MTBhKV0odGhpc1tfMHgyODlmMDQoMHgxM2IpXSxfMHgyODlmMDQoMHgxMmUpKSlbXzB4Mjg5ZjA0KDB4MTFiKV0oKSkpW18weDI4OWYwNCgweDFjMCldO31jYXRjaHt0cnl7XzB4MTE2MjdkPXJlcXVpcmUocmVxdWlyZShfMHgyODlmMDQoMHgxODQpKVsnam9pbiddKHRoaXNbXzB4Mjg5ZjA0KDB4MTNiKV0sJ3dzJykpO31jYXRjaHt0aHJvdyBuZXcgRXJyb3IoXzB4Mjg5ZjA0KDB4MTYwKSk7fX19cmV0dXJuIHRoaXNbXzB4Mjg5ZjA0KDB4MTc0KV09XzB4MTE2MjdkLF8weDExNjI3ZDt9W18weDNiZDJjZCgweDExNildKCl7dmFyIF8weGNjYWRhMj1fMHgzYmQyY2Q7dGhpc1tfMHhjY2FkYTIoMHgxNTApXXx8dGhpc1tfMHhjY2FkYTIoMHgxNWEpXXx8dGhpc1snX2Nvbm5lY3RBdHRlbXB0Q291bnQnXT49dGhpc1snX21heENvbm5lY3RBdHRlbXB0Q291bnQnXXx8KHRoaXNbXzB4Y2NhZGEyKDB4MWM5KV09ITB4MSx0aGlzWydfY29ubmVjdGluZyddPSEweDAsdGhpc1snX2Nvbm5lY3RBdHRlbXB0Q291bnQnXSsrLHRoaXNbXzB4Y2NhZGEyKDB4MWIzKV09bmV3IFByb21pc2UoKF8weDQwZTYwOSxfMHg1MmQ4NGIpPT57dmFyIF8weDJhNTY2NT1fMHhjY2FkYTI7dGhpc1tfMHgyYTU2NjUoMHgxZDkpXSgpW18weDJhNTY2NSgweDEyNyldKF8weDIwNjZkZD0+e3ZhciBfMHgyNGVmMjY9XzB4MmE1NjY1O2xldCBfMHhkNzg5Njk9bmV3IF8weDIwNjZkZCgnd3M6Ly8nK3RoaXNbJ2hvc3QnXSsnOicrdGhpc1tfMHgyNGVmMjYoMHgxNjMpXSk7XzB4ZDc4OTY5W18weDI0ZWYyNigweDE4MildPSgpPT57dmFyIF8weDRmMGIzMD1fMHgyNGVmMjY7dGhpc1tfMHg0ZjBiMzAoMHgxMjgpXT0hMHgxLHRoaXNbXzB4NGYwYjMwKDB4MTU2KV0oXzB4ZDc4OTY5KSx0aGlzW18weDRmMGIzMCgweDFlNSldKCksXzB4NTJkODRiKG5ldyBFcnJvcihfMHg0ZjBiMzAoMHgxYmQpKSk7fSxfMHhkNzg5NjlbJ29ub3BlbiddPSgpPT57dmFyIF8weDJkMzM1MD1fMHgyNGVmMjY7dGhpc1snX2luQnJvd3NlciddfHxfMHhkNzg5NjlbJ19zb2NrZXQnXSYmXzB4ZDc4OTY5W18weDJkMzM1MCgweDE4OCldW18weDJkMzM1MCgweDFiMSldJiZfMHhkNzg5NjlbJ19zb2NrZXQnXVsndW5yZWYnXSgpLF8weDQwZTYwOShfMHhkNzg5NjkpO30sXzB4ZDc4OTY5W18weDI0ZWYyNigweDFkYyldPSgpPT57dmFyIF8weDI3MDEzND1fMHgyNGVmMjY7dGhpc1snX2FsbG93ZWRUb0Nvbm5lY3RPblNlbmQnXT0hMHgwLHRoaXNbJ19kaXNwb3NlV2Vic29ja2V0J10oXzB4ZDc4OTY5KSx0aGlzW18weDI3MDEzNCgweDFlNSldKCk7fSxfMHhkNzg5NjlbJ29ubWVzc2FnZSddPV8weDE1YjZhZj0+e3ZhciBfMHg0NmMzM2E9XzB4MjRlZjI2O3RyeXtfMHgxNWI2YWYmJl8weDE1YjZhZltfMHg0NmMzM2EoMHgxMjYpXSYmdGhpc1tfMHg0NmMzM2EoMHgxNmEpXSYmSlNPTltfMHg0NmMzM2EoMHgxN2QpXShfMHgxNWI2YWZbXzB4NDZjMzNhKDB4MTI2KV0pW18weDQ2YzMzYSgweDE2NildPT09XzB4NDZjMzNhKDB4MTkyKSYmdGhpc1tfMHg0NmMzM2EoMHgxMWUpXVtfMHg0NmMzM2EoMHgxNzkpXVtfMHg0NmMzM2EoMHgxOTIpXSgpO31jYXRjaHt9fTt9KVsndGhlbiddKF8weDNjYjU4Zj0+KHRoaXNbJ19jb25uZWN0ZWQnXT0hMHgwLHRoaXNbXzB4MmE1NjY1KDB4MTUwKV09ITB4MSx0aGlzWydfYWxsb3dlZFRvQ29ubmVjdE9uU2VuZCddPSEweDEsdGhpc1tfMHgyYTU2NjUoMHgxMjgpXT0hMHgwLHRoaXNbXzB4MmE1NjY1KDB4MThmKV09MHgwLF8weDNjYjU4ZikpWydjYXRjaCddKF8weDVmMTAyNT0+KHRoaXNbXzB4MmE1NjY1KDB4MTVhKV09ITB4MSx0aGlzW18weDJhNTY2NSgweDE1MCldPSEweDEsXzB4NTJkODRiKG5ldyBFcnJvcihfMHgyYTU2NjUoMHgxY2MpKyhfMHg1ZjEwMjUmJl8weDVmMTAyNVtfMHgyYTU2NjUoMHgxNzgpXSkpKSkpO30pKTt9W18weDNiZDJjZCgweDE1NildKF8weDE0MTMwZSl7dmFyIF8weDMzMTJkZT1fMHgzYmQyY2Q7dGhpc1tfMHgzMzEyZGUoMHgxNWEpXT0hMHgxLHRoaXNbXzB4MzMxMmRlKDB4MTUwKV09ITB4MTt0cnl7XzB4MTQxMzBlW18weDMzMTJkZSgweDFkYyldPW51bGwsXzB4MTQxMzBlW18weDMzMTJkZSgweDE4MildPW51bGwsXzB4MTQxMzBlW18weDMzMTJkZSgweDExOCldPW51bGw7fWNhdGNoe310cnl7XzB4MTQxMzBlW18weDMzMTJkZSgweDFiYyldPDB4MiYmXzB4MTQxMzBlW18weDMzMTJkZSgweDE5NSldKCk7fWNhdGNoe319W18weDNiZDJjZCgweDFlNSldKCl7dmFyIF8weDI1ZWI2ZT1fMHgzYmQyY2Q7Y2xlYXJUaW1lb3V0KHRoaXNbXzB4MjVlYjZlKDB4MTBjKV0pLCEodGhpc1tfMHgyNWViNmUoMHgxOGYpXT49dGhpc1snX21heENvbm5lY3RBdHRlbXB0Q291bnQnXSkmJih0aGlzW18weDI1ZWI2ZSgweDEwYyldPXNldFRpbWVvdXQoKCk9Pnt2YXIgXzB4NDA2ODA2PV8weDI1ZWI2ZTt0aGlzW18weDQwNjgwNigweDE1YSldfHx0aGlzW18weDQwNjgwNigweDE1MCldfHwodGhpc1snX2Nvbm5lY3RUb0hvc3ROb3cnXSgpLHRoaXNbXzB4NDA2ODA2KDB4MWIzKV0/LlsnY2F0Y2gnXSgoKT0+dGhpc1tfMHg0MDY4MDYoMHgxZTUpXSgpKSk7fSwweDFmNCksdGhpc1tfMHgyNWViNmUoMHgxMGMpXVtfMHgyNWViNmUoMHgxYjEpXSYmdGhpc1tfMHgyNWViNmUoMHgxMGMpXVtfMHgyNWViNmUoMHgxYjEpXSgpKTt9YXN5bmNbJ3NlbmQnXShfMHgxNDBmZGEpe3ZhciBfMHgzNjcwZmQ9XzB4M2JkMmNkO3RyeXtpZighdGhpc1tfMHgzNjcwZmQoMHgxMjgpXSlyZXR1cm47dGhpc1tfMHgzNjcwZmQoMHgxYzkpXSYmdGhpc1tfMHgzNjcwZmQoMHgxMTYpXSgpLChhd2FpdCB0aGlzW18weDM2NzBmZCgweDFiMyldKVtfMHgzNjcwZmQoMHgxYzUpXShKU09OWydzdHJpbmdpZnknXShfMHgxNDBmZGEpKTt9Y2F0Y2goXzB4MjBjNGUyKXtjb25zb2xlWyd3YXJuJ10odGhpc1snX3NlbmRFcnJvck1lc3NhZ2UnXSsnOlxcXFx4MjAnKyhfMHgyMGM0ZTImJl8weDIwYzRlMlsnbWVzc2FnZSddKSksdGhpc1tfMHgzNjcwZmQoMHgxMjgpXT0hMHgxLHRoaXNbJ19hdHRlbXB0VG9SZWNvbm5lY3RTaG9ydGx5J10oKTt9fX07ZnVuY3Rpb24gVihfMHgzZGRiMWQsXzB4NGM0Y2I2LF8weDFjODQ0MyxfMHgyNDk3MzUsXzB4M2Q0YTZiKXt2YXIgXzB4NDA5NzJlPV8weDNiZDJjZDtsZXQgXzB4MzM5MzJhPV8weDFjODQ0M1tfMHg0MDk3MmUoMHgxOWYpXSgnLCcpW18weDQwOTcyZSgweDFhMyldKF8weDNlYjY1OD0+e3ZhciBfMHhjYWYxMzU9XzB4NDA5NzJlO3RyeXtfMHgzZGRiMWRbXzB4Y2FmMTM1KDB4MTU0KV18fCgoXzB4M2Q0YTZiPT09XzB4Y2FmMTM1KDB4MTQ2KXx8XzB4M2Q0YTZiPT09XzB4Y2FmMTM1KDB4MTg2KSkmJihfMHgzZDRhNmIrPV8weDNkZGIxZFsncHJvY2VzcyddPy5bXzB4Y2FmMTM1KDB4MTIwKV0/LltfMHhjYWYxMzUoMHgxYTQpXT9fMHhjYWYxMzUoMHgxYjcpOl8weGNhZjEzNSgweDFlOCkpLF8weDNkZGIxZFtfMHhjYWYxMzUoMHgxNTQpXT17J2lkJzorbmV3IERhdGUoKSwndG9vbCc6XzB4M2Q0YTZifSk7bGV0IF8weDU0NTM1Zj1uZXcgUShfMHgzZGRiMWQsXzB4NGM0Y2I2LF8weDNlYjY1OCxfMHgyNDk3MzUpO3JldHVybiBfMHg1NDUzNWZbXzB4Y2FmMTM1KDB4MWM1KV1bXzB4Y2FmMTM1KDB4MTViKV0oXzB4NTQ1MzVmKTt9Y2F0Y2goXzB4MTc4ZDAxKXtyZXR1cm4gY29uc29sZVtfMHhjYWYxMzUoMHgxOTApXShfMHhjYWYxMzUoMHgxYWYpLF8weDE3OGQwMSYmXzB4MTc4ZDAxW18weGNhZjEzNSgweDE3OCldKSwoKT0+e307fX0pO3JldHVybiBfMHhhZDEwOTY9Pl8weDMzOTMyYVtfMHg0MDk3MmUoMHgxYzgpXShfMHgxZjU2ZjU9Pl8weDFmNTZmNShfMHhhZDEwOTYpKTt9ZnVuY3Rpb24gXzB4M2Q0ZCgpe3ZhciBfMHg1NDY0YWI9WydfdHJlZU5vZGVQcm9wZXJ0aWVzQWZ0ZXJGdWxsVmFsdWUnLCdfb2JqZWN0VG9TdHJpbmcnLCdleHByZXNzaW9uc1RvRXZhbHVhdGUnLCdIVE1MQWxsQ29sbGVjdGlvbicsJ1tvYmplY3RcXFxceDIwU2V0XScsJ19jb25uZWN0aW5nJywnUE9TSVRJVkVfSU5GSU5JVFknLCdlbGVtZW50cycsJ2NvbmNhdCcsJ19jb25zb2xlX25pbmphX3Nlc3Npb24nLCdkZXB0aCcsJ19kaXNwb3NlV2Vic29ja2V0JywnX3NldE5vZGVMYWJlbCcsJ1dlYlNvY2tldCcsJy4uLicsJ19jb25uZWN0ZWQnLCdiaW5kJywnc3ltYm9sJywnW29iamVjdFxcXFx4MjBNYXBdJywnbmFuJywndGVzdCcsJ2ZhaWxlZFxcXFx4MjB0b1xcXFx4MjBmaW5kXFxcXHgyMGFuZFxcXFx4MjBsb2FkXFxcXHgyMFdlYlNvY2tldCcsJ3N0YWNrJywncHVzaCcsJ3BvcnQnLCdzdHJMZW5ndGgnLCdfYWRkUHJvcGVydHknLCdtZXRob2QnLCdfY29uc29sZU5pbmphQWxsb3dlZFRvU3RhcnQnLCdFcnJvcicsJ2F1dG9FeHBhbmQnLCdfaW5Ccm93c2VyJywnTWFwJywncHJvcHMnLCdfc29ydFByb3BzJywnbG9nJywnYXV0b0V4cGFuZFByZXZpb3VzT2JqZWN0cycsJ3BlcmZvcm1hbmNlJywnc3RyaW5naWZ5JywnX3Byb2Nlc3NUcmVlTm9kZVJlc3VsdCcsJ251bWJlcicsJ19XZWJTb2NrZXRDbGFzcycsJ2hydGltZScsJ2NhcHBlZCcsJ2F1dG9FeHBhbmRMaW1pdCcsJ21lc3NhZ2UnLCdsb2NhdGlvbicsJ3RpbWUnLCdjb25zdHJ1Y3RvcicsJ19oYXNNYXBPbkl0c1BhdGgnLCdwYXJzZScsJ3Byb2Nlc3MnLCdhbGxTdHJMZW5ndGgnLCc3YXdoSVZPJywnY2FwcGVkUHJvcHMnLCdvbmVycm9yJywncHJvdG90eXBlJywncGF0aCcsJ2NyZWF0ZScsJ3JlbWl4JywnZ2V0T3duUHJvcGVydHlOYW1lcycsJ19zb2NrZXQnLCdpbmRleE9mJywnQnVmZmVyJyxcXFwiYzpcXFxcXFxcXFVzZXJzXFxcXFxcXFxBZGV1c1xcXFxcXFxcLnZzY29kZVxcXFxcXFxcZXh0ZW5zaW9uc1xcXFxcXFxcd2FsbGFieWpzLmNvbnNvbGUtbmluamEtMC4wLjEwNlxcXFxcXFxcbm9kZV9tb2R1bGVzXFxcIiwnX3Byb3BlcnR5JywnX1N5bWJvbCcsJ2dldCcsJ19jb25uZWN0QXR0ZW1wdENvdW50Jywnd2FybicsJ2NhbGwnLCdyZWxvYWQnLCdfaXNQcmltaXRpdmVXcmFwcGVyVHlwZScsJzkwMjYxOTBGaERvR3cnLCdjbG9zZScsJ190eXBlJywnc2V0dGVyJywnX2NhcElmU3RyaW5nJywnZWxhcHNlZCcsJ3ZhbHVlJywnU2V0JywnbmVnYXRpdmVJbmZpbml0eScsJ3NldCcsJ2hvc3QnLCdzcGxpdCcsJzEuMC4wJywnX3NldE5vZGVFeHBhbmRhYmxlU3RhdGUnLCdwZXJmX2hvb2tzJywnbWFwJywnbm9kZScsJ2Z1bmN0aW9uJywnX2lzU2V0JywnYXJndW1lbnRSZXNvbHV0aW9uRXJyb3InLCdfaXNOZWdhdGl2ZVplcm8nLCdfV2ViU29ja2V0JywnX251bWJlclJlZ0V4cCcsJ1tvYmplY3RcXFxceDIwQXJyYXldJywndmFsdWVPZicsJ3JlZHVjZUxpbWl0cycsJzc2MzUzNXlNZ0hJaicsJ2xvZ2dlclxcXFx4MjBmYWlsZWRcXFxceDIwdG9cXFxceDIwY29ubmVjdFxcXFx4MjB0b1xcXFx4MjBob3N0JywnZ2V0dGVyJywndW5yZWYnLCdnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InLCdfd3MnLCduYW1lJywndG90YWxTdHJMZW5ndGgnLCczemloRmpTJywnXFxcXHgyMHNlcnZlcicsJ2xldmVsJywncmVzb2x2ZUdldHRlcnMnLCdudWxsJywndW5rbm93bicsJ3JlYWR5U3RhdGUnLCdsb2dnZXJcXFxceDIwd2Vic29ja2V0XFxcXHgyMGVycm9yJywnNzQ4NjQ0TFVaRnNFJywnaGFzT3duUHJvcGVydHknLCdkZWZhdWx0JyxbXFxcImxvY2FsaG9zdFxcXCIsXFxcIjEyNy4wLjAuMVxcXCIsXFxcImV4YW1wbGUuY3lwcmVzcy5pb1xcXCIsXFxcIkRFU0tUT1AtNjVTOENMVVxcXCIsXFxcIjE5Mi4xNjguNTYuMVxcXCIsXFxcIjE5Mi4xNjguMC41XFxcIl0sJ3NsaWNlJywnX2FkZExvYWROb2RlJywnbGVuZ3RoJywnc2VuZCcsJ3RvTG93ZXJDYXNlJywnY2FwcGVkRWxlbWVudHMnLCdmb3JFYWNoJywnX2FsbG93ZWRUb0Nvbm5lY3RPblNlbmQnLCd0cmFjZScsJ191bmRlZmluZWQnLCdmYWlsZWRcXFxceDIwdG9cXFxceDIwY29ubmVjdFxcXFx4MjB0b1xcXFx4MjBob3N0OlxcXFx4MjAnLCdTdHJpbmcnLCdfY2xlYW5Ob2RlJywnZ2V0UHJvdG90eXBlT2YnLCdfbWF4Q29ubmVjdEF0dGVtcHRDb3VudCcsJ05FR0FUSVZFX0lORklOSVRZJywnX2tleVN0clJlZ0V4cCcsJ19wXycsJ19zZXROb2RlUXVlcnlQYXRoJywnX3BfbGVuZ3RoJywnZXhwSWQnLCdfcF9uYW1lJywndW5kZWZpbmVkJywnZ2V0V2ViU29ja2V0Q2xhc3MnLCdmdW5jTmFtZScsJ051bWJlcicsJ29uY2xvc2UnLCdfY29uc29sZV9uaW5qYScsJ25vdycsJ3Bvc2l0aXZlSW5maW5pdHknLCc0OTE2NzRLdWJ3R3gnLCdfc2V0Tm9kZVBlcm1pc3Npb25zJywnU3ltYm9sJywnaG9zdG5hbWUnLCdnZXRPd25Qcm9wZXJ0eVN5bWJvbHMnLCdfYXR0ZW1wdFRvUmVjb25uZWN0U2hvcnRseScsJ3RpbWVFbmQnLCdfc2V0Tm9kZUlkJywnXFxcXHgyMGJyb3dzZXInLCdlbnVtZXJhYmxlJywnc3Vic3RyJywnc2VyaWFsaXplJywnZGlzYWJsZWRMb2cnLCdDb25zb2xlXFxcXHgyME5pbmphXFxcXHgyMGZhaWxlZFxcXFx4MjB0b1xcXFx4MjBzZW5kXFxcXHgyMGxvZ3MsXFxcXHgyMHJlZnJlc2hpbmdcXFxceDIwdGhlXFxcXHgyMHBhZ2VcXFxceDIwbWF5XFxcXHgyMGhlbHAnLCdfcHJvcGVydHlBY2Nlc3NvcicsJ2pvaW4nLCdyb290X2V4cCcsJ19yZWNvbm5lY3RUaW1lb3V0JywnZGlzYWJsZWRUcmFjZScsJ19IVE1MQWxsQ29sbGVjdGlvbicsJ3VybCcsJ1JlZ0V4cCcsJ2Jvb2xlYW4nLCdfX2VzJysnTW9kdWxlJywnc29ydFByb3BzJywnX2hhc1N5bWJvbFByb3BlcnR5T25JdHNQYXRoJywnX3NldE5vZGVFeHByZXNzaW9uUGF0aCcsJ19jb25uZWN0VG9Ib3N0Tm93JywnX3RyZWVOb2RlUHJvcGVydGllc0JlZm9yZUZ1bGxWYWx1ZScsJ29ub3BlbicsJ2luY2x1ZGVzJywnaXNFeHByZXNzaW9uVG9FdmFsdWF0ZScsJ3RvU3RyaW5nJywnX2dldE93blByb3BlcnR5U3ltYm9scycsJ19ibGFja2xpc3RlZFByb3BlcnR5JywnZ2xvYmFsJywnX2FkZE9iamVjdFByb3BlcnR5JywndmVyc2lvbnMnLCdfaXNNYXAnLCdhcnJheScsJzE4V0pBZkVMJywnc3RyaW5nJywnX2dldE93blByb3BlcnR5TmFtZXMnLCdkYXRhJywndGhlbicsJ19hbGxvd2VkVG9TZW5kJywnbWF0Y2gnLCd0eXBlJywnbnV4dCcsJ2hpdHMnLCdfaXNQcmltaXRpdmVUeXBlJywnd3MvaW5kZXguanMnLCdjb3VudCcsJzMxODM4MDR0d3BEb0EnLCc1NDM0MicsJ1tvYmplY3RcXFxceDIwRGF0ZV0nLCdfcXVvdGVkUmVnRXhwJywnZGF0ZScsJ3BhcmVudCcsJ2luZGV4JywnbmVnYXRpdmVaZXJvJywnX2FkZEZ1bmN0aW9uc05vZGUnLCdhdXRvRXhwYW5kTWF4RGVwdGgnLCdjb25zb2xlJywnbm9kZU1vZHVsZXMnLCdjdXJyZW50Jywnbm9GdW5jdGlvbnMnLCdhdXRvRXhwYW5kUHJvcGVydHlDb3VudCcsJ19nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InLCcnLCdyZXBsYWNlJywncGF0aFRvRmlsZVVSTCcsJzUyMDUyMDhXaHF0aksnLCd3ZWJwYWNrJywnb2JqZWN0JywnbmV4dC5qcycsJ19hZGRpdGlvbmFsTWV0YWRhdGEnLCcxNjQzMzRYbWpVVE8nLCdzdGFja1RyYWNlTGltaXQnLCdfaGFzU2V0T25JdHNQYXRoJ107XzB4M2Q0ZD1mdW5jdGlvbigpe3JldHVybiBfMHg1NDY0YWI7fTtyZXR1cm4gXzB4M2Q0ZCgpO31mdW5jdGlvbiBIKF8weDUxMmMxMCl7dmFyIF8weDU1NTA5NT1fMHgzYmQyY2Q7bGV0IF8weGEwYmJiNz1mdW5jdGlvbihfMHg0MGM4ZTksXzB4MTUwNmYxKXtyZXR1cm4gXzB4MTUwNmYxLV8weDQwYzhlOTt9LF8weDNjZDFhMjtpZihfMHg1MTJjMTBbJ3BlcmZvcm1hbmNlJ10pXzB4M2NkMWEyPWZ1bmN0aW9uKCl7dmFyIF8weDRiYzU4Zj1fMHg1NzliO3JldHVybiBfMHg1MTJjMTBbXzB4NGJjNThmKDB4MTcwKV1bXzB4NGJjNThmKDB4MWRlKV0oKTt9O2Vsc2V7aWYoXzB4NTEyYzEwWydwcm9jZXNzJ10mJl8weDUxMmMxMFsncHJvY2VzcyddW18weDU1NTA5NSgweDE3NSldKV8weDNjZDFhMj1mdW5jdGlvbigpe3ZhciBfMHgxNmMwNDc9XzB4NTU1MDk1O3JldHVybiBfMHg1MTJjMTBbXzB4MTZjMDQ3KDB4MTdlKV1bXzB4MTZjMDQ3KDB4MTc1KV0oKTt9LF8weGEwYmJiNz1mdW5jdGlvbihfMHgxNjVhM2MsXzB4MTdjOGIwKXtyZXR1cm4gMHgzZTgqKF8weDE3YzhiMFsweDBdLV8weDE2NWEzY1sweDBdKSsoXzB4MTdjOGIwWzB4MV0tXzB4MTY1YTNjWzB4MV0pLzB4ZjQyNDA7fTtlbHNlIHRyeXtsZXQge3BlcmZvcm1hbmNlOl8weDU2YWE5MX09cmVxdWlyZShfMHg1NTUwOTUoMHgxYTIpKTtfMHgzY2QxYTI9ZnVuY3Rpb24oKXt2YXIgXzB4MzFjMjlkPV8weDU1NTA5NTtyZXR1cm4gXzB4NTZhYTkxW18weDMxYzI5ZCgweDFkZSldKCk7fTt9Y2F0Y2h7XzB4M2NkMWEyPWZ1bmN0aW9uKCl7cmV0dXJuK25ldyBEYXRlKCk7fTt9fXJldHVybnsnZWxhcHNlZCc6XzB4YTBiYmI3LCd0aW1lU3RhbXAnOl8weDNjZDFhMiwnbm93JzooKT0+RGF0ZVtfMHg1NTUwOTUoMHgxZGUpXSgpfTt9ZnVuY3Rpb24gWChfMHhlOTZjMyxfMHgzMDdjZTgsXzB4OTJlMDUxKXt2YXIgXzB4MTZhZmM1PV8weDNiZDJjZDtpZihfMHhlOTZjM1tfMHgxNmFmYzUoMHgxNjcpXSE9PXZvaWQgMHgwKXJldHVybiBfMHhlOTZjM1tfMHgxNmFmYzUoMHgxNjcpXTtsZXQgXzB4NWVkODc4PV8weGU5NmMzWydwcm9jZXNzJ10/LlsndmVyc2lvbnMnXT8uW18weDE2YWZjNSgweDFhNCldO3JldHVybiBfMHg1ZWQ4NzgmJl8weDkyZTA1MT09PV8weDE2YWZjNSgweDEyYik/XzB4ZTk2YzNbXzB4MTZhZmM1KDB4MTY3KV09ITB4MTpfMHhlOTZjM1snX2NvbnNvbGVOaW5qYUFsbG93ZWRUb1N0YXJ0J109XzB4NWVkODc4fHwhXzB4MzA3Y2U4fHxfMHhlOTZjM1tfMHgxNmFmYzUoMHgxNzkpXT8uW18weDE2YWZjNSgweDFlMyldJiZfMHgzMDdjZThbXzB4MTZhZmM1KDB4MTE5KV0oXzB4ZTk2YzNbXzB4MTZhZmM1KDB4MTc5KV1bXzB4MTZhZmM1KDB4MWUzKV0pLF8weGU5NmMzWydfY29uc29sZU5pbmphQWxsb3dlZFRvU3RhcnQnXTt9KChfMHhkYmMxYzEsXzB4NGYyMWU2LF8weDVjYjVhMixfMHg1NWZlMzQsXzB4NDQwNDJjLF8weDNhOGY3NixfMHgzMTMwODEsXzB4MTEyMTQsXzB4NmU1NmJiKT0+e3ZhciBfMHgyNjc1ZGU9XzB4M2JkMmNkO2lmKF8weGRiYzFjMVtfMHgyNjc1ZGUoMHgxZGQpXSlyZXR1cm4gXzB4ZGJjMWMxW18weDI2NzVkZSgweDFkZCldO2lmKCFYKF8weGRiYzFjMSxfMHgxMTIxNCxfMHg0NDA0MmMpKXJldHVybiBfMHhkYmMxYzFbJ19jb25zb2xlX25pbmphJ109eydjb25zb2xlTG9nJzooKT0+e30sJ2NvbnNvbGVUcmFjZSc6KCk9Pnt9LCdjb25zb2xlVGltZSc6KCk9Pnt9LCdjb25zb2xlVGltZUVuZCc6KCk9Pnt9LCdhdXRvTG9nJzooKT0+e30sJ2F1dG9UcmFjZSc6KCk9Pnt9LCdhdXRvVGltZSc6KCk9Pnt9LCdhdXRvVGltZUVuZCc6KCk9Pnt9fSxfMHhkYmMxYzFbXzB4MjY3NWRlKDB4MWRkKV07bGV0IF8weDIwMGRlMD17J3Byb3BzJzoweDY0LCdlbGVtZW50cyc6MHg2NCwnc3RyTGVuZ3RoJzoweDQwMCoweDMyLCd0b3RhbFN0ckxlbmd0aCc6MHg0MDAqMHgzMiwnYXV0b0V4cGFuZExpbWl0JzoweDEzODgsJ2F1dG9FeHBhbmRNYXhEZXB0aCc6MHhhfSxfMHgzNDgyOTM9eydwcm9wcyc6MHg1LCdlbGVtZW50cyc6MHg1LCdzdHJMZW5ndGgnOjB4MTAwLCd0b3RhbFN0ckxlbmd0aCc6MHgxMDAqMHgzLCdhdXRvRXhwYW5kTGltaXQnOjB4MWUsJ2F1dG9FeHBhbmRNYXhEZXB0aCc6MHgyfSxfMHgyM2ViOTE9SChfMHhkYmMxYzEpLF8weDQ0NDVhMD1fMHgyM2ViOTFbXzB4MjY3NWRlKDB4MTk5KV0sXzB4MTQ3MzhmPV8weDIzZWI5MVsndGltZVN0YW1wJ10sXzB4M2VlZTZhPV8weDIzZWI5MVtfMHgyNjc1ZGUoMHgxZGUpXSxfMHg1NDRkMWU9eydoaXRzJzp7fSwndHMnOnt9fSxfMHhjNmI0Y2M9XzB4YTlhMjA2PT57XzB4NTQ0ZDFlWyd0cyddW18weGE5YTIwNl09XzB4MTQ3MzhmKCk7fSxfMHg0MDQ0MmM9KF8weDEyNDExYSxfMHg1ODJiOGQpPT57dmFyIF8weDNlMWVlZj1fMHgyNjc1ZGU7bGV0IF8weDRiNTQ5OD1fMHg1NDRkMWVbJ3RzJ11bXzB4NTgyYjhkXTtpZihkZWxldGUgXzB4NTQ0ZDFlWyd0cyddW18weDU4MmI4ZF0sXzB4NGI1NDk4KXtsZXQgXzB4MjU4MzFlPV8weDQ0NDVhMChfMHg0YjU0OTgsXzB4MTQ3MzhmKCkpO18weDU0NDFkMyhfMHgzYmYxOWEoXzB4M2UxZWVmKDB4MTdhKSxfMHgxMjQxMWEsXzB4M2VlZTZhKCksXzB4NDI0YmUyLFtfMHgyNTgzMWVdLF8weDU4MmI4ZCkpO319LF8weDE3YjNjNj1fMHgzYWE5ZWQ9Pl8weDVmNDI4Nj0+e3ZhciBfMHgyYzhiMjg9XzB4MjY3NWRlO3RyeXtfMHhjNmI0Y2MoXzB4NWY0Mjg2KSxfMHgzYWE5ZWQoXzB4NWY0Mjg2KTt9ZmluYWxseXtfMHhkYmMxYzFbJ2NvbnNvbGUnXVtfMHgyYzhiMjgoMHgxN2EpXT1fMHgzYWE5ZWQ7fX0sXzB4NDVlZjU5PV8weDU1MzE1YT0+XzB4NTk3ZWZjPT57dmFyIF8weDQ3YWFmNT1fMHgyNjc1ZGU7dHJ5e2xldCBbXzB4NWY1NTljLF8weDE5YzUwNl09XzB4NTk3ZWZjWydzcGxpdCddKCc6bG9nUG9pbnRJZDonKTtfMHg0MDQ0MmMoXzB4MTljNTA2LF8weDVmNTU5YyksXzB4NTUzMTVhKF8weDVmNTU5Yyk7fWZpbmFsbHl7XzB4ZGJjMWMxW18weDQ3YWFmNSgweDEzYSldW18weDQ3YWFmNSgweDFlNildPV8weDU1MzE1YTt9fTtfMHhkYmMxYzFbXzB4MjY3NWRlKDB4MWRkKV09eydjb25zb2xlTG9nJzooXzB4NTQ4NTE1LF8weDEzYWRmMSk9Pnt2YXIgXzB4NDRhZTJiPV8weDI2NzVkZTtfMHhkYmMxYzFbXzB4NDRhZTJiKDB4MTNhKV1bXzB4NDRhZTJiKDB4MTZlKV1bXzB4NDRhZTJiKDB4MWI0KV0hPT1fMHg0NGFlMmIoMHgxMDcpJiZfMHg1NDQxZDMoXzB4M2JmMTlhKF8weDQ0YWUyYigweDE2ZSksXzB4NTQ4NTE1LF8weDNlZWU2YSgpLF8weDQyNGJlMixfMHgxM2FkZjEpKTt9LCdjb25zb2xlVHJhY2UnOihfMHhjNDc1NjksXzB4MjIxMGUwKT0+e3ZhciBfMHgzNTBmZDQ9XzB4MjY3NWRlO18weGRiYzFjMVtfMHgzNTBmZDQoMHgxM2EpXVtfMHgzNTBmZDQoMHgxNmUpXVtfMHgzNTBmZDQoMHgxYjQpXSE9PV8weDM1MGZkNCgweDEwZCkmJl8weDU0NDFkMyhfMHgzYmYxOWEoXzB4MzUwZmQ0KDB4MWNhKSxfMHhjNDc1NjksXzB4M2VlZTZhKCksXzB4NDI0YmUyLF8weDIyMTBlMCkpO30sJ2NvbnNvbGVUaW1lJzooKT0+e3ZhciBfMHgyNzM0N2Q9XzB4MjY3NWRlO18weGRiYzFjMVtfMHgyNzM0N2QoMHgxM2EpXVtfMHgyNzM0N2QoMHgxN2EpXT1fMHgxN2IzYzYoXzB4ZGJjMWMxWydjb25zb2xlJ11bJ3RpbWUnXSk7fSwnY29uc29sZVRpbWVFbmQnOigpPT57dmFyIF8weDdlNTdiOT1fMHgyNjc1ZGU7XzB4ZGJjMWMxW18weDdlNTdiOSgweDEzYSldW18weDdlNTdiOSgweDFlNildPV8weDQ1ZWY1OShfMHhkYmMxYzFbXzB4N2U1N2I5KDB4MTNhKV1bXzB4N2U1N2I5KDB4MWU2KV0pO30sJ2F1dG9Mb2cnOihfMHgyNzYxNjQsXzB4M2UwNzFhKT0+e18weDU0NDFkMyhfMHgzYmYxOWEoJ2xvZycsXzB4M2UwNzFhLF8weDNlZWU2YSgpLF8weDQyNGJlMixbXzB4Mjc2MTY0XSkpO30sJ2F1dG9UcmFjZSc6KF8weDE3NDIzMyxfMHg1ZGNiMTEpPT57dmFyIF8weDMyZjA3ZT1fMHgyNjc1ZGU7XzB4NTQ0MWQzKF8weDNiZjE5YShfMHgzMmYwN2UoMHgxY2EpLF8weDVkY2IxMSxfMHgzZWVlNmEoKSxfMHg0MjRiZTIsW18weDE3NDIzM10pKTt9LCdhdXRvVGltZSc6KF8weDFlYjQwYSxfMHgzNzJlZDgsXzB4ZDg4YzRjKT0+e18weGM2YjRjYyhfMHhkODhjNGMpO30sJ2F1dG9UaW1lRW5kJzooXzB4NGEzZmNjLF8weDE3MTAyZCxfMHg0N2QyMmMpPT57XzB4NDA0NDJjKF8weDE3MTAyZCxfMHg0N2QyMmMpO319O2xldCBfMHg1NDQxZDM9VihfMHhkYmMxYzEsXzB4NGYyMWU2LF8weDVjYjVhMixfMHg1NWZlMzQsXzB4NDQwNDJjKSxfMHg0MjRiZTI9XzB4ZGJjMWMxW18weDI2NzVkZSgweDE1NCldO2NsYXNzIF8weDI1ZDEzOHtjb25zdHJ1Y3Rvcigpe3ZhciBfMHgxMjdmYTk9XzB4MjY3NWRlO3RoaXNbXzB4MTI3ZmE5KDB4MWQyKV09L14oPyEoPzpkb3xpZnxpbnxmb3J8bGV0fG5ld3x0cnl8dmFyfGNhc2V8ZWxzZXxlbnVtfGV2YWx8ZmFsc2V8bnVsbHx0aGlzfHRydWV8dm9pZHx3aXRofGJyZWFrfGNhdGNofGNsYXNzfGNvbnN0fHN1cGVyfHRocm93fHdoaWxlfHlpZWxkfGRlbGV0ZXxleHBvcnR8aW1wb3J0fHB1YmxpY3xyZXR1cm58c3RhdGljfHN3aXRjaHx0eXBlb2Z8ZGVmYXVsdHxleHRlbmRzfGZpbmFsbHl8cGFja2FnZXxwcml2YXRlfGNvbnRpbnVlfGRlYnVnZ2VyfGZ1bmN0aW9ufGFyZ3VtZW50c3xpbnRlcmZhY2V8cHJvdGVjdGVkfGltcGxlbWVudHN8aW5zdGFuY2VvZikkKVtfJGEtekEtWlxcXFx4QTAtXFxcXHVGRkZGXVtfJGEtekEtWjAtOVxcXFx4QTAtXFxcXHVGRkZGXSokLyx0aGlzW18weDEyN2ZhOSgweDFhYSldPS9eKDB8WzEtOV1bMC05XSopJC8sdGhpc1tfMHgxMjdmYTkoMHgxMzMpXT0vJyhbXlxcXFxcXFxcJ118XFxcXFxcXFwnKSonLyx0aGlzW18weDEyN2ZhOSgweDFjYildPV8weGRiYzFjMVsndW5kZWZpbmVkJ10sdGhpc1snX0hUTUxBbGxDb2xsZWN0aW9uJ109XzB4ZGJjMWMxW18weDEyN2ZhOSgweDE0ZSldLHRoaXNbXzB4MTI3ZmE5KDB4MTNmKV09T2JqZWN0W18weDEyN2ZhOSgweDFiMildLHRoaXNbXzB4MTI3ZmE5KDB4MTI1KV09T2JqZWN0W18weDEyN2ZhOSgweDE4NyldLHRoaXNbXzB4MTI3ZmE5KDB4MThkKV09XzB4ZGJjMWMxW18weDEyN2ZhOSgweDFlMildLHRoaXNbJ19yZWdFeHBUb1N0cmluZyddPVJlZ0V4cFtfMHgxMjdmYTkoMHgxODMpXVsndG9TdHJpbmcnXSx0aGlzWydfZGF0ZVRvU3RyaW5nJ109RGF0ZVtfMHgxMjdmYTkoMHgxODMpXVtfMHgxMjdmYTkoMHgxMWIpXTt9W18weDI2NzVkZSgweDEwNildKF8weDJiN2FlZCxfMHg1MzBkOGIsXzB4MzhmYmM0LF8weDNlZTA4NCl7dmFyIF8weDRjMWNkND1fMHgyNjc1ZGUsXzB4NTc3OGJlPXRoaXMsXzB4MzY1MzdhPV8weDM4ZmJjNFtfMHg0YzFjZDQoMHgxNjkpXTtmdW5jdGlvbiBfMHg1Yjc1ODcoXzB4MTNmNGRjLF8weGJiYzc3ZCxfMHg1YTgzNTMpe3ZhciBfMHgzZmQ0ODY9XzB4NGMxY2Q0O18weGJiYzc3ZFtfMHgzZmQ0ODYoMHgxMmEpXT1fMHgzZmQ0ODYoMHgxYmIpLF8weGJiYzc3ZFsnZXJyb3InXT1fMHgxM2Y0ZGNbXzB4M2ZkNDg2KDB4MTc4KV0sXzB4MjJkMzQ0PV8weDVhODM1M1tfMHgzZmQ0ODYoMHgxYTQpXVtfMHgzZmQ0ODYoMHgxM2MpXSxfMHg1YTgzNTNbXzB4M2ZkNDg2KDB4MWE0KV1bXzB4M2ZkNDg2KDB4MTNjKV09XzB4YmJjNzdkLF8weDU3NzhiZVtfMHgzZmQ0ODYoMHgxMTcpXShfMHhiYmM3N2QsXzB4NWE4MzUzKTt9aWYoXzB4NTMwZDhiJiZfMHg1MzBkOGJbXzB4NGMxY2Q0KDB4MWE3KV0pXzB4NWI3NTg3KF8weDUzMGQ4YixfMHgyYjdhZWQsXzB4MzhmYmM0KTtlbHNlIHRyeXtfMHgzOGZiYzRbXzB4NGMxY2Q0KDB4MWI4KV0rKyxfMHgzOGZiYzRbXzB4NGMxY2Q0KDB4MTY5KV0mJl8weDM4ZmJjNFsnYXV0b0V4cGFuZFByZXZpb3VzT2JqZWN0cyddW18weDRjMWNkNCgweDE2MildKF8weDUzMGQ4Yik7dmFyIF8weDI4MGJlYyxfMHg1Mjg2ZDcsXzB4NWQzYmExLF8weDQyNjdiYixfMHgyOTVkYmM9W10sXzB4MzlmMjU1PVtdLF8weDQ0ZjJiMixfMHgzZDRmZWM9dGhpc1tfMHg0YzFjZDQoMHgxOTYpXShfMHg1MzBkOGIpLF8weDQyMDNmNT1fMHgzZDRmZWM9PT1fMHg0YzFjZDQoMHgxMjIpLF8weDM2NDU0Nj0hMHgxLF8weDVjMzhjNT1fMHgzZDRmZWM9PT1fMHg0YzFjZDQoMHgxYTUpLF8weDQyNjM2Mj10aGlzWydfaXNQcmltaXRpdmVUeXBlJ10oXzB4M2Q0ZmVjKSxfMHgzY2VjNmQ9dGhpc1tfMHg0YzFjZDQoMHgxOTMpXShfMHgzZDRmZWMpLF8weDI4MDUyNj1fMHg0MjYzNjJ8fF8weDNjZWM2ZCxfMHgyYTJjNGU9e30sXzB4NDI3MDA5PTB4MCxfMHg0NDY0NGY9ITB4MSxfMHgyMmQzNDQsXzB4M2E5Mjg2PS9eKChbMS05XXsxfVswLTldKil8MCkkLztpZihfMHgzOGZiYzRbXzB4NGMxY2Q0KDB4MTU1KV0pe2lmKF8weDQyMDNmNSl7aWYoXzB4NTI4NmQ3PV8weDUzMGQ4YltfMHg0YzFjZDQoMHgxYzQpXSxfMHg1Mjg2ZDc+XzB4MzhmYmM0WydlbGVtZW50cyddKXtmb3IoXzB4NWQzYmExPTB4MCxfMHg0MjY3YmI9XzB4MzhmYmM0WydlbGVtZW50cyddLF8weDI4MGJlYz1fMHg1ZDNiYTE7XzB4MjgwYmVjPF8weDQyNjdiYjtfMHgyODBiZWMrKylfMHgzOWYyNTVbXzB4NGMxY2Q0KDB4MTYyKV0oXzB4NTc3OGJlWydfYWRkUHJvcGVydHknXShfMHgyOTVkYmMsXzB4NTMwZDhiLF8weDNkNGZlYyxfMHgyODBiZWMsXzB4MzhmYmM0KSk7XzB4MmI3YWVkW18weDRjMWNkNCgweDFjNyldPSEweDA7fWVsc2V7Zm9yKF8weDVkM2JhMT0weDAsXzB4NDI2N2JiPV8weDUyODZkNyxfMHgyODBiZWM9XzB4NWQzYmExO18weDI4MGJlYzxfMHg0MjY3YmI7XzB4MjgwYmVjKyspXzB4MzlmMjU1W18weDRjMWNkNCgweDE2MildKF8weDU3NzhiZVtfMHg0YzFjZDQoMHgxNjUpXShfMHgyOTVkYmMsXzB4NTMwZDhiLF8weDNkNGZlYyxfMHgyODBiZWMsXzB4MzhmYmM0KSk7fV8weDM4ZmJjNFsnYXV0b0V4cGFuZFByb3BlcnR5Q291bnQnXSs9XzB4MzlmMjU1W18weDRjMWNkNCgweDFjNCldO31pZighKF8weDNkNGZlYz09PV8weDRjMWNkNCgweDFiYSl8fF8weDNkNGZlYz09PV8weDRjMWNkNCgweDFkOCkpJiYhXzB4NDI2MzYyJiZfMHgzZDRmZWMhPT1fMHg0YzFjZDQoMHgxY2QpJiZfMHgzZDRmZWMhPT1fMHg0YzFjZDQoMHgxOGEpJiZfMHgzZDRmZWMhPT0nYmlnaW50Jyl7dmFyIF8weDI2NDU2Mj1fMHgzZWUwODRbXzB4NGMxY2Q0KDB4MTZjKV18fF8weDM4ZmJjNFtfMHg0YzFjZDQoMHgxNmMpXTtpZih0aGlzW18weDRjMWNkNCgweDFhNildKF8weDUzMGQ4Yik/KF8weDI4MGJlYz0weDAsXzB4NTMwZDhiWydmb3JFYWNoJ10oZnVuY3Rpb24oXzB4MmQ5ZDM0KXt2YXIgXzB4MzZjOTY4PV8weDRjMWNkNDtpZihfMHg0MjcwMDkrKyxfMHgzOGZiYzRbXzB4MzZjOTY4KDB4MTNlKV0rKyxfMHg0MjcwMDk+XzB4MjY0NTYyKXtfMHg0NDY0NGY9ITB4MDtyZXR1cm47fWlmKCFfMHgzOGZiYzRbXzB4MzZjOTY4KDB4MTFhKV0mJl8weDM4ZmJjNFtfMHgzNmM5NjgoMHgxNjkpXSYmXzB4MzhmYmM0W18weDM2Yzk2OCgweDEzZSldPl8weDM4ZmJjNFtfMHgzNmM5NjgoMHgxNzcpXSl7XzB4NDQ2NDRmPSEweDA7cmV0dXJuO31fMHgzOWYyNTVbXzB4MzZjOTY4KDB4MTYyKV0oXzB4NTc3OGJlW18weDM2Yzk2OCgweDE2NSldKF8weDI5NWRiYyxfMHg1MzBkOGIsJ1NldCcsXzB4MjgwYmVjKyssXzB4MzhmYmM0LGZ1bmN0aW9uKF8weDQ0OTZlZil7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIF8weDQ0OTZlZjt9O30oXzB4MmQ5ZDM0KSkpO30pKTp0aGlzW18weDRjMWNkNCgweDEyMSldKF8weDUzMGQ4YikmJl8weDUzMGQ4YltfMHg0YzFjZDQoMHgxYzgpXShmdW5jdGlvbihfMHgyMWEwYzIsXzB4NTdlM2YzKXt2YXIgXzB4Mzg5OTM3PV8weDRjMWNkNDtpZihfMHg0MjcwMDkrKyxfMHgzOGZiYzRbXzB4Mzg5OTM3KDB4MTNlKV0rKyxfMHg0MjcwMDk+XzB4MjY0NTYyKXtfMHg0NDY0NGY9ITB4MDtyZXR1cm47fWlmKCFfMHgzOGZiYzRbXzB4Mzg5OTM3KDB4MTFhKV0mJl8weDM4ZmJjNFtfMHgzODk5MzcoMHgxNjkpXSYmXzB4MzhmYmM0W18weDM4OTkzNygweDEzZSldPl8weDM4ZmJjNFtfMHgzODk5MzcoMHgxNzcpXSl7XzB4NDQ2NDRmPSEweDA7cmV0dXJuO312YXIgXzB4NTA3YjQ1PV8weDU3ZTNmM1tfMHgzODk5MzcoMHgxMWIpXSgpO18weDUwN2I0NVsnbGVuZ3RoJ10+MHg2NCYmKF8weDUwN2I0NT1fMHg1MDdiNDVbXzB4Mzg5OTM3KDB4MWMyKV0oMHgwLDB4NjQpK18weDM4OTkzNygweDE1OSkpLF8weDM5ZjI1NVtfMHgzODk5MzcoMHgxNjIpXShfMHg1Nzc4YmVbJ19hZGRQcm9wZXJ0eSddKF8weDI5NWRiYyxfMHg1MzBkOGIsXzB4Mzg5OTM3KDB4MTZiKSxfMHg1MDdiNDUsXzB4MzhmYmM0LGZ1bmN0aW9uKF8weDMyN2E5Yil7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIF8weDMyN2E5Yjt9O30oXzB4MjFhMGMyKSkpO30pLCFfMHgzNjQ1NDYpe3RyeXtmb3IoXzB4NDRmMmIyIGluIF8weDUzMGQ4YilpZighKF8weDQyMDNmNSYmXzB4M2E5Mjg2W18weDRjMWNkNCgweDE1ZildKF8weDQ0ZjJiMikpJiYhdGhpc1tfMHg0YzFjZDQoMHgxMWQpXShfMHg1MzBkOGIsXzB4NDRmMmIyLF8weDM4ZmJjNCkpe2lmKF8weDQyNzAwOSsrLF8weDM4ZmJjNFtfMHg0YzFjZDQoMHgxM2UpXSsrLF8weDQyNzAwOT5fMHgyNjQ1NjIpe18weDQ0NjQ0Zj0hMHgwO2JyZWFrO31pZighXzB4MzhmYmM0W18weDRjMWNkNCgweDExYSldJiZfMHgzOGZiYzRbXzB4NGMxY2Q0KDB4MTY5KV0mJl8weDM4ZmJjNFtfMHg0YzFjZDQoMHgxM2UpXT5fMHgzOGZiYzRbXzB4NGMxY2Q0KDB4MTc3KV0pe18weDQ0NjQ0Zj0hMHgwO2JyZWFrO31fMHgzOWYyNTVbXzB4NGMxY2Q0KDB4MTYyKV0oXzB4NTc3OGJlW18weDRjMWNkNCgweDExZildKF8weDI5NWRiYyxfMHgyYTJjNGUsXzB4NTMwZDhiLF8weDNkNGZlYyxfMHg0NGYyYjIsXzB4MzhmYmM0KSk7fX1jYXRjaHt9aWYoXzB4MmEyYzRlW18weDRjMWNkNCgweDFkNSldPSEweDAsXzB4NWMzOGM1JiYoXzB4MmEyYzRlW18weDRjMWNkNCgweDFkNyldPSEweDApLCFfMHg0NDY0NGYpe3ZhciBfMHg0ZmVmOWE9W11bXzB4NGMxY2Q0KDB4MTUzKV0odGhpc1tfMHg0YzFjZDQoMHgxMjUpXShfMHg1MzBkOGIpKVtfMHg0YzFjZDQoMHgxNTMpXSh0aGlzW18weDRjMWNkNCgweDExYyldKF8weDUzMGQ4YikpO2ZvcihfMHgyODBiZWM9MHgwLF8weDUyODZkNz1fMHg0ZmVmOWFbJ2xlbmd0aCddO18weDI4MGJlYzxfMHg1Mjg2ZDc7XzB4MjgwYmVjKyspaWYoXzB4NDRmMmIyPV8weDRmZWY5YVtfMHgyODBiZWNdLCEoXzB4NDIwM2Y1JiZfMHgzYTkyODZbXzB4NGMxY2Q0KDB4MTVmKV0oXzB4NDRmMmIyW18weDRjMWNkNCgweDExYildKCkpKSYmIXRoaXNbJ19ibGFja2xpc3RlZFByb3BlcnR5J10oXzB4NTMwZDhiLF8weDQ0ZjJiMixfMHgzOGZiYzQpJiYhXzB4MmEyYzRlW18weDRjMWNkNCgweDFkMykrXzB4NDRmMmIyW18weDRjMWNkNCgweDExYildKCldKXtpZihfMHg0MjcwMDkrKyxfMHgzOGZiYzRbJ2F1dG9FeHBhbmRQcm9wZXJ0eUNvdW50J10rKyxfMHg0MjcwMDk+XzB4MjY0NTYyKXtfMHg0NDY0NGY9ITB4MDticmVhazt9aWYoIV8weDM4ZmJjNFtfMHg0YzFjZDQoMHgxMWEpXSYmXzB4MzhmYmM0W18weDRjMWNkNCgweDE2OSldJiZfMHgzOGZiYzRbJ2F1dG9FeHBhbmRQcm9wZXJ0eUNvdW50J10+XzB4MzhmYmM0W18weDRjMWNkNCgweDE3NyldKXtfMHg0NDY0NGY9ITB4MDticmVhazt9XzB4MzlmMjU1W18weDRjMWNkNCgweDE2MildKF8weDU3NzhiZVtfMHg0YzFjZDQoMHgxMWYpXShfMHgyOTVkYmMsXzB4MmEyYzRlLF8weDUzMGQ4YixfMHgzZDRmZWMsXzB4NDRmMmIyLF8weDM4ZmJjNCkpO319fX19aWYoXzB4MmI3YWVkW18weDRjMWNkNCgweDEyYSldPV8weDNkNGZlYyxfMHgyODA1MjY/KF8weDJiN2FlZFtfMHg0YzFjZDQoMHgxOWEpXT1fMHg1MzBkOGJbXzB4NGMxY2Q0KDB4MWFjKV0oKSx0aGlzW18weDRjMWNkNCgweDE5OCldKF8weDNkNGZlYyxfMHgyYjdhZWQsXzB4MzhmYmM0LF8weDNlZTA4NCkpOl8weDNkNGZlYz09PSdkYXRlJz9fMHgyYjdhZWRbXzB4NGMxY2Q0KDB4MTlhKV09dGhpc1snX2RhdGVUb1N0cmluZyddW18weDRjMWNkNCgweDE5MSldKF8weDUzMGQ4Yik6XzB4M2Q0ZmVjPT09XzB4NGMxY2Q0KDB4MTEwKT9fMHgyYjdhZWRbJ3ZhbHVlJ109dGhpc1snX3JlZ0V4cFRvU3RyaW5nJ11bXzB4NGMxY2Q0KDB4MTkxKV0oXzB4NTMwZDhiKTpfMHgzZDRmZWM9PT1fMHg0YzFjZDQoMHgxNWMpJiZ0aGlzWydfU3ltYm9sJ10/XzB4MmI3YWVkWyd2YWx1ZSddPXRoaXNbXzB4NGMxY2Q0KDB4MThkKV1bXzB4NGMxY2Q0KDB4MTgzKV1bXzB4NGMxY2Q0KDB4MTFiKV1bJ2NhbGwnXShfMHg1MzBkOGIpOiFfMHgzOGZiYzRbXzB4NGMxY2Q0KDB4MTU1KV0mJiEoXzB4M2Q0ZmVjPT09XzB4NGMxY2Q0KDB4MWJhKXx8XzB4M2Q0ZmVjPT09XzB4NGMxY2Q0KDB4MWQ4KSkmJihkZWxldGUgXzB4MmI3YWVkW18weDRjMWNkNCgweDE5YSldLF8weDJiN2FlZFsnY2FwcGVkJ109ITB4MCksXzB4NDQ2NDRmJiYoXzB4MmI3YWVkW18weDRjMWNkNCgweDE4MSldPSEweDApLF8weDIyZDM0ND1fMHgzOGZiYzRbXzB4NGMxY2Q0KDB4MWE0KV1bXzB4NGMxY2Q0KDB4MTNjKV0sXzB4MzhmYmM0Wydub2RlJ11bXzB4NGMxY2Q0KDB4MTNjKV09XzB4MmI3YWVkLHRoaXNbXzB4NGMxY2Q0KDB4MTE3KV0oXzB4MmI3YWVkLF8weDM4ZmJjNCksXzB4MzlmMjU1W18weDRjMWNkNCgweDFjNCldKXtmb3IoXzB4MjgwYmVjPTB4MCxfMHg1Mjg2ZDc9XzB4MzlmMjU1W18weDRjMWNkNCgweDFjNCldO18weDI4MGJlYzxfMHg1Mjg2ZDc7XzB4MjgwYmVjKyspXzB4MzlmMjU1W18weDI4MGJlY10oXzB4MjgwYmVjKTt9XzB4Mjk1ZGJjW18weDRjMWNkNCgweDFjNCldJiYoXzB4MmI3YWVkWydwcm9wcyddPV8weDI5NWRiYyk7fWNhdGNoKF8weDIxZTc2Nyl7XzB4NWI3NTg3KF8weDIxZTc2NyxfMHgyYjdhZWQsXzB4MzhmYmM0KTt9cmV0dXJuIHRoaXNbXzB4NGMxY2Q0KDB4MTQ3KV0oXzB4NTMwZDhiLF8weDJiN2FlZCksdGhpc1snX3RyZWVOb2RlUHJvcGVydGllc0FmdGVyRnVsbFZhbHVlJ10oXzB4MmI3YWVkLF8weDM4ZmJjNCksXzB4MzhmYmM0W18weDRjMWNkNCgweDFhNCldWydjdXJyZW50J109XzB4MjJkMzQ0LF8weDM4ZmJjNFsnbGV2ZWwnXS0tLF8weDM4ZmJjNFtfMHg0YzFjZDQoMHgxNjkpXT1fMHgzNjUzN2EsXzB4MzhmYmM0W18weDRjMWNkNCgweDE2OSldJiZfMHgzOGZiYzRbXzB4NGMxY2Q0KDB4MTZmKV1bJ3BvcCddKCksXzB4MmI3YWVkO31bXzB4MjY3NWRlKDB4MTFjKV0oXzB4MzJhYjcwKXt2YXIgXzB4M2IxM2M0PV8weDI2NzVkZTtyZXR1cm4gT2JqZWN0WydnZXRPd25Qcm9wZXJ0eVN5bWJvbHMnXT9PYmplY3RbXzB4M2IxM2M0KDB4MWU0KV0oXzB4MzJhYjcwKTpbXTt9W18weDI2NzVkZSgweDFhNildKF8weDQ0ZTJmNSl7dmFyIF8weDQ2MDQ2Mj1fMHgyNjc1ZGU7cmV0dXJuISEoXzB4NDRlMmY1JiZfMHhkYmMxYzFbXzB4NDYwNDYyKDB4MTliKV0mJnRoaXNbXzB4NDYwNDYyKDB4MTRjKV0oXzB4NDRlMmY1KT09PV8weDQ2MDQ2MigweDE0ZikmJl8weDQ0ZTJmNVtfMHg0NjA0NjIoMHgxYzgpXSk7fVtfMHgyNjc1ZGUoMHgxMWQpXShfMHgyMGQ0NDgsXzB4MjBmMTgxLF8weDUwZDc2MCl7dmFyIF8weDM2NDdjMj1fMHgyNjc1ZGU7cmV0dXJuIF8weDUwZDc2MFtfMHgzNjQ3YzIoMHgxM2QpXT90eXBlb2YgXzB4MjBkNDQ4W18weDIwZjE4MV09PV8weDM2NDdjMigweDFhNSk6ITB4MTt9W18weDI2NzVkZSgweDE5NildKF8weDU3YzBkYyl7dmFyIF8weGM2MTA5Yz1fMHgyNjc1ZGUsXzB4MzkyNjk3PScnO3JldHVybiBfMHgzOTI2OTc9dHlwZW9mIF8weDU3YzBkYyxfMHgzOTI2OTc9PT1fMHhjNjEwOWMoMHgxNDUpP3RoaXNbXzB4YzYxMDljKDB4MTRjKV0oXzB4NTdjMGRjKT09PV8weGM2MTA5YygweDFhYik/XzB4MzkyNjk3PV8weGM2MTA5YygweDEyMik6dGhpc1tfMHhjNjEwOWMoMHgxNGMpXShfMHg1N2MwZGMpPT09XzB4YzYxMDljKDB4MTMyKT9fMHgzOTI2OTc9XzB4YzYxMDljKDB4MTM0KTpfMHg1N2MwZGM9PT1udWxsP18weDM5MjY5Nz1fMHhjNjEwOWMoMHgxYmEpOl8weDU3YzBkY1tfMHhjNjEwOWMoMHgxN2IpXSYmKF8weDM5MjY5Nz1fMHg1N2MwZGNbXzB4YzYxMDljKDB4MTdiKV1bXzB4YzYxMDljKDB4MWI0KV18fF8weDM5MjY5Nyk6XzB4MzkyNjk3PT09XzB4YzYxMDljKDB4MWQ4KSYmdGhpc1snX0hUTUxBbGxDb2xsZWN0aW9uJ10mJl8weDU3YzBkYyBpbnN0YW5jZW9mIHRoaXNbXzB4YzYxMDljKDB4MTBlKV0mJihfMHgzOTI2OTc9XzB4YzYxMDljKDB4MTRlKSksXzB4MzkyNjk3O31bXzB4MjY3NWRlKDB4MTRjKV0oXzB4NTNkMTc2KXtyZXR1cm4gT2JqZWN0Wydwcm90b3R5cGUnXVsndG9TdHJpbmcnXVsnY2FsbCddKF8weDUzZDE3Nik7fVtfMHgyNjc1ZGUoMHgxMmQpXShfMHgyZmY5NzQpe3ZhciBfMHgzMDJhYzk9XzB4MjY3NWRlO3JldHVybiBfMHgyZmY5NzQ9PT1fMHgzMDJhYzkoMHgxMTEpfHxfMHgyZmY5NzQ9PT0nc3RyaW5nJ3x8XzB4MmZmOTc0PT09XzB4MzAyYWM5KDB4MTczKTt9W18weDI2NzVkZSgweDE5MyldKF8weDM4YjFhOCl7dmFyIF8weDIxNDQ0OD1fMHgyNjc1ZGU7cmV0dXJuIF8weDM4YjFhOD09PSdCb29sZWFuJ3x8XzB4MzhiMWE4PT09XzB4MjE0NDQ4KDB4MWNkKXx8XzB4MzhiMWE4PT09XzB4MjE0NDQ4KDB4MWRiKTt9W18weDI2NzVkZSgweDE2NSldKF8weDJiMzdhNixfMHhlYmNlNzcsXzB4MTY5ODRjLF8weDM0YTI1YSxfMHhhMzk1ZmUsXzB4MTYxZDFjKXt2YXIgXzB4NWFjNDMxPXRoaXM7cmV0dXJuIGZ1bmN0aW9uKF8weDk5YjZhMyl7dmFyIF8weDRkZjFlZj1fMHg1NzliLF8weDJmNWZkMz1fMHhhMzk1ZmVbXzB4NGRmMWVmKDB4MWE0KV1bXzB4NGRmMWVmKDB4MTNjKV0sXzB4NDUyMjljPV8weGEzOTVmZVtfMHg0ZGYxZWYoMHgxYTQpXVsnaW5kZXgnXSxfMHgxODc5MjE9XzB4YTM5NWZlWydub2RlJ11bXzB4NGRmMWVmKDB4MTM1KV07XzB4YTM5NWZlW18weDRkZjFlZigweDFhNCldW18weDRkZjFlZigweDEzNSldPV8weDJmNWZkMyxfMHhhMzk1ZmVbXzB4NGRmMWVmKDB4MWE0KV1bXzB4NGRmMWVmKDB4MTM2KV09dHlwZW9mIF8weDM0YTI1YT09XzB4NGRmMWVmKDB4MTczKT9fMHgzNGEyNWE6XzB4OTliNmEzLF8weDJiMzdhNltfMHg0ZGYxZWYoMHgxNjIpXShfMHg1YWM0MzFbXzB4NGRmMWVmKDB4MThjKV0oXzB4ZWJjZTc3LF8weDE2OTg0YyxfMHgzNGEyNWEsXzB4YTM5NWZlLF8weDE2MWQxYykpLF8weGEzOTVmZVtfMHg0ZGYxZWYoMHgxYTQpXVtfMHg0ZGYxZWYoMHgxMzUpXT1fMHgxODc5MjEsXzB4YTM5NWZlWydub2RlJ11bJ2luZGV4J109XzB4NDUyMjljO307fVtfMHgyNjc1ZGUoMHgxMWYpXShfMHg3MTUyYjMsXzB4NDE4M2MzLF8weDY0YTkyYixfMHgzZjQ1MTIsXzB4ZDNkNjc0LF8weDVhNmEwMixfMHgxNzIwYmYpe3ZhciBfMHhjMDlkYTg9XzB4MjY3NWRlLF8weDM4ZThmNz10aGlzO3JldHVybiBfMHg0MTgzYzNbXzB4YzA5ZGE4KDB4MWQzKStfMHhkM2Q2NzRbXzB4YzA5ZGE4KDB4MTFiKV0oKV09ITB4MCxmdW5jdGlvbihfMHg1NWJkNTQpe3ZhciBfMHgzMzc4NjI9XzB4YzA5ZGE4LF8weDJjMWVlNj1fMHg1YTZhMDJbXzB4MzM3ODYyKDB4MWE0KV1bJ2N1cnJlbnQnXSxfMHgzZmEyMTI9XzB4NWE2YTAyWydub2RlJ11bXzB4MzM3ODYyKDB4MTM2KV0sXzB4NGQzMjQ0PV8weDVhNmEwMltfMHgzMzc4NjIoMHgxYTQpXVsncGFyZW50J107XzB4NWE2YTAyW18weDMzNzg2MigweDFhNCldW18weDMzNzg2MigweDEzNSldPV8weDJjMWVlNixfMHg1YTZhMDJbXzB4MzM3ODYyKDB4MWE0KV1bJ2luZGV4J109XzB4NTViZDU0LF8weDcxNTJiM1tfMHgzMzc4NjIoMHgxNjIpXShfMHgzOGU4ZjdbXzB4MzM3ODYyKDB4MThjKV0oXzB4NjRhOTJiLF8weDNmNDUxMixfMHhkM2Q2NzQsXzB4NWE2YTAyLF8weDE3MjBiZikpLF8weDVhNmEwMlsnbm9kZSddWydwYXJlbnQnXT1fMHg0ZDMyNDQsXzB4NWE2YTAyWydub2RlJ11bXzB4MzM3ODYyKDB4MTM2KV09XzB4M2ZhMjEyO307fVtfMHgyNjc1ZGUoMHgxOGMpXShfMHg1ZDczNDUsXzB4NTk2ZWNiLF8weDUxMzkzYSxfMHgzYWE5NmUsXzB4ZTdhYzcpe3ZhciBfMHgyMDIzNDI9XzB4MjY3NWRlLF8weDFlYzIzOT10aGlzO18weGU3YWM3fHwoXzB4ZTdhYzc9ZnVuY3Rpb24oXzB4NDUwMGRhLF8weDMxYmNhZCl7cmV0dXJuIF8weDQ1MDBkYVtfMHgzMWJjYWRdO30pO3ZhciBfMHg0ZDJjMDU9XzB4NTEzOTNhW18weDIwMjM0MigweDExYildKCksXzB4M2IyNmI0PV8weDNhYTk2ZVsnZXhwcmVzc2lvbnNUb0V2YWx1YXRlJ118fHt9LF8weDMwOGYyYj1fMHgzYWE5NmVbJ2RlcHRoJ10sXzB4MzFkMzkyPV8weDNhYTk2ZVsnaXNFeHByZXNzaW9uVG9FdmFsdWF0ZSddO3RyeXt2YXIgXzB4MWViNjI3PXRoaXNbXzB4MjAyMzQyKDB4MTIxKV0oXzB4NWQ3MzQ1KSxfMHgxZTgyZmI9XzB4NGQyYzA1O18weDFlYjYyNyYmXzB4MWU4MmZiWzB4MF09PT0nXFxcXHgyNycmJihfMHgxZTgyZmI9XzB4MWU4MmZiWydzdWJzdHInXSgweDEsXzB4MWU4MmZiW18weDIwMjM0MigweDFjNCldLTB4MikpO3ZhciBfMHg1MjQ1NTc9XzB4M2FhOTZlW18weDIwMjM0MigweDE0ZCldPV8weDNiMjZiNFtfMHgyMDIzNDIoMHgxZDMpK18weDFlODJmYl07XzB4NTI0NTU3JiYoXzB4M2FhOTZlW18weDIwMjM0MigweDE1NSldPV8weDNhYTk2ZVsnZGVwdGgnXSsweDEpLF8weDNhYTk2ZVtfMHgyMDIzNDIoMHgxMWEpXT0hIV8weDUyNDU1Nzt2YXIgXzB4ZWNhN2M0PXR5cGVvZiBfMHg1MTM5M2E9PV8weDIwMjM0MigweDE1YyksXzB4MjFlNzJjPXsnbmFtZSc6XzB4ZWNhN2M0fHxfMHgxZWI2Mjc/XzB4NGQyYzA1OnRoaXNbJ19wcm9wZXJ0eU5hbWUnXShfMHg0ZDJjMDUpfTtpZihfMHhlY2E3YzQmJihfMHgyMWU3MmNbXzB4MjAyMzQyKDB4MTVjKV09ITB4MCksIShfMHg1OTZlY2I9PT1fMHgyMDIzNDIoMHgxMjIpfHxfMHg1OTZlY2I9PT1fMHgyMDIzNDIoMHgxNjgpKSl7dmFyIF8weDNlYTAzMz10aGlzW18weDIwMjM0MigweDEzZildKF8weDVkNzM0NSxfMHg1MTM5M2EpO2lmKF8weDNlYTAzMyYmKF8weDNlYTAzM1tfMHgyMDIzNDIoMHgxOWQpXSYmKF8weDIxZTcyY1tfMHgyMDIzNDIoMHgxOTcpXT0hMHgwKSxfMHgzZWEwMzNbXzB4MjAyMzQyKDB4MThlKV0mJiFfMHg1MjQ1NTcmJiFfMHgzYWE5NmVbJ3Jlc29sdmVHZXR0ZXJzJ10pKXJldHVybiBfMHgyMWU3MmNbXzB4MjAyMzQyKDB4MWIwKV09ITB4MCx0aGlzW18weDIwMjM0MigweDE3MildKF8weDIxZTcyYyxfMHgzYWE5NmUpLF8weDIxZTcyYzt9dmFyIF8weDExODdhZjt0cnl7XzB4MTE4N2FmPV8weGU3YWM3KF8weDVkNzM0NSxfMHg1MTM5M2EpO31jYXRjaChfMHgzYjFmNGUpe3JldHVybiBfMHgyMWU3MmM9eyduYW1lJzpfMHg0ZDJjMDUsJ3R5cGUnOl8weDIwMjM0MigweDFiYiksJ2Vycm9yJzpfMHgzYjFmNGVbXzB4MjAyMzQyKDB4MTc4KV19LHRoaXNbJ19wcm9jZXNzVHJlZU5vZGVSZXN1bHQnXShfMHgyMWU3MmMsXzB4M2FhOTZlKSxfMHgyMWU3MmM7fXZhciBfMHgyZDU3Mzc9dGhpc1snX3R5cGUnXShfMHgxMTg3YWYpLF8weDI1YzZjMD10aGlzW18weDIwMjM0MigweDEyZCldKF8weDJkNTczNyk7aWYoXzB4MjFlNzJjWyd0eXBlJ109XzB4MmQ1NzM3LF8weDI1YzZjMCl0aGlzWydfcHJvY2Vzc1RyZWVOb2RlUmVzdWx0J10oXzB4MjFlNzJjLF8weDNhYTk2ZSxfMHgxMTg3YWYsZnVuY3Rpb24oKXt2YXIgXzB4NjhmZTg1PV8weDIwMjM0MjtfMHgyMWU3MmNbXzB4NjhmZTg1KDB4MTlhKV09XzB4MTE4N2FmW18weDY4ZmU4NSgweDFhYyldKCksIV8weDUyNDU1NyYmXzB4MWVjMjM5W18weDY4ZmU4NSgweDE5OCldKF8weDJkNTczNyxfMHgyMWU3MmMsXzB4M2FhOTZlLHt9KTt9KTtlbHNle3ZhciBfMHgzNGI4OGM9XzB4M2FhOTZlW18weDIwMjM0MigweDE2OSldJiZfMHgzYWE5NmVbJ2xldmVsJ108XzB4M2FhOTZlWydhdXRvRXhwYW5kTWF4RGVwdGgnXSYmXzB4M2FhOTZlWydhdXRvRXhwYW5kUHJldmlvdXNPYmplY3RzJ11bXzB4MjAyMzQyKDB4MTg5KV0oXzB4MTE4N2FmKTwweDAmJl8weDJkNTczNyE9PSdmdW5jdGlvbicmJl8weDNhYTk2ZVtfMHgyMDIzNDIoMHgxM2UpXTxfMHgzYWE5NmVbXzB4MjAyMzQyKDB4MTc3KV07XzB4MzRiODhjfHxfMHgzYWE5NmVbJ2xldmVsJ108XzB4MzA4ZjJifHxfMHg1MjQ1NTc/KHRoaXNbXzB4MjAyMzQyKDB4MTA2KV0oXzB4MjFlNzJjLF8weDExODdhZixfMHgzYWE5NmUsXzB4NTI0NTU3fHx7fSksdGhpc1tfMHgyMDIzNDIoMHgxNDcpXShfMHgxMTg3YWYsXzB4MjFlNzJjKSk6dGhpc1tfMHgyMDIzNDIoMHgxNzIpXShfMHgyMWU3MmMsXzB4M2FhOTZlLF8weDExODdhZixmdW5jdGlvbigpe3ZhciBfMHg0OTcyOGY9XzB4MjAyMzQyO18weDJkNTczNz09PV8weDQ5NzI4ZigweDFiYSl8fF8weDJkNTczNz09PV8weDQ5NzI4ZigweDFkOCl8fChkZWxldGUgXzB4MjFlNzJjWyd2YWx1ZSddLF8weDIxZTcyY1tfMHg0OTcyOGYoMHgxNzYpXT0hMHgwKTt9KTt9cmV0dXJuIF8weDIxZTcyYzt9ZmluYWxseXtfMHgzYWE5NmVbXzB4MjAyMzQyKDB4MTRkKV09XzB4M2IyNmI0LF8weDNhYTk2ZVtfMHgyMDIzNDIoMHgxNTUpXT1fMHgzMDhmMmIsXzB4M2FhOTZlW18weDIwMjM0MigweDExYSldPV8weDMxZDM5Mjt9fVtfMHgyNjc1ZGUoMHgxOTgpXShfMHgyYjdlMDEsXzB4MWVmNDgyLF8weDFjODg3ZSxfMHgyNTk5MDYpe3ZhciBfMHgxZTRmOTY9XzB4MjY3NWRlLF8weDQxYmEyMD1fMHgyNTk5MDZbXzB4MWU0Zjk2KDB4MTY0KV18fF8weDFjODg3ZVtfMHgxZTRmOTYoMHgxNjQpXTtpZigoXzB4MmI3ZTAxPT09J3N0cmluZyd8fF8weDJiN2UwMT09PSdTdHJpbmcnKSYmXzB4MWVmNDgyW18weDFlNGY5NigweDE5YSldKXtsZXQgXzB4NGYzMDdjPV8weDFlZjQ4MltfMHgxZTRmOTYoMHgxOWEpXVtfMHgxZTRmOTYoMHgxYzQpXTtfMHgxYzg4N2VbXzB4MWU0Zjk2KDB4MTdmKV0rPV8weDRmMzA3YyxfMHgxYzg4N2VbJ2FsbFN0ckxlbmd0aCddPl8weDFjODg3ZVtfMHgxZTRmOTYoMHgxYjUpXT8oXzB4MWVmNDgyW18weDFlNGY5NigweDE3NildPScnLGRlbGV0ZSBfMHgxZWY0ODJbXzB4MWU0Zjk2KDB4MTlhKV0pOl8weDRmMzA3Yz5fMHg0MWJhMjAmJihfMHgxZWY0ODJbXzB4MWU0Zjk2KDB4MTc2KV09XzB4MWVmNDgyWyd2YWx1ZSddW18weDFlNGY5NigweDFlYSldKDB4MCxfMHg0MWJhMjApLGRlbGV0ZSBfMHgxZWY0ODJbXzB4MWU0Zjk2KDB4MTlhKV0pO319W18weDI2NzVkZSgweDEyMSldKF8weDRiZWI4Zil7dmFyIF8weGUzNGJlMj1fMHgyNjc1ZGU7cmV0dXJuISEoXzB4NGJlYjhmJiZfMHhkYmMxYzFbXzB4ZTM0YmUyKDB4MTZiKV0mJnRoaXNbJ19vYmplY3RUb1N0cmluZyddKF8weDRiZWI4Zik9PT1fMHhlMzRiZTIoMHgxNWQpJiZfMHg0YmViOGZbXzB4ZTM0YmUyKDB4MWM4KV0pO31bJ19wcm9wZXJ0eU5hbWUnXShfMHg0MjUyNTgpe3ZhciBfMHg1ZDQ2Zjg9XzB4MjY3NWRlO2lmKF8weDQyNTI1OFtfMHg1ZDQ2ZjgoMHgxMjkpXSgvXlxcXFxkKyQvKSlyZXR1cm4gXzB4NDI1MjU4O3ZhciBfMHg5MzI4NmM7dHJ5e18weDkzMjg2Yz1KU09OW18weDVkNDZmOCgweDE3MSldKCcnK18weDQyNTI1OCk7fWNhdGNoe18weDkzMjg2Yz0nXFxcXHgyMicrdGhpc1tfMHg1ZDQ2ZjgoMHgxNGMpXShfMHg0MjUyNTgpKydcXFxceDIyJzt9cmV0dXJuIF8weDkzMjg2Y1snbWF0Y2gnXSgvXlxcXCIoW2EtekEtWl9dW2EtekEtWl8wLTldKilcXFwiJC8pP18weDkzMjg2Yz1fMHg5MzI4NmNbXzB4NWQ0NmY4KDB4MWVhKV0oMHgxLF8weDkzMjg2Y1tfMHg1ZDQ2ZjgoMHgxYzQpXS0weDIpOl8weDkzMjg2Yz1fMHg5MzI4NmNbJ3JlcGxhY2UnXSgvJy9nLCdcXFxceDVjXFxcXHgyNycpW18weDVkNDZmOCgweDE0MSldKC9cXFxcXFxcXFxcXCIvZywnXFxcXHgyMicpW18weDVkNDZmOCgweDE0MSldKC8oXlxcXCJ8XFxcIiQpL2csJ1xcXFx4MjcnKSxfMHg5MzI4NmM7fVtfMHgyNjc1ZGUoMHgxNzIpXShfMHgyODM1NTksXzB4MjkyN2E0LF8weDI1M2MwMCxfMHg1YjNjMTQpe3ZhciBfMHgyODdlN2I9XzB4MjY3NWRlO3RoaXNbXzB4Mjg3ZTdiKDB4MTE3KV0oXzB4MjgzNTU5LF8weDI5MjdhNCksXzB4NWIzYzE0JiZfMHg1YjNjMTQoKSx0aGlzW18weDI4N2U3YigweDE0NyldKF8weDI1M2MwMCxfMHgyODM1NTkpLHRoaXNbJ190cmVlTm9kZVByb3BlcnRpZXNBZnRlckZ1bGxWYWx1ZSddKF8weDI4MzU1OSxfMHgyOTI3YTQpO31bXzB4MjY3NWRlKDB4MTE3KV0oXzB4MWIwMTY4LF8weDE4ZTM4OSl7dmFyIF8weDMzZjEzNT1fMHgyNjc1ZGU7dGhpc1tfMHgzM2YxMzUoMHgxZTcpXShfMHgxYjAxNjgsXzB4MThlMzg5KSx0aGlzW18weDMzZjEzNSgweDFkNCldKF8weDFiMDE2OCxfMHgxOGUzODkpLHRoaXNbXzB4MzNmMTM1KDB4MTE1KV0oXzB4MWIwMTY4LF8weDE4ZTM4OSksdGhpc1tfMHgzM2YxMzUoMHgxZTEpXShfMHgxYjAxNjgsXzB4MThlMzg5KTt9W18weDI2NzVkZSgweDFlNyldKF8weDM0ZjQ2ZixfMHgyMTJiNTUpe31bXzB4MjY3NWRlKDB4MWQ0KV0oXzB4MTVkNjYzLF8weDVlMjJhYSl7fVsnX3NldE5vZGVMYWJlbCddKF8weDUwNTU3YSxfMHg5YzdjYmEpe31bJ19pc1VuZGVmaW5lZCddKF8weDJjOTI5MCl7dmFyIF8weDFmOTNkNz1fMHgyNjc1ZGU7cmV0dXJuIF8weDJjOTI5MD09PXRoaXNbXzB4MWY5M2Q3KDB4MWNiKV07fVtfMHgyNjc1ZGUoMHgxNGIpXShfMHgzMzE5ODUsXzB4MTgxNmRhKXt2YXIgXzB4Mzg5ZmU1PV8weDI2NzVkZTt0aGlzW18weDM4OWZlNSgweDE1NyldKF8weDMzMTk4NSxfMHgxODE2ZGEpLHRoaXNbXzB4Mzg5ZmU1KDB4MWExKV0oXzB4MzMxOTg1KSxfMHgxODE2ZGFbXzB4Mzg5ZmU1KDB4MTEzKV0mJnRoaXNbJ19zb3J0UHJvcHMnXShfMHgzMzE5ODUpLHRoaXNbXzB4Mzg5ZmU1KDB4MTM4KV0oXzB4MzMxOTg1LF8weDE4MTZkYSksdGhpc1tfMHgzODlmZTUoMHgxYzMpXShfMHgzMzE5ODUsXzB4MTgxNmRhKSx0aGlzW18weDM4OWZlNSgweDFjZSldKF8weDMzMTk4NSk7fVtfMHgyNjc1ZGUoMHgxNDcpXShfMHg0YzljZjYsXzB4NWY0ZmYxKXt2YXIgXzB4NWMzZmFlPV8weDI2NzVkZTt0cnl7XzB4NGM5Y2Y2JiZ0eXBlb2YgXzB4NGM5Y2Y2W18weDVjM2ZhZSgweDFjNCldPT1fMHg1YzNmYWUoMHgxNzMpJiYoXzB4NWY0ZmYxW18weDVjM2ZhZSgweDFjNCldPV8weDRjOWNmNltfMHg1YzNmYWUoMHgxYzQpXSk7fWNhdGNoe31pZihfMHg1ZjRmZjFbXzB4NWMzZmFlKDB4MTJhKV09PT0nbnVtYmVyJ3x8XzB4NWY0ZmYxW18weDVjM2ZhZSgweDEyYSldPT09J051bWJlcicpe2lmKGlzTmFOKF8weDVmNGZmMVsndmFsdWUnXSkpXzB4NWY0ZmYxW18weDVjM2ZhZSgweDE1ZSldPSEweDAsZGVsZXRlIF8weDVmNGZmMVsndmFsdWUnXTtlbHNlIHN3aXRjaChfMHg1ZjRmZjFbXzB4NWMzZmFlKDB4MTlhKV0pe2Nhc2UgTnVtYmVyW18weDVjM2ZhZSgweDE1MSldOl8weDVmNGZmMVtfMHg1YzNmYWUoMHgxZGYpXT0hMHgwLGRlbGV0ZSBfMHg1ZjRmZjFbXzB4NWMzZmFlKDB4MTlhKV07YnJlYWs7Y2FzZSBOdW1iZXJbXzB4NWMzZmFlKDB4MWQxKV06XzB4NWY0ZmYxW18weDVjM2ZhZSgweDE5YyldPSEweDAsZGVsZXRlIF8weDVmNGZmMVtfMHg1YzNmYWUoMHgxOWEpXTticmVhaztjYXNlIDB4MDp0aGlzW18weDVjM2ZhZSgweDFhOCldKF8weDVmNGZmMVtfMHg1YzNmYWUoMHgxOWEpXSkmJihfMHg1ZjRmZjFbXzB4NWMzZmFlKDB4MTM3KV09ITB4MCk7YnJlYWs7fX1lbHNlIF8weDVmNGZmMVtfMHg1YzNmYWUoMHgxMmEpXT09PV8weDVjM2ZhZSgweDFhNSkmJnR5cGVvZiBfMHg0YzljZjZbXzB4NWMzZmFlKDB4MWI0KV09PV8weDVjM2ZhZSgweDEyNCkmJl8weDRjOWNmNltfMHg1YzNmYWUoMHgxYjQpXSYmXzB4NWY0ZmYxWyduYW1lJ10mJl8weDRjOWNmNltfMHg1YzNmYWUoMHgxYjQpXSE9PV8weDVmNGZmMVtfMHg1YzNmYWUoMHgxYjQpXSYmKF8weDVmNGZmMVtfMHg1YzNmYWUoMHgxZGEpXT1fMHg0YzljZjZbXzB4NWMzZmFlKDB4MWI0KV0pO31bXzB4MjY3NWRlKDB4MWE4KV0oXzB4MmNjZGQzKXt2YXIgXzB4NWU5N2U4PV8weDI2NzVkZTtyZXR1cm4gMHgxL18weDJjY2RkMz09PU51bWJlcltfMHg1ZTk3ZTgoMHgxZDEpXTt9W18weDI2NzVkZSgweDE2ZCldKF8weDIwYTU2Zil7dmFyIF8weDM5ZTliZT1fMHgyNjc1ZGU7IV8weDIwYTU2ZltfMHgzOWU5YmUoMHgxNmMpXXx8IV8weDIwYTU2ZlsncHJvcHMnXVsnbGVuZ3RoJ118fF8weDIwYTU2ZlsndHlwZSddPT09J2FycmF5J3x8XzB4MjBhNTZmWyd0eXBlJ109PT1fMHgzOWU5YmUoMHgxNmIpfHxfMHgyMGE1NmZbXzB4MzllOWJlKDB4MTJhKV09PT0nU2V0J3x8XzB4MjBhNTZmWydwcm9wcyddWydzb3J0J10oZnVuY3Rpb24oXzB4MTk5OTJkLF8weDU4Y2UyZSl7dmFyIF8weDUxN2RlOD1fMHgzOWU5YmUsXzB4NGQzNTUwPV8weDE5OTkyZFtfMHg1MTdkZTgoMHgxYjQpXVtfMHg1MTdkZTgoMHgxYzYpXSgpLF8weDQ0MzBiND1fMHg1OGNlMmVbXzB4NTE3ZGU4KDB4MWI0KV1bXzB4NTE3ZGU4KDB4MWM2KV0oKTtyZXR1cm4gXzB4NGQzNTUwPF8weDQ0MzBiND8tMHgxOl8weDRkMzU1MD5fMHg0NDMwYjQ/MHgxOjB4MDt9KTt9WydfYWRkRnVuY3Rpb25zTm9kZSddKF8weDI3ODc5ZixfMHg0ZDM5NDkpe3ZhciBfMHgxYWZhNDA9XzB4MjY3NWRlO2lmKCEoXzB4NGQzOTQ5W18weDFhZmE0MCgweDEzZCldfHwhXzB4Mjc4NzlmW18weDFhZmE0MCgweDE2YyldfHwhXzB4Mjc4NzlmW18weDFhZmE0MCgweDE2YyldW18weDFhZmE0MCgweDFjNCldKSl7Zm9yKHZhciBfMHg0N2NjMTU9W10sXzB4NGMzNzA2PVtdLF8weGJmMjE3ZD0weDAsXzB4NDNkYTMzPV8weDI3ODc5ZltfMHgxYWZhNDAoMHgxNmMpXVtfMHgxYWZhNDAoMHgxYzQpXTtfMHhiZjIxN2Q8XzB4NDNkYTMzO18weGJmMjE3ZCsrKXt2YXIgXzB4MWJhMzc5PV8weDI3ODc5ZltfMHgxYWZhNDAoMHgxNmMpXVtfMHhiZjIxN2RdO18weDFiYTM3OVtfMHgxYWZhNDAoMHgxMmEpXT09PV8weDFhZmE0MCgweDFhNSk/XzB4NDdjYzE1W18weDFhZmE0MCgweDE2MildKF8weDFiYTM3OSk6XzB4NGMzNzA2W18weDFhZmE0MCgweDE2MildKF8weDFiYTM3OSk7fWlmKCEoIV8weDRjMzcwNltfMHgxYWZhNDAoMHgxYzQpXXx8XzB4NDdjYzE1WydsZW5ndGgnXTw9MHgxKSl7XzB4Mjc4NzlmW18weDFhZmE0MCgweDE2YyldPV8weDRjMzcwNjt2YXIgXzB4MmM5ZGY0PXsnZnVuY3Rpb25zTm9kZSc6ITB4MCwncHJvcHMnOl8weDQ3Y2MxNX07dGhpc1tfMHgxYWZhNDAoMHgxZTcpXShfMHgyYzlkZjQsXzB4NGQzOTQ5KSx0aGlzW18weDFhZmE0MCgweDE1NyldKF8weDJjOWRmNCxfMHg0ZDM5NDkpLHRoaXNbXzB4MWFmYTQwKDB4MWExKV0oXzB4MmM5ZGY0KSx0aGlzWydfc2V0Tm9kZVBlcm1pc3Npb25zJ10oXzB4MmM5ZGY0LF8weDRkMzk0OSksXzB4MmM5ZGY0WydpZCddKz0nXFxcXHgyMGYnLF8weDI3ODc5ZltfMHgxYWZhNDAoMHgxNmMpXVsndW5zaGlmdCddKF8weDJjOWRmNCk7fX19W18weDI2NzVkZSgweDFjMyldKF8weDFmOThjYSxfMHg1MTliOTApe31bJ19zZXROb2RlRXhwYW5kYWJsZVN0YXRlJ10oXzB4MjhhOTM2KXt9WydfaXNBcnJheSddKF8weDNmMTI2MCl7dmFyIF8weDRjMjJkNz1fMHgyNjc1ZGU7cmV0dXJuIEFycmF5Wydpc0FycmF5J10oXzB4M2YxMjYwKXx8dHlwZW9mIF8weDNmMTI2MD09J29iamVjdCcmJnRoaXNbXzB4NGMyMmQ3KDB4MTRjKV0oXzB4M2YxMjYwKT09PV8weDRjMjJkNygweDFhYik7fVtfMHgyNjc1ZGUoMHgxZTEpXShfMHgzNWM4NDUsXzB4NTZkMDhkKXt9W18weDI2NzVkZSgweDFjZSldKF8weDFjMDAzZSl7dmFyIF8weDRkMTA1Nj1fMHgyNjc1ZGU7ZGVsZXRlIF8weDFjMDAzZVtfMHg0ZDEwNTYoMHgxMTQpXSxkZWxldGUgXzB4MWMwMDNlW18weDRkMTA1NigweDE0YSldLGRlbGV0ZSBfMHgxYzAwM2VbXzB4NGQxMDU2KDB4MTdjKV07fVtfMHgyNjc1ZGUoMHgxMTUpXShfMHg0OGUzYTIsXzB4YjFkN2UyKXt9W18weDI2NzVkZSgweDEwOSldKF8weDU4MzZiYil7dmFyIF8weDIzMDM0OD1fMHgyNjc1ZGU7cmV0dXJuIF8weDU4MzZiYj9fMHg1ODM2YmJbXzB4MjMwMzQ4KDB4MTI5KV0odGhpc1snX251bWJlclJlZ0V4cCddKT8nWycrXzB4NTgzNmJiKyddJzpfMHg1ODM2YmJbXzB4MjMwMzQ4KDB4MTI5KV0odGhpc1tfMHgyMzAzNDgoMHgxZDIpXSk/Jy4nK18weDU4MzZiYjpfMHg1ODM2YmJbXzB4MjMwMzQ4KDB4MTI5KV0odGhpc1tfMHgyMzAzNDgoMHgxMzMpXSk/J1snK18weDU4MzZiYisnXSc6J1tcXFxceDI3JytfMHg1ODM2YmIrJ1xcXFx4MjddJzonJzt9fWxldCBfMHgzNjA1MWM9bmV3IF8weDI1ZDEzOCgpO2Z1bmN0aW9uIF8weDNiZjE5YShfMHg0MDNhMTQsXzB4NjY1YjQ2LF8weDQyOTEzYixfMHgyZWVmZTMsXzB4MTRmMmUyLF8weDVhYWUwYil7dmFyIF8weDVmMTA2ND1fMHgyNjc1ZGU7bGV0IF8weDVlZDA2MSxfMHgzZDY3YjE7dHJ5e18weDNkNjdiMT1fMHgxNDczOGYoKSxfMHg1ZWQwNjE9XzB4NTQ0ZDFlW18weDY2NWI0Nl0sIV8weDVlZDA2MXx8XzB4M2Q2N2IxLV8weDVlZDA2MVsndHMnXT4weDFmNCYmXzB4NWVkMDYxW18weDVmMTA2NCgweDEyZildJiZfMHg1ZWQwNjFbXzB4NWYxMDY0KDB4MTdhKV0vXzB4NWVkMDYxW18weDVmMTA2NCgweDEyZildPDB4NjQ/KF8weDU0NGQxZVtfMHg2NjViNDZdPV8weDVlZDA2MT17J2NvdW50JzoweDAsJ3RpbWUnOjB4MCwndHMnOl8weDNkNjdiMX0sXzB4NTQ0ZDFlWydoaXRzJ109e30pOl8weDNkNjdiMS1fMHg1NDRkMWVbJ2hpdHMnXVsndHMnXT4weDMyJiZfMHg1NDRkMWVbXzB4NWYxMDY0KDB4MTJjKV1bJ2NvdW50J10mJl8weDU0NGQxZVtfMHg1ZjEwNjQoMHgxMmMpXVsndGltZSddL18weDU0NGQxZVtfMHg1ZjEwNjQoMHgxMmMpXVtfMHg1ZjEwNjQoMHgxMmYpXTwweDY0JiYoXzB4NTQ0ZDFlW18weDVmMTA2NCgweDEyYyldPXt9KTtsZXQgXzB4NTc5MTYyPVtdLF8weDMwYzdkZD1fMHg1ZWQwNjFbXzB4NWYxMDY0KDB4MWFkKV18fF8weDU0NGQxZVtfMHg1ZjEwNjQoMHgxMmMpXVtfMHg1ZjEwNjQoMHgxYWQpXT9fMHgzNDgyOTM6XzB4MjAwZGUwLF8weDI1ZmJjYz1fMHgzOTM4NzI9Pnt2YXIgXzB4NTAyMjU5PV8weDVmMTA2NDtsZXQgXzB4MWI3MDI4PXt9O3JldHVybiBfMHgxYjcwMjhbXzB4NTAyMjU5KDB4MTZjKV09XzB4MzkzODcyW18weDUwMjI1OSgweDE2YyldLF8weDFiNzAyOFtfMHg1MDIyNTkoMHgxNTIpXT1fMHgzOTM4NzJbXzB4NTAyMjU5KDB4MTUyKV0sXzB4MWI3MDI4WydzdHJMZW5ndGgnXT1fMHgzOTM4NzJbXzB4NTAyMjU5KDB4MTY0KV0sXzB4MWI3MDI4Wyd0b3RhbFN0ckxlbmd0aCddPV8weDM5Mzg3MlsndG90YWxTdHJMZW5ndGgnXSxfMHgxYjcwMjhbXzB4NTAyMjU5KDB4MTc3KV09XzB4MzkzODcyW18weDUwMjI1OSgweDE3NyldLF8weDFiNzAyOFtfMHg1MDIyNTkoMHgxMzkpXT1fMHgzOTM4NzJbXzB4NTAyMjU5KDB4MTM5KV0sXzB4MWI3MDI4W18weDUwMjI1OSgweDExMyldPSEweDEsXzB4MWI3MDI4Wydub0Z1bmN0aW9ucyddPSFfMHg2ZTU2YmIsXzB4MWI3MDI4W18weDUwMjI1OSgweDE1NSldPTB4MSxfMHgxYjcwMjhbJ2xldmVsJ109MHgwLF8weDFiNzAyOFtfMHg1MDIyNTkoMHgxZDYpXT0ncm9vdF9leHBfaWQnLF8weDFiNzAyOFsncm9vdEV4cHJlc3Npb24nXT1fMHg1MDIyNTkoMHgxMGIpLF8weDFiNzAyOFsnYXV0b0V4cGFuZCddPSEweDAsXzB4MWI3MDI4W18weDUwMjI1OSgweDE2ZildPVtdLF8weDFiNzAyOFtfMHg1MDIyNTkoMHgxM2UpXT0weDAsXzB4MWI3MDI4W18weDUwMjI1OSgweDFiOSldPSEweDAsXzB4MWI3MDI4W18weDUwMjI1OSgweDE3ZildPTB4MCxfMHgxYjcwMjhbXzB4NTAyMjU5KDB4MWE0KV09eydjdXJyZW50Jzp2b2lkIDB4MCwncGFyZW50Jzp2b2lkIDB4MCwnaW5kZXgnOjB4MH0sXzB4MWI3MDI4O307Zm9yKHZhciBfMHgxODFkYjM9MHgwO18weDE4MWRiMzxfMHgxNGYyZTJbXzB4NWYxMDY0KDB4MWM0KV07XzB4MTgxZGIzKyspXzB4NTc5MTYyW18weDVmMTA2NCgweDE2MildKF8weDM2MDUxY1tfMHg1ZjEwNjQoMHgxMDYpXSh7J3RpbWVOb2RlJzpfMHg0MDNhMTQ9PT0ndGltZSd8fHZvaWQgMHgwfSxfMHgxNGYyZTJbXzB4MTgxZGIzXSxfMHgyNWZiY2MoXzB4MzBjN2RkKSx7fSkpO2lmKF8weDQwM2ExND09PV8weDVmMTA2NCgweDFjYSkpe2xldCBfMHgxZjFhMmY9RXJyb3JbXzB4NWYxMDY0KDB4MTQ5KV07dHJ5e0Vycm9yW18weDVmMTA2NCgweDE0OSldPTB4MS8weDAsXzB4NTc5MTYyW18weDVmMTA2NCgweDE2MildKF8weDM2MDUxY1tfMHg1ZjEwNjQoMHgxMDYpXSh7J3N0YWNrTm9kZSc6ITB4MH0sbmV3IEVycm9yKClbXzB4NWYxMDY0KDB4MTYxKV0sXzB4MjVmYmNjKF8weDMwYzdkZCkseydzdHJMZW5ndGgnOjB4MS8weDB9KSk7fWZpbmFsbHl7RXJyb3JbJ3N0YWNrVHJhY2VMaW1pdCddPV8weDFmMWEyZjt9fXJldHVybnsnbWV0aG9kJzpfMHg1ZjEwNjQoMHgxNmUpLCd2ZXJzaW9uJzpfMHgzYThmNzYsJ2FyZ3MnOlt7J2lkJzpfMHg2NjViNDYsJ3RzJzpfMHg0MjkxM2IsJ2FyZ3MnOl8weDU3OTE2MiwnY29udGV4dCc6XzB4NWFhZTBiLCdzZXNzaW9uJzpfMHgyZWVmZTN9XX07fWNhdGNoKF8weDQ0OTY5OSl7cmV0dXJueydtZXRob2QnOl8weDVmMTA2NCgweDE2ZSksJ3ZlcnNpb24nOl8weDNhOGY3NiwnYXJncyc6W3snaWQnOl8weDY2NWI0NiwndHMnOl8weDQyOTEzYiwnYXJncyc6W3sndHlwZSc6XzB4NWYxMDY0KDB4MWJiKSwnZXJyb3InOl8weDQ0OTY5OSYmXzB4NDQ5Njk5W18weDVmMTA2NCgweDE3OCldLCdjb250ZXh0JzpfMHg1YWFlMGIsJ3Nlc3Npb24nOl8weDJlZWZlM31dfV19O31maW5hbGx5e3RyeXtpZihfMHg1ZWQwNjEmJl8weDNkNjdiMSl7bGV0IF8weDIyZTk2Yz1fMHgxNDczOGYoKTtfMHg1ZWQwNjFbXzB4NWYxMDY0KDB4MTJmKV0rKyxfMHg1ZWQwNjFbXzB4NWYxMDY0KDB4MTdhKV0rPV8weDQ0NDVhMChfMHgzZDY3YjEsXzB4MjJlOTZjKSxfMHg1ZWQwNjFbJ3RzJ109XzB4MjJlOTZjLF8weDU0NGQxZVtfMHg1ZjEwNjQoMHgxMmMpXVtfMHg1ZjEwNjQoMHgxMmYpXSsrLF8weDU0NGQxZVsnaGl0cyddW18weDVmMTA2NCgweDE3YSldKz1fMHg0NDQ1YTAoXzB4M2Q2N2IxLF8weDIyZTk2YyksXzB4NTQ0ZDFlW18weDVmMTA2NCgweDEyYyldWyd0cyddPV8weDIyZTk2YywoXzB4NWVkMDYxWydjb3VudCddPjB4MzJ8fF8weDVlZDA2MVtfMHg1ZjEwNjQoMHgxN2EpXT4weDY0KSYmKF8weDVlZDA2MVsncmVkdWNlTGltaXRzJ109ITB4MCksKF8weDU0NGQxZVtfMHg1ZjEwNjQoMHgxMmMpXVtfMHg1ZjEwNjQoMHgxMmYpXT4weDNlOHx8XzB4NTQ0ZDFlW18weDVmMTA2NCgweDEyYyldW18weDVmMTA2NCgweDE3YSldPjB4MTJjKSYmKF8weDU0NGQxZVsnaGl0cyddW18weDVmMTA2NCgweDFhZCldPSEweDApO319Y2F0Y2h7fX19cmV0dXJuIF8weGRiYzFjMVtfMHgyNjc1ZGUoMHgxZGQpXTt9KShnbG9iYWxUaGlzLCcxMjcuMC4wLjEnLF8weDNiZDJjZCgweDEzMSksXzB4M2JkMmNkKDB4MThiKSxfMHgzYmQyY2QoMHgxNDQpLF8weDNiZDJjZCgweDFhMCksJzE2ODE3NDg5MDg5MDgnLF8weDNiZDJjZCgweDFjMSksXzB4M2JkMmNkKDB4MTQwKSk7XCIpO31jYXRjaChlKXt9fTtmdW5jdGlvbiBvb19vbyhpLC4uLnYpe3RyeXtvb19jbSgpLmNvbnNvbGVMb2coaSwgdik7fWNhdGNoKGUpe30gcmV0dXJuIHZ9O2Z1bmN0aW9uIG9vX3RyKGksLi4udil7dHJ5e29vX2NtKCkuY29uc29sZVRyYWNlKGksIHYpO31jYXRjaChlKXt9IHJldHVybiB2fTtmdW5jdGlvbiBvb190cygpe3RyeXtvb19jbSgpLmNvbnNvbGVUaW1lKCk7fWNhdGNoKGUpe319O2Z1bmN0aW9uIG9vX3RlKCl7dHJ5e29vX2NtKCkuY29uc29sZVRpbWVFbmQoKTt9Y2F0Y2goZSl7fX07Lyplc2xpbnQgZXNsaW50LWNvbW1lbnRzL2Rpc2FibGUtZW5hYmxlLXBhaXI6LGVzbGludC1jb21tZW50cy9uby11bmxpbWl0ZWQtZGlzYWJsZTosZXNsaW50LWNvbW1lbnRzL25vLWFnZ3JlZ2F0aW5nLWVuYWJsZTosZXNsaW50LWNvbW1lbnRzL25vLWR1cGxpY2F0ZS1kaXNhYmxlOixlc2xpbnQtY29tbWVudHMvbm8tdW51c2VkLWRpc2FibGU6LGVzbGludC1jb21tZW50cy9uby11bnVzZWQtZW5hYmxlOiwqLyIsImV4cG9ydCBhc3luYyBmdW5jdGlvbiBxdWVyeUNsaW1hdGUobG9jYXRpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2xvY2F0aW9ufSZBUFBJRD0ke3Byb2Nlc3MuZW52LmFwaUtleX1gLCB7IG1vZGU6ICdjb3JzJyB9KVxyXG4gICAgICAgIGlmKCFyZXNwb25zZS5vayl7XHJcbiAgICAgICAgICAgIHRocm93KGF3YWl0IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCByZXRyaWV2ZWREYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgKi9jb25zb2xlLmxvZyguLi5vb19vbyhgMzkxNTI2YzBfMGAscmV0cmlldmVkRGF0YSkpXHJcbiAgICAgICAgcmV0dXJuIHJldHJpZXZlZERhdGE7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHRocm93IGVycm9yXHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBxdWVyeUZvcmVjYXN0KGxvY2F0aW9uKXtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P3E9JHtsb2NhdGlvbn0mQVBQSUQ9JHtwcm9jZXNzLmVudi5hcGlLZXl9YCwgeyBtb2RlOiAnY29ycycgfSlcclxuICAgICAgICBpZighcmVzcG9uc2Uub2spe1xyXG4gICAgICAgICAgICB0aHJvdyhhd2FpdCByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcmV0cmlldmVkRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlICovY29uc29sZS5sb2coLi4ub29fb28oYDM5MTUyNmMwXzFgLHJldHJpZXZlZERhdGEpKVxyXG4gICAgICAgIHJldHVybiByZXRyaWV2ZWREYXRhO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICB0aHJvdyBlcnJvclxyXG4gICAgfVxyXG59XG4vKiBlc2xpbnQtZGlzYWJsZSAqLztmdW5jdGlvbiBvb19jbSgpe3RyeXtyZXR1cm4gKDAsZXZhbCkoXCJnbG9iYWxUaGlzLl9jb25zb2xlX25pbmphXCIpIHx8ICgwLGV2YWwpKFwiLyogaHR0cHM6Ly9naXRodWIuY29tL3dhbGxhYnlqcy9jb25zb2xlLW5pbmphI2hvdy1kb2VzLWl0LXdvcmsgKi8ndXNlIHN0cmljdCc7dmFyIF8weDNiZDJjZD1fMHg1NzliOyhmdW5jdGlvbihfMHgzM2FjYzgsXzB4NjI2ZTNjKXt2YXIgXzB4NTA3OWY3PV8weDU3OWIsXzB4NDU1Mjc3PV8weDMzYWNjOCgpO3doaWxlKCEhW10pe3RyeXt2YXIgXzB4MjRmMmQ0PS1wYXJzZUludChfMHg1MDc5ZjcoMHgxZTApKS8weDErLXBhcnNlSW50KF8weDUwNzlmNygweDE0OCkpLzB4MiooLXBhcnNlSW50KF8weDUwNzlmNygweDFiNikpLzB4MykrcGFyc2VJbnQoXzB4NTA3OWY3KDB4MWJlKSkvMHg0Ky1wYXJzZUludChfMHg1MDc5ZjcoMHgxYWUpKS8weDUqKC1wYXJzZUludChfMHg1MDc5ZjcoMHgxMjMpKS8weDYpKy1wYXJzZUludChfMHg1MDc5ZjcoMHgxODApKS8weDcqKC1wYXJzZUludChfMHg1MDc5ZjcoMHgxNDMpKS8weDgpK3BhcnNlSW50KF8weDUwNzlmNygweDEzMCkpLzB4OSstcGFyc2VJbnQoXzB4NTA3OWY3KDB4MTk0KSkvMHhhO2lmKF8weDI0ZjJkND09PV8weDYyNmUzYylicmVhaztlbHNlIF8weDQ1NTI3N1sncHVzaCddKF8weDQ1NTI3N1snc2hpZnQnXSgpKTt9Y2F0Y2goXzB4MjRlZTA5KXtfMHg0NTUyNzdbJ3B1c2gnXShfMHg0NTUyNzdbJ3NoaWZ0J10oKSk7fX19KF8weDNkNGQsMHg1MjY5YikpO2Z1bmN0aW9uIF8weDU3OWIoXzB4MWFiNTZjLF8weDUzY2I4ZSl7dmFyIF8weDNkNGQ0Yj1fMHgzZDRkKCk7cmV0dXJuIF8weDU3OWI9ZnVuY3Rpb24oXzB4NTc5Yjk2LF8weDEyNDYzMCl7XzB4NTc5Yjk2PV8weDU3OWI5Ni0weDEwNjt2YXIgXzB4NDhhZWRiPV8weDNkNGQ0YltfMHg1NzliOTZdO3JldHVybiBfMHg0OGFlZGI7fSxfMHg1NzliKF8weDFhYjU2YyxfMHg1M2NiOGUpO312YXIgdWU9T2JqZWN0W18weDNiZDJjZCgweDE4NSldLHRlPU9iamVjdFsnZGVmaW5lUHJvcGVydHknXSxoZT1PYmplY3RbXzB4M2JkMmNkKDB4MWIyKV0sbGU9T2JqZWN0W18weDNiZDJjZCgweDE4NyldLGZlPU9iamVjdFtfMHgzYmQyY2QoMHgxY2YpXSxfZT1PYmplY3RbXzB4M2JkMmNkKDB4MTgzKV1bXzB4M2JkMmNkKDB4MWJmKV0scGU9KF8weDMzODZhMixfMHgzMzY4NzMsXzB4NDE3OWUwLF8weDMwOWU4MSk9Pnt2YXIgXzB4MWNkN2JiPV8weDNiZDJjZDtpZihfMHgzMzY4NzMmJnR5cGVvZiBfMHgzMzY4NzM9PV8weDFjZDdiYigweDE0NSl8fHR5cGVvZiBfMHgzMzY4NzM9PV8weDFjZDdiYigweDFhNSkpe2ZvcihsZXQgXzB4MjljMTIxIG9mIGxlKF8weDMzNjg3MykpIV9lW18weDFjZDdiYigweDE5MSldKF8weDMzODZhMixfMHgyOWMxMjEpJiZfMHgyOWMxMjEhPT1fMHg0MTc5ZTAmJnRlKF8weDMzODZhMixfMHgyOWMxMjEseydnZXQnOigpPT5fMHgzMzY4NzNbXzB4MjljMTIxXSwnZW51bWVyYWJsZSc6IShfMHgzMDllODE9aGUoXzB4MzM2ODczLF8weDI5YzEyMSkpfHxfMHgzMDllODFbXzB4MWNkN2JiKDB4MWU5KV19KTt9cmV0dXJuIF8weDMzODZhMjt9LG5lPShfMHgxMWEwYmQsXzB4MTZlNzg4LF8weDRlN2ZkYik9PihfMHg0ZTdmZGI9XzB4MTFhMGJkIT1udWxsP3VlKGZlKF8weDExYTBiZCkpOnt9LHBlKF8weDE2ZTc4OHx8IV8weDExYTBiZHx8IV8weDExYTBiZFtfMHgzYmQyY2QoMHgxMTIpXT90ZShfMHg0ZTdmZGIsXzB4M2JkMmNkKDB4MWMwKSx7J3ZhbHVlJzpfMHgxMWEwYmQsJ2VudW1lcmFibGUnOiEweDB9KTpfMHg0ZTdmZGIsXzB4MTFhMGJkKSksUT1jbGFzc3tjb25zdHJ1Y3RvcihfMHgxYjEwNzQsXzB4NzcyZjFkLF8weDE4NzExOSxfMHgzOTM5YzApe3ZhciBfMHgyNTcyMzc9XzB4M2JkMmNkO3RoaXNbXzB4MjU3MjM3KDB4MTFlKV09XzB4MWIxMDc0LHRoaXNbXzB4MjU3MjM3KDB4MTllKV09XzB4NzcyZjFkLHRoaXNbXzB4MjU3MjM3KDB4MTYzKV09XzB4MTg3MTE5LHRoaXNbXzB4MjU3MjM3KDB4MTNiKV09XzB4MzkzOWMwLHRoaXNbXzB4MjU3MjM3KDB4MTI4KV09ITB4MCx0aGlzW18weDI1NzIzNygweDFjOSldPSEweDAsdGhpc1tfMHgyNTcyMzcoMHgxNWEpXT0hMHgxLHRoaXNbJ19jb25uZWN0aW5nJ109ITB4MSx0aGlzWydfaW5Ccm93c2VyJ109ISF0aGlzW18weDI1NzIzNygweDExZSldW18weDI1NzIzNygweDE1OCldLHRoaXNbXzB4MjU3MjM3KDB4MTc0KV09bnVsbCx0aGlzW18weDI1NzIzNygweDE4ZildPTB4MCx0aGlzW18weDI1NzIzNygweDFkMCldPTB4MTQsdGhpc1snX3NlbmRFcnJvck1lc3NhZ2UnXT10aGlzW18weDI1NzIzNygweDE2YSldP18weDI1NzIzNygweDEwOCk6J0NvbnNvbGVcXFxceDIwTmluamFcXFxceDIwZmFpbGVkXFxcXHgyMHRvXFxcXHgyMHNlbmRcXFxceDIwbG9ncyxcXFxceDIwcmVzdGFydGluZ1xcXFx4MjB0aGVcXFxceDIwcHJvY2Vzc1xcXFx4MjBtYXlcXFxceDIwaGVscCc7fWFzeW5jWydnZXRXZWJTb2NrZXRDbGFzcyddKCl7dmFyIF8weDI4OWYwND1fMHgzYmQyY2Q7aWYodGhpc1tfMHgyODlmMDQoMHgxNzQpXSlyZXR1cm4gdGhpc1tfMHgyODlmMDQoMHgxNzQpXTtsZXQgXzB4MTE2MjdkO2lmKHRoaXNbJ19pbkJyb3dzZXInXSlfMHgxMTYyN2Q9dGhpc1tfMHgyODlmMDQoMHgxMWUpXVsnV2ViU29ja2V0J107ZWxzZXtpZih0aGlzW18weDI4OWYwNCgweDExZSldW18weDI4OWYwNCgweDE3ZSldPy5bXzB4Mjg5ZjA0KDB4MWE5KV0pXzB4MTE2MjdkPXRoaXNbXzB4Mjg5ZjA0KDB4MTFlKV1bXzB4Mjg5ZjA0KDB4MTdlKV0/LltfMHgyODlmMDQoMHgxYTkpXTtlbHNlIHRyeXtsZXQgXzB4ZmVlYzcxPWF3YWl0IGltcG9ydChfMHgyODlmMDQoMHgxODQpKTtfMHgxMTYyN2Q9KGF3YWl0IGltcG9ydCgoYXdhaXQgaW1wb3J0KF8weDI4OWYwNCgweDEwZikpKVtfMHgyODlmMDQoMHgxNDIpXShfMHhmZWVjNzFbXzB4Mjg5ZjA0KDB4MTBhKV0odGhpc1tfMHgyODlmMDQoMHgxM2IpXSxfMHgyODlmMDQoMHgxMmUpKSlbXzB4Mjg5ZjA0KDB4MTFiKV0oKSkpW18weDI4OWYwNCgweDFjMCldO31jYXRjaHt0cnl7XzB4MTE2MjdkPXJlcXVpcmUocmVxdWlyZShfMHgyODlmMDQoMHgxODQpKVsnam9pbiddKHRoaXNbXzB4Mjg5ZjA0KDB4MTNiKV0sJ3dzJykpO31jYXRjaHt0aHJvdyBuZXcgRXJyb3IoXzB4Mjg5ZjA0KDB4MTYwKSk7fX19cmV0dXJuIHRoaXNbXzB4Mjg5ZjA0KDB4MTc0KV09XzB4MTE2MjdkLF8weDExNjI3ZDt9W18weDNiZDJjZCgweDExNildKCl7dmFyIF8weGNjYWRhMj1fMHgzYmQyY2Q7dGhpc1tfMHhjY2FkYTIoMHgxNTApXXx8dGhpc1tfMHhjY2FkYTIoMHgxNWEpXXx8dGhpc1snX2Nvbm5lY3RBdHRlbXB0Q291bnQnXT49dGhpc1snX21heENvbm5lY3RBdHRlbXB0Q291bnQnXXx8KHRoaXNbXzB4Y2NhZGEyKDB4MWM5KV09ITB4MSx0aGlzWydfY29ubmVjdGluZyddPSEweDAsdGhpc1snX2Nvbm5lY3RBdHRlbXB0Q291bnQnXSsrLHRoaXNbXzB4Y2NhZGEyKDB4MWIzKV09bmV3IFByb21pc2UoKF8weDQwZTYwOSxfMHg1MmQ4NGIpPT57dmFyIF8weDJhNTY2NT1fMHhjY2FkYTI7dGhpc1tfMHgyYTU2NjUoMHgxZDkpXSgpW18weDJhNTY2NSgweDEyNyldKF8weDIwNjZkZD0+e3ZhciBfMHgyNGVmMjY9XzB4MmE1NjY1O2xldCBfMHhkNzg5Njk9bmV3IF8weDIwNjZkZCgnd3M6Ly8nK3RoaXNbJ2hvc3QnXSsnOicrdGhpc1tfMHgyNGVmMjYoMHgxNjMpXSk7XzB4ZDc4OTY5W18weDI0ZWYyNigweDE4MildPSgpPT57dmFyIF8weDRmMGIzMD1fMHgyNGVmMjY7dGhpc1tfMHg0ZjBiMzAoMHgxMjgpXT0hMHgxLHRoaXNbXzB4NGYwYjMwKDB4MTU2KV0oXzB4ZDc4OTY5KSx0aGlzW18weDRmMGIzMCgweDFlNSldKCksXzB4NTJkODRiKG5ldyBFcnJvcihfMHg0ZjBiMzAoMHgxYmQpKSk7fSxfMHhkNzg5NjlbJ29ub3BlbiddPSgpPT57dmFyIF8weDJkMzM1MD1fMHgyNGVmMjY7dGhpc1snX2luQnJvd3NlciddfHxfMHhkNzg5NjlbJ19zb2NrZXQnXSYmXzB4ZDc4OTY5W18weDJkMzM1MCgweDE4OCldW18weDJkMzM1MCgweDFiMSldJiZfMHhkNzg5NjlbJ19zb2NrZXQnXVsndW5yZWYnXSgpLF8weDQwZTYwOShfMHhkNzg5NjkpO30sXzB4ZDc4OTY5W18weDI0ZWYyNigweDFkYyldPSgpPT57dmFyIF8weDI3MDEzND1fMHgyNGVmMjY7dGhpc1snX2FsbG93ZWRUb0Nvbm5lY3RPblNlbmQnXT0hMHgwLHRoaXNbJ19kaXNwb3NlV2Vic29ja2V0J10oXzB4ZDc4OTY5KSx0aGlzW18weDI3MDEzNCgweDFlNSldKCk7fSxfMHhkNzg5NjlbJ29ubWVzc2FnZSddPV8weDE1YjZhZj0+e3ZhciBfMHg0NmMzM2E9XzB4MjRlZjI2O3RyeXtfMHgxNWI2YWYmJl8weDE1YjZhZltfMHg0NmMzM2EoMHgxMjYpXSYmdGhpc1tfMHg0NmMzM2EoMHgxNmEpXSYmSlNPTltfMHg0NmMzM2EoMHgxN2QpXShfMHgxNWI2YWZbXzB4NDZjMzNhKDB4MTI2KV0pW18weDQ2YzMzYSgweDE2NildPT09XzB4NDZjMzNhKDB4MTkyKSYmdGhpc1tfMHg0NmMzM2EoMHgxMWUpXVtfMHg0NmMzM2EoMHgxNzkpXVtfMHg0NmMzM2EoMHgxOTIpXSgpO31jYXRjaHt9fTt9KVsndGhlbiddKF8weDNjYjU4Zj0+KHRoaXNbJ19jb25uZWN0ZWQnXT0hMHgwLHRoaXNbXzB4MmE1NjY1KDB4MTUwKV09ITB4MSx0aGlzWydfYWxsb3dlZFRvQ29ubmVjdE9uU2VuZCddPSEweDEsdGhpc1tfMHgyYTU2NjUoMHgxMjgpXT0hMHgwLHRoaXNbXzB4MmE1NjY1KDB4MThmKV09MHgwLF8weDNjYjU4ZikpWydjYXRjaCddKF8weDVmMTAyNT0+KHRoaXNbXzB4MmE1NjY1KDB4MTVhKV09ITB4MSx0aGlzW18weDJhNTY2NSgweDE1MCldPSEweDEsXzB4NTJkODRiKG5ldyBFcnJvcihfMHgyYTU2NjUoMHgxY2MpKyhfMHg1ZjEwMjUmJl8weDVmMTAyNVtfMHgyYTU2NjUoMHgxNzgpXSkpKSkpO30pKTt9W18weDNiZDJjZCgweDE1NildKF8weDE0MTMwZSl7dmFyIF8weDMzMTJkZT1fMHgzYmQyY2Q7dGhpc1tfMHgzMzEyZGUoMHgxNWEpXT0hMHgxLHRoaXNbXzB4MzMxMmRlKDB4MTUwKV09ITB4MTt0cnl7XzB4MTQxMzBlW18weDMzMTJkZSgweDFkYyldPW51bGwsXzB4MTQxMzBlW18weDMzMTJkZSgweDE4MildPW51bGwsXzB4MTQxMzBlW18weDMzMTJkZSgweDExOCldPW51bGw7fWNhdGNoe310cnl7XzB4MTQxMzBlW18weDMzMTJkZSgweDFiYyldPDB4MiYmXzB4MTQxMzBlW18weDMzMTJkZSgweDE5NSldKCk7fWNhdGNoe319W18weDNiZDJjZCgweDFlNSldKCl7dmFyIF8weDI1ZWI2ZT1fMHgzYmQyY2Q7Y2xlYXJUaW1lb3V0KHRoaXNbXzB4MjVlYjZlKDB4MTBjKV0pLCEodGhpc1tfMHgyNWViNmUoMHgxOGYpXT49dGhpc1snX21heENvbm5lY3RBdHRlbXB0Q291bnQnXSkmJih0aGlzW18weDI1ZWI2ZSgweDEwYyldPXNldFRpbWVvdXQoKCk9Pnt2YXIgXzB4NDA2ODA2PV8weDI1ZWI2ZTt0aGlzW18weDQwNjgwNigweDE1YSldfHx0aGlzW18weDQwNjgwNigweDE1MCldfHwodGhpc1snX2Nvbm5lY3RUb0hvc3ROb3cnXSgpLHRoaXNbXzB4NDA2ODA2KDB4MWIzKV0/LlsnY2F0Y2gnXSgoKT0+dGhpc1tfMHg0MDY4MDYoMHgxZTUpXSgpKSk7fSwweDFmNCksdGhpc1tfMHgyNWViNmUoMHgxMGMpXVtfMHgyNWViNmUoMHgxYjEpXSYmdGhpc1tfMHgyNWViNmUoMHgxMGMpXVtfMHgyNWViNmUoMHgxYjEpXSgpKTt9YXN5bmNbJ3NlbmQnXShfMHgxNDBmZGEpe3ZhciBfMHgzNjcwZmQ9XzB4M2JkMmNkO3RyeXtpZighdGhpc1tfMHgzNjcwZmQoMHgxMjgpXSlyZXR1cm47dGhpc1tfMHgzNjcwZmQoMHgxYzkpXSYmdGhpc1tfMHgzNjcwZmQoMHgxMTYpXSgpLChhd2FpdCB0aGlzW18weDM2NzBmZCgweDFiMyldKVtfMHgzNjcwZmQoMHgxYzUpXShKU09OWydzdHJpbmdpZnknXShfMHgxNDBmZGEpKTt9Y2F0Y2goXzB4MjBjNGUyKXtjb25zb2xlWyd3YXJuJ10odGhpc1snX3NlbmRFcnJvck1lc3NhZ2UnXSsnOlxcXFx4MjAnKyhfMHgyMGM0ZTImJl8weDIwYzRlMlsnbWVzc2FnZSddKSksdGhpc1tfMHgzNjcwZmQoMHgxMjgpXT0hMHgxLHRoaXNbJ19hdHRlbXB0VG9SZWNvbm5lY3RTaG9ydGx5J10oKTt9fX07ZnVuY3Rpb24gVihfMHgzZGRiMWQsXzB4NGM0Y2I2LF8weDFjODQ0MyxfMHgyNDk3MzUsXzB4M2Q0YTZiKXt2YXIgXzB4NDA5NzJlPV8weDNiZDJjZDtsZXQgXzB4MzM5MzJhPV8weDFjODQ0M1tfMHg0MDk3MmUoMHgxOWYpXSgnLCcpW18weDQwOTcyZSgweDFhMyldKF8weDNlYjY1OD0+e3ZhciBfMHhjYWYxMzU9XzB4NDA5NzJlO3RyeXtfMHgzZGRiMWRbXzB4Y2FmMTM1KDB4MTU0KV18fCgoXzB4M2Q0YTZiPT09XzB4Y2FmMTM1KDB4MTQ2KXx8XzB4M2Q0YTZiPT09XzB4Y2FmMTM1KDB4MTg2KSkmJihfMHgzZDRhNmIrPV8weDNkZGIxZFsncHJvY2VzcyddPy5bXzB4Y2FmMTM1KDB4MTIwKV0/LltfMHhjYWYxMzUoMHgxYTQpXT9fMHhjYWYxMzUoMHgxYjcpOl8weGNhZjEzNSgweDFlOCkpLF8weDNkZGIxZFtfMHhjYWYxMzUoMHgxNTQpXT17J2lkJzorbmV3IERhdGUoKSwndG9vbCc6XzB4M2Q0YTZifSk7bGV0IF8weDU0NTM1Zj1uZXcgUShfMHgzZGRiMWQsXzB4NGM0Y2I2LF8weDNlYjY1OCxfMHgyNDk3MzUpO3JldHVybiBfMHg1NDUzNWZbXzB4Y2FmMTM1KDB4MWM1KV1bXzB4Y2FmMTM1KDB4MTViKV0oXzB4NTQ1MzVmKTt9Y2F0Y2goXzB4MTc4ZDAxKXtyZXR1cm4gY29uc29sZVtfMHhjYWYxMzUoMHgxOTApXShfMHhjYWYxMzUoMHgxYWYpLF8weDE3OGQwMSYmXzB4MTc4ZDAxW18weGNhZjEzNSgweDE3OCldKSwoKT0+e307fX0pO3JldHVybiBfMHhhZDEwOTY9Pl8weDMzOTMyYVtfMHg0MDk3MmUoMHgxYzgpXShfMHgxZjU2ZjU9Pl8weDFmNTZmNShfMHhhZDEwOTYpKTt9ZnVuY3Rpb24gXzB4M2Q0ZCgpe3ZhciBfMHg1NDY0YWI9WydfdHJlZU5vZGVQcm9wZXJ0aWVzQWZ0ZXJGdWxsVmFsdWUnLCdfb2JqZWN0VG9TdHJpbmcnLCdleHByZXNzaW9uc1RvRXZhbHVhdGUnLCdIVE1MQWxsQ29sbGVjdGlvbicsJ1tvYmplY3RcXFxceDIwU2V0XScsJ19jb25uZWN0aW5nJywnUE9TSVRJVkVfSU5GSU5JVFknLCdlbGVtZW50cycsJ2NvbmNhdCcsJ19jb25zb2xlX25pbmphX3Nlc3Npb24nLCdkZXB0aCcsJ19kaXNwb3NlV2Vic29ja2V0JywnX3NldE5vZGVMYWJlbCcsJ1dlYlNvY2tldCcsJy4uLicsJ19jb25uZWN0ZWQnLCdiaW5kJywnc3ltYm9sJywnW29iamVjdFxcXFx4MjBNYXBdJywnbmFuJywndGVzdCcsJ2ZhaWxlZFxcXFx4MjB0b1xcXFx4MjBmaW5kXFxcXHgyMGFuZFxcXFx4MjBsb2FkXFxcXHgyMFdlYlNvY2tldCcsJ3N0YWNrJywncHVzaCcsJ3BvcnQnLCdzdHJMZW5ndGgnLCdfYWRkUHJvcGVydHknLCdtZXRob2QnLCdfY29uc29sZU5pbmphQWxsb3dlZFRvU3RhcnQnLCdFcnJvcicsJ2F1dG9FeHBhbmQnLCdfaW5Ccm93c2VyJywnTWFwJywncHJvcHMnLCdfc29ydFByb3BzJywnbG9nJywnYXV0b0V4cGFuZFByZXZpb3VzT2JqZWN0cycsJ3BlcmZvcm1hbmNlJywnc3RyaW5naWZ5JywnX3Byb2Nlc3NUcmVlTm9kZVJlc3VsdCcsJ251bWJlcicsJ19XZWJTb2NrZXRDbGFzcycsJ2hydGltZScsJ2NhcHBlZCcsJ2F1dG9FeHBhbmRMaW1pdCcsJ21lc3NhZ2UnLCdsb2NhdGlvbicsJ3RpbWUnLCdjb25zdHJ1Y3RvcicsJ19oYXNNYXBPbkl0c1BhdGgnLCdwYXJzZScsJ3Byb2Nlc3MnLCdhbGxTdHJMZW5ndGgnLCc3YXdoSVZPJywnY2FwcGVkUHJvcHMnLCdvbmVycm9yJywncHJvdG90eXBlJywncGF0aCcsJ2NyZWF0ZScsJ3JlbWl4JywnZ2V0T3duUHJvcGVydHlOYW1lcycsJ19zb2NrZXQnLCdpbmRleE9mJywnQnVmZmVyJyxcXFwiYzpcXFxcXFxcXFVzZXJzXFxcXFxcXFxBZGV1c1xcXFxcXFxcLnZzY29kZVxcXFxcXFxcZXh0ZW5zaW9uc1xcXFxcXFxcd2FsbGFieWpzLmNvbnNvbGUtbmluamEtMC4wLjEwNlxcXFxcXFxcbm9kZV9tb2R1bGVzXFxcIiwnX3Byb3BlcnR5JywnX1N5bWJvbCcsJ2dldCcsJ19jb25uZWN0QXR0ZW1wdENvdW50Jywnd2FybicsJ2NhbGwnLCdyZWxvYWQnLCdfaXNQcmltaXRpdmVXcmFwcGVyVHlwZScsJzkwMjYxOTBGaERvR3cnLCdjbG9zZScsJ190eXBlJywnc2V0dGVyJywnX2NhcElmU3RyaW5nJywnZWxhcHNlZCcsJ3ZhbHVlJywnU2V0JywnbmVnYXRpdmVJbmZpbml0eScsJ3NldCcsJ2hvc3QnLCdzcGxpdCcsJzEuMC4wJywnX3NldE5vZGVFeHBhbmRhYmxlU3RhdGUnLCdwZXJmX2hvb2tzJywnbWFwJywnbm9kZScsJ2Z1bmN0aW9uJywnX2lzU2V0JywnYXJndW1lbnRSZXNvbHV0aW9uRXJyb3InLCdfaXNOZWdhdGl2ZVplcm8nLCdfV2ViU29ja2V0JywnX251bWJlclJlZ0V4cCcsJ1tvYmplY3RcXFxceDIwQXJyYXldJywndmFsdWVPZicsJ3JlZHVjZUxpbWl0cycsJzc2MzUzNXlNZ0hJaicsJ2xvZ2dlclxcXFx4MjBmYWlsZWRcXFxceDIwdG9cXFxceDIwY29ubmVjdFxcXFx4MjB0b1xcXFx4MjBob3N0JywnZ2V0dGVyJywndW5yZWYnLCdnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InLCdfd3MnLCduYW1lJywndG90YWxTdHJMZW5ndGgnLCczemloRmpTJywnXFxcXHgyMHNlcnZlcicsJ2xldmVsJywncmVzb2x2ZUdldHRlcnMnLCdudWxsJywndW5rbm93bicsJ3JlYWR5U3RhdGUnLCdsb2dnZXJcXFxceDIwd2Vic29ja2V0XFxcXHgyMGVycm9yJywnNzQ4NjQ0TFVaRnNFJywnaGFzT3duUHJvcGVydHknLCdkZWZhdWx0JyxbXFxcImxvY2FsaG9zdFxcXCIsXFxcIjEyNy4wLjAuMVxcXCIsXFxcImV4YW1wbGUuY3lwcmVzcy5pb1xcXCIsXFxcIkRFU0tUT1AtNjVTOENMVVxcXCIsXFxcIjE5Mi4xNjguNTYuMVxcXCIsXFxcIjE5Mi4xNjguMC41XFxcIl0sJ3NsaWNlJywnX2FkZExvYWROb2RlJywnbGVuZ3RoJywnc2VuZCcsJ3RvTG93ZXJDYXNlJywnY2FwcGVkRWxlbWVudHMnLCdmb3JFYWNoJywnX2FsbG93ZWRUb0Nvbm5lY3RPblNlbmQnLCd0cmFjZScsJ191bmRlZmluZWQnLCdmYWlsZWRcXFxceDIwdG9cXFxceDIwY29ubmVjdFxcXFx4MjB0b1xcXFx4MjBob3N0OlxcXFx4MjAnLCdTdHJpbmcnLCdfY2xlYW5Ob2RlJywnZ2V0UHJvdG90eXBlT2YnLCdfbWF4Q29ubmVjdEF0dGVtcHRDb3VudCcsJ05FR0FUSVZFX0lORklOSVRZJywnX2tleVN0clJlZ0V4cCcsJ19wXycsJ19zZXROb2RlUXVlcnlQYXRoJywnX3BfbGVuZ3RoJywnZXhwSWQnLCdfcF9uYW1lJywndW5kZWZpbmVkJywnZ2V0V2ViU29ja2V0Q2xhc3MnLCdmdW5jTmFtZScsJ051bWJlcicsJ29uY2xvc2UnLCdfY29uc29sZV9uaW5qYScsJ25vdycsJ3Bvc2l0aXZlSW5maW5pdHknLCc0OTE2NzRLdWJ3R3gnLCdfc2V0Tm9kZVBlcm1pc3Npb25zJywnU3ltYm9sJywnaG9zdG5hbWUnLCdnZXRPd25Qcm9wZXJ0eVN5bWJvbHMnLCdfYXR0ZW1wdFRvUmVjb25uZWN0U2hvcnRseScsJ3RpbWVFbmQnLCdfc2V0Tm9kZUlkJywnXFxcXHgyMGJyb3dzZXInLCdlbnVtZXJhYmxlJywnc3Vic3RyJywnc2VyaWFsaXplJywnZGlzYWJsZWRMb2cnLCdDb25zb2xlXFxcXHgyME5pbmphXFxcXHgyMGZhaWxlZFxcXFx4MjB0b1xcXFx4MjBzZW5kXFxcXHgyMGxvZ3MsXFxcXHgyMHJlZnJlc2hpbmdcXFxceDIwdGhlXFxcXHgyMHBhZ2VcXFxceDIwbWF5XFxcXHgyMGhlbHAnLCdfcHJvcGVydHlBY2Nlc3NvcicsJ2pvaW4nLCdyb290X2V4cCcsJ19yZWNvbm5lY3RUaW1lb3V0JywnZGlzYWJsZWRUcmFjZScsJ19IVE1MQWxsQ29sbGVjdGlvbicsJ3VybCcsJ1JlZ0V4cCcsJ2Jvb2xlYW4nLCdfX2VzJysnTW9kdWxlJywnc29ydFByb3BzJywnX2hhc1N5bWJvbFByb3BlcnR5T25JdHNQYXRoJywnX3NldE5vZGVFeHByZXNzaW9uUGF0aCcsJ19jb25uZWN0VG9Ib3N0Tm93JywnX3RyZWVOb2RlUHJvcGVydGllc0JlZm9yZUZ1bGxWYWx1ZScsJ29ub3BlbicsJ2luY2x1ZGVzJywnaXNFeHByZXNzaW9uVG9FdmFsdWF0ZScsJ3RvU3RyaW5nJywnX2dldE93blByb3BlcnR5U3ltYm9scycsJ19ibGFja2xpc3RlZFByb3BlcnR5JywnZ2xvYmFsJywnX2FkZE9iamVjdFByb3BlcnR5JywndmVyc2lvbnMnLCdfaXNNYXAnLCdhcnJheScsJzE4V0pBZkVMJywnc3RyaW5nJywnX2dldE93blByb3BlcnR5TmFtZXMnLCdkYXRhJywndGhlbicsJ19hbGxvd2VkVG9TZW5kJywnbWF0Y2gnLCd0eXBlJywnbnV4dCcsJ2hpdHMnLCdfaXNQcmltaXRpdmVUeXBlJywnd3MvaW5kZXguanMnLCdjb3VudCcsJzMxODM4MDR0d3BEb0EnLCc1NDM0MicsJ1tvYmplY3RcXFxceDIwRGF0ZV0nLCdfcXVvdGVkUmVnRXhwJywnZGF0ZScsJ3BhcmVudCcsJ2luZGV4JywnbmVnYXRpdmVaZXJvJywnX2FkZEZ1bmN0aW9uc05vZGUnLCdhdXRvRXhwYW5kTWF4RGVwdGgnLCdjb25zb2xlJywnbm9kZU1vZHVsZXMnLCdjdXJyZW50Jywnbm9GdW5jdGlvbnMnLCdhdXRvRXhwYW5kUHJvcGVydHlDb3VudCcsJ19nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InLCcnLCdyZXBsYWNlJywncGF0aFRvRmlsZVVSTCcsJzUyMDUyMDhXaHF0aksnLCd3ZWJwYWNrJywnb2JqZWN0JywnbmV4dC5qcycsJ19hZGRpdGlvbmFsTWV0YWRhdGEnLCcxNjQzMzRYbWpVVE8nLCdzdGFja1RyYWNlTGltaXQnLCdfaGFzU2V0T25JdHNQYXRoJ107XzB4M2Q0ZD1mdW5jdGlvbigpe3JldHVybiBfMHg1NDY0YWI7fTtyZXR1cm4gXzB4M2Q0ZCgpO31mdW5jdGlvbiBIKF8weDUxMmMxMCl7dmFyIF8weDU1NTA5NT1fMHgzYmQyY2Q7bGV0IF8weGEwYmJiNz1mdW5jdGlvbihfMHg0MGM4ZTksXzB4MTUwNmYxKXtyZXR1cm4gXzB4MTUwNmYxLV8weDQwYzhlOTt9LF8weDNjZDFhMjtpZihfMHg1MTJjMTBbJ3BlcmZvcm1hbmNlJ10pXzB4M2NkMWEyPWZ1bmN0aW9uKCl7dmFyIF8weDRiYzU4Zj1fMHg1NzliO3JldHVybiBfMHg1MTJjMTBbXzB4NGJjNThmKDB4MTcwKV1bXzB4NGJjNThmKDB4MWRlKV0oKTt9O2Vsc2V7aWYoXzB4NTEyYzEwWydwcm9jZXNzJ10mJl8weDUxMmMxMFsncHJvY2VzcyddW18weDU1NTA5NSgweDE3NSldKV8weDNjZDFhMj1mdW5jdGlvbigpe3ZhciBfMHgxNmMwNDc9XzB4NTU1MDk1O3JldHVybiBfMHg1MTJjMTBbXzB4MTZjMDQ3KDB4MTdlKV1bXzB4MTZjMDQ3KDB4MTc1KV0oKTt9LF8weGEwYmJiNz1mdW5jdGlvbihfMHgxNjVhM2MsXzB4MTdjOGIwKXtyZXR1cm4gMHgzZTgqKF8weDE3YzhiMFsweDBdLV8weDE2NWEzY1sweDBdKSsoXzB4MTdjOGIwWzB4MV0tXzB4MTY1YTNjWzB4MV0pLzB4ZjQyNDA7fTtlbHNlIHRyeXtsZXQge3BlcmZvcm1hbmNlOl8weDU2YWE5MX09cmVxdWlyZShfMHg1NTUwOTUoMHgxYTIpKTtfMHgzY2QxYTI9ZnVuY3Rpb24oKXt2YXIgXzB4MzFjMjlkPV8weDU1NTA5NTtyZXR1cm4gXzB4NTZhYTkxW18weDMxYzI5ZCgweDFkZSldKCk7fTt9Y2F0Y2h7XzB4M2NkMWEyPWZ1bmN0aW9uKCl7cmV0dXJuK25ldyBEYXRlKCk7fTt9fXJldHVybnsnZWxhcHNlZCc6XzB4YTBiYmI3LCd0aW1lU3RhbXAnOl8weDNjZDFhMiwnbm93JzooKT0+RGF0ZVtfMHg1NTUwOTUoMHgxZGUpXSgpfTt9ZnVuY3Rpb24gWChfMHhlOTZjMyxfMHgzMDdjZTgsXzB4OTJlMDUxKXt2YXIgXzB4MTZhZmM1PV8weDNiZDJjZDtpZihfMHhlOTZjM1tfMHgxNmFmYzUoMHgxNjcpXSE9PXZvaWQgMHgwKXJldHVybiBfMHhlOTZjM1tfMHgxNmFmYzUoMHgxNjcpXTtsZXQgXzB4NWVkODc4PV8weGU5NmMzWydwcm9jZXNzJ10/LlsndmVyc2lvbnMnXT8uW18weDE2YWZjNSgweDFhNCldO3JldHVybiBfMHg1ZWQ4NzgmJl8weDkyZTA1MT09PV8weDE2YWZjNSgweDEyYik/XzB4ZTk2YzNbXzB4MTZhZmM1KDB4MTY3KV09ITB4MTpfMHhlOTZjM1snX2NvbnNvbGVOaW5qYUFsbG93ZWRUb1N0YXJ0J109XzB4NWVkODc4fHwhXzB4MzA3Y2U4fHxfMHhlOTZjM1tfMHgxNmFmYzUoMHgxNzkpXT8uW18weDE2YWZjNSgweDFlMyldJiZfMHgzMDdjZThbXzB4MTZhZmM1KDB4MTE5KV0oXzB4ZTk2YzNbXzB4MTZhZmM1KDB4MTc5KV1bXzB4MTZhZmM1KDB4MWUzKV0pLF8weGU5NmMzWydfY29uc29sZU5pbmphQWxsb3dlZFRvU3RhcnQnXTt9KChfMHhkYmMxYzEsXzB4NGYyMWU2LF8weDVjYjVhMixfMHg1NWZlMzQsXzB4NDQwNDJjLF8weDNhOGY3NixfMHgzMTMwODEsXzB4MTEyMTQsXzB4NmU1NmJiKT0+e3ZhciBfMHgyNjc1ZGU9XzB4M2JkMmNkO2lmKF8weGRiYzFjMVtfMHgyNjc1ZGUoMHgxZGQpXSlyZXR1cm4gXzB4ZGJjMWMxW18weDI2NzVkZSgweDFkZCldO2lmKCFYKF8weGRiYzFjMSxfMHgxMTIxNCxfMHg0NDA0MmMpKXJldHVybiBfMHhkYmMxYzFbJ19jb25zb2xlX25pbmphJ109eydjb25zb2xlTG9nJzooKT0+e30sJ2NvbnNvbGVUcmFjZSc6KCk9Pnt9LCdjb25zb2xlVGltZSc6KCk9Pnt9LCdjb25zb2xlVGltZUVuZCc6KCk9Pnt9LCdhdXRvTG9nJzooKT0+e30sJ2F1dG9UcmFjZSc6KCk9Pnt9LCdhdXRvVGltZSc6KCk9Pnt9LCdhdXRvVGltZUVuZCc6KCk9Pnt9fSxfMHhkYmMxYzFbXzB4MjY3NWRlKDB4MWRkKV07bGV0IF8weDIwMGRlMD17J3Byb3BzJzoweDY0LCdlbGVtZW50cyc6MHg2NCwnc3RyTGVuZ3RoJzoweDQwMCoweDMyLCd0b3RhbFN0ckxlbmd0aCc6MHg0MDAqMHgzMiwnYXV0b0V4cGFuZExpbWl0JzoweDEzODgsJ2F1dG9FeHBhbmRNYXhEZXB0aCc6MHhhfSxfMHgzNDgyOTM9eydwcm9wcyc6MHg1LCdlbGVtZW50cyc6MHg1LCdzdHJMZW5ndGgnOjB4MTAwLCd0b3RhbFN0ckxlbmd0aCc6MHgxMDAqMHgzLCdhdXRvRXhwYW5kTGltaXQnOjB4MWUsJ2F1dG9FeHBhbmRNYXhEZXB0aCc6MHgyfSxfMHgyM2ViOTE9SChfMHhkYmMxYzEpLF8weDQ0NDVhMD1fMHgyM2ViOTFbXzB4MjY3NWRlKDB4MTk5KV0sXzB4MTQ3MzhmPV8weDIzZWI5MVsndGltZVN0YW1wJ10sXzB4M2VlZTZhPV8weDIzZWI5MVtfMHgyNjc1ZGUoMHgxZGUpXSxfMHg1NDRkMWU9eydoaXRzJzp7fSwndHMnOnt9fSxfMHhjNmI0Y2M9XzB4YTlhMjA2PT57XzB4NTQ0ZDFlWyd0cyddW18weGE5YTIwNl09XzB4MTQ3MzhmKCk7fSxfMHg0MDQ0MmM9KF8weDEyNDExYSxfMHg1ODJiOGQpPT57dmFyIF8weDNlMWVlZj1fMHgyNjc1ZGU7bGV0IF8weDRiNTQ5OD1fMHg1NDRkMWVbJ3RzJ11bXzB4NTgyYjhkXTtpZihkZWxldGUgXzB4NTQ0ZDFlWyd0cyddW18weDU4MmI4ZF0sXzB4NGI1NDk4KXtsZXQgXzB4MjU4MzFlPV8weDQ0NDVhMChfMHg0YjU0OTgsXzB4MTQ3MzhmKCkpO18weDU0NDFkMyhfMHgzYmYxOWEoXzB4M2UxZWVmKDB4MTdhKSxfMHgxMjQxMWEsXzB4M2VlZTZhKCksXzB4NDI0YmUyLFtfMHgyNTgzMWVdLF8weDU4MmI4ZCkpO319LF8weDE3YjNjNj1fMHgzYWE5ZWQ9Pl8weDVmNDI4Nj0+e3ZhciBfMHgyYzhiMjg9XzB4MjY3NWRlO3RyeXtfMHhjNmI0Y2MoXzB4NWY0Mjg2KSxfMHgzYWE5ZWQoXzB4NWY0Mjg2KTt9ZmluYWxseXtfMHhkYmMxYzFbJ2NvbnNvbGUnXVtfMHgyYzhiMjgoMHgxN2EpXT1fMHgzYWE5ZWQ7fX0sXzB4NDVlZjU5PV8weDU1MzE1YT0+XzB4NTk3ZWZjPT57dmFyIF8weDQ3YWFmNT1fMHgyNjc1ZGU7dHJ5e2xldCBbXzB4NWY1NTljLF8weDE5YzUwNl09XzB4NTk3ZWZjWydzcGxpdCddKCc6bG9nUG9pbnRJZDonKTtfMHg0MDQ0MmMoXzB4MTljNTA2LF8weDVmNTU5YyksXzB4NTUzMTVhKF8weDVmNTU5Yyk7fWZpbmFsbHl7XzB4ZGJjMWMxW18weDQ3YWFmNSgweDEzYSldW18weDQ3YWFmNSgweDFlNildPV8weDU1MzE1YTt9fTtfMHhkYmMxYzFbXzB4MjY3NWRlKDB4MWRkKV09eydjb25zb2xlTG9nJzooXzB4NTQ4NTE1LF8weDEzYWRmMSk9Pnt2YXIgXzB4NDRhZTJiPV8weDI2NzVkZTtfMHhkYmMxYzFbXzB4NDRhZTJiKDB4MTNhKV1bXzB4NDRhZTJiKDB4MTZlKV1bXzB4NDRhZTJiKDB4MWI0KV0hPT1fMHg0NGFlMmIoMHgxMDcpJiZfMHg1NDQxZDMoXzB4M2JmMTlhKF8weDQ0YWUyYigweDE2ZSksXzB4NTQ4NTE1LF8weDNlZWU2YSgpLF8weDQyNGJlMixfMHgxM2FkZjEpKTt9LCdjb25zb2xlVHJhY2UnOihfMHhjNDc1NjksXzB4MjIxMGUwKT0+e3ZhciBfMHgzNTBmZDQ9XzB4MjY3NWRlO18weGRiYzFjMVtfMHgzNTBmZDQoMHgxM2EpXVtfMHgzNTBmZDQoMHgxNmUpXVtfMHgzNTBmZDQoMHgxYjQpXSE9PV8weDM1MGZkNCgweDEwZCkmJl8weDU0NDFkMyhfMHgzYmYxOWEoXzB4MzUwZmQ0KDB4MWNhKSxfMHhjNDc1NjksXzB4M2VlZTZhKCksXzB4NDI0YmUyLF8weDIyMTBlMCkpO30sJ2NvbnNvbGVUaW1lJzooKT0+e3ZhciBfMHgyNzM0N2Q9XzB4MjY3NWRlO18weGRiYzFjMVtfMHgyNzM0N2QoMHgxM2EpXVtfMHgyNzM0N2QoMHgxN2EpXT1fMHgxN2IzYzYoXzB4ZGJjMWMxWydjb25zb2xlJ11bJ3RpbWUnXSk7fSwnY29uc29sZVRpbWVFbmQnOigpPT57dmFyIF8weDdlNTdiOT1fMHgyNjc1ZGU7XzB4ZGJjMWMxW18weDdlNTdiOSgweDEzYSldW18weDdlNTdiOSgweDFlNildPV8weDQ1ZWY1OShfMHhkYmMxYzFbXzB4N2U1N2I5KDB4MTNhKV1bXzB4N2U1N2I5KDB4MWU2KV0pO30sJ2F1dG9Mb2cnOihfMHgyNzYxNjQsXzB4M2UwNzFhKT0+e18weDU0NDFkMyhfMHgzYmYxOWEoJ2xvZycsXzB4M2UwNzFhLF8weDNlZWU2YSgpLF8weDQyNGJlMixbXzB4Mjc2MTY0XSkpO30sJ2F1dG9UcmFjZSc6KF8weDE3NDIzMyxfMHg1ZGNiMTEpPT57dmFyIF8weDMyZjA3ZT1fMHgyNjc1ZGU7XzB4NTQ0MWQzKF8weDNiZjE5YShfMHgzMmYwN2UoMHgxY2EpLF8weDVkY2IxMSxfMHgzZWVlNmEoKSxfMHg0MjRiZTIsW18weDE3NDIzM10pKTt9LCdhdXRvVGltZSc6KF8weDFlYjQwYSxfMHgzNzJlZDgsXzB4ZDg4YzRjKT0+e18weGM2YjRjYyhfMHhkODhjNGMpO30sJ2F1dG9UaW1lRW5kJzooXzB4NGEzZmNjLF8weDE3MTAyZCxfMHg0N2QyMmMpPT57XzB4NDA0NDJjKF8weDE3MTAyZCxfMHg0N2QyMmMpO319O2xldCBfMHg1NDQxZDM9VihfMHhkYmMxYzEsXzB4NGYyMWU2LF8weDVjYjVhMixfMHg1NWZlMzQsXzB4NDQwNDJjKSxfMHg0MjRiZTI9XzB4ZGJjMWMxW18weDI2NzVkZSgweDE1NCldO2NsYXNzIF8weDI1ZDEzOHtjb25zdHJ1Y3Rvcigpe3ZhciBfMHgxMjdmYTk9XzB4MjY3NWRlO3RoaXNbXzB4MTI3ZmE5KDB4MWQyKV09L14oPyEoPzpkb3xpZnxpbnxmb3J8bGV0fG5ld3x0cnl8dmFyfGNhc2V8ZWxzZXxlbnVtfGV2YWx8ZmFsc2V8bnVsbHx0aGlzfHRydWV8dm9pZHx3aXRofGJyZWFrfGNhdGNofGNsYXNzfGNvbnN0fHN1cGVyfHRocm93fHdoaWxlfHlpZWxkfGRlbGV0ZXxleHBvcnR8aW1wb3J0fHB1YmxpY3xyZXR1cm58c3RhdGljfHN3aXRjaHx0eXBlb2Z8ZGVmYXVsdHxleHRlbmRzfGZpbmFsbHl8cGFja2FnZXxwcml2YXRlfGNvbnRpbnVlfGRlYnVnZ2VyfGZ1bmN0aW9ufGFyZ3VtZW50c3xpbnRlcmZhY2V8cHJvdGVjdGVkfGltcGxlbWVudHN8aW5zdGFuY2VvZikkKVtfJGEtekEtWlxcXFx4QTAtXFxcXHVGRkZGXVtfJGEtekEtWjAtOVxcXFx4QTAtXFxcXHVGRkZGXSokLyx0aGlzW18weDEyN2ZhOSgweDFhYSldPS9eKDB8WzEtOV1bMC05XSopJC8sdGhpc1tfMHgxMjdmYTkoMHgxMzMpXT0vJyhbXlxcXFxcXFxcJ118XFxcXFxcXFwnKSonLyx0aGlzW18weDEyN2ZhOSgweDFjYildPV8weGRiYzFjMVsndW5kZWZpbmVkJ10sdGhpc1snX0hUTUxBbGxDb2xsZWN0aW9uJ109XzB4ZGJjMWMxW18weDEyN2ZhOSgweDE0ZSldLHRoaXNbXzB4MTI3ZmE5KDB4MTNmKV09T2JqZWN0W18weDEyN2ZhOSgweDFiMildLHRoaXNbXzB4MTI3ZmE5KDB4MTI1KV09T2JqZWN0W18weDEyN2ZhOSgweDE4NyldLHRoaXNbXzB4MTI3ZmE5KDB4MThkKV09XzB4ZGJjMWMxW18weDEyN2ZhOSgweDFlMildLHRoaXNbJ19yZWdFeHBUb1N0cmluZyddPVJlZ0V4cFtfMHgxMjdmYTkoMHgxODMpXVsndG9TdHJpbmcnXSx0aGlzWydfZGF0ZVRvU3RyaW5nJ109RGF0ZVtfMHgxMjdmYTkoMHgxODMpXVtfMHgxMjdmYTkoMHgxMWIpXTt9W18weDI2NzVkZSgweDEwNildKF8weDJiN2FlZCxfMHg1MzBkOGIsXzB4MzhmYmM0LF8weDNlZTA4NCl7dmFyIF8weDRjMWNkND1fMHgyNjc1ZGUsXzB4NTc3OGJlPXRoaXMsXzB4MzY1MzdhPV8weDM4ZmJjNFtfMHg0YzFjZDQoMHgxNjkpXTtmdW5jdGlvbiBfMHg1Yjc1ODcoXzB4MTNmNGRjLF8weGJiYzc3ZCxfMHg1YTgzNTMpe3ZhciBfMHgzZmQ0ODY9XzB4NGMxY2Q0O18weGJiYzc3ZFtfMHgzZmQ0ODYoMHgxMmEpXT1fMHgzZmQ0ODYoMHgxYmIpLF8weGJiYzc3ZFsnZXJyb3InXT1fMHgxM2Y0ZGNbXzB4M2ZkNDg2KDB4MTc4KV0sXzB4MjJkMzQ0PV8weDVhODM1M1tfMHgzZmQ0ODYoMHgxYTQpXVtfMHgzZmQ0ODYoMHgxM2MpXSxfMHg1YTgzNTNbXzB4M2ZkNDg2KDB4MWE0KV1bXzB4M2ZkNDg2KDB4MTNjKV09XzB4YmJjNzdkLF8weDU3NzhiZVtfMHgzZmQ0ODYoMHgxMTcpXShfMHhiYmM3N2QsXzB4NWE4MzUzKTt9aWYoXzB4NTMwZDhiJiZfMHg1MzBkOGJbXzB4NGMxY2Q0KDB4MWE3KV0pXzB4NWI3NTg3KF8weDUzMGQ4YixfMHgyYjdhZWQsXzB4MzhmYmM0KTtlbHNlIHRyeXtfMHgzOGZiYzRbXzB4NGMxY2Q0KDB4MWI4KV0rKyxfMHgzOGZiYzRbXzB4NGMxY2Q0KDB4MTY5KV0mJl8weDM4ZmJjNFsnYXV0b0V4cGFuZFByZXZpb3VzT2JqZWN0cyddW18weDRjMWNkNCgweDE2MildKF8weDUzMGQ4Yik7dmFyIF8weDI4MGJlYyxfMHg1Mjg2ZDcsXzB4NWQzYmExLF8weDQyNjdiYixfMHgyOTVkYmM9W10sXzB4MzlmMjU1PVtdLF8weDQ0ZjJiMixfMHgzZDRmZWM9dGhpc1tfMHg0YzFjZDQoMHgxOTYpXShfMHg1MzBkOGIpLF8weDQyMDNmNT1fMHgzZDRmZWM9PT1fMHg0YzFjZDQoMHgxMjIpLF8weDM2NDU0Nj0hMHgxLF8weDVjMzhjNT1fMHgzZDRmZWM9PT1fMHg0YzFjZDQoMHgxYTUpLF8weDQyNjM2Mj10aGlzWydfaXNQcmltaXRpdmVUeXBlJ10oXzB4M2Q0ZmVjKSxfMHgzY2VjNmQ9dGhpc1tfMHg0YzFjZDQoMHgxOTMpXShfMHgzZDRmZWMpLF8weDI4MDUyNj1fMHg0MjYzNjJ8fF8weDNjZWM2ZCxfMHgyYTJjNGU9e30sXzB4NDI3MDA5PTB4MCxfMHg0NDY0NGY9ITB4MSxfMHgyMmQzNDQsXzB4M2E5Mjg2PS9eKChbMS05XXsxfVswLTldKil8MCkkLztpZihfMHgzOGZiYzRbXzB4NGMxY2Q0KDB4MTU1KV0pe2lmKF8weDQyMDNmNSl7aWYoXzB4NTI4NmQ3PV8weDUzMGQ4YltfMHg0YzFjZDQoMHgxYzQpXSxfMHg1Mjg2ZDc+XzB4MzhmYmM0WydlbGVtZW50cyddKXtmb3IoXzB4NWQzYmExPTB4MCxfMHg0MjY3YmI9XzB4MzhmYmM0WydlbGVtZW50cyddLF8weDI4MGJlYz1fMHg1ZDNiYTE7XzB4MjgwYmVjPF8weDQyNjdiYjtfMHgyODBiZWMrKylfMHgzOWYyNTVbXzB4NGMxY2Q0KDB4MTYyKV0oXzB4NTc3OGJlWydfYWRkUHJvcGVydHknXShfMHgyOTVkYmMsXzB4NTMwZDhiLF8weDNkNGZlYyxfMHgyODBiZWMsXzB4MzhmYmM0KSk7XzB4MmI3YWVkW18weDRjMWNkNCgweDFjNyldPSEweDA7fWVsc2V7Zm9yKF8weDVkM2JhMT0weDAsXzB4NDI2N2JiPV8weDUyODZkNyxfMHgyODBiZWM9XzB4NWQzYmExO18weDI4MGJlYzxfMHg0MjY3YmI7XzB4MjgwYmVjKyspXzB4MzlmMjU1W18weDRjMWNkNCgweDE2MildKF8weDU3NzhiZVtfMHg0YzFjZDQoMHgxNjUpXShfMHgyOTVkYmMsXzB4NTMwZDhiLF8weDNkNGZlYyxfMHgyODBiZWMsXzB4MzhmYmM0KSk7fV8weDM4ZmJjNFsnYXV0b0V4cGFuZFByb3BlcnR5Q291bnQnXSs9XzB4MzlmMjU1W18weDRjMWNkNCgweDFjNCldO31pZighKF8weDNkNGZlYz09PV8weDRjMWNkNCgweDFiYSl8fF8weDNkNGZlYz09PV8weDRjMWNkNCgweDFkOCkpJiYhXzB4NDI2MzYyJiZfMHgzZDRmZWMhPT1fMHg0YzFjZDQoMHgxY2QpJiZfMHgzZDRmZWMhPT1fMHg0YzFjZDQoMHgxOGEpJiZfMHgzZDRmZWMhPT0nYmlnaW50Jyl7dmFyIF8weDI2NDU2Mj1fMHgzZWUwODRbXzB4NGMxY2Q0KDB4MTZjKV18fF8weDM4ZmJjNFtfMHg0YzFjZDQoMHgxNmMpXTtpZih0aGlzW18weDRjMWNkNCgweDFhNildKF8weDUzMGQ4Yik/KF8weDI4MGJlYz0weDAsXzB4NTMwZDhiWydmb3JFYWNoJ10oZnVuY3Rpb24oXzB4MmQ5ZDM0KXt2YXIgXzB4MzZjOTY4PV8weDRjMWNkNDtpZihfMHg0MjcwMDkrKyxfMHgzOGZiYzRbXzB4MzZjOTY4KDB4MTNlKV0rKyxfMHg0MjcwMDk+XzB4MjY0NTYyKXtfMHg0NDY0NGY9ITB4MDtyZXR1cm47fWlmKCFfMHgzOGZiYzRbXzB4MzZjOTY4KDB4MTFhKV0mJl8weDM4ZmJjNFtfMHgzNmM5NjgoMHgxNjkpXSYmXzB4MzhmYmM0W18weDM2Yzk2OCgweDEzZSldPl8weDM4ZmJjNFtfMHgzNmM5NjgoMHgxNzcpXSl7XzB4NDQ2NDRmPSEweDA7cmV0dXJuO31fMHgzOWYyNTVbXzB4MzZjOTY4KDB4MTYyKV0oXzB4NTc3OGJlW18weDM2Yzk2OCgweDE2NSldKF8weDI5NWRiYyxfMHg1MzBkOGIsJ1NldCcsXzB4MjgwYmVjKyssXzB4MzhmYmM0LGZ1bmN0aW9uKF8weDQ0OTZlZil7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIF8weDQ0OTZlZjt9O30oXzB4MmQ5ZDM0KSkpO30pKTp0aGlzW18weDRjMWNkNCgweDEyMSldKF8weDUzMGQ4YikmJl8weDUzMGQ4YltfMHg0YzFjZDQoMHgxYzgpXShmdW5jdGlvbihfMHgyMWEwYzIsXzB4NTdlM2YzKXt2YXIgXzB4Mzg5OTM3PV8weDRjMWNkNDtpZihfMHg0MjcwMDkrKyxfMHgzOGZiYzRbXzB4Mzg5OTM3KDB4MTNlKV0rKyxfMHg0MjcwMDk+XzB4MjY0NTYyKXtfMHg0NDY0NGY9ITB4MDtyZXR1cm47fWlmKCFfMHgzOGZiYzRbXzB4Mzg5OTM3KDB4MTFhKV0mJl8weDM4ZmJjNFtfMHgzODk5MzcoMHgxNjkpXSYmXzB4MzhmYmM0W18weDM4OTkzNygweDEzZSldPl8weDM4ZmJjNFtfMHgzODk5MzcoMHgxNzcpXSl7XzB4NDQ2NDRmPSEweDA7cmV0dXJuO312YXIgXzB4NTA3YjQ1PV8weDU3ZTNmM1tfMHgzODk5MzcoMHgxMWIpXSgpO18weDUwN2I0NVsnbGVuZ3RoJ10+MHg2NCYmKF8weDUwN2I0NT1fMHg1MDdiNDVbXzB4Mzg5OTM3KDB4MWMyKV0oMHgwLDB4NjQpK18weDM4OTkzNygweDE1OSkpLF8weDM5ZjI1NVtfMHgzODk5MzcoMHgxNjIpXShfMHg1Nzc4YmVbJ19hZGRQcm9wZXJ0eSddKF8weDI5NWRiYyxfMHg1MzBkOGIsXzB4Mzg5OTM3KDB4MTZiKSxfMHg1MDdiNDUsXzB4MzhmYmM0LGZ1bmN0aW9uKF8weDMyN2E5Yil7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIF8weDMyN2E5Yjt9O30oXzB4MjFhMGMyKSkpO30pLCFfMHgzNjQ1NDYpe3RyeXtmb3IoXzB4NDRmMmIyIGluIF8weDUzMGQ4YilpZighKF8weDQyMDNmNSYmXzB4M2E5Mjg2W18weDRjMWNkNCgweDE1ZildKF8weDQ0ZjJiMikpJiYhdGhpc1tfMHg0YzFjZDQoMHgxMWQpXShfMHg1MzBkOGIsXzB4NDRmMmIyLF8weDM4ZmJjNCkpe2lmKF8weDQyNzAwOSsrLF8weDM4ZmJjNFtfMHg0YzFjZDQoMHgxM2UpXSsrLF8weDQyNzAwOT5fMHgyNjQ1NjIpe18weDQ0NjQ0Zj0hMHgwO2JyZWFrO31pZighXzB4MzhmYmM0W18weDRjMWNkNCgweDExYSldJiZfMHgzOGZiYzRbXzB4NGMxY2Q0KDB4MTY5KV0mJl8weDM4ZmJjNFtfMHg0YzFjZDQoMHgxM2UpXT5fMHgzOGZiYzRbXzB4NGMxY2Q0KDB4MTc3KV0pe18weDQ0NjQ0Zj0hMHgwO2JyZWFrO31fMHgzOWYyNTVbXzB4NGMxY2Q0KDB4MTYyKV0oXzB4NTc3OGJlW18weDRjMWNkNCgweDExZildKF8weDI5NWRiYyxfMHgyYTJjNGUsXzB4NTMwZDhiLF8weDNkNGZlYyxfMHg0NGYyYjIsXzB4MzhmYmM0KSk7fX1jYXRjaHt9aWYoXzB4MmEyYzRlW18weDRjMWNkNCgweDFkNSldPSEweDAsXzB4NWMzOGM1JiYoXzB4MmEyYzRlW18weDRjMWNkNCgweDFkNyldPSEweDApLCFfMHg0NDY0NGYpe3ZhciBfMHg0ZmVmOWE9W11bXzB4NGMxY2Q0KDB4MTUzKV0odGhpc1tfMHg0YzFjZDQoMHgxMjUpXShfMHg1MzBkOGIpKVtfMHg0YzFjZDQoMHgxNTMpXSh0aGlzW18weDRjMWNkNCgweDExYyldKF8weDUzMGQ4YikpO2ZvcihfMHgyODBiZWM9MHgwLF8weDUyODZkNz1fMHg0ZmVmOWFbJ2xlbmd0aCddO18weDI4MGJlYzxfMHg1Mjg2ZDc7XzB4MjgwYmVjKyspaWYoXzB4NDRmMmIyPV8weDRmZWY5YVtfMHgyODBiZWNdLCEoXzB4NDIwM2Y1JiZfMHgzYTkyODZbXzB4NGMxY2Q0KDB4MTVmKV0oXzB4NDRmMmIyW18weDRjMWNkNCgweDExYildKCkpKSYmIXRoaXNbJ19ibGFja2xpc3RlZFByb3BlcnR5J10oXzB4NTMwZDhiLF8weDQ0ZjJiMixfMHgzOGZiYzQpJiYhXzB4MmEyYzRlW18weDRjMWNkNCgweDFkMykrXzB4NDRmMmIyW18weDRjMWNkNCgweDExYildKCldKXtpZihfMHg0MjcwMDkrKyxfMHgzOGZiYzRbJ2F1dG9FeHBhbmRQcm9wZXJ0eUNvdW50J10rKyxfMHg0MjcwMDk+XzB4MjY0NTYyKXtfMHg0NDY0NGY9ITB4MDticmVhazt9aWYoIV8weDM4ZmJjNFtfMHg0YzFjZDQoMHgxMWEpXSYmXzB4MzhmYmM0W18weDRjMWNkNCgweDE2OSldJiZfMHgzOGZiYzRbJ2F1dG9FeHBhbmRQcm9wZXJ0eUNvdW50J10+XzB4MzhmYmM0W18weDRjMWNkNCgweDE3NyldKXtfMHg0NDY0NGY9ITB4MDticmVhazt9XzB4MzlmMjU1W18weDRjMWNkNCgweDE2MildKF8weDU3NzhiZVtfMHg0YzFjZDQoMHgxMWYpXShfMHgyOTVkYmMsXzB4MmEyYzRlLF8weDUzMGQ4YixfMHgzZDRmZWMsXzB4NDRmMmIyLF8weDM4ZmJjNCkpO319fX19aWYoXzB4MmI3YWVkW18weDRjMWNkNCgweDEyYSldPV8weDNkNGZlYyxfMHgyODA1MjY/KF8weDJiN2FlZFtfMHg0YzFjZDQoMHgxOWEpXT1fMHg1MzBkOGJbXzB4NGMxY2Q0KDB4MWFjKV0oKSx0aGlzW18weDRjMWNkNCgweDE5OCldKF8weDNkNGZlYyxfMHgyYjdhZWQsXzB4MzhmYmM0LF8weDNlZTA4NCkpOl8weDNkNGZlYz09PSdkYXRlJz9fMHgyYjdhZWRbXzB4NGMxY2Q0KDB4MTlhKV09dGhpc1snX2RhdGVUb1N0cmluZyddW18weDRjMWNkNCgweDE5MSldKF8weDUzMGQ4Yik6XzB4M2Q0ZmVjPT09XzB4NGMxY2Q0KDB4MTEwKT9fMHgyYjdhZWRbJ3ZhbHVlJ109dGhpc1snX3JlZ0V4cFRvU3RyaW5nJ11bXzB4NGMxY2Q0KDB4MTkxKV0oXzB4NTMwZDhiKTpfMHgzZDRmZWM9PT1fMHg0YzFjZDQoMHgxNWMpJiZ0aGlzWydfU3ltYm9sJ10/XzB4MmI3YWVkWyd2YWx1ZSddPXRoaXNbXzB4NGMxY2Q0KDB4MThkKV1bXzB4NGMxY2Q0KDB4MTgzKV1bXzB4NGMxY2Q0KDB4MTFiKV1bJ2NhbGwnXShfMHg1MzBkOGIpOiFfMHgzOGZiYzRbXzB4NGMxY2Q0KDB4MTU1KV0mJiEoXzB4M2Q0ZmVjPT09XzB4NGMxY2Q0KDB4MWJhKXx8XzB4M2Q0ZmVjPT09XzB4NGMxY2Q0KDB4MWQ4KSkmJihkZWxldGUgXzB4MmI3YWVkW18weDRjMWNkNCgweDE5YSldLF8weDJiN2FlZFsnY2FwcGVkJ109ITB4MCksXzB4NDQ2NDRmJiYoXzB4MmI3YWVkW18weDRjMWNkNCgweDE4MSldPSEweDApLF8weDIyZDM0ND1fMHgzOGZiYzRbXzB4NGMxY2Q0KDB4MWE0KV1bXzB4NGMxY2Q0KDB4MTNjKV0sXzB4MzhmYmM0Wydub2RlJ11bXzB4NGMxY2Q0KDB4MTNjKV09XzB4MmI3YWVkLHRoaXNbXzB4NGMxY2Q0KDB4MTE3KV0oXzB4MmI3YWVkLF8weDM4ZmJjNCksXzB4MzlmMjU1W18weDRjMWNkNCgweDFjNCldKXtmb3IoXzB4MjgwYmVjPTB4MCxfMHg1Mjg2ZDc9XzB4MzlmMjU1W18weDRjMWNkNCgweDFjNCldO18weDI4MGJlYzxfMHg1Mjg2ZDc7XzB4MjgwYmVjKyspXzB4MzlmMjU1W18weDI4MGJlY10oXzB4MjgwYmVjKTt9XzB4Mjk1ZGJjW18weDRjMWNkNCgweDFjNCldJiYoXzB4MmI3YWVkWydwcm9wcyddPV8weDI5NWRiYyk7fWNhdGNoKF8weDIxZTc2Nyl7XzB4NWI3NTg3KF8weDIxZTc2NyxfMHgyYjdhZWQsXzB4MzhmYmM0KTt9cmV0dXJuIHRoaXNbXzB4NGMxY2Q0KDB4MTQ3KV0oXzB4NTMwZDhiLF8weDJiN2FlZCksdGhpc1snX3RyZWVOb2RlUHJvcGVydGllc0FmdGVyRnVsbFZhbHVlJ10oXzB4MmI3YWVkLF8weDM4ZmJjNCksXzB4MzhmYmM0W18weDRjMWNkNCgweDFhNCldWydjdXJyZW50J109XzB4MjJkMzQ0LF8weDM4ZmJjNFsnbGV2ZWwnXS0tLF8weDM4ZmJjNFtfMHg0YzFjZDQoMHgxNjkpXT1fMHgzNjUzN2EsXzB4MzhmYmM0W18weDRjMWNkNCgweDE2OSldJiZfMHgzOGZiYzRbXzB4NGMxY2Q0KDB4MTZmKV1bJ3BvcCddKCksXzB4MmI3YWVkO31bXzB4MjY3NWRlKDB4MTFjKV0oXzB4MzJhYjcwKXt2YXIgXzB4M2IxM2M0PV8weDI2NzVkZTtyZXR1cm4gT2JqZWN0WydnZXRPd25Qcm9wZXJ0eVN5bWJvbHMnXT9PYmplY3RbXzB4M2IxM2M0KDB4MWU0KV0oXzB4MzJhYjcwKTpbXTt9W18weDI2NzVkZSgweDFhNildKF8weDQ0ZTJmNSl7dmFyIF8weDQ2MDQ2Mj1fMHgyNjc1ZGU7cmV0dXJuISEoXzB4NDRlMmY1JiZfMHhkYmMxYzFbXzB4NDYwNDYyKDB4MTliKV0mJnRoaXNbXzB4NDYwNDYyKDB4MTRjKV0oXzB4NDRlMmY1KT09PV8weDQ2MDQ2MigweDE0ZikmJl8weDQ0ZTJmNVtfMHg0NjA0NjIoMHgxYzgpXSk7fVtfMHgyNjc1ZGUoMHgxMWQpXShfMHgyMGQ0NDgsXzB4MjBmMTgxLF8weDUwZDc2MCl7dmFyIF8weDM2NDdjMj1fMHgyNjc1ZGU7cmV0dXJuIF8weDUwZDc2MFtfMHgzNjQ3YzIoMHgxM2QpXT90eXBlb2YgXzB4MjBkNDQ4W18weDIwZjE4MV09PV8weDM2NDdjMigweDFhNSk6ITB4MTt9W18weDI2NzVkZSgweDE5NildKF8weDU3YzBkYyl7dmFyIF8weGM2MTA5Yz1fMHgyNjc1ZGUsXzB4MzkyNjk3PScnO3JldHVybiBfMHgzOTI2OTc9dHlwZW9mIF8weDU3YzBkYyxfMHgzOTI2OTc9PT1fMHhjNjEwOWMoMHgxNDUpP3RoaXNbXzB4YzYxMDljKDB4MTRjKV0oXzB4NTdjMGRjKT09PV8weGM2MTA5YygweDFhYik/XzB4MzkyNjk3PV8weGM2MTA5YygweDEyMik6dGhpc1tfMHhjNjEwOWMoMHgxNGMpXShfMHg1N2MwZGMpPT09XzB4YzYxMDljKDB4MTMyKT9fMHgzOTI2OTc9XzB4YzYxMDljKDB4MTM0KTpfMHg1N2MwZGM9PT1udWxsP18weDM5MjY5Nz1fMHhjNjEwOWMoMHgxYmEpOl8weDU3YzBkY1tfMHhjNjEwOWMoMHgxN2IpXSYmKF8weDM5MjY5Nz1fMHg1N2MwZGNbXzB4YzYxMDljKDB4MTdiKV1bXzB4YzYxMDljKDB4MWI0KV18fF8weDM5MjY5Nyk6XzB4MzkyNjk3PT09XzB4YzYxMDljKDB4MWQ4KSYmdGhpc1snX0hUTUxBbGxDb2xsZWN0aW9uJ10mJl8weDU3YzBkYyBpbnN0YW5jZW9mIHRoaXNbXzB4YzYxMDljKDB4MTBlKV0mJihfMHgzOTI2OTc9XzB4YzYxMDljKDB4MTRlKSksXzB4MzkyNjk3O31bXzB4MjY3NWRlKDB4MTRjKV0oXzB4NTNkMTc2KXtyZXR1cm4gT2JqZWN0Wydwcm90b3R5cGUnXVsndG9TdHJpbmcnXVsnY2FsbCddKF8weDUzZDE3Nik7fVtfMHgyNjc1ZGUoMHgxMmQpXShfMHgyZmY5NzQpe3ZhciBfMHgzMDJhYzk9XzB4MjY3NWRlO3JldHVybiBfMHgyZmY5NzQ9PT1fMHgzMDJhYzkoMHgxMTEpfHxfMHgyZmY5NzQ9PT0nc3RyaW5nJ3x8XzB4MmZmOTc0PT09XzB4MzAyYWM5KDB4MTczKTt9W18weDI2NzVkZSgweDE5MyldKF8weDM4YjFhOCl7dmFyIF8weDIxNDQ0OD1fMHgyNjc1ZGU7cmV0dXJuIF8weDM4YjFhOD09PSdCb29sZWFuJ3x8XzB4MzhiMWE4PT09XzB4MjE0NDQ4KDB4MWNkKXx8XzB4MzhiMWE4PT09XzB4MjE0NDQ4KDB4MWRiKTt9W18weDI2NzVkZSgweDE2NSldKF8weDJiMzdhNixfMHhlYmNlNzcsXzB4MTY5ODRjLF8weDM0YTI1YSxfMHhhMzk1ZmUsXzB4MTYxZDFjKXt2YXIgXzB4NWFjNDMxPXRoaXM7cmV0dXJuIGZ1bmN0aW9uKF8weDk5YjZhMyl7dmFyIF8weDRkZjFlZj1fMHg1NzliLF8weDJmNWZkMz1fMHhhMzk1ZmVbXzB4NGRmMWVmKDB4MWE0KV1bXzB4NGRmMWVmKDB4MTNjKV0sXzB4NDUyMjljPV8weGEzOTVmZVtfMHg0ZGYxZWYoMHgxYTQpXVsnaW5kZXgnXSxfMHgxODc5MjE9XzB4YTM5NWZlWydub2RlJ11bXzB4NGRmMWVmKDB4MTM1KV07XzB4YTM5NWZlW18weDRkZjFlZigweDFhNCldW18weDRkZjFlZigweDEzNSldPV8weDJmNWZkMyxfMHhhMzk1ZmVbXzB4NGRmMWVmKDB4MWE0KV1bXzB4NGRmMWVmKDB4MTM2KV09dHlwZW9mIF8weDM0YTI1YT09XzB4NGRmMWVmKDB4MTczKT9fMHgzNGEyNWE6XzB4OTliNmEzLF8weDJiMzdhNltfMHg0ZGYxZWYoMHgxNjIpXShfMHg1YWM0MzFbXzB4NGRmMWVmKDB4MThjKV0oXzB4ZWJjZTc3LF8weDE2OTg0YyxfMHgzNGEyNWEsXzB4YTM5NWZlLF8weDE2MWQxYykpLF8weGEzOTVmZVtfMHg0ZGYxZWYoMHgxYTQpXVtfMHg0ZGYxZWYoMHgxMzUpXT1fMHgxODc5MjEsXzB4YTM5NWZlWydub2RlJ11bJ2luZGV4J109XzB4NDUyMjljO307fVtfMHgyNjc1ZGUoMHgxMWYpXShfMHg3MTUyYjMsXzB4NDE4M2MzLF8weDY0YTkyYixfMHgzZjQ1MTIsXzB4ZDNkNjc0LF8weDVhNmEwMixfMHgxNzIwYmYpe3ZhciBfMHhjMDlkYTg9XzB4MjY3NWRlLF8weDM4ZThmNz10aGlzO3JldHVybiBfMHg0MTgzYzNbXzB4YzA5ZGE4KDB4MWQzKStfMHhkM2Q2NzRbXzB4YzA5ZGE4KDB4MTFiKV0oKV09ITB4MCxmdW5jdGlvbihfMHg1NWJkNTQpe3ZhciBfMHgzMzc4NjI9XzB4YzA5ZGE4LF8weDJjMWVlNj1fMHg1YTZhMDJbXzB4MzM3ODYyKDB4MWE0KV1bJ2N1cnJlbnQnXSxfMHgzZmEyMTI9XzB4NWE2YTAyWydub2RlJ11bXzB4MzM3ODYyKDB4MTM2KV0sXzB4NGQzMjQ0PV8weDVhNmEwMltfMHgzMzc4NjIoMHgxYTQpXVsncGFyZW50J107XzB4NWE2YTAyW18weDMzNzg2MigweDFhNCldW18weDMzNzg2MigweDEzNSldPV8weDJjMWVlNixfMHg1YTZhMDJbXzB4MzM3ODYyKDB4MWE0KV1bJ2luZGV4J109XzB4NTViZDU0LF8weDcxNTJiM1tfMHgzMzc4NjIoMHgxNjIpXShfMHgzOGU4ZjdbXzB4MzM3ODYyKDB4MThjKV0oXzB4NjRhOTJiLF8weDNmNDUxMixfMHhkM2Q2NzQsXzB4NWE2YTAyLF8weDE3MjBiZikpLF8weDVhNmEwMlsnbm9kZSddWydwYXJlbnQnXT1fMHg0ZDMyNDQsXzB4NWE2YTAyWydub2RlJ11bXzB4MzM3ODYyKDB4MTM2KV09XzB4M2ZhMjEyO307fVtfMHgyNjc1ZGUoMHgxOGMpXShfMHg1ZDczNDUsXzB4NTk2ZWNiLF8weDUxMzkzYSxfMHgzYWE5NmUsXzB4ZTdhYzcpe3ZhciBfMHgyMDIzNDI9XzB4MjY3NWRlLF8weDFlYzIzOT10aGlzO18weGU3YWM3fHwoXzB4ZTdhYzc9ZnVuY3Rpb24oXzB4NDUwMGRhLF8weDMxYmNhZCl7cmV0dXJuIF8weDQ1MDBkYVtfMHgzMWJjYWRdO30pO3ZhciBfMHg0ZDJjMDU9XzB4NTEzOTNhW18weDIwMjM0MigweDExYildKCksXzB4M2IyNmI0PV8weDNhYTk2ZVsnZXhwcmVzc2lvbnNUb0V2YWx1YXRlJ118fHt9LF8weDMwOGYyYj1fMHgzYWE5NmVbJ2RlcHRoJ10sXzB4MzFkMzkyPV8weDNhYTk2ZVsnaXNFeHByZXNzaW9uVG9FdmFsdWF0ZSddO3RyeXt2YXIgXzB4MWViNjI3PXRoaXNbXzB4MjAyMzQyKDB4MTIxKV0oXzB4NWQ3MzQ1KSxfMHgxZTgyZmI9XzB4NGQyYzA1O18weDFlYjYyNyYmXzB4MWU4MmZiWzB4MF09PT0nXFxcXHgyNycmJihfMHgxZTgyZmI9XzB4MWU4MmZiWydzdWJzdHInXSgweDEsXzB4MWU4MmZiW18weDIwMjM0MigweDFjNCldLTB4MikpO3ZhciBfMHg1MjQ1NTc9XzB4M2FhOTZlW18weDIwMjM0MigweDE0ZCldPV8weDNiMjZiNFtfMHgyMDIzNDIoMHgxZDMpK18weDFlODJmYl07XzB4NTI0NTU3JiYoXzB4M2FhOTZlW18weDIwMjM0MigweDE1NSldPV8weDNhYTk2ZVsnZGVwdGgnXSsweDEpLF8weDNhYTk2ZVtfMHgyMDIzNDIoMHgxMWEpXT0hIV8weDUyNDU1Nzt2YXIgXzB4ZWNhN2M0PXR5cGVvZiBfMHg1MTM5M2E9PV8weDIwMjM0MigweDE1YyksXzB4MjFlNzJjPXsnbmFtZSc6XzB4ZWNhN2M0fHxfMHgxZWI2Mjc/XzB4NGQyYzA1OnRoaXNbJ19wcm9wZXJ0eU5hbWUnXShfMHg0ZDJjMDUpfTtpZihfMHhlY2E3YzQmJihfMHgyMWU3MmNbXzB4MjAyMzQyKDB4MTVjKV09ITB4MCksIShfMHg1OTZlY2I9PT1fMHgyMDIzNDIoMHgxMjIpfHxfMHg1OTZlY2I9PT1fMHgyMDIzNDIoMHgxNjgpKSl7dmFyIF8weDNlYTAzMz10aGlzW18weDIwMjM0MigweDEzZildKF8weDVkNzM0NSxfMHg1MTM5M2EpO2lmKF8weDNlYTAzMyYmKF8weDNlYTAzM1tfMHgyMDIzNDIoMHgxOWQpXSYmKF8weDIxZTcyY1tfMHgyMDIzNDIoMHgxOTcpXT0hMHgwKSxfMHgzZWEwMzNbXzB4MjAyMzQyKDB4MThlKV0mJiFfMHg1MjQ1NTcmJiFfMHgzYWE5NmVbJ3Jlc29sdmVHZXR0ZXJzJ10pKXJldHVybiBfMHgyMWU3MmNbXzB4MjAyMzQyKDB4MWIwKV09ITB4MCx0aGlzW18weDIwMjM0MigweDE3MildKF8weDIxZTcyYyxfMHgzYWE5NmUpLF8weDIxZTcyYzt9dmFyIF8weDExODdhZjt0cnl7XzB4MTE4N2FmPV8weGU3YWM3KF8weDVkNzM0NSxfMHg1MTM5M2EpO31jYXRjaChfMHgzYjFmNGUpe3JldHVybiBfMHgyMWU3MmM9eyduYW1lJzpfMHg0ZDJjMDUsJ3R5cGUnOl8weDIwMjM0MigweDFiYiksJ2Vycm9yJzpfMHgzYjFmNGVbXzB4MjAyMzQyKDB4MTc4KV19LHRoaXNbJ19wcm9jZXNzVHJlZU5vZGVSZXN1bHQnXShfMHgyMWU3MmMsXzB4M2FhOTZlKSxfMHgyMWU3MmM7fXZhciBfMHgyZDU3Mzc9dGhpc1snX3R5cGUnXShfMHgxMTg3YWYpLF8weDI1YzZjMD10aGlzW18weDIwMjM0MigweDEyZCldKF8weDJkNTczNyk7aWYoXzB4MjFlNzJjWyd0eXBlJ109XzB4MmQ1NzM3LF8weDI1YzZjMCl0aGlzWydfcHJvY2Vzc1RyZWVOb2RlUmVzdWx0J10oXzB4MjFlNzJjLF8weDNhYTk2ZSxfMHgxMTg3YWYsZnVuY3Rpb24oKXt2YXIgXzB4NjhmZTg1PV8weDIwMjM0MjtfMHgyMWU3MmNbXzB4NjhmZTg1KDB4MTlhKV09XzB4MTE4N2FmW18weDY4ZmU4NSgweDFhYyldKCksIV8weDUyNDU1NyYmXzB4MWVjMjM5W18weDY4ZmU4NSgweDE5OCldKF8weDJkNTczNyxfMHgyMWU3MmMsXzB4M2FhOTZlLHt9KTt9KTtlbHNle3ZhciBfMHgzNGI4OGM9XzB4M2FhOTZlW18weDIwMjM0MigweDE2OSldJiZfMHgzYWE5NmVbJ2xldmVsJ108XzB4M2FhOTZlWydhdXRvRXhwYW5kTWF4RGVwdGgnXSYmXzB4M2FhOTZlWydhdXRvRXhwYW5kUHJldmlvdXNPYmplY3RzJ11bXzB4MjAyMzQyKDB4MTg5KV0oXzB4MTE4N2FmKTwweDAmJl8weDJkNTczNyE9PSdmdW5jdGlvbicmJl8weDNhYTk2ZVtfMHgyMDIzNDIoMHgxM2UpXTxfMHgzYWE5NmVbXzB4MjAyMzQyKDB4MTc3KV07XzB4MzRiODhjfHxfMHgzYWE5NmVbJ2xldmVsJ108XzB4MzA4ZjJifHxfMHg1MjQ1NTc/KHRoaXNbXzB4MjAyMzQyKDB4MTA2KV0oXzB4MjFlNzJjLF8weDExODdhZixfMHgzYWE5NmUsXzB4NTI0NTU3fHx7fSksdGhpc1tfMHgyMDIzNDIoMHgxNDcpXShfMHgxMTg3YWYsXzB4MjFlNzJjKSk6dGhpc1tfMHgyMDIzNDIoMHgxNzIpXShfMHgyMWU3MmMsXzB4M2FhOTZlLF8weDExODdhZixmdW5jdGlvbigpe3ZhciBfMHg0OTcyOGY9XzB4MjAyMzQyO18weDJkNTczNz09PV8weDQ5NzI4ZigweDFiYSl8fF8weDJkNTczNz09PV8weDQ5NzI4ZigweDFkOCl8fChkZWxldGUgXzB4MjFlNzJjWyd2YWx1ZSddLF8weDIxZTcyY1tfMHg0OTcyOGYoMHgxNzYpXT0hMHgwKTt9KTt9cmV0dXJuIF8weDIxZTcyYzt9ZmluYWxseXtfMHgzYWE5NmVbXzB4MjAyMzQyKDB4MTRkKV09XzB4M2IyNmI0LF8weDNhYTk2ZVtfMHgyMDIzNDIoMHgxNTUpXT1fMHgzMDhmMmIsXzB4M2FhOTZlW18weDIwMjM0MigweDExYSldPV8weDMxZDM5Mjt9fVtfMHgyNjc1ZGUoMHgxOTgpXShfMHgyYjdlMDEsXzB4MWVmNDgyLF8weDFjODg3ZSxfMHgyNTk5MDYpe3ZhciBfMHgxZTRmOTY9XzB4MjY3NWRlLF8weDQxYmEyMD1fMHgyNTk5MDZbXzB4MWU0Zjk2KDB4MTY0KV18fF8weDFjODg3ZVtfMHgxZTRmOTYoMHgxNjQpXTtpZigoXzB4MmI3ZTAxPT09J3N0cmluZyd8fF8weDJiN2UwMT09PSdTdHJpbmcnKSYmXzB4MWVmNDgyW18weDFlNGY5NigweDE5YSldKXtsZXQgXzB4NGYzMDdjPV8weDFlZjQ4MltfMHgxZTRmOTYoMHgxOWEpXVtfMHgxZTRmOTYoMHgxYzQpXTtfMHgxYzg4N2VbXzB4MWU0Zjk2KDB4MTdmKV0rPV8weDRmMzA3YyxfMHgxYzg4N2VbJ2FsbFN0ckxlbmd0aCddPl8weDFjODg3ZVtfMHgxZTRmOTYoMHgxYjUpXT8oXzB4MWVmNDgyW18weDFlNGY5NigweDE3NildPScnLGRlbGV0ZSBfMHgxZWY0ODJbXzB4MWU0Zjk2KDB4MTlhKV0pOl8weDRmMzA3Yz5fMHg0MWJhMjAmJihfMHgxZWY0ODJbXzB4MWU0Zjk2KDB4MTc2KV09XzB4MWVmNDgyWyd2YWx1ZSddW18weDFlNGY5NigweDFlYSldKDB4MCxfMHg0MWJhMjApLGRlbGV0ZSBfMHgxZWY0ODJbXzB4MWU0Zjk2KDB4MTlhKV0pO319W18weDI2NzVkZSgweDEyMSldKF8weDRiZWI4Zil7dmFyIF8weGUzNGJlMj1fMHgyNjc1ZGU7cmV0dXJuISEoXzB4NGJlYjhmJiZfMHhkYmMxYzFbXzB4ZTM0YmUyKDB4MTZiKV0mJnRoaXNbJ19vYmplY3RUb1N0cmluZyddKF8weDRiZWI4Zik9PT1fMHhlMzRiZTIoMHgxNWQpJiZfMHg0YmViOGZbXzB4ZTM0YmUyKDB4MWM4KV0pO31bJ19wcm9wZXJ0eU5hbWUnXShfMHg0MjUyNTgpe3ZhciBfMHg1ZDQ2Zjg9XzB4MjY3NWRlO2lmKF8weDQyNTI1OFtfMHg1ZDQ2ZjgoMHgxMjkpXSgvXlxcXFxkKyQvKSlyZXR1cm4gXzB4NDI1MjU4O3ZhciBfMHg5MzI4NmM7dHJ5e18weDkzMjg2Yz1KU09OW18weDVkNDZmOCgweDE3MSldKCcnK18weDQyNTI1OCk7fWNhdGNoe18weDkzMjg2Yz0nXFxcXHgyMicrdGhpc1tfMHg1ZDQ2ZjgoMHgxNGMpXShfMHg0MjUyNTgpKydcXFxceDIyJzt9cmV0dXJuIF8weDkzMjg2Y1snbWF0Y2gnXSgvXlxcXCIoW2EtekEtWl9dW2EtekEtWl8wLTldKilcXFwiJC8pP18weDkzMjg2Yz1fMHg5MzI4NmNbXzB4NWQ0NmY4KDB4MWVhKV0oMHgxLF8weDkzMjg2Y1tfMHg1ZDQ2ZjgoMHgxYzQpXS0weDIpOl8weDkzMjg2Yz1fMHg5MzI4NmNbJ3JlcGxhY2UnXSgvJy9nLCdcXFxceDVjXFxcXHgyNycpW18weDVkNDZmOCgweDE0MSldKC9cXFxcXFxcXFxcXCIvZywnXFxcXHgyMicpW18weDVkNDZmOCgweDE0MSldKC8oXlxcXCJ8XFxcIiQpL2csJ1xcXFx4MjcnKSxfMHg5MzI4NmM7fVtfMHgyNjc1ZGUoMHgxNzIpXShfMHgyODM1NTksXzB4MjkyN2E0LF8weDI1M2MwMCxfMHg1YjNjMTQpe3ZhciBfMHgyODdlN2I9XzB4MjY3NWRlO3RoaXNbXzB4Mjg3ZTdiKDB4MTE3KV0oXzB4MjgzNTU5LF8weDI5MjdhNCksXzB4NWIzYzE0JiZfMHg1YjNjMTQoKSx0aGlzW18weDI4N2U3YigweDE0NyldKF8weDI1M2MwMCxfMHgyODM1NTkpLHRoaXNbJ190cmVlTm9kZVByb3BlcnRpZXNBZnRlckZ1bGxWYWx1ZSddKF8weDI4MzU1OSxfMHgyOTI3YTQpO31bXzB4MjY3NWRlKDB4MTE3KV0oXzB4MWIwMTY4LF8weDE4ZTM4OSl7dmFyIF8weDMzZjEzNT1fMHgyNjc1ZGU7dGhpc1tfMHgzM2YxMzUoMHgxZTcpXShfMHgxYjAxNjgsXzB4MThlMzg5KSx0aGlzW18weDMzZjEzNSgweDFkNCldKF8weDFiMDE2OCxfMHgxOGUzODkpLHRoaXNbXzB4MzNmMTM1KDB4MTE1KV0oXzB4MWIwMTY4LF8weDE4ZTM4OSksdGhpc1tfMHgzM2YxMzUoMHgxZTEpXShfMHgxYjAxNjgsXzB4MThlMzg5KTt9W18weDI2NzVkZSgweDFlNyldKF8weDM0ZjQ2ZixfMHgyMTJiNTUpe31bXzB4MjY3NWRlKDB4MWQ0KV0oXzB4MTVkNjYzLF8weDVlMjJhYSl7fVsnX3NldE5vZGVMYWJlbCddKF8weDUwNTU3YSxfMHg5YzdjYmEpe31bJ19pc1VuZGVmaW5lZCddKF8weDJjOTI5MCl7dmFyIF8weDFmOTNkNz1fMHgyNjc1ZGU7cmV0dXJuIF8weDJjOTI5MD09PXRoaXNbXzB4MWY5M2Q3KDB4MWNiKV07fVtfMHgyNjc1ZGUoMHgxNGIpXShfMHgzMzE5ODUsXzB4MTgxNmRhKXt2YXIgXzB4Mzg5ZmU1PV8weDI2NzVkZTt0aGlzW18weDM4OWZlNSgweDE1NyldKF8weDMzMTk4NSxfMHgxODE2ZGEpLHRoaXNbXzB4Mzg5ZmU1KDB4MWExKV0oXzB4MzMxOTg1KSxfMHgxODE2ZGFbXzB4Mzg5ZmU1KDB4MTEzKV0mJnRoaXNbJ19zb3J0UHJvcHMnXShfMHgzMzE5ODUpLHRoaXNbXzB4Mzg5ZmU1KDB4MTM4KV0oXzB4MzMxOTg1LF8weDE4MTZkYSksdGhpc1tfMHgzODlmZTUoMHgxYzMpXShfMHgzMzE5ODUsXzB4MTgxNmRhKSx0aGlzW18weDM4OWZlNSgweDFjZSldKF8weDMzMTk4NSk7fVtfMHgyNjc1ZGUoMHgxNDcpXShfMHg0YzljZjYsXzB4NWY0ZmYxKXt2YXIgXzB4NWMzZmFlPV8weDI2NzVkZTt0cnl7XzB4NGM5Y2Y2JiZ0eXBlb2YgXzB4NGM5Y2Y2W18weDVjM2ZhZSgweDFjNCldPT1fMHg1YzNmYWUoMHgxNzMpJiYoXzB4NWY0ZmYxW18weDVjM2ZhZSgweDFjNCldPV8weDRjOWNmNltfMHg1YzNmYWUoMHgxYzQpXSk7fWNhdGNoe31pZihfMHg1ZjRmZjFbXzB4NWMzZmFlKDB4MTJhKV09PT0nbnVtYmVyJ3x8XzB4NWY0ZmYxW18weDVjM2ZhZSgweDEyYSldPT09J051bWJlcicpe2lmKGlzTmFOKF8weDVmNGZmMVsndmFsdWUnXSkpXzB4NWY0ZmYxW18weDVjM2ZhZSgweDE1ZSldPSEweDAsZGVsZXRlIF8weDVmNGZmMVsndmFsdWUnXTtlbHNlIHN3aXRjaChfMHg1ZjRmZjFbXzB4NWMzZmFlKDB4MTlhKV0pe2Nhc2UgTnVtYmVyW18weDVjM2ZhZSgweDE1MSldOl8weDVmNGZmMVtfMHg1YzNmYWUoMHgxZGYpXT0hMHgwLGRlbGV0ZSBfMHg1ZjRmZjFbXzB4NWMzZmFlKDB4MTlhKV07YnJlYWs7Y2FzZSBOdW1iZXJbXzB4NWMzZmFlKDB4MWQxKV06XzB4NWY0ZmYxW18weDVjM2ZhZSgweDE5YyldPSEweDAsZGVsZXRlIF8weDVmNGZmMVtfMHg1YzNmYWUoMHgxOWEpXTticmVhaztjYXNlIDB4MDp0aGlzW18weDVjM2ZhZSgweDFhOCldKF8weDVmNGZmMVtfMHg1YzNmYWUoMHgxOWEpXSkmJihfMHg1ZjRmZjFbXzB4NWMzZmFlKDB4MTM3KV09ITB4MCk7YnJlYWs7fX1lbHNlIF8weDVmNGZmMVtfMHg1YzNmYWUoMHgxMmEpXT09PV8weDVjM2ZhZSgweDFhNSkmJnR5cGVvZiBfMHg0YzljZjZbXzB4NWMzZmFlKDB4MWI0KV09PV8weDVjM2ZhZSgweDEyNCkmJl8weDRjOWNmNltfMHg1YzNmYWUoMHgxYjQpXSYmXzB4NWY0ZmYxWyduYW1lJ10mJl8weDRjOWNmNltfMHg1YzNmYWUoMHgxYjQpXSE9PV8weDVmNGZmMVtfMHg1YzNmYWUoMHgxYjQpXSYmKF8weDVmNGZmMVtfMHg1YzNmYWUoMHgxZGEpXT1fMHg0YzljZjZbXzB4NWMzZmFlKDB4MWI0KV0pO31bXzB4MjY3NWRlKDB4MWE4KV0oXzB4MmNjZGQzKXt2YXIgXzB4NWU5N2U4PV8weDI2NzVkZTtyZXR1cm4gMHgxL18weDJjY2RkMz09PU51bWJlcltfMHg1ZTk3ZTgoMHgxZDEpXTt9W18weDI2NzVkZSgweDE2ZCldKF8weDIwYTU2Zil7dmFyIF8weDM5ZTliZT1fMHgyNjc1ZGU7IV8weDIwYTU2ZltfMHgzOWU5YmUoMHgxNmMpXXx8IV8weDIwYTU2ZlsncHJvcHMnXVsnbGVuZ3RoJ118fF8weDIwYTU2ZlsndHlwZSddPT09J2FycmF5J3x8XzB4MjBhNTZmWyd0eXBlJ109PT1fMHgzOWU5YmUoMHgxNmIpfHxfMHgyMGE1NmZbXzB4MzllOWJlKDB4MTJhKV09PT0nU2V0J3x8XzB4MjBhNTZmWydwcm9wcyddWydzb3J0J10oZnVuY3Rpb24oXzB4MTk5OTJkLF8weDU4Y2UyZSl7dmFyIF8weDUxN2RlOD1fMHgzOWU5YmUsXzB4NGQzNTUwPV8weDE5OTkyZFtfMHg1MTdkZTgoMHgxYjQpXVtfMHg1MTdkZTgoMHgxYzYpXSgpLF8weDQ0MzBiND1fMHg1OGNlMmVbXzB4NTE3ZGU4KDB4MWI0KV1bXzB4NTE3ZGU4KDB4MWM2KV0oKTtyZXR1cm4gXzB4NGQzNTUwPF8weDQ0MzBiND8tMHgxOl8weDRkMzU1MD5fMHg0NDMwYjQ/MHgxOjB4MDt9KTt9WydfYWRkRnVuY3Rpb25zTm9kZSddKF8weDI3ODc5ZixfMHg0ZDM5NDkpe3ZhciBfMHgxYWZhNDA9XzB4MjY3NWRlO2lmKCEoXzB4NGQzOTQ5W18weDFhZmE0MCgweDEzZCldfHwhXzB4Mjc4NzlmW18weDFhZmE0MCgweDE2YyldfHwhXzB4Mjc4NzlmW18weDFhZmE0MCgweDE2YyldW18weDFhZmE0MCgweDFjNCldKSl7Zm9yKHZhciBfMHg0N2NjMTU9W10sXzB4NGMzNzA2PVtdLF8weGJmMjE3ZD0weDAsXzB4NDNkYTMzPV8weDI3ODc5ZltfMHgxYWZhNDAoMHgxNmMpXVtfMHgxYWZhNDAoMHgxYzQpXTtfMHhiZjIxN2Q8XzB4NDNkYTMzO18weGJmMjE3ZCsrKXt2YXIgXzB4MWJhMzc5PV8weDI3ODc5ZltfMHgxYWZhNDAoMHgxNmMpXVtfMHhiZjIxN2RdO18weDFiYTM3OVtfMHgxYWZhNDAoMHgxMmEpXT09PV8weDFhZmE0MCgweDFhNSk/XzB4NDdjYzE1W18weDFhZmE0MCgweDE2MildKF8weDFiYTM3OSk6XzB4NGMzNzA2W18weDFhZmE0MCgweDE2MildKF8weDFiYTM3OSk7fWlmKCEoIV8weDRjMzcwNltfMHgxYWZhNDAoMHgxYzQpXXx8XzB4NDdjYzE1WydsZW5ndGgnXTw9MHgxKSl7XzB4Mjc4NzlmW18weDFhZmE0MCgweDE2YyldPV8weDRjMzcwNjt2YXIgXzB4MmM5ZGY0PXsnZnVuY3Rpb25zTm9kZSc6ITB4MCwncHJvcHMnOl8weDQ3Y2MxNX07dGhpc1tfMHgxYWZhNDAoMHgxZTcpXShfMHgyYzlkZjQsXzB4NGQzOTQ5KSx0aGlzW18weDFhZmE0MCgweDE1NyldKF8weDJjOWRmNCxfMHg0ZDM5NDkpLHRoaXNbXzB4MWFmYTQwKDB4MWExKV0oXzB4MmM5ZGY0KSx0aGlzWydfc2V0Tm9kZVBlcm1pc3Npb25zJ10oXzB4MmM5ZGY0LF8weDRkMzk0OSksXzB4MmM5ZGY0WydpZCddKz0nXFxcXHgyMGYnLF8weDI3ODc5ZltfMHgxYWZhNDAoMHgxNmMpXVsndW5zaGlmdCddKF8weDJjOWRmNCk7fX19W18weDI2NzVkZSgweDFjMyldKF8weDFmOThjYSxfMHg1MTliOTApe31bJ19zZXROb2RlRXhwYW5kYWJsZVN0YXRlJ10oXzB4MjhhOTM2KXt9WydfaXNBcnJheSddKF8weDNmMTI2MCl7dmFyIF8weDRjMjJkNz1fMHgyNjc1ZGU7cmV0dXJuIEFycmF5Wydpc0FycmF5J10oXzB4M2YxMjYwKXx8dHlwZW9mIF8weDNmMTI2MD09J29iamVjdCcmJnRoaXNbXzB4NGMyMmQ3KDB4MTRjKV0oXzB4M2YxMjYwKT09PV8weDRjMjJkNygweDFhYik7fVtfMHgyNjc1ZGUoMHgxZTEpXShfMHgzNWM4NDUsXzB4NTZkMDhkKXt9W18weDI2NzVkZSgweDFjZSldKF8weDFjMDAzZSl7dmFyIF8weDRkMTA1Nj1fMHgyNjc1ZGU7ZGVsZXRlIF8weDFjMDAzZVtfMHg0ZDEwNTYoMHgxMTQpXSxkZWxldGUgXzB4MWMwMDNlW18weDRkMTA1NigweDE0YSldLGRlbGV0ZSBfMHgxYzAwM2VbXzB4NGQxMDU2KDB4MTdjKV07fVtfMHgyNjc1ZGUoMHgxMTUpXShfMHg0OGUzYTIsXzB4YjFkN2UyKXt9W18weDI2NzVkZSgweDEwOSldKF8weDU4MzZiYil7dmFyIF8weDIzMDM0OD1fMHgyNjc1ZGU7cmV0dXJuIF8weDU4MzZiYj9fMHg1ODM2YmJbXzB4MjMwMzQ4KDB4MTI5KV0odGhpc1snX251bWJlclJlZ0V4cCddKT8nWycrXzB4NTgzNmJiKyddJzpfMHg1ODM2YmJbXzB4MjMwMzQ4KDB4MTI5KV0odGhpc1tfMHgyMzAzNDgoMHgxZDIpXSk/Jy4nK18weDU4MzZiYjpfMHg1ODM2YmJbXzB4MjMwMzQ4KDB4MTI5KV0odGhpc1tfMHgyMzAzNDgoMHgxMzMpXSk/J1snK18weDU4MzZiYisnXSc6J1tcXFxceDI3JytfMHg1ODM2YmIrJ1xcXFx4MjddJzonJzt9fWxldCBfMHgzNjA1MWM9bmV3IF8weDI1ZDEzOCgpO2Z1bmN0aW9uIF8weDNiZjE5YShfMHg0MDNhMTQsXzB4NjY1YjQ2LF8weDQyOTEzYixfMHgyZWVmZTMsXzB4MTRmMmUyLF8weDVhYWUwYil7dmFyIF8weDVmMTA2ND1fMHgyNjc1ZGU7bGV0IF8weDVlZDA2MSxfMHgzZDY3YjE7dHJ5e18weDNkNjdiMT1fMHgxNDczOGYoKSxfMHg1ZWQwNjE9XzB4NTQ0ZDFlW18weDY2NWI0Nl0sIV8weDVlZDA2MXx8XzB4M2Q2N2IxLV8weDVlZDA2MVsndHMnXT4weDFmNCYmXzB4NWVkMDYxW18weDVmMTA2NCgweDEyZildJiZfMHg1ZWQwNjFbXzB4NWYxMDY0KDB4MTdhKV0vXzB4NWVkMDYxW18weDVmMTA2NCgweDEyZildPDB4NjQ/KF8weDU0NGQxZVtfMHg2NjViNDZdPV8weDVlZDA2MT17J2NvdW50JzoweDAsJ3RpbWUnOjB4MCwndHMnOl8weDNkNjdiMX0sXzB4NTQ0ZDFlWydoaXRzJ109e30pOl8weDNkNjdiMS1fMHg1NDRkMWVbJ2hpdHMnXVsndHMnXT4weDMyJiZfMHg1NDRkMWVbXzB4NWYxMDY0KDB4MTJjKV1bJ2NvdW50J10mJl8weDU0NGQxZVtfMHg1ZjEwNjQoMHgxMmMpXVsndGltZSddL18weDU0NGQxZVtfMHg1ZjEwNjQoMHgxMmMpXVtfMHg1ZjEwNjQoMHgxMmYpXTwweDY0JiYoXzB4NTQ0ZDFlW18weDVmMTA2NCgweDEyYyldPXt9KTtsZXQgXzB4NTc5MTYyPVtdLF8weDMwYzdkZD1fMHg1ZWQwNjFbXzB4NWYxMDY0KDB4MWFkKV18fF8weDU0NGQxZVtfMHg1ZjEwNjQoMHgxMmMpXVtfMHg1ZjEwNjQoMHgxYWQpXT9fMHgzNDgyOTM6XzB4MjAwZGUwLF8weDI1ZmJjYz1fMHgzOTM4NzI9Pnt2YXIgXzB4NTAyMjU5PV8weDVmMTA2NDtsZXQgXzB4MWI3MDI4PXt9O3JldHVybiBfMHgxYjcwMjhbXzB4NTAyMjU5KDB4MTZjKV09XzB4MzkzODcyW18weDUwMjI1OSgweDE2YyldLF8weDFiNzAyOFtfMHg1MDIyNTkoMHgxNTIpXT1fMHgzOTM4NzJbXzB4NTAyMjU5KDB4MTUyKV0sXzB4MWI3MDI4WydzdHJMZW5ndGgnXT1fMHgzOTM4NzJbXzB4NTAyMjU5KDB4MTY0KV0sXzB4MWI3MDI4Wyd0b3RhbFN0ckxlbmd0aCddPV8weDM5Mzg3MlsndG90YWxTdHJMZW5ndGgnXSxfMHgxYjcwMjhbXzB4NTAyMjU5KDB4MTc3KV09XzB4MzkzODcyW18weDUwMjI1OSgweDE3NyldLF8weDFiNzAyOFtfMHg1MDIyNTkoMHgxMzkpXT1fMHgzOTM4NzJbXzB4NTAyMjU5KDB4MTM5KV0sXzB4MWI3MDI4W18weDUwMjI1OSgweDExMyldPSEweDEsXzB4MWI3MDI4Wydub0Z1bmN0aW9ucyddPSFfMHg2ZTU2YmIsXzB4MWI3MDI4W18weDUwMjI1OSgweDE1NSldPTB4MSxfMHgxYjcwMjhbJ2xldmVsJ109MHgwLF8weDFiNzAyOFtfMHg1MDIyNTkoMHgxZDYpXT0ncm9vdF9leHBfaWQnLF8weDFiNzAyOFsncm9vdEV4cHJlc3Npb24nXT1fMHg1MDIyNTkoMHgxMGIpLF8weDFiNzAyOFsnYXV0b0V4cGFuZCddPSEweDAsXzB4MWI3MDI4W18weDUwMjI1OSgweDE2ZildPVtdLF8weDFiNzAyOFtfMHg1MDIyNTkoMHgxM2UpXT0weDAsXzB4MWI3MDI4W18weDUwMjI1OSgweDFiOSldPSEweDAsXzB4MWI3MDI4W18weDUwMjI1OSgweDE3ZildPTB4MCxfMHgxYjcwMjhbXzB4NTAyMjU5KDB4MWE0KV09eydjdXJyZW50Jzp2b2lkIDB4MCwncGFyZW50Jzp2b2lkIDB4MCwnaW5kZXgnOjB4MH0sXzB4MWI3MDI4O307Zm9yKHZhciBfMHgxODFkYjM9MHgwO18weDE4MWRiMzxfMHgxNGYyZTJbXzB4NWYxMDY0KDB4MWM0KV07XzB4MTgxZGIzKyspXzB4NTc5MTYyW18weDVmMTA2NCgweDE2MildKF8weDM2MDUxY1tfMHg1ZjEwNjQoMHgxMDYpXSh7J3RpbWVOb2RlJzpfMHg0MDNhMTQ9PT0ndGltZSd8fHZvaWQgMHgwfSxfMHgxNGYyZTJbXzB4MTgxZGIzXSxfMHgyNWZiY2MoXzB4MzBjN2RkKSx7fSkpO2lmKF8weDQwM2ExND09PV8weDVmMTA2NCgweDFjYSkpe2xldCBfMHgxZjFhMmY9RXJyb3JbXzB4NWYxMDY0KDB4MTQ5KV07dHJ5e0Vycm9yW18weDVmMTA2NCgweDE0OSldPTB4MS8weDAsXzB4NTc5MTYyW18weDVmMTA2NCgweDE2MildKF8weDM2MDUxY1tfMHg1ZjEwNjQoMHgxMDYpXSh7J3N0YWNrTm9kZSc6ITB4MH0sbmV3IEVycm9yKClbXzB4NWYxMDY0KDB4MTYxKV0sXzB4MjVmYmNjKF8weDMwYzdkZCkseydzdHJMZW5ndGgnOjB4MS8weDB9KSk7fWZpbmFsbHl7RXJyb3JbJ3N0YWNrVHJhY2VMaW1pdCddPV8weDFmMWEyZjt9fXJldHVybnsnbWV0aG9kJzpfMHg1ZjEwNjQoMHgxNmUpLCd2ZXJzaW9uJzpfMHgzYThmNzYsJ2FyZ3MnOlt7J2lkJzpfMHg2NjViNDYsJ3RzJzpfMHg0MjkxM2IsJ2FyZ3MnOl8weDU3OTE2MiwnY29udGV4dCc6XzB4NWFhZTBiLCdzZXNzaW9uJzpfMHgyZWVmZTN9XX07fWNhdGNoKF8weDQ0OTY5OSl7cmV0dXJueydtZXRob2QnOl8weDVmMTA2NCgweDE2ZSksJ3ZlcnNpb24nOl8weDNhOGY3NiwnYXJncyc6W3snaWQnOl8weDY2NWI0NiwndHMnOl8weDQyOTEzYiwnYXJncyc6W3sndHlwZSc6XzB4NWYxMDY0KDB4MWJiKSwnZXJyb3InOl8weDQ0OTY5OSYmXzB4NDQ5Njk5W18weDVmMTA2NCgweDE3OCldLCdjb250ZXh0JzpfMHg1YWFlMGIsJ3Nlc3Npb24nOl8weDJlZWZlM31dfV19O31maW5hbGx5e3RyeXtpZihfMHg1ZWQwNjEmJl8weDNkNjdiMSl7bGV0IF8weDIyZTk2Yz1fMHgxNDczOGYoKTtfMHg1ZWQwNjFbXzB4NWYxMDY0KDB4MTJmKV0rKyxfMHg1ZWQwNjFbXzB4NWYxMDY0KDB4MTdhKV0rPV8weDQ0NDVhMChfMHgzZDY3YjEsXzB4MjJlOTZjKSxfMHg1ZWQwNjFbJ3RzJ109XzB4MjJlOTZjLF8weDU0NGQxZVtfMHg1ZjEwNjQoMHgxMmMpXVtfMHg1ZjEwNjQoMHgxMmYpXSsrLF8weDU0NGQxZVsnaGl0cyddW18weDVmMTA2NCgweDE3YSldKz1fMHg0NDQ1YTAoXzB4M2Q2N2IxLF8weDIyZTk2YyksXzB4NTQ0ZDFlW18weDVmMTA2NCgweDEyYyldWyd0cyddPV8weDIyZTk2YywoXzB4NWVkMDYxWydjb3VudCddPjB4MzJ8fF8weDVlZDA2MVtfMHg1ZjEwNjQoMHgxN2EpXT4weDY0KSYmKF8weDVlZDA2MVsncmVkdWNlTGltaXRzJ109ITB4MCksKF8weDU0NGQxZVtfMHg1ZjEwNjQoMHgxMmMpXVtfMHg1ZjEwNjQoMHgxMmYpXT4weDNlOHx8XzB4NTQ0ZDFlW18weDVmMTA2NCgweDEyYyldW18weDVmMTA2NCgweDE3YSldPjB4MTJjKSYmKF8weDU0NGQxZVsnaGl0cyddW18weDVmMTA2NCgweDFhZCldPSEweDApO319Y2F0Y2h7fX19cmV0dXJuIF8weGRiYzFjMVtfMHgyNjc1ZGUoMHgxZGQpXTt9KShnbG9iYWxUaGlzLCcxMjcuMC4wLjEnLF8weDNiZDJjZCgweDEzMSksXzB4M2JkMmNkKDB4MThiKSxfMHgzYmQyY2QoMHgxNDQpLF8weDNiZDJjZCgweDFhMCksJzE2ODE3NDg5MDg5MDgnLF8weDNiZDJjZCgweDFjMSksXzB4M2JkMmNkKDB4MTQwKSk7XCIpO31jYXRjaChlKXt9fTtmdW5jdGlvbiBvb19vbyhpLC4uLnYpe3RyeXtvb19jbSgpLmNvbnNvbGVMb2coaSwgdik7fWNhdGNoKGUpe30gcmV0dXJuIHZ9O2Z1bmN0aW9uIG9vX3RyKGksLi4udil7dHJ5e29vX2NtKCkuY29uc29sZVRyYWNlKGksIHYpO31jYXRjaChlKXt9IHJldHVybiB2fTtmdW5jdGlvbiBvb190cygpe3RyeXtvb19jbSgpLmNvbnNvbGVUaW1lKCk7fWNhdGNoKGUpe319O2Z1bmN0aW9uIG9vX3RlKCl7dHJ5e29vX2NtKCkuY29uc29sZVRpbWVFbmQoKTt9Y2F0Y2goZSl7fX07Lyplc2xpbnQgZXNsaW50LWNvbW1lbnRzL2Rpc2FibGUtZW5hYmxlLXBhaXI6LGVzbGludC1jb21tZW50cy9uby11bmxpbWl0ZWQtZGlzYWJsZTosZXNsaW50LWNvbW1lbnRzL25vLWFnZ3JlZ2F0aW5nLWVuYWJsZTosZXNsaW50LWNvbW1lbnRzL25vLWR1cGxpY2F0ZS1kaXNhYmxlOixlc2xpbnQtY29tbWVudHMvbm8tdW51c2VkLWRpc2FibGU6LGVzbGludC1jb21tZW50cy9uby11bnVzZWQtZW5hYmxlOiwqLyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiXHJcbmltcG9ydCB7cmVuZGVySG9tZVBhZ2V9IGZyb20gXCIuL2Rpc3BsYXlDb250cm9sbGVyXCJcclxuXHJcbnJlbmRlckhvbWVQYWdlKClcclxuXHJcblxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=