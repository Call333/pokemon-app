import { getFirestore} from 'firebase/firestore'

import { app } from './../../firebase/autentication/Auth'

export const db = getFirestore(app)