    import React from 'react'
    import SingleTextCard from './SingleTextCard'
    import Button from 'react-bootstrap/Button';

    const AllTextCards = (props) => {
    const {texts, onDeleteAll, onCopyAll, hasDeletedAll, hasCopiedAll, handleDeleteText } = props
    return (
        <>
        { (
                <div className='d-flex justify-content-center gap-2 my-3 py-5'>
                    <Button variant={hasCopiedAll ? "success" : "primary"}
                    onClick={onCopyAll}
                    
                    >{hasCopiedAll ? "Copied All!" : "Copy All"}</Button>
                    <Button 
                      variant="danger"
                      onClick={onDeleteAll}
                    >
                      {hasDeletedAll ?   "Deleted All!": "Delete All" }
                    </Button>
                </div>
            )}
        <div className='d-flex justify-content-center flex-wrap gap-4'>
                {[...texts].reverse().map((textObj, index) => (
                <SingleTextCard textObj={textObj} key={index} handleDeleteText={handleDeleteText}  />
            ))}
        </div>
        
        </>

    )
    }

    export default AllTextCards