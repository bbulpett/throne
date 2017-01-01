'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inherits2 = require('/Users/barnabas/Projects/JSApps/throne/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _getPrototypeOf = require('/Users/barnabas/Projects/JSApps/throne/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('/Users/barnabas/Projects/JSApps/throne/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('/Users/barnabas/Projects/JSApps/throne/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('/Users/barnabas/Projects/JSApps/throne/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _react = require('/Users/barnabas/Projects/JSApps/throne/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _posts = require('../data/posts');

var _posts2 = _interopRequireDefault(_posts);

var _css = require('/Users/barnabas/Projects/JSApps/throne/node_modules/next/dist/lib/css.js');

var _link = require('/Users/barnabas/Projects/JSApps/throne/node_modules/next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);
    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
  }

  (0, _createClass3.default)(_class, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { ClassName: (0, _css.style)(styles.header) },
          _react2.default.createElement(
            'h3',
            null,
            'NEXTHRONE - THE REVELATION OF GAME OF THRONES CHARACTERS'
          )
        ),
        _react2.default.createElement(
          'table',
          { className: (0, _css.style)(styles.table) },
          _react2.default.createElement(
            'thead',
            null,
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'th',
                { className: (0, _css.style)(styles.th) },
                'Character'
              ),
              _react2.default.createElement(
                'th',
                { className: (0, _css.style)(styles.th) },
                'Real Name'
              )
            )
          ),
          _react2.default.createElement(
            'tbody',
            null,
            this.props.posts.map(function (post, i) {
              return _react2.default.createElement(
                'tr',
                { key: i },
                _react2.default.createElement(
                  'td',
                  { className: (0, _css.style)(styles.td) },
                  post.codeName
                ),
                _react2.default.createElement(
                  'td',
                  { className: (0, _css.style)(styles.td) },
                  _react2.default.createElement(
                    _link2.default,
                    { href: '/account?id=' + post.id },
                    post.realName
                  )
                )
              );
            })
          )
        )
      );
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps() {
      return { posts: _posts2.default };
    }
  }]);
  return _class;
}(_react2.default.Component);

exports.default = _class;


var styles = {
  th: {
    background: '#00cccc',
    color: '#fff',
    textTransform: 'uppercase',
    fontSize: '12px',
    padding: '12px 35px'
  },

  header: {
    font: '15px Monaco'
  },

  table: {
    fontFamily: 'Arial',
    margin: '25px auto',
    borderCollapse: 'collapse',
    border: '1px solid #eee',
    borderBottom: '2px solid #00cccc'
  },

  td: {
    color: '#999',
    border: '1px solid #eee',
    padding: '12px 35px',
    borderCollapse: 'collapse'
  },

  list: {
    padding: '50px',
    textAlign: 'center'
  },

  photo: {
    display: 'inline-block'
  },

  photoLink: {
    color: '#333',
    verticalAlign: 'middle',
    cursor: 'pointer',
    background: '#eee',
    display: 'inline-block',
    width: '250px',
    height: '250px',
    lineHeight: '250px',
    margin: '10px',
    border: '2px solid transparent',
    ':hover': {
      borderColor: 'blue'
    }
  }
};
    if (module.hot) {
      module.hot.accept()
      if (module.hot.status() !== 'idle') {
        var Component = module.exports.default || module.exports
        next.router.update('/', Component)
      }
    }
  