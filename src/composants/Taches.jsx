import { useEffect, useState } from 'react';
import Tache from './Tache';
import './Taches.scss';
import {lireTout, fctDate} from '../code/tache-modele';

export default function Taches({utilisateur, gererAjoutTache, taches, setTaches}) {
    // Lire les taches de lutilisateur connecte dans Firestore
    useEffect(
      () => lireTout(utilisateur.uid).then(
        lesTaches => setTaches(lesTaches)
      )
      , [utilisateur, setTaches]
    );
  

  return (
    <section className="Taches">
      <form onSubmit={e => {e.preventDefault(); gererAjoutTache(e.target.elements[0].value);}}>
        <input 
          type="text"   
          placeholder="Ajoutez une tâche ..." 
          name="texteTache"
          autoComplete="off" 
        />
      </form>
      <div className="liste-taches">
        {taches.map(tache => <Tache key={tache.id} {...tache} />)}
      </div>
    </section>
  );
}