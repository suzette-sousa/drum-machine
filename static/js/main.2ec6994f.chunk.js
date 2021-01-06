(this["webpackJsonpdrum-machine"]=this["webpackJsonpdrum-machine"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n(1),r=n.n(a),c=n(8),o=n.n(c),i=(n(14),n(2)),l=n(3),d=n(6),p=n(5),u=n(4),h=function(e){Object(p.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).playSound=function(){e.sound.play(),e.sound.currentTime=0,e.props.displaySound(e.props.id)},e.handleClick=function(){e.playSound()},e.handleKeyPress=function(t){t.keyCode===e.props.keypad&&e.playSound()},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyPress)}},{key:"render",value:function(){var e=this;return Object(s.jsx)("span",{onClick:this.handleClick,children:Object(s.jsxs)("button",{id:this.props.id,className:"drum-pad text-white bg-indigo-500 border-0 p-6 focus:outline-white hover:bg-indigo-600 text-3xl w-full",children:[this.props.itemPad,Object(s.jsx)("audio",{id:this.props.itemPad,className:"clip",src:this.props.src,ref:function(t){return e.sound=t},children:"Votre navigateur ne parvient pas \xe0 lire le fichier audio.'"})]})})}}]),n}(a.Component),m=(n(15),function(e){Object(p.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"flex items-center py-2",children:[Object(s.jsx)("span",{className:"mr-2 text-s text-gray-400",children:"Volume"}),Object(s.jsx)("input",{className:"overflow-hidden appearance-none bg-gray-200 h-4 w-128",type:"range",min:"1",max:"100",step:"1",value:this.props.inputVol,onChange:this.props.changeVol})]})}}]),n}(a.Component)),b=[{btn:"Q",keypad:81,descr:"applauses",src:"https://lasonotheque.org/UPLOAD/mp3/0021.mp3"},{btn:"W",keypad:87,descr:"birds",src:"https://lasonotheque.org/UPLOAD/mp3/0100.mp3"},{btn:"E",keypad:69,descr:"water",src:"https://lasonotheque.org/UPLOAD/mp3/0124.mp3"},{btn:"A",keypad:65,descr:"walking",src:"https://lasonotheque.org/UPLOAD/mp3/0085.mp3"},{btn:"S",keypad:83,descr:"inthetrain",src:"https://lasonotheque.org/UPLOAD/mp3/0212.mp3"},{btn:"D",keypad:68,descr:"bip",src:"https://lasonotheque.org/UPLOAD/mp3/0456.mp3"},{btn:"Z",keypad:90,descr:"eat",src:"https://lasonotheque.org/UPLOAD/mp3/1114.mp3"},{btn:"X",keypad:88,descr:"scream",src:"https://lasonotheque.org/UPLOAD/mp3/1228.mp3"},{btn:"C",keypad:67,descr:"bong",src:"https://lasonotheque.org/UPLOAD/mp3/2280.mp3"}],j=function(e){Object(p.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).displaySound=function(t){return e.setState({displaySound:t})},e.state={displaySound:"Une lettre (clic ou clavier) = un son associ\xe9",power:!0,volumeInput:50,volume:.5},e.changeVol=e.changeVol.bind(Object(d.a)(e)),e}return Object(l.a)(n,[{key:"changeVol",value:function(e){var t=e.target.value/100;this.setState({volume:t,inputVol:e.target.value})}},{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("header",{className:"App-header",children:Object(s.jsx)("h1",{className:"text-center text-4xl my-6",children:"Drum machine"})}),Object(s.jsxs)("main",{className:"main bg-black text-white",children:[Object(s.jsx)("div",{id:"display",className:"text-center p-4 uppercase",children:this.state.displaySound}),Object(s.jsx)("div",{id:"drum-machine",className:"grid grid-cols-3 gap-1",children:b.map((function(t,n){return Object(s.jsx)(h,{id:t.descr,itemPad:t.btn,src:t.src,displaySound:e.displaySound,keypad:t.keypad,volume:e.state.volume},n)}))}),Object(s.jsxs)("div",{className:"flex justify-between p-4",children:[Object(s.jsx)(m,{inputVol:this.state.inputVol,changeVol:this.changeVol}),Object(s.jsxs)("div",{className:"flex items-center justify-end py-2",children:[Object(s.jsx)("label",{htmlFor:"toggle",className:"mr-2 text-s text-gray-400",children:"Power"}),Object(s.jsxs)("div",{className:"relative inline-block w-16 align-middle select-none transition duration-200 ease-in",children:[Object(s.jsx)("input",{type:"checkbox",name:"toggle",id:"toggle",className:"toggle-checkbox absolute block w-8 h-8 rounded-full bg-white border-4 appearance-none cursor-pointer focus:outline-black"}),Object(s.jsx)("label",{htmlFor:"toggle",className:"toggle-label block overflow-hidden h-8 rounded-full bg-gray-300 cursor-pointer"})]})]})]})]})]})}}]),n}(a.Component);o.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(j,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.2ec6994f.chunk.js.map