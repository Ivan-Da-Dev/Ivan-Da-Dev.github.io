(function() {
var exports = {};
exports.id = 646;
exports.ids = [646];
exports.modules = {

/***/ 793:
/***/ (function(__unused_webpack_module, exports) {

exports.markdown = string => {
  const emojis = [{
    name: 'hehe',
    img: 'https://cdn.discordapp.com/emojis/792645345216823306.png?v=1'
  }, {
    name: "nani",
    img: "https://cdn.discordapp.com/emojis/792658889602367538.png?v=1"
  }, {
    name: "ah",
    img: "https://cdn.discordapp.com/emojis/753937617258545202.png?v=1"
  }, {
    name: "ded",
    img: "https://cdn.discordapp.com/emojis/806987341889273866.gif?v=1"
  }, {
    name: "woa",
    img: "https://cdn.discordapp.com/emojis/798246206706417704.png?v=1"
  }, {
    name: "kaosHehe",
    img: "https://cdn.discordapp.com/emojis/444565473665875990.png?v=1"
  }, {
    name: 'blush',
    img: 'https://emoji.discord.st/emojis/flandre_joy.png'
  }, {
    name: 'happy',
    img: 'https://i.imgur.com/8At68hU.png'
  }];
  string = string.replace(/\*\*[a-zA-Z0-9(\!|\.|\:|\;|\"|\'|\&|\^|\%|\$|\#|\@|\*|\(|\)|\||\<|\>|\/), \t\n\r]+\*\*/g, function (text) {
    return `<strong class='markdown_bold_text'>${text.replace(/\*/g, '')}</strong>`;
  }).replace('\n', '<br>').replace(/<lenny>/g, "( ͡° ͜ʖ ͡°)").replace(/\bi\b/g, 'I').replace(/\bmc\b/g, 'MC').replace(/\bmc's\b/g, 'MC\'s');

  if (/:[a-zA-Z0-9, \t\n\r]+:/g.test(string) === true) {
    string = string.replace(/:[a-zA-Z0-9, \t\n\r]+:/g, function (text) {
      let theEmoji = emojis.find(e => e.name.toLowerCase() === text.replace(/:/g, '').toLowerCase());
      return `<span><img class="markdown_emoji" src="${theEmoji.img}"></span>`;
    });
  }

  const TextLinkReg = /\[[a-zA-Z0-9, \t\n\r]+\]\(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)\)/g;

  if (TextLinkReg.test(string) === true) {
    string = string.replace(TextLinkReg, function (text) {
      return `<span><a class="markdown_link" href="${text.split('(')[1].split(')')[0]}">${text.split('[')[1].split(']')[0]}</a></span>`;
    });
  }

  const imageReg = /(@https?:\/\/(www\.)?[-a-zA-Z0-9:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9():%_\+.~#?&//=]*)\@|@\.\/[a-zA-Z0-9, \w\.(jpe?g|png|gif|bmp|jfif|webp)$]+@)/g; // const imageReg = /@\.\/images\/[a-zA-Z0-9, \w\.(jpe?g|png|gif|bmp|jfif)$]+@/g

  if (imageReg.test(string) === true) {
    string = string.replace(imageReg, function (text) {
      return `<br><br><span class='markdown_attachment_ctn'><img class="markdown_attachment" src="../review-images/${text.split('@')[1].split('@')[0]}"></span><br>`;
    });
  }

  return string;
};

/***/ }),

/***/ 710:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Review; },
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; },
/* harmony export */   "getStaticPaths": function() { return /* binding */ getStaticPaths; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_review_list_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32);
/* harmony import */ var disqus_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28);
/* harmony import */ var disqus_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(disqus_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(793);







function Review({
  review
}) {
  const img = `../review-images/${review.img}`;
  const disqusShortname = "oniichann";
  const disqusConfig = {
    url: "http://localhost:3000",
    identifier: review.title.replace(/ /g, '-'),
    title: "Comments"
  };
  const bgImg = `../review-images/${review.bg}`;
  const title = `${review.title.substring(0, 1).toUpperCase()}${review.title.slice(1)}`;
  const meta_desc = `Read Onii-chan's review on ${review.title} with a rating of ${review.rating}`;
  const _review = `${_components_markdown__WEBPACK_IMPORTED_MODULE_5__.markdown(review.review)}`;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
        rel: "icon",
        href: "../review-images/icon.png"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
        children: title
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
        name: "description",
        content: meta_desc
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
        property: "og:image",
        content: "../review-images/icon.png"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
        name: "keywords",
        content: "Onii Chan"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
        name: "keywords",
        content: "Onii-Chan"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
        name: "keywords",
        content: "Anime Reviews"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
        name: "keywords",
        content: "Shitty Anime Reviews"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
        name: "keywords",
        content: review.title
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "nav_bar",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
        href: "https://oniichann.tk",
        children: "Home"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
        href: "https://oniichann.tk/waifus",
        children: "Waifus"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
        href: "https://oniichann.tk/reviews",
        children: "Reviews"
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
      className: "view_bg",
      src: bgImg
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "view",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "nsfw_layer",
        style: {
          display: review.nsfw ? 'block' : 'none'
        },
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
          src: "../review-images/chotto_matte.jpg"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
          children: "This review contains NSFW content that may be unsuitable for some users, do you wish to proceed?"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
          className: "proceed",
          children: "Yes, let me in"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
          className: "go_back",
          href: "https://oniichann.tk/reviews",
          children: "No, take me back"
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        class: "view_layer"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "view_content",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "view_container",
          id: "left",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
            className: "view_title",
            children: title
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
            className: "view_genres",
            children: review.genres.map(g => {
              return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                children: `${g.substring(0, 1).toUpperCase()}${g.slice(1)}`
              });
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
            className: "view_rating",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
              src: "../review-images/star.png",
              className: "star"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
              className: "card_rating_bigger",
              children: review.rating
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
            className: "view_desc",
            children: review.desc
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "view_container",
          id: "right",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
            id: "view_img",
            src: img
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "view_container",
        id: "mid",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
          className: "label",
          children: "Review"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
          className: "view_review",
          dangerouslySetInnerHTML: {
            __html: _review
          }
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "view_comments",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
        children: "Comments"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "article-container",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((disqus_react__WEBPACK_IMPORTED_MODULE_3___default().DiscussionEmbed), {
          shortname: disqusShortname,
          config: disqusConfig
        })
      })]
    })]
  });
}
async function getStaticProps({
  params
}) {
  const review = _components_review_list_js__WEBPACK_IMPORTED_MODULE_2__.getReviewData(params.review);
  return {
    props: {
      review
    }
  };
}
async function getStaticPaths() {
  const paths = _components_review_list_js__WEBPACK_IMPORTED_MODULE_2__.ids();
  return {
    paths,
    fallback: false
  };
}

/***/ }),

/***/ 28:
/***/ (function(module) {

"use strict";
module.exports = require("disqus-react");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [32], function() { return __webpack_exec__(710); });
module.exports = __webpack_exports__;

})();