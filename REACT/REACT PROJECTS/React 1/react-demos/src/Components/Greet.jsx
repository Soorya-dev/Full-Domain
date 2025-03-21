function Greet() {
    const nname = "alice";
    const day = new Date().getDate();
    const Users = [
        { id:1,name: "Alice", age: 25 },
        { id:2,name: "Bob", age: 30 },
        { id:3,name: "Charlie", age: 35 },
    ]
    return (
        <div>
             {Users.map((user)=>(
                <div key={user.id}>
                    <h1>Name:{user.name}</h1>
                    <h1>age:{user.age}</h1>
                </div>
                  ) )} 
            <div>
                <h2>Hello {nname}</h2>
                <p>Today is {day}</p>
            </div>
        </div>
                    
    )
};
export default Greet;