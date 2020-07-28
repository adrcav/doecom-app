import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { FaMapMarkerAlt, FaCalendarAlt, FaEye } from 'react-icons/fa';

import { Container } from './styles';

const MyCause = ({ data }) => {
  const history = useHistory();

  return (
    <Container>
      <div className="cause-avatar" style={{ backgroundImage: `url(${data.account.avatar})` }}></div>
      <div className="cause-account">
        <div className="cause-info">
          <NavLink to={`/cause/${data._id}`}>
            <h2>{data.account.name}</h2>
          </NavLink>
          <div className="cause-list">
            <li>
              <p>
                <FaMapMarkerAlt style={{ marginRight: '4px', height: '.8rem' }} />
                <span>{data.city}</span> - <span>{data.state}</span>
              </p>
            </li>
            <li>
              <p>
                <FaCalendarAlt style={{ marginRight: '4px', height: '.8rem' }} />
                <span>28/08/2020</span>
              </p>
            </li>
            <li>
              <p>
                <FaEye style={{ marginRight: '4px', height: '.8rem' }} />
                <span>8 acessos</span>
              </p>
            </li>
          </div>
        </div>
        <div className="cause-actions">
          <p onClick={() => history.push(`/cause/${data._id}/edit`)}>Editar</p>
        </div>
      </div>
    </Container>
  );
};

export default MyCause;
