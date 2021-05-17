import React, { useCallback, useEffect, useState } from 'react';
import { getCats } from '../../api';
import { ICat } from '../../api';
import { Sex } from '../../enums';

const Cats: React.FC = () => {
  let [catsList, setCatsList] = useState<ICat[]>([]);
  const getCatsByAsync = async () => {
    let cats = await getCats();
    setCatsList(cats);
  }
  useEffect(() => {
    console.log('mounted')
    getCatsByAsync();
    return function () {
      console.log("destory")
      setCatsList([]);
    }
  }, [])
  return <>
    <h1>这是 hooks component</h1>
    <ul>
      <h2>Male</h2>
      {
        catsList.filter(cat => cat.gender === Sex.MALE).map(cat => cat.name).sort().map((name, index) => <li key={index}>{name}</li>)
      }
    </ul>
    <ul>
      <h2>Female</h2>
      {
        catsList.filter(cat => cat.gender === Sex.FEMALE).map(cat => cat.name).sort().map((name, index) => <li key={index}>{name}</li>)
      }
    </ul>
  </>
}

export default Cats;