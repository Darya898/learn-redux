import {useEffect} from "react";

const UseOnClickOutside=(clickOutside,ref)=>{
    useEffect(() => {
        function checkClick(event){
            console.log("event.target",event.target);
            console.log("ref.current",ref.current);
            console.log("ref.current",ref.current.children);
            if(event.target!=ref.current){
                clickOutside();
            }
        }
        document.addEventListener('mousedown',checkClick);
        return ()=>{
            document.removeEventListener('mousedown',checkClick)
        }
    }, []);
    return ;

}
export default UseOnClickOutside;