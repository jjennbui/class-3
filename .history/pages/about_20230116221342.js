import data from '../data/'

export default function About() {
    return(
        <div>About Page</div>
    )
}

<div>Computing Degrees:</div>
{
  information && information.map((info, index) => {
    if(info.department.toLowerCase () == "computing") {
    return(
      <Card key={index} degree={info.degree} colour="blue" font="20px"/>
    )
    }
  })
}