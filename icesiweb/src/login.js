import React, {Component} from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebase';
import Button from '@material-ui/core/Button';

const firebaseApp = firebase.initializeApp(firebaseConfig);

class login extends Component {
    render(){
        const{user,signOut, signInWithGoogle}=this.props;
        return(
            <div > 
                {
                    user ?
                    <p>Hello, {user.displayName}</p>
                    :
                    <p>Please, sign in</p>
                }
                {
                    user ?<Button variant="contained" color="primary" onClick={signOut}>Sign out </Button>
                    :<Button variant="contained" color="primary" onClick={signInWithGoogle}>Sign in with Google</Button>
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