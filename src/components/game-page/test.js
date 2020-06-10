
  const test = { dog1: 1, dog2: 2, dog3: 3 }

  const func = obj => {
      return obj;
}

const { dog1, ...otherDogs } = func(test)
console.log(otherDogs)


const array = [1,2,3,4,5,6,7]
const [first, second, ...others]
