import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { app } from '@/lib/firebase_app';

const auth = getAuth(app)
const db = getFirestore(app);

export {
    app,
    auth,
    db
}
