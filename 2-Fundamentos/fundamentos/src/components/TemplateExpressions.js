export const TemplateExpressions = () => {

    const name = "Lucas"; 
    const data = {job: 'programmer', age: 20}

  return (
    <div> 
        <p>Seu nome é: {name} </p>
        <p>Você atua como {data.job}</p>
        <p>{4 + 4}</p>
        <p>{console.log("Ola este é um template expression em JSX")}</p>  
    </div>
  )
}
