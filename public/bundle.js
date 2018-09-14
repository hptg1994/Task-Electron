/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("moment-duration-format");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(5);
module.exports = __webpack_require__(6);


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(7);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(1);

var _App = __webpack_require__(8);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(
  _reactRouterDom.HashRouter,
  null,
  _react2.default.createElement(_reactRouterDom.Route, {
    component: function component() {
      return _react2.default.createElement(_App2.default, null);
    }
  })
), document.getElementById("root"));

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _Header = __webpack_require__(9);

var _Header2 = _interopRequireDefault(_Header);

var _TasksIndex = __webpack_require__(10);

var _TasksIndex2 = _interopRequireDefault(_TasksIndex);

var _TasksShow = __webpack_require__(11);

var _TasksShow2 = _interopRequireDefault(_TasksShow);

var _Timer = __webpack_require__(12);

var _Timer2 = _interopRequireDefault(_Timer);

var _Settings = __webpack_require__(13);

var _Settings2 = _interopRequireDefault(_Settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var APP_DATA = JSON.parse(localStorage.getItem("__INITIAL_STATE__"));

var INITIAL_STATE = {
  tasks: [{ id: 1, task: "Build App1", totalTime: 10 }, { id: 2, task: "Build App2", totalTime: 60 }, { id: 3, task: "Build App3", totalTime: 1000 }, { id: 4, task: "Build App4", totalTime: 10000 }, { id: 5, task: "Build App5", totalTime: 100000 }],
  activeTask: null,
  timer: {
    active: false,
    time: 10,
    unit: "seconds",
    display: ""
  }
};

var App = function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.onAppClose = function () {};

    _this.updateTrayText = function (title) {};

    _this.timerHasExpired = function () {};

    _this.handleTimerUpdate = function (newDisplay, reset) {
      _this.setState(function (prevState) {
        var timer = prevState.timer,
            activeTask = prevState.activeTask;
        var active = timer.active;

        var updateTaskTime = active && !reset.reset;
        return {
          timer: _extends({}, timer, { display: newDisplay }),

          activeTask: _extends({}, activeTask, {
            totalTime: updateTaskTime ? activeTask.totalTime + 1 : activeTask.totalTime
          })
        };
      });

      // handler for electron tray title
      _this.updateTrayText(newDisplay);
    };

    _this.handleTimerExpiration = function () {
      _this.setState({
        timer: _extends({}, _this.state.timer, { active: false })
      });
      _this.timerHasExpired(); // handler for electron Notifications
    };

    _this.createTask = function (task) {
      _this.setState({
        tasks: [task].concat(_toConsumableArray(_this.state.tasks))
      });
    };

    _this.deleteTask = function (task) {
      _this.setState({
        tasks: _this.state.tasks.filter(function (item) {
          return item.id !== task.id;
        })
      });
    };

    _this.handleSettingsUpdate = function (newSettings) {
      _this.initializeTimer(newSettings);
      _this.setState({
        timer: _extends({}, _this.state.timer, newSettings, {
          display: _this.timer.display
        })
      });
    };

    _this.handleDataReset = function () {
      _this.setState(_extends({}, INITIAL_STATE));
    };

    _this.handleActivation = function (task) {
      _this.initializeTimer();
      _this.setState({
        tasks: _this.state.tasks.filter(function (item) {
          return item.id !== task.id;
        }),
        activeTask: task,
        timer: _extends({}, _this.state.timer, {
          display: _this.timer.display
        })
      });
    };

    _this.handleDeactivation = function (activeTask) {
      _this.setState({
        tasks: [activeTask].concat(_toConsumableArray(_this.state.tasks)),
        activeTask: null
      });
    };

    _this.handleTimerStart = function () {
      _this.timer.start(function () {
        // sending a callback so there is no delay in rendering start/stop buttons
        _this.setState({
          timer: _extends({}, _this.state.timer, { active: true })
        });
      });
    };

    _this.handleTimerStop = function () {
      _this.timer.stop(function () {
        _this.setState({
          timer: _extends({}, _this.state.timer, { active: false })
        });
      });
    };

    _this.state = APP_DATA || INITIAL_STATE;

    _this.onAppClose();
    return _this;
  }

  // --------------------------------------------------
  // -------- electron event handlers -----------------
  // --------------------------------------------------

  _createClass(App, [{
    key: "componentDidMount",


    // -------- end of electron event handerls ----------

    value: function componentDidMount() {
      this.initializeTimer();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      localStorage.setItem("__INITIAL_STATE__", JSON.stringify(this.state));
    }
  }, {
    key: "initializeTimer",
    value: function initializeTimer() {
      var timerSettings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var time = timerSettings.time,
          unit = timerSettings.unit;

      var timerConfig = {
        duration: time || this.state.timer.time,
        unit: unit || this.state.timer.unit,
        onDisplayChange: this.handleTimerUpdate,
        onTimerExpiration: this.handleTimerExpiration
      };
      this.timer = new _Timer2.default(timerConfig);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          tasks = _state.tasks,
          activeTask = _state.activeTask,
          timer = _state.timer;

      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
          "div",
          { className: "container", style: styles.container },
          _react2.default.createElement(
            _reactRouterDom.Switch,
            null,
            _react2.default.createElement(_reactRouterDom.Route, {
              exact: true,
              path: "/",
              render: function render() {
                return _react2.default.createElement(_TasksIndex2.default, {
                  activeTask: activeTask,
                  onTaskDeactivate: _this2.handleDeactivation,
                  onTimerStart: _this2.handleTimerStart,
                  onTimerStop: _this2.handleTimerStop,
                  timer: timer
                });
              }
            }),
            _react2.default.createElement(_reactRouterDom.Route, {
              path: "/tasks",
              render: function render() {
                return _react2.default.createElement(_TasksShow2.default, {
                  tasks: tasks,
                  activeTask: activeTask,
                  createTask: _this2.createTask,
                  deleteTask: _this2.deleteTask,
                  onTaskActivate: _this2.handleActivation
                });
              }
            }),
            _react2.default.createElement(_reactRouterDom.Route, {
              path: "/settings",
              render: function render() {
                return _react2.default.createElement(_Settings2.default, {
                  timer: timer,
                  handleSubmit: _this2.handleSettingsUpdate,
                  handleDataReset: _this2.handleDataReset
                });
              }
            })
          )
        )
      );
    }
  }]);

  return App;
}(_react.Component);

App.defaultProps = {
  updateTrayText: function updateTrayText() {},
  onTimerExpire: function onTimerExpire() {}
};


var styles = {
  container: {
    height: "88vh"
  }
};

exports.default = App;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    "nav",
    null,
    _react2.default.createElement(
      "div",
      { className: "nav-wrapper" },
      _react2.default.createElement(
        _reactRouterDom.Link,
        {
          to: "/settings",
          className: "brand-logo right",
          style: { cursor: "pointer" }
        },
        _react2.default.createElement(
          "i",
          { className: "material-icons" },
          "settings"
        )
      ),
      _react2.default.createElement(
        "ul",
        null,
        _react2.default.createElement(
          "li",
          null,
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: "/" },
            "Active Task"
          )
        ),
        _react2.default.createElement(
          "li",
          null,
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: "/tasks" },
            "All Tasks"
          )
        )
      )
    )
  );
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TasksIndex = function (_Component) {
  _inherits(TasksIndex, _Component);

  function TasksIndex() {
    _classCallCheck(this, TasksIndex);

    return _possibleConstructorReturn(this, (TasksIndex.__proto__ || Object.getPrototypeOf(TasksIndex)).apply(this, arguments));
  }

  _createClass(TasksIndex, [{
    key: "renderActionButtons",
    value: function renderActionButtons() {
      var _this2 = this;

      if (this.props.timer.active) {
        return _react2.default.createElement(
          "div",
          { style: styles.buttonContainer },
          _react2.default.createElement(
            "button",
            { className: "btn red", onClick: function onClick() {
                return _this2.props.onTimerStop();
              } },
            "Stop Timer"
          )
        );
      }

      return _react2.default.createElement(
        "div",
        { style: styles.buttonContainer },
        _react2.default.createElement(
          "button",
          {
            style: styles.button,
            className: "btn green",
            onClick: function onClick() {
              return _this2.props.onTimerStart();
            }
          },
          "Start Timer"
        ),
        _react2.default.createElement(
          "button",
          {
            className: "btn",
            onClick: function onClick() {
              return _this2.props.onTaskDeactivate(_this2.props.activeTask);
            }
          },
          "Deactivate Task"
        )
      );
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          activeTask = _props.activeTask,
          timer = _props.timer;


      if (!activeTask) {
        return _react2.default.createElement(
          "div",
          { style: styles.container },
          _react2.default.createElement(
            "h3",
            null,
            "No Active tasks."
          )
        );
      }

      return _react2.default.createElement(
        "div",
        { style: styles.container },
        _react2.default.createElement(
          "h2",
          null,
          "Time Left " + timer.display
        ),
        _react2.default.createElement(
          "h4",
          null,
          "Current Task: " + activeTask.task
        ),
        this.renderActionButtons()
      );
    }
  }]);

  return TasksIndex;
}(_react.Component);

var styles = {
  container: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    textAlign: "center"
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column"
  },
  button: {
    marginBottom: "15px"
  }
};

exports.default = TasksIndex;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _moment = __webpack_require__(2);

var _moment2 = _interopRequireDefault(_moment);

__webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TasksShow = function (_Component) {
  _inherits(TasksShow, _Component);

  function TasksShow() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TasksShow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TasksShow.__proto__ || Object.getPrototypeOf(TasksShow)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      task: ""
    }, _this.handleSubmit = function (e) {
      e.preventDefault();
      if (_this.state.task) {
        var task = {
          id: ~~(Math.random() * 99999),
          totalTime: 0,
          task: _this.state.task
        };
        _this.props.createTask(task);
        _this.setState({ task: "" });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TasksShow, [{
    key: "renderActiveTask",
    value: function renderActiveTask() {
      var activeTask = this.props.activeTask;

      if (activeTask) {
        return _react2.default.createElement(
          "li",
          { className: "collection-item avatar", key: activeTask.id },
          _react2.default.createElement(
            "i",
            { className: "material-icons circle green" },
            "grade"
          ),
          _react2.default.createElement(
            "p",
            { className: "title" },
            activeTask.task
          ),
          _react2.default.createElement(
            "p",
            null,
            "Total Time: " + _moment2.default.duration(activeTask.totalTime, "seconds").format("hh:mm:ss", { trim: false })
          )
        );
      }
      return null;
    }
  }, {
    key: "renderTasks",
    value: function renderTasks() {
      var _this2 = this;

      return this.props.tasks.map(function (task) {
        return _react2.default.createElement(
          "li",
          { className: "collection-item avatar", key: task.id },
          _react2.default.createElement(
            "i",
            {
              className: _this2.props.activeTask ? "hide" : "material-icons circle grey",
              style: styles.pointer,
              onClick: function onClick() {
                return _this2.props.onTaskActivate(task);
              }
            },
            "grade"
          ),
          _react2.default.createElement(
            "p",
            { className: "title" },
            task.task
          ),
          _react2.default.createElement(
            "p",
            null,
            "Total Time: " + _moment2.default.duration(task.totalTime, "seconds").format("hh:mm:ss", { trim: false })
          ),
          _react2.default.createElement(
            "i",
            {
              style: styles.pointer,
              className: "material-icons secondary-content",
              onClick: function onClick() {
                return _this2.props.deleteTask(task);
              }
            },
            "delete"
          )
        );
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        "div",
        { style: styles.container },
        _react2.default.createElement(
          "ul",
          { className: "collection with-header" },
          _react2.default.createElement(
            "li",
            { className: "collection-header" },
            _react2.default.createElement(
              "form",
              { onSubmit: this.handleSubmit },
              _react2.default.createElement("input", {
                type: "text",
                placeholder: "Add a task",
                value: this.state.task,
                onChange: function onChange(e) {
                  return _this3.setState({ task: e.target.value });
                }
              })
            )
          ),
          this.renderActiveTask(),
          this.renderTasks()
        )
      );
    }
  }]);

  return TasksShow;
}(_react.Component);

var styles = {
  container: {
    height: "100%",
    overflow: "scroll"
  },
  pointer: {
    cursor: "pointer"
  }
};

exports.default = TasksShow;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _moment = __webpack_require__(2);

var _moment2 = _interopRequireDefault(_moment);

__webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Timer = function () {
  function Timer(config) {
    _classCallCheck(this, Timer);

    var _validateConfigObject = this.validateConfigObject(config),
        duration = _validateConfigObject.duration,
        unit = _validateConfigObject.unit,
        onDisplayChange = _validateConfigObject.onDisplayChange,
        onTimerExpiration = _validateConfigObject.onTimerExpiration;

    this.initialDuration = this.getInitialDuration(duration, unit);
    this.duration = this.initialDuration;
    this.delay = 100;
    this.display = this.getTimeDisplay();
    this.interval = null;
    this.startTime = null;
    this.onDisplayChange = onDisplayChange;
    this.onTimerExpiration = onTimerExpiration;
  }

  _createClass(Timer, [{
    key: "start",
    value: function start(cb) {
      var _this = this;

      if (!this.interval) {
        this.startTime = (0, _moment2.default)();
        this.interval = setInterval(function () {
          _this.duration -= _this.delay;
          _this.updateDisplay();
          _this.listenForExpiration();
        }, this.delay);
        return cb ? cb() : null;
      }
    }
  }, {
    key: "stop",
    value: function stop(cb) {
      if (this.interval) {
        clearInterval(this.interval);
        this.interval = null;
        return cb ? cb() : null;
      }
    }
  }, {
    key: "reset",
    value: function reset() {
      console.log((0, _moment2.default)() - this.startTime);
      this.stop();
      this.duration = this.initialDuration;
      this.updateDisplay(true);
    }
  }, {
    key: "updateDisplay",
    value: function updateDisplay() {
      var reset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      var newDisplay = this.getTimeDisplay();
      if (this.display !== newDisplay) {
        this.display = newDisplay;
        this.onDisplayChange(this.display, { reset: reset });
      }
    }
  }, {
    key: "listenForExpiration",
    value: function listenForExpiration() {
      if (this.duration <= 0) {
        this.reset();
        this.onTimerExpiration();
      }
    }
  }, {
    key: "getInitialDuration",
    value: function getInitialDuration(duration, unit) {
      return _moment2.default.duration(duration, unit).asMilliseconds();
    }
  }, {
    key: "getTimeDisplay",
    value: function getTimeDisplay() {
      return _moment2.default.duration(this.duration).format("hh:mm:ss", { trim: false });
    }
  }, {
    key: "validateConfigObject",
    value: function validateConfigObject(config) {
      var unit = config.unit,
          onDisplayChange = config.onDisplayChange,
          onTimerExpiration = config.onTimerExpiration;


      var duration = parseInt(config.duration);
      if (typeof duration !== "number") {
        throw new TypeError("Timer class requires duration = Number");
      }

      var validUnits = {
        seconds: true,
        minutes: true,
        hours: true
      };

      if (!validUnits[unit]) {
        throw new TypeError("Timer class requires valid unit of time (seconds, minutes, or hours)");
      }

      if (typeof onDisplayChange !== "function" || typeof onTimerExpiration !== "function") {
        throw new TypeError("Timer class requires 2 callback functions: onDisplayChange and onTimerExpiration");
      }

      return { duration: duration, unit: unit, onDisplayChange: onDisplayChange, onTimerExpiration: onTimerExpiration };
    }
  }]);

  return Timer;
}();

exports.default = Timer;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Settings = function (_Component) {
  _inherits(Settings, _Component);

  function Settings(props) {
    _classCallCheck(this, Settings);

    var _this = _possibleConstructorReturn(this, (Settings.__proto__ || Object.getPrototypeOf(Settings)).call(this, props));

    _this.onSubmit = function (e) {
      e.preventDefault();
      _this.props.handleSubmit(_this.state);
    };

    _this.buttonStyle = function () {
      var _this$state = _this.state,
          time = _this$state.time,
          unit = _this$state.unit;

      var propsTime = _this.props.timer.time;
      var propsUnit = _this.props.timer.unit;

      if (time == propsTime && unit == propsUnit) {
        // double equals to avoid type check
        return "btn disabled";
      }

      if (_this.props.timer.active) {
        return "btn disabled";
      }

      return "btn";
    };

    _this.state = {
      time: props.timer.time,
      unit: props.timer.unit
    };
    return _this;
  }

  _createClass(Settings, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        "div",
        { style: styles.container },
        _react2.default.createElement(
          "ul",
          { className: "collection with-header" },
          _react2.default.createElement(
            "li",
            { className: "collection-header" },
            "Settings"
          ),
          _react2.default.createElement(
            "form",
            { onSubmit: this.onSubmit },
            _react2.default.createElement(
              "li",
              { className: "collection-item" },
              _react2.default.createElement(
                "p",
                null,
                "Initial Duration"
              ),
              _react2.default.createElement("input", {
                type: "number",
                min: "1",
                value: this.state.time,
                onChange: function onChange(e) {
                  return _this2.setState({ time: e.target.value });
                }
              })
            ),
            _react2.default.createElement(
              "li",
              { className: "collection-item" },
              _react2.default.createElement(
                "p",
                null,
                "Units"
              ),
              _react2.default.createElement(
                "select",
                {
                  className: "browser-default",
                  value: this.state.unit,
                  onChange: function onChange(e) {
                    return _this2.setState({ unit: e.target.value });
                  }
                },
                _react2.default.createElement(
                  "option",
                  { value: "seconds" },
                  "Seconds"
                ),
                _react2.default.createElement(
                  "option",
                  { value: "minutes" },
                  "Minutes"
                ),
                _react2.default.createElement(
                  "option",
                  { value: "hours" },
                  "Hours"
                )
              )
            ),
            _react2.default.createElement(
              "li",
              { className: "collection-item right" },
              _react2.default.createElement(
                "button",
                { type: "submit", className: this.buttonStyle() },
                "Save"
              )
            )
          )
        ),
        _react2.default.createElement(
          "button",
          { className: "btn red", onClick: this.props.handleDataReset },
          "Reset Data"
        )
      );
    }
  }]);

  return Settings;
}(_react.Component);

var styles = {
  container: {
    display: "flex",
    flexDirection: "column"
  },
  pointer: {
    cursor: "pointer"
  }
};

exports.default = Settings;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZmEwYmU2NDJjNzkyNzRjZjc1MmIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItZG9tXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9tZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9tZW50LWR1cmF0aW9uLWZvcm1hdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXBvbHlmaWxsXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbVwiIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVGFza3NJbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UYXNrc1Nob3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL1RpbWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NldHRpbmdzLmpzIl0sIm5hbWVzIjpbIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIkFQUF9EQVRBIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIklOSVRJQUxfU1RBVEUiLCJ0YXNrcyIsImlkIiwidGFzayIsInRvdGFsVGltZSIsImFjdGl2ZVRhc2siLCJ0aW1lciIsImFjdGl2ZSIsInRpbWUiLCJ1bml0IiwiZGlzcGxheSIsIkFwcCIsInByb3BzIiwib25BcHBDbG9zZSIsInVwZGF0ZVRyYXlUZXh0IiwidGltZXJIYXNFeHBpcmVkIiwiaGFuZGxlVGltZXJVcGRhdGUiLCJuZXdEaXNwbGF5IiwicmVzZXQiLCJzZXRTdGF0ZSIsInByZXZTdGF0ZSIsInVwZGF0ZVRhc2tUaW1lIiwiaGFuZGxlVGltZXJFeHBpcmF0aW9uIiwic3RhdGUiLCJjcmVhdGVUYXNrIiwiZGVsZXRlVGFzayIsImZpbHRlciIsIml0ZW0iLCJoYW5kbGVTZXR0aW5nc1VwZGF0ZSIsImluaXRpYWxpemVUaW1lciIsIm5ld1NldHRpbmdzIiwiaGFuZGxlRGF0YVJlc2V0IiwiaGFuZGxlQWN0aXZhdGlvbiIsImhhbmRsZURlYWN0aXZhdGlvbiIsImhhbmRsZVRpbWVyU3RhcnQiLCJzdGFydCIsImhhbmRsZVRpbWVyU3RvcCIsInN0b3AiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwidGltZXJTZXR0aW5ncyIsInRpbWVyQ29uZmlnIiwiZHVyYXRpb24iLCJvbkRpc3BsYXlDaGFuZ2UiLCJvblRpbWVyRXhwaXJhdGlvbiIsIlRpbWVyIiwic3R5bGVzIiwiY29udGFpbmVyIiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwib25UaW1lckV4cGlyZSIsImhlaWdodCIsImN1cnNvciIsIlRhc2tzSW5kZXgiLCJidXR0b25Db250YWluZXIiLCJvblRpbWVyU3RvcCIsImJ1dHRvbiIsIm9uVGltZXJTdGFydCIsIm9uVGFza0RlYWN0aXZhdGUiLCJyZW5kZXJBY3Rpb25CdXR0b25zIiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwidGV4dEFsaWduIiwibWFyZ2luQm90dG9tIiwiVGFza3NTaG93IiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiTWF0aCIsInJhbmRvbSIsIm1vbWVudCIsImZvcm1hdCIsInRyaW0iLCJtYXAiLCJwb2ludGVyIiwib25UYXNrQWN0aXZhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInJlbmRlckFjdGl2ZVRhc2siLCJyZW5kZXJUYXNrcyIsIm92ZXJmbG93IiwiY29uZmlnIiwidmFsaWRhdGVDb25maWdPYmplY3QiLCJpbml0aWFsRHVyYXRpb24iLCJnZXRJbml0aWFsRHVyYXRpb24iLCJkZWxheSIsImdldFRpbWVEaXNwbGF5IiwiaW50ZXJ2YWwiLCJzdGFydFRpbWUiLCJjYiIsInNldEludGVydmFsIiwidXBkYXRlRGlzcGxheSIsImxpc3RlbkZvckV4cGlyYXRpb24iLCJjbGVhckludGVydmFsIiwiY29uc29sZSIsImxvZyIsImFzTWlsbGlzZWNvbmRzIiwicGFyc2VJbnQiLCJUeXBlRXJyb3IiLCJ2YWxpZFVuaXRzIiwic2Vjb25kcyIsIm1pbnV0ZXMiLCJob3VycyIsIlNldHRpbmdzIiwib25TdWJtaXQiLCJidXR0b25TdHlsZSIsInByb3BzVGltZSIsInByb3BzVW5pdCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDN0RBLGtDOzs7Ozs7QUNBQSw2Qzs7Ozs7O0FDQUEsbUM7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7QUNBQTs7OztBQUNBOzs7O0FBQ0E7O0FBRUE7Ozs7OztBQUVBQSxtQkFBU0MsTUFBVCxDQUNFO0FBQUMsNEJBQUQ7QUFBQTtBQUNFLGdDQUFDLHFCQUFEO0FBQ0UsZUFBVztBQUFBLGFBQ1QsOEJBQUMsYUFBRCxPQURTO0FBQUE7QUFEYjtBQURGLENBREYsRUFRRUMsU0FBU0MsY0FBVCxDQUF3QixNQUF4QixDQVJGLEU7Ozs7OztBQ05BLHNDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7O0FBQ0E7O0FBRUE7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QXNCRTtBQUFBO0FBQUEsZ0JBQUksV0FBVSx1QkFBZDtBQUNFO0FBQUE7QUFBQSxrQkFBUSxNQUFLLFFBQWIsRUFBc0IsV0FBVyxLQUFLNEIsV0FBTCxFQUFqQztBQUFBO0FBQUE7QUFERjtBQXRCRjtBQUpGLFNBREY7QUFnQ0U7QUFBQTtBQUFBLFlBQVEsV0FBVSxTQUFsQixFQUE0QixTQUFTLEtBQUs3RixLQUFMLENBQVdtQixlQUFoRDtBQUFBO0FBQUE7QUFoQ0YsT0FERjtBQXNDRDs7OztFQXZFb0JpQixnQjs7QUEwRXZCLElBQU1GLFNBQVM7QUFDYkMsYUFBVztBQUNUckMsYUFBUyxNQURBO0FBRVRrRCxtQkFBZTtBQUZOLEdBREU7QUFLYmMsV0FBUztBQUNQdEIsWUFBUTtBQUREO0FBTEksQ0FBZjs7a0JBVWVtRCxRIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBmYTBiZTY0MmM3OTI3NGNmNzUyYiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3RcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItZG9tXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3Qtcm91dGVyLWRvbVwiXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbWVudFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm1vbWVudFwiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbWVudC1kdXJhdGlvbi1mb3JtYXRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJtb21lbnQtZHVyYXRpb24tZm9ybWF0XCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcG9seWZpbGxcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJiYWJlbC1wb2x5ZmlsbFwiXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgeyBIYXNoUm91dGVyIGFzIFJvdXRlciwgUm91dGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5pbXBvcnQgQXBwIGZyb20gXCIuL2NvbXBvbmVudHMvQXBwXCI7XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgPFJvdXRlcj5cbiAgICA8Um91dGVcbiAgICAgIGNvbXBvbmVudD17KCkgPT4gKFxuICAgICAgICA8QXBwIC8+XG4gICAgICApfVxuICAgIC8+XG4gIDwvUm91dGVyPixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpXG4pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3QtZG9tXCJcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtSb3V0ZSwgU3dpdGNoIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcbmltcG9ydCBUYXNrc0luZGV4IGZyb20gXCIuL1Rhc2tzSW5kZXhcIjtcbmltcG9ydCBUYXNrc1Nob3cgZnJvbSBcIi4vVGFza3NTaG93XCI7XG5pbXBvcnQgVGltZXIgZnJvbSBcIi4uL3V0aWxzL1RpbWVyXCI7XG5pbXBvcnQgU2V0dGluZ3MgZnJvbSBcIi4vU2V0dGluZ3NcIjtcblxuY29uc3QgQVBQX0RBVEEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiX19JTklUSUFMX1NUQVRFX19cIikpO1xuXG5jb25zdCBJTklUSUFMX1NUQVRFID0ge1xuICB0YXNrczogW1xuICAgIHsgaWQ6IDEsIHRhc2s6IFwiQnVpbGQgQXBwMVwiLCB0b3RhbFRpbWU6IDEwIH0sXG4gICAgeyBpZDogMiwgdGFzazogXCJCdWlsZCBBcHAyXCIsIHRvdGFsVGltZTogNjAgfSxcbiAgICB7IGlkOiAzLCB0YXNrOiBcIkJ1aWxkIEFwcDNcIiwgdG90YWxUaW1lOiAxMDAwIH0sXG4gICAgeyBpZDogNCwgdGFzazogXCJCdWlsZCBBcHA0XCIsIHRvdGFsVGltZTogMTAwMDAgfSxcbiAgICB7IGlkOiA1LCB0YXNrOiBcIkJ1aWxkIEFwcDVcIiwgdG90YWxUaW1lOiAxMDAwMDAgfVxuICBdLFxuICBhY3RpdmVUYXNrOiBudWxsLFxuICB0aW1lcjoge1xuICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgdGltZTogMTAsXG4gICAgdW5pdDogXCJzZWNvbmRzXCIsXG4gICAgZGlzcGxheTogXCJcIlxuICB9XG59O1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHVwZGF0ZVRyYXlUZXh0OiAoKSA9PiB7IH0sXG4gICAgb25UaW1lckV4cGlyZTogKCkgPT4geyB9XG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IEFQUF9EQVRBIHx8IElOSVRJQUxfU1RBVEU7XG5cbiAgICB0aGlzLm9uQXBwQ2xvc2UoKTtcbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIC0tLS0tLS0tIGVsZWN0cm9uIGV2ZW50IGhhbmRsZXJzIC0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgb25BcHBDbG9zZSA9ICgpID0+IHtcblxuICB9O1xuXG4gIHVwZGF0ZVRyYXlUZXh0ID0gdGl0bGUgPT4ge1xuXG4gIH07XG5cbiAgdGltZXJIYXNFeHBpcmVkID0gKCkgPT4ge1xuXG4gIH07XG5cbiAgLy8gLS0tLS0tLS0gZW5kIG9mIGVsZWN0cm9uIGV2ZW50IGhhbmRlcmxzIC0tLS0tLS0tLS1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmluaXRpYWxpemVUaW1lcigpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiX19JTklUSUFMX1NUQVRFX19cIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5zdGF0ZSkpO1xuICB9XG5cbiAgaW5pdGlhbGl6ZVRpbWVyKHRpbWVyU2V0dGluZ3MgPSB7fSkge1xuICAgIGNvbnN0IHsgdGltZSwgdW5pdCB9ID0gdGltZXJTZXR0aW5ncztcbiAgICBjb25zdCB0aW1lckNvbmZpZyA9IHtcbiAgICAgIGR1cmF0aW9uOiB0aW1lIHx8IHRoaXMuc3RhdGUudGltZXIudGltZSxcbiAgICAgIHVuaXQ6IHVuaXQgfHwgdGhpcy5zdGF0ZS50aW1lci51bml0LFxuICAgICAgb25EaXNwbGF5Q2hhbmdlOiB0aGlzLmhhbmRsZVRpbWVyVXBkYXRlLFxuICAgICAgb25UaW1lckV4cGlyYXRpb246IHRoaXMuaGFuZGxlVGltZXJFeHBpcmF0aW9uXG4gICAgfTtcbiAgICB0aGlzLnRpbWVyID0gbmV3IFRpbWVyKHRpbWVyQ29uZmlnKTtcbiAgfVxuXG4gIGhhbmRsZVRpbWVyVXBkYXRlID0gKG5ld0Rpc3BsYXksIHJlc2V0KSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4ge1xuICAgICAgY29uc3QgeyB0aW1lciwgYWN0aXZlVGFzayB9ID0gcHJldlN0YXRlO1xuICAgICAgY29uc3QgeyBhY3RpdmUgfSA9IHRpbWVyO1xuICAgICAgY29uc3QgdXBkYXRlVGFza1RpbWUgPSBhY3RpdmUgJiYgIXJlc2V0LnJlc2V0O1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGltZXI6IHsgLi4udGltZXIsIGRpc3BsYXk6IG5ld0Rpc3BsYXkgfSxcblxuICAgICAgICBhY3RpdmVUYXNrOiB7XG4gICAgICAgICAgLi4uYWN0aXZlVGFzayxcbiAgICAgICAgICB0b3RhbFRpbWU6IHVwZGF0ZVRhc2tUaW1lXG4gICAgICAgICAgICA/IGFjdGl2ZVRhc2sudG90YWxUaW1lICsgMVxuICAgICAgICAgICAgOiBhY3RpdmVUYXNrLnRvdGFsVGltZVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgLy8gaGFuZGxlciBmb3IgZWxlY3Ryb24gdHJheSB0aXRsZVxuICAgIHRoaXMudXBkYXRlVHJheVRleHQobmV3RGlzcGxheSk7XG4gIH07XG5cbiAgaGFuZGxlVGltZXJFeHBpcmF0aW9uID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdGltZXI6IHsgLi4udGhpcy5zdGF0ZS50aW1lciwgYWN0aXZlOiBmYWxzZSB9XG4gICAgfSk7XG4gICAgdGhpcy50aW1lckhhc0V4cGlyZWQoKTsgLy8gaGFuZGxlciBmb3IgZWxlY3Ryb24gTm90aWZpY2F0aW9uc1xuICB9O1xuXG4gIGNyZWF0ZVRhc2sgPSB0YXNrID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRhc2tzOiBbdGFzaywgLi4udGhpcy5zdGF0ZS50YXNrc11cbiAgICB9KTtcbiAgfTtcblxuICBkZWxldGVUYXNrID0gdGFzayA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB0YXNrczogdGhpcy5zdGF0ZS50YXNrcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmlkICE9PSB0YXNrLmlkKVxuICAgIH0pO1xuICB9O1xuXG4gIGhhbmRsZVNldHRpbmdzVXBkYXRlID0gbmV3U2V0dGluZ3MgPT4ge1xuICAgIHRoaXMuaW5pdGlhbGl6ZVRpbWVyKG5ld1NldHRpbmdzKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRpbWVyOiB7XG4gICAgICAgIC4uLnRoaXMuc3RhdGUudGltZXIsXG4gICAgICAgIC4uLm5ld1NldHRpbmdzLFxuICAgICAgICBkaXNwbGF5OiB0aGlzLnRpbWVyLmRpc3BsYXlcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBoYW5kbGVEYXRhUmVzZXQgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IC4uLklOSVRJQUxfU1RBVEUgfSk7XG4gIH07XG5cbiAgaGFuZGxlQWN0aXZhdGlvbiA9IHRhc2sgPT4ge1xuICAgIHRoaXMuaW5pdGlhbGl6ZVRpbWVyKCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB0YXNrczogdGhpcy5zdGF0ZS50YXNrcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmlkICE9PSB0YXNrLmlkKSxcbiAgICAgIGFjdGl2ZVRhc2s6IHRhc2ssXG4gICAgICB0aW1lcjoge1xuICAgICAgICAuLi50aGlzLnN0YXRlLnRpbWVyLFxuICAgICAgICBkaXNwbGF5OiB0aGlzLnRpbWVyLmRpc3BsYXlcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBoYW5kbGVEZWFjdGl2YXRpb24gPSBhY3RpdmVUYXNrID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRhc2tzOiBbYWN0aXZlVGFzaywgLi4udGhpcy5zdGF0ZS50YXNrc10sXG4gICAgICBhY3RpdmVUYXNrOiBudWxsXG4gICAgfSk7XG4gIH07XG5cbiAgaGFuZGxlVGltZXJTdGFydCA9ICgpID0+IHtcbiAgICB0aGlzLnRpbWVyLnN0YXJ0KCgpID0+IHtcbiAgICAgIC8vIHNlbmRpbmcgYSBjYWxsYmFjayBzbyB0aGVyZSBpcyBubyBkZWxheSBpbiByZW5kZXJpbmcgc3RhcnQvc3RvcCBidXR0b25zXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdGltZXI6IHsgLi4udGhpcy5zdGF0ZS50aW1lciwgYWN0aXZlOiB0cnVlIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGhhbmRsZVRpbWVyU3RvcCA9ICgpID0+IHtcbiAgICB0aGlzLnRpbWVyLnN0b3AoKCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHRpbWVyOiB7IC4uLnRoaXMuc3RhdGUudGltZXIsIGFjdGl2ZTogZmFsc2UgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdGFza3MsIGFjdGl2ZVRhc2ssIHRpbWVyIH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIHN0eWxlPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAgICAgIDxSb3V0ZVxuICAgICAgICAgICAgICAgIGV4YWN0XG4gICAgICAgICAgICAgICAgcGF0aD1cIi9cIlxuICAgICAgICAgICAgICAgIHJlbmRlcj17KCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPFRhc2tzSW5kZXhcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlVGFzaz17YWN0aXZlVGFza31cbiAgICAgICAgICAgICAgICAgICAgb25UYXNrRGVhY3RpdmF0ZT17dGhpcy5oYW5kbGVEZWFjdGl2YXRpb259XG4gICAgICAgICAgICAgICAgICAgIG9uVGltZXJTdGFydD17dGhpcy5oYW5kbGVUaW1lclN0YXJ0fVxuICAgICAgICAgICAgICAgICAgICBvblRpbWVyU3RvcD17dGhpcy5oYW5kbGVUaW1lclN0b3B9XG4gICAgICAgICAgICAgICAgICAgIHRpbWVyPXt0aW1lcn1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPFJvdXRlXG4gICAgICAgICAgICAgICAgcGF0aD1cIi90YXNrc1wiXG4gICAgICAgICAgICAgICAgcmVuZGVyPXsoKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8VGFza3NTaG93XG4gICAgICAgICAgICAgICAgICAgIHRhc2tzPXt0YXNrc31cbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlVGFzaz17YWN0aXZlVGFza31cbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlVGFzaz17dGhpcy5jcmVhdGVUYXNrfVxuICAgICAgICAgICAgICAgICAgICBkZWxldGVUYXNrPXt0aGlzLmRlbGV0ZVRhc2t9XG4gICAgICAgICAgICAgICAgICAgIG9uVGFza0FjdGl2YXRlPXt0aGlzLmhhbmRsZUFjdGl2YXRpb259XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxSb3V0ZVxuICAgICAgICAgICAgICAgIHBhdGg9XCIvc2V0dGluZ3NcIlxuICAgICAgICAgICAgICAgIHJlbmRlcj17KCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPFNldHRpbmdzXG4gICAgICAgICAgICAgICAgICAgIHRpbWVyPXt0aW1lcn1cbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlU3VibWl0PXt0aGlzLmhhbmRsZVNldHRpbmdzVXBkYXRlfVxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVEYXRhUmVzZXQ9e3RoaXMuaGFuZGxlRGF0YVJlc2V0fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Td2l0Y2g+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgY29udGFpbmVyOiB7XG4gICAgaGVpZ2h0OiBcIjg4dmhcIlxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9BcHAuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxuYXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi13cmFwcGVyXCI+XG4gICAgICAgIDxMaW5rXG4gICAgICAgICAgdG89XCIvc2V0dGluZ3NcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImJyYW5kLWxvZ28gcmlnaHRcIlxuICAgICAgICAgIHN0eWxlPXt7IGN1cnNvcjogXCJwb2ludGVyXCIgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+c2V0dGluZ3M8L2k+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL1wiPkFjdGl2ZSBUYXNrPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPExpbmsgdG89XCIvdGFza3NcIj5BbGwgVGFza3M8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmF2PlxuICApO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0hlYWRlci5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuY2xhc3MgVGFza3NJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlckFjdGlvbkJ1dHRvbnMoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMudGltZXIuYWN0aXZlKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuYnV0dG9uQ29udGFpbmVyfT5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biByZWRcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLm9uVGltZXJTdG9wKCl9PlxuICAgICAgICAgICAgU3RvcCBUaW1lclxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5idXR0b25Db250YWluZXJ9PlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgc3R5bGU9e3N0eWxlcy5idXR0b259XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGdyZWVuXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLm9uVGltZXJTdGFydCgpfVxuICAgICAgICA+XG4gICAgICAgICAgU3RhcnQgVGltZXJcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJidG5cIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMub25UYXNrRGVhY3RpdmF0ZSh0aGlzLnByb3BzLmFjdGl2ZVRhc2spfVxuICAgICAgICA+XG4gICAgICAgICAgRGVhY3RpdmF0ZSBUYXNrXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGFjdGl2ZVRhc2ssIHRpbWVyIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKCFhY3RpdmVUYXNrKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgICA8aDM+XG4gICAgICAgICAgICBObyBBY3RpdmUgdGFza3MuXG4gICAgICAgICAgPC9oMz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgPGgyPntgVGltZSBMZWZ0ICR7dGltZXIuZGlzcGxheX1gfTwvaDI+XG4gICAgICAgIDxoND57YEN1cnJlbnQgVGFzazogJHthY3RpdmVUYXNrLnRhc2t9YH08L2g0PlxuICAgICAgICB7dGhpcy5yZW5kZXJBY3Rpb25CdXR0b25zKCl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgY29udGFpbmVyOiB7XG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWFyb3VuZFwiLFxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICB9LFxuICBidXR0b25Db250YWluZXI6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiXG4gIH0sXG4gIGJ1dHRvbjoge1xuICAgIG1hcmdpbkJvdHRvbTogXCIxNXB4XCJcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgVGFza3NJbmRleDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1Rhc2tzSW5kZXguanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcbmltcG9ydCBcIm1vbWVudC1kdXJhdGlvbi1mb3JtYXRcIjtcblxuY2xhc3MgVGFza3NTaG93IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgdGFzazogXCJcIlxuICB9O1xuXG4gIGhhbmRsZVN1Ym1pdCA9IGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAodGhpcy5zdGF0ZS50YXNrKSB7XG4gICAgICBjb25zdCB0YXNrID0ge1xuICAgICAgICBpZDogfn4oTWF0aC5yYW5kb20oKSAqIDk5OTk5KSxcbiAgICAgICAgdG90YWxUaW1lOiAwLFxuICAgICAgICB0YXNrOiB0aGlzLnN0YXRlLnRhc2tcbiAgICAgIH07XG4gICAgICB0aGlzLnByb3BzLmNyZWF0ZVRhc2sodGFzayk7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgdGFzazogXCJcIiB9KTtcbiAgICB9XG4gIH07XG5cbiAgcmVuZGVyQWN0aXZlVGFzaygpIHtcbiAgICBjb25zdCB7IGFjdGl2ZVRhc2sgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKGFjdGl2ZVRhc2spIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJjb2xsZWN0aW9uLWl0ZW0gYXZhdGFyXCIga2V5PXthY3RpdmVUYXNrLmlkfT5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucyBjaXJjbGUgZ3JlZW5cIj5ncmFkZTwvaT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZVwiPnthY3RpdmVUYXNrLnRhc2t9PC9wPlxuICAgICAgICAgIDxwXG4gICAgICAgICAgPntgVG90YWwgVGltZTogJHttb21lbnRcbiAgICAgICAgICAgIC5kdXJhdGlvbihhY3RpdmVUYXNrLnRvdGFsVGltZSwgXCJzZWNvbmRzXCIpXG4gICAgICAgICAgICAuZm9ybWF0KFwiaGg6bW06c3NcIiwgeyB0cmltOiBmYWxzZSB9KX1gfTwvcD5cbiAgICAgICAgPC9saT5cbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmVuZGVyVGFza3MoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMudGFza3MubWFwKHRhc2sgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cImNvbGxlY3Rpb24taXRlbSBhdmF0YXJcIiBrZXk9e3Rhc2suaWR9PlxuICAgICAgICAgIDxpXG4gICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICB0aGlzLnByb3BzLmFjdGl2ZVRhc2sgPyBcImhpZGVcIiA6IFwibWF0ZXJpYWwtaWNvbnMgY2lyY2xlIGdyZXlcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy5wb2ludGVyfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5vblRhc2tBY3RpdmF0ZSh0YXNrKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBncmFkZVxuICAgICAgICAgIDwvaT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZVwiPnt0YXNrLnRhc2t9PC9wPlxuICAgICAgICAgIDxwXG4gICAgICAgICAgPntgVG90YWwgVGltZTogJHttb21lbnRcbiAgICAgICAgICAgIC5kdXJhdGlvbih0YXNrLnRvdGFsVGltZSwgXCJzZWNvbmRzXCIpXG4gICAgICAgICAgICAuZm9ybWF0KFwiaGg6bW06c3NcIiwgeyB0cmltOiBmYWxzZSB9KX1gfTwvcD5cbiAgICAgICAgICA8aVxuICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy5wb2ludGVyfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMgc2Vjb25kYXJ5LWNvbnRlbnRcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5kZWxldGVUYXNrKHRhc2spfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIGRlbGV0ZVxuICAgICAgICAgIDwvaT5cbiAgICAgICAgPC9saT5cbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY29sbGVjdGlvbiB3aXRoLWhlYWRlclwiPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJjb2xsZWN0aW9uLWhlYWRlclwiPlxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkIGEgdGFza1wiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudGFza31cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLnNldFN0YXRlKHsgdGFzazogZS50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICB7dGhpcy5yZW5kZXJBY3RpdmVUYXNrKCl9XG4gICAgICAgICAge3RoaXMucmVuZGVyVGFza3MoKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICBjb250YWluZXI6IHtcbiAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgIG92ZXJmbG93OiBcInNjcm9sbFwiXG4gIH0sXG4gIHBvaW50ZXI6IHtcbiAgICBjdXJzb3I6IFwicG9pbnRlclwiXG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRhc2tzU2hvdztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1Rhc2tzU2hvdy5qcyIsImltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuaW1wb3J0IFwibW9tZW50LWR1cmF0aW9uLWZvcm1hdFwiO1xuXG5jbGFzcyBUaW1lciB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIGNvbnN0IHtcbiAgICAgIGR1cmF0aW9uLFxuICAgICAgdW5pdCxcbiAgICAgIG9uRGlzcGxheUNoYW5nZSxcbiAgICAgIG9uVGltZXJFeHBpcmF0aW9uXG4gICAgfSA9IHRoaXMudmFsaWRhdGVDb25maWdPYmplY3QoY29uZmlnKTtcblxuICAgIHRoaXMuaW5pdGlhbER1cmF0aW9uID0gdGhpcy5nZXRJbml0aWFsRHVyYXRpb24oZHVyYXRpb24sIHVuaXQpO1xuICAgIHRoaXMuZHVyYXRpb24gPSB0aGlzLmluaXRpYWxEdXJhdGlvbjtcbiAgICB0aGlzLmRlbGF5ID0gMTAwO1xuICAgIHRoaXMuZGlzcGxheSA9IHRoaXMuZ2V0VGltZURpc3BsYXkoKTtcbiAgICB0aGlzLmludGVydmFsID0gbnVsbDtcbiAgICB0aGlzLnN0YXJ0VGltZSA9IG51bGw7XG4gICAgdGhpcy5vbkRpc3BsYXlDaGFuZ2UgPSBvbkRpc3BsYXlDaGFuZ2U7XG4gICAgdGhpcy5vblRpbWVyRXhwaXJhdGlvbiA9IG9uVGltZXJFeHBpcmF0aW9uO1xuICB9XG5cbiAgc3RhcnQoY2IpIHtcbiAgICBpZiAoIXRoaXMuaW50ZXJ2YWwpIHtcbiAgICAgIHRoaXMuc3RhcnRUaW1lID0gbW9tZW50KCk7XG4gICAgICB0aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICB0aGlzLmR1cmF0aW9uIC09IHRoaXMuZGVsYXk7XG4gICAgICAgIHRoaXMudXBkYXRlRGlzcGxheSgpO1xuICAgICAgICB0aGlzLmxpc3RlbkZvckV4cGlyYXRpb24oKTtcbiAgICAgIH0sIHRoaXMuZGVsYXkpO1xuICAgICAgcmV0dXJuIGNiID8gY2IoKSA6IG51bGw7XG4gICAgfVxuICB9XG5cbiAgc3RvcChjYikge1xuICAgIGlmICh0aGlzLmludGVydmFsKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpO1xuICAgICAgdGhpcy5pbnRlcnZhbCA9IG51bGw7XG4gICAgICByZXR1cm4gY2IgPyBjYigpIDogbnVsbDtcbiAgICB9XG4gIH1cblxuICByZXNldCgpIHtcbiAgICBjb25zb2xlLmxvZyhtb21lbnQoKSAtIHRoaXMuc3RhcnRUaW1lKTtcbiAgICB0aGlzLnN0b3AoKTtcbiAgICB0aGlzLmR1cmF0aW9uID0gdGhpcy5pbml0aWFsRHVyYXRpb247XG4gICAgdGhpcy51cGRhdGVEaXNwbGF5KHRydWUpO1xuICB9XG5cbiAgdXBkYXRlRGlzcGxheShyZXNldCA9IGZhbHNlKSB7XG4gICAgY29uc3QgbmV3RGlzcGxheSA9IHRoaXMuZ2V0VGltZURpc3BsYXkoKTtcbiAgICBpZiAodGhpcy5kaXNwbGF5ICE9PSBuZXdEaXNwbGF5KSB7XG4gICAgICB0aGlzLmRpc3BsYXkgPSBuZXdEaXNwbGF5O1xuICAgICAgdGhpcy5vbkRpc3BsYXlDaGFuZ2UodGhpcy5kaXNwbGF5LCB7IHJlc2V0IH0pO1xuICAgIH1cbiAgfVxuXG4gIGxpc3RlbkZvckV4cGlyYXRpb24oKSB7XG4gICAgaWYgKHRoaXMuZHVyYXRpb24gPD0gMCkge1xuICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgdGhpcy5vblRpbWVyRXhwaXJhdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIGdldEluaXRpYWxEdXJhdGlvbihkdXJhdGlvbiwgdW5pdCkge1xuICAgIHJldHVybiBtb21lbnQuZHVyYXRpb24oZHVyYXRpb24sIHVuaXQpLmFzTWlsbGlzZWNvbmRzKCk7XG4gIH1cblxuICBnZXRUaW1lRGlzcGxheSgpIHtcbiAgICByZXR1cm4gbW9tZW50LmR1cmF0aW9uKHRoaXMuZHVyYXRpb24pLmZvcm1hdChcImhoOm1tOnNzXCIsIHsgdHJpbTogZmFsc2UgfSk7XG4gIH1cblxuICB2YWxpZGF0ZUNvbmZpZ09iamVjdChjb25maWcpIHtcbiAgICBjb25zdCB7IHVuaXQsIG9uRGlzcGxheUNoYW5nZSwgb25UaW1lckV4cGlyYXRpb24gfSA9IGNvbmZpZztcblxuICAgIGNvbnN0IGR1cmF0aW9uID0gcGFyc2VJbnQoY29uZmlnLmR1cmF0aW9uKTtcbiAgICBpZiAodHlwZW9mIGR1cmF0aW9uICE9PSBcIm51bWJlclwiKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVGltZXIgY2xhc3MgcmVxdWlyZXMgZHVyYXRpb24gPSBOdW1iZXJcIik7XG4gICAgfVxuXG4gICAgY29uc3QgdmFsaWRVbml0cyA9IHtcbiAgICAgIHNlY29uZHM6IHRydWUsXG4gICAgICBtaW51dGVzOiB0cnVlLFxuICAgICAgaG91cnM6IHRydWVcbiAgICB9O1xuXG4gICAgaWYgKCF2YWxpZFVuaXRzW3VuaXRdKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICBcIlRpbWVyIGNsYXNzIHJlcXVpcmVzIHZhbGlkIHVuaXQgb2YgdGltZSAoc2Vjb25kcywgbWludXRlcywgb3IgaG91cnMpXCJcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgdHlwZW9mIG9uRGlzcGxheUNoYW5nZSAhPT0gXCJmdW5jdGlvblwiIHx8XG4gICAgICB0eXBlb2Ygb25UaW1lckV4cGlyYXRpb24gIT09IFwiZnVuY3Rpb25cIlxuICAgICkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICAgXCJUaW1lciBjbGFzcyByZXF1aXJlcyAyIGNhbGxiYWNrIGZ1bmN0aW9uczogb25EaXNwbGF5Q2hhbmdlIGFuZCBvblRpbWVyRXhwaXJhdGlvblwiXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiB7IGR1cmF0aW9uLCB1bml0LCBvbkRpc3BsYXlDaGFuZ2UsIG9uVGltZXJFeHBpcmF0aW9uIH07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGltZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvVGltZXIuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmNsYXNzIFNldHRpbmdzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdGltZTogcHJvcHMudGltZXIudGltZSxcbiAgICAgIHVuaXQ6IHByb3BzLnRpbWVyLnVuaXRcbiAgICB9O1xuICB9XG5cbiAgb25TdWJtaXQgPSBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5wcm9wcy5oYW5kbGVTdWJtaXQodGhpcy5zdGF0ZSk7XG4gIH07XG5cbiAgYnV0dG9uU3R5bGUgPSAoKSA9PiB7XG4gICAgY29uc3QgeyB0aW1lLCB1bml0IH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHByb3BzVGltZSA9IHRoaXMucHJvcHMudGltZXIudGltZTtcbiAgICBjb25zdCBwcm9wc1VuaXQgPSB0aGlzLnByb3BzLnRpbWVyLnVuaXQ7XG5cbiAgICBpZiAodGltZSA9PSBwcm9wc1RpbWUgJiYgdW5pdCA9PSBwcm9wc1VuaXQpIHtcbiAgICAgIC8vIGRvdWJsZSBlcXVhbHMgdG8gYXZvaWQgdHlwZSBjaGVja1xuICAgICAgcmV0dXJuIFwiYnRuIGRpc2FibGVkXCI7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMudGltZXIuYWN0aXZlKSB7XG4gICAgICByZXR1cm4gXCJidG4gZGlzYWJsZWRcIjtcbiAgICB9XG5cbiAgICByZXR1cm4gXCJidG5cIjtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY29sbGVjdGlvbiB3aXRoLWhlYWRlclwiPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJjb2xsZWN0aW9uLWhlYWRlclwiPlxuICAgICAgICAgICAgU2V0dGluZ3NcbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJjb2xsZWN0aW9uLWl0ZW1cIj5cbiAgICAgICAgICAgICAgPHA+SW5pdGlhbCBEdXJhdGlvbjwvcD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgbWluPVwiMVwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudGltZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLnNldFN0YXRlKHsgdGltZTogZS50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImNvbGxlY3Rpb24taXRlbVwiPlxuICAgICAgICAgICAgICA8cD5Vbml0czwvcD5cbiAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJyb3dzZXItZGVmYXVsdFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudW5pdH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLnNldFN0YXRlKHsgdW5pdDogZS50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwic2Vjb25kc1wiPlNlY29uZHM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibWludXRlc1wiPk1pbnV0ZXM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaG91cnNcIj5Ib3Vyczwvb3B0aW9uPlxuICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiY29sbGVjdGlvbi1pdGVtIHJpZ2h0XCI+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT17dGhpcy5idXR0b25TdHlsZSgpfT5TYXZlPC9idXR0b24+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC91bD5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gcmVkXCIgb25DbGljaz17dGhpcy5wcm9wcy5oYW5kbGVEYXRhUmVzZXR9PlxuICAgICAgICAgIFJlc2V0IERhdGFcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgY29udGFpbmVyOiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIlxuICB9LFxuICBwb2ludGVyOiB7XG4gICAgY3Vyc29yOiBcInBvaW50ZXJcIlxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZXR0aW5ncztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1NldHRpbmdzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==