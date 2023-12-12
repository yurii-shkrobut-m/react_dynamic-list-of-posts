(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],{17:function(e,t,c){},19:function(e,t,c){},20:function(e,t,c){"use strict";c.r(t);var s,a=c(9),n=c.n(a),i=c(2),l=c(1),r=(c(15),c(16),c(17),c(3)),o=c.n(r),d=c(0),j=function(e){var t=e.posts,c=e.selectedPost,s=e.setSelectedPost,a=Object(l.useCallback)((function(e){(null===c||void 0===c?void 0:c.id)!==e.id?s(e):s(null)}),[c,s]);return Object(d.jsxs)("div",{"data-cy":"PostsList",children:[Object(d.jsx)("p",{className:"title",children:"Posts:"}),Object(d.jsxs)("table",{className:"table is-fullwidth is-striped is-hoverable is-narrow",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{className:"has-background-link-light",children:[Object(d.jsx)("th",{children:"#"}),Object(d.jsx)("th",{children:"Title"}),Object(d.jsx)("th",{children:" "})]})}),Object(d.jsx)("tbody",{children:t.map((function(e){var t=(null===c||void 0===c?void 0:c.id)!==e.id;return Object(d.jsxs)("tr",{"data-cy":"Post",children:[Object(d.jsx)("td",{"data-cy":"PostId",children:e.id}),Object(d.jsx)("td",{"data-cy":"PostTitle",children:e.title}),Object(d.jsx)("td",{className:"has-text-right is-vcentered",children:Object(d.jsx)("button",{type:"button","data-cy":"PostButton",className:o()("button is-link",{"is-light":t}),onClick:function(){return a(e)},children:t?"Open":"Close"})})]})}))})]})]})},m=(c(19),function(){return Object(d.jsx)("div",{className:"Loader","data-cy":"Loader",children:Object(d.jsx)("div",{className:"Loader__content"})})}),b=c(10),u=c(6),h=c(4);!function(e){e.Name="name",e.Email="email",e.Body="body"}(s||(s={}));var O="https://mate.academy/students-api";function x(e){return new Promise((function(t){setTimeout(t,e)}))}function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s={method:t};return c&&(s.body=JSON.stringify(c),s.headers={"Content-Type":"application/json; charset=UTF-8"}),x(300).then((function(){return fetch(O+e,s)})).then((function(e){return e.json()}))}var N=function(e){return f(e)},p=function(e,t){return f(e,"POST",t)},y=function(e){return f(e,"DELETE")},v={name:!1,email:!1,body:!1},g={name:"",email:"",body:""},S=function(e){var t=e.setIsError,c=e.setComments,a=e.postId,n=Object(l.useState)(!1),r=Object(i.a)(n,2),j=r[0],m=r[1],O=Object(l.useState)(v),x=Object(i.a)(O,2),f=x[0],N=x[1],y=Object(l.useState)(g),S=Object(i.a)(y,2),C=S[0],k=S[1],E=Object(l.useCallback)((function(e,t){k((function(c){return Object(h.a)(Object(h.a)({},c),{},Object(u.a)({},e,t.trimStart()))})),N((function(t){return Object(h.a)(Object(h.a)({},t),{},Object(u.a)({},e,!1))}))}),[]),P=Object(l.useCallback)((function(){k(g),N(v)}),[]);return Object(d.jsxs)("form",{"data-cy":"NewCommentForm",onSubmit:function(e){var s;(e.preventDefault(),N(v),C.name&&C.email&&C.body)?(m(!0),(s=Object(h.a)(Object(h.a)({},C),{},{postId:a}),p("/comments",s)).then((function(e){c((function(t){return[].concat(Object(b.a)(t),[e])})),k(Object(h.a)(Object(h.a)({},C),{},{body:""}))})).catch((function(){return t(!0)})).finally((function(){return m(!1)}))):N({name:!C.name,email:!C.email,body:!C.body})},children:[Object(d.jsxs)("div",{className:"field","data-cy":"NameField",children:[Object(d.jsx)("label",{className:"label",htmlFor:"comment-author-name",children:"Author Name"}),Object(d.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(d.jsx)("input",{type:"text",name:"name",value:C.name,id:"comment-author-name",placeholder:"Name Surname",className:o()("input",{"is-danger":f.name}),onChange:function(e){return E(s.Name,e.target.value)}}),Object(d.jsx)("span",{className:"icon is-small is-left",children:Object(d.jsx)("i",{className:"fas fa-user"})}),f.name&&Object(d.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(d.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),f.name&&Object(d.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Name is required"})]}),Object(d.jsxs)("div",{className:"field","data-cy":"EmailField",children:[Object(d.jsx)("label",{className:"label",htmlFor:"comment-author-email",children:"Author Email"}),Object(d.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(d.jsx)("input",{type:"text",name:"email",value:C.email,id:"comment-author-email",placeholder:"email@test.com",className:o()("input",{"is-danger":f.email}),onChange:function(e){return E(s.Email,e.target.value)}}),Object(d.jsx)("span",{className:"icon is-small is-left",children:Object(d.jsx)("i",{className:"fas fa-envelope"})}),f.email&&Object(d.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(d.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),f.email&&Object(d.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Email is required"})]}),Object(d.jsxs)("div",{className:"field","data-cy":"BodyField",children:[Object(d.jsx)("label",{className:"label",htmlFor:"comment-body",children:"Comment Text"}),Object(d.jsx)("div",{className:"control",children:Object(d.jsx)("textarea",{id:"comment-body",name:"body",value:C.body,placeholder:"Type comment here",className:o()("textarea",{"is-danger":f.body}),onChange:function(e){return E(s.Body,e.target.value)}})}),f.body&&Object(d.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Enter some text"})]}),Object(d.jsxs)("div",{className:"field is-grouped",children:[Object(d.jsx)("div",{className:"control",children:Object(d.jsx)("button",{type:"submit",className:o()("button is-link",{"is-loading":j}),children:"Add"})}),Object(d.jsx)("div",{className:"control",children:Object(d.jsx)("button",{type:"reset",className:"button is-link is-light",onClick:P,children:"Clear"})})]})]})},C=function(e){var t=e.selectedPost,c=Object(l.useState)([]),s=Object(i.a)(c,2),a=s[0],n=s[1],r=Object(l.useState)(!1),o=Object(i.a)(r,2),j=o[0],b=o[1],u=Object(l.useState)(!1),h=Object(i.a)(u,2),O=h[0],x=h[1],f=Object(l.useState)(!1),p=Object(i.a)(f,2),v=p[0],g=p[1],C=a.length>0;Object(l.useEffect)((function(){var e;x(!1),b(!0),g(!1),(e=t.id,N("/comments?postId=".concat(e))).then(n).catch((function(){return x(!0)})).finally((function(){return b(!1)}))}),[t.id,n]);var k=function(e){var t;n((function(t){return t.filter((function(t){return t.id!==e.id}))})),(t=e.id,y("/comments/".concat(t))).catch((function(){n(a),x(!0)}))};return Object(d.jsx)("div",{className:"content","data-cy":"PostDetails",children:Object(d.jsxs)("div",{className:"content","data-cy":"PostDetails",children:[Object(d.jsxs)("div",{className:"block",children:[Object(d.jsx)("h2",{"data-cy":"PostTitle",children:"#".concat(t.id,": ").concat(t.title)}),Object(d.jsx)("p",{"data-cy":"PostBody",children:t.body})]}),Object(d.jsxs)("div",{className:"block",children:[j&&Object(d.jsx)(m,{}),O&&Object(d.jsx)("div",{className:"notification is-danger","data-cy":"CommentsError",children:"Something went wrong"}),!C&&!j&&!O&&Object(d.jsx)("p",{className:"title is-4","data-cy":"NoCommentsMessage",children:"No comments yet"}),C&&!j&&!O&&Object(d.jsx)("p",{className:"title is-4",children:"Comments:"}),!O&&a.map((function(e){return Object(d.jsxs)("article",{className:"message is-small","data-cy":"Comment",children:[Object(d.jsxs)("div",{className:"message-header",children:[Object(d.jsx)("a",{href:"mailto:".concat(e.email),"data-cy":"CommentAuthor",children:e.name}),Object(d.jsx)("button",{"data-cy":"CommentDelete",type:"button",className:"delete is-small","aria-label":"delete",onClick:function(){return k(e)},children:"delete button"})]}),Object(d.jsx)("div",{className:"message-body","data-cy":"CommentBody",children:e.body})]})})),!v&&Object(d.jsx)("button",{"data-cy":"WriteCommentButton",type:"button",className:"button is-link",onClick:function(){return g(!0)},children:"Write a comment"})]}),v&&!O&&Object(d.jsx)(S,{setIsError:x,setComments:n,postId:t.id})]})})},k=function(e){var t=e.users,c=e.selectedUser,s=e.setSelectedUser,a=e.onUserSelect,n=Object(l.useState)(!1),r=Object(i.a)(n,2),j=r[0],m=r[1];return Object(d.jsxs)("div",{"data-cy":"UserSelector",className:"dropdown is-active",children:[Object(d.jsx)("div",{className:"dropdown-trigger",children:Object(d.jsxs)("button",{type:"button",className:"button","aria-haspopup":"true","aria-controls":"dropdown-menu",onClick:function(){return m(!j)},children:[Object(d.jsx)("span",{children:c?c.name:"Choose a user"}),Object(d.jsx)("span",{className:"icon is-small",children:Object(d.jsx)("i",{className:"fas fa-angle-down","aria-hidden":"true"})})]})}),j&&Object(d.jsx)("div",{className:"dropdown-menu",id:"dropdown-menu",role:"menu",children:Object(d.jsx)("div",{className:"dropdown-content",children:t.map((function(e){return Object(d.jsx)("a",{href:"#user-".concat(e.id),className:o()("dropdown-item",{"is-active":e.id===(null===c||void 0===c?void 0:c.id)}),onClick:function(){return function(e){s(e),m(!1),a(e)}(e)},onBlur:function(){return m(!1)},children:e.name},e.id)}))})})]})},E=function(){var e=Object(l.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1],a=Object(l.useState)([]),n=Object(i.a)(a,2),r=n[0],b=n[1],u=Object(l.useState)(null),h=Object(i.a)(u,2),O=h[0],x=h[1],f=Object(l.useState)(null),p=Object(i.a)(f,2),y=p[0],v=p[1],g=Object(l.useState)(!1),S=Object(i.a)(g,2),E=S[0],P=S[1],w=Object(l.useState)(!1),I=Object(i.a)(w,2),T=I[0],B=I[1],U=!E&&!T&&!r.length&&O;return Object(l.useEffect)((function(){N("/users").then(s).catch((function(){return B(!0)}))}),[]),Object(d.jsx)("main",{className:"section",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"tile is-ancestor",children:[Object(d.jsx)("div",{className:"tile is-parent",children:Object(d.jsxs)("div",{className:"tile is-child box is-success",children:[Object(d.jsx)("div",{className:"block",children:Object(d.jsx)(k,{users:c,selectedUser:O,setSelectedUser:x,onUserSelect:function(e){var t;B(!1),P(!0),v(null),b([]),(t=e.id,N("/posts?userId=".concat(t))).then(b).catch((function(){return B(!0)})).finally((function(){return P(!1)}))}})}),Object(d.jsxs)("div",{className:"block","data-cy":"MainContent",children:[!O&&Object(d.jsx)("p",{"data-cy":"NoSelectedUser",children:"No user selected"}),E&&Object(d.jsx)(m,{}),T&&Object(d.jsx)("div",{className:"notification is-danger","data-cy":"PostsLoadingError",children:"Something went wrong!"}),U&&Object(d.jsx)("div",{className:"notification is-warning","data-cy":"NoPostsYet",children:"No posts yet"}),r.length>0&&Object(d.jsx)(j,{posts:r,selectedPost:y,setSelectedPost:v})]})]})}),Object(d.jsx)("div",{"data-cy":"Sidebar",className:o()("tile","is-parent","is-8-desktop","Sidebar",{"Sidebar--open":y}),children:Object(d.jsx)("div",{className:"tile is-child box is-success ",children:y&&Object(d.jsx)(C,{selectedPost:y})})})]})})})};n.a.render(Object(d.jsx)(E,{}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.d9b2aff8.chunk.js.map