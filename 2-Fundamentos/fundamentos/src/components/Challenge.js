export const Challenge = () => {
    const v1 = 10; 
    const v2 = 50; 

  return (
    <div>
        <p>Valor 1: {v1}</p>
        <p>Valor 1: {v2}</p>
        <button onClick={()=> console.log(v1+v2)}>Somar</button>
    </div>
  )
}
