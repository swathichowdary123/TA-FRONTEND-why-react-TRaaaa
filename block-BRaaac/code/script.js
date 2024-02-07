let input=document.querySelector(`input[type="text"]`);
let rootElm=document.querySelector('.movies_list');
let allMovies=[
    {
        name:'forest Gump',
        watched:false,
    },
    {
        name:'inception',
        watched:true,
    },
];
input.addEventListener('keyup',(event)=>{
    if(event.keyCode===13){
        allMovies.push({
            name:event.target.value,
            watched:false,
        });
        event.target.value='';
        createMovieUI(allMovies,rootElm);
    }
  });
  function handleChange(event){
    let id=event.target.id;
    allMovies[id].watched=!allMovies[id].watched;
    createMovieUI(allMovies,rootElm);
  }
    function createMovieUI(data,root){
        root.innerHTML='';
        data.forEach((movie,i) => {
            let li=createElement('li');
            let button=document.createElement('button');
            button.id=i;
            button.innerText=movie.watched ? 'watched': 'to watched';
            button.addEventListener('click',handleChange);
            let label=document.createElement('label');
            label.for=i;
            label.innerText=movie.name;
            li.append(label,button);
            rootElm.append(li);
        });
    }
    createMovieUI(allMovies,rootElm);
    function createElement(type,attr={},...children){
        let element=document.createElement(type);
        for(let key in attr){
            if(key.startsWith('data-')){
                element.setAttribute(key,attr[key]);
            }
            else{
                element[key]=attr[key];
            }
        }
        children.forEach((child)=>{
            if(typeof child==='object'){
                element.append(child);
            }
            if(typeof child==='string'){
                let node=document.createTextNode(child);
                element.append(node);
            }
        })
        return element;
    }
