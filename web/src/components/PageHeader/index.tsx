import React from 'react';
import { Link } from 'react-router-dom';

import backicon from '../../assets/images/icons/back.svg';
import logoImg from '../../assets/images/logo.svg';

import './styles.css';

interface Props {
  title: string;
  description?: string;
}

const PageHeader: React.FC<Props> = ({ title, children, description }) => {
  return (
    <header className="page-header">
    <div className="top-bar-container">
        <Link to="/">
            <img src={backicon} alt="voltar" />
        </Link>
        <img src={logoImg} alt="proffy" />
    </div>

    <div className="header-content">
        <strong>{title}</strong>
        { description && <p>{description}</p> }
        {children}
    </div>
</header>
  );
}

export default PageHeader;