(window.__se_editor_jsonp=window.__se_editor_jsonp||[]).push([[11],{1237:function(e,t,r){"use strict";r.d(t,"a",function(){return b});var n,o,i,a,s,p,c,d,u=r(61),l=r.n(u),g=r(1),h=r.n(g),y=r(50),_=r.n(y),v=(r(62),r(49)),f=r(51),D={INSIDE:["text","object","complex","iframe","image"],OUTSIDE:["template","groupLayer","aside","library"],EXTERNAL:["external-file","external-text","external-complex"]},b=(n=v.g.ref,o=function(){function e(e){void 0===e&&(e={disable:!1}),l()(this,"progress",i,this),l()(this,"type",a,this),l()(this,"items",s,this),l()(this,"dropPosition",p,this),l()(this,"disabled",c,this),l()(this,"updateReadySelection",d,this),this.disabled=e.disable}var t=e.prototype;return t.setItem=function(e,t,r){this.items.replace([e]),this.type=t,this.dropCallback=r},t.setItems=function(e,t,r){this.items.replace(e),this.type=t,this.dropCallback=r},t.reset=function(){this.items=[],this.type=null,this.progress="none",this.dropCallback=null,this.dropPosition={direction:"",point:{compId:"",unitId:"",paraId:null,nodeId:null,offset:0}}},t.disable=function(){this.disabled=!0},t.enable=function(){this.disabled=!1},h()(e,[{key:"isInsideType",get:function(){return D.INSIDE.includes(this.type)}},{key:"isOutsideType",get:function(){return D.OUTSIDE.includes(this.type)}},{key:"isDragging",get:function(){return["dragging","undroppable"].includes(this.progress)}},{key:"isExternalType",get:function(){return D.EXTERNAL.includes(this.type)}},{key:"isCanvasBottomActivated",get:function(){return"dragging"===this.progress&&this.dropPosition.direction===f.x.CANVAS_BOTTOM}},{key:"isDisabled",get:function(){return!0===this.disabled}}]),e}(),i=_()(o.prototype,"progress",[v.g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"none"}}),a=_()(o.prototype,"type",[v.g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),s=_()(o.prototype,"items",[v.g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),p=_()(o.prototype,"dropPosition",[n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{direction:"",point:{compId:"",unitId:"",paraId:null,nodeId:null,offset:0}}}}),c=_()(o.prototype,"disabled",[v.g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),d=_()(o.prototype,"updateReadySelection",[v.g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),_()(o.prototype,"isInsideType",[v.e],Object.getOwnPropertyDescriptor(o.prototype,"isInsideType"),o.prototype),_()(o.prototype,"isOutsideType",[v.e],Object.getOwnPropertyDescriptor(o.prototype,"isOutsideType"),o.prototype),_()(o.prototype,"isDragging",[v.e],Object.getOwnPropertyDescriptor(o.prototype,"isDragging"),o.prototype),_()(o.prototype,"isExternalType",[v.e],Object.getOwnPropertyDescriptor(o.prototype,"isExternalType"),o.prototype),_()(o.prototype,"isCanvasBottomActivated",[v.e],Object.getOwnPropertyDescriptor(o.prototype,"isCanvasBottomActivated"),o.prototype),_()(o.prototype,"setItem",[v.d],Object.getOwnPropertyDescriptor(o.prototype,"setItem"),o.prototype),_()(o.prototype,"setItems",[v.d],Object.getOwnPropertyDescriptor(o.prototype,"setItems"),o.prototype),_()(o.prototype,"reset",[v.d],Object.getOwnPropertyDescriptor(o.prototype,"reset"),o.prototype),_()(o.prototype,"isDisabled",[v.e],Object.getOwnPropertyDescriptor(o.prototype,"isDisabled"),o.prototype),_()(o.prototype,"disable",[v.d],Object.getOwnPropertyDescriptor(o.prototype,"disable"),o.prototype),_()(o.prototype,"enable",[v.d],Object.getOwnPropertyDescriptor(o.prototype,"enable"),o.prototype),o)},1239:function(e,t,r){"use strict";r.d(t,"a",function(){return a});var n={};function o(e){var t="",r=e,n=e.split(".");return n.length>1&&(r=n[0]||"",t=n[1]||""),{eventNS:t,eventType:r}}function i(e,t,r){return e&&0!==e.length?e.filter(function(e){return t?t!==e.handler:r!==e.eventNS}):[]}var a={on:function(e,t){var r=o(e),i=r.eventNS,a=r.eventType,s=n[a];s||(s=[]),s.push({eventNS:i,handler:t}),n[a]=s},off:function(e,t){var r=o(e),a=r.eventNS,s=r.eventType;s&&""!==s?n[s]=i(n[s],t,a):a&&""!==a&&Object.keys(n).forEach(function(e){n[e]=i(n[e],t,a)})},triggerEvent:function(e,t){var r=n[e];r&&0!==r.length&&(n[e]=r.filter(function(e){var r=e.handler;try{return r(t),!0}catch(e){return!1}}))},getEventLength:function(e){return(n[e]||[]).length},clear:function(){n={}}}},1241:function(e,t,r){"use strict";r.d(t,"a",function(){return D});var n,o,i,a,s=r(61),p=r.n(s),c=r(1),d=r.n(c),u=r(58),l=r.n(u),g=r(0),h=r.n(g),y=r(50),_=r.n(y),v=(r(62),r(49)),f=r(51),D=(n=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(t=e.call.apply(e,[this].concat(n))||this)._processingTaskCount=0,t._contentTextLength=null,p()(t,"_readOnly",o,l()(t)),p()(t,"_paused",i,l()(t)),p()(t,"viewMode",a,l()(t)),t}h()(t,e);var r=t.prototype;return r.busy=function(){this._processingTaskCount++},r.idle=function(){this._processingTaskCount--},r.startReadOnly=function(){this._readOnly=!0},r.finishReadOnly=function(){this._readOnly=!1},r.pause=function(){this._paused=!0},r.unpause=function(){this._paused=!1},r.setContentTextLength=function(e){this._contentTextLength=e},r.changeViewMode=function(e){this.viewMode=e},d()(t,[{key:"readOnly",get:function(){return this._readOnly}},{key:"paused",get:function(){return this._paused}},{key:"isProcessing",get:function(){return this._processingTaskCount>0}},{key:"contentTextLength",get:function(){return this._contentTextLength}}]),t}(f.w),o=_()(n.prototype,"_readOnly",[v.g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),i=_()(n.prototype,"_paused",[v.g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),a=_()(n.prototype,"viewMode",[v.g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return f.U.VIEW_MODE_PC}}),_()(n.prototype,"readOnly",[v.e],Object.getOwnPropertyDescriptor(n.prototype,"readOnly"),n.prototype),_()(n.prototype,"paused",[v.e],Object.getOwnPropertyDescriptor(n.prototype,"paused"),n.prototype),n)},223:function(e,t,r){"use strict";var n,o=r(0),i=r.n(o),a=r(50),s=r.n(a),p=r(54),c=r.n(p),d=r(52),u=r(1239),l=r(1237),g=r(1241),h=r(258),y=r(752),_=r(753),v=r(49),f=r(345),D=r(51),b=(n=function(e){function t(){var t;t=e.call(this)||this;var r=D.W.get("configAgent").get("productEnv.deviceType");return t._isDesktop=r===D.t.DESKTOP,t}i()(t,e);var r=t.prototype;return r.componentDidMount=function(){this._canvas=D.W.get("domAccessor").getCanvas()},r.render=function(){var e=this.props,t=e.className,r=e.store,n=c()(t,{"se-is-dragging":r.isDragging}),o=this._isDesktop;return v.b.createElement("div",{className:n,onClick:this._handleClick,onMouseDown:this._handleMouseDown,onMouseMove:this._handleMouseMove,onMouseUp:this._handleMouseUp,onDragStart:o?this._handleDragStart:function(){},onDragEnter:o?this._handleDragEnter:function(){},onDragLeave:o?this._handleDragLeave:function(){},onDragOver:o?this._handleDragOver:function(){},onDragEnd:o?this._handleDragEnd:function(){},onDrop:o?this._handleDrop:function(){}},this.props.children)},r._handleClick=function(e){this.props.onEnhancerClick(e)},r._handleMouseDown=function(e){this.props.onEnhancerMouseDown(e)},r._handleMouseMove=function(e){this.props.onEnhancerMouseMove(e)},r._handleMouseUp=function(e){this.props.onEnhancerMouseUp(e)},r._isDroppable=function(e){return!!this._canvas&&this._canvas.contains(e.target)},r._handleDragStart=function(e){this.props.store.isDisabled||(this.props.useCase.dragStart(e.nativeEvent),this.props.onEnhancerDragStart(e))},r._handleDragEnter=function(e){!this.props.store.isDisabled&&this._isDroppable(e)&&this.props.useCase.dragEnter(e.dataTransfer)},r._handleDragLeave=function(e){!this.props.store.isDisabled&&this._isDroppable(e)&&this.props.useCase.dragLeave()},r._handleDragOver=function(e){var t=this._isDroppable(e);this.props.store.isDisabled||(this._dragPosition={screenX:e.screenX,screenY:e.screenY,clientX:e.clientX,clientY:e.clientY,pageX:e.pageX,pageY:e.pageY,setDragImage:e.dataTransfer&&!!e.dataTransfer.setDragImage},this.props.useCase.dragOver(this._dragPosition,t),t&&e.preventDefault(),this.props.onEnhancerDragOver(e))},r._handleDragEnd=function(e){this.props.store.isDisabled||(this.props.useCase.dragEnd(),this.props.onEnhancerDragEnd(e))},r._handleDrop=function(e){if(!this.props.store.isDisabled&&(e.preventDefault(),!1!==this._isDroppable(e))){var t={screenX:e.screenX,screenY:e.screenY,clientY:e.clientY},r=e.dataTransfer;this.props.useCase.drop(t,r),this.props.onEnhancerDrop(e)}},t}(v.b.Component),s()(n.prototype,"_handleClick",[d.autobind],Object.getOwnPropertyDescriptor(n.prototype,"_handleClick"),n.prototype),s()(n.prototype,"_handleMouseDown",[d.autobind],Object.getOwnPropertyDescriptor(n.prototype,"_handleMouseDown"),n.prototype),s()(n.prototype,"_handleMouseMove",[d.autobind],Object.getOwnPropertyDescriptor(n.prototype,"_handleMouseMove"),n.prototype),s()(n.prototype,"_handleMouseUp",[d.autobind],Object.getOwnPropertyDescriptor(n.prototype,"_handleMouseUp"),n.prototype),s()(n.prototype,"_handleDragStart",[d.autobind],Object.getOwnPropertyDescriptor(n.prototype,"_handleDragStart"),n.prototype),s()(n.prototype,"_handleDragEnter",[d.autobind],Object.getOwnPropertyDescriptor(n.prototype,"_handleDragEnter"),n.prototype),s()(n.prototype,"_handleDragLeave",[d.autobind],Object.getOwnPropertyDescriptor(n.prototype,"_handleDragLeave"),n.prototype),s()(n.prototype,"_handleDragOver",[d.autobind],Object.getOwnPropertyDescriptor(n.prototype,"_handleDragOver"),n.prototype),s()(n.prototype,"_handleDragEnd",[d.autobind],Object.getOwnPropertyDescriptor(n.prototype,"_handleDragEnd"),n.prototype),s()(n.prototype,"_handleDrop",[d.autobind],Object.getOwnPropertyDescriptor(n.prototype,"_handleDrop"),n.prototype),n);b.defaultProps={onEnhancerClick:function(){},onEnhancerMouseDown:function(){},onEnhancerMouseMove:function(){},onEnhancerMouseUp:function(){},onEnhancerDragStart:function(){},onEnhancerDragOver:function(){},onEnhancerDragEnd:function(){},onEnhancerDrop:function(){}},b.propTypes={useCase:v.a.instanceOf(h.a).isRequired,children:v.a.oneOfType([v.a.arrayOf(v.a.oneOfType([v.a.element,v.a.string])),v.a.element]),className:v.a.string,store:v.a.instanceOf(l.a).isRequired,onEnhancerClick:v.a.func,onEnhancerMouseDown:v.a.func,onEnhancerMouseMove:v.a.func,onEnhancerMouseUp:v.a.func,onEnhancerDragStart:v.a.func,onEnhancerDragOver:v.a.func,onEnhancerDragEnd:v.a.func,onEnhancerDrop:v.a.func};var m,E=Object(f.b)(b),O=r(58),S=r.n(O),w=(m=function(e){function t(){var t,r;if((t=e.call(this)||this)._isDragging=!1,t._hotkeyBinder=D.W.get("hotkeyBinder"),t._virtualEditable=D.W.get("virtualEditable"),t._wrapperDomRef=v.b.createRef(),"undefined"==typeof DragEvent||D.W.get("configAgent").isMobile())return t._shouldUseNativeDragEvent=!0,S()(t);try{new DragEvent("dragover"),r=!0}catch(e){r=!1}return t._dispatchDragEvent=r?function(e,t,r){var n=new DragEvent(e,r);t&&t.dispatchEvent(n)}:function(e,t,r){var n=document.createEvent("DragEvent"),o=r.bubbles,i=r.cancelable,a=r.view,s=r.detail,p=r.screenX,c=r.screenY,d=r.clientX,u=r.clientY,l=r.ctrlKey,g=r.altKey,h=r.shiftKey,y=r.metaKey,_=r.button,v=r.relatedTarget;n.initMouseEvent(e,o,i,a,s,p,c,d,u,l,g,h,y,_,v),t.dispatchEvent(n)},t}i()(t,e);var r=t.prototype;return r.componentWillUnmount=function(){this._isDragging&&this._finishDragging()},r.render=function(){return this._shouldUseNativeDragEvent?v.b.createElement("div",{ref:this._wrapperDomRef,className:"se-dnd-wrap se-dnd-wrap-native"},this.props.children):v.b.createElement("div",{ref:this._wrapperDomRef,className:"se-dnd-wrap",onDragStart:this._handleDragStart,onMouseEnter:this._handleMouseEnter,onMouseLeave:this._handleMouseLeave,onMouseMoveCapture:this._handleMouseMove,onMouseUp:this._handleMouseUp},this.props.children)},r._handleDragStart=function(e){e.preventDefault(),this._startDragging(e.target)},r._handleMouseEnter=function(e){this._isDragging&&this._dispatchDragEvent("dragenter",e.target,e)},r._handleMouseLeave=function(e){this._isDragging&&this._dispatchDragEvent("dragleave",e.target,e)},r._handleMouseMove=function(e){this._isDragging&&(e.preventDefault(),this._dispatchDragEvent("dragover",e.target,e))},r._isEventOccuredInWrapper=function(e){return this._wrapperDomRef.current.contains(e)},r._handleMouseUp=function(e){this._isDragging&&(!0===this._isEventOccuredInWrapper(e.target)&&this._dispatchDragEvent("drop",e.target,e),this._dispatchDragEvent("dragend",this._draggingTarget,e),this._finishDragging())},r._startDragging=function(e){this._isDragging||(this._isDragging=!0,this._draggingTarget=e,this._hotkeyBinder.pause(),document.addEventListener("keydown",this._handleKeyDown,{capture:!0}),document.addEventListener("mouseup",this._handleMouseUp))},r._finishDragging=function(){this._isDragging&&(this._isDragging=!1,this._draggingTarget=null,this._hotkeyBinder.unpause(),document.removeEventListener("keydown",this._handleKeyDown,{capture:!0}),document.removeEventListener("mouseup",this._handleMouseUp))},r._handleKeyDown=function(e){if(this._isDragging){var t=e.key;e.preventDefault(),e.stopImmediatePropagation(),"PageUp"===t?this._virtualEditable.pageUp():"PageDown"===t?this._virtualEditable.pageDown():"Escape"!==t&&"Esc"!==t||(this._dispatchDragEvent("dragend",this._draggingTarget,e),this._finishDragging())}},t}(v.b.Component),s()(m.prototype,"_handleDragStart",[d.autobind],Object.getOwnPropertyDescriptor(m.prototype,"_handleDragStart"),m.prototype),s()(m.prototype,"_handleMouseEnter",[d.autobind],Object.getOwnPropertyDescriptor(m.prototype,"_handleMouseEnter"),m.prototype),s()(m.prototype,"_handleMouseLeave",[d.autobind],Object.getOwnPropertyDescriptor(m.prototype,"_handleMouseLeave"),m.prototype),s()(m.prototype,"_handleMouseMove",[d.autobind],Object.getOwnPropertyDescriptor(m.prototype,"_handleMouseMove"),m.prototype),s()(m.prototype,"_handleMouseUp",[d.autobind],Object.getOwnPropertyDescriptor(m.prototype,"_handleMouseUp"),m.prototype),s()(m.prototype,"_handleKeyDown",[d.autobind],Object.getOwnPropertyDescriptor(m.prototype,"_handleKeyDown"),m.prototype),m);w.propTypes={children:v.a.oneOfType([v.a.arrayOf(v.a.oneOfType([v.a.element,v.a.string])),v.a.element])};var M,C=Object(f.b)(w);r.d(t,"a",function(){return k}),r.d(t,"b",function(){return P});var k=v.b.createContext({readOnly:!1}),P=(M=function(e){function t(t){var r;(r=e.call(this,t)||this).state={errorToggle:!1};var n=t.errorRecoveryUseCase,o=t.a11yFocusUseCase;return r._errorRecoveryUseCase=n,r._a11yFocusUseCase=o,r._elementRef=v.b.createRef(),window.addEventListener("error",r._handleError),r}i()(t,e);var r=t.prototype;return r.componentDidMount=function(){this._elementRef.current.addEventListener("focusin",this._handleFocus,!1)},r.componentWillUnmount=function(){this._elementRef.current.removeEventListener("focusin",this._handleFocus,!1),window.removeEventListener("error",this._handleError)},r.render=function(){var e=this.props,t=e.children,r=e.className,n=e.dragAndDropStore,o=e.dragAndDropUseCase,i=e.appId,a=e.language,s=e.editorStatusStore,p=e.isFlexible,d=e.outsideScroll,u=c()("se-body","__se-body",{"se-body-flexible":p,"se-body-without-scroll":d});return v.b.createElement(k.Provider,{value:{readOnly:s.readOnly}},v.b.createElement("div",{id:i,className:u,lang:a,ref:this._elementRef},v.b.createElement(E,{store:n,useCase:o,className:r,onEnhancerClick:this._handleClick,onEnhancerMouseDown:this._handleMouseDown,onEnhancerMouseUp:this._handleMouseUp,onEnhancerDragStart:this._handleDragStart,onEnhancerDragOver:this._handleDragOver,onEnhancerDrop:this._handleDrop,onEnhancerDragEnd:this._handleDragEnd},v.b.createElement(C,null,v.b.createElement(v.b.Fragment,null,t)))))},r._handleError=function(e){this._errorRecoveryUseCase.recoverError(e)},r._handleClick=function(e){u.a.triggerEvent("click",e)},r._handleMouseDown=function(e){u.a.triggerEvent("mousedown",e)},r._handleMouseUp=function(e){u.a.triggerEvent("mouseup",e)},r._handleDragStart=function(){},r._handleDrop=function(){},r._handleFocus=function(e){this._a11yFocusUseCase&&this._a11yFocusUseCase.handleFocus(e)},t}(v.b.Component),s()(M.prototype,"_handleError",[d.autobind],Object.getOwnPropertyDescriptor(M.prototype,"_handleError"),M.prototype),s()(M.prototype,"_handleClick",[d.autobind],Object.getOwnPropertyDescriptor(M.prototype,"_handleClick"),M.prototype),s()(M.prototype,"_handleMouseDown",[d.autobind],Object.getOwnPropertyDescriptor(M.prototype,"_handleMouseDown"),M.prototype),s()(M.prototype,"_handleMouseUp",[d.autobind],Object.getOwnPropertyDescriptor(M.prototype,"_handleMouseUp"),M.prototype),s()(M.prototype,"_handleDragStart",[d.autobind],Object.getOwnPropertyDescriptor(M.prototype,"_handleDragStart"),M.prototype),s()(M.prototype,"_handleDrop",[d.autobind],Object.getOwnPropertyDescriptor(M.prototype,"_handleDrop"),M.prototype),s()(M.prototype,"_handleFocus",[d.autobind],Object.getOwnPropertyDescriptor(M.prototype,"_handleFocus"),M.prototype),M);P.defaultProps={className:"",children:null},P.propTypes={errorRecoveryUseCase:v.a.instanceOf(y.a).isRequired,dragAndDropUseCase:v.a.instanceOf(h.a).isRequired,dragAndDropStore:v.a.instanceOf(l.a).isRequired,editorStatusStore:v.a.instanceOf(g.a).isRequired,a11yFocusUseCase:v.a.instanceOf(_.a),appId:v.a.string.isRequired,language:v.a.string.isRequired,children:v.a.oneOfType([v.a.element,v.a.array]),className:v.a.string,isFlexible:v.a.bool,outsideScroll:v.a.bool};Object(f.b)(P)},258:function(e,t,r){"use strict";r.d(t,"a",function(){return m});var n,o,i,a=r(12),s=r.n(a),p=r(18),c=r.n(p),d=r(0),u=r.n(d),l=r(50),g=r.n(l),h=r(67),y=r(96),_=r(16),v=r(51),f=r(49),D=r(686),b=r(52),m=(n=Object(b.history)({sync:!1}),o=Object(b.history)({sync:!1}),i=function(e){function t(){var t;return(t=e.call(this)||this)._imageBehavior=v.W.get("imageBehavior"),t._configAgent=v.W.get("configAgent"),t._toastLayerService=v.W.get("toastLayerService"),t._dragAndDropService=v.W.get("dragAndDropService"),t._finderService=v.W.get("finderService"),t._editingService=v.W.get("editingService"),t._canvasScrollingService=v.W.get("canvasScrollingService"),t._alertLayerService=v.W.get("alertLayerService"),t._canvasLayoutService=v.W.get("canvasLayoutService"),t._imageStripComponentService=v.W.get("imageStripComponentService"),t._imageComponentService=v.W.get("imageComponentService"),t._searchPanelLayoutService=v.W.get("searchPanelLayoutService"),t._i18n=v.W.get("i18n"),t}u()(t,e);var r=t.prototype;return r.dragStart=function(e){if(!this._dragAndDropService.isAleadyDragStart()){var t=this._finderService.getDraggableCompStoresWithinSelection();this._dragAndDropService.dragStart({event:e,items:t})}},r.dragEnter=function(e){this._dragAndDropService.dragEnter(e)},r.dragLeave=function(){this._dragAndDropService.dragLeave()},r.dragOver=function(e,t){this._dragAndDropService.dragOver(e,t),this._canvasScrollingService.scrollPage(e)},r.drop=function(){var e=c()(s.a.mark(function e(t,r){var n,o,i,a,p,c,d;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this._dragAndDropService.filterImageFiles(r),o=this._dragAndDropService.drop(t),i=n&&!1===Object(h.a)(n.nonImageFiles),this._canvasScrollingService.forceStopAutoScroll(),o){e.next=6;break}return e.abrupt("return");case 6:if(i&&(a=this._configAgent.get("infraConfig.image.acceptExt")||D.a.DEFAULT_IMAGE_ACCEPT_LIST,p=D.a.toPrintUpperText(a),this._alertLayerService.open({type:"alert",title:this._i18n("dragAndDropUseCase:file_format_error_title"),description:this._i18n("dragAndDropUseCase:file_format_error",{allowExtList:p})})),c=o.skipDrop,!(d=o.errorMsg)){e.next=11;break}return this._showWarning(d),e.abrupt("return");case 11:if(!c){e.next=13;break}return e.abrupt("return");case 13:e.t0=o.type,e.next="external-file"===e.t0?16:"library"===e.t0?19:"template"===e.t0?21:"aside"===e.t0?23:26;break;case 16:return e.next=18,this._dropExternalFile(o);case 18:return e.abrupt("break",27);case 19:return this._dropLibrary(o),e.abrupt("break",27);case 21:return this._dropTemplate(o),e.abrupt("break",27);case 23:return e.next=25,this._dropAside(o);case 25:return e.abrupt("break",27);case 26:this._dropDefault(o);case 27:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}(),r._dropDefault=function(e){var t=this._makeInsertMeta(e);this._dragAndDropService.setUpdateReadySelection(!0),this._editingService.move(t)},r._dropAside=function(){var e=c()(s.a.mark(function e(t){var r,n,o,i,a,p,c,d,u,l,g,h,v,f,D,b,m=this;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.insertPoint,n=t.items,o=t.targetCtype,i=t.targetCompId,a=this._makeInsertMeta(t),p=n[0],c=p.ctype,d=encodeURIComponent(p.src),"image"!==c){e.next=30;break}if("image"!==o&&"imageStrip"!==o){e.next=18;break}if(u=this._imageComponentService.createShellsFromCompData(n),l=u.imageCompStores,g=u.ids,a.items=l,h=this._editingService.insertByDrop(a),!this._imageStripComponentService.isImageCompIncluded(Object(_.a)(h,"start"),r)){e.next=15;break}return v=this._imageStripComponentService.getShellUnitInfoOfImageStripComp(h),f=v.unitStores,e.abrupt("return",this._imageBehavior.insert({validFiles:[d],invalidFiles:[]},{makeComponent:function(e){return{validImages:e,invalidImages:[],shellImageCompIds:g,shellImageComps:l}}}).then(function(e){e.succeededImages.forEach(function(e){var t=e.response,r=Object(y.a)(f,{id:t.id});m._imageStripComponentService.updateShellImageUnitBy(t,r,h.start.compId)})}));case 15:return e.abrupt("return",this._imageBehavior.insert({validFiles:[d],invalidFiles:[]},{makeComponent:function(e){return{validImages:e,invalidImages:[],shellImageCompIds:g}},onEachUpload:function(e){var t=e.code,r=e.response;"SUCCESS"===t&&m._imageComponentService.updateShellImageCompStore(r.id,r)}}));case 16:e.next=28;break;case 18:if("documentTitle"!==o){e.next=24;break}return e.next=21,this._imageBehavior.insertBackgroundFromUrls(i,[d]);case 21:return e.abrupt("return",e.sent);case 24:return D=this._insertByDrop.bind(this,a),e.next=27,this._imageBehavior.dropImageFromAside(n,D);case 27:return e.abrupt("return",e.sent);case 28:e.next=39;break;case 30:if("material"!==c||"news"!==p.type){e.next=38;break}return e.next=33,this._searchPanelLayoutService.itemDataToStore(p);case 33:b=e.sent,a.items=[b],this._editingService.insertByDrop(a),e.next=39;break;case 38:this._editingService.insertByDrop(a);case 39:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),r._makeInsertMeta=function(e){return{insertPoint:e.insertPoint,insertCommand:e.insertCommand,items:e.items}},r._dropTemplate=function(e){var t=this._makeInsertMeta(e);t.followCurrentAlign=!1,this._editingService.insertByDrop(t)},r._dropLibrary=function(e){var t=this._makeInsertMeta(e);this._editingService.insertByDrop(t)},r._dropExternalFile=function(){var e=c()(s.a.mark(function e(t){var r,n,o,i,a,p;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.items,n=t.targetCtype,o=t.targetCompId,i=this._makeInsertMeta(t),"documentTitle"!==n){e.next=9;break}return a=this._insertBackgroundImageByDrop.bind(this,i),e.next=6,this._imageBehavior.insertExternalBackground(o,[r[0]],a);case 6:return e.abrupt("return",e.sent);case 9:return p=this._insertByDrop.bind(this,i),e.next=12,this._imageBehavior.insertExternalImage(r,p);case 12:return e.abrupt("return",e.sent);case 13:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),r._insertByDrop=function(e,t){e.items=t,this._editingService.insertByDrop(e)},r._insertBackgroundImageByDrop=function(e,t){var r=this._dragAndDropService.getBackgroundImageData(t);e.items=[r],this._editingService.insertByDrop(e)},r.dragEnd=function(){this._dragAndDropService.reset(),this._canvasLayoutService.refreshVirtualEditable(),this._canvasScrollingService.forceStopAutoScroll()},r._showWarning=function(e){e&&this._toastLayerService.warningMessage(e)},r.hideIENativeDragGhost=function(e){this._dragAndDropService.hideIENativeDragGhost(e)},t}(v.m),g()(i.prototype,"dragStart",[b.preventOnComponentProcessing,f.d],Object.getOwnPropertyDescriptor(i.prototype,"dragStart"),i.prototype),g()(i.prototype,"dragEnter",[f.d],Object.getOwnPropertyDescriptor(i.prototype,"dragEnter"),i.prototype),g()(i.prototype,"dragLeave",[f.d],Object.getOwnPropertyDescriptor(i.prototype,"dragLeave"),i.prototype),g()(i.prototype,"dragOver",[f.d],Object.getOwnPropertyDescriptor(i.prototype,"dragOver"),i.prototype),g()(i.prototype,"drop",[b.sentryCatch,f.d],Object.getOwnPropertyDescriptor(i.prototype,"drop"),i.prototype),g()(i.prototype,"_dropDefault",[f.d,b.history],Object.getOwnPropertyDescriptor(i.prototype,"_dropDefault"),i.prototype),g()(i.prototype,"_dropAside",[f.d,n],Object.getOwnPropertyDescriptor(i.prototype,"_dropAside"),i.prototype),g()(i.prototype,"_dropTemplate",[b.history],Object.getOwnPropertyDescriptor(i.prototype,"_dropTemplate"),i.prototype),g()(i.prototype,"_dropLibrary",[b.history],Object.getOwnPropertyDescriptor(i.prototype,"_dropLibrary"),i.prototype),g()(i.prototype,"_dropExternalFile",[f.d,o],Object.getOwnPropertyDescriptor(i.prototype,"_dropExternalFile"),i.prototype),g()(i.prototype,"dragEnd",[f.d],Object.getOwnPropertyDescriptor(i.prototype,"dragEnd"),i.prototype),i)},752:function(e,t,r){"use strict";var n,o=r(50),i=r.n(o),a=r(51),s=r(49),p=r(16),c=r(90),d=(n=function(){function e(){this._canvasScrollingService=a.W.get("canvasScrollingService"),this._domAccessor=a.W.get("domAccessor"),this._virtualEditable=a.W.get("virtualEditable"),this._sentryManager=a.W.get("sentryManager"),this._interceptorAjaxError()}var t=e.prototype;return t.recoverError=function(e){if(this._canvasScrollingService.focusToFirstComp(),this._domAccessor.reset(),this._virtualEditable.recover(),!e)return!1;try{this._sentryManager.captureException(e)}catch(e){}},t._interceptorAjaxError=function(){var e=this;c.b.addResponseErrorInterceptor(function(t){var r=Object(p.a)(t,"response.status");if(!1===[200,400,403].includes(r)){var n=t;n.isSELog=!0,e._sentryManager.captureException(n)}},Number.MAX_SAFE_INTEGER)},e}(),i()(n.prototype,"recoverError",[s.d],Object.getOwnPropertyDescriptor(n.prototype,"recoverError"),n.prototype),n);t.a=d},753:function(e,t,r){"use strict";var n,o=r(50),i=r.n(o),a=r(51),s=r(49),p=(n=function(){function e(){this._a11yService=a.W.get("a11yService")}return e.prototype.handleFocus=function(e){var t=e.relatedTarget;t&&t!==document.body&&this._a11yService&&!this._a11yService.isInsideEditorWrapper(t)&&this._a11yService.focusToEditable()},e}(),i()(n.prototype,"handleFocus",[s.d],Object.getOwnPropertyDescriptor(n.prototype,"handleFocus"),n.prototype),n);t.a=p}}]);