const data=[
    {Image:"",price:"500/-"},
    {Image:"",price:"600/-"},
    {Image:"",price:"700/-"},   
]
function Book(props){
const image=React.createElement("img",
                                      {src:props.Image,
                                      width:"75px",
                                      height:"75px",style:{margin:"auto"}});
   const h2=React.createElement("h2",{color:"red"},"Price: " + props.price);
   const child=React.createElement("div",{className:"card"},[image,h2]);
   return child;
}

    const booklist=React.createElement("div",{className:"booklist"},
        data.map((b)=>{
            return Book(b);
        }));

const booklist=React.createElement("div",{id:"book-list",className:"book-list"},child);
const parent=document.getElementById("root");
ReactDOM.render(booklist,parent);