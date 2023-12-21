import React from 'react';
import tdcStyle from './scss/todoContainer.module.scss'
import ReactLoading from 'react-loading'

const Loading: React.FC<{loading:boolean}> = ({loading}) => {
    console.log(loading)
    return (
        <div className={tdcStyle.loadingContainer} style={loading ? {display:'grid'} : {display:'none'}}>
            <ReactLoading type={'spinningBubbles'} color={'#08356e'} height={'7vw'} width={'7vw'} />
        </div>
    );
}

export default Loading;