const Pagination = ({totalPages,currentPage, handlePageChange}) => {
    return (
        <div className='text-center'>
            {Array.from({length:4},(_,i)=>(
                <button 
                className={`mx-1 px-3 py-1 rouded ${currentPage===i+1? "bg-gray-400" :  "bg-gray-200" }`} 
                key={i}
                onClick={()=>handlePageChange(i+1)}>
                    {i+1}
                </button>
            ))}
        </div>
    );
};

export default Pagination;