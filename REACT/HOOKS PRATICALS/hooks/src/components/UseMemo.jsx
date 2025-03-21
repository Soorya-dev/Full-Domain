import React, { useMemo, useRef, useState } from 'react'

const UseMemo = () => {
    const [number,setNumber]=useState(0)
    
    const Square=((num)=>{
        console.log('Calculating square...');
        return num*num
    })
    const result=useMemo(()=>{return Square(number)},[number])
  return (
    <>
    <input type="number" value={number} onChange={(e)=>{setNumber(e.target.value)}}
    placeholder='Enter Number to find Square'/>
    <p> Square of {number} is {result}</p>
    </>
  )
}
const FilteredList = () => {
    const [filter, setFilter] = useState('');
    const items = ['apple', 'banana', 'grape', 'orange', 'pineapple', 'watermelon'];

    const filteredItems = useMemo(() => {
        console.log('Filtering items...');
        return items.filter((item) => item.toLowerCase().includes(filter.toLowerCase()));
    }, [filter]);

    return (
        <>
            <h1>Filtered List Example</h1>
            <input
                type="text"
                placeholder="Filter items"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            />
            <ul>
                {filteredItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </>
    );
};

// Example 3: Avoiding Re-Renders in a Component
const ChildComponent = ({ number }) => {
    console.log('Child component rendered');
    return <p>Number: {number}</p>;
};

const AvoidReRenders = () => {
    const [count, setCount] = useState(0);
    const [otherCount, setOtherCount] = useState(0);

    const memoizedChild = useMemo(() => <ChildComponent number={count} />, [count]);

    return (
        <>
            <h1>Avoid Re-Renders Example</h1>
            {memoizedChild}
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
            <button onClick={() => setOtherCount(otherCount + 1)}>Increment Other Count</button>
        </>
    );
};



const Example = () => {
    const square=((num)=>{
        return num*num
    },[num])
    let result=useMemo((square(5)),[])
  return (
    <div>
        <h1>square is {result}</h1>
    </div>
  )
}



export { FilteredList, AvoidReRenders, };

export default UseMemo