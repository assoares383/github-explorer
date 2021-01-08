import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import logoImg from '../../assets/images/github-explorer.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState([]);

  function handleAddRepository() { }

  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios do Github</Title>

      <Form>
        <input
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
          placeholder="Digite o nome do repositorio"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <Link to="/">
          <img
            src="https://avatars1.githubusercontent.com/u/15836394?s=460&u=70673f20d41e1ee784577c36affb639d453a3552&v=4"
            alt="Alexandre Soares"
          />
          <div>
            <strong>assoares383/clean-react</strong>
            <p>
              ReactJS project with Typescript and Hooks, using TDD, Clean
              Architecture, Design Patterns and SOLID
            </p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Repositories>
    </>
  );
};

export default Dashboard;
