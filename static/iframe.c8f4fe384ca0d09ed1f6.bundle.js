(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{173:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)({});t.a=a},174:function(e,t,n){"use strict";var r=n(676),a=n(264),o=new r.a({schema:a.a}),i={type:"sun",id:"sun",attributes:{name:"Sun",classification:"Fusion giant"}},l={type:"planet",id:"jupiter",attributes:{name:"Jupiter",classification:"gas giant",atmosphere:!0}},u={type:"planet",id:"earth",attributes:{name:"Earth",classification:"terrestrial",atmosphere:!0},relationships:{sun:{data:{type:"sun",id:"sun"}}}},d={type:"planet",id:"venus",attributes:{name:"Venus",classification:"terrestrial",atmosphere:!0}},c={type:"moon",id:"io",attributes:{name:"Io"},relationships:{planet:{data:{type:"planet",id:"jupiter"}}}},s={type:"moon",id:"europa",attributes:{name:"Europa"},relationships:{planet:{data:{type:"planet",id:"jupiter"}}}},p={type:"moon",id:"theMoon",attributes:{name:"The Moon"},relationships:{planet:{data:{type:"planet",id:"earth"}}}};o.update(function(e){return[e.addRecord(i),e.addRecord(l),e.addRecord(u),e.addRecord(d),e.addRecord(c),e.addRecord(s),e.addRecord(p)]}),t.a=o},264:function(e,t,n){"use strict";var r=new(n(14).d)({models:{planet:{attributes:{name:{type:"string"},classification:{type:"string"}},relationships:{sun:{type:"hasOne",model:"sun",inverse:"planets"},moons:{type:"hasMany",model:"moon",inverse:"planet"}}},moon:{attributes:{name:{type:"string"}},relationships:{planet:{type:"hasOne",model:"planet",inverse:"moons"}}},sun:{attributes:{name:{type:"string"},classification:{type:"string"}},relationships:{planets:{type:"hasMany",model:"planets",inverse:"sun"}}}}});t.a=r},265:function(e,t,n){"use strict";var r=n(24),a=n.n(r),o=n(8),i=n.n(o),l=n(6),u=n.n(l),d=n(7),c=n.n(d),s=n(11),p=n.n(s),f=n(12),m=n.n(f),y=n(13),v=n.n(y),h=n(5),b=n.n(h),R=n(4),S=n.n(R),E=n(0),g=n.n(E),C=n(1),O=n.n(C),A=n(172),k=n(157),T=n.n(k),_=n(159),j=n.n(_),q=n(267),I=n.n(q),w=function(e){function t(){var e,n;u()(this,t);for(var r=arguments.length,a=Array(r),o=0;o<r;o++)a[o]=arguments[o];return n=p()(this,(e=m()(t)).call.apply(e,[this].concat(a))),S()(b()(b()(n)),"build",function(){return n.props.buildRecord.apply(void 0,arguments)}),S()(b()(b()(n)),"add",I()(j.a.mark(function e(){var t,r,a,o,i=arguments;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props,r=t.beforeAdd,a=t.addRecord,o=t.onAdd,e.next=3,r();case 3:e.sent&&a.apply(void 0,i).then(o);case 5:case"end":return e.stop()}},e,this)}))),S()(b()(b()(n)),"update",I()(j.a.mark(function e(){var t,r,a,o,i=arguments;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props,r=t.beforeUpdate,a=t.updateRecord,o=t.onUpdate,e.next=3,r();case 3:e.sent&&a.apply(void 0,i).then(o);case 5:case"end":return e.stop()}},e,this)}))),S()(b()(b()(n)),"remove",I()(j.a.mark(function e(){var t,r,a,o,i,l,u,d=arguments;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(t=d.length,r=Array(t),a=0;a<t;a++)r[a]=d[a];return o=n.props,i=o.beforeRemove,l=o.removeRecord,u=o.onRemove,e.next=4,i();case 4:e.sent&&l.apply(void 0,r).then(function(){return u.apply(void 0,r)});case 6:case"end":return e.stop()}},e,this)}))),n}return v()(t,e),c()(t,[{key:"render",value:function(){var e={build:this.build,add:this.add,update:this.update,remove:this.remove};return this.props.children(e)}}]),t}(E.PureComponent);w.propTypes={children:O.a.func.isRequired,buildRecord:O.a.func,addRecord:O.a.func,updateRecord:O.a.func,removeRecord:O.a.func,onAdd:O.a.func,onUpdate:O.a.func,onRemove:O.a.func,beforeAdd:O.a.func,beforeUpdate:O.a.func,beforeRemove:O.a.func},w.defaultProps={buildRecord:function(){},addRecord:function(){},updateRecord:function(){},removeRecord:function(){},onAdd:function(){},onUpdate:function(){},onRemove:function(){},beforeAdd:function(){return!0},beforeUpdate:function(){return!0},beforeRemove:function(){return!0}};var D=w;w.__docgenInfo={description:"",methods:[{name:"build",docblock:null,modifiers:[],params:[{name:"...args",type:null}],returns:null},{name:"add",docblock:null,modifiers:["async"],params:[{name:"...args",type:null}],returns:null},{name:"update",docblock:null,modifiers:["async"],params:[{name:"...args",type:null}],returns:null},{name:"remove",docblock:null,modifiers:["async"],params:[{name:"...args",type:null}],returns:null}],displayName:"Crud",props:{buildRecord:{defaultValue:{value:"() => {}",computed:!1},type:{name:"func"},required:!1,description:"Function to build objectType."},addRecord:{defaultValue:{value:"() => {}",computed:!1},type:{name:"func"},required:!1,description:"Function to add record."},updateRecord:{defaultValue:{value:"() => {}",computed:!1},type:{name:"func"},required:!1,description:"Function to update record."},removeRecord:{defaultValue:{value:"() => {}",computed:!1},type:{name:"func"},required:!1,description:"Function to remove record."},onAdd:{defaultValue:{value:"() => {}",computed:!1},type:{name:"func"},required:!1,description:"Callback called when add() resolves. Provides added record."},onUpdate:{defaultValue:{value:"() => {}",computed:!1},type:{name:"func"},required:!1,description:"Callback called when update() resolves. Provides updated record."},onRemove:{defaultValue:{value:"() => {}",computed:!1},type:{name:"func"},required:!1,description:"Callback called when remove() resolves. Provides removed record."},beforeAdd:{defaultValue:{value:"() => true",computed:!1},type:{name:"func"},required:!1,description:"Callback called before add(). Takes a promise or function.\r\n   Return truthy value to proceed with add()"},beforeUpdate:{defaultValue:{value:"() => true",computed:!1},type:{name:"func"},required:!1,description:"Callback called before update(). Takes a promise or function.\r\n   Return truthy value to proceed with update()"},beforeRemove:{defaultValue:{value:"() => true",computed:!1},type:{name:"func"},required:!1,description:"Callback called before remove(). Takes a promise or function.\r\n   Return truthy value to proceed with remove()"},children:{type:{name:"func"},required:!0,description:"Callback with build, add, update, remove promises."}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\Crud.js"]={name:"Crud",docgenInfo:w.__docgenInfo,path:"src\\Crud.js"});var U=n(106),x=n.n(U),B=n(173);var P=function(e){var t=function(t){function n(){return u()(this,n),p()(this,m()(n).apply(this,arguments))}return v()(n,t),c()(n,[{key:"render",value:function(){var t=this;return g.a.createElement(B.a.Consumer,null,function(n){n.performTransforms;var r=x()(n,["performTransforms"]);return g.a.createElement(e,a()({},r,t.props,{children:t.props.children}),t.props.children)})}}]),n}(E.PureComponent);return t.displayName=function(e){return e.displayName||e.name||"Component"}(e),t},M=["id","type","related","relatedTo","children","queryStore","updateStore","buildRecord","addRecord","updateRecord","removeRecord","getRelationships"],L=function(e){function t(e){var n,r;if(u()(this,t),n=p()(this,m()(t).call(this,e)),S()(b()(b()(n)),"queryStoreById",function(e){n.props.queryStore(function(t){return t.findRecord({type:n.props.type,id:e})}).then(function(){return n.setState({loading:!1})}).catch(function(e){n.setState({loading:!1,error:e})})}),S()(b()(b()(n)),"queryStoreByRelation",function(e){var t=e.type,r=e.id;n.props.queryStore(function(e){return e.findRelatedRecord({type:t,id:r},n.props.type)}).then(function(){return n.setState({searchedAllSources:!0,loading:!1})}).catch(function(e){n.setState({loading:!1,error:e})})}),S()(b()(b()(n)),"setAttribute",function(e){return function(t){n.setState(function(r){var a=r[n.props.type];return S()({},n.props.type,i()({},a,{attributes:i()({},a.attributes,S()({},e,t))}))})}}),S()(b()(b()(n)),"setRelationship",function(e){return function(t){n.setState(function(r){var a=r[n.props.type];return S()({},n.props.type,i()({},a,{relationships:i()({},a.relationships,S()({},e,{data:t}))}))})}}),S()(b()(b()(n)),"onRemove",function(){var e,t=n.props,r=t.type,a=t.onRemove;n.setState((e={recordReference:null},S()(e,r,null),S()(e,"error",{message:"".concat(r," has been removed")}),e)),a&&a.apply(void 0,arguments)}),!e.related){var a,o=e.id&&!e[e.type];a={idReference:e.id,recordReference:e[e.type]},S()(a,e.type,e[e.type]||e.buildRecord(e.type)),S()(a,"loading",o),S()(a,"error",!1),r=a}if(e.related){var l,d=e.relatedTo&&!e[e.type],c=d?null:e[e.type];l={idReference:null,recordReference:c},S()(l,e.type,c),S()(l,"searchedAllSources",!1),S()(l,"loading",d),S()(l,"error",!1),r=l}return n.state=r,n}return v()(t,e),c()(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.id,n=e.related,r=e.relatedTo;this.state.loading&&(n&&r?this.queryStoreByRelation(r):t&&this.queryStoreById(t))}},{key:"componentDidUpdate",value:function(){var e=this.props,t=e.id,n=e.related,r=e.relatedTo;this.state.loading&&(n&&r?this.queryStoreByRelation(r):t&&this.queryStoreById(t))}},{key:"render",value:function(){var e=this,t=this.props,n=t.type,r=t.children,o=t.relatedTo,l=this.state[n],u=T()(this.props,M.concat([n])),d={loading:this.props.loading||this.state.loading,error:this.props.error||this.state.error};return g.a.createElement(D,a()({},this.props,{onRemove:this.onRemove}),function(t){var a=t.add,c=t.update,s=t.remove,p=l?i()({},l,{setAttribute:e.setAttribute,setRelationship:e.setRelationship,save:l&&!l.id?function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return a.apply(void 0,[l].concat(t))}:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return c.apply(void 0,[l].concat(t))},remove:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return s.apply(void 0,[l].concat(t))}}):null;if(d.loading||d.error){var f=i()(S()({},n,null),u,d);return"function"==typeof r?r(f):g.a.cloneElement(e.props.children,f)}return"function"==typeof r?r(i()(S()({},n,p),u,d)):g.a.cloneElement(e.props.children,i()(S()({},n,p),u,{relatedTo:o||l},d))})}}],[{key:"getDerivedStateFromProps",value:function(e,t){if(!e.related){var n,r,a,o=!!e.id&&e.id!==t.idReference,i=!e.id&&e.id!==t.idReference,l=!!e[e.type]&&e[e.type]!==t.recordReference,u=e.id&&!e[e.type];if(i){var d,c=e.buildRecord(e.type);return d={idReference:e.id,recordReference:c},S()(d,e.type,c),S()(d,"loading",!1),S()(d,"error",!1),d}return o?u?(r={idReference:e.id,recordReference:null},S()(r,e.type,null),S()(r,"loading",!0),S()(r,"error",!1),r):(n={idReference:e.id,recordReference:e[e.type]},S()(n,e.type,e[e.type]),S()(n,"loading",!1),S()(n,"error",!1),n):l?(a={idReference:e.id,recordReference:e[e.type]},S()(a,e.type,e[e.type]),S()(a,"loading",!1),S()(a,"error",!1),a):null}if(e.related){var s,p,f,m=!e.relatedTo,y=e.relatedTo&&!e[e.type]&&!t.searchedAllSources,v=!!e[e.type]&&e[e.type]!==t.recordReference,h=!e[e.type]&&t.searchedAllSources;return m?(s={recordReference:null},S()(s,e.type,null),S()(s,"searchedAllSources",!1),S()(s,"loading",!1),S()(s,"error",!1),s):y?(p={recordReference:null},S()(p,e.type,null),S()(p,"loading",!0),S()(p,"error",!1),p):v?(f={recordReference:e[e.type]},S()(f,e.type,e[e.type]),S()(f,"searchedAllSources",!1),S()(f,"loading",!1),S()(f,"error",!1),f):h&&e.required?{error:{message:"Related ".concat(e.type," has not been found while being required")}}:null}}}]),t}(E.PureComponent),N=P(L);t.a=Object(A.withData)(function(e){var t=e.id,n=e.type,r=e.related,a=e.relatedTo;return r&&a?S()({},n,function(e){return e.findRelatedRecord({type:a.type,id:a.id},n)}):t?S()({},n,function(e){return e.findRecord({type:n,id:t})}):{}},function(e,t){return(!t.related||!t.relatedTo||t.relatedTo.relationships&&t.relatedTo.relationships[t.type])&&(t.id||t.related)?i()({},t,e):i()({},e,t,S()({},t.type,null))})(N);L.propTypes={type:O.a.string,id:O.a.string,buildRecord:O.a.func,addRecord:O.a.func,updateRecord:O.a.func,removeRecord:O.a.func,beforeAdd:O.a.func,onAdd:O.a.func,beforeUpdate:O.a.func,onUpdate:O.a.func,beforeRemove:O.a.func,onRemove:O.a.func,related:O.a.bool,required:O.a.bool}},266:function(e,t,n){"use strict";var r=n(8),a=n.n(r),o=n(6),i=n.n(o),l=n(7),u=n.n(l),d=n(11),c=n.n(d),s=n(12),p=n.n(s),f=n(13),m=n.n(f),y=n(5),v=n.n(y),h=n(4),b=n.n(h),R=n(0),S=n.n(R),E=n(1),g=n.n(E),C=n(172),O=n(268),A=n.n(O),k=n(157),T=n.n(k),_=n(173),j=n(104),q=n.n(j),I=function(e,t){var n=Object.keys(t).reduce(function(e,n){return t[n]&&(e[n]=t[n]),e},{});return Object.entries(n).reduce(function(e,t){var n=q()(t,2),r=n[0],a=n[1];return function(){return e.apply(void 0,arguments)[r](a)}},e)},w=["id","type","related","relatedTo","children","queryStore","updateStore"],D=function(e){function t(e){var n;return i()(this,t),n=c()(this,p()(t).call(this,e)),b()(v()(v()(n)),"queryStore",function(){n.props.queryStore(function(e){return e.findRecords(A.a.singular(n.props.type))}).then(function(){return n.setState({loading:!1})}).catch(function(e){n.setState({loading:!1,error:e})})}),b()(v()(v()(n)),"queryStoreRelated",function(){n.props.queryStore(function(e){return e.findRecords(A.a.singular(n.props.type))}).then(function(){return n.setState({loading:!1})}).catch(function(e){n.setState({loading:!1,error:e})})}),b()(v()(v()(n)),"findOne",function(e){return n.props[n.props.type].find(function(t){return t.id===e})}),b()(v()(v()(n)),"find",function(e){var t=n.props[n.props.type];return e.map(function(e){return t.find(function(t){return t.id===e})})}),b()(v()(v()(n)),"findByAttribute",function(e){var t=e.attribute,r=e.value;return n.props[n.props.type].filter(function(e){return e.attributes[t]===r})}),b()(v()(v()(n)),"buildSaveTransforms",function(e){return function(t){return e.map(function(e){return e.id?t.replaceRecord(e):t.addRecord(e)})}}),b()(v()(v()(n)),"buildRemoveTransforms",function(e){return function(t){return e.map(function(e){return t.removeRecord(e)})}}),n.state={loading:!1,error:!1},n}return m()(t,e),u()(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e[this.props.type],n=e.related;t.length||this.setState({loading:!0},n?this.queryStoreRelated:this.queryStore)}},{key:"componentDidUpdate",value:function(e){var t=this.props[this.props.type];t===e[e.type]||t.length||this.setState({loading:!0},this.queryStore)}},{key:"render",value:function(){var e=this,t=this.props,n=t[this.props.type],r=t.type,o=t.relatedTo,i=t.children,l=T()(this.props,w.concat([r])),u={loading:this.props.loading||this.state.loading,error:this.props.error||this.state.error},d={findOne:this.findOne,find:this.find,findByAttribute:this.findByAttribute,all:function(){return n}};return S.a.createElement(_.a.Consumer,null,function(t){var n,c=t.performTransforms;if(u.loading||u.error){var s,p=a()({},l,(s={},b()(s,r,null),b()(s,"save",function(t){return c(e.buildSaveTransforms(t))}),b()(s,"remove",function(t){return c(e.buildRemoveTransforms(t))}),s),u);return"function"==typeof i?i(p):S.a.cloneElement(i,p)}var f=a()({},l,(n={},b()(n,r,d),b()(n,"save",function(t){return c(e.buildSaveTransforms(t))}),b()(n,"remove",function(t){return c(e.buildRemoveTransforms(t))}),n),u);return"function"==typeof e.props.children?i(f):S.a.cloneElement(i,a()({},f,{relatedTo:o}))})}}]),t}(R.PureComponent);t.a=Object(C.withData)(function(e){var t=e.type,n=e.related,r=e.relatedTo,a=e.sort,o=e.filter,i=e.page;return n&&r?b()({},t,function(e){return e.findRelatedRecords({type:r.type,id:r.id},t)}):b()({},t,I(function(e){return e.findRecords(A.a.singular(t))},{sort:a,filter:o,page:i}))})(D);D.propTypes={type:g.a.string,related:g.a.bool,queryStore:g.a.func,sort:g.a.oneOfType([g.a.string,g.a.object]),filter:g.a.oneOfType([g.a.string,g.a.object]),page:g.a.oneOfType([g.a.number,g.a.object])},D.__docgenInfo={description:"",methods:[{name:"queryStore",docblock:null,modifiers:[],params:[],returns:null},{name:"queryStoreRelated",docblock:null,modifiers:[],params:[],returns:null},{name:"findOne",docblock:null,modifiers:[],params:[{name:"id",type:null}],returns:null},{name:"find",docblock:null,modifiers:[],params:[{name:"ids",type:null}],returns:null},{name:"findByAttribute",docblock:null,modifiers:[],params:[{name:"{ attribute, value }",type:null}],returns:null},{name:"buildSaveTransforms",docblock:null,modifiers:[],params:[{name:"records",type:null}],returns:null},{name:"buildRemoveTransforms",docblock:null,modifiers:[],params:[{name:"records",type:null}],returns:null}],displayName:"Models",props:{type:{type:{name:"string"},required:!1,description:""},related:{type:{name:"bool"},required:!1,description:""},queryStore:{type:{name:"func"},required:!1,description:""},sort:{type:{name:"union",value:[{name:"string"},{name:"object"}]},required:!1,description:""},filter:{type:{name:"union",value:[{name:"string"},{name:"object"}]},required:!1,description:""},page:{type:{name:"union",value:[{name:"number"},{name:"object"}]},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\Models.js"]={name:"Models",docgenInfo:D.__docgenInfo,path:"src\\Models.js"})},610:function(e,t,n){"use strict";var r=n(24),a=n.n(r),o=n(0),i=n.n(o),l=n(265),u=function(e){return i.a.createElement(l.a,a()({},e,{type:"planet"}))};t.a=u,u.__docgenInfo={description:"",methods:[],displayName:"Planet"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook\\orbitStories\\Planet.js"]={name:"Planet",docgenInfo:u.__docgenInfo,path:".storybook\\orbitStories\\Planet.js"})},611:function(e,t,n){"use strict";var r=n(24),a=n.n(r),o=n(0),i=n.n(o),l=n(266),u=function(e){return i.a.createElement(l.a,a()({type:"planets"},e))};t.a=u,u.__docgenInfo={description:"",methods:[],displayName:"Planets"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook\\orbitStories\\Planets.js"]={name:"Planets",docgenInfo:u.__docgenInfo,path:".storybook\\orbitStories\\Planets.js"})},673:function(e,t,n){"use strict";var r=n(24),a=n.n(r),o=n(0),i=n.n(o),l=n(266),u=function(e){return i.a.createElement(l.a,a()({type:"moons"},e))};t.a=u,u.__docgenInfo={description:"",methods:[],displayName:"Moons"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook\\orbitStories\\Moons.js"]={name:"Moons",docgenInfo:u.__docgenInfo,path:".storybook\\orbitStories\\Moons.js"})},674:function(e,t,n){"use strict";var r=n(24),a=n.n(r),o=n(0),i=n.n(o),l=n(265),u=function(e){return i.a.createElement(l.a,a()({type:"sun"},e))};t.a=u,u.__docgenInfo={description:"",methods:[],displayName:"Sun"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook\\orbitStories\\Sun.js"]={name:"Sun",docgenInfo:u.__docgenInfo,path:".storybook\\orbitStories\\Sun.js"})},675:function(e,t){e.exports='"# OrbitClient" \r\n'},677:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(6),i=n.n(o),l=n(7),u=n.n(l),d=n(11),c=n.n(d),s=n(12),p=n.n(s),f=n(13),m=n.n(f),y=n(5),v=n.n(y),h=n(4),b=n.n(h),R=n(1),S=n.n(R),E=function(e){function t(e){var n;return i()(this,t),n=c()(this,p()(t).call(this,e)),b()(v()(v()(n)),"storeState",function(e){n.setState(e)}),n.state=e.store,n}return m()(t,e),u()(t,[{key:"render",value:function(){return this.props.children(this.state,this.storeState)}}]),t}(r.PureComponent),g=E;E.propTypes={children:S.a.func},E.__docgenInfo={description:"",methods:[{name:"storeState",docblock:null,modifiers:[],params:[{name:"value",type:null}],returns:null}],displayName:"StateContainer",props:{children:{type:{name:"func"},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook\\StateContainer.js"]={name:"StateContainer",docgenInfo:E.__docgenInfo,path:".storybook\\StateContainer.js"}),n.d(t,"a",function(){return C});var C=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return function(t,n){return a.a.createElement(g,{store:e},function(e,r){return n.state=e,n.storeState=r,t()})}}},678:function(e,t,n){n(269),n(679),e.exports=n(680)},680:function(e,t,n){"use strict";n.r(t),function(e){var t=n(6),r=n.n(t),a=n(7),o=n.n(a),i=n(11),l=n.n(i),u=n(12),d=n.n(u),c=n(13),s=n.n(c),p=n(0),f=n.n(p),m=n(79),y=n(670),v=n(671),h=n(113),b=n(172),R=n(174),S=n(173),E=n(264),g={buildRecord:function(e){return function(e){return{type:e,id:void 0,attributes:{name:"",classification:"",atmosphere:!0}}}(e)},addRecord:function(e){return R.a.update(function(t){return t.addRecord(e)})},updateRecord:function(e){return R.a.update(function(t){return t.replaceRecord(e)})},removeRecord:function(e){return R.a.update(function(t){return t.removeRecord(e)})},performTransforms:function(e){return R.a.update(e)},getRelationships:function(e){return E.a.models[e].relationships}},C=function(e){function t(e){var n;return r()(this,t),(n=l()(this,d()(t).call(this,e))).state={render:!1},n}return s()(t,e),o()(t,[{key:"componentDidMount",value:function(){var e=this;this.timeout=setTimeout(function(){return e.setState({render:!0})},300)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout)}},{key:"render",value:function(){return this.state.render?f.a.createElement(S.a.Provider,{value:g},f.a.createElement(b.DataProvider,{dataStore:R.a},this.props.story())):null}}]),t}(p.Component);Object(m.addDecorator)(y.withInfo),Object(m.addDecorator)(Object(v.withOptions)({name:"@exivity/orbit-client",url:"https://github.com/exivity/orbit-client",showAddonPanel:!0,addonPanelInRight:!0,hierarchySeparator:/\/|\./,hierarchyRootSeparator:/\|/})),Object(m.addDecorator)(function(e){return f.a.createElement("div",{style:{padding:"20px"}},f.a.createElement("style",null,"h1:first-child { margin-top: 0; }"),f.a.createElement(h.WithStyle,null,e()))}),Object(m.addDecorator)(function(e){return f.a.createElement(C,{story:e})});var O=n(784);Object(m.configure)(function(){O.keys().forEach(function(e){return O(e)})},e)}.call(this,n(196)(e))},695:function(e,t,n){var r={"./nestedObjectAssign":616,"./nestedObjectAssign.js":616};function a(e){var t=o(e);return n(t)}function o(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id=695},784:function(e,t,n){var r={"./OrbitClient.stories.js":785,"./docs.stories.js":788};function a(e){var t=o(e);return n(t)}function o(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id=784},785:function(e,t,n){"use strict";n.r(t),function(e){var t=n(6),r=n.n(t),a=n(7),o=n.n(a),i=n(11),l=n.n(i),u=n(12),d=n.n(u),c=n(13),s=n.n(c),p=n(0),f=n.n(p),m=n(79),y=n(677),v=n(610),h=n(611),b=n(673),R=n(674),S=function(e,t){return"function"==typeof t?"function":t},E=function(e){var t=e.children;return f.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",width:1e3}},t)},g=function(e){var t=e.state,n=e.storeState;return f.a.createElement("div",null,f.a.createElement("label",null,"Id prop:"),f.a.createElement("input",{style:{marginLeft:10},value:t.planetId||"",onChange:function(e){return n({planetId:e.target.value,beforeAddCalled:!1,onAddCalled:!1,beforeUpdateCalled:!1,onUpdateCalled:!1,beforeRemoveCalled:!1,onRemoveCalled:!1})}}))},C=function(e){var t=e.planet,n=e.state;return f.a.createElement("div",null,f.a.createElement("h3",null,"Planet"),f.a.createElement("form",{style:{display:"flex",flexDirection:"column",justifyContent:"space-around",height:500}},f.a.createElement("label",null,"Name:"),f.a.createElement("input",{value:t.attributes.name,onChange:function(e){return t.setAttribute("name")(e.target.value)}}),f.a.createElement("label",null,"Classification:"),f.a.createElement("input",{value:t.attributes.classification,onChange:function(e){return t.setAttribute("classification")(e.target.value)}}),f.a.createElement("label",null,"Atmosphere:"),f.a.createElement("input",{type:"checkbox",value:t.attributes.atmosphere,onChange:function(e){return t.setAttribute("atmosphere")(e.target.checked)}}),f.a.createElement("button",{onClick:function(e){e.preventDefault(),t.save()}},"Save"),f.a.createElement("button",{onClick:function(e){e.preventDefault(),t.remove()}},"Delete"),f.a.createElement("h3",null,"Callbacks"),f.a.createElement("div",null,"beforeAdd called: ".concat(n.beforeAddCalled)),f.a.createElement("div",null,"onAdd called: ".concat(n.onAddCalled)),f.a.createElement("div",null,"beforeUpdate called: ".concat(n.beforeUpdateCalled)),f.a.createElement("div",null,"onUpdate called: ".concat(n.onUpdateCalled)),f.a.createElement("div",null,"beforeRemove called: ".concat(n.beforeRemoveCalled)),f.a.createElement("div",null,"onRemove called: ".concat(n.onRemoveCalled))))},O=function(e){var t=e.planet;return f.a.createElement("div",null,f.a.createElement("h3",null,"Active Record"),f.a.createElement("pre",null,JSON.stringify(t,S,2)))},A=function(e){function t(){return r()(this,t),l()(this,d()(t).apply(this,arguments))}return s()(t,e),o()(t,[{key:"render",value:function(){return f.a.createElement("div",null,f.a.createElement("h3",null,"All planet id's"),f.a.createElement(h.a,null,function(e){var t=e.planets;return f.a.createElement("ul",null,t.all().map(function(e){return f.a.createElement("li",{key:e.id},e.id)}))}))}}]),t}(p.PureComponent),k=function(e){function t(){return r()(this,t),l()(this,d()(t).apply(this,arguments))}return s()(t,e),o()(t,[{key:"render",value:function(){var e=this.props,t=e.moons,n=e.sun;return f.a.createElement("div",null,f.a.createElement("h3",null,"Related moons"),f.a.createElement("ul",null,t.all().map(function(e){return f.a.createElement("li",{key:e.id},e.id)})),f.a.createElement("h3",null,"Related sun"),f.a.createElement("ul",null,f.a.createElement("li",{key:n&&n.id},n&&n.id)))}}]),t}(p.PureComponent),T=function(){return new Promise(function(e){setTimeout(function(){return e(!0)},3e3)})};Object(m.storiesOf)("components|orbit-client",e).addDecorator(function(e){return f.a.createElement("div",{style:{width:400,border:1}},e())}).addDecorator(Object(y.a)({planetId:"earth",beforeAddCalled:!1,onAddCalled:!1,beforeUpdateCalled:!1,onUpdateCalled:!1,beforeRemoveCalled:!1,onRemoveCalled:!1,sortOrder:"ascending"})).add("Single entity",function(e){var t=e.state,n=e.storeState;return f.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},f.a.createElement(g,{state:t,storeState:n}),f.a.createElement(v.a,{id:t.planetId,beforeAdd:function(){return n({beforeAddCalled:!0}),T()},onAdd:function(e){return n({planetId:e.id,onAddCalled:!0})},beforeUpdate:function(){return n({beforeUpdateCalled:!0}),T()},onUpdate:function(e){return n({planetId:e.id,onUpdateCalled:!0})},beforeRemove:function(){return n({beforeRemoveCalled:!0}),T()},onRemove:function(e){n({planetId:e.id,onRemoveCalled:!0}),setTimeout(function(){return n({planetId:void 0})},2e3)}},function(e){var n=e.planet,r=e.loading,a=e.error;return a?a.message:r?"Loading":f.a.createElement(E,null,f.a.createElement(C,{planet:n,state:t}),f.a.createElement(O,{planet:n}),f.a.createElement(A,null))}))}).add("Single entity with relations",function(e){var t=e.state,n=e.storeState;return f.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},f.a.createElement(g,{state:t,storeState:n}),f.a.createElement(v.a,{id:t.planetId},f.a.createElement(b.a,{related:!0},f.a.createElement(R.a,{related:!0},function(e){var n=e.planet,r=e.moons,a=e.sun,o=e.loading,i=e.error;return i?i.message:o?"Loading":f.a.createElement(E,null,f.a.createElement(C,{planet:n,state:t}),f.a.createElement(O,{planet:n}),f.a.createElement(A,null),f.a.createElement(k,{moons:r,sun:a}))}))))}).add("Multiple entities",function(e){var t=e.state,n=e.storeState;return f.a.createElement("div",null,f.a.createElement("h3",null,"All planet id's"),f.a.createElement(h.a,{sort:{attribute:"name",order:t.sortOrder}},function(e){var r=e.planets,a=e.save,o=e.remove;return f.a.createElement("div",null,f.a.createElement("ul",null,r.all().map(function(e){return f.a.createElement("li",{key:e.id},e.id)})),f.a.createElement("button",{onClick:function(){return a([{type:"planet",id:"mars",attributes:{name:"Mars"}},{type:"planet",id:"exivity to the moon",attributes:{name:"Rocket"}},{type:"planet",id:"neptunus",attributes:{name:"Neptunusr"}}])}},"Create records"),f.a.createElement("button",{onClick:function(){return o(r.all())}},"Delete all records"),f.a.createElement("button",{onClick:function(){n({sortOrder:"ascending"===t.sortOrder?"descending":"ascending"})}},t.sortOrder))}))})}.call(this,n(196)(e))},788:function(e,t,n){"use strict";n.r(t),function(e){var t=n(0),r=n.n(t),a=n(79),o=n(113),i=n(675),l=n.n(i);Object(a.storiesOf)("Docs",e).addDecorator(function(e){return r.a.createElement("div",{style:{maxWidth:"50rem"}},e())}).add("Introduction",function(){return r.a.createElement(o.Markdown,null,l.a)}).add("Installation",function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Installation"),r.a.createElement("p",null,"With ",r.a.createElement(o.Code,null,"yarn"),":"),r.a.createElement(o.CodeBlock,null,"yarn add @exivity/proton"),r.a.createElement("p",null,"With ",r.a.createElement(o.Code,null,"npm"),":"),r.a.createElement(o.CodeBlock,null,"npm i @exivity/proton"))}).add("Usage",function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Usage"))}).add("Development",function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Development"))})}.call(this,n(196)(e))}},[[678,3,2]]]);
//# sourceMappingURL=iframe.c8f4fe384ca0d09ed1f6.bundle.js.map