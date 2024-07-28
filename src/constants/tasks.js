import { v4 as uuidv4 } from 'uuid';

export const TASKS = [
  {
    id: uuidv4(),
    title: 'FSW 1',
    description: 'Terminar aula do FSW Trips',
    time: 'morning',
    status: 'done',
  },
  {
    id: uuidv4(),
    title: 'FSW 5',
    description: 'Terminar aula do FSW Barber',
    time: 'morning',
    status: 'done',
  },
  {
    id: uuidv4(),
    title: 'Treinar',
    description: 'Treinar o cerebro',
    time: 'afternoon',
    status: 'in_progress',
  },
  {
    id: uuidv4(),
    title: 'Ler',
    description: 'Ler um capítulo do livro de programação',
    time: 'afternoon',
    status: 'in_progress',
  },
  {
    id: uuidv4(),
    title: 'Revisar Código',
    description: 'Revisar o código do projeto do trabalho',
    time: 'evening',
    status: 'not_started',
  },
  {
    id: uuidv4(),
    title: 'Reunião de Equipe',
    description: 'Participar da reunião de equipe semanal',
    time: 'evening',
    status: 'not_started',
  },
];
