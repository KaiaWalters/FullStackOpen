

const Section = ({children, isRow}) => {
    const direction = isRow ? "column": "row"
    return(
      <style={flexDirection: {direction} }>
         {children}
      </>



      //seion should provide the option to either have a column or row 
      //standard padding and border 
      // different colors for different sections 
      // minor or major section heading 
      //take in children
      // font color should be inherited
    )
}

export default Section;