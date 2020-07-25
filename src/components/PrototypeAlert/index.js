import React from 'react';
import { FaExclamationCircle } from 'react-icons/fa';

const PrototypeAlert = () => (
  <div className="alert alert-info">
    <div className="d-flex align-items-center mb-2">
      <FaExclamationCircle />
      <p style={{ fontWeight: '500', lineHeight: '1.2rem', margin: '0 0 0 5px' }}>Aviso</p>
    </div>
    <p style={{
      fontSize: '.95rem',
      textAlign: 'justify',
      margin: 0
    }}>
      Este é o protótipo de um projeto educacional do curso de Ciência da Computação na Faculdade de Ciências Aplicadas e Sociais de Petrolina - FACAPE. Nenhum dado informado será armazenado pela plataforma.
    </p>
  </div>
);

export default PrototypeAlert;
