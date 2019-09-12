(window["webpackJsonpflight-search-frontend"]=window["webpackJsonpflight-search-frontend"]||[]).push([[0],{33:function(e,t,n){e.exports=n(66)},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),u=n(28),o=n.n(u),i=(n(38),n(8)),s=n(9),l=n(11),c=n(10),p=n(12),d=(n(39),n(6)),m=(n(40),n(41),function(e){return r.a.createElement("div",{className:"Backdrop"},r.a.createElement("div",{className:"loader"}))}),h=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=null;this.props.departureSuggestion.length>0&&this.props.departure.length>0&&1===this.props.departureFocus&&(t=r.a.createElement("div",{className:"AutoComplete"},this.props.departureSuggestion.map((function(t,n){return r.a.createElement("div",{onMouseEnter:function(){return e.props.changeDepartureVal(t)},key:n},t)}))));var n=null;this.props.destinationSuggestion.length>0&&this.props.destination.length>0&&1===this.props.destinationFocus&&(n=r.a.createElement("div",{className:"AutoComplete"},this.props.destinationSuggestion.map((function(t,n){return r.a.createElement("div",{onMouseEnter:function(){return e.props.changeDestinationVal(t)},key:n},t)}))));var a=null;return this.props.error&&(a=this.props.error.map((function(e,t){return r.a.createElement("p",{key:t,className:"error"},e)}))),r.a.createElement("div",{className:"Home"},this.props.loading?r.a.createElement(m,null):null,r.a.createElement("h1",null,"Search Flight"),a,r.a.createElement("form",{onSubmit:function(t){return e.props.searchFlight(t)},className:""},r.a.createElement("div",{className:"FlightSearch"},r.a.createElement("div",{className:"FormInput"},r.a.createElement("input",{ref:this.departureRef,required:!0,onChange:function(t){return e.props.getSuggestions(t.target.value,"departure")},value:this.props.departure,onFocus:function(){return e.props.focusInDeparture()},onBlur:function(){return e.props.focusOutDeparture()},type:"text",placeholder:"Departure"}),t),r.a.createElement("div",{className:"FormInput"},r.a.createElement("input",{required:!0,onChange:function(t){return e.props.getSuggestions(t.target.value,"destination")},value:this.props.destination,onFocus:function(){return e.props.focusInDestination()},onBlur:function(){return e.props.focusOutDestination()},type:"text",placeholder:"Destination"}),n),r.a.createElement("div",{className:"FormInput"},r.a.createElement("input",{required:!0,onChange:function(t){return e.props.changeDepartureDate(t.target.value)},value:this.props.departureDate,type:"date",placeholder:"Departure Date"})),r.a.createElement("div",{className:"FormInput"},r.a.createElement("input",{onChange:function(t){return e.props.changeReturnDate(t.target.value)},value:this.props.returnDate,type:"date",placeholder:"Return Date"})),r.a.createElement("div",{className:"FormInput"},r.a.createElement("select",{onChange:function(t){return e.props.changeCabinClass(t.target.value)},required:!0,value:this.props.cabinClass,placeholder:"select cabin class",id:""},r.a.createElement("option",{value:""},"Select Cabin Class"),r.a.createElement("option",{value:"First"},"First"),r.a.createElement("option",{value:"Economy"},"Economy"),r.a.createElement("option",{value:"Premium"},"Premium"),r.a.createElement("option",{value:"Business"},"Business"),r.a.createElement("option",{value:"All"},"All"))),r.a.createElement("div",{className:"FormInput"},r.a.createElement("input",{required:!0,onChange:function(t){return e.props.changeAdult(t.target.value)},value:this.props.adult,type:"number",placeholder:"No of Adults"})),r.a.createElement("div",{className:"FormInput"},r.a.createElement("input",{required:!0,onChange:function(t){return e.props.changeChildren(t.target.value)},value:this.props.children,type:"number",placeholder:"No of Children"})),r.a.createElement("div",{className:"FormInput"},r.a.createElement("input",{required:!0,onChange:function(t){return e.props.changeInfants(t.target.value)},value:this.props.infants,type:"number",placeholder:"No of Infants"}))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{type:"submit"},"SEARCH")))}}]),t}(a.Component),g=n(29),f=n.n(g).a.create({baseURL:"https://bello-flight-search.herokuapp.com/api/"}),E=(n(59),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){console.log(this.props.data)}},{key:"render",value:function(){var e=null;return this.props.data&&(e=this.props.data.map((function(e,t){return r.a.createElement(a.Fragment,{key:t},r.a.createElement("div",null,t+1),r.a.createElement("div",null,e.departure.airport.name),r.a.createElement("div",null,e.departure.date," / ",e.departure.time),r.a.createElement("div",null,e.arrival.airport.name),r.a.createElement("div",null,e.arrival.date," / ",e.arrival.time),r.a.createElement("div",null,e.operating_airline.name))}))),r.a.createElement("div",{className:"Result"},r.a.createElement("div",{className:"ResultTable"},r.a.createElement("div",null,r.a.createElement("strong",null,"S/N")),r.a.createElement("div",null,r.a.createElement("strong",null,"DEPARTURE")),r.a.createElement("div",null,r.a.createElement("strong",null,"DEPARTURE DATE/TIME")),r.a.createElement("div",null,r.a.createElement("strong",null,"ARRIVAL")),r.a.createElement("div",null,r.a.createElement("strong",null,"ARRIVAL DATE/TIME")),r.a.createElement("div",null,r.a.createElement("strong",null,"AIRLINE")),e))}}]),t}(a.Component)),v=n(15),S=(n(60),function(){return r.a.createElement("div",{className:"Header"},r.a.createElement("div",{className:"Logo"},"Flight Search"),r.a.createElement("div",{className:"Links"},r.a.createElement(v.a,{to:"/"},"Home")))}),b=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),u=0;u<a;u++)r[u]=arguments[u];return(n=Object(l.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!1,error:!1,data:null,departureSuggestion:[],destinationSuggestion:[],departure:"",destination:"",departureFocus:0,destinationFocus:0,departureDate:"",returnDate:"",adult:"",children:"",infants:"",cabinClass:""},n.fetchFlight=function(){f.post("/")},n.getSuggestion=function(e,t){"departure"===t?(n.setState({departure:e}),f.get("/get_suggestion/?q=".concat(e)).then((function(e){n.setState({departureSuggestion:e.data.result})}))):(n.setState({destination:e}),f.get("/get_suggestion/?q=".concat(e)).then((function(e){n.setState({destinationSuggestion:e.data.result})})))},n.submitSearch=function(e){e.preventDefault(),alert("submitted");var t=n.state,a={departure_city:t.departure,destination_city:t.destination,departure_date:t.departureDate,return_date:t.returnDate,no_of_adults:t.adult,no_of_children:t.children,no_of_infants:t.infants,cabin_class:t.cabinClass};n.setState({loading:!0}),f.post("/flight_search/",a).then((function(e){n.setState({loading:!1,data:e.data}),n.props.history.push("/result")})).catch((function(e){n.setState({loading:!1}),n.setState({error:e.response.data})}))},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(S,null),r.a.createElement(d.Switch,null,r.a.createElement(d.Route,{path:"/result",render:function(){return r.a.createElement(E,{data:e.state.data,loading:e.state.loading,error:e.state.error})}}),r.a.createElement(d.Route,{path:"/",render:function(){return r.a.createElement(h,{loading:e.state.loading,departure:e.state.departure,destination:e.state.destination,adult:e.state.adult,infants:e.state.infants,children:e.state.children,getSuggestions:function(t,n){return e.getSuggestion(t,n)},error:e.state.error,departureSuggestion:e.state.departureSuggestion,destinationSuggestion:e.state.destinationSuggestion,focusInDeparture:function(){return e.setState({departureFocus:1})},focusOutDeparture:function(){return e.setState({departureFocus:0})},departureFocus:e.state.departureFocus,focusInDestination:function(){return e.setState({destinationFocus:1})},focusOutDestination:function(){return e.setState({destinationFocus:0})},destinationFocus:e.state.destinationFocus,changeDepartureVal:function(t){return e.setState({departure:t})},changeDestinationVal:function(t){return e.setState({destination:t})},changeDepartureDate:function(t){return e.setState({departureDate:t})},changeReturnDate:function(t){return e.setState({returnDate:t})},changeAdult:function(t){return e.setState({adult:t})},changeChildren:function(t){return e.setState({children:t})},changeInfants:function(t){return e.setState({infants:t})},changeCabinClass:function(t){return e.setState({cabinClass:t})},cabinClass:e.state.cabinClass,searchFlight:function(t){return e.submitSearch(t)}})}})))}}]),t}(a.Component),D=Object(d.withRouter)(b);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var F=n(32),C=r.a.createElement(F.BrowserRouter,null,r.a.createElement(D,null));o.a.render(C,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[33,1,2]]]);
//# sourceMappingURL=main.9b0813a2.chunk.js.map