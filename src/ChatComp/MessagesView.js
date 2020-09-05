import React from 'react';
import Message from './Message';
import MessagesContainer from './Nav.module.css';

const MessagesView=(props)=>{
    return(
        <div className={MessagesContainer.messagesView}>
            <Message 
                authorFirst={'Julian'} 
                authorLast={'Herbst'} 
                message={'Cum sociis natoque pentabius et magnis dis parturient montes, nascetur'}
            />
            <Message 
                authorFirst={'Mariuz'} 
                authorLast={'Jaders'} 
                message={`
                    Nullam id dolor id nibh ultricies vehicula ut id elit. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam porta sem malesuada magna mollis euismod.
                `}
            />
            <Message 
                authorFirst={'Kevin'} 
                authorLast={'Kalde'} 
                message={`
                    Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
                    ut fermentum massa justo sit amet risus. Donec sed odio dui.
                `}
            />
            <Message 
                authorFirst={'Mariuz'} 
                authorLast={'Jaders'} 
                message={`
                    Nullam id dolor id nibh ultricies vehicula ut id elit. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam porta sem malesuada magna mollis euismod. 
                `}
            />
            <Message 
                authorFirst={'Julian'} 
                authorLast={'Herbst'} 
                message={`
                    Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                    Fusce dapibus, tellus ac cursus commodo, torotr mauris condimentum nibh, ut.
                `}
            />
        </div>
    );  
}

export default MessagesView;