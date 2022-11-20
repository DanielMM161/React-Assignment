import './styles/Card.css';
import Button from './Button';

const Card = ({name, userName, webSite, id}) => {
  const getLetterName = () => name.charAt(0).toUpperCase()
  return (
    <div className="card" key={id}>
      <div className="container">
        <div className="circle">
          {getLetterName()}
        </div>
        <h3><b>{name}</b></h3>
        <p>@{userName}</p>
        <a href="webstie">https://{webSite}</a>
        <Button id={id}/>
      </div>
    </div>
  );
}

export default Card