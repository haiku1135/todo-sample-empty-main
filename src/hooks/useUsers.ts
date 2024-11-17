import { ChangeEvent, useMemo, useState } from 'react';

type User = {
  name: string;
  age: number;
};

const INITIAL_USERS: User[] = [
  { name: 'Alice', age: 22 },
  { name: 'Bob', age: 23 },
  { name: 'Charlie', age: 44 },
  { name: 'David', age: 55 },
];
type UseUsers = () => {
  userName: string;
  userAge: string;
  handleChangeUserName: (e: ChangeEvent<HTMLInputElement>) => void;
  handleChangeUserAge: (e: ChangeEvent<HTMLInputElement>) => void;
  handleAddUser: () => void;
  filteredUsers: User[];
  query: string;
  handleChangeQuery: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const useUsers: UseUsers = () => {
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState(INITIAL_USERS);
  const handleChangeUserName = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };
  const handleChangeUserAge = (e: ChangeEvent<HTMLInputElement>) => {
    setUserAge(e.target.value);
  };
  const handleChangeQuery = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };
  const handleAddUser = () => {
    if (!Number(userAge)) {
      return;
    }

    if (!userName) {
      return;
    }

    const newUser: User = {
      name: userName,
      age: Number(userAge),
    };
    setUsers((prevState) => [...prevState, newUser]);
    setUserName('');
    setUserAge('');
  };

  const filteredUsers = useMemo(() => {
    return users.filter((user) => user.name.toLowerCase().includes(query.toLowerCase()));
  }, [users, query]);

  return {
    userName,
    userAge,
    handleChangeUserName,
    handleChangeUserAge,
    handleAddUser,
    filteredUsers,
    query,
    handleChangeQuery,
  };
};
