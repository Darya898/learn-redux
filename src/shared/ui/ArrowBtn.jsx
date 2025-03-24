
const ArrowBtn = (props) => {
    const {getClick,disabled,flag}=props;
    return (
        <button onClick={getClick} disabled={disabled}>
            {  flag=='left'? (disabled?
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.75 14L5.25 14M5.25 14L13.125 21.875M5.25 14L13.125 6.125" stroke="#cccccc57"
                      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>:
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.75 14L5.25 14M5.25 14L13.125 21.875M5.25 14L13.125 6.125" stroke="white" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round"/>
            </svg>)
            :
            disabled?
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.75 5.25L24.5 14M24.5 14L15.75 22.75M24.5 14H3.5" stroke="#cccccc57" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round"/>
            </svg>:
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.75 5.25L24.5 14M24.5 14L15.75 22.75M24.5 14H3.5" stroke="white" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            }

        </button>
    );
};

export default ArrowBtn;