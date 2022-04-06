import './Appli.scss';
import logo from '../images/memo-logo.png';
import Controle from './Controle';
import Taches from './Taches';
import Accueil from './Accueil';
import Utilisateur from './Utilisateur';
import { useState, useEffect } from 'react';
import { observerEtatConnexion } from '../code/utilisateur-modele';
import {creer} from '../code/tache-modele';

export default function Appli() {
  // Etat 'utilisateur'
  const [utilisateur, setUtilisateur] = useState(null);

  // Etat des 'taches' de l'utilisateur connecte
  const [taches, setTaches] = useState([]);

  // Fonction gerer l'ajout d'une tache
  function gererAjoutTache(texte){
    console.log(texte);
    // Code Firestore...
    creer(utilisateur.uid, {
      texte: texte
    }).then(
      doc => setTaches([{id: doc.id, ...doc.data()}, ...taches])
    )
  }

  // Surveiller l'etat de la connexion Firebase Auth
  useEffect(() => observerEtatConnexion(setUtilisateur), []);

  return (
    // 1)  Si un utilisateur est connecté : 
    utilisateur ?
      <div className="Appli">
        <header className="appli-entete">
          <img src={logo} className="appli-logo" alt="Memo" />
          <Utilisateur utilisateur={utilisateur} />
        </header>
        <Taches utilisateur={utilisateur} gererAjoutTache={gererAjoutTache} taches={taches} setTaches={setTaches} />
        <Controle />
      </div>
    :
    // 2) Par contre si aucun utilisateur n'est connecté, on affiche plutôt le composant suivant : 
      <Accueil />
  );
}
