import './Tache.scss';
import IconButton from '@mui/material/IconButton';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

export default function Tache({texte, dateModif}) {
  return (
    <div className="Tache">
      <IconButton color="success">
        <CheckCircleIcon />
      </IconButton>
      <span className="texte">{texte}</span>
      <span className="date">{dateModif}</span>
      <IconButton color="error">
        <RemoveCircleIcon />
      </IconButton>
    </div>
  );
}