import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/images/github-explorer.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/dashboard">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars0.githubusercontent.com/u/15836394?s=88&u=70673f20d41e1ee784577c36affb639d453a3552&v=4"
            alt="Alexandre Soares"
          />
          <div>
            <strong>assoares383/proffy</strong>
            <p>descroção do repositório</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <strong>Stars</strong>
          </li>
          <li>
            <strong>48</strong>
            <strong>Forks</strong>
          </li>
          <li>
            <strong>67</strong>
            <strong>Issues Abertas</strong>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link key="" to="/">
          <div>
            <strong>1</strong>
            <p>2</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
