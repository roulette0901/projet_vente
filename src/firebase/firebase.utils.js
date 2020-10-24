import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config={
        apiKey: "AIzaSyDQ7KjPZ4K7wPrvD9rwkEtKdBh_x_3hTFI",
        authDomain: "projet-vente-b56a6.firebaseapp.com",
        databaseURL: "https://projet-vente-b56a6.firebaseio.com",
        projectId: "projet-vente-b56a6",
        storageBucket: "projet-vente-b56a6.appspot.com",
        messagingSenderId: "679012817054",
        appId: "1:679012817054:web:d6522c2ac4ef9195cec38f",
        measurementId: "G-WL7XQFLWCF"
}

firebase.initializeApp(config)
export const auth = firebase.auth()

export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()

provider.setCustomParameters({ prompt: 'select_account' })

export const loginAvecGoogle = () => auth.signInWithPopup(provider)



export default firebase