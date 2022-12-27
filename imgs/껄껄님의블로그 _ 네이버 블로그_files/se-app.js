(window.__se_editor_jsonp=window.__se_editor_jsonp||[]).push([[20],{1294:function(e,t,r){"use strict";r.r(t);var n=r(55),a=r.n(n),l=r(17),o=r.n(l),u=r(54),c=r.n(u),i=r(49),s=r(223),b=r(0),m=r.n(b),y=function(e){function t(){return e.apply(this,arguments)||this}return m()(t,e),t.prototype.render=function(){var e=c()({"se-popup-outside":this.props.outside}),t=i.b.Children.map(this.props.children,function(t){return t?i.b.cloneElement(t,{className:e}):i.b.Fragment});return i.b.createElement(i.b.Fragment,null,t)},t}(i.b.Component);y.defaultProps={outside:!1},y.propTypes={outside:i.a.bool.isRequired,children:i.a.oneOfType([i.a.element,i.a.array])};var p=y,d=r(51),E=["layouts","configAgent"],L=function(e){var t,r=e.layouts,n=e.configAgent,l=o()(e,E),u=r.CanvasLayout,b=r.HeaderLayout,m=r.DocumentToolbarLayout,y=r.PropertyToolbarLayout,L=r.UploadProgressLayer,g=r.HighlightBannerLayer,f=r.ToastLayer,v=r.LoadingLayer,h=r.A11yHelpLayer,T=r.AlertLayer,x=r.WebtoonLayer,j=r.SpecialLetterLayer,P=r.PanelContainerLayer,C=r.SearchPanelLayout,O=r.MomentPanelLayout,_=r.StickerPanelLayout,w=r.LibraryPanelLayout,F=r.TemplatePanelLayout,k=r.LoadingProgressLayout,S=r.ViewModeLayout,A=r.ImageDetailLayer,M=r.LinkLayer,I=r.CloudSnsLayer,D=r.ScheduleLayer,H=r.PlaceLayer,N=r.FileUploadLayer,U=r.MathEditorLayer,B=r.VideoUploadLayer,R=r.PaidPhotoNotificationLayer,q=r.InsertMenuLayout,V=r.ContextToolbarLayout,G=r.ContentsToolbarLayout,W=r.LinkTooltipLayout,z=r.SpellCheckLayout,J=r.ImageTypeLayer,K=r.ImageGroupOrderLayer,Q=r.TalktalkEditLayer,X=r.HelpPanelLayout,Y=r.ContextmenuLayer,Z=r.ImageTagLayer,$=r.TranslationLayer,ee=r.ImageLocationEditLayer,te=r.ChatLayer,re=n.get("productConfig"),ne=re.help,ae=re.preview,le=re.insertMenu,oe=re.contextMenu,ue=re.contextToolbar,ce=re.propertyToolbar,ie=re.linkTooltip,se=!0===ne,be=!1!==ae||!!ne,me=!1!==le,ye=!1!==oe,pe=!1!==ue,de=!1!==ce,Ee=!0===ie,Le=!!document.documentMode,ge=c()({"se-wrap":!0,"se-dnd-wrap":!0,"se-wrap-ie":Le}),fe=n.get("productEnv").editorType,ve=n.get("productConfig"),he=ve.language,Te=ve.layoutType,xe=ve.documentToolbar,je=ve.scroll,Pe=ve.stickyToolbar,Ce=Te.toLowerCase()===d.I.EMBED,Oe=!1!==xe,_e=!!je.targetElement,we=c()(((t={"se-content":!0})["__se-scroll-target"]=!_e,t));return _e&&je.targetElement.classList&&je.targetElement.classList.add("__se-scroll-target"),i.b.createElement(s.b,a()({className:ge,outsideScroll:_e,isFlexible:Ce||Pe,language:he},l),i.b.createElement(b,{editorType:fe,sticky:Pe,outsideScroll:_e,layoutType:Te},Oe&&i.b.createElement(m,{isFlexible:Ce||Pe,useDocumentToolbarButtonText:xe.useToolbarButtonText}),de&&i.b.createElement(y,{isFlexible:Ce||Pe}),i.b.createElement(k,null)),i.b.createElement(K,{isFlexible:Ce})," ",i.b.createElement(f,{isFlexible:Ce}),i.b.createElement("div",{className:"se-container"},i.b.createElement("div",{id:"drag-ghost"}),i.b.createElement("div",{className:we},i.b.createElement(u,{isFlexible:Ce}),pe&&i.b.createElement(V,{isFlexible:Ce}),i.b.createElement(G,{isFlexible:Ce,stickyHeader:Pe}),me&&!Ce&&i.b.createElement(q,{contentSelector:".__se-scroll-target"}),Ee&&i.b.createElement(W,{isFlexible:Ce})),i.b.createElement(p,{outside:Ce},i.b.createElement(P,null,i.b.createElement(C,null),i.b.createElement(O,null),i.b.createElement(_,null),i.b.createElement(w,null),i.b.createElement(F,null))),!Ce&&se&&i.b.createElement(X,null)),be&&!Ce&&i.b.createElement(S,null),i.b.createElement(p,{outside:!1},i.b.createElement(L,null),i.b.createElement(g,null),i.b.createElement(v,null),i.b.createElement(j,null),ye&&i.b.createElement(Y,null)),i.b.createElement(p,{outside:_e},i.b.createElement(I,null),i.b.createElement(N,null),i.b.createElement(R,null),i.b.createElement(A,null),i.b.createElement(z,null),i.b.createElement(Q,null)),i.b.createElement(p,{outside:Ce},i.b.createElement(D,null),i.b.createElement(H,null),i.b.createElement(x,null),i.b.createElement(h,null),i.b.createElement(U,null),i.b.createElement(B,null),i.b.createElement(J,null),i.b.createElement(Z,null),i.b.createElement(T,null),i.b.createElement(M,null),i.b.createElement($,null),i.b.createElement(ee,null),i.b.createElement(te,null)))};L.propTypes={layouts:i.a.object,dragAndDropStore:i.a.object,themeStore:i.a.object,dragAndDropUseCase:i.a.object,errorRecoveryUseCase:i.a.object,configAgent:i.a.object.isRequired};t.default=L},17:function(e,t){e.exports=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}},54:function(e,t,r){var n;
/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n))e.push(a.apply(null,n));else if("object"===l)for(var o in n)r.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}void 0!==e&&e.exports?e.exports=a:void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},55:function(e,t){function r(){return e.exports=r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},r.apply(this,arguments)}e.exports=r},93:function(e,t,r){"use strict";var n=r(255),a=r(107),l=r(127),o=Math.max;t.a=function(e,t,r){var u=null==e?0:e.length;if(!u)return-1;var c=null==r?0:Object(l.a)(r);return c<0&&(c=o(u+c,0)),Object(n.a)(e,Object(a.a)(t,3),c)}},96:function(e,t,r){"use strict";var n=r(107),a=r(111),l=r(104);var o=function(e){return function(t,r,o){var u=Object(t);if(!Object(a.a)(t)){var c=Object(n.a)(r,3);t=Object(l.a)(t),r=function(e){return c(u[e],e,u)}}var i=e(t,r,o);return i>-1?u[c?t[i]:i]:void 0}}(r(93).a);t.a=o}}]);