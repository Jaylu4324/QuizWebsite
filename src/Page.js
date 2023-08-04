import Quiz from "./Quiz";
import Quizlogin from "./Quizlogin";
import Report from "./Report";
function Page(props){
    if(props.page==1){
        return(<Quizlogin changePage={props.changePage} font={props.font} pageBg={props.pageBg}/>)
    
    }else if(props.page==2){
        return(<Quiz changePage={props.changePage} font={props.font} pageBg=
            {props.pageBg}/>)
    }else{
        return(<Report font={props.font} pageBg={props.pageBg}/>)
    }

}

export default Page;