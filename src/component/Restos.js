import React from 'react'

const Restos = ({ restos }) => {
    // let i = 0;
    
    const restoList = restos.map(restos => {
        return (
            <div className="collection-item" key={restos.id}>
                <span onClick={() => next(restos.id)}>{restos.text}</span>
            </div>
        )
    })
    const menu1 = restos.map(restos => {
        return (
            <div className="collection-item" key={restos.id}>
                <span>{restos.text}</span>
            </div>
        )
    })
    const menu2 = restos.map(restos => {
        return (
            <div className="collection-item" key={restos.id}>
                <span>{restos.text}</span>
            </div>
        )
    })

    
    return (
        <div className="todos collection">
            {restoList}
        </div>
    )
}

export default Restos