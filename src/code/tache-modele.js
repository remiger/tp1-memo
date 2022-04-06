import { bdFirestore } from "./init";
import { getDocs, collection, addDoc, Timestamp, getDoc } from "firebase/firestore";

/**
 * Obtenir tous les taches d'un utilisateur
 * @param {string} idUtilisateur Identifiant Firebase de l'utilisateur connecte
 * @returns {Promise<any[]>} Promesse avec le tableau des taches lorsque complete
 */
export async function lireTout(idUtilisateur){
    return getDocs(collection(bdFirestore, 'memo', idUtilisateur, 'taches')).then(
        res => res.docs.map(doc => ({id: doc.id, ...doc.data()}))        
    )
}

export async function creer(idUtilisateur, tache){
    // On ajoute dateModif a l'objet
    const timestamp = new Date();
    tache.dateModif = timestamp.toLocaleDateString('fr', { 
        year:"numeric", 
        month:"long", 
        day:"numeric"}) 
        + ' à ' + timestamp.toLocaleTimeString('fr', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
    
    let coll = collection(bdFirestore, 'memo', idUtilisateur, 'taches');
    let refDoc = await addDoc(coll, tache);
    return await getDoc(refDoc);
}
