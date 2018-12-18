import React from 'react';
import ReactDOM from 'react-dom';

const Info = props => (
   <div>
      <h1>Info</h1>
      <p>The info is: {props.info}</p>
   </div>
);

const withAdminWarning = (WrapedComponent) => {
   return props => (
      <div>
         {props.isAdmin && <p>This is private info. Please don't share !</p>}
         <WrapedComponent {...props}/>
      </div>
   );
};
const AdminInfo = withAdminWarning(Info);

const requireAuthentication = (WrapedComponent) => {
   return props => (
      <div>
         {props.isAuthenticated ? <WrapedComponent {...props}/> : <p>Pls authenticate in order to proceed</p>}
      </div>
   );
};
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="There are the details" />, document.querySelector('#app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="There are the details" />, document.querySelector('#app'));