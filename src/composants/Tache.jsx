import './Tache.scss';

export default function Tache({texte, dateModif}) {
  return (
    <div className="Tache">
      Basculer
      <span className="texte">{texte}</span>
      <span className="date">{dateModif}</span>
      Supprimer
    </div>
  );
}