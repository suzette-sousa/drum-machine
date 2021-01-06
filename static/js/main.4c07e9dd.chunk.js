(this["webpackJsonpdrum-machine"]=this["webpackJsonpdrum-machine"]||[]).push([[0],{13:function(e,t,s){},14:function(e,t,s){},15:function(e,t,s){"use strict";s.r(t);var n=s(0),r=s(1),a=s.n(r),c=s(7),o=s.n(c),i=(s(13),s(2)),d=s(3),l=s(5),p=s(4),u=function(e){return Object(n.jsx)("header",{className:"App-header",children:Object(n.jsx)("h1",{className:"text-center text-4xl my-6",children:"Drum machine"})})},m=function(e){Object(l.a)(s,e);var t=Object(p.a)(s);function s(){var e;Object(i.a)(this,s);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).playSound=function(){e.sound.play(),e.sound.currentTime=0,e.props.displaySound(e.props.id),e.sound.volume=e.props.volume},e.handleClick=function(){return e.playSound()},e.handleKeyPress=function(t){t.keyCode===e.props.keypad&&e.playSound()},e.componentDidMount=function(){return document.addEventListener("keydown",e.handleKeyPress)},e.componentWillUnmount=function(){return document.removeEventListener("keydown",e.handleKeyPress)},e}return Object(d.a)(s,[{key:"render",value:function(){var e=this;return Object(n.jsx)("span",{onClick:this.handleClick,children:Object(n.jsxs)("button",{disabled:!this.props.isPower,id:this.props.id,className:"drum-pad text-white bg-indigo-500 border-0 p-6 focus:outline-white hover:bg-indigo-600 text-3xl w-full",children:[this.props.itemPad,Object(n.jsx)("audio",{id:this.props.itemPad,className:"clip",src:this.props.src,ref:function(t){return e.sound=t},children:"Votre navigateur ne parvient pas \xe0 lire le fichier audio.'"})]})})}}]),s}(r.Component),h=function(e){Object(l.a)(s,e);var t=Object(p.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"flex items-center py-2",children:[Object(n.jsx)("span",{className:"mr-2 text-s text-gray-400",children:"Volume"}),Object(n.jsx)("input",{className:"overflow-hidden appearance-none bg-gray-600 h-4 w-128",type:"range",min:"0",max:"100",step:"1",onInput:this.props.changeVol,value:this.props.inputVol||0}),Object(n.jsx)("span",{className:"ml-2",children:this.props.inputVol})]})}}]),s}(r.Component),b=function(e){Object(l.a)(s,e);var t=Object(p.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"flex items-center justify-end py-2",children:[Object(n.jsx)("label",{htmlFor:"switchPower",className:"mr-2 text-s text-gray-400",children:"Power"}),Object(n.jsxs)("div",{className:"relative inline-block w-16 align-middle select-none transition duration-200 ease-in",children:[Object(n.jsx)("input",{type:"checkbox",name:"toggle",id:"switchPower",className:"toggle-checkbox absolute block w-8 h-8 rounded-full bg-indigo-400 appearance-none cursor-pointer focus:outline-white",onChange:this.props.switchPower,checked:this.props.isPower}),Object(n.jsx)("label",{htmlFor:"switchPower",className:"toggle-label block overflow-hidden h-8 rounded-full bg-gray-600 cursor-pointer"})]})]})}}]),s}(r.Component),j=(s(14),[{btn:"Q",keypad:81,descr:"Heater-1",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{btn:"W",keypad:87,descr:"Heater-2",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{btn:"E",keypad:69,descr:"Heater-3",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},{btn:"A",keypad:65,descr:"Heater-4_1",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},{btn:"S",keypad:83,descr:"Heater-6",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{btn:"D",keypad:68,descr:"Dsc_Oh",src:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{btn:"Z",keypad:90,descr:"KRP4_KICK_1",src:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},{btn:"X",keypad:88,descr:"Cev_H2",src:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"},{btn:"C",keypad:67,descr:"Brk_Snr",src:"https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"}]),f=function(e){Object(l.a)(s,e);var t=Object(p.a)(s);function s(){var e;return Object(i.a)(this,s),(e=t.call(this)).displaySound=function(t){return e.setState({displaySound:t})},e.changeVol=function(t){var s=t.target.value/100;e.setState({volume:s,inputVol:t.target.value})},e.switchPower=function(){return e.setState({isPower:!e.state.isPower})},e.state={displaySound:"Une lettre (clic ou clavier) = un son associ\xe9",isPower:!0,inputVol:50,volume:.5},e}return Object(d.a)(s,[{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(u,{}),Object(n.jsx)("main",{className:"main bg-black text-white",children:Object(n.jsxs)("div",{id:"drum-machine",children:[Object(n.jsx)("div",{id:"display",className:"text-center p-4 uppercase",children:this.state.displaySound}),Object(n.jsx)("div",{className:"grid grid-cols-3 gap-1",children:j.map((function(t,s){return Object(n.jsx)(m,{id:t.descr,itemPad:t.btn,src:t.src,displaySound:e.displaySound,keypad:t.keypad,volume:e.state.volume,isPower:e.state.isPower},s)}))}),Object(n.jsxs)("div",{className:"flex justify-between p-4",children:[Object(n.jsx)(h,{inputVol:this.state.inputVol,changeVol:this.changeVol}),Object(n.jsx)(b,{switchPower:this.switchPower,isPower:this.state.isPower})]})]})})]})}}]),s}(r.Component);o.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(f,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.4c07e9dd.chunk.js.map