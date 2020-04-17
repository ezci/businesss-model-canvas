(this["webpackJsonpbusiness-model"]=this["webpackJsonpbusiness-model"]||[]).push([[0],{140:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(11),o=a.n(i),r=(a(45),a(4)),l=a(5),c=a(1),h=a(7),u=a(6),d=(a(46),a(37)),m=a.n(d),g=(a(56),a(57),a(58)),v=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={height:100,text:n.props.text},n.handleTextChange=n.handleTextChange.bind(Object(c.a)(n)),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.setState({height:document.getElementById("block-"+this.props.name).offsetHeight-40})}},{key:"handleTextChange",value:function(e){this.props.textChange(e.target.value)}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"bmi-block",id:"block-"+this.props.name},s.a.createElement("p",{className:"bm-name"},this.props.name),this.props.edit?s.a.createElement("textarea",{style:{height:this.state.height},value:this.props.text,onChange:function(t){return e.handleTextChange(t)}}):s.a.createElement(g,{source:this.props.text}))}}]),a}(s.a.Component),f=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={width:1200,layout:[]},n.handleChartResize=function(e){n.props.changeLayout(e)},n.handleTextChange=n.handleTextChange.bind(Object(c.a)(n)),n.updateDimensions=n.updateDimensions.bind(Object(c.a)(n)),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.setState({width:window.innerWidth,height:.06*window.innerHeight,layout:this.props.layout,texts:this.props.texts}),window.addEventListener("resize",this.updateDimensions)}},{key:"updateDimensions",value:function(){this.setState({width:window.innerWidth,height:.06*window.innerHeight})}},{key:"handleTextChange",value:function(e,t){this.props.textChange(e,t)}},{key:"getBlocks",value:function(){var e=this;return this.props.layout.map((function(t,a){return s.a.createElement("div",{className:"bm-block",key:t.i},s.a.createElement(v,{edit:e.props.edit,textChange:function(a){return e.handleTextChange(a,t.i)},text:e.props.texts[t.i],name:t.i}))}))}},{key:"render",value:function(){return s.a.createElement(m.a,{className:"layout bl-layout",layout:this.props.layout,cols:10,width:this.state.width,onLayoutChange:this.handleChartResize,useCSSTransforms:!1,rowHeight:this.state.height},this.getBlocks())}}]),a}(s.a.Component),p=a(38),y=a(20),b=a(21),C=a.n(b),k=a(39),E=a.n(k),w=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={visible:!1},n}return Object(l.a)(a,[{key:"componentWillReceiveProps",value:function(e){this.props.visible!==e.visible&&this.setState({visible:e.visible})}},{key:"render",value:function(){var e="toast success ";return e+=this.state.visible?"visible":"",s.a.createElement("div",{className:e},s.a.createElement("figure",null,s.a.createElement("img",{src:E.a,alt:"success"})),s.a.createElement("p",null,this.props.message))}}]),a}(s.a.Component),x=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={edit:!1,showHeader:!1,showVersion:!1,header:"Business Model Name",version:"1.0",showToast:!1,message:"",layout:n.getInitialLayout(),texts:n.getInitialTexts()},n.toggleChange=function(){n.setState({showHeader:!n.state.showHeader})},n.toggleChangeEdit=function(){n.setState({edit:!n.state.edit})},n.toggleChangeVersion=function(){n.setState({showVersion:!n.state.showVersion})},n.handleHeaderChange=n.handleHeaderChange.bind(Object(c.a)(n)),n.handleVersionChange=n.handleVersionChange.bind(Object(c.a)(n)),n.saveToCookies=n.saveToCookies.bind(Object(c.a)(n)),n.printDocument=n.printDocument.bind(Object(c.a)(n)),n.saveAsImage=n.saveAsImage.bind(Object(c.a)(n)),n.resetLayout=n.resetLayout.bind(Object(c.a)(n)),n.handleLayoutChange=n.handleLayoutChange.bind(Object(c.a)(n)),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){try{var e=C.a.get("business_model");e&&(e=JSON.parse(e)).layout&&(this.updateLayout(e.layout),this.setState({texts:e.texts}))}catch(t){console.error("could not parse cookie")}}},{key:"updateLayout",value:function(e){this.setState({layout:[]},(function(){this.setState({layout:e})}))}},{key:"getInitialLayout",value:function(){return[{i:"Key Partners",x:0,y:0,w:2,h:8},{i:"Key Activities",x:2,y:0,w:2,h:4},{i:"Value Propositions",x:4,y:0,w:2,h:8},{i:"Customer Relations",x:6,y:0,w:2,h:4},{i:"Customer Segments",x:8,y:0,w:2,h:8},{i:"Channels",x:6,y:4,w:2,h:4},{i:"Key Resources",x:2,y:4,w:2,h:4},{i:"Cost",x:0,y:8,w:5,h:4},{i:"Revenue Streams",x:5,y:8,w:5,h:4}]}},{key:"getInitialTexts",value:function(){return{"Key Partners":"* Equinix (for data Center facilities)\n* Content Providers","Key Activities":"* Plateform Dvpt","Value Propositions":"* Manage Professionnal identity\n* Build Professionnal network\n* Identify & Reach the Right Talent\n* Reach the target Audience\n* Access to LinkedIn data base content via API's widgets","Customer Relations":"* Internet Users\n* * Recruiters\n* * Advertisers & Marketers\n* Developers\n* Free offerings & Premium Subscriptions\n* Hiring Solutions\n* Marketing Solutions","Customer Segments":"* Internet Users\n* Advertisers and Marketers\n* Developers\n* Recruiters",Channels:"* LinkedIn Website\n* Field Sales","Key Resources":"* LinkedIn Platform",Cost:"* Web Hosting Costs\n* Marketing & Sales\n* Product Dvpt\n* General Administrative","Revenue Streams":"* Free Offerings & Premium Subscriptions\n* Hiring Solutions\n* Marketing Solutions"}}},{key:"handleTextChange",value:function(e,t){var a=this.state.texts;a[t]=e,this.setState({texts:a})}},{key:"handleLayoutChange",value:function(e){this.setState({layout:e}),this.fit2Content()}},{key:"saveAsImage",value:function(){this.setState({edit:!1},(function(){var e=document.getElementById("divToPrint").offsetWidth,t=document.getElementById("divToPrint").offsetHeight;y(document.getElementById("divToPrint"),{width:e,height:t}).then((function(e){var t=document.createElement("a");t.download="business_model.png",t.href=e.toDataURL("image/png"),t.click()}))}))}},{key:"printDocument",value:function(){this.setState({edit:!1},(function(){var e=document.getElementById("divToPrint").offsetWidth,t=document.getElementById("divToPrint").offsetHeight;y(document.getElementById("divToPrint"),{width:e,height:t}).then((function(a){var n=a.toDataURL("image/png"),s=new p(t>e?"p":"l","mm","a4"),i=s.internal.pageSize.getWidth(),o=s.internal.pageSize.getHeight();e/t>i/o?s.addImage(n,"JPEG",0,0,i,t*i/e):s.addImage(n,"JPEG",0,0,e*o/t,o),s.save("business_model.pdf")}))}))}},{key:"saveToCookies",value:function(){this.setState({edit:!1}),C.a.set("business_model",{layout:this.state.layout,texts:this.state.texts}),this.showToast("model saved")}},{key:"resetLayout",value:function(){this.updateLayout(this.getInitialLayout()),this.setState({texts:this.getInitialTexts()}),this.showToast("model reset")}},{key:"handleHeaderChange",value:function(e){this.setState({header:e.target.value})}},{key:"handleVersionChange",value:function(e){this.setState({version:e.target.value})}},{key:"showToast",value:function(e){var t=this;this.setState({showToast:!0,message:e},(function(){setTimeout((function(){return t.setState({showToast:!1})}),3e3)}))}},{key:"fit2Content",value:function(){for(var e=document.getElementsByClassName("react-grid-item"),t=document.getElementById("divToPrint"),a=t.offsetWidth,n=t.offsetHeight,s=-1,i=-1,o=0;o<e.length;o++){var r=e[o].offsetTop+e[o].offsetHeight,l=e[o].offsetLeft+e[o].offsetWidth;i=r>i?r:i,s=l>s?l:s,n=e[o].offsetTop<n?e[o].offsetTop:n,a=e[o].offsetLeft<a?e[o].offsetLeft:a}t.style.width="".concat(s-a+20,"px"),t.style.height="".concat(i-n+20,"px")}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"main-app"},s.a.createElement("div",{className:"topbar"},s.a.createElement("h4",null,"Business Model Canvas"),s.a.createElement("button",{className:"generate",onClick:this.resetLayout},"Reset"),s.a.createElement("button",{className:"generate",onClick:this.saveAsImage},"Save as Image"),s.a.createElement("button",{className:"generate",onClick:this.printDocument},"Save as PDF"),s.a.createElement("button",{className:"cookify",onClick:this.saveToCookies},"Save to Cookies"),s.a.createElement("span",null,"Edit"),s.a.createElement("div",{className:"toggle-name"},s.a.createElement("input",{type:"checkbox",id:"toggly2",className:"toggly",checked:this.state.edit,onChange:this.toggleChangeEdit}),s.a.createElement("label",{className:"toggle-label",htmlFor:"toggly2"},s.a.createElement("i",null))),s.a.createElement("span",null,"Header"),s.a.createElement("div",{className:"toggle-name"},s.a.createElement("input",{type:"checkbox",id:"toggly",className:"toggly",checked:this.state.showHeader,onChange:this.toggleChange}),s.a.createElement("label",{className:"toggle-label",htmlFor:"toggly"},s.a.createElement("i",null))),s.a.createElement("span",null,"Version"),s.a.createElement("div",{className:"toggle-name"},s.a.createElement("input",{type:"checkbox",id:"toggly3",className:"toggly",checked:this.state.showVersion,onChange:this.toggleChangeVersion}),s.a.createElement("label",{className:"toggle-label",htmlFor:"toggly3"},s.a.createElement("i",null)))),s.a.createElement("div",{className:"grid-parent mt4",id:"divToPrint"},this.state.showHeader||this.state.showVersion?s.a.createElement("div",{className:"headers"},this.state.showHeader?s.a.createElement("div",{className:"header-container"},s.a.createElement("input",{type:"text",className:"header-input",value:this.state.header,onChange:function(t){e.handleHeaderChange(t)}})):"",this.state.showVersion?s.a.createElement("div",{className:"version-container"},"Version: ",s.a.createElement("input",{type:"text",className:"version-input",value:this.state.version,onChange:function(t){e.handleVersionChange(t)}})):""):"",s.a.createElement(f,{style:{position:"relative"},textChange:function(t,a){return e.handleTextChange(t,a)},texts:this.state.texts,changeLayout:function(t){return e.handleLayoutChange(t)},layout:this.state.layout,edit:this.state.edit})),s.a.createElement(w,{message:this.state.message,visible:this.state.showToast}))}}]),a}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},39:function(e,t,a){e.exports=a.p+"static/media/success.2c2e3fc7.svg"},40:function(e,t,a){e.exports=a(140)},45:function(e,t,a){},46:function(e,t,a){}},[[40,1,2]]]);