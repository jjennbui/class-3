import data from '../data/'

export default function About() {
    return(
        <div>About Page</div>


        <div className={StyleSheet.grif}></div>
        <div>Computing Degrees:</div>
        {
          information && information.map((info, index) => {
            if(info.department.toLowerCase () == "computing") {
            return(
              <Card key={index} degree={info.employee} colour="blue" font="20px"/>
            )
            }
          })
        }



    )
}

