/*import React, {Component} from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../config/firebaseConfig';
import Button from '@material-ui/core/Button';
import '../App.css';

/*const firebaseApp = firebase.initializeApp(firebaseConfig);  no se puede iniciar firebase dos veces  por eso me gustaba la otra manera */ 

/*class googleLogin extends Component {
    render(){
        const{user,signOut, signInWithGoogle}=this.props;
        return(
            <div > 
                {
                    user ?
                    <p>Hello, {user.displayName}</p>
                    :
                    <p></p>
                }
                {
                    user ?<Button className = "Button-Primary" variant="contained" color="primary" onClick={signOut}>Sign out </Button>
                    :
                    <Button className = "Button-Blanco" variant="contained" color="primary"  onClick={signInWithGoogle}></Button>
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
})(googleLogin); */