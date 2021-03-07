import React from 'react'
import styled from 'styled-components'
import SendIcon from '@material-ui/icons/Send'

function ChatInput() {
    return (
        <Container>
            <InputContainer>
            <form action="">
                <input type="text" placeholder = "Message here..."/>
                <SendButton>
                    <SendIcon />
                </SendButton>
            </form>
            </InputContainer>
        </Container>
    )
}

export default ChatInput

const Container = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 24px;

`

const InputContainer = styled.div`
    border: 1px solid #8D8D8E;
    border-radius: 4px;

    form {
        display: flex;
        height: 42px;
        align-items: center;
        padding-left: 10px;        
    }

    input {
        border: none;
        flex: 1;
        //1 means it's the most important component
        font-size: 14px;
    }

    input:focus {
        outline: none;
    }
`

const SendButton = styled.div`
    background: #007a5a;
    border-radius: 2px;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 6px;
    color: white;
    cursor: pointer;

    .MuiSvgIcon-root {
        width: 18px;
    }

    :hover {
        background: #148567;
    }
    
`