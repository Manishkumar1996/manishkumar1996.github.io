(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],{31:function(e,t,a){e.exports=a(42)},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),s=a.n(c),u=a(8),l=a(16),o=a(3),i=a(28),d=a(18),m=a(5),b=function(e){return{type:"CREATE_TEAM",data:e}},f=function(e){return{type:"CREATE_USER",data:e}},h=function(e){return{type:"UPDATE_USER",data:e}},p=function(e){return{type:"DELETE_USER",data:e}},E=function(e){return{type:"SELECT_TEAM",data:e}},v=function(e){return e+Math.random().toString(36).substr(2,9)},j=function(e,t){for(var a=0;a<e.length-1;a++)e[a].id===t.id&&(e[a]=t);return e},O=function(e,t){return e.length&&(t=t||e[0].id),t},y=function(e,t,a){var n=e.filter((function(e){return e.id===t}))[0];return n.users=[Object(m.a)({},a,{id:v("user_")})].concat(Object(d.a)(n.users)),j(e,n)},_=function(e,t,a){var n=e.filter((function(e){return e.id===t}))[0];return n.users=n.users.map((function(e){return e.id===a.id?a:e})),j(e,n)},g=function(e,t,a){var n=e.filter((function(e){return e.id===t}))[0];return n.users=n.users.filter((function(e){return e.id!==a.id})),j(e,n)},N={selectId:"",list:[],isFetching:!1,error:!1,message:null,retry:!1},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_TEAM":return Object(m.a)({},e,{list:[].concat(Object(d.a)(e.list),[t.data]),selectId:O([].concat(Object(d.a)(e.list),[t.data]),e.selectId)});case"CREATE_USER":return Object(m.a)({},e,{list:y(e.list,e.selectId,t.data.user)});case"UPDATE_USER":return Object(m.a)({},e,{list:_(e.list,e.selectId,t.data.user)});case"DELETE_USER":return Object(m.a)({},e,{list:g(e.list,e.selectId,t.data.user)});case"SELECT_TEAM":return Object(m.a)({},e,{selectId:t.data.id});default:return Object(m.a)({},e)}},T=Object(o.c)({dashboard:C}),U=function(){return Object(o.c)({dashboard:T})},S=Object(o.a)(i.a),k=Object(o.d)(U(),S),D=a(2),I=a(11),A=a(12),R=a(14),w=a(13),M=a(30),x=function(e){Object(R.a)(a,e);var t=Object(w.a)(a);function a(e){var n;return Object(I.a)(this,a),(n=t.call(this,e)).teamList=[{label:"Team",value:"team"}],n.handleCreateTeam=function(e){e.preventDefault(),n.props.createTeam(Object(m.a)({id:v("team_")},n.state)),n.setState({team_type:"",team_name:""})},n.state={team_name:"",team_type:"",users:[]},n}return Object(A.a)(a,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this,t=this.state,a=t.team_name,n=t.team_type;return r.a.createElement("div",{className:"dashboard-header-container"},r.a.createElement("div",{className:"dashboard-header"},r.a.createElement("div",{className:"dashboard-team-create"},r.a.createElement("form",{onSubmit:function(t){return e.handleCreateTeam(t)}},r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"form-group col"},r.a.createElement("label",{htmlFor:"pwd"},"Select Type:"),r.a.createElement(M.a,{className:"custom-react-select",options:this.teamList,placeholder:"choose Any",value:this.teamList.filter((function(e){return e.value===n}))[0]||"",onChange:function(t){var a=t.value;return e.setState({team_type:a})}})),r.a.createElement("div",{className:"form-group col"},r.a.createElement("label",{htmlFor:"name"},"Team Name"),r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Enter here",value:a||"",required:!0,onChange:function(t){return e.setState({team_name:t.target.value})}})),r.a.createElement("div",{className:"col d-flex justify-content-end align-items-center"},r.a.createElement("button",{type:"submit",className:"btn btn-warning btn-sm team-create-button"},"CREATE")))))))}}]),a}(r.a.Component),L=Object(u.b)((function(e){return{}}),(function(e){return Object(o.b)({createTeam:b},e)}))(Object(D.f)(x)),F=function(e){Object(R.a)(a,e);var t=Object(w.a)(a);function a(e){var n;return Object(I.a)(this,a),(n=t.call(this,e)).handleClickSelect=function(e){n.props.selectTeam({id:e})},n.state={},n}return Object(A.a)(a,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props.dashboard,a=t.list,n=t.selectId;return r.a.createElement("div",{className:"sidenavbar-container"},r.a.createElement("h2",{className:"sidenavbar-header"},"Teams"),r.a.createElement("ul",{className:"list-unstyled sidenavbar-list-container"},a.map((function(t){return r.a.createElement("li",{key:t.id,className:"sidenavbar-list ".concat(t.id===n?"active":""),onClick:function(){return e.handleClickSelect(t.id)}},t.team_name)}))))}}]),a}(r.a.Component),q=Object(u.b)((function(e){return{dashboard:e.dashboard.dashboard}}),(function(e){return Object(o.b)({selectTeam:E},e)}))(Object(D.f)(F)),P=function(e){Object(R.a)(a,e);var t=Object(w.a)(a);function a(e){var n;return Object(I.a)(this,a),(n=t.call(this,e)).handleChangeDescription=function(e){n.setState({user_description:e.target.value},(function(){n.handleUpdateUser()})),e.target.style.height="auto",e.target.style.height=e.target.scrollHeight+"px"},n.handleUpdateUser=function(){var e=n.props.user;e.id&&n.props.updateUser({user:Object(m.a)({},e,{},n.state)})},n.handleCreate=function(e){e.preventDefault(),n.props.createUser({user:Object(m.a)({},n.state)}),n.setState({user_name:"",user_description:""})},n.handleDelete=function(){var e=n.props.user;n.props.deleteUser({user:e})},n.state={user_name:e.user?e.user.user_name:"",user_description:e.user?e.user.user_description:""},n}return Object(A.a)(a,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(e,t,a){var n=this.props,r=n.selectId,c=n.user;r!==e.selectId&&this.setState({user_name:c.user_name,user_description:c.user_description})}},{key:"render",value:function(){var e=this,t=this.state,a=t.user_name,n=t.user_description,c=this.props.user;return r.a.createElement("div",{className:"user-card"},r.a.createElement("form",{onSubmit:this.handleCreate},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"form-label",htmlFor:"user-name"},"Name"),r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Enter here",value:a||"",required:!0,onChange:function(t){return e.setState({user_name:t.target.value},e.handleUpdateUser)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"form-label",htmlFor:"user-name"},"Description"),r.a.createElement("textarea",{className:"form-control user-description",value:n||"",required:!0,onChange:function(t){return e.handleChangeDescription(t)}})),!c.id&&r.a.createElement("button",{type:"submit",className:"btn btn-sm btn-warning user-card-button"},"Create User +")),!!c.id&&r.a.createElement("button",{className:"btn btn-sm btn-danger user-card-button",onClick:this.handleDelete},"Delete User -"))}}]),a}(r.a.Component);P.defaultProps={selectId:"",user:{}};var J=Object(u.b)((function(e){return{dashboard:e.dashboard.dashboard}}),(function(e){return Object(o.b)({createUser:f,deleteUser:p,updateUser:h},e)}))(Object(D.f)(P)),W=function(e){Object(R.a)(a,e);var t=Object(w.a)(a);function a(e){var n;return Object(I.a)(this,a),(n=t.call(this,e)).state={search:""},n}return Object(A.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props.dashboard,a=t.list,n=t.selectId,c=this.state.search;if(!n)return null;var s=a.filter((function(e){return e.id===n}))[0],u=s.users||[];return c&&(u=u.filter((function(e){return function(e,t){return e.user_name.toLowerCase().includes(t.toLowerCase())}(e,c)}))),r.a.createElement("div",{className:"user-card-container"},r.a.createElement("div",{className:"d-flex justify-content-between user-card-container-header"},r.a.createElement("h2",{className:"user-container-heading"},s.team_name),r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Search user by name",value:c||"",onChange:function(t){return e.setState({search:t.target.value})}})),r.a.createElement("div",{className:"user-cards"},r.a.createElement(J,null),u.map((function(e){return r.a.createElement(J,{key:e.id,user:e,selectId:n})}))))}}]),a}(r.a.Component),B=Object(u.b)((function(e){return{dashboard:e.dashboard.dashboard}}),(function(e){return Object(o.b)({},e)}))(Object(D.f)(W)),H=function(e){Object(R.a)(a,e);var t=Object(w.a)(a);function a(){return Object(I.a)(this,a),t.apply(this,arguments)}return Object(A.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",{className:"dashboard-container"},r.a.createElement(L,null),r.a.createElement("div",{className:"dashboard-team-user-container"},r.a.createElement("div",{className:"dashboard-team-col"},r.a.createElement(q,null)),r.a.createElement("div",{className:"dashboard-user-col"},r.a.createElement(B,null))))}}]),a}(n.Component),z=Object(u.b)((function(e){return{dashboard:e.dashboard.dashboard}}),(function(e){return Object(o.b)({},e)}))(H);var G=function(){return r.a.createElement("div",null,r.a.createElement(D.c,null,r.a.createElement(D.a,{exact:!0,path:"/",component:z})))};a(41);s.a.render(r.a.createElement(u.a,{store:k},r.a.createElement(l.a,null,r.a.createElement(G,null))),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.c96f4266.chunk.js.map