(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{136:function(e,t,n){e.exports=n(276)},276:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(50),l=n.n(i),c=n(51),o=n(52),u=n(55),s=n(53),h=n(54),d=n(26),m=n(281),v=n(282),f=n(278),g=(n(141),function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:12,n=[];e.length;)n.push(e.splice(0,t));return n}),b=n(284),E=function(e){var t=e.children;return r.a.createElement(a.Fragment,null,r.a.createElement(b.a,{maxWidth:799},r.a.createElement(v.a,{columns:1,divided:!0},t)),r.a.createElement(b.a,{minWidth:800},r.a.createElement(v.a,{columns:2,divided:!0},t)))},p=n(16),j=n(17);function w(){var e=Object(p.a)(["\n  width: 85vw;\n  max-width: 1500px;\n  min-width: 500px;\n"]);return w=function(){return e},e}function y(){var e=Object(p.a)(["\n  display: flex;\n  min-height: 100vh;\n  align-items: center;\n  justify-content: center;\n"]);return y=function(){return e},e}var O=j.a.main(y()),k=j.a.div(w()),x=function(e){var t=e.children;return r.a.createElement(O,null,r.a.createElement(k,null,t))},C=n(280),P=n(279);function S(){var e=Object(p.a)(["\n  text-align: center;\n  transform: rotateX(180deg);\n"]);return S=function(){return e},e}var R=j.a.h5(S());function B(){var e=Object(p.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n"]);return B=function(){return e},e}var W=j.a.div(B()),I=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).data=e.datasets,n.totalPages=n.data.length,n.handleSelection=e.handleSelection.bind(Object(d.a)(Object(d.a)(n))),n.state={activePage:1},n}return Object(h.a)(t,e),Object(o.a)(t,[{key:"handlePaginationChange",value:function(e,t){var n=t.activePage;console.log(n),this.setState({activePage:n})}},{key:"renderBody",value:function(e){var t=this;return e.map(function(e,n){return r.a.createElement(C.a.Row,{key:n,onClick:function(n){return t.handleSelection(n,e.url)},style:{cursor:"pointer"}},r.a.createElement(C.a.Cell,null,e.id),r.a.createElement(C.a.Cell,null,e.title))})}},{key:"render",value:function(){return r.a.createElement(a.Fragment,null,r.a.createElement(C.a,{basic:"very",selectable:!0},r.a.createElement(C.a.Header,null,r.a.createElement(C.a.Row,null,r.a.createElement(C.a.HeaderCell,{colSpan:"2"},r.a.createElement(R,null,"Welcome back!")))),r.a.createElement(C.a.Body,null,this.renderBody(this.data[this.state.activePage-1]))),r.a.createElement(W,null,r.a.createElement(P.a,{activePage:this.state.activePage,onPageChange:this.handlePaginationChange.bind(this),totalPages:this.totalPages,boundaryRange:0,siblingRange:1,size:"mini"})))}}]),t}(a.Component);function D(){var e=Object(p.a)(["\n  display: flex;\n  height: 100%;\n  min-height: 600px;\n  align-items: center;\n  justify-content: center;\n"]);return D=function(){return e},e}var F=j.a.div(D());function H(){var e=Object(p.a)(['\n  content: url("','")\n  height: 120px;\n  width: 120px;\n  border-radius: 50%;\n  cursor: pointer;\n  \n  &:hover {\n    height: auto;\n    width: auto;\n    max-height: 100%;\n    max-width: 100%;\n  }\n']);return H=function(){return e},e}var J=j.a.img(H(),function(e){return e.src}),z=function(e){return console.log(e),r.a.createElement(F,null,r.a.createElement(J,{src:e.src}))},M=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(s.a)(t).call(this))).onClickRow=e.handleSelection.bind(Object(d.a)(Object(d.a)(e))),e.state={data:[],loading:!0},e}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/photos/").then(function(e){return e.json()}).then(function(e){return g(e)}).then(function(t){e.setState({data:t,loading:!1})})}},{key:"handleSelection",value:function(e,t){e.preventDefault(),this.setState({currentImage:t})}},{key:"render",value:function(){return this.state.loading?r.a.createElement(f.a,null):r.a.createElement(x,null,r.a.createElement(m.a,null,r.a.createElement(E,null,r.a.createElement(v.a.Column,null,r.a.createElement(I,{datasets:this.state.data,handleSelection:this.onClickRow})),r.a.createElement(v.a.Column,null,r.a.createElement(z,{src:this.state.currentImage})))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[136,2,1]]]);
//# sourceMappingURL=main.76585688.chunk.js.map