import React, {Component} from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebase';

const firebaseApp = firebase.initializeApp(firebaseConfig);

class login extends Component {
    render(){
        const{user,signOut, signInGoogle}=this.props;
        return(
            <div>
                {
                    user ?
                    <p>
                        Hello, {user.displayName}
                    </p>
                    :
                    <p>
                        Please, sign in
                    </p>
                }
                {
                    user ?<button onClick={signOut}>
                        Sign out 
                    </button>
                    :<button onClick={signInGoogle}>
                        Sign in with Google
                    </button>
                }
            </div>
        );
    }
}
const firebaseAppAuth=firebaseApp.auth();
const providers= {
    googleProvider: new firebase.auth.GoogleAuthProvider(),

};
export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
})(login);