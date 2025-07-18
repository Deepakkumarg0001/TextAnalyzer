import React from 'react'


export default function About(props) {
    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })
    //  const [btnText, setBtnText] = useState("Enable Dark Mode")

    // const toggleStyle = ()=>{
    //     if(myStyle.color === 'white'){
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setBtnText("Enable Dark Mode")
    //     }
    //     else{
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black'
    //         })
    //         setBtnText("Enable Light Mode")

    //     }
    // }
    
  return (
   <>
    <div className='container my-3' style={{color: props.mode==='dark'?'white':'#272152'}}>
        <h1 >About TextAnalyzer</h1>
        <h5>Welcome to <strong>TextAnalyzer</strong> – your one-stop solution for quick and efficient text manipulation!</h5><br />
        <h4>🔍 What is TextAnalyzer?</h4>
        <h6 className='container mx-4'>TextAnalyzer is a powerful yet simple web-based tool designed to help you manipulate and analyze your text content with ease. Whether you're a student, professional writer, developer, or just someone dealing with lots of text, TextAnalyzer streamlines your workflow by offering handy tools all in one place.</h6><br />
        <h4>✨ Features</h4>
        <h6 className='container mx-4'>
            1. Convert to UPPERCASE – Instantly transform your entire text to uppercase. <br /><br />
            2. Convert to lowercase – Switch everything to lowercase for consistency. <br /><br />
            3. Sentence Case Conversion – Automatically capitalize the first letter of each sentence. <br /><br />
            4. Copy Text – Copy your processed text to clipboard with a single click. <br /><br />
            5. Remove Extra Spaces – Clean up unnecessary spaces for neater formatting. <br /><br />
            6. Clear Text – Start fresh by removing all current text. <br /><br />
            7. Text Summary – Get insights into:
        </h6>
        <h6 className='container mx-5'>
            A. Word count <br /><br />
            B. Character count <br /><br />
            C. Sentence count <br /><br />
            D. Estimated reading time <br /><br />
        </h6><br />
        <h4>🌗 Light & Dark Mode</h4>
        <h6 className='container mx-4'>Enjoy a comfortable user experience with our light and dark mode toggle to suit your environment and reduce eye strain.</h6><br />

        <h4>🔒 Privacy First</h4>
        <h6 className='container mx-4'>TextAnalyzer runs entirely in your browser. We don’t store or share any of your data. Your content stays private and secure.</h6><br />

        <h4>Built with ❤️ using React by Deepak kumar</h4>  
    </div>
    </>
  )
}

