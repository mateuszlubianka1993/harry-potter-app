(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,a,t){},42:function(e,a,t){e.exports=t(77)},51:function(e,a,t){},52:function(e,a,t){},71:function(e,a,t){},72:function(e,a,t){},73:function(e,a,t){},74:function(e,a,t){},75:function(e,a,t){},77:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(20),s=t.n(c),l=t(13),o=t(16),i=t(40),m=Object(o.c)({houses:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"GET_HOUSES":return a.payload;default:return e}},spells:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"GET_SPELLS":return a.payload;default:return e}},characters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"GET_CHARACTERS":return a.payload;default:return e}}}),u=(t(51),t(7)),d=t(8),p=t(10),h=t(9),f=t(11),E=t(15),v=t(14),b=(t(52),function(){return r.a.createElement("div",{className:"header-container"},r.a.createElement("h1",{className:"header-txt"},"Harry Potter World"))}),g=t(17),y=t.n(g),N=t(23),O=t(22),j=t.n(O),k=j.a.create({baseURL:"https://www.potterapi.com/v1"}),w=j.a.create({baseURL:"http://hp-api.herokuapp.com/api"}),H="$2a$10$Qkw7sVZaDU8vi0MG3NjK6upi.nIKVJrJ8UcQQtk8GG3WolbshN.M6",x=(t(26),t(71),function(e){function a(){return Object(u.a)(this,a),Object(p.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(f.a)(a,e),Object(d.a)(a,[{key:"componentDidMount",value:function(){this.props.getSpells()}},{key:"render",value:function(){var e=this.props.spells.map(function(e){return r.a.createElement("div",{className:"card spell-card",key:e._id},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title spell-name"},e.spell),r.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},"Type: ",e.type),r.a.createElement("p",{className:"card-text"},"Effect: ",e.effect)))});return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"page-header"},r.a.createElement("h2",null,"List of spells")),r.a.createElement("div",{className:"page-list"},e))}}]),a}(r.a.Component)),S=Object(l.b)(function(e){return{spells:e.spells}},{getSpells:function(){return function(){var e=Object(N.a)(y.a.mark(function e(a){var t,n;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.get("/spells",{params:{key:H}});case 2:t=e.sent,n=t.data,a({type:"GET_SPELLS",payload:n});case 5:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}()}})(x),C=(t(72),function(e){function a(){return Object(u.a)(this,a),Object(p.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(f.a)(a,e),Object(d.a)(a,[{key:"componentDidMount",value:function(){this.props.getHouses()}},{key:"renderHouses",value:function(){return this.props.houses.map(function(e){return r.a.createElement("div",{className:"card house-card",key:e._id},r.a.createElement("div",{className:"card-header"},r.a.createElement("h5",{className:"card-title house-name"},e.name),r.a.createElement("p",{className:"blockquote-footer"},e.values.map(function(e){return r.a.createElement("span",{key:e},"".concat(e," "))}))),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"card-text"},"Mascot: ",e.mascot),r.a.createElement("p",{className:"card-text"},"Head of house: ",e.headOfHouse),r.a.createElement("p",{className:"card-text"},"House ghost: ",e.houseGhost),r.a.createElement("p",{className:"card-text"},"Founder: ",e.founder),r.a.createElement("p",{className:"card-text"},"Colors: ",e.colors.map(function(e){return r.a.createElement("span",{style:{color:"".concat(e)},key:e},"".concat(e," "))}))),r.a.createElement("div",{className:"card-footer text-muted"},e.school))})}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"page-header"},r.a.createElement("h2",null,"Hogwarts Houses")),r.a.createElement("div",{className:"page-list"},this.renderHouses()))}}]),a}(r.a.Component)),T=Object(l.b)(function(e){return{houses:e.houses}},{getHouses:function(){return function(){var e=Object(N.a)(y.a.mark(function e(a){var t,n;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.get("/houses",{params:{key:H}});case 2:t=e.sent,n=t.data,a({type:"GET_HOUSES",payload:n});case 5:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}()}})(C),G=(t(73),function(e){function a(){return Object(u.a)(this,a),Object(p.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(f.a)(a,e),Object(d.a)(a,[{key:"componentDidMount",value:function(){this.props.getCharacters()}},{key:"render",value:function(){var e=this.props.characters.map(function(e){return r.a.createElement("div",{className:"card character-card",key:e.name},r.a.createElement("img",{src:e.image,className:"card-img-top",alt:"character"}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},"".concat(e.name," "),r.a.createElement("span",{className:"badge badge-secondary character-badge"},e.species)),r.a.createElement("h6",null,"House: ".concat(e.house," "),r.a.createElement("span",{className:"badge badge-secondary character-badge"},e.hogwartsStudent?"student":"staff")),r.a.createElement("h6",null,e.dateOfBirth),r.a.createElement("p",{className:"card-text"},"Patronus: ",e.patronus),r.a.createElement("p",{className:"card-text"},"Actor: ",e.actor)))});return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"page-header"},r.a.createElement("h2",null,"Characters")),r.a.createElement("div",{className:"page-list"},e)))}}]),a}(r.a.Component)),M=Object(l.b)(function(e){return{characters:e.characters}},{getCharacters:function(){return function(){var e=Object(N.a)(y.a.mark(function e(a){var t,n;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.get("/characters");case 2:t=e.sent,n=t.data,a({type:"GET_CHARACTERS",payload:n});case 5:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}()}})(G),L=(t(74),function(e){function a(){return Object(u.a)(this,a),Object(p.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(f.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container-fluid home-container"},r.a.createElement("div",{className:"mask"},r.a.createElement("div",{className:"page-header home-header"},r.a.createElement("h2",null,"Welcome to Harry Potter world!")),r.a.createElement("div",{className:"home-content"},r.a.createElement("blockquote",{className:"blockquote"},r.a.createElement("p",{className:"mb-0 content-txt"},"Harry Potter is a series of fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry. The main story arc concerns Harry's struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic and subjugate all wizards and Muggles (non-magical people)."),r.a.createElement("footer",{className:"blockquote-footer"},"wikipedia.org")))))}}]),a}(r.a.Component)),P=(t(75),function(){return r.a.createElement("nav",{id:"main-nav",className:"navbar fixed-top navbar-expand-lg navbar-light app-nav"},r.a.createElement(E.b,{className:"navbar-brand",to:"/"},"H. P. World"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav ml-auto w-100 justify-content-end"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(E.b,{to:"/houses",className:"nav-link"},"Houses")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(E.b,{to:"/spells",className:"nav-link"},"Spells")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(E.b,{to:"/characters",className:"nav-link"},"Characters")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(E.b,{to:"/",className:"nav-link"},"Home")))))}),R=function(e){function a(){return Object(u.a)(this,a),Object(p.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(f.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"app-container"},r.a.createElement(E.a,null,r.a.createElement("div",null,r.a.createElement(b,null),r.a.createElement(P,null),r.a.createElement(v.a,{path:"/",exact:!0,component:L}),r.a.createElement(v.a,{path:"/spells",component:S}),r.a.createElement(v.a,{path:"/houses",component:T}),r.a.createElement(v.a,{path:"/characters",component:M}))))}}]),a}(r.a.Component),_=Object(o.d)(m,Object(o.a)(i.a));s.a.render(r.a.createElement(l.a,{store:_},r.a.createElement(R,null)),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.b179f419.chunk.js.map