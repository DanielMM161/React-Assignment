import './styles/DetailCard.css'

const DetailCard = ({name, username, email, phone, company, webstie, address}) => {


  return (
    <ul className='list-container'>
      <p><b>- name:</b> {name}</p>
      <p><b>- username:</b> {name}</p>
      <p><b>- email:</b> {email}</p>
      <p><b>- phone:</b> {phone}</p>
      <p><b>- company:</b> {company.name}</p>
      <p><b>- webstie:</b> {webstie}</p>
      <p><b>- address:</b> </p>
      <ul>
        <li><b>street:</b> {address.street}</li>
        <li><b>suite:</b> {address.suite}</li>
        <li><b>city:</b> {address.city}</li>
        <li><b>zipcode:</b> {address.zipcode}</li>
      </ul>
    </ul>
  );

}

export default DetailCard