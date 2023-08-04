import react, { useState } from "react";
import { jsPDF } from "jspdf";

function Quiz(props) {
    const questions = [{ id: 1, questions: "HTML stands for -?", option: ["HighText Machine Language", "HyperText and links Markup Language", "HyperText Markup Language", "None"], correct: "HyperText Markup Language" },
    { id: 2, questions: "The correct sequence of HTML tags for starting a webpage is -?", option: ["Head, Title, HTML, body", "HTML, Body, Title, Head", "HTML, Head, Title, Body", "None"], correct: "HTML, Head, Title, Body" },
    { id: 3, questions: "Which of the following element is responsible for making the text bold in HTML?", option: ["<pre>", "<a>", "<b>", "<br>"], correct: "<b>" },
    { id: 4, questions: " Which of the following tag is used for inserting the largest heading in HTML?", option: ["<h3>", "<h1>", "<h5>", "<h6>"], correct: "<h1>" },
    { id: 5, questions: " Which of the following tag is used to insert a line-break in HTML?", option: ["<br>", "<a>", "<pre>", "<b>"], correct: "<br>" }]
    const [ans,setAns]=useState({});
    const [ans1,setAns1]=useState(0)
    const storeAns=(e)=>{
        const{name}=e.target
        setAns({...ans,[name]:e.target.value})

    }
    
    let total=questions.length;
    const calculate=(e)=>{
       
        e.preventDefault();
        let score=0;
        questions.forEach((ele,index)=>{
            console.log(ele.correct,ans[ele.id])
            if(ele.correct==ans[ele.id]){
                score++;
            }
        })
        setAns1(score)
        console.log(ans1)
        // localStorage.setItem("result",score);
        // setAns1(score)
        // console.log(score)

        

    }
    const Download=()=>{
        let score=localStorage.getItem("result")
        let name =localStorage.getItem("Name")

        const doc = new jsPDF();
        doc.text(`${name} Your Score is ${score}`,10,10)
        
        doc.save(`${name}.pdf`)

    }
    console.log(ans1)
    return (
        <>
            <form className={`container-fluid   text-${props.font}`} style={{ backgroundColor: props.pageBg }}>
                {questions.map((ele) => (<div>
                    <h3 className="container px-0">({ele.id}) {ele.questions}</h3>
                    {ele.option.map((el) =>{

                   return (
                        <div className="container form-check px-5">
                            <input className="form-check-input " type="radio" name={ele.id} value={el}  onChange={(e)=>{storeAns(e)}} />
                            <label className="form-check-label" for={el}>
                                {el}
                            </label>
                        </div>)
                    }

                    )}

                </div>))}

           


<div className="container px-0 pb-4 pt-3">
<button className=" btn btn-primary col-md-3 col-12" onClick={(e)=> {  calculate(e) }}>Submit</button>
<button className=" btn btn-primary col-md-3 col-12 mx-md-3   my-2 my-md-0" type="reset">Reset</button>
<button type="button" class="btn btn-outline-primary col-12 my-md-0 my-2 col-md-3" onClick={()=>{Download()}}>Download</button>

</div>

           
            </form>
        </>
    )

}
export default Quiz;